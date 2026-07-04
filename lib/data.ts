// Production domain — drives canonical URLs, Open Graph tags, robots.txt, and sitemap.xml.
export const siteUrl = "https://vamsi1100.github.io";

export const site = {
  name: "Vamsi Seemakurthi",
  firstName: "Vamsi",
  role: "Senior Business Analyst · Growth & Marketing Analytics",
  company: "Capital One",
  location: "Washington, D.C.",
  email: "vamsiseemaku@gmail.com",
  phone: "+1 (765) 532-5518",
  phoneHref: "tel:+17655325518",
  linkedin: "https://www.linkedin.com/in/vamsi-krishna-seemakurthi/",
  resume: "/Vamsi-Seemakurthi-Resume.pdf",
  availability: "Open to senior growth & marketing analytics roles",
  tagline: "I turn acquisition funnels into growth engines.",
  heroBlurb:
    "Senior Business Analyst at Capital One, where I own acquisition and lifecycle growth strategy for the co-brand card partnerships portfolio. I find the funnel leaks, size them in dollars, and ship the fix — $15M+ in incremental NPV across pre-approval, remarketing, and experimentation programs.",
  targetRoles: [
    "Senior Business Analyst",
    "Growth Analytics",
    "Marketing Analytics",
    "Acquisition Strategy",
    "Marketing Data Science",
  ],
};

export type HeroStat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const heroStats: HeroStat[] = [
  { value: 15, prefix: "$", suffix: "M+", label: "incremental NPV delivered" },
  { value: 20, suffix: "×", label: "bookings unlocked by one root-cause fix" },
  { value: 8, suffix: "/8", label: "partners adopted my A/B test wins" },
  { value: 75, suffix: "%", label: "credit policy approval rate on a first-launch policy" },
];

export const about = {
  philosophy:
    "My approach to growth is leak-first. Before scaling top-of-funnel spend, I make sure the funnel isn't bleeding viable customers — because every point of conversion you recover compounds across every dollar you spend after.",
  paragraphs: [
    "I'm a growth analyst who thinks in funnels and speaks in NPV. At Capital One, I own acquisition and lifecycle strategy across nine co-brand partner brands — finding where high-intent customers drop off, sizing the opportunity, building the investment case, and shipping the program that captures it. Funnel intuition is what peers come to me for.",
    "My path ran from operations analytics in Hyderabad, through Purdue's M.S. in Business Analytics — where I consulted for Kearney, Wood-Mizer, and MES on forecasting and supply-chain models — to consumer credit in Washington, D.C. The common thread: turning messy behavioral data into decisions leadership can fund.",
    "I work at the intersection of marketing, credit policy, UX, and compliance — which means the growth I ship is growth that survives legal review. And when the data says a program I built isn't working, I'm the one who makes the case to kill it.",
  ],
  principles: [
    {
      title: "Funnel first",
      body: "Every engagement starts with where customers drop off and what fixing it is worth.",
    },
    {
      title: "Sized in dollars",
      body: "Recommendations come with NPV attached, not just percentages — that's how they get funded.",
    },
    {
      title: "Test, don't guess",
      body: "A/B tests and holdouts before scale, with measurement designed up front.",
    },
    {
      title: "Honest with the data",
      body: "I've sunset programs I built and launched. The biggest gift you can give a team is honest data.",
    },
  ],
};

export type Education = {
  school: string;
  degree: string;
  note: string;
  period: string;
  location: string;
};

export const education: Education[] = [
  {
    school: "Purdue University — Daniels School of Business",
    degree: "M.S. Business Analytics & Information Management",
    note: "Program Secretary / Treasurer · industry practicums with Kearney, MES & Wood-Mizer",
    period: "2024",
    location: "West Lafayette, IN",
  },
  {
    school: "Sathyabama University",
    degree: "B.E. Computer Science & Engineering",
    note: "Student of Excellence award",
    period: "2023",
    location: "Chennai, India",
  },
];

