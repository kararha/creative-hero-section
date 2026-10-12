import { useState } from "react";
import { Check, ShieldCheck, Sparkles, Key } from "lucide-react";

export default function PricingSection() {
  const [currency, setCurrency] = useState<"USD" | "EUR" | "GBP" | "XMR">("USD");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [generatedToken, setGeneratedToken] = useState<string | null>(null);

  const currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    XMR: "ɱ",
  };

  const rates = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.81,
    XMR: 0.0072, // Monero crypto unit
  };

  const plans = [
    {
      id: "centurion",
      name: "Centurion Tier",
      cadence: "Monthly Access",
      monthlyUsd: 12.99,
      billedNote: "Billed monthly, cancel anytime",
      featured: false,
      features: [
        "Full access to 140+ bare-metal nodes",
        "10 concurrent high-speed tunnels",
        "100% Volatile RAM diskless architecture",
        "ChaCha20-Poly1305 quantum-resistant cipher",
        "Stealth DPI evasion protocol",
      ],
    },
    {
      id: "praetorian",
      name: "Praetorian Sovereign",
      cadence: "1 Year Access",
      monthlyUsd: 6.49,
      billedNote: "Billed annually ($77.88 / yr) · Save 50%",
      featured: true,
      badge: "MOST POPULAR",
      features: [
        "All Centurion Tier capabilities",
        "Swiss Alpine underground node priority",
        "Multi-Hop Double Cascade routing",
        "Automated Kill-Switch at OS kernel layer",
        "Zero-KYC anonymous payment guarantee",
        "24/7 Sovereign Concierge support",
      ],
    },
    {
      id: "augustus",
      name: "Augustus Imperial",
      cadence: "2 Years + 3 Mo Free",
      monthlyUsd: 4.29,
      billedNote: "Billed biennially ($115.83 total) · Save 67%",
      featured: false,
      badge: "GREATEST SAVINGS",
      features: [
        "All Praetorian Sovereign capabilities",
        "Dedicated Swiss static IP option",
        "Custom router OpenWRT firmware configs",
        "Unlimited concurrent household devices",
        "Direct PGP encrypted escalation channel",
        "Permanent lifetime warrant canary updates",
      ],
    },
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    // Generate a random sovereign account token
    const randomHex = Array.from({ length: 4 }, () =>
      Math.random().toString(16).substring(2, 6).toUpperCase()
    ).join("-");
    setGeneratedToken(`LEGION-${randomHex}`);
  };

  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#FAF7F3] border-t border-[#E8E2D8]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7052] uppercase font-cinzel block mb-3">
            04. IMPERIAL COMMERCE
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#292725] tracking-tight mb-4">
            SOVEREIGN ACCESS TIERS
          </h2>
          <p className="text-sm sm:text-base text-[#5C5752] font-sans-clean leading-relaxed mb-6">
            Transparent pricing with zero hidden surcharges or autorenewal deception.
            Anonymous account numbers guaranteed.
          </p>

          {/* Currency / Crypto Selector */}
          <div className="inline-flex items-center gap-1 p-1 bg-white rounded-full border border-[#DED7CB] shadow-2xs">
            {(["USD", "EUR", "GBP", "XMR"] as const).map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => setCurrency(curr)}
                className={`px-4 py-1.5 text-xs font-semibold tracking-wider rounded-full transition-all cursor-pointer ${
                  currency === curr
                    ? "bg-[#292725] text-white shadow-2xs"
                    : "text-[#6B645D] hover:text-[#292725] hover:bg-[#F4EFE6]"
                }`}
              >
                {curr === "XMR" ? "Monero (XMR -10%)" : curr}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan) => {
            const rawPrice = plan.monthlyUsd * rates[currency];
            const finalPrice =
              currency === "XMR" ? (rawPrice * 0.9).toFixed(4) : rawPrice.toFixed(2);

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.featured
                    ? "bg-white border-2 border-[#B69A75] shadow-xl md:-translate-y-2"
                    : "bg-white/80 border border-[#DED7CB] shadow-md hover:bg-white"
                }`}
              >
                {/* Featured Badge */}
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B69A75] text-[#1A1816] text-[10px] font-bold tracking-[0.2em] uppercase font-cinzel shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-cinzel text-xl font-bold text-[#292725]">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#7A7369] font-mono uppercase tracking-wider mb-6">
                    {plan.cadence}
                  </p>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-[#8C7052] font-cinzel">
                      {currencySymbols[currency]}
                    </span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#292725] font-cinzel tracking-tight">
                      {finalPrice}
                    </span>
                    <span className="text-xs text-[#7A7369]">/ month</span>
                  </div>

                  <p className="text-[11px] text-[#8C8377] mb-8 pb-6 border-b border-[#EAE4DA]">
                    {plan.billedNote}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8 text-xs text-[#4A4540]">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#8C7052] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan CTA Action */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleSelectPlan(plan.id)}
                    className={`w-full py-3.5 rounded-full text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer shadow-sm ${
                      plan.featured
                        ? "bg-[#292725] text-white hover:bg-[#1A1816] hover:shadow-md"
                        : "bg-[#F7F3EF] text-[#292725] hover:bg-[#292725] hover:text-white border border-[#D5CBBF]"
                    }`}
                  >
                    Generate Anonymous Access
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Generated Token Modal / State */}
        {selectedPlan && (
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#292725] text-white border border-[#B69A75]/40 shadow-xl max-w-2xl mx-auto animate-float-slow">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Key className="w-5 h-5 text-[#B69A75]" />
                <h4 className="font-cinzel text-lg font-bold text-white">
                  Anonymous Account Token Created
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPlan(null)}
                className="text-xs text-white/50 hover:text-white cursor-pointer"
              >
                Close &times;
              </button>
            </div>

            <p className="text-xs text-white/70 leading-relaxed mb-4">
              Legion VPN requires zero email addresses, phone numbers, or passwords.
              This cryptographic token is your sole login credential. Store it securely:
            </p>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between font-mono text-sm sm:text-base text-[#B69A75] mb-5 tracking-widest select-all">
              <span>{generatedToken}</span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(generatedToken || "");
                  alert("Token copied to clipboard!");
                }}
                className="text-xs text-white/60 hover:text-white uppercase tracking-wider underline cursor-pointer"
              >
                Copy
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
              <span>Accepted: Credit Card, Monero (XMR), Bitcoin, Cash</span>
              <a
                href="#download"
                onClick={() => setSelectedPlan(null)}
                className="text-[#B69A75] hover:underline font-semibold"
              >
                Proceed to App Activation &rarr;
              </a>
            </div>
          </div>
        )}

        {/* 30-Day Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-[#DED7CB] max-w-2xl mx-auto flex items-center gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-full bg-[#FAF4EA] border border-[#B69A75]/40 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-[#8C7052]" />
          </div>
          <div className="text-xs text-[#5C5752] leading-relaxed">
            <span className="font-bold text-[#292725] block font-cinzel text-sm">
              30-Day Imperial Money-Back Covenant
            </span>
            If you are not thoroughly satisfied with the speed and anonymity of our
            Swiss network, request an unconditional refund with zero questions asked.
          </div>
        </div>
      </div>
    </section>
  );
}
