# Catálogo Técnico de Agentes y Flujos de Inteligencia Artificial

Los flujos cognitivos de IA (Genkit Flows) se definen en el directorio `src/ai/flows/` y encapsulan tareas específicas ejecutadas a través de prompts estructurados. A continuación se detalla el catálogo de todos los flujos registrados en el proyecto:

---

## 1. Módulo de Resumen e Información del Negocio

### `summarizeTestimonialsFlow`
*   **Archivo:** `summarize-testimonials.ts`
*   **Propósito:** Sintetiza un conjunto de testimonios o comentarios de clientes, identificando los puntos de dolor, fortalezas y el sentimiento predominante de manera concisa.
*   **Esquema de Entrada (`input`):**
    *   `testimonials` (string): Los testimonios textuales a resumir.
*   **Esquema de Salida (`output`):**
    *   `summary` (string): Resumen ejecutivo destacando las opiniones y sentimientos clave.

### `summarizeServicePageFlow`
*   **Archivo:** `summarize-service-page.ts`
*   **Propósito:** Analiza el archivo de contexto estático JSON de una página de servicio de Next.js y genera un resumen estructurado legible listo para inyectarse como contexto en prompts de otros agentes.
*   **Esquema de Entrada (`input`):**
    *   `relativePath` (string): Ruta relativa del archivo de página (ej. `src/app/servicios/envios-express/page.tsx`).
*   **Esquema de Salida (`output`):**
    *   `summary` (string): Resumen detallado y organizado por secciones del servicio correspondiente.

---

## 2. Módulo Creativo de Generación de Prompts para Imágenes

### `suggestImageParamsFlow`
*   **Archivo:** `suggest-image-params.ts`
*   **Propósito:** Procesa el perfil de una imagen de referencia (descripción y tags) o el contexto de un servicio para sugerir parámetros óptimos para crear una imagen promocional mejorada.
*   **Esquema de Entrada (`input`):**
    *   `description` (string, opcional): Descripción de la imagen de inspiración.
    *   `tags` (array de strings, opcional): Etiquetas asociadas a la imagen de inspiración.
    *   `serviceContext` (string, opcional): Contexto del servicio para inspirar la imagen.
*   **Esquema de Salida (`output`):**
    *   `sectionType` (string): Tipo sugerido de sección (ej: 'Hero', 'Card', 'Banner').
    *   `serviceName` (string): Nombre del servicio asociado.
    *   `aspectRatio` (string): Relación de aspecto sugerida (ej: '16:9', '1:1').
    *   `style` (string): Estilo visual sugerido ('Fotografía Realista', 'Ilustración Digital', 'Arte 3D').
    *   `background` (string): Sugerencia concisa de fondo profesional.
    *   `details` (string): Escena central recomendada (fuerza el uso de cascos en repartidores).

### `suggestServiceImageDetailsFlow`
*   **Archivo:** `suggest-service-image-details.ts`
*   **Propósito:** Analiza el contexto específico de un servicio de mensajería y propone ideas creativas y consistentes con la marca (Mar del Plata, azul primario y amarillo secundario) para el fondo y la acción del sujeto.
*   **Esquema de Entrada (`input`):**
    *   `serviceContext` (any): Datos en JSON con el contexto de negocio del servicio.
*   **Esquema de Salida (`output`):**
    *   `backgroundDetails` (string): Propuesta de fondo contextualizada.
    *   `contentDetails` (string): Propuesta de acción/sujeto principal del gráfico promocional.

### `suggestOptimalImageDetailsFlow`
*   **Archivo:** `suggest-optimal-image-details.ts`
*   **Propósito:** Variante avanzada que genera múltiples opciones creativas (entre 3 y 5) separadas tanto para el fondo como para el sujeto de la imagen promocional.
*   **Esquema de Entrada (`input`):**
    *   `serviceContext` (any): Contexto del servicio en JSON.
*   **Esquema de Salida (`output`):**
    *   `backgroundSuggestions` (array de strings): Lista de 3 a 5 sugerencias de fondo.
    *   `contentSuggestions` (array de strings): Lista de 3 a 5 sugerencias de sujeto/acción.

