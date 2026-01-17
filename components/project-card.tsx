"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.15)",
      }}
      transition={{ duration: 0.3 }}
      className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/60 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
        {/* Hover overlay with green tint */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.slice(0, 5).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-primary/10 text-primary/90 hover:bg-primary/20 border-0 font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {link && (
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="w-full bg-transparent border-primary/40 hover:bg-primary/10 hover:border-primary group/btn"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                Visitar
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
