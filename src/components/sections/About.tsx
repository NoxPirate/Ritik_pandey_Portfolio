"use client";

import { motion } from "framer-motion";
import { personalInfo, skills } from "@/lib/data";
import { cn } from "@/lib/utils";

// --- Components ---

const BentoCard = ({ 
  children, 
  className, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, margin: "-100px" }}
    className={cn(
      "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10",
      className
    )}
  >
    {/* Hover Glow Effect */}
    <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
    </div>
    
    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </motion.div>
);

const TechBadge = ({ name }: { name: string }) => (
  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:border-blue-400 hover:bg-blue-950/20 transition-all">
    {name}
  </span>
);

// --- Main Section ---

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-black text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="mb-16"
        >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              <span className="text-blue-500">01.</span> THE ARCHITECT
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* 1. Main Bio (Large) */}
          <BentoCard className="md:col-span-2 md:row-span-2 p-8" delay={0.1}>
            <div className="flex flex-col justify-between h-full">
                <div>
                     <h3 className="text-xl text-blue-400 font-mono mb-6 uppercase tracking-wider">/ MISSION_LOG</h3>
                     <p className="text-2xl md:text-3xl font-normal leading-relaxed text-zinc-100">
                        {personalInfo.about.p1}
                     </p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                     <p className="text-lg text-zinc-300 leading-relaxed">
                       {personalInfo.about.p2}
                     </p>
                </div>
            </div>
          </BentoCard>

          {/* 2. Stats - Experience */}
          <BentoCard className="md:col-span-1 p-8 flex items-center justify-center text-center" delay={0.2}>
             <div>
                <h4 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-indigo-600">
                    1+
                </h4>
                <p className="text-sm font-mono text-blue-300 mt-2 tracking-widest uppercase font-semibold">Years Exp</p>
             </div>
          </BentoCard>

          {/* 3. Stats - Projects */}
          <BentoCard className="md:col-span-1 p-8 flex items-center justify-center text-center" delay={0.3}>
             <div>
                <h4 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-pink-600">
                    10+
                </h4>
                <p className="text-sm font-mono text-purple-300 mt-2 tracking-widest uppercase font-semibold">Systems Built</p>
             </div>
          </BentoCard>

          {/* 4. Tech Stack */}
          <BentoCard className="md:col-span-2 p-8" delay={0.4}>
              <h3 className="text-xl text-purple-400 font-mono mb-6 uppercase tracking-wider">/ ACTIVE_MODULES</h3>
              <div className="space-y-6">
                 {skills.map((cat, idx) => (
                    <div key={idx} className="space-y-2">
                       <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold font-mono">{cat.category}</h4>
                       <div className="flex flex-wrap gap-2">
                          {cat.items.map(tech => (
                              <TechBadge key={tech} name={tech} />
                          ))}
                       </div>
                    </div>
                 ))}
              </div>
          </BentoCard>

          {/* 5. Philosophy / Quote */}
          <BentoCard className="md:col-span-2 p-8" delay={0.5}>
              <div className="flex flex-col md:flex-row items-center gap-8 h-full">
                 <div className="md:w-1/3">
                    <h3 className="text-xl text-blue-400 font-mono uppercase tracking-wider">/ CORE_PHILOSOPHY</h3>
                 </div>
                 <div className="md:w-2/3 border-l-2 border-blue-500 pl-6">
                    <blockquote className="text-xl italic text-zinc-100 font-medium">
                       &quot;Code is not just functionality; it&apos;s the architecture of intelligence.&quot;
                    </blockquote>
                 </div>
              </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
