# Dos Ruedas Pro - Plataforma de Gestión Logística de Última Milla

Dos Ruedas Pro es una solución de software de alto rendimiento diseñada para la administración y optimización de servicios de mensajería y logística de última milla en la ciudad de Mar del Plata, Argentina. La plataforma permite la gestión integral de clientes, procesamiento de órdenes, cálculo de tarifas dinámicas basadas en distancias físicas, asignación de repartidores y generación de etiquetas de despacho en formato A4.

---

## 📂 Arquitectura Modular y Lógica del Proyecto

El sistema está estructurado bajo el paradigma de **Next.js App Router** (React 19 y TypeScript) para garantizar un renderizado eficiente, seguridad en el manejo de datos y baja latencia de respuesta:

### 1. Separación de Lógicas (Server Actions vs Client Components)
*   **Lógica de Negocio en Servidor:** Todo acceso a la base de datos PostgreSQL, cálculo de distancias por API y transacciones críticas se procesa en **Server Actions** bajo [actions.ts (Ordenes)](file:///E:/proyectos/000pruebasenviosjunio/src/app/ordenes/actions.ts) y [actions.ts (General)](file:///E:/proyectos/000pruebasenviosjunio/src/app/actions.ts). Esto previene la exposición de API Keys y reduce la carga del lado del cliente.
*   **Interfaz de Usuario Interactiva:** Los componentes en `src/components/` (como las calculadoras o formularios) consumen directamente las Server Actions de forma asíncrona, gestionando estados locales y mostrando transiciones visuales interactivas y seguras.

---

## ⚙️ Reglas de Negocio Clave

La plataforma está diseñada en torno a la operativa logística local de Mar del Plata. Sus principales componentes lógicos son:

### 1. Cotizador de Envíos y Cálculo de Ruta Física
El cálculo tarifario para los servicios **Express** y **Low Cost** sigue un flujo matemático y geográfico estricto:
1.  **Geocodificación:** La dirección de origen y destino ingresada por el usuario es resuelta a coordenadas geográficas (latitud/longitud) consumiendo la API de **Nominatim (OpenStreetMap)** en [address-autocomplete.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/calculator/address-autocomplete.tsx).
2.  **Cálculo de Ruta Dinámica:** Con las coordenadas resueltas, se calcula la distancia física real en ruta (en kilómetros) y el tiempo estimado de viaje (en minutos) consumiendo la API de ruteo de **OSRM (Open Source Routing Machine)**.
3.  **Asignación de Tarifa:** La Server Action toma la distancia calculada y consulta los rangos tarifarios definidos en la tabla `PriceRange` de la base de datos (administrada con [Prisma ORM](file:///E:/proyectos/000pruebasenviosjunio/prisma/schema.prisma)), devolviendo el valor de envío exacto al cliente.

### 2. Gestión Operativa de Entidades
*   **Clientes (`Client`):** Registro de cuentas de PyMEs y comercios locales que operan bajo modalidad prepaga o cuenta corriente con facturación mensual consolidada.
*   **Órdenes (`Order`):** Entidad central de envío. Almacena el origen/destino, cliente emisor, costo calculado, estado de tránsito ("Pendiente", "En Viaje", "Entregado") y el repartidor asignado.
*   **Repartidores (`Repartidor`):** Registro de la flota exclusiva de motociclistas de la empresa, permitiendo asociar las órdenes para su distribución y seguimiento físico.
*   **Etiquetas de Despacho:** Sistema que genera vistas optimizadas listas para impresión física en tamaño A4, conteniendo datos del remitente, destinatario, código de barra/QR de seguimiento y rango horario elegido para el despacho.

---

## 📂 Organización del Repositorio

```
├── prisma/                    # Esquema y definición del modelo de datos de Prisma
│   └── schema.prisma          # Modelos relacionales de Clientes, Órdenes, Tarifas y Repartidores
├── src/
│   ├── ai/                    # Servicios e integración de flujos cognitivos de IA
│   ├── app/                   # Ruteo de páginas (App Router) y Server Actions de negocio
│   ├── components/            # Componentes reutilizables e interactivos (calculadoras, layouts)
│   │   ├── calculator/        # Lógica de estimación de costos y direcciones
│   │   └── homenew/           # Elementos visuales y de navegación de la página principal
│   ├── lib/                   # Clientes de APIs externas, base de datos y utilidades de soporte
│   └── types/                 # Tipos TypeScript compartidos en la aplicación
```

---

## 🚀 Instalación y Puesta en Marcha

### Configuración del Entorno
Crea un archivo `.env` en la raíz del proyecto:
```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/db_name?schema=public"
GEMINIENLACE="tu-api-key-de-gemini"
```

### Comandos de Configuración y Semillado
*   **Instalar Dependencias:**
    ```bash
    pnpm install
    ```
*   **Generar esquemas de Base de Datos:**
    ```bash
    pnpm run postinstall
    ```
*   **Empujar modelo de datos (Prisma db push):**
    ```bash
    pnpm run db:push
    ```
*   **Cargar Datos de Semillero (Seeds de Tarifas, Repartidores y Clientes):**
    ```bash
    pnpm run db:seed
    ```
*   **Iniciar el Servidor de Desarrollo:**
    ```bash
    pnpm run dev
    ```
