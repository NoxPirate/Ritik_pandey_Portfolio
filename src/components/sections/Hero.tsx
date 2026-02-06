"use client";

import HeroOverlay from "@/components/sections/HeroOverlay";
import dynamic from "next/dynamic";
import { useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

// Dynamically import 3D component to avoid SSR issues with Canvas
const Hero3D = dynamic(() => import("@/components/sections/Hero3D"), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll value for smoother text transitions
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });

  return (
    <section ref={containerRef} id="hero" className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* 3D Background (Neural Particles) */}
        <Hero3D scrollYProgress={smoothProgress} />
        
        {/* Cinematic Noise Overlay (grain effect) */}
        <div className="absolute inset-0 z-[5] opacity-20 pointer-events-none mix-blend-overlay"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        
        {/* Gradient Overlay for text readability (Vignette) */}
        <div className="absolute inset-0 z-[5] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

        {/* Text Animations */}
        <HeroOverlay scrollYProgress={smoothProgress} />
      </div>
    </section>
  );
}
