"use client"

import { motion } from "framer-motion"
import { Card, CardBody, CardFooter } from "@heroui/card"
import { Image } from "@heroui/image"
import { Button } from "@heroui/button"
import { Chip } from "@heroui/chip"
import { ExternalLink } from "lucide-react"

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
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card
        isHoverable
        isPressable
        className="bg-card border border-border h-full overflow-hidden group transition-all duration-300"
      >
        <CardBody className="p-0 relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width="100%"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            radius="none"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 z-10" />
          {/* Hover overlay with neutral tint */}
          <div className="absolute inset-0 bg-default-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        </CardBody>

        <CardBody className="p-6 flex-grow">
          <h3 className="text-xl font-bold mb-3 group-hover:text-default-500 transition-colors duration-300 leading-tight">{title}</h3>
          <p className="text-sm text-default-500 mb-6 line-clamp-3 leading-relaxed font-medium">{description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.slice(0, 5).map((tag) => (
              <Chip
                key={tag}
                size="sm"
                variant="flat"
                color="default"
                className="text-[10px] font-bold uppercase tracking-wider bg-default-100"
              >
                {tag}
              </Chip>
            ))}
          </div>
        </CardBody>

        {link && (
          <CardFooter className="px-6 pb-6 pt-0">
            <Button
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="flat"
              color="default"
              size="md"
              fullWidth
              endContent={<ExternalLink className="h-4 w-4" />}
              className="bg-default-100 font-bold hover:bg-default-200"
            >
              Ver Proyecto
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  )
}
