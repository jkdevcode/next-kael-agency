"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "walter.sager@gmail.com",
    href: "mailto:walter.sager@gmail.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 9 3482 414077",
    href: "tel:+5493482414077",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Santa Fe, Argentina",
  },
]

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/5493482414077" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-muted-foreground">Disponible para nuevas oportunidades laborales</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-primary transition-colors duration-200">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Redes Sociales</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, borderColor: "var(--primary)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary/10 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
              borderColor: "var(--primary)",
              boxShadow: "0 20px 40px -15px rgba(34, 197, 94, 0.15)",
            }}
            className="bg-card border border-border rounded-xl p-6 transition-all duration-300 h-fit"
          >
            <h3 className="text-xl font-semibold mb-3">¿Tienes un proyecto en mente?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Estoy disponible para proyectos freelance y oportunidades de colaboración. Hablemos sobre cómo puedo
              ayudarte.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button asChild className="w-full group">
                <a href="mailto:walter.sager@gmail.com" className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Enviar Email
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
