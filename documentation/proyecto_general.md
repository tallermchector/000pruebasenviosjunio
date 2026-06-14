# Proyecto General: Dos Ruedas Pro

## Resumen Ejecutivo de Arquitectura

Dos Ruedas Pro es una solución avanzada de software orientada a la logística y mensajería de última milla. Está construida sobre una arquitectura full-stack robusta que prioriza la velocidad, la experiencia de usuario y la eficiencia computacional.

- **Frontend y Framework Core**: Utiliza **Next.js 19** con el nuevo **App Router**. Esto habilita renderizado híbrido (Server-Side Rendering, Static Site Generation y Client Components) de manera optimizada y modular.
- **Tipado Estricto**: Todo el código se escribe en **TypeScript**, garantizando un alto nivel de fiabilidad y autocompletado en el desarrollo.
- **Estilos y UI**: El sistema de estilos se rige por **Tailwind CSS**, permitiendo una configuración ágil de un sistema de diseño propio basado en utilidades, en conjunto con componentes atómicos extraídos del ecosistema **shadcn/ui**.
- **Gestión de Datos y ORM**: La capa de abstracción sobre la base de datos se maneja mediante **Prisma ORM**, operando sobre una instancia de **PostgreSQL**. Todo el esquema de datos y las relaciones (clientes, órdenes, repartidores, etc.) están estrictamente tipados e integrados.
- **Lógica de Servidor**: A través de las **React Server Actions** introducidas en el App Router de Next.js, se centraliza la mutación de datos (creación de órdenes, validaciones) sin requerir el mantenimiento de una API REST paralela.
- **Mapas y Geolocalización**: El proyecto contiene rutinas avanzadas para transformar direcciones en coordenadas espaciales y calcular rutas terrestres reales consumiendo los servicios de OpenStreetMap y OSRM (Open Source Routing Machine).

---

## Estructura Jerárquica de Carpetas

La organización sigue la separación estándar del App Router complementada con directorios lógicos para encapsular UI y dominios de negocio:

```text
/
├── design-system/             # Archivos fuente (HTML/MD) de las directrices y prototipos base de diseño (landing variations, saas-template).
├── prisma/                    # Archivos referentes a la capa de base de datos.
│   └── schema.prisma          # Definición principal de entidades y relaciones de la BD PostgreSQL.
├── public/                    # Archivos estáticos accesibles públicamente (imágenes, favicons, logos, manifiestos).
├── src/                       # Directorio raíz del código fuente principal.
│   ├── app/                   # Todas las rutas de la aplicación web basadas en Next.js App Router (pages, layouts).
│   │   ├── contacto/          # Vistas relacionadas a contacto.
│   │   ├── cotizar/           # Rutas para el cotizador Express y LowCost.
│   │   ├── nosotros/          # Páginas institucionales (sobre nosotros, FAQ, redes).
│   │   ├── ordenes/           # Archivos backend/Server Actions para las órdenes.
│   │   ├── servicios/         # Rutas de los diferentes servicios brindados.
│   │   └── page.tsx           # Landing page principal.
│   ├── components/            # Todos los componentes de la interfaz, divididos por dominio.
│   │   ├── calculator/        # Componentes que engloban la lógica de cotizaciones interactiva en el cliente.
│   │   ├── homenew/           # Componentes principales del Layout (Header, Footer, Nav, Heroes Animados).
│   │   ├── maps/              # Wrapper para los mapas (Leaflet) a usar en el Frontend.
│   │   └── ui/                # Sistema atómico de componentes UI genéricos y primitivas (proveniente mayormente de shadcn).
│   └── lib/                   # Lógica compartida, helpers, configuraciones globales y utilidades.
│       ├── context/           # Datos estáticos y configuraciones de servicios.
│       ├── maps/              # APIs internas para Geolocalización (Nominatim) y Ruteo (OSRM).
│       └── utils.ts           # Funciones genéricas de utilidad transversal en el Frontend (clases de tailwind, transformaciones).
└── tailwind.config.ts         # Configuración del ecosistema de Tailwind CSS (colores, fuentes, animaciones).
```

