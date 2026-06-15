---
tokens:
  colors:
    background:
      light: "0 0% 100%"
      dark: "225 57% 3.9%"
    foreground:
      light: "222.2 84% 4.9%"
      dark: "210 40% 98%"
    primary:
      light: "221.2 83.2% 53.3%"
      dark: "217.2 91.2% 59.8%"
    secondary:
      light: "45 93% 47%"
      dark: "45 93% 47%"
    destructive:
      light: "0 84.2% 60.2%"
      dark: "0 62.8% 30.6%"
    muted:
      light: "210 40% 96.1%"
      dark: "217.2 32.6% 17.5%"
    accent:
      light: "210 40% 96.1%"
      dark: "217.2 32.6% 17.5%"
    card:
      light: "0 0% 100%"
      dark: "225 37% 6%"
    popover:
      light: "0 0% 100%"
      dark: "225 57% 3.9%"
    border:
      light: "214.3 31.8% 91.4%"
      dark: "217.2 32.6% 17.5%"
    input:
      light: "214.3 31.8% 91.4%"
      dark: "217.2 32.6% 17.5%"
    ring:
      light: "222.2 84% 4.9%"
      dark: "217.2 91.2% 59.8%"
    glass:
      background:
        light: "0 0% 100%"
        dark: "225 57% 3.9%"
      border:
        light: "214.3 31.8% 91.4%"
        dark: "217.2 32.6% 17.5%"
    gradient: "#8350e8"
    sparkles:
      light: "#8350e8"
      dark: "#ffffff"
  typography:
    fonts:
      sans: ["var(--font-roboto)", "sans-serif"]
      display: ["var(--font-orbitron)", "monospace"]
    sizes:
      display-lg: "48px"
      display-md: "32px"
      headline-lg: "24px"
      headline-lg-mobile: "20px"
      headline-md: "24px"
      body-lg: "18px"
      body-md: "16px"
      label-md: "14px"
      label-sm: "12px"
      code: "16px"
    weights:
      regular: "400"
      semibold: "600"
      bold: "700"
      black: "900"
  shapes:
    radius:
      sm: "0.25rem"
      default: "0.5rem"
      md: "0.75rem"
      lg: "1.0rem"
      xl: "1.5rem"
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
    elevation:
      shadow: "8px 8px 0px 0 rgba(0, 0, 0, 1)" # Uses rgba(255, 255, 255, 0.1) in dark mode
      shadow-md: "4px 4px 0px 0 rgba(0, 0, 0, 1)"
      shadow-lg: "6px 6px 0px 0 rgba(0, 0, 0, 1)"
    blur:
      sm: "4px"
      md: "12px"
      lg: "24px"
---

# Overview

Dos Ruedas Pro utilizes a modern, performance-focused, and accessible design system. The visual identity relies heavily on clean typography, distinct colors for primary actions, and "glassmorphism" effects to convey depth and high-tech efficiency in logistics. The UI architecture is utility-first (via Tailwind CSS) and components are built utilizing Radix UI primitives to ensure high accessibility standards (WCAG 2.1 AA) and semantic structure. The overall aesthetic balances sharp, hard shadows with rounded corners to create a distinct, tactile interface.

# Colors

The color palette is defined using HSL values mapped to custom properties, allowing for seamless light and dark mode transitions.
- **Background & Foreground:** Neutral base colors ensuring high contrast for readability.
- **Primary:** A vibrant blue/indigo used for key actions, primary buttons, and active states.
- **Secondary:** A distinct yellow/gold color intended to stand out for secondary highlights or specific branding elements.
- **Destructive:** Red hues reserved for error states, destructive actions, and alerts.
- **Muted & Accent:** Softer grays/blues used for secondary backgrounds, hover states, and less prominent text to create visual hierarchy.
- **Glass & Special Tokens:** Dedicated tokens for glass backgrounds and borders to enable translucent surface effects. Gradient and Sparkle tokens are used for specific promotional or interactive components.

# Typography

Typography is critical to the application's clean, technical aesthetic. We use a dual-font strategy:
- **Display Font (`--font-orbitron`):** A geometric, monospace-influenced sans-serif used for large display text, headlines, and numbers. This gives the application a modern, logistical, and slightly futuristic feel.
- **Sans-serif Font (`--font-roboto`):** A highly readable, standard sans-serif used for body text, labels, and forms.
- **Hierarchy:** Strict utility classes define the typography scale (`text-display-lg`, `text-headline-md`, `text-body-md`, `text-label-sm`).
- **Readability:** Base font size ensures legibility, and line-heights are optimized for reading (e.g., 1.5 for body text, 1.1 for display text).

# Shapes

The design system incorporates a distinct blend of rounded elements and sharp, solid shadows.
- **Border Radius:** A comprehensive scale from `sm` (0.25rem) to `xl` (1.5rem) and `full`. The `default` radius is `0.5rem`, applied to standard inputs and buttons.
- **Elevation (Shadows):** The system uses "hard" shadows (e.g., `8px 8px 0px 0 rgba(0, 0, 0, 1)`) rather than soft drop shadows. This provides a bold, tactile, slightly brutalist elevation effect that contrasts with the glassmorphic blurs. Dark mode uses a subtle white shadow.
- **Blur:** Used in conjunction with glass backgrounds (`--glass-bg`) to create depth and focus. The scale ranges from `4px` to `24px`.
- **Spacing:** A defined scale (`base` to `xl`) ensures consistent margins and paddings across the UI, with specific variables for gutters and mobile/desktop margins.

# Components

The component library (`./src/components/ui`) is built on a foundation of robust, accessible primitives.
- **Buttons:** Available in multiple variants (`default`, `destructive`, `outline`, `secondary`, `ghost`, `link`). A notable custom variant is the `gradient` button, featuring animated gradient backgrounds and glowing shadow effects for high-emphasis actions.
- **Glass Cards (`.glass-card`):** A dominant layout element utilizing the `--card` background, `--border` colors, and the hard `--shadow-elevation` to create distinct, slightly elevated content blocks.
- **Form Elements (Inputs, Selects, Checkboxes):** Styled consistently with the `default` border radius and distinct focus states (`focus-visible:ring-2 focus-visible:ring-ring`) to ensure accessibility compliance.
- **Interactive Elements (Accordions, Dialogs, Sheets):** Designed with smooth, reduced-motion-respecting animations and clear focus management.
- **Navigation:** Structured headers and mobile menus utilizing semantic `<nav>` elements and indicating active states clearly.

### Do's and Don'ts
- **Do** use the predefined typography utility classes (e.g., `text-body-md`) instead of manually setting font sizes and weights.
- **Do** respect the `prefers-reduced-motion` settings. The global CSS includes overrides to disable animations for users who prefer it.
- **Don't** mix the hard shadow style (`boxShadow: elevation`) with standard soft Tailwind drop shadows (`shadow-md`, `shadow-lg`) unless explicitly required by a specific new design pattern, to maintain visual consistency.
- **Don't** use inline styles for colors; always utilize the HSL variables mapped in the Tailwind configuration.
