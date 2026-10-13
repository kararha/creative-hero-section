import { useState } from "react";
import { Check, ShieldCheck, Sparkles, Key, Copy } from "lucide-react";

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [generatedToken, setGeneratedToken] = useState<string | null>(null);
  const [copiedToken, setCopiedToken] = useState(false);

  const plans = [
    {
      id: "centurion",
      name: "عَهْدُ الفَارِس",
      cadence: "اشْتِرَاكٌ شَهْرِيّ",
      price: "٢٩",
      unit: "دِينَار ذَهَبِيّ / شَهْر",
      billedNote: "يُجَدَّدُ شَهْرِيًّا، يُمْكِنُ إِلْغَاؤُهُ فِي أَيِّ وَقْت",
      featured: false,
      features: [
        "اطِّلَاعٌ كَامِلٌ عَلَى سِجِلَّاتِ ٨ مَمَالِك",
        "تَحْمِيلُ أَلْوَاحِ الحِكَمِ العَتِيقَة",
        "تَوْثِيقُ خَتْمِ الفَيْلَقِ الرَّقْمِيّ",
        "اسْتِشَارَةُ دِيوَانِ الحُرَّاسِ الأُسْبُوعِيَّة",
      ],
    },
    {
      id: "praetorian",
      name: "عَهْدُ الحَامِي الإِمْبِرَاطُورِيّ",
      cadence: "عَهْدٌ سَنَوِيّ",
      price: "١٤",
      unit: "دِينَار ذَهَبِيّ / شَهْر",
      billedNote: "يُدْفَعُ سَنَوِيًّا (١٦٨ دِينَارًا) · وَفْرٌ ٥٠٪",
      featured: true,
      badge: "الأَكْثَرُ اخْتِيَارًا",
      features: [
        "جَمِيعُ مَزَايَا عَهْدِ الفَارِس",
        "خَتْمُ الشَّمْعِ الإِمْبِرَاطُورِيِّ الذَّهَبِيّ",
        "اقْتِنَاءُ مَخْطُوطَاتِ أَبْرَاجِ الأَلْبِ السِّرِّيَّة",
        "تَسْجِيلُ اسْمِ الفَارِسِ فِي لَوْحِ الخَالِدِين",
        "اسْتِشَارَةٌ شَخْصِيَّةٌ مَعَ كِبَارِ حُكَمَاءِ الفَيْلَق",
      ],
    },
    {
      id: "augustus",
      name: "عَهْدُ القَيْصَرِ الأَعْظَم",
      cadence: "عَهْدُ عَامَيْنِ + ٣ أَشْهُرٍ هَدِيَّة",
      price: "٩",
      unit: "دِينَار ذَهَبِيّ / شَهْر",
      billedNote: "يُدْفَعُ كُلَّ عَامَيْنِ · أَقْصَى دَرَجَاتِ التَّكْرِيم",
      featured: false,
      features: [
        "جَمِيعُ مَزَايَا الحَامِي الإِمْبِرَاطُورِيّ",
        "نُسْخَةٌ مَكْتُوبَةٌ بِحِبْرِ الذَّهَبِ لِلسِّجِلَّات",
        "حَقُّ حُضُورِ مَجْلِسِ الشُّورَى السَّنَوِيّ",
        "حَصَانَةٌ دَائِمَةٌ فِي أَرْوِقَةِ دِيوَانِ المَمَالِك",
      ],
    },
  ];

  const handleClaimAccess = (planId: string) => {
    setSelectedPlan(planId);
    const token = `LEGION-OATH-${planId.toUpperCase()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}-VERIFIED`;
    setGeneratedToken(token);
  };

  const handleCopyToken = () => {
    if (generatedToken) {
      navigator.clipboard?.writeText(generatedToken);
      setCopiedToken(true);
      setTimeout(() => setCopiedToken(false), 2200);
    }
  };

  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#FAF7F3] border-t border-[#E8E2D8]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs font-semibold tracking-normal text-[#8C7052] font-cinzel block mb-3">
            ٠٤. عُهُودُ الانْتِسَابِ وَالمَخْطُوطَات
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#292725] tracking-tight mb-4">
            انْضَمَّ إِلَى دِيوَانِ الحُرَّاس
          </h2>
          <p className="text-sm sm:text-base text-[#5C5752] font-sans-clean leading-relaxed">
            اخْتَرْ رُتْبَتَكَ فِي فَيْلَقِ الأَسَاطِير، وَاحْصُلْ عَلَى مَخْطُوطَاتِ الحِكَمِ العَتِيقَةِ مَوْثُوقَةً بِأَخْتَامِ الأَسْلَافِ الخَالِدَة.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          {plans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`liquid-glass-card rounded-[36px] sm:rounded-[40px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                  plan.featured
                    ? "liquid-glass-refraction-dark text-white shadow-2xl scale-[1.02] border-2 border-[#B69A75]"
                    : "liquid-glass-refraction text-[#292725] border border-white/90 shadow-xl hover:shadow-2xl hover:scale-[1.015]"
                }`}
              >
                {/* Prismatic Caustic & Rainbow Ring Layers */}
                <div className="liquid-glass-caustic-border" aria-hidden="true" />
                <div className="liquid-glass-prism-ring" aria-hidden="true" />

                {plan.badge && (
                  <div className="absolute top-4 left-6 z-20 bg-[#B69A75] text-[#292725] text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    {/* Circular Biscuit Emblem Badge */}
                    <div className="w-12 h-12 rounded-full bg-[#C4A88E] flex items-center justify-center shadow-xs shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#24211E]" />
                    </div>
                    <span
                      className={`text-xs font-semibold tracking-normal ${
                        plan.featured ? "text-[#B69A75]" : "text-[#8C7052]"
                      }`}
                    >
                      {plan.cadence}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-2xl font-bold mb-4 text-[#24211E] dark:text-white" style={{ color: plan.featured ? '#FAF7F2' : '#24211E' }}>
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-cinzel text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: plan.featured ? '#FAF7F2' : '#24211E' }}>
                      {plan.price}
                    </span>
                    <span
                      className={`text-xs ${
                        plan.featured ? "text-white/70" : "text-[#7A7369]"
                      }`}
                    >
                      {plan.unit}
                    </span>
                  </div>

                  <p
                    className={`text-xs mb-8 ${
                      plan.featured ? "text-white/60" : "text-[#7A7369]"
                    }`}
                  >
                    {plan.billedNote}
                  </p>

                  <div
                    className={`h-px w-full mb-8 ${
                      plan.featured ? "bg-white/15" : "bg-[#292725]/10"
                    }`}
                  />

                  <ul className="space-y-3.5 mb-8 text-xs sm:text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.featured ? "text-[#B69A75]" : "text-[#8C7052]"
                          }`}
                        />
                        <span
                          className={
                            plan.featured ? "text-white/85" : "text-[#5C5752]"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10">
                  <button
                    type="button"
                    onClick={() => handleClaimAccess(plan.id)}
                    className={`w-full py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                      plan.featured
                        ? "bg-[#B69A75] text-[#292725] hover:bg-[#C9AE89] shadow-md"
                        : "bg-[#292725] text-white hover:bg-[#1A1816] shadow-sm"
                    }`}
                  >
                    اقْتَطِعْ عَهْدَ الانْتِسَاب
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Token modal or generated proof box */}
        {generatedToken && (
          <div className="liquid-glass-card liquid-glass-refraction rounded-[32px] p-7 sm:p-8 max-w-xl mx-auto shadow-2xl text-center space-y-3 animate-fade-in relative overflow-hidden border border-[#B69A75]/50">
            <div className="liquid-glass-caustic-border" aria-hidden="true" />
            <div className="liquid-glass-prism-ring" aria-hidden="true" />

            <div className="relative z-10 w-12 h-12 rounded-full bg-[#C4A88E] mx-auto flex items-center justify-center shadow-xs">
              <Key className="w-5 h-5 text-[#24211E]" />
            </div>
            <h4 className="relative z-10 font-cinzel text-lg font-bold text-[#24211E]">
              تَمَّ إِصْدَارُ خَتْمِ العَهْدِ الإِمْبِرَاطُورِيّ
            </h4>
            <p className="text-xs text-[#5C5752]">
              احْتَفِظْ بِهَذَا الخَتْمِ لِفَتْحِ مَخْزَنِ المَخْطُوطَاتِ فِي أَيِّ وَقْت:
            </p>
            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EAE3D6] font-mono text-xs text-[#8C7052] font-bold select-all flex items-center justify-between">
              <span>{generatedToken}</span>
              <button
                type="button"
                onClick={handleCopyToken}
                className="p-1 text-[#8C7052] hover:text-[#292725] cursor-pointer"
                title="نسخ الختم"
              >
                {copiedToken ? <Check className="w-4 h-4 text-[#B69A75]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
