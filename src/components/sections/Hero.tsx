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
        {/* 3D Background (Code-Generated Video) */}
        <Hero3D />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Text Animations */}
        <HeroOverlay scrollYProgress={smoothProgress} />
      </div>
    </section>
  );
}
