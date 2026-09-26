import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BrandSection } from "@/components/brand-section"
import { AboutSection } from "@/components/about-section"
import { ProblemSection } from "@/components/problem-section"
import { PrototypeSection } from "@/components/prototype-section"
import { GallerySection } from "@/components/gallery-section"
import { VisionSection } from "@/components/vision-section"
import { MissionSection } from "@/components/mission-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { FounderSection } from "@/components/founder-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BrandSection />
      <AboutSection />
      <ProblemSection />
      <PrototypeSection />
      <GallerySection />
      <VisionSection />
      <MissionSection />
      <EcosystemSection />
      <FounderSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
