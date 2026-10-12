import { useEffect, useRef } from "react";
import { LiquidGlass, type GlassConfig } from "@ybouane/liquidglass";

interface UseLiquidGlassOptions {
  rootSelector: string;
  glassSelector: string;
  defaults?: Partial<GlassConfig>;
  enabled?: boolean;
}

export function useLiquidGlass({
  rootSelector,
  glassSelector,
  defaults,
  enabled = true,
}: UseLiquidGlassOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instanceRef = useRef<any>(null);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    let isMounted = true;

    const init = async () => {
      try {
        const root = document.querySelector(rootSelector) as HTMLElement | null;
        if (!root) return;

        const glassElements = root.querySelectorAll(glassSelector);
        if (glassElements.length === 0) return;

        // Ensure all glass elements are direct children of root (required by LiquidGlass)
        const directGlassElements = Array.from(glassElements).filter(
          (el) => el.parentElement === root
        ) as HTMLElement[];

        if (directGlassElements.length === 0) return;

        const instance = await LiquidGlass.init({
          root,
          glassElements: directGlassElements,
          defaults: {
            refraction: 0.35,
            chromAberration: 0.12,
            blurAmount: 0.25,
            edgeHighlight: 0.8,
            specular: 0.65,
            fresnel: 0.45,
            ...defaults,
          },
        });

        if (isMounted) {
          instanceRef.current = instance;
        } else {
          instance.destroy();
        }
      } catch (err) {
        console.warn("LiquidGlass WebGL init notice:", err);
      }
    };

    // Small delay ensuring full DOM paint & layout readiness
    const timer = setTimeout(init, 180);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      if (instanceRef.current) {
        try {
          instanceRef.current.destroy();
        } catch {
          // ignore cleanup errors
        }
        instanceRef.current = null;
      }
    };
  }, [rootSelector, glassSelector, enabled, JSON.stringify(defaults)]);

  return instanceRef;
}
