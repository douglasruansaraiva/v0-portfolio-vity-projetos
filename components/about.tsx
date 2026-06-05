export function About() {
  return (
    <section id="sobre" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Quem Somos</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
              VITY Projetos & Consultoria
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-sm">
              Somos especialistas em transformar ideias em projetos extraordinários. Com mais de uma década de experiência, nossa equipe combina expertise técnica com criatividade inovadora.
            </p>
            <p className="text-sm">
              Cada projeto recebe atenção personalizada, refletindo os valores e necessidades únicas do cliente.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2 pb-6 border-b border-border/50">
            <span className="text-xs tracking-[0.2em] text-primary uppercase font-medium">Abordagem</span>
            <p className="text-foreground text-base font-light">Processo Integrado</p>
            <p className="text-xs text-muted-foreground">Da concepção até a execução, estamos ao seu lado em cada etapa.</p>
          </div>

          <div className="space-y-2 pb-6 border-b border-border/50">
            <span className="text-xs tracking-[0.2em] text-primary uppercase font-medium">Qualidade</span>
            <p className="text-foreground text-base font-light">Excelência em Foco</p>
            <p className="text-xs text-muted-foreground">Utilizamos as melhores práticas e materiais para projetos que perduram.</p>
          </div>

          <div className="space-y-2">
            <span className="text-xs tracking-[0.2em] text-primary uppercase font-medium">Inovação</span>
            <p className="text-foreground text-base font-light">Tendências Atuais</p>
            <p className="text-xs text-muted-foreground">Incorporamos as mais recentes tecnologias em design e arquitetura.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
