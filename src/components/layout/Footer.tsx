import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 text-muted-foreground">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
             <h3 className="text-lg font-semibold text-foreground">Ruturaj Nawale</h3>
             <p className="max-w-xs text-sm">
               AI-Enabled Full-Stack Engineer building real systems.
             </p>
             <p className="text-sm">
               Based in Navi Mumbai, India
             </p>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
             <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com/ruturajbhaskarnawale" target="_blank" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://linkedin.com/in/ruturaj-nawale-863418288" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="mailto:ruturajnawale@gmail.com" aria-label="Email">
                     <Mail className="h-5 w-5" />
                  </Link>
                </Button>
             </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Ruturaj Nawale. All rights reserved.</p>
          <div className="flex gap-4">
             <Link href="/RuturajNawale_30_01_2026_Resume.pdf" target="_blank" className="hover:text-foreground transition-colors">
               Resume
             </Link>
             <Link href="https://github.com/ruturajbhaskarnawale/Ruturaj_Nawale_Portfolio" target="_blank" className="hover:text-foreground transition-colors">
               Source Code
             </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
