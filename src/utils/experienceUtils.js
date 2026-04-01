/** @import { ExperienceItem } from '../types/experience.js' */

const MONTHS_PER_YEAR = 12

/** @type {Record<string, number>} */
const MONTH_MAP = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 }

/**
 * Parses a date string in 'MMM YYYY' format (e.g. 'Jul 2024') into a Date object.
 * Uses an explicit month map and the Date(year, month, day) constructor to avoid
 * locale- and engine-specific parsing behaviour that can produce NaN in some browsers.
 *
 * @param {string} dateStr
 * @returns {Date|null} Parsed Date, or null if the string is not in the expected format
 */
export function parseDateString(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return null
  const parts = dateStr.trim().split(' ')
  if (parts.length !== 2) return null
  const [month, year] = parts
  const monthIndex = MONTH_MAP[month]
  if (monthIndex === undefined) return null
  const yearNum = parseInt(year, 10)
  if (isNaN(yearNum)) return null
  return new Date(yearNum, monthIndex, 1)
}

/**
 * Calculates total years of professional experience based on the earliest
 * start date across all experience entries.
 *
 * @param {ExperienceItem[]} experiences
 * @returns {number} Number of complete years of experience
 */
export function calculateYearsOfExperience(experiences) {
  if (!experiences || experiences.length === 0) return 0

  const dates = experiences
    .map(exp => parseDateString(exp.startDate))
    .filter(date => date !== null)

  if (dates.length === 0) return 0

  const earliest = dates.reduce((min, date) => date < min ? date : min)

  const now = new Date()
  const totalMonths =
    (now.getFullYear() - earliest.getFullYear()) * MONTHS_PER_YEAR +
    (now.getMonth() - earliest.getMonth())

  return Math.floor(totalMonths / MONTHS_PER_YEAR)
}
