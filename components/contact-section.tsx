"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { appColor } from "@/config/theme"

const contactInfo = [
  {
    icon: "solar:letter-linear",
    label: "Email",
    value: "nexuslandungstudio@gmail.com",
    href: "mailto:nexuslandungstudio@gmail.com",
  },
  {
    icon: "solar:phone-calling-linear",
    label: "Teléfono",
    value: "+57 (1) 1234-5678",
    href: "tel:+57112345678",
  },
  {
    icon: "solar:map-point-linear",
    label: "Ubicación",
    value: "Bogotá, Colombia",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: "mdi:instagram",
    label: "Instagram",
    href: "https://www.instagram.com/nexus__.landingstudio?igsh=MWFzd3Y4ZGxid3loMQ",
    color: "text-[#e4405f]",
    // hoverBg: "hover:bg-[#e4405f]/10",
    // borderColor: "hover:border-[#e4405f]/30"
  },
  {
    icon: "mdi:whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/5712345678",
    color: "text-[#25d366]",
    // hoverBg: "hover:bg-[#25d366]/10",
    // borderColor: "hover:border-[#25d366]/30"
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">

      {/* Dynamic Background (Same as Hero) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neutral-200 dark:bg-neutral-800/20 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >

            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-neutral-900 dark:text-white">
              Hablemos de tu proyecto.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty max-w-2xl mx-auto">
              ¿Listo para llevar tu negocio al siguiente nivel? Estamos aquí para ayudarte a construir soluciones digitales excepcionales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
