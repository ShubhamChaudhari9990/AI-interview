import { Component } from '@angular/core';
import {
  BlogCategory,
  BlogPost,
  FeaturedBlog,
} from '../../../../shared/interfaces/blog-list.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-listing',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './blog-listing.html',
  styleUrl: './blog-listing.css',
})
export class BlogListing {
  categories: BlogCategory[] = [
    { id: 1, name: 'All Articles', active: true },
    { id: 2, name: 'Interview Tips' },
    { id: 3, name: 'AI Tech' },
    { id: 4, name: 'Career Growth' },
  ];

  featuredPost: FeaturedBlog = {
    image: 'assets/blog-listing/blog-head.webp',
    title: 'Mastering the Future: How AI is Redefining Technical Interviews',
    description: 'Explore the transformative impact of generative AI on candidate assessment, from real-time coding analysis to bias mitigation in global hiring workflows.',
    author: 'Dr. Sarah Chen',
    role: 'Chief AI Officer',
    authorImage: 'assets/blog-listing/profile.webp',
  };

  blogPosts: BlogPost[] = [
    {
      id: 1,
      category: 'Career Growth',
      title: '10 Soft Skills Every AI-Era Manager Needs',
      description: 'Learn essential leadership skills.',
      image: 'assets/blog-listing/blog-head.webp',
      readTime: '6 min read',
    },
    {
      id: 2,
      category: 'Interview Tips',
      title: 'The Perfect Prompt: Navigating AI Interviews',
      description: 'Master AI-powered interviews.',
      image: 'assets/blog-listing/blog-head.webp',
      readTime: '8 min read',
    },
    {
      id: 3,
      category: 'Hiring Strategy',
      title: 'Scaling Your Team with Precision',
      description: 'Optimize hiring with AI.',
      image: 'assets/blog-listing/blog-head.webp',
      readTime: '12 min read',
    },
    {
      id: 4,
      category: 'AI Tech',
      title: 'Beyond the Algorithm: Ethical AI',
      description: 'Building responsible AI systems.',
      image: 'assets/blog-listing/blog-head.webp',
      readTime: '5 min read',
    },
    {
      id: 5,
      category: 'Industry News',
      title: '2024 State of Tech Recruitment',
      description: 'Latest trends and hiring insights.',
      image: 'assets/blog-listing/blog-head.webp',
      readTime: '10 min read',
    },
  ];
}
