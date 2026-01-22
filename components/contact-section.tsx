"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@heroui/button"
import { Input, Textarea } from "@heroui/input"
import { Card, CardBody } from "@heroui/card"

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
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "text-[#0077b5]" },
  { icon: Instagram, label: "Instagram", href: "#", color: "text-[#e4405f]" },
  { icon: MessageCircle, label: "WhatsApp", href: "#", color: "text-[#25d366]" },
]
export const MailIcon = (props: any) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const MessageIcon = (props: any) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M8.5 19H8C4 19 2 17 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
        fill="currentColor"
      />
    </svg>
  );
};

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar el formulario
    console.log({
      name,
      email,
      company,
      message
    });

    // Resetear el formulario después de enviar
    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Impulsa tu Próximo Gran Proyecto</h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed text-pretty">
                Estamos listos para transformar tus desafíos en soluciones digitales de primer nivel.
                Contáctanos y descubre cómo potenciar tu negocio.
              </p>

              <div className="space-y-8 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-14 h-14 bg-default-100 rounded-2xl flex items-center justify-center group-hover:bg-default-200 transition-colors">
                      <item.icon className="w-6 h-6 text-foreground/70" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-default-400 mb-1">{item.label}</p>
                      <p className="text-lg font-medium text-foreground group-hover:text-default-500 transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -5, backgroundColor: "rgba(var(--heroui-default-100), 0.8)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center w-20 h-20 bg-default-50 border border-default-100 rounded-2xl transition-all group"
                  >
                    <div className={`mb-2 transition-transform group-hover:scale-110 duration-300 ${social.color}`}>
                      <social.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black text-foreground tracking-tight">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
             {/*  <Card className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 p-6 md:p-10 shadow-2xl">
                <CardBody>
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Nombre"
                        placeholder="Tu nombre completo"
                        variant="bordered"
                        radius="lg"
                        size="lg"
                        className="font-medium"
                        classNames={{ inputWrapper: "border-white/20 hover:border-white/40 bg-white/5" }}
                        value={name}
                        onValueChange={setName}
                      />
                      <Input
                        isRequired
                        endContent={
                          <MailIcon className="text-2xl text-default-400 pointer-events-none shrink-0" />
                        }
                        label="Correo electrónico"
                        name="email"
                        placeholder="tu@email.com"
                        type="email"
                        value={email}
                        variant="bordered"
                        radius="lg"
                        classNames={{ inputWrapper: "border-white/20 hover:border-white/40 bg-white/5" }}
                        onValueChange={setEmail}
                      />
                    </div>
                    <Input
                      label="Empresa / Proyecto"
                      placeholder="Nombre de tu negocio"
                      variant="bordered"
                      radius="lg"
                      size="lg"
                      className="font-medium"
                      classNames={{ inputWrapper: "border-white/20 hover:border-white/40 bg-white/5" }}
                      value={company}
                      onValueChange={setCompany}
                    />
                    <Textarea
                      disableAnimation
                      disableAutosize
                      isRequired
                      classNames={{
                        base: "max-w-xl",
                        input: "resize-y min-h-[80px]",
                        inputWrapper: "border-white/20 hover:border-white/40 bg-white/5"
                      }}
                      endContent={
                        <MessageIcon className="text-2xl text-default-400 pointer-events-none shrink-0" />
                      }
                      label="Mensaje"
                      minRows={4}
                      name="message"
                      placeholder="Escribe tu mensaje aquí..."
                      value={message}
                      variant="bordered"
                      radius="lg"
                      onValueChange={setMessage}
                    />
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      fullWidth
                      radius="lg"
                      isLoading={isLoading}
                      className="font-bold text-lg h-16 shadow-lg shadow-primary/20"
                      endContent={!isLoading && <ArrowRight className="h-5 w-5" />}
                    >
                      {isLoading ? "Enviando..." : "Enviar Mensaje"}
                    </Button>
                    <p className="text-center text-sm text-zinc-500 mt-4 font-medium tracking-wide">
                      Te responderemos en menos de 24 horas hábiles.
                    </p>
                  </form>
                </CardBody>
              </Card> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
