import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © 2024 VITY Projetos & Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Recife, Pernambuco
          </p>
        </div>
      </div>
    </footer>
  )
}
