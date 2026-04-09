---
name: Image Generation Runbook
description: Private-env setup, prompt tracking, output filenames, and stop-state for storefront product image generation
type: project
---

## Purpose

This file is the durable handoff for storefront image generation.

Use it to track:
- how secrets are handled safely
- which product images still need to be generated
- the exact output filenames expected by the storefront
- the prompt source
- what blocked the last generation attempt
- what the next session should do first

---

## Privacy / Secret Handling

- Real API keys should live only in a local private file such as `.env.local`
- `.env.local` is gitignored
- Do not paste real API keys into markdown files, source files, or chat
- Do not commit secrets to the repo

Tracked file:
- `.env.local.example` — safe template only

Private local file:
- `.env.local` — real values, local only, never commit

---

## Current Blockers

Checked on April 9, 2026:

- `OPENAI_API_KEY` was **missing** from the current shell environment
- Python `openai` package was **not installed**
- `uv` was **not installed**

That means the CLI fallback path is not ready yet, but the repo is now prepared for it.

---

## Prompt Source

Primary source of truth for prompts:
- `docs/storefront-direction.md`

Supporting filename map:
- `src/images/IMAGES-README.md`

This runbook duplicates the prompts below so a future session can generate images without re-reading multiple files.

---

## Output Folder

Final storefront assets belong in:
- `src/images/`

Temporary / scratch generation output belongs in:
- `tmp/imagegen/`
- `output/imagegen/`

Those temporary directories are gitignored.

---

## Private Local Setup

1. Copy `.env.local.example` to `.env.local`
2. Add your real key locally:

```bash
OPENAI_API_KEY=your_real_key_here
```

3. Load it into the shell before running generation:

```bash
set -a
source .env.local
set +a
```

4. Install the Python package once network access is available:

```bash
python3 -m pip install --user openai
```

5. Then run the bundled CLI fallback script from the imagegen skill

---

## Product Image Queue

| Product ID | Output file | Status | Prompt |
|---|---|---|---|
| `blade-16` | `src/images/blade-16.jpg` | Pending | Phantm Blade 16 gaming laptop, ultra-thin aluminum chassis, RGB keyboard glowing blue, dark studio, teal/navy atmospheric lighting, elevation angle showing screen and keyboard, no visible branding marks |
| `blade-14` | `src/images/blade-14.jpg` | Pending | Compact gaming laptop, more portable look, green RGB accents, dark carbon background |
| `blade-18` | `src/images/blade-18.jpg` | Pending | Large 18-inch gaming laptop, powerful aesthetic, purple/violet atmospheric glow, premium studio shot |
| `viper-v4` | `src/images/viper-v4.jpg` | Pending | Two gaming mice side-by-side (matte black + mercury white), angled 3/4 view on dark charcoal surface, red LED glow under sensor, clean product photography, no Razer logos |
| `da-v4` | `src/images/da-v4.jpg` | Pending | Ergonomic right-hand gaming mouse, soft shape, rose/pink atmospheric glow, dark background |
| `bw-v4` | `src/images/bw-v4.jpg` | Pending | Full-size mechanical keyboard top-down shot, green optical switches visible through keycaps, green per-key RGB glow, dark matte surface |
| `hunts-8k` | `src/images/hunts-8k.jpg` | Pending | Tenkeyless optical gaming keyboard, floating from dark background, blue/white key illumination, modern clean aesthetic |
| `ds-v2` | `src/images/ds-v2.jpg` | Pending | Slim low-profile wireless keyboard, sleek chiclet keys, purple side-glow lighting |
| `bs-v3` | `src/images/bs-v3.jpg` | Pending | Over-ear gaming headset (black chassis, green accents), floating against dark indigo background, dramatic rim lighting from below, no Razer branding |
| `kraken-v4` | `src/images/kraken-v4.jpg` | Pending | Large gaming headset with oversized plush ear cups, green RGB lighting on cups, green atmospheric glow |
| `nommo-v2` | `src/images/nommo-v2.jpg` | Pending | Pair of desktop gaming speakers with matching subwoofer, teal/cyan RGB underglow, dark desk setting |
| `wolv-v3` | `src/images/wolv-v3.jpg` | Pending | Pro gaming controller (Xbox form factor), matte black with green accent lines, angled beauty shot, dark background |
| `kishi-v3` | `src/images/kishi-v3.jpg` | Pending | Mobile phone gaming controller clip, rose/magenta accent color, attached to smartphone or floating |
| `tb5-dock` | `src/images/tb5-dock.jpg` | Pending | Thunderbolt 5 dock hub, multiple ports visible on front panel, blue port glow, dark desk context |
| `firefly` | `src/images/firefly.jpg` | Pending | RGB gaming mouse mat, colorful addressable LED edge lighting (rainbow or green), flat angle shot from above |
| `gigantus` | `src/images/gigantus.jpg` | Pending | Large cloth mouse mat, simple flat aerial shot, matte surface texture visible |
| `hyperflux` | `src/images/hyperflux.jpg` | Pending | Wireless charging mouse mat, subtle charging glow indicator, minimalist dark surface |
| `spectre-x` | `src/images/spectre-x.jpg` | Added | Phantm Spectre X racing-shell gaming chair, matte black with green RGB base and accent lines, dramatic studio lighting, gaming room atmosphere with ultrawide monitors in background, no Razer logos anywhere |

---

## Extra Asset Queue

| Asset | Output file | Status | Prompt |
|---|---|---|---|
| Spectre X lifestyle room photo | `src/images/spectre-x-room.jpg` | Pending | Moody gaming setup room, Phantm Spectre X chair centered in frame (racing shell, black with green RGB base illuminating the floor), ultrawide curved monitor desk setup, purple/green ambient lighting from behind monitors, cinematic depth-of-field, tasteful cable management, no people in frame, no Razer branding anywhere |

---

## Recommended Generation Order

Generate in this order so the storefront improves visibly fastest:

1. `blade-16`
2. `viper-v4`
3. `hunts-8k`
4. `bs-v3`
5. `spectre-x`
6. `spectre-x-room`
7. Remaining catalog assets

---

## Exact Stop-State

No image generation API calls have been made yet in this repo session.

Preparation completed:
- private env pattern added
- `.gitignore` updated for local secrets and temp imagegen outputs
- runbook created
- prompt queue and target filenames recorded
- `src/images/spectre-x.jpg` added and wired into the homepage chair hero

Blocked on:
- local `OPENAI_API_KEY`
- Python `openai` package installation

When resuming, do this first:
1. Create `.env.local`
2. Add `OPENAI_API_KEY`
3. Load the env into the shell
4. Install `openai`
5. Start generating assets into `src/images/`
