# Original User Request

## Initial Request — 2026-06-11T17:22:31-03:00

Auditar de forma exhaustiva la base de código del proyecto "Dos Ruedas Pro" en búsqueda de inconsistencias en TypeScript, rendimiento (Vercel React Best Practices) y lógica de negocio, y generar un informe detallado con propuestas de solución.

Working directory: E:/proyectos/000pruebasenviosjunio
Integrity mode: development

## Requirements

### R1. Análisis Estático y Validación de Tipos
Escanear todos los archivos en `src/app/`, `src/components/`, `src/lib/` y `prisma/` para detectar errores de compilación de TypeScript y advertencias de linter. Validar ejecutando comandos como `pnpm run lint` o `npx tsc --noEmit`.

### R2. Auditoría de Rendimiento e Importaciones
Detectar violaciones a las mejores prácticas de Vercel React (como waterfalls en fetches asíncronos, uso de barrel imports, serialización de objetos en Server Components o problemas en la separación de componentes Client/Server).

### R3. Auditoría de Lógica de Negocio y Georuteo
Identificar discrepancias o inconsistencias en los controladores, esquemas de base de datos (`prisma/schema.prisma`), las Server Actions (`actions.ts`) y los helpers de mapas/cotizaciones (`nominatim.ts`, `osrm.ts`).

### R4. Informe Consolidado
Generar el archivo `audit_report.md` en la raíz del proyecto. Este informe debe listar cada inconsistencia encontrada clasificada por su severidad (Bloqueante, Alta, Media, Baja), con el enlace al archivo exacto, la línea correspondiente y una propuesta concreta de corrección.

## Acceptance Criteria

### Cobertura de la Auditoría
- [ ] El archivo de informe `audit_report.md` debe estar creado en el directorio raíz de la base de código.
- [ ] El informe debe certificar el estado de al menos las 5 rutas principales del proyecto (ej. Home, Contacto, Cotizador Express, Cotizador LowCost, Servicios).
- [ ] Cada hallazgo reportado en el informe debe incluir un enlace de archivo funcional en formato Markdown y un extracto de código explicativo.

### Validación de Tipos y Compilación
- [ ] El informe debe documentar expliamente el resultado de ejecutar `npx tsc --noEmit` y `pnpm run lint` en el proyecto, listando errores pendientes si los hubiera.
