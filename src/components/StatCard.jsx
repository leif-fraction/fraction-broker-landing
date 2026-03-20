import { useCountUp } from '../hooks/useCountUp'

export default function StatCard({ value, prefix, suffix, label, description, animate, delay = 0 }) {
  const count = useCountUp({ target: value, duration: 1600, start: animate })

  return (
    <div
      className={`bg-fraction-green-light rounded-2xl p-6 md:p-7 flex flex-col gap-1 transition-all duration-500 ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-display font-bold text-[2.5rem] md:text-[3.25rem] text-fraction-green leading-none">
        {prefix}{count}{suffix}
      </div>
      <div className="font-body font-bold text-xs uppercase tracking-[0.15em] text-text-dark mt-2">
        {label}
      </div>
      <div className="font-body text-sm text-text-light leading-relaxed mt-0.5">
        {description}
      </div>
    </div>
  )
}
