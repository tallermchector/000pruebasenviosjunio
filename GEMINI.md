# Manual de Integración de Inteligencia Artificial (Google Genkit & Gemini)

La plataforma utiliza **Google Genkit** como framework principal para la orquestación, gestión de prompts y ejecución de flujos de Inteligencia Artificial. Genkit proporciona un entorno tipado y robusto para interactuar con los modelos fundacionales de Google Gemini.

---

## Configuración Centralizada

La configuración e inicialización de Genkit reside en [genkit.ts](file:///e:/proyectos/000pruebasenviosjunio/src/ai/genkit.ts).

### Validación de API Key
El sistema requiere obligatoriamente la variable de entorno `GEMINIENLACE` para autenticarse con el SDK de Google AI. Se valida de manera estricta durante el arranque:

```typescript
const apiKey = process.env.GEMINIENLACE;
if (!apiKey) {
  throw new Error("❌ ERROR CRÍTICO: La variable de entorno GEMINIENLACE no está definida.");
}
```

### Configuración del Plugin
Genkit se inicializa con el plugin oficial de Google AI Studio (`googleAI`):
```typescript
export const ai = genkit({
  plugins: [googleAI({ apiKey })],
  model: "googleai/gemini-2.5-flash", // Modelo por defecto equilibrado y de baja latencia
});
```

---

## Modelos y Estrategia de Asignación (Tiering)

Se definen dos alias de modelos en el módulo centralizado para segmentar las tareas según su complejidad y requerimientos de rendimiento:

1.  **`googleai/gemini-2.5-flash` (Velocidad y Latencia):**
    *   **Uso:** Síntesis rápidas, recomendaciones de parámetros creativos de imágenes, sugerencia de detalles a partir de textos.
    *   **Propósito:** Optimizar los tiempos de respuesta del usuario y reducir el consumo de cuota de API.
2.  **`googleai/gemini-2.5-pro` (Capacidad de Razonamiento):**
    *   **Uso:** Análisis de código fuente completo de componentes, generación de prompts estructurados de replicación de código de software (meta-prompting).
    *   **Propósito:** Ofrecer el razonamiento profundo requerido para generar instrucciones complejas sin pérdidas de contexto.

---

## Gestión de Prompts Estructurados

Para garantizar la estabilidad del tipado y la estructura del backend, todos los prompts que alimentan a los flujos se definen mediante la API `ai.definePrompt` de Genkit.

### Características Clave:
*   **Zod Schema Constraints:** Tanto la entrada (`input`) como la salida (`output`) se restringen mediante esquemas Zod estrictos. Esto fuerza al modelo Gemini a responder en formato JSON estructurado que encaja exactamente en el tipado de TypeScript.
*   **Handlebars Templates:** Los prompts se definen como plantillas Handlebars, lo que permite inyectar variables complejas de forma limpia (ej. bucles `{{#each}}` para recorrer componentes de código o condicionales `{{#if}}` para adaptar el modo de generación).
*   **Separación de Responsabilidades:** Al estar definidos en archivos independientes dentro de `src/ai/flows/`, se facilita el mantenimiento, testeo en la interfaz de desarrollador de Genkit y control de versiones.

---

## Resiliencia y Manejo de Límites de Tasa (Rate Limiting)

Para evitar caídas del servicio provocadas por el límite de solicitudes por minuto (rate limits) de la API de Google Studio, el sistema cuenta con un wrapper de reintentos con retraso exponencial en [retry.ts](file:///e:/proyectos/000pruebasenviosjunio/src/ai/utils/retry.ts).

### Lógica de Reintento (`withExponentialBackoff`):
*   **Detección Automática:** Captura errores correspondientes a los códigos HTTP `429`, mensajes `RESOURCE_EXHAUSTED` o "Too Many Requests".
*   **Retraso Dinámico:** Intenta recuperar la propiedad `retryDelay` que proporciona Google AI Studio de manera nativa (especificando los segundos de espera). Si no está presente, aplica una fórmula exponencial clásica (`initialDelayMs * 2^(attempt - 1)`).
*   **Límite de Intentos:** Permite configurar el máximo de reintentos antes de elevar la excepción final al cliente.

Ejemplo conceptual de uso:
```typescript
const result = await withExponentialBackoff(async () => {
  return await prompt(flowInput);
});
```
