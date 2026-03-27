/**
 * @typedef {'web' | 'cv' | 'both'} VisibilityContext
 * Controls where a field is rendered:
 *   'web'  – visible on the website only (e.g. /contact)
 *   'cv'   – visible on the CV/print page only (e.g. /cv)
 *   'both' – visible in all contexts (default when omitted)
 */

/**
 * @typedef {Object} ProfileVisibility
 * Per-field visibility overrides. Any field not listed defaults to 'both'.
 * @property {VisibilityContext} [address]  - Visibility for the address field
 * @property {VisibilityContext} [phone]    - Visibility for the phone field
 * @property {VisibilityContext} [location] - Visibility for the location field
 * @property {VisibilityContext} [website]  - Visibility for the website field
 * @property {VisibilityContext} [linkedin] - Visibility for the LinkedIn field
 * @property {VisibilityContext} [github]   - Visibility for the GitHub field
 * @property {VisibilityContext} [email]    - Visibility for the email field
 */

/**
 * @typedef {Object} Profile
 *
 * Required fields
 * @property {string} fullName  - Full display name
 * @property {string} email     - Primary contact email
 *
 * Optional fields
 * @property {string} [address]  - Mailing / postal address
 * @property {string} [phone]    - Contact phone number
 * @property {string} [linkedin] - LinkedIn profile URL
 * @property {string} [github]   - GitHub profile URL
 * @property {string} [website]  - Personal website URL
 * @property {string} [summary]  - Short professional summary
 * @property {string} [status]   - Availability/status text shown in hero badge
 * @property {string} [location] - City / country
 * @property {string} [photo]    - URL of the profile photo (e.g. '/profile.jpg'). Falls back to initials avatar when omitted.
 *
 * Visibility control
 * @property {ProfileVisibility} [visibility] - Per-field rendering context overrides
 */

export {}
