import React from 'react'

const About = () => {
  return (
    <section id='about' className="py-20 md:py-28 bg-white">
      <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-cyan-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Connecting Global Brands to East African Opportunities
          </h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Side */}
          <div className="relative pb-16 sm:pb-0">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-2xl"></div>

            {/* Main Image */}
            <img
              src="images/sarit6.jpeg"
              alt="GLOBEWAY Ventures team"
              className="relative w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-xl"
            />

            {/* Floating Overlapping Image */}
            <div className="absolute -bottom-10 -right-4 sm:-right-8 w-40 h-40 sm:w-52 sm:h-52 md:w-70 md:h-70 rounded overflow-hidden  shadow-2xl">
              <img
                src="images/sarit5.jpeg"
                alt="GLOBEWAY Ventures exhibition"
                className="w-full h-full object-cover"
              />
            </div>
           {/* Floating Image 3 - positioned with absolute, fully responsive */}
<div className="absolute bottom-86 right-60 sm:bottom-56 sm:right-44 md:bottom-64 md:right-56 lg:bottom-70 lg:right-72 xl:right-90 2xl:right-150
                w-40 h-40 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 
                rounded overflow-hidden  ">
  <img
    src="images/sarit7.jpeg"
    alt="GLOBEWAY Ventures exhibition"
    className="w-full h-full object-cover"
  />
</div>
          </div>

          {/* Text Side */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Who We Are
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-5">
              GLOBEWAY Ventures is a professional exhibition and event management company
              dedicated to connecting global brands with opportunities across Kenya and
              the East African market.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              From exhibitions and trade fairs to booth construction, logistics, travel
              assistance, security, branding and marketing — we deliver end-to-end
              solutions designed to create visibility and impact.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-8">
              {[
                'End-to-end event management',
                'Global brand connections',
                'Custom booth construction',
                'Logistics & travel support',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-cyan-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="/Contacts"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Get In Touch
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-slate-200">
          {[
            { value: '50+', label: 'Events Delivered' },
            { value: '5+', label: 'Global Partners' },
            { value: '1+', label: 'Countries Served' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About