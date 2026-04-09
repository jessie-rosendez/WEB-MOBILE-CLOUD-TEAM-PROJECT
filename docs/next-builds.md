---
name: Next Builds — Birds-Eye View
description: Prioritized list of remaining big builds across all 5 deliverables, with owner and sprint target
type: project
---

# What's Next — Big Builds

Storefront is fully built. These are the remaining deliverable-level builds required for final submission.

---

## PRIORITY 1 — Storefront Polish (Deliverable 1)
*Owner: Jessie | Sprint 2*

| # | Build | Notes |
|---|---|---|
| 1.1 | **Product images** | Drop `src/images/{id}.jpg` per `src/images/IMAGES-README.md`. Use AI-generated or screenshotted Phantm-branded visuals. Cards and detail pages auto-populate. |
| 1.2 | **Final pricing strategy** | Current prices mirror Razer April 2026 list prices. Team needs a Phantm pricing decision (same, premium, or discounted). Update `script.js` PRODUCTS array. |
| 1.3 | **Instructor catalog count confirmation** | Site has 18 products (14+1 minimum required). Confirm with Wendy Chun whether 18 passes or needs trimming. |
| 1.4 | **Mobile responsiveness review** | Open site on phone, check nav, cards, product detail, cart, checkout. Fix any layout breaks. |

---

## PRIORITY 2 — GCP RAG Customer Service Agent (Deliverable 2)
*Owner: Pavel | Sprint 2*

| # | Build | Notes |
|---|---|---|
| 2.1 | **Choose GCP service** | Options: Vertex AI Search, Dialogflow CX + Vector Search, or Cloud Run + LangChain. Decision drives everything else. |
| 2.2 | **Ingest knowledge base** | Source content is staged in `docs/agent-knowledge-base.md`. Chunk and upload to chosen vector store. |
| 2.3 | **Build RAG agent** | Wire retrieval → LLM response chain. Agent should answer Phantm product, shipping, and support questions. |
| 2.4 | **Test with sample prompts** | Run at least 10 support questions through the agent. Capture responses for submission. |
| 2.5 | **Embed or link on site** | Add an iframe, chat widget, or dedicated support page linking to the deployed agent. |

---

## PRIORITY 3 — Excel Cloud Forecast (Deliverable 3)
*Owner: Mason | Sprint 2*

| # | Build | Notes |
|---|---|---|
| 3.1 | **Import CSV to Excel** | Source file: `docs/cloud-forecast-starter.csv`. Import into Excel, format as a clean table. |
| 3.2 | **Build annual spend graph** | Chart type: grouped bar or line — 5 tiers on X-axis, monthly cost on Y-axis. |
| 3.3 | **Validate assumptions with team** | Review the 6 cost categories (Hosting, Storage, DB, CDN, Monitoring, AI/API) against GCP current pricing. |
| 3.4 | **Export as submission artifact** | Save final `.xlsx` file. Add to `docs/` or submit separately per instructor guidance. |

---

## PRIORITY 4 — Kickstarter Preview Campaign (Deliverable 4)
*Owner: Team | Sprint 2–3*

| # | Build | Notes |
|---|---|---|
| 4.1 | **Write campaign narrative** | The story behind Phantm Spectre X. Why it exists, who it's for, what makes it different. 300–500 words. Update `docs/kickstarter-preview.md`. |
| 4.2 | **Draft or record pitch video** | 1–5 minutes. Can be a slide-based screen recording. Outline is already in `docs/kickstarter-preview.md`. |
| 4.3 | **Confirm compliance rules** | Fixed funding model, goal under $10K, 5 reward tiers. Check all Kickstarter preview requirements. |

---

## PRIORITY 5 — SCRUM Artifacts (Deliverable 5)
*Owner: Full team rotation | All sprints*

| # | Build | Notes |
|---|---|---|
| 5.1 | **Assign PO and Scrum Master for each sprint** | All 3 sprints currently show TBD. Update `docs/scrum-plan.md`. Required for submission. |
| 5.2 | **Capture Wednesday Scrum board screenshots** | Due every Wednesday. Board must show sprint backlog, in-progress, done columns. |
| 5.3 | **Sprint 1 review demo** | 2–5 min walkthrough of what's done. Storefront is demo-ready. Schedule before Sprint 1 deadline. |
| 5.4 | **Sprint 2 + 3 review demos** | Plan these after Sprint 2 builds (agent, forecast, Kickstarter) are done. |

---

## DEPENDENCY MAP

```
Storefront Polish (1.1–1.4)   ──► ready now, no blockers
GCP Agent (2.1–2.5)           ──► blocked on: GCP service decision
Excel Forecast (3.1–3.4)      ──► blocked on: Excel access (Mason)
Kickstarter (4.1–4.3)         ──► blocked on: writing time
SCRUM (5.1–5.4)               ──► blocked on: role assignment meeting
```

## WHAT CAN BE DONE RIGHT NOW (no blockers)

1. Drop product images into `src/images/` → site auto-updates
2. Write Kickstarter campaign story in `docs/kickstarter-preview.md`
3. Assign SCRUM roles in `docs/scrum-plan.md`
4. Open `docs/cloud-forecast-starter.csv` in Excel and format the table
5. Mobile review — open the live GitHub Pages URL on your phone
