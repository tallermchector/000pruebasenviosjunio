# Sistema de Diseño Visual - SAAS NEXT.JS APP ROUTER PRISMA TAILWIND SHADCN

## Overview
Este documento es la especificación maestro del sistema de diseño visual para **SAAS NEXT.JS APP ROUTER PRISMA TAILWIND SHADCN**.

El sistema está desarrollado sobre un stack de producción real compuesto por **Next.js (App Router), Prisma, Tailwind CSS y shadcn/ui**.
El diseño persigue una estética de alto rendimiento, limpia e interactiva, con soporte completo y coherente para temas claro ("light") y oscuro ("dark").
Integra patrones UI y UX validados por la herramienta inteligente `ui-ux-pro-max`, con especial énfasis en flujos fluidos, tipografías legibles y componentes robustos listos para su uso.

---

## Colors
La paleta cromática se define enteramente mediante variables CSS utilizando la notación HSL de Tailwind. Esto garantiza flexibilidad y consistencia visual a lo largo de toda la interfaz en sus modos claro y oscuro.

### Tabla de Equivalencias de Color

| Token del Sistema | Variable CSS | Valor HEX (Claro) | Valor HSL (Claro) | Valor HEX (Oscuro) | Valor HSL (Oscuro) | Rol Semántico / Justificación |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Background** | `--background` | `#ffffff` | `0 0% 100%` | `#040710` | `225 57% 3.9%` | Fondo base del lienzo. El modo oscuro reduce el brillo con un marino profundo. |
| **Foreground** | `--foreground` | `#020817` | `222.2 84% 4.9%` | `#f8fafc` | `210 40% 98%` | Color principal para textos de alto contraste y lectura. |
| **Primary** | `--primary` | `#2563eb` | `221.2 83.2% 53.3%` | `#3b82f6` | `217.2 91.2% 59.8%` | Azul de marca. Representa confianza y dinamismo. |
| **Primary FG** | `--primary-foreground` | `#f8fafc` | `210 40% 98%` | `#0f172a` | `222.2 47.4% 11.2%` | Texto sobre elementos de color Primary. |
| **Secondary** | `--secondary` | `#e7b008` | `45 93% 47%` | `#e7b008` | `45 93% 47%` | Amarillo de marca (alta visibilidad) para tarifas, alertas y avisos. |
| **Secondary FG** | `--secondary-foreground` | `#412006` | `26 83% 14%` | `#412006` | `26 83% 14%` | Texto sobre elementos de color Secondary. |
| **Muted** | `--muted` | `#f1f5f9` | `210 40% 96.1%` | `#1e293b` | `217.2 32.6% 17.5%` | Fondos de elementos inactivos, celdas de tabla secundarias o deshabilitados. |
| **Muted FG** | `--muted-foreground` | `#64748b` | `215.4 16.3% 46.9%` | `#94a3b8` | `215 20.2% 65.1%` | Texto de menor jerarquía visual o etiquetas explicativas. |
| **Accent** | `--accent` | `#f1f5f9` | `210 40% 96.1%` | `#1e293b` | `217.2 32.6% 17.5%` | Fondos de elementos activos o en estado hover interactivo. |
| **Accent FG** | `--accent-foreground` | `#0f172a` | `222.2 47.4% 11.2%` | `#f8fafc` | `210 40% 98%` | Texto para elementos acentuados. |
| **Destructive** | `--destructive` | `#ef4444` | `0 84.2% 60.2%` | `#7f1d1d` | `0 62.8% 30.6%` | Rojo semántico. Usado en errores, cancelaciones o acciones críticas. |
| **Destructive FG** | `--destructive-foreground` | `#f8fafc` | `210 40% 98%` | `#f8fafc` | `210 40% 98%` | Texto sobre elementos destructivos. |
| **Border** | `--border` | `#e2e8f0` | `214.3 31.8% 91.4%` | `#1e293b` | `217.2 32.6% 17.5%` | Líneas de división sutiles entre componentes. |
| **Input** | `--input` | `#e2e8f0` | `214.3 31.8% 91.4%` | `#1e293b` | `217.2 32.6% 17.5%` | Bordes para inputs y controles de formulario. |
| **Ring** | `--ring` | `#020817` | `222.2 84% 4.9%` | `#3b82f6` | `217.2 91.2% 59.8%` | Anillo de enfoque de accesibilidad visible. |

