---
name: Production readiness testing
overview: "A full testing and production-readiness plan for the Flo Utilities site: add Vitest and React Testing Library for unit and smoke tests, document and automate technical checks (typecheck, lint, build), implement a structured manual checklist for visual and functional verification, and add a 404 route plus any critical fixes found during testing."
todos: []
isProject: false
---

# Production readiness and full-site testing plan

## Current state

- **Stack:** Vite, React 18, TypeScript, Tailwind, react-router-dom. No test runner or E2E framework in [package.json](package.json).
- **Routes:** 9 routes in [src/App.tsx](src/App.tsx) (Home, Services, ServiceDetail `:slug`, About, Contact, Reviews, Gallery, Locations). Six service slugs from [src/config.ts](src/config.ts): `lead-pipe-replacement`, `leak-repair`, `leak-detection`, `impact-moling`, `insurance-companies`, `landlords`.
- **Critical UI:** Contact form (optional Supabase), ServiceAreaChecker (client-side postcode/town logic), header/footer CTAs (tel, /contact), Severn Trent block, What Happens Next timeline.
- **Existing scripts:** `npm run typecheck`, `npm run lint`, `npm run build`, `npm run preview`.

---

## 1. Technical verification (automated)

**1.1 Existing commands (run and fix any failures)**  

- `npm run typecheck` – TypeScript strict, no type errors.  
- `npm run lint` – ESLint across `src/`.  
- `npm run build` – Production build; confirm no build-time errors or unhandled rejections.  
- `npm run preview` – Smoke-check that the built app loads at the preview URL.

**1.2 Add a single “ci” script**  

- In [package.json](package.json) add: `"ci": "npm run typecheck && npm run lint && npm run build"` so one command runs all technical checks.

---

## 2. Unit and component tests (Vitest + React Testing Library)

**2.1 Install and configure**  

