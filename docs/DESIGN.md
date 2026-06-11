# Sistema de Diseño Visual - Envíos DosRuedas MDP (Auditoría y Especificación)

## Overview
Este documento es la especificación maestro del sistema de diseño visual para **Envíos DosRuedas MDP**, una plataforma moderna de gestión logística de última milla optimizada para el despacho y rastreo de envíos en Mar del Plata.

El sistema está desarrollado sobre un stack de producción real compuesto por **Next.js (App Router), Prisma, Tailwind CSS y shadcn/ui**, con integración de la librería de animación física **Framer Motion** e iconos vectoriales de **Lucide React**. El diseño persigue una estética de alto rendimiento, limpia e interactiva, con soporte nativo y coherente para temas claro ("light") y oscuro ("dark").

Este documento consolida la auditoría técnica de tokens y configuraciones reales del proyecto y presenta propuestas de optimización visual avanzadas basadas en las mejores prácticas de la skill inteligente `UI/UX Pro Max`.

---

## Colors
La paleta cromática se define enteramente mediante variables CSS utilizando la notación HSL de Tailwind, lo que permite un cambio fluido y nativo entre los modos de color.

### Tabla de Equivalencias de Color Detectadas

| Token del Sistema | Variable CSS | Valor HEX (Claro) | Valor HSL (Claro) | Valor HEX (Oscuro) | Valor HSL (Oscuro) | Rol Semántico / Justificación |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Background** | `--background` | `#ffffff` | `0 0% 100%` | `#040710` | `225 57% 3.9%` | Fondo base del lienzo. El modo oscuro reduce el brillo con un marino profundo. |
| **Foreground** | `--foreground` | `#0f172a` | `222.2 84% 4.9%` | `#f8fafc` | `210 40% 98%` | Color principal para textos de alto contraste y lectura. |
| **Primary** | `--primary` | `#2563eb` | `221.2 83.2% 53.3%` | `#3b82f6` | `217.2 91.2% 59.8%` | Azul de marca. Representa confianza y dinamismo. |
| **Primary FG** | `--primary-foreground` | `#f8fafc` | `210 40% 98%` | `#0f172a` | `222.2 47.4% 11.2%` | Texto sobre elementos de color Primary. |
| **Secondary** | `--secondary` | `#e7b008` | `45 93% 47%` | `#e7b008` | `45 93% 47%` | Amarillo de marca (alta visibilidad) para tarifas, alertas y avisos. |
| **Secondary FG** | `--secondary-foreground` | `#412006` | `26 83% 14%` | `#412006` | `26 83% 14%` | Texto sobre elementos de color Secondary (marrón oscuro). |
| **Muted** | `--muted` | `#f1f5f9` | `210 40% 96.1%` | `#1e293b` | `217.2 32.6% 17.5%` | Fondos de elementos inactivos, celdas de tabla secundarias o deshabilitados. |
| **Muted FG** | `--muted-foreground` | `#64748b` | `215.4 16.3% 46.9%` | `#94a3b8` | `215 20.2% 65.1%` | Texto de menor jerarquía visual o etiquetas explicativas. |
| **Accent** | `--accent` | `#f1f5f9` | `210 40% 96.1%` | `#1e293b` | `217.2 32.6% 17.5%` | Fondos de elementos activos o en estado hover interactivo. |
| **Accent FG** | `--accent-foreground` | `#0f172a` | `222.2 47.4% 11.2%` | `#f8fafc` | `210 40% 98%` | Texto para elementos acentuados. |
| **Destructive** | `--destructive` | `#ef4444` | `0 84.2% 60.2%` | `#7f1d1d` | `0 62.8% 30.6%` | Rojo semántico. Usado en errores, cancelaciones o acciones críticas. |
| **Destructive FG** | `--destructive-foreground`| `#f8fafc` | `210 40% 98%` | `#f8fafc` | `210 40% 98%` | Texto sobre elementos destructivos. |
| **Border** | `--border` | `#e2e8f0` | `214.3 31.8% 91.4%` | `#1e293b` | `217.2 32.6% 17.5%` | Líneas de división sutiles entre componentes. |
| **Input** | `--input` | `#e2e8f0` | `214.3 31.8% 91.4%` | `#1e293b` | `217.2 32.6% 17.5%` | Bordes para inputs y controles de formulario. |
| **Ring** | `--ring` | `#0f172a` | `222.2 84% 4.9%` | `#3b82f6` | `217.2 91.2% 59.8%` | Anillo de enfoque de accesibilidad visible. |

