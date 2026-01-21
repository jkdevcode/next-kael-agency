"use client"

import { motion } from "framer-motion"
import { Button } from "@heroui/button"
import { Image } from "@heroui/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center pt-32 pb-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-[100px]" />
      </div>

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
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-400 to-zinc-500"
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
              className="text-lg md:text-xl text-zinc-400 mb-10 text-pretty leading-relaxed max-w-2xl"
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
                color="primary"
                size="lg"
                variant="shadow"
                endContent={<ArrowRight className="h-4 w-4" />}
                className="px-8 font-bold shadow-primary/40"
              >
                Cotizar Proyecto
              </Button>
              <Button
                as="a"
                href="#services"
                variant="bordered"
                size="lg"
                className="px-8 border-default/50 text-white font-semibold hover:bg-white/5"
              >
                Nuestros Servicios
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <motion.div
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Scanning Effect Overlay */}
              <motion.div
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1
                }}
                className="absolute left-0 right-0 h-1 bg-cyan-500/50 blur-sm z-30 pointer-events-none"
                style={{ boxShadow: "0 0 20px 2px rgba(6,182,212,0.5)" }}
              />
              <div className="absolute inset-0 z-30 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none opacity-50" />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl transition-all duration-500 hover:bg-primary/30" />

              {/* Image Container with Border */}
              <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-zinc-900/50">
                <Image
                  isBlurred
                  width={450}
                  src="/professional-male-developer-portrait-dark-backgrou.jpg"
                  alt="Nexus Digital Studio - Soluciones Digitales"
                  className="object-cover opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                />

                {/* Digital Particles Simulation (CSS based dots) */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
              </div>

            </motion.div>

            {/* Floating Elements (Decorations) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-xl z-20 hidden md:flex items-center justify-center p-4 shadow-xl"
            >
              <div className="space-y-2 w-full">
                <div className="h-2 w-full bg-cyan-500/20 rounded animate-pulse" />
                <div className="h-2 w-2/3 bg-cyan-500/40 rounded" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 w-32 h-16 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-xl z-20 hidden md:flex items-center justify-center p-4 shadow-xl"
            >
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="h-2 w-12 bg-zinc-700/50 rounded" />
                  <div className="h-1.5 w-8 bg-zinc-800 rounded" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
