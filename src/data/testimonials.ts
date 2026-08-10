export interface Testimonial {
  id: string;
  name: string;
  roleBefore: string;
  roleAfter: string;
  companyOrCollege: string;
  programTaken: string;
  avatarUrl: string;
  rating: number;
  content: string;
  tag: 'College Student' | 'Fresher' | 'Working Professional' | 'Entrepreneur';
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Siddharth Mehta',
    roleBefore: 'CS Undergrad (3rd Year)',
    roleAfter: 'AI Software Intern @ TechCorp',
    companyOrCollege: 'BITS Pilani',
    programTaken: 'AI & LLM Mastery',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Zylearn completely shifted my focus from theoretical college textbook code to practical AI engineering. Building a custom LangChain agent in week 3 helped me stand out in my campus interview!',
    tag: 'College Student'
  },
  {
    id: 'test-2',
    name: 'Ananya Deshmukh',
    roleBefore: 'Non-Tech Graduate',
    roleAfter: 'Junior Full Stack Developer',
    companyOrCollege: 'Cognizant',
    programTaken: 'Full Stack Web Development',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'I had zero coding background. Zylearn’s project-first approach meant I built 5 real web apps for my portfolio instead of just watching videos. Got hired within 60 days of completion!',
    tag: 'Fresher'
  },
  {
    id: 'test-3',
    name: 'Rishi Kapoor',
    roleBefore: 'Sales Executive',
    roleAfter: 'CRM & Operations Lead',
    companyOrCollege: 'GrowthPulse SaaS',
    programTaken: 'CRM & Business Automation',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Learning HubSpot and automated Make.com workflows gave me a huge competitive edge at my company. I streamlined our lead capture pipeline and received a 40% salary hike!',
    tag: 'Working Professional'
  },
  {
    id: 'test-4',
    name: 'Meera Nambiar',
    roleBefore: 'Boutique Business Owner',
    roleAfter: 'Founder @ ArtisanalCo',
    companyOrCollege: 'ArtisanalCo',
    programTaken: 'Instagram Growth & Google Business',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'The Google Business Profile workshop helped me land in the top 3 Google Map listings in my city within 3 weeks. Inbound phone calls for my business jumped 300%!',
    tag: 'Entrepreneur'
  },
  {
    id: 'test-5',
    name: 'Tahir Khan',
    roleBefore: 'Final Year IT Student',
    roleAfter: 'Cloud Engineer Associate',
    companyOrCollege: 'Wipro',
    programTaken: 'Cloud & Data Engineering',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'The GCP BigQuery hands-on projects were incredible. My interviewers were shocked at how deeply I understood real-world ETL data pipelines for a fresher.',
    tag: 'College Student'
  }
];
