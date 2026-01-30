"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/40">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What people say about my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-card rounded-2xl shadow-sm border border-border/50 relative"
            >
              <Quote className="absolute top-6 left-6 text-primary/20 w-8 h-8" />
              <p className="text-lg text-foreground italic mb-6 pl-8 relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 pl-8">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t.author}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
