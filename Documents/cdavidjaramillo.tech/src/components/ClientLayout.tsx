'use client'
import { LangProvider } from '@/context/LangContext'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <LangProvider>{children}</LangProvider>
}
