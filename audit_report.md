# Consolidated Audit Report (R4) - Envíos DosRuedas

This report compiles and consolidates all static analysis, type verification, layout compliance, component lifecycle, georouting, business logic, database schema, and Genkit/Gemini AI flow audit findings for the Envíos DosRuedas codebase.

---

## 1. Executive Summary

A comprehensive multi-phase audit was performed on the Envíos DosRuedas codebase, assessing type safety, component design, database performance, external integrations, geocoding & routing calculations, and AI flow orchesteration.

### Overall System Status
- **Type Checking**: Pass. Running `npx tsc --noEmit` yields `0 errors`.
- **Linting**: Pass with warnings. Running `pnpm run lint` yields `0 errors` and `23 warnings`.
- **Architecture**: The project strictly separates generic visual primitives (`src/components/ui/`) from business-coupled interactive layouts and pages, adhering to Next.js App Router and server/client demarcation principles.
- **Critical Risks**: Two high-severity business logic bugs were identified: a pricing discontinuity for the `LOW_COST` service over 10 km (triggering a fallback price jump of over 1,200 pesos) and a local timezone shift bug causing order dates to be saved incorrectly (shifted to the previous day) during database writes. Additionally, a module-level database connection pool allocation was found to leak connection pools during developer hot-reloads.

### Summary of Audit Findings
Findings are classified by severity as follows:
- **Bloqueante** (Showstoppers, critical security/data bugs): **0**
- **Alta** (Severe UX/business/performance issues): **3**
- **Media** (Lesser bugs, duplicate logic, helper bypass, redundant toast/render effects): **13**
- **Baja** (Styling issues, unused disable statements, minor validation logic): **10**
- **Total Findings**: **26**

---

## 2. Static Analysis & Type Verification

Static analysis and compilation checks were verified using the project's native build scripts.

### TypeScript Compilation (`npx tsc --noEmit`)
- **Command**: `npx tsc --noEmit`
- **Result**: Successful execution with `0 errors` and `0 warnings`.

### ESLint Verification (`pnpm run lint`)
- **Command**: `pnpm run lint`
- **Result**: Completed with `0 errors` and `23 warnings`.
- **Summary of Warnings**:
  The 23 warnings fall into two categories:
  1. **Unused Imports & Variables** (`@typescript-eslint/no-unused-vars`): Variables or components imported/declared but never used.
  2. **Unused ESLint Disables**: Unnecessary inline directives disabling unused variable rules where no violation exists.

#### Grouped Warnings Breakdown:
- **AI Flow Config Files** (Unused eslint-disable comments):
  - `src/ai/flows/generate-image-prompt.ts` (Line 27)
  - `src/ai/flows/generate-optimal-image-prompt.ts` (Line 26)
  - `src/ai/flows/generate-service-image-prompt.ts` (Line 26)
  - `src/ai/flows/suggest-optimal-image-details.ts` (Line 16)
  - `src/ai/flows/suggest-service-image-details.ts` (Line 20)
- **Interactive Calculator Components** (Unused variables/imports):
  - `src/components/calculator/express-calculator.tsx` (Line 6: `Input`)
  - `src/components/calculator/lowcost-calculator.tsx` (Line 6: `Input`)
  - `src/components/entrepreneur/entrepreneur-cta.tsx` (Line 3: `Button`)
  - `src/components/entrepreneur/entrepreneur-pricing-ranges.tsx` (Line 20: `priceRanges` prop)
  - `src/components/envios-flex/envios-flex-cta.tsx` (Line 6: `Image`)
  - `src/components/envios-flex/flex-pricing-ranges.tsx` (Line 20: `priceRanges` prop)
  - `src/components/faq/faq-categories.tsx` (Line 132: `index`)
  - `src/components/homenew/emprendedores-home.tsx` (Line 5: `Rocket`, `ShieldCheck`, `Package`)
  - `src/components/homenew/slider-servicios.tsx` (Line 5: `ShieldCheck`, `MousePointer2`)
