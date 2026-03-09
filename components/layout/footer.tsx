
"use client";

import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
import { KaelIcon } from "@/components/icons/icons";
import { motion } from "framer-motion";
import { footerLinks } from "@/data/navigation";
import { socialLinks } from "@/data/contact";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-[#050505] pt-20 pb-10 transition-colors duration-500">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group cursor-pointer text-inherit">
                            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                                <KaelIcon size={16} />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-neutral-900 dark:text-white group-hover:opacity-80 transition-opacity">
                                Kael
                            </span>
                        </Link>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-8 max-w-xs">
                            Transformamos ideas en experiencias digitales excepcionales. Diseño y desarrollo web de alto impacto.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white transition-all"
                                    aria-label={social.label}
                                >
                                    <Icon icon={social.icon} className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold text-neutral-900 dark:text-white mb-6">Servicios</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-neutral-900 dark:text-white mb-6">Compañía</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-neutral-900 dark:text-white mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-neutral-200 dark:border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
                    <p>© {currentYear} Kael Agency. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
