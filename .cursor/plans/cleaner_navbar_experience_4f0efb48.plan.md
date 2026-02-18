---
name: Cleaner Navbar Experience
overview: Refactor the header so the logo no longer overlaps links, reduce visual clutter (especially the boxed phone and dense links), and establish clear spacing and hierarchy for a more professional look.
todos: []
isProject: false
---

# Cleaner Navbar Experience

## Current issues (from implementation and screenshot)

- **Logo**: Uses `[/og-image.JPG](src/components/Header.tsx)` (OG/social image), which has a white square background and clashes with the dark navbar; the logo area can sit too close to the first nav link (“Home”), causing an overlapping feel.
- **Density**: Eight nav links in one row with `gap-5` plus a boxed phone and CTA makes the bar feel crowded and visually noisy.
- **Phone treatment**: The phone number is in a bordered, rounded box (`border: 1px solid var(--color-border-subtle)`), which reads as a separate widget rather than part of a cohesive nav.
- **Hierarchy**: Logo, links, phone box, and CTA all compete; no clear “primary vs secondary” grouping.

## Proposed changes

### 1. Logo and brand block

- **Asset**: Prefer a dedicated header logo that works on dark background (no white square). Options:
  - Use a logo-only crop/version of the current brand art if available, or
  - Use `[public/favicon.svg](public/favicon.svg)` as a small mark next to text “TRC” (or business name from `[businessConfig](src/config.ts)`) so the header doesn’t rely on the full OG image.
- **Spacing**: Give the logo block explicit right margin (e.g. `mr-6` or `mr-8`) so there is always clear space between the logo and the first nav link—eliminating overlap and defining a clear “brand | nav | actions” layout.
- **Sizing**: Keep logo height constrained (e.g. current `h-10 sm:h-11`) so it doesn’t dominate the bar.

### 2. Simplify phone and unify right-side actions

- **Phone**: Remove the bordered box. Style the phone as a simple text link with icon (e.g. same colour as nav links, no border, optional hover underline using existing `.nav-link-modern` or a similar subtle treatment). This makes it feel like part of the nav strip rather than a separate panel.
- **Source of truth**: Use `businessConfig.phone` and `businessConfig.phoneRaw` for display and `href="tel:..."` so the header stays in sync with the rest of the site.
- **Grouping**: Keep “Phone + CTA” in the same right-side block but with consistent spacing (e.g. one gap size) so they read as “utility link + primary action” instead of “box + button”.

### 3. Nav link count and spacing

- **Option A (minimal change)**: Keep all eight links but increase spacing between logo and nav, and between nav items (e.g. `gap-6` or `gap-7`), and ensure the nav has enough left/right margin so it doesn’t crowd the logo or the CTAs.
- **Option B (reduce clutter)**: Reduce visible primary links (e.g. 5–6) by grouping secondary items. For example:
  - “Services” could remain; “Process” and “Areas” could move under a “How we work” or “Company” dropdown, or
  - “Projects” and “Gallery” are the same route—use one label (e.g. “Projects” or “Gallery”) and one link.
- Recommendation: at least do Option A; consider Option B if you want a noticeably lighter bar.

### 4. Layout and flex structure

- **Structure**: Keep the three regions—logo (shrink-0), nav (flex-1, centered or left-aligned with max-width), and right CTAs (shrink-0)—but enforce minimum spacing:
  - Between logo and nav: margin on the logo container (as above).
  - Between nav and right block: ensure the nav doesn’t grow into the CTA area (e.g. `min-w-0` on nav, and/or `justify-between` with a max-width on the nav so it doesn’t stretch too far on ultra-wide screens).
- **Container**: Keep using `.content-width`; optionally add slightly larger horizontal padding for the header only on large screens so the bar doesn’t touch the edges on wide viewports.

### 5. Visual consistency

- **Active state**: Keep the current active link treatment (accent colour) so it’s clear which page is selected.
- **CTA**: Keep “Request a Quote” as the single strong button; ensure there’s enough space between the phone link and this button so the button remains the clear primary action.
- **Mobile**: Preserve the existing mobile menu (hamburger + full-width drawer). Apply the same phone simplification (no bordered box) and `businessConfig` usage in the mobile menu.

### 6. Files to touch


| Area                      | File                                                     | Changes                                                                                               |
| ------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Header layout and content | `[src/components/Header.tsx](src/components/Header.tsx)` | Logo spacing/source; nav spacing; phone as simple link using config; optional nav link trim/dropdown. |
| Styles                    | `[src/index.css](src/index.css)`                         | Only if needed (e.g. a dedicated `.header-phone-link` or tweaks to `.nav-link-modern` for the phone). |
| Assets                    | `public/`                                                | Add or switch to a header logo asset if you move away from `og-image.JPG`.                            |


## Optional: dropdown for secondary links

If you adopt “fewer primary links,” implement a small dropdown (e.g. “More” or “Company”) for Process + Areas (and optionally others). Use a click or hover trigger, list the items, and keep focus and keyboard behaviour accessible. This is optional and can be a follow-up after the spacing and phone simplifications are in place.

## Summary

- Fix logo overlap and white-box look (dedicated logo or text+icon, plus margin).
- Make the phone a simple link and use `businessConfig` for the number.
- Increase spacing and, if desired, reduce primary link count for a cleaner, more professional navbar.

