# Forensic Audit Report

**Work Product**: E:/proyectos/000pruebasenviosjunio/audit_report.md
**Profile**: General Project (Development Mode)
**Verdict**: CLEAN

## 1. Observation

### Static Analysis Commands
- Executing `pnpm run typecheck` (`tsc --noEmit`) returns `0 errors` and `0 warnings`.
- Executing `pnpm run lint` (`eslint`) returns `0 errors` and `23 warnings`.
  The warnings match the exact details in the report, including:
  - `src/ai/flows/generate-image-prompt.ts` (Line 27): Unused eslint-disable directive.
  - `src/components/calculator/express-calculator.tsx` (Line 6): `Input` defined but never used.
  - `src/components/entrepreneur/entrepreneur-pricing-ranges.tsx` (Line 20): `priceRanges` defined but never used.
  - `src/components/ui/HeroSection.tsx` (Lines 81-82): `backgroundOverlayOpacity` and `textColorClassName` assigned a value but never used.

### Code Snippets Verbatim Verification
- **Finding 4.1**: `src/app/ordenes/actions.ts` (Lines 170-177):
  ```typescript
  const baseRangeRecord = await prisma.priceRange.findFirst({
      where: {
          distanciaMinKm: { gte: 7.00 },
          distanciaMaxKm: { lte: 10.00 },
          serviceType: validatedData.serviceType,
          isActive: true,
      },
  });
  ```
  Verified verbatim in `src/app/ordenes/actions.ts`.
- **Finding 4.2**: `src/app/ordenes/actions.ts` (Lines 312-318):
  ```typescript
  const [pHoursFrom, pMinutesFrom] = validatedData.pickupTimeFrom.split(':').map(Number);
  const finalPickupDateTime = new Date(validatedData.pickupDate);
  finalPickupDateTime.setHours(pHoursFrom, pMinutesFrom, 0, 0);

  const [dHoursFrom, dMinutesFrom] = validatedData.deliveryTimeFrom.split(':').map(Number);
  const finalDeliveryDateTime = new Date(validatedData.deliveryDate);
  finalDeliveryDateTime.setHours(dHoursFrom, dMinutesFrom, 0, 0);
  ```
  Verified verbatim in `src/app/ordenes/actions.ts`.
- **Finding 4.3**: `src/lib/prisma.ts` (Lines 7-8):
  ```typescript
  const pool = new pg.Pool({ connectionString: process.env.DIRECT_URL });
  const adapter = new PrismaPg(pool);
  ```
  Verified verbatim in `src/lib/prisma.ts`.
- **Finding 4.4**: `src/components/contact/contact-form.tsx` (Lines 67-69):
  ```typescript
     useEffect(() => {
      if (state?.timestamp && state.timestamp > (initialState.timestamp ?? 0)) {
          if (state.message) {
  ```
  And Line 100: `}, [state, toast, form]);`. Verified verbatim in `src/components/contact/contact-form.tsx`.
- **Finding 4.5**: `src/components/calculator/address-autocomplete.tsx` (Lines 20-30):
  ```typescript
    useEffect(() => {
      if (!value || value.length < 3) {
        setSuggestions([]);
        return;
      }
  
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
  
      debounceRef.current = setTimeout(async () => {
  ```
  Verified verbatim in `src/components/calculator/address-autocomplete.tsx`.
- **Finding 4.6**: `src/components/maps/leaflet-map.tsx` (Line 10 and Lines 38-39):
  ```typescript
  import { renderToStaticMarkup } from 'react-dom/server';
  ...
  const customMarkerIcon = L.divIcon({
    html: renderToStaticMarkup(<MapPin color="#eab308" size={32} />),
  ```
  Verified verbatim in `src/components/maps/leaflet-map.tsx`.
