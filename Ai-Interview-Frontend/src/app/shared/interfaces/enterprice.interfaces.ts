export interface EnterpriseFeature {
  title: string;
  description: string;
  icon: string;
}

export interface EnterpriseHighlight {
  title: string;
  description: string;
  buttonText: string;
}

export interface EnterpriseSection {
  badge: string;
  title: string;
  description: string;
  image: string;
  complianceCards: EnterpriseFeature[];
  highlightCard: EnterpriseHighlight;
}

export interface RoiMetric {
  value: string;
  title: string;
  description: string;
}

export interface RoiSection {
  title: string;
  description: string;
  metrics: RoiMetric[];
  estimatedSaving: string;
}

export interface CaseStudy {
  image: string;
  title: string;
  description: string;
  actionText: string;
}