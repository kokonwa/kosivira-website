"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Mail, MapPin, CheckCircle } from "lucide-react"
import Link from "next/link"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
   try {
  const form = e.currentTarget

  await emailjs.sendForm(
    "service_djde8hg",
    "template_z1z89qo",
    form,
    "-nfaqTi-ZfgD3VcQU"
  )

  setIsLoading(false)
  setIsSubmitted(true)

  alert("Message sent successfully. Kosivira will contact you soon.")
} catch (error) {
  setIsLoading(false)

  alert("Message failed to send. Please try again later.")
}
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Connect With Us
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Interested in Kosivira DetectAid? Whether you are a potential partner, investor, 
            or want to learn more about our assistive technology, we would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <span className="text-foreground font-semibold text-sm">ORG</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Organization</p>
                  <p className="text-foreground font-medium">Kosivira</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <span className="text-foreground font-semibold text-sm">PRJ</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Project</p>
                  <p className="text-foreground font-medium">Kosivira DetectAid</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:Kosivira.future@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    Kosivira.future@gmail.com
                  </a>
                </div>
              </div>
</div>
</div>

{/* WhatsApp */}
<div className="flex items-center gap-4">
  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
    <span className="text-foreground font-semibold text-sm">WA</span>
  </div>
  <div>
    <p className="text-sm text-muted-foreground">WhatsApp</p>
    <a
      href="https://wa.me/2347083039437"
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground hover:text-primary transition-colors"
    >
      Message alii on WhatsApp
    </a>
  </div>
</div>

{/* Phone */}
<div className="flex items-center gap-4">
  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
    <span className="text-foreground font-semibold text-sm">TEL</span>
  </div>
  <div>
    <p className="text-sm text-muted-foreground">Phone</p>
    <a
      href="tel:+2347083039437"
      className="text-foreground hover:text-primary transition-colors"
    >
      +2347083039437
    </a>
  </div>
</div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/company/kosivira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-foreground font-medium">LinkedIn</span>
                </Link>
                <Link
                  href="https://www.instagram.com/officialkosivira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-foreground font-medium">Instagram</span>
                </Link>
                <Link
  href="https://www.facebook.com/share/18rVoDh5v7/?mibextid=wwXIfr"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
>
  <span className="text-foreground font-medium">Facebook</span>
</Link>

<Link
  href="https://x.com/kosivira?s=21"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
>
  <span className="text-foreground font-medium">X (Twitter)</span>
</Link>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-card border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Message Received!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for your interest in Kosivira DetectAid. Our team will get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-2xl bg-card border border-border">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="investment">Investment Opportunity</option>
                      <option value="media">Media & Press</option>
                      <option value="user">User Interest</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
