# ADR 001 — PDF Export Strategy for the CV Page

**Status:** Accepted  
**Date:** 2026-03-27  
**Route:** `/cv`

---

## Context

The portfolio needs a way for visitors to export or print the CV page (`/cv`) as a PDF. Four approaches were evaluated:

| Approach | Description |
|---|---|
| `window.print()` | Raw browser print API |
| `react-to-print` | React wrapper around `window.print()` |
| `jspdf` | JavaScript library that generates PDFs programmatically |
| `html2canvas` + `jspdf` | Screenshots DOM to canvas, then embeds in a PDF |

---

## Decision

**Selected approach: `react-to-print`**

---

## Comparison

### `window.print()`
- ✅ Zero dependencies, built into every browser  
- ✅ Uses `@media print` CSS — vector output, selectable/searchable text  
- ⚠️ Prints the entire page; hiding non-CV elements requires extra CSS  
- ⚠️ No React lifecycle hooks (e.g., can't async-load data before print)

### `react-to-print` *(chosen)*
- ✅ Wraps `window.print()` — same vector quality, searchable text  
- ✅ Scopes printing to a specific React ref, so only the CV content is sent to the printer — no need to hide the site header/footer  
- ✅ Supports `onBeforePrint` / `onAfterPrint` callbacks for future async needs  
- ✅ Leverages the existing `@media print` CSS already in place  
- ✅ Lightweight (~8 kB minified), actively maintained, React 18/19 compatible  
- ⚠️ One additional dependency

### `jspdf`
- ✅ Full programmatic control over PDF layout  
- ❌ Does not read CSS — all styling must be re-implemented in JS  
- ❌ Significant implementation effort to recreate the existing two-column grid layout  
- ❌ Larger bundle size

### `html2canvas` + `jspdf`
- ✅ Captures styles exactly as rendered in the browser  
- ❌ Rasterises text to pixels — text is not selectable or searchable in the PDF  
- ❌ Poor rendering quality at high DPI on some browsers  
- ❌ Heaviest dependency pair (~300 kB minified)  
- ❌ Not suitable for a text-heavy document like a CV

---

## Rationale

The `/cv` page already has a comprehensive `@media print` stylesheet that produces a well-formatted A4 PDF layout. `react-to-print` reuses this investment with no additional styling work, scopes the print target to just the CV container (leaving the site shell behind), and keeps the implementation minimal. The output is a native-quality vector PDF with selectable text — the best possible result for a document intended for recruiters.

---

## Consequences

- `react-to-print` added as a production dependency.  
- A "Print / Save as PDF" button appears in the CV header; it is hidden by `@media print { .cv__print-btn { display: none } }`.  
- The `printRef` is attached to `.cv__container` so only the CV content is printed.  
- Future requirements (e.g., async data fetch before print) can be handled via `react-to-print`'s callback API without changing the overall approach.
