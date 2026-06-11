# Guía de Arquitectura y Reglas del Proyecto para Agentes de IA

Este documento describe la arquitectura y las directrices de desarrollo para asistentes de Inteligencia Artificial (como Cursor, Windsurf, Antigravity, etc.) que trabajen en esta base de código. Debe leerse para comprender la organización del sistema y garantizar la compatibilidad de todos los cambios de código.

---

## 📂 Organización de la Base de Código y Componentes

La estructura del proyecto está dividida rigurosamente para separar los elementos visuales genéricos de los componentes con lógica de negocio específica y controladores del lado del servidor.

### 1. Componentes de UI Genéricos (`src/components/ui/`)
- Contiene los bloques elementales y primitivas visuales de la interfaz de usuario (por ejemplo, botones, acordeones, diálogos, hojas flotantes).
- **Regla Estricta:** Estos componentes no deben acoplarse directamente a datos dinámicos, llamadas a base de datos o llamadas a APIs externas. Deben ser puros, controlados por props y altamente reutilizables.
- **Acceso:** Todos los componentes primitivos residen en el directorio `src/components/ui/`. Ejemplos: [button.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/button.tsx), [accordion.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/accordion.tsx), [sheet.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/sheet.tsx).

### 2. Componentes de Negocio Personalizados (`src/components/`)
- Agrupa los componentes interactivos organizados en subcarpetas temáticas que responden a flujos o páginas específicas del negocio.
- Los componentes situados en carpetas como `calculator/`, `contact/`, `express/`, `lowcost/`, o `social/` contienen el estado reactivo del cliente, se conectan con mapas físicos en el cliente y llaman a las Server Actions del servidor de forma asíncrona.

### 3. Sistema de Páginas e Rutas (`src/app/`)
- Implementa la arquitectura Next.js App Router (React Server Components por defecto).
- Respeta la estructura jerárquica de carpetas para las páginas, utilizando archivos `page.tsx` para definir la entrada visual de cada sección:
  - Landing principal: [src/app/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/page.tsx)
  - Formularios de cotización: [express/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/cotizar/express/page.tsx) y [lowcost/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/cotizar/lowcost/page.tsx)
  - Detalles de servicios específicos: `src/app/servicios/`
  - Secciones institucionales: `src/app/nosotros/`

---

## ⚙️ Reglas de Separación de Lógicas (Server vs Client)

Para mantener la seguridad y rendimiento de la plataforma, los agentes deben seguir estas directrices de arquitectura:
1. **Server Actions (`'use server'`):**
   - Toda interacción con la base de datos PostgreSQL mediante Prisma ORM debe estar encapsulada en Server Actions.
   - Las Server Actions principales son [actions.ts (Órdenes)](file:///E:/proyectos/000pruebasenviosjunio/src/app/ordenes/actions.ts) y [actions.ts (General)](file:///E:/proyectos/000pruebasenviosjunio/src/app/actions.ts).
   - No expongas tokens, claves de API (como las de Nominatim u OSRM) ni consultas SQL directas en componentes que usen la directiva `'use client'`.
2. **Client Components (`'use client'`):**
   - Utilizados para manejar estados del formulario (por ejemplo, con `useFormState` y `useActionState`), interactividad de mapas interactivos de Leaflet e interfaces reactivas.
   - Estos componentes se comunican con el backend invocando las Server Actions correspondientes de forma segura.

---

## 🔒 Arquitecturas y Lógicas que NO se Deben Modificar

Hay módulos críticos del negocio que cuentan con reglas matemáticas e integraciones externas fijas. No realices modificaciones en estas lógicas a menos que se especifique explícitamente:

### 1. Cálculo Físico de Distancia y Rutas
- La Server Action `quoteShipment` en [actions.ts (Órdenes)](file:///E:/proyectos/000pruebasenviosjunio/src/app/ordenes/actions.ts) utiliza una integración estricta en dos pasos:
  1. Geocodificación de texto a coordenadas geográficas (latitud/longitud) usando OpenStreetMap en [nominatim.ts](file:///E:/proyectos/000pruebasenviosjunio/src/lib/maps/nominatim.ts).
  2. Consulta de distancias de ruteo reales por calles a través del motor OSRM en [osrm.ts](file:///E:/proyectos/000pruebasenviosjunio/src/lib/maps/osrm.ts).
- No alteres los flujos de geocodificación o los endpoints de ruteo físico de OSRM, ya que esto rompería la precisión matemática de los cotizadores.

### 2. Estructura Tarifaria en Base a Distancias
- El sistema de precios diferencia estrictamente los rangos menores o iguales a 10 km (obtenidos de la base de datos PostgreSQL) de los rangos superiores a 10 km (donde se aplica una fórmula de base + precio por kilómetro excedente). Cualquier cambio en este motor de cálculo debe respetar el tipo `Decimal` de Prisma y los esquemas en [schema.prisma](file:///E:/proyectos/000pruebasenviosjunio/prisma/schema.prisma).

### 3. Autenticación Operativa Simulada
- La función `getAuthenticatedRepartidorIdFromServerSession` simula la autenticación obteniendo el primer repartidor activo de la base de datos. No intentes reemplazar esto con sistemas de autenticación reales o middlewares a menos que sea una petición explícita y planificada del usuario.

---

## ⚡ Directrices de Rendimiento para el Agente (Vercel Guidelines)

Al generar o modificar código, aplica automáticamente las mejores prácticas de Vercel:
- **Async Parallelization:** Agrupa llamadas de promesas asíncronas independientes utilizando `Promise.all()` (por ejemplo, al validar coordenadas o recuperar datos paramétricos).
- **Barrel Imports Avoidance:** Importa módulos e iconos directamente desde su ubicación de origen. No utilices archivos de barril (barrel files) grandes para evitar la sobrecarga y rastros pesados de importación.
- **RSC Prop Minimization:** No pases estructuras complejas de Prisma o clases relacionales completas del servidor a componentes de cliente; serializa y mapea únicamente las propiedades requeridas.
- **Derived State:** Evita el uso de efectos (`useEffect`) para derivar estados. Procesa los booleanos y cómputos derivados durante la fase de renderizado.
