export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  role?: string;
  joinedYear?: string;
  avatarUrl?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  ctaText: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
}

export interface EligibilityCriterion {
  id: string;
  question: string;
  yesInfo: string;
  noInfo: string;
  isFatal?: boolean;
}

export interface MemberFormData {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  ukAddress: string;
  postalCode: string;
  zambianOriginDetail: string; // e.g. town of origin/link
  beneficiaryName: string;
  beneficiaryContact: string;
  hasChildren: boolean;
  childNames: string; // comma separated
  acceptDeclaration: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
