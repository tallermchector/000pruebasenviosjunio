# Dos Ruedas Pro - Sistema de Diseño Visual

## Overview
Dos Ruedas Pro es una plataforma moderna de gestión logística de última milla diseñada para optimizar la eficiencia operativa y la experiencia de mensajería en Mar del Plata. El sistema de diseño visual persigue una estética tecnológica, de alto rendimiento y limpia, orientada en primer lugar a un tema oscuro ("dark mode") acentuado por colores neón vibrantes. Esto transmite dinamismo, precisión y rapidez en el rastreo y despacho de envíos, integrando un flujo consistente que va desde el panel web de control hasta la generación de etiquetas imprimibles en formato físico A4.

## Colors
La paleta está definida a través de variables CSS HSL que permiten soporte nativo para temas claro ("light") y oscuro ("dark").

| Token de Sistema | Variable CSS | Valor HEX (Claro) | Valor HEX (Oscuro) | Rol Semántico / Justificación de Uso |
| :--- | :--- | :--- | :--- | :--- |
| **Background** | `--background` | `#ffffff` | `#040710` | Fondo general de la aplicación. El modo oscuro implementa un azul marino profundo para reducir la fatiga visual. |
| **Foreground** | `--foreground` | `#020817` | `#f8fafc` | Color base para textos e información principal. |
| **Primary** | `--primary` | `#2563eb` | `#3b82f6` | Azul real brillante. Representa confianza, profesionalismo y velocidad. Usado en botones primarios y acentos clave. |
| **Primary FG** | `--primary-foreground` | `#f8fafc` | `#0f172a` | Texto de alto contraste para mostrar sobre fondos primarios. |
| **Secondary** | `--secondary` | `#e7b008` | `#e7b008` | Amarillo/Ámbar de alta visibilidad. Usado para destacar tarifas, alertas suaves y elementos activos de atención. |
| **Secondary FG** | `--secondary-foreground`| `#412006` | `#412006` | Color del texto sobre fondos secundarios (marrón oscuro de excelente contraste). |
| **Muted** | `--muted` | `#f1f5f9` | `#1e293b` | Fondos de elementos inactivos, subtítulos o cabeceras de tablas secundarias. |
| **Muted FG** | `--muted-foreground` | `#64748b` | `#94a3b8` | Texto secundario, etiquetas de formulario y descripciones de menor relevancia. |
| **Accent** | `--accent` | `#f1f5f9` | `#1e293b` | Fondos de elementos activos o en estado hover. |
| **Accent FG** | `--accent-foreground` | `#0f172a` | `#f8fafc` | Texto para elementos acentuados. |
| **Destructive** | `--destructive` | `#ef4444` | `#7f1d1d` | Rojo semántico de peligro. Usado para cancelaciones de envíos y borrado de registros. |
| **Destructive FG**|`--destructive-foreground`| `#f8fafc` | `#f8fafc` | Texto sobre fondos destructivos. |
| **Border** | `--border` | `#e2e8f0` | `#1e293b` | Bordes de separación, líneas de tablas y separadores sutiles. |
| **Input** | `--input` | `#e2e8f0` | `#1e293b` | Bordes para elementos de formulario e inputs. |
| **Ring** | `--ring` | `#020817` | `#3b82f6` | Anillo de enfoque de accesibilidad para navegación por teclado. |

## Typography
El proyecto utiliza dos familias tipográficas complementarias para equilibrar la lectura técnica de datos con la identidad digital de la marca:

1.  **Roboto** (`--font-roboto` / `--font-sans`): Tipografía sans-serif principal. Utilizada para el cuerpo de texto, formularios y tablas de datos. Aporta una legibilidad neutra y limpia indispensable para la lectura rápida en entornos dinámicos de despacho.
2.  **Orbitron** (`--font-orbitron` / `--font-display`): Tipografía display/monospace de corte digital y futurista. Utilizada estrictamente en números, códigos de seguimiento (tracking), precios y titulares principales. Refuerza la identidad visual de "rastreo logístico".

