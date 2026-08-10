export interface Project {
  id: string;
  title: string;
  category: 'AI & Automation' | 'Full Stack' | 'CRM & Business' | 'Data & Analytics';
  techStack: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  skillsLearned: string[];
  description: string;
  imageBgGradient: string;
  iconName: string;
  githubStars?: number;
  featured?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-ai-chatbot',
    title: 'Enterprise AI Customer Support Bot',
    category: 'AI & Automation',
    techStack: ['OpenAI API', 'LangChain', 'Next.js', 'Vector DB', 'TypeScript'],
    difficulty: 'Intermediate',
    skillsLearned: ['RAG Pipeline', 'Vector Search', 'Prompt Engineering', 'API Integration'],
    description: 'Build a custom RAG-powered chatbot trained on company documentation that provides instant 24/7 customer support with source citations.',
    imageBgGradient: 'bg-[#ededed]',
    iconName: 'Bot',
    githubStars: 142,
    featured: true
  },
  {
    id: 'proj-crm-dashboard',
    title: 'Automated CRM & Lead Management Portal',
    category: 'CRM & Business',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'HubSpot API', 'Tailwind CSS'],
    difficulty: 'Advanced',
    skillsLearned: ['Pipeline Design', 'Webhook Handlers', 'OAuth Integration', 'Data Visualization'],
    description: 'Develop an end-to-end sales portal featuring automated lead ingestion, deal drag-and-drop pipelines, and automated email trigger notifications.',
    imageBgGradient: 'bg-[#ededed]',
    iconName: 'LayoutDashboard',
    githubStars: 98,
    featured: true
  },
  {
    id: 'proj-ai-resume',
    title: 'AI Resume & ATS Score Analyzer',
    category: 'AI & Automation',
    techStack: ['Python', 'FastAPI', 'Claude 3', 'React', 'PDF Parsing'],
    difficulty: 'Intermediate',
    skillsLearned: ['Document Parsing', 'Semantic Match Scoring', 'Natural Language Processing'],
    description: 'An AI application that scans resumes against job descriptions, outputs an ATS score, and suggests tailored bullet point improvements.',
    imageBgGradient: 'bg-[#ededed]',
    iconName: 'FileCheck',
    githubStars: 215,
    featured: true
  },
  {
    id: 'proj-ecommerce-saas',
    title: 'Modern Full Stack E-commerce SaaS',
    category: 'Full Stack',
    techStack: ['Next.js 14', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind'],
    difficulty: 'Advanced',
    skillsLearned: ['Payment Gateways', 'Cart State Management', 'Server Actions', 'Database Schemas'],
    description: 'A complete online store with shopping cart persistence, coupon codes, automated Stripe checkout, order webhooks, and admin dashboard.',
    imageBgGradient: 'bg-[#ededed]',
    iconName: 'ShoppingBag',
    githubStars: 310,
    featured: true
  },
  {
    id: 'proj-biz-analytics',
    title: 'Real-Time Business Analytics Dashboard',
    category: 'Data & Analytics',
    techStack: ['React', 'Recharts', 'Google BigQuery', 'Python ETL', 'GCP'],
    difficulty: 'Intermediate',
    skillsLearned: ['Data Aggregation', 'Interactive Charts', 'BigQuery SQL', 'Cloud Pipeline'],
    description: 'A real-time analytics hub displaying key performance indicators (KPIs), revenue forecasts, conversion funnels, and customer churn risk.',
    imageBgGradient: 'bg-[#ededed]',
    iconName: 'BarChart3',
    githubStars: 87
  },
  {
    id: 'proj-gbp-growth',
    title: 'Google Business Profile Local Ranking Engine',
    category: 'CRM & Business',
    techStack: ['Python', 'Google Maps API', 'WhatsApp API', 'PostgreSQL'],
    difficulty: 'Beginner',
    skillsLearned: ['Local SEO', 'API Polling', 'Review Automation', 'Geotagging'],
    description: 'An automated tool for local agency owners to track business listing rank positions on Google Maps and trigger review request SMS campaigns.',
    imageBgGradient: 'bg-[#ededed]',
    iconName: 'MapPin',
    githubStars: 76
  },
  {
    id: 'proj-ai-automation',
    title: 'Multi-Platform AI Content & Social Automation',
    category: 'AI & Automation',
    techStack: ['Make.com', 'OpenAI API', 'Twitter API', 'LinkedIn API', 'Notion'],
    difficulty: 'Intermediate',
    skillsLearned: ['No-code Automation', 'Webhook Architecture', 'Content Scheduling', 'AI Prompting'],
    description: 'Create an automated content pipeline that turns blog posts into tweets, LinkedIn posts, and newsletter digests automatically via AI.',
    imageBgGradient: 'bg-[#ededed]',
    iconName: 'Zap',
    githubStars: 189
  },
  {
    id: 'proj-fullstack-saas',
    title: 'Multi-Tenant Micro-SaaS Application',
    category: 'Full Stack',
    techStack: ['React', 'TypeScript', 'Node.js', 'Docker', 'Redis', 'PostgreSQL'],
    difficulty: 'Advanced',
    skillsLearned: ['Multi-tenancy', 'Redis Caching', 'Docker Orchestration', 'JWT Auth'],
    description: 'A scalable SaaS boilerplate with team workspaces, role-based permissions, rate limiting with Redis, and containerized Docker setup.',
    imageBgGradient: 'bg-[#ededed]',
    iconName: 'Server',
    githubStars: 420,
    featured: true
  }
];
