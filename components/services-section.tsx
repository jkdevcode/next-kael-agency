"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

const services = [
  {
    icon: "solar:scissors-linear",
    title: "Barberías y Salones",
    description: "Sistemas de reserva y galerías visuales que llenan tu agenda.",
  },
  {
    icon: "solar:cup-linear",
    title: "Cafeterías",
    description: "Menús digitales y presencia local para atraer más comensales.",
  },
  {
    icon: "solar:heart-pulse-linear",
    title: "Salud",
    description: "Sitios web profesionales que transmiten confianza y seguridad.",
  },
  {
    icon: "solar:shop-linear",
    title: "Negocios Locales",
    description: "Estrategias digitales para posicionarte en tu zona.",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-white dark:bg-[#050505] transition-colors duration-500 border-t border-neutral-100 dark:border-neutral-900 overflow-hidden">

      {/* Background Elements (Same as Hero) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Adjusted blob position for this section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-200 dark:bg-neutral-800/10 blur-[120px] rounded-full opacity-40" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4 text-neutral-900 dark:text-white">
            ¿Para quién es esto?
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            Diseñamos soluciones digitales específicas para tu industria.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <div className="group p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 h-full backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-neutral-100 dark:border-neutral-700">
                  <Icon icon={service.icon} className="text-neutral-800 dark:text-white" width="24" />
                </div>
                <h3 className="text-base font-medium mb-2 text-neutral-900 dark:text-white">{service.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
