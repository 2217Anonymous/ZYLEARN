export interface Workshop {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  mode: 'Online (Live Zoom)' | 'Offline (Hybrid Campus)' | 'Recorded + Live Q&A';
  duration: string;
  level: string;
  seatsTotal: number;
  seatsLeft: number;
  price: string;
  originalPrice: string;
  instructorName: string;
  instructorTitle: string;
  badge: string;
  highlights: string[];
  gradient: string;
}

export const WORKSHOPS_DATA: Workshop[] = [
  {
    id: 'ws-ai-prompt',
    title: 'AI & Prompt Engineering Masterclass',
    category: 'AI',
    date: 'Saturday, Aug 16, 2026',
    time: '6:00 PM - 8:30 PM IST',
    mode: 'Online (Live Zoom)',
    duration: '2.5 Hours',
    level: 'Beginner to Intermediate',
    seatsTotal: 100,
    seatsLeft: 12,
    price: '₹499',
    originalPrice: '₹1,999',
    instructorName: 'Dr. Aarav Sharma',
    instructorTitle: 'AI Research Lead & Ex-Google Innovator',
    badge: 'LIMITED SEATS',
    gradient: 'bg-[#E53935]',
    highlights: [
      'Master zero-shot, chain-of-thought & custom prompt templates',
      'Build your first AI autonomous agent during the live session',
      'Automate daily work using ChatGPT, Claude 3 & Midjourney',
      'Certificate of Attendance & Exclusive Prompt Sheet PDF'
    ]
  },
  {
    id: 'ws-fullstack-live',
    title: 'Full Stack App in 3 Hours Bootcamp',
    category: 'Development',
    date: 'Sunday, Aug 17, 2026',
    time: '10:00 AM - 1:00 PM IST',
    mode: 'Offline (Hybrid Campus)',
    duration: '3 Hours',
    level: 'All Levels',
    seatsTotal: 50,
    seatsLeft: 7,
    price: '₹799',
    originalPrice: '₹2,999',
    instructorName: 'Vikramaditya Roy',
    instructorTitle: 'Senior Full Stack Architect @ TechCorp',
    badge: 'FILLING FAST',
    gradient: 'bg-[#E53935]',
    highlights: [
      'Code a real React + TypeScript + Node.js full stack application live',
      'Deploy your live app to Vercel with free HTTPS domain',
      'Learn modern database connections with Prisma & PostgreSQL',
      '1-on-1 Q&A session with industry software engineers'
    ]
  },
  {
    id: 'ws-insta-growth',
    title: 'Instagram Viral Content & Reel Growth Workshop',
    category: 'Marketing',
    date: 'Wednesday, Aug 20, 2026',
    time: '7:00 PM - 9:00 PM IST',
    mode: 'Online (Live Zoom)',
    duration: '2 Hours',
    level: 'Beginner',
    seatsTotal: 150,
    seatsLeft: 24,
    price: '₹399',
    originalPrice: '₹1,499',
    instructorName: 'Ananya Verma',
    instructorTitle: 'Content Strategist (1M+ Reach Growth Coach)',
    badge: 'POPULAR',
    gradient: 'bg-[#E53935]',
    highlights: [
      'The 3-second hook structure that guarantees high Reel views',
      'CapCut editing hacks for professional high-contrast videos',
      'Monetization roadmap for personal brands & small businesses',
      'Free download: 50+ High-Converting Script Templates'
    ]
  },
  {
    id: 'ws-google-business',
    title: 'Google Business Profile #1 Ranking Blueprint',
    category: 'Business',
    date: 'Saturday, Aug 23, 2026',
    time: '4:00 PM - 6:30 PM IST',
    mode: 'Online (Live Zoom)',
    duration: '2.5 Hours',
    level: 'Beginner',
    seatsTotal: 80,
    seatsLeft: 19,
    price: '₹499',
    originalPrice: '₹1,999',
    instructorName: 'Rohan Malhotra',
    instructorTitle: 'Local SEO Specialist & Agency Founder',
    badge: 'MUST ATTEND',
    gradient: 'bg-[#E53935]',
    highlights: [
      'Step-by-step setup to get into Google Map 3-Pack',
      'Automating customer review requests via QR & WhatsApp',
      'Local geotagged image optimization tactics',
      'Client pitching blueprint to earn ₹25,000/mo per local business'
    ]
  },
  {
    id: 'ws-crm-automation',
    title: 'CRM Sales & Funnel Automation Workshop',
    category: 'CRM',
    date: 'Sunday, Aug 24, 2026',
    time: '11:00 AM - 1:30 PM IST',
    mode: 'Online (Live Zoom)',
    duration: '2.5 Hours',
    level: 'Intermediate',
    seatsTotal: 60,
    seatsLeft: 11,
    price: '₹599',
    originalPrice: '₹2,499',
    instructorName: 'Priya Sundaram',
    instructorTitle: 'HubSpot Certified Admin & Sales Automation Strategist',
    badge: 'LIMITED SEATS',
    gradient: 'bg-[#E53935]',
    highlights: [
      'Configuring HubSpot deal pipelines and lead scoring triggers',
      'Connecting landing page forms to automated WhatsApp & email drips',
      'Creating executive revenue reporting dashboards',
      'Hands-on Make.com & Zapier workflow building demo'
    ]
  },
  {
    id: 'ws-digital-marketing',
    title: 'Digital Marketing & Meta Ad Scalability',
    category: 'Marketing',
    date: 'Thursday, Aug 28, 2026',
    time: '6:30 PM - 9:00 PM IST',
    mode: 'Online (Live Zoom)',
    duration: '2.5 Hours',
    level: 'All Levels',
    seatsTotal: 120,
    seatsLeft: 18,
    price: '₹499',
    originalPrice: '₹1,999',
    instructorName: 'Karan Patel',
    instructorTitle: 'Performance Marketer ($500k Ad Spend Managed)',
    badge: 'HIGH DEMAND',
    gradient: 'bg-[#E53935]',
    highlights: [
      'Building profitable Facebook & Instagram ad campaigns from scratch',
      'Ad creative copy principles that lower Cost Per Lead (CPL)',
      'Retargeting custom audiences & lookalike modeling',
      'Live ad account teardown & live campaign audit'
    ]
  }
];
