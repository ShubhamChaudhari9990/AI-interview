export interface AboutHero {
  badge: string;
  title: string;
  description: string;
  image: string;
  statistic: StatisticCard;
  cards: InfoCard[];
}

export interface InfoCard {
  title: string;
  description: string;
  icon: string;
}

export interface StatisticCard {
  label: string;
  value: string;
}

export interface AboutValue {
  title: string;
  description: string;
  icon: string;
}

export interface ValuesSection {
  title: string;
  subtitle: string;
  items: AboutValue[];
}

export interface VisionMissionCard {
  title: string;
  description: string;
  icon: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface StoryTimeline {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export interface Statistic {
  label: string;
  value: string;
}