### Directivas de Contraste y Branding
*   **Contraste mínimo:** Se debe asegurar un ratio mínimo de 4.5:1 (conforme a WCAG 2.1 AA) para el texto legible.
*   **Contraste en Light Mode:** Evitar el uso de grises claros sobre fondo blanco.
*   **Colores de Alertas:** Utilizar el color Secondary para estados pendientes/alertas, y Destructive para errores/alertas críticas.

---

## Typography
El sistema tipográfico combina dos fuentes a través de Tailwind:
1.  **--font-roboto** (Clase `sans`): Fuente sans-serif principal para cuerpo de texto y lectura neutra.
2.  **--font-orbitron** (Clase `display`): Fuente display/monospace de estilo digital para códigos, números y precios.

### Clases de Utilidad de Escala Tipográfica (globals.css)

| Clase CSS | Detalles de Estilo |
| :--- | :--- |
| `.text-display-lg` | `font-family: var(--font-display)`, `font-size: 48px`, `font-weight: 900`, `line-height: 1.1`, `letter-spacing: -0.02em` |
| `.text-display-md` | `font-family: var(--font-display)`, `font-size: 32px`, `font-weight: 700`, `line-height: 1.2`, `letter-spacing: -0.01em` |
| `.text-headline-lg` | `font-family: var(--font-display)`, `font-size: 24px`, `font-weight: 700`, `line-height: 1.3`, `letter-spacing: 0.02em` |
| `.text-headline-lg-mobile` | `font-family: var(--font-display)`, `font-size: 20px`, `font-weight: 700`, `line-height: 1.3` |
| `.text-headline-md` | `font-family: var(--font-display)`, `font-size: 24px`, `font-weight: 600`, `line-height: 1.3` |
| `.text-body-lg` | `font-family: var(--font-sans)`, `font-size: 18px`, `font-weight: 400`, `line-height: 1.6` |
| `.text-body-md` | `font-family: var(--font-sans)`, `font-size: 16px`, `font-weight: 400`, `line-height: 1.5` |
| `.text-code-tracking` | `font-family: var(--font-display)`, `font-size: 16px`, `font-weight: 400`, `line-height: 1.0`, `letter-spacing: 0.1em` |
| `.text-label-md` | `font-family: var(--font-sans)`, `font-size: 14px`, `font-weight: 700`, `line-height: 1.2`, `letter-spacing: 0.05em` |
| `.text-label-sm` | `font-family: var(--font-sans)`, `font-size: 12px`, `font-weight: 400`, `line-height: 1.2`, `letter-spacing: 0.1em` |

---

## Layout
El sistema de layouts está optimizado para pantallas de monitoreo continuo y flujos rápidos de datos, con soporte para vistas de impresión física.

### Escala de Espaciado (tailwind.config.ts)

| Token | Valor | Uso Recomendado |
| :--- | :--- | :--- |
| `base` | `4px` | Definido en configuración de Tailwind |
| `xs` | `4px` | Definido en configuración de Tailwind |
| `sm` | `8px` | Definido en configuración de Tailwind |
| `md` | `16px` | Definido en configuración de Tailwind |
| `lg` | `32px` | Definido en configuración de Tailwind |
| `xl` | `64px` | Definido en configuración de Tailwind |
| `gutter` | `16px` | Definido en configuración de Tailwind |
| `margin-mobile` | `16px` | Definido en configuración de Tailwind |
| `margin-desktop` | `32px` | Definido en configuración de Tailwind |
| `container-max` | `1400px` | Definido en configuración de Tailwind |

### Estructura de Secciones Landing
- **Patrón Base:** App Store Style Landing
- **Orden de Secciones:** 1. Hero with device mockup, 2. Screenshots carousel, 3. Features with icons, 4. Reviews/ratings, 5. Download CTAs
- **Conversión:** Show real screenshots. Include ratings (4.5+ stars). QR code for mobile. Platform-specific CTAs.

---

## Elevation & Depth
La profundidad y jerarquía se manejan con un look digital plano-moderno apoyado en bordes y transparencias selectivas, limitando el uso de sombras pesadas.

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Featured elements |

### Animaciones de Elevación y Movimiento (tailwind.config.ts)

| Animación | Definición |
| :--- | :--- |
| `accordion-down` | `accordion-down 0.2s ease-out` |
| `accordion-up` | `accordion-up 0.2s ease-out` |
| `h-scroll` | `h-scroll 45s linear infinite` |
| `float` | `float 6s ease-in-out infinite` |
| `spin-slow` | `spin-slow 8s linear infinite` |

