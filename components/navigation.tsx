"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#brand", label: "Brand" },
  { href: "#about", label: "About" },
  { href: "#prototype", label: "Prototype" },
  { href: "#gallery", label: "Gallery" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="group flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image
                src="/images/kosivira-logo.jpeg"
                alt="Kosivira Logo"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Kosivira
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Engineering the Future</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-4 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-5 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium text-center"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
