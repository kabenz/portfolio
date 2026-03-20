/** @import { Profile } from '../types/profile.js' */

/** @type {Profile} */
const profile = {
  fullName: 'José Perdigão',
  email: 'jose@perdigao.dev',
  linkedin: 'https://linkedin.com/in/kabenz',
  github: 'https://github.com/kabenz',
  summary:
    "Platform Engineer with 7+ years of experience designing and operating cloud-native infrastructure on Azure. " +
    "Core focus is Platform Engineering — building the internal tooling, GitOps workflows, and Kubernetes-based platforms " +
    "that let product teams ship with confidence and without ops friction.",
  location: 'Portugal',
  address: 'Lisbon, Portugal',
  phone: '+351 900 000 000',

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
}

export default profile
