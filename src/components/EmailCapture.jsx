import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function EmailCapture() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.')
      return
    }

    // TODO: Replace with actual email service (e.g. Mailchimp, SendGrid, HubSpot)
    console.log('Email submitted:', email)
    setSubmitted(true)
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

          <div className="w-16 h-16 bg-fraction-green-light rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-fraction-green">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </div>

          <h2 className="font-display font-bold text-3xl md:text-[2.5rem] text-text-dark mb-4 leading-tight">
            Get the rates and terms
          </h2>
          <p className="font-body text-text-medium text-[15px] sm:text-lg md:text-xl mb-10">
            Enter your email and we'll instantly send you our full product sheet with current rates, terms, and eligibility.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@brokerage.com"
                className="flex-1 font-body text-base px-5 py-4 rounded-lg border border-gray-200 focus:border-fraction-green focus:ring-2 focus:ring-fraction-green/20 outline-none transition-all duration-200"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-fraction-green hover:bg-fraction-green-hover active:scale-[0.97] text-white font-body font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-200 min-h-[52px] shadow-sm hover:shadow-lg whitespace-nowrap"
              >
                Send It
                <span aria-hidden="true">→</span>
              </button>
            </form>
          ) : (
            <div className="bg-fraction-green-light rounded-2xl p-8 max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-fraction-green">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <p className="font-body font-bold text-lg text-text-dark">Check your inbox. It's on its way.</p>
              </div>
            </div>
          )}

          {error && (
            <p className="font-body text-sm text-red-500 mt-3">{error}</p>
          )}

          <p className="font-body text-xs text-text-light mt-6">
            No spam. Just the product sheet.
          </p>
        </div>
      </div>
    </section>
  )
}
