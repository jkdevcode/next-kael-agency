"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-t border-border/50"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">©{new Date().getFullYear()} Walter Sager</p>
      </div>
    </motion.footer>
  )
}
