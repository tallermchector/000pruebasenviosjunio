# Detalles de Páginas y Rutas

A continuación se detalla la estructura y el propósito de cada una de las rutas públicas (páginas) implementadas en el sistema usando el App Router de Next.js (`src/app/`).

---

### `src/app/page.tsx` (Ruta: `/`)
- **Propósito**: Landing Page principal de la plataforma Dos Ruedas Pro. Exhibe la propuesta de valor inicial, animaciones atrayentes, y resumen rápido de los servicios ofrecidos.
- **Componentes Importados**:
  - `OptimizedHeader`, `Footer`, `CarruselRedes` (desde `src/components/homenew/`).
  - `HeroAnimado`, `VisionSection`, `ServicesOverview`, `CtaSection`, `EmprendedoresHome`, `SliderServicios`.
  - UI atómicos como `ScrollProgress`.
- **Lógica Cliente/Servidor**:
  - Utiliza Server Components como base.
  - Se implementa "Lazy Loading" con `next/dynamic` (Code Splitting) para los componentes ubicados "Below the Fold" (fuera de la primera vista del usuario). Esto retrasa la evaluación del script inicial, logrando altísimo rendimiento para el SEO y LCP.
- **Dependencias Clave**: Metadata y OpenGraph para el SEO de la home page y `next/dynamic`.

---

### `src/app/contacto/page.tsx` (Ruta: `/contacto`)
- **Propósito**: Página de comunicación con el cliente que engloba un formulario de mensajes, mapas de la ubicación física de las oficinas y horarios operativos.
- **Componentes Importados**:
  - `ContactHero`, `ContactInfo`, `BusinessHours` (desde `src/components/contact/`).
  - `ContactPageClient` (que aísla y envuelve lógicas del lado del cliente como formularios o mapas).
- **Lógica Cliente/Servidor**:
  - Mayormente información estática (horarios, descripciones).
  - Componente de renderizado en el cliente requerido para la interacción del formulario y visualización de componentes interactivos.

---

### `src/app/cotizar/express/page.tsx` (Ruta: `/cotizar/express`)
- **Propósito**: Herramienta interactiva principal del usuario final para la cotización en tiempo real del servicio "Express" (inmediato).
- **Componentes Importados**:
  - `CalculatorHero`, `ExpressCalculator`, `MapFeatures`, `PricingInfo`, `CalculatorTips`, `CalculatorContact` (desde `src/components/calculator/`).
- **Lógica Cliente/Servidor**:
  - Es el núcleo transaccional visual de la plataforma. La página renderiza el esqueleto base y le cede la interactividad a `ExpressCalculator`.
  - El componente interno interactúa fuertemente con la Server Action `quoteShipment` y la validación a través de zod, manteniendo oculto el algoritmo de cálculo en el servidor pero devolviendo información útil e interactiva a la pantalla.

---

### `src/app/cotizar/lowcost/page.tsx` (Ruta: `/cotizar/lowcost`)
- **Propósito**: Versión alternativa al cotizador Express para el servicio programado "LowCost".
- **Componentes Importados**:
  - `LowcostCalculatorHero`, `LowcostCalculator`, `MapFeatures` (desde `src/components/calculator/`).
- **Lógica Cliente/Servidor**:
  - Similar al cotizador Express pero alterando el ServiceType a `LOW_COST`, lo que ajusta los componentes estéticos, reglas de precio y variables visuales mostradas al cliente en el frontend.

---

### `src/app/servicios/envios-express/page.tsx` (Ruta: `/servicios/envios-express`)
- **Propósito**: Página de marketing e información detallada sobre el envío en el día o inmediato.
- **Componentes Importados**:
  - `ExpressHero`, `ExpressBenefits`, `UrgentScenarios`, `ExpressPricingRanges`, `ExpressContent`, `ExpressCTA`.
- **Lógica Cliente/Servidor**: Renderizado estático casi en su totalidad para priorizar velocidad de entrega de contenido SEO.

---

### `src/app/servicios/envios-lowcost/page.tsx` (Ruta: `/servicios/envios-lowcost`)
- **Propósito**: Página explicativa de los envíos económicos de franja horaria.
- **Componentes Importados**:
  - `LowcostHero`, `LowcostBenefits`, `HowLowcostWorks`, `PricingComparison`, `LowcostContent`, `LowcostCTA`.

---

### `src/app/servicios/enviosflex/page.tsx` (Ruta: `/servicios/enviosflex`)
- **Propósito**: Landing page orientada a comercios y pymes enfocadas en ventas por MercadoLibre Flex en Mar del Plata.
- **Componentes Importados**:
  - `EnviosFlexHero`, `MercadoLibreBenefits`, `HowItWorks`, `FlexPricingRanges`, `Requirements`, `EnviosFlexContent`, `EnviosFlexCTA` (desde `src/components/envios-flex/`).

---

### `src/app/servicios/plan-emprendedores/page.tsx` (Ruta: `/servicios/plan-emprendedores`)
- **Propósito**: Explicación de la logística Fulfillment (3PL) y planes fijos mensuales para emprendedores.
- **Componentes Importados**:
  - `EntrepreneurHero`, `EntrepreneurBenefits`, `PlanInformation`, `EntrepreneurPricingRanges`, `EntrepreneurCTA`.

---

### Rutas de la sección Nosotros
- **`sobre-nosotros/page.tsx`**: Historia, misión, visión y equipo de Dos Ruedas Pro (`AboutHero`, `CompanyStory`, `TeamSection`, etc).
- **`preguntas-frecuentes/page.tsx`**: Componentes basados en Acordeones (`FaqCategories`, `FaqItem`, `FaqHero`) para centralizar la resolución rápida de dudas logísticas comunes.
- **`nuestras-redes/page.tsx`**: Consolidación y social feed (Mock/Social Posts provenientes de Prisma). Incorpora `SocialHero`, `SocialFeed`, `SocialBenefits`.

---

### Rutas Legales
- **`politica-de-privacidad/page.tsx` y `terminos-y-condiciones/page.tsx`**: Renderizado de documentos estáticos textuales informativos para cumplimiento legal de la web.

---

### Archivos Transversales en `src/app/`
- **`layout.tsx`**: Configura la envolvente global (`<html>` y `<body>`). Define fuentes universales (Roboto, Orbitron), setea SEO avanzado (JSON-LD con Schema.org enfocado a negocio local `CourierService`) e inserta componentes globales (`Toaster`, `WhatsAppReviewButton`).
- **`not-found.tsx`**: Página de error 404 personalizada y tematizada usando `NotFoundIllustration`.
- **`robots.ts` & `sitemap.ts`**: Rutinas automáticas del framework de Next.js para generar archivos SEO para crawlers (Google Bot).
- **`actions.ts` & `ordenes/actions.ts`**: Archivos puramente del lado del servidor que no exponen una "página" pero habilitan end-points internos para interactuar con la Base de Datos y APIs externas mediante React Server Actions.
