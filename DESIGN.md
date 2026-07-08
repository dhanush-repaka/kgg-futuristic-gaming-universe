# Design System — Karthikeya's Games Galaxy (KGG)

## Product Context
- **What this is:** Marketing + booking site for a physical console/VR gaming lounge.
- **Who it's for:** Young gamers, families, and squads in Tirupati looking for premium walk-in or booked gaming sessions.
- **Space/industry:** Gaming lounge / game zone / LAN arcade, competing on feel against AAA game marketing sites and premium gaming-gear brands, not other local businesses.
- **Project type:** Marketing site with booking flow (Next.js App Router).

## Memorable Thing
Feels like booting up a next-gen game's main menu — not a SaaS landing page wearing gamer colors.

## Aesthetic Direction
- **Direction:** Cinematic AAA Game World.
- **Decoration level:** Expressive but disciplined — layered depth and dramatic lighting, never cluttered.
- **Mood:** Atmospheric, poster-like, HUD-inflected. Dark stage that key art and video can live inside.
- **Reference sites:** playstation.com, razer.com, godofwar.com (research notes: full-bleed cinematic hero + key art, bold condensed display type, accent color used sparingly against near-black, HUD/stat-block UI language).

## Typography
- **Display/Hero:** Unbounded (700–900) — bold, geometric, chiseled. Reads like a game logotype, not a corporate wordmark. Used at tight tracking for headlines only.
- **Body:** Plus Jakarta Sans (400/500/600/700) — clean geometric humanist, pairs with Unbounded's geometry without competing with it.
- **UI/Labels:** Plus Jakarta Sans 600/700, uppercase + letter-spacing for eyebrows/badges.
- **Data/Tables/Pricing:** JetBrains Mono (400/500/700, tabular-nums) — pricing and stats read like an in-game stat block / HUD readout.
- **Loading:** Self-host as variable-font WOFF2 (`next/font/local`) — Unbounded, Plus Jakarta Sans (+ italic), JetBrains Mono. Avoids a Google Fonts CDN round-trip and keeps weight axis in one file per family.
- **Scale:** Hero `clamp(2.75rem, 8vw, 6.5rem)` / H2 `clamp(1.875rem, 4vw, 2.75rem)` / H3 `1.5rem` / body `1rem`–`1.125rem` / eyebrow-mono `0.75rem` uppercase, 0.16em tracking.

## Color
- **Approach:** Expressive but restrained — one deep neutral base, one dual-accent system (no third competing hue).
- **Base:** `#0A0E14` (deep charcoal-blue, not pure black — gives key art and gradients somewhere to live).
- **Base-2 (deepest):** `#06080D`
- **Surface:** `#12161F` / **Surface-2 (elevated):** `#191F2C`
- **Ink (text):** `#F0F3FA` / **Muted:** `#8B93A7` / **Muted-2:** `#5B6478`
- **Ember (primary accent — console/arena, physical energy):** `#FF5A1F`, soft `#FFB37E`, deep `#C23F12`
- **Electric (secondary accent — VR/tech):** `#3DA9FC`, soft `#9ED4FF`, deep `#1E6FB8`
- **Hairline borders:** `rgba(231,235,244,0.09)` / strong `rgba(231,235,244,0.16)`
- **Semantic:** success `#3DDC97`, warning `#FFC24B`, error `#FF4D4D`, info = electric.
- **Dark mode:** This is a single-theme, dark-committed design — a game menu doesn't have a light mode. Do not build a light variant; state this as an intentional choice if asked.

## Spacing
- **Base unit:** 8px.
- **Density:** Spacious in hero/cinematic sections, comfortable in content sections, compact inside HUD stat cards and nav.
- **Scale:** 2xs(4) xs(8) sm(12) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(96).

## Layout
- **Approach:** Creative-editorial — full-bleed poster sections, asymmetric composition. Not a centered SaaS card grid.
- **Grid:** 12-col at desktop, single column below 860px. Max content width 1180px, hero content max 920px.
- **Border radius:** sm 6px (buttons), md 10px (cards/frames), lg 16px (world-split panels), full 9999px (pills/badges/nav CTA).

## Motion
- **Approach:** Expressive, purposeful, cinematic — not generic fade-ins.
- **Signature motifs:**
  - **HUD corner brackets:** hover state on cards/panels — corner brackets (border-only, ember or electric depending on context) grow and brighten on hover/focus instead of a generic shadow lift.
  - **Scanline dividers:** thin gradient hairlines between major sections, optionally with a slow animated sheen (disabled under `prefers-reduced-motion`).
  - **Scroll-scrubbed hero video:** keep and refine the existing scroll-driven video-scrub hero pattern, but the source footage must be real KGG venue/gameplay footage, color-graded to this palette — not generic stock.
  - **3D layer:** the project already ships `three`, `@react-three/fiber`, and `@react-three/drei` — use them for a lightweight WebGL layer in the hero (e.g. a floating/rotating controller or holographic HUD ring reacting to scroll/pointer, lit with ember + electric rim light), replacing the current placeholder `Minimalist3DCanvas`. Keep it performant: low poly count, capped DPR, pause when off-screen.
  - **Ambient particles:** `@tsparticles` for a sparse ember/electric particle drift in the hero background — restrained density, not a snowstorm.
- **Easing:** enter `cubic-bezier(0.16,1,0.3,1)` (ease-out, the "cinematic reveal" curve already used in the codebase), exit `ease-in`, move `ease-in-out`.
- **Duration:** micro 100ms, short 200ms, medium 350ms, long 600–900ms for hero reveals.
- **Always respect `prefers-reduced-motion`** — disable scanline sheen, particle drift, and 3D auto-rotation; keep essential state transitions.

## Content Direction (non-visual but load-bearing)
- Replace all placeholder/stock imagery (Wikipedia GTA V box art, generic Pexels "driving simulator" photo) with real KGG venue photography/video, shot cinematically and graded to this palette. This is the single highest-leverage change — a physical venue borrowing generic AAA game marketing images undercuts trust the moment someone walks in.
- Keep real business content as-is unless corrected: platforms (PS5/Xbox/Switch/Meta Quest/board games), pricing (₹299/hr, ₹999/3hr squad, ₹699/90min VR), location (Tirupati, Andhra Pradesh).

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-08 | Cinematic AAA Game World direction, dual ember/electric accent, single dark theme | User-selected "memorable thing" = cinematic AAA menu feel; research on PlayStation/Razer/God of War sites; dual accent maps to the two real verticals (console vs VR) |
| 2026-07-08 | Added WebGL 3D layer + refined video-scrub hero + ambient particles to motion spec | User requested more video/3D/animation on top of the base system; project already has three.js/R3F/tsparticles installed |
