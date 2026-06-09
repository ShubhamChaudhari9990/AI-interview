import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactInfo, QuickLink } from '../../../../shared/interfaces/contact.interfaces';
import {
  LucideAngularModule,
  MapPin,
  Mail,
  Headphones,
  CircleHelp,
  BookOpen,
  MessageCircle,
  GraduationCap,
} from 'lucide-angular';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, LucideAngularModule],
  standalone: true,
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      value: 'San Francisco, CA, USA',
    },
    {
      icon: Mail,
      title: 'Email Support',
      value: 'support@interviewai.com',
    },
    {
      icon: Headphones,
      title: 'Support Hours',
      value: 'Mon - Fri | 9 AM - 6 PM',
    },
  ];

  quickLinks = [
    {
      icon: CircleHelp,
      title: 'Help Center',
      route: '/help',
    },
    {
      icon: BookOpen,
      title: 'API Docs',
      route: '/docs',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      route: '/chat',
    },
    {
      icon: GraduationCap,
      title: 'Tutorials',
      route: '/tutorials',
    },
  ];
}
