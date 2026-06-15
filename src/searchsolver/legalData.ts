export interface LegalDocument {
  id: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const legalDocuments: LegalDocument[] = [
  {
    id: "gdpr",
    title: "UK GDPR Compliance Policy",
    subtitle: "Rigorously aligned with the UK Data Protection Act 2018 (DPA) and statutory data processing codes.",
    lastUpdated: "Amended June 2026",
    sections: [
      {
        heading: "1. Core Principles & Lawful Basis of Processing",
        paragraphs: [
          "SearchSolver Digital Ltd collects, maintains, and processes data under the lawful basis of legitimate commercial interest (Article 6(1)(f) UK GDPR) and/or explicitly defined consent for communication. Our systems are engineered from the ground up prioritizing data minimalisation.",
          "We process corporate domains and parameters exclusively to deliver search marketing metrics, crawl audits, and search campaign forecast estimates. All audit telemetry is strictly isolated."
        ]
      },
      {
        heading: "2. Scope of Collected Corporate Data",
        paragraphs: [
          "Data inputs received through our self-service UK SEO audit console—including organizational URLs, representative target locations, email markers, and rival competitor profiles—are processed to calculate SEO score variables.",
          "Specifically, we do not intentionally process special category sensitive data. IP addresses and client headers are processed to mitigate automated abuse on local residential search servers."
        ]
      },
      {
        heading: "3. Retention Period & Secure Telemetry Separation",
        paragraphs: [
          "Analytical scores and campaign audit ledgers are retained in browser session-level state buffers (localStorage) for user convenience. When synchronized with the central desk, we permanently discard primary request markers after 180 days unless engaged on active campaign retainer terms.",
          "Data is hosted on sovereign UK networks with high-grade transport layer encryption protocols."
        ]
      },
      {
        heading: "4. Your Statutory Information Rights",
        paragraphs: [
          "Under UK GDPR regulations, you hold explicit statutory rights to inspect, update, or permanently delete any stored logs referencing your corporate brand or electronic mailbox. Contact the desk coordinator directly at partnerships@searchsolver.net to execute an official Subject Access Request (SAR)."
        ]
      }
    ]
  },
  {
    id: "pecr",
    title: "PECR Cookie Directive",
    subtitle: "Compliance with the Privacy and Electronic Communications Regulations regarding cookies & digital tracking.",
    lastUpdated: "Amended June 2026",
    sections: [
      {
        heading: "1. Consent Management Benchmarks",
        paragraphs: [
          "SearchSolver Digital Ltd implements privacy principles set by the Privacy and Electronic Communications Regulations (PECR). We avoid pre-checked boxes or silent tracking scripts.",
          "Users retain sovereign rights to configure web parameters to discard functional or analytical identifiers without degrading the dynamic performance of the search forecasts."
        ]
      },
      {
        heading: "2. Core and Analytical Taxonomy",
        paragraphs: [
          "Strictly Essential Cookies: These are critical for core security validations, local analysis saving state components, and CSRF token integrity. These do not store personal details.",
          "Performance Insights: Anonymous parameters recording overall traffic frequencies, rendering durations across UK regions, and organic device signals. No personal trackers are ever loaded."
        ]
      },
      {
        heading: "3. No Advertising Ad-Network Trackers",
        paragraphs: [
          "True to our professional enterprise ethos, SearchSolver operates with absolute zero retargeting networks, pixel tracking overlays, or cross-origin profile syndication. Your search performance strategy remains completely confidential."
        ]
      }
    ]
  },
  {
    id: "privacy",
    title: "Corporate Privacy Charter",
    subtitle: "A professional covenant safeguarding our enterprise partnerships and search strategy intelligence.",
    lastUpdated: "Amended June 2026",
    sections: [
      {
        heading: "1. Absolute Search Confidentiality Commitment",
        paragraphs: [
          "All website URLs, target marketing campaigns, localized geography scopes, and rival metrics supplied during the strategic calculation phase are treated as strictly confidential commercial information.",
          "We do not sell, rent, license, or distributionally share your diagnostic ledgers with third-party networks, advertisement systems, or competing marketing agencies."
        ]
      },
      {
        heading: "2. Technical Security Implementations",
        paragraphs: [
          "We house crawler operations and calculations inside secure container frameworks. All residential crawler operations run through dedicated HTTP proxies with isolated encryption buffers to shield search parameters.",
          "Our employees are bound by continuous legal Non-Disclosure Agreements (NDAs) to protect strategic plans."
        ]
      },
      {
        heading: "3. External Search Crawling Safeguards",
        paragraphs: [
          "Standard crawling scripts mirror actual browser clients to retrieve structural details and headers from provided target URL directories. Our spiders observe standard Robot Exclusion Protocols (robots.txt) and operate inside standard index loads to avoid server strain on audited sites."
        ]
      }
    ]
  },
  {
    id: "terms",
    title: "Terms of Engagement",
    subtitle: "Operational terms governing strategic audits, calculated estimates, and diagnostic consultations.",
    lastUpdated: "Amended June 2026",
    sections: [
      {
        heading: "1. Scope of Tactical Assessments",
        paragraphs: [
          "The search audits provided via the automated console constitute initial diagnostic indicators based on active UK residential crawlers. Generated indicators do not constitute explicit contractual guarantees of immediate top-tier SERP ranks.",
          "Search ranking variables are governed dynamically by third-party search indexes which change frequently."
        ]
      },
      {
        heading: "2. Strategic Forecast Estimates",
        paragraphs: [
          "All potential organic revenue multiplications, click models, and calculations processed via the RoI Optimizer calculator are based on average UK market index standards and targeted optimizations. Actual conversion multipliers require professional engagement and localized optimization routines."
        ]
      },
      {
        heading: "3. Professional Advisory Alignment",
        paragraphs: [
          "To secure engagement with our strategist desk, prospective companies must possess valid registered operations in the UK or represent valid overseas markets targetting UK search audiences, and maintain a functional, compliant digital footprint."
        ]
      }
    ]
  }
];
