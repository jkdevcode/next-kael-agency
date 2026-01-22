import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ProjectsSection } from "@/components/projects-section"
/* import { BehindProjectsSection } from "@/components/behind-projects-section" */
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <ProjectsSection />
      <ProcessSection />
      <WhyUsSection />
      {/* <BehindProjectsSection /> */}
      <ContactSection />
      <Footer />
    </main>
  )
}
