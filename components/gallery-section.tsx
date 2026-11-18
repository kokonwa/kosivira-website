"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" className="relative py-32 overflow-hidden" ref={ref}>
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
            Visual Showcase
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Concept & Prototype Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            See the latest DetectAid watch and open-ear earpiece concept, alongside Kosivira’s brand designs.
          </p>
        </motion.div>

        {/* Main Featured Image - DetectAid Concept */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl shadow-black/30 hover:border-primary/30 transition-all duration-500">
            <div className="relative aspect-[16/9]">
              <Image
                src="/detectaid/watch-and-earpiece.png"
                alt="DetectAid wristwatch and open-ear earpiece design concept"
                fill
                className="object-contain"
                sizes="(min-width: 1280px) 1200px, 100vw"
              />
            </div>
            <div className="p-8 md:p-12">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3 backdrop-blur-sm">
                Product Concept
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                DetectAid Watch and Open-Ear Earpiece
              </h3>
              <p className="text-muted-foreground max-w-2xl">
                The watch is designed for wrist-based sensing and vibration alerts, while the open-ear earpiece delivers spoken cues without blocking surrounding sound.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Secondary Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="relative rounded-xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-500 shadow-xl shadow-black/20">
              <div className="relative aspect-square">
                <Image
                  src="/images/kosivira-branding-board.png"
                  alt="Kosivira brand identity"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  quality={90}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">Brand Identity</span>
                <h4 className="text-xl font-semibold text-foreground mt-1">Kosivira Brand Identity</h4>
                <p className="text-sm text-muted-foreground mt-1">Future accessibility technology</p>
              </div>
            </div>
          </motion.div>

          {/* Innovation Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="group"
          >
            <div className="relative rounded-xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-500 shadow-xl shadow-black/20">
              <div className="relative aspect-square">
                <Image
                  src="/images/kosivira-banner.jpeg"
                  alt="Kosivira engineering the future"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  quality={90}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">Innovation</span>
                <h4 className="text-xl font-semibold text-foreground mt-1">Engineering the Future</h4>
                <p className="text-sm text-muted-foreground mt-1">Futuristic accessibility innovation</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Innovation Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 rounded-xl bg-card border border-border text-center"
        >
          <p className="text-muted-foreground text-lg">
            <span className="text-foreground font-medium">Note:</span> These visuals show design concepts, not finished hardware. The four enclosure options are available in the <a href="#prototype" className="text-primary underline underline-offset-4">Prototype section</a>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
