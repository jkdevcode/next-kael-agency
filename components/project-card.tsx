"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardBody, CardFooter } from "@heroui/card"
import { Image } from "@heroui/image"
import { Button } from "@heroui/button"
import { Chip } from "@heroui/chip"
import { Skeleton } from "@heroui/skeleton"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card
        isHoverable
        isPressable
        className="bg-zinc-900 border border-white/10 h-[450px] overflow-hidden group transition-all duration-300 relative"
      >
        {/* Full background image */}
        <div className="absolute inset-0 z-0">
          <Skeleton isLoaded={isLoaded} className="w-full h-full rounded-none">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width="100%"
              height="100%"
              onLoad={() => setIsLoaded(true)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              style={{ height: '100%', width: '100%' }}
              radius="none"
            />
          </Skeleton>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

        <CardBody className="relative z-20 h-full flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.slice(0, 3).map((tag) => (
                <Chip
                  key={tag}
                  size="sm"
                  variant="dot"
                  color="primary"
                  className="bg-black/50 border border-white/10 text-xs"
                >
                  {tag}
                </Chip>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>

            <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                {description}
              </p>
              {link && (
                <Button
                  as="a"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="shadow"
                  color="primary"
                  size="sm"
                  endContent={<ExternalLink className="h-3 w-3" />}
                  className="font-bold shadow-primary/20"
                >
                  Ver Proyecto
                </Button>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  )
}
