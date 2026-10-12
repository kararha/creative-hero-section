import { useState } from "react";
import { Server, Zap, Shield, Search, ArrowRight, Check } from "lucide-react";

interface NodeItem {
  id: string;
  city: string;
  country: string;
  region: "europe" | "americas" | "apac" | "offshore";
  ip: string;
  ping: number;
  bandwidth: string;
  protocol: string;
  load: number;
  status: "Optimal" | "Secure";
}

export default function ServersSection() {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNode, setActiveNode] = useState<NodeItem>({
    id: "ch-zrh-01",
    city: "Zurich",
    country: "Switzerland",
    region: "europe",
    ip: "185.156.73.12",
    ping: 14,
    bandwidth: "10 Gbps",
    protocol: "WireGuard & Stealth",
    load: 28,
    status: "Optimal",
  });
  const [testingPing, setTestingPing] = useState(false);

  const serverNodes: NodeItem[] = [
    {
      id: "ch-zrh-01",
      city: "Zurich (Alpine Bunker)",
      country: "Switzerland",
      region: "europe",
      ip: "185.156.73.12",
      ping: 14,
      bandwidth: "10 Gbps",
      protocol: "WireGuard & Stealth",
      load: 28,
      status: "Optimal",
    },
    {
      id: "is-rey-01",
      city: "Reykjavik (Geothermal Hub)",
      country: "Iceland",
      region: "offshore",
      ip: "82.221.139.84",
      ping: 22,
      bandwidth: "10 Gbps",
      protocol: "WireGuard & Tor-Hop",
      load: 34,
      status: "Optimal",
    },
    {
      id: "it-rom-01",
      city: "Rome (Imperial Gateway)",
      country: "Italy",
      region: "europe",
      ip: "193.204.114.7",
      ping: 18,
      bandwidth: "10 Gbps",
      protocol: "WireGuard & Stealth",
      load: 42,
      status: "Optimal",
    },
    {
      id: "jp-tyo-01",
      city: "Tokyo (Otemachi Fiber)",
      country: "Japan",
      region: "apac",
      ip: "103.102.166.2",
      ping: 68,
      bandwidth: "10 Gbps",
      protocol: "WireGuard & Stealth",
      load: 38,
      status: "Optimal",
    },
    {
      id: "sg-sin-01",
      city: "Singapore (Jurong Node)",
      country: "Singapore",
      region: "apac",
      ip: "165.225.112.50",
      ping: 82,
      bandwidth: "10 Gbps",
      protocol: "WireGuard & Stealth",
      load: 49,
      status: "Optimal",
    },
    {
      id: "de-fra-01",
      city: "Frankfurt (DE-CIX Core)",
      country: "Germany",
      region: "europe",
      ip: "194.109.6.93",
      ping: 16,
      bandwidth: "10 Gbps",
      protocol: "WireGuard & Multi-Hop",
      load: 54,
      status: "Optimal",
    },
    {
      id: "us-nyc-01",
      city: "New York (Hudson Transit)",
      country: "United States",
      region: "americas",
      ip: "198.51.100.14",
      ping: 42,
      bandwidth: "10 Gbps",
      protocol: "WireGuard & Stealth",
      load: 51,
      status: "Optimal",
    },
    {
      id: "pa-pty-01",
      city: "Panama City (Sovereign Port)",
      country: "Panama",
      region: "offshore",
      ip: "190.216.200.5",
      ping: 74,
      bandwidth: "10 Gbps",
      protocol: "WireGuard & Tor-Hop",
      load: 22,
      status: "Optimal",
    },
  ];

  const filteredNodes = serverNodes.filter((node) => {
    const matchesRegion =
      selectedRegion === "all" || node.region === selectedRegion;
    const matchesSearch =
      node.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      node.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const handleTestLatency = () => {
    setTestingPing(true);
    setTimeout(() => {
      setTestingPing(false);
    }, 800);
  };

  return (
    <section
      id="servers"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#FAF7F3] border-t border-[#E8E2D8]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7052] uppercase font-cinzel block mb-3">
              02. GLOBAL TOPOLOGY
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#292725] tracking-tight leading-tight mb-4">
              SOVEREIGN IMPERIAL NETWORK
            </h2>
            <p className="text-sm sm:text-base text-[#5C5752] font-sans-clean leading-relaxed">
              140+ dedicated bare-metal nodes configured across 62 jurisdictions. Zero
              virtualized cloud rentals, zero disk persistence.
            </p>
          </div>

          {/* Quick stats strip */}
          <div className="flex items-center gap-6 sm:gap-8 pb-1 border-b border-[#E0D7C9]">
            <div>
              <span className="text-[11px] text-[#7A7369] block">Total Fleet</span>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#292725]">
                140+ Nodes
              </span>
            </div>
            <div>
              <span className="text-[11px] text-[#7A7369] block">Bare-Metal Backbone</span>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#8C7052]">
                10 Gbps Tier-1
              </span>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-full border border-[#DED7CB] shadow-2xs overflow-x-auto max-w-full">
            {[
              { id: "all", label: "All Hubs" },
              { id: "europe", label: "Europe & Swiss" },
              { id: "offshore", label: "Offshore Bastions" },
              { id: "americas", label: "Americas" },
              { id: "apac", label: "Asia-Pacific" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedRegion(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  selectedRegion === tab.id
                    ? "bg-[#292725] text-white shadow-2xs"
                    : "text-[#6B645D] hover:text-[#292725] hover:bg-[#F4EFE6]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#8C7052] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by city or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-full border border-[#DED7CB] text-xs text-[#292725] placeholder:text-[#9C948A] focus:outline-hidden focus:border-[#B69A75] shadow-2xs"
            />
          </div>
        </div>

        {/* Server Explorer Grid & Live Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left: Scrollable Server Node Roster */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DED7CB] p-4 sm:p-6 shadow-md max-h-[520px] overflow-y-auto custom-scrollbar space-y-2.5">
            {filteredNodes.map((node) => {
              const isSelected = activeNode.id === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-[#FAF7F2] border-[#B69A75] shadow-xs"
                      : "bg-white border-[#EFEBE4] hover:bg-[#FAF8F5] hover:border-[#D6CEBE]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "bg-[#292725] text-[#FAF7F2]"
                          : "bg-[#F2EDE4] text-[#736B62]"
                      }`}
                    >
                      <Server className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-cinzel text-sm font-bold text-[#292725]">
                          {node.city}
                        </span>
                        <span className="text-[10px] font-mono text-[#8C7052] bg-[#F7F2E9] px-2 py-0.5 rounded-full border border-[#E8DEC8]">
                          {node.country}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#736B62] font-mono block mt-0.5">
                        {node.bandwidth} · {node.protocol}
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-mono text-xs font-semibold text-[#292725] block">
                      {node.ping} ms
                    </span>
                    <span className="text-[10px] text-[#786E64] block">
                      {node.load}% Capacity
                    </span>
                  </div>
                </div>
              );
            })}

            {filteredNodes.length === 0 && (
              <div className="py-12 text-center text-xs text-[#7A7369]">
                No server hubs found matching your filter criteria.
              </div>
            )}
          </div>

          {/* Right: Active Imperial Node Inspection Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#292725] to-[#1C1A18] text-white rounded-3xl p-7 sm:p-8 shadow-xl border border-[#B69A75]/30">
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#B69A75] uppercase block mb-1">
                  ACTIVE BASTION SELECTION
                </span>
                <h3 className="font-cinzel text-xl font-bold text-white">
                  {activeNode.city}
                </h3>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#B69A75]">
                <Shield className="w-4.5 h-4.5" />
              </div>
            </div>

            {/* Live Cryptographic Tunnel Simulation */}
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Masked Exit IP</span>
                  <span className="font-mono text-white">{activeNode.ip}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>RAM Volatile Scrub</span>
                  <span className="text-[#B69A75] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Active (0 Disk Writes)
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Round-Trip Latency</span>
                  <span className="font-mono text-white">
                    {testingPing ? "Probing..." : `${activeNode.ping} ms`}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-white/50 block text-[10px]">THROUGHPUT</span>
                  <span className="font-mono font-semibold text-white">
                    {activeNode.bandwidth}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-white/50 block text-[10px]">TUNNEL CIPHER</span>
                  <span className="font-mono font-semibold text-white">
                    ChaCha20-Poly1305
                  </span>
                </div>
              </div>
            </div>

            {/* Test Latency Action */}
            <button
              type="button"
              onClick={handleTestLatency}
              className="w-full py-3 rounded-full bg-[#B69A75] hover:bg-[#A38662] text-[#1A1816] font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{testingPing ? "Measuring Latency..." : "Measure Round-Trip Ping"}</span>
            </button>

            <div className="mt-4 text-center">
              <a
                href="#download"
                className="inline-flex items-center gap-1.5 text-xs text-[#B69A75] hover:text-white transition-colors"
              >
                <span>Deploy WireGuard config profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
