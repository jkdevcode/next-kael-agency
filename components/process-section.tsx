"use client"

import { motion } from "framer-motion"

const steps = [
    {
        number: "1",
        title: "Entender",
        description: "Analizamos tu negocio y definimos objetivos claros.",
    },
    {
        number: "2",
        title: "Diseñar",
        description: "Creamos una interfaz visual atractiva y funcional.",
    },
    {
        number: "3",
        title: "Desarrollar",
        description: "Construimos con foco en velocidad y móviles.",
    },
    {
        number: "4",
        title: "Lanzar",
        description: "Publicamos, medimos y optimizamos.",
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

export function ProcessSection() {
    return (
        <section className="relative py-24 bg-neutral-50/50 dark:bg-neutral-900/20 border-y border-neutral-100 dark:border-neutral-900 overflow-hidden">

            {/* Background Elements (Subtle) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4 text-neutral-900 dark:text-white">Cómo trabajamos</h2>
                    <p className="text-neutral-500 dark:text-neutral-400">Un proceso simplificado en 4 pasos.</p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-8 left-0 w-full h-px bg-neutral-200 dark:bg-neutral-800 hidden md:block" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-12"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-lg font-semibold mb-6 relative z-10 mx-auto md:mx-0 shadow-sm text-neutral-900 dark:text-white">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-medium mb-2 text-center md:text-left text-neutral-900 dark:text-white">{step.title}</h3>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center md:text-left">{step.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
