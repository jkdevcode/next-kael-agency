
"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "@heroui/link";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { solutions } from "@/data/solutions";
import { staggerContainer, slideUp } from "@/lib/animations";

export function SolutionsSection() {
    return (
        <section className="relative py-24 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
            <BackgroundGrid />

            <div className="container relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Text Content */}
                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        whileInView="visible"
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
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                variants={slideUp}
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
