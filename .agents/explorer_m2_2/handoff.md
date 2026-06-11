# Handoff Report - React & Hook Performance Audit (R2 - Part 2)

## 1. Observation
Below are the exact observations made across custom React components and hooks in `src/components/` (excluding `ui/`) and `src/hooks/`.

### Finding 1.1: Redundant Action State Effect Triggering
* **File**: `E:/proyectos/000pruebasenviosjunio/src/components/contact/contact-form.tsx`
* **Lines**: 67-100
* **Code Snippet**:
  ```typescript
     useEffect(() => {
      if (state?.timestamp && state.timestamp > (initialState.timestamp ?? 0)) {
          if (state.message) {
            toast({ ... });
            form.reset();
          }
          if (state.error) {
            toast({ ... });
          }
          ...
      }
    }, [state, toast, form]);
  ```
* **Direct Observation**: The `form` object returned by `useForm` changes reference on every render. Because `form` is in the dependency array, this effect executes on *every single render*. After the form is submitted once (so `state.timestamp > initialState.timestamp` remains true), the effect will trigger again on every keypress when the user types in the form, leading to spamming `toast` alerts and resetting input focus.

### Finding 1.2: Redundant Autocomplete API Fetching upon Selection
* **File**: `E:/proyectos/000pruebasenviosjunio/src/components/calculator/address-autocomplete.tsx`
* **Lines**: 20-47
* **Code Snippet**:
  ```typescript
    useEffect(() => {
      if (!value || value.length < 3) {
        setSuggestions([]);
        return;
      }
      ...
      debounceRef.current = setTimeout(async () => {
        ...
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.features) {
          setSuggestions(data.features);
          setShowSuggestions(true);
        }
      }, 300);
      ...
    }, [value]);
  ```
* **Direct Observation**: When a user selects an address suggestion via `handleSelect`, it calls `onChange(fullAddress)`. This updates the parent state, which propagates back down as the `value` prop. The `useEffect` detects `value` has changed, waits 300ms, and calls the API to search suggestions *again* for the exact address the user just clicked. This causes redundant network calls and makes the suggestion list reopen.

### Finding 1.3: Object Dependencies in route-map.tsx and leaflet-map.tsx Effects
* **Files**:
  * `E:/proyectos/000pruebasenviosjunio/src/components/calculator/route-map.tsx` (Lines 28-66)
  * `E:/proyectos/000pruebasenviosjunio/src/components/maps/leaflet-map.tsx` (Lines 25-34)
* **Code Snippet (route-map.tsx)**:
  ```typescript
    useEffect(() => {
      ...
    }, [origin, destination]);
  ```
* **Code Snippet (leaflet-map.tsx)**:
  ```typescript
    useEffect(() => {
      ...
    }, [map, origin, destination, routeGeometry]);
  ```
* **Direct Observation**: The dependencies `origin` and `destination` are objects (`{ lat: number, lng: number }`) and `routeGeometry` is an array. When their references change (even if their coordinates are identical), the effects execute, leading to unnecessary routing API fetches and leaflet view/bounds recalculations.

### Finding 1.4: Client-Side Import of Server-Rendering Engine (react-dom/server)
* **File**: `E:/proyectos/000pruebasenviosjunio/src/components/maps/leaflet-map.tsx`
* **Lines**: 10, 38-43
* **Code Snippet**:
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
* **Direct Observation**: `react-dom/server` is imported to render a static SVG icon via `renderToStaticMarkup`. This bundles a large portion of React's server-side rendering library into the client-side JavaScript bundle.

### Finding 1.5: Static Components marked with "use client"
* **Files**:
  * `src/components/calculator/calculator-hero.tsx` (Lines 1-37)
  * `src/components/calculator/lowcost-calculator-hero.tsx` (Lines 1-37)
  * `src/components/contact/contact-hero.tsx` (Lines 1-44)
  * `src/components/entrepreneur/entrepreneur-hero.tsx` (Lines 1-36)
  * `src/components/envios-flex/envios-flex-hero.tsx` (Lines 1-36)
  * `src/components/express/express-hero.tsx` (Lines 1-32)
  * `src/components/social/social-hero.tsx` (Lines 1-15)
  * `src/components/about/about-hero.tsx` (Lines 1-38)
  * `src/components/seo/WhatsAppReviewButton.tsx` (Lines 1-30)
  * `src/components/express/whatsapp-button.tsx` (Lines 1-26)
* **Direct Observation**: These components do not use state, context, or browser APIs. They are currently client components, which increases the client JS bundle. They should be converted to Server Components (RSC) to render on the server.

### Finding 1.6: Inefficient Listener Dependency Array in useToast
* **File**: `E:/proyectos/000pruebasenviosjunio/src/hooks/use-toast.ts` (and duplicate `src/components/ui/use-toast.ts`)
* **Lines**: 174-192
* **Code Snippet**:
  ```typescript
  function useToast() {
    const [state, setState] = React.useState<State>(memoryState)

    React.useEffect(() => {
      listeners.push(setState)
      return () => {
        const index = listeners.indexOf(setState)
        if (index > -1) {
          listeners.splice(index, 1)
        }
      }
    }, [state])
    ...
  ```
* **Direct Observation**: The `state` variable is included in the dependency array. Since `setState` has a stable identity, having `state` as a dependency is unnecessary and causes the effect to re-run, removing and re-adding the listener on every single toast state change.

