import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TechStack } from "@/components/tech-stack"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { BehindProjectsSection } from "@/components/behind-projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TechStack />
      <ServicesSection />
      <ProjectsSection />
      <BehindProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
