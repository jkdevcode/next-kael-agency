"use client"

import { Button } from "@heroui/button"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { appColor } from "@/config/theme"

export function HeroSection() {
  const colorClasses: Record<string, string> = {
    default: "bg-default text-default-foreground",
    primary: "bg-primary text-white shadow-primary/40",
    secondary: "bg-secondary text-white shadow-secondary/40",
    success: "bg-success text-white shadow-success/40",
    warning: "bg-warning text-black shadow-warning/40",
    danger: "bg-danger text-white shadow-danger/40",
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neutral-200 dark:bg-neutral-800/20 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-neutral-600 dark:text-neutral-400 uppercase">
                Disponible para proyectos
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]"
            >
              Transformamos <br />
              <span className="text-neutral-400 dark:text-neutral-500">ideas complejas en</span> <br />
              productos digitales.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed"
            >
              Ayudamos a marcas ambiciosas a destacar con diseño de clase mundial y desarrollo web de alto rendimiento. Sin burocracia, solo resultados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                color={appColor}
                className={`font-medium px-8 h-12 ${colorClasses[appColor] || ""}`}
                endContent={<Icon icon="solar:arrow-right-linear" width={18} />}
              >
                Iniciar proyecto
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 font-medium px-8 h-12 hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                Explorar trabajo
              </Button>
            </motion.div>
          </div>

          {/* Right Content: Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
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

        </div>
      </div>
    </section>
  )
}
