/** @import { CertificationItem, EducationItem } from '../types/education.js' */

/** @type {EducationItem[]} */
export const educationItems = [
  {
    id: 'iscte-computer-science',
    institution: 'ISCTE – Instituto Universitário de Lisboa',
    degree: 'Bachelor of Science',
    field: 'Computer Science and Management',
    startDate: 'Sep 2015',
    endDate: 'Jul 2018',
    courses: [
      'Algorithms and Data Structures',
      'Software Engineering',
      'Database Systems',
      'Computer Networks',
      'Web Development',
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
    date: 'Jan 2021',
  },
  {
    id: 'microsoft-az104',
    name: 'AZ-104: Microsoft Azure Administrator',
    issuer: 'Microsoft',
    field: 'Cloud Administration',
    date: 'Jun 2021',
  },
]
