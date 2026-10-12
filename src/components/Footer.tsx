import ImperialEmblem from "./artwork/ImperialEmblem.tsx";

export default function Footer() {
  return (
    <footer className="bg-[#292725] text-[#FAF7F2] pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-12 border-t border-[#3D3A36]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10 text-right">
          
          {/* Brand & Editorial Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#B69A75]/50 bg-white/10 flex items-center justify-center">
                <ImperialEmblem className="w-4.5 h-4.5" color="#B69A75" />
              </div>
              <span className="font-cinzel text-base font-bold text-white">
                فَيْلَقُ الأَسَاطِيرِ الإِمْبِرَاطُورِيّ
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans-clean max-w-sm">
              دِيوَانُ الحِكَمِ العَتِيقَةِ وَأَقْوَالِ الفُرْسَانِ الخَالِدِين. نُقِشَتْ كَلِمَاتُهُمْ عَلَى صُخُورِ الزَّمَانِ لِتَبْقَى حِصْنًا مَنِيعًا يَهْدِي الأَجْيَالَ فِي عَتَمَاتِ الدَّهْر.
            </p>

            <div className="pt-2 text-[11px] font-mono text-[#B69A75]">
              قِلَاعُ الأَلْب · مَنَارَةُ الشَّمَال · بَابُ القَيَاصِرَة · بُرْجُ المَشْرِق
            </div>
          </div>

          {/* Quick Navigation Mirror */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-cinzel text-xs font-bold text-[#B69A75] uppercase tracking-wider block">
              أَرْوِقَةُ السِّجِلَّات
            </span>
            <ul className="space-y-2 text-xs text-white/70 font-sans-clean">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  رَكَائِزُ المَجْدِ وَالمَآثِر
                </a>
              </li>
              <li>
                <a href="#servers" className="hover:text-white transition-colors">
                  خَرِيطَةُ المَمَالِكِ وَأَبْرَاجُ الحِكْمَة
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  عُهُودُ الانْتِسَابِ وَالمَخْطُوطَات
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">
                  خِزَانَةُ المَخْطُوطَاتِ الرَّقْمِيَّة
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Sanctuary & Chivalric Code */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-cinzel text-xs font-bold text-[#B69A75] uppercase tracking-wider block">
              مِيثَاقُ الحُرَّاسِ الأَبَدِيّ
            </span>
            <p className="text-xs text-white/60 leading-relaxed font-sans-clean">
              «لَا يَنْكُثُ الفَارِسُ عَهْدًا قَطَعَهُ عَلَى نَفْسِهِ، وَلَا يُفْشِي سِرًّا اسْتُؤْمِنَ عَلَيْهِ؛ فَإِنَّ الشَّرَفَ أَغْلَى مِنْ كُنُوزِ الأَرْضِ جَمِيعًا.»
            </p>
            <div className="pt-1 text-[11px] text-white/40">
              مَوْثُوقٌ بِأَخْتَامِ دِيوَانِ حُماةِ الفَيْلَق
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © ٢٠٢٦ فَيْلَقُ الأَسَاطِير. جَمِيعُ أَلْوَاحِ الحِكْمَةِ وَالعُهُودِ مَحْفُوظَة.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#hero" className="hover:text-white transition-colors">
              أَعْلَى الصَّفْحَة &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
