/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import FeaturesSection from "./components/FeaturesSection.tsx";
import ServersSection from "./components/ServersSection.tsx";
import ComparisonSection from "./components/ComparisonSection.tsx";
import PricingSection from "./components/PricingSection.tsx";
import DownloadSection from "./components/DownloadSection.tsx";
import ContactModal from "./components/ContactModal.tsx";
import Footer from "./components/Footer.tsx";

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
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Sovereign Concierge Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
