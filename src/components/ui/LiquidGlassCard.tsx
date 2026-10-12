import { useState, useRef, ReactNode } from "react";

interface LiquidGlassCardProps {
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
  tiltEffect?: boolean;
}

export default function LiquidGlassCard({
  children,
  variant = "light",
  className = "",
  tiltEffect = true,
}: LiquidGlassCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 30, opacity: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const isLight = variant === "light";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setGlarePos({ x, y, opacity: 1 });

    if (tiltEffect) {
      // Subtle tilt: max 4.5 degrees
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({
        rx: -ny * 7,
        ry: nx * 7,
      });
    }
  };

  const handleMouseLeave = () => {
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl transition-transform duration-300 ease-out will-change-transform ${
        isLight ? "apple-liquid-glass" : "apple-liquid-glass-dark"
      } ${className}`}
      style={{
        transform: tiltEffect
          ? `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
          : undefined,
      }}
    >
      {/* Dynamic Specular Liquid Glare Layer (Reacts to cursor light angle) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: glarePos.opacity,
          background: isLight
            ? `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.12) 45%, transparent 75%)`
            : `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 240, 215, 0.28) 0%, rgba(182, 154, 117, 0.10) 50%, transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Subsurface Liquid Optical Caustic Sheen */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay z-0"
        style={{
          background: isLight
            ? "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(240,230,220,0.2) 50%, rgba(210,230,250,0.3) 100%)"
            : "linear-gradient(135deg, rgba(182,154,117,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(140,112,82,0.15) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Glass Top Bevel Rim Accent (Apple Liquid Glass signature specular edge) */}
      <div
        className="absolute inset-x-0 top-0 h-[1.5px] pointer-events-none z-20"
        style={{
          background: isLight
            ? "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.95) 70%, rgba(255,255,255,0.2) 100%)"
            : "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,240,215,0.55) 35%, rgba(255,240,215,0.55) 65%, rgba(255,255,255,0.05) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Glass Corner Caustic Refraction Points */}
      <div
        className="absolute top-0 right-0 w-24 h-24 pointer-events-none z-10"
        style={{
          background: isLight
            ? "radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)"
            : "radial-gradient(circle at 100% 0%, rgba(255, 240, 215, 0.2) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Actual Card Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
