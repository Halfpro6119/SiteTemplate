# Testing and production readiness

## Automated checks

Run all technical checks in one go:

```bash
npm run ci
```

This runs, in order: `typecheck`, `lint`, and `build`.

### Individual commands

- **TypeScript**  
  `npm run typecheck` — strict type-check across the project; fix any type errors before release.

- **Linting**  
  `npm run lint` — ESLint on `src/`. Resolve any reported issues.

- **Build**  
  `npm run build` — production build. Ensure it completes with no errors or unhandled rejections.

- **Preview**  
  `npm run preview` — serve the built app locally. Manually confirm the site loads and main flows work.

- **Unit and component tests**  
  - `npm run test` — run Vitest once (unit tests + route smoke tests + optional Contact/ServiceAreaChecker tests).  
  - `npm run test:watch` — run Vitest in watch mode during development.

Tests include:

- **Service area logic** (`src/lib/serviceAreaChecker.test.ts`) — covered vs not-covered postcodes/towns.
- **Route smoke tests** (`src/App.test.tsx`) — every route (including invalid service slug and catch-all 404) renders and shows expected content.
- **Contact form** (`src/pages/Contact.test.tsx`) — submit with valid data; success message appears (Supabase mocked).
- **ServiceAreaChecker** (`src/components/ServiceAreaChecker.test.tsx`) — ST1 → covered + “Book a survey”; London → “Contact us to confirm”.

---

## Manual checklists

### Viewports

Test at least:

- **320px** (mobile)
- **768px** (tablet)
- **1280px** (desktop)

Check: no horizontal scroll; primary CTA and phone number visible above the fold on mobile; trust strip and stats wrap/stack correctly.

### Pages to verify

- **Home:** Hero, trust strip, 6 service cards, Why choose, Severn Trent block, testimonials, area checker, final CTA.
- **Services:** Grid of 6 services; each card links to the correct `/services/:slug`.
- **Service detail (×6):** Each slug loads; breadcrumb, content, “What happens next,” CTA panel.
- **About, Locations, Reviews, Gallery, Contact:** Main content and CTAs present; Contact has timeline, form, and area checker.
- **404:** Unknown URLs (e.g. `/unknown`) show the “Page not found” page with links to Home and Services. Invalid service slugs (e.g. `/services/invalid-slug`) show “Service not found” and “Back to services”.

### Functional checklist

- **Navigation and links**  
  Header: nav links go to correct routes; “Call” and “Book a survey” use correct `tel:` and `/contact`. Footer: service links → `/services/:slug`, “Areas” → `/locations`; primary CTA → `/contact`, secondary → `tel:` from config. Breadcrumbs on Contact and Service detail: correct order and links. No broken in-app routes.

- **Contact form**  
  Required: full name, phone, email, message. Empty submit → browser validation or visible error. Valid submit → success state and form clears; if Supabase fails, error message and phone number shown.

- **Service area checker**  
  Empty + “Check coverage”: no crash. “ST1”, “Stoke”, “Stafford” → covered message + “Book a survey”. “London”, “SW1A” → not-covered message + “Contact us”. Present on Home, Contact, Locations.

- **Reviews**  
  Sort filter (Most recent, Highest rated, Longest) updates list order without error.

### Accessibility

- **Contrast and focus**  
  Red gradient buttons: white text on red meets WCAG AA. All interactive elements (buttons, links, form fields) have a visible focus outline (e.g. `focus:ring-2` or equivalent); no `outline: none` without a replacement.

- **Structure**  
  One H1 per page; heading levels in order. Form inputs have associated `<label>` (or `aria-label`). Images have appropriate `alt` (descriptive or empty).

- **Motion**  
  Site respects `prefers-reduced-motion`; no critical information lost when motion is reduced.

### Production checklist

- **Meta and SEO**  
  `index.html`: title and meta description set for the site.

- **External links**  
  Any `target="_blank"` (e.g. WhatsApp, social) has `rel="noopener noreferrer"`.

- **Build and runtime**  
  Build completes with no concerning warnings. In preview, click through main flows; no console errors (except expected “not configured” if Supabase is unused).

- **Config and content**  
  `src/config.ts`: phone, email, and contact details correct for production. No placeholder content (e.g. “[City]”, “555”) left in copy.
