---
name: Phantm Project Architecture
description: File map, section-to-data map, and architecture rationale for the BTE400 Phantm e-commerce project
type: project
---

## File Map

```
WEB MOBILE CLOUD GROUP PROJECT/
  index.html           — Single-page storefront; all 8 sections in one file
  styles.css           — Dark gaming theme, responsive layout, all section styles
  script.js            — Catalog data arrays, cart logic, dynamic rendering for every section
  README.md            — Team orientation, project direction, recommended working order

  docs/
    MEMORY.md                — Navigation index for all project docs
    project_architecture.md  — This file
    scope_and_deliverables.md — 5 deliverables, done vs open, assignment requirements
    known_issues.md          — Open decisions, placeholders, and discrepancies
    tools_and_dependencies.md — Tech stack confirmed from codebase vs. planned
    user_profile.md          — Team and student context
    checklist.md             — Editable team checklist (mirrors tracker section on the site)
    agent-knowledge-base.md  — Structured source content staged for the GCP RAG agent build
    cloud-forecast-starter.csv — 5-tier cost model ready to import into Excel
    kickstarter-preview.md   — Campaign draft, perks, video outline, compliance reminders
    scrum-plan.md            — Sprint goals, role rotation, Wednesday board check-in reminder
```

## Section-to-Data Map

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

## Architecture Decisions

1. **Why a single HTML/CSS/JS file instead of a framework?**
   The storefront is a class project deliverable with a 5-person team of mixed technical backgrounds. A single-page static build is portable, requires no local dev environment to preview, and is readable by every teammate. No build step required. Framework decision is TBD if the GCP agent integration requires one.

2. **Why is all catalog and section data in script.js rather than separate JSON or a backend?**
   Keeping data in script.js means any teammate can edit product descriptions, forecast numbers, or perk text without touching HTML structure. The arrays in script.js are the single source of truth for all dynamically rendered sections. This also means changes are immediately visible by opening index.html in a browser.

3. **Why does docs/ mirror each deliverable?**
   Each docs file serves a parallel purpose outside the browser: the checklist is for team tracking, the agent knowledge base will feed the GCP build, the CSV will seed Excel, the Kickstarter doc has compliance notes, and scrum-plan.md has sprint ownership. The site renders these deliverables visually; the docs files hold the editable raw content.

4. **Why are Razer product names in the catalog?**
   The assignment requires 14 products + 1 custom original. The team chose to benchmark the current Razer lineup as the catalog spine while reserving the original product slot for the Phantm Spectre X chair. This is declared explicitly in the README, agent-knowledge-base.md, and the site's FAQ section.

5. **GCP RAG Agent — TBD**
   The agent section on the site shows structured content that will feed a GCP-hosted RAG agent. Which GCP service hosts it, how retrieval is structured, and how the agent connects to the storefront have not been decided. `docs/agent-knowledge-base.md` is the staged source content.

6. **Excel cloud forecast — TBD**
   `docs/cloud-forecast-starter.csv` has the 5-tier model ready to import. The CSS bar chart on the site is a visual placeholder only — it does not replace the Excel file deliverable.
