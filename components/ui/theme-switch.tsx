
"use client";

import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/button";

export function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Button
            isIconOnly
            variant="light"
            onClick={toggleTheme}
            className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Icon icon="solar:moon-linear" width={22} />
            ) : (
                <Icon icon="solar:sun-2-linear" width={22} />
            )}
        </Button>
    )
}
