## ADDED Requirements

### Requirement: Public images folder
All site images SHALL be stored in `public/images/`. The directory SHALL be tracked in git. A `.gitkeep` file SHALL maintain the directory if it becomes empty.

#### Scenario: Images are served at /images/ path
- **WHEN** `next/image` or an `<img>` tag references `/images/filename.ext`
- **THEN** the browser receives the file from the Next.js public asset server

### Requirement: Filename naming convention
Image filenames SHALL follow kebab-case patterns that encode their context:
- Work grid thumbnails: `thumb-{project}.{ext}`
- Case study hero visuals: `{project}-hero.{ext}`
- Case study surface images: `{project}-surface-{label}.{ext}`

#### Scenario: Thumbnail filename is predictable
- **WHEN** adding a new project thumbnail
- **THEN** the file is named `thumb-{project}.{ext}` and referenced consistently in `app/page.jsx`

#### Scenario: Surface image filename encodes context
- **WHEN** adding a case study surface image
- **THEN** the filename includes both the project name and the surface label (e.g. `docsink-surface-builder.webp`)

### Requirement: next/image usage
All portfolio images SHALL use the Next.js `<Image>` component from `next/image`. Direct `<img>` tags SHALL NOT be used for content images.

#### Scenario: Image uses fill prop with positioned parent
- **WHEN** an image is placed inside a fixed-aspect container
- **THEN** `<Image>` uses `fill={true}` and the parent has `position: relative` (or `absolute`)

#### Scenario: Hero images use priority prop
- **WHEN** an image appears above the fold
- **THEN** `<Image>` includes `priority={true}` to preload it

#### Scenario: Sizes prop is defined
- **WHEN** a fill image is rendered
- **THEN** the `sizes` prop is set to an appropriate descriptor (e.g. `"(max-width: 768px) 100vw, 1120px"`)

### Requirement: Default image visual treatment
Images SHALL start in a slightly zoomed, slightly desaturated state and transition to their natural state on hover.

#### Scenario: Normal state applies subtle filter
- **WHEN** an image renders without hover
- **THEN** CSS applies approximately `saturate(0.8) brightness(0.95)` and `scale(1.05)` or similar

#### Scenario: Hover reveals full natural image
- **WHEN** the user hovers the image container
- **THEN** the image transitions to `saturate(1) brightness(1)` and `scale(1.0)` using `--ease`

### Requirement: Hover overlay
Image containers that use hover interactions SHALL use a CSS `::after` pseudo-element as a dark gradient overlay. The overlay opacity SHALL increase on hover.

#### Scenario: Overlay rises on hover
- **WHEN** the user hovers a work card or case visual
- **THEN** a gradient from transparent to semi-opaque dark rises from the bottom of the image

#### Scenario: Overlay does not block interaction
- **WHEN** the overlay is visible
- **THEN** it has `pointer-events: none` so it does not intercept clicks
