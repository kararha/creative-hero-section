import { useState, useMemo } from "react";
import { Castle, Compass, Search, ArrowLeft, Check, Copy, Sparkles } from "lucide-react";

interface KingdomRealm {
  id: string;
  name: string;
  realm: string;
  region: "north" | "orient" | "west" | "isles";
  regent: string;
  year: string;
  quote: string;
  status: "مَنِيعٌ أَبَدِيّ" | "حِصْنٌ شَامِخ";
  guards: string;
  seal: string;
}

export default function ServersSection() {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const kingdoms: KingdomRealm[] = [
    {
      id: "alps",
      name: "قَلْعَةُ الأَلْبِ الشَّاهِقَة",
      realm: "مَمْلَكَةُ الصُّخُورِ البَيْضَاء (الأَلْب)",
      region: "north",
      regent: "اللورد كَاسْيَان الصَّامِد",
      year: "سِجِلَّاتُ العَامِ ٢٤٠ ق.م",
      quote: "«الجِبَالُ لَا تَنْحَنِي لِعَصْفِ الرِّيَاح، وَهَكَذَا نُفُوسُ الأَحْرَارِ الَّذِينَ ذَاقُوا طَعْمَ الكَرَامَةِ فِي حِمَى الفَيْلَق.»",
      status: "مَنِيعٌ أَبَدِيّ",
      guards: "فُرْسَانُ الدُّرُوعِ الرُّخَامِيَّة",
      seal: "خَتْمُ الصَّخْرِ الأَبَدِيّ",
    },
    {
      id: "reykjavik",
      name: "مَنَارَةُ الشَّمَالِ الجَلِيدِيَّة",
      realm: "أَرْضُ البَرَاكِينِ وَالجَلِيد (الشَّمَال الأَقْصَى)",
      region: "north",
      regent: "الشَّيْخُ فَالْدِيمَار الحَكِيم",
      year: "أَلْوَاحُ العَامِ ٣١٥ ق.م",
      quote: "«فِي صَقِيعِ الصَّمْتِ وَعُزْلَةِ الثُّلُوجِ تَتَجَلَّى أَنْوَارُ البَصِيرَة، فَمَنْ لَمْ يُخَالِطِ الصَّفَاءَ لَمْ يُمَيِّزِ الجَوْهَرَ مِنَ المَظْهَر.»",
      status: "حِصْنٌ شَامِخ",
      guards: "رُمَاةُ الشَّفَقِ القُطْبِيّ",
      seal: "خَتْمُ الجَلِيدِ النَّقِيّ",
    },
    {
      id: "rome",
      name: "بَابُ القَيَاصِرَةِ الإِمْبِرَاطُورِيّ",
      realm: "عَاصِمَةُ التِّيجَانِ الذَّهَبِيَّة",
      region: "west",
      regent: "القَائِدُ فَالِيرْيُوس المَهَاب",
      year: "عَهْدُ الأَبْرَاجِ العَشَرَة",
      quote: "«الشَّرَفُ هُوَ الحِصْنُ الوَحِيدُ الَّذِي لَا تَمْلِكُ جُيُوشُ الأَرْضِ كُلِّهَا قُوَّةً لِهَدْمِهِ أَوْ ثَلْمِ جِدَارِه.»",
      status: "مَنِيعٌ أَبَدِيّ",
      guards: "الحَرَسُ الإِمْبِرَاطُورِيُّ الأَوَّل",
      seal: "عُقَابُ الذَّهَبِ الخَالِد",
    },
    {
      id: "kyoto",
      name: "بُرْجُ السَّاكُورَا وَالضَّبَاب",
      realm: "مَمَالِكُ الشَّرْقِ الأَقْصَى",
      region: "orient",
      regent: "الحَكِيمُ كِينْشِين صَاحِبُ السَّيْفِ الصَّامِت",
      year: "سِجِلُّ العُصُورِ القَدِيمَة",
      quote: "«قَطْرَةُ المَاءِ تَنْحَتُ الصَّخْرَ بِالصَّبْرِ لَا بِالقُوَّة؛ وَمَنْ مَلَكَ أَمْرَ نَفْسِهِ غَلَبَ دَهْرَهُ بِأَسْرِه.»",
      status: "حِصْنٌ شَامِخ",
      guards: "فُرْسَانُ الظِّلِّ وَالنُّور",
      seal: "زَهْرَةُ الصَّفَاءِ السَّرْمَدِيّ",
    },
    {
      id: "babylon",
      name: "حِصْنُ بَابِلَ وَالرَّافِدَيْن",
      realm: "أَرْضُ الحَضَارَاتِ وَسِجِلَّاتُ الطِّينِ المُفَخَّر",
      region: "orient",
      regent: "الكَبِيرُ حَمُورَابِي الرُّوحَانِيّ",
      year: "أَلْوَاحُ شَمْسِ الحَقِيقَة",
      quote: "«العَدْلُ مِيزَانٌ إِنِ اعْوَجَّ زَالَتْ عُرُوشُ المُلُوك، وَالحِكْمَةُ نَبْعٌ يَسْقِي القُلُوبَ حَتَّى تَمْتَلِئَ بَهَاءً وَنُورًا.»",
      status: "مَنِيعٌ أَبَدِيّ",
      guards: "حُرَّاسُ الأَسَدِ البَابِلِيّ",
      seal: "خَتْمُ الشَّمْسِ السَّاطِعَة",
    },
    {
      id: "cordoba",
      name: "قَصْرُ الأَنْدَلُسِ المُشْرِق",
      realm: "دِيَارُ العِلْمِ وَحَدَائِقُ الأَسْرَار",
      region: "west",
      regent: "الفَيْلَسُوفُ أَبُو الوَلِيدِ الأَنْدَلُسِيّ",
      year: "سِجِلَّاتُ المَجْدِ المَنِير",
      quote: "«العِلْمُ وَحْدَهُ هُوَ السُّلْطَانُ الَّذِي لَا يُعْزَل، وَالفَضِيلَةُ هِيَ الحِلْيَةُ الَّتِي لَا تَبْلَى عَلَى مَرِّ الأَيَّام.»",
      status: "حِصْنٌ شَامِخ",
      guards: "فُرْسَانُ قُرْطُبَةَ البَيْضَاء",
      seal: "هِلَالُ المَعْرِفَةِ الذَّهَبِيّ",
    },
    {
      id: "singapore",
      name: "مَضِيقُ النَّخِيلِ وَالبِحَارِ السَّبْع",
      realm: "مَفْتَرَقُ طُرُقِ التَّوَابِلِ وَالأَسَاطِيل",
      region: "isles",
      regent: "رُبَّانُ البِحَارِ الأَعْظَم تِشَانْغ",
      year: "مَخْطُوطَةُ الرِّيَاحِ المَوْسِمِيَّة",
      quote: "«مَنْ خَافَ ارْتِفَاعَ المَوْجِ لَمْ يَرْكَبِ اللُّجَج، وَمَنْ لَمْ يُجَاسِرْ لَمْ يَظْفَرْ بِدُرَرِ الحِكْمَةِ المَكْنُونَة.»",
      status: "مَنِيعٌ أَبَدِيّ",
      guards: "حُمَاةُ المَضَايِقِ المَلَكِيَّة",
      seal: "مِرْسَاةُ الصُّمُودِ الأَبَدِيّ",
    },
    {
      id: "andes",
      name: "حِصْنُ قِمَمِ الأَنْدِيزِ السَّحَابِيَّة",
      realm: "مَمْلَكَةُ الصُّقُورِ الفَوْقِيَّة",
      region: "isles",
      regent: "سَيِّدُ الشَّمْسِ أَمَارُو",
      year: "سِجِلُّ العُرُوشِ العَالِيَة",
      quote: "«حِينَ تَرْتَفِعُ فَوْقَ الغُيُومِ تَصْغُرُ فِي عَيْنَيْكَ كُلُّ صِغَارِ الأُمُور، وَلَا تَرَى سِوَى صَفَاءِ الأَبَدِيَّة.»",
      status: "حِصْنٌ شَامِخ",
      guards: "حُرَّاسُ عُقَابِ الشَّمْس",
      seal: "قُرْصُ النُّورِ الأَزَلِيّ",
    },
  ];

  const [activeKingdom, setActiveKingdom] = useState<KingdomRealm>(kingdoms[0]);

  // Memoized search and filtering
  const filteredKingdoms = useMemo(() => {
    return kingdoms.filter((k) => {
      const matchesRegion = selectedRegion === "all" || k.region === selectedRegion;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        k.name.toLowerCase().includes(q) ||
        k.realm.toLowerCase().includes(q) ||
        k.regent.toLowerCase().includes(q) ||
        k.quote.toLowerCase().includes(q);
      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, searchQuery]);

  const handleCopyQuote = (k: KingdomRealm) => {
    navigator.clipboard?.writeText(`${k.quote} — ${k.regent} (${k.name})`);
    setCopiedId(k.id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  return (
    <section
      id="servers"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#FAF7F3] border-t border-[#E8E2D8]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-normal text-[#8C7052] font-cinzel block mb-3">
              ٠٢. خَرِيطَةُ المَمَالِكِ وَأَبْرَاجُ الحِكْمَة
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#292725] tracking-tight leading-tight mb-4">
              أَطْلَسُ الحُصُونِ وَأَقْوَالُ الحُكَمَاء
            </h2>
            <p className="text-sm sm:text-base text-[#5C5752] font-sans-clean leading-relaxed">
              تَنَقَّلْ بَيْنَ أَبْرَاجِ المَمَالِكِ العَتِيقَةِ وَاسْتَلْهِمْ مِنْ حُكَّامِهَا أَعْظَمَ حِكَمِ الصُّمُودِ وَالشَّجَاعَةِ وَالعَدَالَة.
            </p>
          </div>

          {/* Quick stats strip */}
          <div className="flex items-center gap-6 sm:gap-8 pb-1 border-b border-[#E0D7C9]">
            <div>
              <span className="text-[11px] text-[#7A7369] block">أَبْرَاجُ الحِكْمَة</span>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#292725]">
                ٨ قِلَاعٍ أُسْطُورِيَّة
              </span>
            </div>
            <div>
              <span className="text-[11px] text-[#7A7369] block">سِجِلَّاتُ الأَسْلَاف</span>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#8C7052]">
                ١٠٠٪ حِكَمٌ مُوَثَّقَة
              </span>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-full border border-[#DED7CB] shadow-2xs overflow-x-auto max-w-full">
            {[
              { id: "all", label: "جَمِيعُ الحُصُون" },
              { id: "north", label: "قِلَاعُ الشَّمَالِ وَالأَلْب" },
              { id: "orient", label: "أَبْرَاجُ المَشْرِقِ العَتِيق" },
              { id: "west", label: "مَمَالِكُ الأَنْدَلُسِ وَالغَرْب" },
              { id: "isles", label: "جُزُرُ البِحَارِ وَالأَنْدِيز" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedRegion(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  selectedRegion === tab.id
                    ? "bg-[#292725] text-white shadow-2xs"
                    : "text-[#6B645D] hover:text-[#292725] hover:bg-[#F4EFE6]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8C7052] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              aria-label="ابحث عن القلعة أو الحاكم"
              placeholder="ابْحَثْ عَنِ القَلْعَةِ أَوِ الحَاكِم..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-9 py-2 rounded-full text-xs bg-white border border-[#DED7CB] focus:outline-hidden focus:border-[#B69A75] text-[#292725] placeholder-[#9E958A] shadow-2xs"
            />
          </div>
        </div>

        {/* Kingdom Grid + Active Kingdom Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* List of Kingdoms */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[580px] overflow-y-auto pr-1 custom-scrollbar">
            {filteredKingdoms.map((k) => {
              const isSelected = activeKingdom.id === k.id;
              return (
                <div
                  key={k.id}
                  onClick={() => setActiveKingdom(k)}
                  className={`p-5 rounded-[28px] sm:rounded-[32px] liquid-glass-card liquid-glass-refraction transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden select-none hover:scale-[1.02] ${
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
                    cornerRadius: 30,
                    zRadius: 30,
                    opacity: 1,
                    saturation: -0.25,
                    brightness: -0.23,
                    shadowOpacity: 0.3,
                    shadowSpread: 10,
                    bevelMode: 0,
                  })}
                  style={{
                    boxShadow:
                      "0 20px 40px -12px rgba(41, 39, 37, 0.16), 0 10px 20px -8px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95), inset 0 -1.5px 2px 0 rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {/* Prismatic Rainbow Caustic & Prism Ring Layers */}
                  <div className="liquid-glass-caustic-border" aria-hidden="true" />
                  <div className="liquid-glass-prism-ring" aria-hidden="true" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/70 text-[#8C7052] border border-white/90 font-semibold shadow-2xs">
                        {k.status}
                      </span>
                      {/* Circular Biscuit Emblem Badge */}
                      <div className="w-10 h-10 rounded-full bg-[#C4A88E] flex items-center justify-center shadow-xs">
                        <Castle className="w-5 h-5 fill-[#24211E] text-[#24211E]" />
                      </div>
                    </div>
                    <h3 className="font-cinzel text-base font-bold text-[#24211E] mb-1">
                      {k.name}
                    </h3>
                    <p className="text-xs text-[#7A7369] font-sans-clean mb-2.5">
                      {k.realm}
                    </p>
                    <p className="text-xs italic text-[#4A4540] line-clamp-2 leading-relaxed">
                      {k.quote}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#292725]/10 flex items-center justify-between text-[11px] text-[#8C7052] relative z-10">
                    <span className="font-semibold">{k.regent}</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dossier Card for Selected Kingdom */}
          <div
            className="lg:col-span-5 liquid-glass-card liquid-glass-refraction rounded-[40px] p-7 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden select-none hover:scale-[1.008] transition-all duration-300"
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
            {/* Prismatic Caustics & Refraction Ring */}
            <div className="liquid-glass-caustic-border" aria-hidden="true" />
            <div className="liquid-glass-prism-ring" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-[#292725]/10">
                <div>
                  <span className="text-[11px] font-mono text-[#8C7052] font-semibold block">
                    {activeKingdom.year}
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#24211E] mt-0.5">
                    {activeKingdom.name}
                  </h3>
                </div>
                {/* Circular Biscuit Emblem */}
                <div className="w-12 h-12 rounded-full bg-[#C4A88E] flex items-center justify-center shadow-xs shrink-0">
                  <Sparkles className="w-5 h-5 fill-[#24211E] text-[#24211E]" />
                </div>
              </div>

              <div className="py-6 space-y-4">
                <blockquote className="font-editorial text-base sm:text-lg text-[#24211E] leading-relaxed p-4 bg-white/60 backdrop-blur-xs rounded-2xl border-r-4 border-[#B69A75] italic shadow-2xs">
                  {activeKingdom.quote}
                </blockquote>

                <div className="space-y-2.5 text-xs text-[#5C5752] bg-white/50 backdrop-blur-xs p-4 rounded-xl border border-white/80">
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#8C7052]">الحَاكِمُ الرَّاعِي:</span>
                    <span className="text-[#24211E] font-medium">{activeKingdom.regent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#8C7052]">المَمْلَكَة:</span>
                    <span className="text-[#24211E] font-medium">{activeKingdom.realm}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#8C7052]">فِرْقَةُ الحُرَّاس:</span>
                    <span className="text-[#24211E] font-medium">{activeKingdom.guards}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#8C7052]">الخَتْمُ السَّرْمَدِيّ:</span>
                    <span className="text-[#24211E] font-medium">{activeKingdom.seal}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-[#292725]/10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleCopyQuote(activeKingdom)}
                className="flex-1 py-3 px-4 rounded-full bg-[#292725] text-white hover:bg-[#1A1816] transition-all text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                {copiedId === activeKingdom.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#B69A75]" />
                    <span>تَمَّ نَسْخُ حِكْمَةِ القَلْعَة</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#FAF7F2]" />
                    <span>نَسْخُ قَوْلِ هَذِهِ المَمْلَكَة</span>
                  </>
                )}
              </button>

              <a
                href="#pricing"
                className="p-3 rounded-full bg-white/70 hover:bg-white border border-[#B69A75]/30 text-[#8C7052] transition-colors shadow-2xs"
                title="الانتقال إلى عهود الانضمام"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
