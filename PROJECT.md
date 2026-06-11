# Project: Dos Ruedas Pro Audit

## Architecture
- **Framework**: Next.js App Router (React Server Components by default).
- **Styling**: Tailwind CSS & Radix UI.
- **ORM**: Prisma ORM with PostgreSQL.
- **AI Stack**: Google Genkit & Gemini 2.5 models (with rate limiting / exponential backoff wrapper).
- **Geocoding & Routing**:
  - Text-to-coordinates: OpenStreetMap Nominatim.
  - Coordinate routing & distances: OSRM.
- **Pricing Logic**:
  - Distances <= 10 km: Values fetched from PostgreSQL via Prisma.
  - Distances > 10 km: Base fee + extra charge per exceeded kilometer (Decimal type).
- **Mock Session**: Simulates active repartidor login by fetching the first active repartidor from database.
- **Directory Layout**:
  - `src/components/ui/`: Pure visual primitives. Highly reusable. No side-effects or DB calls.
  - `src/components/`: Customized business logic client components.
  - `src/app/`: App router routes (e.g. Home, Contacto, Cotizar Express, Cotizar LowCost, Servicios).
  - `src/lib/`: Database, map, and georouting helpers.
  - `prisma/`: Prisma schema.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| 1 | R1: Static Analysis & Types | Run lint and tsc, check errors, classify | None | DONE (.agents/worker_m1/handoff.md) |
| 2 | R2: Performance & Imports | Scan components, hooks, routes for Vercel/barrel imports violations | None | DONE (.agents/explorer_m2_[1,2,3]/handoff.md) |
| 3 | R3: Business & Georouting | Audit georouting, OSRM, Nominatim, pricing logic, Prisma schema | None | DONE (.agents/explorer_m3_1/handoff.md) |
| 4 | R4: Consolidated Report | Compile results to `audit_report.md` on project root | M1, M2, M3 | DONE (audit_report.md, .agents/worker_m4/handoff.md) |
| 5 | R5: Final Verification | Verify audit report with Reviewer & Auditor | M4 | DONE (.agents/reviewer_m5_1/handoff.md, .agents/auditor_m5_2/handoff.md) |

## Interface Contracts
### Client Components ↔ Server Actions (`src/app/actions.ts`, `src/app/ordenes/actions.ts`)
- Client Components invoke Server Actions asynchronously.
- Server Actions utilize Prisma ORM and return plain serializable objects.
- Server Actions handle OSM/OSRM connections securely.
