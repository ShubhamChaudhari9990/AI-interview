import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';

@Component({
  selector: 'app-interview',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, Sidebar],
  templateUrl: './interview.html',
  styleUrls: ['./interview.css'],
})
export class InterviewComponent {
  sidebarItems = [
    {
      label: 'Dashboard',
      icon: '/assets/images/dashboard.svg',
      route: '/dashboard',
      active: false,
    },
    {
      label: 'Interviews',
      icon: '/assets/images/interviews.svg',
      route: '/interview',
      active: true,
    },
    {
      label: 'Reports',
      icon: '/assets/images/reports.svg',
      route: '/reports',
      active: false,
    },
    {
      label: 'Resume Analysis',
      icon: '/assets/images/resume-analysis.svg',
      route: '/resume-analysis',
      active: false,
    },
    {
      label: 'Notifications',
      icon: '/assets/images/notifications.svg',
      route: '/notifications',
      active: false,
    },
    {
      label: 'Profile',
      icon: '/assets/images/profile.svg',
      route: '/profile',
      active: false,
    },
    {
      label: 'Settings',
      icon: '/assets/images/settings.svg',
      route: '/settings',
      active: false,
    },
    {
      label: 'Help',
      icon: '/assets/images/help.svg',
      route: '/help',
      active: false,
    },
  ];

  interviewPlans = [
    {
      title: 'Node.js',
      description: 'Backend architecture, event-loop, and streams.',
      duration: '60 Mins',
      badge: 'Popular',
      color: 'from-sky-500 to-cyan-500',
    },
    {
      title: 'Angular',
      description: 'Enterprise frontend, RxJS, and TypeScript.',
      duration: '45 Mins',
      badge: 'Frontend',
      color: 'from-indigo-500 to-violet-500',
    },
    {
      title: 'Python',
      description: 'Data structures, AI logic, and scripting.',
      duration: '50 Mins',
      badge: 'Data',
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Custom Stack',
      description: 'Upload your own requirements.',
      duration: 'Flexible',
      badge: 'Custom',
      color: 'from-slate-500 to-stone-600',
    },
  ];

  activeInterviews = [
    {
      name: 'Jordan Smith',
      role: 'Senior Node.js Developer',
      status: 'Live Now',
      progress: 65,
      badgeClass: 'bg-emerald-100 text-emerald-800',
      initials: 'JS',
      note: 'In progress in room A4.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Frontend Lead (Angular)',
      status: 'In Waiting Room',
      progress: 0,
      badgeClass: 'bg-slate-100 text-slate-800',
      initials: 'ER',
      note: 'Starts in 4m · Video enabled',
    },
  ];

  historyRows = [
    {
      candidate: 'Marcus Sterling',
      email: 'm.sterling@example.com',
      technology: 'Node.js',
      date: 'Oct 24, 2023 · 14:30 PM',
      score: '92/100',
      status: 'Completed',
      statusClass: 'text-emerald-600 bg-emerald-50',
    },
    {
      candidate: 'Linh Tran',
      email: 'ltran@dev.co',
      technology: 'Angular',
      date: 'Oct 22, 2023 · 11:00 AM',
      score: '78/100',
      status: 'Completed',
      statusClass: 'text-amber-700 bg-amber-50',
    },
    {
      candidate: 'Kevin Baker',
      email: 'kbaker@tech.io',
      technology: 'Python',
      date: 'Oct 20, 2023 · 16:15 PM',
      score: '--',
      status: 'Aborted',
      statusClass: 'text-slate-600 bg-slate-100',
    },
  ];

  // Quick start inline state
  showQuickStart = false;
  isStarting = false;
  selectedTechnology = 'Angular';
  selectedSeniority = 'Senior';
  selectedDuration = 45;

  openQuickStart(): void {
    this.showQuickStart = true;
  }

  closeQuickStart(): void {
    this.showQuickStart = false;
  }

  startInterview(): void {
    this.isStarting = true;

    // simulate loading/provisioning then navigate or close
    setTimeout(() => {
      this.isStarting = false;
      this.closeQuickStart();
      // after start completes, navigate to main dashboard
      // (adjust route if you have a dedicated interview session route)
      // window.location.href = '/dashboard';
    }, 1600);
  }
}
