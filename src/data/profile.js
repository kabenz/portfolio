/** @import { Profile } from '../types/profile.js' */
import profilePhoto from '../assets/profile.jpg'

/** @type {Profile} */
const profile = {
  fullName: 'José Perdigão',
  email: 'zeperdigao.95@gmail.com',
  linkedin: 'https://linkedin.com/in/jose-perdigao/',
  github: 'https://github.com/kabenz',
  summary:
    "Platform Engineer with 7+ years of experience designing and operating cloud-native infrastructure on Azure. " +
    "Core focus is Platform Engineering — building the internal tooling, GitOps workflows, and Kubernetes-based platforms " +
    "that let product teams ship with confidence and without ops friction.",
  location: 'Portugal',
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
  status: 'Open to interesting opportunities',
  /**
   * Path to the profile photo.
   * Replace src/assets/profile.svg with your photo (e.g. src/assets/profile.jpg),
   * update the import above, and set this field to the imported value.
   * Set to null to fall back to the initials avatar.
   */
  photo: profilePhoto,
}

export default profile
