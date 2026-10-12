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
          <div className="lg:col-span-5 space-y-3">
            {sagas.map((saga, idx) => {
              const Icon = saga.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={saga.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-right p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? "bg-white border-[#B69A75] shadow-md -translate-y-0.5"
                      : "bg-white/50 border-white/80 hover:bg-white/80 hover:border-[#D5CBBF] shadow-2xs"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-[#292725] text-[#FAF7F2]"
                        : "bg-[#EAE4DC] text-[#786E64]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-mono tracking-wider text-[#8C7052] font-medium">
                        {saga.subtitle}
                      </span>
                      <span className="text-[11px] font-mono text-[#8C7052]">
                        ٠{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-cinzel text-base font-bold text-[#292725] truncate">
                      {saga.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Display of Active Saga */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DED7CB] p-7 sm:p-9 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EAE4DA]">
              <div>
                <span className="text-[11px] font-mono tracking-wider text-[#8C7052]">
                  دِيوَانُ الحِكَمِ الإِمْبِرَاطُورِيَّة
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-[#292725] mt-1">
                  {current.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#F7F3EF] hover:bg-[#292725] hover:text-white border border-[#B69A75]/40 text-[#292725] transition-all cursor-pointer shadow-2xs"
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
            <div className="py-6 space-y-4">
              <blockquote className="font-editorial text-lg sm:text-xl text-[#292725] leading-loose p-5 bg-[#FAF7F2] rounded-2xl border-r-4 border-[#B69A75] italic">
                {current.quote}
              </blockquote>
              <div className="text-xs font-semibold text-[#8C7052] flex items-center gap-2">
                <span>المَصْدَر:</span>
                <span className="text-[#5C5752] font-normal">{current.narrator}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#736B62] leading-relaxed font-sans-clean bg-[#F7F4EE] p-4 rounded-xl border border-[#EAE3D5]">
                {current.details}
              </p>
            </div>

            {/* Quantified Chivalric Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EAE4DA]">
              {current.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-[#FCFAF7] p-4 rounded-xl border border-[#EBE4D8]"
                >
                  <span className="text-[11px] text-[#7A7369] block mb-1">
                    {metric.label}
                  </span>
                  <span className="font-cinzel text-base sm:text-lg font-bold text-[#292725] block">
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