### `generateImagePromptFlow`
*   **Archivo:** `generate-image-prompt.ts`
*   **Propósito:** Crea un prompt detallado en inglés optimizado para modelos como Google Imagen basados en una fórmula de 5 Pilares (`[Subject + Adjectives] doing [Action] in [Location/Context]. [Composition/Camera Angle]. [Lighting/Atmosphere]. [Style/Medium]. [Text Constraint]`), inyectando el branding de Envíos DosRuedas y la identidad costera.
*   **Esquema de Entrada (`input`):**
    *   `sectionType` (string), `serviceName` (string), `serviceContext` (string, opcional), `aspectRatio` (string), `style` (string), `background` (string, opcional), `additionalDetails` (string, opcional), `inspirationImageName` (string, opcional), `textToInclude` (string, opcional).
*   **Esquema de Salida (`output`):**
    *   `prompt` (string): Prompt final estructurado.

### `generateServiceImagePromptFlow`
*   **Archivo:** `generate-service-image-prompt.ts`
*   **Propósito:** Genera el prompt descriptivo en inglés de 5 Pilares a partir de los detalles creativos preseleccionados específicos de un servicio y las preferencias de incluir texto de la marca.
*   **Esquema de Entrada (`input`):**
    *   `serviceName` (string), `serviceContext` (string), `sectionType` (string), `visualStyle` (string), `backgroundDetails` (string), `contentDetails` (string), `includeText` (boolean), `includeBrand` (boolean), `additionalDetails` (string, opcional).
*   **Esquema de Salida (`output`):**
    *   `prompt` (string): El prompt optimizado resultante.

### `generateOptimalImagePromptFlow`
*   **Archivo:** `generate-optimal-image-prompt.ts`
*   **Propósito:** Genera el prompt descriptivo final integrando además fuentes personalizadas, textos publicitarios y logotipos, manteniendo la coherencia de los 5 pilares tipográficos y cromáticos.
*   **Esquema de Entrada (`input`):**
    *   Campos idénticos a `generateServiceImagePrompt` más `fontToInclude` (string, opcional) y parámetros adicionales del usuario.
*   **Esquema de Salida (`output`):**
    *   `prompt` (string): Prompt consolidado final.

---

## 3. Módulo de Replicación de Componentes y Código (Meta-Prompting)

### `generateReplicationPromptFlow`
*   **Archivo:** `generate-replication-prompt.ts`
*   **Propósito:** Genera instrucciones técnicas detalladas dirigidas a otro asistente de IA para recrear la estructura inicial de una página o implementar componentes específicos en base a su código fuente original.
*   **Esquema de Entrada (`input`):**
    *   `pagePath` (string), `componentPaths` (array de strings, opcional), `mainComponentContent` (string, opcional), `filesContent` (array de objetos con path/content/name, opcional), `componentsData` (array de objetos con path/name, opcional).
*   **Esquema de Salida (`output`):**
    *   `structurePrompt` (string, opcional): Instrucciones para orquestar la página y loaders.
    *   `componentPrompt` (string, opcional): Instrucciones para refactorizar componentes con TypeScript y ShadCN.

### `generateReplicationFlowV2`
*   **Archivo:** `generate-replication-prompt-v2.ts`
*   **Propósito:** Versión refinada del flujo de replicación. Soporta meta-prompting avanzado dividiendo de forma limpia la reconstrucción de la arquitectura en base a Server Components, Client Components y Server Actions de Next.js.
*   **Esquema de Entrada (`input`):**
    *   `pagePath` (string), `app_components` (array de strings, opcional), `ui_components` (array de strings, opcional), `actions` (array de strings, opcional), `filesContent` (array de objetos con path/content/name, opcional).
*   **Esquema de Salida (`output`):**
    *   `structurePrompt` (string, opcional), `componentPrompt` (string, opcional).

### `generateComponentPromptFlow`
*   **Archivo:** `generate-component-prompt.ts`
*   **Propósito:** Crea un prompt de desarrollo enfocado exclusivamente en la migración de un conjunto específico de componentes y sus dependencias internas.
*   **Esquema de Entrada (`input`):**
    *   `pagePath` (string), `filesContent` (array de objetos con path/content/name).
*   **Esquema de Salida (`output`):**
    *   `componentPrompt` (string): El prompt listo para ser inyectado en un editor inteligente o chat de desarrollo de IA.
