import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ChevronRight,
  Shield,
  Award,
  Users,
  Globe,
  Beaker,
  Factory,
  CheckCircle,
  TrendingUp
} from "lucide-react";

import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NewsSection from "@/components/home/NewsSection";

export default function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vubrixpharma.com";
  
  // Homepage structured data
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Vubrix Pharma - Leading API & Intermediate Manufacturer",
    description: "Leading manufacturer of high-quality Active Pharmaceutical Ingredients and Intermediates, serving the global pharmaceutical industry with innovation and excellence.",
    url: baseUrl,
    mainEntity: {
      "@type": "Organization",
      name: "Vubrix Pharma",
      url: baseUrl,
      logo: `${baseUrl}/logo.svg`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8732916059",
        contactType: "Customer Service",
        email: "support@vubrixpharma.com",
        areaServed: "Worldwide",
      },
    },
  };

  return (
    <Layout>
      <SEO
        title="Vubrix Pharma - Leading API & Intermediate Manufacturer | Pharmaceutical Ingredients"
        description="Vubrix Pharma is a leading manufacturer of high-quality Active Pharmaceutical Ingredients (APIs) and Intermediates. Serving the global pharmaceutical industry with GMP-compliant products, custom synthesis, and innovative solutions. Contact us for API manufacturing, pharmaceutical intermediates, and custom synthesis services."
        keywords="API manufacturer, pharmaceutical intermediates, active pharmaceutical ingredients, GMP compliant, custom synthesis, pharmaceutical manufacturing, API supplier, pharmaceutical chemicals, drug intermediates, pharma API, Vubrix Pharma, API manufacturing India, pharmaceutical ingredients supplier"
        image="/logo.svg"
        url={baseUrl}
        structuredData={homepageSchema}
      />

      <div className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Overview */}
        <ServicesOverview />

        {/* Stats Section */}
        <StatsSection />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Latest News */}
        {/* <NewsSection /> */}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#002769] to-[#001732] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-[#ccd5e1] mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your API and intermediate requirements. Our team is ready to provide 
                you with high-quality solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={createPageUrl("Contact")}>
                  <Button size="lg" className="bg-white text-[#002769] hover:bg-gray-100">
                    Get a Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href={createPageUrl("Products")}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-[#002769]"
                  >
                    View Products
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
