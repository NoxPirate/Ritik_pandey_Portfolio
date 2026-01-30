"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const quickBadges = [
  "AI/ML", "Full-Stack", "Founder Mindset", "Innovation"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/50 text-foreground">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Left Column: Text */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.about.p1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.about.p2}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {quickBadges.map((badge, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm px-3 py-1 bg-white text-gray-800 border border-input shadow-sm hover:scale-105 transition-transform">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Column: Image or Visual */}
          <div className="flex-1 w-full flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto transform rotate-3 transition-transform hover:rotate-0 duration-500">
             <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
             <img
               src="/hero-portrait.png"
               alt="Ruturaj Nawale"
               className="relative z-10 w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl"
             />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
