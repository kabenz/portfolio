/** @import { EducationItem } from '../types/education.js' */

/** @type {EducationItem[]} */
const educationItems = [
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
  {
    id: 'microsoft-az900',
    institution: 'Microsoft',
    degree: 'Certification',
    field: 'Cloud Computing',
    startDate: 'Jan 2021',
    endDate: 'Jan 2021',
    certifications: ['AZ-900: Microsoft Azure Fundamentals'],
  },
  {
    id: 'microsoft-az104',
    institution: 'Microsoft',
    degree: 'Certification',
    field: 'Cloud Administration',
    startDate: 'Jun 2021',
    endDate: 'Jun 2021',
    certifications: ['AZ-104: Microsoft Azure Administrator'],
  },
]

export default educationItems
