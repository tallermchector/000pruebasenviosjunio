# Landing Page Style Guide - Variante 2: Soft UI Evolution

> **PROJECT:** Envios DosRuedas (Dos Ruedas Pro)
> **Generated:** 2026-06-11
> **Page Variant:** 2 (Corporate Trust & Authority)
> **Design Philosophy:** Soft UI, Gentle Shadows, Rounded Geometries, Trust & Authority

---

## 1. Design Rules & Tokens

### Color Palette (Corporate Trust & Assurance)

This variant employs soft, diffuse light reflections, extremely rounded elements, and a calm, authoritative corporate color scheme.

| Role | Color Hex | Tailwind Class | Semantic Justification |
| :--- | :--- | :--- | :--- |
| **Background** | `#F8FAFC` | `bg-slate-50` | Soft, calm overall layout base. |
| **Foreground / Text**| `#0F172A` | `text-slate-900` | Warm dark slate for easy, approachable reading. |
| **Muted Text** | `#64748B` | `text-slate-500` | Secondary copy, descriptions, and labels. |
| **Primary Brand** | `#1E3A8A` | `bg-blue-900` / `text-blue-900` | Deep Trust Blue. Brand representation, headers. |
| **Secondary Accent**| `#3B82F6` | `bg-blue-500` / `text-blue-500` | Sky Blue. Focus states, links. |
| **CTA / Highlight** | `#10B981` | `bg-emerald-500` / `text-emerald-500` | Safety Green. High-conversion buttons, status OK signals. |
| **CTA Hover** | `#059669` | `bg-emerald-600` | Active conversion action hover states. |
| **Border** | `#F1F5F9` | `border-slate-100` | Extremely soft boundaries. |

### Typography

*   **Primary Headings:** `Plus Jakarta Sans` or `Nunito` via `font-sans` with medium tracking, extra-rounded letters, and semi-bold/bold weight (`font-bold` / `font-semibold`).
*   **Body & Descriptions:** `Roboto` or `Nunito Sans` (`font-sans`) for highly friendly, readable lists, details, and forms.

---

## 2. Layout & Structure (Trust & Authority)

1.  **Authoritative Hero:** Large welcoming headline, confidence sub-text, security seal badges, and a soft, friendly CTA button.
2.  **Métricas Destacadas:** High-impact metric grid showing customer success, fleet statistics, and historical achievements.
3.  **Comprehensive Bento Grid:** Cards with extremely rounded corners, featuring clear service listings, trust tags ("Socio Flex Homologado"), and clean descriptions.
4.  **Verified Testimonials Slider:** Social proof with star ratings, verified badges, and client avatars.

---

## 3. Component Specifications

### Buttons
*   **Action Primary:** Extremely rounded `rounded-full`, emerald background with white text (`bg-emerald-500 text-white shadow-md shadow-emerald-500/10 hover:bg-emerald-600 transition-all duration-300`).
*   **Action Secondary:** Rounded outline `rounded-full border border-blue-900/15 text-blue-900 hover:bg-blue-50/50`.

### Cards & Containers
*   **Base:** Deeply rounded `rounded-3xl` (`1.75rem`), white background `bg-white` with extremely soft, diffuse shadows `shadow-xl shadow-slate-200/40 border border-slate-100/60`.
*   **Hover:** Gentle vertical lift `hover:-translate-y-1` and shadow expansion `hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300`.
