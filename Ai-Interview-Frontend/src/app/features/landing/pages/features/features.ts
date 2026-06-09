import { Component } from '@angular/core';
import { FeatureHighlight, ResumeSection } from '../../../../shared/interfaces/features.interfaces';
import { CommonModule } from '@angular/common';
import { CtaBanner } from '../../../../shared/components/cta-banner/cta-banner';

@Component({
  selector: 'app-features',
  imports: [CommonModule,CtaBanner],
  standalone: true,
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  featureHighlights: FeatureHighlight[] = [
    {
      tag: 'BEHAVIORAL ANALYSIS',
      title: 'AI-Powered Behavioral Coaching',
      description:
        'Our advanced neural networks analyze micro-expressions, speech patterns, and sentiment to provide actionable feedback.',

      image: 'assets/images/behavioral-analysis.jpg',

      features: [
        {
          title: 'Sentiment Mapping',
          description: 'Real-time tracking of candidate confidence and engagement.',
          icon: '🧠',
        },
        {
          title: 'Voice Modulation',
          description: 'Detecting tone shifts and clarity to evaluate communication.',
          icon: '🎙️',
        },
      ],
    },

    {
      tag: 'TECHNICAL SCORE',
      title: 'Real-time Coding Evaluation',
      description:
        'Go beyond simple pass/fail tests. Our AI monitors coding sessions and provides detailed insights.',

      image: 'assets/images/coding-evaluation.jpg',

      stats: [
        {
          value: 'CI/CD',
          label: 'Compatibility Score',
        },
        {
          value: '100%',
          label: 'Coverage Check',
        },
      ],

      linkText: 'Explore technical assessment',
    },
  ];

  resumeSection: ResumeSection = {
    title: 'Automated Resume Feedback',

    subtitle:
      'Screen thousands of applications in minutes with AI that understands context, not just keywords.',

    features: [
      {
        title: 'Semantic Parsing',
        description: 'Deep-learning models extract skills from narrative descriptions.',
        icon: '📄',
      },
      {
        title: 'Role Alignment',
        description: 'Automatically score candidates against your specific job requirements.',
        icon: '🎯',
      },
      {
        title: 'Bias Filtering',
        description: 'Proactive AI auditing ensures objective evaluation.',
        icon: '🛡️',
      },
    ],

    analytics: {
      percentage: '42%',
      title: 'Reduction in time-to-hire',
      description: 'Our AI identifies the best-fit candidates faster.',
    },

    insights: [
      {
        title: 'Team Benchmarking',
        description: 'Compare candidate performance against your top-performing employees.',
        icon: '👥',
      },
      {
        title: 'Predictive Success',
        description: 'AI-driven retention probability scoring.',
        icon: '✨',
      },
    ],
  };
}
