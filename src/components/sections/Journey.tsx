"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { journey } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="journey">
       {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
             My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Tracing the path from humble beginnings to engineering intelligent systems.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Neural Line Track */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 transform md:-translate-x-1/2" />
          
          {/* Active Glowing Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 transform md:-translate-x-1/2 origin-top shadow-[0_0_20px_rgba(59,130,246,0.6)]" 
          />

          <div className="space-y-24">
            {journey.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={cn(
        "relative flex items-center md:items-start",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Spacer for desktop layout centering */}
      <div className="hidden md:block w-1/2" />

      {/* Neural Node (Center Point) */}
      <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-10">
         <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-5 h-5 bg-[#0a0a0a] rounded-full border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10"
         >
            <div className="w-full h-full bg-blue-400 rounded-full animate-pulse opacity-50" />
         </motion.div>
      </div>

      {/* Content Card */}
      <div className={cn(
        "w-full md:w-1/2 pl-20 md:pl-0",
        isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
      )}>
        <div className="group relative">
           {/* Connecting Line (Horizontal) */}
           <div className={cn(
             "absolute top-2.5 h-[1px] w-12 bg-blue-500/30 hidden md:block",
             isEven ? "right-[-48px]" : "left-[-48px]"
           )} />

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md overflow-hidden hover:bg-white/10 transition-colors duration-300"
          >
             {/* Glow Effect */}
             <div className={cn(
                "absolute top-0 w-24 h-24 bg-blue-500/20 rounded-full blur-[50px] transition-all duration-500",
                isEven ? "right-0 translate-x-1/2 -translate-y-1/2" : "left-0 -translate-x-1/2 -translate-y-1/2 h-24"
             )} />

             <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-blue-300 border border-blue-500/30 rounded-full bg-blue-500/10">
               {item.year}
             </span>
             
             <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
               {item.title}
             </h3>
             
             <p className="text-purple-300 font-medium tracking-wide mb-4 text-sm uppercase">
               {item.company}
             </p>
             
             <p className="text-gray-400 leading-relaxed text-sm md:text-base text-left">
               {item.description}
             </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
