"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Eye, Target } from "lucide-react"

export function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="mission" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="mission-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mission-grid)" />
        </svg>
      </div>

      {/* Glowing accents */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.15, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-accent/10 via-transparent to-transparent rounded-full blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-4 block">
            Our Purpose
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Vision & Mission
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-card via-card/80 to-card border border-primary/20 shadow-2xl shadow-black/30 overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-widest">Our Vision</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">Shaping Intelligent Living</h3>
                </div>
              </div>
              
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p className="text-pretty">
                  Kosivira envisions a future where intelligent technology, human-centered innovation, and modern living 
                  work together to create safer, smarter, more connected, and more meaningful human experiences.
                </p>
                <p className="text-pretty">
                  Our vision is to build a globally recognized innovation ecosystem that develops impactful solutions 
                  across accessibility, AI, smart systems, digital experiences, lifestyle technology, and future-focused 
                  innovations designed to improve everyday life.
                </p>
                <p className="text-foreground font-medium text-pretty">
                  Kosivira aims to become a symbol of intelligent living, creativity, accessibility, and future progress 
                  by building technologies and experiences that empower people, solve real-world challenges, and positively 
                  shape future generations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-card via-card/80 to-card border border-border shadow-2xl shadow-black/30 overflow-hidden">
            {/* Glow effect */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-medium text-accent uppercase tracking-widest">Our Mission</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">Engineering the Future</h3>
                </div>
              </div>
              
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p className="text-pretty">
                  Kosivira exists to create intelligent, accessible, and future-focused technologies that improve 
                  human life through innovation, connectivity, and meaningful design.
                </p>
                <p className="text-pretty">
                  Our mission is to develop impactful systems, products, and experiences across AI, accessibility, 
                  smart technology, digital ecosystems, and modern living while making innovation more human-centered, 
                  practical, scalable, and globally transformative.
                </p>
                <p className="text-foreground font-medium text-pretty">
                  Kosivira is committed to building solutions that combine intelligence, simplicity, creativity, comfort, 
                  and long-term impact to help shape a smarter and more inclusive future for everyone.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </div>
    </section>
  )
}
