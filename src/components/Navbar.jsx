import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToBDM = () => {
    document.getElementById('bdm')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'border-b border-gray-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="https://fraction.com" target="_blank" rel="noopener noreferrer" aria-label="Fraction homepage">
          <img
            src="/FRAC-Primary-Green-RGB.svg"
            alt="Fraction"
            className="h-14 w-auto"
          />
        </a>

        <button
          onClick={scrollToBDM}
          className="hidden sm:inline-flex items-center gap-2 bg-fraction-green hover:bg-fraction-green-hover active:scale-[0.97] text-white font-body font-bold text-sm uppercase tracking-wider px-6 py-2.5 rounded-lg transition-all duration-200"
        >
          Book a Call
        </button>

        <button
          onClick={scrollToBDM}
          className="sm:hidden bg-fraction-green hover:bg-fraction-green-hover text-white font-body font-bold text-sm uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors duration-200 active:scale-95"
        >
          Book a Call
        </button>
      </div>
    </header>
  )
}
