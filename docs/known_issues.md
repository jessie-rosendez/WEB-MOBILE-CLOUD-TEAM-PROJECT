---
name: Known Issues & Open Items
description: Discrepancies, placeholder content, and open decisions that need resolution before submission
type: project
---

## Open Issues

### 1. Catalog count discrepancy — 17 vs. required 14 + 1
- **Problem:** The assignment requires 14 catalog products + 1 custom original. The current site has 17 Razer-benchmarked products + 1 Phantm chair = 18 total.
- **Decision needed:** Trim catalog to 14 Razer products, or confirm with instructor that exceeding the minimum is acceptable.
- **Status:** Open — team decision required
- **File:** script.js `catalogProducts` array

### 2. Cart has no persistence
- **Problem:** The front-end shopping cart resets on every page reload. There is no localStorage save, no session, and no backend order flow.
- **Impact:** The "online shopping cart" deliverable demonstrates the cart mechanic but not a persistent or completable purchase.
- **Proposed fix:** Add localStorage save/restore for cart state and a checkout confirmation step.
- **Status:** Open — target Sprint 1 or Sprint 2

### 3. GCP RAG agent not yet built
- **Problem:** The customer service agent section on the site shows structured knowledge content but no actual agent has been deployed on GCP.
- **Impact:** Deliverable 2 is at the content-preparation stage only.
- **Status:** Open — GCP service selection and build needed in Sprint 2
- **Staging file:** `docs/agent-knowledge-base.md`

### 4. Cloud forecast not yet in Excel
- **Problem:** The 5-tier forecast exists as a CSV and renders as a CSS placeholder chart on the site. No Excel file or Excel graph exists yet.
- **Impact:** Deliverable 3 requires an Excel file with a graph.
- **Status:** Open — import CSV to Excel in Sprint 2
- **Source file:** `docs/cloud-forecast-starter.csv`

### 5. SCRUM roles not assigned
- **Problem:** Product Owner and Scrum Master are `TBD` for all 3 sprints in `docs/scrum-plan.md` and on the site.
- **Impact:** SCRUM deliverable requires visible role rotation.
- **Status:** Open — assign before Sprint 1 review

### 6. Kickstarter campaign story not written
- **Problem:** Perks and a video outline are drafted, but the written campaign narrative has not been written.
- **Status:** Open — target Sprint 2
- **Draft file:** `docs/kickstarter-preview.md`

### 7. All product pricing is placeholder
- **Problem:** Prices in script.js are benchmarked to Razer's April 7, 2026 list prices. No custom Phantm pricing strategy has been decided.
- **Status:** Open — team business-model decision required

### 8. No product images
- **Problem:** Product cards render without any images. Image slots exist in the HTML layout but no assets have been added.
- **Status:** Open — design decision for Sprint 2 or 3

---

## Resolved / By-Design Items

### Razer product names in the catalog
- **Why it looks like an issue:** A real storefront wouldn't use a competitor's brand names.
- **Why it isn't one:** Intentional. The README, `docs/agent-knowledge-base.md`, and the site's FAQ section all document this explicitly. Razer serves as the benchmark catalog; Phantm Spectre X is the original product.
