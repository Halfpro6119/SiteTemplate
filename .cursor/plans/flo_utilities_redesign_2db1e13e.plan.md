---
name: Flo Utilities Redesign
overview: "A conversion-first redesign of the Flo Utilities website: structured brief, audience map, redesign strategy, 1–3 signature differentiators, IA, page-by-page plan, design system (red gradient), copy upgrades, and implementation notes aligned to the existing SiteTemplate (React/Vite/Tailwind)."
todos: []
isProject: false
---

# Flo Utilities Website Redesign – Full Strategy & Implementation Plan

---

## 1) CURRENT SITE PARSE (Structured Brief)

**Brand positioning (current)**  
- “Expert water leak detection & repair specialists” and “water infrastructure specialists” for Stoke and 15-mile radius (Derbyshire, Stafford, Stone, Rugeley, Cannock).  
- USP: detection + repair in one visit, often same day; Watersafe/WIAPS accredited; 24hr response; 1000+ repairs.

**Services (current)**  
- Lead pipe replacement, Leak repair, Leak detection, Impact moling, Insurance companies, Landlords.  
- Each has a dedicated page with long, process-heavy copy (assessment → detection → repair → restoration).

**Trust signals (current)**  
- Stats: 15+ mile radius, 100% Watersafe, 24hr response, 1000+ repairs.  
- Badges: Watersafe, WIAPS, NPORS, EUSR.  
- Six on-site testimonials (Sarah T., James H., Carol D., Thomas B., Margaret W., Robert L.) with locations; no third-party review platform linked.  
- “Fully insured,” “same-day repairs,” “fully accredited” repeated in copy.

**CTAs (current)**  
- Primary: “Get a quote” (hero, footer), “Book now” / “Book a Survey” (Severn Trent block).  
- Secondary: “About us,” “Learn more” per service.  
- Single contact path: contact page / quote; phone 0782 784 7003; email Enquiries@floutilities.co.uk.

**Problems / friction points**  
- **Typo:** “Tetimonials” in section heading.  
- **Trust gap:** No Trustpilot/Google/Checkatrade link; competitors (e.g. ADI Leak Detection) show 800+ Trustpilot reviews; Flo’s “1000+ repairs” is outcome, not review count.  
- **Intent mismatch:** Urgent “Severn Trent notice” and “24hr response” are buried below hero; emergency path not obvious.  
- **Copy density:** Service pages are long and feature-heavy; benefit-led summaries and scannable structure are weak.  
- **No pricing signal:** No “from £X” or “typical cost” or “free survey” clarity near CTAs.  
- **No proof of service area:** No postcode checker or clear “we cover you” moment.  
- **Blog:** Present but not tied to conversion (e.g. “Got a notice? Start here”).

**Content gaps**  
- What happens after I submit the form / call? (timeline, next steps).  
- Am I in the 15-mile area? (postcode/town list).  
- What does a typical job cost or what’s included in a “survey”?  
- Severn Trent notice: exact process and how Flo helps avoid “premium charges.”  
- Third-party review proof (Trustpilot/Google) if available.

