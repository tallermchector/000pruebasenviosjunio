# Landing Page Overrides - Light Mode Redesign

> **PROJECT:** Envios DosRuedas (Dos Ruedas Pro)
> **Generated:** 2026-06-11
> **Page Type:** Landing / Marketing (Conversion-Optimized)
> **Theme:** Light Logistics & High-Tech Precision

⚠️ **IMPORTANT:** The specifications below **override** the Master file (`design-system/MASTER.md`) for the main landing page, establishing a clean, modern, luminous, and conversion-focused interface.

---

## 1. Page-Specific Rules

### Color Palette (Luminous/Light Mode)

To optimize for trust, friendliness, and high retail conversion, the colors shift from a dark theme to a clean, bright layout with vibrant delivery accents.

| Role | HSL / Hex Token | Tailwind Class | Semantic Usage |
| :--- | :--- | :--- | :--- |
| **Background** | `hsl(210 40% 98%)` / `#F8FAFC` | `bg-slate-50` | Main landing background. Crisp and clean. |
| **Secondary Background**| `hsl(214 100% 97%)` / `#EFF6FF` | `bg-blue-50` | Section backgrounds, bento grid blocks. |
| **Foreground / Text** | `hsl(224 71% 4%)` / `#020617` | `text-slate-950` | Principal headings and titles. |
| **Muted Text** | `hsl(215 16% 47%)` / `#475569` | `text-slate-600` | Paragraphs and secondary details. |
| **Primary** | `hsl(221.2 83.2% 53.3%)` / `#2563EB`| `text-blue-600` / `bg-blue-600`| Speed Blue. Brand logo, primary highlights, tracking statuses. |
| **Secondary** | `hsl(217.2 91.2% 59.8%)` / `#3B82F6`| `text-blue-500` / `bg-blue-500`| Soft brand accents. |
| **CTA / Accent** | `hsl(24.6 95% 53.1%)` / `#F97316` | `bg-orange-500` / `text-orange-500`| Delivery Orange. High-priority CTAs, buttons, active states. |
| **CTA Hover** | `hsl(24.6 95% 43.1%)` / `#EA580C` | `bg-orange-600` | Hover states for primary conversion actions. |
| **Border** | `hsl(214.3 31.8% 91.4%)` / `#E2E8F0`| `border-slate-200` | Clean, subtle grid lines and component borders. |

### Typography

To balance technical logistic precision with retail e-commerce friendliness:
*   **Headings & Tracking Codes:** `Orbitron` (`font-display`). Tech-futuristic. Used for H1/H2 titles, metrics, pricing, and tracking numbers (e.g. `DR-7922-MDP`).
*   **Body & Descriptions:** `Roboto` (`font-sans`). Neutral and clean. Used for all reading prose, lists, and forms to maximize scannability.

---

## 2. Component Specifications

### Glass Cards (Luminous Mode)
Cards in the Bento Grid (`services`) and PyME sections must feel elevated and premium:
*   **Base:** White semi-translucent background `bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm`.
*   **Interactive Hover:** Smooth lift and shadow expansion: `hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/30 transition-all duration-300`.

### Form Fields & Inputs
Used in the calculator and contact forms:
*   **Base:** White background `bg-white`, border `border-slate-300` with text `text-slate-900`.
*   **Focus:** Focused blue border `focus:border-blue-500`, with focus ring `focus:ring-2 focus:ring-blue-500/10`.

### Buttons (High-Conversion Layout)
*   **Primary Action (CTA):** Vibrantly colored `bg-orange-500` with text `text-white`. Borders: `border-2 border-orange-600/20`. Elevation: `shadow-md shadow-orange-500/20 hover:bg-orange-600 hover:scale-[1.02] transition-all duration-200`.
*   **Secondary Action:** Transparent background with blue outline `border border-blue-600 text-blue-600 hover:bg-blue-50/50`.

---

## 3. Anti-Patterns (Do NOT Use)

*   ❌ **No transparent cards on light mode:** Avoid using `bg-white/10` or low opacity values in light mode; it reduces readability drastically. Always use `bg-white/80` or higher.
*   ❌ **No emojis as icons:** Emoji graphics are strictly forbidden. Use clean SVG icons (Lucide React).
*   ❌ **No layout-shifting hover effects:** Hover states must not resize borders or scale cards drastically enough to reflow neighbor components.
*   ❌ **No pitch-black overlays:** Drop shadows in light mode must use a low opacity value (`rgba(0, 0, 0, 0.05)` or `0.08`), never solid black.
