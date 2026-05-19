"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle, Navigation, DollarSign, Users } from "lucide-react"

const problems = [
  {
    icon: Navigation,
    title: "Mobility Challenges",
    description: "Navigating unfamiliar environments, detecting obstacles, and avoiding hazards presents daily struggles that limit independence and confidence.",
  },
  {
    icon: AlertTriangle,
    title: "Safety Concerns",
    description: "Collisions with objects, tripping hazards, and difficulty detecting moving obstacles create constant safety risks for visually impaired individuals.",
  },
  {
    icon: DollarSign,
    title: "Expensive Solutions",
    description: "Existing assistive devices often cost thousands of dollars, making advanced technology inaccessible to many who need it most.",
  },
  {
    icon: Users,
    title: "Dependency on Others",
    description: "Relying on sighted guides or companions limits personal freedom and can create feelings of burden or loss of autonomy.",
  },
]

export function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="problem" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 grid-background opacity-50" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block">
            The Challenge
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            A World of Obstacles
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-pretty">
            Over 285 million people worldwide live with visual impairments, facing significant 
            barriers to independent mobility and navigation that impact their quality of life.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="group relative"
            >
              <div className="relative p-8 md:p-10 rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 h-full">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex gap-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-destructive/10 transition-colors duration-500">
                    <problem.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-foreground font-medium">
            Kosivira DetectAid addresses these challenges with intelligent, affordable technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
