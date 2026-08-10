export interface Instructor {
  id: string;
  name: string;
  role: string;
  company: string;
  experience: string;
  expertise: string[];
  avatarUrl: string;
  bio: string;
  gradient: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const INSTRUCTORS_DATA: Instructor[] = [
  {
    id: 'inst-1',
    name: 'Dr. Aarav Sharma',
    role: 'Lead AI Engineer & Researcher',
    company: 'Ex-Google AI / DeepMind Contributor',
    experience: '9+ Years in AI & Machine Learning',
    expertise: ['AI & LLM', 'Prompt Engineering', 'Python', 'LangChain'],
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Passionate about democratizing AI education. Has trained over 15,000 students in LLM application design and AI automation workflows.',
    gradient: 'bg-[#E53935]',
    socials: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    id: 'inst-2',
    name: 'Vikramaditya Roy',
    role: 'Senior Full Stack Architect',
    company: 'Ex-Amazon / Principal Engineer',
    experience: '11+ Years in Software Engineering',
    expertise: ['Full Stack', 'React', 'Node.js', 'System Architecture'],
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Architected high-scale web systems handling millions of daily users. Specializes in turning beginners into clean-code full stack engineers.',
    gradient: 'bg-[#E53935]',
    socials: { linkedin: '#', github: '#' }
  },
  {
    id: 'inst-3',
    name: 'Priya Sundaram',
    role: 'Head of Business Automation',
    company: 'HubSpot Certified Enterprise Specialist',
    experience: '8+ Years in CRM & Sales Operations',
    expertise: ['CRM', 'HubSpot', 'Zoho', 'Business Automation'],
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Has configured enterprise CRM pipelines for 40+ global startups. Expert in automating lead capture, email drips, and revenue pipelines.',
    gradient: 'bg-[#E53935]',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 'inst-4',
    name: 'Karan Patel',
    role: 'Performance Marketing Strategist',
    company: 'Growth Director @ ScaleAgency',
    experience: '7+ Years in Digital Growth',
    expertise: ['Digital Marketing', 'SEO', 'Google Ads', 'Meta Ads'],
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Managed over $2M in ad spend across Google & Meta. Focuses on ROI-driven customer acquisition, conversion funnels, and growth hacking.',
    gradient: 'bg-[#E53935]',
    socials: { linkedin: '#', twitter: '#' }
  }
];
