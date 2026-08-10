export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Programs' | 'Workshops' | 'Career & Support' | 'Certification';
}

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'How is Zylearn different from traditional coaching institutes?',
    answer: 'Zylearn is built around practical, project-first learning. Instead of memorizing formulas or staring at 200 hours of static video lectures, you build real-world AI applications, full-stack web products, automated CRM systems, and live marketing campaigns with direct 1-on-1 industry mentor guidance.',
    category: 'General'
  },
  {
    question: 'Are the programs suitable for complete beginners with no coding background?',
    answer: 'Yes! Our programs feature clear, step-by-step learning tracks ranging from Beginner to Advanced. Whether you are a college student starting from scratch, a non-tech graduate, or a business owner, our mentors guide you through foundational logic before moving into advanced projects.',
    category: 'Programs'
  },
  {
    question: 'What is the format of Zylearn workshops vs. full programs?',
    answer: 'Workshops are intensive 2 to 3-hour live masterclasses focused on mastering a single high-impact skill (like AI Prompting or Google Business Profile ranking). Full Programs are multi-week comprehensive tracks (4 to 12 weeks) that include live mentorship, portfolio project reviews, certification, and career placement assistance.',
    category: 'Workshops'
  },
  {
    question: 'Do I get a certificate upon completion?',
    answer: 'Yes! Every student who completes the required hands-on projects and assessments receives an official, verifiable Zylearn Digital Certificate of Completion. You can share your certificate directly on LinkedIn and link it in your resume.',
    category: 'Certification'
  },
  {
    question: 'What kind of career placement support does Zylearn offer?',
    answer: 'We provide portfolio building assistance, ATS-optimized resume preparation, LinkedIn profile optimization, mock technical & behavioral interviews, and direct referral connections to our network of hiring startups and enterprise partners.',
    category: 'Career & Support'
  },
  {
    question: 'Can I join offline workshops if I am in the city?',
    answer: 'Yes! Zylearn operates hybrid learning centers where selected weekend workshops and project bootcamps are held in-person. You can choose between Online (Live Zoom) or Offline campus seats during registration.',
    category: 'Workshops'
  }
];
