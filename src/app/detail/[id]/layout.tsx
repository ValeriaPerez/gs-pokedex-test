import type { Metadata } from 'next'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
