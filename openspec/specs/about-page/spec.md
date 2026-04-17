## ADDED Requirements

### Requirement: About page hero
The about page SHALL open with a hero section containing an eyebrow, a display headline with an italic accent word, and a lead paragraph.

#### Scenario: Hero headline uses display font
- **WHEN** the about page loads
- **THEN** `<h1>` renders in Fraunces at `--text-display` with `--leading-display` line height

### Requirement: Photo frame
The about page SHALL include a framed portrait photo with a decorative border or offset effect.

#### Scenario: Photo renders with frame treatment
- **WHEN** the photo frame section renders
- **THEN** a portrait image is displayed with a visible frame offset or border using `--accent` or `--border`

### Requirement: Intro grid and story section
The about page SHALL include a two-column intro grid with a brief statement and a full-text story section with multiple paragraphs.

#### Scenario: Story section uses narrow container
- **WHEN** the story text renders
- **THEN** it is constrained to `--container-narrow` or similar for readability (max ~760px)

### Requirement: Principles section
The about page SHALL include a principles section listing core working values or design principles.

#### Scenario: Principles are listed with headings
- **WHEN** the principles section renders
- **THEN** each principle has a title and a supporting description

### Requirement: Timeline
The about page SHALL include a career timeline section with dated entries.

#### Scenario: Timeline entries have dates
- **WHEN** the timeline renders
- **THEN** each entry shows a year or date range and a company/role description

### Requirement: Outside work section
The about page SHALL include a section covering interests, activities, or projects outside of professional design work.

#### Scenario: Outside work section renders
- **WHEN** the page is scrolled to the outside-work section
- **THEN** content describing non-work activities or interests is visible

### Requirement: Skills section
The about page SHALL include a skills section listing tools, disciplines, or competencies.

#### Scenario: Skills are grouped or listed
- **WHEN** the skills section renders
- **THEN** skills are presented in a scannable format (tags, list, or grid)
