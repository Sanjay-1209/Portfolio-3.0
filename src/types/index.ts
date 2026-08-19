export interface Project {
  id: string;
  title: string;
  category: 'Analytics & BI' | 'Data Engineering & Pipelines' | 'Web & Digital Solutions' | 'Automation & Tools';
  year: string;
  tagline: string;
  problem: string;
  solution: string;
  approach: string[];
  technologies: string[];
  impact: string[];
  skillsDemonstrated: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  proofBadge?: string;
  industry?: string;
}

export interface Experience {
  id: string;
  company: string;
  companyLogoKey: 'ey' | 'tacheon' | 'hyundai';
  role: string;
  duration: string;
  location: string;
  context: string;
  responsibilities: string[];
  technologies: string[];
  verifiedImpact: {
    metric: string;
    description: string;
  }[];
  featuredProjects?: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortTagline: string;
  iconName: string;
  category: 'Analytics' | 'Engineering' | 'Automation' | 'Web & Tools';
  problem: string;
  solution: string;
  outcome: string;
  deliverables: string[];
  exampleScenario?: {
    inputs: string;
    transformation: string;
    outputs: string;
  };
  targetIndustries: string[];
}

export interface Recommendation {
  id: string;
  name: string;
  role: string;
  company: string;
  companyKey: 'ey' | 'tacheon' | 'hyundai';
  relationship: string;
  date: string;
  linkedinUrl: string;
  avatarUrl: string;
  quote: string;
  highlightPhrase: string;
  verified: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    proficiency?: 'Core' | 'Advanced' | 'Familiar';
    highlight?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  university: string;
  duration: string;
  location: string;
  coursework: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  verified: boolean;
  link?: string;
}

export interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  industry: string;
  serviceRequired: string;
  timeline: string;
  currentProblem: string;
  expectedOutcome: string;
  preferredContactMethod: 'Email' | 'WhatsApp' | 'Phone' | 'LinkedIn';
}