### Escala Tipográfica (Clases de Utilidad CSS)

*   **`text-display-lg`**: `48px` | Peso: `900` | Interlineado: `1.1` | Tracking: `-0.02em` | Tipografía: Orbitron. Usado para títulos hero.
*   **`text-display-md`**: `32px` | Peso: `700` | Interlineado: `1.2` | Tracking: `-0.01em` | Tipografía: Orbitron. Usado en títulos de páginas principales.
*   **`text-headline-lg`**: `24px` | Peso: `700` | Interlineado: `1.3` | Tracking: `0.02em` | Tipografía: Orbitron. Títulos de secciones en escritorio.
*   **`text-headline-lg-mobile`**: `20px` | Peso: `700` | Interlineado: `1.3` | Tipografía: Orbitron. Títulos de secciones en móviles.
*   **`text-headline-md`**: `24px` | Peso: `600` | Interlineado: `1.3` | Tipografía: Orbitron. Subtítulos de flujo de datos.
*   **`text-body-lg`**: `18px` | Peso: `400` | Interlineado: `1.6` | Tipografía: Roboto. Párrafos destacados o introductorios.
*   **`text-body-md`**: `16px` | Peso: `400` | Interlineado: `1.5` | Tipografía: Roboto. Texto de cuerpo estándar y formularios.
*   **`text-label-md`**: `14px` | Peso: `700` | Interlineado: `1.2` | Tracking: `0.05em` | Tipografía: Roboto. Texto de botones primarios y etiquetas de control.
*   **`text-label-sm`**: `12px` | Peso: `400` | Interlineado: `1.2` | Tracking: `0.1em` | Tipografía: Roboto. Leyendas de error o textos aclaratorios.
*   **`text-code-tracking`**: `16px` | Peso: `400` | Interlineado: `1.0` | Tracking: `0.1em` | Tipografía: Orbitron. Formato de códigos de seguimiento.

## Layout
El sistema de layouts está estructurado para maximizar el espacio en pantallas de monitoreo de despacho y soportar el renderizado elástico en dispositivos móviles:

*   **Ancho Máximo del Contenedor:** `1400px` (definido bajo el breakpoint `2xl` y `--container-max`).
*   **Escala de Espaciado (Padding / Margen / Gap):**
    *   `xs` / `base`: `4px` - Margen interno mínimo.
    *   `sm`: `8px` - Espacio de separación micro.
    *   `md` / `gutter`: `16px` - Espaciado estándar entre tarjetas, campos de formulario y margen móvil por defecto (`margin-mobile`).
    *   `lg` / `margin-desktop`: `32px` - Margen por defecto para escritorio.
    *   `xl`: `64px` - Espacio de separación macro entre secciones.
*   **Cuadrícula Imprimible (A4):** Diseñado específicamente para etiquetas físicas de envíos mediante la directiva `@media print` (`@page { size: A4; margin: 10mm; }`). Las etiquetas se organizan en una grilla de dos columnas (`repeat(2, 1fr)`) con una separación exacta de `10mm` (`gap: 10mm`).

## Elevation & Depth
La jerarquía visual se establece mediante capas estructuradas de profundidad y transiciones fluidas de los elementos:

*   **Sombras y Separadores:** Los contenedores se separan de la base mediante un uso controlado de bordes (`border`) y desenfoques (backdrop-blur) en lugar de sombras pesadas, manteniendo un look digital moderno.
*   **Interactividad:** Las transiciones de enfoque se manejan con un contorno de accesibilidad estándar (`*:focus-visible`) que añade una línea de `2px` sólida con color `hsl(var(--ring))` y un desplazamiento de `2px`.
*   **Animaciones y Movimientos Clave:**
    *   `float`: Animación de flotado vertical de `6s` (`translateY(-10px)`) para elementos decorativos de la marca.
    *   `spin-slow`: Rotación lenta de `8s` para elementos de fondo interactivos.
    *   `h-scroll`: Marquee infinito de `45s` para la sección de redes y marcas.
    *   `accordion-down` / `accordion-up`: Transiciones Radix de `0.2s` para expansión vertical de acordeones colapsables.

