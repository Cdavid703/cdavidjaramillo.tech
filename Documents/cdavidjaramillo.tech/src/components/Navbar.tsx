'use client'
import { useState, useEffect } from 'react'
import { useLang } from '@/context/LangContext'
import { Lang } from '@/lib/i18n'

const flags: Record<Lang, string> = { es: '🇨🇴', en: '🇺🇸', fr: '🇫🇷' }

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: t.nav.about,    id: 'about'    },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.stack,    id: 'stack'    },
    { label: t.nav.contact,  id: 'contact'  },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1e1e1e]' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-bold text-lg tracking-tight">
          <span className="gradient-text">cdj</span>
          <span className="text-[#6b7280]">.tech</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {links.map(l => (
              <li key={l.id}>
                <button onClick={() => scrollTo(l.id)}
                  className="text-sm text-[#6b7280] hover:text-white transition-colors">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Language picker */}
          <div className="flex items-center gap-1 border border-[#2a2a2a] rounded-lg px-1 py-1">
            {(['es', 'en', 'fr'] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)}
                className={`text-sm px-2 py-0.5 rounded-md transition-all ${
                  lang === l
                    ? 'bg-[#00d4ff]/15 text-[#00d4ff] font-semibold'
                    : 'text-[#6b7280] hover:text-white'
                }`}>
                {flags[l]} {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button onClick={() => scrollTo('contact')}
            className="text-sm px-4 py-2 rounded-lg border border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-colors">
            {t.nav.hire}
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(v => !v)}
          className="md:hidden text-[#6b7280] hover:text-white p-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#111111] border-t border-[#1e1e1e] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <button key={l.id} onClick={() => { scrollTo(l.id); setOpen(false) }}
              className="text-sm text-[#6b7280] hover:text-white transition-colors py-1 text-left">
              {l.label}
            </button>
          ))}
          <div className="flex gap-2 pt-2 border-t border-[#1e1e1e]">
            {(['es', 'en', 'fr'] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                  lang === l
                    ? 'border-[#00d4ff]/40 text-[#00d4ff] bg-[#00d4ff]/10'
                    : 'border-[#2a2a2a] text-[#6b7280]'
                }`}>
                {flags[l]} {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
