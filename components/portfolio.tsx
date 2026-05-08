"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Instagram, Mail, Phone, MapPin, ArrowDown, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Section {
  id: string
  title: string
  subtitle: string
  content: {
    description: string
    items?: string[]
  }
}

const sections: Section[] = [
  {
    id: "projetos",
    title: "PROJETOS",
    subtitle: "Soluções técnicas completas",
    content: {
      description: "Desenvolvemos projetos completos com excelência técnica e atenção aos detalhes, garantindo a viabilidade e segurança de cada empreendimento.",
      items: [
        "Projeto Arquitetônico",
        "Projeto Estrutural",
        "Projeto Elétrico",
        "Projeto Hidrossanitário",
        "Projeto de Climatização",
        "Projeto de Combate a Incêndio"
      ]
    }
  },
  {
    id: "consultoria",
    title: "CONSULTORIA",
    subtitle: "Expertise para seu negócio",
    content: {
      description: "Oferecemos consultoria especializada para garantir o sucesso do seu empreendimento, com análises técnicas detalhadas e soluções personalizadas.",
      items: [
        "Análise de Viabilidade",
        "Gestão de Obras",
        "Laudos Técnicos",
        "Perícias de Engenharia",
        "Assessoria Técnica"
      ]
    }
  },
  {
    id: "regularizacao",
    title: "REGULARIZAÇÃO",
    subtitle: "Documentação em ordem",
    content: {
      description: "Regularize sua obra ou imóvel com segurança e agilidade. Cuidamos de toda a burocracia para você.",
      items: [
        "Habite-se",
        "Regularização de Imóveis",
        "Aprovação de Projetos",
        "Licenciamento Ambiental",
        "Certidões e Alvarás"
      ]
    }
  },
  {
    id: "obras",
    title: "OBRAS",
    subtitle: "Execução com qualidade",
    content: {
      description: "Execução de obras com qualidade, prazo e compromisso. Do planejamento à entrega final.",
      items: [
        "Construção Residencial",
        "Construção Comercial",
        "Reformas",
        "Ampliações",
        "Manutenção Predial"
      ]
    }
  }
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
  }

  const closeSection = () => {
    setActiveSection(null)
  }

  const scrollToSections = () => {
    document.getElementById("sections")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section - Full Screen with Large Logo */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 100px,
              rgba(232, 228, 222, 0.1) 100px,
              rgba(232, 228, 222, 0.1) 101px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 100px,
              rgba(232, 228, 222, 0.1) 100px,
              rgba(232, 228, 222, 0.1) 101px
            )`
          }} />
        </div>

        {/* Main Logo - Large and Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex flex-col items-center gap-8"
        >
          <Image
            src="/logo-vity.png"
            alt="Vity Engenharia e Consultoria"
            width={500}
            height={140}
            className="h-auto w-[280px] brightness-0 invert md:w-[400px] lg:w-[500px]"
            priority
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="h-px w-24 bg-foreground/30" />
            <p className="text-sm font-light tracking-[0.4em] text-foreground/70 md:text-base">
              ENGENHARIA & CONSULTORIA
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={scrollToSections}
          className="absolute bottom-12 flex flex-col items-center gap-2 text-foreground/50 transition-colors hover:text-foreground"
        >
          <span className="text-xs font-light tracking-[0.3em]">EXPLORAR</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.button>

        {/* Instagram Link - Top Right */}
        <a
          href="https://www.instagram.com/vityprojetos_/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-6 top-6 flex items-center gap-2 text-foreground/60 transition-colors hover:text-foreground md:right-12 md:top-12"
        >
          <Instagram className="h-5 w-5" />
          <span className="hidden text-sm font-light tracking-wider md:inline">@vityprojetos_</span>
        </a>
      </section>

      {/* Sections */}
      <div id="sections" className="relative">
        {/* Section Intro */}
        <div className="border-b border-foreground/10 bg-secondary/20 px-6 py-16 text-center md:py-20">
          <h2 className="text-xs font-light tracking-[0.5em] text-foreground/60 md:text-sm">
            NOSSOS SERVIÇOS
          </h2>
        </div>

        {/* Layered Sections */}
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            className="group relative cursor-pointer border-b border-foreground/10 transition-all duration-500"
            onClick={() => handleSectionClick(section.id)}
            whileHover={{ backgroundColor: "rgba(26, 61, 92, 0.2)" }}
          >
            <div className="flex min-h-[200px] items-center justify-between px-6 py-12 md:min-h-[250px] md:px-16 lg:px-24">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-light tracking-[0.3em] text-foreground/40">
                  0{index + 1}
                </span>
                <h3 className="text-3xl font-light tracking-[0.2em] md:text-5xl lg:text-6xl">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm font-light tracking-wider text-foreground/60 md:text-base">
                  {section.subtitle}
                </p>
              </div>
              <ChevronRight className="h-8 w-8 text-foreground/30 transition-all duration-300 group-hover:translate-x-2 group-hover:text-foreground/60 md:h-10 md:w-10" />
            </div>
          </motion.section>
        ))}

        {/* Contact Section */}
        <section className="relative border-b border-foreground/10 bg-secondary/10">
          <div className="flex min-h-[400px] flex-col items-center justify-center gap-8 px-6 py-20 text-center md:py-24">
            <h3 className="text-xs font-light tracking-[0.5em] text-foreground/60">
              ENTRE EM CONTATO
            </h3>
            <h2 className="text-3xl font-light tracking-[0.15em] md:text-5xl">
              VAMOS CONVERSAR?
            </h2>
            
            <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:gap-12">
              <a
                href="https://www.instagram.com/vityprojetos_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 transition-colors hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm font-light tracking-wider">@vityprojetos_</span>
              </a>
              <a
                href="mailto:contato@vityprojetos.com.br"
                className="flex items-center gap-3 text-foreground/70 transition-colors hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm font-light tracking-wider">contato@vityprojetos.com.br</span>
              </a>
              <a
                href="tel:+5500000000000"
                className="flex items-center gap-3 text-foreground/70 transition-colors hover:text-foreground"
              >
                <Phone className="h-5 w-5" />
                <span className="text-sm font-light tracking-wider">(00) 00000-0000</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-center gap-6 px-6 py-16 text-center">
        <Image
          src="/logo-vity-icon.png"
          alt="Vity"
          width={80}
          height={80}
          className="h-16 w-16 object-contain md:h-20 md:w-20"
        />
        <div className="flex flex-col gap-2">
          <p className="text-sm font-light tracking-[0.2em] text-foreground/60">
            VITY PROJETOS E CONSULTORIA
          </p>
          <p className="text-xs font-light tracking-wider text-foreground/40">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Expanded Section Modal */}
      <AnimatePresence>
        {activeSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-background"
          >
            {/* Close Button */}
            <button
              onClick={closeSection}
              className="fixed right-6 top-6 z-50 p-2 text-foreground/60 transition-colors hover:text-foreground md:right-12 md:top-12"
              aria-label="Fechar"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Back to top logo */}
            <div className="fixed left-6 top-6 md:left-12 md:top-12">
              <Image
                src="/logo-vity.png"
                alt="Vity"
                width={120}
                height={34}
                className="h-auto w-24 brightness-0 invert opacity-60 md:w-32"
              />
            </div>

            {sections.map((section) => {
              if (section.id !== activeSection) return null

              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-16 lg:px-24"
                >
                  <div className="mx-auto w-full max-w-4xl space-y-12">
                    {/* Section Header */}
                    <div className="space-y-4">
                      <span className="text-xs font-light tracking-[0.3em] text-foreground/40">
                        0{sections.findIndex(s => s.id === section.id) + 1}
                      </span>
                      <h2 className="text-4xl font-light tracking-[0.2em] md:text-6xl lg:text-7xl">
                        {section.title}
                      </h2>
                      <p className="text-base font-light tracking-wider text-foreground/60 md:text-lg">
                        {section.subtitle}
                      </p>
                    </div>
                    
                    {/* Divider */}
                    <div className="h-px w-full bg-foreground/10" />
                    
                    {/* Description */}
                    <p className="max-w-2xl text-lg font-light leading-relaxed text-foreground/80 md:text-xl">
                      {section.content.description}
                    </p>

                    {/* Items Grid */}
                    {section.content.items && section.content.items.length > 0 && (
                      <ul className="grid gap-4 pt-4 md:grid-cols-2 md:gap-6">
                        {section.content.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                            className="flex items-center gap-4 border-l-2 border-foreground/20 py-3 pl-6 text-base font-light tracking-wide transition-colors hover:border-foreground/60 md:text-lg"
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {/* CTA */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="pt-8"
                    >
                      <a
                        href="https://www.instagram.com/vityprojetos_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 text-sm font-light tracking-[0.2em] transition-all hover:border-foreground hover:bg-foreground hover:text-background"
                      >
                        SOLICITAR ORÇAMENTO
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
