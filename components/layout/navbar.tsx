
"use client";

import React from "react";
import {
    Navbar as HeroNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { navMenuItems } from "@/data/navigation";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
        <HeroNavbar
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="xl"
            isBordered
            className="bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-neutral-200 dark:border-white/5"
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-foreground",
                ],
            }}
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-neutral-900 dark:text-white"
                />
                <NavbarBrand>
                    <Link href="#" className="flex items-center gap-2 group text-inherit">
                        <div className="w-6 h-6 bg-black dark:bg-white rounded-sm flex items-center justify-center text-white dark:text-black transition-colors duration-500">
                            <Icon icon="solar:infinity-linear" width="16" />
                        </div>
                        <span className="text-neutral-900 dark:text-white font-medium tracking-tighter text-lg transition-colors duration-500">
                            NEXUS
                        </span>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                {navMenuItems.map((item, index) => (
                    <NavbarItem key={`${item.label}-${index}`}>
                        <Link
                            href={item.href}
                            className="text-sm font-light text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end" className="gap-4">
                <NavbarItem>
                    <ThemeSwitch />
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Button
                        as={Link}
                        href="#"
                        variant="light"
                        className="text-sm font-medium text-neutral-900 dark:text-white bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 rounded-full px-6 transition-all group"
                        endContent={
                            <Icon
                                icon="solar:arrow-right-linear"
                                className="group-hover:translate-x-0.5 transition-transform"
                            />
                        }
                    >
                        Contact
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md pt-6">
                {navMenuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            className="w-full text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white text-3xl font-light py-4"
                            href={item.href}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem className="pt-8">
                    <Button
                        as={Link}
                        href="#"
                        fullWidth
                        className="text-white dark:text-black bg-neutral-900 dark:bg-white text-lg font-medium py-6 rounded-full"
                        endContent={<Icon icon="solar:arrow-right-linear" />}
                    >
                        Contact
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </HeroNavbar>
    )
}
