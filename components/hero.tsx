'use client'

import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="inline-block">
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Bem-vindo</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-light text-foreground tracking-tight leading-tight">
              <span className="block">Transforme seus</span>
              <span className="block">
                <span className="text-primary">ideias</span> em
              </span>
              <span className="block">projetos extraordinários</span>
            </h1>

            <div className="flex lg:hidden justify-center">
              <img
                src="/hero-directors.jpg"
                alt="Sócios Diretores"
                className="w-40 sm:w-48 h-auto object-cover rounded-sm"
              />
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Arquitetura, engenharia e consultoria especializadas para residencial, comercial e interiores.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a
                href="https://wa.me/5581998592749"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Iniciar Projeto
              </a>
              <Link
                href="#servicos"
                className="px-8 py-4 border border-primary text-primary font-medium tracking-wide hover:bg-primary/10 transition-colors"
              >
                Conhecer Serviços
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-center lg:col-span-1">
            <img
              src="/hero-directors.jpg"
              alt="Sócios Diretores"
              className="w-full max-w-xs h-auto object-cover rounded-sm"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  )
}
