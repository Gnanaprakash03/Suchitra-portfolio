import { Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">SM</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">Suchitra Mary</p>
              <p className="text-xs text-muted-foreground">Data Scientist</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Made in Chennai
          </p>
          
          <div className="flex items-center gap-3">
            <a
              href="mailto:suchitramary0107@gmail.com"
              className="p-2.5 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/suchitra-mary-m"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            2026 Suchitra Mary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
