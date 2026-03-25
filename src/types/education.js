/**
 * @typedef {Object} EducationItem
 *
 * Required fields
 * @property {string} id          - Unique identifier for the education entry
 * @property {string} institution - Name of the institution
 * @property {string} degree      - Degree or qualification obtained (e.g. 'Bachelor of Science')
 *
 * Optional fields
 * @property {string}   [field]      - Field of study or major (e.g. 'Computer Science')
 * @property {string}   [startDate]  - Start date (e.g. 'Sep 2014')
 * @property {string}   [endDate]    - End date; omit for ongoing programmes
 * @property {string[]} [courses]    - Notable courses or specialisations completed
 */

/**
 * @typedef {Object} CertificationItem
 *
 * Required fields
 * @property {string} id    - Unique identifier for the certification entry
 * @property {string} name  - Full name of the certification (e.g. 'AZ-900: Microsoft Azure Fundamentals')
 * @property {string} issuer - Organisation that issued the certification
 *
 * Optional fields
 * @property {string} [field]     - Domain or technology area (e.g. 'Cloud Computing')
 * @property {string} [date]      - Date obtained (e.g. 'Jan 2021')
 * @property {string} [expiryDate] - Expiry date; omit for non-expiring certifications
 * @property {string} [url]       - URL to verify or view the certification
 */

export {}
