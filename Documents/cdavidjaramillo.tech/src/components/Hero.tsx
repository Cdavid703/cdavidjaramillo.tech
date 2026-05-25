'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const roles = [
  'Industrial Engineer',
  'Full Stack Developer',
  'Financial Automation Expert',
  'Process Optimizer',
]

export default function Hero() {
  const [roleIdx,   setRoleIdx]   = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const target = roles[roleIdx]
    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
      return () => clearTimeout(t)
    }
    if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % roles.length)
    }
  }, [displayed, deleting, roleIdx])

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00d4ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-12 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Left — Text ── */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse inline-block" />
              <span className="text-sm text-[#00d4ff] font-medium">Available for freelance & consulting</span>
            </div>

            {/* Name */}
            <h1 className="delay-1 text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
              David<br />
              <span className="gradient-text">Jaramillo</span>
            </h1>

            {/* Typewriter */}
            <div className="delay-2 h-9 flex items-center mb-5">
              <p className="text-lg md:text-xl text-[#6b7280] font-mono">
                {displayed}
                <span className="inline-block w-0.5 h-5 bg-[#00d4ff] ml-0.5 animate-pulse" />
              </p>
            </div>

            {/* Tagline */}
            <p className="delay-3 text-sm md:text-base text-[#6b7280] max-w-lg mb-8 leading-relaxed">
              I sit at the intersection of <span className="text-white">finance, operations,
              and software</span>. I don&apos;t just analyze broken processes —
              I build the tools that fix them.
            </p>

            {/* CTAs */}
            <div className="delay-4 flex flex-col sm:flex-row gap-3 mb-12">
              <a href="#projects"
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-black font-semibold hover:opacity-90 transition-opacity text-sm">
                View Projects
              </a>
              <a href="#contact"
                className="px-7 py-3 rounded-xl border border-[#2a2a2a] text-[#f0f0f0] hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/5 transition-all text-sm">
                Get in touch
              </a>
            </div>

            {/* Stats */}
            <div className="delay-4 grid grid-cols-3 gap-6 pt-8 border-t border-[#1e1e1e] w-full">
              {[
                { value: '15+', label: 'Years exp.' },
                { value: '90%', label: 'Work automated' },
                { value: '3',   label: 'Apps in prod.' },
              ].map(s => (
                <div key={s.label}>
                  <p className="text-2xl md:text-3xl font-bold gradient-text">{s.value}</p>
                  <p className="text-[11px] text-[#6b7280] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — Photo ── */}
          <div className="delay-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow ring behind photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 blur-2xl scale-110" />

              {/* Border gradient */}
              <div className="relative p-1 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7c3aed]">
                <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 bg-[#111111]">
                  <Image
                    src="/images/david.jpeg"
                    alt="David Jaramillo"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Floating badge — location */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#111111] border border-[#2a2a2a] rounded-full px-4 py-1.5 flex items-center gap-2 whitespace-nowrap">
                <span className="text-sm">📍</span>
                <span className="text-xs font-medium text-[#9ca3af]">Medellín, Colombia</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6b7280]">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <svg width="14" height="22" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="1" width="14" height="22" rx="7" />
          <circle cx="8" cy="8" r="2" fill="currentColor" className="animate-bounce" />
        </svg>
      </div>
    </section>
  )
}
