import { useState, useEffect } from "react";
import { X, ShieldCheck, Send, Check } from "lucide-react";
import ImperialEmblem from "./artwork/ImperialEmblem.tsx";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [topic, setTopic] = useState("quote_request");
  const [handle, setHandle] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [errors, setErrors] = useState<{ handle?: string; message?: string }>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { handle?: string; message?: string } = {};

    if (!handle.trim()) {
      newErrors.handle = "يُرْجَى إِدْخَالُ لَقَبِكَ أَوْ عُنْوَانِ المُرَاسَلَة.";
    }
    if (!message.trim() || message.trim().length < 8) {
      newErrors.message = "يُرْجَى كِتَابَةُ رِسَالَةٍ مُفَصَّلَة (٨ أَحْرُفٍ عَلَى الأَقَلّ).";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const randomTicket = "LEGION-MSG-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setHandle("");
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg liquid-glass-card liquid-glass-refraction rounded-[40px] p-6 sm:p-8 shadow-2xl text-right overflow-hidden border border-white/90 select-none"
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
        role="dialog"
        aria-modal="true"
        aria-label="نِدَاءُ دِيوَانِ الحُرَّاس"
      >
        {/* Prismatic Caustics & Reflection Layers */}
        <div className="liquid-glass-caustic-border" aria-hidden="true" />
        <div className="liquid-glass-prism-ring" aria-hidden="true" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="relative z-20 absolute top-5 left-5 p-2 rounded-full text-[#7A7369] hover:text-[#24211E] hover:bg-white/80 transition-colors cursor-pointer"
          aria-label="إِغْلَاق"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="relative z-10 text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#C4A88E] mx-auto flex items-center justify-center shadow-xs">
              <Check className="w-7 h-7 text-[#24211E]" />
            </div>
            <h3 className="font-cinzel text-2xl font-bold text-[#24211E]">
              بَلَغَتْ رِسَالَتُكَ دِيوَانَ الحُرَّاس
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5752] leading-relaxed max-w-sm mx-auto">
              سَيَقُومُ أُمَنَاءُ السِّجِلَّاتِ بِمُطَالَعَةِ رِسَالَتِكَ وَالرَّدِّ عَلَيْهَا بِمَا يَلِيقُ بِأَعْرَافِ الفَيْلَق.
            </p>
            <div className="p-3.5 bg-white/70 backdrop-blur-xs rounded-xl border border-white/80 font-mono text-xs text-[#8C7052] font-bold shadow-2xs">
              رَقْمُ الرِّسَالَة: {ticketId}
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#292725] text-white text-xs font-semibold hover:bg-[#1A1816] transition-all cursor-pointer shadow-xs"
            >
              العَوْدَةُ إِلَى السِّجِلَّات
            </button>
          </div>
        ) : (
          <div className="relative z-10">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-full bg-[#C4A88E] flex items-center justify-center shadow-xs shrink-0">
                <ImperialEmblem className="w-5 h-5" color="#24211E" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#8C7052] block">
                  دِيوَانُ المُخَاطَبَاتِ الإِمْبِرَاطُورِيّ
                </span>
                <h3 className="font-cinzel text-xl font-bold text-[#24211E]">
                  نِدَاءُ دِيوَانِ الحُرَّاس
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#4A4540] mb-1.5">
                  غَرَضُ المُرَاسَلَة:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "quote_request", label: "طَلَبُ حِكْمَةٍ نَادِرَة" },
                    { id: "allegiance", label: "الانْتِسَابُ لِلْفَيْلَق" },
                    { id: "consultation", label: "اسْتِشَارَةُ الأَسْلَاف" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTopic(t.id)}
                      className={`py-2 px-2 text-[11px] rounded-xl border text-center transition-all cursor-pointer ${
                        topic === t.id
                          ? "bg-[#292725] text-white border-[#292725] font-semibold"
                          : "bg-white text-[#5C5752] border-[#DED7CB] hover:bg-[#FAF7F2]"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A4540] mb-1">
                  اللَّقَبُ أَوْ عُنْوَانُ البَرِيد:
                </label>
                <input
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="مَثَلًا: الفَارِسُ طَارِق / tareq@domain.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DED7CB] text-xs text-[#292725] focus:outline-hidden focus:border-[#B69A75]"
                />
                {errors.handle && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.handle}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A4540] mb-1">
                  نَصُّ الرِّسَالَةِ أَوْ كَلِمَةُ الاسْتِفْسَار:
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="اكْتُبْ مَا تَشَاءُ بِكُلِّ صِدْقٍ وَوَقَار..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DED7CB] text-xs text-[#292725] focus:outline-hidden focus:border-[#B69A75] resize-none"
                />
                {errors.message && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-[#7A7369]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B69A75]" />
                  سِرِّيَّةٌ تَامَّةٌ وَأَمَانَةٌ مُقَدَّسَة
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#292725] text-white hover:bg-[#1A1816] transition-all text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 text-[#B69A75]" />
                  <span>إِرْسَالُ النِّدَاء</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
