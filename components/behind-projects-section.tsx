"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const projectStories = [
  {
    title: "Sistema para Barberías",
    description:
      "Proyecto final desarrollado en grupo para la materia Programación IV (UTN). Consiste en una aplicación web modular que gestiona reservas, servicios y confirmaciones de clientes.",
  },
  {
    title: "Web Vibras",
    description:
      "E-commerce profesional para una marca de indumentaria. Incluye catálogo de productos, carrito, checkout y panel de gestión para los administradores.",
  },
  {
    title: "Eventos e Invitaciones Web",
    description:
      "Aplicación web compartir invitaciones digitales interactivas con música, animaciones, contador y confirmación por WhatsApp.",
  },
  {
    title: "Simulador de Exámenes",
    description:
      "Aplicación web desarrollada en React, pensada para practicar exámenes desde cualquier dispositivo. Permite cargar bancos de preguntas, generar simulacros aleatorios y mostrar resultados finales.",
  },
  {
    title: "Web de Ventas de Celulares – SagerFix.Store",
    description:
      "Aplicación web de cotización y venta de celulares conectada en tiempo real con la lista de precios de mi proveedor y el valor del dólar blue.",
  },
  {
    title: "La Beba Padel Club",
    description:
      "Plataforma web integral para la gestión de turnos, ranking de jugadores, torneos y noticias de un complejo de pádel.",
  },
  {
    title: "Chat Online",
    description:
      "Aplicación de chat en tiempo real utilizando Socket.io. Permite a los usuarios unirse a una sala de chat y enviar mensajes instantáneos.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export function BehindProjectsSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Detrás de cada proyecto</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Cada proyecto nació de un problema real. Aquí muestro cómo lo abordé, las soluciones que implementé y los
            aprendizajes que transformaron mi forma de desarrollar software.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {projectStories.map((story, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                borderColor: "var(--primary)",
                boxShadow: "0 15px 30px -10px rgba(34, 197, 94, 0.12)",
              }}
              className="group p-5 bg-card border border-border rounded-xl cursor-default transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-base font-semibold group-hover:text-primary transition-colors duration-300">
                  {story.title}
                </h3>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 mt-1" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{story.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
