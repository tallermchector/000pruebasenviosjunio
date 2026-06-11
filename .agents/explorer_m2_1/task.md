# Task: Performance & Import Audit (R2) - Part 1

## Objective
Audit Next.js App Router pages and layouts in `src/app/` for performance, import practices, and client/server boundaries.

## Specific Focus Areas
1. **Async Waterfalls**: Identify places where sequential `await` calls are used on independent data fetches, which could be parallelized with `Promise.all()`.
2. **Barrel Imports**: Scan for large barrel imports (like `lucide-react`, `lodash`, or index folders) and recommend importing directly from the source file.
3. **RSC Prop Minimization**: Identify cases where server components pass large, complex database models (like Prisma model instances with relations) or classes to Client Components instead of serializing only the needed properties.
4. **Client/Server Boundaries**: Audit pages and layouts to ensure correct usage of `"use server"` vs `"use client"` and proper separation.

## Deliverable
Write your findings to `E:/proyectos/000pruebasenviosjunio/.agents/explorer_m2_1/handoff.md`. Include specific files, line numbers, code snippets, severity, and proposed corrections.
