/**
 * Card B Artwork: Dark Helmet Showcase
 * Luxury product-photography aesthetic with deep charcoal backdrop,
 * bronze-gold Roman helmet close-up, and flowing silver-white silk veils in dramatic chiaroscuro.
 */
export default function DarkHelmetShowcaseVisual({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden select-none pointer-events-none ${className}`}>
      {/* Deep Charcoal Luxury Background */}
      <div className="absolute inset-0 bg-[#1A1816]" />

      {/* Subtle Warm Amber Studio Rim Light */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 75% 25%, rgba(182, 154, 117, 0.35) 0%, rgba(26, 24, 22, 0) 70%)",
        }}
      />

      <svg
        viewBox="0 0 340 460"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="darkGold1" x1="0.1" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="25%" stopColor="#D4B07B" />
            <stop offset="60%" stopColor="#8C7052" />
            <stop offset="90%" stopColor="#4A3B2B" />
            <stop offset="100%" stopColor="#1E1711" />
          </linearGradient>

          <linearGradient id="bronzeRim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFDE9E" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#8C7052" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1C1814" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="silverSilk1" x1="0" y1="0.2" x2="1" y2="0.8">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#D9D5D0" stopOpacity="0.45" />
            <stop offset="85%" stopColor="#7E7972" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1A1816" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="silverSilk2" x1="0.8" y1="0" x2="0.1" y2="1">
            <stop offset="0%" stopColor="#EDEAE5" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#B3ADA3" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1A1816" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Ethereal Silver-White Silk Swirling Behind Helmet */}
        <path
          d="M-40,120 C40,40 180,80 260,30 C320,-10 360,40 380,10 L380,240 C320,290 200,210 120,280 C40,350 -20,290 -40,240 Z"
          fill="url(#silverSilk1)"
        />

        {/* Ornate Bronze-Gold Roman Centurion Helmet in Chiaroscuro */}
        <g transform="translate(170, 230) scale(1.2)">
          {/* Flowing Crest Plume (Silver-White Horsehair) */}
          <path
            d="M20,-140 C-10,-100 -30,-40 -20,30 C-5,10 15,-60 35,-120 C35,-135 25,-145 20,-140 Z"
            fill="#EAE6DF"
            stroke="#9C958C"
            strokeWidth="1"
          />
          {[-25, -15, -5, 5, 15, 25].map((off, idx) => (
            <path
              key={`dark-hair-${idx}`}
              d={`M${off},-110 C${off - 15},-60 ${off - 5},0 ${off + 10},30`}
              stroke={idx % 2 === 0 ? "#FFFFFF" : "#7E7870"}
              strokeWidth="0.9"
              fill="none"
              opacity="0.8"
            />
          ))}

          {/* Plume Crest Mount (Engraved Bronze Spine) */}
          <path
            d="M-10,-50 C-15,-20 10,-20 15,-50 Z"
            fill="url(#darkGold1)"
            stroke="#2E2319"
            strokeWidth="1"
          />

          {/* Helmet Vault Dome with Rich Specular Highlight */}
          <path
            d="M-60,-35 C-60,40 -30,85 0,85 C30,85 60,40 60,-35 C60,-90 30,-100 0,-100 C-30,-100 -60,-90 -60,-35 Z"
            fill="url(#darkGold1)"
            stroke="#261E16"
            strokeWidth="1.5"
          />

          {/* Bright Chiaroscuro Rim Highlight Arc */}
          <path
            d="M-45,-60 C-20,-80 20,-80 45,-60"
            stroke="#FFF2DB"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />

          {/* Lower Brow Ridge & Visor */}
          <path
            d="M-50,0 C-25,-12 25,-12 50,0 C55,25 40,45 0,42 C-40,45 -55,25 -50,0 Z"
            fill="url(#bronzeRim)"
            stroke="#261E16"
            strokeWidth="1.2"
          />

          {/* Deep Shadow Eye Slots */}
          <path d="M-36,12 L-10,12 L-8,28 L-26,28 Z" fill="#0C0A09" />
          <path d="M10,12 L36,12 L26,28 L8,28 Z" fill="#0C0A09" />

          {/* Cheek Plates */}
          <path
            d="M-55,20 C-55,75 -35,110 -5,120 C-20,95 -25,60 -30,20 Z"
            fill="url(#darkGold1)"
            stroke="#1E1711"
            strokeWidth="1.2"
          />
          <path
            d="M55,20 C55,75 35,110 5,120 C20,95 25,60 30,20 Z"
            fill="url(#darkGold1)"
            stroke="#1E1711"
            strokeWidth="1.2"
          />
        </g>

        {/* Foreground Silver Silk Swag Sweeping in Front */}
        <path
          d="M0,320 C100,260 220,380 340,300 L340,460 L0,460 Z"
          fill="url(#silverSilk2)"
        />

        {/* Fine Silver Edge Crest Line */}
        <path
          d="M10,325 C110,265 230,385 340,305"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
