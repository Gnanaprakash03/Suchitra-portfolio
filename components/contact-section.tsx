import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Let{"'"}s Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I{"'"}m currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <Card className="border-border bg-card max-w-3xl mx-auto">
          <CardContent className="p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:suchitramary0107@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium text-foreground">suchitramary0107@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918940340918"
                className="flex items-center gap-4 p-5 rounded-xl bg-accent/5 border border-accent/20 hover:border-accent/40 transition-all"
              >
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-medium text-foreground">+91 8940340918</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-xl bg-secondary border border-border">
                <div className="p-3 rounded-xl bg-secondary text-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium text-foreground">Chennai, Tamil Nadu</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/suchitra-mary-m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-chart-5/5 border border-chart-5/20 hover:border-chart-5/40 transition-all"
              >
                <div className="p-3 rounded-xl bg-chart-5/10 text-chart-5">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                  <p className="text-sm font-medium text-foreground">Suchitra Mary M</p>
                </div>
              </a>
            </div>

            <div className="mt-10 text-center">
              <Button size="lg" className="px-8" asChild>
                <a href="mailto:suchitramary0107@gmail.com">
                  <Send className="mr-2 h-4 w-4" />
                  Send a Message
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
