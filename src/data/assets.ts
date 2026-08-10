/** Public asset paths for Zylearn illustrations (1–9). */
export const ASSETS = {
  brain: '/assets/images/1.png',
  analytics: '/assets/images/2.png',
  globeHand: '/assets/images/3.png',
  heroRobot: '/assets/images/4.png',
  pointingHand: '/assets/images/5.png',
  humanoid: '/assets/images/6.png',
  thinker: '/assets/images/7.png',
  thinkerDark: '/assets/images/8.png',
  statsPortrait: '/assets/images/9.jpg',
  logo: '/images/zylearn-logo.png',
} as const;

/** One image per program track (8 programs). */
export const PROGRAM_IMAGES = [
  ASSETS.brain,
  ASSETS.analytics,
  ASSETS.globeHand,
  ASSETS.heroRobot,
  ASSETS.pointingHand,
  ASSETS.humanoid,
  ASSETS.thinker,
  ASSETS.thinkerDark,
] as const;
