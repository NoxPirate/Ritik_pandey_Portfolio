"use client"
import { experience } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-left border-l-4 border-primary pl-4">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-8 relative pl-6 border-l-2 border-muted">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-6">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <span className="text-sm text-muted-foreground font-medium bg-muted px-2 py-1 rounded">
                    {job.period}
                  </span>
                </div>
                <div className="text-lg font-medium text-primary">{job.company}</div>
                <p className="text-muted-foreground max-w-2xl">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
