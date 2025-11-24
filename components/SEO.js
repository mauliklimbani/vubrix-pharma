import Head from "next/head";
import { useRouter } from "next/router";

const defaultSEO = {
  title: "Vubrix Pharma | GMP Certified API & Intermediate Manufacturer in India",
  description: "Vubrix Pharma delivers GMP-certified Active Pharmaceutical Ingredients and intermediates from Surat, Gujarat, supporting regulated markets with custom synthesis, scalable manufacturing, and end-to-end quality systems.",
  keywords: "Vubrix Pharma, GMP API manufacturer India, pharmaceutical intermediates Gujarat, custom synthesis partner, Surat API supplier, bulk drug manufacturer, CDMO India, regulated market APIs, pharmaceutical ingredients exporter",
  image: "/logo.svg",
  url: "https://www.vubrixpharma.com",
  siteName: "Vubrix Pharma",
  type: "website",
  locale: "en_US",
  twitterHandle: "@vubrixpharma",
};

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  noindex = false,
  structuredData,
  canonical,
}) {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || defaultSEO.url;
  const currentUrl = canonical || `${baseUrl}${router.asPath}`;
  const pageTitle = title
    ? title.includes(defaultSEO.siteName)
      ? title
      : `${title} | ${defaultSEO.siteName}`
    : defaultSEO.title;
  const pageDescription = description || defaultSEO.description;
  const pageKeywords = keywords || defaultSEO.keywords;
  const pageImage = image ? (image.startsWith("http") ? image : `${baseUrl}${image}`) : `${baseUrl}${defaultSEO.image}`;

  // Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vubrix Pharma",
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    description: "Leading manufacturer of high-quality Active Pharmaceutical Ingredients and Intermediates",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Arihant industry, Block No. 117/C, Plot No. 9/B, N.H. No. 8, Pipodara",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "394 110",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8732916059",
      contactType: "Customer Service",
      email: "support@vubrixpharma.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/vubrixpharma",
      "https://twitter.com/vubrixpharma",
      "https://www.facebook.com/vubrixpharma",
    ],
  };

  // Website structured data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vubrix Pharma",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="Vubrix Pharma" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Surat, Gujarat" />
      <meta name="geo.position" content="21.0977;72.7411" />
      <meta name="ICBM" content="21.0977, 72.7411" />
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" hrefLang="en-in" href={currentUrl} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || "Vubrix Pharma"} />
      <meta property="og:site_name" content={defaultSEO.siteName} />
      <meta property="og:locale" content={defaultSEO.locale} />
      <meta property="og:locale:alternate" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content={title || "Vubrix Pharma"} />
      <meta name="twitter:site" content={defaultSEO.twitterHandle} />
      <meta name="twitter:creator" content={defaultSEO.twitterHandle} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#002769" />
      <meta name="msapplication-TileColor" content="#002769" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Vubrix Pharma" />

      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Structured Data - Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Custom Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}

