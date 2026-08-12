# Design System — Karthikeya's Games Galaxy (KGG)

## Product Context
- **What this is:** Marketing site + booking flow for a premium walk-in gaming lounge in Tirupati (PS5, Xbox, Switch, racing, VR, board games).
- **Who it's for:** Local gamers, friend squads, families booking a night out — people deciding whether to visit *tonight*.
- **Space/industry:** Gaming lounge / entertainment venue (peers: Olympus, LevelUp cafes, Topgolf-style destination venues).
- **Project type:** Marketing site with conversion to WhatsApp booking.

## Aesthetic Direction
- **Direction:** Hot Daylight Premiere
- **Decoration level:** Intentional (grain/light falloff, full-bleed cinematic frames; no HUD chrome)
- **Mood:** Cool daylight campaign energy with ticket-stamp heat. First feeling: *I need a seat tonight* (FOMO / envy), not “cool website.”
- **Memorable thing:** Can't wait to visit.
- **Reference sites:** Topgolf (book-tonight hero discipline); category anti-refs: neon-void gaming lounge templates.

## Typography
- **Display/Hero:** Syne ExtraBold — odd, loud, non-enterprise brand voice
- **Body:** General Sans Regular–Medium — clean hospitality UI
- **UI/Labels:** General Sans Medium; small caps via tracking for meta labels
- **Data/Tables:** General Sans with `tabular-nums` (prices, counters)
- **Code:** Not primary; avoid mono HUD chrome on marketing surfaces
- **Loading:** Syne via `next/font/google`; General Sans via Fontshare CDN
- **Scale:**
  - Display: clamp(2.75rem, 7vw, 5.25rem)
  - H2: clamp(2rem, 4vw, 3.25rem)
  - H3: 1.5–1.875rem
  - Body: 1–1.125rem
  - Label: 0.7–0.75rem / tracking 0.14–0.18em uppercase

## Color
- **Approach:** Restrained (one hot accent + cool daylight neutrals)
- **Primary accent:** `#FF2E00` — vermillion ticket-stamp / FOMO CTA
- **Secondary voltage:** `#00C2FF` — “tonight / live” signals only (sparingly)
- **Neutrals (cool daylight):**
  - bg `#F3F7FB`
  - surface `#FFFFFF`
  - ink `#0B1424`
  - muted `#5C6B7A`
  - rule `rgba(11, 20, 36, 0.10)`
- **Accent ink (on vermillion):** `#FFFFFF`
- **Semantic:** success `#0F7A4A`, warning `#C47A00`, error `#C81E1E`, info `#00C2FF`
- **Dark chapter:** Full-bleed ink (`#0B1424`) allowed for manifesto / ScrollBurnText only — not the default site chrome
- **Dark mode:** Optional preview only; production default is daylight

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable–spacious
- **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(96)

## Layout
- **Approach:** Creative-editorial / poster-first for marketing; hybrid grid for booking
- **First viewport:** One composition — brand, one headline, one short line, one CTA, one full-bleed cinematic plane. No cards, stats strips, or secondary promos in the hero.
- **Grid:** 12-col conceptual; content max `1120–1280px`
- **Border radius:** sm 6px · md 8px · lg 12px · xl 16px (avoid pill-everything)
- **Imagery:** Campaign cinema (graded close-ups, motion, video posters) — not documentary venue walkthroughs as the hero

## Motion
- **Approach:** Intentional–expressive
- **Easing:** enter ease-out · exit ease-in · move ease-in-out
- **Duration:** micro 50–100ms · short 150–250ms · medium 250–400ms · long 400–700ms
- **Signature moves:** Soft parallax/drift; one hard accent flash on load/hover; ImageCardFan lift/select; ScrollBurnText glyph burn (prefers-reduced-motion → static stack)
- **Anti-patterns:** Neon HUD scanlines, decorative blob noise, purple gradients, 3-column icon grids

## Component notes
- **ImageCardFan:** Use for platforms / experiences — cinematic card faces, hospitality side copy
- **ScrollBurnText:** Use for manifesto / excitement chapter on ink background only

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-08-12 | Hot Daylight Premiere system | Owner rejected dark gold scroll-film; wants FOMO + rich look without flat room photos or neon clones |
| 2026-08-12 | Syne + General Sans + vermillion `#FF2E00` | Loud brand + clean booking + ticket-stamp heat |
| 2026-08-12 | Adopt ImageCardFan + ScrollBurnText | Interactive platform fan + cinematic copy burn for excitement |
