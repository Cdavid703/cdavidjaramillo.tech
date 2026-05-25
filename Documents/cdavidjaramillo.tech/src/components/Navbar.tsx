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
        <div className="hidden md:flex items-center gap-6">
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

          {/* Language picker — flags only */}
          <div className="flex items-center gap-0.5 border border-[#2a2a2a] rounded-xl px-1.5 py-1">
            {(['es', 'en', 'fr'] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)} title={l.toUpperCase()}
                className={`text-xl w-8 h-8 flex items-center justify-center rounded-lg transition-all ${
                  lang === l
                    ? 'bg-[#00d4ff]/15 scale-110'
                    : 'opacity-50 hover:opacity-100'
                }`}>
                {flags[l]}
              </button>
            ))}
          </div>

          {/* WhatsApp */}
          <a href="https://wa.me/573005769937" target="_blank" rel="noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] hover:bg-[#25d366]/20 transition-colors"
            title="WhatsApp">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

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
          <div className="flex items-center justify-between pt-2 border-t border-[#1e1e1e]">
            {/* Flags */}
            <div className="flex gap-1">
              {(['es', 'en', 'fr'] as Lang[]).map(l => (
                <button key={l} onClick={() => setLang(l)}
                  className={`text-2xl w-10 h-10 flex items-center justify-center rounded-xl transition-all ${
                    lang === l
                      ? 'bg-[#00d4ff]/15 scale-110'
                      : 'opacity-50 hover:opacity-100'
                  }`}>
                  {flags[l]}
                </button>
              ))}
            </div>
            {/* WhatsApp */}
            <a href="https://wa.me/573005769937" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] text-sm font-medium hover:bg-[#25d366]/20 transition-colors">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
