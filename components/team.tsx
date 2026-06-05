export function Team() {
  return (
    <section id="equipe" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Nossa Estrutura</span>
          <p className="text-foreground text-base font-light leading-relaxed">
            Para fortalecer nossa estrutura e ampliar a qualidade das entregas, formalizamos a fusão com a Yascara Interiores, que passa a assumir integralmente a área de interiores da empresa.
          </p>
        </div>

        <div>
          <img
            src="/team.jpg"
            alt="Equipe VITY e Yascara Interiores"
            className="w-full max-w-xs h-auto object-cover rounded-sm mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
