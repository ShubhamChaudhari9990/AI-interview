export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
  details: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  duration?: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}
