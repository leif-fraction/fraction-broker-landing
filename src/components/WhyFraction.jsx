import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import FeatureCard from './FeatureCard'
import { features } from '../data/featuresData'

export default function WhyFraction() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="relative py-20 md:py-28 bg-bg-light">
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-fraction-green-light pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>

        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="font-display font-bold text-3xl md:text-[2.5rem] text-text-dark mb-4 leading-tight">
            Why brokers choose Fraction
          </h2>
          <p className="font-body text-text-medium text-[15px] sm:text-lg md:text-xl mx-auto">
            A product your clients will actually thank you for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              iconName={feature.iconName}
              title={feature.title}
              description={feature.description}
              delay={i * 100}
              visible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
