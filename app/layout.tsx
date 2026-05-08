import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Vity | Projetos e Consultoria',
  description: 'Vity Engenharia Consultoria - Soluções completas em projetos, consultoria e engenharia para sua obra.',
  generator: 'v0.app',
  icons: {
    icon: '/logo-vity-icon.png',
    apple: '/logo-vity-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D2B45',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
