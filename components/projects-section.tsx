"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"

const projects = [
{
    title: "Blade & Grain Premium",
    description:
      "Landing page de lujo para barberías de alta gama. Enfocada en la conversión mediante una arquitectura moderna en Next.js 16, animaciones fluidas y reserva de citas integrada.",
    image: "/barberia.png",
    tags: ["Next.js 16", "Tailwind v4", "Framer Motion", "Conversion"],
    link: "#",
  },
  {
    title: "Artisan Coffee Landing",
    description:
      "Sitio de alto impacto visual para cafeterías de especialidad. Maximiza el engagement mediante storytelling visual, animaciones avanzadas con GSAP y una carga ultra rápida con Vite.",
    image: "/cafeteria.png",
    tags: ["React 19", "Vite 6", "GSAP", "Performance"],
    link: "#",
  },
  {
    title: "Vanguard Medical Portal",
    description:
      "Plataforma médica profesional diseñada para generar confianza. Prioriza la accesibilidad (WAI-ARIA) y la facilidad de agendamiento para pacientes, con un diseño limpio y moderno.",
    image: "/salud.png",
    tags: ["Next.js 16", "HeroUI", "Healthcare", "Accessibility"],
    link: "#",
  }
  /* {
    title: "Event Connect Digital",
    description:
      "Solución de invitaciones interactivas premium que redefine la confirmación de asistencia. Mejora el engagement del invitado con animaciones fluidas y una interfaz intuitiva para dispositivos móviles.",
    image: "/professional-male-developer-portrait-dark-backgrou.jpg",
    tags: ["UX", "Interactive", "Animations", "Frontend"],
    link: "#",
  } */
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Casos de Éxito</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Descubre cómo hemos ayudado a diversas empresas a transformar sus procesos y alcanzar sus objetivos mediante soluciones tecnológicas de alto nivel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
