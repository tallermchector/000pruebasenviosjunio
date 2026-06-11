# Landing Page Style Guide - Variante 3: Neo-Brutalismo Luminoso

> **PROJECT:** Envios DosRuedas (Dos Ruedas Pro)
> **Generated:** 2026-06-11
> **Page Variant:** 3 (High-Impact Neo-Brutalism)
> **Design Philosophy:** Neo-Brutalism & Bento Grid Showcase

---

## 1. Design Rules & Tokens

### Color Palette (Neo-Brutalist High Contrast)

This variant uses hyper-saturated, bright tones, thick solid black borders, and hard displacement shadows without blur.

| Role | Color Hex | Tailwind Class | Semantic Justification |
| :--- | :--- | :--- | :--- |
| **Background** | `#FEE2E2` / `#FEF08A` | `bg-amber-50` / `bg-red-50` | Vibrant warm canvas background. |
| **Foreground / Text**| `#000000` | `text-black` | Maximum contrast for text. |
| **Primary Accent** | `#2563EB` | `bg-blue-600` / `text-blue-600` | Royal Blue. Used for primary blocks and solid overlays. |
| **Secondary Accent**| `#F97316` | `bg-orange-500` / `text-orange-500`| Delivery Orange. High-priority CTAs. |
| **Highlighter** | `#FACC15` | `bg-yellow-400` | Neon Yellow. Secondary buttons, tags. |
| **Border** | `#000000` | `border-black` | 2px or 3px solid black outlines on everything. |
| **Hard Shadow** | `#000000` | `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`| Solid black shadow offset. No blur. |

### Typography

*   **Headings:** `Orbitron` (`font-display`) with black weight, tight spacing, uppercase.
*   **Body & Lists:** `Inter` or `Roboto` (`font-sans`) in bold black outlines for readability in technical specs.

---

## 2. Layout & Structure (Bento Grid Showcase)

1.  **Split Hero:** Asymmetric block layout. Left: Massive text, big CTA button. Right: Brutalist tracking simulator.
2.  **Bento Grid Solutions:** Asymmetric grid cells, each with a different color block (Yellow, Blue, Orange, Red) and solid black shadows.
3.  **Visual Metrics:** Heavy blocks with thick borders displaying core logistics data.
4.  **Flat Directory Footer:** Solid black block with high-contrast text.

---

## 3. Component Specifications

### Buttons
*   **Action Primary:** `swiss-border bg-orange-500 text-black font-bold uppercase py-4 px-8 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all rounded-none`.
*   **Action Secondary:** Outline flat border with no shadow `border-2 border-black hover:bg-white/40`.

### Cards & Blocks
*   **Base:** Thick borders `border-2 border-black rounded-none bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`.
*   **Hover:** Translate effect `hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all`.
