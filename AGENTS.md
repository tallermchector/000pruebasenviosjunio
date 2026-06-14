# Autonomous Agents & AI Architecture Guidelines

This document outlines the strict architecture and development rules for autonomous AI agents (like Google Jules, Gemini CLI, Cursor, etc.) working on this Next.js codebase.

## 🏗️ 1. Project Architecture (Next.js App Router)

### 1.1 Strict Server vs. Client Separation
- **Server Components (Default):** Use React Server Components (RSC) for data fetching, static rendering, and initial layout.
- **Client Components (`'use client'`):** Only use `'use client'` when interactivity is required (e.g., hooks like `useState`, `useEffect`, `useFormState`, browser APIs like Leaflet maps, or interactive UI components). Push `'use client'` down the tree as much as possible.
- **Server Actions (`'use server'`):**
  - All database interactions (Prisma) MUST be encapsulated within Server Actions.
  - Never expose Prisma clients, SQL queries, or API keys directly in Client Components.
  - Main action files are typically named `actions.ts`.

### 1.2 Component Organization
- **Generic UI Components (`src/components/ui/`):**
  - Must strictly follow **shadcn/ui** and **Tailwind CSS** standards.
  - Must be pure, stateless (mostly), and driven by props. No business logic, database calls, or external API fetch logic here.
- **Business Components (`src/components/`):**
  - Organized by domain/feature (e.g., `calculator/`, `contact/`).
  - Contains domain-specific logic, form handling, and integration with Server Actions.

### 1.3 Routing (`src/app/`)
- Follows Next.js App Router conventions.
- Each page is defined by a `page.tsx` file.
- Use `layout.tsx` for shared UI shells and `loading.tsx` for suspense boundaries.

---

## 🎨 2. Styling & UI Guidelines

### 2.1 Tailwind CSS & Framer Motion
- Use Tailwind CSS exclusively for styling. Avoid inline styles or standard CSS/SCSS modules unless absolutely necessary.
- **Animations:** Use `framer-motion` for complex animations. Ensure animations do not cause layout shifts (use `layout` or `layoutId` props carefully).
- **Optimization:** Prefer `<Image>` from `next/image` over standard `<img>` tags for optimized image loading and to prevent build warnings.

### 2.2 shadcn/ui Compatibility
- When modifying or creating new UI primitives, ensure they are 100% compatible with the existing `shadcn/ui` architecture and design system.
- Utilize the `cn()` utility (`clsx` + `tailwind-merge`) for conditional class merging to avoid Tailwind class conflicts.

---

## 🗄️ 3. Database & State Management

### 3.1 Prisma ORM
- Schema is defined in `prisma/schema.prisma`.
- Do not pass full Prisma models directly to Client Components if they contain sensitive data. Serialize and map only the necessary fields.
- **Mathematical Integrity:** For physical distance and routing calculations (e.g., pricing based on km), respect the strict business rules and `Decimal` types defined in the Prisma schema.

### 3.2 State Management
- Prefer server state and URL search params for shared state.
- Avoid derived state using `useEffect`. Compute derived values during render.

---

## 🚀 4. Performance & Best Practices

### 4.1 Vercel Deployment Guidelines
- **Async Parallelization:** Use `Promise.all()` to execute independent async tasks concurrently.
- **Avoid Barrel Imports:** Import modules, components, and icons directly from their source files to reduce bundle size and build times.
- **Minimize RSC Payloads:** Keep the props passed from Server to Client Components small and serializable.

### 4.2 Core Business Logic - DO NOT MODIFY
- **Routing/Distance Engine:** The integration with OpenStreetMap (Nominatim) and OSRM for distance calculation is critical. Do not alter these flows.
- **Pricing Algorithms:** The base + excess kilometer pricing logic must remain intact.
- **Simulated Auth:** The `getAuthenticatedRepartidorIdFromServerSession` function is a simulated mock for operations. Do not replace it with a real auth system unless explicitly requested.

---

## 🛠️ 5. Agent Workflow & Verification

1. **Verify State:** Before making changes, read the relevant files and `AGENTS.md` context.
2. **Execute Scripts:** Use `pnpm` for all package management and script execution.
3. **Type Checking:** Run `pnpm run typecheck` to verify TypeScript integrity before submitting code.
4. **Build Verification:** Run `pnpm run build` to ensure the project compiles successfully.
5. **No Blind Commits:** Do not mark steps as complete until verifying the code compiles and works as expected.