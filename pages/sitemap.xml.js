import { createPageUrl } from "@/utils";

function generateSiteMap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vubrixpharma.com";
  const currentDate = new Date().toISOString().split("T")[0];

  // Define all pages with their priorities and change frequencies
  const pages = [
    { url: createPageUrl("Home"), priority: "1.0", changefreq: "daily" },
    { url: createPageUrl("About"), priority: "0.9", changefreq: "monthly" },
    { url: createPageUrl("Products"), priority: "1.0", changefreq: "weekly" },
    { url: createPageUrl("Manufacturing"), priority: "0.8", changefreq: "monthly" },
    { url: createPageUrl("Research"), priority: "0.8", changefreq: "monthly" },
    { url: createPageUrl("Careers"), priority: "0.7", changefreq: "weekly" },
    { url: createPageUrl("Contact"), priority: "0.8", changefreq: "monthly" },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
           xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
           http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
     ${pages
       .map((page) => {
         return `
       <url>
           <loc>${baseUrl}${page.url}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>${page.changefreq}</changefreq>
           <priority>${page.priority}</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;

