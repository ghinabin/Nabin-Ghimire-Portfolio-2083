## ADDED Requirements

### Requirement: CSS custom property token system
The site SHALL define all visual values as CSS custom properties in `assets/css/tokens.css`. Components SHALL reference only semantic aliases, never raw brand values or hard-coded colors.

#### Scenario: Semantic alias used in component
- **WHEN** a component needs the accent color
- **THEN** it references `var(--accent)`, not `#E1FF51` or `#006E81`

#### Scenario: Brand value defined once
- **WHEN** a brand color needs to change
- **THEN** editing one property in `tokens.css` propagates the change across the entire site

### Requirement: Light mode palette
The `:root` block SHALL define a teal-tinted light mode palette derived from Gun Metal's hue (186°). The accent SHALL be vivid teal `#006E81` (~5:1 contrast on `--color-bg`).

#### Scenario: Light mode renders with readable accent
- **WHEN** `data-theme` is absent or set to any non-dark value
- **THEN** interactive elements, links, and typographic emphasis use `#006E81` and pass WCAG 2.1 AA contrast

#### Scenario: Background hierarchy
- **WHEN** content is rendered in light mode
- **THEN** `--bg` is `#EAF6F7`, `--bg-elevated` is `#F0FBFB`, and `--bg-muted` is `#D5ECF0`, producing visible depth

### Requirement: Dark mode palette override
The `[data-theme="dark"]` block SHALL redefine every semantic alias using Gun Metal (`#00272C`) as the base. Chartreuse (`#E1FF51`) SHALL be the accent with 13.2:1 contrast on the dark background.

#### Scenario: Dark mode accent is Chartreuse
- **WHEN** `data-theme="dark"` is set on `<html>`
- **THEN** `--accent` resolves to `#E1FF51` and `--accent-hover` to `#E9FF6E`

#### Scenario: All semantic aliases resolve in dark mode
- **WHEN** `data-theme="dark"` is active
- **THEN** `--bg`, `--text`, `--border`, `--bg-muted`, `--bg-elevated`, `--text-secondary`, `--text-tertiary`, `--border-subtle`, `--accent-muted` all resolve to their dark counterparts

### Requirement: Fluid typography scale
The token system SHALL provide fluid `clamp()` values for display and heading sizes that scale between a defined min and max based on viewport width.

#### Scenario: Display text scales with viewport
- **WHEN** the viewport width changes between mobile (375px) and wide (1440px)
- **THEN** `--text-display` transitions smoothly between 36px and 64px without media query jumps

#### Scenario: Static scale for UI text
- **WHEN** body, label, or fine text is rendered
- **THEN** `--text-body` (17px), `--text-sm` (15px), `--text-xs` (14px), `--text-fine` (13px), `--text-label` (12px), `--text-micro` (11px) are used as defined

### Requirement: Motion, spacing, radius, shadow tokens
The token system SHALL provide `--ease`, `--transition-*`, `--radius-*`, `--shadow-*`, `--container`, `--gutter`, and `--z-nav`/`--z-skip` tokens used consistently across all components.

#### Scenario: Consistent easing curve
- **WHEN** any animated interaction uses motion
- **THEN** it uses `--ease: cubic-bezier(0.22, 1, 0.36, 1)` or a `--transition-*` shorthand derived from it

#### Scenario: Container width is a single source
- **WHEN** any page or section needs a max-width
- **THEN** it references `var(--container)` (1120px) or `var(--container-narrow)` (720px)
