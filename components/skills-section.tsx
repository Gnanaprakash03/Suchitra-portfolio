import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Brain, BarChart3, Wrench, Zap, Target, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "R", "SQL"]
  },
  {
    title: "Data Analysis & Visualization",
    icon: BarChart3,
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Tableau", "Power BI", "SPSS"]
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "NLP", "OpenCV", "YOLO"]
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["MySQL"]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Jupyter Notebook", "GitHub", "Excel", "Power Query", "DAX"]
  }
]

const strengths = [
  {
    icon: Target,
    title: "Problem Solving",
    description: "Strong analytical and problem-solving abilities with focus on measurable business impact"
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Continuous learning mindset, actively building new projects in BI, ML, and computer vision"
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Good communication and teamwork skills developed through academic collaborations and internship experience"
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What I Know
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Strengths</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and soft skills that enable me to deliver impactful data science solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <category.icon className="h-5 w-5" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground">Key Strengths</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <Card key={index} className="border-border bg-card text-center hover:shadow-md transition-all">
              <CardContent className="pt-8 pb-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <strength.icon className="h-7 w-7" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{strength.title}</h4>
                <p className="text-sm text-muted-foreground">{strength.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
