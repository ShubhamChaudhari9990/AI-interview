import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CtaBanner } from '../../../../shared/components/cta-banner/cta-banner';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule,CtaBanner],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {
  faqItems = [
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time from your account settings.',
      isOpen: false,
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept Visa, Mastercard, American Express and PayPal.',
      isOpen: false,
    },
    {
      question: 'Is there a discount for annual billing?',
      answer: 'Yes, annual billing includes a discount compared to monthly billing.',
      isOpen: false,
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Refunds are handled on a case-by-case basis according to our refund policy.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
