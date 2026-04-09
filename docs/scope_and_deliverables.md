---
name: Scope & Deliverables
description: BTE400 assignment requirements, 5 deliverables, what's done vs open, team and brand context
type: project
---

## Assignment: BTE 400 — Spring 2026, Instructor Wendy Chun

Build a complete e-commerce concept in a chosen product category, supported by cloud infrastructure planning, an AI customer service agent, a crowdfunding preview, and SCRUM project management.

**Team size:** 5 people
**Category:** Gaming & Accessories
**Brand:** Phantm
**Signature product:** Phantm Spectre X (racing-style gaming chair)
**Catalog strategy:** Razer-benchmarked products as the catalog spine + 1 original custom product

## Current Public Site Direction

The public-facing site direction is now:

- Keep the main site focused on the **storefront only**
- Make the storefront **Razer-inspired** in structure and visual tone, but branded as **Phantm**
- Move toward a **multi-page shopping experience**
- Keep non-storefront deliverables such as SCRUM, forecast, RAG staging content, and planning notes in `docs/` and other submission artifacts rather than the storefront UI

---

## Deliverable 1 — Online Shopping Cart (14 + 1 products)

Build a functioning online storefront with at minimum 14 products plus 1 original custom product, with a working shopping cart.

| Status | Item |
|---|---|
| Done | Homepage structure and catalog layout built |
| Done | 17 Razer-benchmarked catalog products seeded in script.js |
| Done | Phantm Spectre X added as the +1 signature custom product |
| Done | Front-end cart: add, remove, quantity tracking, subtotal display |
| Done | Cart persistence added via localStorage |
| Done | Refactor public site from combined prototype into storefront-only experience |
| Done | Build multi-page category and product flow (index, store, cart, checkout, product) |
| Done | Build checkout / information-entry flow (contact + address form, payment placeholder, confirmation modal) |
| Done | product.html — unified dynamic detail page for all 18 products (hero, video, 6 features, spec grid, compare table, sticky buy bar) |
| Done | Store card image/icon clickable to product detail page |
| Done | Rebrand all products from Razer to Phantm naming |
| Done | Consolidate all product-page CSS into styles.css |
| Open | Confirm whether 17 Razer products exceeds requirement or trim to 14 |
| Open | Add final product images |
| Open | Lock final pricing decisions (currently placeholders) |

---

## Deliverable 2 — GCP Customer Service RAG Agent

A customer service AI agent hosted on GCP that can answer questions about the store using Retrieval-Augmented Generation.

| Status | Item |
|---|---|
| Done | Knowledge base content drafted in `docs/agent-knowledge-base.md` |
| Done | Agent data section on the site (contact, location, services, FAQ) |
| Open | Choose GCP service and vector retrieval approach |
| Open | Build and deploy the RAG agent |
| Open | Test with sample customer support prompts |
| Open | Prepare source content for GCP ingestion |

---

## Deliverable 3 — Cloud Operating Expenditures Forecast (5-tier Excel)

A 5-tier annual cloud spend forecast modeled in Excel with a graph showing scale-up costs.

| Status | Item |
|---|---|
| Done | 5-tier cost model drafted (Pilot Launch → National Scale) |
| Done | CSV starter at `docs/cloud-forecast-starter.csv` |
| Done | Assumptions drafted across 6 cost categories |
| Open | Import CSV into Excel |
| Open | Build annual cloud spend graph in Excel |
| Open | Validate assumptions with full team |

**Tier summary (monthly USD estimates):**

| Tier | Name | Audience | Monthly total |
|---|---|---|---|
| 1 | Pilot Launch | 1K visitors | $1,440 |
| 2 | Campus Buzz | 5K visitors | $3,120 |
| 3 | Regional Traction | 20K visitors | $7,320 |
| 4 | Kickstarter Surge | 75K visitors | $17,520 |
| 5 | National Scale | 250K visitors | $38,820 |

Cost categories: Hosting/Compute, Storage, Database, CDN, Monitoring, AI/API.

---

## Deliverable 4 — Kickstarter Preview Campaign

A Kickstarter preview campaign for the Phantm Spectre X. Fixed funding. Goal under $10K. 5 reward tiers matching the 5-person team. 1–5 minute pitch video.

| Status | Item |
|---|---|
| Done | Product: Phantm Spectre X |
| Done | Goal: $9,500 fixed funding |
| Done | 5 reward perks drafted ($10 / $25 / $89 / $169 / $799) |
| Done | 5-scene video outline drafted |
| Open | Write final campaign narrative story |
| Open | Draft or record 1–5 minute pitch video |
| Open | Confirm all Kickstarter preview compliance rules |

---

## Deliverable 5 — SCRUM Project Management (3 sprints)

SCRUM methodology across 3 sprints with rotating Product Owner and Scrum Master roles. Weekly Scrum board images due Wednesdays.

| Status | Item |
|---|---|
| Done | 3-sprint structure with goals and focus areas defined |
| Open | Assign Product Owner and Scrum Master for each sprint |
| Open | Submit Scrum board images every Wednesday |
| Open | Prepare 2–5 minute sprint review demos |

**Sprint goals:**
- Sprint 1: Storefront foundation (homepage, catalog, chair direction, starter support content)
- Sprint 2: AI, forecast, and campaign draft (agent build, Excel forecast, Kickstarter copy)
- Sprint 3: Polish and demo readiness (final visuals, deliverable review, presentation prep)
