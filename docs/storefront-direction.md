---
name: Storefront Direction
description: Current confirmed storefront goals, screenshot-based UI direction, AI image prompts, and stop-state for next session
type: project
---

## Confirmed Direction

As of April 9, 2026, the public-facing site direction is:

- build a **pure Phantm e-commerce storefront** inspired by the Razer site structure and visual language
- keep the public site focused on **shopping only**: navigation, category pages, product listings, product detail views, cart behavior, chair marketing, and a checkout-style information page
- keep the site **separate from project-management content**; SCRUM, cloud forecast, RAG notes, and Kickstarter planning remain in `docs/` and other submission artifacts
- keep the storefront **multi-page**
- show **all current catalog items**, including the custom `Phantm Spectre X` chair
- keep **Phantm branding** throughout, even when the page structure is benchmarked against Razer
- use **AI-generated or recreated visuals** rather than direct Razer asset reuse
- keep the cart **front-end only** for now, but preserve pricing, quantity changes, subtotal behavior, and the dead-end info-entry checkout flow

---

## Screenshot → Site Mapping (April 9 Build)

The current screenshot batch pushed the storefront closer to flagship Razer-style merchandising.

| Screenshot Direction | Phantm Implementation | Status |
|---|---|---|
| Blade-style cinematic homepage hero | `index.html` hero--blade moved into showcase-style hero treatment | ✅ Implemented |
| Viper dual-color homepage hero | `index.html` hero--viper uses dual-device showcase fallback composition | ✅ Implemented |
| Audio campaign-style homepage hero | `index.html` hero--audio uses stronger cinematic showcase layout | ✅ Implemented |
| Gaming keyboards category landing feel | `store.html` + `script.js` category showcase for `Keyboards` | ✅ Implemented |
| Gaming headsets category landing feel | `store.html` + `script.js` category showcase for `Audio` | ✅ Implemented |
| Lifestyle / gaming chairs landing feel | `chair.html` rebuilt as a real landing page | ✅ Implemented |
| Keyboard PDP with color + size selectors | `product.html` + `script.js` config groups for keyboards | ✅ Implemented |
| Headset PDP with richer merchandising | `product.html` + `script.js` gallery, options, awards, top picks | ✅ Implemented |
| Mouse / controller PDP with gallery rail | `product.html` thumb rail + media shell + highlights | ✅ Implemented |
| Chair product quick-view / purchase overlay | Not yet built as a true modal overlay | ⏳ Open |
| Bottom purchase / delivery rail feel | Existing sticky buy bar is live, but not a full Razer-style commerce rail | ⏳ Open |

---

## Current Storefront State

### Homepage
- `index.html` now uses stronger showcase-style product heroes instead of flatter split sections
- the Blade, Viper, and Audio sections have richer fallback compositions while waiting for final assets

### Store
- `store.html` has:
  - the existing `Fresh Off The Line` carousel
  - category tabs
  - a new screenshot-inspired category showcase area above the standard grid
  - the full 18-product grid below

### Product Detail Pages
- `product.html` is the shared PDP for all products
- current PDP modules include:
  - thumbnail rail
  - main media shell
  - media highlights
  - color / design selector
  - secondary configuration groups for relevant product types
  - protection upsell
  - awards badges
  - top picks
  - sticky buy bar

### Chair Landing
- `chair.html` is now a true gaming chairs landing page
- it includes:
  - category intro
  - lineup hero composition
  - featured Spectre X card
  - finish-concept card
  - video placeholder banner

---

## Build Status (April 9, 2026)

Pages live now:
- `index.html` — flagship homepage with showcase heroes and lifestyle panel
- `store.html` — featured carousel, category showcase, category tabs, and 18-product grid
- `cart.html` — cart with quantity controls, subtotal, and checkout transition
- `checkout.html` — information-entry page with dead-end confirmation flow
- `product.html` — shared PDP for all 18 products with gallery, options, protection, awards, specs, compare, top picks, and sticky buy
- `support.html` — support / FAQ page
- `chair.html` — standalone gaming chairs landing page

---

## What Still Needs Real Assets

### Product Images — Drop into `src/images/{id}.jpg` to activate

