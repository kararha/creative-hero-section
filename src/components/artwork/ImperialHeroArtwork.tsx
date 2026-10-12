import { useState, useEffect } from "react";

interface ImperialHeroArtworkProps {
  variant?: "gold" | "marble";
  className?: string;
}

export default function ImperialHeroArtwork({
  variant = "gold",
  className = "",
}: ImperialHeroArtworkProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse offset (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isGold = variant === "gold";

  // Palette definitions based on variant
  const armorGradStart = isGold ? "#FAF1DF" : "#FFFFFF";
  const armorGradMid1 = isGold ? "#D8BD8A" : "#ECE9E5";
  const armorGradMid2 = isGold ? "#B69A75" : "#D5D1CB";
  const armorGradDark = isGold ? "#7D5F39" : "#9C9790";
  const plumeColor = isGold ? "#FAF7F2" : "#F5F3EF";
  const specularColor = isGold ? "#FFFBF0" : "#FFFFFF";

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Background Ivory Ambient Lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF7F3] via-[#F7F3EF] to-[#EDE7DF] opacity-95" />

      {/* Subtle Warm Vignette / Radial Glow */}
      <div
        className="absolute inset-0 mix-blend-multiply opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, rgba(255,255,255,0) 0%, rgba(230, 222, 212, 0.4) 65%, rgba(205, 195, 180, 0.7) 100%)",
        }}
      />

      {/* SVG Canvas for Full-Resolution Imperial Composition */}
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 4}px, 0)`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <defs>
          {/* Armor Gold Linear Gradients */}
          <linearGradient id="armorShine" x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor={armorGradStart} />
            <stop offset="30%" stopColor={armorGradMid1} />
            <stop offset="65%" stopColor={armorGradMid2} />
            <stop offset="95%" stopColor={armorGradDark} />
          </linearGradient>

          <linearGradient id="goldHighlight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={specularColor} stopOpacity="0.9" />
            <stop offset="50%" stopColor={armorGradMid1} stopOpacity="0.5" />
            <stop offset="100%" stopColor={armorGradDark} stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="spearGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={specularColor} />
            <stop offset="40%" stopColor={armorGradMid1} />
            <stop offset="80%" stopColor={armorGradDark} />
          </linearGradient>

          {/* Flowing Silk Translucent Veil Gradients */}
          <linearGradient id="veilGrad1" x1="0" y1="0" x2="1" y2="0.3">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#FAF7F2" stopOpacity="0.75" />
            <stop offset="65%" stopColor="#F5EFE6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#EDE5D8" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="veilGrad2" x1="0" y1="0.2" x2="1" y2="0.6">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#FAF7F4" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#F0E8DC" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0.02" />
          </linearGradient>

          <linearGradient id="veilGrad3" x1="0" y1="0.1" x2="1" y2="0.5">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#F7F2E9" stopOpacity="0.5" />
            <stop offset="85%" stopColor="#EBE1D0" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FAF7F3" stopOpacity="0" />
          </linearGradient>

          {/* Botanical Floral Relief Shadow Filter */}
          <filter id="reliefShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="-2" dy="4" stdDeviation="6" floodColor="#9C8B76" floodOpacity="0.18" />
            <feDropShadow dx="3" dy="-2" stdDeviation="4" floodColor="#FFFFFF" floodOpacity="0.8" />
          </filter>

          {/* Silk Soft Glow Filter */}
          <filter id="silkSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ========================================================= */}
        {/* BACKGROUND SCULPTED WHITE PEONIES & BOTANICAL RELIEFS      */}
        {/* ========================================================= */}
        <g id="botanical-reliefs" filter="url(#reliefShadow)" opacity="0.92">
          {/* Peony Cluster 1 - Upper Left Behind Spear */}
          <g transform="translate(320, 160) scale(1.15)">
            {/* Outermost Petals */}
            <path
              d="M0,0 C-35,-25 -80,-10 -95,25 C-110,60 -75,105 -35,110 C5,115 50,85 60,45 C70,5 35,-25 0,0 Z"
              fill="#FAF7F3"
              stroke="#E8E2D7"
              strokeWidth="1.2"
            />
            <path
              d="M-20,-15 C-60,-45 -110,-20 -115,25 C-120,70 -70,115 -15,110 C40,105 85,60 75,15 C65,-30 20,-15 -20,-15 Z"
              fill="#F7F4EE"
              stroke="#E2DDD2"
              strokeWidth="0.8"
            />
            {/* Inner Concentric Peony Petal Layers */}
            <path
              d="M-15,15 C-40,-5 -75,5 -80,35 C-85,65 -50,90 -20,85 C10,80 40,55 35,25 C30,-5 10,15 -15,15 Z"
              fill="#FCFAF7"
              stroke="#E5DFD4"
              strokeWidth="1"
            />
            <path
              d="M-10,28 C-25,15 -50,22 -55,42 C-60,62 -35,78 -15,75 C5,72 25,55 20,38 C15,21 5,28 -10,28 Z"
              fill="#FFFFFF"
              stroke="#DDD6C8"
              strokeWidth="0.8"
            />
            <circle cx="-15" cy="45" r="9" fill="#F4EFE6" stroke="#D3C9B8" strokeWidth="0.8" />
          </g>

          {/* Peony Cluster 2 - Mid Left Floral Swag */}
          <g transform="translate(240, 520) scale(1.35)">
            <path
              d="M0,0 C-45,-30 -105,-15 -120,30 C-135,75 -90,135 -40,140 C10,145 75,105 85,55 C95,5 45,-30 0,0 Z"
              fill="#FAF6F0"
              stroke="#E5DFD4"
              strokeWidth="1.2"
            />
            <path
              d="M-25,20 C-60,-10 -100,5 -105,45 C-110,85 -65,115 -25,110 C15,105 55,75 50,35 C45,-5 10,20 -25,20 Z"
              fill="#FCFAF6"
              stroke="#DED7C8"
              strokeWidth="1"
            />
            <path
              d="M-20,40 C-45,25 -70,35 -75,60 C-80,85 -45,100 -20,95 C5,90 30,70 25,50 C20,30 5,40 -20,40 Z"
              fill="#FFFFFF"
              stroke="#D6CEBE"
              strokeWidth="0.8"
            />
          </g>

          {/* Botanical Acanthus Foliage & Vines Sweeping Left to Right */}
          <g stroke="#E0D9CB" strokeWidth="1.5" fill="none" opacity="0.85">
            <path d="M120,420 C220,380 340,460 420,390 C480,340 510,240 560,200" />
            <path d="M180,680 C260,620 380,660 480,590 C560,530 620,460 690,420" />
            <path d="M880,180 C1020,130 1180,210 1340,160 C1500,110 1680,240 1840,180" />
            <path d="M960,340 C1100,280 1260,360 1440,310 C1600,260 1740,380 1900,320" />
          </g>

          {/* Peony Cluster 3 - Right Upper Background */}
          <g transform="translate(1380, 220) scale(1.1)" opacity="0.75">
            <path
              d="M0,0 C-35,-25 -80,-10 -95,25 C-110,60 -75,105 -35,110 C5,115 50,85 60,45 C70,5 35,-25 0,0 Z"
              fill="#FAF7F2"
              stroke="#E8E2D6"
              strokeWidth="1"
            />
            <path
              d="M-15,15 C-40,-5 -75,5 -80,35 C-85,65 -50,90 -20,85 C10,80 40,55 35,25 C30,-5 10,15 -15,15 Z"
              fill="#FCFAF7"
              stroke="#DED8C9"
              strokeWidth="0.8"
            />
          </g>
        </g>

        {/* ========================================================= */}
        {/* WARRIOR BODY: PLEATED WHITE TUNIC & LOWER DRAPERY         */}
        {/* ========================================================= */}
        <g id="warrior-lower-tunic" transform="translate(710, 680)">
          {/* Pleated Chiton / Skirt Under Cuirass */}
          <path
            d="M0,60 L240,60 L290,400 L-60,400 Z"
            fill="#F7F4EE"
            stroke="#DFD8CB"
            strokeWidth="1.5"
          />
          {/* Vertical Pleat Shadows */}
          {[-40, -10, 20, 50, 80, 110, 140, 170, 200, 230, 260].map((x, i) => (
            <path
              key={`pleat-${i}`}
              d={`M${x},65 C${x + 5},180 ${x - 5},280 ${x + (i % 2 === 0 ? 10 : -8)},400`}
              stroke={i % 2 === 0 ? "#DDD5C5" : "#EDE7DC"}
              strokeWidth="2.5"
              fill="none"
              opacity="0.8"
            />
          ))}

          {/* Pteruges (Armor Leather/Gold Hanging Straps with Rosettes) */}
          {[-20, 20, 60, 100, 140, 180, 220].map((px, idx) => (
            <g key={`pteruges-${idx}`} transform={`translate(${px}, 60)`}>
              <rect
                x="0"
                y="0"
                width="32"
                height="95"
                rx="4"
                fill="url(#armorShine)"
                stroke={isGold ? "#9E8256" : "#B8B3AB"}
                strokeWidth="1.2"
              />
              <circle
                cx="16"
                cy="78"
                r="7"
                fill="url(#goldHighlight)"
                stroke={isGold ? "#7D5F39" : "#8A857D"}
                strokeWidth="1"
              />
              <path
                d="M8,15 Q16,30 24,15 M8,45 Q16,60 24,45"
                stroke={isGold ? "#8A6D42" : "#9C9790"}
                strokeWidth="1"
                fill="none"
              />
            </g>
          ))}
        </g>

        {/* ========================================================= */}
        {/* WARRIOR TORSO: ANCIENT EMBOSSED GOLD CUIRASS               */}
        {/* ========================================================= */}
        <g id="warrior-cuirass" transform="translate(710, 380)">
          {/* Main Anatomical Muscle Cuirass Base */}
          <path
            d="M30,80 C60,40 180,40 210,80 C240,140 250,260 230,360 C190,390 50,390 10,360 C-10,260 0,140 30,80 Z"
            fill="url(#armorShine)"
            stroke={isGold ? "#8C7052" : "#9C9790"}
            strokeWidth="2"
          />

          {/* Pectoral Muscle Contours & Classical Filigree Relief */}
          {/* Left Pectoral */}
          <path
            d="M50,110 C80,95 110,105 115,145 C118,175 90,195 55,185 C40,160 40,130 50,110 Z"
            fill="url(#goldHighlight)"
            stroke={isGold ? "#85663D" : "#99938B"}
            strokeWidth="1.8"
            opacity="0.9"
          />
          {/* Right Pectoral */}
          <path
            d="M190,110 C160,95 130,105 125,145 C122,175 150,195 185,185 C200,160 200,130 190,110 Z"
            fill="url(#goldHighlight)"
            stroke={isGold ? "#85663D" : "#99938B"}
            strokeWidth="1.8"
            opacity="0.9"
          />

          {/* Ornate Acanthus Chest Medallion & Scrollwork */}
          <g transform="translate(120, 160)">
            <circle cx="0" cy="0" r="14" fill="url(#armorShine)" stroke={isGold ? "#78582F" : "#8A847C"} strokeWidth="1.5" />
            <circle cx="0" cy="0" r="7" fill={specularColor} />
            <path
              d="M-28,10 C-15,3 0,8 15,3 C28,10 18,22 0,18 C-18,22 -28,10 -28,10 Z"
              fill="url(#goldHighlight)"
              stroke={isGold ? "#78582F" : "#8A847C"}
              strokeWidth="1.2"
            />
          </g>

          {/* Abdominal Muscle Arches */}
          <path
            d="M80,210 C105,195 135,195 160,210 C170,250 155,275 120,270 C85,275 70,250 80,210 Z"
            fill="url(#goldHighlight)"
            stroke={isGold ? "#85663D" : "#99938B"}
            strokeWidth="1.6"
            opacity="0.85"
          />
          <path
            d="M85,280 C105,270 135,270 155,280 C165,320 150,345 120,340 C90,345 75,320 85,280 Z"
            fill="url(#goldHighlight)"
            stroke={isGold ? "#85663D" : "#99938B"}
            strokeWidth="1.6"
            opacity="0.85"
          />

          {/* Left Pauldron (Shoulder Armor with Sculpted Lion/Floral Relief) */}
          <g transform="translate(-30, 60)">
            <path
              d="M10,20 C40,-15 90,0 95,45 C100,75 55,95 20,80 C-5,65 -5,40 10,20 Z"
              fill="url(#armorShine)"
              stroke={isGold ? "#7A5C33" : "#8E8880"}
              strokeWidth="2"
            />
            <path
              d="M15,35 C35,10 70,20 75,50 C78,68 45,78 25,68 Z"
              fill="url(#goldHighlight)"
              stroke={isGold ? "#7A5C33" : "#8E8880"}
              strokeWidth="1.2"
            />
          </g>

          {/* Right Pauldron (Shoulder Armor) */}
          <g transform="translate(180, 60)">
            <path
              d="M60,20 C30,-15 -20,0 -25,45 C-30,75 15,95 50,80 C75,65 75,40 60,20 Z"
              fill="url(#armorShine)"
              stroke={isGold ? "#7A5C33" : "#8E8880"}
              strokeWidth="2"
            />
            <path
              d="M55,35 C35,10 0,20 -5,50 C-8,68 25,78 45,68 Z"
              fill="url(#goldHighlight)"
              stroke={isGold ? "#7A5C33" : "#8E8880"}
              strokeWidth="1.2"
            />
          </g>
        </g>

        {/* ========================================================= */}
        {/* WARRIOR HEAD: CORINTHIAN CRESTED HELMET                    */}
        {/* ========================================================= */}
        <g id="warrior-helmet" transform="translate(800, 110)">
          {/* Majestic Horsehair Crest Plumes (Ivory Fan) */}
          <path
            d="M30,-45 C10,-100 -30,-80 -60,-20 C-80,20 -70,80 -60,110 C-50,70 -30,20 10,0 C25,-10 35,-25 30,-45 Z"
            fill={plumeColor}
            stroke="#D8D0C2"
            strokeWidth="1.5"
          />
          {/* Hair Strands in Crest Plume */}
          {[-50, -40, -30, -20, -10, 0, 10, 20].map((offset, i) => (
            <path
              key={`plume-hair-${i}`}
              d={`M${offset},-40 C${offset - 20},0 ${offset - 10},60 ${offset + 5},100`}
              stroke={i % 2 === 0 ? "#EDE6D9" : "#CFC5B4"}
              strokeWidth="1.2"
              fill="none"
            />
          ))}

          {/* Plume Crest Mount / Crest Box (Engraved Gold Channel) */}
          <path
            d="M-5,10 C-15,-30 15,-40 25,5 C10,30 -5,40 -5,10 Z"
            fill="url(#goldHighlight)"
            stroke={isGold ? "#78582F" : "#8A847C"}
            strokeWidth="1.5"
          />

          {/* Helmet Skull Dome (Smooth Corinthian Vault) */}
          <path
            d="M0,60 C-40,60 -65,110 -65,170 C-65,240 -30,280 20,280 C60,280 95,240 95,170 C95,110 50,60 0,60 Z"
            fill="url(#armorShine)"
            stroke={isGold ? "#8A6D42" : "#9C9790"}
            strokeWidth="2"
          />

          {/* Helmet Specular Highlight Arc */}
          <path
            d="M-30,90 C-10,75 30,75 50,90"
            stroke={specularColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
          />

          {/* Eye Slits & Nasal Guard Characteristic of Imperial Corinthian Helm */}
          <path
            d="M-40,180 L-10,180 L-5,225 L-20,225 Z"
            fill="#231F1B"
            stroke={isGold ? "#78582F" : "#8A847C"}
            strokeWidth="1"
          />
          <path
            d="M10,180 L40,180 L20,225 L5,225 Z"
            fill="#231F1B"
            stroke={isGold ? "#78582F" : "#8A847C"}
            strokeWidth="1"
          />
          {/* Nasal Guard */}
          <polygon
            points="-8,165 8,165 4,240 -4,240"
            fill="url(#goldHighlight)"
            stroke={isGold ? "#664923" : "#7A756E"}
            strokeWidth="1.5"
          />

          {/* Cheek Guards (Mandibular Flanges) */}
          <path
            d="M-60,200 C-60,260 -40,300 -10,315 C-25,290 -30,250 -35,200 Z"
            fill="url(#armorShine)"
            stroke={isGold ? "#78582F" : "#8A847C"}
            strokeWidth="1.5"
          />
          <path
            d="M60,200 C60,260 40,300 10,315 C25,290 30,250 35,200 Z"
            fill="url(#armorShine)"
            stroke={isGold ? "#78582F" : "#8A847C"}
            strokeWidth="1.5"
          />
        </g>

        {/* ========================================================= */}
        {/* WARRIOR RIGHT HAND & UPRIGHT IMPERIAL SPEAR (HASTA)       */}
        {/* ========================================================= */}
        <g id="warrior-spear" transform="translate(680, 20)">
          {/* Long Vertical Spear Shaft with Spiraled Grip */}
          <line
            x1="0"
            y1="80"
            x2="0"
            y2="1040"
            stroke="url(#spearGrad)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Spiral Grip Wire */}
          {Array.from({ length: 42 }).map((_, i) => (
            <line
              key={`spear-coil-${i}`}
              x1="-4"
              y1={180 + i * 16}
              x2="4"
              y2={188 + i * 16}
              stroke={specularColor}
              strokeWidth="2.2"
              opacity="0.8"
            />
          ))}

          {/* Golden Spearhead Collar & Ferrule */}
          <rect
            x="-7"
            y="65"
            width="14"
            height="22"
            rx="3"
            fill="url(#goldHighlight)"
            stroke={isGold ? "#7A5C33" : "#8E8880"}
            strokeWidth="1.2"
          />

          {/* Leaf-Shaped Spearhead Blade (Broad Classical Roman Hasta Tip) */}
          <path
            d="M0,-30 C18,15 15,55 0,70 C-15,55 -18,15 0,-30 Z"
            fill="url(#armorShine)"
            stroke={isGold ? "#78582F" : "#8A847C"}
            strokeWidth="1.8"
          />
          {/* Spearhead Central Spine (Raised Midrib) */}
          <line
            x1="0"
            y1="-28"
            x2="0"
            y2="68"
            stroke={specularColor}
            strokeWidth="2"
          />

          {/* Gauntleted Hand Clasping the Spear (Around y=620) */}
          <g transform="translate(0, 620)">
            {/* Forearm Armor Vambrace */}
            <path
              d="M10,-30 L45,-20 L40,40 L5,30 Z"
              fill="url(#armorShine)"
              stroke={isGold ? "#7A5C33" : "#8E8880"}
              strokeWidth="1.5"
            />
            {/* Clenched Fingers Wrapping Around Spear */}
            {[-18, -6, 6, 18].map((fy, i) => (
              <rect
                key={`finger-${i}`}
                x="-14"
                y={fy}
                width="28"
                height="10"
                rx="5"
                fill="url(#goldHighlight)"
                stroke={isGold ? "#6D512B" : "#7E7972"}
                strokeWidth="1.2"
              />
            ))}
          </g>
        </g>

        {/* ========================================================= */}
        {/* TRANSLUCENT SWEEPING WHITE SILK FABRIC (HERO HORIZONTAL)  */}
        {/* Flowing seamlessly across from warrior to right viewport   */}
        {/* ========================================================= */}
        <g id="flowing-silk-veils" className="animate-veil-flow">
          {/* Layer 1 - Deep Background Veil */}
          <path
            d="M870,340 C1080,280 1260,380 1480,260 C1680,150 1820,290 1960,220 L1960,490 C1780,560 1560,420 1340,510 C1120,600 950,460 870,340 Z"
            fill="url(#veilGrad1)"
            opacity="0.65"
          />

          {/* Layer 2 - Midground Volumetric Silk Waves */}
          <path
            d="M840,400 C990,360 1140,470 1320,400 C1500,330 1680,480 1940,360 L1940,620 C1690,690 1480,530 1280,620 C1080,710 930,550 840,400 Z"
            fill="url(#veilGrad2)"
            opacity="0.8"
          />

          {/* Layer 3 - Foreground Luminous Ethereal Mist Veil */}
          <path
            d="M820,480 C1000,430 1180,590 1380,500 C1580,410 1780,560 1960,480 L1960,760 C1740,820 1520,660 1300,750 C1100,840 920,670 820,480 Z"
            fill="url(#veilGrad3)"
            opacity="0.88"
          />

          {/* Fine Silk Edge Crest Highlights */}
          <path
            d="M850,370 C1040,310 1210,430 1420,320 C1620,210 1790,370 1950,290"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M830,440 C1010,390 1170,520 1360,440 C1550,360 1730,510 1940,420"
            stroke="#FFFFFF"
            strokeWidth="3"
            fill="none"
            opacity="0.65"
          />
        </g>
      </svg>
    </div>
  );
}
