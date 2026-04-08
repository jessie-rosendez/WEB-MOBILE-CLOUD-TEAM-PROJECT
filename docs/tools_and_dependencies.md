---
name: Tools & Dependencies
description: Every technology, platform, and external service the project relies on — confirmed from codebase vs. planned
type: project
---

## Storefront — Confirmed from Codebase

| Technology | Purpose | Notes |
|---|---|---|
| HTML5 | Page structure | Single file: index.html. All 8 sections in one document. |
| CSS3 | Styling and layout | Single file: styles.css. Dark gaming theme. Custom properties, responsive layout. |
| Vanilla JavaScript | Data, cart logic, dynamic rendering | Single file: script.js. No framework, no build step. |
| Google Fonts | Typography | Oxanium (display/headings) + Rajdhani (body/UI). Loaded via Google Fonts CDN. |

**No build step required.** The storefront opens directly in a browser. No npm, no bundler, no compiler.

## Planned — Required by Assignment (Not Yet Built)

| Technology | Purpose | Decision status |
|---|---|---|
| Google Cloud Platform | Host the customer service RAG agent | Required by assignment. Which GCP service is TBD. |
| Excel | 5-tier cloud operating forecast + annual graph | Required by assignment. CSV starter exists at `docs/cloud-forecast-starter.csv`. |
| Kickstarter | Preview campaign platform | Required by assignment. Content drafted in `docs/kickstarter-preview.md`. |

## External URLs (Current)

| Service | URL | Purpose |
|---|---|---|
| Google Fonts CDN | fonts.googleapis.com / fonts.gstatic.com | Loads Oxanium and Rajdhani at page load |

## What Is NOT in This Project (by design, current state)

- No npm / Node.js — storefront is fully static
- No backend or API — cart is front-end only
- No database — no persistence currently
- No deployment pipeline
- No CSS framework or component library
- No JavaScript framework or bundler
