import { useState, useRef } from "react";
import { Shield } from "lucide-react";

interface IridescentLiquidGlassCardProps {
  className?: string;
}

export default function IridescentLiquidGlassCard({ className = "" }: IridescentLiquidGlassCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [glare, setGlare] = useState({ x: 50, y: 30, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlare({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-config={JSON.stringify({
        cornerRadius: 30,
        blurAmount: 0.25,
        refraction: 0.35,
        chromAberration: 0.15,
        specular: 0.7,
        edgeHighlight: 0.85,
        fresnel: 0.45,
      })}
      className={`glass glass-card-item relative w-full max-w-[310px] sm:w-[310px] h-[450px] sm:h-[470px] rounded-[30px] overflow-hidden select-none transition-all duration-300 hover:scale-[1.015] ${className}`}
      style={{
        boxShadow:
          "0 32px 64px -16px rgba(41, 39, 37, 0.18), 0 16px 32px -12px rgba(0, 0, 0, 0.1), inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95), inset 0 -1.5px 2px 0 rgba(255, 255, 255, 0.3), inset 0 0 24px 0 rgba(255, 255, 255, 0.25)",
      }}
    >
      {/* 1. Underlying Translucent Base Glass */}
      <div className="absolute inset-0 bg-white/45 backdrop-blur-[24px] saturate-[180%] contrast-[105%]" />

      {/* 2. Full-bleed Iridescent Holographic Caustic Wave & Armor Texture */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 320 480"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            {/* Holographic Iridescent Oil-Slick Multi-Stop Gradient */}
            <linearGradient id="iridOil1" x1="0" y1="0.1" x2="1" y2="0.9">
              <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.9" />
              <stop offset="18%" stopColor="#FFE066" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#4DEEEA" stopOpacity="0.75" />
              <stop offset="52%" stopColor="#9B51E0" stopOpacity="0.65" />
              <stop offset="68%" stopColor="#FF4F9A" stopOpacity="0.7" />
              <stop offset="85%" stopColor="#FFC837" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="armorGoldGlow" x1="0.2" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#D8B57D" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#A68352" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6C4E28" stopOpacity="0.7" />
            </linearGradient>

            <radialGradient id="causticGlow" cx="45%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#FFE27A" stopOpacity="0.6" />
              <stop offset="55%" stopColor="#38E1FF" stopOpacity="0.45" />
              <stop offset="75%" stopColor="#FF66C4" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>

            {/* Micro-Turbulence Filter for Organic Liquid Sheen */}
            <filter id="liquidWave" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.015 0.02" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>

          {/* Background Ambient Soft Marble Base */}
          <rect width="100%" height="100%" fill="#FBF7F0" opacity="0.65" />

          {/* Swirling Iridescent Liquid Glass Caustic Ribbons */}
          <g filter="url(#liquidWave)" opacity="0.75">
            <path
              d="M-40,80 C40,-10 160,70 240,20 C320,-30 360,50 380,10 L380,320 C300,370 180,260 80,340 C-20,400 -30,220 -40,160 Z"
              fill="url(#iridOil1)"
            />
            <path
              d="M-20,180 C80,110 200,230 300,160 C360,110 370,250 380,280 C260,340 140,240 20,320 Z"
              fill="url(#causticGlow)"
              style={{ mixBlendMode: "screen" }}
            />
          </g>

          {/* Stylized Golden Armor Plate Contours Visible Through Liquid Prism */}
          <g transform="translate(185, 140) scale(0.95)" opacity="0.9">
            {/* Cuirass Muscle Relief Arc */}
            <path
              d="M-75,-40 C-40,-70 40,-70 75,-40 C85,20 60,80 0,95 C-60,80 -85,20 -75,-40 Z"
              fill="url(#armorGoldGlow)"
              stroke="#FFF8E7"
              strokeWidth="1.5"
            />
            {/* Pectoral Sculpting */}
            <path
              d="M-60,-15 C-20,-35 0,-10 0,25 C-25,25 -55,10 -60,-15 Z"
              fill="#E0BF89"
              opacity="0.8"
            />
            <path
              d="M60,-15 C20,-35 0,-10 0,25 C25,25 55,10 60,-15 Z"
              fill="#E0BF89"
              opacity="0.8"
            />
            {/* Filigree Volutes */}
            <path
              d="M-40,40 C-20,55 0,55 0,75 C-20,70 -35,60 -40,40 Z"
              fill="#C49B5E"
            />
            <path
              d="M40,40 C20,55 0,55 0,75 C20,70 35,60 40,40 Z"
              fill="#C49B5E"
            />
          </g>

          {/* Prismatic Fluid Chromatic Ribbons Across the Middle */}
          <path
            d="M-20,110 Q140,40 340,150 Q160,240 -20,190 Z"
            fill="url(#iridOil1)"
            opacity="0.65"
            style={{ mixBlendMode: "overlay" }}
          />
          <path
            d="M0,220 C100,160 220,280 340,210 L340,480 L0,480 Z"
            fill="linear-gradient(to top, rgba(251,247,240,0.92) 0%, rgba(251,247,240,0.65) 55%, transparent 100%)"
          />
        </svg>
      </div>

      {/* 3. Smooth Vignette Gradient so Text is Crisp & Readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 35%, rgba(251,247,240,0.65) 60%, rgba(251,247,240,0.92) 100%)",
        }}
      />

      {/* 4. Apple Liquid Glass Outer Rim Highlight */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[30px] border border-white/85"
        style={{
          boxShadow:
            "inset 0 1.5px 2px 0 rgba(255,255,255,0.95), inset 0 -1.5px 2px 0 rgba(255,255,255,0.3)",
        }}
      />

      {/* 5. Dynamic Specular Light Glare (Follows Cursor) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 45%, transparent 75%)`,
        }}
      />

      {/* 6. Card Content Overlaid Perfectly as in Screenshot */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 sm:p-6">
        {/* Top Left Rounded Badge with Dark Shield Icon */}
        <div className="flex items-center justify-start">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E8DDD0]/90 border border-white/90 flex items-center justify-center shadow-xs backdrop-blur-xs">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1C1A18] fill-[#1C1A18]" />
          </div>
        </div>

        {/* Bottom Headline & Supporting Copy */}
        <div className="space-y-2 pb-1">
          {/* Card Headline in Exact Editorial Roman Style */}
          <h2 className="font-cinzel text-lg sm:text-xl font-bold text-[#1C1A18] tracking-tight leading-[1.18]">
            PROTECT THE WEB
            <span className="block text-[#38332E] font-semibold text-sm sm:text-base">
              — UNBREAKABLE,
            </span>
            <span className="block text-xs sm:text-sm font-medium text-[#4A4540]">
              INVISIBLE, ABSOLUTE
            </span>
          </h2>

          {/* Exact Supporting Text */}
          <p className="text-[11px] sm:text-xs leading-relaxed text-[#5A544D] font-sans-clean font-normal max-w-[270px]">
            Encrypt your traffic, hide your IP, and bypass any restrictions. Full
            online anonymity — no logs, no limits, no compromises.
          </p>
        </div>
      </div>
    </div>
  );
}
