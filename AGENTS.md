# AGENTS.md - Guía de Comportamiento para Agentes Autónomos

## System Role & Context
**Dos Ruedas Pro** es una plataforma de gestión logística de última milla diseñada para optimizar la eficiencia operativa en Mar del Plata. El sistema abarca desde la cotización dinámica hasta la exportación de propuestas operativas en **PDF de alta fidelidad (formato A4)**. El agente debe actuar como un Senior AI Engineer enfocado en la precisión técnica y la integridad visual.

## Core Stack Rules
- **Framework:** Next.js 16+ (App Router). Priorizar Server Components para el core y Client Components solo para interactividad.
- **UI Architecture:**
  - Componentes de página modulares en `src/components/paginas/`.
  - Estilado con Tailwind CSS siguiendo el **Stitch Design System**.
  - **Maquetación A4:** Uso estricto de unidades `mm` y control total de overflow para asegurar que el contenido PDF sea idéntico al renderizado web.
- **Type Safety:** TypeScript en modo estricto. Prohibido el uso de `any`.
- **Database:** Prisma ORM v7. Importaciones siempre desde paths relativos a `generated/prisma/client`.

## AI Agent Flows (Genkit)
El core de inteligencia reside en `src/ai/flows/`.
- **Flow Principal:** `optimize-delivery-routes.ts` (Implementación pendiente/en curso).
  - **Inputs:** `addresses: string[]`, `vehicleType: 'moto' | 'furgon'`, `priority: boolean`.
  - **Process:** Geocodificación vía Google Maps -> Agrupación por zonas -> Ordenamiento por ventana horaria.
  - **Outputs:** `OptimizedItinerary` (JSON estructurado con coordenadas y tiempos estimados).
  - **Tools:** `googleMapsGeocoding`, `distanceMatrixCalculator`.

## Strict Guidelines ("Qué hacer" vs "Qué NO hacer")

### SÍ Hacer:
- **Layout Elástico:** Usar Flexbox (`flex-grow`, `flex-shrink`) para layouts dinámicos que se adapten a diferentes densidades de datos sin romper el diseño A4.
- **Responsive A4:** Controlar márgenes y saltos de página (`page-break-inside: avoid`) para exportación limpia.
- **Copywriting Argentino:** Usar "voseo" (hablá, cotizá, tenés) en todo el contenido público.
- **Shadow DOM / Glassmorphism:** Aplicar efectos de transparencia y bordes sutiles según `DESIGN.md`.

### NO Hacer:
- **Reducción Destructiva:** No eliminar texto o datos reales para "ahorrar espacio". Si el contenido excede el A4, implementar lógica de paginación o escalado de fuente proporcional.
- **External CSS:** No importar librerías de CSS externas (Bootstrap, Bulma). Todo debe ser Tailwind nativo.
- **Direct DOM Manipulation:** No usar `document` o `window` fuera de hooks de React o comprobaciones de `typeof window`.