**Research summary (sources)**  
- **Flo Utilities:** [floutilities.co.uk](https://www.floutilities.co.uk/) – services, testimonials, contact, no public pricing.  
- **Competitors:** ADI Leak Detection (Stoke) – 800+ 5-star Trustpilot, 4.6–4.7 rating, detection focus; North Staffs Utility Services (NSUSL) – 30 years, WIAPS/Watermark, 24/7 emergency, trenchless; LDS Leak Detection – nationwide, insurance-approved, 30+ years.  
- **Trust/regs:** Watersafe/WIAPS – Certificate of Compliance, £2M PLI minimum, redress for non-compliant work ([Water Regs UK](https://www.waterregsuk.co.uk/wiaps/wiaps_faqs/what_happens_if_something_goes_wrong_with_the_installation/)).  
- **Severn Trent:** Leakage guidance and leakage allowance exist; specific “notice deadline” wording not found – treat “time is critical” and “avoid premium charges” as customer pain to address without inventing deadlines.

---

## 2) AUDIENCE + INTENT MAP

**Top 5 user intents**  
1. **Emergency / Severn Trent notice** – “I have a leak notice; I need someone now.”  
2. **Price reassurance** – “How much will leak detection/repair/lead replacement cost?”  
3. **Service eligibility** – “Do they do insurance work / landlord / moling?” and “Do they cover my postcode?”  
4. **Proof** – “Are they legit? Watersafe? Reviews?”  
5. **Understanding** – “What is impact moling / lead replacement? What happens in a survey?”

**Key objections**  
- **Price:** “Will I get a nasty surprise?” → Transparent process, no obligation survey, “quote before we dig.”  
- **Trust:** “Why them and not ADI/NSUSL?” → Accreditations, insurance, same-team detect-and-repair, testimonials + third-party reviews if available.  
- **Timing:** “Will they come in time for my notice?” → 24hr response, “assessment within 1–3 working days” (from FAQ), same-day repair possibility.  
- **Disruption:** “Will they dig up my drive/garden?” → Trenchless/moling, “minimal disruption,” before/after if possible.  
- **Legitimacy:** “Is this a proper company?” → Watersafe/WIAPS/NPORS/EUSR, insurance, local address/phone.

**Above-the-fold non-negotiables**  
- Clear hero: who they are, what they do (leak detection + repair, lead replacement, moling), and geography (Stoke, 15 miles).  
- One primary CTA: “Get a quote” or “Book a survey” (and/or “Call now” for emergency).  
- Trust strip: Watersafe accredited, 24hr response, 1000+ repairs (or review count if better), “Fully insured.”  
- Optional: small “Severn Trent notice? Get help fast” link or badge so urgent intent is visible without cluttering.

---

## 3) REDESIGN STRATEGY (High-level)

**What the new site must feel like**  
- **Authoritative** – expert, accredited, “the” local specialist.  
- **Reassuring** – no surprises, clear process, proof.  
- **Urgent when it matters** – Severn Trent and emergency paths obvious.  
- **Clean and premium** – spacious, modern, not cluttered.  
- **Bespoke** – red gradient identity, water/pipe subtle cues, not generic trade template.

**What it must do better than competitors**  
- **One visit = detect + repair** – own this message in hero and service cards (vs. detection-only players).  
- **Severn Trent notice** – dedicated surface (hero CTA or banner) and one clear “what we do for you” block.  
- **Trust at a glance** – accreditations + insurance + review count (or “1000+ repairs”) near every CTA.  
- **Clarity** – short benefit-led service descriptions; “what happens next” visible on Contact/quote.  
- **Local clarity** – 15-mile radius + list of towns; optional postcode checker as differentiator.

**Primary conversion paths**  
- **Path A (primary):** Hero / nav → “Get a quote” or “Book a survey” → Contact (form + phone).  
- **Path B (urgency):** “Severn Trent notice?” / “24hr response” → Contact or direct call.  
- **Path C (research):** Services → service page → “Get a quote for [service]” → Contact.  
- **Path D (trust):** Reviews / About / Accreditations → Contact or call.

---

## 4) SIGNATURE DIFFERENTIATOR FEATURES (1–3 only)

**Feature 1: “In Your Area” – Service area checker**  
- **What it does:** User enters postcode (or selects town). Site shows “Yes, we cover you” with optional “Typical response: within 24–48 hours” or “Book a survey.”  
- **Why it’s valuable:** Reduces “do you cover me?” friction and objections; captures intent (postcode) for follow-up.  
- **Where:** Home (below hero or in trust strip), Contact page, Footer “Areas we cover.”  
- **UI:** Compact input + “Check coverage” button; result: green tick + one-line message + CTA. No map required for v1.

**Feature 2: “What Happens Next” – Job timeline / process strip**  
- **What it does:** After “Get a quote” or “Book a survey,” a fixed 3–4 step timeline: e.g. “1. You call or submit → 2. We arrange a visit → 3. Assessment & quote → 4. Repair (often same day).”  
- **Why it’s valuable:** Lowers anxiety and abandonment; reinforces “one visit” and “no obligation quote.”  
- **Where:** Contact page (above or beside form), footer CTA strip, optional modal after form submit.  
- **UI:** Horizontal step strip (numbered circles or icons + short labels); desktop horizontal, mobile stacked or carousel.

**Feature 3: “Severn Trent Notice” – Urgent CTA block**  
- **What it does:** Dedicated block (not full page unless you add a landing page later): “Got a Severn Trent leak notice? We respond within 24hrs and can often detect and repair in one visit—helping you avoid premium charges.”  
- **Why it’s valuable:** Serves highest-intent, time-sensitive visitors; differentiates from generic “get a quote.”  
- **Where:** Home (below hero or above testimonials), sticky bar on scroll (optional), Contact page.  
- **UI:** Contrasting background (e.g. darker panel or red gradient strip), icon (e.g. document/alert), one headline, one subline, single CTA “Get help now” + phone.

**Not chosen (kept for later):** Instant quote range (needs pricing logic), before/after slider (needs assets), full case studies page (can add after launch).

---

## 5) INFORMATION ARCHITECTURE (Pages)

**Core pages**  
- **Home** – Hero, trust strip, services grid (6), why choose (accreditations, one visit, etc.), Severn Trent block, testimonials, area checker, CTA.  
- **Services (hub)** – List of 6 services with short benefit-led blurbs and “Learn more” + “Get a quote.”  
- **Service (×6)** – Lead pipe replacement, Leak repair, Leak detection, Impact moling, Insurance companies, Landlords. Each: short intro, benefits, process (condensed), CTA + trust.  
- **About** – Story, values, team/credentials, accreditations, why Stoke/local.  
- **Areas / Locations** – 15-mile radius, list of towns (Derbyshire, Stafford, Stone, Rugeley, Cannock, etc.), optional “In Your Area” checker.  
- **Reviews** – Testimonials (existing six) + placeholders for Trustpilot/Google widgets or links if available; filters by service if desired.  
- **Contact** – Form, phone, email, “What happens next” strip, trust chips, optional area checker.

**Optional / secondary**  
- **Emergency or Severn Trent landing** – Single page: “Got a leak notice?” + process + CTA + phone. (Can be a section on Home + Contact first.)  
- **FAQ** – Existing questions (e.g. response time, areas, lead replacement duration, leak signs, moling, accreditations, cost); add “What happens after I contact?”  
- **Accreditations** – Optional subpage or About section: Watersafe, WIAPS, NPORS, EUSR, insurance, Certificates of Compliance.  
- **Blog** – Keep; add one “Severn Trent notice: what to do” and link from Severn Trent block.  
- **Case studies** – Later; not required for launch.

**Rationale:** Home drives conversion and urgency; Services hub + 6 pages satisfy eligibility and understanding; About + Areas + Reviews build trust; Contact is the conversion page with “What happens next” and trust; FAQ and optional emergency/Accreditations reduce friction.

---

## 6) PAGE-BY-PAGE REDESIGN PLAN (Wireframe-level)

**Home**  
- **Sections (order):** Hero (H1 + subhead + primary CTA + trust chips) → Trust/stats strip (15 mile, Watersafe, 24hr, 1000+ repairs) → Services grid (6 cards) → Why choose (accredited, one visit, same day) → Severn Trent notice block → Testimonials (carousel or grid) → “In Your Area” checker → Final CTA (quote + call).  
- **Copy:** H1 option “Leak detection and repair in one visit—Stoke and 15 miles.” Subhead: “Watersafe-accredited specialists. Same-day repair often. 24hr response.”  
- **Components:** Hero (existing cinematic or simpler gradient), TrustChipRow / StatCard row, ServiceCard grid (6), accordion or icon list “Why choose,” Severn Trent CTA block (new), TestimonialCard carousel, Service area checker (new), CTASection.  
- **Primary CTA:** “Book a survey” or “Get a quote.” Secondary: “See services.”  
- **Trust near CTA:** Watersafe, 24hr, 1000+ repairs, Fully insured.

**Services (hub)**  
- **Sections:** PageHero → Service cards (6) with short benefit line + “Learn more” + “Get a quote” → Why choose (short) → CTA.  
- **Copy:** H1 “Your water infrastructure specialists.” Subhead: “From leak detection to lead replacement and moling—one team, one visit when possible.”  
- **Components:** PageHero, ServiceCard (or SignatureServiceCard) × 6, TrustFooterStrip, CTASection.  
- **Primary CTA:** “Get a quote.” Secondary: “Call 0782 784 7003.”

**Service (×6)**  
- **Sections:** PageHero + breadcrumb → Short intro (1–2 sentences benefit-led) → “What’s included” or key benefits (bullets) → Process (3–4 steps, condensed) → Related services (optional) → CTA panel + “What happens next” + trust.  
- **Copy:** Benefit-led headlines (e.g. Leak repair: “Swift repair, same visit—no second contractor.”).  
- **Components:** PageHero, Breadcrumb, body content (headings + list + short paragraphs), “What happens next” strip, ContactCTAPanel, trust chips.  
- **Primary CTA:** “Get a quote for [service].” Secondary: “Call now.”

**About**  
- **Sections:** PageHero → Story (short) → Values or “Why choose” (accreditations, one visit, insurance) → Accreditations (logos + one line each) → CTA.  
- **Components:** PageHero, prose, icon list or cards, logo strip, CTASection.

**Areas / Locations**  
- **Sections:** PageHero → “We cover” (15-mile radius) → List of towns (chips or list) → “In Your Area” checker → CTA.  
- **Components:** PageHero, ServiceAreaChip list, area checker, CTASection.

**Reviews**  
- **Sections:** PageHero → Rating summary (e.g. 5 stars, “1000+ repairs” or review count) → Testimonial grid/carousel → Link to Trustpilot/Google if available → CTA.  
- **Components:** PageHero, ReviewSnapshotPanel, PremiumReviewCard grid, external review link, CTASection.

**Contact**  
- **Sections:** PageHero → “What happens next” (3–4 steps) → Form + phone + email → Trust chips (Watersafe, 24hr, insured) → Optional area checker.  
- **Components:** PageHero, timeline strip (new), form, ContactCTAPanel, TrustChipRow.

**Severn Trent block (component, used on Home + optionally Contact)**  
- Headline: “Got a Severn Trent leak notice?” Subhead: “We respond within 24hrs. Often detect and repair in one visit—helping you avoid premium charges.” CTA: “Get help now” (contact + tel).  
- **Trust:** “Watersafe accredited · 24hr response · Same-day repair often.”

---

## 7) DESIGN SYSTEM (Modern + Clean, Red Gradient)

**Colour palette**  
- **Base (dark theme to match template):**  
  - Background: `--color-bg-base` #0a0a0a, `--color-bg-surface` #141414, `--color-bg-elevated` #1a1a1a.  
- **Accent (red gradient):**  
  - Primary: `--color-accent` #dc2626 (red-600), `--color-accent-dark` #b91c1c (red-700), `--color-accent-light` #ef4444 (red-500).  
  - Glow: `--color-accent-glow` rgba(220, 38, 38, 0.35).  
  - Gradient: `linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)` for buttons and key CTAs.  
- **Neutrals:** Keep existing `--color-text-primary` #e8e8e8, `--color-text-secondary` #a3a3a3, `--color-text-tertiary` #737373, `--color-text-inverse` #0a0a0a; borders as is.

**Typography**  
- **Scale:** H1 (hero) 3rem–3.5rem / 1.1; H2 2.25rem / 1.2; H3 1.5rem / 1.3; body 1rem / 1.6.  
- **Fonts:** Keep Plus Jakarta Sans for headings, Inter for body (or one font for both for simplicity).  
- **Weights:** Headlines 700; subheads 500–600; body 400.

**Spacing**  
- Section padding: `--spacing-section` 10rem (mobile 6rem). Content max-width 1280px (existing `.content-width`).  
- Consistent vertical rhythm between sections (e.g. 6rem–10rem).

**Buttons**  
- **Primary:** Red gradient, white text, rounded (e.g. 0.5rem), shadow + subtle glow on hover.  
- **Secondary:** Outline (border accent colour), text accent; fill on hover.  
- **Text link:** Accent colour, underline or arrow on hover.

**Cards**  
- Background `--color-bg-surface` to `--color-bg-elevated`, border `--color-border-subtle`, radius 0.5rem–0.75rem, shadow `--shadow-luxury-sm` / `--shadow-luxury-md`.  
- Hover: slight lift, border a bit stronger, optional glow.

**Icons**  
- Lucide React (already in template); 24px default, 20px in chips. Style: stroke, consistent weight.  
- Imagery: real job photos preferred; otherwise restrained stock (pipes, technicians, property); avoid clip-art.

**Motion**  
- Subtle: hero reveal, scroll-in for sections (existing hooks), button hover.  
- Respect `prefers-reduced-motion`: disable or shorten animations (template already has `motion-reduce`).

---

## 8) CONTENT UPGRADE (Copy improvements)

**Hero (3 options)**  
- **A:** “Leak detection and repair in one visit.” Subhead: “Watersafe-accredited specialists across Stoke and 15 miles. Same-day repair often. 24hr response.”  
- **B:** “One team. One visit. Leak found and fixed.” Subhead: “Expert leak detection and repair across Stoke-on-Trent and the 15-mile radius. Accredited, insured, same-day when you need it.”  
- **C:** “Your water pipe specialists in Stoke and beyond.” Subhead: “From leak detection to lead replacement and trenchless moling—we often detect and repair in the same day. 24hr response. Watersafe accredited.”

**Service descriptions (benefit-led, short)**  
- **Lead pipe replacement:** “Safe replacement with modern MDPE. Better water quality, compliance, and no garden dug up with moling where possible.”  
- **Leak repair:** “We find and fix leaks—often in one visit. No second contractor, no delay. Full insurance and warranty.”  
- **Leak detection:** “Pinpoint hidden leaks with specialist kit. Minimal disruption, then we repair—same team, same day when possible.”  
- **Impact moling:** “New pipes under your garden or drive without trenches. Less mess, faster finish, your landscaping preserved.”  
- **Insurance:** “We work with insurers and handle the paperwork. Swift, documented repairs so your claim runs smoothly.”  
- **Landlords:** “Leak response and prevention for rental properties. One point of contact, less hassle, tenant-friendly.”

**Trust microcopy chips (5–8)**  
- Watersafe accredited · 24hr response · 1000+ repairs · Fully insured · Same-day repair often · WIAPS certified · 15-mile radius · No obligation survey

**CTA microcopy**  
- **Call:** “Call 0782 784 7003” / “Talk to a specialist”  
- **Quote:** “Get a quote” / “Book a survey” / “Free, no-obligation survey”  
- **Urgency:** “Get help with a Severn Trent notice” / “Respond to my notice”

---

## 9) IMPLEMENTATION NOTES (Practical)

**Stack (existing):** [package.json](package.json) – Vite, React 18, TypeScript, Tailwind, react-router-dom, lucide-react, Supabase (optional).  
**Key files:** [src/config.ts](src/config.ts) (business copy, services, testimonials, CTAs), [src/index.css](src/index.css) (design tokens, red gradient overrides), [src/App.tsx](src/App.tsx) (routes), [src/pages/Home.tsx](src/pages/Home.tsx), [src/pages/Contact.tsx](src/pages/Contact.tsx), [src/pages/Services.tsx](src/pages/Services.tsx).

**Components to build first**  
1. **Severn Trent CTA block** – Reusable section with headline, subhead, CTA, trust line.  
2. **“What happens next” timeline** – 3–4 steps, horizontal on desktop, stacked on mobile.  
3. **Service area checker** – Input + button, simple “We cover you” / “Contact us to confirm” message (no backend required for v1; optional serverless/edge check later).  
4. **Red gradient theme** – Override `--color-accent*` and primary button gradients in `index.css`; ensure contrast (WCAG AA) for text on red (white or very light).

**Performance**  
- Lazy-load below-fold sections or heavy components if needed.  
- Optimise images (WebP, responsive); template already uses external gallery URLs.  
- Keep hero minimal (no large video); gradient + type is enough.

**Mobile-first**  
- Touch targets ≥44px; CTA and “Call” prominent in header/footer.  
- Trust strip and stats stack on small screens; service grid 1–2 columns.  
- Form and area checker single column; timeline stacks.

**SEO**  
- Title/description per page: “Leak Detection & Repair Stoke | Flo Utilities” etc.  
- Local: “Stoke-on-Trent,” “15-mile radius,” town names in copy and Areas page.  
- Service pages: H1 = service + location; one FAQ block or FAQ page with schema if possible.  
- Blog: target “Severn Trent leak notice,” “water leak detection Stoke,” “lead pipe replacement Stoke.”

**Accessibility**  
- Red accent: ensure 4.5:1 (or 3:1 for large text) for white on red; darken gradient if needed.  
- Focus states: visible outline on buttons and form fields (accent or neutral).  
- Headings order (H1 → H2 → H3); form labels and errors associated.  
- `prefers-reduced-motion` respected (existing in template).

**Assumptions to verify with client**  
- Actual review count and presence on Trustpilot/Google/Checkatrade (to show or link).  
- Whether “24hr” means 24hr to first contact or 24hr to site visit.  
- Exact Severn Trent notice wording they use in customer conversations (to mirror on site).  
- Preference: single Contact page vs. separate “Get a quote” and “Emergency” forms.

---

## Summary

- **Parse:** Current site is content-rich but trust is on-site only, urgency and “what happens next” are underplayed, and one-visit USP is not dominant.  
- **Audience:** Emergency/notice, price, eligibility, proof, and “what is this service” drive intent; objections are price, trust, timing, disruption.  
- **Strategy:** Own “detect + repair in one visit” and “Severn Trent notice”; red gradient, clean layout, trust at every CTA.  
- **Differentiators:** (1) “In Your Area” postcode/town checker, (2) “What happens next” timeline, (3) Severn Trent notice CTA block.  
- **IA:** Home, Services hub + 6 service pages, About, Areas, Reviews, Contact; optional Emergency landing, FAQ, Accreditations.  
- **Design system:** Dark base, red gradient accent (e.g. #dc2626 → #b91c1c → #991b1b), existing typography/spacing/cards, subtle motion.  
- **Copy:** Three hero options, benefit-led service lines, trust chips, clear CTA and urgency lines.  
- **Implementation:** Implement in existing SiteTemplate via [src/config.ts](src/config.ts) and [src/index.css](src/index.css); add Severn Trent block, timeline, and area checker components; then populate Flo copy and tune for local SEO and accessibility.
