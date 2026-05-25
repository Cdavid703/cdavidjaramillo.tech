const highlights = [
  { icon: '🏭', title: 'Enterprise Automation', desc: 'Python, C# & VBA pipelines integrated with SAP cutting manual work up to 90%.' },
  { icon: '💰', title: 'Financial Systems',     desc: 'End-to-end reconciliation automation with 100% data quality. I speak the CFO language.' },
  { icon: '🌐', title: 'Full Stack Apps',       desc: 'Production PWAs and corporate sites with React, Next.js, Firebase and TypeScript.' },
  { icon: '📊', title: 'Business Intelligence', desc: 'Power BI dashboards and SQL models that turn raw data into real decisions.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left — Text */}
        <div>
          <p className="text-sm text-[#00d4ff] font-mono mb-3 tracking-widest uppercase">About me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Two worlds that<br />
            <span className="gradient-text">rarely meet</span>
          </h2>
          <div className="space-y-4 text-[#9ca3af] leading-relaxed">
            <p>
              <span className="text-white font-medium">Industrial Engineer</span> with 15+ years inside
              enterprise operations — logistics, supply chain, and financial control at companies
              like <span className="text-white font-medium">Holcim/Amrize</span>. At some point I stopped
              waiting for IT to build what the business needed and started building it myself.
            </p>
            <p>
              On the enterprise side I design and code{' '}
              <span className="text-white font-medium">SAP integrations in C# and Python</span>,
              financial reconciliation pipelines, <span className="text-white font-medium">Power BI</span>{' '}
              dashboards, and VBA automation that eliminates hundreds of manual hours per month.
              I work directly with CFOs, controllers, and ops directors — I speak their language
              and deliver in code.
            </p>
            <p>
              On the product side I build and ship full-stack apps solo:{' '}
              <span className="text-white font-medium">React, Next.js, Firebase, TypeScript</span> —
              a real-time delivery PWA live in Medellín, a language learning platform,
              and a corporate site for a 100+ member organization.
              Not prototypes. Real users, real data, real uptime.
            </p>
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
          {highlights.map(h => (
            <div key={h.title}
              className="bg-[#111111] border border-[#1e1e1e] rounded-2xl p-5 card-glow">
              <span className="text-3xl mb-3 block">{h.icon}</span>
              <h3 className="text-sm font-semibold text-white mb-2">{h.title}</h3>
              <p className="text-xs text-[#6b7280] leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