### Propuesta de Optimización Creativa para Colores
*   **Neón Acento:** En el modo oscuro, utiliza sombras de brillo semitransparentes en color Primary (`box-shadow: 0 0 15px hsla(var(--primary), 0.15)`) para destacar los bordes de los campos de entrada activos y las tarjetas de seguimiento.
*   **Gradientes de Estado:** Para el estado hover de tarjetas principales, implementar un degradado de borde sutil y translúcido en lugar de un color sólido:
    ```css
    border-image: linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary))) 1;
    ```

---

## Typography
El sistema tipográfico combina dos fuentes complementarias configuradas en Tailwind:
1.  **Roboto** (`--font-roboto` / `sans`): Fuente sans-serif principal. Utilizada para el cuerpo de texto, formularios, descripciones y tablas de datos. Aporta legibilidad neutra.
2.  **Orbitron** (`--font-orbitron` / `display`): Fuente display/monospace de estilo digital. Utilizada estrictamente en números, códigos de seguimiento (tracking), precios y titulares principales. Refuerza la temática logística.

### Clases de Utilidad de Escala Tipográfica (globals.css)

| Clase CSS | Tamaño | Peso | Interlineado | Espaciado (Tracking) | Fuente | Uso Recomendado |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `.text-display-lg` | `48px` | `900` | `1.1` | `-0.02em` | Orbitron | Títulos hero, displays principales. |
| `.text-display-md` | `32px` | `700` | `1.2` | `-0.01em` | Orbitron | Títulos de secciones o páginas principales. |
| `.text-headline-lg` | `24px` | `700` | `1.3` | `0.02em` | Orbitron | Títulos de secciones en versión escritorio. |
| `.text-headline-lg-mobile` | `20px` | `700` | `1.3` | N/A | Orbitron | Títulos de secciones en versión móvil. |
| `.text-headline-md` | `24px` | `600` | `1.3` | N/A | Orbitron | Subtítulos de flujos de datos y cards principales. |
| `.text-body-lg` | `18px` | `400` | `1.6` | N/A | Roboto | Párrafos destacados o introductorios. |
| `.text-body-md` | `16px` | `400` | `1.5` | N/A | Roboto | Texto de cuerpo estándar y formularios. |
| `.text-label-md` | `14px` | `700` | `1.2` | `0.05em` | Roboto | Etiquetas de control y texto de botones primarios. |
| `.text-label-sm` | `12px` | `400` | `1.2` | `0.1em` | Roboto | Leyendas aclaratorias y mensajes de error. |
| `.text-code-tracking` | `16px` | `400` | `1.0` | `0.1em` | Orbitron | Formato específico de códigos de seguimiento de envíos. |

### Propuesta de Optimización Creativa para Tipografía
*   **Tracking Hover Animation:** Para textos interactivos en Orbitron (como los códigos de seguimiento y botones de llamada a la acción), aplicar una micro-animación CSS que expanda ligeramente el espaciado de letras al hacer hover:
    ```css
    .text-code-tracking {
      transition: letter-spacing 300ms ease;
    }
    .text-code-tracking:hover {
      letter-spacing: 0.15em;
    }
    ```

---

## Layout
El sistema de layouts está estructurado para maximizar la legibilidad en pantallas de monitoreo continuo y flujos rápidos de datos, con soporte para vistas de impresión física.

### Dimensiones y Grillas
*   **Ancho Máximo (Max Width):** El ancho máximo de la interfaz del contenedor central es de `1400px` (definido bajo el breakpoint `2xl` de Tailwind y el token `container-max`).
*   **Escala de Espaciado (spacing en tailwind.config.ts):**
    *   `base` / `xs`: `4px` - Margen interno mínimo.
    *   `sm`: `8px` - Espacio de separación micro.
    *   `md` / `gutter` / `margin-mobile`: `16px` - Espaciado estándar entre tarjetas, inputs de formulario y margen móvil por defecto.
    *   `lg` / `margin-desktop`: `32px` - Margen de escritorio por defecto.
    *   `xl`: `64px` - Espacio de separación macro entre secciones.

