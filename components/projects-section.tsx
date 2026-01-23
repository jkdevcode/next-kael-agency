"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

const projects = [
  {
    title: "The Classic Cut",
    category: "Sitio de marca premium",
    visual: (
      <div className="absolute inset-4 bg-neutral-900 rounded-xl flex flex-col overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
        <div className="h-12 border-b border-neutral-800 flex items-center px-4 justify-between">
          <div className="w-20 h-2 bg-neutral-700 rounded-full"></div>
          <div className="flex gap-2">
            <div className="w-16 h-6 bg-amber-600 rounded text-[8px] flex items-center justify-center text-white">RESERVAR</div>
          </div>
        </div>
        <div className="flex-1 p-6 flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-full border border-amber-600/30 flex items-center justify-center mb-4">
            <Icon icon="solar:scissors-linear" className="text-amber-500 w-6 h-6" />
          </div>
          <div className="w-32 h-3 bg-neutral-700 rounded-full mb-2"></div>
          <div className="w-24 h-2 bg-neutral-800 rounded-full"></div>
        </div>
      </div>
    ),
  },
  {
    title: "Mokha Specialty",
    category: "Landing moderna y cálida",
    visual: (
      <div className="absolute inset-4 bg-[#F5F5F0] rounded-xl flex flex-col overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
        <div className="h-32 bg-orange-100 relative">
          <div className="absolute bottom-4 left-4 w-24 h-6 bg-white rounded-md shadow-sm"></div>
        </div>
        <div className="p-4 space-y-2">
          <div className="w-full h-2 bg-neutral-200 rounded-full"></div>
          <div className="w-2/3 h-2 bg-neutral-200 rounded-full"></div>
        </div>
      </div>
    ),
  },
  {
    title: "Clínica Vital",
    category: "Diseño limpio y profesional",
    visual: (
      <div className="absolute inset-4 bg-white rounded-xl flex flex-col overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 border border-neutral-100">
        <div className="flex h-full">
          <div className="w-16 border-r border-neutral-50 bg-neutral-50/50 flex flex-col items-center pt-4 gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600">
              <Icon icon="solar:heart-pulse-linear" width="16" />
            </div>
          </div>
          <div className="flex-1 p-4">
            <div className="w-20 h-4 bg-neutral-100 rounded mb-4"></div>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square rounded bg-neutral-50"></div>
              <div className="aspect-square rounded bg-neutral-50"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

export function ProjectsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-100 dark:border-neutral-900">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-2 text-neutral-900 dark:text-white">Proyectos destacados</h2>
          <p className="text-neutral-500 dark:text-neutral-400">Casos de uso reales y resultados medibles.</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-6">
              {project.visual}
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-neutral-500">{project.category}</p>
              </div>
              <div className="w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                <Icon icon="solar:arrow-right-linear" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
