"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Eye, Cpu, Radio, Watch, DollarSign, Heart } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Eye,
    title: "AI Obstacle Detection",
    description: "Advanced computer vision algorithms detect obstacles, hazards, and objects in real-time, providing instant awareness of the surrounding environment.",
  },
  {
    icon: Radio,
    title: "Real-Time Directional Feedback",
    description: "Intuitive audio and haptic feedback guides users safely around obstacles, providing clear directional cues for confident navigation.",
  },
  {
    icon: Cpu,
    title: "Environmental Sensing",
    description: "Multi-sensor technology analyzes depth, distance, and environmental conditions to create a comprehensive awareness of surroundings.",
  },
  {
    icon: Watch,
    title: "Wearable Ergonomic Design",
    description: "Lightweight, comfortable design that integrates seamlessly into daily life without causing fatigue or discomfort during extended use.",
  },
  {
    icon: DollarSign,
    title: "Affordable Accessibility",
    description: "Engineered to be cost-effective without compromising quality, making advanced assistive technology accessible to those who need it most.",
  },
  {
    icon: Heart,
    title: "Independence & Dignity",
    description: "Empowering users to navigate with confidence and autonomy, reducing dependence on others and enhancing quality of life.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block">
            About Kosivira DetectAid
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Empowering Independence<br />Through Innovation
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-pretty">
            Kosivira DetectAid is a revolutionary wearable assistive technology that combines 
            artificial intelligence with advanced sensors to help visually impaired individuals 
            navigate the world safely and independently.
          </p>
        </motion.div>

        {/* Product Concept Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-xl shadow-black/20">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/detectaid-concept.png"
                  alt="DetectAid prototype concept - AI-powered assistive wearable"
                  fill
                  className="object-cover object-top"
                  quality={90}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                  Prototype Concept
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">The Technology</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">AI-Powered Assistive Wearable</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Kosivira neck device is a compact, intelligent, and powerful navigation assistant. 
                Designed with the visually impaired community in mind, it provides real-time obstacle 
                detection, environmental awareness, and intuitive directional feedback.
              </p>
              <ul className="space-y-3">
                {["Multi-sensor obstacle detection", "Real-time audio feedback", "72+ hours battery life", "Ergonomic wearable design"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-24"
        >
          <div className="p-12 md:p-16 rounded-2xl bg-card border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
                To transform the lives of visually impaired individuals by providing intelligent, 
                affordable assistive technology that enhances mobility, safety, and independence. 
                We believe everyone deserves the freedom to navigate the world with confidence, 
                and we are committed to making that a reality through cutting-edge AI innovation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-500">
                <feature.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
