"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionItem } from "@heroui/accordion"
import { AlertCircle, CheckCircle2, Lightbulb } from "lucide-react"
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
      "Diseño modular del backend en NextJS con buenas prácticas, validaciones y documentación clara.",
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

export function BehindProjectsSection() {
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

        <div className="max-w-5xl mx-auto">
          <Accordion variant="splitted" selectionMode="single">
            {projectStories.map((story, index) => (
              <AccordionItem
                key={index}
                aria-label={story.title}
                className="group border border-white/5 bg-card/20 hover:bg-card/30 data-[open=true]:bg-card/40 rounded-2xl mb-4"
                title={<span className="text-xl md:text-2xl font-bold">{story.title}</span>}
                subtitle={<span className="text-muted-foreground">{story.description}</span>}
                startContent={<div className={cn("w-1.5 h-12 rounded-full", story.color)} />}
              >
                <div className="pt-4 pb-4 space-y-8 px-2">
                  {/* Problema */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary/80">
                      <AlertCircle className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-wider text-xs">Problema</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-7">{story.problem}</p>
                  </div>

                  {/* Solución */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary/80">
                      <CheckCircle2 className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-wider text-xs">Solución</h4>
                    </div>
                    <ul className="pl-7 space-y-2">
                      {story.solution.map((item, i) => (
                        <li key={i} className="flex gap-2 text-muted-foreground text-sm md:text-base">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Qué aprendí */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary/80">
                      <Lightbulb className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-wider text-xs">Lo que logramos</h4>
                    </div>
                    <ul className="pl-7 space-y-2">
                      {story.learnings.map((item, i) => (
                        <li key={i} className="flex gap-2 text-muted-foreground text-sm md:text-base">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
