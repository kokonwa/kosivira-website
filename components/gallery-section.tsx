"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const galleryItems = [
  {
    image: "/images/detectaid-concept.png",
    title: "DetectAid Prototype Concept",
    caption: "AI-powered assistive wearable - The Kosivira neck device",
    description: "Compact, intelligent, and powerful navigation assistant for the visually impaired.",
  },
  {
    image: "/images/kosivira-branding-board.png",
    title: "Kosivira Brand Identity",
    caption: "Future accessibility technology",
    description: "Our brand represents movement, innovation, and forward momentum in assistive technology.",
  },
]

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
            Explore the visual development of Kosivira DetectAid, from brand identity 
            to prototype concepts in assistive AI product development.
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
                src="/images/detectaid-concept.png"
                alt="Kosivira DetectAid prototype concept - AI-powered assistive wearable"
                fill
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                quality={95}
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            
            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3 backdrop-blur-sm">
                Prototype Concept
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                DetectAid Prototype Concept
              </h3>
              <p className="text-muted-foreground max-w-2xl">
                AI-powered assistive wearable - The Kosivira neck device. Compact, intelligent, 
                and powerful navigation assistant designed for the visually impaired.
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
            <span className="text-foreground font-medium">Note:</span> DetectAid is currently in prototype development. 
            These visuals represent our concept designs and active product development in assistive AI technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
