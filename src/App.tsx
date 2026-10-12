/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Footer from "./components/Footer.tsx";

// Code splitting: Below-the-fold sections lazy-loaded for optimal bundle size & Core Web Vitals
const FeaturesSection = lazy(() => import("./components/FeaturesSection.tsx"));
const ServersSection = lazy(() => import("./components/ServersSection.tsx"));
const ComparisonSection = lazy(() => import("./components/ComparisonSection.tsx"));
const PricingSection = lazy(() => import("./components/PricingSection.tsx"));
const DownloadSection = lazy(() => import("./components/DownloadSection.tsx"));
const ContactModal = lazy(() => import("./components/ContactModal.tsx"));

// Minimal zero-CLS loading skeleton placeholder
function SectionFallback() {
  return (
    <div className="py-24 px-4 max-w-6xl mx-auto flex items-center justify-center min-h-[300px]">
      <div className="w-8 h-8 rounded-full border-2 border-[#B69A75]/30 border-t-[#B69A75] animate-spin" />
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [artVariant, setArtVariant] = useState<"spotlight" | "marble">("spotlight");

  // Track active section for floating navbar indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "features", "servers", "pricing", "download"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleArtVariant = () => {
    setArtVariant((prev) => (prev === "spotlight" ? "marble" : "spotlight"));
  };

  const handleOpenDownload = () => {
    const downloadEl = document.getElementById("download");
    if (downloadEl) {
      downloadEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F7F3EF] text-[#292725] selection:bg-[#B69A75]/25 selection:text-[#292725]">
      {/* Top Floating Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenContact={() => setIsContactOpen(true)}
        artVariant={artVariant}
        onToggleArtVariant={handleToggleArtVariant}
      />

      {/* Main Content Sections */}
      <main>
        {/* Full-Screen Editorial Hero */}
        <Hero
          artVariant={artVariant}
          onOpenDownload={handleOpenDownload}
        />

        {/* Below-the-fold lazy loaded sections */}
        <Suspense fallback={<SectionFallback />}>
          {/* 01. Imperial Defense Pillars */}
          <FeaturesSection />

          {/* 02. Global Sovereign Network Topology */}
          <ServersSection />

          {/* 03. Protocol Comparison Benchmark */}
          <ComparisonSection />

          {/* 04. Imperial Access Tiers */}
          <PricingSection />

          {/* 05. Cross-Platform Client Suite */}
          <DownloadSection />
        </Suspense>
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Sovereign Concierge Modal */}
      {isContactOpen && (
        <Suspense fallback={null}>
          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
