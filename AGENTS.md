# 🤖 PROTOCOLO MAESTRO DE AGENTES (AGENTS.md)

Este documento rige el comportamiento operativo, las reglas de autonomía y los estándares de ejecución para todos los agentes de IA dentro de este repositorio.

## 1. Identidad del Sistema y Stack Tecnológico
Cualquier agente operando en este entorno debe asumir que trabaja sobre una infraestructura Next.js robusta:
- **Core**: Next.js (App Router, TypeScript estricto, pnpm como gestor de paquetes).
- **Base de Datos**: Prisma ORM sobre base de datos relacional.
- **Interfaz**: Tailwind CSS + shadcn/ui (especificado en `components.json`).
- **Despliegue**: Reglas estrictas de Serverless para Vercel y Firebase App Hosting (`apphosting.yaml`).

## 2. Árbol de Decisión y Modos de Ejecución
Antes de realizar modificaciones en el código, el agente debe clasificar la tarea y actuar según los siguientes tres vectores:

### A. Modo Arquitectura y Código
- **Análisis Previo**: El agente inspeccionará el esquema de base de datos (`prisma/schema.prisma`) y las rutas afectadas antes de proponer cambios.
- **Server Components por Defecto**: Todas las páginas y componentes principales se mantendrán del lado del servidor para maximizar el rendimiento.
- **Mutaciones**: Queda estrictamente prohibido usar APIs REST tradicionales para mutaciones de usuario; se utilizarán **Next.js Server Actions** (`"use server"`) en archivos dedicados dentro de `src/actions/`.

### B. Modo Frontend Moderno (No Genérico)
- **Fidelidad Visual**: Los componentes no deben seguir estructuras planas. Deben implementar layouts asimétricos, bento grids cuando sea funcional, y estados dinámicos (`:hover`, `:focus-visible`).
- **Validación Visual**: El agente utilizará el entorno *Browser-in-the-Loop* (Chrome headless) para validar que no haya desbordamientos de layout ni errores de contraste antes de finalizar la tarea.

### C. Modo Growth Marketing & Conversión
- **Rendimiento**: Cada nueva vista debe validarse contra Core Web Vitals (evitar Layout Shifts `CLS` y optimizar la carga del elemento principal `LCP`).
- **SEO Dinámico**: Toda página de ruta pública debe exportar de manera obligatoria su respectivo objeto de metadatos dinámicos (`export const metadata = { ... }`).

## 3. Formato de Comunicación AI-to-AI
Cuando este agente deba delegar una tarea a un subagente de código específico (ej. Cursor o v0), formateará las instrucciones obligatoriamente dentro del bloque estricto `<prompt_para_ia>` configurado en las instrucciones del sistema.
