import React from 'react'
import { asset } from '@/app/lib/asset'

const WhyUs = () => {
  const points = [
    {
    number: '01',
    title: 'A growing regional market',
    description:
      'Kenya is one of East Africa’s busiest markets. Exhibiting here gets your brand seen and starts the kind of relationships that turn into business.',
  },
    {
      number: '02',
      title: 'Business Connections',
      description:
        'Our exhibitions put local and international brands in the same room as buyers, investors, distributors and the people who sign off on deals.',
    },
    {
    number: '03',
    title: 'People who know the ground',
    description:
      'We know how business works in Kenya and run events to international standards, so you spend less time figuring things out and more time meeting people.',
  },
  {
    number: '04',
    title: 'A base for East Africa',
    description:
      'Once you have a footing in Kenya, the wider region is within reach through exhibitions, networking and meetings built around your market.',
  },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgb(203 213 225) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column — Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-cyan-600"></span>
              <span className="text-cyan-700 font-semibold text-[11px] tracking-[0.3em] uppercase">
                Why Kenya & East Africa
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
             Why bring  
              <br />
              <span className="relative inline-block">
               your brand
                <span className="absolute left-0 -bottom-1 w-full h-2 bg-cyan-200/60 -z-10"></span>
              </span>
              <br />
              to East Africa
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Kenya provides a strategic platform for international brands looking to explore, connect and grow within the East African market.
            </p>

            {/* Stat block — grounds the section in something concrete */}
            <div className="flex items-stretch gap-6 pt-6 border-t border-slate-300/70 max-w-md">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 leading-none">20+</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mt-2">Years of<br/>experience</div>
              </div>
              <div className="w-px bg-slate-300"></div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 leading-none">30+</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mt-2">Countries<br/>reached</div>
              </div>
              <div className="w-px bg-slate-300"></div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 leading-none">EA</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mt-2">Regional<br/>gateway</div>
              </div>
            </div>
          </div>

          {/* Right Column — Numbered Points */}
          <div className="lg:col-span-7">
            <div className="space-y-0 divide-y divide-slate-300/70 border-y border-slate-300/70">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="group relative py-8 md:py-10 grid grid-cols-[auto,1fr] gap-6 md:gap-8 items-start transition-all duration-300 hover:bg-white/60 hover:pl-4"
                >
                  {/* Number */}
                  <div className="pt-1">
                    <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-300 group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-white text-slate-700 font-bold text-sm md:text-base transition-all duration-300">
                      {point.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-cyan-700 transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed max-w-2xl">
                      {point.description}
                    </p>
                  </div>

                  {/* Arrow accent on hover */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 hidden md:block">
                    <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyUs