# Phantm — BTE 400 E-Commerce Project

**Course:** BTE 400 · Herbert Business School · Spring 2026  
**Instructor:** Wendy Chun  
**Team size:** 5  
**Brand:** Phantm  
**Category:** Gaming & Accessories  
**Signature product:** Phantm Spectre X (racing-style gaming chair)

---

## What This Is

A full e-commerce concept project covering five deliverables: a multi-page online storefront, a GCP-hosted RAG customer service agent, a cloud cost forecast, a Kickstarter preview campaign, and SCRUM project management across three sprints.

The public storefront is a static HTML/CSS/JS site styled after a premium gaming brand (Razer-inspired structure, fully rebranded as Phantm). All 18 catalog products are renamed under the Phantm brand.

---

## Live Pages

| File | Purpose |
|---|---|
| [index.html](index.html) | Homepage — announcement bar, nav, hero showcase, lifestyle panel, footer |
| [store.html](store.html) | Store — featured carousel, category tabs, 18-product grid |
| [product.html](product.html) | Dynamic product detail page — shared template for all 18 products |
| [chair.html](chair.html) | Gaming chairs landing page — Spectre X feature story |
| [cart.html](cart.html) | Cart — item list, qty controls, order summary sidebar |
| [checkout.html](checkout.html) | Checkout — contact/address form, payment placeholder, confirmation modal |
| [support.html](support.html) | Support — contact info, FAQ, service policies |

---

## Tech Stack

| Layer | What's Used |
|---|---|
| Markup | Vanilla HTML5 (multi-page static) |
| Styling | Single shared `styles.css` (design tokens, all pages) |
| Logic | Single shared `script.js` (product data, cart state, store rendering, PDP) |
| Fonts | Google Fonts — Barlow Condensed, Inter |
| Images | `src/images/{product-id}.jpg` — drop-in, auto-populated |
| Hosting | Static (local + GitHub) — GCP deployment planned |
| AI Agent | GCP RAG — planned (Deliverable 2) |

No frameworks, no build step, no backend. Every team member can open any `.html` file directly.

---

## Product Catalog (18 Products)

> Full details, features, and pricing in [docs/PRODUCTS.md](docs/PRODUCTS.md)

| Category | Products |
|---|---|
| PC | Blade 14, Blade 16, Blade 18, Thunderbolt 5 Dock |
| Mice | Viper V4 Pro, DeathAdder V4 Pro |
| Keyboards | BlackWidow V4 Pro, Huntsman V3 Pro, DeathStalker V2 Pro |
| Audio | BlackShark V3 Pro, Kraken V4 Pro, Nommo V2 Pro |
| Console | Wolverine V3 Pro |
| Mobile | Kishi V3 Pro |
| Lifestyle | Gigantus V2, HyperFlux V2, **Spectre X** *(signature original)* |
| Mouse Mats | Firefly V2 Pro |

---

## Deliverables

| # | Deliverable | Status |
|---|---|---|
| 1 | [Online Shopping Cart](docs/scope_and_deliverables.md#deliverable-1) | Storefront built, images in progress |
| 2 | [GCP RAG Customer Service Agent](docs/scope_and_deliverables.md#deliverable-2) | Knowledge base drafted, GCP TBD |
| 3 | [Cloud Cost Forecast (Excel, 5 tiers)](docs/scope_and_deliverables.md#deliverable-3) | CSV ready, Excel pending |
| 4 | [Kickstarter Preview — Spectre X](docs/scope_and_deliverables.md#deliverable-4) | Draft ready, video pending |
| 5 | [SCRUM (3 sprints)](docs/scope_and_deliverables.md#deliverable-5) | Structure set, owners TBD |

---

## Docs Directory

All planning, knowledge base, and RAG staging content lives in [`docs/`](docs/).

| File | Purpose |
|---|---|
| [docs/PRODUCTS.md](docs/PRODUCTS.md) | **RAG-ready product catalog** — all 18 products with features, specs, pricing |
| [docs/agent-knowledge-base.md](docs/agent-knowledge-base.md) | GCP RAG ingestion source — contact, policies, FAQ, brand info |
| [docs/scope_and_deliverables.md](docs/scope_and_deliverables.md) | 5 deliverables, done/open tracking |
| [docs/project_architecture.md](docs/project_architecture.md) | File map, page-to-data map, architecture decisions |
| [docs/checklist.md](docs/checklist.md) | Editable team checklist |
| [docs/cloud-forecast-starter.csv](docs/cloud-forecast-starter.csv) | 5-tier cloud cost model (import into Excel) |
| [docs/kickstarter-preview.md](docs/kickstarter-preview.md) | Kickstarter campaign draft, perks, video outline |
| [docs/scrum-plan.md](docs/scrum-plan.md) | Sprint goals and role rotation |
| [docs/storefront-direction.md](docs/storefront-direction.md) | Confirmed design direction and open decisions |
| [docs/storefront-worklog.md](docs/storefront-worklog.md) | Implementation log and stop-state notes |
| [docs/known_issues.md](docs/known_issues.md) | Open issues, discrepancies, placeholder flags |

---

## Data Architecture

All product data, store rendering, and cart logic lives in [`script.js`](script.js):

| Data object | What it controls |
|---|---|
| `PRODUCTS` | 18 products: id, name, category, tag, price, glow, badge |
| `ICONS` | SVG icon per product tag (Laptop, Mouse, Keyboard, etc.) |
| `PDP_FEATURES` | 6 feature cards per product type |
| `PDP_MEDIA_FRAMES` | Gallery tab labels per product type |
| `COLOR_OPTIONS` | Color/finish swatches per product |
| `PDP_OPTION_GROUPS` | Config selectors (storage, connectivity, etc.) |
| `COMPARE_TABLES` | Competitor comparison rows per product type |
| `AWARDS` | Award badges per product type |
| `TOP_PICKS_IDS` | Related product IDs per product |
| `CATEGORY_SHOWCASES` | Editorial cards per store category |

---

## Image Convention

Images live in `src/images/` and are named `{product-id}.jpg`. Drop the file — every page auto-populates.

```
src/images/
  blade-14.jpg      blade-16.jpg      blade-18.jpg
  viper-v4.jpg      da-v4.jpg         firefly.jpg
  bw-v4.jpg         hunts-8k.jpg      ds-v2.jpg
  bs-v3.jpg         kraken-v4.jpg     nommo-v2.jpg
  wolv-v3.jpg       kishi-v3.jpg      tb5-dock.jpg
  gigantus.jpg      hyperflux.jpg     spectre-x.jpg
```

---

## Working Order (Recommended)

1. Lock final product images (`src/images/`)
2. Build and deploy the GCP RAG agent using `docs/agent-knowledge-base.md` and `docs/PRODUCTS.md`
3. Import `docs/cloud-forecast-starter.csv` into Excel and build the graph
4. Finalize Kickstarter campaign copy and record pitch video
5. Assign SCRUM roles and capture Wednesday board images each sprint
