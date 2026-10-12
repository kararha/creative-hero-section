import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import ImperialEmblem from "./artwork/ImperialEmblem.tsx";
import { useLiquidGlass } from "../hooks/useLiquidGlass.ts";

interface NavbarProps {
  activeSection: string;
  onOpenContact: () => void;
  artVariant: "gold" | "marble" | "spotlight";
  onToggleArtVariant: () => void;
}

export default function Navbar({
  activeSection,
  onOpenContact,
  artVariant,
  onToggleArtVariant,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Initialize LiquidGlass effect on navbar pill with exact same config
  useLiquidGlass({
    rootSelector: "#navbar-container",
    glassSelector: ".glass-nav-pill",
    defaults: {
      blurAmount: 0.27,
      refraction: 2,
      chromAberration: 0.205,
      edgeHighlight: 0.59,
      specular: 0.15,
      fresnel: 1,
      distortion: 0.08,
      cornerRadius: 40,
      zRadius: 40,
      opacity: 1,
      saturation: -0.25,
      brightness: -0.23,
      shadowOpacity: 0.3,
      shadowSpread: 10,
      bevelMode: 0,
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "رَكَائِزُ المَجْد", href: "#features" },
    { label: "خَرِيطَةُ المَمَالِك", href: "#servers" },
    { label: "عُهُودُ الفُرْسَان", href: "#pricing" },
    { label: "المَخْطُوطَات", href: "#download" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-12 py-3 sm:py-4 ${
        scrolled ? "bg-[#F7F3EF]/85 backdrop-blur-md shadow-xs" : "bg-transparent"
      }`}
    >
      <div
        id="navbar-container"
        className="max-w-7xl mx-auto flex items-center justify-between gap-4 relative"
      >
        {/* Left: Minimal Custom Legion Emblem & Brand Name */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-[#292725] group shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B69A75]"
        >
          <div className="w-8 h-8 rounded-full border border-[#B69A75]/40 bg-white/70 backdrop-blur-xs flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs">
            <ImperialEmblem className="w-4.5 h-4.5" color="#B69A75" />
          </div>
          <span className="font-cinzel tracking-normal text-sm sm:text-base font-bold text-[#292725] whitespace-nowrap">
            فَيْلَقُ الأَسَاطِير
          </span>
        </a>

        {/* Center: Translucent Pill-Shaped Navigation Container with WebGL LiquidGlass */}
        <nav
          className="glass-nav-pill liquid-glass-card liquid-glass-refraction hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/90 select-none overflow-hidden transition-all duration-300"
          data-config={JSON.stringify({
            blurAmount: 0.27,
            refraction: 2,
            chromAberration: 0.205,
            edgeHighlight: 0.59,
            specular: 0.15,
            fresnel: 1,
            distortion: 0.08,
            cornerRadius: 40,
            zRadius: 40,
            opacity: 1,
            saturation: -0.25,
            brightness: -0.23,
            shadowOpacity: 0.3,
            shadowSpread: 10,
            bevelMode: 0,
          })}
          style={{
            boxShadow:
              "0 16px 36px -8px rgba(41, 39, 37, 0.16), 0 6px 16px -4px rgba(0, 0, 0, 0.07), inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95), inset 0 -1px 1.5px 0 rgba(255, 255, 255, 0.35)",
          }}
          aria-label="التنقل الرئيسي"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative z-10 px-4 py-1.5 text-xs font-semibold tracking-normal transition-all rounded-full whitespace-nowrap ${
                  isActive
                    ? "text-[#1F1D1B] font-bold bg-white/50 shadow-2xs"
                    : "text-[#4A4540] hover:text-[#1F1D1B] hover:bg-white/30"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Style Variant Pill, Arrow Action & Contact Us Button */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Aesthetic Sentinel Theme Toggle */}
          <button
            type="button"
            onClick={onToggleArtVariant}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#B69A75]/30 bg-white/60 hover:bg-white text-[#5C5752] hover:text-[#292725] transition-all shadow-2xs cursor-pointer"
            title={`التبديل إلى ${artVariant === "gold" ? "رخام القياصرة" : "ذهب الأساطير"}`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B69A75]" />
            <span>{artVariant === "gold" ? "ذَهَبُ الأَسَاطِير" : "رُخَامُ القَيَاصِرَة"}</span>
          </button>

          {/* Circular External-Link / Protocol Status Button */}
          <a
            href="#servers"
            onClick={(e) => scrollToSection(e, "#servers")}
            className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full border border-white/80 bg-white/70 backdrop-blur-xs flex items-center justify-center text-[#292725] hover:bg-white hover:scale-105 transition-all shadow-2xs cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B69A75]"
            title="تَفَقَّدْ خَرِيطَةَ الحُصُونِ وَالمَمَالِك"
            aria-label="تَفَقَّدْ خَرِيطَةَ الحُصُونِ وَالمَمَالِك"
          >
            <ArrowUpRight className="w-4 h-4 text-[#292725]" />
          </a>

          {/* Contact Us Pill Button */}
          <button
            type="button"
            onClick={onOpenContact}
            className="px-4 sm:px-5 py-1.5 sm:py-2 text-xs font-semibold tracking-normal text-[#292725] bg-white/80 hover:bg-[#292725] hover:text-white border border-[#B69A75]/35 rounded-full backdrop-blur-xs transition-all shadow-2xs cursor-pointer whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B69A75]"
          >
            نِدَاءُ الحُرَّاس
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8.5 h-8.5 rounded-full border border-white/80 bg-white/70 flex items-center justify-center text-[#292725]"
            aria-label="فتح قائمة التنقل"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl glass-ivory border border-white/90 shadow-lg space-y-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2.5 text-sm font-medium text-[#292725] hover:bg-white/70 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#E8E3DE] flex items-center justify-between">
            <button
              type="button"
              onClick={onToggleArtVariant}
              className="flex items-center gap-2 text-xs text-[#5C5752] hover:text-[#292725]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B69A75]" />
              <span>الهيئة: {artVariant === "gold" ? "ذهب الأساطير" : "رخام القياصرة"}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-xs font-semibold text-[#B69A75] hover:text-[#8C7052]"
            >
              نِداءُ الحُرّاس &larr;
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
