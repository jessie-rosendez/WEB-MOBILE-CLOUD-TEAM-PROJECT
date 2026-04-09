---
name: Phantm Project Architecture
description: File map, section-to-data map, and architecture rationale for the BTE400 Phantm e-commerce project
type: project
---

## File Map

```
WEB MOBILE CLOUD GROUP PROJECT/
  index.html     — Flagship homepage: announcement bar, nav, showcase heroes, lifestyle panel, footer
  store.html     — Store landing: featured carousel, category showcase, tabs, 18-product grid, hover Add to Cart
  product.html   — Shared product detail page for all 18 products: gallery, options, protection, awards, specs, compare, top picks, buy bar
  chair.html     — Gaming chairs landing page: lineup hero, Spectre X feature card, finish concept card, cinema banner
  cart.html      — Cart page: item list with qty controls, order summary sidebar, checkout button
  checkout.html  — Checkout form: contact/address fields, payment placeholder, order summary sidebar, confirmation modal
  styles.css     — Complete shared design system: tokens, nav, heroes, product grid, cart, checkout, chair, footer, responsive
  script.js      — Shared storefront logic: PRODUCTS array (18), ICONS SVGs, cart state, store category showcases, PDP options/media/top picks/awards
  README.md      — Team orientation, project direction, recommended working order

  docs/
    MEMORY.md                — Navigation index for all project docs
    project_architecture.md  — This file
    scope_and_deliverables.md — 5 deliverables, done vs open, assignment requirements
    known_issues.md          — Open decisions, placeholders, and discrepancies
    storefront-direction.md  — Confirmed storefront-only direction and remaining open questions
    storefront-worklog.md    — Running screenshot-driven implementation log and stop-state
    tools_and_dependencies.md — Tech stack confirmed from codebase vs. planned
    user_profile.md          — Team and student context
    checklist.md             — Editable team checklist (mirrors tracker section on the site)
    agent-knowledge-base.md  — Structured source content staged for the GCP RAG agent build
    cloud-forecast-starter.csv — 5-tier cost model ready to import into Excel
    kickstarter-preview.md   — Campaign draft, perks, video outline, compliance reminders
    scrum-plan.md            — Sprint goals, role rotation, Wednesday board check-in reminder
```

## Current Page-to-Data Map

| Page / area | Source of truth |
|---|---|
| Homepage hero copy and layout | `index.html` + shared styling in `styles.css` |
| Store carousel and product grid | `script.js` `PRODUCTS` + `initStore()` |
| Store category showcase | `script.js` `CATEGORY_SHOWCASES` |
| PDP product identity | `script.js` `PRODUCTS` |
| PDP gallery labels | `script.js` `PDP_MEDIA_FRAMES` |
| PDP color / design options | `script.js` `COLOR_OPTIONS` |
| PDP secondary config groups | `script.js` `PDP_OPTION_GROUPS` |
| PDP feature grid | `script.js` `PDP_FEATURES` |
| PDP compare table | `script.js` `COMPARE_TABLES` |
| PDP awards row | `script.js` `AWARDS` |
| PDP related products | `script.js` `TOP_PICKS_IDS` |
| Cart page and checkout summary | `script.js` cart helpers (`cartLoad`, `cartSave`, `cartAdd`, `cartUpdate`) |
| Chairs landing page | `chair.html` + shared styling in `styles.css` |

## Direction Shift

The current storefront no longer follows the original all-in-one prototype. The active direction is now:

- The **public site** should become a **pure storefront experience**.
- Deliverables such as **SCRUM**, **forecast**, **RAG notes**, and **Kickstarter planning content** should remain available through docs and separate artifacts rather than the main storefront UI.
- The target storefront direction is now **multi-page**, Razer-inspired, and centered on product browsing, chair marketing, cart behavior, and checkout-style information capture.

## Architecture Decisions

1. **Why keep the storefront static and multi-page instead of rebuilding in a CMS or framework?**
   The current HTML/CSS/JS build already supports the class deliverable and is easy for the whole group to inspect. The team can keep moving quickly without introducing extra platform overhead.

2. **Why is all catalog and section data in script.js rather than separate JSON or a backend?**
   Keeping data in script.js means product copy, category showcases, options, and related-pick logic stay in one readable place without adding a backend.

3. **Why does docs/ mirror each deliverable?**
   Each docs file serves a parallel purpose outside the storefront: the checklist is for team tracking, the agent knowledge base will feed the GCP build, the CSV will seed Excel, the Kickstarter doc has compliance notes, and the storefront docs now preserve screenshot mapping and stop-state for future edits.

4. **Why keep using Razer screenshots as structural reference?**
   The screenshots provide the clearest target for layout, hierarchy, and UX polish. The implementation goal is to reinterpret those patterns as Phantm, not to reuse Razer branding or copy.

5. **Where should the non-storefront deliverables live?**
   The current direction is that the public site should not carry every class deliverable in its main navigation. The GCP RAG agent, Excel forecast, SCRUM artifacts, and Kickstarter planning notes can live in docs and separate submission assets while the storefront stays visually focused.

6. **GCP RAG Agent and Excel forecast — TBD**
   `docs/agent-knowledge-base.md` and `docs/cloud-forecast-starter.csv` are still the staging files for those deliverables. Which GCP service is used, how the agent is deployed, and how the final Excel submission is packaged remain undecided.
