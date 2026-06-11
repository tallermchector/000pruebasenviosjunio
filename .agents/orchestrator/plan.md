# Project Audit Plan: Dos Ruedas Pro

This plan details the steps to perform a comprehensive audit of the "Dos Ruedas Pro" codebase, covering TypeScript compilation/linting, performance/import practices, business logic/georouting consistency, and generating the final consolidated report.

## Milestones

### Milestone 1: Reconnaissance & Static Analysis (R1)
- **Objective**: Execute TypeScript type verification and lint checking to identify all active errors and warnings.
- **Tasks**:
  - Spawn a specialist (Worker) to run `npx tsc --noEmit` and `pnpm run lint` in the root directory.
  - Gather and classify all compilation and linting output.
  - Verify if there are compile/lint errors in `src/app/`, `src/components/`, `src/lib/`, and `prisma/`.
- **Completion Criteria**: Verified output from static analysis commands is logged.

### Milestone 2: Performance and Import Audit (R2)
- **Objective**: Identify violations of Vercel React Best Practices, imports, and component boundaries.
- **Tasks**:
  - Scan the code for:
    - Async waterfalls (sequential awaits instead of `Promise.all`).
    - Barrel imports (importing from index files of large packages/folders instead of direct paths).
    - Complex/non-serializable props passed from Server Components to Client Components.
    - Derived state computed in `useEffect` instead of during render.
    - UI components (`src/components/ui/`) coupled to dynamic data, DB, or API calls.
- **Completion Criteria**: Detailed list of performance/import issues with exact file paths and code snippets.

### Milestone 3: Business Logic and Georouting Audit (R3)
- **Objective**: Audit business logic constraints and georouting/pricing math.
- **Tasks**:
  - Scan and verify geocoding and routing flow:
    - Text geocoding via OpenStreetMap (`nominatim.ts`).
    - Street routing via OSRM (`osrm.ts`).
    - Price calculations (Decimal usage, <= 10km pricing from DB, >10km pricing formula).
    - Repartidor mock session (`getAuthenticatedRepartidorIdFromServerSession`).
    - Prisma schema alignment.
- **Completion Criteria**: Complete verification of business logic files, identifying any discrepancies or bugs.

### Milestone 4: Consolidation and Report Generation (R4)
- **Objective**: Compile the final audit report `audit_report.md` at the project root.
- **Tasks**:
  - Write `audit_report.md` on the root, ensuring:
    - Categorization by severity (Bloqueante, Alta, Media, Baja).
    - Functional Markdown file links and code snippets.
    - Explicit certification of the 5 main routes: Home (`/`), Contacto (`/contacto`), Cotizar Express (`/cotizar/express`), Cotizar LowCost (`/cotizar/lowcost`), Servicios (`/servicios`).
    - Document command execution results of type-checking and linting.
- **Completion Criteria**: `audit_report.md` exists and satisfies all acceptance criteria.

### Milestone 5: Verification & Integrity Audit
- **Objective**: Verify report validity and run forensic audit.
- **Tasks**:
  - Spawn Reviewer to check the report for correctness.
  - Spawn Forensic Auditor to verify integrity (no fabricated data/mock results).
- **Completion Criteria**: Clean verification from Reviewer and Auditor.
