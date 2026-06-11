# Landing Page Style Guide - Variante 1: Minimalism & Swiss Style

> **PROJECT:** Envios DosRuedas (Dos Ruedas Pro)
> **Generated:** 2026-06-11
> **Page Variant:** 1 (Luminous Minimalism)
> **Design Philosophy:** International Typographic Style (Swiss Style) & Minimal Direct Conversion

---

## 1. Design Rules & Tokens

### Color Palette (High-Contrast Swiss Minimalism)

This variant rejects all gradients, drop shadows, and complex textures in favor of absolute flat surfaces, heavy typographic contrast, and pure layout geometry.

| Role | Color Hex | Tailwind Class | Semantic Justification |
| :--- | :--- | :--- | :--- |
| **Background** | `#FFFFFF` | `bg-white` | Base canvas. Maximum negative space and cleanliness. |
| **Foreground / Text**| `#000000` | `text-black` | Bold, crisp reading. Zero grey-outs for primary headlines. |
| **Muted Text** | `#4B5563` | `text-gray-600` | Explanations, subtexts with high contrast ratio. |
| **Primary Accent** | `#E11D48` | `bg-rose-600` / `text-rose-600` | Swiss Red. Accent highlight, brand lines, focus states. |
| **Secondary Accent**| `#1D4ED8` | `bg-blue-700` / `text-blue-700` | Royal Blue. Used for links and secondary category identifiers. |
| **Border** | `#000000` | `border-black` | Hard outlines of 1px or 2px. Sharp, structured separation. |
| **System Muted** | `#F3F4F6` | `bg-gray-100` | Subtle background offset for table heads. |

### Typography

*   **Primary Headings & Body:** `Inter` or `Helvetica` simulated via `font-sans` with tight tracking (`tracking-tighter` / `tracking-tight`) and extra-black weight (`font-black` / `font-extrabold`).
*   **Accents & Codes:** Monospace typography `font-mono` (simulating a clean typewriter style) for tracking numbers, labels, and small technical tags (e.g. `[DR-7922-MDP]`).

---

## 2. Layout & Structure (Minimal & Direct)

1.  **Direct Hero:** One massive bold headline, a concise 2-sentence value prop, and a single high-contrast flat CTA button with sharp corners.
2.  **Modular Service Grid:** Grid rows divided by clean black lines (`border-t border-black`) with no elevation, highlighting typography.
3.  **Linear Trust Elements:** Testimonials structured in clean, text-only cards with clear sender details.
4.  **No-Friction Footer:** Contact information laid out as a flat grid directory.

---

## 3. Component Specifications

### Buttons
*   **Action Primary:** Sharp corners, black background with white text (`bg-black text-white hover:bg-rose-600 transition-colors duration-150`).
*   **Action Secondary:** Outline button with flat border (`border border-black hover:bg-gray-50`).

### Cards & Containers
*   **Base:** No shadows. Hard black outlines `border border-black rounded-none bg-white`.
*   **Hover:** Flat background color shifts (e.g. swapping `bg-white` to `bg-rose-50` or `bg-gray-50`) without vertical movement.
