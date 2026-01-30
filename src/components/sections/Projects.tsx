"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/data";
import { X, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const INITIAL_VISIBLE_COUNT = 6;

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Map user data to the rich structure required by the complex grid
  // We enrich the 'data.ts' projects with visual properties here or in data.ts.
  // For now, I'll map them dynamically and add visual props.
  const richProjects = projects.map((p, i) => ({
    ...p,
    id: `proj-${i}`,
    // Alternating spans for bento feel
    span: i === 0 || i === 3 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1",
    color: i % 2 === 0 ? "from-blue-600/20 to-cyan-500/20" : "from-purple-600/20 to-pink-500/20",
    hoverColor: i % 2 === 0 ? "group-hover:from-blue-600/40 group-hover:to-cyan-500/40" : "group-hover:from-purple-600/40 group-hover:to-pink-500/40",
  }));
  
  const selectedProject = richProjects.find((p) => p.id === selectedId);
  const visibleProjects = richProjects.slice(0, visibleCount);

  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="projects">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
             A curated selection of projects demonstrating full-stack capabilities, 
             AI integration, and modern interface design.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]"
        >
            <AnimatePresence mode="popLayout">
                {visibleProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        layoutId={project.id}
                        onClick={() => setSelectedId(project.id)}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className={cn(
                            "group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-md",
                            project.span
                        )}
                        whileHover={{ scale: 1.015 }}
                    >
                        {/* Image Background */}
                        <img 
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} ${project.hoverColor} transition-all duration-500 opacity-60 group-hover:opacity-80 mix-blend-overlay`} />
                        
                        {/* Darkener */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                        {/* Noise */}
                        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                 <span className="inline-block px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-blue-300 backdrop-blur-md">
                                    Project
                                 </span>
                                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink className="text-white w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                 </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:translate-x-1 transition-transform drop-shadow-lg">{project.title}</h3>
                                <p className="text-gray-200 text-sm line-clamp-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    {project.tech.slice(0, 3).map(t => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* Enhanced Modal */}
        <AnimatePresence>
            {selectedId && selectedProject && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[60]"
                    />
                    <div className="fixed inset-0 flex items-center justify-center z-[70] pointer-events-auto p-4 md:p-8">
                        <motion.div
                           layoutId={selectedId}
                           className="bg-[#121212] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-white/10 shadow-2xl relative scrollbar-hide flex flex-col md:flex-row"
                        >
                           <button 
                                onClick={() => setSelectedId(null)}
                                className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
                            >
                                <X size={20} />
                           </button>

                            { /* Visual Side */ }
                            <div className="w-full md:w-2/5 min-h-[300px] relative overflow-hidden flex flex-col justify-end p-8">
                                <img 
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                                />
                               <div className={`absolute inset-0 bg-gradient-to-b ${selectedProject.color} mix-blend-overlay opacity-80`} />
                               <div className="absolute inset-0 bg-black/20" />
                               
                               <motion.span 
                                 initial={{ opacity: 0, y: 10 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ delay: 0.2 }}
                                 className="relative z-10 inline-block px-3 py-1 rounded-full bg-black/40 text-xs font-mono text-white mb-4 w-fit border border-white/10 backdrop-blur-md"
                               >
                                 Selected Work
                               </motion.span>
                               <motion.h3 
                                 initial={{ opacity: 0, y: 10 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ delay: 0.3 }}
                                 className="relative z-10 text-4xl font-bold text-white leading-none tracking-tight drop-shadow-xl"
                               >
                                 {selectedProject.title}
                               </motion.h3>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#121212]">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">About the project</h4>
                                    <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                        {selectedProject.description} { /* We could add a longDescription field to data.ts later */ }
                                    </p>

                                    <div className="mb-10">
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Core Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((tech, i) => (
                                                <motion.span 
                                                    key={tech} 
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.5 + (i * 0.05) }}
                                                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-gray-200 border border-white/5 transition-colors cursor-default"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-4 border-t border-white/10">
                                        <a 
                                            href={selectedProject.links.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex-1 py-4 rounded-xl bg-white text-black font-bold text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Github size={20} />
                                            View Code
                                        </a>
                                        <a 
                                            href={selectedProject.links.demo} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex-1 py-4 rounded-xl bg-white/5 text-white font-bold text-center hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-2"
                                        >
                                            Live Demo
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
}
