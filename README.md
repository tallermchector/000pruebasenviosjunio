# Dos Ruedas Pro - Plataforma de Gestión Logística de Última Milla

Dos Ruedas Pro es una solución de software de alto rendimiento diseñada para la administración y optimización de servicios de mensajería y logística de última milla en la ciudad de Mar del Plata, Argentina. La plataforma permite la gestión de clientes, cálculo de tarifas dinámicas en tiempo real mediante rutas físicas, despacho de órdenes y visualización de etiquetas de entrega.

---

## ⚡ TL;DR (Resumen Técnico)

El proyecto está construido con un stack moderno enfocado en la velocidad de carga y optimización del renderizado:
1. **Framework:** Next.js 19 (App Router) con TypeScript y Tailwind CSS.
2. **Base de Datos:** PostgreSQL administrado a través de [schema.prisma](file:///E:/proyectos/000pruebasenviosjunio/prisma/schema.prisma).
3. **Geolocalización y Ruteo:** Geolocalización de direcciones con OpenStreetMap a través de [nominatim.ts](file:///E:/proyectos/000pruebasenviosjunio/src/lib/maps/nominatim.ts) y ruteo de trayectos físicos reales (distancia en km y tiempo estimado en minutos) con [osrm.ts](file:///E:/proyectos/000pruebasenviosjunio/src/lib/maps/osrm.ts).
4. **Mutación de Datos:** Toda lógica del servidor (cálculo de costos y registro de envíos) se ejecuta mediante React Server Actions en [actions.ts (Órdenes)](file:///E:/proyectos/000pruebasenviosjunio/src/app/ordenes/actions.ts) y [actions.ts (General)](file:///E:/proyectos/000pruebasenviosjunio/src/app/actions.ts).

---

## 📂 Estructura de Carpetas Principal

El proyecto sigue una separación clara entre las páginas (rutas del sistema), los componentes de UI genéricos (primitivas de diseño) y los componentes de negocio adaptados a cada funcionalidad (componentes Custom).

### 1. Páginas de la Aplicación (`src/app/`)
Cada ruta agrupa componentes dedicados a su lógica de negocio:
- [src/app/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/page.tsx): Página principal (landing page y servicios generales).
- [contacto/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/contacto/page.tsx): Formulario de contacto y detalles operativos.
- [express/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/cotizar/express/page.tsx): Cotizador interactivo del servicio Express.
- [lowcost/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/cotizar/lowcost/page.tsx): Cotizador interactivo del servicio LowCost.
- `src/app/servicios/`: Información detallada de servicios ([envios-express/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/servicios/envios-express/page.tsx), [envios-lowcost/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/servicios/envios-lowcost/page.tsx), [enviosflex/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/servicios/enviosflex/page.tsx), [plan-emprendedores/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/servicios/plan-emprendedores/page.tsx)).
- `src/app/nosotros/`: Información institucional ([sobre-nosotros/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/nosotros/sobre-nosotros/page.tsx), [preguntas-frecuentes/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/nosotros/preguntas-frecuentes/page.tsx), [nuestras-redes/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/nosotros/nuestras-redes/page.tsx)).

### 2. Componentes de UI Generales (`src/components/ui/`)
Son elementos visuales atómicos, reutilizables e independientes de la lógica de negocio (mayormente basados en Radix y Tailwind CSS):
- [button.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/button.tsx): Botones estilizados con variantes.
- [card.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/card.tsx): Contenedores para bloques estructurados.
- [accordion.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/accordion.tsx): Menú colapsable.
- [sheet.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/sheet.tsx): Paneles flotantes laterales para menús móviles.
- [form.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/form.tsx), [input.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/input.tsx), [label.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/label.tsx), [textarea.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/textarea.tsx): Componentes primitivos de formularios.

### 3. Componentes de Negocio (`src/components/`)
Componentes especializados según el flujo del negocio:
- `homenew/`: Componentes del header, menú móvil, pie de página y animaciones de inicio.
- `calculator/`: Lógicas del cotizador interactivo (autocompletado, visualización de precios y mapas).
- `maps/`: Integraciones con Leaflet y utilidades de renderizado del mapa físico en cliente.
- `express/`, `lowcost/`, `envios-flex/`, `entrepreneur/`: Vistas dinámicas de cada tipo de servicio específico.
- `social/`, `faq/`, `about/`, `contact/`: Vistas de soporte e institucionales.

---

## 🧭 Lógica de Navegación del Proyecto

El sistema centraliza las rutas y enlaces de navegación en [navigation.ts](file:///E:/proyectos/000pruebasenviosjunio/src/lib/navigation.ts). Esto asegura la coherencia en todo el sitio web:
1. **Grupos de Enlaces (`navGroups`):** Array estructurado con categorías principales (`Servicios` y `Nosotros`), iconos representativos (de `lucide-react`) y rutas correspondientes.
2. **Consumo Dinámico:** El header ([optimized-header.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/homenew/optimized-header.tsx)) y el menú móvil ([mobile-menu.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/homenew/mobile-menu.tsx)) consumen este archivo para mapear dinámicamente los submenús interactivos.
3. **Indicador Activo:** Se utiliza [active-link.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/homenew/active-link.tsx) para comparar la ruta actual mediante `usePathname()` y resaltar visualmente la sección activa.

---

## 🛠️ Lógica de Negocio Principal y Server Actions

La plataforma implementa un esquema estricto de separación de responsabilidades:

### 1. Cotización y Rutas Físicas
El proceso de cotización se ejecuta de manera segura en el servidor mediante la Server Action `quoteShipment` en [actions.ts (Órdenes)](file:///E:/proyectos/000pruebasenviosjunio/src/app/ordenes/actions.ts):
1. **Entrada de Direcciones:** El cliente ingresa direcciones de origen y destino.
2. **Resolución de Coordenadas:** Se geocodifican las direcciones a latitud y longitud mediante el helper de OpenStreetMap [nominatim.ts](file:///E:/proyectos/000pruebasenviosjunio/src/lib/maps/nominatim.ts).
3. **Ruta Física OSRM:** Se consulta la distancia real en ruta consultando la API pública de OSRM en [osrm.ts](file:///E:/proyectos/000pruebasenviosjunio/src/lib/maps/osrm.ts).
4. **Cálculo Tarifario:** Si la distancia es menor o igual a 10 km, se obtiene el valor correspondiente desde la base de datos PostgreSQL utilizando la tabla `PriceRange`. Si supera los 10 km, se calcula en base a un costo base fijo más un adicional por kilómetro extra recorrido.

### 2. Mutación y Creación de Envíos
- La creación de la orden se realiza mediante `saveShipment` en [actions.ts (Órdenes)](file:///E:/proyectos/000pruebasenviosjunio/src/app/ordenes/actions.ts).
- Se validan de forma estricta los esquemas Zod (para asegurar horas coherentes de retiro y entrega, así como fechas válidas).
- Se asocia el `clientId` (si es un cliente registrado) y el `repartidorId` simulado mediante la sesión del servidor en `getAuthenticatedRepartidorIdFromServerSession`.

---

## ⚡ Buenas Prácticas de Rendimiento (Vercel React Rules)

Para mantener el máximo rendimiento de carga de páginas y baja latencia interactiva, sigue estas reglas del manual de Vercel:
1. **Evitar Barrel Imports:** Importa directamente desde el archivo origen para evitar traces sobredimensionados e importaciones innecesarias en los bundles finales.
2. **Paralelismo de Operaciones Async:** Utiliza `Promise.all()` en lugar de secuenciar con `await` consecutivos cuando las operaciones asíncronas son independientes (por ejemplo, al inicializar geocodificaciones o búsquedas simultáneas).
3. **Reducción de Serialización en RSC:** Envía a los Client Components solo los datos mínimos necesarios (primitivas limpias) en lugar de serializar objetos completos de la base de datos PostgreSQL.
4. **Validaciones Tempranas:** Realiza comprobaciones lógicas síncronas antes de invocar promesas asíncronas pesadas (Early Exit).

---

## 🚀 Instalación y Puesta en Marcha

### 1. Configuración de Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con las credenciales de conexión:
```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/db_name?schema=public"
```

### 2. Comandos de Configuración de Dependencias y Base de Datos
Ejecuta la secuencia ordenada de comandos para inicializar la aplicación:
1. Instalar las dependencias del proyecto:
   ```bash
   pnpm install
   ```
2. Generar el cliente TypeScript de Prisma ORM:
   ```bash
   pnpm run postinstall
   ```
3. Empujar la estructura del esquema a la base de datos PostgreSQL:
   ```bash
   pnpm run db:push
   ```
4. Semillar la base de datos con los rangos de precios por defecto, clientes de prueba y repartidores:
   ```bash
   pnpm run db:seed
   ```
5. Iniciar el servidor de desarrollo local:
   ```bash
   pnpm run dev
   ```
