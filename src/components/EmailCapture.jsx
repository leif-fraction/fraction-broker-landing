import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)

    const { error: dbError } = await supabase
      .from('leads')
      .insert({ email })

    setLoading(false)

    if (dbError) {
      setError('Something went wrong. Please try again.')
      return
    }

    setSubmitted(true)

    // Auto-download the PDF
    const link = document.createElement('a')
    link.href = '/Rates-Terms.pdf'
    link.download = 'Fraction-Rates-Terms.pdf'
    link.click()
  }

  return (
    <section className="py-10 md:py-12 bg-fraction-green-light border-y border-fraction-green/10">
      <div className="max-w-4xl mx-auto px-6">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-fraction-green hidden sm:block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className="font-body font-bold text-lg md:text-xl text-text-dark whitespace-nowrap">
                Get the rates and terms
              </p>
            </div>
            <div className="flex w-full sm:flex-1 gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@brokerage.com"
                disabled={loading}
                className="flex-1 font-body text-base px-5 py-3.5 rounded-lg bg-white border border-fraction-green/20 text-text-dark placeholder-text-light/50 focus:border-fraction-green focus:ring-2 focus:ring-fraction-green/20 outline-none transition-all duration-200 disabled:opacity-50"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-fraction-green hover:bg-fraction-green-hover active:scale-[0.97] text-white font-body font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg transition-all duration-200 whitespace-nowrap disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send →'}
              </button>
            </div>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-fraction-green">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <p className="font-body font-bold text-sm text-text-dark">Your download should start automatically.</p>
          </div>
        )}
        {error && (
          <p className="font-body text-xs text-red-500 mt-2 text-center sm:text-left">{error}</p>
        )}
      </div>
    </section>
  )
}
