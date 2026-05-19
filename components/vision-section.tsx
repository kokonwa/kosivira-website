"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Heart, Lightbulb } from "lucide-react"

const impacts = [
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Making advanced assistive technology available to visually impaired individuals worldwide, regardless of economic circumstances.",
  },
  {
    icon: Heart,
    title: "Improved Quality of Life",
    description: "Enabling greater independence, confidence, and safety in daily activities, from commuting to exploring new environments.",
  },
  {
    icon: Lightbulb,
    title: "Affordable Innovation",
    description: "Proving that cutting-edge AI technology can be developed at price points accessible to those who need it most.",
  },
]

export function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      
      {/* Animated gradient orb */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block">
            Our Vision
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Technology for Humanity
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground text-pretty">
            We envision a world where advanced assistive AI technology is accessible to everyone, 
            not just those who can afford premium solutions. Kosivira DetectAid is our commitment 
            to making that vision a reality.
          </p>
        </motion.div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <impact.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{impact.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{impact.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic max-w-4xl mx-auto text-balance">
            &ldquo;The measure of a society is how it treats its most vulnerable. 
            At Kosivira, we are engineering technology that empowers, not excludes.&rdquo;
          </blockquote>
          <p className="mt-6 text-muted-foreground">
            - The Kosivira Team
          </p>
        </motion.div>
      </div>
    </section>
  )
}
