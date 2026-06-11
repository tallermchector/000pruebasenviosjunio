# Landing Page Style Guide - Variante 5: Motion-Driven

> **PROJECT:** Envios DosRuedas (Dos Ruedas Pro)
> **Generated:** 2026-06-11
> **Page Variant:** 5 (Motion-Driven Experience)
> **Design Philosophy:** Scroll-Bound Animations, Path Drawing, Dynamic Transitions

---

## 1. Design Rules & Tokens

### Color Palette (Modo Oscuro Logístico)

| Role | Color Hex | HSL Token | Semantic Justification |
| :--- | :--- | :--- | :--- |
| **Background** | `#040710` | `hsl(227 59% 4%)` | Deep maritime navy. |
| **Foreground / Text**| `#F8FAFC` | `hsl(210 40% 98%)` | Off-white reading text. |
| **Primary Brand** | `#3B82F6` | `hsl(217 91% 60%)` | Speed Blue. Main focus and motion paths. |
| **Secondary Brand** | `#E7B008` | `hsl(45 93% 46%)` | Warning Yellow. Highlight tags and active steps. |
| **Muted** | `#1E293B` | `hsl(215 28% 17%)` | Dark slate containers. |
| **Border** | `#1E293B` | `hsl(215 28% 17%)` | Fine boundaries. |

### Typography

*   **Headings & Tracking Codes:** `Orbitron` (`font-display`). Tech-monospace.
*   **Body & Descriptions:** `Roboto` (`font-sans`). Neutral high-performance reading.

---

## 2. Motion & Interaction Specifications

### Key Effects
*   **Scroll-Driven Path Drawing:** Interactive SVG paths (simulating delivery routes) that trace themselves dynamically as the user scrolls down the page.
*   **Smooth Motion Reveal:** Staggered content entries (`opacity-0 translate-y-4 hover:translate-y-0 hover:opacity-100`) triggered via scroll events.
*   **Active Indicator Lines:** Hovering navbar links draws a dynamic line from left to right (`transition-all duration-300 w-0 group-hover:w-full h-[1px] bg-primary`).

---

## 3. Component Specs

### Cards & Bento Blocks
*   **Base:** Translucent container `bg-muted/40 backdrop-blur-sm border border-border/60 rounded-xl`.
*   **Hover:** Dynamic linear border highlight via CSS transitions (`transition-all duration-300 hover:border-primary/50`).
