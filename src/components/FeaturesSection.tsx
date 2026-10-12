import { useState } from "react";
import { Cpu, KeyRound, ShieldAlert, Globe2, Check, RefreshCw } from "lucide-react";

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [testSuccess, setTestSuccess] = useState(false);

  const pillars = [
    {
      id: "ram-only",
      title: "Volatile Memory-Only Fleet",
      subtitle: "Diskless Volatile Architecture",
      icon: Cpu,
      summary:
        "Every Legion node boots strictly into volatile RAM from read-only cryptographic images. No spinning platters, no SSD cache. If power is interrupted, 100% of ephemeral data ceases to exist.",
      metrics: [
        { label: "Storage Persistence", value: "0 bytes" },
        { label: "Scrub Frequency", value: "Every 60s" },
        { label: "Hardware Ownership", value: "Bare Metal" },
      ],
      details:
        "Standard VPN providers write logging queues to disk before truncation. Legion’s kernel patches completely eliminate disk drivers from the runtime kernel image.",
    },
    {
      id: "crypto",
      title: "Post-Quantum Cryptographic Ciphers",
      subtitle: "ChaCha20-Poly1305 & ML-KEM",
      icon: KeyRound,
      summary:
        "Combining high-throughput ChaCha20 authenticated streaming encryption with NIST-standardized Kyber post-quantum key encapsulation to defeat current and future quantum decryption attacks.",
      metrics: [
        { label: "Cipher Suite", value: "ChaCha20-Poly1305" },
        { label: "Key Exchange", value: "ML-KEM (Kyber-768)" },
        { label: "Perfect Forward Secrecy", value: "Every 15 min" },
      ],
      details:
        "Harvest-now, decrypt-later surveillance programs capture encrypted ciphertext today for future quantum decryption. Legion’s quantum-resistant handshakes neutralize this threat at the protocol layer.",
    },
    {
      id: "jurisdiction",
      title: "Sovereign Swiss Sanctuary",
      subtitle: "Article 13 Federal Protection",
      icon: ShieldAlert,
      summary:
        "Incorporated and physically anchored in Switzerland. We operate completely beyond the reach of Five Eyes and Fourteen Eyes surveillance cartels, protected by rigorous federal privacy jurisprudence.",
      metrics: [
        { label: "Jurisdiction", value: "Zurich, CH" },
        { label: "Audit Rating", value: "PwC Tier 1" },
        { label: "Warrant Canary", value: "0 Subpoenas" },
      ],
      details:
        "Swiss federal courts strictly prohibit warrantless data preservation orders against zero-log communication providers. Foreign court orders possess zero legal extraterritorial effect.",
    },
    {
      id: "stealth",
      title: "Stealth Obfuscation Ingress",
      subtitle: "Deep Packet Inspection Immunity",
      icon: Globe2,
      summary:
        "Patented traffic randomization disguises VPN packets as indistinguishable HTTPS/TLS 1.3 multimedia streams, penetrating restrictive institutional and national firewalls without latency penalties.",
      metrics: [
        { label: "DPI Resistance", value: "100% Undetected" },
        { label: "Throughput Overhead", value: "< 1.2%" },
        { label: "Port Agility", value: "Dynamic 443/8443" },
      ],
      details:
        "Authoritarian network filters actively target WireGuard packet signatures. Our Imperial Cloak module normalizes packet entropy and inter-packet timing to mimic normal web video traffic.",
    },
  ];

  const handleSimulateHandshake = () => {
    setTestSuccess(true);
    setTimeout(() => setTestSuccess(false), 2400);
  };

  const current = pillars[activeTab];

  return (
    <section
      id="features"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#F7F3EF] border-t border-[#E8E2D8]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7052] uppercase font-cinzel block mb-3">
            01. CORE CAPABILITIES
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#292725] tracking-tight leading-tight mb-5">
            THE IMPERIAL DEFENSE PILLARS
          </h2>
          <p className="text-sm sm:text-base text-[#5C5752] font-sans-clean leading-relaxed">
            Privacy is not a luxury configuration setting; it is an architectural
            mandate. Inspect the four cryptographic pillars defending the Legion empire.
          </p>
        </div>

        {/* Bento Grid Architecture of Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Interactive Pillar Selectors (4 items) */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
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
                      <span className="text-[11px] font-mono tracking-wider text-[#8C7052] uppercase font-medium">
                        {pillar.subtitle}
                      </span>
                      <span className="text-[11px] font-mono text-[#8C7052]">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-cinzel text-base font-bold text-[#292725] truncate">
                      {pillar.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: In-Depth Sovereign Technical Specification Display */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DED7CB] p-7 sm:p-9 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EAE4DA]">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#8C7052]">
                  SPECIFICATION DOSSIER
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-[#292725] mt-1">
                  {current.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleSimulateHandshake}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F7F3EF] hover:bg-[#292725] hover:text-white border border-[#B69A75]/40 text-[#292725] transition-all cursor-pointer shadow-2xs"
              >
                {testSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#B69A75]" />
                    <span>Cryptographic Audit Pass</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 text-[#8C7052]" />
                    <span>Verify Live Cryptography</span>
                  </>
                )}
              </button>
            </div>

            {/* Summary & Architectural Description */}
            <div className="py-6 space-y-4">
              <p className="text-sm sm:text-base text-[#423E3A] leading-relaxed">
                {current.summary}
              </p>
              <p className="text-xs sm:text-sm text-[#736B62] leading-relaxed font-sans-clean bg-[#F7F4EE] p-4 rounded-xl border border-[#EAE3D5]">
                {current.details}
              </p>
            </div>

            {/* Quantified Rigor Metrics */}
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
