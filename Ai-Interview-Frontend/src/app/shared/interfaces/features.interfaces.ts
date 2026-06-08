export interface FeatureHighlight {
  tag: string;
  title: string;
  description: string;
  image: string;
  features?: FeatureItem[];
  stats?: FeatureStat[];
  linkText?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface FeatureStat {
  value: string;
  label: string;
}

export interface ResumeFeature {
  title: string;
  description: string;
  icon: string;
}

export interface AnalyticsCard {
  percentage: string;
  title: string;
  description: string;
}

export interface InsightCard {
  title: string;
  description: string;
  icon: string;
}

export interface ResumeSection {
  title: string;
  subtitle: string;
  features: ResumeFeature[];
  analytics: AnalyticsCard;
  insights: InsightCard[];
}
