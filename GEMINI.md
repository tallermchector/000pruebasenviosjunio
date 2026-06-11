# GEMINI.md - Manual de Operación Gemini CLI & Genkit

## Model Tiering

Para optimizar costos y performance, se deben asignar las tareas según la capacidad del modelo:

- **Gemini 2.0 Flash / 1.5 Pro:**
  - Tareas: Refactorización de lógica compleja (optimización de rutas), análisis de diseño visual en componentes críticos, generación de esquemas de base de datos.
  - Contexto: Utilizar cuando se requiera razonamiento profundo o multimodality.
- **Gemini 1.5 Flash:**
  - Tareas: Completado de código repetitivo, redacción de historias de usuario (Jira/Linear), generación de mocks de datos, documentación técnica de funciones.

## CLI & MCP Config

El entorno de desarrollo utiliza la CLI de Gemini integrada con Google Genkit.

### Inicialización:

```bash
# Iniciar UI de desarrollo de Genkit
pnpm run genkit:dev

# Variables de Entorno requeridas
# GEMINIENLACE: Para modelos generativos
# GOOGLE_MAPS_API_KEY: Para flows de geocodificación
```

### Servidores MCP (Model Context Protocol):

Si el agente requiere interactuar con servicios externos, se habilitan los siguientes bridges:

- **Prisma Bridge:** Para introspección directa del esquema `schema.prisma`.
- **Google Maps Bridge:** Para validación de direcciones en tiempo real durante el desarrollo de prompts.

## Structured Outputs Constraints

Para garantizar la estabilidad del backend en TypeScript, todos los flujos de IA que alimenten la lógica de negocio deben forzar el uso de **JSON Schemas** estrictos.

### Ejemplo de Configuración en Genkit:

```typescript
const OptimizedItinerarySchema = z.object({
  stops: z.array(
    z.object({
      address: z.string(),
      lat: z.number(),
      lng: z.number(),
      estimatedTime: z.string(),
      priority: z.number().min(1).max(5),
    }),
  ),
  totalDistance: z.number(),
  optimizedAt: z.string(),
});

// Forzar respuesta al modelo
const response = await ai.generate({
  model: "gemini-1.5-pro",
  prompt: "...",
  output: { schema: OptimizedItinerarySchema },
});
```

### Reglas de Respuesta:

1. El modelo **no debe** incluir explicaciones fuera del JSON si el flag `structured_output` está activo.
2. Fallos en la validación del esquema deben ser capturados y re-intentados con un prompt de corrección automática.
