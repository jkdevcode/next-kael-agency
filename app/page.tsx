import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { SolutionsSection } from "@/components/sections/solutions-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProcessSection } from "@/components/sections/process-section"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { ProjectsSection } from "@/components/sections/projects-section"
/* import { BehindProjectsSection } from "@/components/behind-projects-section" */
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/layout/footer"

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