### Grilla de Impresión de Etiquetas (A4)
Implementado bajo la directiva `@media print` para la generación física de etiquetas:
*   Configuración de página: `@page { size: A4; margin: 10mm; }`.
*   Diseño de grilla: Las etiquetas impresas se distribuyen en una grilla de dos columnas (`repeat(2, 1fr)`) con una separación exacta de `10mm` (`gap: 10mm`).
*   Clases controladoras: `.print-only` (oculto en pantalla, visible en impresión) y `.no-print` (visible en pantalla, oculto en impresión, ej: navbars, headers, botones de impresión).

### Propuesta de Optimización Creativa para Layout
*   **Interactive Cards Masonry:** Utilizar un sistema elástico en las pantallas de tableros de pedidos con columnas CSS fluidas de tipo CSS Grid auto-fit para optimizar la densidad de información:
    ```css
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    ```

---

## Elevation & Depth
La profundidad y jerarquía se manejan con un look digital plano-moderno apoyado en bordes y transparencias selectivas, limitando el uso de sombras pesadas para evitar contaminar la interfaz en modo oscuro.

### Variables de Sombras (Shadows)
*   `--shadow-sm` (`0 1px 2px rgba(0,0,0,0.05)`): Usado para sutiles realces de botones desactivados o micro elementos.
*   `--shadow-md` (`0 4px 6px rgba(0,0,0,0.1)`): Sombras de cards interactivas y botones principales.
*   `--shadow-lg` (`0 10px 15px rgba(0,0,0,0.1)`): Menús desplegables, modales secundarios y popovers interactivos.
*   `--shadow-xl` (`0 20px 25px rgba(0,0,0,0.15)`): Diálogos modales principales de confirmación y mockups flotantes.

### Animaciones Configuradas (tailwind.config.ts)
*   `float`: Transición vertical suave de `6s` (`translateY(0px)` a `translateY(-10px)`) para añadir dinamismo al hero.
*   `spin-slow`: Animación de rotación lenta de `8s` para elementos de fondo circulares o radiales.
*   `h-scroll`: Marquee de `45s` de desplazamiento horizontal continuo para logos y marcas aliadas.
*   `accordion-down` / `accordion-up`: Transiciones Radix rápidas de `0.2s ease-out` para expandir acordeones.

### Propuesta de Optimización Creativa para Elevación y Profundidad
*   **Glassmorphic Overlay System:** Implementar un efecto glassmorphism premium para las tarjetas secundarias e indicadores de tarifas flotantes.
    ```css
    .glass-card {
      background: hsl(var(--card) / 0.45);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid hsl(var(--border) / 0.3);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.04);
    }
    ```
*   **Transiciones con Framer Motion:** Para componentes en React, se recomienda estructurar las transiciones usando animaciones elásticas físicas en lugar de curvas lineales:
    ```jsx
    import { motion } from "framer-motion";
    
    export const FadeInCard = ({ children }) => (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {children}
      </motion.div>
    );
    ```

---

## Shapes
La curvatura de las esquinas está estandarizada bajo una escala geométrica específica para dar coherencia a todos los componentes del sistema.

### Configuración de Bordes (Border Radius)
*   **`rounded-xl` (`1.5rem` / `24px`):** Tarjetas contenedoras principales de secciones, widgets complejos y páneles de control.
*   **`rounded-lg` (`1.0rem` / `16px`):** Diálogos modales, popovers de gran tamaño y tarjetas secundarias.
*   **`rounded-md` (`0.75rem` / `12px`):** Botones interactivos principales y campos de entrada (`input`).
*   **`rounded` (`0.5rem` / `8px`):** Esquina base (mapeada a `--radius`). Usada en insignias, badges de estado y selectores pequeños.
*   **`rounded-sm` (`0.25rem` / `4px`):** Checkboxes, interruptores micro y selectores de fecha de tamaño reducido.
*   **`rounded-full` (`9999px`):** Avatares de usuario, indicadores redondos de estado y botones circulares de acción flotante (FAB).

### Propuesta de Optimización Creativa para Formas
*   **Border Glow Effects:** Cuando una tarjeta tiene foco o el estado del envío cambia a "En Camino", se propone un contorno luminoso pulsante que dibuje la forma redondeada de la tarjeta:
    ```css
    .card-active {
      box-shadow: 0 0 15px hsl(var(--primary) / 0.25), inset 0 0 2px hsl(var(--primary) / 0.5);
      border-color: hsl(var(--primary) / 0.5);
    }
    ```

