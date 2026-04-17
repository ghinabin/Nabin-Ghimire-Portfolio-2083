## ADDED Requirements

### Requirement: Contact page hero
The contact page SHALL open with a hero section containing an eyebrow, a display headline with an italic accent word, and a lead paragraph.

#### Scenario: Hero headline renders with italic accent
- **WHEN** the contact page loads
- **THEN** `<h1>` contains at least one `<em>` word rendered in italic Fraunces with `color: var(--accent)`

### Requirement: Primary email block
The contact page SHALL include a prominent primary contact card on a `--bg-muted` background with the primary email address as a large mailto link.

#### Scenario: Email link is the primary CTA
- **WHEN** the contact page renders
- **THEN** the email link is visually dominant, uses Fraunces display sizing, and has `href="mailto:..."` pointing to the primary address

#### Scenario: Email card uses muted background
- **WHEN** the primary contact card renders
- **THEN** its background is `var(--bg-muted)` distinct from the page background

### Requirement: Channels grid
The contact page SHALL include a channels grid with at least three contact options (e.g. email, LinkedIn, WhatsApp) displayed as cards.

#### Scenario: Each channel card has an icon, label, and link
- **WHEN** the channels grid renders
- **THEN** each card shows a platform icon, the platform name, and a clickable link or handle

#### Scenario: Channels are displayed in a grid layout
- **WHEN** the channels section renders on a wide viewport
- **THEN** cards are arranged in a multi-column grid

### Requirement: Good-to-know section
The contact page SHALL include a "good to know" section with practical information about availability, response time, or working preferences.

#### Scenario: Good-to-know items render as a grid
- **WHEN** the section renders
- **THEN** at least four items are displayed with short labels and descriptions

### Requirement: Quiet close
The contact page SHALL end with a brief closing statement or sign-off that gives the page a human finish.

#### Scenario: Closing renders at page bottom
- **WHEN** a user scrolls to the bottom of the contact page
- **THEN** a short closing text is visible above the footer
