---
name: Phantm Project Architecture
description: File map, section-to-data map, and architecture rationale for the BTE400 Phantm e-commerce project
type: project
---

## File Map

```
WEB MOBILE CLOUD GROUP PROJECT/
  index.html     — Razer-style homepage: announcement bar, nav, 4 scrolling product heroes, lifestyle panel, footer
  store.html     — Full product grid: 18 products, category tabs (All/PC/Mice/Keyboards/Audio/Console/Mobile/Lifestyle), hover Add to Cart
  chair.html     — Phantm Spectre X detail page: hero, video placeholder, features grid, spec table, compare table, buy bar
  cart.html      — Cart page: item list with qty controls, order summary sidebar, checkout button
  checkout.html  — Checkout form: contact/address fields, payment placeholder, order summary sidebar, confirmation modal
  styles.css     — Complete shared design system: tokens, nav, heroes, product grid, cart, checkout, chair, footer, responsive
  script.js      — Shared: PRODUCTS array (18), ICONS SVGs, cartLoad/Save/Add/Update, updateCartBadge, initStore/Cart/Checkout/Chair
  README.md      — Team orientation, project direction, recommended working order

  docs/
    MEMORY.md                — Navigation index for all project docs
    project_architecture.md  — This file
    scope_and_deliverables.md — 5 deliverables, done vs open, assignment requirements
    known_issues.md          — Open decisions, placeholders, and discrepancies
    storefront-direction.md  — Confirmed storefront-only direction and remaining open questions
    tools_and_dependencies.md — Tech stack confirmed from codebase vs. planned
    user_profile.md          — Team and student context
    checklist.md             — Editable team checklist (mirrors tracker section on the site)
    agent-knowledge-base.md  — Structured source content staged for the GCP RAG agent build
    cloud-forecast-starter.csv — 5-tier cost model ready to import into Excel
    kickstarter-preview.md   — Campaign draft, perks, video outline, compliance reminders
    scrum-plan.md            — Sprint goals, role rotation, Wednesday board check-in reminder
```

## Current Section-to-Data Map

| Site section | HTML anchor | Data source |
|---|---|---|
| Hero | `#top` | Hardcoded in index.html |
| Project Dashboard | `#dashboard` | Hardcoded in index.html |
| Tracker | `#tracker` | script.js checklist array |
| Catalog + Cart | `#catalog` | script.js `catalogProducts` array |
| Signature Product | `#signature-product` | Hardcoded in index.html |
| Customer Service Agent | `#agent` | script.js agent data objects |
| Cloud Forecast | `#forecast` | script.js `forecastTiers` + `forecastAssumptions` |
| Kickstarter | `#kickstarter` | script.js `kickstarterPerks` |
| Scrum | `#scrum` | script.js `sprints` array |

The docs/ files shadow the site: agent-knowledge-base.md feeds the agent section, cloud-forecast-starter.csv feeds the forecast section, kickstarter-preview.md feeds the Kickstarter section, scrum-plan.md feeds the Scrum section. They are working documents, not rendered.

## Direction Shift

The current single-page prototype was useful for getting all assignment parts visible quickly, but the active storefront direction has shifted:

- The **public site** should become a **pure storefront experience**.
- Deliverables such as **SCRUM**, **forecast**, **RAG notes**, and **Kickstarter planning content** should remain available through docs and separate artifacts rather than the main storefront UI.
- The target storefront direction is now **multi-page**, Razer-inspired, and centered on product browsing, chair marketing, cart behavior, and checkout-style information capture.

Because of that, the section map above describes the **current prototype**, not the intended final storefront architecture.

## Architecture Decisions

1. **Why is the current build single-page even though the target storefront is moving multi-page?**
   The single-page version was the fastest way to make every assignment area visible early in the semester. It worked as a prototype and team alignment tool. The current direction, however, is to refactor the public site into a storefront-first multi-page experience while keeping docs and other deliverable artifacts separate.

2. **Why is all catalog and section data in script.js rather than separate JSON or a backend?**
   Keeping data in script.js means any teammate can edit product descriptions, forecast numbers, or perk text without touching HTML structure. The arrays in script.js are the single source of truth for all dynamically rendered sections. This also means changes are immediately visible by opening index.html in a browser.

3. **Why does docs/ mirror each deliverable?**
   Each docs file serves a parallel purpose outside the browser: the checklist is for team tracking, the agent knowledge base will feed the GCP build, the CSV will seed Excel, the Kickstarter doc has compliance notes, and scrum-plan.md has sprint ownership. The site renders these deliverables visually; the docs files hold the editable raw content.

4. **Why are Razer product names in the catalog?**
   The assignment requires 14 products + 1 custom original. The team chose to benchmark the current Razer lineup as the catalog spine while reserving the original product slot for the Phantm Spectre X chair. This is declared explicitly in the README, agent-knowledge-base.md, and the site's FAQ section.

5. **Where should the non-storefront deliverables live?**
   The current direction is that the public site should not carry every class deliverable in its main navigation. The GCP RAG agent, Excel forecast, SCRUM artifacts, and Kickstarter planning notes can live in docs and separate submission assets while the storefront stays visually focused.

6. **GCP RAG Agent and Excel forecast — TBD**
   `docs/agent-knowledge-base.md` and `docs/cloud-forecast-starter.csv` are still the staging files for those deliverables. Which GCP service is used, how the agent is deployed, and how the final Excel submission is packaged remain undecided.
