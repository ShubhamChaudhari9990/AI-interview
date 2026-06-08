import { Component } from '@angular/core';
import { Benefit, CareerHero, WorkplaceImage } from '../../../../shared/interfaces/careers.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-careers',
  imports: [CommonModule],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class Careers {
  heroSection: CareerHero = {
    badge: "We're Hiring",

    title: 'Build the future of',

    highlightedText: 'human-AI collaboration.',

    description:
      'Help us create a world where every candidate finds their perfect role and every company finds their ideal team.',

    image: 'assets/images/career/hero-office.jpg',
  };

  workplaceImages: WorkplaceImage[] = [
    {
      image: 'assets/images/career/workshop.jpg',
      title: 'Collaborative Workspaces',
      subtitle: 'Where ideas become reality.',
    },
    {
      image: 'assets/images/career/human-first.jpg',
      title: 'Human First',
    },
    {
      image: 'assets/images/career/event.jpg',
    },
    {
      image: 'assets/images/career/office.jpg',
    },
  ];

  benefits: Benefit[] = [
    {
      icon: '🏠',
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with flexible schedules.',
    },
    {
      icon: '🩺',
      title: 'Premium Health',
      description: '100% covered medical, dental and vision plans.',
    },
    {
      icon: '💵',
      title: 'Meaningful Equity',
      description: 'Every full-time employee receives ownership.',
    },
  ];
}
