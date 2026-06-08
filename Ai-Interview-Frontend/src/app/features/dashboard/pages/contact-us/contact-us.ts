import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactInfo, QuickLink } from '../../../../shared/interfaces/contact.interfaces';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  contactInfo: ContactInfo[] = [
    {
      icon: '📍',
      title: 'Office Address',
      value: 'San Francisco, CA, USA',
    },
    {
      icon: '✉️',
      title: 'Email Support',
      value: 'support@interviewai.com',
    },
    {
      icon: '🎧',
      title: 'Support Hours',
      value: 'Mon - Fri | 9 AM - 6 PM',
    },
  ];

  quickLinks: QuickLink[] = [
    {
      icon: '❓',
      title: 'Help Center',
      route: '/help',
    },
    {
      icon: '📚',
      title: 'API Docs',
      route: '/docs',
    },
    {
      icon: '💬',
      title: 'Live Chat',
      route: '/chat',
    },
    {
      icon: '🎓',
      title: 'Tutorials',
      route: '/tutorials',
    },
  ];
}
