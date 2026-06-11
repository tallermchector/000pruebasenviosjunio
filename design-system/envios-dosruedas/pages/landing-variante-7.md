# Landing Page Style Guide - Variante 7: 3D & Hyperrealism

> **PROJECT:** Envios DosRuedas (Dos Ruedas Pro)
> **Generated:** 2026-06-11
> **Page Variant:** 7 (3D Holographic UI)
> **Design Philosophy:** 3D Spatial Depth, Neon Illumination, Spatial Overlays

---

## 1. Design Rules & Tokens

### Color Palette (Modo Oscuro Logístico)

| Role | Color Hex | HSL Token | Semantic Justification |
| :--- | :--- | :--- | :--- |
| **Background** | `#040710` | `hsl(227 59% 4%)` | Spatial background canvas. |
| **Foreground / Text**| `#F8FAFC` | `hsl(210 40% 98%)` | High-definition reading text. |
| **Primary Brand** | `#3B82F6` | `hsl(217 91% 60%)` | Speed Blue glow base. |
| **Secondary Brand** | `#E7B008` | `hsl(45 93% 46%)` | Warning Yellow highlighter. |
| **Z-Depth Aura** | `#1E3A8A` | `hsl(224 76% 18%)` | Background light glow step. |
| **Border** | `#1E293B` | `hsl(215 28% 17%)` | Outlines for glass containers. |

### Typography

*   **Headings & Tracking Codes:** `Orbitron` (`font-display`). Futuristic and solid.
*   **Body & Descriptions:** `Roboto` (`font-sans`). High-readability technical copy.

---

## 2. 3D & Spatial Interaction Specifications

### Key Effects
*   **Perspective Rotate (3D Tilt):** Main Hero tracking card tilts and rotates dynamically in 3D space (`perspective(1000px) rotateX(Ndeg) rotateY(Mdeg)`) following mouse moves.
*   **Holographic Neon Auras:** Glowing backdrop shadows utilizing radial-gradient borders that simulate double-layered neon lighting.
*   **Floating Spatial Panels:** Floating status badges absolute-positioned at different depths (`z-10` vs `z-20`) simulating a spatial AR display overlay.

---

## 3. Component Specs

### Cards & Bento Blocks
*   **Base:** Deeply rounded `rounded-2xl`, translucent black `bg-[#070c18]/80 backdrop-blur-xl border border-white/5 shadow-2xl shadow-blue-900/10`.
*   **Hover:** Dynamic scale transform `hover:scale-[1.02] hover:shadow-blue-500/20 hover:border-primary/40 transition-all duration-500`.