- **Finding 4.7**: `src/app/ordenes/actions.ts` (Lines 122-126):
  ```typescript
          const originCoords = await geocodeNominatim(validatedData.originAddress);
          if (!originCoords) return { success: false, error: `No se pudo geolocalizar la dirección de origen: ${validatedData.originAddress}` };
  
          const destinationCoords = await geocodeNominatim(validatedData.destinationAddress);
  ```
  Verified verbatim in `src/app/ordenes/actions.ts`.
- **Finding 4.9**: `src/components/calculator/route-map.tsx` (Line 66):
  ```typescript
    }, [origin, destination]);
  ```
  Verified verbatim in `src/components/calculator/route-map.tsx`.
- **Finding 4.10**: `src/hooks/use-toast.ts` (Lines 177-185):
  ```typescript
    React.useEffect(() => {
      listeners.push(setState)
      return () => {
        const index = listeners.indexOf(setState)
        if (index > -1) {
          listeners.splice(index, 1)
        }
      }
    }, [state])
  ```
  Verified verbatim in `src/hooks/use-toast.ts` and `src/components/ui/use-toast.ts`.
- **Finding 4.11**: `src/components/entrepreneur/entrepreneur-pricing-ranges.tsx` (Line 20):
  ```typescript
  export function EntrepreneurPricingRanges({ priceRanges }: EntrepreneurPricingRangesProps) {
  ```
  Verified verbatim in `src/components/entrepreneur/entrepreneur-pricing-ranges.tsx` and `src/components/envios-flex/flex-pricing-ranges.tsx`.
- **Finding 4.12**: `src/app/servicios/envios-express/page.tsx` (Lines 37-42):
  ```typescript
      return priceRanges.map(pr => ({
        ...pr,
        distanciaMinKm: pr.distanciaMinKm.toNumber(),
        distanciaMaxKm: pr.distanciaMaxKm.toNumber(),
        precioRango: pr.precioRango.toNumber(),
      }));
  ```
  Verified verbatim in `src/app/servicios/envios-express/page.tsx`.
- **Finding 4.15**: `src/ai/flows/generate-replication-prompt-v2.ts` (Lines 54-58):
  ```typescript
  const promptTemplate = ai.definePrompt({
    name: 'generateReplicationV2Template',
    input: { schema: z.any() },
    output: { schema: ReplicationOutputSchema },
  ```
  Verified verbatim in `src/ai/flows/generate-replication-prompt-v2.ts` and `src/ai/flows/generate-replication-prompt.ts`.

### Project Build & Routes Verification
- Running `pnpm run build` succeeds completely, compiling and generating the Next.js pages.
- Verified that `/servicios` (`src/app/servicios/page.tsx`) is missing from the directory tree, which returns a Next.js 404 while all specific sub-routes exist and compile.

## 2. Logic Chain
1. All static analysis outputs and ESLint warning counts (23 warnings) match the actual codebase state exactly, ensuring no outputs were fabricated.
2. The referenced files and code snippets in the report exist in the filesystem and match the quoted lines verbatim.
3. The business logic discrepancies reported (e.g., Finding 4.1's price discontinuity for LOW_COST at >10 km and Finding 4.2's timezone offset bug during DB writes) were analyzed and found to be mathematically and logically correct.
4. No signs of mock configurations, dummy bypasses, or fabricated verification outputs exist in the codebase.
5. The workspace compiles and builds successfully under Next.js 16/Turbopack.
6. Therefore, all information in `audit_report.md` is authentic, accurate, and correct. The work product is determined to be CLEAN.

## 3. Caveats
No caveats. The entire codebase was built, static checks were executed, and findings were verified.

## 4. Conclusion
The consolidated audit report `audit_report.md` is fully authentic, correct, and not fabricated. The verdict is CLEAN.

## 5. Verification Method
- Execute `pnpm run typecheck` to verify TypeScript compile status (should be 0 errors).
- Execute `pnpm run lint` to verify ESLint warning count (should be exactly 23 warnings).
- Inspect the file `audit_report.md` and check that the referenced code lines and descriptions match the current state of `src/` and `prisma/` files.
- Execute `pnpm run build` to verify that next build completes without error.