export type CaseStudy = {
  title: string;
  org: string;
  period: string;
  metric: { value: string; label: string };
  summary: string;
  results: string[];
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "The Prospect Pool That Vanished",
    org: "Capital One",
    period: "Remarketing · Root-Cause Analytics",
    metric: { value: "20×", label: "account bookings from the same campaign infrastructure" },
    summary:
      "I owned the launch of the application-abandoner remarketing channel — and post-launch, the eligible prospect pool came back in the single digits. A channel that should have been one of our highest-volume acquisition surfaces was effectively empty. Nobody handed me a diagnostic brief; it was my channel, so the diagnosis was mine.",
    results: [
      "Audited the pipeline with engineering, then worked through every segmentation rule — the culprit was a compliance exclusion: an under-18 rule silently removed anyone whose date of birth was still blank, and DOB was collected on page 4 of the application",
      "Proved abandonment was front-loaded using clickstream event data no one on the team had analyzed before — built the methodology from scratch",
      "Scoped a campaign-specific fix with legal and compliance (downstream underwriting still screens age): 10× the eligible pool, response rates doubled from 2.5% to 5%, 20× the accounts booked",
    ],
    tags: ["SQL", "Clickstream Analytics", "Root-Cause Analysis", "Segmentation", "Compliance"],
  },
  {
    title: "Eight Partners, Zero Mandate",
    org: "Capital One",
    period: "Experimentation · Cross-Partner Influence",
    metric: { value: "+70bps", label: "conversion lift, adopted by all eight co-brand partners" },
    summary:
      "I sit on a horizontal team supporting eight co-brand partner verticals — with no direct authority over any of them. My clickstream work surfaced page-level drop-offs in the application funnel across partners, so every experiment had to be sold, run, and scaled on the strength of the data alone: two pilots first, then proof, then the rest of the portfolio.",
    results: [
      "Recruited two pilot partners using their own funnel drop-off data — before any test results existed",
      "Offer-page redesign delivered +70bps conversion; application scroll reduction added +30bps on top",
      "Shipped the more readable variant over the raw 'winner' when the lift delta was negligible — winning a test isn't the same as making the right deployment call",
      "Packaged partner-specific results into a case strong enough that all eight partner teams adopted both changes",
    ],
    tags: ["A/B Testing", "Experiment Design", "Funnel Analytics", "Influence Without Authority"],
  },
  {
    title: "Real-Time Pre-Screen, No Precedent",
    org: "Capital One · T-Mobile pilot",
    period: "Credit Policy · New Capability",
    metric: { value: "75%", label: "credit policy approval rate (CPAR) on first launch" },
    summary:
      "I own partnerships acquisition strategy horizontally across the co-brand portfolio. Capital One wanted real-time digital pre-screen at T-Mobile point of sale — no policy, no precedent, no partner performance history. I authored the FCRA-compliant framework from scratch: eligibility, bureau attributes, credit cutoffs, and firm-offer requirements across direct mail, digital, and in-store POS.",
    results: [
      "First real-time digital pre-screen in the Partnerships portfolio — 75% credit policy approval rate at launch",
      "Made the defensible growth call on marketing-stage credit criteria where mature-partner precedent didn't fit a new partner — approved by leadership, with tightening planned as performance data matures",
      "Ran the policy through Legal, Engineering, and Channel Ops to approval on schedule",
      "Proved the broader principle: marketing-stage policy is a growth lever, not just a credit-control gate",
    ],
    tags: ["Credit Policy", "FCRA Compliance", "Partnerships", "Go-to-Market"],
  },
];

export type Project = {
  title: string;
  org: string;
  summary: string;
  impact: string;
};

