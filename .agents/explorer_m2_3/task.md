# Task: Performance & Import Audit (R2) - Part 3

## Objective
Audit primitive UI components in `src/components/ui/` and utility helper libraries in `src/lib/` for design consistency and performance boundaries.

## Specific Focus Areas
1. **Pure UI Components**: Audit `src/components/ui/` to ensure they are pure, controlled by props, highly reusable, and strictly NOT coupled to dynamic data, databases, or external APIs.
2. **Import Practices**: Look for barrel import usage or incorrect imports inside `src/components/ui/` or `src/lib/`.
3. **Genkit & Gemini Configurations**: Scan files in `src/ai/` and `src/lib/` for correct integration of Google Genkit and Gemini 2.5 flash/pro models as outlined in GEMINI.md (defined prompts with Zod schemas, error handling/retry logic).

## Deliverable
Write your findings to `E:/proyectos/000pruebasenviosjunio/.agents/explorer_m2_3/handoff.md`. Include specific files, line numbers, code snippets, severity, and proposed corrections.
