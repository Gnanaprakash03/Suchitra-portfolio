"use client"

import { Mail, Phone, MapPin, Linkedin, Github, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary font-medium text-sm">Open to opportunities</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              Hi, I{"'"}m <span className="text-primary">Suchitra Mary</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Data Scientist & <span className="text-accent">CV Enthusiast</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-lg text-lg">
            Entry-level data scientist and computer vision enthusiast with a Master{"'"}s in Data Science. Experienced in YOLO-based object detection, OpenCV image processing, and end-to-end machine learning projects.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <a href="tel:+918940340918" className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary/30 hover:text-primary transition-all">
              <Phone className="h-4 w-4" />
              +91 8940340918
            </a>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <MapPin className="h-4 w-4" />
              Chennai, TN
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="mailto:suchitramary0107@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.linkedin.com/in/suchitra-mary-m" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            {/* Main avatar area */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/20">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
                <span className="text-6xl md:text-7xl font-bold text-primary-foreground">SM</span>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 px-4 py-2 rounded-xl bg-card border border-border shadow-sm">
              <span className="text-sm font-semibold text-foreground">M.Sc Data Science</span>
            </div>
            <div className="absolute -bottom-2 -left-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground shadow-sm">
              <span className="text-sm font-semibold">YOLO Expert</span>
            </div>
            <div className="absolute top-1/2 -right-6 px-3 py-1.5 rounded-lg bg-accent text-accent-foreground shadow-sm">
              <span className="text-xs font-semibold">OpenCV</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-medium">Scroll to explore</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  )
}
