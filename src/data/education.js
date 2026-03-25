/** @import { CertificationItem, EducationItem } from '../types/education.js' */

/** @type {EducationItem[]} */
export const educationItems = [
  {
    id: 'ips-est-computer-science',
    institution: 'Instituto Politécnico de Setúbal - Escola Superior de Tecnologia',
    degree: 'Bachelor of Computer Engineering',
    field: 'Computer Engineering',
    startDate: 'Sep 2015',
    endDate: 'Jul 2018',
    concentration: 'Software Engineering',
    specialization: 'Information Systems',
    courses: [
      'Algorithms and Data Structures',
      'Software Engineering',
      'Database Systems',
      'Web Development',
      'AI'
    ],
  },
]

/** @type {CertificationItem[]} */
export const certifications = [
  {
    id: 'microsoft-az900',
    name: 'AZ-900: Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    field: 'Cloud Computing',
    date: 'Sep 2020',
  },
]
