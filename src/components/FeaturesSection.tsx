import { useState } from "react";
import { Shield, Sparkles, Sword, Compass, Check, Copy } from "lucide-react";

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [copiedQuote, setCopiedQuote] = useState(false);

  const sagas = [
    {
      id: "steadfastness",
      title: "عَهْدُ الصُّمُودِ وَحُصُونُ الجَبَل",
      subtitle: "حِكْمَةُ القَائِدِ أُورِيلْيُوس الصَّامِد",
      icon: Shield,
      quote:
        "«مَنْ لَمْ تَصْقُلْهُ عَوَاصِفُ الشِّتَاءِ لَمْ يَسْتَحِقَّ دِفْءَ شَمْسِ الرَّبِيع، وَالحِصْنُ المَنِيعُ لَا تَبْنِيهِ الحِجَارَةُ وَحْدَهَا، بَلْ قُلُوبُ الرِّجَالِ الَّذِينَ لَا يَنْكَسِرُونَ أَمَامَ المِحَن.»",
      narrator: "سِجِلَّاتُ مَمَرِّ الثُّلُوج — العَامُ ٤١٢ قَبْلَ الانْكِسَار",
      metrics: [
        { label: "ثَبَاتُ العَزِيمَة", value: "مُطْلَق" },
        { label: "مَنَاعَةُ الحُصُون", value: "أَبَدِيَّة" },
        { label: "خَتْمُ الأَسْلَاف", value: "مَوْثُوق" },
      ],
      details:
        "حِينَ يَفِرُّ الجَمِيعُ أَمَامَ زَمْجَرَةِ الرِّيَاحِ، يَقِفُ حُمَاةُ الفَيْلَقِ كَأَطْوَادِ الجِبَالِ الرَّاسِيَة، لَا يَشْغَلُهُمْ صَدَى العَاصِفَة، بَلْ يَنْظُرُونَ دَوْمًا إِلَى مَجْدِ الغَدِ المُرْتَقَب.",
    },
    {
      id: "silence",
      title: "حِكْمَةُ الصَّمْتِ وَنُورُ الأَسْرَار",
      subtitle: "دِيوَانُ عُيُونِ الأَبْرَاجِ العَاجِيَّة",
      icon: Sparkles,
      quote:
        "«الصَّمْتُ سَيْفٌ لَا يُرَى، وَالحِكْمَةُ دِرْعٌ لَا يُثْلَم؛ مَنْ حَفِظَ سِرَّهُ سَادَ قَوْمَهُ، وَمَنْ أَرْخَى لِسَانَهُ سَلَبَ مَجْدَهُ بِيَدِهِ قَبْلَ أَنْ يَنَالَهُ خَصْمُه.»",
      narrator: "أَلْوَاحُ الكَاهِنَةِ فِيدِيلْيَا — بُرْجُ الحُكَمَاءِ الأَوَّل",
      metrics: [
        { label: "كِتْمَانُ العُهُود", value: "١٠٠٪" },
        { label: "بَصِيرَةُ النَّفْس", value: "نَافِذَة" },
        { label: "نَقَاءُ السَّرِيرَة", value: "خَالِص" },
      ],
      details:
        "الأَقْوَالُ العَظِيمَةُ لَا تُقَالُ صِيَاحًا فِي السَّاحَاتِ العَامَّة، بَلْ تُنْقَشُ بِهُدُوءٍ فِي أَعْمَاقِ القُلُوبِ وَتَسْرِي مَعَ الرِّيَاحِ نُورًا يَهْدِي السَّائِرِينَ فِي عَتَمَةِ اللَّيْل.",
    },
    {
      id: "chivalry",
      title: "شَرَفُ السَّيْفِ وَعَدَالَةُ الفُرْسَان",
      subtitle: "مِيثَاقُ الفُرْسَانِ السَّبْعَة",
      icon: Sword,
      quote:
        "«السَّيْفُ فِي يَدِ الظَّالِمِ هَلَاك، وَفِي يَدِ الفَارِسِ عَدْلٌ وَمَلَاذ؛ لَا تَسْتَلَّ سِلَاحَكَ إِلَّا لِرَفْعِ ضَيْمٍ أَوْ حِمَايَةِ عَهْدٍ قَطَعْتَهُ لِلْمُسْتَضْعَفِينَ فِي الأَرْض.»",
      narrator: "الفَارِسُ لِيُونِيد الذَّهَبِيّ — مَعْرَكَةُ السُّهُولِ الخَضْرَاء",
      metrics: [
        { label: "نُصْرَةُ الحَقّ", value: "وَاجِبٌ شَرْعِيّ" },
        { label: "شَرَفُ الفَارِس", value: "لَا يُبَاع" },
        { label: "عَهْدُ الأَمَان", value: "مُقَدَّس" },
      ],
      details:
        "القُوَّةُ المُجَرَّدَةُ دُونَ رَحْمَةٍ هِيَ طُغْيَانٌ زَائِل، أَمَّا الشَّجَاعَةُ الحَقِيقِيَّةُ فَهِيَ أَنْ تَقِفَ مَعَ الحَقِّ وَلَوْ كُنْتَ وَحِيدًا أَمَامَ جَيْشٍ مِنْ أَهْلِ البَاطِل.",
    },
    {
      id: "voyages",
      title: "أَسْفَارُ الرِّيَاحِ وَسِيَرُ المَمَالِك",
      subtitle: "مَخْطُوطَاتُ الرَّحَّالَةِ الأَقْدَمِين",
      icon: Compass,
      quote:
        "«سَافِرْ مَعَ الشَّمْسِ حَيْثُ غَرَبَتْ، وَتَعَلَّمْ مِنْ كُلِّ أَرْضٍ حِكْمَةَ أَهْلِهَا؛ فَإِنَّ الأُمَمَ تَفْنَى وَتَبْقَى الحِكَمُ نُجُومًا تَهْدِي الحَائِرِينَ فِي بَيْدَاءِ الدَّهْر.»",
      narrator: "الرَّحَّالَةُ إِدْرِيسِيُون الحَكِيم — دِيوَانُ مَا وَرَاءَ البِحَار",
      metrics: [
        { label: "اتِّسَاعُ الأُفُق", value: "شَاسِع" },
        { label: "تَنَوُّعُ الحِكَم", value: "جَامِع" },
        { label: "دَوَامُ الأَثَر", value: "خَالِد" },
      ],
      details:
        "كُلُّ مَمْلَكَةٍ بَادَتْ تَرَكَتْ وَرَاءَهَا عِبْرَةً فِي حَجَرٍ أَوْ رَقٍّ قَدِيم، وَمَنْ جَمَعَ عِبَرَ المَاضِي مَلَكَ مَفَاتِيحَ الحَاضِرِ وَأَبْوَابَ المُسْتَقْبَل.",
    },
  ];

  const current = sagas[activeTab];

  const handleCopy = () => {
    navigator.clipboard?.writeText(`${current.quote} — ${current.narrator}`);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2200);
  };

  return (
    <section
      id="features"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#F7F3EF] border-t border-[#E8E2D8]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <span className="text-xs font-semibold tracking-normal text-[#8C7052] font-cinzel block mb-3">
            ٠١. رَكَائِزُ المَجْدِ وَالمَآثِر
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#292725] tracking-tight leading-tight mb-5">
            أَقْوَالُ الخَالِدِينَ وَسِيَرُ الفُرْسَان
          </h2>
          <p className="text-sm sm:text-base text-[#5C5752] font-sans-clean leading-relaxed">
            لَمْ تَكُنِ المَمَالِكُ تُبْنَى بِالحِجَارَةِ وَحْدَهَا، بَلْ بِأَقْوَالِ الحُكَمَاءِ وَعُهُودِ الفُرْسَانِ الَّتِي نُقِشَتْ عَلَى صُخُورِ الزَّمَانِ لِتَبْقَى حِصْنًا مَنِيعًا لِلأَجْيَال.
          </p>
        </div>

        {/* Bento Grid Architecture of Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Right/Left Column (RTL): Interactive Pillar Selectors (4 items) */}
          <div className="lg:col-span-5 space-y-3.5">
            {sagas.map((saga, idx) => {
              const Icon = saga.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={saga.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-right p-5 sm:p-6 rounded-[28px] sm:rounded-[32px] liquid-glass-card liquid-glass-refraction transition-all duration-300 cursor-pointer flex items-start gap-4 relative overflow-hidden select-none hover:scale-[1.015] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B69A75] ${
                    isSelected
                      ? "ring-2 ring-[#B69A75] border-[#B69A75] shadow-xl -translate-y-0.5"
                      : "border border-white/90 shadow-md hover:border-[#B69A75]/40"
                  }`}
                  data-config={JSON.stringify({
                    blurAmount: 0.27,
                    refraction: 2,
                    chromAberration: 0.205,
                    edgeHighlight: 0.59,
                    specular: 0.15,
                    fresnel: 1,
                    distortion: 0.08,
                    cornerRadius: 32,
                    zRadius: 32,
                    opacity: 1,
                    saturation: -0.25,
                    brightness: -0.23,
                    shadowOpacity: 0.3,
                    shadowSpread: 10,
                    bevelMode: 0,
                  })}
                  style={{
                    boxShadow:
                      "0 24px 48px -12px rgba(41, 39, 37, 0.18), 0 12px 24px -8px rgba(0, 0, 0, 0.1), inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95), inset 0 -1.5px 2px 0 rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {/* Prismatic Rainbow Caustic & Prism Ring Layers */}
                  <div className="liquid-glass-caustic-border" aria-hidden="true" />
                  <div className="liquid-glass-prism-ring" aria-hidden="true" />

                  {/* Circular Biscuit Emblem Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#C4A88E] flex items-center justify-center shrink-0 shadow-xs relative z-10">
                    <Icon className="w-5 h-5 fill-[#24211E] text-[#24211E]" />
                  </div>
                  <div className="flex-1 min-w-0 relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-mono tracking-wider text-[#8C7052] font-semibold">
                        {saga.subtitle}
                      </span>
                      <span className="text-[11px] font-mono text-[#8C7052] font-bold">
                        ٠{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-cinzel text-base font-bold text-[#24211E] truncate">
                      {saga.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Display of Active Saga */}
          <div
            className="lg:col-span-7 liquid-glass-card liquid-glass-refraction rounded-[40px] p-7 sm:p-9 shadow-2xl relative overflow-hidden select-none hover:scale-[1.008] transition-all duration-300"
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
            {/* Prismatic Caustics & Reflection Layers */}
            <div className="liquid-glass-caustic-border" aria-hidden="true" />
            <div className="liquid-glass-prism-ring" aria-hidden="true" />

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#292725]/10">
              <div className="flex items-center gap-4">
                {/* Circular Biscuit Emblem matching card hero style */}
                <div className="w-12 h-12 rounded-full bg-[#C4A88E] flex items-center justify-center shadow-xs shrink-0">
                  <current.icon className="w-5 h-5 fill-[#24211E] text-[#24211E]" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-wider text-[#8C7052] font-semibold">
                    دِيوَانُ الحِكَمِ الإِمْبِرَاطُورِيَّة
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-[#24211E] mt-0.5">
                    {current.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/70 hover:bg-[#292725] hover:text-white border border-[#B69A75]/40 text-[#292725] transition-all cursor-pointer shadow-2xs backdrop-blur-xs"
              >
                {copiedQuote ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#B69A75]" />
                    <span>تَمَّ نَسْخُ الحِكْمَة</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#8C7052]" />
                    <span>نَسْخُ القَوْلِ المَأْثُور</span>
                  </>
                )}
              </button>
            </div>

            {/* Quote Body with Calligraphy Styling */}
            <div className="relative z-10 py-6 space-y-4">
              <blockquote className="font-editorial text-lg sm:text-xl text-[#24211E] leading-loose p-5 bg-white/60 backdrop-blur-xs rounded-2xl border-r-4 border-[#B69A75] italic shadow-2xs">
                {current.quote}
              </blockquote>
              <div className="text-xs font-semibold text-[#8C7052] flex items-center gap-2">
                <span>المَصْدَر:</span>
                <span className="text-[#5C5752] font-normal">{current.narrator}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5A534B] leading-relaxed font-sans-clean bg-white/50 backdrop-blur-xs p-4 rounded-xl border border-white/80">
                {current.details}
              </p>
            </div>

            {/* Quantified Chivalric Metrics */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#292725]/10">
              {current.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-white/60 backdrop-blur-xs p-4 rounded-2xl border border-white/80 shadow-2xs"
                >
                  <span className="text-[11px] text-[#7A7369] block mb-1">
                    {metric.label}
                  </span>
                  <span className="font-cinzel text-base sm:text-lg font-bold text-[#24211E] block">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
