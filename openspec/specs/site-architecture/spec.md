## ADDED Requirements

### Requirement: Next.js 15 App Router file structure
The site SHALL use Next.js 15 App Router conventions. All pages SHALL be defined as `page.jsx` files within `app/`. Shared UI SHALL be defined as `layout.jsx` files.

#### Scenario: Root layout wraps all pages
- **WHEN** any page is rendered
- **THEN** it is wrapped by `app/layout.jsx` which provides `<html>`, `<head>`, `<body>`, `<Nav>`, `<Footer>`, and global CSS imports

#### Scenario: Page routes match directory names
- **WHEN** a user navigates to `/about`
- **THEN** `app/about/page.jsx` is rendered within the root layout

### Requirement: Route group for case studies
All case studies SHALL live under `app/(case-studies)/` using a route group. The route group segment SHALL NOT appear in the URL.

#### Scenario: Case study URL has no group prefix
- **WHEN** a user navigates to `/viveka`
- **THEN** `app/(case-studies)/viveka/page.jsx` is rendered; the URL does not contain `case-studies`

#### Scenario: Case study layout applies automatically
- **WHEN** any page under `app/(case-studies)/` renders
- **THEN** `app/(case-studies)/layout.jsx` runs and injects `case-study.css`

### Requirement: Page inventory
The site SHALL include exactly these routes at launch: `/` (home), `/about`, `/contact`, `/viveka`, `/docsink`, `/claims`, `/findcare`.

#### Scenario: All routes resolve without 404
- **WHEN** each of the seven routes is visited
- **THEN** a page renders with site-wide Nav and Footer

### Requirement: Global CSS import order
Global CSS SHALL be imported in `app/layout.jsx` in this order: `tokens.css`, `base.css`, `layout/container.css`, component CSS files. Page-specific CSS SHALL be imported in each `page.jsx`.

#### Scenario: Tokens load before any component CSS
- **WHEN** the browser parses stylesheets
- **THEN** `tokens.css` is available before any component references its custom properties

### Requirement: Font loading via next/font
Fraunces and Inter SHALL be loaded via `next/font/google` and injected as CSS variables `--font-display` and `--font-body` on `<html>`. `display: swap` SHALL be used.

#### Scenario: Font variables available globally
- **WHEN** any component applies `font-family: var(--font-display)`
- **THEN** Fraunces is used with no FOUT after initial load

#### Scenario: Fonts are self-hosted
- **WHEN** the site is deployed
- **THEN** next/font serves font files from the Vercel origin, not from Google's CDN

### Requirement: Page metadata
The root layout SHALL define default `title` and `description` metadata. Individual pages may override these.

#### Scenario: Default title is set
- **WHEN** a page does not define its own metadata
- **THEN** the browser tab shows "Nabin Ghimire — Senior Product Designer"