---

## Components
El ecosistema de componentes se basa en la especificación estándar de **shadcn/ui** combinada con Tailwind CSS.

### Configuración Base (components.json)
*   **Estilo del Sistema:** `"default"`
*   **RSC (React Server Components):** Activado (`true`)
*   **Ruta de Componentes UI:** `@/components/ui`
*   **Ruta de Utilidades:** `@/lib/utils`
*   **Librería de Iconos:** Estandarizada bajo **Lucide React**.

### Especificaciones de Componentes Estilo CSS

```css
/* Botón Primario */
.btn-primary {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 0.75rem; /* rounded-md */
  transition: all 200ms ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
.btn-primary:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

/* Botón Secundario */
.btn-secondary {
  background-color: transparent;
  color: hsl(var(--foreground));
  border: 2px solid hsl(var(--border));
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 0.75rem; /* rounded-md */
  transition: all 200ms ease;
  cursor: pointer;
}
.btn-secondary:hover {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

/* Tarjeta (Card) */
.card {
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  border: 1px solid hsl(var(--border));
  border-radius: 1.5rem; /* rounded-xl */
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
}
.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

/* Inputs de Formulario */
.input {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  border: 1px solid hsl(var(--input));
  border-radius: 0.75rem; /* rounded-md */
  padding: 12px 16px;
  font-family: var(--font-sans);
  font-size: 16px;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}
.input:focus {
  border-color: hsl(var(--primary));
  outline: none;
  box-shadow: 0 0 0 3px hsl(var(--primary) / 0.15);
}

/* Barra de Desplazamiento Personalizada (Scrollbar) */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: hsl(var(--muted));
}
::-webkit-scrollbar-thumb {
  background: hsl(var(--primary));
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.8);
}
```

### Propuesta de Optimización Creativa para Componentes
*   **Framer Motion Hover Scale:** En React, para dar mayor interactividad táctil y visual a los botones de acción principal, utilizar transiciones elásticas en hover y tap:
    ```jsx
    import { motion } from "framer-motion";
    
    export const MotionButton = ({ children, onClick }) => (
      <motion.button
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className="btn-primary"
      >
        {children}
      </motion.button>
    );
    ```

---

## Do’s and Don’ts

### SÍ Hacer (Do’s):
*   **SÍ** utilizar la tipografía **Orbitron** (`text-code-tracking`, `text-display-*`) para códigos de seguimiento de pedidos, tarifas, precios y contadores numéricos para sostener la estética visual de rastreo técnico.
*   **SÍ** estructurar las tarjetas de la aplicación utilizando la escala estándar de bordes redondeados (`rounded-xl` para el contenedor y `rounded-md` para botones/campos internos).
*   **SÍ** maquetar las vistas de etiquetas e informes asegurándote de usar las clases `.no-print` y `.print-only` para que las impresiones físicas en A4 no contengan elementos de navegación web.
*   **SÍ** utilizar la escala de espaciado semántica (`md` para márgenes generales de separación en móvil, `lg` para escritorio) para mantener la consistencia vertical y horizontal.
*   **SÍ** usar SVG e iconos vectoriales procedentes del paquete **Lucide React**, garantizando consistencia en tamaño.
*   **SÍ** agregar `cursor-pointer` a todas las tarjetas, botones y elementos interactivos que tengan estados hover.

### NO Hacer (Don’ts):
*   **NO** harcodear colores en formato HEX en las clases de Tailwind de los componentes React. Usar siempre las variables semánticas en HSL (`bg-background`, `text-foreground`, `border-border`) para garantizar la compatibilidad con el modo claro/oscuro.
*   **NO** deshabilitar el anillo de enfoque nativo (`*:focus-visible`) para mantener el estándar de accesibilidad web (WCAG 2.1) de la plataforma.
*   **NO** agregar sombras pesadas o de colores oscuros en temas oscuros; en su lugar, priorizar bordes finos con el token `border-border` o usar efectos de translucidez mediante backdrop-blur.
*   **NO** mezclar bordes con radios personalizados arbitrarios fuera de las variables ya mapeadas (`xl`, `lg`, `md`, `sm`).
*   **NO** utilizar emojis como iconos principales en la interfaz de la plataforma.
*   **NO** usar escalas bruscas en efectos hover que alteren o desplacen el flujo y tamaño general del layout (causando layout shift).
