"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

const benefits = [
    "Enfoque 100% en resultados reales",
    "Comunicación clara, sin tecnicismos",
    "Entregas rápidas y optimizadas",
    "Diseño que te diferencia de la competencia",
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export function WhyUsSection() {
    return (
        <section className="relative py-24 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">

            {/* Background Elements (Same as Hero) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full opacity-40 mix-blend-multiply dark:mix-blend-normal" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        className="flex-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-3xl lg:text-4xl font-medium tracking-tight mb-6 text-neutral-900 dark:text-white"
                            variants={itemVariants}
                        >
                            ¿Por qué elegirnos?
                        </motion.h2>
                        <motion.p
                            className="text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed"
                            variants={itemVariants}
                        >
                            En un mar de agencias genéricas, nos enfocamos en ser el socio estratégico que realmente entiende las necesidades de un negocio moderno.
                        </motion.p>

                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start gap-3"
                                    variants={itemVariants}
                                >
                                    <Icon icon="solar:check-circle-linear" className="text-emerald-500 mt-1" width="20" />
                                    <span className="text-neutral-700 dark:text-neutral-300">{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Content: Stats Grid */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center p-6 text-center">
                                <span className="text-4xl font-semibold mb-2 text-neutral-900 dark:text-white">98<small className="text-xl">%</small></span>
                                <span className="text-xs text-neutral-500">Satisfacción de clientes</span>
                            </div>
                            <div className="aspect-square rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-black flex flex-col items-center justify-center p-6 text-center mt-8 shadow-2xl">
                                <span className="text-4xl font-semibold mb-2">2x</span>
                                <span className="text-xs opacity-80">Más conversiones</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
