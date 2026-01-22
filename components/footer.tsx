"use client"

import { Link } from "@heroui/link"
import { Icon } from "@iconify/react"

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-950 pt-16 pb-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 bg-neutral-900 dark:bg-white rounded-full"></div>
              <span className="font-medium tracking-tight text-sm text-neutral-900 dark:text-white">STUDIO</span>
            </div>
            <p className="text-sm text-neutral-500 max-w-xs">
              Diseño digital y desarrollo web para negocios que buscan destacar en la era moderna.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-sm font-medium mb-4 text-neutral-900 dark:text-white">Servicios</h4>
              <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                <li><Link href="#" className="text-inherit hover:text-neutral-900 dark:hover:text-white transition-colors">Diseño Web</Link></li>
                <li><Link href="#" className="text-inherit hover:text-neutral-900 dark:hover:text-white transition-colors">Desarrollo</Link></li>
                <li><Link href="#" className="text-inherit hover:text-neutral-900 dark:hover:text-white transition-colors">SEO Local</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4 text-neutral-900 dark:text-white">Social</h4>
              <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                <li><Link href="#" className="text-inherit hover:text-neutral-900 dark:hover:text-white transition-colors">Twitter</Link></li>
                <li><Link href="#" className="text-inherit hover:text-neutral-900 dark:hover:text-white transition-colors">Instagram</Link></li>
                <li><Link href="#" className="text-inherit hover:text-neutral-900 dark:hover:text-white transition-colors">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200 dark:border-neutral-900 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Digital Studio. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-inherit hover:text-neutral-900 dark:hover:text-white">Privacidad</Link>
            <Link href="#" className="text-inherit hover:text-neutral-900 dark:hover:text-white">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
