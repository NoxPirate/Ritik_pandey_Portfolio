"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-20 bg-[#080808] py-32 px-4 md:px-12 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Praise</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Endorsements from collaborators, clients, and technical committees on my engineering solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl overflow-hidden"
            >
              {/* Glow effect on card hover */}
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl" />

              <Quote className="absolute top-8 left-8 text-blue-500/10 w-12 h-12 pointer-events-none" />
              
              <div className="relative z-10">
                <p className="text-zinc-100 italic text-lg leading-relaxed mb-8 pl-6 border-l border-blue-500/20">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 pl-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-mono font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base md:text-lg">{t.author}</h4>
                    <p className="text-xs uppercase tracking-widest text-zinc-400 font-mono mt-1 font-semibold">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
