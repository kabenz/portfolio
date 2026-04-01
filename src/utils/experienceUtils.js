/** @import { ExperienceItem } from '../types/experience.js' */

const MONTHS_PER_YEAR = 12

/**
 * Calculates total years of professional experience based on the earliest
 * start date across all experience entries.
 *
 * @param {ExperienceItem[]} experiences
 * @returns {number} Number of complete years of experience
 */
export function calculateYearsOfExperience(experiences) {
  if (!experiences || experiences.length === 0) return 0

  const earliest = experiences
    .map(exp => new Date(exp.startDate))
    .reduce((min, date) => date < min ? date : min)

  const now = new Date()
  const totalMonths =
    (now.getFullYear() - earliest.getFullYear()) * MONTHS_PER_YEAR +
    (now.getMonth() - earliest.getMonth())

  return Math.floor(totalMonths / MONTHS_PER_YEAR)
}
