"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("All")
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

  const projects = [
    {
      title: "Personal Learning Dashboard",
      description: "A comprehensive dashboard to track my learning progress across different subjects and skills.",
      image: "/modern-dashboard.png",
      tags: ["React", "Next.js", "Chart.js", "Tailwind CSS"],
      category: "Web Development",
      github: "#",
      live: "#",
    },
    {
      title: "School Event Manager",
      description: "A web application to help organize and manage school events, competitions, and activities.",
      image: "/event-management-app-interface.jpg",
      tags: ["JavaScript", "Node.js", "MongoDB", "Express"],
      category: "Web Development",
      github: "#",
      live: "#",
    },
    {
      title: "Study Buddy Mobile App",
      description: "A mobile app concept designed to help students collaborate and share study materials.",
      image: "/mobile-app-study-interface.jpg",
      tags: ["Figma", "UI/UX", "Prototyping"],
      category: "Design",
      github: "#",
      live: "#",
    },
    {
      title: "Grade Calculator Tool",
      description: "A simple yet powerful tool to calculate and predict academic grades and GPA.",
      image: "/calculator-app-interface.png",
      tags: ["Python", "Tkinter", "Data Analysis"],
      category: "Tools",
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description: "This very website! Built with modern technologies and award-winning design principles.",
      image: "/portfolio-website-design.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Web Development",
      github: "#",
      live: "#",
    },
    {
      title: "Code Snippet Manager",
      description: "A desktop application to organize and manage code snippets for quick reference.",
      image: "/code-editor-interface.png",
      tags: ["Electron", "React", "SQLite"],
      category: "Tools",
      github: "#",
      live: "#",
    },
  ]

  const categories = ["All", "Web Development", "Design", "Tools"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-center mb-8 text-balance">
            My <span className="text-primary">Projects</span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto text-pretty">
            Here are some of the projects I've been working on. Each one represents a step in my learning journey.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="hover:scale-105 transition-transform"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-[family-name:var(--font-heading)]">{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
