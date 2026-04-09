---
name: Known Issues & Open Items
description: Discrepancies, placeholder content, and open decisions that need resolution before submission
type: project
---

## Open Issues

### 1. ~~Public storefront scope mismatch~~ — RESOLVED
- **Resolution:** Full multi-page storefront rebuilt (April 2026). All project-management sections removed from the public site. Non-storefront deliverables now live in `docs/` only.
- **Pages live:** `index.html`, `store.html`, `cart.html`, `checkout.html`, `chair.html`

### 2. Branding and naming ambiguity
- **Problem:** The desired visual direction is Phantm-branded, but the live product data still uses direct Razer benchmark names in the public catalog.
- **Impact:** The team has not fully locked whether the storefront should keep benchmark names, rename products, or present them as Phantm equivalents.
- **Decision needed:** Confirm the public naming strategy before building product pages and image assets.
- **Status:** Open — branding decision required
- **File:** `script.js` `catalogProducts` array

### 3. Catalog count discrepancy — 17 vs. required 14 + 1
- **Problem:** The assignment requires 14 catalog products + 1 custom original. The current site has 17 Razer-benchmarked products + 1 Phantm chair = 18 total.
- **Decision needed:** Trim catalog to 14 Razer products, or confirm with instructor that exceeding the minimum is acceptable.
- **Status:** Open — team decision required
- **File:** script.js `catalogProducts` array

### 4. ~~Checkout flow remains a placeholder~~ — RESOLVED
- **Resolution:** `checkout.html` built with full contact/address form (50-state dropdown), payment placeholder, order summary sidebar, and confirmation modal. Cart clears on submit. Dead-end by design.

### 5. GCP RAG agent not yet built
- **Problem:** The customer service agent section on the site shows structured knowledge content but no actual agent has been deployed on GCP.
- **Impact:** Deliverable 2 is at the content-preparation stage only.
- **Status:** Open — GCP service selection and build needed in Sprint 2
- **Staging file:** `docs/agent-knowledge-base.md`

### 6. Cloud forecast not yet in Excel
- **Problem:** The 5-tier forecast exists as a CSV and renders as a CSS placeholder chart on the site. No Excel file or Excel graph exists yet.
- **Impact:** Deliverable 3 requires an Excel file with a graph.
- **Status:** Open — import CSV to Excel in Sprint 2
- **Source file:** `docs/cloud-forecast-starter.csv`

### 7. SCRUM roles not assigned
- **Problem:** Product Owner and Scrum Master are `TBD` for all 3 sprints in `docs/scrum-plan.md` and on the site.
- **Impact:** SCRUM deliverable requires visible role rotation.
- **Status:** Open — assign before Sprint 1 review

### 8. Kickstarter campaign story not written
- **Problem:** Perks and a video outline are drafted, but the written campaign narrative has not been written.
- **Status:** Open — target Sprint 2
- **Draft file:** `docs/kickstarter-preview.md`

### 9. All product pricing is placeholder
- **Problem:** Prices in script.js are benchmarked to Razer's April 7, 2026 list prices. No custom Phantm pricing strategy has been decided.
- **Status:** Open — team business-model decision required

### 10. No product images
- **Problem:** Product cards render without any images. Image slots exist in the HTML layout but no assets have been added.
- **Status:** Open — design decision for Sprint 2 or 3

---

## Resolved / By-Design Items

### Razer product names in the catalog
- **Why it looks like an issue:** A real storefront wouldn't use a competitor's brand names.
- **Why it isn't automatically one:** The benchmark strategy is intentional in the project docs. The open question now is only how much of that benchmark naming should remain visible in the public storefront once the Phantm-branded rebuild begins.
