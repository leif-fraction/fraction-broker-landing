import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import StatCard from './StatCard'
import { stats } from '../data/statsData'

export default function Hero() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  const scrollToBDM = () => {
    document.getElementById('bdm')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pt-36 pb-14 md:pt-40 md:pb-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

          {/* Left: Headline + CTA */}
          <div className="flex-1 max-w-xl">
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="inline-block font-body font-bold text-sm md:text-base uppercase tracking-[0.15em] text-fraction-green mb-5 bg-fraction-green-light px-5 py-2 rounded-full">
                For Mortgage Brokers
              </span>
            </div>

            <div
              className={`transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <h1 className="font-display font-bold text-[2.5rem] md:text-5xl lg:text-[3.5rem] text-text-dark leading-[1.15] mb-6">
                Give your clients the answer other brokers can't.
              </h1>
            </div>

            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <p className="font-body text-lg md:text-xl text-text-medium leading-relaxed mb-10">
                The only no-payment mortgage in Canada. Up to 5 years. Fully open. No penalties.
              </p>
            </div>

            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <button
                onClick={scrollToBDM}
                className="inline-flex items-center gap-2.5 bg-fraction-green hover:bg-fraction-green-hover active:scale-[0.97] text-white font-body font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-lg transition-all duration-200 min-h-[52px] shadow-sm hover:shadow-lg"
                aria-label="Scroll to BDM booking section"
              >
                Find Your BDM Below
                <span aria-hidden="true" className="text-lg">↓</span>
              </button>
            </div>
          </div>

          {/* Right: Stat Cards 2×2 */}
          <div ref={ref} className="flex-1 grid grid-cols-2 gap-4 lg:gap-5">
            {stats.map((stat, i) => (
              <StatCard
                key={stat.id}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
                animate={isVisible}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
