You are working in my Next.js portfolio repo (App Router, JSX, plain CSS — no Tailwind).
Your job: apply the content-strategy files I've added to the repo to the ACTUAL case study
pages. This is a copy + structure edit, not a redesign. Preserve my voice and the existing
visual design.

## Read first (in this order)

1. Any `00_Case_Study_Playbook.md` if present — global principles.
2. The six `0X_*_Content_Strategy.md` files (Viveka, Find Care, Claims, DOCS.ink, Industrial
   Vision, Nepverse).
3. The matching pages: `app/(case-studies)/{viveka,findcare,claims,docsink,industrial-vision,
nepverse}/page.jsx` and their CSS at `assets/css/pages/*.css` plus
   `assets/css/components/case-study.css`.
4. `IMAGE-CHECKLIST.md`.

## What to change, per case study

For each page, bring it in line with its strategy file:

- **Add the labeled process beats** the strategy calls for (e.g. a "Research"/"Discovery"
  section, a standalone "Validation" section) as new `<section>`s that match the existing
  section markup and eyebrow/title pattern already used on that page.
- **Add a TL;DR block** to Viveka and Find Care using the SAME `.tldr` component markup the
  other four pages already use, so all six are consistent.
- **Rewrite outcome sections** to lead with the structural-proof numbers listed in the strategy
  file (e.g. "six button implementations → one"), then the qualitative lines. Only use numbers
  that appear in the strategy file — do not invent any.
- **DOCS.ink:** pull the signature-pad / kiosk-reset usability findings out of the "prototype
  before committing" card into their own "Validation" section, per the strategy file.
- **Industrial Vision:** change the NDA/notice line that claims "covers and spreads shown here
  are real, published work" to the softened wording in the strategy file, since real images
  aren't in yet.

## Hard rules

- **Never fabricate facts.** Wherever a strategy file has a bracketed `[Confirm: ...]` or
  `[add ...]` note, DO NOT write invented content. Instead insert it as a visible
  `{/* TODO(nabin): <the bracketed instruction> */}` comment at that spot, and leave the
  surrounding copy honest. Print a list of every TODO you inserted at the end.
- **Preserve my voice** — direct, concrete, lowercase-y. Edit and restructure; don't
  corporate-ify.
- **Don't add or download images.** Where a strategy file introduces a NEW image/diagram slot,
  add a placeholder consistent with how that page already handles placeholders — either the
  existing CSS-placeholder div pattern, OR a commented-out `<Image>` with the intended `src`
  path + descriptive `alt`. Then append the new slot to `IMAGE-CHECKLIST.md` in the same format
  as existing entries.
- **New sections may need styling.** Reuse existing classes wherever possible. If a genuinely new
  layout is required, add minimal scoped CSS to that page's `assets/css/pages/<name>.css`,
  following the existing class-naming conventions on that page. Don't restyle anything that
  already works.
- **Keep accessibility intact** — correct heading hierarchy (one h1, sequential h2/h3), keep
  existing aria labels, don't break focus order.
- **Keep all NDA notices** (only soften Industrial Vision's wording as noted).
- Do not touch unrelated files (Nav, Footer, home, about) unless a strategy file explicitly
  requires it.

## Process

- Work ONE case study at a time, in this order: claims, docsink, findcare, viveka,
  industrial-vision, nepverse.
- After each page: run the dev build / lint to confirm nothing broke, then give me a short diff
  summary (sections added, copy changed, placeholders + TODOs added) and STOP for my review
  before moving to the next.
- Do not batch all six silently.

Start with `claims`. Confirm you've read its strategy file and the page, then show me your plan
for that one page before editing.
