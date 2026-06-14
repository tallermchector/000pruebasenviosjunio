# Lógica, Flujos y Componentes del Sistema

La arquitectura de Dos Ruedas Pro se nutre de una sólida separación de intereses. Los componentes son el pilar de la vista y la lógica se encuentra fuertemente delegada a utilidades y Server Actions.

---

## 1. Índice de Componentes Clave

- **`src/components/ui/` (Primitivas Shadcn y Base Visual)**
  - Son el núcleo reutilizable del proyecto.
  - Destacan: `button.tsx`, `input.tsx`, `form.tsx`, `card.tsx`.
  - Componentes avanzados como `animated-glassy-pricing.tsx`, `background-shader.tsx`, `vertical-cut-reveal.tsx` se encargan de animaciones complejas (micro-interacciones) manteniendo el core lógico limpio.

- **`src/components/calculator/` (Módulo Transaccional)**
  - `express-calculator.tsx` / `lowcost-calculator.tsx`: Actúan como el "Controlador de Vista" del cotizador. Utilizan `react-hook-form` con esquemas de `zod` para validación estricta de las direcciones de los clientes. Se comunican asíncronamente con las Server Actions.
  - `address-autocomplete.tsx`: Componente especializado en interactuar con sugerencias de geolocalización.
  - `route-map.tsx` y `map-features.tsx`: Renderizado y visualización de rutas físicas sobre el mapa del cliente basándose en las coordenadas origen-destino.

- **`src/components/maps/` (Módulo de Renderizado Espacial)**
  - `leaflet-map.tsx`: Un componente dinámico forzado a ser estrictamente "Client Side" (dado que Leaflet requiere el objeto `window`). Visualiza marcadores y traza las polilíneas de ruta entre las direcciones.
  - `map-utils.ts`: Proveedores de algoritmos secundarios para procesar información geométrica en el cliente.

- **`src/components/homenew/` (Estructura de Navegación)**
  - `optimized-header.tsx`: Cabecera principal, responsiva.
  - `mobile-menu.tsx` y `nav-dropdown.tsx`: Gestionan el despliegue del menú y la jerarquía de rutas importada desde la configuración central.

---

## 2. Flujo de Datos Principal (Cotización y Órdenes)

El flujo operativo clave que ocurre en `/cotizar/express` (y lowcost) está diseñado para ser seguro, infalsificable y eficiente:

1. **Interacción del Cliente**: El usuario ingresa una "Calle y Altura" tanto para el punto A (Origen) como para el B (Destino) en el componente Frontend `express-calculator.tsx`.
2. **Validación Zod Front**: React Hook Form evalúa que los campos no estén vacíos y tengan un formato preliminar razonable.
3. **Petición al Servidor (Server Action)**: Se invoca la función asíncrona `quoteShipment({ origin, destination, serviceType })` localizada en `src/app/ordenes/actions.ts`.
4. **Geocodificación (Backend)**: El servidor toma los textos planos y llama a la API de Nominatim de OpenStreetMap (`geocodeNominatim` en `src/lib/maps/nominatim.ts`). Devuelve exactamente la `Latitud` y `Longitud` de ambos puntos.
5. **Ruteo Físico (Backend)**: Con las 4 coordenadas obtenidas, el servidor consulta al OSRM (Open Source Routing Machine) en `src/lib/maps/osrm.ts` para que un algoritmo calcule la distancia *real en calles* (no línea recta) y el tiempo estimado en minutos.
6. **Resolución de Costos (BD Prisma)**:
   - Si la distancia real (ej. 4.5km) cae en el umbral base (hasta 10km), el sistema hace un `.findFirst` sobre el modelo de la BD `PriceRange` buscando el tipo de servicio y el rango kilométrico, retornando el precio oficial guardado.
   - Si se supera el límite de la base de datos, el algoritmo aplica un coste fijo más una métrica de recargo por "kilómetro extra".
7. **Retorno al Cliente**: La función devuelve al Frontend un payload seguro con el Costo Final, la distancia de ruta formateada, el tiempo estimado y las coordenadas.
8. **Map Reveal**: El componente visual recibe la información, actualiza el estado de React, despliega el precio al cliente y pasa las coordenadas al `leaflet-map.tsx` para dibujar el trayecto en la pantalla.

> **Nota:** La creación final de la orden de compra en la base de datos (paso posterior si el cliente acepta) ocurre invocando la acción `saveShipment`, guardando todos los datos, calculando horarios estrictos e insertando el registro final en el modelo `Order` de Prisma.

---

## 3. Utilidades en `src/lib/` y Estandarización

El directorio `/lib` actúa como la columna vertebral de configuración e integración estandarizada:

- **`navigation.ts` y `navigation-admin.ts`**:
  - Exponen arreglos de objetos tipados (`navGroups`) que dictan las URL de todo el sistema, sus nombres y los íconos de `lucide-react`. Esto evita "hardcodear" URLs rotas en los componentes visuales del header.
- **`utils.ts`**:
  - Contiene la función `cn()` fundamental de shadcn/ui. Combina `clsx` y `tailwind-merge` para componer clases CSS de forma dinámica sin que colisionen propiedades opuestas de Tailwind.
- **`prisma.ts`**:
  - Patrón de persistencia (Singleton) de la conexión a la base de datos Prisma. Previene que el hot-reloading de Next.js sature la base de datos con múltiples conexiones activas durante el desarrollo local.
- **`maps/` (`nominatim.ts`, `osrm.ts`, `photon.ts`)**:
  - Proveen la lógica cliente-HTTP (mediante `fetch`) para atacar las APIs geográficas de terceros. Aislarlas aquí garantiza que si se cambia el proveedor de mapas en el futuro, los cambios no afecten la lógica interna de cotización.
- **`context/`**:
  - Almacena diccionarios estáticos que guardan información semántica (ventajas, detalles, Q&A) para cada tipo de servicio, listos para ser consumidos y pintados por la interfaz de usuario en las páginas de `src/app/servicios/`.