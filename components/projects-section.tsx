"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "Rifas Online",
    description:
      "Plataforma web para rifas online. Los usuarios pueden comprar números, ver sorteos en vivo y una vez completada la rifa, se anuncia el ganador con su nombre completo y número ganador.",
    image: "/online-raffle-lottery-platform-dark-theme-neon.jpg",
    tags: ["Next.js", "Google Sheets", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "Sistemas para Barberías",
    description:
      "Aplicación web desarrollada como proyecto final de Programación IV (UTN). Permite reservar turnos, gestionar servicios y administrar confirmaciones desde un panel de control.",
    image: "/barbershop-booking-system-dashboard-dark-theme.jpg",
    tags: ["React", "NestJS", "MySQL", "TypeORM", "Tailwind", "TypeScript", "Swagger"],
  },
  {
    title: "E-commerce Vibras",
    description:
      "E-commerce completo con gestión de productos, stock y carrito. Implementación de subida de imágenes con AWS S3 y panel de administración.",
    image: "/fashion-ecommerce-store-dark-theme-modern.jpg",
    tags: ["Next.js", "Node.js", "AWS S3", "MongoDB", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "Eventos e Invitaciones Web",
    description:
      "Aplicación web compartir invitaciones digitales interactivas con música, animaciones, contador y confirmación por WhatsApp.",
    image: "/digital-wedding-invitation-elegant-dark-theme.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Animations"],
    link: "#",
  },
  {
    title: "Simulador de Examen",
    description:
      "Aplicación React pensada para que mis compañeros y yo podamos practicar exámenes desde la pc o el celular. Permite resolver un simulacro de 20 preguntas al azar y ver el resultado final.",
    image: "/exam-quiz-application-education-dark-theme.jpg",
    tags: ["React", "Tailwind", "JavaScript", "Google Sheets"],
  },
  {
    title: "SagerFix - Venta de Celulares",
    description:
      "Plataforma web para venta de celulares conectada a hoja de cálculo como base de datos. Integración con API del dólar blue para cotización actualizada. Filtros por marca, gama y disponibilidad.",
    image: "/mobile-phone-store-ecommerce-dark-theme.jpg",
    tags: ["Next.js", "API Rest", "Google Sheets", "Tailwind", "TypeScript"],
    link: "#",
  },
  {
    title: "La Beba Padel Club",
    description:
      "Plataforma web con sistema de reserva de turnos, información de torneos y consulta de ranking. Panel administrativo completo para gestión de jugadores, noticias, turnos, carrusel y torneos.",
    image: "/padel-tennis-club-booking-sports-dark-theme.jpg",
    tags: ["React", "MongoDB", "Node.js", "Express", "Tailwind", "JavaScript"],
    link: "#",
  },
  {
    title: "Chat Online",
    description:
      "Aplicación de chat en tiempo real utilizando Socket.io. Permite a los usuarios unirse a una sala de chat y enviar mensajes instantáneos.",
    image: "/real-time-chat-application-messaging-dark-theme.jpg",
    tags: ["Node.js", "Express", "Socket.io", "React"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-muted-foreground">Algunos de mis trabajos más recientes</p>
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
