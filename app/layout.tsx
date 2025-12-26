import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "https://utkarsh-educations-icop.vercel.app";

export const metadata: Metadata = {
  title: "Utkarsh Education - Best NEET, JEE, MHT-CET Coaching Classes in Akola",
  description: "Utkarsh Education is the leading coaching institute in Akola for NEET, JEE, and MHT-CET entrance exam preparation. Expert faculty, 250+ mock tests, personalized mentoring, and 95%+ success rate.",
  keywords: "NEET coaching in Akola, JEE coaching in Akola, MHT-CET coaching in Akola, best coaching classes Akola, entrance exam preparation, medical coaching, engineering coaching",
  authors: [{ name: "Utkarsh Education" }],
  creator: "Utkarsh Education",
  publisher: "Utkarsh Education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "Utkarsh Education",
    title: "Utkarsh Education - Top Coaching Institute in Akola",
    description: "Leading NEET, JEE, MHT-CET coaching in Akola with expert faculty and high success rate",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Utkarsh Education - Best Coaching in Akola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Education - NEET, JEE, CET Coaching in Akola",
    description: "Expert coaching for medical and engineering entrance exams in Akola",
    images: [`${baseUrl}/og-image.jpg`],
    creator: "@utkarsheducation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        
        {/* Bing Webmaster Tools */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Additional Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Utkarsh Education" />
        <meta name="copyright" content="© 2025 Utkarsh Education. All rights reserved." />
        <meta name="distribution" content="global" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Utkarsh Education",
              image: `${baseUrl}/og-image.jpg`,
              description: "Leading coaching institute for NEET, JEE, and MHT-CET entrance exams in Akola",
              url: baseUrl,
              telephone: "+919370811902",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Akola",
                addressLocality: "Akola",
                addressRegion: "Maharashtra",
                postalCode: "444001",
                addressCountry: "IN",
              },
              areaServed: ["Akola", "Maharashtra", "India"],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "08:00",
                closes: "20:00",
              },
              sameAs: [
                "https://www.facebook.com/utkarsheducation",
                "https://www.instagram.com/utkarsheducation",
                "https://www.youtube.com/utkarsheducation",
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Utkarsh Education",
              url: baseUrl,
              logo: `${baseUrl}/logo.png`,
              description: "Top coaching institute for NEET, JEE, and MHT-CET in Akola",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+919370811902",
                contactType: "Customer Service",
                areaServed: "IN",
              },
              sameAs: [
                "https://www.facebook.com/utkarsheducation",
                "https://www.instagram.com/utkarsheducation",
              ],
            }),
          }}
        />

        {/* Education Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Utkarsh Education",
              url: baseUrl,
              description: "Premium coaching for NEET, JEE, MHT-CET entrance exams",
              foundingDate: "2015",
              location: {
                "@type": "Place",
                name: "Akola",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Akola",
                  addressRegion: "Maharashtra",
                  addressCountry: "IN",
                },
              },
              award: "95%+ Success Rate",
              teaches: ["NEET Preparation", "JEE Preparation", "MHT-CET Preparation"],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
