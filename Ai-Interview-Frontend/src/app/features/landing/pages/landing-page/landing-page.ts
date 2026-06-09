import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CtaBanner } from '../../../../shared/components/cta-banner/cta-banner';
import { FaqItem, Feature, PricingPlan } from '../../../../shared/interfaces/landing.interfaces';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, CtaBanner],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

  companies = ['CLOUDFLARE', 'STRIPE', 'FIGMA', 'NOTION', 'AIRBNB'];

  features: Feature[] = [
    {
      title: 'AI Mock Interviews',
      description: 'Practice interviews with AI-generated questions.',
      icon: '🤖',
      color: 'bg-indigo-100',
      details:
        'Our AI conducts realistic mock interviews, evaluates your answers, and provides personalized feedback to improve your confidence and communication skills.',
    },
    {
      title: 'Real-Time Feedback',
      description: 'Receive instant feedback on your performance.',
      icon: '⏱️',
      color: 'bg-cyan-100',
      details:
        'Get instant insights on speaking pace, confidence, filler words, and communication effectiveness while answering interview questions.',
    },
    {
      title: 'Coding Challenges',
      description: 'Solve real interview coding problems.',
      icon: '💻',
      color: 'bg-green-100',
      details:
        'Practice DSA, system design, and real-world coding interview questions with detailed solutions and performance tracking.',
    },
  ];
  steps = [
    {
      number: 1,
      title: 'Choose Your Track',
      description:
        'Select from Software Engineering, Product Management, Marketing, or specialized interview paths.',
    },
    {
      number: 2,
      title: 'Simulate the Session',
      description:
        'Engage in a full-length video or text-based interview session with our adaptive AI interviewer.',
    },
    {
      number: 3,
      title: 'Review Performance',
      description:
        'Receive a detailed breakdown of your performance with actionable tips and personalized resources.',
    },
  ];

  stats = [
    { value: '85%', label: 'Hiring Success Rate' },
    { value: '40k+', label: 'Interviews Hosted' },
    { value: '120', label: 'Industry Tracks' },
    { value: '4.9/5', label: 'User Rating' },
  ];

  plans: PricingPlan[] = [
    {
      name: 'Free',
      description: 'For quick preparation.',
      price: '$0',
      duration: '/month',
      features: ['2 Mock Interviews / month', 'Basic Behavioral Feedback', 'Community Access'],
      buttonText: 'Start for Free',
    },
    {
      name: 'Pro',
      description: 'For serious job seekers.',
      price: '$29',
      duration: '/month',
      popular: true,
      features: [
        'Unlimited AI Interviews',
        'Detailed Body Language Analysis',
        'All Industry Tracks',
        'Resume Tailoring',
      ],
      buttonText: 'Upgrade to Pro',
    },
    {
      name: 'Enterprise',
      description: 'For career centers & teams.',
      price: 'Custom',
      features: [
        'Multi-user dashboard',
        'API Integration',
        'Custom Industry Tracks',
        'Dedicated Success Manager',
      ],
      buttonText: 'Contact Sales',
    },
  ];

  faqs: FaqItem[] = [
    {
      question: 'How accurate is the AI feedback?',
      answer:
        'Our AI analyzes communication, confidence, pacing, and content relevance using advanced machine learning models trained on real interview scenarios.',
      isOpen: false,
    },
    {
      question: 'Does it support technical coding interviews?',
      answer:
        'Yes. We support coding interviews, DSA practice, system design discussions, and language-specific technical assessments.',
      isOpen: false,
    },
    {
      question: 'Can I practice in different languages?',
      answer:
        'Absolutely. InterviewAI supports multiple languages for both mock interviews and feedback generation.',
      isOpen: false,
    },
  ];

  selectedFeature: Feature = this.features[0];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  selectFeature(feature: Feature): void {
    this.selectedFeature = feature;
  }

  startPractice(): void {
    console.log('Start Practice Clicked');
  }
  getStarted(): void {
    console.log('Get Started Clicked');
  }

  viewPricing(): void {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  }

  watchDemo(): void {
    console.log('Watch Demo Clicked');
  }
}
