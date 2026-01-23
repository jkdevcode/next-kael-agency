
"use client";

import { motion } from "framer-motion";

export function WhyUsVisual() {
    return (
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
    );
}