- **UI & Hooks** (Unused variables or type castings):
  - `src/components/ui/HeroSection.tsx` (Line 81: `backgroundOverlayOpacity`, Line 82: `textColorClassName`)
  - `src/components/ui/chart.tsx` (Line 72: `_`)
  - `src/components/ui/use-toast.ts` (Line 10: `LucideIcon`, Line 22: `actionTypes` used as type)
  - `src/hooks/use-toast.ts` (Line 21: `actionTypes` used as type)

---

## 3. Certified Routes Status

The 5 main entry routes were audited for layout compliance, component types, metadata, and routing stability.

| Route | File Path | Status | Detail |
|---|---|---|---|
| **Home (`/`)** | `src/app/page.tsx` | **VALID** | Exists. Properly defined as a React Server Component (RSC). Correctly exports static metadata. Implements dynamic lazy loading for below-the-fold content (`VisionSection`). |
| **Contacto (`/contacto`)** | `src/app/contacto/page.tsx` | **VALID** | Exists. Properly defined as an RSC. Correctly exports static metadata and wraps the interactive client component `ContactPageClient`. |
| **Cotizar Express (`/cotizar/express`)** | `src/app/cotizar/express/page.tsx` | **VALID** | Exists. Defined as an RSC. Exports metadata and imports the respective calculator and layout components. |
| **Cotizar LowCost (`/cotizar/lowcost`)** | `src/app/cotizar/lowcost/page.tsx` | **VALID** | Exists. Defined as an RSC. Exports metadata and imports layout wrappers. |
| **Servicios (`/servicios`)** | `src/app/servicios/page.tsx` | **MISSING** | **Does not exist in the filesystem.** Accessing `/servicios` directly returns a Next.js 404. However, sub-routes under it (`/servicios/envios-express`, `/servicios/envios-lowcost`, `/servicios/enviosflex`, `/servicios/plan-emprendedores`) are fully functional. A redirect or parent page file is required. |

---

## 4. Detailed Findings List

### Bloqueante (Showstoppers)
*No findings detected in this category.*

---

### Alta (Severe Issues)

