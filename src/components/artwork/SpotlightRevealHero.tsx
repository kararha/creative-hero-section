import { useEffect, useRef } from "react";

// Assets: optimized high-speed webp with png fallbacks
export const BG_IMAGE_1 = "/g1.webp";
export const BG_IMAGE_2 = "/g2.webp";

// Constants specified by user
export const SPOTLIGHT_R = 260;
export const GRID_CELL = 48;

export default function SpotlightRevealHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const revealDivRef = useRef<HTMLDivElement | null>(null);
  const gridPatternRef = useRef<SVGPatternElement | null>(null);

  // Mouse tracking refs
  const mouseRef = useRef<{ x: number; y: number }>({
    x: typeof window !== "undefined" ? window.innerWidth * 0.5 : 600,
    y: typeof window !== "undefined" ? window.innerHeight * 0.45 : 400,
  });

  const smoothRef = useRef<{ x: number; y: number }>({
    x: typeof window !== "undefined" ? window.innerWidth * 0.5 : 600,
    y: typeof window !== "undefined" ? window.innerHeight * 0.45 : 400,
  });

  const gridOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    // Resize listener resets canvas width/height to window.innerWidth / window.innerHeight
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Initial render of mask
    const updateMask = (xVal: number, yVal: number) => {
      if (revealDivRef.current) {
        const x = xVal.toFixed(1);
        const y = yVal.toFixed(1);
        const grad = `radial-gradient(${SPOTLIGHT_R}px circle at ${x}px ${y}px, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`;
        revealDivRef.current.style.webkitMaskImage = grad;
        revealDivRef.current.style.maskImage = grad;
      }
    };

    updateMask(smoothRef.current.x, smoothRef.current.y);

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    let isRunning = false;
    let animationFrameId: number | null = null;

    // High-performance requestAnimationFrame loop running only while easing
    const loop = () => {
      const dx = mouseRef.current.x - smoothRef.current.x;
      const dy = mouseRef.current.y - smoothRef.current.y;

      // Eases smooth ref toward mouse with factor 0.1
      smoothRef.current.x += dx * 0.1;
      smoothRef.current.y += dy * 0.1;

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          const cx = (smoothRef.current.x - rect.left) / rect.width - 0.5;
          const cy = (smoothRef.current.y - rect.top) / rect.height - 0.5;

          gridOffsetRef.current.x += (cx * 16 - gridOffsetRef.current.x) * 0.06;
          gridOffsetRef.current.y += (cy * 16 - gridOffsetRef.current.y) * 0.06;

          if (gridPatternRef.current) {
            gridPatternRef.current.setAttribute("x", gridOffsetRef.current.x.toFixed(2));
            gridPatternRef.current.setAttribute("y", gridOffsetRef.current.y.toFixed(2));
          }
        }
      }

      updateMask(smoothRef.current.x, smoothRef.current.y);

      // Continue loop only if still easing
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        animationFrameId = requestAnimationFrame(loop);
      } else {
        isRunning = false;
        animationFrameId = null;
      }
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(loop);
      }
    };

    // Mouse tracking: on mousemove trigger smooth easing loop
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      startLoop();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden select-none"
    >
      {/* Hidden <canvas> sized to window.innerWidth × window.innerHeight */}
      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
        aria-hidden="true"
      />

      {/* Base Layer: BG_IMAGE_1 */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
      />

      {/* Grid background — inline SVG, opacity 0.1, full-cover, absolutely positioned */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10 z-1"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid"
            ref={gridPatternRef}
            width={GRID_CELL}
            height={GRID_CELL}
            patternUnits="userSpaceOnUse"
            x={0}
            y={0}
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#64748b"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Reveal layer (spotlight) — <div> sized 100% 100% whose background is BG_IMAGE_2 */}
      <div
        ref={revealDivRef}
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url(${BG_IMAGE_2})`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Subtle ambient light gradient for optimal text readability */}
      <div
        className="absolute inset-0 pointer-events-none z-2"
        style={{
          background:
            "linear-gradient(to right, rgba(247, 243, 239, 0.4) 0%, rgba(247, 243, 239, 0.1) 40%, rgba(247, 243, 239, 0.0) 100%)",
        }}
      />
    </div>
  );
}
