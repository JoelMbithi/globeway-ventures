import React from 'react'

const WhyUs = () => {
  const points = [
    {
      number: '01',
      title: 'Strategic Market Access',
      description:
        'Kenya offers access to a growing regional market, creating opportunities for businesses to establish visibility and develop valuable market connections.',
    },
    {
      number: '02',
      title: 'Business Connections',
      description:
        'Our exhibitions create structured opportunities for international and local brands to engage with buyers, investors, distributors and decision-makers.',
    },
    {
      number: '03',
      title: 'Local Market Knowledge',
      description:
        'We combine deep understanding of the Kenyan market with international standards to help brands navigate opportunities effectively.',
    },
    {
      number: '04',
      title: 'East African Gateway',
      description:
        'From Kenya, businesses can explore wider opportunities across East Africa through professional exhibitions, networking and market-focused engagements.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-cyan-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            Why Kenya & East Africa
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            A Gateway to Opportunity in East Africa
          </h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full mb-6"></div>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Kenya provides a strategic platform for international brands looking to explore, connect and grow within the East African market.
          </p>
        </div>

        {/* Why Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

          {points.map((point, index) => (
            <div
              key={index}
              className="group relative pl-6 md:pl-8 border-l-2 border-slate-200 hover:border-cyan-500 transition-colors duration-300"
            >
              {/* Number */}
              <span className="block text-4xl md:text-5xl font-bold text-cyan-500 mb-3 leading-none">
                {point.number}
              </span>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-base leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default WhyUs