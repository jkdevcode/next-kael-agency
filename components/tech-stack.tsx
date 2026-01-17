"use client"

import { motion } from "framer-motion"

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "HTML5",
  "CSS3",
  "Git",
  "GitHub",
  "Node.js",
  "NestJS",
  "Express",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Linux",
  "AWS",
  "Socket.io",
  "Swagger",
  "REST API",
  "Google Sheets API",
]

const duplicatedTech = [...technologies, ...technologies, ...technologies]

export function TechStack() {
  return (
    <section id="tech" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stack Tecnológico</h2>
          <p className="text-muted-foreground">Tecnologías con las que trabajo</p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* First row - scrolling left */}
        <div className="flex">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex gap-4 py-3"
          >
            {duplicatedTech.map((tech, index) => (
              <motion.div
                key={`row1-${index}`}
                whileHover={{ scale: 1.08, borderColor: "var(--primary)" }}
                className="flex-shrink-0 px-5 py-2.5 bg-card border border-border rounded-lg cursor-default transition-colors duration-200"
              >
                <span className="text-foreground font-medium whitespace-nowrap text-sm">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second row - scrolling right (opposite direction) */}
        <div className="flex mt-4">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex gap-4 py-3"
          >
            {duplicatedTech.map((tech, index) => (
              <motion.div
                key={`row2-${index}`}
                whileHover={{ scale: 1.08, borderColor: "var(--primary)" }}
                className="flex-shrink-0 px-5 py-2.5 bg-card border border-border rounded-lg cursor-default transition-colors duration-200"
              >
                <span className="text-foreground font-medium whitespace-nowrap text-sm">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
