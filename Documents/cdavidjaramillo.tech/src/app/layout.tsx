import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'David Jaramillo — Industrial Engineer & Full Stack Developer',
  description: 'Portfolio of David Jaramillo — Industrial Engineer & Full Stack Developer specializing in financial automation, React, Next.js, Firebase, Python and SAP.',
  keywords: ['David Jaramillo', 'Industrial Engineer', 'Full Stack Developer', 'Python', 'React', 'SAP', 'Firebase', 'Medellín'],
  authors: [{ name: 'David Jaramillo', url: 'https://cdavidjaramillo.tech' }],
  openGraph: {
    title: 'David Jaramillo — Industrial Engineer & Full Stack Developer',
    description: 'Building automation tools for finance & operations. React · Next.js · Firebase · Python · SAP',
    url: 'https://cdavidjaramillo.tech',
    siteName: 'David Jaramillo Portfolio',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full`}>{children}</body>
    </html>
  )
}
