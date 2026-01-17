"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, AlertCircle, CheckCircle2, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

const projectStories = [
  {
    title: "Sistema para Barberías",
    description:
      "Proyecto final desarrollado en grupo para la materia Programación IV (UTN). Consiste en una aplicación web modular que gestiona reservas, servicios y confirmaciones de clientes.",
    problem:
      "Los turnos en barberías suelen gestionarse por WhatsApp o de forma manual, generando confusión y pérdida de tiempo. Este sistema automatiza ese proceso y mejora la organización del negocio.",
    solution: [
      "Desarrollé el backend con NestJS, TypeORM y JWT para la autenticación del panel administrativo.",
      "Implementamos un flujo de reservas en 4 pasos con validación de horarios y comunicación por WhatsApp.",
      "Diseñamos un panel de administración para gestionar servicios, turnos y control de asistencia de clientes.",
      "Incluimos documentación de toda la API utilizando Swagger, facilitando las pruebas y la comprensión del backend.",
      "El sistema fue pensado desde su planificación con potencial para escalar a un servicio SaaS adaptable a distintos rubros.",
    ],
    learnings: [
      "Trabajo colaborativo con control de versiones en Git y división de módulos por responsabilidades.",
      "Diseño modular del backend en NestJS con buenas prácticas, validaciones y documentación clara.",
      "Integración entre frontend y backend usando Axios y guards JWT.",
      "Diseño de interfaces Responsivas con Tailwind y enfoque UX.",
    ],
    color: "bg-blue-500",
  },
  {
    title: "Web Vibras",
    description:
      "E-commerce profesional para una marca de indumentaria. Incluye catálogo de productos, carrito, checkout y panel de gestión para los administradores.",
    problem:
      "La marca necesitaba una plataforma robusta para escalar sus ventas online y centralizar la gestión de stock que antes se hacía de forma dispersa.",
    solution: [
      "Arquitectura de microservicios ligera para separar el catálogo de la gestión de pedidos.",
      "Pasarela de pagos integrada con notificaciones instantáneas.",
      "Panel de control intuitivo para la actualización masiva de productos y descuentos.",
    ],
    learnings: [
      "Optimización de imágenes y carga diferida para mejorar el SEO y performance.",
      "Implementación de flujos de recuperación de carritos abandonados.",
      "Escalabilidad de bases de datos relacionales en entornos de alta demanda.",
    ],
    color: "bg-neutral-200",
  },
]

const contentVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.25, delay: 0.1 },
    },
  },
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
}

export function BehindProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestra Metodología</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed text-pretty">
            Cada solución exitosa nace de entender profundamente el desafío. Así es como en Nexus Digital Studio abordamos cada proyecto,
            superando obstáculos y entregando valor tangible a través de la tecnología.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-4">
          {projectStories.map((story, index) => {
            const isExpanded = expandedIndex === index
            return (
              <motion.div
                key={index}
                initial={false}
                className={cn(
                  "border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300",
                  isExpanded ? "bg-card/40" : "bg-card/20 hover:bg-card/30"
                )}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left p-6 md:p-8 flex items-start gap-4 focus:outline-none"
                >
                  <div className={cn("w-1.5 self-stretch rounded-full mt-1.5 mb-1.5", story.color)} />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{story.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
                      {story.description}
                    </p>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 text-muted-foreground transition-transform duration-500 mt-1",
                      isExpanded && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="px-6 md:px-8 pb-8"
                    >
                      <div className="pt-4 space-y-8">
                        {/* Problema */}
                        <motion.div variants={itemVariants} className="space-y-4">
                          <div className="flex items-center gap-2 text-primary/80">
                            <AlertCircle className="w-5 h-5" />
                            <h4 className="font-bold uppercase tracking-wider text-sm">Problema</h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed pl-7">{story.problem}</p>
                        </motion.div>

                        {/* Solución */}
                        <motion.div variants={itemVariants} className="space-y-4">
                          <div className="flex items-center gap-2 text-primary/80">
                            <CheckCircle2 className="w-5 h-5" />
                            <h4 className="font-bold uppercase tracking-wider text-sm">Solución</h4>
                          </div>
                          <motion.ul variants={listVariants} className="pl-7 space-y-3">
                            {story.solution.map((item, i) => (
                              <motion.li key={i} variants={itemVariants} className="flex gap-2 text-muted-foreground">
                                <span className="text-primary mt-1">•</span>
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </motion.div>

                        {/* Qué aprendí */}
                        <motion.div variants={itemVariants} className="space-y-4">
                          <div className="flex items-center gap-2 text-primary/80">
                            <Lightbulb className="w-5 h-5" />
                            <h4 className="font-bold uppercase tracking-wider text-sm">Qué aprendí</h4>
                          </div>
                          <motion.ul variants={listVariants} className="pl-7 space-y-3">
                            {story.learnings.map((item, i) => (
                              <motion.li key={i} variants={itemVariants} className="flex gap-2 text-muted-foreground">
                                <span className="text-primary mt-1">•</span>
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
