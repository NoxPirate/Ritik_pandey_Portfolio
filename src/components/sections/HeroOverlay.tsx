"use client";

import { useTransform, motion, MotionValue } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function HeroOverlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Opacity transforms for 3 sections
  // Section 1: 0 - 0.2 (Fade out after 0.2)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  
  // Section 2: 0.25 - 0.5 (Fade in 0.25, Visible, Fade out 0.55)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  
  // Section 3: 0.6 - 0.8 (Fade in 0.6, Visible, Fade out 0.9)
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.9, 1], [0, 1, 1, 0]);

  // Parallax Y movement
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.6], [50, -100]);
  const y3 = useTransform(scrollYProgress, [0.6, 1], [50, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center text-white mix-blend-difference">
        {/* Section 1: Intro */}
        <motion.div 
            style={{ opacity: opacity1, y: y1 }}
            className="absolute inset-0 flex items-center justify-center p-8"
        >
            <div className="text-center">
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4">{personalInfo.name}</h1>
                <p className="text-xl md:text-3xl font-light text-gray-300 tracking-wide uppercase">{personalInfo.title}</p>
            </div>
        </motion.div>

        {/* Section 2: Statement */}
        <motion.div 
            style={{ opacity: opacity2, y: y2 }}
            className="absolute inset-0 flex items-center justify-start p-8 md:p-32"
        >
            <div className="max-w-4xl">
                <h2 className="text-5xl md:text-7xl font-bold leading-none tracking-tight">
                    Building <span className="text-blue-500">Intelligent</span> <br/>
                    Systems that Scale.
                </h2>
            </div>
        </motion.div>

        {/* Section 3: Expertise */}
        <motion.div 
            style={{ opacity: opacity3, y: y3 }}
            className="absolute inset-0 flex items-center justify-end p-8 md:p-32 text-right"
        >
            <div className="max-w-4xl">
                <h2 className="text-5xl md:text-7xl font-bold leading-none tracking-tight">
                    Expertise in <br/>
                    <span className="text-purple-500">AI</span> & Full-Stack.
                </h2>
            </div>
        </motion.div>
        
        {/* Scroll Indicator (Only visible at start) */}
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <span className="text-xs uppercase tracking-[0.2em] animate-pulse">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
    </div>
  );
}
