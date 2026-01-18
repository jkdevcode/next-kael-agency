"use client"

import { motion } from "framer-motion"
import { Button } from "@heroui/button"
import { Image } from "@heroui/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-[1.1] tracking-tight"
            >
              Escala tu Negocio con <br /><span className="text-default-400 italic font-light">Soluciones Digitales</span> de Alto Impacto
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-default-500 mb-8 font-medium tracking-wide uppercase"
            >
              Nexus Digital Studio
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed max-w-2xl"
            >
              Transformamos ideas complejas en sistemas eficientes, escalables y orientados a resultados.
              Ayudamos a empresas y startups a dominar el entorno digital con tecnología de vanguardia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                as="a"
                href="#contact"
                color="default"
                size="lg"
                endContent={<ArrowRight className="h-4 w-4" />}
                className="px-8 font-bold"
              >
                Cotizar Proyecto
              </Button>
              <Button
                as="a"
                href="#services"
                variant="bordered"
                size="lg"
                className="px-8 border-default/50 text-foreground font-semibold"
              >
                Nuestros Servicios
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl transition-all duration-500 hover:bg-primary/30" />
              {/* UI Overlay decorations */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl z-20 hidden md:flex items-center justify-center p-4 shadow-xl">
                <div className="space-y-2 w-full">
                  <div className="h-2 w-full bg-primary/20 rounded" />
                  <div className="h-2 w-2/3 bg-primary/40 rounded" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-16 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl z-20 hidden md:flex items-center justify-center p-4 shadow-xl">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30" />
                  <div className="flex-1 space-y-1">
                    <div className="h-2 w-12 bg-primary/20 rounded" />
                    <div className="h-1.5 w-8 bg-muted rounded" />
                  </div>
                </div>
              </div>

              <Image
                isBlurred
                width={450}
                src="/professional-male-developer-portrait-dark-backgrou.jpg"
                alt="Nexus Digital Studio - Soluciones Digitales"
                className="object-cover opacity-90 rounded-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
