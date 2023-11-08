import type { Metadata } from 'next'
import { DarkProvider } from '../../context'

export const metadata: Metadata = {
  title: 'Detalle',
  description: 'Prueba tecnica con next.js',
}

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DarkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </DarkProvider>
  )
}
