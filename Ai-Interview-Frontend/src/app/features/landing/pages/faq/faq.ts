import { Component } from '@angular/core';
import { FAQSection, HelpCategory } from '../../../../shared/interfaces/faq.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  
  categories: HelpCategory[] = [
    {
      icon: '📘',
      title: 'General',
      description: 'Platform basics and getting started',
    },
    {
      icon: '🛠️',
      title: 'Technical',
      description: 'Integrations, APIs and setup',
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Privacy, GDPR and compliance',
    },
    {
      icon: '💳',
      title: 'Billing',
      description: 'Plans, invoices and subscriptions',
    },
  ];

  faqSections: FAQSection[] = [
    {
      title: 'General Questions',
      faqs: [
        {
          question: 'What is InterviewAI and how does it work?',
          answer:
            'InterviewAI uses artificial intelligence to analyze interviews and provide actionable insights.',
          isOpen: true,
        },
        {
          question: 'Can I use InterviewAI for high-volume hiring?',
          answer:
            'Yes, InterviewAI is designed to scale from startups to enterprise organizations.',
        },
      ],
    },

    {
      title: 'Technical Support',
      faqs: [
        {
          question: 'Which ATS systems can I integrate with?',
          answer: 'We support Greenhouse, Lever, Workday and many others.',
        },
        {
          question: 'What are the system requirements?',
          answer: 'Any modern browser with internet access.',
        },
      ],
    },

    {
      title: 'Security & Privacy',
      faqs: [
        {
          question: 'How is candidate data protected?',
          answer: 'All data is encrypted both in transit and at rest.',
        },
        {
          question: 'Are you GDPR compliant?',
          answer: 'Yes. We maintain GDPR and SOC2 compliance.',
        },
      ],
    },

    {
      title: 'Billing & Plans',
      faqs: [
        {
          question: 'Do you offer a free trial?',
          answer: 'Yes, we provide a free trial for eligible customers.',
        },
      ],
    },
  ];

  toggleFaq(sectionIndex: number, faqIndex: number): void {
    this.faqSections[sectionIndex].faqs[faqIndex].isOpen =
      !this.faqSections[sectionIndex].faqs[faqIndex].isOpen;
  }
}
