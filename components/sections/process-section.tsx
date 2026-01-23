
"use client";

import { motion } from "framer-motion";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { processSteps } from "@/data/process-steps";
import { slideUp, staggerContainer } from "@/lib/animations";

export function ProcessSection() {
    return (
        <section className="relative py-24 bg-neutral-50/50 dark:bg-neutral-900/20 border-y border-neutral-100 dark:border-neutral-900 overflow-hidden">
            <BackgroundGrid />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideUp}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4 text-neutral-900 dark:text-white">
                        Cómo trabajamos
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400">
                        Un proceso simplificado en 4 pasos.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) - Kept as structural UI, not generic enough for UI folder yet */}
                    <div className="absolute top-8 left-0 w-full h-px bg-neutral-200 dark:bg-neutral-800 hidden md:block" />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-12"
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={slideUp}
                                className="relative"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-lg font-semibold mb-6 relative z-10 mx-auto md:mx-0 shadow-sm text-neutral-900 dark:text-white">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-medium mb-2 text-center md:text-left text-neutral-900 dark:text-white">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center md:text-left">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
