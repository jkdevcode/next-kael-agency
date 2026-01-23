
"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { projects } from "@/data/projects";
import { ProjectVisuals } from "@/components/ui/project-visuals";
import { slideUp, staggerContainer } from "@/lib/animations";

export function ProjectsSection() {
    return (
        <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-100 dark:border-neutral-900 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <motion.div
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-2 text-neutral-900 dark:text-white">Proyectos destacados</h2>
                    <p className="text-neutral-500 dark:text-neutral-400">Casos de uso reales y resultados medibles.</p>
                </motion.div>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={slideUp}
                        className="group cursor-pointer"
                    >
                        <div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-6">
                            {ProjectVisuals[project.id as keyof typeof ProjectVisuals]}
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
            </motion.div>
        </section>
    )
}