---

## Shapes
La curvatura de las esquinas está estandarizada bajo una escala geométrica específica para dar coherencia a todos los componentes.

### Configuración de Bordes (Border Radius)

| Token | Radio | Uso Recomendado |
| :--- | :--- | :--- |
| `rounded-DEFAULT` if k != 'DEFAULT' else `rounded` | `0.5rem` | Esquinas configuradas en Tailwind |
| `rounded-full` if k != 'DEFAULT' else `rounded` | `9999px` | Esquinas configuradas en Tailwind |
| `rounded-lg` if k != 'DEFAULT' else `rounded` | `1rem` | Esquinas configuradas en Tailwind |
| `rounded-md` if k != 'DEFAULT' else `rounded` | `0.75rem` | Esquinas configuradas en Tailwind |
| `rounded-sm` if k != 'DEFAULT' else `rounded` | `0.25rem` | Esquinas configuradas en Tailwind |
| `rounded-xl` if k != 'DEFAULT' else `rounded` | `1.5rem` | Esquinas configuradas en Tailwind |

---

## Components
- **Estilo del Sistema:** `default`
- **Icon Library:** `lucide`
- **Aliases de Importación:**
  - `@components` -> `@/components`
  - `@utils` -> `@/lib/utils`
  - `@ui` -> `@/components/ui`
  - `@lib` -> `@/lib`
  - `@hooks` -> `@/hooks`

### Especificaciones de Componentes Estilo CSS

```css
/* Botón Primario */
.btn-primary {
  background-color: hsl(var(--primary));
  color: white;
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

/* Botón Secundario */
.btn-secondary {
  background-color: transparent;
  color: hsl(var(--primary));
  border: 2px solid hsl(var(--border));
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 0.75rem; /* rounded-md */
  transition: all 200ms ease;
  cursor: pointer;
}

/* Tarjeta (Card) */
.card {
  background-color: hsl(var(--card));
  border-radius: 1.5rem; /* rounded-xl */
  padding: 24px;
  border: 1px solid hsl(var(--border));
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
}
.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

---

## Do’s and Don’ts

### SÍ Hacer (Do’s):
*   **SÍ** utilizar las variables semánticas HSL en lugar de valores HEX harcodeados.
*   **SÍ** utilizar la tipografía **Orbitron** (`text-code-tracking`, `text-display-*`) para códigos de seguimiento de pedidos, tarifas, precios y contadores numéricos.
*   **SÍ** estructurar las tarjetas de la aplicación utilizando la escala estándar de bordes redondeados (`rounded-xl` para el contenedor y `rounded-md` para botones/campos internos).
*   **SÍ** usar SVG e iconos vectoriales procedentes de la librería oficial de iconos, garantizando consistencia en tamaño.
*   **SÍ** agregar `cursor-pointer` a todas las tarjetas, botones y elementos interactivos que tengan estados hover.
*   **SÍ** implementar transiciones suaves de color y transformación (`transition-all duration-200`) para suavizar el paso del mouse del usuario.

### NO Hacer (Don’ts):
*   **NO** harcodear colores en formato HEX en las clases de Tailwind de los componentes.
*   **NO** deshabilitar el anillo de enfoque nativo (`*:focus-visible` o `focus-visible:ring-2`) para mantener el estándar de accesibilidad.
*   **NO** agregar sombras pesadas o de colores oscuros en temas oscuros; en su lugar, priorizar bordes finos con el token `border-border` o usar efectos de translucidez.
*   **NO** mezclar bordes con radios personalizados arbitrarios fuera de las variables ya mapeadas.
*   **NO** utilizar emojis como iconos principales en la interfaz de la plataforma.
*   **NO** usar escalas bruscas en efectos hover que alteren o desplacen el flujo y tamaño general del layout (causando layout shift).

---

### Pre-Delivery Checklist
- [ ] No emojis usados como iconos (usar SVG)
- [ ] `cursor-pointer` en todos los elementos interactivos
- [ ] Estados hover con transiciones suaves (150-300ms)
- [ ] Light mode: contraste de texto 4.5:1 mínimo
- [ ] Enfoques visuales activos para accesibilidad
- [ ] Layout responsivo y elástico verificado
