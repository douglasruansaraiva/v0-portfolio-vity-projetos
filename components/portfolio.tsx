"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Instagram, Mail, Phone, ArrowDown, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

interface Section {
  id: string
  title: string
  subtitle: string
  isHighlight?: boolean
  content: {
    description: string
    items?: string[]
    gallery?: {
      type: "image" | "video"
      src: string
      alt?: string
      poster?: string
    }[]
  }
}

const quemSomos = {
  description: "A Vity Projetos e Consultoria nasceu da paixão por transformar ideias em realidade. Com uma equipe de profissionais altamente qualificados, oferecemos soluções completas em engenharia, desde a concepção do projeto até a execução final.",
  values: [
    "Equipe Especializada",
    "Compromisso com Qualidade",
    "Atendimento Personalizado",
    "Inovação e Tecnologia",
    "Transparência Total",
    "Prazo e Confiança"
  ]
}

const sections: Section[] = [
  {
    id: "casarao",
    title: "CASARÃO",
    subtitle: "Projeto em destaque",
    isHighlight: true,
    content: {
      description: "O Casarão é um dos nossos projetos mais emblemáticos, representando a união perfeita entre tradição e modernidade. Este projeto especial demonstra nossa capacidade de trabalhar com construções históricas, preservando sua essência enquanto agregamos conforto e funcionalidade contemporâneos.",
      items: [
        "Restauração Histórica",
        "Projeto Arquitetônico Completo",
        "Modernização de Instalações",
        "Valorização do Patrimônio"
      ],
      gallery: [
        { type: "image", src: "/casarao/foto-1.jpg", alt: "Casarão - Fachada Principal" },
        { type: "image", src: "/casarao/foto-2.jpg", alt: "Casarão - Interior" },
        { type: "image", src: "/casarao/foto-3.jpg", alt: "Casarão - Detalhes" },
        { type: "video", src: "/casarao/video-1.mp4", poster: "/casarao/video-poster.jpg" }
      ]
    }
  },
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
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setActiveMediaIndex(0)
  }

  const closeSection = () => {
    setActiveSection(null)
  }

  const scrollToSections = () => {
    document.getElementById("sections")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section - Full Screen with Large Logo + Quem Somos */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">
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

        {/* Main Logo - Large and Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex flex-col items-center gap-6"
        >
          <Image
            src="/logo-vity.png"
            alt="Vity Engenharia e Consultoria"
            width={600}
            height={170}
            className="h-auto w-[300px] brightness-0 invert md:w-[450px] lg:w-[550px]"
            priority
          />
        </motion.div>

        {/* Quem Somos - Below Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 mt-12 max-w-3xl text-center md:mt-16"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-foreground/30 md:w-12" />
              <h2 className="text-xs font-light tracking-[0.4em] text-foreground/60 md:text-sm">
                QUEM SOMOS
              </h2>
              <div className="h-px w-8 bg-foreground/30 md:w-12" />
            </div>
            
            <p className="text-base font-light leading-relaxed text-foreground/80 md:text-lg lg:text-xl">
              {quemSomos.description}
            </p>

            {/* Values Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {quemSomos.values.map((value, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  className="border border-foreground/10 px-4 py-3 text-xs font-light tracking-wider text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground md:text-sm"
                >
                  {value}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


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
            className={`group relative cursor-pointer border-b border-foreground/10 transition-all duration-500 ${
              section.isHighlight ? "bg-[#1A3D5C]/30" : ""
            }`}
            onClick={() => handleSectionClick(section.id)}
            whileHover={{ backgroundColor: section.isHighlight ? "rgba(26, 61, 92, 0.5)" : "rgba(26, 61, 92, 0.2)" }}
          >
            {section.isHighlight && (
              <div className="absolute right-6 top-6 md:right-16">
                <span className="text-[10px] font-light tracking-[0.3em] text-foreground/40 border border-foreground/20 px-3 py-1">
                  DESTAQUE
                </span>
              </div>
            )}
            <div className="flex min-h-[200px] items-center justify-between px-6 py-12 md:min-h-[250px] md:px-16 lg:px-24">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-light tracking-[0.3em] text-foreground/40">
                  0{index + 1}
                </span>
                <h3 className={`font-light tracking-[0.2em] ${
                  section.isHighlight 
                    ? "text-4xl md:text-6xl lg:text-7xl" 
                    : "text-3xl md:text-5xl lg:text-6xl"
                }`}>
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

                    {/* Gallery for Casarão */}
                    {section.content.gallery && section.content.gallery.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6 pt-8"
                      >
                        <h4 className="text-xs font-light tracking-[0.3em] text-foreground/50">
                          GALERIA DO PROJETO
                        </h4>
                        
                        {/* Main Display */}
                        <div className="relative aspect-video w-full overflow-hidden bg-secondary/30">
                          {section.content.gallery[activeMediaIndex].type === "video" ? (
                            <div className="relative h-full w-full">
                              <video
                                src={section.content.gallery[activeMediaIndex].src}
                                poster={section.content.gallery[activeMediaIndex].poster}
                                controls
                                className="h-full w-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="relative h-full w-full flex items-center justify-center">
                              <div className="text-center text-foreground/40">
                                <p className="text-sm tracking-wider">
                                  {section.content.gallery[activeMediaIndex].alt}
                                </p>
                                <p className="mt-2 text-xs">Adicione suas fotos aqui</p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-3 overflow-x-auto pb-2">
                          {section.content.gallery.map((media, i) => (
                            <button
                              key={i}
                              onClick={(e) => {
                                e.stopPropagation()
                                setActiveMediaIndex(i)
                              }}
                              className={`relative flex-shrink-0 h-20 w-28 overflow-hidden border-2 transition-all ${
                                activeMediaIndex === i 
                                  ? "border-foreground" 
                                  : "border-foreground/20 hover:border-foreground/50"
                              }`}
                            >
                              {media.type === "video" ? (
                                <div className="flex h-full w-full items-center justify-center bg-secondary/50">
                                  <Play className="h-6 w-6 text-foreground/60" />
                                </div>
                              ) : (
                                <div className="flex h-full w-full items-center justify-center bg-secondary/30">
                                  <span className="text-[10px] text-foreground/40">IMG {i + 1}</span>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>

                        <p className="text-xs font-light text-foreground/40">
                          * Adicione suas fotos e vídeos na pasta /public/casarao/
                        </p>
                      </motion.div>
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
