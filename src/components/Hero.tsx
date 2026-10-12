import { useState } from "react";
import SpotlightRevealHero from "./artwork/SpotlightRevealHero.tsx";
import ImperialHeroArtwork from "./artwork/ImperialHeroArtwork.tsx";
import ImperialEmblem from "./artwork/ImperialEmblem.tsx";
import { useLiquidGlass } from "../hooks/useLiquidGlass.ts";
import { ShieldCheck, Scroll, CheckCircle2, ChevronDown } from "lucide-react";

interface HeroProps {
  artVariant: "gold" | "marble" | "spotlight";
  onOpenDownload: () => void;
}

export default function Hero({ artVariant, onOpenDownload }: HeroProps) {
  const [copiedAudit, setCopiedAudit] = useState(false);

  // Initialize WebGL LiquidGlass library on the right-bottom card with exact user config
  useLiquidGlass({
    rootSelector: "#hero",
    glassSelector: ".liquid-glass-card",
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
      brightness: 0,
      shadowOpacity: 0.3,
      shadowSpread: 10,
      bevelMode: 0,
    },
  });

  const handleCopyHash = () => {
    navigator.clipboard?.writeText("«إِنَّ العَدْلَ مِيزَانُ المُلُوكِ وَالحِكْمَةَ سِلَاحُ الفُرْسَان»");
    setCopiedAudit(true);
    setTimeout(() => setCopiedAudit(false), 2200);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-8 sm:pb-12"
      aria-label="الواجهة الإمبراطورية لسجلات الفيلق"
    >
      {/* Edge-to-Edge Hero Background Artwork with Mouse Hover Reveal */}
      <div className="absolute inset-0 z-0">
        {artVariant === "marble" ? (
          <ImperialHeroArtwork variant="marble" className="w-full h-full" />
        ) : (
          <SpotlightRevealHero />
        )}
      </div>

      {/* Main Hero Foreground Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center pt-4 sm:pt-8 pb-6">
          
          {/* ========================================================= */}
          {/* LEFT/RIGHT COLUMN (RTL): HERO EDITORIAL ARABIC TYPOGRAPHY */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-5 max-w-lg flex flex-col justify-center z-20">
            
            {/* Editorial Kicker / Brand Provenance */}
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <span className="text-[11px] sm:text-xs font-semibold tracking-normal text-[#8C7052] font-cinzel">
                عُهُودُ الحُرَّاسِ الخَالِدِينَ · دِيوَانُ المَمَالِكِ العَتِيقَة
              </span>
            </div>

            {/* Primary Command Headline */}
            <h1
              className="font-cinzel text-3xl sm:text-4xl md:text-5xl xl:text-[54px] font-bold text-[#292725] tracking-tight leading-[1.25] sm:leading-[1.2] mb-6 sm:mb-8"
              style={{ textWrap: "balance" }}
            >
              تَسَيَّدْ آمَادَ الزَّمَان
              <span className="block text-[#4A4540] font-normal text-2xl sm:text-3xl md:text-4xl mt-1">— مَهَابَةٌ لَا تَزُول،</span>
              <span className="block text-[#292725]">سِرٌّ لَا يُخْتَرَق،</span>
              <span className="block text-[#8C7052] font-extrabold text-3xl sm:text-4xl md:text-5xl mt-1">
                مَجْدٌ إِمْبِرَاطُورِيّ
              </span>
            </h1>

            {/* Editorial Vertical Line Accent + Supporting Copy */}
            <div className="flex items-start gap-3 sm:gap-4 max-w-md mb-8 sm:mb-10">
              {/* Short, thin vertical line as subtle editorial detail */}
              <div
                className="w-px h-14 sm:h-16 bg-[#8C7052] shrink-0 mt-1 opacity-70"
                aria-hidden="true"
              />
              <p className="text-xs sm:text-sm leading-relaxed text-[#5C5752] font-sans-clean font-normal">
                «إِنَّ الفَارِسَ الحَقِيقِيَّ لَا يَبْنِي مَجْدَهُ عَلَى أَنْقَاضِ الصَّخَب، بَلْ يُخَلِّدُ حِكْمَتَهُ فِي سِجِلَّاتِ الصَّمْتِ حَتَّى تُنْشِدَهَا الرِّيَاحُ لِلأَجْيَالِ القَادِمَة» — حِكْمَةُ حَامِي البَوَّابَةِ الشَّمْسِيَّة.
              </p>
            </div>

            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#pricing"
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#292725] text-white hover:bg-[#1A1816] transition-all duration-200 text-xs sm:text-sm font-semibold tracking-normal shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center gap-2.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B69A75]"
              >
                <ImperialEmblem className="w-4 h-4" color="#FAF7F2" />
                <span>اقْتَنِ مَخْطُوطَةَ الخُلُود</span>
              </a>

              <a
                href="#download"
                onClick={onOpenDownload}
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/70 hover:bg-white text-[#292725] border border-[#B69A75]/40 transition-all duration-200 text-xs sm:text-sm font-semibold tracking-normal backdrop-blur-xs shadow-2xs hover:shadow-sm cursor-pointer"
              >
                اسْتَكْشِفِ المَخْزَنَ الأُسْطُورِيّ
              </a>
            </div>

            {/* Unboxed Metadata Proof Line */}
            <div className="mt-8 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-[#7A7369]">
              <span>دِيوَانُ الحِكَمِ العَتِيقَة</span>
              <span aria-hidden="true">·</span>
              <span>أَسْرَارٌ نَقِيَّةٌ لَا تَبِيد</span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={handleCopyHash}
                className="hover:text-[#292725] underline decoration-[#B69A75]/50 cursor-pointer"
                title="نَسْخُ خَتْمِ الحِكْمَةِ العَتِيقَة"
              >
                {copiedAudit ? "تَمَّ نَسْخُ خَتْمِ الحِكْمَة" : "أَخْتَامُ الفَيْلَقِ الإِمْبِرَاطُورِيّ"}
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* UNOBSTRUCTED RIGHT ZONE: OPEN WARRIOR & VEIL SPOTLIGHT     */}
          {/* ========================================================= */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7 pointer-events-none min-h-[460px]" />

        </div>
      </div>

      {/* ========================================================= */}
      {/* RIGHT BOTTOM LIQUID GLASS CARD (Powered by @ybouane/liquidglass) */}
      {/* ========================================================= */}
      <div
        className="liquid-glass-card absolute left-4 sm:left-8 lg:left-12 bottom-16 sm:bottom-20 z-30 w-[300px] sm:w-[330px] rounded-[40px] p-5 sm:p-6 select-none border border-white/75 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.015]"
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
          brightness: 0,
          shadowOpacity: 0.3,
          shadowSpread: 10,
          bevelMode: 0,
        })}
        style={{
          boxShadow:
            "0 32px 64px -16px rgba(41, 39, 37, 0.18), 0 16px 32px -12px rgba(0, 0, 0, 0.1), inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95), inset 0 -1.5px 2px 0 rgba(255, 255, 255, 0.3)",
        }}
      >
        {/* Top Header: Security Emblem & ChaCha20 Badge */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="w-8.5 h-8.5 rounded-full bg-white/85 border border-[#B69A75]/40 flex items-center justify-center shadow-xs">
            <ShieldCheck className="w-4.5 h-4.5 text-[#B69A75]" />
          </div>
          <div className="flex items-center gap-1.5 text-[10px] tracking-normal text-[#736B63] bg-white/70 px-2.5 py-1 rounded-full border border-white/80 shadow-2xs backdrop-blur-xs font-semibold">
            <Scroll className="w-3 h-3 text-[#B69A75]" />
            <span>خَتْمُ الحِكْمَةِ العَتِيقَة</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="space-y-1.5 mb-3.5">
          <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#292725] tracking-tight leading-snug">
            حِصْنُ الخَالِدِينَ
            <span className="block text-[#8C7052] font-semibold text-xs sm:text-sm mt-0.5">
              — مَنِيعٌ، إِمْبِرَاطُورِيّ
            </span>
          </h3>

          <p className="text-[11px] leading-relaxed text-[#5C5752] font-sans-clean font-normal">
            «لَا تَهَابَنَّ صَلِيلَ السُّيُوفِ إِذَا كَانَتْ عَزِيمَتُكَ نُورَ الحَقِيقَة، فَمَا صَمَدَ الدَّهْرُ إِلَّا لِمَنْ ثَبَتَ فِي وَجْهِ العَاصِفَةِ بِصَمْتٍ وَوَقَار.»
          </p>
        </div>

        {/* Telemetry Footer */}
        <div className="pt-3 border-t border-[#E8E2D8]/80 flex items-center justify-between text-[10px] text-[#736B63]">
          <span className="flex items-center gap-1 text-[#4A4540]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#B69A75]" />
            مَوْثُوقٌ بِأَلْوَاحِ الأَسْلَاف
          </span>
          <span className="text-[#8C7052] font-semibold">سِجِلٌّ نَقِيٌّ خَالِد</span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* UNDERSTATED DARK PILL DECORATIVE ELEMENT AT BOTTOM        */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full flex justify-center items-center px-4 mt-2">
        <a
          href="#features"
          className="group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#292725] text-[#FAF7F2] text-[11px] font-medium tracking-normal border border-[#B69A75]/30 shadow-md hover:bg-[#1A1816] hover:border-[#B69A75] transition-all cursor-pointer"
          title="اسْتَعْرِضْ سِجِلَّاتِ الحِكَمِ الإِمْبِرَاطُورِيَّة"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B69A75]" />
          <span>مَوْسُوعَةُ أَقْوَالِ الفُرْسَانِ وَسِيَرِ المُلُوك</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#B69A75] transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
