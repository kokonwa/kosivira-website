"use client"

import { motion, useInView } from "framer-motion"
import { Building2, Cpu, GraduationCap, Leaf } from "lucide-react"
import { useRef } from "react"

const sectors = [
  { icon: Cpu, title: "Intelligent Technology", text: "Assistive systems, connected devices, smart electronics and digital experiences designed around real human needs." },
  { icon: Building2, title: "Mobility & Infrastructure", text: "Long-term exploration across mobility, transport, logistics, construction and the systems that connect communities." },
  { icon: Leaf, title: "Living & Industry", text: "Future-focused ideas spanning responsible production, materials, hospitality, agriculture and modern living." },
  { icon: GraduationCap, title: "Education & Social Impact", text: "A commitment to practical learning, inclusive opportunity, accessibility and community wellbeing." },
]

export function EcosystemSection() {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ecosystem" ref={ref} className="relative overflow-hidden border-y border-border py-32">
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} className="mb-16 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.2em] text-primary">Future Ecosystem</span>
          <h2 className="mt-4 text-4xl font-bold text-balance md:text-6xl">One vision, built progressively.</h2>
          <p className="mt-6 text-lg text-muted-foreground">Kosivira’s wider ambition is organised into connected areas of future exploration. These are long-term directions—not claims of currently operating companies.</p>
        </motion.div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {sectors.map((sector, index) => {
            const Icon = sector.icon
            return (
              <motion.article key={sector.title} initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }} className="bg-background p-8 md:p-12">
                <Icon className="mb-8 h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mb-4 text-2xl font-semibold">{sector.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{sector.text}</p>
              </motion.article>
            )
          })}
        </div>
        <p className="ml-auto mt-8 max-w-3xl text-sm text-muted-foreground">Each future venture will be introduced only when it has the people, resources and structure required to create genuine value.</p>
      </div>
    </section>
  )
}
