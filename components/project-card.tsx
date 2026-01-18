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

        <CardBody className="p-5 flex-grow">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {tags.slice(0, 5).map((tag) => (
              <Chip
                key={tag}
                size="sm"
                variant="flat"
                color="default"
                className="text-xs font-medium"
              >
                {tag}
              </Chip>
            ))}
          </div>
        </CardBody>

        {link && (
          <CardFooter className="px-5 pb-5 pt-0">
            <Button
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="bordered"
              color="default"
              size="sm"
              fullWidth
              endContent={<ExternalLink className="h-4 w-4" />}
              className="border-default/40 hover:bg-default-100"
            >
              Visitar
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  )
}
