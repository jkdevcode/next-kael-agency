
"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { WhyUsVisual } from "@/components/ui/why-us-visual";
import { whyUsBenefits } from "@/data/why-us";
import { staggerContainer, slideUp } from "@/lib/animations";

export function WhyUsSection() {
    return (
        <section className="relative py-24 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
            <BackgroundGrid />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        className="flex-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2
                            className="text-3xl lg:text-4xl font-medium tracking-tight mb-6 text-neutral-900 dark:text-white"
                            variants={slideUp}
                        >
                            ¿Por qué elegirnos?
                        </motion.h2>
                        <motion.p
                            className="text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed"
                            variants={slideUp}
                        >
                            En un mar de agencias genéricas, nos enfocamos en ser el socio estratégico que realmente entiende las necesidades de un negocio moderno.
                        </motion.p>

                        <ul className="space-y-4">
                            {whyUsBenefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start gap-3"
                                    variants={slideUp}
                                >
                                    <Icon icon="solar:check-circle-linear" className="text-emerald-500 mt-1" width="20" />
                                    <span className="text-neutral-700 dark:text-neutral-300">{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Content */}
                    <WhyUsVisual />

                </div>
            </div>
        </section>
    )
}
