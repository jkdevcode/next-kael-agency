"use client"

import React from "react"
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar"
import { Link } from "@heroui/link"
import { motion } from "framer-motion"

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#tech", label: "Tecnología" },
  { href: "#services", label: "Servicios" },
  { href: "#projects", label: "Casos de Éxito" },
  { href: "#contact", label: "Contacto" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <HeroNavbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      isBordered
      className="bg-background/90 backdrop-blur-md"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="#home"
              className="text-lg font-bold text-primary"
            >
              Nexus Digital Studio
            </Link>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.href}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-background/95 backdrop-blur-md">
        {navLinks.map((link, index) => (
          <NavbarMenuItem key={`${link.href}-${index}`}>
            <Link
              className="w-full text-muted-foreground hover:text-primary py-2 text-lg"
              href={link.href}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  )
}
