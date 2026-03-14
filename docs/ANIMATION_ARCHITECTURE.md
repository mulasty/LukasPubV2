# Animation Architecture

## Stack

- `GSAP` + `ScrollTrigger` for scroll storytelling and section choreography
- `Lenis` for smooth scrolling
- `Three.js` + `@react-three/fiber` for lightweight nightclub background ambience

## Scroll Story System

- `pages/index.tsx` composes the journey in sequence
- `components/StorySection.tsx` is the reusable scene wrapper
- `hooks/useScrollStory.ts` binds all `data-*` animation hooks in one place

## Reusable Motion Utilities

Defined in `lib/animation-utils.ts`:

- `fadeUp`
- `textReveal`
- `zoomParallax`
- `staggerCards`
- `neonGlow`
- `lightPulse`
- `floatingMotion`

## Parallax Layers

Each scene can opt into depth using:

- `data-parallax` for scroll-based depth movement
- `data-float` for ambient floating motion
- `data-pulse-light` for beat-like light pulses
- `data-glow` for reveal with glow scaling

## Lighting System

- `components/LightStreaks.tsx` creates 2D laser/light streak layers
- `components/BeatPulseLights.tsx` simulates beat-reactive energy bars
- `components/scene/NightclubSceneCanvas.tsx` renders a subtle 3D ambient club scene

## Performance Strategy

- WebGL is decorative and fixed behind the page
- `NightclubScene` is loaded with `ssr: false`
- mobile and reduced-motion devices keep simplified animation paths
- transforms and opacity are preferred over layout-affecting properties

## Content Safety

- Existing business data remains JSON-driven
- no event dates were invented
- `Upcoming events` still uses `TODO` where real dated events are missing
