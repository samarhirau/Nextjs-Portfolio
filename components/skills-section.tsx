"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "React", level: 80, category: "Frontend" },
    { name: "Next.js", level: 75, category: "Frontend" },
    { name: "TypeScript", level: 70, category: "Frontend" },
    { name: "Tailwind CSS", level: 88, category: "Frontend" },
    { name: "Python", level: 82, category: "Backend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "MongoDB", level: 70, category: "Backend" },
    { name: "Git/GitHub", level: 85, category: "Tools" },
    { name: "Figma", level: 78, category: "Design" },
    { name: "UI/UX Design", level: 75, category: "Design" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedValues((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }))
            }, index * 100)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const categories = ["Frontend", "Backend", "Tools", "Design"]

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-center mb-8 text-balance">
            My <span className="text-primary">Skills</span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto text-pretty">
            These are the technologies and tools I've been learning and working with. I'm always eager to expand this
            list!
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category, categoryIndex) => (
              <Card
                key={category}
                className="hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-[family-name:var(--font-heading)] text-primary">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{animatedValues[skill.name] || 0}%</span>
                        </div>
                        <Progress value={animatedValues[skill.name] || 0} className="h-2" />
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Learning Goals */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-6">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Machine Learning", "Mobile Development", "DevOps", "Three.js", "GraphQL"].map((skill, index) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
