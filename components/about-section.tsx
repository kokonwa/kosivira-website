"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Eye, Cpu, Radio, Watch, DollarSign, Heart } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Eye,
    title: "Obstacle Awareness",
    description: "Wrist-based sensing is intended to identify nearby people, animals, and objects around the wearer.",
  },
  {
    icon: Radio,
    title: "Walking Cues",
    description: "The concept uses spoken cues and wrist vibrations. It would only suggest a direction when sensing supports that cue.",
  },
  {
    icon: Cpu,
    title: "Pedestrian Signals",
    description: "At compatible crossings, DetectAid would relay current pedestrian signals through speech and vibration and ignore stale or mismatched data.",
  },
  {
    icon: Watch,
    title: "Watch and Open-Ear Earpiece",
    description: "The watch is designed to deliver distinct vibration patterns while the earpiece provides spoken cues without blocking the ear.",
  },
  {
    icon: DollarSign,
    title: "Affordable Accessibility",
    description: "Affordability is a design goal. Component costs and user feedback will inform pricing.",
  },
  {
    icon: Heart,
    title: "SOS Workflows",
    description: "The concept includes a tactile SOS control and a cancellable automatic check-in that requires an unusual pulse and a separate danger signal.",
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
            Mobility Cues You Can Hear or Feel
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-pretty">
            Kosivira DetectAid is a concept-stage assistive wearable for obstacle awareness,
            walking cues, and requesting help. It pairs a wristwatch with an open-ear earpiece
            so wearers can receive key information through speech, wrist vibration, or both.
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
                  src="/detectaid/watch-and-earpiece.png"
                  alt="DetectAid wristwatch and open-ear earpiece concept"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                  Product Concept
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">The Technology</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">A Watch and an Open-Ear Earpiece</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The watch concept combines wrist-based sensing, tactile alerts, and a physical SOS control.
                The open-ear earpiece is designed to deliver spoken cues while leaving the ear open to surrounding sound.
              </p>
              <ul className="space-y-3">
                {["Directional obstacle awareness", "Speech and distinct wrist vibrations", "Tactile SOS control", "Pedestrian cues at compatible crossings"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                The <a className="text-primary underline underline-offset-4" href="/detectaid/prototype.html">interactive software demo</a> simulates these workflows. Hardware performance and accessibility still need testing.
              </p>
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
                We want essential mobility cues to reach people in a form they can use without relying on
                sight or hearing alone. Our next step is to build the first hardware demonstrator,
                test it in controlled and supervised accessibility sessions, and use the results
                to plan and cost the next build.
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
