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

The storefront is **fully built and unified**. All pages live:

- `index.html` — Homepage: announcement bar, sticky nav, 4 scrolling product heroes, lifestyle panel, footer
- `store.html` — Full 18-product grid with category tabs; card image/icon is clickable to detail page
- `cart.html` — Cart with qty controls, order summary sidebar, checkout button
- `checkout.html` — Contact + address form, payment placeholder, dead-end confirmation modal
- `product.html` — **Unified dynamic detail page for ALL 18 products** (`?id=` URL param). Contains: sticky subnav, hero with image/SVG fallback, video placeholder, 6 feature cards, spec grid, compare table, sticky buy bar.
- `chair.html` — Redirect → `product.html?id=spectre-x`

Product CSS (subnav, features, compare, buy bar) is in `styles.css`. Product content data (features, video labels, compare tables, specs) is in `script.js` as `PDP_FEATURES`, `PDP_VIDEO`, `COMPARE_TABLES`, `SPEC_ROWS`.

Non-storefront deliverables (SCRUM, forecast, agent, Kickstarter) are in `docs/` only.

## Remaining Open Questions

1. **Product images** — Cards and detail pages use SVG icon placeholders. Drop `src/images/{id}.jpg` per the README in that folder.
2. **Catalog count** — 18 products (17 Phantm-branded + 1 Phantm Spectre X chair). Confirm with instructor whether exceeding 14+1 minimum is acceptable.
3. **Final pricing** — Current prices are benchmarked from Razer April 2026 list prices. Team decision needed.
