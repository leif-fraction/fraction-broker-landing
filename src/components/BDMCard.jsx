export default function BDMCard({ name, region, photo, email, phone, bookingUrl, delay = 0, visible = false }) {
  const initials = name.split(' ').map(n => n[0]).join('')

  return (
    <div
      className={`bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: '0.65s' }}
    >
      {/* Photo — 4:5 portrait ratio for natural headshot framing */}
      <div className="w-full aspect-square sm:aspect-[4/5] bg-fraction-green-light overflow-hidden">
        {photo ? (
          <img
            src={photo}
            alt={`${name}, Fraction BDM`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display font-bold text-6xl text-fraction-green opacity-40">
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-7 flex flex-col flex-1">
        <div className="mb-5">
          <h3 className="font-display font-bold text-2xl text-text-dark leading-tight">
            {name}
          </h3>
          <p className="font-body font-bold text-sm text-fraction-green uppercase tracking-[0.12em] mt-1.5">
            {region}
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-7">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2.5 font-body text-[15px] text-text-medium hover:text-fraction-green transition-colors duration-200 group"
            aria-label={`Email ${name}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[18px] h-[18px] text-text-light group-hover:text-fraction-green transition-colors duration-200 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            {email}
          </a>

          <a
            href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-2.5 font-body text-[15px] text-text-medium hover:text-fraction-green transition-colors duration-200 group"
            aria-label={`Call ${name}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[18px] h-[18px] text-text-light group-hover:text-fraction-green transition-colors duration-200 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
            </svg>
            {phone}
          </a>
        </div>

        <div className="mt-auto">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Book a meeting with ${name} (opens in new tab)`}
            className="w-full flex items-center justify-center gap-2 bg-fraction-green hover:bg-fraction-green-hover active:scale-[0.97] text-white font-body font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-lg transition-all duration-200 min-h-[52px] shadow-sm hover:shadow-lg"
          >
            Book a Meeting
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
