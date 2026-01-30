"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, Linkedin, ArrowRight, FileText } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 text-center md:px-6 pt-16">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(56,189,248,0.13)_0%,rgba(255,255,255,0)_100%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl space-y-6"
      >
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold text-primary bg-primary/10 mb-4">
          <span>Based in Navi Mumbai, India</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          AI-Enabled <span className="text-primary">Full-Stack Engineer</span> building production-ready systems.
        </h1>

        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Python • Machine Learning • Next.js • System Design • Automation
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <Link href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" asChild>
            <Link href="/RuturajNawale_30_01_2026_Resume.pdf" target="_blank">
              <FileText className="mr-2 h-4 w-4" /> Resume
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/ruturajbhaskarnawale" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/ruturaj-nawale-863418288" target="_blank">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ArrowRight className="h-6 w-6 rotate-90" />
      </motion.div>
    </section>
  )
}
