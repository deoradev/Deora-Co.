import { SectionId, TimelineEvent } from './types';

export const NAV_LINKS = [
  { label: 'Legacy', id: SectionId.AMAN_FOUNDATION },
  { label: 'Innovation', id: SectionId.AMAN_AI },
  { label: 'Culture', id: SectionId.WATS_NXT },
  { label: 'Jewellery', id: SectionId.FALSE_JEWELLERY },
  { label: 'Devanshu', id: SectionId.ABOUT },
  { label: 'Contact', id: SectionId.CONTACT },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '2001',
    title: 'Origins',
    description: 'Aman Foundation established as a pioneer in de-addiction and rehabilitation.',
  },
  {
    year: '2020',
    title: 'The Catalyst',
    description: 'Devanshu joins as Treasurer, beginning the digital transformation journey.',
  },
  {
    year: '2022',
    title: 'Street Culture',
    description: 'WAT’S NXT launches, bringing custom streetwear culture to the e-commerce space.',
  },
  {
    year: '2023',
    title: 'False Jewellery',
    description: 'Co-founded False, an imitation jewellery brand, with Naman Goyal and Sarthak Dhingra.',
  },
  {
    year: '2024',
    title: 'Digital Evolution',
    description: 'Graduation from Delhi University. Launch of Aman AI beta.',
  },
  {
    year: 'NOW',
    title: 'DEORA & CO.',
    description: 'Unifying healthcare legacy, AI innovation, and fashion under one visionary house.',
  },
];

export const SKILLS_TECH = [
  "React & TypeScript (Learning)",
  "Shopify & WooCommerce",
  "WordPress Development",
  "GenAI Prompt Engineering",
  "Python (Scripting)",
  "Meta Ads & Analytics"
];

export const SKILLS_OPS = [
  "E-commerce Strategy",
  "Product Photography",
  "Content Storytelling",
  "Client Negotiation",
  "Process Optimization",
  "Team Leadership"
];