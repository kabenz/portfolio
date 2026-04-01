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
  {
    id: 'ips-est-electronic-engineering-computers',
    institution: 'Instituto Politécnico de Setúbal - Escola Superior de Tecnologia',
    degree: 'CET in Electronics Engineering and Computers',
    field: 'Electronics Engineering and Computers',
    startDate: 'Sep 2014',
    endDate: 'Jul 2015',
    courses: []
  },
]

/** @type {CertificationItem[]} */
export const certifications = [
  {
    id: 'cka-kubernetes',
    name: 'CKA: Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    field: 'Kubernetes & Cloud Native',
    date: 'In Progress',
  },
  {
    id: 'microsoft-az104',
    name: 'AZ-104: Microsoft Azure Administrator',
    issuer: 'Microsoft',
    field: 'Cloud Computing',
    date: 'In Progress',
  },
  {
    id: 'microsoft-az900',
    name: 'AZ-900: Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    field: 'Cloud Computing',
    date: 'Sep 2020',
  },
]
