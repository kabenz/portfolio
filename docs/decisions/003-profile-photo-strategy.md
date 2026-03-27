# ADR 003 – Profile Photo Strategy

**Status:** Accepted  
**Date:** 2026-03-27

## Context

The portfolio needs to display a professional profile photo on the website and include it in the downloadable CV PDF.  
Previously, both the *About* section and the *CV* page used initials-based avatar placeholders.

## Decision

### Photo storage

The profile photo is stored as a static asset in the `src/assets/` directory (e.g. `src/assets/profile.jpg`).  
It is imported in `src/data/profile.js` and assigned to the `photo` field:

```js
import profilePhoto from '../assets/profile.svg'

const profile = {
  // ...
  photo: profilePhoto,
}
```

Vite processes the import, applies the configured `base` path, and emits the file with a content-hash filename to the `dist/assets/` directory. All components read the resolved URL from `profile.photo` — a single source of truth.

To replace the photo:
1. Add your image to `src/assets/` (e.g. `profile.jpg`).
2. Update the import in `src/data/profile.js` to point to the new file.
3. Rebuild with `npm run build`.

### Fallback behaviour

Both the *About* section and the *CV* page render the photo when `profile.photo` is set, and gracefully fall back to the existing placeholder (initials avatar / SVG silhouette) when it is `null` or `undefined`.

### PDF export

The CV page (`/cv`) uses `react-to-print` with a `contentRef` on `.cv__container`.  
Because the photo is a regular `<img>` element inside that container, it is automatically captured in the printed / saved PDF — no extra configuration is required.

## Consequences

- **Personalisation:** Replacing `src/assets/profile.svg` with a real headshot and updating the import in `profile.js` is sufficient to update the photo site-wide and in PDF exports. A `npm run build` is required after the change.
- **Base-path safe:** Vite automatically applies the configured `base` (`/portfolio/`) to the asset URL, so the photo loads correctly regardless of the deployment subdirectory.
- **Accessibility:** The `<img>` element uses `alt={profile.fullName}` so screen readers announce the person's name.
- **Print fidelity:** The photo is printed at a fixed 80×80 px (60×60 px in print media) with `object-fit: cover` to keep the aspect ratio consistent.
