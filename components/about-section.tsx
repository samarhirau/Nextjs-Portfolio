"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Lightbulb, Target } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const interests = [
    "Web Development",
    "UI/UX Design",
    "JavaScript",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "Mobile Development",
    "Open Source",
  ]

  const values = [
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always eager to learn new technologies and expand my knowledge base.",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code is my priority.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Thinking outside the box to create unique and impactful solutions.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Setting clear objectives and working systematically to achieve them.",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-center mb-16 text-balance">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <img
                  src="/professional-student-portrait.png"
                  alt="Shubham Sahare"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <Code className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
                Passionate Student & Future Developer
              </h3>

              <p className="text-lg text-muted-foreground text-pretty">
                I'm currently in Class 11, but my journey with technology started much earlier. What began as curiosity
                about how websites work has evolved into a deep passion for creating digital experiences that matter.
              </p>

              <p className="text-lg text-muted-foreground text-pretty">
                When I'm not studying for school, you'll find me coding, learning new frameworks, or working on personal
                projects. I believe that age is just a number when it comes to innovation and creativity.
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold">My Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge
                      key={interest}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-center mb-12">
              What Drives Me
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm text-pretty">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
