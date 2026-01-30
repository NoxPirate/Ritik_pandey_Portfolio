"use client"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-left border-l-4 border-primary pl-4">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I am an <span className="font-semibold text-foreground">AI-Enabled Full-Stack Engineer</span> and <span className="font-semibold text-foreground">Machine Learning Practitioner</span> focused on building production-ready systems that solve real-world problems.
              </p>
              <p>
                My work bridges the gap between complex AI models and scalable web applications. I don't just train models; I deploy them into intuitive interfaces that drive user value.
              </p>
              <p>
                With a strong foundation in <span className="font-semibold text-foreground">Systems Thinking</span>, I approach every project with an end-to-end mindset—architecting solutions that are robust, scalable, and maintainable.
              </p>
              <p>
                Currently, I am also building <span className="font-medium text-primary">Cognent</span>, a digital engineering studio focused on high-performance systems for healthcare, education, and CRM domains.
              </p>
            </div>
          </div>
          
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl bg-muted/20 sm:w-[400px]">
             {/* Placeholder for abstract visual or photo if desired later */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-background to-background flex items-center justify-center border rounded-xl">
                <span className="text-muted-foreground/50 font-light">System Architect</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
