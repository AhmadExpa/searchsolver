export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  ukMarketContext: string;
  /** Honest "what you get" deliverable line — never a fabricated result. */
  whatYouGet: string;
  /** Brandable section image. */
  image: string;
  imageAlt: string;
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
