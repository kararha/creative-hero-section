import { useState } from "react";
import {
  Laptop,
  Smartphone,
  Terminal,
  Wifi,
  Download,
  CheckCircle,
  FileCode,
  QrCode,
} from "lucide-react";

export default function DownloadSection() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("macos");
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [showChecksum, setShowChecksum] = useState(false);

  const platforms = [
    {
      id: "macos",
      name: "macOS",
      sub: "Apple Silicon & Intel",
      icon: Laptop,
      version: "v4.12.0",
      filename: "Legion-macOS-Universal-v4.12.0.dmg",
      size: "24.6 MB",
      sha256: "9a2f64e1c278b87a6d89e52731c3fa4e1b858f96e42b2600c6d7a5b399cf6521",
      reqs: "macOS 12.0 Monterey or newer",
    },
    {
      id: "ios",
      name: "iOS & iPadOS",
      sub: "Native App Store",
      icon: Smartphone,
      version: "v4.12.1",
      filename: "Legion-iOS-v4.12.1.ipa",
      size: "18.2 MB",
      sha256: "81e309cb6f4b62db94056ec7a731efcba9e4179cbdf1e8e58f002cb75e3c8371",
      reqs: "iOS 15.0 or newer",
    },
    {
      id: "windows",
      name: "Windows",
      sub: "11 & 10 (x64 / ARM)",
      icon: Laptop,
      version: "v4.12.0",
      filename: "Legion-Windows-Setup-v4.12.0.exe",
      size: "32.1 MB",
      sha256: "4c71e411b05a76985d26315ee44a5e2f7b88939c1e7a5b00cb36a72e8e3d6402",
      reqs: "Windows 10 64-bit or Windows 11",
    },
    {
      id: "android",
      name: "Android",
      sub: "APK & Google Play",
      icon: Smartphone,
      version: "v4.11.8",
      filename: "Legion-Android-Release-v4.11.8.apk",
      size: "21.4 MB",
      sha256: "3b54d678a1f49678e2d456b891a27e38cb4691e847c2b51299dfa7852c00e621",
      reqs: "Android 8.0 Oreo or newer",
    },
    {
      id: "linux",
      name: "Linux CLI & GUI",
      sub: "Debian, Arch, Fedora",
      icon: Terminal,
      version: "v4.12.0",
      filename: "legion-cli-linux-amd64.tar.gz",
      size: "12.8 MB",
      sha256: "f2c3d5e718a29b4056ec87a912b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f90123",
      reqs: "Linux Kernel 5.4+ with WireGuard support",
    },
    {
      id: "routers",
      name: "Router & Gateway",
      sub: "OpenWRT & pfSense",
      icon: Wifi,
      version: "Config Generator",
      filename: "legion-wireguard-router.conf",
      size: "4.2 KB",
      sha256: "1e2d3c4b5a6f7890123456789abcdef0123456789abcdef0123456789abcdef0",
      reqs: "Any WireGuard-capable firmware",
    },
  ];

  const current = platforms.find((p) => p.id === selectedPlatform) || platforms[0];

  const handleDownload = () => {
    setDownloadSuccess(current.filename);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  return (
    <section
      id="download"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#F7F3EF] border-t border-[#E8E2D8]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7052] uppercase font-cinzel block mb-3">
            05. CROSS-PLATFORM DEPLOYMENT
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#292725] tracking-tight mb-4">
            THE IMPERIAL CLIENT SUITE
          </h2>
          <p className="text-sm sm:text-base text-[#5C5752] font-sans-clean leading-relaxed">
            Engineered natively in Swift, Rust, and Kotlin for peak kernel performance.
            Zero third-party telemetry frameworks.
          </p>
        </div>

        {/* Platform Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {platforms.map((p) => {
            const Icon = p.icon;
            const isSelected = selectedPlatform === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPlatform(p.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white border-[#B69A75] shadow-md -translate-y-1"
                    : "bg-white/60 border-[#DED7CB] hover:bg-white hover:border-[#C4B9AA]"
                }`}
              >
                <Icon
                  className={`w-5 h-5 mb-2 ${
                    isSelected ? "text-[#8C7052]" : "text-[#7A7369]"
                  }`}
                />
                <span className="font-cinzel text-sm font-bold text-[#292725] block">
                  {p.name}
                </span>
                <span className="text-[10px] text-[#786E64] block truncate">
                  {p.sub}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Client Card Container */}
        <div className="bg-white rounded-3xl border border-[#DED7CB] p-7 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Platform Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#8C7052] bg-[#FAF4EA] px-2.5 py-1 rounded-full border border-[#E8DEC8]">
                  RELEASE {current.version}
                </span>
                <span className="text-xs text-[#7A7369] font-mono">
                  {current.size}
                </span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#292725]">
                Legion for {current.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#5C5752] leading-relaxed">
                Includes seamless multi-hop routing, automatic system kill switch, and
                custom DNS resolvers anchored directly in our Zurich and Reykjavik
                facilities.
              </p>

              <div className="pt-2 text-xs text-[#786E64] space-y-1">
                <div>
                  <span className="font-semibold text-[#292725]">Requirements:</span>{" "}
                  {current.reqs}
                </div>
                <div>
                  <span className="font-semibold text-[#292725]">Distribution:</span>{" "}
                  Signed &amp; Notarized Binary
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="px-6 py-3 rounded-full bg-[#292725] hover:bg-[#1A1816] text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2.5 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#B69A75]" />
                  <span>Download {current.name} Client</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowChecksum(!showChecksum)}
                  className="px-4 py-3 rounded-full bg-[#F7F3EF] hover:bg-[#EAE4DC] text-[#292725] text-xs font-medium tracking-wide border border-[#DED7CB] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FileCode className="w-4 h-4 text-[#8C7052]" />
                  <span>{showChecksum ? "Hide Hash" : "Verify SHA-256"}</span>
                </button>
              </div>

              {/* Download Feedback State */}
              {downloadSuccess && (
                <div className="p-3 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-[#166534] text-xs flex items-center gap-2 animate-float-slow">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>
                    Initiated download for <strong>{downloadSuccess}</strong>. Verify
                    binary signature before execution.
                  </span>
                </div>
              )}
            </div>

            {/* Right Column: Mobile Provisioning QR Code or Checksum Panel */}
            <div className="lg:col-span-5 bg-[#FAF7F3] rounded-2xl p-6 border border-[#E8E2D8] flex flex-col items-center justify-center text-center">
              {showChecksum ? (
                <div className="w-full text-left space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8C7052] font-semibold block">
                    SHA-256 BINARY SIGNATURE
                  </span>
                  <div className="p-3 bg-white rounded-lg border border-[#DED7CB] font-mono text-[11px] text-[#292725] break-all select-all leading-relaxed">
                    {current.sha256}
                  </div>
                  <p className="text-[11px] text-[#786E64]">
                    Verify in terminal:{" "}
                    <code className="text-[#292725] bg-white px-1.5 py-0.5 rounded">
                      shasum -a 256 {current.filename}
                    </code>
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="w-28 h-28 bg-white p-2 rounded-xl border border-[#DED7CB] shadow-xs mx-auto flex items-center justify-center">
                    <QrCode className="w-24 h-24 text-[#292725]" />
                  </div>
                  <span className="font-cinzel text-xs font-bold text-[#292725] block">
                    Mobile Fast-Pairing Provision
                  </span>
                  <p className="text-[11px] text-[#736B62] max-w-xs mx-auto">
                    Scan with your mobile camera to import anonymous WireGuard
                    credentials directly into your device enclave.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
