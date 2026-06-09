import { Component } from '@angular/core';
import { AboutHero, VisionMissionCard,
  Value,
  StoryTimeline,
  TeamMember,
  Statistic, 
  ValuesSection} from '../../../../shared/interfaces/about.interfaces';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CtaBanner } from '../../../../shared/components/cta-banner/cta-banner';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, RouterModule,CtaBanner],
  standalone: true,
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  heroSection: AboutHero = {
    badge: 'OUR HIGHER PURPOSE',

    title: 'Humanizing hiring through intelligent technology.',

    description:
      'At InterviewAI, we believe that every candidate deserves a fair chance and every company deserves the perfect fit.',

    image: 'assets/images/about/team.jpg',

    statistic: {
      label: 'Accuracy Rate',
      value: '99.8%',
    },

    cards: [
      {
        title: 'Our Vision',
        description:
          "To become the world's most trusted platform for professional human-AI collaboration in hiring.",
        icon: 'visibility',
      },
      {
        title: 'Our Mission',
        description:
          'Empowering HR teams with precise data to make life-changing hiring decisions.',
        icon: 'track_changes',
      },
    ],
  };

  valuesSection: ValuesSection = {
    title: 'The values that drive us',

    subtitle:
      'Our culture is built on a foundation of excellence, transparency, and relentless progress.',

    items: [
      {
        title: 'Innovation',
        description:
          'We do not just follow trends; we set them. Our R&D team continuously pushes boundaries.',
        icon: '👁️',
      },
      {
        title: 'Accuracy',
        description:
          'Data integrity is our foundation. Every recommendation is measured against benchmarks.',
        icon: '🎯',
      },
      {
        title: 'Growth',
        description: 'We believe in the continuous evolution of both our platform and customers.',
        icon: '👁️',
      },
    ],
  };

  statistic: Statistic = {
    label: 'Accuracy Rate',
    value: '99.8%',
  };

  visionMissionCards: VisionMissionCard[] = [
    {
      title: 'Our Vision',
      description:
        "To become the world's most trusted platform for professional human-AI collaboration in hiring.",
      icon: '👁️',
    },
    {
      title: 'Our Mission',
      description: 'Empowering HR teams with precise data to make life-changing hiring decisions.',
      icon: '🎯',
    },
  ];

  values: Value[] = [
    {
      title: 'Innovation',
      description: 'We do not just follow trends; we set them.',
      icon: '💡',
    },
    {
      title: 'Accuracy',
      description: 'Every recommendation is verified and benchmarked.',
      icon: '📊',
    },
    {
      title: 'Growth',
      description: 'Helping organizations and candidates evolve.',
      icon: '📈',
    },
  ];

  storyTimeline: StoryTimeline[] = [
    {
      year: '2020',
      title: 'The Spark',
      description: 'InterviewAI was founded with a mission to transform hiring.',
    },
    {
      year: '2022',
      title: 'Series A & Expansion',
      description: 'Secured funding and expanded globally.',
    },
    {
      year: '2024',
      title: 'Global Impact',
      description: 'Supporting thousands of organizations worldwide.',
    },
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      image: 'assets/images/team/sarah.jpg',
      description: 'Passionate about ethical AI and workplace transformation.',
    },
    {
      name: 'Marcus Thorne',
      role: 'Chief Technology Officer',
      image: 'assets/images/team/marcus.jpg',
      description: 'Architect behind our intelligent hiring platform.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Artificial Intelligence',
      image: 'assets/images/team/elena.jpg',
      description: 'Building responsible AI systems for recruitment.',
    },
    {
      name: 'Jameson Lee',
      role: 'VP Product',
      image: 'assets/images/team/jameson.jpg',
      description: 'Focused on exceptional user experiences.',
    },
  ];
}
