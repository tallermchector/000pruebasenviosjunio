# Handoff Report: Business Logic & Georouting Audit (R3)

This report details the findings from our audit of the "Dos Ruedas Pro" geocoding, routing, database schema, and server actions pricing logic.

---

## 1. Observation

During the read-only audit of the codebase, we inspected the following files:
*   `src/lib/maps/nominatim.ts`
*   `src/lib/maps/osrm.ts`
*   `prisma/schema.prisma`
*   `src/app/ordenes/actions.ts`

Here are the specific, verbatim code blocks where issues were observed:

### Observation A: Base Price Calculation for Distances > 10 km
In `src/app/ordenes/actions.ts` (lines 167-177):
```typescript
        } else {
            // Distance > 10 km: calculate base + extra per-km rate
            // 1. Get base price of the last standard range (7.00 to 10.00 km)
            const baseRangeRecord = await prisma.priceRange.findFirst({
                where: {
                    distanciaMinKm: { gte: 7.00 },
                    distanciaMaxKm: { lte: 10.00 },
                    serviceType: validatedData.serviceType,
                    isActive: true,
                },
            });
```

### Observation B: Date Timezone Shift in `saveShipment`
In `src/app/ordenes/actions.ts` (lines 312-318):
```typescript
        const [pHoursFrom, pMinutesFrom] = validatedData.pickupTimeFrom.split(':').map(Number);
        const finalPickupDateTime = new Date(validatedData.pickupDate);
        finalPickupDateTime.setHours(pHoursFrom, pMinutesFrom, 0, 0);

        const [dHoursFrom, dMinutesFrom] = validatedData.deliveryTimeFrom.split(':').map(Number);
        const finalDeliveryDateTime = new Date(validatedData.deliveryDate);
        finalDeliveryDateTime.setHours(dHoursFrom, dMinutesFrom, 0, 0);
```

### Observation C: Bypassing the OSRM Utility
In `src/app/ordenes/actions.ts` (lines 132-138):
```typescript
        const directionsUrl = `https://router.project-osrm.org/route/v1/driving/${originCoords.lng},${originCoords.lat};${destinationCoords.lng},${destinationCoords.lat}?overview=false`;

        const directionsResponse = await fetch(directionsUrl);
        if (!directionsResponse.ok) {
            const errorText = await directionsResponse.text();
            console.error(`OSRM Routing API HTTP error: ${directionsResponse.status}. URL: ${directionsUrl}. Response: ${errorText}`);
            return { success: false, error: `Error del API de ruteo OSRM (status ${directionsResponse.status}): ${directionsResponse.statusText}` };
        }
```
Meanwhile, `src/lib/maps/osrm.ts` exposes a helper that is unused here:
```typescript
export async function getRoute(origin: { lat: number, lng: number }, destination: { lat: number, lng: number }) {
  const url = `https://router.project-osrm.org/route/v1/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`;
  const response = await fetch(url);
  ...
}
```

### Observation D: Client Field Fallback Inconsistencies
In `src/app/ordenes/actions.ts` (lines 342-343):
```typescript
            clientNameAtOrder: validatedData.clientNameAtOrder || validatedData.destinationContactName,
            clientPhoneAtOrder: validatedData.clientPhoneAtOrder || validatedData.destinationContactPhone,
