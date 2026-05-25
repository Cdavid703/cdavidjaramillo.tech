import Navbar          from '@/components/Navbar'
import Hero            from '@/components/Hero'
import About           from '@/components/About'
import Projects        from '@/components/Projects'
import Stack           from '@/components/Stack'
import ResumeDownload  from '@/components/ResumeDownload'
import Contact         from '@/components/Contact'
import Footer          from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ResumeDownload />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
