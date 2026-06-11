# ♊ DIRECTRICES DE INTEGRACIÓN DE GEMINI API (GEMINI.md)

Este documento centraliza los estándares de integración, llamadas a la API y patrones de diseño para el ecosistema de modelos de Gemini dentro de la aplicación.

## 1. Configuración del Cliente SDK
- **Librería Oficial**: Utilizar exclusivamente el SDK oficial de Google Gen AI (`@google/genai` o el paquete verificado en `package.json`).
- **Instanciación**: El cliente de Gemini debe inicializarse en un archivo compartido (ej. `src/lib/gemini.ts`) para reutilizar la conexión y manejar de forma segura la variable de entorno `GEMINI_API_KEY`.
- **Restricción Serverless**: El cliente no debe mantener un estado persistente en memoria que rompa las limitaciones de ejecución efímera de Vercel o Firebase App Hosting.

## 2. Estándares de Prompting en Código
- **Estructuración con XML**: Todos los prompts enviados a la API desde el código deben utilizar etiquetas XML estructurales (`<contexto>`, `<instrucciones>`, `<formato_salida>`) para delimitar las variables del sistema de los inputs del usuario final.
- **System Instructions**: Configurar siempre el parámetro `systemInstruction` al instanciar el modelo para fijar el comportamiento del agente y evitar inyecciones de prompt.
- **Structured Outputs**: Siempre que se requiera procesar datos para guardarlos en la base de datos vía Prisma, se debe forzar el modo JSON (`responseMimeType: "application/json"`) acompañado de un esquema JSON estricto para garantizar el tipado de TypeScript.

## 3. Flujo de Trabajo con Agentes Autónomos (Antigravity)
- **Descubrimiento de Habilidades**: Este repositorio utiliza el directorio `.agent/skills/` para empaquetar flujos recurrentes de Gemini.
- **Contexto Eficiente**: Para evitar saturar la ventana de contexto en ejecuciones automáticas, el código de los prompts en la aplicación debe ser modular y procesar fragmentos de texto o código de manera secuencial (estilo pipeline de datos), evitando el envío masivo de archivos completos si no es estrictamente necesario.
