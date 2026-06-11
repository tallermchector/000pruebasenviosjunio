# Task: Performance & Import Audit (R2) - Part 2

## Objective
Audit custom React components and custom React hooks in `src/components/` (excluding `src/components/ui/`) and `src/hooks/` for performance, react best practices, and boundaries.

## Specific Focus Areas
1. **Derived State in useEffect**: Check for anti-patterns where state is synced or derived in a `useEffect` hook instead of during render.
2. **Barrel Imports**: Scan for large barrel imports and recommend importing directly from the source.
3. **Client Component State & Logic**: Verify that custom client components connect correctly to actions, manage React state efficiently, and minimize heavy bundles.

## Deliverable
Write your findings to `E:/proyectos/000pruebasenviosjunio/.agents/explorer_m2_2/handoff.md`. Include specific files, line numbers, code snippets, severity, and proposed corrections.
