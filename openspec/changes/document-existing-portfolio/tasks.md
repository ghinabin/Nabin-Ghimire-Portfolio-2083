## 1. Design Token Spec

- [ ] 1.1 Verify `assets/css/tokens.css` matches the design-tokens spec (semantic aliases, both mode palettes, fluid scale, motion/radius/shadow tokens)
- [ ] 1.2 Confirm no component CSS file uses a hard-coded color value instead of a CSS custom property

## 2. Site Architecture Spec

- [ ] 2.1 Verify all seven routes (`/`, `/about`, `/contact`, `/viveka`, `/docsink`, `/claims`, `/findcare`) resolve without 404
- [ ] 2.2 Confirm `app/layout.jsx` imports CSS in the correct order: tokens → base → layout → components
- [ ] 2.3 Confirm `(case-studies)/layout.jsx` injects `case-study.css` and that page files do not re-import it

## 3. Navigation Spec

- [ ] 3.1 Verify nav is sticky and stays visible on scroll across all pages
- [ ] 3.2 Confirm `aria-current="page"` is applied to About and Contact links when active
- [ ] 3.3 Verify theme toggle switches `data-theme` on `<html>` and persists to `localStorage`
- [ ] 3.4 Verify anti-FOUC script fires before CSS paint and reads `ng-theme` from localStorage
- [ ] 3.5 Confirm skip link is the first focusable element and links to `#main`

## 4. Case Study Template Spec

- [ ] 4.1 Verify each case study has: eyebrow, `<h1>` with `<em>`, subtitle, meta strip, case visual, and next-case card
- [ ] 4.2 Confirm surface image containers have `position: relative` and images use `next/image` with `fill`
- [ ] 4.3 Verify hover scale and filter transitions work on surface images

## 5. Page Specs

- [ ] 5.1 Verify home page hero, work grid (4 cards), and about strip are present
- [ ] 5.2 Confirm work card thumbnails use `next/image` with hover zoom/filter/overlay interaction
- [ ] 5.3 Verify about page contains all required sections: hero, photo frame, intro grid, story, principles, timeline, outside work, skills
- [ ] 5.4 Verify contact page contains: hero, primary email block, channels grid, good-to-know, quiet close
- [ ] 5.5 Confirm contact page channels grid has at least three channels with icons and links

## 6. Image Asset System Spec

- [ ] 6.1 Verify all images in `public/images/` follow the kebab-case naming convention
- [ ] 6.2 Confirm all `<Image>` uses have `fill`, `sizes`, and `priority` (where above-fold) set correctly
- [ ] 6.3 Verify hover overlay `::after` pseudo-elements have `pointer-events: none`
- [ ] 6.4 Confirm normal-state images have `saturate` and `brightness` filter and a slight `scale` applied via CSS
