---
name: Storefront Direction
description: Current confirmed storefront goals, screenshot-based UI direction, AI image prompts, and stop-state for next session
type: project
---

## Confirmed Direction

As of April 8, 2026, the public-facing site direction is:

- Build a **pure Phantm e-commerce storefront** inspired by the Razer site structure and visual language.
- Keep the public site focused on **shopping only**: navigation, category pages, product listings, product detail views, cart behavior, and a checkout-style information page.
- Keep the site **separate from project-management content**. SCRUM, cloud forecast, RAG notes, and other class-process content should live in `docs/` and other deliverable artifacts, not in the storefront UI.
- Move toward a **multi-page storefront** rather than a single page that mixes every deliverable together.
- Show **all current catalog items** in the storefront flow, including the custom `Phantm Spectre X` chair.
- Use **Phantm branding** throughout the experience, even when the catalog structure is benchmarked against Razer.
- Plan for **AI-generated product visuals** that resemble the benchmark products while replacing visible branding with Phantm.
- Include a **chair-focused learn-more experience** and a **placeholder brand/chair video section**.
- Keep the cart **front-end only** for now, but it should show product prices, quantities, subtotal behavior, and lead into a final information-entry step.
- The final checkout/info page can be a **dead end after entering information**. No live payment or backend processing is required right now.

---

## Screenshot → Site Mapping (April 8 Build)

7 razer.com screenshots were provided. All patterns implemented as Phantm.

| Screenshot | Razer Reference | Phantm Implementation | Status |
|---|---|---|---|
| 1 | Blade 16 homepage hero (horizontal split, full-bleed) | `index.html` hero--blade → `.hero-split` class, "Only At Phantm" badge | ✅ Done |
| 2 | Viper V4 Pro hero (dual colorway, reversed layout) | `index.html` hero--viper → `.hero-split.row-reverse`, red glow | ✅ Done |
| 3 | Raiju V3 Pro PDP — color selector, protection upsell, top picks | `product.html` — variants, upsell, top picks modules | ✅ Done |
| 4 | Enki chair — lifestyle room photo section | `product.html?id=spectre-x` — image slot added, needs photo | ✅ Slot done, photo needed |
| 5 | BlackShark V3 Pro PDP — platform/variant selector, awards | `product.html` — variant selector + awards badges module | ✅ Done |
| 6 | Best-selling keyboards carousel | `store.html` — "Fresh Off The Line" carousel above tabs | ✅ Done |
| 7 | Headset grid with NEW badge overlay | `store.html` cards — `.cc-badge-overlay` on carousel | ✅ Done |

---

## Components Added (April 8)

### index.html — Hero upgrades
All non-chair heroes use `.hero-split` class — horizontal layout, content left, visual slot right.
- hero--blade: "Only At Phantm" gold badge, `hero-img-slot` with teal glow + AI prompt comment
- hero--viper: `row-reverse` so image is left, text right. Red glow slot.
- hero--audio: Standard split, purple/indigo glow slot.

### store.html — "Fresh Off The Line" Carousel
- `<div id="storeFeatured">` lives above category tabs
- Populated by `initStore()` in `script.js` — selects all `badge:"NEW"` products
- Cards have: glow visual, NEW badge overlay, name, sub, price, Learn More + Buy CTA

### product.html — 4 New PDP Modules (all injected by inline script)
1. **Color / Variant Selector** — reads `COLOR_OPTIONS[p.tag]`; styled swatches with dots
2. **Protection Upsell** — "Phantm Care Protection" 2-yr or none; auto-priced at ~12% of product
3. **Awards Badges** — reads `AWARDS[p.tag]`; icons + source + label; hidden if not defined for type
4. **Top Picks With Your Purchase** — reads `TOP_PICKS_IDS[p.tag]`; 4-item 2×2 grid

---

## Build Status (April 8, 2026)

All pages live:
- `index.html` — 4 hero sections (chair CSS render + 3 split-layout image slots), lifestyle panel
- `store.html` — "Fresh Off The Line" carousel + category tabs + 18-product grid
- `cart.html` — Cart with qty controls, order summary sidebar, checkout button
- `checkout.html` — Contact + address form, dead-end confirmation
- `product.html` — Dynamic detail page for ALL 18 products: subnav, hero, video placeholder, **variant selector**, **protection upsell**, **awards badges**, features, specs, compare, **top picks**, sticky buy bar
- `support.html` — Search hero, 6 topic cards, FAQ accordion, contact sidebar
- `chair.html` — Redirect → `product.html?id=spectre-x`

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

**Completed last session:** All 7 screenshot UI patterns implemented.

**Priority queue for next session:**

1. **Images** — Generate/source 18 product photos using prompts above. Drop into `src/images/{id}.jpg`. The image slot is already wired; SVG disappears automatically when the image loads.
2. **Spectre X lifestyle room photo** — Drop as `src/images/spectre-x-room.jpg` and wire into the hero--chair section.
3. **Platform selector for headsets** — Screenshots showed PC / Xbox / PlayStation tab row. Can be added as a second row in the variant section; add `PLATFORM_OPTIONS` object to script.js for Headset type.
4. **Push to GitHub Pages** — `git add -A && git commit -m "…" && git push origin homepage-jessie`
5. **GCP RAG Agent** (Pavel) — Not started
6. **Excel forecast** (Mason) — Not started
7. **Kickstarter page** — Not started
8. **SCRUM role assignment** — Not started

**Quick test checklist before push:**
- [ ] `index.html` — hero--blade shows left/right split with "Only At Phantm" badge
- [ ] `index.html` — hero--viper shows reversed split (image left, text right)
- [ ] `store.html` — "Fresh Off The Line" carousel appears above tabs with NEW-badged products
- [ ] `product.html?id=bs-v3` — variant swatches, protection upsell, awards badges, top picks all render
- [ ] `product.html?id=spectre-x` — chair-specific content correct, top picks show lifestyle items
- [ ] `cart.html` — no regressions on add/remove
- [ ] Mobile 390px — heroes stack vertically, carousel scrolls horizontally
