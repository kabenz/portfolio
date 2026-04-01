/** @import { Profile } from '../types/profile.js' */
import profilePhoto from '../assets/profile.jpg'
import experiences from './experience.js'
import { calculateYearsOfExperience } from '../utils/experienceUtils.js'

const yearsOfExperience = calculateYearsOfExperience(experiences)

/** @type {Profile} */
const profile = {
  fullName: 'José Perdigão',
  headline: 'Senior Platform & DevOps Engineer',
  email: 'zeperdigao.95@gmail.com',
  linkedin: 'https://linkedin.com/in/jose-perdigao/',
  github: 'https://github.com/kabenz',
  summary:
    `Senior Platform & DevOps Engineer with ${yearsOfExperience}+ years of experience designing and operating cloud-native infrastructure at scale. ` +
    "I specialise in building internal developer platforms, GitOps workflows, and Kubernetes-based foundations " +
    "that empower 30+ product teams to ship reliably and independently — while keeping infrastructure costs under control.",
  location: 'Lisbon, Portugal',
  address: 'Lisbon, Portugal',
  phone: '+351 924 222 223',

  /**
   * Per-field visibility rules.
   * 'web'  → shown on /contact only
   * 'cv'   → shown on /cv only
   * 'both' → shown everywhere (default when omitted)
   */
  visibility: {
    address: 'cv',
    phone: 'cv',
  },
  status: 'Open to Senior / Lead DevOps & Platform Engineering roles',
  /**
   * Path to the profile photo.
   * Replace src/assets/profile.svg with your photo (e.g. src/assets/profile.jpg),
   * update the import above, and set this field to the imported value.
   * Set to null to fall back to the initials avatar.
   */
  photo: profilePhoto,
}

export default profile
