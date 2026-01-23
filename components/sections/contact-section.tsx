
"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { contactInfo, socialLinks } from "@/data/contact";
import { slideUp, staggerContainer, scaleIn } from "@/lib/animations";

export function ContactSection() {
    return (
        <section id="contact" className="relative py-32 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
            <BackgroundGrid />
            {/* Additional glow for contact section as requested in original design, kept subtle via BackgroundGrid or added here if critical. 
          Assuming BackgroundGrid + standard blobs removal. Keeping one specific subtle glow if needed, but per strict rules, mostly relying on BG grid. 
          However, Contact had a big center blur. I will simplify to just BG Grid for consistency, or add a very subtle one. 
          Let's stick to BackgroundGrid to be "Clean" and "No decorative JSX inside sections" as much as possible. 
      */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neutral-200 dark:bg-neutral-800/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

            <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-neutral-900 dark:text-white">
                            Hablemos de tu proyecto.
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed text-pretty max-w-2xl mx-auto">
                            ¿Listo para llevar tu negocio al siguiente nivel? Estamos aquí para ayudarte a construir soluciones digitales excepcionales.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-6 mb-16"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {contactInfo.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                variants={slideUp}
                                whileHover={{ y: -5 }}
                                className="group relative p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300 shadow-sm hover:shadow-xl"
                            >
                                <div className="w-14 h-14 mx-auto mb-6 bg-neutral-100 dark:bg-neutral-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Icon icon={item.icon} className="w-7 h-7 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">{item.label}</h3>
                                <p className="text-sm font-medium text-neutral-900 dark:text-white">{item.value}</p>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center gap-6"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-3 px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-900 transition-all shadow-sm hover:shadow-md"
                            >
                                <Icon icon={social.icon} className={`w-6 h-6 ${social.color} transition-transform`} />
                                <span className="font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">{social.label}</span>
                            </motion.a>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
