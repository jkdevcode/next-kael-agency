"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@heroui/button"
import { Input, Textarea } from "@heroui/input"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contacto@nexusstudio.com",
    href: "mailto:contacto@nexusstudio.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 (11) 1234-5678",
    href: "tel:+541112345678",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Buenos Aires, Argentina",
    href: "#",
  },
]

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Impulsa tu Próximo Gran Proyecto</h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed text-pretty">
                Estamos listos para transformar tus desafíos en soluciones digitales de primer nivel.
                Contáctanos y descubre cómo potenciar tu negocio.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-default-100 rounded-xl flex items-center justify-center group-hover:bg-default-200 transition-colors">
                      <item.icon className="w-5 h-5 text-foreground/70" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-default-100 rounded-lg flex items-center justify-center hover:bg-default-200 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-foreground/70" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-border shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Nombre Completo"
                    placeholder="Tu nombre"
                    labelPlacement="outside"
                    variant="bordered"
                    className="group"
                  />
                  <Input
                    label="Correo Electrónico"
                    placeholder="ejemplo@correo.com"
                    type="email"
                    labelPlacement="outside"
                    variant="bordered"
                  />
                </div>
                <Input
                  label="Empresa / Proyecto"
                  placeholder="Nombre de tu negocio"
                  labelPlacement="outside"
                  variant="bordered"
                />
                <Textarea
                  label="Mensaje"
                  placeholder="¿En qué podemos ayudarte?"
                  labelPlacement="outside"
                  variant="bordered"
                  minRows={4}
                />
                <Button
                  /* type="submit" */
                  color="default"
                  /* size="lg"
                  fullWidth
                  className="font-bold text-base"
                  endContent={<ArrowRight className="h-5 w-5" />} */
                >
                  Enviar Mensaje
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Te responderemos en menos de 24 horas hábiles.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
