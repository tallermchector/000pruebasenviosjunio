# Landing Page Style Guide - Variante 4: Glassmorphism Luminous & Aura Gradient

> **PROJECT:** Envios DosRuedas (Dos Ruedas Pro)
> **Generated:** 2026-06-11
> **Page Variant:** 4 (Luminous Aura Tech)
> **Design Philosophy:** Glassmorphism & Hero-Centric Single-Focus Journey

---

## 1. Design Rules & Tokens

### Color Palette (Luminous Aura Tech)

This variant employs translucent layers, high-definition backdrop blurs, soft colorful background glows (auras), and extremely fine borders.

| Role | Color Hex | Tailwind Class | Semantic Justification |
| :--- | :--- | :--- | :--- |
| **Background** | `#F8FAFC` | `bg-slate-50` | Base canvas. Clean slate. |
| **Aura Glow 1** | `#EFF6FF` | `glow-blue` | Cyan-blue background glow representing digital precision. |
| **Aura Glow 2** | `#ECFDF5` | `glow-green` | Green-mint background glow representing trust and eco-delivery. |
| **Foreground / Text**| `#0F172A` | `text-slate-900` | Deep slate for body reading. |
| **Primary Accent** | `#3B82F6` | `bg-blue-500` / `text-blue-500` | Sky Blue. Primary branding. |
| **Highlight / CTA** | `#10B981` | `bg-emerald-500` / `text-emerald-500`| Emerald Green. High-conversion CTAs. |
| **Border** | `rgba(255, 255, 255, 0.6)`| `border-white/60` | Super fine translucent divider. |
| **Glass Card Bg** | `rgba(255, 255, 255, 0.4)`| `bg-white/40` | Translucent glass base. |

### Typography

*   **Headings:** `Plus Jakarta Sans` or `Satoshi` via `font-sans` with light/medium tracking, modern and friendly.
*   **Body:** `Roboto` or `Inter` (`font-sans`) for highly readable lists, details, and forms.

---

## 2. Layout & Structure (Hero-Centric Single-Focus Journey)

1.  **Aura Hero:** A clean hero with soft color gradients, a large clear title, and a glassy, elevated tracking card widget.
2.  **Glass Bento Grid:** Translucent cards (`backdrop-blur-xl bg-white/40`) showing services, highlighted by subtle glow effects.
3.  **Social Proof Carousel:** Continuous sliding of clients, quotes, and trust tags.
4.  **Single CTA Form:** Clean, simplified email/WhatsApp form inside a glassy card.

---

## 3. Component Specifications

### Buttons
*   **Action Primary:** Extremely rounded `rounded-full`, emerald background with a high-definition translucent glow effect (`bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.01]`).
*   **Action Secondary:** Glass-outline button `rounded-full border border-slate-300 text-slate-700 bg-white/50 hover:bg-slate-100/50`.

### Cards & Containers
*   **Base:** Translucent glass `rounded-2xl` (`1.0rem`), white/glass background `bg-white/50 backdrop-blur-xl border border-white/60 shadow-lg shadow-slate-200/20`.
*   **Hover:** Gentle vertical float and glow highlight `hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400/40 transition-all duration-300`.
