/**
 * @typedef {Object} HobbyPhoto
 * @property {string} src       - Image path relative to the app base URL (e.g. 'hobbies/mtb/photo-1.jpg')
 * @property {string} [alt]     - Accessible description of the image
 */

/**
 * @typedef {Object} HobbyItem
 *
 * Required fields
 * @property {string} id   - Unique identifier for the hobby entry
 * @property {string} name - Display name of the hobby
 *
 * Optional fields
 * @property {string} [description]   - Short description of the hobby
 * @property {string} [icon]          - Icon identifier or URL representing the hobby
 * @property {number} [sortOrder]     - Display order; lower values appear first
 * @property {HobbyPhoto[]} [photos]  - Gallery photos shown on the website (hidden on CV/print)
 */

export {}