export const moreProjects: Project[] = [
  {
    title: "Pre-Approval Channel Pivot",
    org: "Capital One",
    summary:
      "Built the NPV case that shifted partnership acquisition from partner-store channels to pre-screen, pre-approval, and digital remarketing — then owned the execution.",
    impact: "33K bookings/yr · ~$5M NPV",
  },
  {
    title: "UX Funnel Experimentation",
    org: "Capital One",
    summary:
      "Mapped the application-to-booking funnel in SQL, isolated two friction points, and drove A/B-tested UX fixes with product — with guardrail metrics on credit quality.",
    impact: "+4–6% conversion · $7–10M NPV",
  },
  {
    title: "EMOB Measurement Framework",
    org: "Capital One",
    summary:
      "Designed a two-tier holdout — a global control plus per-campaign holdouts — so leadership could read both individual email lift and cumulative program ROI.",
    impact: "Adopted as the org-wide standard",
  },
  {
    title: "Referral Program Sunset",
    org: "Capital One",
    summary:
      "Diagnosed why a three-partner referral launch ran NPV-negative — disengaged customers were being asked to advocate — and made the case to sunset my own program.",
    impact: "~$2M in annual losses avoided",
  },
  {
    title: "Multi-Channel Remarketing Expansion",
    org: "Capital One",
    summary:
      "Took pre-approval remarketing from email-only to a multi-channel test-and-learn portfolio in under a year — expanded cadence, launched the team's first paid-media retargeting pilot, direct mail next in design.",
    impact: "1 → 3 channels in under a year",
  },
  {
    title: "Supplier Stockout Risk Model",
    org: "Kearney × Purdue",
    summary:
      "Python-based stockout risk model with automated Tableau reporting across a network of 800 suppliers.",
    impact: "KPI visibility 8% → 100%",
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  logo?: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Senior Business Analyst",
    company: "Capital One",
    period: "Apr 2025 — Present",
    location: "Washington, D.C.",
    logo: "/logos/capitalone.png",
    bullets: [
      "Own acquisition and lifecycle growth strategy across co-brand partnerships — 33K annual bookings (~$5M NPV) driven by pre-approval funnel optimization and remarketing across email, direct mail, and digital.",
      "Built the investment case that shifted partnership acquisition strategy from partner-store channels to pre-screen, pre-approval, and digital remarketing — adopted by senior leadership, then reprioritized the 2026–27 roadmap toward top-of-funnel growth.",
      "Delivered $7–10M in incremental NPV by diagnosing funnel drop-offs and driving A/B-tested UX experimentation that lifted application-to-booking conversion 4–6% — adopted by all eight co-brand partners.",
      "Authored the FCRA-compliant policy for the portfolio's first real-time digital pre-screen capability, piloting at T-Mobile with a 75% credit policy approval rate (CPAR).",
      "Lifted early-tenure customer spend 5% with a personalized cashback campaign, and built the two-tier holdout framework now standard for measuring lifecycle program ROI.",
      "Mentor two analysts and managed three summer interns across segmentation, campaign analytics, and remarketing delivery.",
    ],
  },
  {
    role: "Business Intelligence Analyst",
    company: "Tecaholic",
    period: "Oct 2024 — Mar 2025",
    location: "Chicago, IL",
    logo: "/logos/tecaholic.png",
    bullets: [
      "Cut time-to-hire 25% with SQL-based lead scoring built on post-application customer data.",
      "Shipped Tableau dashboards tracking paid media spend, lead quality, and funnel health for 25+ stakeholders.",
      "Ran monthly ROI and funnel reviews that steered campaign targeting and budget allocation.",
    ],
  },
  {
    role: "Graduate Analytics Consultant",
    company: "Kearney · MES Inc · Wood-Mizer (Purdue)",
    period: "Aug 2023 — Jul 2024",
    location: "West Lafayette, IN",
    logo: "/logos/purdue.png",
    bullets: [
      "Kearney — built a Python stockout-risk model with automated Tableau reporting covering 800 suppliers, raising supplier KPI visibility from 8% to 100%.",
      "MES Inc — cut procurement lead times 15% with a 200+ component inventory database spanning 3,000+ global suppliers, and trimmed EV production planning cycles 6%.",
      "Wood-Mizer — delivered a 95%-accurate demand forecast for U.S. and Canadian markets, cutting stockouts 15% and lifting targeted-marketing effectiveness 20%.",
    ],
  },
  {
    role: "Business Operations Analyst",
    company: "Market Data Forecast",
    period: "Jan 2022 — Jul 2023",
    location: "Hyderabad, India",
    logo: "/logos/marketdataforecast.png",
    bullets: [
      "Grew new-member enrollment 10% by mining acquisition and engagement campaign performance for targeting improvements.",
      "Cut lead turnaround time 15% by automating sales reporting and clearing bottlenecks in lead-management workflows.",
    ],
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "scripting_&_analysis",
    items: ["Python", "Databricks", "SQL", "R", "SAS", "Clickstream Analytics"],
  },
  {
    title: "data_platforms",
    items: ["BigQuery", "Snowflake", "MySQL", "GCP", "AWS", "Azure"],
  },
  {
    title: "bi_&_storytelling",
    items: ["Tableau", "QuickSight", "ThoughtSpot", "Excel + VBA", "Executive Communication"],
  },
  {
    title: "growth_&_experimentation",
    items: [
      "A/B Testing & Holdout Design",
      "Customer Segmentation",
      "Funnel Analytics",
      "Lifecycle / EMOB Campaigns",
      "Remarketing & Retargeting",
    ],
  },
  {
    title: "financial_rigor",
    items: [
      "NPV & ROI Analysis",
      "Financial Modeling",
      "Budgeting",
      "Credit Underwriting",
      "Acquisition Policy",
    ],
  },
  {
    title: "marketing_stack",
    items: [
      "Salesforce Marketing Cloud",
      "Email / Direct Mail / Paid Media",
      "Campaign Measurement",
      "KPI Frameworks",
      "FCRA / UDAAP Compliance",
    ],
  },
];

export const certifications: string[] = [
  "Tableau Desktop Specialist",
  "Certified Analytics Professional (CAP)",
  "AWS Certified Cloud Practitioner",
  "Microsoft Azure Fundamentals",
];
