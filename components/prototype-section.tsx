"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Cpu, CheckCircle, Clock, Rocket } from "lucide-react"
import Image from "next/image"

const milestones = [
  {
    status: "completed",
    title: "Concept Development",
    description: "Initial research, design specifications, and proof of concept completed.",
  },
  {
    status: "completed",
    title: "Sensor Integration",
    description: "Multi-sensor array successfully integrated with detection algorithms.",
  },
  {
    status: "current",
    title: "Functional Prototype",
    description: "Working prototype under active development and testing.",
  },
  {
    status: "upcoming",
    title: "User Testing",
    description: "Field testing with visually impaired users for real-world validation.",
  },
  {
    status: "upcoming",
    title: "Production Ready",
    description: "Finalized design ready for manufacturing and distribution.",
  },
]

export function PrototypeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="prototype" className="relative py-32 overflow-hidden" ref={ref}>
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
            Development Status
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Prototype in Progress
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-pretty">
            Kosivira DetectAid currently has a functional prototype under active development. 
            Our team is working tirelessly to refine the technology and prepare for user testing.
          </p>
        </motion.div>

        {/* DetectAid Concept Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20"
        >
          <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-card shadow-2xl shadow-black/30">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/detectaid-concept.png"
                alt="Kosivira DetectAid prototype concept - AI-powered assistive wearable"
                fill
                className="object-cover object-center"
                quality={95}
              />
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-2 backdrop-blur-sm">
                Active Development
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">DetectAid Prototype Concept</h3>
              <p className="text-sm text-muted-foreground mt-1">AI-powered assistive wearable - Future accessibility technology</p>
            </div>
          </div>
        </motion.div>

        {/* Current Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20"
        >
          <div className="p-12 md:p-16 rounded-2xl bg-card border border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Cpu className="w-12 h-12 text-primary" />
              </div>
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  Active Development
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Functional Prototype Stage
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Our working prototype demonstrates core functionality including real-time obstacle detection, 
                  audio feedback systems, and wearable sensor integration. We are currently optimizing 
                  performance and preparing for comprehensive user testing.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Development Timeline */}
        <div className="max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl font-bold text-foreground mb-12 text-center"
          >
            Development Timeline
          </motion.h3>
          
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`flex gap-6 p-6 rounded-xl border ${
                  milestone.status === "current"
                    ? "bg-primary/5 border-primary/30"
                    : "bg-card border-border"
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  milestone.status === "completed"
                    ? "bg-primary/20"
                    : milestone.status === "current"
                    ? "bg-primary"
                    : "bg-secondary"
                }`}>
                  {milestone.status === "completed" ? (
                    <CheckCircle className="w-6 h-6 text-primary" />
                  ) : milestone.status === "current" ? (
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  ) : (
                    <Rocket className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-lg font-semibold text-foreground">{milestone.title}</h4>
                    {milestone.status === "current" && (
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary text-primary-foreground">
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
