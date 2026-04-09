---
name: Known Issues & Open Items
description: Discrepancies, placeholder content, and open decisions that need resolution before submission
type: project
---

## Open Issues

### 1. ~~Public storefront scope mismatch~~ — RESOLVED
- **Resolution:** Full multi-page storefront rebuilt (April 2026). All project-management sections removed from the public site. Non-storefront deliverables now live in `docs/` only.
- **Pages live:** `index.html`, `store.html`, `cart.html`, `checkout.html`, `chair.html`

### 2. ~~Branding and naming ambiguity~~ — RESOLVED
- **Resolution:** All 17 benchmark products renamed from "Razer X" to "Phantm X" in `script.js` PRODUCTS array (April 2026). Phantm branding is now consistent across all pages.

### 3. Catalog count — 18 vs. required 14 + 1
- **Problem:** The assignment requires 14 catalog products + 1 custom original. The site has 17 Phantm-branded products + 1 Phantm Spectre X chair = 18 total.
- **Decision needed:** Confirm with instructor that exceeding the minimum is acceptable, or trim to 14.
- **Status:** Open — instructor confirmation needed
- **File:** `script.js` PRODUCTS array

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
- **Problem:** Product cards and detail pages render without real images. The image fallback system is live — dropping `src/images/{id}.jpg` auto-populates everywhere.
- **Status:** Open — team needs to source or generate Phantm-branded product visuals
- **File:** `src/images/` — see `src/images/IMAGES-README.md` for exact filenames

### 11. Store nav category links duplicated by tabs — RESOLVED
- **Resolution:** On `store.html`, PC/Console/Mobile/Lifestyle nav links are now hidden via CSS (`.nav-links.on-store .nav-cat-filter { display:none }`). Clicking those links from other pages lands on store with the correct tab pre-selected.

---

## Resolved / By-Design Items

### Razer product names in the catalog
- **Resolution:** All products renamed to Phantm equivalents (April 2026). Razer names no longer appear on the public storefront.
