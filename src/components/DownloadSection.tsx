import { useState } from "react";
import {
  Laptop,
  Smartphone,
  Terminal,
  Download,
  CheckCircle,
  FileCode,
  QrCode,
  BookOpen,
} from "lucide-react";

export default function DownloadSection() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("macos");
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [showChecksum, setShowChecksum] = useState(false);

  const platforms = [
    {
      id: "macos",
      name: "دِيوَانُ أَبِل وَالمَاك",
      sub: "نُسْخَةُ الشَّاشَاتِ العَالِيَة",
      icon: Laptop,
      version: "الإِصْدَار ٤,١٢",
      filename: "Legion-Chronicles-macOS.dmg",
      size: "٢٤,٦ م.ب",
      sha256: "9a2f64e1c278b87a6d89e52731c3fa4e1b858f96e42b2600c6d7a5b399cf6521",
      reqs: "macOS 12 Monterey أو أحدث",
    },
    {
      id: "ios",
      name: "أَلْوَاحُ الآيْفُون وَالآيْبَاد",
      sub: "المَخْطُوطَةُ المَحْمُولَة",
      icon: Smartphone,
      version: "الإِصْدَار ٤,١٢,١",
      filename: "Legion-Chronicles-iOS.ipa",
      size: "١٨,٢ م.ب",
      sha256: "81e309cb6f4b62db94056ec7a731efcba9e4179cbdf1e8e58f002cb75e3c8371",
      reqs: "iOS 15.0 أو أحدث",
    },
    {
      id: "windows",
      name: "سِجِلَّاتُ وِينْدُوز المَلَكِيَّة",
      sub: "نُسْخَةُ الحَوَاسِيبِ الشَّخْصِيَّة",
      icon: Laptop,
      version: "الإِصْدَار ٤,١٢",
      filename: "Legion-Chronicles-Windows-Setup.exe",
      size: "٣٢,١ م.ب",
      sha256: "4c71e411b05a76985d26315ee44a5e2f7b88939c1e7a5b00cb36a72e8e3d6402",
      reqs: "Windows 10 / 11",
    },
    {
      id: "android",
      name: "لَوْحُ الأَنْدْرُويِد",
      sub: "المَخْزَنُ الرَّقْمِيّ",
      icon: Smartphone,
      version: "الإِصْدَار ٤,١١",
      filename: "Legion-Chronicles-Android.apk",
      size: "٢١,٤ م.ب",
      sha256: "3b54d678a1f49678e2d456b891a27e38cb4691e847c2b51299dfa7852c00e621",
      reqs: "Android 8.0 Oreo أو أحدث",
    },
    {
      id: "cli",
      name: "دِيوَانُ التِّيرْمِينَال لِلْبَاحِثِين",
      sub: "أَدَاةُ السَّطْرِ الأَوَامِرِيّ",
      icon: Terminal,
      version: "الإِصْدَار ٣,٤",
      filename: "legion-cli-chronicles.tar.gz",
      size: "٨,٦ م.ب",
      sha256: "5e4d2a1b9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c",
      reqs: "Linux / BSD / POSIX Shell",
    },
  ];

  const current = platforms.find((p) => p.id === selectedPlatform) || platforms[0];

  const handleDownload = (filename: string) => {
    setDownloadSuccess(filename);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <section
      id="download"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#F7F3EF] border-t border-[#E8E2D8]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs font-semibold tracking-normal text-[#8C7052] font-cinzel block mb-3">
            ٠٥. خِزَانَةُ المَخْطُوطَاتِ الرَّقْمِيَّة
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#292725] tracking-tight mb-4">
            تَحْمِيلُ أَلْوَاحِ الحِكْمَةِ لِكَافَّةِ الأَجْهِزَة
          </h2>
          <p className="text-sm sm:text-base text-[#5C5752] font-sans-clean leading-relaxed">
            اقْتَنِ مَخْطُوطَاتِ سِجِلَّاتِ الفَيْلَقِ عَلَى هَاتِفِكَ أَوْ حَاسُوبِكَ لِتَبْقَى حِكَمُ الخَالِدِينَ رَفِيقَةَ دَرْبِكَ فِي كُلِّ حِين.
          </p>
        </div>

        {/* Platform Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {platforms.map((p) => {
            const Icon = p.icon;
            const isSelected = selectedPlatform === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPlatform(p.id)}
                className={`p-4 sm:p-5 rounded-[24px] border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2.5 relative overflow-hidden ${
                  isSelected
                    ? "liquid-glass-refraction border-[#B69A75] shadow-md -translate-y-0.5"
                    : "bg-white/60 hover:bg-white/85 border-white/80 shadow-2xs"
                }`}
              >
                {isSelected && (
                  <>
                    <div className="liquid-glass-caustic-border" aria-hidden="true" />
                    <div className="liquid-glass-prism-ring" aria-hidden="true" />
                  </>
                )}
                {/* Circular Biscuit Emblem */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors shadow-xs relative z-10 ${
                    isSelected
                      ? "bg-[#C4A88E] text-[#24211E]"
                      : "bg-[#EAE4DC] text-[#786E64]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-cinzel text-xs sm:text-sm font-bold text-[#24211E] relative z-10">
                  {p.name}
                </div>
                <div className="text-[10px] text-[#7A7369] relative z-10">{p.sub}</div>
              </button>
            );
          })}
        </div>

        {/* Active Platform Download Details Box */}
        <div className="liquid-glass-card liquid-glass-refraction rounded-[36px] sm:rounded-[40px] p-7 sm:p-10 shadow-lg max-w-3xl mx-auto relative overflow-hidden">
          {/* Prismatic Caustics & Reflection Layers */}
          <div className="liquid-glass-caustic-border" aria-hidden="true" />
          <div className="liquid-glass-prism-ring" aria-hidden="true" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-[#292725]/10">
            <div className="flex items-center gap-4 text-center sm:text-right">
              {/* Circular Biscuit Emblem */}
              <div className="w-14 h-14 rounded-full bg-[#C4A88E] flex items-center justify-center shadow-xs shrink-0">
                <BookOpen className="w-7 h-7 text-[#24211E]" />
              </div>
              <div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#24211E]">
                  {current.name}
                </h3>
                <p className="text-xs text-[#7A7369] mt-0.5">
                  {current.version} · حَجْمُ المَلَف: {current.size} · {current.reqs}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleDownload(current.filename)}
              className="px-6 sm:px-8 py-3.5 rounded-full bg-[#292725] text-white hover:bg-[#1A1816] transition-all text-xs sm:text-sm font-semibold flex items-center gap-2.5 shadow-md cursor-pointer shrink-0"
            >
              <Download className="w-4 h-4 text-[#B69A75]" />
              <span>تَحْمِيلُ المَخْطُوطَةِ الآن</span>
            </button>
          </div>

          {/* Download Success Notice */}
          {downloadSuccess && (
            <div className="relative z-10 mt-4 p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-[#B69A75] text-[#24211E] flex items-center gap-3 animate-fade-in text-xs font-semibold shadow-xs">
              <CheckCircle className="w-4 h-4 text-[#B69A75] shrink-0" />
              <span>بَدَأَ تَحْمِيلُ «{downloadSuccess}» بِنَجَاح! طَابَتْ لَكَ رِحْلَةُ الحِكْمَة.</span>
            </div>
          )}

          {/* Security & Checksum Verification Section */}
          <div className="relative z-10 pt-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#8C7052] flex items-center gap-1.5">
                <FileCode className="w-4 h-4" />
                خَتْمُ التَّوْثِيقِ الرَّقْمِيّ (SHA-256)
              </span>
              <button
                type="button"
                onClick={() => setShowChecksum(!showChecksum)}
                className="text-xs text-[#7A7369] hover:text-[#292725] underline cursor-pointer"
              >
                {showChecksum ? "إِخْفَاءُ الخَتْم" : "إِظْهَارُ الخَتْم"}
              </button>
            </div>

            {showChecksum && (
              <div className="p-3.5 bg-white/60 backdrop-blur-xs rounded-xl border border-white/80 font-mono text-[11px] text-[#5C5752] break-all select-all shadow-2xs">
                {current.sha256}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
