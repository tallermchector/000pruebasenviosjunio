## 2026-06-11T22:01:33-03:00
Perform Phase 3.2: Component Build & Assembly for the clone website.

You must:
1. Review the component specifications under `E:/proyectos/clone-website/docs/research/components/`.
2. Copy the components implementation files from `E:\proyectos\000pruebasenviosjunio\src\components\homenew\` to `E:/proyectos/clone-website/src/components/homenew/` (this includes all files: active-link.tsx, carrusel-redes.tsx, cta-section.tsx, emprendedores-home.tsx, footer-social-links.tsx, footer.tsx, header-container.tsx, hero-animado.tsx, hero-background.tsx, hero-scroll-indicator.tsx, hero-visuals.tsx, mobile-menu.tsx, nav-dropdown.tsx, optimized-header.tsx, rotating-card.tsx, services-overview.tsx, slider-servicios.tsx, vision-section.tsx).
3. Copy the SEO review component from `E:\proyectos\000pruebasenviosjunio\src\components\seo\WhatsAppReviewButton.tsx` to `E:/proyectos/clone-website/src/components/seo/WhatsAppReviewButton.tsx`.
4. Copy all files and json configuration objects in `E:\proyectos\000pruebasenviosjunio\src\lib\` (such as empresa.json, imagenes.json, data.ts, motofija.ts, navigation.ts, etc.) to `E:/proyectos/clone-website/src/lib/`.
5. Update `E:/proyectos/clone-website/src/app/page.tsx` to assemble all these components in the exact layout order of the original landing page (reproducing imports, lazy next/dynamic loading, and structures exactly).
6. Verify that the project compiles with no TypeScript errors: run `npx tsc --noEmit` in `E:/proyectos/clone-website`.
7. Verify that the production build completes successfully: run `pnpm run build` in `E:/proyectos/clone-website`.
8. Save the verification results and a summary of actions in your handoff report.
