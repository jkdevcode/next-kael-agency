"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { Link } from "@heroui/link"

const solutions = [
    {
        icon: "solar:rocket-2-linear",
        title: "Landing Pages de Conversión",
        description: "Estructuras persuasivas optimizadas para campañas publicitarias.",
    },
    {
        icon: "solar:bolt-linear",
        title: "Webs Ultra Rápidas",
        description: "Carga instantánea para mejorar el SEO y retener usuarios.",
    },
    {
        icon: "solar:smartphone-linear",
        title: "Mobile First",
        description: "Diseño pensado principalmente para la experiencia en teléfonos.",
    },
    {
        icon: "solar:magic-stick-3-linear",
        title: "Branding Digital",
        description: "Interacciones sutiles que elevan el valor percibido de tu marca.",
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

export function SolutionsSection() {
    return (
        <section className="relative py-24 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">

            {/* Background Elements (Same as Hero) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full opacity-40 mix-blend-multiply dark:mix-blend-normal" />
            </div>

            <div className="container relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6 text-neutral-900 dark:text-white">
                            Soluciones que impulsan tu negocio.
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 mb-8 font-light">
                            No vendemos código, vendemos crecimiento. Nuestras herramientas están diseñadas para convertir visitas en clientes reales.
                        </p>
                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white border-b border-transparent hover:border-neutral-900 dark:hover:border-white transition-all pb-0.5"
                        >
                            Ver todos los servicios
                            <Icon icon="solar:arrow-right-up-linear" />
                        </Link>
                    </motion.div>

                    {/* Cards Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                            >
                                <div className="group p-6 rounded-xl bg-white/50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/50 hover:bg-neutral-50 dark:hover:bg-neutral-900/60 transition-colors backdrop-blur-sm h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <Icon icon={solution.icon} width="28" className="text-neutral-900 dark:text-white" />
                                    </div>
                                    <h4 className="text-lg font-medium mb-2 text-neutral-900 dark:text-white">{solution.title}</h4>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{solution.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
