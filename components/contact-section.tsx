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
            Interested in Kosivira DetectAid? Whether you are a potential partner,
            investor, or want to learn more about our assistive technology,
            we would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-12">

              {/* Organization */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <span className="text-foreground font-semibold text-sm">
                    ORG
                  </span>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Organization
                  </p>

                  <p className="text-foreground font-medium">
                    Kosivira
                  </p>
                </div>
              </div>

              {/* Project */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <span className="text-foreground font-semibold text-sm">
                    PRJ
                  </span>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Project
                  </p>

                  <p className="text-foreground font-medium">
                    Kosivira DetectAid
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Email
                  </p>

                  <a
                    href="mailto:Kosivira.future@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Kosivira.future@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <span className="text-foreground font-semibold text-sm">
                    TEL
                  </span>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Phone
                  </p>

                  <a
                    href="tel:+2347083039437"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +2347083039437
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Location
                  </p>

                  <p className="text-foreground">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Follow Us
              </h4>

              <div className="flex flex-wrap gap-4">

                <Link
                  href="https://www.linkedin.com/company/kosivira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <span className="text-foreground font-medium">
                    LinkedIn
                  </span>
                </Link>

                <Link
                  href="https://www.instagram.com/officialkosivira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <span className="text-foreground font-medium">
                    Instagram
                  </span>
                </Link>

                <Link
                  href="https://www.facebook.com/share/18rVoDh5v7/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <span className="text-foreground font-medium">
                    Facebook
                  </span>
                </Link>

                <Link
                  href="https://x.com/kosivira?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <span className="text-foreground font-medium">
                    X (Twitter)
                  </span>
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

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Message Received!
                </h3>

                <p className="text-muted-foreground max-w-sm">
                  Thank you for your interest in Kosivira DetectAid.
                  Our team will get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-10 rounded-2xl bg-card border border-border"
              >
                <div className="space-y-6">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        First Name
                      </label>

                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Your first name"
                        className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Last Name
                      </label>

                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Your last name"
                        className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300"
                  >
                    {isLoading ? (
                      <>
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
