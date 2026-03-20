import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import BDMCard from './BDMCard'
import { bdms } from '../data/bdmData'

export default function BDMSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.08 })

  return (
    <section id="bdm" className="py-20 md:py-28 bg-fraction-green-light">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>

        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="font-display font-bold text-3xl md:text-[2.5rem] text-text-dark mb-4 leading-tight">
            Book a call with your regional BDM
          </h2>
          <p className="font-body text-text-medium text-lg md:text-xl">
            Pick your region. We'll take it from there.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
          {bdms.map((bdm, i) => (
            <BDMCard
              key={bdm.id}
              name={bdm.name}
              region={bdm.region}
              photo={bdm.photo}
              email={bdm.email}
              phone={bdm.phone}
              bookingUrl={bdm.bookingUrl}
              delay={i * 120}
              visible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
