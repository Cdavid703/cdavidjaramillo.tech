'use client'
import { useLang } from '@/context/LangContext'

const cvFiles: Record<string, string | null> = {
  es: '/cv/cv-es.pdf',
  en: null, // replace with '/cv/cv-en.pdf' when available
  fr: null, // replace with '/cv/cv-fr.pdf' when available
}

const flags: Record<string, string> = { es: '🇨🇴', en: '🇺🇸', fr: '🇫🇷' }
const labels: Record<string, string> = { es: 'Español', en: 'English', fr: 'Français' }

export default function ResumeDownload() {
  const { t } = useLang()
  const r = t.resume

  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-sm text-[#00d4ff] font-mono mb-3 tracking-widest uppercase">{r.tag}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {r.title} <span className="gradient-text">{r.titleAccent}</span>
        </h2>
        <p className="text-[#6b7280] mb-12 max-w-md mx-auto">{r.subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {(['es', 'en', 'fr'] as const).map(lang => {
            const file = cvFiles[lang]
            const available = file !== null
            return available ? (
              <a
                key={lang}
                href={file!}
                download
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#111111] border border-[#00d4ff]/30 hover:border-[#00d4ff]/70 hover:bg-[#00d4ff]/5 transition-all group"
              >
                <span className="text-2xl">{flags[lang]}</span>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">{labels[lang]}</p>
                  <p className="text-[10px] text-[#00d4ff]">{r.available}</p>
                </div>
                <svg className="ml-auto w-4 h-4 text-[#6b7280] group-hover:text-[#00d4ff] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            ) : (
              <div
                key={lang}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#111111] border border-[#1e1e1e] opacity-50 cursor-not-allowed"
              >
                <span className="text-2xl">{flags[lang]}</span>
                <div className="text-left">
                  <p className="text-sm font-semibold text-[#6b7280]">{labels[lang]}</p>
                  <p className="text-[10px] text-[#4b5563]">{r.soon}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
