/** @import { HobbyItem } from '../types/hobby.js' */

/** @type {HobbyItem[]} */
const hobbies = [
  {
    id: 'paddel',
    name: 'Paddel',
    icon: '🎾',
    sortOrder: 1,
    photos: [
      { src: 'hobbies/paddel/photo-1.svg', alt: 'Padel racket sport' },
      { src: 'hobbies/paddel/photo-2.svg', alt: 'Padel court' },
      { src: 'hobbies/paddel/photo-3.svg', alt: 'Padel match' },
    ],
  },
  {
    id: 'crossfit',
    name: 'CrossFit',
    icon: '🏋️',
    sortOrder: 2,
    photos: [
      { src: 'hobbies/crossfit/photo-1.svg', alt: 'CrossFit workout of the day' },
      { src: 'hobbies/crossfit/photo-2.svg', alt: 'Barbell training' },
      { src: 'hobbies/crossfit/photo-3.svg', alt: 'Box training session' },
    ],
  },
  {
    id: 'mtb',
    name: 'Mountain Biking',
    icon: '🚵',
    sortOrder: 3,
    photos: [
      { src: 'hobbies/mtb/photo-1.svg', alt: 'Mountain biking trail' },
      { src: 'hobbies/mtb/photo-2.svg', alt: 'Mountain view on bike' },
      { src: 'hobbies/mtb/photo-3.svg', alt: 'Downhill trail' },
    ],
  },
  {
    id: 'travel',
    name: 'Travel',
    description: '🇹🇭 🇦🇪 🇶🇦 🇲🇦 🇬🇷 🇬🇧 🇩🇪',
    icon: '✈️',
    sortOrder: 4,
    photos: [
      { src: 'hobbies/travel/photo-1.svg', alt: 'Sunset over the sea' },
      { src: 'hobbies/travel/photo-2.svg', alt: 'Historical landmark' },
      { src: 'hobbies/travel/photo-3.svg', alt: 'City skyline at night' },
    ],
  },
]

export default hobbies
