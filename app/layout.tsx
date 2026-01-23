import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "./providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
    title: "Nexus Digital Studio - Soluciones Digitales de Alto Impacto",
    description: "Transformamos ideas complejas en sistemas eficientes, escalables y orientados a resultados.",
    icons: {
        icon: "/Nexus-logo (1).webp",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es" className={`${inter.variable} ${geistMono.variable} light`}>
            <body className="antialiased font-sans">
                <Providers>
                    {children}
                </Providers>
                <Analytics />
            </body>
        </html>
    )
}
