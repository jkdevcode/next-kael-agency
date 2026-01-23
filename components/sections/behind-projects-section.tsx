"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionItem } from "@heroui/accordion"
import {Divider} from "@heroui/divider";
import { AlertCircle, CheckCircle2, Lightbulb } from "lucide-react"
/* import { cn } from "@/lib/utils" */

const projectStories = [
  {
    title: "Blade & Grain Premium",
    description:
      "Ecosistema digital de alta gama que integra una landing page de conversión con un robusto motor de gestión interna desarrollado para Programación IV (UTN).",
    problem:
      "La gestión manual de turnos generaba ineficiencias operativas y una experiencia de usuario fragmentada.",
    solution: [
      "Arquitectura moderna con Next.js 16 y Tailwind v4 para una interfaz ultra rápida y estética de lujo.",
      "Backend escalable en NestJS con TypeORM y autenticación JWT para una gestión de datos segura.",
      "Flujo de reserva optimizado con validación de horarios en tiempo real y notificaciones vía WhatsApp.",
      "API totalmente documentada con Swagger, garantizando un sistema profesional y mantenible.",
    ],
    learnings: [
      "Implementación de animaciones con Framer Motion para elevar la percepción de calidad del producto.",
      "Diseño modular orientado a responsabilidades (Clean Architecture) y control de versiones profesional.",
      "Uso de guards de seguridad y validaciones estrictas para proteger la integridad del sistema.",
    ],
    color: "primary",
  },
  {
    title: "Vibras E-commerce Suite",
    description:
      "Infraestructura de comercio electrónico de alto rendimiento diseñada para escalar marcas de indumentaria mediante una experiencia de compra fluida.",
    problem:
      "Necesidad de centralizar la gestión de stock y mejorar la velocidad de carga para reducir el abandono de carritos.",
    solution: [
      "Uso de Vite 6 y React 19 para garantizar una navegación instantánea y una experiencia de usuario reactiva.",
      "Integración de animaciones avanzadas y carga diferida (Lazy Loading) para maximizar el impacto visual sin sacrificar velocidad.",
      "Panel de control intuitivo para actualización masiva de productos y gestión centralizada de pedidos.",
      "Estrategia de conversión: diseño optimizado para completar el checkout en la menor cantidad de pasos posible.",
    ],
    learnings: [
      "Optimización avanzada de recursos (WebP/AVIF) y técnicas de SEO técnico para mejorar el posicionamiento.",
      "Manejo de estados complejos para carritos de compra y flujos de recuperación de usuarios.",
      "Arquitectura de componentes reutilizables para facilitar la evolución estética de la plataforma.",
    ],
    color: "secondary",
  },
  {
    title: "Booking Hub Pro",
    description:
      "Plataforma SaaS de gestión de reservas crítica, diseñada bajo el concepto de 'Confianza Tranquila' para servicios profesionales.",
    problem:
      "Pérdidas económicas por cancelaciones y falta de automatización en la gestión de citas de alto volumen.",
    solution: [
      "Interfaz construida con HeroUI siguiendo estándares estrictos de accesibilidad WAI-ARIA.",
      "Sistema de depósitos de seguridad para asegurar el compromiso del cliente y eliminar pérdidas financieras.",
      "Dashboard analítico que transforma datos operativos en métricas clave para la toma de decisiones.",
      "Optimización de rendimiento mediante Server Components, reduciendo el JS en el cliente para mayor agilidad.",
    ],
    learnings: [
      "Implementación de esquemas JSON-LD para optimizar el SEO local y la visibilidad en buscadores.",
      "Manejo de concurrencia en tiempo real para evitar conflictos de horarios en entornos de alta demanda.",
      "Enfoque Mobile-First absoluto, asegurando que la gestión del negocio sea perfecta desde cualquier smartphone.",
    ],
    color: "danger",
  }
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
                 /*  startContent={<div className={cn("md:w-1.5 w-0.5 h-12 rounded-full transition-colors", theme.bullet)} />} */
                >
                  <div className="pt-4 pb-6 space-y-8 px-2">
                  <Divider orientation="vertical" />
                    {/* Problema */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                       {/*  <div className={cn("flex items-center justify-center w-9 h-9 rounded-lg border transition-all", theme.ring, theme.bg, theme.icon)}>
                          <AlertCircle className="w-5 h-5" />
                        </div> */}
                        <h4 className="font-bold text-foreground text-lg md:text-xl">El Desafío</h4>
                      </div>
                      <p className="text-default-500 leading-relaxed pl-13 text-sm/7 md:text-base/7 font-medium">{story.problem}</p>
                    </div>

                    {/* Solución */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                       {/*  <div className={cn("flex items-center justify-center w-9 h-9 rounded-lg border transition-all", theme.ring, theme.bg, theme.icon)}>
                          <CheckCircle2 className="w-5 h-5" />
                        </div> */}
                        <h4 className="font-bold text-foreground  text-lg md:text-xl">La Estrategia</h4>
                      </div>
                      <ul className="pl-12 space-y-2">
                        {story.solution.map((item, i) => (
                          <li key={i} className="flex gap-3 text-default-500 text-sm/7 md:text-base/7 font-medium">
                            {/* <span className={cn("mt-2 w-1.5 h-1.5 rounded-full shrink-0", theme.bullet)} />
                            <span>{item}</span> */}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Qué aprendí */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        {/* <div className={cn("flex items-center justify-center w-9 h-9 rounded-lg border transition-all", theme.ring, theme.bg, theme.icon)}>
                          <Lightbulb className="w-5 h-5" />
                        </div> */}
                        <h4 className="font-bold text-foreground  text-lg md:text-xl">Impacto Logrado</h4>
                      </div>
                      <ul className="pl-12 space-y-2">
                     {/*    {story.learnings.map((item, i) => (
                          <li key={i} className="flex gap-3 text-default-500 text-sm/7 md:text-base/7 font-medium">
                            <span className={cn("mt-2 w-1.5 h-1.5 rounded-full shrink-0", theme.bullet)} />
                            <span>{item}</span>
                          </li>
                        ))} */}
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
