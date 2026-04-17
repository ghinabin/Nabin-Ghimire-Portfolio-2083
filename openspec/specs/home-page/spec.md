## ADDED Requirements

### Requirement: Home page hero section
The home page SHALL open with a hero section containing a display headline, a lead paragraph, and a call-to-action that scrolls to the work grid.

#### Scenario: Display headline renders with accent word
- **WHEN** the home page loads
- **THEN** the headline uses `--text-display` Fraunces with at least one italic `<em>` word styled in `var(--accent)`

### Requirement: Work grid with case study cards
The home page SHALL include a `#work` anchor section containing a grid of work cards. Each card SHALL link to its case study page.

#### Scenario: Work grid has at least four cards
- **WHEN** the work section renders
- **THEN** four project cards are visible: Viveka, DOCS.ink, Find Care, and Claims

#### Scenario: Card link navigates to case study
- **WHEN** a user clicks a work card
- **THEN** the browser navigates to the corresponding case study route

### Requirement: Work card thumbnails using next/image
Work card thumbnails SHALL use `next/image` with `fill` inside a positioned container. Images SHALL start slightly zoomed and desaturated and return to natural state on hover.

#### Scenario: Thumbnail fills the card visual area
- **WHEN** a work card renders with a real image
- **THEN** the image covers the container with `object-fit: cover` and no whitespace

#### Scenario: Hover reveals the image naturally
- **WHEN** the user hovers a work card
- **THEN** the image scales toward 1.0, saturation and brightness increase to 100%

#### Scenario: Hover overlay rises from bottom
- **WHEN** the user hovers a work card
- **THEN** a dark gradient overlay on the `::after` pseudo-element becomes visible, increasing perceived depth

### Requirement: About strip
The home page SHALL include a brief about strip section below the work grid with a short bio and a link to the full about page.

#### Scenario: About strip links to /about
- **WHEN** a user clicks the about strip CTA
- **THEN** they navigate to `/about`
