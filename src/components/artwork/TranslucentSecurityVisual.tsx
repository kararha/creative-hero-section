/**
 * Card A Artwork: Ornate Antique Gold Roman Helmet with Prismatic Holographic Sheen
 * Features subtle chromatic aberration, frosted glass lighting, and delicate gold filigree.
 */
export default function TranslucentSecurityVisual({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden select-none pointer-events-none ${className}`}>
      {/* Background Soft Ivory Canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FCFAF7] via-[#F4EDE2] to-[#E9DFCF]" />

      <svg
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="cardAGold1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF9EB" />
            <stop offset="35%" stopColor="#DFC393" />
            <stop offset="70%" stopColor="#B69A75" />
            <stop offset="100%" stopColor="#7E603A" />
          </linearGradient>

          <linearGradient id="cardASilk" x1="0" y1="0" x2="1" y2="0.6">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#F9F5EE" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#EDE3D2" stopOpacity="0.05" />
          </linearGradient>

          {/* Prismatic Chromatic Filter */}
          <linearGradient id="prismaticGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E0D2FF" stopOpacity="0.4" />
            <stop offset="30%" stopColor="#FFF2D6" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#CDEEFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFDDEB" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Soft Background Silk Veil Wave */}
        <path
          d="M0,180 C80,120 180,220 280,140 C340,90 380,130 400,100 L400,320 L0,320 Z"
          fill="url(#cardASilk)"
        />

        {/* Ornate Gold Corinthian Centurion Helmet Close-Up */}
        <g transform="translate(200, 160) scale(1.15)">
          {/* Plume Crest */}
          <path
            d="M-30,-110 C-50,-70 -35,-20 -20,20 C5,0 10,-50 -5,-100 C-15,-115 -25,-120 -30,-110 Z"
            fill="#FAF6EE"
            stroke="#D5CDBC"
            strokeWidth="1.2"
          />

          {/* Plume Holder Gold Channel */}
          <rect
            x="-16"
            y="-40"
            width="32"
            height="18"
            rx="4"
            fill="url(#cardAGold1)"
            stroke="#8A6D42"
            strokeWidth="1"
          />

          {/* Helmet Vault Dome */}
          <path
            d="M-55,-25 C-55,45 -25,85 0,85 C25,85 55,45 55,-25 C55,-75 25,-85 0,-85 C-25,-85 -55,-75 -55,-25 Z"
            fill="url(#cardAGold1)"
            stroke="#7E603A"
            strokeWidth="1.5"
          />

          {/* Helmet Specular Highlight Sweep */}
          <path
            d="M-35,-45 C-15,-60 15,-60 35,-45"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />

          {/* Frontal Visor / Brow Arch */}
          <path
            d="M-45,5 C-20,-8 20,-8 45,5 C50,25 35,45 0,42 C-35,45 -50,25 -45,5 Z"
            fill="url(#cardAGold1)"
            stroke="#6F532E"
            strokeWidth="1.2"
          />

          {/* Eye Apertures */}
          <path d="M-32,15 L-8,15 L-6,30 L-22,30 Z" fill="#292725" />
          <path d="M8,15 L32,15 L22,30 L6,30 Z" fill="#292725" />

          {/* Roman Laurel Filigree Embossing */}
          <path
            d="M-40,-15 C-25,-25 0,-15 15,-30"
            stroke="#FFF4DB"
            strokeWidth="1.2"
            fill="none"
            opacity="0.9"
          />
        </g>

        {/* Prismatic Sheen Overlay in Corner */}
        <polygon
          points="0,0 240,0 0,220"
          fill="url(#prismaticGlow)"
          style={{ mixBlendMode: "color-dodge" }}
        />
      </svg>

      {/* Holographic Refraction Drift Effect */}
      <div className="absolute inset-0 iridescent-sheen animate-iridescent" />
    </div>
  );
}
