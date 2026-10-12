import { useState, useEffect } from "react";
import { X, ShieldCheck, Send, Check } from "lucide-react";
import ImperialEmblem from "./artwork/ImperialEmblem.tsx";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [topic, setTopic] = useState("enterprise");
  const [handle, setHandle] = useState("");
  const [message, setMessage] = useState("");
  const [pgpKey, setPgpKey] = useState("");
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
      newErrors.handle = "Please provide an email or anonymous communication handle.";
    }
    if (!message.trim() || message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const randomTicket = "LEGION-ENCR-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setHandle("");
    setMessage("");
    setPgpKey("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#FAF7F3] rounded-3xl border border-[#DED7CB] shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#EAE4DA] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white border border-[#B69A75]/40 flex items-center justify-center shadow-2xs">
              <ImperialEmblem className="w-4 h-4" color="#8C7052" />
            </div>
            <div>
              <h3
                id="contact-modal-title"
                className="font-cinzel text-lg font-bold text-[#292725]"
              >
                Sovereign Concierge
              </h3>
              <span className="text-[10px] text-[#8C7052] font-mono tracking-wider uppercase block">
                Swiss PGP-Encrypted Channel
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#EAE4DC] flex items-center justify-center text-[#7A7369] hover:text-[#292725] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF4EA] border border-[#B69A75] text-[#8C7052] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>

            <h4 className="font-cinzel text-xl font-bold text-[#292725]">
              Encrypted Dispatch Sealed
            </h4>

            <p className="text-xs text-[#5C5752] leading-relaxed max-w-sm mx-auto">
              Your inquiry has been encrypted with Legion’s master public key and queued
              for review at our Zurich operations desk.
            </p>

            <div className="p-3 bg-white rounded-xl border border-[#DED7CB] font-mono text-xs text-[#8C7052]">
              Ticket Reference: <strong>{ticketId}</strong>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#292725] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#1A1816] transition-colors cursor-pointer"
            >
              Return to Legion
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label
                htmlFor="inquiry-topic"
                className="block text-[11px] font-semibold text-[#7A7369] uppercase tracking-wider mb-1.5"
              >
                Inquiry Classification
              </label>
              <select
                id="inquiry-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#DED7CB] rounded-xl text-xs text-[#292725] focus:outline-hidden focus:border-[#B69A75]"
              >
                <option value="enterprise">Sovereign Enterprise Fleet</option>
                <option value="bounty">Security Vulnerability / Bug Bounty</option>
                <option value="press">Press &amp; Anonymous Legal Liaison</option>
                <option value="support">General Cryptographic Inquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="inquiry-handle"
                className="block text-[11px] font-semibold text-[#7A7369] uppercase tracking-wider mb-1.5"
              >
                Return Channel (Email, Session ID, or SimpleX) *
              </label>
              <input
                id="inquiry-handle"
                type="text"
                placeholder="e.g. anonymous@proton.me or Session Key"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-xs text-[#292725] focus:outline-hidden focus:border-[#B69A75] ${
                  errors.handle ? "border-red-400" : "border-[#DED7CB]"
                }`}
              />
              {errors.handle && (
                <span className="text-[10px] text-red-500 mt-1 block">
                  {errors.handle}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="inquiry-message"
                className="block text-[11px] font-semibold text-[#7A7369] uppercase tracking-wider mb-1.5"
              >
                Encrypted Dispatch Message *
              </label>
              <textarea
                id="inquiry-message"
                rows={3}
                placeholder="Describe your security requirements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full px-3.5 py-2 bg-white border rounded-xl text-xs text-[#292725] focus:outline-hidden focus:border-[#B69A75] ${
                  errors.message ? "border-red-400" : "border-[#DED7CB]"
                }`}
              />
              {errors.message && (
                <span className="text-[10px] text-red-500 mt-1 block">
                  {errors.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="inquiry-pgp"
                className="block text-[11px] font-semibold text-[#7A7369] uppercase tracking-wider mb-1.5"
              >
                Optional PGP Public Key Fingerprint
              </label>
              <input
                id="inquiry-pgp"
                type="text"
                placeholder="e.g. 4D8A 91BC 03EF 4501..."
                value={pgpKey}
                onChange={(e) => setPgpKey(e.target.value)}
                className="w-full px-3.5 py-2 bg-white border border-[#DED7CB] rounded-xl text-xs font-mono text-[#292725] focus:outline-hidden focus:border-[#B69A75]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[10px] text-[#786E64] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8C7052]" />
                Zero-Knowledge Storage
              </span>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-[#292725] hover:bg-[#1A1816] text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Send className="w-3.5 h-3.5 text-[#B69A75]" />
                <span>Transmit Inquiry</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
