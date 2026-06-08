export interface HelpCategory {
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface FAQSection {
  title: string;
  faqs: FAQ[];
}