#### Finding 4.1: LOW_COST Pricing Formula Discontinuity (Price Jump over 10 km)
- **File Link**: [src/app/ordenes/actions.ts](file:///E:/proyectos/000pruebasenviosjunio/src/app/ordenes/actions.ts#L170)
- **Code Snippet**:
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
- **Description & Impact**:
  To calculate shipping costs for distances > 10 km, the system queries the base price of the last standard range (7 to 10 km). In `prisma/seed.ts`, the seeded range for `LOW_COST` near the threshold is `9.0` to `12.99` km (with price 5,800). The query checks if `distanciaMinKm >= 7.0` AND `distanciaMaxKm <= 10.0`. The `LOW_COST` range (`9.0` to `12.99`) fails because `12.99 > 10.00`. The prior range (`5.0` to `8.99`) fails because `5.00 < 7.00`. Consequently, `baseRangeRecord` resolves to `null`.
  The code falls back to `7000` as the default base price. At 10.00 km, the user pays `5800`. At 10.01 km, the formula computes `7000 + (0.01 * 700) = 7007` (a price jump of 1,207 pesos for an extra 10 meters).
- **Proposal for Correction**:
  Modify the query to find the price range record that spans the 10.00 km threshold:
  ```typescript
  const baseRangeRecord = await prisma.priceRange.findFirst({
      where: {
          distanciaMinKm: { lte: 10.00 },
          distanciaMaxKm: { gte: 10.00 },
          serviceType: validatedData.serviceType,
          isActive: true,
      },
  });
  ```

#### Finding 4.2: Order Date Timezone Shift (UTC Date Corruption in Database Writes)
- **File Link**: [src/app/ordenes/actions.ts](file:///E:/proyectos/000pruebasenviosjunio/src/app/ordenes/actions.ts#L312)
- **Code Snippet**:
  ```typescript
  const [pHoursFrom, pMinutesFrom] = validatedData.pickupTimeFrom.split(':').map(Number);
  const finalPickupDateTime = new Date(validatedData.pickupDate);
  finalPickupDateTime.setHours(pHoursFrom, pMinutesFrom, 0, 0);

  const [dHoursFrom, dMinutesFrom] = validatedData.deliveryTimeFrom.split(':').map(Number);
  const finalDeliveryDateTime = new Date(validatedData.deliveryDate);
  finalDeliveryDateTime.setHours(dHoursFrom, dMinutesFrom, 0, 0);
  ```
- **Description & Impact**:
  `z.coerce.date()` parses a date string like `"2026-06-11"` into UTC midnight (`2026-06-11T00:00:00.000Z`). However, `finalPickupDateTime.setHours(...)` operates in the local server system timezone.
  If the server runs in a negative offset timezone (e.g., Argentina UTC-3), `2026-06-11T00:00:00.000Z` maps locally to June 10th, 21:00:00. Calling `.setHours(9)` sets the date locally to June 10th, 09:00:00. When Prisma writes this back to the database in UTC, it records `2026-06-10T12:00:00.000Z`, shifting the order date one calendar day backward.
- **Proposal for Correction**:
  Use `setUTCHours` instead of `setHours` to preserve the UTC calendar date parsed by Zod:
  ```typescript
  const [pHoursFrom, pMinutesFrom] = validatedData.pickupTimeFrom.split(':').map(Number);
  const finalPickupDateTime = new Date(validatedData.pickupDate);
  finalPickupDateTime.setUTCHours(pHoursFrom, pMinutesFrom, 0, 0);

  const [dHoursFrom, dMinutesFrom] = validatedData.deliveryTimeFrom.split(':').map(Number);
  const finalDeliveryDateTime = new Date(validatedData.deliveryDate);
  finalDeliveryDateTime.setUTCHours(dHoursFrom, dMinutesFrom, 0, 0);
  ```

#### Finding 4.3: Prisma Connection Pool Leak
- **File Link**: [src/lib/prisma.ts](file:///E:/proyectos/000pruebasenviosjunio/src/lib/prisma.ts#L7)
- **Code Snippet**:
  ```typescript
  const pool = new pg.Pool({ connectionString: process.env.DIRECT_URL });
  const adapter = new PrismaPg(pool);

  const prismaClientSingleton = () => {
    return new PrismaClient({ adapter }).$extends(withAccelerate());
  };
  ...
  const prisma = globalThis.prisma ?? prismaClientSingleton();
  ```
- **Description & Impact**:
  In dev mode, Next.js hot module reloading re-evaluates the module repeatedly. Although `globalThis.prisma` caches the Prisma client, the instantiation of the `pg.Pool` occurs outside the singleton guard. This creates a new Postgres connection pool on every module reload, quickly exhausting database connections.
- **Proposal for Correction**:
  Cache the pool and adapter globally alongside the Prisma instance:
  ```typescript
  declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
    var pgPool: undefined | pg.Pool;
  }

  const pool = globalThis.pgPool ?? new pg.Pool({ connectionString: process.env.DIRECT_URL });
  if (process.env.NODE_ENV !== "production") {
    globalThis.pgPool = pool;
  }
  const adapter = new PrismaPg(pool);
  ```

---

### Media (Moderate Issues)

#### Finding 4.4: Redundant Action State Effect Triggering (Toast Spam & Focus Reset)
- **File Link**: [src/components/contact/contact-form.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/contact/contact-form.tsx#L67)
- **Code Snippet**:
  ```typescript
  const form = useForm<ContactFormValues>({ ... });

  useEffect(() => {
    if (state?.timestamp && state.timestamp > (initialState.timestamp ?? 0)) {
        if (state.message) {
          toast({ ... });
          form.reset();
        }
        ...
    }
  }, [state, toast, form]);
  ```
- **Description & Impact**:
  `form` returned by `useForm` gets a new object reference on every render. Because the `form` object is listed in the dependency array of the `useEffect` handling server-action responses, the effect triggers on every keystroke after the form has been submitted once (since `state.timestamp > initialState.timestamp` remains true). This results in spamming `toast` alerts and continually resetting form inputs, locking focus.
- **Proposal for Correction**:
  Destructure the stable, reference-constant helper methods from `form` and list only them in the dependency array:
  ```typescript
  const { reset, setError, getFieldState } = form;

  useEffect(() => {
    if (state?.timestamp && state.timestamp > (initialState.timestamp ?? 0)) {
        if (state.message) {
          toast({ ... });
          reset();
        }
        ...
    }
  }, [state, toast, reset, setError, getFieldState]);
  ```

#### Finding 4.5: Redundant Autocomplete API Fetching on Address Selection
- **File Link**: [src/components/calculator/address-autocomplete.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/calculator/address-autocomplete.tsx#L20)
- **Code Snippet**:
  ```typescript
  useEffect(() => {
    if (!value || value.length < 3) {
      setSuggestions([]);
      return;
    }
    ...
    debounceRef.current = setTimeout(async () => {
      const res = await fetch(url);
      ...
    }, 300);
  }, [value]);
  ```
- **Description & Impact**:
  When a user clicks a suggestion, `handleSelect` is called, which updates the parent state via `onChange(fullAddress)`. This updates the `value` prop. The `useEffect` triggers because `value` changed, immediately scheduling a new external API query to find suggestions for the exact string selected. This wastes API quota and causes the suggestions dropdown to briefly reappear.
- **Proposal for Correction**:
  Introduce a ref to track whether the change was user-selected:
  ```typescript
  const isSelectedRef = useRef(false);

  // In handleSelect:
  isSelectedRef.current = true;
  onChange(fullAddress);
  setSuggestions([]);
  setShowSuggestions(false);

  // In useEffect:
  if (isSelectedRef.current) {
    isSelectedRef.current = false;
    return;
  }
  ```

#### Finding 4.6: Client-Side Import of Server-Rendering Engine (react-dom/server)
- **File Link**: [src/components/maps/leaflet-map.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/maps/leaflet-map.tsx#L10)
- **Code Snippet**:
  ```typescript
  import { renderToStaticMarkup } from 'react-dom/server';
  ...
  const customMarkerIcon = L.divIcon({
    html: renderToStaticMarkup(<MapPin color="#eab308" size={32} />),
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
  ```
- **Description & Impact**:
  `react-dom/server` is imported inside a client component to render the Lucide `MapPin` icon to static HTML. This forces Next.js to package the heavy server rendering runtime into the client-side JavaScript bundle, unnecessarily increasing bundle size.
- **Proposal for Correction**:
  Replace `renderToStaticMarkup` by embedding a static SVG string directly into the HTML option:
  ```typescript
  const customMarkerIcon = L.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eab308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
  ```

#### Finding 4.7: Sequential Geocoding API Calls (Waterfall)
- **File Link**: [src/app/ordenes/actions.ts](file:///E:/proyectos/000pruebasenviosjunio/src/app/ordenes/actions.ts#L122)
- **Code Snippet**:
  ```typescript
  const originCoords = await geocodeNominatim(validatedData.originAddress);
  if (!originCoords) return { ... };

  const destinationCoords = await geocodeNominatim(validatedData.destinationAddress);
  if (!destinationCoords) return { ... };
  ```
- **Description & Impact**:
  Geocoding the origin and destination addresses are completely independent network operations. By sequentially awaiting them, the total execution time is the sum of both network calls.
- **Proposal for Correction**:
  Use `Promise.all` to parallelize the requests:
  ```typescript
  const [originCoords, destinationCoords] = await Promise.all([
    geocodeNominatim(validatedData.originAddress),
    geocodeNominatim(validatedData.destinationAddress)
  ]);
  if (!originCoords) return { success: false, error: `No se pudo geolocalizar la dirección de origen: ${validatedData.originAddress}` };
  if (!destinationCoords) return { success: false, error: `No se pudo geolocalizar la dirección de destino: ${validatedData.destinationAddress}` };
  ```

#### Finding 4.8: Bypassing the OSRM Utility Helper
- **File Link**: [src/app/ordenes/actions.ts](file:///E:/proyectos/000pruebasenviosjunio/src/app/ordenes/actions.ts#L132)
- **Code Snippet**:
  ```typescript
  const directionsUrl = `https://router.project-osrm.org/route/v1/driving/${originCoords.lng},${originCoords.lat};${destinationCoords.lng},${destinationCoords.lat}?overview=false`;
  const directionsResponse = await fetch(directionsUrl);
  ```
- **Description & Impact**:
  An inline `fetch` call is directly made to the OSRM routing API inside the server action, bypassing the dedicated utility helper `getRoute` defined in `src/lib/maps/osrm.ts`. This duplicates endpoint construction logic and hurts maintainability.
- **Proposal for Correction**:
  Import and utilize the `getRoute` function from `@/lib/maps/osrm` inside the server action.

#### Finding 4.9: Object and Array Dependencies in RouteMap and LeafletMap Effects
- **File Links**: 
  - [src/components/calculator/route-map.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/calculator/route-map.tsx#L66)
  - [src/components/maps/leaflet-map.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/maps/leaflet-map.tsx#L34)
- **Code Snippets**:
  - `route-map.tsx`: `}, [origin, destination]);`
  - `leaflet-map.tsx`: `}, [map, origin, destination, routeGeometry]);`
- **Description & Impact**:
  `origin` and `destination` are objects (`{ lat: number, lng: number }`) and `routeGeometry` is an array. When their references change (even if coordinates remain identical), the effects trigger. This triggers unnecessary API fetches to OSRM in `RouteMap` and redraws/recalculates leaflet bounds in `LeafletMap`.
- **Proposal for Correction**:
  Destructure coordinates to depend on primitive numbers, and serialize arrays if necessary:
  ```typescript
  const originLat = origin?.lat;
  const originLng = origin?.lng;
  const destLat = destination?.lat;
  const destLng = destination?.lng;
  // Use these primitives in the dependency arrays.
  ```

#### Finding 4.10: Inefficient Listener Dependency Array in useToast Hook
- **File Links**: 
  - [src/hooks/use-toast.ts](file:///E:/proyectos/000pruebasenviosjunio/src/hooks/use-toast.ts#L185)
  - [src/components/ui/use-toast.ts](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/use-toast.ts#L186)
- **Code Snippet**:
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
- **Description & Impact**:
  The `useEffect` in the `useToast` hook includes the reactive `state` object in its dependency array. Since `setState` is reference-stable, including `state` causes the effect to re-run and register/unregister the listener on every single toast modification, defeating the purpose of the listener registry.
- **Proposal for Correction**:
  Change the dependency array to `[]` so that the listener registers once on mount and unregisters on unmount.

#### Finding 4.11: Redundant Database Queries via Ignored priceRanges Props
- **File Links**: 
  - [src/components/entrepreneur/entrepreneur-pricing-ranges.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/entrepreneur/entrepreneur-pricing-ranges.tsx#L20)
  - [src/components/envios-flex/flex-pricing-ranges.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/envios-flex/flex-pricing-ranges.tsx#L20)
- **Code Snippet**:
  ```typescript
  export function EntrepreneurPricingRanges({ priceRanges }: EntrepreneurPricingRangesProps) {
    const entrepreneurTiers = [ ... ]; // Hardcoded pricing structures
    // priceRanges is never used!
  ```
- **Description & Impact**:
  The parent pages fetch `priceRanges` from Prisma and pass them as props, but these components ignore them entirely and render static UI tiers, making the database query and data transfer completely redundant.
- **Proposal for Correction**:
  Update components to dynamically render the data from `priceRanges` or remove the prisma query from the parent pages.

#### Finding 4.12: RSC Prop Minimization (Excessive Prop Serialization)
- **File Links**: 
  - [src/app/servicios/envios-express/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/servicios/envios-express/page.tsx#L37)
  - [src/app/servicios/envios-lowcost/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/servicios/envios-lowcost/page.tsx#L42)
  - [src/app/servicios/enviosflex/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/servicios/enviosflex/page.tsx#L43)
  - [src/app/servicios/plan-emprendedores/page.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/servicios/plan-emprendedores/page.tsx#L40)
- **Code Snippet**:
  ```typescript
  return priceRanges.map(pr => ({
    ...pr,
    distanciaMinKm: pr.distanciaMinKm.toNumber(),
    distanciaMaxKm: pr.distanciaMaxKm.toNumber(),
    precioRango: pr.precioRango.toNumber(),
  }));
  ```
- **Description & Impact**:
  By spreading `...pr`, the server component serializes and sends database metadata fields like `createdAt` (Date), `updatedAt` (Date), `isActive` (boolean), and `serviceType` to the client. The client component only consumes `id`, `distanciaMinKm`, `distanciaMaxKm`, and `precioRango`. This increases the RSC wire payload and incurs unnecessary date-serialization overhead.
- **Proposal for Correction**:
  Selectively map only the fields that the client components consume:
  ```typescript
  return priceRanges.map(pr => ({
    id: pr.id,
    distanciaMinKm: pr.distanciaMinKm.toNumber(),
    distanciaMaxKm: pr.distanciaMaxKm.toNumber(),
    precioRango: pr.precioRango.toNumber(),
  }));
  ```

#### Finding 4.13: Wrong Client Field Fallbacks in saveShipment
- **File Link**: [src/app/ordenes/actions.ts](file:///E:/proyectos/000pruebasenviosjunio/src/app/ordenes/actions.ts#L342)
- **Code Snippet**:
  ```typescript
  clientNameAtOrder: validatedData.clientNameAtOrder || validatedData.destinationContactName,
  clientPhoneAtOrder: validatedData.clientPhoneAtOrder || validatedData.destinationContactPhone,
  ```
- **Description & Impact**:
  When the client's name or phone at order time is omitted, the code defaults to the destination contact details. The destination contact details represent the recipient, not the sender. This corrupts audit history logs in the database.
- **Proposal for Correction**:
  Fall back to `originFullName` and `originPhone` respectively (which represent the sender/client):
  ```typescript
  clientNameAtOrder: validatedData.clientNameAtOrder || validatedData.originFullName,
  clientPhoneAtOrder: validatedData.clientPhoneAtOrder || validatedData.originPhone,
  ```

#### Finding 4.14: Missing Rate Limiting and Caching on Map API Integrations
- **File Links**: 
  - [src/lib/maps/nominatim.ts](file:///E:/proyectos/000pruebasenviosjunio/src/lib/maps/nominatim.ts#L1)
  - [src/lib/maps/osrm.ts](file:///E:/proyectos/000pruebasenviosjunio/src/lib/maps/osrm.ts#L1)
  - [src/lib/maps/photon.ts](file:///E:/proyectos/000pruebasenviosjunio/src/lib/maps/photon.ts#L1)
- **Description & Impact**:
  External calls to geocoding and routing endpoints are made directly without rate limiting or caching. Nominatim, in particular, enforces a strict usage policy limit of 1 request per second. High user volumes will quickly lead to 429 errors or IP blocking.
- **Proposal for Correction**:
  Implement response caching (e.g. keying by normalized address or coordinate pair in memory/Redis) and add a rate-limiting queue.

#### Finding 4.15: Missing Model Configuration in High-Intelligence AI Flows
- **File Links**: 
  - [src/ai/flows/generate-replication-prompt-v2.ts](file:///E:/proyectos/000pruebasenviosjunio/src/ai/flows/generate-replication-prompt-v2.ts#L1)
  - [src/ai/flows/generate-replication-prompt.ts](file:///E:/proyectos/000pruebasenviosjunio/src/ai/flows/generate-replication-prompt.ts#L1)
  - [src/ai/flows/generate-component-prompt.ts](file:///E:/proyectos/000pruebasenviosjunio/src/ai/flows/generate-component-prompt.ts#L1)
- **Description & Impact**:
  These meta-prompting and code analysis flows do not specify a model in their `definePrompt()` configurations. Consequently, they fall back to the default `googleai/gemini-2.5-flash` model. According to `GEMINI.md`, complex code generation, synthesis, and meta-prompting tasks must use the higher-tier `googleai/gemini-2.5-pro` model to avoid reasoning failure or context exhaustion.
- **Proposal for Correction**:
  Explicitly specify the model configuration in the prompts:
  ```typescript
  export const generateReplicationPrompt = ai.definePrompt({
    name: 'generateReplicationPrompt',
    model: 'googleai/gemini-2.5-pro',
    ...
  });
  ```

#### Finding 4.16: Omission of Exponential Backoff Retry Wrapper in AI Flows
- **File Links**: All files under `src/ai/flows/`
- **Description & Impact**:
  The helper `withExponentialBackoff` located in `src/ai/utils/retry.ts` was implemented to protect flows from failing due to Google AI Studio's 429/Resource Exhausted rate limits. However, none of the flows import or wrap their executions with this utility, leaving them vulnerable to API runtime crashes under load.
- **Proposal for Correction**:
  Wrap AI generation calls with the backoff helper:
  ```typescript
  import { withExponentialBackoff } from '../utils/retry';
  const result = await withExponentialBackoff(() => prompt(input));
  ```

---

### Baja (Minor Issues / Cleanups)

#### Finding 4.17: Static Components marked with "use client"
- **File Links**: 
  - `src/components/calculator/calculator-hero.tsx`
  - `src/components/calculator/lowcost-calculator-hero.tsx`
  - `src/components/contact/contact-hero.tsx`
  - `src/components/entrepreneur/entrepreneur-hero.tsx`
  - `src/components/envios-flex/envios-flex-hero.tsx`
  - `src/components/express/express-hero.tsx`
  - `src/components/social/social-hero.tsx`
  - `src/components/about/about-hero.tsx`
  - `src/components/seo/WhatsAppReviewButton.tsx`
  - `src/components/express/whatsapp-button.tsx`
- **Description & Impact**:
  These static components do not employ state, context, hooks, or browser-only APIs. Yet, they are declared with `'use client'`. This unnecessarily compiles them into client-side JS bundles.
- **Proposal for Correction**:
  Remove the `'use client'` directive to compile them as React Server Components.

#### Finding 4.18: Non-Passive Scroll Event Listener in header-container.tsx
- **File Link**: [src/components/homenew/header-container.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/homenew/header-container.tsx#L14)
- **Code Snippet**:
  ```typescript
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  ```
- **Description & Impact**:
  The scroll event listener does not use `{ passive: true }`. This causes layout thrashing and scrolling performance lag on mobile webviews.
- **Proposal for Correction**:
  Add the passive configuration option:
  ```typescript
  window.addEventListener('scroll', handleScroll, { passive: true });
  ```

#### Finding 4.19: Non-Hoisted Static Objects (Animation Variants)
- **File Links**: 
  - [src/components/homenew/mobile-menu.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/homenew/mobile-menu.tsx#L62)
  - [src/components/lowcost/lowcost-content.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/lowcost/lowcost-content.tsx#L28)
- **Description & Impact**:
  Static Framer Motion animation variant objects are defined inside the component render functions. This triggers recreation of the objects on every render cycle.
- **Proposal for Correction**:
  Hoist the variants out of the component function to the module scope.

#### Finding 4.20: Unused Duplicate Files
- **File Links**: 
  - [src/components/ui/use-mobile.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/use-mobile.tsx)
  - [src/components/ui/use-toast.ts](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/use-toast.ts)
- **Description & Impact**:
  These files are exact duplicates of hooks present under `src/hooks/` and are not imported or referenced anywhere in the codebase.
- **Proposal for Correction**:
  Safely delete these redundant files.

#### Finding 4.21: Same-Day Comparison via `getTime()` in Zod Validation
- **File Link**: [src/app/ordenes/actions.ts](file:///E:/proyectos/000pruebasenviosjunio/src/app/ordenes/actions.ts#L291)
- **Code Snippet**:
  ```typescript
  if (data.pickupDate && data.deliveryDate && data.pickupDate.getTime() === data.deliveryDate.getTime()) {
  ```
- **Description & Impact**:
  Comparing two Dates using `getTime()` checks absolute milliseconds. If dates are supplied with differing timezone offsets or time segments, this comparison returns false even if they represent the exact same calendar day, bypassing same-day constraints.
- **Proposal for Correction**:
  Compare the calendar day, month, and year values:
  ```typescript
  const isSameDay = data.pickupDate.getUTCDate() === data.deliveryDate.getUTCDate() &&
                    data.pickupDate.getUTCMonth() === data.deliveryDate.getUTCMonth() &&
                    data.pickupDate.getUTCFullYear() === data.deliveryDate.getUTCFullYear();
  ```

#### Finding 4.22: Navigation Anti-pattern in Not-Found Page
- **File Link**: [src/app/not-found.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/app/not-found.tsx#L33)
- **Code Snippet**:
  ```typescript
  <Button asChild variant="outline" size="lg">
    <Link href="javascript:history.back()">
      <ArrowLeft className="w-5 h-5 mr-2" />
      Volver Atrás
    </Link>
  </Button>
  ```
- **Description & Impact**:
  Next.js `<Link>` expects a relative or absolute URL. Passing `javascript:history.back()` triggers compilation and hydration warnings.
- **Proposal for Correction**:
  Replace with a standard HTML `<button>` inside an inline client-side handler:
  ```typescript
  <Button 
    variant="outline" 
    size="lg" 
    onClick={() => {
      if (typeof window !== 'undefined') {
        window.history.back();
      }
    }}
  >
    <ArrowLeft className="w-5 h-5 mr-2" />
    Volver Atrás
  </Button>
  ```

#### Finding 4.23: Missing Barrel Imports Config in next.config.mjs
- **File Link**: [next.config.mjs](file:///E:/proyectos/000pruebasenviosjunio/next.config.mjs#L1)
- **Description & Impact**:
  Libraries like `lucide-react` are heavily imported using named imports, requiring Next.js to scan the entire entry bundle for each build, slowing down dev builds (HMR) and cold-starts.
- **Proposal for Correction**:
  Configure package import optimization:
  ```javascript
  experimental: {
    optimizePackageImports: ["lucide-react"]
  }
  ```

#### Finding 4.24: Business-Coupled UI Component
- **File Link**: [src/components/ui/background-shader.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/background-shader.tsx#L5)
- **Code Snippet**:
  ```typescript
  export default function Waitlist() {
    return (
      ...
      <h1 className="text-4xl md:text-6xl tracking-tight text-white drop-shadow-2xl py-[23px] font-semibold">
        We are launching SickUI soon!
      ...
  ```
- **Description & Impact**:
  The `src/components/ui/` folder is reserved strictly for generic, reusable design primitive blocks. Storing a page-level waitlist layout with custom business/marketing text in this directory violates clean architecture boundaries.
- **Proposal for Correction**:
  Move `background-shader.tsx` or rename/relocate the `Waitlist` component to `src/components/` under an appropriate business folder.

#### Finding 4.25: Style Injection & Variant Bypass in HeroSection
- **File Link**: [src/components/ui/HeroSection.tsx](file:///E:/proyectos/000pruebasenviosjunio/src/components/ui/HeroSection.tsx#L232)
- **Description & Impact**:
  Injecting raw HTML style tags via `dangerouslySetInnerHTML` and overriding button styles inline instead of relying on component variant props hurts codebase standardization.
- **Proposal for Correction**:
  Extract styles to Tailwind configuration or Tailwind utilities, and use standard props for variants.

#### Finding 4.26: Unused eslint-disable Directives
- **File Links**: 
  - `src/ai/flows/generate-image-prompt.ts` (Line 27)
  - `src/ai/flows/generate-optimal-image-prompt.ts` (Line 26)
  - `src/ai/flows/generate-service-image-prompt.ts` (Line 26)
  - `src/ai/flows/suggest-optimal-image-details.ts` (Line 16)
  - `src/ai/flows/suggest-service-image-details.ts` (Line 20)
- **Description & Impact**:
  Unused eslint-disable comments are scattered in several files, generating unnecessary compiler warnings.
- **Proposal for Correction**:
  Safely remove these comments since no variables are left unused.
