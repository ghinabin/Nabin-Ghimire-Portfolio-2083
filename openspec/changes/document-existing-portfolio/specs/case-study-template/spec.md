## ADDED Requirements

### Requirement: Shared case study CSS
Every case study page SHALL have access to `assets/css/components/case-study.css` via the `(case-studies)` route group layout. Page-specific CSS SHALL be imported in the individual `page.jsx`.

#### Scenario: Case study layout injects shared CSS
- **WHEN** any case study page renders
- **THEN** `case-study.css` is active without being imported in the page file itself

### Requirement: Case study hero section
Each case study SHALL open with a hero section containing: an eyebrow label (project type), a display headline (`<h1>`) with an italic `<em>` accent word, a subtitle paragraph, and a case visual container.

#### Scenario: Hero headline uses display font
- **WHEN** the hero section renders
- **THEN** `<h1>` uses `font-family: var(--font-display)` (Fraunces) with `--text-display` size

#### Scenario: Italic accent word uses accent color
- **WHEN** an `<em>` is inside the hero headline
- **THEN** it renders in italic Fraunces and inherits `color: var(--accent)`

### Requirement: Meta strip
Each case study SHALL include a meta strip below the hero with labeled fields: Role, Company, Timeline, and Status.

#### Scenario: Meta labels are uppercase micro text
- **WHEN** the meta strip renders
- **THEN** each label uses `--text-micro` or `--text-label` size with `--tracking-wider` spacing

### Requirement: Case visual container
Each case study SHALL have a `.case-visual` container positioned relative with `overflow: hidden` and an `aspect-ratio` defined. Hero images SHALL use `next/image` with `fill` and `priority`.

#### Scenario: Hero image fills container without distortion
- **WHEN** the case visual renders with an image
- **THEN** the image covers the container using `object-fit: cover`

### Requirement: Surface images section
Case studies with product surfaces SHALL render each surface in a `.surface` block containing a `.surface-visual` container and a description. Surface images SHALL use `next/image` with `fill`.

#### Scenario: Surface image scales on hover
- **WHEN** the user hovers a surface block
- **THEN** the image subtly scales up (e.g. `scale(1.03)`) and desaturation is reduced

### Requirement: Next-case navigation card
Each case study page SHALL end with a `.next-case` card linking to the next case study in the rotation.

#### Scenario: Next-case card links to another project
- **WHEN** a user reaches the bottom of a case study
- **THEN** there is a clickable card with the next project's name and a link to its route

### Requirement: Consistent section spacing
Case study sections SHALL use consistent vertical spacing via CSS custom properties or utility classes defined in `case-study.css`.

#### Scenario: Sections have uniform vertical rhythm
- **WHEN** two consecutive sections render
- **THEN** the gap between them is consistent across all case studies
