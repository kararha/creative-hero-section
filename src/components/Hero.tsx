import { useState } from "react";
import SpotlightRevealHero from "./artwork/SpotlightRevealHero.tsx";
import ImperialHeroArtwork from "./artwork/ImperialHeroArtwork.tsx";
import ImperialEmblem from "./artwork/ImperialEmblem.tsx";
import { useLiquidGlass } from "../hooks/useLiquidGlass.ts";
import { ChevronDown } from "lucide-react";

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
      brightness: -0.23,
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
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden pt-8 sm:pt-12 pb-8 sm:pb-12"
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
        className="liquid-glass-card liquid-glass-refraction absolute left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-[14%] md:right-[20%] lg:right-[26%] xl:right-[31%] bottom-10 sm:bottom-14 z-30 w-[calc(100%-2rem)] max-w-[320px] sm:max-w-none sm:w-[330px] md:w-[350px] min-h-[440px] sm:min-h-[480px] rounded-[40px] p-7 sm:p-8 select-none transition-all duration-300 hover:scale-[1.015] flex flex-col justify-between overflow-hidden"
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
            "0 32px 64px -16px rgba(41, 39, 37, 0.22), 0 16px 32px -12px rgba(0, 0, 0, 0.12), inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95), inset 0 -1.5px 2px 0 rgba(255, 255, 255, 0.3)",
        }}
      >
        {/* Prismatic Rainbow Caustic Dispersion Layer */}
        <div className="liquid-glass-caustic-border" aria-hidden="true" />
        <div className="liquid-glass-prism-ring" aria-hidden="true" />

        {/* Top Header: Circular Biscuit Emblem with Shield (Exact match to image.png) */}
        <div className="relative z-10 flex items-center justify-start">
          <div className="w-12 h-12 rounded-full bg-[#C4A88E] flex items-center justify-center shadow-xs">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-[#24211E] text-[#24211E]"
              aria-hidden="true"
            >
              <path d="M12 2L4 5.5v5.5c0 5.25 3.4 10.15 8 11.35 4.6-1.2 8-6.1 8-11.35V5.5L12 2z" />
            </svg>
          </div>
        </div>

        {/* Card Body: Editorial Headline & Subcopy (Exact match to image.png in Arabic) */}
        <div className="relative z-10 pt-16 sm:pt-20 pb-2">
          <h3 className="font-cinzel text-2xl sm:text-[26px] font-bold text-[#24211E] tracking-tight leading-[1.2]">
            احْمِ سِجِلَّاتِ المَجْد
            <span className="block text-[#47413B] font-semibold text-lg sm:text-[20px] font-sans-clean mt-1">
              — صَامِدَةٌ لَا تَنْكَسِر،
            </span>
            <span className="block text-[#24211E] mt-0.5">
              مَنِيعَةٌ، خَالِدَةٌ، أَبَدِيَّة
            </span>
          </h3>

          <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-[#5A534B] font-sans-clean font-normal">
            احْفَظْ مَسَارَكَ، وَاحْجُبْ أَثَرَكَ، وَاعْبُرْ حُدُودَ المَمَالِكِ بِلَا قَيْد. مَنَاعَةٌ إِمْبِرَاطُورِيَّةٌ سَرْمَدِيَّة — لَا رَقَابَةَ تَنَالُ مِنْكَ، وَلَا حُدُودَ تُثْنِيكَ، وَلَا مَسَاوَمَةَ عَلَى سِيَادَتِك.
          </p>
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
