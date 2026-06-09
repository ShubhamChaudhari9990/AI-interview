import { Component } from '@angular/core';
import {
  Benefit,
  CareerHero,
  WorkplaceImage,
} from '../../../../shared/interfaces/careers.interfaces';
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
    highlightedText: 'human-AI',
    description:
      'Help us create a world where every candidate finds their perfect role and every company finds their ideal team.',
    image: 'assets/careers/pexels-yankrukov-7698712.webp',
  };

  workplaceImages: WorkplaceImage[] = [
    {
      image: 'assets/careers/pexels-yankrukov-7698712.webp',
      title: 'Collaborative Workspaces',
      subtitle: 'Where ideas become reality.',
    },
    {
      image: 'assets/careers/pexels-yankrukov-7698712.webp',
      title: 'Human First',
    },
    {
      image: 'assets/careers/pexels-yankrukov-7698712.webp',
    },
    {
      image: 'assets/careers/pexels-yankrukov-7698712.webp',
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

  departments = [
    {
      name: 'Engineering',
      icon: '⌘',
      jobs: [
        {
          title: 'Senior Frontend Engineer',
          location: 'Remote',
          type: 'Full-time',
        },
        {
          title: 'Staff Backend Engineer (AI/ML)',
          location: 'Remote',
          type: 'Full-time',
        },
      ],
    },
    {
      name: 'Product & Design',
      icon: '◈',
      jobs: [
        {
          title: 'Lead Product Designer',
          location: 'New York / Remote',
          type: 'Full-time',
        },
      ],
    },
    {
      name: 'Growth',
      icon: '↗',
      jobs: [
        {
          title: 'Growth Marketing Manager',
          location: 'London / Remote',
          type: 'Full-time',
        },
        {
          title: 'Account Executive (Enterprise)',
          location: 'Remote',
          type: 'Full-time',
        },
      ],
    },
  ];
}
