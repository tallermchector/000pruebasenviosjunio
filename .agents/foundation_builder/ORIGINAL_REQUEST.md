## 2026-06-11T21:53:39Z

Perform Phase 2: Foundation Build for the clone website.

You must:
1. Create the output directories if they don't exist: `docs/research/`, `docs/research/components/`, `docs/design-references/`, `scripts/` in `E:/proyectos/clone-website`.
2. Copy all public assets (images, icons, subdirectories) from `E:/proyectos/000pruebasenviosjunio/public/` to `E:/proyectos/clone-website/public/`.
3. Read the original project's `package.json` at `E:/proyectos/000pruebasenviosjunio/package.json` to identify key styling and interaction dependencies. Add these dependencies to `E:/proyectos/clone-website/package.json` (specifically: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, `tailwindcss-animate`, `@radix-ui/react-accordion`, `@radix-ui/react-dialog`, `@radix-ui/react-slot`, etc. with compatible version numbers) and execute `pnpm install` in `E:/proyectos/clone-website` to install them.
4. Copy `src/lib/utils.ts` and UI primitives from `E:/proyectos/000pruebasenviosjunio/src/components/ui/` (especially accordion.tsx, dialog.tsx, sheet.tsx, scroll-progress.tsx, buttons.tsx, etc.) to the respective directories in `E:/proyectos/clone-website`.
5. Update `src/app/layout.tsx` in `E:/proyectos/clone-website` to import and load Google Fonts Roboto and Orbitron, configure viewport themeColor and metadata, and use the font variables in the body element class.
6. Update `src/app/globals.css` in `E:/proyectos/clone-website` to include the CSS variables (light and dark mode values), custom scrollbar styles, text layer utility classes (like `.text-display-lg`, `.text-display-md`, etc.), glass card classes, and prefers-reduced-motion definitions from the original `globals.css`.
7. Verify that the foundation compiles successfully by running `npx tsc --noEmit` and `pnpm run build` in the workspace `E:/proyectos/clone-website`.
8. Save a summary of your actions and the build verification output in your handoff report.
