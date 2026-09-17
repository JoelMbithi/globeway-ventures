import React from 'react'

const Vission = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-cyan-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            Our Direction
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Driven by Purpose. Built for Impact.
          </h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Vision Box */}
          <div className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl border border-slate-200 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1">
            
            {/* Big Number */}
            <div className="text-6xl md:text-7xl font-bold text-slate-100 group-hover:text-cyan-500/20 transition-colors duration-300 mb-4">
              01
            </div>

            {/* Label */}
            <div className="text-cyan-600 font-semibold text-xs tracking-[0.25em] uppercase mb-3">
              Our Vision
            </div>

            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              The Gateway to East Africa
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              To be East Africa's leading gateway for global brands seeking market entry and visibility.
            </p>

            {/* Accent bar */}
            <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
          </div>

          {/* Mission Box */}
          <div className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl border border-slate-200 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1">

            {/* Big Number */}
            <div className="text-6xl md:text-7xl font-bold text-slate-100 group-hover:text-cyan-500/20 transition-colors duration-300 mb-4">
              02
            </div>

            {/* Label */}
            <div className="text-cyan-600 font-semibold text-xs tracking-[0.25em] uppercase mb-3">
              Our Mission
            </div>

            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Creating Meaningful Connections
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              To deliver seamless, professional, and impactful exhibition experiences that connect global enterprises with local opportunity.
            </p>

            {/* Accent bar */}
            <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Vission