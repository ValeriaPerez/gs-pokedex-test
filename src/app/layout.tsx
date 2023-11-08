import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { DarkProvider } from './context'

import './styles/index.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Prueba tecnica con next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DarkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </DarkProvider>
  )
}
