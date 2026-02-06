"use client";

import { motion } from "framer-motion";
import { research } from "@/lib/data";
import { ArrowUpRight, FileText } from "lucide-react";

export default function Research() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden" id="research">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-6 md:space-y-0"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
               Research <span className="text-neutral-700">&</span> <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Publications</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Contributing to the academic community through rigorous study and technical exploration.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {research.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                   <div className="flex items-center gap-3 mb-4">
                     <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
                        {item.date}
                     </span>
                     <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider">
                        Conference Paper
                     </span>
                   </div>
                   
                   <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-blue-200 transition-colors">
                     {item.title}
                   </h3>
                   
                   <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-6">
                     {item.description}
                   </p>
                   
                   <div className="flex items-center gap-2 text-sm text-neutral-500 font-medium">
                      <FileText size={16} />
                      Presented at <span className="text-white">{item.conference}</span>
                   </div>
                </div>

                <div className="md:self-center">
                    <a 
                      href={item.link} 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300"
                    >
                      <ArrowUpRight size={24} />
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
