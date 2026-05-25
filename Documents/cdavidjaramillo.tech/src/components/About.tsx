'use client'
import { useLang, Tx } from '@/context/LangContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left — Text */}
        <div>
          <p className="text-sm text-[#00d4ff] font-mono mb-3 tracking-widest uppercase">{a.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {a.title}<br />
            <span className="gradient-text">{a.titleAccent}</span>
          </h2>
          <div className="space-y-4 text-[#9ca3af] leading-relaxed">
            <p><Tx s={a.p1} /></p>
            <p><Tx s={a.p2} /></p>
            <p><Tx s={a.p3} /></p>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="https://www.linkedin.com/in/cdavidjaramillo/" target="_blank" rel="noreferrer"
              className="px-5 py-2.5 rounded-lg border border-[#2a2a2a] text-sm text-[#f0f0f0] hover:border-[#00d4ff]/40 transition-all">
              LinkedIn ↗
            </a>
            <a href="https://github.com/Cdavid703" target="_blank" rel="noreferrer"
              className="px-5 py-2.5 rounded-lg border border-[#2a2a2a] text-sm text-[#f0f0f0] hover:border-[#00d4ff]/40 transition-all">
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Right — Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {a.cards.map(h => (
            <div key={h.title} className="bg-[#111111] border border-[#1e1e1e] rounded-2xl p-5 card-glow">
              <h3 className="text-sm font-semibold text-white mb-2">{h.title}</h3>
              <p className="text-xs text-[#6b7280] leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
