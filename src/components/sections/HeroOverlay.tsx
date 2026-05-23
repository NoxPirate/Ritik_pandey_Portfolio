"use client";

import { useTransform, motion, MotionValue, useMotionTemplate, useMotionValue } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { SplitText } from "@/components/ui/SplitText";
import { useEffect } from "react";

export default function HeroOverlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Mouse Motion Values for Spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Spotlight Gradient - darker and more subtle
  const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.08), transparent 80%)`;

  // Opacity transforms
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.9, 1], [0, 1, 1, 0]);

  // Parallax Y movement - slightly faster for more depth
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.6], [100, -150]);
  const y3 = useTransform(scrollYProgress, [0.6, 1], [100, -150]);

  return (
    <motion.div 
      className="absolute inset-0 z-10 flex flex-col justify-center text-white overflow-hidden pointer-events-none"
      style={{ background: background }}
    >
        {/* Section 1: Hero Identity */}
        <motion.div 
            style={{ opacity: opacity1, y: y1 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-4 pointer-events-none"
        >
            <div className="text-center z-20 mix-blend-difference w-full max-w-[90vw]">
                <div className="overflow-hidden mb-2">
                  <SplitText className="text-[12vw] sm:text-[10vw] md:text-[8vw] leading-[0.85] font-bold tracking-tighter justify-center select-none">
                    {personalInfo.name.toUpperCase()}
                  </SplitText>
                </div>
                <div className="overflow-hidden flex justify-center w-full">
                    <SplitText className="text-[11px] sm:text-xs md:text-2xl font-light text-gray-400 tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.5em] uppercase justify-center" delay={0.6}>
                        {personalInfo.title}
                    </SplitText>
                </div>
            </div>
        </motion.div>

        {/* Section 2: Statement - Bold & Left Aligned */}
        <motion.div 
            style={{ opacity: opacity2, y: y2 }}
            className="absolute inset-0 flex items-center justify-start p-6 sm:p-12 md:p-32 pointer-events-none"
        >
            <div className="max-w-6xl z-20 mix-blend-difference text-left w-full">
               <SplitText className="text-4xl sm:text-6xl md:text-8xl font-bold leading-none tracking-tighter justify-start">
                 INTELLIGENCE
               </SplitText>
               <SplitText className="text-4xl sm:text-6xl md:text-8xl font-bold leading-none tracking-tighter text-blue-500 justify-start" delay={0.2}>
                    ARCHITECT
               </SplitText>
               <p className="mt-4 md:mt-8 text-sm sm:text-base md:text-xl text-gray-400 max-w-2xl font-light tracking-wide">
                   Constructing the digital nervous systems of tomorrow with scalable code and adaptive AI modules.
               </p>
            </div>
        </motion.div>

        {/* Section 3: Value Prop - Right Aligned with Impact */}
        <motion.div 
            style={{ opacity: opacity3, y: y3 }}
            className="absolute inset-0 flex items-center justify-end p-6 sm:p-12 md:p-24 pointer-events-none"
        >
            <div className="max-w-5xl z-20 mix-blend-difference text-right flex flex-col items-end w-full">
               <div className="flex flex-col items-end w-full">
                   <SplitText className="text-4xl sm:text-6xl md:text-9xl font-bold leading-[0.85] tracking-tighter justify-end">
                      FULL STACK
                   </SplitText>
                   <SplitText className="text-4xl sm:text-6xl md:text-9xl font-bold leading-[0.85] tracking-tighter text-purple-500 justify-end" delay={0.2}>
                      MASTERY
                   </SplitText>
               </div>
               <div className="mt-4 md:mt-6 border-t border-purple-500/50 pt-4 md:pt-6 w-48 sm:w-56 md:w-64">
                    <p className="text-xs sm:text-sm md:text-lg text-gray-300 font-mono">
                        {">"} Systems designed for scale.
                    </p>
                    <p className="text-xs sm:text-sm md:text-lg text-gray-300 font-mono">
                        {">"} UI crafted for impact.
                    </p>
               </div>
            </div>
        </motion.div>

        
        {/* Scroll Indicator */}
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-semibold">Initialize</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-50" />
        </motion.div>
    </motion.div>
  );
}

