"use client"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-left border-l-4 border-primary pl-4">
            Selected Projects
          </h2>
          <p className="mt-4 text-muted-foreground pl-5 max-w-2xl">
            A collection of systems designed to solve real problems with measurable impact.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground mt-2 text-lg">{project.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-card p-4 rounded-lg border shadow-sm">
                    <h4 className="font-semibold text-primary mb-1">Problem</h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border shadow-sm">
                    <h4 className="font-semibold text-primary mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border shadow-sm">
                    <h4 className="font-semibold text-primary mb-1">Impact</h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.links.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.links.demo} target="_blank">
                       Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

               {/* Project Visual (Placeholder for now) */}
               <div className="relative aspect-video rounded-xl border bg-muted/50 overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span className="text-4xl font-light opacity-20">Preview</span>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
