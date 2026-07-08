# Design System — Karthikeya's Games Galaxy (KGG)

## Product Context
- **What this is:** Marketing + booking site for a physical console/VR gaming lounge.
- **Who it's for:** Young gamers, families, and squads in Tirupati looking for premium walk-in or booked gaming sessions.
- **Space/industry:** Gaming lounge / game zone, but positioned against premium retail/hospitality brands rather than other neon gaming-cafe sites — that's the whole point of this direction.
- **Project type:** Marketing site with booking flow (Next.js App Router).

## Memorable Thing
Feels like walking into an Apple Store that happens to have PS5s and VR headsets — quiet confidence, not neon intensity.

## Why This Replaced v1
v1 ("Cinematic AAA Game World" — dark charcoal, ember/electric neon, HUD brackets) was rejected by the user after review: "its the same design and pattern since long time and it feels off." The venue's site has cycled through dark/neon gamer aesthetics across multiple prior redesigns (see git history — "revamp", "cinematic scroll", etc.) without ever landing. Repeating another flavor of dark-cyberpunk-gamer would be the same mistake with different hex codes. This version deliberately drops every "gaming site" visual cliche (neon dual-accent, HUD corner brackets, scanlines, dark-mode-only) in favor of premium retail/hospitality language, which is genuinely unusual in this category and therefore memorable.

## Aesthetic Direction
- **Direction:** Premium Tech-Luxury.
- **Decoration level:** Minimal — typography, whitespace, and soft material shadow do the work. No glow, no HUD motifs, no scanlines.
- **Mood:** Calm, considered, expensive-feeling. Confidence through restraint.
- **Reference sites:** apple.com/retail, high-end hospitality/members'-club sites (research notes: light-first backgrounds, one restrained accent color, generous whitespace, soft elevation shadows instead of neon borders, serif+sans pairing for an editorial/boutique feel).

## Typography
- **Display/Hero:** Fraunces (500/600 for most headings, 900 for the hero only) — a soft, warm serif with an optical-size axis. Reads editorial/boutique, the opposite of a chiseled gamer logotype.
- **Body:** Instrument Sans (400/500/600) — clean, quiet, doesn't compete with Fraunces.
- **UI/Labels:** Instrument Sans 600, uppercase + letter-spacing for eyebrows/badges (kept subtle, not neon-colored).
- **Data/Tables/Pricing:** JetBrains Mono (400/500/700, tabular-nums) — kept from v1, mono numerals still read "precise" in a premium context (think fintech/luxury watch pricing).
- **Loading:** `next/font/google` for all three (Fraunces, Instrument Sans, JetBrains Mono) — self-hosted at build time, no CDN round-trip.
- **Scale:** Hero `clamp(2.75rem, 7vw, 5.5rem)` (smaller and warmer than v1's 6.5rem chisel-max) / H2 `clamp(1.75rem, 3.5vw, 2.5rem)` / H3 `1.375rem` / body `1rem`–`1.125rem` / eyebrow-mono `0.75rem` uppercase, 0.14em tracking.

## Color
- **Approach:** Restrained — one warm neutral base, one considered accent (no dual-accent, no neon).
- **Base (paper):** `#F7F5F2` (warm off-white, not clinical pure white)
- **Surface (card):** `#FFFFFF` with soft shadow, border `rgba(22,21,19,0.08)`
- **Surface-2 (subtle tint):** `#EFEBE5`
- **Ink (text):** `#161513` (warm near-black, not pure black) / **Muted:** `#6B6660` / **Muted-2:** `#8F8A83`
- **Accent (copper):** `#C97C3D`, soft `#E8B98A`, deep `#8F5423` — used sparingly: one CTA, one underline, one icon tint per view. Never a glow/neon treatment.
- **Semantic:** success `#3D8F5F`, warning `#B8862E`, error `#B84A3D`, info = accent.
- **Dark mode:** None. This is a deliberate single-theme, light-committed design — the entire point of this direction is to stop being "another dark gaming site." Do not add a dark variant without explicit user request.

## Spacing
- **Base unit:** 8px.
- **Density:** Spacious throughout — generous whitespace is the primary signal of "premium" in this direction, more so than in v1.
- **Scale:** 2xs(4) xs(8) sm(12) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(96).

## Layout
- **Approach:** Editorial, airy — keep the structural work from the v1 design-review pass (it solved a real compositional problem): the console/VR two-panel split, the horizontal game-select carousel, the asymmetric featured-dominant pricing layout, the bento-grid highlights and gallery, the full-bleed asymmetric CTA. Re-skin all of it in this system rather than redesign the layouts from scratch.
- **Grid:** 12-col at desktop, single column below 860px. Max content width 1180px.
- **Border radius:** sm 8px (buttons), md 12px (cards), lg 20px (feature panels), full 9999px (pills/badges/nav CTA) — slightly softer than v1's sharper HUD-inspired radii.

## Motion
- **Approach:** Minimal-functional to intentional — calm, not cinematic-expressive.
- **Signature motifs:**
  - **Hover lift:** cards lift 2-4px with a softening/deepening shadow on hover — replaces v1's HUD corner-bracket motif entirely.
  - **No scanlines, no HUD brackets, no neon glow** — these are the specific v1 elements to remove.
  - **Scroll-scrubbed hero video:** keep the mechanic (already fixed for scroll-length in v1), but tone the overlay to warm/light rather than a dark cinematic gradient.
  - **3D layer:** remove the neon HUD reticle — it's the single most "gamer HUD" element and directly contradicts this brief. Hero goes back to a clean photography/video-led composition without a floating WebGL object.
- **Easing:** enter `ease-out`, exit `ease-in`, move `ease-in-out`.
- **Duration:** micro 100ms, short 200ms, medium 300ms, long 500ms — shorter than v1's cinematic timings; calm doesn't linger.
- **Always respect `prefers-reduced-motion`.**

## Content Direction (non-visual but load-bearing)
- Same as v1: replace placeholder/stock imagery with real KGG venue photography, shot with soft natural light rather than the neon color-grade v1 called for. This still stands as the single highest-leverage non-visual change.
- Keep real business content as-is: platforms (PS5/Xbox/Switch/Meta Quest/board games), pricing (₹299/hr, ₹999/3hr squad, ₹699/90min VR), location (Tirupati, Andhra Pradesh).

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-08 | Cinematic AAA Game World direction, dual ember/electric accent, single dark theme | User-selected "memorable thing" = cinematic AAA menu feel; research on PlayStation/Razer/God of War sites; dual accent maps to the two real verticals (console vs VR) |
| 2026-07-08 | Added WebGL 3D layer + refined video-scrub hero + ambient particles to motion spec | User requested more video/3D/animation on top of the base system |
| 2026-07-08 | Design-review pass: shortened hero scroll, broke uniform card grids into carousel/bento/asymmetric layouts | User felt v1 was "the same as old, just colors/text changed" — fixed structural sameness while keeping the dark aesthetic |
| 2026-07-08 | **Superseded v1 entirely** — new Premium Tech-Luxury direction: light base, single copper accent, Fraunces/Instrument Sans, no HUD/neon/scanlines | User rejected the whole dark-gamer aesthetic as stale after seeing it fixed structurally: "its the same design and pattern since long time and it feels off." Chose "Premium tech-luxury" explicitly over two other dark-adjacent options. Keeping v1's structural layouts (bento/carousel/asymmetric pricing), re-skinning visuals only. |
