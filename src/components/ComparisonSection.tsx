import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const comparisonRows = [
    {
      feature: "Physical Storage Architecture",
      legion: "100% Volatile RAM (Diskless Kernel)",
      ordinary: "Standard SSD/Hard Disk Swap Logging",
      highlight: true,
    },
    {
      feature: "Governing Legal Jurisdiction",
      legion: "Switzerland (Federal Privacy Art. 13)",
      ordinary: "US / UK / EU (Five Eyes Data Sharing)",
      highlight: true,
    },
    {
      feature: "Post-Quantum Cryptography",
      legion: "ChaCha20-Poly1305 + Kyber-768 (ML-KEM)",
      ordinary: "Legacy AES-CBC / Vulnerable RSA-2048",
      highlight: false,
    },
    {
      feature: "Server Fleet Infrastructure",
      legion: "100% Bare-Metal Dedicated Hardware",
      ordinary: "Shared VPS & Public Cloud Instances",
      highlight: false,
    },
    {
      feature: "Account Identity Requirements",
      legion: "Cryptographic Token (No Email / Zero KYC)",
      ordinary: "Mandatory Email Address & Phone SMS",
      highlight: true,
    },
    {
      feature: "Private Payment Options",
      legion: "Native Monero (XMR), Bitcoin, Cash in Mail",
      ordinary: "Credit Cards & Tracked Processors Only",
      highlight: false,
    },
    {
      feature: "Deep Packet Inspection (DPI) Evasion",
      legion: "Imperial Dynamic Entropy Masking",
      ordinary: "Easily Blocked WireGuard / OpenVPN Headers",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#F7F3EF] border-t border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7052] uppercase font-cinzel block mb-3">
            03. PROTOCOL BENCHMARK
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#292725] tracking-tight mb-4">
            THE SOVEREIGN DIFFERENCE
          </h2>
          <p className="text-sm sm:text-base text-[#5C5752] font-sans-clean leading-relaxed">
            Examine how the Legion architectural standard compares against conventional
            consumer VPN services.
          </p>
        </div>

        {/* Tabular Comparison Table */}
        <div className="bg-white rounded-3xl border border-[#DED7CB] shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#EAE4DA] bg-[#FAF7F3]">
                  <th className="py-5 px-6 font-cinzel text-xs sm:text-sm font-bold text-[#292725] uppercase tracking-wider w-2/5">
                    Architectural Requirement
                  </th>
                  <th className="py-5 px-6 font-cinzel text-xs sm:text-sm font-bold text-[#8C7052] uppercase tracking-wider w-3/10 bg-[#FAF4EA]/80">
                    LEGION VPN Imperial Standard
                  </th>
                  <th className="py-5 px-6 font-cinzel text-xs sm:text-sm font-bold text-[#736B62] uppercase tracking-wider w-3/10">
                    Conventional Consumer VPNs
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE4DA] text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`transition-colors ${
                      idx % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]/60"
                    }`}
                  >
                    <td className="py-4.5 px-6 font-medium text-[#292725]">
                      {row.feature}
                    </td>

                    {/* Legion Column */}
                    <td className="py-4.5 px-6 font-semibold text-[#292725] bg-[#FAF4EA]/40">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#8C7052] shrink-0" />
                        <span>{row.legion}</span>
                      </div>
                    </td>

                    {/* Ordinary Column */}
                    <td className="py-4.5 px-6 text-[#786E64]">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-[#B3A99B] shrink-0" />
                        <span>{row.ordinary}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trust Seal Adjacency */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#7A7369]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#8C7052]" />
            Independent Whitebox Audit Certified
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#8C7052]" />
            Swiss Federal Data Protection Act (FADP)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#8C7052]" />
            30-Day Sovereign Guarantee
          </span>
        </div>
      </div>
    </section>
  );
}