## Shapes
Las esquinas y geometrías de las tarjetas y botones siguen una escala definida de suavidad visual:

*   **`rounded-xl` (`1.5rem` / `24px`):** Utilizado en tarjetas principales contenedoras de secciones y paneles principales.
*   **`rounded-lg` (`1.0rem` / `16px`):** Utilizado para diálogos modales, popovers de gran tamaño y tarjetas de segundo nivel.
*   **`rounded-md` (`0.75rem` / `12px`):** Esquina estándar por defecto. Aplicada en inputs de formularios y botones interactivos principales.
*   **`rounded` (`0.5rem` / `8px`):** Valor base de la variable `--radius`. Usado en insignias pequeñas y componentes micro.
*   **`rounded-sm` (`0.25rem` / `4px`):** Esquinas de selectores y checkbox.
*   **`rounded-full` (`9999px`):** Reservado para avatares de usuarios, píldoras indicadoras de estado y botones circulares de acción flotante.

## Components
El ecosistema de componentes se basa en la especificación estándar de **shadcn/ui** combinada con Tailwind CSS:

*   **Estilo del Sistema:** `default` (neutro/moderno).
*   **Librería de Iconos:** Standardizado bajo **Lucide React**.
*   **Estructura de Componentes:**
    *   **Primitivos:** Localizados en `@/components/ui/` (ej. `button.tsx`, `card.tsx`, `input.tsx`).
    *   **Modulares:** Componentes compuestos e interactivos encapsulados en subcarpetas de `@/components/` (ej. `calculator`, `contact`, `express`).
*   **Barra de Desplazamiento Personalizada:**
    *   Ancho: `8px`.
    *   Fondo de pista (Track): `hsl(var(--muted))`.
    *   Botón de arrastre (Thumb): `hsl(var(--primary))` con bordes redondeados (`4px`), reduciendo opacidad a `0.8` en estado hover.

## Do’s and Don’ts

### SÍ Hacer:
*   **SÍ** utilizar la tipografía **Orbitron** (`text-code-tracking`, `text-display-*`) para códigos de seguimiento de pedidos, tarifas, precios y contadores numéricos.
*   **SÍ** estructurar las tarjetas de la aplicación utilizando la escala estándar de bordes redondeados (`rounded-xl` para el contenedor y `rounded-md` para botones/campos internos).
*   **SÍ** maquetar las vistas de etiquetas e informes asegurándote de usar las clases `.no-print` y `.print-only` para que las impresiones físicas en hojas A4 no contengan la barra de navegación web.
*   **SÍ** utilizar la escala de espaciado semántica (`md` para márgenes generales de separación en móvil, `lg` para escritorio) para mantener la consistencia vertical y horizontal.

### NO Hacer:
*   **NO** harcodear colores en formato HEX (como `#ffffff` o `#000000`) en las clases de Tailwind. Usar siempre las variables semánticas en HSL (`bg-background`, `text-foreground`, `border-border`) para garantizar la consistencia en los modos claro y oscuro.
*   **NO** deshabilitar el anillo de enfoque nativo (`*:focus-visible`) para mantener el estándar de accesibilidad web (WCAG 2.1) del sistema.
*   **NO** agregar sombras pesadas o de colores oscuros en temas oscuros; en su lugar, priorizar bordes finos con el token `border-border` o usar efectos de translucidez mediante backdrop-blur.
*   **NO** mezclar bordes con radios personalizados arbitrarios (como `rounded-[14px]`) fuera de las variables ya mapeadas (`xl`, `lg`, `md`, `sm`).
