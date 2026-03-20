export default function Footer() {
  return (
    <footer className="bg-fraction-dark py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">

          {/* Logo + Legal */}
          <div className="flex flex-col gap-6">
            <a href="https://fraction.com" target="_blank" rel="noopener noreferrer" aria-label="Fraction homepage">
              <img
                src="/FRAC-Primary-White-RGB.svg"
                alt="Fraction"
                className="h-12 w-auto"
              />
            </a>
            <p className="font-body text-base text-white/60 leading-relaxed max-w-md">
              Fraction Technologies, Inc. | ON FSRA #: 13439 | BC BCFSA #: MB600547
            </p>
          </div>

          {/* Links + Trustpilot */}
          <div className="flex flex-col gap-6 md:items-end">
            {/* Trustpilot */}
            <div
              className="trustpilot-widget"
              data-locale="en-CA"
              data-template-id="5419b6ffb0d04a076446a9af"
              data-businessunit-id="625e707681cc87d05b0a03dc"
              data-style-height="28px"
              data-style-width="100%"
              data-theme="dark"
            >
              <a
                href="https://ca.trustpilot.com/review/fraction.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-base text-white/60 hover:text-white transition-colors duration-200"
              >
                ★★★★★ Rated 5 stars on Trustpilot
              </a>
            </div>

            {/* Nav links */}
            <div className="flex items-center gap-6">
              <a
                href="https://fraction.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-base text-white/70 hover:text-white transition-colors duration-200"
              >
                fraction.com
              </a>
              <span className="text-white/25 text-lg">|</span>
              <a
                href="https://fraction.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-base text-white/70 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="font-body text-base text-white/45 text-center whitespace-nowrap">
            © {new Date().getFullYear()} Fraction Technologies, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