- Install: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`.  
- Add `test` script in [package.json](package.json), e.g. `"test": "vitest run"`, `"test:watch": "vitest"`.  
- Add [vitest.config.ts](vitest.config.ts) (or vitest block in [vite.config.ts](vite.config.ts)) with environment `jsdom`, globals if desired, include `src/**/*.{test,spec}.{ts,tsx}`.  
- In a small setup file (e.g. `src/test/setup.ts`), import `@testing-library/jest-dom` so matchers like `toBeInTheDocument` are available; reference it in the Vitest config.

**2.2 Test ServiceAreaChecker logic**  

- The coverage check in [src/components/ServiceAreaChecker.tsx](src/components/ServiceAreaChecker.tsx) uses a pure `checkCovered`-style function (postcode prefix and town list).  
- Export a testable function (e.g. `checkCovered` in the same file or in a tiny `serviceAreaChecker.ts` util) and add unit tests:  
  - Covered: e.g. `"ST1 2AB"`, `"Stoke"`, `"Stafford"`, `"stoke-on-trent"`.  
  - Not covered: e.g. `"SW1A"`, `"London"`, empty string, single character.
- Ensures production behaviour of the “In your area?” feature.

**2.3 Smoke tests for routes**  

- One test file (e.g. `src/App.test.tsx` or `src/pages/App.smoke.test.tsx`) that renders `App` wrapped in `Router` and:  
  - Renders without throwing.  
  - For each route path (`/`, `/services`, `/about`, `/contact`, `/reviews`, `/gallery`, `/locations`, and each of the six `/services/:slug`), navigate to the path and assert that a key element is present (e.g. a main heading or data from `businessConfig` such as “Flo Utilities” or “Get in touch”).
- Use `createMemoryHistory` / `MemoryRouter` with `Routes` and `initialEntries` (or similar) so tests do not depend on the real URL.  
- Covers that every page in the IA loads and renders.

**2.4 Optional: Contact form and Area checker component tests**  

- Contact: render Contact page, fill required fields, submit; assert success message appears (mock Supabase or rely on “no Supabase” path that resolves after 1s).  
- ServiceAreaChecker: render, type “ST1”, click “Check coverage”, assert “covered” message and CTA; type “London”, assert “Contact us to confirm” (or equivalent).  
- These can live in `src/pages/Contact.test.tsx` and `src/components/ServiceAreaChecker.test.tsx`.

---

## 3. Visual and responsive checklist (manual or scripted)

**3.1 Viewports**  

- Test at minimum: 320px (mobile), 768px (tablet), 1280px (desktop).  
- Check: no horizontal scroll, primary CTA and phone number visible above the fold on mobile, trust strip and stats wrap/stack correctly.

**3.2 Pages to eyeball**  

- **Home:** Hero, trust strip, 6 service cards, Why choose, Severn Trent block, testimonials, area checker, final CTA.  
- **Services:** Grid of 6 services; each card links to correct `/services/:slug`.  
- **Service detail (×6):** Each slug loads; breadcrumb, content, “What happens next,” CTA panel.  
- **About, Locations, Reviews, Gallery, Contact:** Main content and CTAs present; Contact has timeline + form + area checker.

**3.3 Visual consistency**  

- Red gradient accent used for primary buttons and key CTAs (no leftover cyan).  
- Typography: one H1 per page, sensible H2/H3 order.  
- Spacing and card style consistent with design system (e.g. [.cursor/plans/flo_utilities_redesign_ef334ce7.plan.md](.cursor/plans/flo_utilities_redesign_ef334ce7.plan.md) Section 7).

**3.4 Optional automation**  

- If desired later: add Playwright (or Cypress), run `npm run build && npx playwright install && npx playwright test` for a few critical flows (e.g. Home → Contact, Home → Services → one service → Contact). Not required for “production ready” if manual checklist is done.

---

## 4. Functional testing checklist

**4.1 Navigation and links**  

- Header: all nav links go to correct routes; “Call” and “Book a survey” (or equivalent) point to `tel:` and `/contact` with correct phone number (no spaces in `tel:`).  
- Footer: service links go to `/services/:slug`; “Areas” to `/locations`; closing CTA primary → `/contact`, secondary → `tel:07827847003` (or from config).  
- Breadcrumbs on Contact and Service detail: correct sequence and links.  
- Internal links: no broken in-app routes (e.g. from Home “View all services” → `/services`; “Book a survey” → `/contact`).

**4.2 Contact form**  

- Required fields: full name, phone, email, message. Submit empty → browser validation or visible error.  
- Submit with valid data: either Supabase insert or mock path; success state shows and form clears.  
- Error state: if Supabase fails (or mock rejects), error message and phone number shown.

**4.3 Service area checker**  

- Empty + “Check coverage”: no crash; optional to show “Enter postcode or town” hint.  
- “ST1”, “Stoke”, “Stafford” → covered message + “Book a survey” (or equivalent).  
- “London”, “SW1A” → not-covered message + “Contact us”.  
- Appears on Home, Contact, Locations as per redesign.

**4.4 Reviews page**  

- Sort filter (Most recent, Highest rated, Longest): changing option updates list order without error.

**4.5 Invalid route (404)**  

- Visit `/services/invalid-slug` or `/unknown`. Currently [ServiceDetail](src/pages/ServiceDetail.tsx) shows “Service not found” for unknown slug; ensure there is no uncaught error and a way back (e.g. “Back to services” link).  
- Optional: add a catch-all route that renders a simple 404 page with link to Home and Services.

---

## 5. Accessibility

**5.1 Contrast and focus**  

- Red gradient buttons: white text on red meets WCAG AA (4.5:1 for normal text; 3:1 for large). If not, darken gradient in [src/index.css](src/index.css).  
- All interactive elements (buttons, links, form fields): visible focus outline (e.g. `focus:ring-2` with accent or neutral); no `outline: none` without a replacement.

**5.2 Structure**  

- One H1 per page; heading levels in order (no H1 → H3 skip).  
- Form inputs have associated `<label>` (or `aria-label`); Contact form already uses `htmlFor`/`id`.  
- Images: gallery and any decorative images have `alt` (descriptive or empty as appropriate).

**5.3 Motion**  

- Template already uses `prefers-reduced-motion` in [src/index.css](src/index.css); confirm no critical info is lost when motion is reduced.

---

## 6. Production readiness checklist

**6.1 Meta and SEO**  

- [index.html](index.html): title and meta description already set for Flo Utilities.  
- No need for per-route meta in a small SPA unless you add a head manager later.

**6.2 External links**  

- Any `target="_blank"` (e.g. WhatsApp, social) has `rel="noopener noreferrer"`.

**6.3 Build and runtime**  

- Build completes with no warnings that indicate broken imports or missing env.  
- Open preview and click through main flows; no console errors (except expected Supabase “not configured” if applicable).

**6.4 Config and content**  

- [src/config.ts](src/config.ts): phone, email, and contact details correct for production.  
- No placeholder content (e.g. “[City]”, “555”) left in copy.

---

## 7. Implementation order

1. **Technical baseline** – Run typecheck, lint, build; fix any failures; add `ci` script.
2. **Vitest setup** – Install deps, add config and setup file, add `test` and `test:watch` scripts.
3. **Unit tests** – Service area checker logic (exported function + tests).
4. **Route smoke tests** – One test file that visits all static and dynamic routes and asserts content.
5. **Contact and Area checker (optional)** – Component tests for form and checker UI.
6. **404 behaviour** – Confirm ServiceDetail handles unknown slug; optionally add catch-all route and 404 page.
7. **Manual checklist** – Execute visual, responsive, functional, and a11y checks; fix issues.
8. **Production checklist** – External links, config, console; sign-off.

---

## 8. Deliverables

- **Automated:** `npm run ci` (typecheck + lint + build), `npm run test` (Vitest) with ServiceAreaChecker logic tests and route smoke tests; optional Contact and ServiceAreaChecker component tests.  
- **Documentation:** A short `TESTING.md` (or section in README) listing: how to run typecheck, lint, build, test; viewports and pages for manual check; functional checklist (links, form, area checker, 404); a11y and production checks.  
- **Code:** Vitest config, test setup, 1–3 test files; optional 404 route/page; any fixes found (contrast, focus, links, alt text).

This plan keeps the site production ready without over-engineering: automated checks for types, lint, build, and critical logic/routes; clear manual steps for visual and functional verification; and a small set of deliverables you can run and document for handover or CI.