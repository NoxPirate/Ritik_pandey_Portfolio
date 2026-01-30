"use client";

import { useScroll, useSpring, useMotionValueEvent, motion, MotionValue } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollyVideoProps {
  src: string;
  children?: (progress: MotionValue<number>) => ReactNode;
}

export default function ScrollyVideo({ src, children }: ScrollyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll value
  const springScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });

  // Update video time based on scroll
  useMotionValueEvent(springScroll, "change", (latest) => {
    if (videoRef.current && videoRef.current.duration) {
       // Check if duration is valid (readyState > 0)
       if (videoRef.current.readyState > 0) {
          // Clamp functionality to avoid seeking beyond bounds
          const time = Math.max(0, Math.min(latest * videoRef.current.duration, videoRef.current.duration));
          videoRef.current.currentTime = time;
       }
    }
  });

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={src}
          className="h-full w-full object-cover opacity-60"
          muted
          playsInline
          preload="auto"
        />
        {/* Render children (Overlay) passing the springScroll value */}
        {children && children(springScroll)}
        
        {/* Decorative Grid Overlay on Video */}
        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
