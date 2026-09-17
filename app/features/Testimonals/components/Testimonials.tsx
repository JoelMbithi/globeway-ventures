import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'GLOBEWAY Ventures demonstrated excellent coordination and professionalism throughout the exhibition. Their attention to detail made the experience seamless.',
      name: 'David Mwangi',
      role: 'Business Development Manager',
    },
    {
      quote:
        'The team created a professional environment that made it easy for us to showcase our brand and connect with potential business partners and customers.',
      name: 'Sarah Wanjiku',
      role: 'Exhibitor & Business Partner',
    },
    {
      quote:
        'We appreciated the level of organization and support provided throughout the event. GLOBEWAY created valuable opportunities for business engagement and visibility.',
      name: 'James Otieno',
      role: 'Managing Director',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-cyan-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            Client Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Trusted Partnerships. Meaningful Experiences.
          </h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Our commitment to professionalism, coordination and impactful exhibition experiences helps us create lasting value for our clients and partners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="group relative bg-slate-50 hover:bg-slate-900 rounded-2xl p-8 border border-slate-200 hover:border-cyan-500/40 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
            >

              {/* Big Quote Mark */}
              <span className="absolute top-4 right-6 text-7xl md:text-8xl font-serif leading-none text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors duration-500 select-none">
                &ldquo;
              </span>

              {/* Quote Text */}
              <p className="relative text-slate-700 group-hover:text-slate-200 text-base leading-relaxed mb-6 flex-grow transition-colors duration-500">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="relative pt-5 border-t border-slate-200 group-hover:border-slate-700 transition-colors duration-500">
                <strong className="block text-slate-900 group-hover:text-white font-bold text-base mb-1 transition-colors duration-500">
                  {testimonial.name}
                </strong>
                <span className="block text-slate-500 group-hover:text-cyan-400 text-sm font-medium transition-colors duration-500">
                  {testimonial.role}
                </span>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Testimonials