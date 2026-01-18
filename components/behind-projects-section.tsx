"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionItem } from "@heroui/accordion"
import {Divider} from "@heroui/divider";
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
    color: "primary", // HeroUI Primary (Blue)
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
    color: "secondary", // HeroUI Secondary (Purple/Pink depending on theme)
  },
  {
    title: "Booking Hub Pro",
    description:
      "SaaS de gestión de reservas para centros deportivos de alto rendimiento. Optimización de horarios y gestión de membresías.",
    problem:
      "Los centros deportivos perdían hasta un 30% de ingresos por cancelaciones de último minuto y falta de automatización en pagos.",
    solution: [
      "Sistema de prepago obligatorio mediante Stripe para asegurar la reserva.",
      "Algoritmo de optimización de canchas que reduce tiempos muertos en un 25%.",
      "API de notificaciones push para recordatorios y promociones personalizadas.",
    ],
    learnings: [
      "Manejo de estados complejos y concurrencia en reservas en tiempo real.",
      "Implementación de dashboards analíticos para dueños de negocios.",
      "Seguridad avanzada en transacciones financieras integradas.",
    ],
    color: "danger", // HeroUI Warning (Yellow/Orange)
  },
]

export function BehindProjectsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Nuestra Metodología</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-pretty font-medium">
            Cada solución exitosa nace de entender profundamente el desafío. Así es como en Nexus Digital Studio abordamos cada proyecto,
            superando obstáculos y entregando valor tangible a través de la tecnología.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Accordion variant="splitted" selectionMode="single">
            {projectStories.map((story, index) => {
              // Precise color mapping for accents and icon containers
              const colorConfig: Record<string, { ring: string; bg: string; icon: string; bullet: string }> = {
                primary: { ring: "border-primary/30", bg: "bg-primary/10", icon: "text-primary", bullet: "bg-primary" },
                secondary: { ring: "border-secondary/30", bg: "bg-secondary/10", icon: "text-secondary", bullet: "bg-secondary" },
                warning: { ring: "border-warning/30", bg: "bg-warning/10", icon: "text-warning", bullet: "bg-warning" },
                danger: { ring: "border-danger/30", bg: "bg-danger/10", icon: "text-danger", bullet: "bg-danger" },
                success: { ring: "border-success/30", bg: "bg-success/10", icon: "text-success", bullet: "bg-success" },
                default: { ring: "border-default-300", bg: "bg-default-100", icon: "text-default-500", bullet: "bg-default-300" },
              }

              const theme = colorConfig[story.color as keyof typeof colorConfig] || colorConfig.default

              return (
                <AccordionItem
                  key={index}
                  aria-label={story.title}
                  className="group border border-white/5 bg-default-50/5 hover:bg-default-100/10 data-[open=true]:bg-default-100/10 rounded-xl mb-2 p-4 last:mb-0 shadow-none"
                  title={<span className="text-2xl font-bold text-foreground transition-colors block mb-2">{story.title}</span>}
                  subtitle={<span className="leading-relaxed text-sm/6 md:text-base/6 block mt-1">{story.description}</span>}
                  startContent={<div className={cn("md:w-1.5 w-0.5 h-12 rounded-full transition-colors", theme.bullet)} />}
                >
                  <div className="pt-4 pb-6 space-y-8 px-2">
                  <Divider orientation="vertical" />
                    {/* Problema */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={cn("flex items-center justify-center w-9 h-9 rounded-lg border transition-all", theme.ring, theme.bg, theme.icon)}>
                          <AlertCircle className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-foreground text-lg md:text-xl">El Desafío</h4>
                      </div>
                      <p className="text-default-500 leading-relaxed pl-13 text-sm/7 md:text-base/7 font-medium">{story.problem}</p>
                    </div>

                    {/* Solución */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={cn("flex items-center justify-center w-9 h-9 rounded-lg border transition-all", theme.ring, theme.bg, theme.icon)}>
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-foreground  text-lg md:text-xl">La Estrategia</h4>
                      </div>
                      <ul className="pl-12 space-y-2">
                        {story.solution.map((item, i) => (
                          <li key={i} className="flex gap-3 text-default-500 text-sm/7 md:text-base/7 font-medium">
                            <span className={cn("mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0", theme.bullet)} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Qué aprendí */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={cn("flex items-center justify-center w-9 h-9 rounded-lg border transition-all", theme.ring, theme.bg, theme.icon)}>
                          <Lightbulb className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-foreground  text-lg md:text-xl">Impacto Logrado</h4>
                      </div>
                      <ul className="pl-12 space-y-2">
                        {story.learnings.map((item, i) => (
                          <li key={i} className="flex gap-3 text-default-500 text-sm/7 md:text-base/7 font-medium">
                            <span className={cn("mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0", theme.bullet)} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
