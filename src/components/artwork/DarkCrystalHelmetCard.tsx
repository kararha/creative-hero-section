import { useState, useRef } from "react";

interface DarkCrystalHelmetCardProps {
  className?: string;
}

export default function DarkCrystalHelmetCard({ className = "" }: DarkCrystalHelmetCardProps) {
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
        cornerRadius: 28,
        blurAmount: 0.28,
        refraction: 0.38,
        chromAberration: 0.1,
        specular: 0.75,
        edgeHighlight: 0.8,
        fresnel: 0.5,
      })}
      className={`glass glass-card-item relative w-full max-w-[240px] sm:w-[250px] h-[340px] sm:h-[360px] rounded-[28px] overflow-hidden select-none transition-all duration-300 hover:scale-[1.02] ${className}`}
      style={{
        boxShadow:
          "0 36px 72px -16px rgba(0, 0, 0, 0.65), 0 16px 32px -12px rgba(0, 0, 0, 0.45), inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.22), inset 0 -1.5px 2px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px 0 rgba(182, 154, 117, 0.12)",
      }}
    >
      {/* 1. Deep Charcoal/Obsidian Studio Backdrop */}
      <div className="absolute inset-0 bg-[#14161B]" />

      {/* 2. Soft Ambient Vignette & Warm Rim Light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(182, 154, 117, 0.22) 0%, rgba(20, 22, 27, 0) 65%)",
        }}
      />

      {/* 3. The Corinthian Bronze Helmet with Swirling Crystal Water Splash Ribbons */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 260 360"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full"
        >
          <defs>
            {/* Bronze Gold Helmet Metallic Shading */}
            <linearGradient id="bronzeHelmGlow" x1="0.1" y1="0" x2="0.9" y2="1">
              <stop offset="0%" stopColor="#FFF2D6" />
              <stop offset="22%" stopColor="#DFB97D" />
              <stop offset="55%" stopColor="#9C7748" />
              <stop offset="85%" stopColor="#543E23" />
              <stop offset="100%" stopColor="#251A0E" />
            </linearGradient>

            <linearGradient id="helmHighlight" x1="0" y1="0" x2="1" y2="0.8">
              <stop offset="0%" stopColor="#FFFBF0" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#E6C995" stopOpacity="0.7" />
              <stop offset="80%" stopColor="#8C693E" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#22180F" stopOpacity="0" />
            </linearGradient>

            {/* Crystal Liquid Water Ribbons Multi-Stop Shader */}
            <linearGradient id="crystalWater1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="25%" stopColor="#D2EFFF" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#FFE6D0" stopOpacity="0.5" />
              <stop offset="75%" stopColor="#9DE4FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="crystalWaterGlow" x1="0.2" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#EBF8FF" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D4EEFF" stopOpacity="0.4" />
            </linearGradient>

            {/* Specular White Crest */}
            <linearGradient id="crestHorsehair" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#EAE5DC" />
              <stop offset="100%" stopColor="#968F83" />
            </linearGradient>

            <filter id="liquidGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* BACKGROUND SWIRLING WATER RIBBON (Behind Helmet) */}
          <path
            d="M30,260 C10,210 20,150 50,110 C90,60 160,80 200,50 C230,30 240,60 250,90 C220,120 180,100 130,130 C80,160 50,210 70,270 Z"
            fill="url(#crystalWater1)"
            opacity="0.45"
          />

          {/* MAIN CORINTHIAN HELMET CENTERED */}
          <g transform="translate(130, 185) scale(1.15)">
            {/* White Horsehair Crest Plume (Standing Tall) */}
            <path
              d="M10,-125 C-15,-95 -25,-40 -15,15 C-5,5 10,-45 25,-95 C25,-110 20,-120 10,-125 Z"
              fill="url(#crestHorsehair)"
              stroke="#B3AAA0"
              strokeWidth="0.8"
            />
            {/* Fine plume hair texture fibers */}
            {[-18, -10, -2, 6, 14].map((off, i) => (
              <path
                key={`hair-${i}`}
                d={`M${off},-105 C${off - 8},-65 ${off - 2},-15 ${off + 8},10`}
                stroke={i % 2 === 0 ? "#FFFFFF" : "#7A7368"}
                strokeWidth="0.75"
                fill="none"
                opacity="0.7"
              />
            ))}

            {/* Plume Crest Bronze Mount Spine */}
            <path
              d="M-8,-45 C-12,-20 8,-20 12,-45 Z"
              fill="url(#bronzeHelmGlow)"
              stroke="#2C1F12"
              strokeWidth="0.9"
            />

            {/* Helmet Vault Dome */}
            <path
              d="M-48,-28 C-48,35 -24,70 0,70 C24,70 48,35 48,-28 C48,-70 24,-80 0,-80 C-24,-80 -48,-70 -48,-28 Z"
              fill="url(#bronzeHelmGlow)"
              stroke="#1F150B"
              strokeWidth="1.2"
            />

            {/* Specular Curvature Highlight */}
            <path
              d="M-36,-45 C-16,-62 16,-62 36,-45"
              stroke="#FFF8EA"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />

            {/* Brow Line / Forehead Arch */}
            <path
              d="M-40,2 C-20,-8 20,-8 40,2 C44,18 30,35 0,32 C-30,35 -44,18 -40,2 Z"
              fill="url(#bronzeHelmGlow)"
              stroke="#382614"
              strokeWidth="1"
            />

            {/* Triangular Eye Apertures */}
            <polygon points="-28,12 -8,12 -6,25 -20,25" fill="#0C0D10" />
            <polygon points="8,12 28,12 20,25 6,25" fill="#0C0D10" />

            {/* Nasal Guard */}
            <polygon points="-5,12 5,12 3,46 -3,46" fill="url(#bronzeHelmGlow)" stroke="#1F150B" strokeWidth="0.8" />

            {/* Flared Cheek Guards */}
            <path
              d="M-44,18 C-42,42 -30,68 -10,72 C-15,55 -22,35 -25,18 Z"
              fill="url(#helmHighlight)"
              stroke="#2C1F12"
              strokeWidth="0.9"
            />
            <path
              d="M44,18 C42,42 30,68 10,72 C15,55 22,35 25,18 Z"
              fill="url(#bronzeHelmGlow)"
              stroke="#2C1F12"
              strokeWidth="0.9"
            />
          </g>

          {/* FOREGROUND SWIRLING CRYSTAL WATER SPLASH RIBBON (Enveloping Helmet) */}
          <g filter="url(#liquidGlowFilter)">
            <path
              d="M15,280 C40,230 70,250 110,285 C160,320 220,300 245,260 C265,220 250,180 230,195 C200,215 190,260 140,240 C90,220 70,180 40,220 C20,250 10,265 15,280 Z"
              fill="url(#crystalWaterGlow)"
              opacity="0.85"
            />
            {/* Refraction highlight edge */}
            <path
              d="M25,270 C55,235 85,255 125,290 C175,325 230,300 245,255"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.95"
            />
          </g>

          {/* Crystal Water Beads & Splashes Floating in 3D Space */}
          <circle cx="50" cy="235" r="4" fill="#FFFFFF" opacity="0.9" />
          <circle cx="70" cy="210" r="3" fill="#D8F2FF" opacity="0.8" />
          <circle cx="195" cy="225" r="4.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="215" cy="200" r="3.5" fill="#E6F6FF" opacity="0.85" />
          <circle cx="235" cy="250" r="5" fill="#FFFFFF" opacity="0.95" />
          <circle cx="240" cy="180" r="2.5" fill="#CCE8F8" opacity="0.75" />
          <circle cx="120" cy="305" r="3.5" fill="#FFFFFF" opacity="0.8" />
        </svg>
      </div>

      {/* 4. Glass Rim Highlight & Inner Bevel */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[28px] border border-white/15"
        style={{
          boxShadow:
            "inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.25), inset 0 -1.5px 2px 0 rgba(255, 255, 255, 0.05)",
        }}
      />

      {/* 5. Dynamic Specular Light Glare (Follows Cursor) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle 240px at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.22) 0%, rgba(182,154,117,0.08) 45%, transparent 75%)`,
        }}
      />
    </div>
  );
}
