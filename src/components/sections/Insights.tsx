"use client";

import { motion } from "framer-motion";
import { insights } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-cover bg-center">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Insights & Writing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing my thoughts on technology and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {insights.map((item, idx) => (
            <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl border border-transparent hover:border-border hover:bg-muted/30 transition-all flex items-start gap-4"
            >
                <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0 overflow-hidden relative">
                    {/* Image placeholder */}
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                </div>
                
                <div className="flex-1">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                        {item.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0" />
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.readTime}</span>
                    </div>
                </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
