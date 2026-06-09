import { Component } from '@angular/core';
import {
  CaseStudy,
  EnterpriseSection,
  RoiSection,
} from '../../../../shared/interfaces/enterprice.interfaces';
import { CommonModule } from '@angular/common';
import { CtaBanner } from '../../../../shared/components/cta-banner/cta-banner';

@Component({
  selector: 'app-enterprise',
  imports: [CommonModule, CtaBanner],
  templateUrl: './enterprise.html',
  styleUrl: './enterprise.css',
})
export class Enterprise {

  enterpriseSection: EnterpriseSection = {
    badge: 'ENTERPRISE GRADE INTELLIGENCE',
    title: 'Scale Your Talent Acquisition with AI Reliability.',
    description: "Empower your global recruitment team with InterviewAI’s enterprise ecosystem. Secure, compliant, and architected for high-volume technical hiring environments.",
    image: 'assets/careers/pexels-yankrukov-7698712.webp',
    complianceCards: [
      {
        title: 'Uncompromising Compliance',
        description: 'GDPR, CCPA and global compliance support.',
        icon: '🛡️',
      },
      {
        title: 'Global Data Residency',
        description: 'Choose where your hiring data is stored.',
        icon: '🌎',
      },
      {
        title: 'Advanced Audit Logs',
        description: 'Complete transparency for hiring activities.',
        icon: '📋',
      },
      {
        title: '99.99% Uptime SLA',
        description: 'Enterprise-grade reliability.',
        icon: '⚡',
      },
    ],

    highlightCard: {
      title: 'Granular RBAC',
      description: 'Manage permissions with sophisticated access controls.',
      buttonText: 'Access Matrix 2.0',
    },
  };

  roiSection: RoiSection = {
    title: 'Measure the Business Impact',
    description: 'Our enterprise partners see measurable gains.',
    metrics: [
      {
        value: '64%',
        title: 'Reduced Time-to-Hire',
        description: 'Accelerate hiring decisions.',
      },
      {
        value: '$12K',
        title: 'Savings Per Hire',
        description: 'Average annual savings.',
      },
    ],
    estimatedSaving: '$1,250,000',
  };

  successStories: CaseStudy[] = [
    {
      image: 'assets/careers/pexels-yankrukov-7698712.webp',
      title: 'Standardizing Quality Across 14 Global Regions',
      description: 'How a global enterprise improved hiring quality.',
      actionText: 'Read Study',
    },
    {
      image: 'assets/careers/pexels-yankrukov-7698712.webp',
      title: 'Automating Compliance in High-Risk Markets',
      description: 'Reducing operational risk through automation.',
      actionText: 'Read Study',
    },
  ];
}