### Finding 1.7: Non-Passive Scroll Event Listener
* **File**: `E:/proyectos/000pruebasenviosjunio/src/components/homenew/header-container.tsx`
* **Lines**: 14-18
* **Code Snippet**:
  ```typescript
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  ```
* **Direct Observation**: The scroll event listener does not use `{ passive: true }`, which can cause layout thrashing and scrolling performance lag, especially on mobile.

### Finding 1.8: Non-Hoisted Static Objects (Animation Variants)
* **Files**:
  * `E:/proyectos/000pruebasenviosjunio/src/components/homenew/mobile-menu.tsx` (Lines 62-74)
  * `E:/proyectos/000pruebasenviosjunio/src/components/lowcost/lowcost-content.tsx` (Lines 28-36)
* **Direct Observation**: Static animation variants (`mobileNavVariants`, `mobileNavItemVariants`, `sectionVariants`, `itemVariants`) are created inside the component functions. This causes recreation of objects on every render, triggering redundant Framer Motion parses.

### Finding 1.9: Redundant DB Queries via Ignored Props
* **Files**:
  * `src/components/entrepreneur/entrepreneur-pricing-ranges.tsx` (Lines 20-58)
  * `src/components/envios-flex/flex-pricing-ranges.tsx` (Lines 20-58)
* **Direct Observation**: The page server components (e.g., `src/app/servicios/plan-emprendedores/page.tsx` and `src/app/servicios/enviosflex/page.tsx`) query `priceRanges` from Prisma and pass them as props, but these components completely ignore the `priceRanges` prop and render static UI instead, resulting in wasted DB calls.

### Finding 1.10: Unused Duplicate Files
* **Files**:
  * `src/components/ui/use-mobile.tsx`
  * `src/components/ui/use-toast.ts`
* **Direct Observation**: These files are duplicates of files under `src/hooks/` and are not imported or used anywhere in the codebase.

---

## 2. Logic Chain

1. **Finding 1.1 (Action State Effect)**:
   * React Hook Form's `useForm` returns a new object reference on every render.
   * `useEffect` in `contact-form.tsx` has `form` in its dependency array.
   * Therefore, the effect re-runs on every keystroke when typing.
   * If `state.error` is set, it executes the toast logic and resetting operations on every render, spamming the UI and breaking the input focus.

2. **Finding 1.2 (Address Autocomplete API)**:
   * Selecting a suggestion calls `onChange(fullAddress)`.
   * This updates parent state, propagating back as `value` prop.
   * The `useEffect` depends on `[value]`, so it runs and sends a request for the full selected address.
   * Once resolved, it calls `setShowSuggestions(true)`, causing the dropdown to reappear or flicker.

3. **Finding 1.3 (Object Dependencies in effects)**:
   * Objects in React have different references even if their properties are identical.
   * Because `origin` and `destination` are passed as raw `{ lat, lng }` objects, `useEffect` executes whenever their references change, triggering redundant OSRM route fetches.

4. **Finding 1.4 (react-dom/server in Client Bundle)**:
   * `renderToStaticMarkup` requires the HTML server renderer.
   * Importing it in a client component drags it into the client-side bundle.
   * This increases download times and memory footprint.
   * Replacing it with a static SVG string removes the library import entirely.

5. **Finding 1.5 (Static "use client" Heroes)**:
   * Client components are compiled into client JS bundles.
   * Since these components have no state or interactivity, they can be Server Components.
   * Converting them to RSCs reduces the JS payload sent to the client.

6. **Finding 1.6 (useToast dependencies)**:
   * The hook sets up a listener when the component mounts.
   * `state` changes on every toast addition/removal.
   * Because `state` is in the dependency array, the listener is removed and added on every state update, which is redundant.

7. **Finding 1.7 (Non-Passive scroll listener)**:
   * Browsers delay page scrolling to check if a scroll listener calls `preventDefault()`.
   * Setting `{ passive: true }` informs the browser it won't prevent default, improving scroll smoothness.

8. **Finding 1.8 (Non-Hoisted Animation Variants)**:
   * Instantiating objects inside a component creates a new reference on every render.
   * Hoisting them to the module scope preserves reference equality.

9. **Finding 1.9 (Ignored priceRanges Prop)**:
   * The server fetches price ranges and passes them.
   * The component ignores them and uses hardcoded data.
   * The database query and serialization is wasted, slowing down SSR.

10. **Finding 1.10 (Duplicate files)**:
    * Codebases with duplicate files are harder to maintain and prone to out-of-sync imports.

---

## 3. Caveats
* The dynamic behavior of `AddressAutocomplete` depends on the Photon Komoot API which has a rate limit; redundant calls increase the chance of hitting it.
* Converting static heroes to RSC might require checking if their parent wrapper pages/layouts have `"use client"` at the top level. If the page is a client component, their child components will still run on the client, but removing `"use client"` from the child components is still best practice for reusability.

---

## 4. Conclusion
The audit reveals several critical performance, logic, and bundle-size issues in custom components and hooks. The most severe are the toast spam in `contact-form.tsx`, redundant autocomplete fetches in `address-autocomplete.tsx`, and the inclusion of `react-dom/server` in the client bundle within `leaflet-map.tsx`. Standardizing on primitive dependencies, hoisting animation variants, converting static components to RSC, and removing unused duplicate files will significantly improve performance and code quality.

---

## 5. Verification Method

### 1. Compile and Typecheck
Verify that the project compiles cleanly after making any changes:
```powershell
pnpm typecheck
```

### 2. Lint Check
Verify that no ESLint errors are introduced:
```powershell
pnpm run lint
```

### 3. Build Check
Verify the production build works correctly:
```powershell
pnpm run build
```
