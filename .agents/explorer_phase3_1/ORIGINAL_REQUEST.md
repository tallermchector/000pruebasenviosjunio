## 2026-06-12T00:58:28Z
Perform Phase 3.1: Spec Extraction for the clone website.

You must:
1. Examine all the custom components in `E:\proyectos\000pruebasenviosjunio\src\components\homenew\` and their subcomponents.
2. For each major layout section, write a detailed specification file in `E:/proyectos/clone-website/docs/research/components/<component-name>.spec.md`. The components to spec out are:
   - `scroll-progress` (global progress tracker)
   - `optimized-header` (and its children header-container, active-link, nav-dropdown, mobile-menu)
   - `hero-animado` (and its children hero-background, hero-visuals, rotating-card, hero-scroll-indicator)
   - `vision-section`
   - `services-overview`
   - `cta-section`
   - `emprendedores-home`
   - `slider-servicios`
   - `carrusel-redes`
   - `footer` (and its children footer-social-links)
3. Each specification file must detail:
   - Component name, imports, and dependencies.
   - Exact layout structure, styles, classes, and colors used.
   - Exact animation configs (Framer Motion properties: duration, delay, type, ease, etc.).
   - Interactive events (hover, scroll triggers, scroll offsets, hover scales, mobile hamburger click).
   - Verbatim copy content (Spanish text).
   - Asset references (local public assets used, like WebP/SVG paths).
4. Save the spec files in `E:/proyectos/clone-website/docs/research/components/`.

Ensure all spec files are successfully created and detailed enough for a builder to recreate them pixel-perfect. Report completion in your handoff report.
