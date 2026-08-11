export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  outcomes: string[];
  iconName: string;
  badge?: string;
  targetAges?: string;
  hoverHighlight?: string;
  quickTip?: string;
  typicalFormat?: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
  keyActivities: string[];
  duration?: string;
  familyRole?: string;
  deliverable?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  parentName: string;
  childDetails: string;
  serviceReceived: string;
  rating: number;
}

export interface FeaturePillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ResourceItem {
  id: string;
  category: 'Guide' | 'Checklist' | 'Article' | 'Tip Sheet';
  title: string;
  description: string;
  readTime: string;
  downloadable?: boolean;
}

export interface ConsultationFormData {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  areaOfSupport: string;
  preferredService: string;
  message: string;
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  category: string;
  options: { label: string; scoreArea: string }[];
}
