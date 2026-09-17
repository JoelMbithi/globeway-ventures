import React from 'react'

const Partners = () => {
  const partners = [
    { name: 'Partner 1', logo: 'assets/img/partners/partner-1.png' },
    { name: 'Partner 2', logo: 'assets/img/partners/partner-2.png' },
    { name: 'Partner 3', logo: 'assets/img/partners/partner-3.png' },
    { name: 'Partner 4', logo: 'assets/img/partners/partner-4.png' },
    { name: 'Partner 5', logo: 'assets/img/partners/partner-5.png' },
    { name: 'Partner 6', logo: 'assets/img/partners/partner-6.png' },
    { name: 'Partner 7', logo: 'assets/img/partners/partner-7.png' },
    { name: 'Partner 8', logo: 'assets/img/partners/partner-8.png' },
    { name: 'Partner 9', logo: 'assets/img/partners/partner-9.png' },
    { name: 'Partner 10', logo: 'assets/img/partners/partner-10.png' },
    { name: 'Partner 11', logo: 'assets/img/partners/partner-11.png' },
    { name: 'Partner 12', logo: 'assets/img/partners/partner-12.png' },
  ]

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-cyan-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            Trusted By
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Our Partners
          </h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Collaborating with leading organizations to deliver world-class
            exhibitions and events across East Africa and beyond.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl border border-slate-200 hover:border-cyan-500/40 p-5 flex items-center justify-center aspect-square shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Logo */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-16 md:max-h-20 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />

              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Partners