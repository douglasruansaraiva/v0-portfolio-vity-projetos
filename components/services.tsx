const services = [
  {
    number: '01',
    title: 'Residencial',
    description: 'Projetos de casas e apartamentos com design moderno e funcional',
    image: '/residencial.jpg'
  },
  {
    number: '02',
    title: 'Comercial',
    description: 'Soluções arquitetônicas para lojas, escritórios e espaços comerciais',
    image: '/comercial.jpg'
  },
  {
    number: '03',
    title: 'Interiores',
    description: 'Design de interiores que transforma espaços em ambientes únicos',
    image: '/interiores.jpg'
  }
]

export function Services() {
  return (
    <section id="servicos" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-16">
        <div className="space-y-4">
          <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Serviços</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            O que oferecemos
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {services.map((service) => (
            <div key={service.number} className="space-y-6">
              {service.image && (
                <div className="w-full h-64 overflow-hidden rounded-sm mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="space-y-6 border-l border-primary/30 pl-8">
                <span className="text-6xl font-light text-primary/20">{service.number}</span>
                <div className="space-y-3">
                  <h3 className="text-2xl font-light text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
