"use client"

import { motion } from "framer-motion"
import { Code2, Server, Sparkles, Wrench } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web Full Stack",
    description:
      "Creo aplicaciones web completas desde cero, con interfaces intuitivas y backends robustos que escalan con tu negocio.",
  },
  {
    icon: Server,
    title: "APIs y Arquitecturas",
    description:
      "Diseño e implemento arquitecturas escalables y APIs REST que optimizan procesos y conectan sistemas de manera eficiente.",
  },
  {
    icon: Sparkles,
    title: "Experiencias Interactivas",
    description:
      "Desarrollo interfaces modernas con animaciones fluidas que mejoran la experiencia del usuario y hacen destacar tu producto.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y Optimización",
    description:
      "Mejoro y mantengo aplicaciones existentes, optimizando rendimiento, seguridad y agregando nuevas funcionalidades.",
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
    <section id="services" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Soluciones que ofrezco</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Transformo ideas en productos digitales funcionales, escalables y centrados en el usuario. Mi enfoque
            combina tecnología moderna con mejores prácticas para entregar soluciones reales.
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
              whileHover={{
                y: -8,
                borderColor: "var(--primary)",
                boxShadow: "0 20px 40px -15px rgba(34, 197, 94, 0.15)",
              }}
              className="group p-6 bg-card border border-border rounded-xl transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
