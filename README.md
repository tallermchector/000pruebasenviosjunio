# Dos Ruedas Pro - Plataforma de Gestión Logística de Última Milla

Dos Ruedas Pro es una solución de software de alto rendimiento diseñada para la administración y optimización de servicios de mensajería y logística de última milla en la ciudad de Mar del Plata, Argentina. La plataforma permite la gestión integral de clientes, procesamiento de órdenes, cálculo de tarifas basadas en distancias, asignación de repartidores y generación de etiquetas de despacho en formato físico A4 listo para impresión.

Además, cuenta con un módulo de inteligencia artificial avanzado para la síntesis de testimonios de clientes y la generación estructurada de prompts creativos para marketing visual y replicación de componentes de software.

---

## Stack Tecnológico

El proyecto está construido sobre tecnologías modernas y robustas del ecosistema de JavaScript y TypeScript:

*   **Frontend & Fullstack Framework:** Next.js 16 (App Router) con soporte para React 19 y TypeScript estricto.
*   **Diseño e Interfaz de Usuario:** Tailwind CSS y componentes primitivos basados en **ShadCN UI** con iconos de **Lucide React**.
*   **Base de Datos y ORM:** PostgreSQL con **Prisma ORM v7**, generando un cliente fuertemente tipado en un directorio personalizado.
*   **Orquestación de IA:** **Google Genkit** con el plugin oficial `@genkit-ai/google-genai` para el consumo de modelos generativos de Google Gemini.
*   **Servicios de Mapas y Ruteo:** Integración con la API de geocodificación **Nominatim** (OpenStreetMap) y ruteo dinámico mediante **OSRM Routing API** para el cálculo exacto de distancias y tiempos de tránsito.

---

## Arquitectura y Estructura del Proyecto

El proyecto sigue una estructura modular y limpia estándar de Next.js:

```
├── .env                       # Variables de entorno (API Keys de Gemini y base de datos)
├── components.json            # Configuración de inicialización de componentes ShadCN UI
├── next.config.mjs            # Configuración de compilación y headers de seguridad de Next.js
├── package.json               # Dependencias del proyecto y scripts npm/pnpm
├── prisma/                    # Configuración del esquema de base de datos
│   └── schema.prisma          # Definición de modelos (Client, Order, Repartidor, etc.)
├── tailwind.config.ts         # Configuración del sistema de diseño visual (Stitch Design System)
├── tsconfig.json              # Configuración de compilación estricta de TypeScript
├── src/
│   ├── ai/                    # Módulo centralizado de Inteligencia Artificial
│   │   ├── genkit.ts          # Inicialización y configuración centralizada de Genkit
│   │   ├── dev.ts             # Registro de flujos para el entorno de desarrollo
│   │   ├── flows/             # Definición de los flujos de IA (Genkit Flows)
│   │   └── utils/             # Utilidades (reintentos ante límites de tasa/rate-limiting)
│   ├── app/                   # Rutas y Server Actions (App Router de Next.js)
│   │   ├── actions.ts         # Server Actions generales (contacto, resúmenes IA)
│   │   └── ordenes/
│   │       └── actions.ts     # Server Actions de negocio (clientes, ruteo, tarifas)
│   ├── components/            # Componentes React de la interfaz de usuario
│   │   ├── calculator/        # Calculadoras dinámicas (Low Cost y Express)
│   │   └── ui/                # Componentes atómicos e interactivos de ShadCN UI
│   ├── hooks/                 # React Hooks personalizados (ej: toast)
│   ├── lib/                   # Clientes de servicios, contextos estáticos e instancia de Prisma
│   └── types/                 # Definición de tipos estáticos y firmas de acciones
└── scripts/                   # Utilidades de mantenimiento (limpieza de componentes inactivos)
```

---

## Flujos de Trabajo e Integración de IA

La plataforma implementa una separación clara entre la base de datos relacional y los flujos cognitivos de IA:

1.  **Lógica de Negocio y Ruteo (`src/app/ordenes/actions.ts`):** 
    Las Server Actions interactúan directamente con la base de datos a través de Prisma para gestionar la creación de órdenes de envío (`Order`), registros de clientes (`Client`), repartidores (`Repartidor`), etc. Para las cotizaciones, se consumen servicios de geolocalización y se calcula la ruta física (km reales y minutos estimados) mediante llamadas OSRM, cruzando estos datos con la tabla `PriceRange` para asignar la tarifa correspondiente.
2.  **Integración de Inteligencia Artificial (`src/ai/`):**
    Los flujos cognitivos están construidos utilizando flujos (`defineFlow`) y prompts estructurados (`definePrompt`) de Genkit. Las Server Actions que requieren IA invocan estos flujos pasando entradas fuertemente tipadas y recibiendo respuestas en formato JSON garantizado por validadores de Zod.

---

## Cómo Ejecutar el Proyecto

### Requisitos Previos
*   Node.js instalado (versión compatible con Next.js 16).
*   Gestor de paquetes `pnpm`.
*   Base de datos PostgreSQL en ejecución.
*   Una API Key de Google Gemini válida.

### Configuración del Entorno
Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables:
```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/db_name?schema=public"
GEMINIENLACE="tu-api-key-de-gemini"
```

### Comandos Disponibles
*   **Instalar Dependencias:**
    ```bash
    pnpm install
    ```
*   **Generar el Cliente de Prisma:**
    ```bash
    pnpm run postinstall
    ```
*   **Iniciar el Servidor de Desarrollo (con Turbopack):**
    ```bash
    pnpm run dev
    ```
*   **Iniciar la UI de Desarrollo de Genkit:**
    ```bash
    pnpm run genkit:dev
    ```
*   **Ejecutar Validación de Tipos (TypeScript):**
    ```bash
    pnpm run typecheck
    ```
*   **Compilar la Aplicación para Producción:**
    ```bash
    pnpm run build
    ```
