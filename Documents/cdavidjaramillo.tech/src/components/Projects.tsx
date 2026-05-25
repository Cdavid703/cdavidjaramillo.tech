'use client'
import { useLang } from '@/context/LangContext'

const projects = [
  {
    title:   'DeliStars',
    subtitle: 'Real-Time Delivery Management Platform',
    stack:   ['React', 'Firebase', 'Tailwind', 'Vite', 'PWA'],
    url:     'https://www.delistars.com/domicilios/',
    github:  null,
    accent:  '#e63946',
    emoji:   '🍔',
  },
  {
    title:   'Guardia Real de Antioquia',
    subtitle: 'Corporate Website',
    stack:   ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    url:     'https://guardia-real-web.vercel.app',
    github:  'https://github.com/Cdavid703/guardia-real-web',
    accent:  '#7c3aed',
    emoji:   '🎺',
  },
  {
    title:   'Jaralingua',
    subtitle: 'Language Learning Platform',
    stack:   ['HTML', 'CSS', 'JavaScript'],
    url:     'https://www.jaralingua.com',
    github:  null,
    accent:  '#00d4ff',
    emoji:   '🌍',
  },
]

export default function Projects() {
  const { t } = useLang()
  const p = t.projects

  return (
    <section id="projects" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-sm text-[#00d4ff] font-mono mb-3 tracking-widest uppercase">{p.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            {p.title} <span className="gradient-text">{p.titleAccent}</span>
          </h2>
          <p className="text-[#6b7280] mt-4 max-w-xl mx-auto">{p.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div key={proj.title}
              className="bg-[#111111] border border-[#1e1e1e] rounded-2xl overflow-hidden card-glow flex flex-col">

              <div className="p-6 pb-4"
                style={{ background: `linear-gradient(135deg, ${proj.accent}10, transparent)` }}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{proj.emoji}</span>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: `${proj.accent}20`, color: proj.accent }}>
                    {p.badges[i]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                <p className="text-xs text-[#6b7280] mt-0.5">{proj.subtitle}</p>
              </div>

              <div className="px-6 pb-6 flex flex-col flex-1">
                <p className="text-sm text-[#9ca3af] leading-relaxed mb-5 flex-1">{p.descs[i]}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.stack.map(tag => (
                    <span key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#1e1e1e] text-[#9ca3af] border border-[#2a2a2a]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={proj.url} target="_blank" rel="noreferrer"
                    className="flex-1 text-center text-xs font-semibold py-2.5 rounded-lg transition-all hover:opacity-80"
                    style={{ background: `${proj.accent}15`, color: proj.accent, border: `1px solid ${proj.accent}30` }}>
                    {p.live}
                  </a>
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer"
                      className="flex-1 text-center text-xs font-semibold py-2.5 rounded-lg border border-[#2a2a2a] text-[#6b7280] hover:text-white hover:border-[#3a3a3a] transition-all">
                      {p.github}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
