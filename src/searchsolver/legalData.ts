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

/* Concise, honest policies for a creative content house. No audit /
   crawler / ROI language — those products don't exist here. */
export const legalDocuments: LegalDocument[] = [
  {
    id: "privacy",
    title: "Privacy Policy",
    subtitle: "How Markadeo handles the information you share when you get in touch.",
    lastUpdated: "Updated June 2026",
    sections: [
      {
        heading: "1. What we collect",
        paragraphs: [
          "We only hold the details you choose to give us — typically your name, the brand you represent, your contact details, and whatever you tell us about your project when you message us on WhatsApp or by email.",
          "We do not run trackers, profiles or automated audits on your business. There is no sign-up and no account to create."
        ]
      },
      {
        heading: "2. How we use it",
        paragraphs: [
          "Your information is used solely to reply to your enquiry, scope your project, and stay in touch about work we're doing together. We never sell, rent or share it with other agencies or ad networks.",
          "If we begin working together, we keep the details needed to deliver and invoice the work; otherwise we remove enquiry messages once the conversation has clearly ended."
        ]
      },
      {
        heading: "3. Your choices",
        paragraphs: [
          "You can ask us at any time to show, correct or delete what we hold about you — just message us on the same channel you contacted us through. Because we use WhatsApp and email, those platforms' own privacy terms also apply to messages you send."
        ]
      }
    ]
  },
  {
    id: "terms",
    title: "Terms of Engagement",
    subtitle: "The basics of working with Markadeo on creative and content projects.",
    lastUpdated: "Updated June 2026",
    sections: [
      {
        heading: "1. What we do",
        paragraphs: [
          "Markadeo is a creative content house. We produce content, 3D and motion, manage social channels, build brands, and design and build websites and apps.",
          "We do not guarantee sales, revenue, follower counts or rankings. Our commitment is consistent, high-quality creative work and honest reporting on what we do."
        ]
      },
      {
        heading: "2. Projects & scope",
        paragraphs: [
          "Each project is agreed individually — its scope, timeline and price are confirmed in writing before work starts. Anything outside that agreed scope is discussed and quoted separately.",
          "Ownership of final delivered content transfers to you once the work is paid for in full, unless we agree otherwise in writing."
        ]
      },
      {
        heading: "3. This website",
        paragraphs: [
          "The work shown on this site is representative of our craft and capabilities. Imagery and video may include illustrative stock used to present our style. Nothing on this site is a contractual offer or guarantee of results."
        ]
      }
    ]
  },
  {
    id: "gdpr",
    title: "Cookies",
    subtitle: "What this website stores on your device.",
    lastUpdated: "Updated June 2026",
    sections: [
      {
        heading: "1. A light touch",
        paragraphs: [
          "This is a simple marketing website. It does not use advertising cookies, retargeting pixels or cross-site trackers.",
          "Any storage we use is strictly functional — for example remembering that an intro animation has already played in your current visit."
        ]
      },
      {
        heading: "2. Third-party media",
        paragraphs: [
          "Some images and video are loaded from third-party media hosts to keep the site fast. Those providers may set their own technical cookies; we do not control or read them.",
          "You can clear or block cookies in your browser settings at any time without affecting your ability to browse the site or contact us."
        ]
      }
    ]
  }
];
