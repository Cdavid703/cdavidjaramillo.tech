export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] py-8 px-6 text-center">
      <p className="text-xs text-[#6b7280]">
        © {new Date().getFullYear()} David Jaramillo ·{' '}
        <span className="gradient-text font-medium">cdavidjaramillo.tech</span>
        {' '}· Built with Next.js & Tailwind CSS
      </p>
    </footer>
  )
}
