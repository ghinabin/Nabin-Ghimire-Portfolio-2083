## ADDED Requirements

### Requirement: Sticky navigation header
The nav SHALL be a `<header>` element with `position: sticky; top: 0` and a `z-index` matching `--z-nav`. It SHALL span the full viewport width with a constrained inner `<div class="container nav-inner">`.

#### Scenario: Nav stays visible on scroll
- **WHEN** a user scrolls a long page
- **THEN** the nav remains anchored to the top of the viewport

### Requirement: Nav items and logo
The nav SHALL contain: a logo link ("Nabin Ghimire") linking to `/`, a "Work" link to `/#work`, an "About" link to `/about`, a "Contact" link to `/contact`, and a theme toggle button.

#### Scenario: Logo links to home
- **WHEN** the user clicks the logo text
- **THEN** they navigate to `/`

#### Scenario: Work link scrolls to section
- **WHEN** the user clicks "Work"
- **THEN** the browser navigates to `/#work` (hash anchor on home page)

### Requirement: Active state on nav links
The `<Link>` components for About and Contact SHALL apply `aria-current="page"` when the current pathname matches their route. The Work link SHALL NOT show an active state.

#### Scenario: About link is marked current on /about
- **WHEN** the user is on `/about` or any sub-path of `/about`
- **THEN** the About nav link has `aria-current="page"`

#### Scenario: Contact link is marked current on /contact
- **WHEN** the user is on `/contact`
- **THEN** the Contact nav link has `aria-current="page"`

### Requirement: Theme toggle button
The nav SHALL include a `<button class="theme-toggle">` that switches between light and dark mode. It SHALL display a moon icon in light mode and a sun icon in dark mode. Both SVG icons SHALL be in the DOM simultaneously and toggled via CSS.

#### Scenario: Clicking toggle switches theme
- **WHEN** the user clicks the theme toggle
- **THEN** `data-theme` on `<html>` changes from "dark" to "light" or vice versa, and the new preference is saved to `localStorage`

#### Scenario: Correct icon is shown
- **WHEN** dark mode is active
- **THEN** the sun icon is visible and the moon icon is hidden via CSS

#### Scenario: Correct icon is shown in light mode
- **WHEN** light mode is active
- **THEN** the moon icon is visible and the sun icon is hidden via CSS

### Requirement: Theme persistence and anti-FOUC
The root layout SHALL inject an inline `<script>` in `<head>` that reads `localStorage` for the saved theme key `ng-theme` before any CSS paint. The `<html>` element SHALL have `data-theme="dark"` as a default HTML attribute and `suppressHydrationWarning`.

#### Scenario: Stored light preference loads without flash
- **WHEN** a user with saved light mode preference loads any page
- **THEN** the page renders in light mode immediately with no dark flash

#### Scenario: System preference is respected as fallback
- **WHEN** no `ng-theme` key exists in localStorage
- **THEN** the anti-FOUC script reads `prefers-color-scheme` and applies the matching theme

### Requirement: Skip link
A visually-hidden skip link (`<a href="#main" class="skip-link">`) SHALL be the first focusable element in `<body>`.

#### Scenario: Skip link is reachable by keyboard
- **WHEN** a keyboard user presses Tab on page load
- **THEN** the skip link is the first element focused
