import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Legal Contracts Manager',
  description: 'Professional legal contracts management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased bg-gray-50">{children}</body>
    </html>
  )
}