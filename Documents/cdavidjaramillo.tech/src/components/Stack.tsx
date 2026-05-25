'use client'
import { useLang } from '@/context/LangContext'

const categoryIcons = [
  [
    { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'JavaScript',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  ],
  [
    { name: 'Python',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C#',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'SQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'VS Code',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  ],
  [
    { name: 'SAP',      icon: 'https://cdn.simpleicons.org/sap/0FAAFF' },
    { name: 'Power BI', icon: 'https://img.icons8.com/color/48/power-bi.png' },
    { name: 'Excel',    icon: 'https://img.icons8.com/color/48/microsoft-excel-2019.png' },
    { name: 'VBA',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualbasic/visualbasic-original.svg' },
  ],
]

const colors = ['#00d4ff', '#7c3aed', '#f59e0b']

export default function Stack() {
  const { t } = useLang()
  const s = t.stack

  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-sm text-[#00d4ff] font-mono mb-3 tracking-widest uppercase">{s.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            {s.title} <span className="gradient-text">{s.titleAccent}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {s.cats.map((label, ci) => (
            <div key={label}>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 flex items-center gap-3"
                style={{ color: colors[ci] }}>
                <span className="flex-1 h-px opacity-20" style={{ background: colors[ci] }} />
                {label}
                <span className="flex-1 h-px opacity-20" style={{ background: colors[ci] }} />
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {categoryIcons[ci].map(item => (
                  <div key={item.name}
                    className="bg-[#111111] border border-[#1e1e1e] rounded-2xl p-4 flex flex-col items-center gap-3 card-glow group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.icon} alt={item.name} width={40} height={40}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                    <span className="text-xs text-[#6b7280] text-center font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
