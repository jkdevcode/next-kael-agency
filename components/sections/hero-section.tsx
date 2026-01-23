
"use client";

import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { appColor } from "@/config/theme";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { HeroVisual } from "@/components/ui/hero-visual";
import { slideUp, fadeIn } from "@/lib/animations";

export function HeroSection() {
    return (
        <section id="hero" className="relative min-h-[calc(100vh-50px)] flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
            <BackgroundGrid />

            {/* Additional Glow for Hero - keeping strictly visual but simple */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neutral-200 dark:bg-neutral-800/20 blur-[120px] rounded-full opacity-50 z-0 pointer-events-none" />

            <div className="container relative z-10 px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 mb-8 backdrop-blur-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-medium tracking-wide text-neutral-600 dark:text-neutral-400 uppercase">
                                Disponible para proyectos
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]"
                        >
                            Transformamos <br />
                            <span className="text-neutral-400 dark:text-neutral-500">ideas complejas en</span> <br />
                            productos digitales.
                        </motion.h1>

                        <motion.p
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.2 }}
                            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed"
                        >
                            Ayudamos a marcas ambiciosas a destacar con diseño de clase mundial y desarrollo web de alto rendimiento. Sin burocracia, solo resultados.
                        </motion.p>

                        <motion.div
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <Button
                                size="lg"
                                color={appColor}
                                className="font-medium px-8 h-12"
                                endContent={<Icon icon="solar:arrow-right-linear" width={18} />}
                            >
                                Iniciar proyecto
                            </Button>
                            <Button
                                size="lg"
                                variant="bordered"
                                className="border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 font-medium px-8 h-12 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                            >
                                Explorar trabajo
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Content */}
                    <HeroVisual />

                </div>
            </div>
        </section>
    );
}
