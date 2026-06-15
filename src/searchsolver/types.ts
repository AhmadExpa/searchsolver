export interface ClientProject {
  id: string;
  name: string;
  category: string;
  industry: string;
  projectScope: string[];
  metrics: {
    label: string;
    value: string;
  };
  narrative: string;
  tagline: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  ukMarketContext: string;
  roiEstimate: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  title: string;
  duration: string;
  summary: string;
  growthMetric: string;
  organicTrafficGain: string;
  revenueGenerated: string;
  challenge: string;
  solution: string;
  timeline: { month: string; value: number }[];
  imageUrl?: string;
  imageAlt?: string;
}

export interface AuditSubmission {
  id: string;
  companyName: string;
  websiteUrl: string;
  ukLocation: string;
  targetMetric: string;
  competitors: string;
  timestamp: string;
  status: 'Pending Analysis' | 'Analysis Completed' | 'Report Generated';
  scores?: {
    seo: number;
    speed: number;
    content: number;
    security: number;
  };
}
