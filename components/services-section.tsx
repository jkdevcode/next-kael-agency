"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardBody } from "@heroui/card"
import { Code2, Server, Sparkles, Wrench } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web de Alto Rendimiento",
    description:
      "Construimos plataformas rápidas, seguras y escalables diseñadas para convertir visitantes en clientes y soportar el crecimiento de tu negocio.",
  },
  {
    icon: Server,
    title: "Sistemas y APIs a Medida",
    description:
      "Optimizamos tu infraestructura digital con backends robustos e integraciones que centralizan tu operación y eliminan fricciones innecesarias.",
  },
  {
    icon: Sparkles,
    title: "Experiencias de Usuario (UX/UI)",
    description:
      "Diseñamos interfaces intuitivas que no solo sorprenden visualmente, sino que están estratégicamente pensadas para facilitar la interacción y el éxito del usuario.",
  },
  {
    icon: Wrench,
    title: "Automatización de Procesos",
    description:
      "Transformamos tareas manuales en flujos automáticos inteligentes, permitiendo que tu equipo se enfoque en actividades que generen valor real.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-default-50/5">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Soluciones que Impulsan tu Negocio</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-pretty">
            En Nexus Digital Studio combinamos estrategia de negocio con tecnología de punta para entregar productos digitales
            que generan un impacto real en tu rentabilidad.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card
                isHoverable
                isPressable
                className="bg-card h-full border border-white/10 group transition-all duration-300 hover:bg-white/5"
              >
                <CardHeader className="flex gap-3 px-6 pt-6 pb-2">
                  <div className="w-12 h-12 bg-default-100 rounded-lg flex items-center justify-center group-hover:bg-default-200 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                    <service.icon className="w-6 h-6 text-foreground/80" />
                  </div>
                </CardHeader>
                <CardBody className="px-6 pb-6">
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
