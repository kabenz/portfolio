# ADR 002 — Cross-Browser PDF Export Validation

**Status:** Accepted  
**Date:** 2026-03-27  
**Route:** `/cv`

---

## Context

Following the adoption of `react-to-print` (ADR 001), the PDF export output was validated
across Chrome, Edge, and Firefox to identify and fix rendering inconsistencies. All three
browsers use the same underlying approach (`window.print()` via an injected iframe) but
differ in how they apply `@media print` CSS — particularly around background graphics,
page-break control, and color-scheme handling.

---

## Findings

### Issue 1 — Background colors / graphics not printed (Chrome, Edge, Safari)

**Symptom:** Skill-chip backgrounds (`.tech-chip`), experience-tag backgrounds
(`.cv__exp-tag`, `.cv__proj-tag`), and the avatar circle (`.cv__avatar`) were not printed
in Chrome and Edge unless the user manually enabled "Background graphics" in the print
dialog.

**Root cause:** Chromium-based browsers (and Safari/WebKit) suppress background colors and
images by default in print mode unless the author explicitly declares
`-webkit-print-color-adjust: exact` or the modern `print-color-adjust: exact`.

**Fix:** Added to `@media print` in `src/index.css`:
```css
body {
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
```
Both declarations are required: `-webkit-print-color-adjust` for Chrome, Edge, and Safari;
`print-color-adjust` for Firefox (≥ 97) and the CSS standard.

---

### Issue 2 — Avatar gradient not printing reliably

**Symptom:** The `.cv__avatar` initials circle used a CSS gradient variable
(`var(--color-accent-gradient)`) as its background. Even with `print-color-adjust: exact`,
gradients referencing unresolved CSS custom properties can render incorrectly or as a
transparent/white box in some print engines.

**Fix:** In `src/components/CV/CV.css` `@media print`, the background is now explicitly set
to a solid colour:
```css
.cv__avatar {
  width: 60px;
  height: 60px;
  background: #6c63ff;
}
```

---

### Issue 3 — No typographic widow/orphan control

**Symptom:** Across all three browsers, short single-line "orphan" text could appear alone
at the bottom of a page (or "widow" alone at the top of the next page) when long experience
bullet-point lists split across a page break.

**Fix:** Added to `@media print` in `src/index.css`:
```css
body {
  orphans: 2;
  widows: 2;
}
```
This instructs the browser to keep at least 2 lines together before or after a page break.

---

### Issue 4 — Dark-mode OS preference could interfere with print colours

**Symptom:** On systems with a dark OS colour preference, some browsers may apply
forced-colours or dark-mode adjustments to elements with unspecified foreground/background
colours, even in print mode.

**Fix:** Added to `@media print` in `src/index.css`:
```css
:root {
  color-scheme: light;
}
```
This explicitly opts the printed output into the light colour scheme, ensuring consistent
rendering regardless of OS or browser dark-mode settings.

---

### Known limitation — `@page { size: A4 }` ignored in Firefox

**Symptom:** Firefox does not implement the `size` descriptor inside `@page`. The printed
page size therefore follows the system print dialog setting rather than being forced to A4.

**Impact:** Low — users printing from Firefox can still select A4 in the native print
dialog. The layout is already correct at standard A4 dimensions.

**Decision:** No code change. The limitation is a browser gap, not a stylesheet defect,
and workarounds (e.g. a user-facing note) would add friction with little benefit.

---

## Summary of changes

| File | Change |
|---|---|
| `src/index.css` | Added `@media print` block: `color-scheme: light`, `print-color-adjust: exact`, `-webkit-print-color-adjust: exact`, `orphans: 2`, `widows: 2` |
| `src/components/CV/CV.css` | In `@media print`, set `.cv__avatar { background: #6c63ff }` to replace unresolvable gradient |

---

## Consequences

- Background colours and graphics now print without requiring the user to enable "Background
  graphics" in the Chrome/Edge/Safari print dialog.
- The avatar circle reliably renders as a solid purple disc across all tested browsers.
- Improved typography at page breaks (fewer isolated lines).
- Light-mode colours are enforced in all print output regardless of OS settings.
