'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Lang, T } from '@/lib/i18n'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: T }

const LangContext = createContext<Ctx>({ lang: 'en', setLang: () => {}, t: translations.en })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)

// Renders strings with [b]...[/b] markers as white bold spans
export function Tx({ s }: { s: string }) {
  const parts = s.split(/\[b\](.*?)\[\/b\]/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1
          ? <span key={i} className="text-white font-medium">{part}</span>
          : part
      )}
    </>
  )
}
