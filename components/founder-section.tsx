"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function FounderSection() {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="founder" ref={ref} className="bg-card/40 py-32">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <span className="text-sm uppercase tracking-[0.2em] text-primary">Founder’s belief</span>
        <blockquote className="mt-8 text-3xl font-semibold leading-tight text-balance md:text-5xl">“The future should not only be more intelligent. It should be more inclusive, more useful and more human.”</blockquote>
        <p className="mt-8 text-muted-foreground">Favour Ezeonyebuchi · Founder, Kosivira</p>
      </motion.div>
    </section>
  )
}
