"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sahareshubham424@email.com",
      href: "mailto:sahareshubham424@email.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 92389 19971",
      href: "tel:+919238919971",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lodhikheda, Madhya Pradesh, India",
      href: "#",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-center mb-8 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto text-pretty">
            I'm always excited to connect with fellow developers, mentors, or anyone interested in technology. Let's
            build something amazing together!
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-6">Let's Connect</h3>

              <p className="text-muted-foreground text-pretty mb-8">
                Whether you have a project idea, want to collaborate, or just want to say hi, I'd love to hear from you.
                I'm always open to new opportunities and connections.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="flex items-center gap-4 group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((platform, index) => (
                    <Button
                      key={platform}
                      variant="outline"
                      size="sm"
                      className="hover:scale-110 transition-transform bg-transparent"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {platform}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-[family-name:var(--font-heading)]">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="transition-all duration-200 focus:scale-105 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full hover:scale-105 transition-transform animate-pulse-glow">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border text-center">
        {/* <p className="text-muted-foreground">created by  <a href="https://portfolio2025-wine.vercel.app/"><span className="text-red-600 underline text-sm cursor-auto">SAMAR HIRAU</span></a> Built with ❤️ using Next.js and Tailwind CSS.</p> */}
      </footer>
    </section>
  )
}
