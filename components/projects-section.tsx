"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "Nexus Raffle Engine",
    description:
      "Plataforma de alta escalabilidad para la gestión y venta de números de rifas en tiempo real. Implementamos una arquitectura capaz de procesar cientos de transacciones simultáneas con sincronización automática.",
    image: "/professional-male-developer-portrait-dark-backgrou.jpg",
    tags: ["Next.js", "Real-time", "Fintech", "Cloud"],
    link: "#",
  },
  {
    title: "Booking Hub Pro",
    description:
      "Sistema de gestión de reservas optimizado que redujo el tiempo administrativo en un 60%. Incluye panel de control avanzado, gestión de turnos inteligente y notificaciones automáticas vía WhatsApp.",
    image: "/professional-male-developer-portrait-dark-backgrou.jpg",
    tags: ["SaaS", "Optimization", "Automation", "Dashboard"],
  },
  {
    title: "Vibras E-commerce Suite",
    description:
      "E-commerce de alto rendimiento enfocado en la experiencia de compra fluida. Integra gestión de inventario inteligente, pasarela de pagos segura y carga optimizada para SEO y conversión.",
    image: "/professional-male-developer-portrait-dark-backgrou.jpg",
    tags: ["Next.js", "E-commerce", "AWS", "Performance"],
    link: "#",
  },
  {
    title: "Event Connect Digital",
    description:
      "Solución de invitaciones interactivas premium que redefine la confirmación de asistencia. Mejora el engagement del invitado con animaciones fluidas y una interfaz intuitiva para dispositivos móviles.",
    image: "/professional-male-developer-portrait-dark-backgrou.jpg",
    tags: ["UX", "Interactive", "Animations", "Frontend"],
    link: "#",
  }
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
