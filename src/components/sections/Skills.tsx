"use client"
import { skills } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background border-t border-muted/40">
      <div className="container px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-left border-l-4 border-primary pl-4">
            Technical Arsenal
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Programming & Data</h3>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((skill) => (
                 <Badge key={skill} variant="outline" className="px-3 py-1 text-sm">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Machine Learning & AI</h3>
            <div className="flex flex-wrap gap-2">
              {skills.ml_ai.map((skill) => (
                 <Badge key={skill} variant="outline" className="px-3 py-1 text-sm">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Full-Stack & Systems</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                 <Badge key={skill} variant="outline" className="px-3 py-1 text-sm">{skill}</Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                 <Badge key={skill} variant="outline" className="px-3 py-1 text-sm">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
