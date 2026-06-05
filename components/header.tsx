'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v-fundo%20azul-p4jLroPwhQiglLEiUbFa7TkGlqCERz.png"
              alt="VITY"
              className="w-10 h-10"
            />
            <span className="text-lg font-light tracking-widest text-foreground hidden sm:block">VITY</span>
          </Link>

          <nav className="hidden lg:flex gap-12 text-sm">
          </nav>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a
            href="https://wa.me/5581998592749"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block border border-primary text-primary px-8 py-3 text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition duration-300"
          >
            Iniciar Projeto
          </a>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden pb-6 flex flex-col gap-4 text-sm">
            <a
              href="https://wa.me/5581998592749"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-6 py-2 text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition text-center mt-2"
            >
              Iniciar Projeto
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
