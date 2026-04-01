/** @import { ExperienceItem } from '../types/experience.js' */

const MONTHS_PER_YEAR = 12

/**
 * Parses a date string in 'MMM YYYY' format (e.g. 'Jul 2024') into a Date object.
 *
 * @param {string} dateStr
 * @returns {Date|null} Parsed Date, or null if the string is not in the expected format
 */
function parseDateString(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return null
  const parts = dateStr.trim().split(' ')
  if (parts.length !== 2) return null
  const [month, year] = parts
  const date = new Date(`${month} 1, ${year}`)
  return isNaN(date.getTime()) ? null : date
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