| ID | AI Image Prompt |
|---|---|
| `blade-16` | Phantm Blade 16 gaming laptop, ultra-thin aluminum chassis, RGB keyboard glowing blue, dark studio, teal/navy atmospheric lighting, elevation angle showing screen and keyboard, no visible branding marks |
| `blade-14` | Compact gaming laptop, more portable look, green RGB accents, dark carbon background |
| `blade-18` | Large 18-inch gaming laptop, powerful aesthetic, purple/violet atmospheric glow, premium studio shot |
| `viper-v4` | Two gaming mice side-by-side (matte black + mercury white), angled 3/4 view on dark charcoal surface, red LED glow under sensor, clean product photography, no Razer logos |
| `da-v4` | Ergonomic right-hand gaming mouse, soft shape, rose/pink atmospheric glow, dark background |
| `bw-v4` | Full-size mechanical keyboard top-down shot, green optical switches visible through keycaps, green per-key RGB glow, dark matte surface |
| `hunts-8k` | Tenkeyless optical gaming keyboard, floating from dark background, blue/white key illumination, modern clean aesthetic |
| `ds-v2` | Slim low-profile wireless keyboard, sleek chiclet keys, purple side-glow lighting |
| `bs-v3` | Over-ear gaming headset (black chassis, green accents), floating against dark indigo background, dramatic rim lighting from below, no Razer branding |
| `kraken-v4` | Large gaming headset with oversized plush ear cups, green RGB lighting on cups, green atmospheric glow |
| `nommo-v2` | Pair of desktop gaming speakers with matching subwoofer, teal/cyan RGB underglow, dark desk setting |
| `wolv-v3` | Pro gaming controller (Xbox form factor), matte black with green accent lines, angled beauty shot, dark background |
| `kishi-v3` | Mobile phone gaming controller clip, rose/magenta accent color, attached to smartphone or floating |
| `tb5-dock` | Thunderbolt 5 dock hub, multiple ports visible on front panel, blue port glow, dark desk context |
| `firefly` | RGB gaming mouse mat, colorful addressable LED edge lighting (rainbow or green), flat angle shot from above |
| `gigantus` | Large cloth mouse mat, simple flat aerial shot, matte surface texture visible |
| `hyperflux` | Wireless charging mouse mat, subtle charging glow indicator, minimalist dark surface |
| `spectre-x` | Phantm Spectre X racing-shell gaming chair, matte black with green RGB base and accent lines, dramatic studio lighting, gaming room atmosphere with ultrawide monitors in background, no Razer logos anywhere |

### Spectre X Chair Lifestyle Full-Room Photo
**AI prompt:** Moody gaming setup room, Phantm Spectre X chair centered in frame (racing shell, black with green RGB base illuminating the floor), ultrawide curved monitor desk setup, purple/green ambient lighting from behind monitors, cinematic depth-of-field, tasteful cable management, no people in frame, no Razer branding anywhere

### Videos
Every product page has a video section with a play button placeholder.
When videos exist, add `src/videos/{id}.mp4` and wire up the `<video>` tag in product.html.

**Storyboard for any product promo video:**
- 0:00–0:05 — Dark open, product reveals from black, music sting
- 0:05–0:20 — Material/detail close-ups
- 0:20–0:40 — In-use: hands, gameplay, reaction
- 0:40–0:55 — Spec callouts as text overlays
- 0:55–1:00 — Phantm logo + "For Gamers. By Gamers."

---

## STOP STATE — Next Steps

**Completed this session:** screenshot-driven structural pass across homepage, store, PDP, and chairs landing.

**Priority queue for next session:**

1. **Images** — Generate or source 18 product photos using the prompts above. Drop them into `src/images/{id}.jpg`. The image slots are already wired.
2. **Spectre X lifestyle room photo** — Add `src/images/spectre-x-room.jpg` and decide whether it belongs on `index.html`, `chair.html`, or both.
3. **Quick-view modal** — Build the screenshot-style purchase overlay for chair / controller / mouse flows.
4. **Commerce rail refinement** — Upgrade the current sticky buy bar if a closer Razer-style rail is still wanted.
5. **Responsive QA** — Test homepage, store, PDP, chair, cart, and checkout on mobile widths before push.
6. **GCP RAG Agent** (Pavel) — separate deliverable, not storefront UI
7. **Excel forecast** (Mason) — separate deliverable, not storefront UI

**Quick test checklist before push:**
- [ ] `index.html` — showcase heroes render cleanly with no layout collapse
- [ ] `store.html` — category showcase appears above the product grid
- [ ] `product.html?id=hunts-8k` — color and size options render
- [ ] `product.html?id=bs-v3` — gallery, options, protection, awards, and top picks render
- [ ] `product.html?id=viper-v4` — thumb rail and sticky buy bar render correctly
- [ ] `chair.html` — lineup hero, cards, and cinema banner render cleanly
- [ ] `cart.html` / `checkout.html` — no cart regression
- [ ] Mobile 390px — heroes and PDP media stack correctly
