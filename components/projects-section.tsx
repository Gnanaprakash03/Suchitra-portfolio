"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Brain, BarChart3, LineChart, Car, Users, Building2, AlertTriangle, TrendingUp } from "lucide-react"

const projects = [
  {
    title: "Real-Time Vision System for Thread Counting",
    description: "Built an automated thread-counting system using Hough Line Transform and Canny Edge Detection to measure thread density in woven fabrics.",
    impact: "Increased efficiency in textile quality inspection by cutting labor costs by 40% and testing duration by 35%",
    period: "Nov 2023 - Mar 2024",
    technologies: ["OpenCV", "Python", "Image Processing"],
    icon: Eye,
    category: "Computer Vision"
  },
  {
    title: "Churn Analysis and Modelling",
    description: "Developed a churn prediction model using supervised learning techniques to identify high risk customers.",
    impact: "Increased customer retention by 20% and improved engagement by 18%. Lowered churn by 12%",
    period: "Jan 2025 - Mar 2025",
    technologies: ["Python", "Machine Learning", "Predictive Analytics"],
    icon: Users,
    category: "Machine Learning"
  },
  {
    title: "Russian Number-Plate Detection",
    description: "Created a real-time vehicle number plate recognition system using Haar Cascade Classifier on traffic footage.",
    impact: "Enhanced detection precision by 22% by optimizing cascade parameters and frame preprocessing",
    period: "Sep 2024 - Oct 2024",
    technologies: ["Python", "OpenCV", "Haar Cascade"],
    icon: Car,
    category: "Computer Vision"
  },
  {
    title: "Sales and Customer Dashboard",
    description: "Designed an interactive sales and customer analytics dashboard in Tableau to track revenue, growth, and customer acquisition.",
    impact: "Improved decision-making efficiency by 15% and streamlined reporting by 25%",
    period: "Nov 2024 - Dec 2024",
    technologies: ["Tableau", "Data Visualization", "Analytics"],
    icon: BarChart3,
    category: "Data Analytics"
  },
  {
    title: "Face and Eye Detection",
    description: "Implemented a real-time face and eye detection system using OpenCV and pre-trained classifiers.",
    impact: "Increased detection accuracy by 30% via advanced image preprocessing and noise reduction",
    period: "Dec 2024",
    technologies: ["Python", "OpenCV", "Deep Learning"],
    icon: Brain,
    category: "Computer Vision"
  },
  {
    title: "Churn Analysis Dashboard",
    description: "Built a telecom customer churn analytics dashboard in Power BI using Kaggle dataset to monitor churn trends and customer behaviour.",
    impact: "Developed KPIs such as Churn Rate, Retention %, CLV, and ARPU using DAX",
    period: "Jan 2026 - Present",
    technologies: ["Power BI", "DAX", "AI Visuals"],
    icon: LineChart,
    category: "Business Intelligence"
  },
  {
    title: "Hospitality Analysis",
    description: "Cleaned and transformed real hospitality domain data using Power Query; designed a star-schema model and measures with DAX.",
    impact: "Revealed ADR around 12.70K and realization of 70.14% for effective pricing strategies",
    period: "Aug 2025 - Sep 2025",
    technologies: ["Excel", "Power Query", "Power BI", "DAX"],
    icon: Building2,
    category: "Business Intelligence"
  },
  {
    title: "Road Accident Analysis",
    description: "Analyzed road accident data using Excel formulas, Pivot Tables, and charts to identify key factors affecting accident severity.",
    impact: "Built interactive dashboards improving stakeholders' understanding of accident frequency and risk patterns",
    period: "Nov 2025 - Dec 2025",
    technologies: ["Excel", "Pivot Tables", "Data Analysis"],
    icon: AlertTriangle,
    category: "Data Analytics"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my work across computer vision, machine learning, data analytics, and business intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <project.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    <CardDescription className="text-xs font-mono mt-1">{project.period}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Badge variant="secondary" className="text-xs font-medium">
                  {project.category}
                </Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground">
                      <span className="font-semibold text-primary">Impact:</span> {project.impact}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
