/** @import { HobbyItem } from '../types/hobby.js' */

/** @type {HobbyItem[]} */
const hobbies = [
  {
    id: 'hiking',
    name: 'Hiking',
    description: 'Exploring trails and mountain routes across Portugal and beyond.',
    icon: '🥾',
    sortOrder: 1,
  },
  {
    id: 'photography',
    name: 'Photography',
    description: 'Capturing landscapes and urban scenes with a mirrorless camera.',
    icon: '📷',
    sortOrder: 2,
  },
  {
    id: 'open-source',
    name: 'Open Source',
    description: 'Contributing to and maintaining open-source infrastructure tooling.',
    icon: '💻',
    sortOrder: 3,
  },
  {
    id: 'reading',
    name: 'Reading',
    description: 'Technical books, science fiction, and essays on technology and society.',
    icon: '📚',
    sortOrder: 4,
  },
  {
    id: 'cycling',
    name: 'Cycling',
    description: 'Weekend rides along the Lisbon waterfront and surrounding countryside.',
    icon: '🚴',
    sortOrder: 5,
  },
]

export default hobbies
