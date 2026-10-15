import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const comparisonRows = [
    {
      feature: "جَوْهَرُ الحِكَمِ وَالمَآثِر",
      legion: "أَقْوَالٌ صَقَلَتْهَا قُرُونٌ مِنَ التَّجَارِبِ الصَّادِقَة",
      ordinary: "كَلِمَاتٌ عَابِرَةٌ تَمْحُوهَا تَقَلُّبَاتُ الأَيَّام",
      highlight: true,
    },
    {
      feature: "صُمُودُ العُهُودِ وَالمَوَاثِيق",
      legion: "عَهْدُ شَرَفٍ أَبَدِيٌّ نُقِشَ عَلَى الصَّخْر",
      ordinary: "وُعُودٌ هَشَّةٌ تَتَبَدَّلُ عِنْدَ أَوَّلِ عَاصِفَة",
      highlight: true,
    },
    {
      feature: "نَقَاءُ السَّرِيرَةِ وَكِتْمَانُ السِّرّ",
      legion: "سِجِلٌّ نَقِيٌّ خَالِصٌ دُونَ أَيِّ أَثَرٍ لِلرِّيَاءِ",
      ordinary: "ثَرْثَرَةٌ فِي المَحَافِلِ وَتَضْيِيعٌ لِلأَمَانَات",
      highlight: false,
    },
    {
      feature: "مَنَاعَةُ الحُصُونِ الإِمْبِرَاطُورِيَّة",
      legion: "قِلَاعٌ رَاسِيَةٌ عَلَى قِمَمِ الجِبَالِ العَتِيقَة",
      ordinary: "أَسْوَارٌ هَشَّةٌ تَتَصَدَّعُ أَمَامَ اخْتِبَارَاتِ الزَّمَان",
      highlight: false,
    },
    {
      feature: "شَرَفُ الفُرْسَانِ وَنُصْرَةُ العَدْل",
      legion: "سَيْفٌ يُسَلُّ لِحِمَايَةِ الحَقِّ وَإِعْلَاءِ الفَضِيلَة",
      ordinary: "اسْتِعْرَاضُ قُوَّةٍ زَائِفَةٍ بِلَا حِكْمَةٍ أَوْ رَحْمَة",
      highlight: true,
    },
    {
      feature: "مَوْثُوقِيَّةُ أَلْوَاحِ الأَسْلَاف",
      legion: "مَخْطُوطَاتٌ مَوْثُوقَةٌ بِأَخْتَامِ حُرَّاسِ الفَيْلَق",
      ordinary: "مَرْوِيَّاتٌ مُضْطَرِبَةٌ فَقَدَتْ أَصَالَتَهَا التَّارِيخِيَّة",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#F7F3EF] border-t border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-normal text-[#8C7052] font-cinzel block mb-3">
            ٠٣. مَعَايِيرُ الخُلُودِ وَحِكْمَةُ الأَسْلَاف
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#292725] tracking-tight mb-4">
            فَارِقُ المَهَابَةِ وَالأَصَالَة
          </h2>
          <p className="text-sm sm:text-base text-[#5C5752] font-sans-clean leading-relaxed">
            انْظُرْ كَيْفَ تَتَمَيَّزُ حِكَمُ الفَيْلَقِ وَأَقْوَالُ الخَالِدِينَ عَنْ زَبَدِ الكَلَامِ العَابِرِ الَّذِي يَذْهَبُ جُفَاءً.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div
          className="liquid-glass-card liquid-glass-refraction rounded-[40px] overflow-hidden shadow-2xl relative select-none hover:scale-[1.008] transition-all duration-300"
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
          <div className="liquid-glass-caustic-border" aria-hidden="true" />
          <div className="liquid-glass-prism-ring" aria-hidden="true" />

          {/* Table Header Row */}
          <div
            role="table"
            aria-label="جدول مقارنة أصالة سجلات الفيلق"
            className="w-full"
          >
            <div
              role="rowgroup"
              className="relative z-10 grid grid-cols-12 bg-white/60 backdrop-blur-xs p-5 sm:p-6 border-b border-[#292725]/10 font-cinzel text-xs sm:text-sm font-bold text-[#24211E]"
            >
              <div role="row" className="contents">
                <div role="columnheader" className="col-span-5 sm:col-span-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C4A88E] flex items-center justify-center shadow-xs shrink-0">
                    <Check className="w-5 h-5 fill-[#24211E] text-[#24211E]" />
                  </div>
                  <span>المِعْيَارُ وَالأَصَالَة</span>
                </div>
                <div role="columnheader" className="col-span-4 sm:col-span-4 text-center text-[#8C7052] font-semibold">
                  سِجِلَّاتُ الفَيْلَقِ الخَالِدَة
                </div>
                <div role="columnheader" className="col-span-3 sm:col-span-4 text-center text-[#7A7369]">
                  صَخَبُ العَالَمِ الزَّائِل
                </div>
              </div>
            </div>

            <div role="rowgroup" className="relative z-10 divide-y divide-[#292725]/10">
              {comparisonRows.map((row) => (
                <div
                  role="row"
                  key={row.feature}
                  className={`grid grid-cols-12 p-4 sm:p-6 items-center text-xs sm:text-sm transition-colors ${
                    row.highlight ? "bg-white/40" : "bg-transparent hover:bg-white/30"
                  }`}
                >
                  <div role="cell" className="col-span-5 sm:col-span-4 font-semibold text-[#24211E]">
                    {row.feature}
                  </div>
                  <div role="cell" className="col-span-4 sm:col-span-4 flex items-center justify-center gap-2 text-center text-[#24211E] font-medium px-2">
                    <Check className="w-4 h-4 text-[#8C7052] shrink-0 hidden sm:inline" />
                    <span>{row.legion}</span>
                  </div>
                  <div role="cell" className="col-span-3 sm:col-span-4 flex items-center justify-center gap-2 text-center text-[#8C8277] px-2">
                    <X className="w-4 h-4 text-[#A89F95] shrink-0 hidden sm:inline" />
                    <span>{row.ordinary}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