---

## Sistema de Diseño

El apartado visual del sitio web destaca por un aspecto técnico, sofisticado y en "Dark Mode" de serie.

### Estilos y Tailwind CSS
- **Modo Oscuro**: Se configura el soporte para `darkMode: ["class"]`, centralizando los estilos en paletas de colores basadas en HSL.
- **Tipografía**: Incorpora el soporte de doble fuente principal a través de Google Fonts y Tailwind:
  - `var(--font-roboto)` para texto genérico y legibilidad limpia (`sans-serif`).
  - `var(--font-orbitron)` para títulos, métricas y branding tecnológico (`monospace`/`display`).
- **Animaciones Complejas**: Define `keyframes` específicos de Tailwind (`accordion-down`, `float`, `fade-up`, `spin-slow`) permitiendo transiciones fluidas desde la configuración central en `tailwind.config.ts`.
- **Variables CSS Globales**: Gestionadas en `src/app/globals.css`, donde se integran variables dinámicas de entorno que Tailwind asimila (`--background`, `--foreground`, `--primary`, etc.).

### Componentes base y shadcn/ui
- **Atómicos y Reutilizables**: Se implementaron numerosas primitivas como `Button`, `Card`, `Accordion`, `Sheet` e `Input` bajo `src/components/ui`.
- **Desacoplamiento**: Estos componentes sirven como la materia prima para formar "Componentes de Dominio" complejos (por ejemplo, el Cotizador usa `Input`, `Button`, y `Card` como base).
- **Consistencia Visual**: Este enfoque asegura que un cambio en las variables globales de Tailwind impacte en todos los componentes simultáneamente.

---

## Capa de Datos (Resumen de Modelos Prisma)

La persistencia de datos está unificada en `prisma/schema.prisma` utilizando PostgreSQL. Los modelos claves de la aplicación logística son:

1. **`Client`**:
   - Registro de los usuarios finales de la plataforma o remitentes de los pedidos.
   - Contiene información de contacto (nombre, teléfono, email) y coordenadas base (`addressLat`, `addressLng`).

2. **`Order`**:
   - Es el modelo core transaccional que abarca la solicitud de un envío.
   - Contiene datos tanto del Origen (nombre, dirección, coordenadas) como del Destino.
   - Categoriza el envío a través del enum `ServiceTypeEnum` (EXPRESS, LOW_COST, PUNTO_DE_RETIRO) e indica el progreso en `OrderStatusEnum`.
   - Incorpora campos financieros (`quotedPrice`, `shippingCost`, `totalCost`) y de métrica de rutas (`distanceText`, `durationText`).
   - Tiene relación opcional con un `Client` (quien pide) y un `Repartidor` (quien entrega).

3. **`Repartidor`**:
   - Representa al personal de logística activa.
   - Datos vehiculares (`vehicleType`, `licensePlate`), datos de contacto y estado operativo (`isActive`).

4. **`PriceRange`**:
   - Tabla de configuración para precios dinámicos según distancias preestablecidas.
   - Dependiendo del `serviceType`, evalúa rangos de `distanciaMinKm` y `distanciaMaxKm` para devolver el `precioRango`.

5. **`Etiqueta`**:
   - Modelo específico para el estado en físico/papel del envío.
   - Refleja la gestión interna de despacho para imprimir y rastrear con `orderNumber` y la trazabilidad del estado en camino (`EtiquetaStatus`).

6. **`SocialPost`**:
   - Sistema paralelo diseñado para manejar publicaciones estáticas/dinámicas en redes sociales integradas al sitio, almacenando URL de imagen, plataforma, y datos de interacción (likes/comentarios con generación estocástica de muestra).
