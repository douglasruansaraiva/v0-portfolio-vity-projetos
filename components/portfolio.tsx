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
        { type: "image", src: "/socios/socios-03.jpg", alt: "Equipe yascara Interiores" }
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
        gallery: [
          { type: "image", src: "/projetos/interiores-01.jpg", alt: "Consultório Clínica - Escritório moderno com parede em concreto" },
          { type: "image", src: "/projetos/interiores-02.jpg", alt: "Área Gourmet Lago - Sala com poltrona branca e vista ao pôr do sol" },
          { type: "image", src: "/projetos/interiores-03.jpg", alt: "Área Gourmet Lago - Mesa de madeira com cadeiras verdes e iluminação natural" },
          { type: "image", src: "/projetos/interiores-04.jpg", alt: "Área Gourmet Lago - Detalhes de bancos em mármore verde com iluminação" },
          { type: "image", src: "/projetos/interiores-05.jpg", alt: "Área Gourmet Lago - Bancos em mármore verde com acabamento em aço" },
          { type: "image", src: "/projetos/interiores-06.jpg", alt: "Cozinha Douglas - Cozinha moderna com ilhas e materiais claros" },
          { type: "image", src: "/projetos/interiores-07.jpg", alt: "CENA - Sala de escritório com parede em madeira e mesa redonda" },
          { type: "image", src: "/projetos/interiores-08.jpg", alt: "Consultório Clínica - Consultório/spa com cama de procedimento" },
          { type: "image", src: "/projetos/interiores-09.jpg", alt: "Consultório Clínica - Consultório/estética com cama de procedimento" },
          { type: "image", src: "/projetos/interiores-10.jpg", alt: "CENA - Sala de conferência com parede em madeira e mesa alongada" },
          { type: "image", src: "/projetos/interiores-11.jpg", alt: "CENA Cacto - Espaço com poltrona de madeira e cacto grande em vaso" },
          { type: "image", src: "/projetos/interiores-12.jpg", alt: "Cozinha Douglas - Cozinha moderna com bancada branca e cadeiras estofadas" },
          { type: "image", src: "/projetos/interiores-13.jpg", alt: "Área Gourmet - Pergolado com mesa de madeira e cadeiras verdes em paisagem" },
          { type: "image", src: "/projetos/interiores-14.jpg", alt: "Banheiro Luxuoso - Banheiro com pia em pedra e parede em texturas" },
          { type: "image", src: "/projetos/interiores-15.jpg", alt: "Flat - Cozinha integrada com área de estar moderna" },
          { type: "image", src: "/projetos/interiores-16.jpg", alt: "Área Gourmet Lago - Mesa de madeira alongada com vista panorâmica" },
          { type: "image", src: "/projetos/interiores-17.jpg", alt: "Cozinha Siqueira - Cozinha compacta moderna com tacos de madeira" },
          { type: "image", src: "/projetos/interiores-18.jpg", alt: "Área Externa - Pergolado com mesa em madeira e cadeiras verdes" },
          { type: "image", src: "/projetos/interiores-19.jpg", alt: "Sala de Estar - Duas poltronas brancas com plantas e vista externa" },
          { type: "image", src: "/projetos/interiores-20.jpg", alt: "Cozinha Douglas - Cozinha moderna com mesa de madeira e potes na parede" },
          { type: "image", src: "/projetos/interiores-21.jpg", alt: "Área Gourmet - Pergolado com bancada verde e vista para o jardim" },
          { type: "image", src: "/projetos/interiores-22.jpg", alt: "MUP Makeup - Consultório estético com parede branca e nichos verdes" },
          { type: "image", src: "/projetos/interiores-23.jpg", alt: "Clínica Humanizada - Planta arquitetônica de consultório com design humano" },
          { type: "image", src: "/projetos/interiores-24.jpg", alt: "Flat - Sofá branco com almofadas em sala de estar iluminada" },
          { type: "image", src: "/projetos/interiores-25.jpg", alt: "Flat - Poltrona verde com plantas secas e vaso branco decorativo" },
          { type: "image", src: "/projetos/interiores-26.jpg", alt: "Flat - Cama com almofadas em tons de verde e parede texturizada" },
          { type: "image", src: "/projetos/interiores-27.jpg", alt: "MUP Makeup - Escritório/consultório com poltronas brancas e parede com nichos" },
          { type: "image", src: "/projetos/interiores-28.jpg", alt: "Flat - Quarto com cama em estrutura de madeira escura e parede texturizada" },
          { type: "image", src: "/projetos/interiores-29.jpg", alt: "Flat - Cama casal com almofadas em tons neutros e parede com textura" },
          { type: "image", src: "/projetos/interiores-30.jpg", alt: "Olenka Cosméticos - Recepção corporativa com painel de madeira natural" },
          { type: "image", src: "/projetos/interiores-31.jpg", alt: "Flat - Banheiro externo com pia em pedra e ambiente aberto" },
          { type: "image", src: "/projetos/interiores-32.jpg", alt: "Sala Douglas - Sofá branco modular com parede de tijolos texturizados" },
          { type: "image", src: "/projetos/interiores-33.jpg", alt: "Olenka Cosméticos - Recepção com painel em madeira e nicho com plantas" },
          { type: "image", src: "/projetos/interiores-34.jpg", alt: "Recepção Clínica Laura Calado - Recepção com muro de travertino e planta" },
          { type: "image", src: "/projetos/interiores-35.jpg", alt: "Sala Douglas - Sofá modular com parede de tijolos brancos e janelas grandes" },
          { type: "image", src: "/projetos/interiores-36.jpg", alt: "Quarto Ryan - Quarto com parede azul texturizada, penteadeira e prateleiras" },
          { type: "image", src: "/projetos/interiores-37.jpg", alt: "Sala Douglas - Sofá modular com parede texturizada e vaso com plantas secas" },
          { type: "image", src: "/projetos/interiores-38.jpg", alt: "Olenka Cosméticos - Painel de madeira natural com parede em tons terra" },
          { type: "image", src: "/projetos/interiores-39.jpg", alt: "Sala Principal - Ambiente integrado com sofá, tv, nichos pretos e mesa de jantar" },
          { type: "image", src: "/projetos/interiores-40.jpg", alt: "Quarto Ryan - Quarto infantil com armário branco, nichos azuis e penteadeira integrada" },
          { type: "image", src: "/projetos/interiores-41.jpg", alt: "Recepção Clínica Laura Calado - Armário branco com detalhes em madeira e luminária redonda" },
          { type: "image", src: "/projetos/interiores-42.jpg", alt: "Suíte Siqueira - Quarto com cabeceira em madeira natural e banco estofado cinza" },
          { type: "image", src: "/projetos/interiores-43.jpg", alt: "Sala Siqueira - Sala de jantar com mesa redonda de madeira e cadeiras brancas modernas" },
          { type: "image", src: "/projetos/interiores-44.jpg", alt: "Statera - Sala integrada com sofá branco, parede madeira e nicho com prateleiras" },
          { type: "image", src: "/projetos/interiores-45.jpg", alt: "Sala Siqueira - Sala de estar aberta com piso em níveis e escada ao fundo" },
          { type: "image", src: "/projetos/interiores-46.jpg", alt: "Sala Siqueira - Espaço integrado com sofá modular branco e parede texturizada" },
          { type: "image", src: "/projetos/interiores-47.jpg", alt: "Statera - Escritório com parede preta com nichos, mesa preta e cadeiras de madeira" },
          { type: "image", src: "/projetos/interiores-48.jpg", alt: "Suíte Siqueira - Quarto com cama de madeira natural, concreto branco e banco estofado" },
          { type: "image", src: "/projetos/interiores-49.jpg", alt: "WC - Banheiro moderno com revestimento de madeira escura e pia em concreto polido" },
          { type: "image", src: "/projetos/interiores-50.jpg", alt: "Sala Douglas - Sofá modular branco com painel de madeira e arte de galho na parede" },
          { type: "image", src: "/projetos/interiores-51.jpg", alt: "Escritório Scene - Espaço corporativo com parede madeira, nichos e mesa de mármore" },
          { type: "image", src: "/projetos/interiores-52.jpg", alt: "Statera - Escritório com parede cinzenta, nichos com iluminação e mesa de mármore" },
          { type: "image", src: "/projetos/interiores-53.jpg", alt: "Suíte Siqueira - Penteadeira/closet com guarda-roupa branco e espelho grande iluminado" }
        ]
      },
      {
        id: "projetos-obras",
        title: "OBRAS",
        description: "Projetos executivos para obras com precisão técnica",
        gallery: [
          { type: "image", src: "/obras/obra-1.jpg", alt: "Obra em construção - Estrutura de concreto armado" },
          { type: "image", src: "/obras/obra-2.jpg", alt: "Estrutura metálica A-frame sobre rocha - Execução" },
          { type: "image", src: "/obras/obra-3.jpg", alt: "Vista aérea da construção metálica em andamento" },
          { type: "image", src: "/obras/obra-4.jpg", alt: "Estrutura triangular com paisagem - Fase de execução" },
          { type: "image", src: "/obras/obra-5.jpg", alt: "Vista superior da estrutura metálica em obra" },
          { type: "image", src: "/obras/obra-6.jpg", alt: "Estrutura A-frame vista frontal durante construção" },
          { type: "image", src: "/obras/obra-7.jpg", alt: "Vista panorâmica do local da obra em progresso" }
        ]
      },
      {
        id: "projetos-residencial",
        title: "RESIDENCIAL",
        description: "Projetos residenciais personalizados e confortáveis",
        gallery: [
          { type: "image", src: "/projetos/residencial-01.jpg", alt: "Residencial A.E. - Fachada moderna com pedra branca e garagem integrada" },
          { type: "image", src: "/projetos/residencial-02.jpg", alt: "Residencial C.L. - Casa moderna com pergolado de madeira e piscina" },
          { type: "image", src: "/projetos/residencial-03.jpg", alt: "Casa de Campo - Arquitetura rústica com pergolado de madeira e piscina" },
          { type: "image", src: "/projetos/residencial-04.jpg", alt: "Residencial C.L. - Fachada contemporânea com garagem dupla e paisagismo" },
          { type: "image", src: "/projetos/residencial-05.jpg", alt: "Área Gourmet - Pergolado moderno estruturado em madeira com vista para água" },
          { type: "image", src: "/projetos/residencial-06.jpg", alt: "Residencial com Piscina - Casa moderna com área gourmet e piscina integrada" },
          { type: "image", src: "/projetos/residencial-07.jpg", alt: "Residencial A.E. - Projeto minimalista com garagem dupla para veículos de luxo" },
          { type: "image", src: "/projetos/residencial-08.jpg", alt: "Residencial A.E. - Casa com piscina e pergolado integrado na fachada" },
          { type: "image", src: "/projetos/residencial-09.jpg", alt: "Casa de Campo - Arquitetura de madeira com pergolado ao pôr do sol" },
          { type: "image", src: "/projetos/residencial-10.jpg", alt: "Área Gourmet Lago - Estrutura de madeira moderna com iluminação noturna" },
          { type: "image", src: "/projetos/residencial-11.jpg", alt: "Casa de Campo - Estrutura rústica com piscina e pergolado de madeira" },
          { type: "image", src: "/projetos/residencial-12.jpg", alt: "Casa de Campo Luxuosa - Piscinas e pergolado iluminado com vista noturna" },
          { type: "image", src: "/projetos/residencial-13.jpg", alt: "Residencial C.L. - Fachada moderna com entrada em madeira e garagem" },
          { type: "image", src: "/projetos/residencial-14.jpg", alt: "Fachada Douglas - Residencial minimalista com garagem dupla e cactus" },
          { type: "image", src: "/projetos/residencial-15.jpg", alt: "Fachada Douglas - Casa moderna com tijolos em padrão geométrico" },
          { type: "image", src: "/projetos/residencial-16.jpg", alt: "Flat - Casa contemporânea com garagem integrada e paisagismo moderno" },
          { type: "image", src: "/projetos/residencial-17.jpg", alt: "V&V Fachada - Casa na praia com pergolado rústico ao pôr do sol" },
          { type: "image", src: "/projetos/residencial-18.jpg", alt: "Flat - Casa com pergolado em madeira estruturada e piscina" },
          { type: "image", src: "/projetos/residencial-19.jpg", alt: "V&V Fachada - Residência praia com estrutura de madeira e ambiente aberto" },
          { type: "image", src: "/projetos/residencial-20.jpg", alt: "V&V Fachada - Casa moderna praia com pergolado ao pôr do sol dourado" },
          { type: "image", src: "/projetos/residencial-21.jpg", alt: "Fachada Douglas - Projeto minimalista com fachada limpa e garagem" },
          { type: "image", src: "/projetos/residencial-22.jpg", alt: "Casa de Campo - Área gourmet com piscinas, pergolado e telhado cerâmico" }
        ]
      }
    ]
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
            className={`group relative cursor-pointer border-b border-foreground/10 transition-all duration-500`}
            onClick={() => handleSectionClick(section.id)}
            whileHover={{ backgroundColor: "rgba(232, 228, 222, 0.05)" }}
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
        <section className="relative border-b border-foreground/10">
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
              className="absolute right-6 top-6 z-50 p-2 text-foreground/60 transition-colors hover:text-foreground md:right-12 md:top-12"
              aria-label="Fechar"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Back to top logo */}
            <div className="absolute left-6 top-6 md:left-12 md:top-12">
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
                    <div className="space-y-6">
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

                    {/* Professional About Content for QUEM SOMOS - Premium Layout */}
                    {section.id === "quem-somos" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-24 py-12"
                      >
                        {/* Hero Section with Two Panels */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                          <div className="space-y-6">
                            <h3 className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
                              Transformando espaços em experiências
                            </h3>
                            <p className="text-lg font-light leading-relaxed text-foreground/70">
                              Vity Projetos & Consultoria é uma equipe de profissionais dedicada a reimaginar ambientes. Combinamos expertise técnica com visão criativa para criar espaços que não apenas impressionam visualmente, mas funcionam perfeitamente para a vida de quem os habita.
                            </p>
                            <div className="pt-4 space-y-3">
                              <div className="flex items-start gap-4">
                                <div className="text-foreground/40 font-light pt-1">→</div>
                                <p className="text-base font-light text-foreground/70">Projetos residenciais personalizados</p>
                              </div>
                              <div className="flex items-start gap-4">
                                <div className="text-foreground/40 font-light pt-1">→</div>
                                <p className="text-base font-light text-foreground/70">Consultoria técnica e assessoria</p>
                              </div>
                              <div className="flex items-start gap-4">
                                <div className="text-foreground/40 font-light pt-1">→</div>
                                <p className="text-base font-light text-foreground/70">Design de interiores de excelência</p>
                              </div>
                            </div>
                          </div>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2">
                              <p className="text-5xl md:text-6xl font-light text-foreground">50+</p>
                              <p className="text-sm font-light tracking-wider text-foreground/50 uppercase">Projetos Executados</p>
                              <p className="text-xs font-light text-foreground/40">Residências e espaços transformados</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-5xl md:text-6xl font-light text-foreground">10+</p>
                              <p className="text-sm font-light tracking-wider text-foreground/50 uppercase">Anos de Experiência</p>
                              <p className="text-xs font-light text-foreground/40">No mercado de design</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-5xl md:text-6xl font-light text-foreground">100%</p>
                              <p className="text-sm font-light tracking-wider text-foreground/50 uppercase">Clientes Satisfeitos</p>
                              <p className="text-xs font-light text-foreground/40">Comprometimento com qualidade</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-5xl md:text-6xl font-light text-foreground">5</p>
                              <p className="text-sm font-light tracking-wider text-foreground/50 uppercase">Prêmios</p>
                              <p className="text-xs font-light text-foreground/40">Design e inovação</p>
                            </div>
                          </div>
                        </div>

                        {/* Values Section */}
                        <div className="space-y-12">
                          <div className="border-t border-foreground/10 pt-12">
                            <p className="text-xs font-light tracking-[0.3em] text-foreground/50 uppercase mb-8">Nossos Valores</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              <div className="space-y-4">
                                <h4 className="text-lg font-light">Excelência</h4>
                                <p className="text-base font-light leading-relaxed text-foreground/70">
                                  Cada detalhe é meticulosamente planejado e executado. Qualidade não é uma opção, é nosso padrão.
                                </p>
                              </div>
                              <div className="space-y-4">
                                <h4 className="text-lg font-light">Inovação</h4>
                                <p className="text-base font-light leading-relaxed text-foreground/70">
                                  Estamos sempre explorando novas tendências, materiais e técnicas para oferecer soluções contemporâneas.
                                </p>
                              </div>
                              <div className="space-y-4">
                                <h4 className="text-lg font-light">Autenticidade</h4>
                                <p className="text-base font-light leading-relaxed text-foreground/70">
                                  Escutamos nossos clientes e criamos espaços que refletem genuinamente suas vidas e aspirações.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Process Section */}
                        <div className="space-y-12">
                          <div className="border-t border-foreground/10 pt-12">
                            <p className="text-xs font-light tracking-[0.3em] text-foreground/50 uppercase mb-8">Nosso Processo</p>
                            <div className="space-y-6">
                              {[
                                { step: "01", title: "Descoberta", desc: "Conhecemos você, seus objetivos e necessidades em profundidade" },
                                { step: "02", title: "Conceituação", desc: "Desenvolvemos conceitos visuais e técnicos personalizados" },
                                { step: "03", title: "Design", desc: "Criamos detalhes de design executivo e especificações" },
                                { step: "04", title: "Execução", desc: "Acompanhamos cada fase da realização com precisão" },
                                { step: "05", title: "Entrega", desc: "Apresentamos o projeto finalizado e otimizado" }
                              ].map((item, i) => (
                                <div key={i} className="flex gap-6 pb-6 border-b border-foreground/5 last:border-0">
                                  <div className="text-sm font-light tracking-wider text-foreground/40 min-w-fit pt-1">{item.step}</div>
                                  <div className="flex-1">
                                    <h5 className="text-base font-light mb-2">{item.title}</h5>
                                    <p className="text-sm font-light text-foreground/60">{item.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTA Section */}
                        <div className="border-t border-foreground/10 pt-12 text-center space-y-6">
                          <h3 className="text-2xl md:text-3xl font-light">Vamos criar algo extraordinário?</h3>
                          <p className="text-base font-light text-foreground/70 max-w-2xl mx-auto">
                            Entre em contato conosco para discutir seu próximo projeto
                          </p>
                          <button className="mt-8 px-12 py-3 border border-foreground/30 text-foreground font-light tracking-wider hover:bg-foreground hover:text-background transition-colors">
                            CONVERSAR AGORA
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Divider */}
                    {section.id === "quem-somos" && <div className="h-px w-full bg-foreground/10" />}

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
                              className="flex flex-col w-full"
                            >
                              <div className="relative w-full bg-secondary/20 overflow-hidden">
                                <Image
                                  src={media.src}
                                  alt={media.alt || `Projeto - Foto ${i + 1}`}
                                  width={800}
                                  height={600}
                                  className="w-full h-auto object-cover"
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                                  loading="lazy"
                                  quality={60}
                                  placeholder="empty"
                                  priority={false}
                                  decoding="async"
                                />
                              </div>
                              {/* Image Label */}
                              <div className="bg-background/50 p-6">
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
