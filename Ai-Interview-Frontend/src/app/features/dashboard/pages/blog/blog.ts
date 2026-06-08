import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogArticle } from '../../../../shared/interfaces/blog.interfaces';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  article: BlogArticle = {
    category: 'ARTIFICIAL INTELLIGENCE',

    title: 'The Future of AI in Recruitment: Balancing Efficiency and Empathy',

    description:
      'Exploring how AI is transforming recruitment while maintaining human-centered hiring.',

    author: {
      name: 'Elena Chen',
      role: 'Head of Research',
      avatar: 'assets/images/authors/elena.jpg',
    },

    heroImage: 'assets/images/blog/ai-recruitment.jpg',

    sections: [
      {
        heading: 'The Shift from Screening to Selection',
        content:
          'Artificial intelligence is fundamentally changing how organizations evaluate talent.',
      },
      {
        heading: 'Building an Empathy-First Framework',
        content: 'Modern recruitment requires balancing efficiency with human connection.',
      },
    ],

    tags: ['Recruitment', 'Artificial Intelligence', 'Future of Work'],

    relatedArticles: [
      {
        title: 'Reducing Time-to-Hire with Predictive Analytics',
        image: 'assets/images/blog/blog-1.jpg',
        category: 'Analytics',
        publishDate: 'March 2025',
      },
      {
        title: 'How to Write Better Job Descriptions',
        image: 'assets/images/blog/blog-2.jpg',
        category: 'Recruitment',
        publishDate: 'April 2025',
      },
      {
        title: 'The Ethical Implications of AI',
        image: 'assets/images/blog/blog-3.jpg',
        category: 'AI Ethics',
        publishDate: 'May 2025',
      },
    ],
  };
}
