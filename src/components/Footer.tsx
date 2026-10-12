import ImperialEmblem from "./artwork/ImperialEmblem.tsx";

export default function Footer() {
  return (
    <footer className="bg-[#292725] text-[#FAF7F2] pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-12 border-t border-[#3D3A36]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Brand & Editorial Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#B69A75]/50 bg-white/10 flex items-center justify-center">
                <ImperialEmblem className="w-4.5 h-4.5" color="#B69A75" />
              </div>
              <span className="font-cinzel tracking-[0.24em] text-base font-bold text-white">
                LEGION VPN
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans-clean max-w-sm">
              The digital empire. Privacy, strength, anonymity, and absolute control.
              Engineered on volatile memory-only architecture protected under Swiss
              federal law.
            </p>

            <div className="pt-2 text-[11px] font-mono text-[#B69A75]">
              ZURICH · REYKJAVIK · ROME · TOKYO
            </div>
          </div>

          {/* Quick Navigation Mirror */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-cinzel text-xs font-bold text-[#B69A75] uppercase tracking-wider block">
              Sovereign Grid
            </span>
            <ul className="space-y-2 text-xs text-white/70 font-sans-clean">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Defense Pillars
                </a>
              </li>
              <li>
                <a href="#servers" className="hover:text-white transition-colors">
                  Server Topology
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Access Tiers
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">
                  Client Binaries
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Sanctuary & Compliance */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-cinzel text-xs font-bold text-[#B69A75] uppercase tracking-wider block">
              Jurisprudence
            </span>
            <ul className="space-y-2 text-xs text-white/70 font-sans-clean">
              <li>
                <span className="cursor-default hover:text-white transition-colors">
                  Swiss FADP Compliance
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">
                  Zero-Logs Ratification
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">
                  PwC Cryptographic Audit
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">
                  PGP Sovereign Key (4096)
                </span>
              </li>
            </ul>
          </div>

          {/* Warrant Canary Live Notice */}
          <div className="md:col-span-3 space-y-3 bg-white/5 p-5 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between">
              <span className="font-cinzel text-xs font-bold text-white tracking-wide">
                Warrant Canary
              </span>
              <span className="w-2 h-2 rounded-full bg-[#B69A75]" />
            </div>
            <p className="text-[11px] text-white/60 leading-relaxed">
              As of October 2026, Legion Technologies AG has received 0 secret subpoenas,
              0 national security letters, and 0 data preservation requests. Our
              RAM-only nodes cannot surrender what never existed.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Unboxed Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {new Date().getFullYear()} Legion Technologies AG. All sovereign
            rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Covenant</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Sovereignty</span>
            <span aria-hidden="true">·</span>
            <span>Security Whitepaper</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