```

### Observation E: Same-Day Comparison via `getTime()`
In `src/app/ordenes/actions.ts` (lines 290-295):
```typescript
    .refine(data => {
        if (data.pickupDate && data.deliveryDate && data.pickupDate.getTime() === data.deliveryDate.getTime()) {
            const pickupEndMinutes = parseInt(data.pickupTimeTo.split(':')[0], 10) * 60 + parseInt(data.pickupTimeTo.split(':')[1], 10);
```

### Observation F: Database Seed Ranges
In `prisma/seed.ts` (lines 49-53):
```typescript
      { id: 18, serviceType: "LOW_COST", distanciaMinKm: 0.0, distanciaMaxKm: 2.99, precioRango: 2150.0, isActive: true, createdAt: new Date("2025-06-21T05:44:19.166Z"), updatedAt: new Date("2025-06-21T06:23:23.368Z") },
      { id: 19, serviceType: "LOW_COST", distanciaMinKm: 3.0, distanciaMaxKm: 4.99, precioRango: 2900.0, isActive: true, createdAt: new Date("2025-06-21T05:44:19.341Z"), updatedAt: new Date("2025-06-21T06:23:23.550Z") },
      { id: 20, serviceType: "LOW_COST", distanciaMinKm: 5.0, distanciaMaxKm: 8.99, precioRango: 4000.0, isActive: true, createdAt: new Date("2025-06-21T05:44:19.519Z"), updatedAt: new Date("2025-06-21T06:23:23.724Z") },
      { id: 21, serviceType: "LOW_COST", distanciaMinKm: 9.0, distanciaMaxKm: 12.99, precioRango: 5800.0, isActive: true, createdAt: new Date("2025-06-21T05:44:19.702Z"), updatedAt: new Date("2025-06-21T06:23:23.903Z") },
      { id: 22, serviceType: "LOW_COST", distanciaMinKm: 13.01, distanciaMaxKm: 20.0, precioRango: 8200.0, isActive: true, createdAt: new Date("2025-06-21T05:44:19.882Z"), updatedAt: new Date("2025-06-21T06:23:24.074Z") },
```

---

## 2. Logic Chain

### Logic Chain 1: LOW_COST Base Price Pricing Discontinuity (Observation A & F)
1. In `prisma/seed.ts`, the database price ranges for the `LOW_COST` service type under 10 km are defined as:
   - 0 to 2.99 km (2150.0)
   - 3 to 4.99 km (2900.0)
   - 5 to 8.99 km (4000.0)
   - 9 to 12.99 km (5800.0)
2. When the user quotes a distance greater than 10 km (e.g. 10.01 km), the code attempts to find the "base price of the last standard range (7.00 to 10.00 km)" by querying for a record where `distanciaMinKm >= 7.00` and `distanciaMaxKm <= 10.00`.
3. Evaluating the database ranges for `LOW_COST` against this query:
   - The range `5.0 to 8.99` fails because `distanciaMinKm` (5.00) is not `>= 7.00`.
   - The range `9.0 to 12.99` fails because `distanciaMaxKm` (12.99) is not `<= 10.00`.
4. Therefore, no record is matched. `baseRangeRecord` resolves to `null`.
5. The code falls back to `7000` as the default base price for LOW_COST.
6. The actual price of the range containing the 10.00 km threshold is `5800.0` (from the 9.0 to 12.99 range).
7. This causes a pricing discontinuity: at exactly 10.00 km, the price is 5800.0. At 10.01 km, it jumps to `7000 + (0.01 * 700) = 7007` (a difference of over 1200 pesos for 10 meters).
8. **Conclusion**: This is a severe logic bug that impacts pricing fairness and accuracy.

### Logic Chain 2: Timezone Date Shift (Observation B)
1. `z.coerce.date()` coerces date strings (such as `"2026-06-11"`) into UTC Date objects, representing `2026-06-11T00:00:00.000Z`.
2. The server creates a copy (`new Date(validatedData.pickupDate)`) and modifies the hours using the native `.setHours(...)` method.
3. `.setHours(...)` operates in the local system timezone of the server.
4. If the server runs in a negative offset timezone (like Argentina's UTC-3), `2026-06-11T00:00:00.000Z` corresponds to June 10th at 21:00:00 local time.
5. Calling `.setHours(9)` sets the local hour to 09:00:00 on June 10th.
6. When Prisma saves this back to the database, it converts it to UTC (`2026-06-10T12:00:00.000Z`).
7. **Conclusion**: The order is saved with the date shifted to the previous day, resulting in database date corruption.

### Logic Chain 3: Bypassing OSRM Utility (Observation C)
1. `src/lib/maps/osrm.ts` exposes `getRoute`, which is designed to centralize georouting requests to OSRM.
2. In `quoteShipment` inside `src/app/ordenes/actions.ts`, an inline `fetch` call is directly made to the project-osrm.org API instead of reusing `getRoute`.
3. This duplicates logic, breaks DRY, and uses different parameters (`overview=false` in the action vs `overview=full&geometries=geojson` in the utility).
4. **Conclusion**: This is a medium-severity maintenance issue.

### Logic Chain 4: Wrong Client Field Fallbacks (Observation D)
1. `clientNameAtOrder` and `clientPhoneAtOrder` are intended to record the sender's (client's) contact details at the moment the order is registered.
2. If those fields are not explicitly provided in the payload, the code falls back to `destinationContactName` and `destinationContactPhone`.
3. The destination contact details belong to the package recipient, not the client sending the package.
4. **Conclusion**: This is a logical defect. The fallback should be `originFullName` and `originPhone`.

### Logic Chain 5: Same-Day Validation Bug (Observation E)
1. The Zod schema refines input dates using `data.pickupDate.getTime() === data.deliveryDate.getTime()`.
2. `getTime()` measures absolute milliseconds.
3. If the date parameters are supplied with different time segments or timezone offsets, the milliseconds will differ even if the dates represent the same calendar day, causing the validation to skip same-day checks.
4. **Conclusion**: This is a minor validation bug.

---

## 3. Caveats

*   **Database Seed Config**: We assumed the pricing model specified in `AGENTS.md` and `task.md` (formula applied strictly above 10 km) is the source of truth, and that the database ranges above 10 km (e.g. 10.01 to 20.0 km) in `seed.ts` are either legacy or invalid under this business rule.
*   **Nominatim Geocoding limits**: We did not verify the actual rate limit response headers of OSM Nominatim, but standard usage policies prohibit high-frequency requests.

---

## 4. Conclusion

The audit has revealed two severe issues (the pricing calculation discontinuity for `LOW_COST` and the timezone shift bug that corrupts order dates in database writes), along with several code-quality and logic improvements:

### Summary of Actions Required:

1.  **Fix Pricing Logic Discontinuity (Severe)**:
    Replace the query for `baseRangeRecord` in `src/app/ordenes/actions.ts`:
    ```typescript
    // Before:
    const baseRangeRecord = await prisma.priceRange.findFirst({
        where: {
            distanciaMinKm: { gte: 7.00 },
            distanciaMaxKm: { lte: 10.00 },
            serviceType: validatedData.serviceType,
            isActive: true,
        },
    });

    // After:
    const baseRangeRecord = await prisma.priceRange.findFirst({
        where: {
            distanciaMinKm: { lte: 10.00 },
            distanciaMaxKm: { gte: 10.00 },
            serviceType: validatedData.serviceType,
            isActive: true,
        },
    });
    ```
2.  **Fix Timezone Shift Bug (Severe)**:
    Use `setUTCHours` to prevent the local timezone offset from shifting the date to the previous day:
    ```typescript
    // Before:
    finalPickupDateTime.setHours(pHoursFrom, pMinutesFrom, 0, 0);
    finalDeliveryDateTime.setHours(dHoursFrom, dMinutesFrom, 0, 0);

    // After:
    finalPickupDateTime.setUTCHours(pHoursFrom, pMinutesFrom, 0, 0);
    finalDeliveryDateTime.setUTCHours(dHoursFrom, dMinutesFrom, 0, 0);
    ```
3.  **Deduplicate OSRM routing calls (Medium)**:
    Update `quoteShipment` to import and call `getRoute` from `@/lib/maps/osrm` to clean up the code.
4.  **Correct Client Fallback fields (Medium)**:
    Update fallbacks to use `originFullName` and `originPhone`.
5.  **Robust Same-Day Check (Low)**:
    Compare the calendar day components of the date objects instead of `getTime()`.

---

## 5. Verification Method

### Step-by-Step Verification Instructions:
1.  **Type Checking**:
    Run `npm run typecheck` (or `pnpm run typecheck` depending on package manager) to verify there are no TypeScript compile errors in `src/app/ordenes/actions.ts`.
2.  **Verify Pricing Formula**:
    Simulate a quote for a `LOW_COST` shipment of `10.50` km:
    *   *Expected behavior*: Base price matches the `9.0 to 12.99` range (`5800`), extra km price is `700`. Total price = `5800 + (0.50 * 700) = 6150`.
    *   *Observed bugged behavior*: Base price is fallback `7000`, extra km price is `700`. Total price = `7000 + (0.50 * 700) = 7350`.
3.  **Verify Timezone Shift**:
    Create an order using the server action on a machine/server with negative UTC offset (e.g. UTC-3):
    *   Select pickup date: `2026-06-11`, pickup time: `09:30`.
    *   *Expected behavior*: `pickupDateTime` in PostgreSQL contains `2026-06-11 09:30:00 UTC` or equivalent representation.
    *   *Observed bugged behavior*: `pickupDateTime` contains `2026-06-10 12:30:00 UTC` (shifted by 21 hours backward).
