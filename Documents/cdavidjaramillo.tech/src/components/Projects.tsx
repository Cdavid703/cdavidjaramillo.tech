const projects = [
  {
    title:   'DeliStars',
    subtitle: 'Real-Time Delivery Management Platform',
    desc:    'Full-stack PWA running live for a food business in Medellín. Handles order management, real-time GPS driver tracking, cashier dashboard, client-facing order flow, and in-app chat.',
    stack:   ['React', 'Firebase', 'Tailwind', 'Vite', 'PWA'],
    url:     'https://www.delistars.com/domicilios/',
    github:  null,
    accent:  '#e63946',
    emoji:   '🍔',
    badge:   'Live in production',
  },
  {
    title:   'Guardia Real de Antioquia',
    subtitle: 'Corporate Website',
    desc:    'Official site for a 100+ member musical organization founded in 1983. Features service showcase, event section, member portal and contact flows.',
    stack:   ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    url:     'https://guardia-real-web.vercel.app',
    github:  'https://github.com/Cdavid703/guardia-real-web',
    accent:  '#7c3aed',
    emoji:   '🎺',
    badge:   'Client project',
  },
  {
    title:   'Jaralingua',
    subtitle: 'Language Learning Platform',
    desc:    'Interactive educational platform for learning English and French with structured lessons, vocabulary exercises and multimedia content.',
    stack:   ['HTML', 'CSS', 'JavaScript'],
    url:     'https://www.jaralingua.com',
    github:  null,
    accent:  '#00d4ff',
    emoji:   '🌍',
    badge:   'Live & public',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-sm text-[#00d4ff] font-mono mb-3 tracking-widest uppercase">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Projects in <span className="gradient-text">production</span>
          </h2>
          <p className="text-[#6b7280] mt-4 max-w-xl mx-auto">
            Not side projects collecting dust — real apps used by real people.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.title}
              className="bg-[#111111] border border-[#1e1e1e] rounded-2xl overflow-hidden card-glow flex flex-col">

              {/* Header */}
              <div className="p-6 pb-4"
                style={{ background: `linear-gradient(135deg, ${p.accent}10, transparent)` }}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{p.emoji}</span>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: `${p.accent}20`, color: p.accent }}>
                    {p.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="text-xs text-[#6b7280] mt-0.5">{p.subtitle}</p>
              </div>

              {/* Body */}
              <div className="px-6 pb-6 flex flex-col flex-1">
                <p className="text-sm text-[#9ca3af] leading-relaxed mb-5 flex-1">{p.desc}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map(t => (
                    <span key={t}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#1e1e1e] text-[#9ca3af] border border-[#2a2a2a]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a href={p.url} target="_blank" rel="noreferrer"
                    className="flex-1 text-center text-xs font-semibold py-2.5 rounded-lg transition-all hover:opacity-80"
                    style={{ background: `${p.accent}15`, color: p.accent, border: `1px solid ${p.accent}30` }}>
                    Live site ↗
                  </a>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="flex-1 text-center text-xs font-semibold py-2.5 rounded-lg border border-[#2a2a2a] text-[#6b7280] hover:text-white hover:border-[#3a3a3a] transition-all">
                      GitHub ↗
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
