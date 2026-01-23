
"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export function HeroVisual() {
    return (
        <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="flex-1 w-full relative"
        >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                {/* Card 1 */}
                <div className="absolute top-0 right-0 w-3/4 aspect-[4/3] bg-white/5 backdrop-blur-md dark:bg-neutral-900/40 rounded-2xl p-4 shadow-2xl transform translate-x-4 translate-y-4 lg:translate-y-0 z-10 border border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/3 space-y-3">
                            <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                            <div className="h-2 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                            <div className="h-24 w-full bg-neutral-100 dark:bg-neutral-800/50 rounded-lg mt-4"></div>
                        </div>
                        <div className="w-2/3 bg-neutral-100 dark:bg-neutral-900 rounded-lg h-32 flex items-center justify-center border border-dashed border-neutral-300 dark:border-neutral-700">
                            <div className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center">
                                <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-600 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 (Background) */}
                <div className="absolute bottom-8 left-0 w-3/4 aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-4 opacity-50 transform -translate-x-4 scale-95 -z-10 border border-neutral-200 dark:border-neutral-800"></div>
            </div>
        </motion.div>
    );
}
