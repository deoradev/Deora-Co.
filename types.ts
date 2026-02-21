export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  id: string;
}

export interface Skill {
  name: string;
  level: string; // e.g. "Advanced", "Intermediate"
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  AMAN_FOUNDATION = 'aman-foundation',
  AMAN_AI = 'aman-ai',
  WATS_NXT = 'wats-nxt',
  FALSE_JEWELLERY = 'false-jewellery',
  SKILLS = 'skills',
  TIMELINE = 'timeline',
  CONTACT = 'contact'
}