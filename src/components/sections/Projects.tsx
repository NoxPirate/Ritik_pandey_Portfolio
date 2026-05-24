"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { projects } from "@/lib/data";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <div className="group relative h-[70vh] w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 overflow-hidden rounded-[2rem] bg-neutral-950 border border-white/10 shadow-2xl">
      {/* Image with Parallax-like scale on hover */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 45vw"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
        <div className="flex justify-between items-start">
            <span className="text-6xl md:text-8xl font-bold text-white/10 select-none">
                0{index + 1}
            </span>
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                 <a 
                    href={project.links.github}
                    target="_blank"
                    className="p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
                 >
                    <Github size={20} />
                 </a>
                 <a 
                    href={project.links.demo}
                    target="_blank"
                    className="p-3 rounded-full bg-white text-black hover:bg-blue-500 hover:text-white transition-colors"
                 >
                    <ExternalLink size={20} />
                 </a>
            </div>
        </div>

        <div>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t: string) => (
                    <span key={t} className="px-3 py-1 text-xs uppercase tracking-wider text-blue-300 border border-blue-500/20 rounded-full bg-blue-950/40 backdrop-blur-md font-mono">
                        {t}
                    </span>
                ))}
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {project.title}
            </h3>
            <p className="text-zinc-200 text-sm md:text-base line-clamp-5 max-w-xl mb-6 leading-relaxed">
                {project.description}
            </p>
            
            <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 font-medium group/btn hover:text-blue-300 transition-colors"
            >
                View Case Study <ArrowUpRight size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsMobile = () => {
  return (
    <div className="w-full py-24 px-4 relative bg-black">
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mb-16 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white tracking-tighter mb-4"
        >
          SELECTED <span className="text-neutral-500">WORKS</span>
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-1 w-20 bg-blue-500 mx-auto" 
        />
      </div>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full relative z-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative h-[60vh] sm:h-[65vh] w-full overflow-hidden rounded-[2rem] bg-neutral-950 border border-white/10 shadow-2xl"
          >
            {/* Image with Parallax-like scale on hover */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10">
              <div className="flex justify-between items-start">
                  <span className="text-5xl sm:text-7xl font-bold text-white/10 select-none">
                      0{i + 1}
                  </span>
                  <div className="flex gap-3">
                       <a 
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
                       >
                          <Github size={18} />
                       </a>
                       <a 
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full bg-white text-black hover:bg-blue-500 hover:text-white transition-colors"
                       >
                          <ExternalLink size={18} />
                       </a>
                  </div>
              </div>

              <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map((t: string) => (
                          <span key={t} className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-blue-300 border border-blue-500/20 rounded-full bg-blue-950/40 backdrop-blur-md font-mono">
                              {t}
                          </span>
                      ))}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm line-clamp-3 sm:line-clamp-4 max-w-xl mb-4 leading-relaxed">
                      {project.description}
                  </p>
                  
                  <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium group/btn hover:text-blue-300 transition-colors"
                  >
                      View Case Study <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile || !mounted) return;

    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        if (!section || !container) return;

        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;

        // How far we've scrolled INTO this section
        // rect.top starts positive (below viewport), goes to 0 (at top), goes negative (scrolled past)
        // When sticky is active: rect.top <= 0 and rect.bottom >= viewportHeight
        const scrollDistance = sectionHeight - viewportHeight; // total scrollable distance within section
        const scrolled = -rect.top; // how many px we've scrolled past the section top

        // Clamp progress between 0 and 1
        const rawProgress = scrolled / scrollDistance;
        const clampedProgress = Math.max(0, Math.min(1, rawProgress));

        // Calculate the horizontal distance to translate
        const containerWidth = container.scrollWidth;
        const viewportWidth = window.innerWidth;
        const maxTranslate = containerWidth - viewportWidth;

        setTranslateX(-clampedProgress * maxTranslate);
        setProgress(clampedProgress);
      });
    };

    // Run once after paint settles
    const timer = setTimeout(() => {
      handleScroll();
    }, 200);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobile, mounted]);

  if (!mounted) {
    return (
      <section className="relative bg-black min-h-screen" id="projects" />
    );
  }

  if (isMobile) {
    return (
      <section id="projects">
        <ProjectsMobile />
      </section>
    );
  }

  return (
    <section id="projects" ref={sectionRef} className="relative bg-black" style={{ height: `${(projects.length + 1) * 100}vh` }}>
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute top-10 left-10 md:left-20 z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                SELECTED <span className="text-neutral-500">WORKS</span>
            </h2>
            <div className="h-1 w-24 bg-blue-500 mt-4" />
        </div>

        {/* Horizontal Container - using direct style transform instead of Framer Motion */}
        <div 
          ref={containerRef} 
          className="flex gap-8 md:gap-16 pl-[5vw] md:pl-[20vw] pr-[20vw]"
          style={{ 
            transform: `translate3d(${translateX}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
        
        {/* Scroll Progress Indicator (Bottom) */}
        <div className="absolute bottom-10 left-10 right-10 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
                style={{ 
                  transform: `scaleX(${progress})`, 
                  transformOrigin: "0%",
                }} 
                className="h-full bg-blue-500 transition-none" 
            />
        </div>

      </div>
    </section>
  );
}
