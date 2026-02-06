"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <div className="group relative h-[70vh] w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 overflow-hidden rounded-[2rem] bg-neutral-900 border border-white/10">
      {/* Image with Parallax-like scale on hover */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
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
                {project.tech.slice(0, 3).map((t: string) => (
                    <span key={t} className="px-3 py-1 text-xs uppercase tracking-wider text-white/80 border border-white/20 rounded-full bg-black/40 backdrop-blur-md">
                        {t}
                    </span>
                ))}
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {project.title}
            </h3>
            <p className="text-gray-300 text-lg line-clamp-2 max-w-lg mb-6">
                {project.description}
            </p>
            
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-blue-400 font-medium group/btn"
            >
                View Case Study <ArrowUpRight size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </motion.button>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal translation
  // Moves from 1% (start) to -95% (end of list) as we scroll down the targetRef height
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[400vh] bg-black">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute top-10 left-10 md:left-20 z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                SELECTED <span className="text-neutral-500">WORKS</span>
            </h2>
            <div className="h-1 w-24 bg-blue-500 mt-4" />
        </div>

        {/* Horizontal Container */}
        <motion.div style={{ x }} className="flex gap-8 md:gap-16 pl-[5vw] md:pl-[20vw] pr-[20vw]">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </motion.div>
        
        {/* Scroll Progress Indicator (Bottom) */}
        <div className="absolute bottom-10 left-10 right-10 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
                style={{ scaleX: scrollYProgress, transformOrigin: "0%" }} 
                className="h-full bg-blue-500" 
            />
        </div>

      </div>
    </section>
  );
}
