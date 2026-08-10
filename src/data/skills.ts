export interface SkillItem {
  name: string;
  category: 'AI' | 'Dev' | 'Cloud' | 'CRM' | 'Marketing' | 'Business';
  glowColor: string;
  description: string;
}

export const SKILLS_DATA: SkillItem[] = [
  { name: 'AI & LLM', category: 'AI', glowColor: '#F5C518', description: 'Generative AI models, neural tokens & fine-tuning' },
  { name: 'Prompt Engineering', category: 'AI', glowColor: '#3B82F6', description: 'Zero-shot, chain-of-thought & system prompt design' },
  { name: 'Python', category: 'AI', glowColor: '#22C55E', description: 'Data processing, API scripts & AI agent logic' },
  { name: 'TypeScript', category: 'Dev', glowColor: '#3B82F6', description: 'Type-safe modern web app development' },
  { name: 'React.js', category: 'Dev', glowColor: '#00F0FF', description: 'Component architecture, hooks & UI states' },
  { name: 'Node.js', category: 'Dev', glowColor: '#22C55E', description: 'High-concurrency backend services & REST APIs' },
  { name: 'PostgreSQL', category: 'Dev', glowColor: '#60A5FA', description: 'Relational database schemas & SQL queries' },
  { name: 'Google Cloud', category: 'Cloud', glowColor: '#EA4335', description: 'Compute Engine, Cloud Storage & BigQuery' },
  { name: 'HubSpot CRM', category: 'CRM', glowColor: '#FF7A59', description: 'Pipeline automation & customer lifecycle management' },
  { name: 'Zoho CRM', category: 'CRM', glowColor: '#EAB308', description: 'Custom modules, lead scoring & workflow triggers' },
  { name: 'SEO & GA4', category: 'Marketing', glowColor: '#A855F7', description: 'Technical Search Engine Optimization & Google Analytics 4' },
  { name: 'Google Ads', category: 'Marketing', glowColor: '#4285F4', description: 'PPC Search, Display & Video Performance Campaigns' },
  { name: 'Meta Ads', category: 'Marketing', glowColor: '#0666E5', description: 'Instagram & Facebook targeted ad funnels' },
  { name: 'AI Automation', category: 'AI', glowColor: '#B026FF', description: 'Make.com & Zapier multi-app automated workflows' },
  { name: 'Next.js', category: 'Dev', glowColor: '#FFFFFF', description: 'Full stack React framework with SSR & Server Actions' },
  { name: 'Docker', category: 'Cloud', glowColor: '#2496ED', description: 'Containerization & cloud deployment pipelines' },
  { name: 'Google Business Profile', category: 'Business', glowColor: '#34A853', description: 'Local Map Pack #1 search optimization & review growth' }
];
