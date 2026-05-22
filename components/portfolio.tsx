"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Instagram, Mail, ArrowDown, ChevronRight } from "lucide-react"
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
  subcategories?: {
    id: string
    title: string
    description: string
    gallery?: {
      type: "image" | "video"
      src: string
      alt?: string
      poster?: string
    }[]
  }[]
}

const sections: Section[] = [
  {
    id: "quem-somos",
    title: "QUEM SOMOS",
    subtitle: "Nossa história e valores",
    isHighlight: true,
    content: {
      description: "",
      gallery: [
        { type: "image", src: "/socios/socios-01.jpg", alt: "Sérgio Manoel - Sócio Fundador" },
        { type: "image", src: "/socios/socios-02.jpg", alt: "Rodrigo Souza - Sócio Fundador" },
        { type: "image", src: "/socios/socios-03.jpg", alt: "Equipe Vascara Interiores" }
      ]
    }
  },
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
        { type: "image", src: "/casarao/casarao-02.jpg", alt: "Casarão - Lateral ao entardecer com tons rosados" },
        { type: "image", src: "/casarao/casarao-03.jpg", alt: "Casarão - Entre palmeiras altas com estrutura branca" },
        { type: "image", src: "/casarao/casarao-04.jpg", alt: "Casarão - Detalhe da varanda com decoração vintage" },
        { type: "image", src: "/casarao/casarao-05.jpg", alt: "Casarão - Fachada colorida com portas verdes" },
        { type: "image", src: "/casarao/casarao-06.jpg", alt: "Casarão - Parede com sombras e potes de barro" },
        { type: "image", src: "/casarao/casarao-07.jpg", alt: "Casarão - Campo de girassóis ao pôr do sol" },
        { type: "image", src: "/casarao/casarao-08.jpg", alt: "Casarão - Fachada iluminada ao entardecer" },
        { type: "image", src: "/casarao/casarao-09.jpg", alt: "Casarão - Vista panorâmica com cores pastéis" },
        { type: "image", src: "/casarao/casarao-10.jpg", alt: "Casarão - Entre palmeiras iluminado ao anoitecer" },
        { type: "image", src: "/casarao/casarao-11.jpg", alt: "Casarão - Detalhe do banco em primeiro plano" },
        { type: "image", src: "/casarao/casarao-12.jpg", alt: "Casarão - Quarto Viajante com banheiro integrado" },
        { type: "image", src: "/casarao/casarao-13.jpg", alt: "Casarão - Sala de estar com tijolos e atmosfera aconchegante" },
        { type: "image", src: "/casarao/casarao-14.jpg", alt: "Casarão - Quarto luxuoso com poltronas e detalhes em madeira" },
        { type: "image", src: "/casarao/casarao-15.jpg", alt: "Casarão - Suíte completa com banheiro e varanda privativa" },
        { type: "image", src: "/casarao/casarao-16.jpg", alt: "Casarão - Corredor com cores pastéis e plantas decorativas" },
        { type: "image", src: "/casarao/casarao-17.jpg", alt: "Casarão - Sala íntima com sofá de couro e quadros antigos" }
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
    },
    subcategories: [
      {
        id: "projetos-comercial",
        title: "COMERCIAL",
        description: "Projetos para empreendimentos comerciais modernos e funcionais",
        gallery: [
          { type: "image", src: "/projetos/comercial-01.jpg", alt: "Restaurante Serra Negra - Terraço com design contemporâneo" },
          { type: "image", src: "/projetos/comercial-02.jpg", alt: "Silvio Comercial - Edifício com fachada em cobre perforado" },
          { type: "image", src: "/projetos/comercial-03.jpg", alt: "Restaurante Serra Negra - Área de lazer com poltronas" },
          { type: "image", src: "/projetos/comercial-04.jpg", alt: "Ferreira Costa - Espaço comercial com tijolos aparentes" },
          { type: "image", src: "/projetos/comercial-05.jpg", alt: "Corporate Center - Prédio moderno com materiais mistos" },
          { type: "image", src: "/projetos/comercial-06.jpg", alt: "Mundo Infantil - Loja com signage colorida" },
          { type: "image", src: "/projetos/comercial-07.jpg", alt: "Mundo Infantil - Fachada com exposição de produtos" },
          { type: "image", src: "/projetos/comercial-08.jpg", alt: "Silvio Comercial - Edificação com padrão em tijolos" },
          { type: "image", src: "/projetos/comercial-09.jpg", alt: "Escritório - Prédio administrativo moderno" },
          { type: "image", src: "/projetos/comercial-10.jpg", alt: "Silvio Comercial - Fachada com elementos estruturais" },
          { type: "image", src: "/projetos/comercial-11.jpg", alt: "Restaurante Serra Negra - Pavilhão com cobertura de madeira" },
          { type: "image", src: "/projetos/comercial-12.jpg", alt: "Delifrio Caruaru - Fast food com design urbano" },
          { type: "image", src: "/projetos/comercial-13.jpg", alt: "Corporate Center - Fachada contemporânea com vidro" }
        ]
      },
      {
        id: "projetos-interiores",
        title: "INTERIORES",
        description: "Design e projetos de interiores sofisticados",
        gallery: []
      },
      {
        id: "projetos-obras",
        title: "OBRAS",
        description: "Projetos executivos para obras com precisão técnica",
        gallery: []
      },
      {
        id: "projetos-residencial",
        title: "RESIDENCIAL",
        description: "Projetos residenciais personalizados e confortáveis",
        gallery: []
      }
    ]
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
      ],
      gallery: [
        { type: "image", src: "/obras/obra-1.jpg", alt: "Obra em construção - Estrutura de concreto" },
        { type: "image", src: "/obras/obra-2.jpg", alt: "Estrutura metálica A-frame sobre rocha" },
        { type: "image", src: "/obras/obra-3.jpg", alt: "Vista aérea da construção metálica" },
        { type: "image", src: "/obras/obra-4.jpg", alt: "Estrutura triangular com paisagem" },
        { type: "image", src: "/obras/obra-5.jpg", alt: "Vista superior da estrutura metálica" },
        { type: "image", src: "/obras/obra-6.jpg", alt: "Estrutura A-frame vista frontal" },
        { type: "image", src: "/obras/obra-7.jpg", alt: "Vista panorâmica do local da obra" }
      ]
    }
  }
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null)

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setActiveSubcategory(null)
  }

  const closeSection = () => {
    setActiveSection(null)
    setActiveSubcategory(null)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section - Full Screen with Logo */}
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

        {/* Logo - Large and Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex flex-col items-center gap-8"
        >
          <Image
            src="/logo-vity.png"
            alt="Vity Engenharia e Consultoria"
            width={600}
            height={170}
            className="h-auto w-[300px] brightness-0 invert md:w-[450px] lg:w-[550px]"
            priority
            quality={85}
          />
        </motion.div>
      </section>

      {/* Sections */}
      <div id="sections" className="relative">
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
                <h3 className="font-light tracking-[0.2em] text-xl md:text-3xl lg:text-4xl">
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
                href="https://wa.me/5581998592749"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 transition-colors hover:text-foreground"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-sm font-light tracking-wider">(81) 99859-2749</span>
              </a>
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
                      <h2 className="text-2xl font-light tracking-[0.2em] md:text-4xl lg:text-5xl">
                        {section.title}
                      </h2>
                      <p className="text-base font-light tracking-wider text-foreground/60 md:text-lg">
                        {section.subtitle}
                      </p>
                    </div>
                    
                    {/* Divider */}
                    <div className="h-px w-full bg-foreground/10" />

                    {/* Subcategories Menu - Only for Projetos */}
                    {section.subcategories && section.subcategories.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-3 py-4"
                      >
                        {section.subcategories.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => setActiveSubcategory(activeSubcategory === sub.id ? null : sub.id)}
                            className={`w-full px-6 py-3 text-sm font-light tracking-wider transition-all text-center ${
                              activeSubcategory === sub.id
                                ? "bg-foreground text-background"
                                : "border border-foreground/30 text-foreground hover:border-foreground/60"
                            }`}
                          >
                            {sub.title}
                          </button>
                        ))}
                      </motion.div>
                    )}

                    {/* Divider */}
                    <div className="h-px w-full bg-foreground/10" />
                    
                    {/* Content - Show only if no subcategories or one is selected */}
                    {(!section.subcategories || section.subcategories.length === 0 || activeSubcategory) && (
                      <>
                        {/* Gallery from section or selected subcategory */}
                        {(activeSubcategory 
                          ? section.subcategories?.find(s => s.id === activeSubcategory)?.gallery 
                          : section.content.gallery
                        ) && (activeSubcategory 
                          ? section.subcategories?.find(s => s.id === activeSubcategory)?.gallery?.length || 0 > 0
                          : section.content.gallery?.length || 0 > 0
                        ) && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8 pt-4"
                      >
                        {/* All Images Stacked */}
                        <div className="space-y-6">
                          {(activeSubcategory 
                            ? section.subcategories?.find(s => s.id === activeSubcategory)?.gallery
                            : section.content.gallery
                          )?.map((media, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                              className="relative w-full bg-secondary/20"
                            >
                              <Image
                                src={media.src}
                                alt={media.alt || `Projeto - Foto ${i + 1}`}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                loading={i === 0 ? "eager" : "lazy"}
                                quality={75}
                              />
                              {/* Image Label */}
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                                <p className="text-sm font-light tracking-wider text-foreground/90">
                                  {media.alt}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
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
                      </>
                    )}

                    {/* Subcategory Message - Show when subcategories exist but none is selected */}
                    {section.subcategories && section.subcategories.length > 0 && !activeSubcategory && (
                      <div className="py-8 text-center">
                        <p className="text-foreground/60 font-light tracking-wider">
                          Selecione uma categoria acima para visualizar os projetos
                        </p>
                      </div>
                    )}
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
