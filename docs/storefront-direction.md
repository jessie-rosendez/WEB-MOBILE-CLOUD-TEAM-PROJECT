---
name: Storefront Direction
description: Current confirmed storefront goals, mismatches in the prototype, and the open questions that still need answers
type: project
---

## Confirmed Direction

As of April 8, 2026, the public-facing site direction is:

- Build a **pure Phantm e-commerce storefront** inspired by the Razer site structure and visual language.
- Keep the public site focused on **shopping only**: navigation, category pages, product listings, product detail views, cart behavior, and a checkout-style information page.
- Keep the site **separate from project-management content**. SCRUM, cloud forecast, RAG notes, and other class-process content should live in `docs/` and other deliverable artifacts, not in the storefront UI.
- Move toward a **multi-page storefront** rather than a single page that mixes every deliverable together.
- Show **all current catalog items** in the storefront flow, including the custom `Phantm Spectre X` chair.
- Use **Phantm branding** throughout the experience, even when the catalog structure is benchmarked against Razer.
- Plan for **AI-generated product visuals** that resemble the benchmark products while replacing visible branding with Phantm.
- Include a **chair-focused learn-more experience** and a **placeholder brand/chair video section**.
- Keep the cart **front-end only** for now, but it should show product prices, quantities, subtotal behavior, and lead into a final information-entry step.
- The final checkout/info page can be a **dead end after entering information**. No live payment or backend processing is required right now.

## Build Status (April 2026)

The storefront rebuild is **complete**. All five pages are live:

- `index.html` — Homepage: announcement bar, sticky nav, 4 scrolling product heroes (Spectre X, Blade 16, Viper V4 Pro, BlackShark V3 Pro), lifestyle panel, footer
- `store.html` — Full 18-product grid with category tabs (All / PC / Mice / Keyboards / Audio / Console / Mobile / Lifestyle), hover Add to Cart
- `cart.html` — Cart with qty controls, order summary sidebar, checkout button
- `checkout.html` — Contact + address form (50-state dropdown), payment placeholder, order summary sidebar, dead-end confirmation modal
- `chair.html` — Phantm Spectre X detail: hero, video placeholder, 6 features, spec grid, compare table, sticky buy bar

Non-storefront deliverables (SCRUM, forecast, agent, Kickstarter) are in `docs/` only.

## Remaining Open Questions

1. **Product naming** — Public site currently keeps Razer benchmark names. Team needs to decide: keep as-is, or rename to Phantm equivalents.
2. **Page depth** — Only the chair has its own detail page. Do other products need detail pages, or is the store grid + chair page sufficient?
3. **Product images** — Cards currently use CSS SVG icon placeholders. Decide when/how to add real or AI-generated visuals.
4. **Catalog count** — 18 products (17 Razer + 1 Phantm chair). Confirm with instructor whether exceeding the 14+1 minimum is acceptable.
