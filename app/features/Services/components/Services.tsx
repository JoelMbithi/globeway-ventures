import React from 'react'
import { asset } from '@/app/lib/asset'

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Exhibitions & Trade Fairs',
      description:
        'Exhibitions are a proven sales and marketing medium that provide a platform for stakeholders to stand face-to-face in one place at a time. We attract leading brands to our exhibitions taking place in various parts of the world, connecting them directly with their target business delegates.',
      image: asset('/images/sarit.jpg'),
    },
    {
      number: '02',
      title: 'Event Management & Solutions',
      description:
        'We are a one-stop shop for all your event-related requirements. We provide assistance for event management and event solutions including booth construction and fabrication, conferences, webinars, branding and marketing services, travel and visa assistance, apart from planning and execution of events.',
      image: asset('/images/sarit4.jpg'),
    },
    {
      number: '03',
      title: 'Buyer Seller Meets',
      description:
        'We have vast experience organizing Buyer Seller and Reverse Buyer Seller Meets worldwide. Through our ever-present network of international partners, we provide assistance in smoothly organizing such events in any desired country depending on the sectors of interest and demand.',
      image: asset('/images/sarit3.jpg'),
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-cyan-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Services
          </h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto"></div>
        </div>

        {/* Alternating Rows */}
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-stretch ${
                  isReversed ? 'lg:[direction:rtl]' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative h-72 md:h-96 lg:h-[450px] overflow-hidden ${isReversed ? 'lg:[direction:ltr]' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div
                  className={`relative bg-slate-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center ${
                    isReversed ? 'lg:[direction:ltr]' : ''
                  }`}
                >
                  <span className="absolute top-6 right-8 text-8xl md:text-9xl font-bold text-white/5 select-none pointer-events-none">
                    {service.number}
                  </span>

                  <div className="relative z-10">
                    <div className="text-cyan-400 font-semibold text-xs tracking-[0.25em] uppercase mb-3">
                      Service {service.number}
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                      {service.title}
                    </h3>
                    <div className="w-16 h-1 bg-cyan-400 rounded-full mb-6"></div>
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            Explore Our Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Services