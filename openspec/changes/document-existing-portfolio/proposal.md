## Why

The portfolio has been fully built and shipped as a Next.js 15 App Router site. No specs exist yet — this change documents every capability that's already live so future changes have a clear baseline to build on.

## What Changes

- Document the design token system (light/dark mode, all CSS custom properties)
- Document the site architecture (pages, routing, shared components)
- Document the case study template pattern used across all four case studies
- Document the image/asset system and conventions
- Document the navigation and theme toggle behaviour
- Document the contact page and channel structure

## Capabilities

### New Capabilities

- `design-tokens`: The CSS custom property system — color, typography, spacing, motion, shadows, radii — with light and dark mode values
- `site-architecture`: App Router structure, route groups, page inventory, shared layout
- `case-study-template`: Shared layout, section patterns, hero visual, meta strip, surface images, next-case card
- `navigation`: Sticky nav, logo, links, active state, theme toggle, anti-FOUC script
- `home-page`: Hero, work grid, work card thumbnails (CSS + real image), about strip
- `about-page`: Hero, photo frame, intro grid, story, principles, timeline, outside work, skills
- `contact-page`: Hero, primary email block, channels grid, good-to-know, quiet close
- `image-asset-system`: Public folder conventions, filename patterns, Next.js Image usage, hover interactions

### Modified Capabilities

(none — this is the first spec pass)

## Impact

- `openspec/specs/` — 8 new spec files created
- No application code changes
- Provides baseline for all future `/opsx:propose` changes
