## Context

The portfolio is a fully-built Next.js 15 App Router site deployed to Vercel. No specs existed before this change. This design document captures the architectural decisions already made in the implementation so future changes have a clear technical baseline.

The site serves a single purpose: present Nabin Ghimire's design work to hiring managers and potential collaborators. All decisions optimise for perceived performance, visual quality, and zero runtime complexity.

## Goals / Non-Goals

**Goals:**
- Document the CSS custom property token architecture and how light/dark mode is implemented
- Document the App Router file-system structure and shared layout hierarchy
- Document the image delivery approach (next/image, public/images/, hover interactions)
- Document the theme persistence mechanism (localStorage + anti-FOUC inline script)
- Capture decisions so they can be referenced and built upon without re-deriving from code

**Non-Goals:**
- Proposing changes to the architecture
- Documenting third-party libraries beyond their integration surface
- Defining a content management workflow

## Decisions

### Tokens-only styling
All components reference CSS custom properties (`--accent`, `--bg`, `--text`, etc.) rather than hard-coded values. Light and dark mode are implemented by overriding a single `[data-theme="dark"]` block that resets the same property names.

**Why**: Prevents per-component mode logic. Adding a third theme or changing a brand color requires editing one file (`tokens.css`).

**Alternative considered**: Tailwind dark-mode classes. Rejected because this site has bespoke design density that benefits from full CSS control and the token system already provides the same guarantee with less toolchain overhead.

### Anti-FOUC inline script
A tiny inline `<script>` runs synchronously in `<head>` before any CSS loads. It reads `localStorage` and sets `data-theme` on `<html>` in the same tick as parsing. Default HTML attribute is `data-theme="dark"`.

**Why**: Without this, users who previously chose light mode see a flash of dark content on every navigation. Setting the attribute server-side would require a server session or cookie; localStorage avoids that complexity for a static site.

**Alternative considered**: CSS `color-scheme` media query only. Rejected because it doesn't honour a stored user preference across sessions.

### App Router route group for case studies
All four case studies live under `app/(case-studies)/` with a shared `layout.jsx` that injects `case-study.css`. The route group segment is invisible in URLs.

**Why**: Case studies share a large CSS file and a specific component set. A route group lets the layout be applied exactly once without appearing in the URL (`/viveka` not `/case-studies/viveka`).

### next/image with fill prop
All portfolio visuals use `next/image` with `fill={true}` on a positioned parent container. The parent defines the frame size via `aspect-ratio` or explicit dimensions. `object-fit: cover` and `object-position` are set via CSS on the `<img>` element.

**Why**: `fill` decouples frame dimensions from image intrinsic dimensions. For art-directed crops (surface images, thumbnails) this is required. `next/image` provides automatic WebP/AVIF conversion, lazy loading, and prevents layout shift via reservation of space.

**Alternative considered**: `<img>` with `width`/`height`. Rejected because intrinsic dimensions were unknown at authoring time and the design requires a fixed-aspect crop.

### Public folder naming convention
Images live in `public/images/` with descriptive kebab-case filenames that encode context: `thumb-{project}.{ext}` for work grid thumbnails, `{project}-surface-{label}.{ext}` for case study surfaces, and `{project}-hero.{ext}` for hero visuals.

**Why**: Flat folder with a naming convention is simpler than nested project folders for a small site. The naming encodes usage context without requiring a manifest.

### Two-brand-color design system
Two raw brand values exist: Chartreuse (`#E1FF51`) as the dark-mode accent and vivid teal (`#006E81`) as the light-mode accent. Both are aliased to the same semantic token `--accent`. Components never reference the raw brand value — only `--accent`.

**Why**: Both colors play the same structural role (call-to-action, links, typographic emphasis) but operate on opposite backgrounds. Aliasing them to a single semantic token means a component works in both modes without any conditional logic.

## Risks / Trade-offs

- **No CMS** → All content changes require code edits and a redeploy. Acceptable for a personal portfolio with infrequent updates.
- **Static font loading via next/font** → Fraunces and Inter are loaded from Google Fonts infrastructure at build time and self-hosted in the Vercel bundle. If a font variant is added later, a new deployment is required.
- **Image files in git** → `public/images/` is tracked in git. Large images increase repo clone time. Acceptable at current scale (< 10 images). If the image count grows past ~20, moving to a CDN or Vercel Blob should be evaluated.
- **CSS-only dark mode** → The `data-theme` attribute is the sole mechanism. If a future feature needs server-aware theme (e.g., OG image generation matching user theme), the current localStorage approach will not work without a cookie.

## Open Questions

- (None outstanding — this change is documenting existing decisions, not proposing new ones)
