# Task: Business Logic & Georouting Audit (R3)

## Objective
Audit the core business logic, geocoding/georouting systems, database schemas, and pricing calculations of the "Dos Ruedas Pro" codebase.

## Specific Focus Areas
1. **Geocoding Flow**: Inspect `src/lib/maps/nominatim.ts` and verify how address geocoding is performed.
2. **Routing Flow**: Inspect `src/lib/maps/osrm.ts` and verify the street distance calculations.
3. **Database & ORM**: Audit `prisma/schema.prisma` and see if the schema matches the pricing requirements.
4. **Server Actions (Pricing Calculation)**:
   - Audit `src/app/ordenes/actions.ts` (`quoteShipment` action) and `src/app/actions.ts`.
   - Check pricing calculation: distances <= 10 km (fetched from Prisma DB) vs > 10 km (base fee + excess km fee using Decimal type).
5. **Autenticación Operativa Simulada**: Inspect `getAuthenticatedRepartidorIdFromServerSession` function and verify the mock implementation.

## Deliverable
Write your findings to `E:/proyectos/000pruebasenviosjunio/.agents/explorer_m3_1/handoff.md`. Include specific files, line numbers, code snippets, severity, and proposed corrections.
