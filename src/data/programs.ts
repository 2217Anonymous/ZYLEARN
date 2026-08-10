export interface Program {
  id: string;
  slug: string;
  title: string;
  category: 'AI' | 'Development' | 'Cloud & Data' | 'CRM' | 'Digital Marketing' | 'Business';
  shortDescription: string;
  fullDescription: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  mode: string;
  topics: string[];
  tools: string[];
  careerRoles: string[];
  ctaText: string;
  gradient: string;
  accentColor: string;
  iconName: string;
  featured?: boolean;
  badge?: string;
  modules: {
    title: string;
    description: string;
    duration: string;
  }[];
  projectsCount: number;
}

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'ai-llm',
    slug: 'ai-llm-mastery',
    title: 'AI & LLM Mastery',
    category: 'AI',
    shortDescription: 'Master AI fundamentals, Large Language Models (LLM), prompt engineering, AI agents and practical AI tools for career & business automation.',
    fullDescription: 'Become an AI-ready engineer, innovator, or business leader. Learn to build custom LLM applications, master zero-shot & few-shot prompt engineering, create autonomous AI agents, and integrate OpenAI, Claude, & Hugging Face models into production apps.',
    duration: '8 Weeks',
    level: 'All Levels',
    mode: 'Online + Live Mentorship',
    topics: [
      'AI Fundamentals & Neural Networks',
      'LLM Concepts & Architectures',
      'Advanced Prompt Engineering',
      'Building Autonomous AI Agents',
      'AI Tools & Workflow Automation',
      'LangChain & Vector Databases (Pinecone)',
      'AI in Business & Enterprise Productivity',
      'Real-world AI Use Cases & Ethics'
    ],
    tools: ['OpenAI API', 'Claude 3', 'LangChain', 'Python', 'Pinecone', 'Make.com', 'Zapier', 'Midjourney'],
    careerRoles: ['AI Specialist', 'Prompt Engineer', 'AI Solutions Architect', 'AI Business Strategist'],
    ctaText: 'Explore AI Program',
    gradient: 'bg-[#E53935]',
    accentColor: '#F5C518',
    iconName: 'Cpu',
    featured: true,
    badge: 'HOT & IN-DEMAND',
    projectsCount: 4,
    modules: [
      { title: 'Module 1: Foundations of Artificial Intelligence & LLMs', description: 'Understanding transformer architectures, tokenization, embeddings, and context windows.', duration: '1.5 Weeks' },
      { title: 'Module 2: Advanced Prompt Engineering & Fine-Tuning', description: 'Zero-shot, Few-shot, Chain-of-Thought prompting, and context optimization.', duration: '2 Weeks' },
      { title: 'Module 3: Building Autonomous AI Agents with LangChain', description: 'Memory management, vector search, RAG (Retrieval-Augmented Generation), and API tool calling.', duration: '2.5 Weeks' },
      { title: 'Module 4: Enterprise AI Deployment & Monetization', description: 'Deploying AI microservices, monitoring latency, and building commercial AI SaaS products.', duration: '2 Weeks' }
    ]
  },
  {
    id: 'full-stack',
    slug: 'full-stack-development',
    title: 'Full Stack Web Development',
    category: 'Development',
    shortDescription: 'Build high-performance modern web apps with React, TypeScript, Node.js, Express, PostgreSQL, and Cloud Deployment.',
    fullDescription: 'Transform from a beginner to a job-ready full stack developer. Learn industry-standard front-end engineering, back-end microservices, RESTful & GraphQL APIs, database optimization, authentication, and DevOps pipelines.',
    duration: '12 Weeks',
    level: 'All Levels',
    mode: 'Hybrid (Online + Offline)',
    topics: [
      'Modern JavaScript (ES6+) & TypeScript',
      'React.js & Next.js Architecture',
      'Node.js & Express RESTful APIs',
      'Database Engineering (PostgreSQL & MongoDB)',
      'Authentication (OAuth, JWT, NextAuth)',
      'Deployment & CI/CD Pipelines (Vercel, Docker, AWS)',
      'State Management & Performance Tuning',
      'Git, GitHub Collaboration & Code Reviews'
    ],
    tools: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Vercel'],
    careerRoles: ['Full Stack Developer', 'Frontend Engineer', 'Backend Developer', 'Software Engineer'],
    ctaText: 'Explore Full Stack',
    gradient: 'bg-[#E53935]',
    accentColor: '#3B82F6',
    iconName: 'Code',
    featured: true,
    badge: 'MOST POPULAR',
    projectsCount: 5,
    modules: [
      { title: 'Module 1: Modern Frontend Architecture', description: 'React 18, TypeScript, Tailwind CSS, custom hooks, and dynamic rendering.', duration: '3 Weeks' },
      { title: 'Module 2: Server-Side & Database Engineering', description: 'Node.js, Express, REST APIs, Prisma ORM, and PostgreSQL relational schemas.', duration: '3 Weeks' },
      { title: 'Module 3: Next.js & Production Applications', description: 'App router, SSR, SSG, Server Actions, middleware, and NextAuth authentication.', duration: '3 Weeks' },
      { title: 'Module 4: DevOps & Scalable Deployment', description: 'Docker containers, GitHub Actions CI/CD, AWS S3, Vercel, and load balancing.', duration: '3 Weeks' }
    ]
  },
  {
    id: 'cloud-data',
    slug: 'cloud-computing-data-engineering',
    title: 'Cloud & Data Engineering',
    category: 'Cloud & Data',
    shortDescription: 'Master cloud infrastructure, Google Cloud Platform (GCP), scalable databases, BigQuery, and enterprise data pipelines.',
    fullDescription: 'Cloud & Data skills are the backbone of modern tech companies. Learn how to design scalable cloud environments on Google Cloud, build ETL data pipelines, manage SQL/NoSQL databases, and implement container orchestration.',
    duration: '10 Weeks',
    level: 'Intermediate',
    mode: 'Online + Live Mentorship',
    topics: [
      'Cloud Computing Fundamentals',
      'Google Cloud Platform (GCP) Services',
      'Relational & NoSQL Database Architecture',
      'BigQuery & Data Warehousing',
      'ETL Pipelines & Data Ingestion',
      'Kubernetes & Cloud Infrastructure',
      'Identity & Access Management (IAM)',
      'System Resilience & Scalable Applications'
    ],
    tools: ['Google Cloud Platform', 'BigQuery', 'PostgreSQL', 'Docker', 'Kubernetes', 'Python', 'Terraform'],
    careerRoles: ['Cloud Engineer', 'Data Engineer', 'DevOps Associate', 'GCP Specialist'],
    ctaText: 'Explore Data & Cloud',
    gradient: 'bg-[#E53935]',
    accentColor: '#14B8A6',
    iconName: 'Cloud',
    badge: 'CAREER READY',
    projectsCount: 3,
    modules: [
      { title: 'Module 1: GCP Infrastructure Foundations', description: 'Compute Engine, Cloud Storage, VPC networks, and IAM security.', duration: '2.5 Weeks' },
      { title: 'Module 2: Big Data Warehousing with BigQuery', description: 'Designing data warehouses, SQL analytics, and real-time streaming.', duration: '2.5 Weeks' },
      { title: 'Module 3: Automated ETL Data Pipelines', description: 'Python data transformation, Cloud Pub/Sub, and Dataflow jobs.', duration: '2.5 Weeks' },
      { title: 'Module 4: Containerization & Cloud Native Architecture', description: 'Docker packaging, Cloud Run deployment, and Kubernetes cluster basics.', duration: '2.5 Weeks' }
    ]
  },
  {
    id: 'crm-automation',
    slug: 'crm-business-automation',
    title: 'CRM & Business Automation',
    category: 'CRM',
    shortDescription: 'Master HubSpot, Zoho, Bitrix24, lead management pipelines, sales automation, and customer retention systems.',
    fullDescription: 'Businesses thrive on efficient customer relationships. Learn how to configure enterprise CRM systems, automate sales funnels, set up automated email marketing drip campaigns, and analyze lead conversion data for maximum ROI.',
    duration: '6 Weeks',
    level: 'Beginner',
    mode: 'Online + Live Mentorship',
    topics: [
      'CRM Fundamentals & Business Architecture',
      'Lead Generation & Deal Pipeline Setup',
      'Sales & Marketing Workflow Automation',
      'HubSpot CRM Administration & Configuration',
      'Zoho One Suite Setup & Bitrix24',
      'Customer Retention & Support Desk Management',
      'Email Marketing Automation & Drip Campaigns',
      'CRM Analytics & Revenue Reporting'
    ],
    tools: ['HubSpot', 'Zoho CRM', 'Bitrix24', 'Zapier', 'Make.com', 'Google Sheets API'],
    careerRoles: ['CRM Specialist', 'Sales Operations Analyst', 'Marketing Automation Lead', 'HubSpot Admin'],
    ctaText: 'Explore CRM',
    gradient: 'bg-[#E53935]',
    accentColor: '#F97316',
    iconName: 'Database',
    badge: 'HIGH DEMAND',
    projectsCount: 3,
    modules: [
      { title: 'Module 1: CRM Concepts & Architecture', description: 'Understanding lead life cycles, contact management, deal stages, and custom properties.', duration: '1.5 Weeks' },
      { title: 'Module 2: HubSpot & Zoho Implementation', description: 'Configuring deal pipelines, automated task triggers, and lead scoring matrices.', duration: '1.5 Weeks' },
      { title: 'Module 3: Omnichannel Workflow Automation', description: 'Connecting CRM to landing pages, WhatsApp Business, email servers, and webhooks.', duration: '1.5 Weeks' },
      { title: 'Module 4: Business Intelligence & Reporting', description: 'Designing executive dashboards, sales forecasting reports, and customer LTV metrics.', duration: '1.5 Weeks' }
    ]
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing-growth-hacking',
    title: 'Digital Marketing & Growth Hacking',
    category: 'Digital Marketing',
    shortDescription: 'Learn SEO, Google Ads, Meta Ads, social media strategy, content marketing, email funnels, and ROI analytics.',
    fullDescription: 'Become a data-driven marketer. Learn how to run profitable Google & Facebook ad campaigns, rank #1 on Google with Technical SEO, build viral social content strategies, and optimize conversion rates using behavioral analytics.',
    duration: '8 Weeks',
    level: 'All Levels',
    mode: 'Hybrid (Online + Offline)',
    topics: [
      'SEO (On-Page, Off-Page & Technical SEO)',
      'Google Search, Display & Video Ads',
      'Meta (Instagram & Facebook) Ad Funnels',
      'Content Marketing Strategy & Copywriting',
      'Email Marketing & Lead Nurturing',
      'Google Analytics 4 (GA4) & Tag Manager',
      'Growth Hacking & Conversion Rate Optimization (CRO)',
      'AI Tools for Automated Content & Marketing'
    ],
    tools: ['Google Ads', 'Meta Business Manager', 'GA4', 'Semrush', 'Mailchimp', 'Canva Pro', 'ChatGPT for Marketers'],
    careerRoles: ['Digital Marketing Manager', 'SEO Specialist', 'Performance Marketer', 'Growth Hacker'],
    ctaText: 'Explore Marketing',
    gradient: 'bg-[#E53935]',
    accentColor: '#A855F7',
    iconName: 'TrendingUp',
    projectsCount: 4,
    modules: [
      { title: 'Module 1: Search Engine Optimization (SEO)', description: 'Keyword research, technical audits, backlink strategy, and GA4 integration.', duration: '2 Weeks' },
      { title: 'Module 2: Paid Performance Advertising', description: 'Creating high-converting Google Search Ads and Meta retargeting campaigns.', duration: '2 Weeks' },
      { title: 'Module 3: Social Media & Content Strategy', description: 'Content calendars, brand storytelling, viral reel hooks, and visual branding.', duration: '2 Weeks' },
      { title: 'Module 4: Conversion Optimization & Analytics', description: 'A/B testing landing pages, tracking pixels, customer funnel analytics, and ROI modeling.', duration: '2 Weeks' }
    ]
  },
  {
    id: 'entrepreneurship',
    slug: 'entrepreneurship-startup-launchpad',
    title: 'Entrepreneurship & Tech Launchpad',
    category: 'Business',
    shortDescription: 'Turn ideas into scalable businesses. Learn startup basics, business models, AI product building, pitch decks, and fundraising.',
    fullDescription: 'Designed for aspiring founders and innovators. Learn how to validate product-market fit, build an MVP using no-code & AI tools, acquire early customers, build financial models, and pitch to angel investors.',
    duration: '6 Weeks',
    level: 'All Levels',
    mode: 'Online + Mentorship',
    topics: [
      'Startup Ideation & Problem Validation',
      'Business Model Canvas & Unit Economics',
      'Building No-Code / Low-Code MVPs',
      'Brand Positioning & Go-To-Market (GTM)',
      'Early Customer Acquisition Strategies',
      'Investor Pitch Deck Creation & Financials',
      'Legal Setup, Equity & Term Sheets',
      'Leveraging AI to Run a Lean Startup'
    ],
    tools: ['Notion', 'Figma', 'Bubble.io', 'Make.com', 'Stripe', 'Pitch.com', 'Claude 3'],
    careerRoles: ['Startup Founder', 'Product Manager', 'Venture Associate', 'Business Development Lead'],
    ctaText: 'Explore Entrepreneurship',
    gradient: 'bg-[#E53935]',
    accentColor: '#EAB308',
    iconName: 'Rocket',
    badge: 'FOUNDERS CHOICE',
    projectsCount: 2,
    modules: [
      { title: 'Module 1: Problem Validation & MVP Design', description: 'Identifying high-margin market pain points and building rapid no-code prototypes.', duration: '1.5 Weeks' },
      { title: 'Module 2: Go-To-Market & Growth Channels', description: 'Establishing brand identity, zero-dollar customer acquisition, and organic buzz.', duration: '1.5 Weeks' },
      { title: 'Module 3: Unit Economics & Business Financials', description: 'Calculating CAC, LTV, burn rate, pricing strategy, and revenue projections.', duration: '1.5 Weeks' },
      { title: 'Module 4: Investor Pitching & Funding', description: 'Structuring a 10-slide deck, pitching to mentors/investors, and negotiating term sheets.', duration: '1.5 Weeks' }
    ]
  },
  {
    id: 'instagram-growth',
    slug: 'instagram-brand-monetization',
    title: 'Instagram Growth & Brand Mastery',
    category: 'Digital Marketing',
    shortDescription: 'Master content creation, viral Reels strategy, hashtag algorithms, engagement tactics, and brand monetization.',
    fullDescription: 'Unlock the power of personal and business branding on Instagram. Learn the exact hooks, scripting techniques, editing styles, and algorithmic secrets that convert viewers into loyal followers and paying customers.',
    duration: '4 Weeks',
    level: 'Beginner',
    mode: 'Online + Live Interactive',
    topics: [
      'Instagram Algorithm Deconstructed',
      'High-Hook Scripting for Viral Reels',
      'Visual Branding & Carousel Design',
      'Hashtag & Keyword SEO Strategy',
      'Community Engagement & DM Funnels',
      'Monetization: Sponsorships, Products, Services',
      'AI Tools for 10x Content Speed',
      'Analytics & Auditing Your Account'
    ],
    tools: ['CapCut', 'Canva', 'Instagram Insights', 'ChatGPT', 'ManyChat Automation'],
    careerRoles: ['Social Media Manager', 'Content Creator', 'Personal Brand Specialist', 'Influencer Strategist'],
    ctaText: 'Grow Your Brand',
    gradient: 'bg-[#E53935]',
    accentColor: '#EC4899',
    iconName: 'Instagram',
    projectsCount: 2,
    modules: [
      { title: 'Module 1: Profile Audit & Branding Blueprint', description: 'Optimizing your bio, highlights, visual theme, and target audience persona.', duration: '1 Week' },
      { title: 'Module 2: The Viral Reels Blueprint', description: 'Scriptwriting hooks, trending audio selection, 3-second retention tricks, and video editing.', duration: '1 Week' },
      { title: 'Module 3: Automated DM Funnels & Engagement', description: 'Setting up ManyChat triggers to automatically send links, guides, and store links in DMs.', duration: '1 Week' },
      { title: 'Module 4: Monetization & Brand Deals', description: 'How to charge for brand collabs, sell digital products, and build a high-paying client funnel.', duration: '1 Week' }
    ]
  },
  {
    id: 'google-business',
    slug: 'google-business-profile-mastery',
    title: 'Google Business Profile & Local SEO',
    category: 'Business',
    shortDescription: 'Create, optimize, rank #1 on Google Local Map Pack, generate reviews, and dominate local customer acquisition.',
    fullDescription: 'Local businesses need visibility on Google Maps and Local Search. Learn how to verify, optimize, rank, and automate Google Business Profiles to attract hundreds of inbound phone calls and walk-in customers every week.',
    duration: '3 Weeks',
    level: 'Beginner',
    mode: 'Online + Hands-on Project',
    topics: [
      'Creating & Verifying Business Profiles',
      'Google Maps Ranking Secrets (Local 3-Pack)',
      'Local Keyword Optimization & Geotargeting',
      'Review Acquisition & Automated Reputation Mgmt',
      'Google Posts, Offers & Product Catalogs',
      'Local Citation & Directory Building',
      'Call & Lead Tracking Analytics',
      'Offering GBP Services to Local Clients for Revenue'
    ],
    tools: ['Google Business Profile Manager', 'Google Maps API', 'BrightLocal', 'Canva'],
    careerRoles: ['Local SEO Consultant', 'GBP Agency Owner', 'Digital Marketing Executive'],
    ctaText: 'Learn Google Business',
    gradient: 'bg-[#E53935]',
    accentColor: '#10B981',
    iconName: 'MapPin',
    projectsCount: 1,
    modules: [
      { title: 'Module 1: Setup & Claiming Local Business', description: 'Creating verified listings, selecting primary & secondary categories, and geo-coordinates.', duration: '1 Week' },
      { title: 'Module 2: Ranking Factors & Local Map Pack SEO', description: 'Building local NAP citations, geotagged images, and keyword-rich service descriptions.', duration: '1 Week' },
      { title: 'Module 3: Review Automation & Client Lead Gen', description: 'Setting up QR codes for reviews, managing negative feedback, and pitching local businesses.', duration: '1 Week' }
    ]
  }
];
