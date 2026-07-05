import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site, siteUrl } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title =
  "Vamsi Seemakurthi — Senior Business Analyst | Growth & Marketing Analytics";
const description =
  "Vamsi Seemakurthi is a Senior Business Analyst at Capital One specializing in growth analytics, marketing analytics, credit card acquisition strategy, customer segmentation, A/B testing, lifecycle marketing, and funnel optimization — $15M+ in incremental NPV delivered. Open to senior business analyst, growth analytics, marketing data science, and acquisition strategy roles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Vamsi Seemakurthi",
    "Senior Business Analyst",
    "Growth Analytics",
    "Marketing Analytics",
    "Marketing Data Scientist",
    "Acquisition Strategy",
    "Credit Card Acquisition",
    "Customer Segmentation",
    "A/B Testing",
    "Experimentation",
    "Lifecycle Marketing",
    "Funnel Optimization",
    "Funnel Analytics",
    "Remarketing",
    "NPV Analysis",
    "Campaign Analytics",
    "Marketing Science",
    "Business Analyst portfolio",
    "SQL",
    "Python",
    "Tableau",
    "Capital One",
    "Washington DC",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "Vamsi Seemakurthi — Portfolio",
    title,
    description,
    images: [
      {
        url: "/headshot.jpg",
        width: 1333,
        height: 2000,
        alt: "Vamsi Seemakurthi — Senior Business Analyst, Growth & Marketing Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/headshot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "1iGqJxmV7ZfsUlu6HUKyOn-4-nfur3ghg3NW8j704uo",
  },
};

const themeInit = `(function(){try{if(localStorage.getItem("theme")==="light"){document.documentElement.classList.remove("dark")}}catch(e){}})();`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Senior Business Analyst",
  description:
    "Growth and marketing analytics professional specializing in credit card acquisition strategy, customer segmentation, A/B testing, and lifecycle marketing.",
  worksFor: { "@type": "Organization", name: "Capital One" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Purdue University" },
    { "@type": "CollegeOrUniversity", name: "Sathyabama University" },
  ],
  knowsAbout: [
    "Growth Analytics",
    "Marketing Analytics",
    "Credit Card Acquisition Strategy",
    "Customer Segmentation",
    "A/B Testing & Experimentation",
    "Lifecycle Marketing",
    "Funnel Optimization",
    "Remarketing",
    "NPV & ROI Analysis",
    "FCRA Compliance",
    "SQL",
    "Python",
    "Tableau",
  ],
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Washington",
    addressRegion: "DC",
    addressCountry: "US",
  },
  url: siteUrl,
  image: `${siteUrl}/headshot.jpg`,
  sameAs: [site.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
