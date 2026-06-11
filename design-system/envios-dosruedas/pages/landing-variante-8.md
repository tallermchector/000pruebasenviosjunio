# Landing Page Style Guide - Variante 8: Micro-interactions

> **PROJECT:** Envios DosRuedas (Dos Ruedas Pro)
> **Generated:** 2026-06-11
> **Page Variant:** 8 (Micro-interaction Focus)
> **Design Philosophy:** Feedback Loops, Dynamic State Loading, Micro-animations

---

## 1. Design Rules & Tokens

### Color Palette (Modo Oscuro Logístico)

| Role | Color Hex | HSL Token | Semantic Justification |
| :--- | :--- | :--- | :--- |
| **Background** | `#040710` | `hsl(227 59% 4%)` | Dark mode base canvas. |
| **Foreground / Text**| `#F8FAFC` | `hsl(210 40% 98%)` | High-contrast reading. |
| **Primary Brand** | `#3B82F6` | `hsl(217 91% 60%)` | Active action triggers. |
| **Secondary Brand** | `#E7B008` | `hsl(45 93% 46%)` | Warning yellow accents. |
| **Muted** | `#1E293B` | `hsl(215 28% 17%)` | Dark slate containers. |
| **Border** | `#1E293B` | `hsl(215 28% 17%)` | Fine boundaries. |

### Typography

*   **Headings & Tracking Codes:** `Orbitron` (`font-display`). MONOSPACE look.
*   **Body & Descriptions:** `Roboto` (`font-sans`). Neutral technical readability.

---

## 2. Micro-interaction Specifications

### Key Effects
*   **Dynamic Loading Indicators:** CTAs immediately trigger a micro-spinner inside the button, showing active feedback before launching any link.
*   **Interactive Input Pulsing:** Form inputs have a focus glow ring that scales in opacity and width (`focus:ring-4 focus:ring-primary/20 transition-all duration-300`).
*   **Bento Card Stat Reveals:** Hovering over Bento Grid cards slide-reveals micro-statistics or success rates of that specific service in a neat lower tag.

---

## 3. Component Specs

### Cards & Bento Blocks
*   **Base:** Translucent container `bg-muted/30 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden`.
*   **Hover:** Dynamic scale and opacity shift inside interior tags `hover:border-primary/40 transition-all duration-200`.
