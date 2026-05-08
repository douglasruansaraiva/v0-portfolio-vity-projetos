"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

interface Section {
  id: string
  title: string
  content: {
    description: string
    items?: string[]
    images?: string[]
  }
}

const sections: Section[] = [
  {
    id: "projetos",
    title: "PROJETOS",
    content: {
      description: "Desenvolvemos projetos completos com excelência técnica e atenção aos detalhes.",
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
    content: {
      description: "Oferecemos consultoria especializada para garantir o sucesso do seu empreendimento.",
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
    content: {
      description: "Regularize sua obra ou imóvel com segurança e agilidade.",
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
    content: {
      description: "Execução de obras com qualidade, prazo e compromisso.",
      items: [
        "Construção Residencial",
        "Construção Comercial",
        "Reformas",
        "Ampliações",
        "Manutenção Predial"
      ]
    }
  },
  {
    id: "contato",
    title: "CONTATO",
    content: {
      description: "Entre em contato conosco para tirar suas dúvidas ou solicitar um orçamento.",
      items: []
    }
  }
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
  }

  const closeSection = () => {
    setActiveSection(null)
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-vity.png"
            alt="Vity Projetos e Consultoria"
            width={180}
            height={50}
            className="h-10 w-auto brightness-0 invert"
            priority
          />
        </div>
        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2 transition-opacity hover:opacity-70"
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/98 backdrop-blur-sm"
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  handleSectionClick(section.id)
                  setMenuOpen(false)
                }}
                className="text-2xl font-light tracking-widest text-foreground transition-opacity hover:opacity-70"
              >
                {section.title}
              </button>
            ))}
            <a
              href="https://www.instagram.com/vityprojetos_/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-2 text-sm font-light tracking-wider text-muted-foreground transition-opacity hover:opacity-70"
            >
              <Instagram className="h-5 w-5" />
              @vityprojetos_
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Sections Stack */}
      <div className="relative">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            className="relative flex min-h-[25vh] cursor-pointer items-center justify-center border-b border-border/30 transition-colors hover:bg-secondary/30"
            style={{
              marginTop: index === 0 ? "80px" : 0
            }}
            onClick={() => handleSectionClick(section.id)}
            whileHover={{ backgroundColor: "rgba(21, 53, 84, 0.3)" }}
          >
            <h2 className="text-3xl font-light tracking-[0.3em] md:text-5xl lg:text-6xl">
              {section.title}
            </h2>
          </motion.section>
        ))}
      </div>

      {/* Expanded Section Modal */}
      <AnimatePresence>
        {activeSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/98 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative w-full max-w-4xl px-6 py-12 md:px-12"
            >
              <button
                onClick={closeSection}
                className="absolute right-6 top-0 p-2 text-foreground transition-opacity hover:opacity-70 md:right-12"
                aria-label="Fechar"
              >
                <X className="h-8 w-8" />
              </button>

              {sections.map((section) => {
                if (section.id !== activeSection) return null

                return (
                  <div key={section.id} className="space-y-8">
                    <h2 className="text-4xl font-light tracking-[0.3em] md:text-6xl">
                      {section.title}
                    </h2>
                    
                    <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                      {section.content.description}
                    </p>

                    {section.id === "contato" ? (
                      <div className="space-y-6 pt-4">
                        <a
                          href="https://www.instagram.com/vityprojetos_/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 text-lg transition-opacity hover:opacity-70"
                        >
                          <Instagram className="h-6 w-6" />
                          <span>@vityprojetos_</span>
                        </a>
                        <a
                          href="mailto:contato@vityprojetos.com.br"
                          className="flex items-center gap-4 text-lg transition-opacity hover:opacity-70"
                        >
                          <Mail className="h-6 w-6" />
                          <span>contato@vityprojetos.com.br</span>
                        </a>
                        <a
                          href="tel:+5500000000000"
                          className="flex items-center gap-4 text-lg transition-opacity hover:opacity-70"
                        >
                          <Phone className="h-6 w-6" />
                          <span>(00) 00000-0000</span>
                        </a>
                        <div className="flex items-center gap-4 text-lg text-muted-foreground">
                          <MapPin className="h-6 w-6 shrink-0" />
                          <span>Sua cidade, Estado</span>
                        </div>
                      </div>
                    ) : (
                      section.content.items && section.content.items.length > 0 && (
                        <ul className="grid gap-3 pt-4 md:grid-cols-2">
                          {section.content.items.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex items-center gap-3 text-base font-light md:text-lg"
                            >
                              <span className="h-1 w-1 rounded-full bg-foreground" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      )
                    )}
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-center gap-4 border-t border-border/30 px-6 py-12 text-center">
        <Image
          src="/logo-vity-icon.png"
          alt="Vity"
          width={60}
          height={60}
          className="h-12 w-12 object-contain"
        />
        <p className="text-sm font-light tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} Vity Projetos e Consultoria. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  )
}
