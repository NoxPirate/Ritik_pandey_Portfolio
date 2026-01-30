"use client"
import { research } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Research() {
  return (
    <section id="research" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-left border-l-4 border-primary pl-4">
            Research & Publications
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {research.map((item, index) => (
            <Card key={index} className="border-t-4 border-t-primary shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-2 text-sm font-semibold text-primary uppercase tracking-wider">
                  {item.conference}
                </div>
                <CardTitle className="text-xl leading-snug">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {item.description}
                </p>
                <div className="pt-2 border-t text-sm font-medium text-muted-foreground">
                  Impact: <span className="text-foreground">{item.impact}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
