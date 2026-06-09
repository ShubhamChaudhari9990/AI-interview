import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, Sidebar],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef<HTMLDivElement>;
  private chart?: echarts.ECharts;
  dashboardItems = [
    {
      label: 'Dashboard',
      icon: '/assets/images/dashboard.svg',
      route: '/dashboard',
      active: true,
    },
    {
      label: 'Interviews',
      icon: '/assets/images/interviews.svg',
      route: '/interview',
      active: false,
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

  scoreChart = [
    { label: 'Oct 14', value: 62 },
    { label: 'Oct 16', value: 72 },
    { label: 'Oct 18', value: 68 },
    { label: 'Oct 20', value: 82 },
    { label: 'Oct 22', value: 76 },
    { label: 'Oct 24', value: 88 },
    { label: 'Oct 26', value: 92 },
  ];

  technologyPerformance = [
    { name: 'Angular', percent: 90 },
    { name: 'JavaScript', percent: 85 },
    { name: 'TypeScript', percent: 88 },
    { name: 'Node.js', percent: 80 },
    { name: 'Firebase', percent: 75 },
  ];

  recentInterviews = [
    { tech: 'Angular 17+', date: 'Oct 24, 2023', score: '88/100', status: 'Passed', statusClass: 'passed' },
    { tech: 'TypeScript Deep Dive', date: 'Oct 22, 2023', score: '79/100', status: 'Pending', statusClass: 'pending' },
    { tech: 'Node.js Architecture', date: 'Oct 20, 2023', score: '82/100', status: 'Passed', statusClass: 'passed' },
    { tech: 'Firebase Rules', date: 'Oct 18, 2023', score: '74/100', status: 'Failed', statusClass: 'failed' },
  ];

  recommendedTags = ['Angular Signals', 'RxJS Patterns', 'NgRx Effects', 'Firebase Rules'];

  chartY(value: number): number {
    const minY = 30;
    const maxY = 180;
    return maxY - ((value - 50) / 50) * (maxY - minY);
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  ngOnDestroy(): void {
    this.chart?.dispose();
  }

  private initChart(): void {
    this.chart = echarts.init(this.chartContainer.nativeElement);
    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderColor: '#dbeafe',
        borderWidth: 1,
        textStyle: {
          color: '#0f172a',
        },
      },
      grid: {
        left: '6%',
        right: '4%',
        top: '12%',
        bottom: '12%',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.scoreChart.map((point) => point.label),
        axisLine: {
          lineStyle: { color: '#cbd5e1' },
        },
        axisTick: { show: false },
        axisLabel: { color: '#64748b' },
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          lineStyle: { color: '#e2e8f0' },
        },
        axisLabel: {
          color: '#64748b',
        },
      },
      series: [
        {
          data: this.scoreChart.map((point) => point.value),
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 8,
          lineStyle: {
            width: 4,
            color: '#3525CD',
          },
          itemStyle: {
            color: '#3525CD',
            borderColor: '#ffffff',
            borderWidth: 2,
          },
          areaStyle: {
            color: 'rgba(53, 37, 205, 0.16)',
          },
        },
      ],
    };
    this.chart.setOption(option);
  }
}
