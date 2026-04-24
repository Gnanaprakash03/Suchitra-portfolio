import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react"

const experience = [
  {
    type: "work",
    title: "Computer Vision Intern",
    company: "Tango Eye",
    period: "April 2025 - July 2025",
    description: [
      "Worked on computer vision projects using YOLO for object detection and classification",
      "Performed data preprocessing, feature extraction, model training, and testing to enhance model performance",
      "Performed dataset annotation, augmentation, and class balancing to improve model accuracy",
      "Collaborated with team members to troubleshoot model errors and improve prediction reliability"
    ],
    skills: ["YOLO", "Computer Vision", "Object Detection", "Data Preprocessing"]
  },
  {
    type: "training",
    title: "Data Science End-to-End Certificate Course",
    company: "Besant Technologies",
    period: "April 2024 - Jan 2025",
    description: [
      "Completed intensive training in Python, statistics, machine learning, and data visualization",
      "Applied concepts in multiple real-world projects (number plate detection, churn modelling, dashboards)"
    ],
    skills: ["Python", "Statistics", "Machine Learning", "Data Visualization"]
  }
]

const education = [
  {
    degree: "Master's Degree in Data Science",
    institution: "University of Madras, Women's Christian College, Chennai",
    period: "2022-2024",
    cgpa: "8.27"
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "University of Madras, Vidhya Sagar Women's College, Chengalpattu",
    period: "2019-2022",
    cgpa: "8.97"
  }
]

const certifications = [
  "Python Programmer ACCUCA and Silliman University (Japan)",
  "Data Science End-to-End Certificate Course - Besant Technologies"
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional experience in data science and computer vision.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Experience</h3>
            </div>
            {experience.map((item, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.company}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="font-mono text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {item.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>
            {education.map((item, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-lg">{item.degree}</CardTitle>
                      <CardDescription className="text-sm">{item.institution}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="font-mono text-xs">
                      {item.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">CGPA:</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                      {item.cgpa}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex items-center gap-3 mt-8 mb-6">
              <div className="p-2.5 rounded-xl bg-chart-4/10 text-chart-4">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
            </div>
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                        {index + 1}
                      </span>
                      <p className="text-muted-foreground text-sm">{cert}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
