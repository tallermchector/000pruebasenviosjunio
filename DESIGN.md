---
tokens:
  colors:
    light:
      background: "0 0% 100%"
      foreground: "222.2 84% 4.9%"
      card: "0 0% 100%"
      card-foreground: "222.2 84% 4.9%"
      popover: "0 0% 100%"
      popover-foreground: "222.2 84% 4.9%"
      primary: "221.2 83.2% 53.3%"
      primary-foreground: "210 40% 98%"
      secondary: "45 93% 47%"
      secondary-foreground: "26 83% 14%"
      muted: "210 40% 96.1%"
      muted-foreground: "215.4 16.3% 46.9%"
      accent: "210 40% 96.1%"
      accent-foreground: "222.2 47.4% 11.2%"
      destructive: "0 84.2% 60.2%"
      destructive-foreground: "210 40% 98%"
      border: "214.3 31.8% 91.4%"
      input: "214.3 31.8% 91.4%"
      ring: "222.2 84% 4.9%"
      surface-glass: "0 0% 100%"
      border-glass: "214.3 31.8% 91.4%"
      gradient-color: "#8350e8"
      button-ripple-color: "oklch(0.145 0 0 / 0.3)"
    dark:
      background: "225 57% 3.9%"
      foreground: "210 40% 98%"
      card: "225 37% 6%"
      card-foreground: "210 40% 98%"
      popover: "225 57% 3.9%"
      popover-foreground: "210 40% 98%"
      primary: "217.2 91.2% 59.8%"
      primary-foreground: "222.2 47.4% 11.2%"
      secondary: "45 93% 47%"
      secondary-foreground: "26 83% 14%"
      muted: "217.2 32.6% 17.5%"
      muted-foreground: "215 20.2% 65.1%"
      accent: "217.2 32.6% 17.5%"
      accent-foreground: "210 40% 98%"
      destructive: "0 62.8% 30.6%"
      destructive-foreground: "210 40% 98%"
      border: "217.2 32.6% 17.5%"
      input: "217.2 32.6% 17.5%"
      ring: "217.2 91.2% 59.8%"
      surface-glass: "225 57% 3.9%"
      border-glass: "217.2 32.6% 17.5%"
      gradient-color: "#8350e8"
      button-ripple-color: "oklch(0.985 0 0 / 0.5)"
  typography:
    fonts:
      sans: "var(--font-roboto)"
      display: "var(--font-orbitron)"
    scales:
      display-lg:
        size: "48px"
        weight: "900"
        line-height: "1.1"
      display-md:
        size: "32px"
        weight: "700"
        line-height: "1.2"
      headline-lg:
        size: "24px"
        weight: "700"
        line-height: "1.3"
      headline-lg-mobile:
        size: "20px"
        weight: "700"
        line-height: "1.3"
      headline-md:
        size: "24px"
        weight: "600"
        line-height: "1.3"
      body-lg:
        size: "18px"
        weight: "400"
        line-height: "1.6"
      body-md:
        size: "16px"
        weight: "400"
        line-height: "1.5"
      label-md:
        size: "14px"
        weight: "700"
        line-height: "1.2"
      label-sm:
        size: "12px"
        weight: "400"
        line-height: "1.2"
  shapes_and_layout:
    border_radius:
      xl: "1.5rem"
      lg: "1.0rem"
      md: "0.75rem"
      default: "0.5rem"
      sm: "0.25rem"
      full: "9999px"
    spacing:
      base: "4px"
      xs: "4px"
      sm: "8px"
      md: "16px"
      lg: "32px"
      xl: "64px"
      gutter: "16px"
      margin-mobile: "16px"
      margin-desktop: "32px"
      container-max: "1400px"
    shadows:
      elevation: "8px 8px 0px 0 rgba(0, 0, 0, 1)" # dark is rgba(255, 255, 255, 0.1)
      md: "4px 4px 0px 0 rgba(0, 0, 0, 1)"
      lg: "6px 6px 0px 0 rgba(0, 0, 0, 1)"
    blur:
      sm: "4px"
      md: "12px"
      lg: "24px"
---

# Overview
The design system of Envíos DosRuedas blends modern functionality with a distinct neo-brutalist and glassmorphic aesthetic. Built primarily around a dark-themed visual identity (with full light mode support), the system utilizes high-contrast colors, strong typography, and distinctive solid-drop shadows to create depth and hierarchy without relying on traditional soft gradients or blurs.

# Colors
The color system relies on CSS variables constructed with HSL formats for seamless theming via Tailwind CSS.
- **Primary / Secondary:** Blue (`primary`) and yellow/gold (`secondary`) act as the main brand accents, providing high contrast against the dark backgrounds.
- **Background & Foreground:** Utilize deep charcoal/black in dark mode (`225 57% 3.9%`) with off-white text, reversing completely in light mode.
- **Surface & Cards:** The `card` background subtly lifts elements from the base layer.
- **Accents & Gradients:** Specific accents like `gradient-color` (`#8350e8`) provide visual flair for highlights and specialty buttons.
- **Status Colors:** `destructive` handles error or critical actions with a stark red.

# Typography
The design leverages two main typefaces, defined via CSS variables:
- **Display Typeface (`Orbitron`):** Used for large headers (`text-display-lg`, `text-display-md`) and stylized headlines (`text-headline-lg`, `text-headline-md`). It imparts a futuristic, technical, or industrial feel appropriate for logistics.
- **Sans-Serif Typeface (`Roboto`):** Used for all body text, labels, and UI elements. Ensures maximum readability across various screen sizes and long-form content.

Hierarchy is strictly maintained through predefined utility classes (e.g., `.text-body-lg`, `.text-label-md`) mapping specific font sizes, line heights, and letter spacings.

# Shapes
The system relies on strong geometry and deliberate corner treatments:
- **Border Radius:** General UI components use `0.5rem` (`rounded-md`) to `1.0rem` (`rounded-lg`) radiuses, maintaining a slightly softened rectangular feel.
- **Borders & Shadows:** Instead of soft, diffused shadows, the system employs solid offset shadows (e.g., `8px 8px 0px 0 rgba(0,0,0,1)` in light mode, or a translucent white in dark mode) paired with solid 2px borders. This neo-brutalist approach is visible in elements utilizing `.glass-card` and standard components.

# Components
- **Buttons:** Designed with multiple variants (`default`, `destructive`, `outline`, `secondary`, `ghost`, `link`) alongside a custom `gradient` variant that utilizes a continuous background transition with glow effects.
- **Cards:** Built with a `bg-card` base, `rounded-lg` radius, solid border, and standard structural elements (Header, Title, Description, Content, Footer). Frequently extended with `.glass-card` to inherit brutalist shadows.
- **Inputs:** Standardized height (`h-10`), using `border-input` styling with clear, ring-based focus states (`focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`).

# Do's and Don'ts
- **Do:** Use the predefined text utility classes (e.g., `text-headline-md`) rather than composing individual font size and weight utilities.
- **Do:** Maintain the brutalist aesthetic by pairing solid borders with offset solid shadows (like `var(--shadow-elevation)`).
- **Don't:** Mix soft, diffused shadows into the primary layout; stick to the hard offset shadows defined in the tokens.
- **Note:** The `.glass-card` class relies on solid background colors combined with borders and offset shadows. Ensure appropriate contrast is maintained if altering the base `card` color.
