import React from 'react'
import { asset } from '@/app/lib/asset'

const Members = () => {
  const managers = [
    {
      name: 'Oscar Mwanga Abwoga',
      role: 'Director',
      description:
        'With over 20 years of experience in international trade and event management, Oscar leads the company with a vision to connect businesses across continents.',
      image: asset('/members/osca.jpeg'),
    },
    {
      name: 'Meshack',
      role: 'Director',
      description:
        'Meshack oversees all operational aspects of our events, ensuring seamless execution from concept to completion. His attention to detail is unmatched.',
      image: asset('/members/meshark.jpeg'),
    },
  ]

  const partners = [
    {
      name: 'Global Expo Alliance',
      role: 'Strategic Partner',
      description:
        'A leading international exhibition organizer with presence in over 30 countries, helping us expand our reach globally.',
      logo: asset('/members/osca.jpeg'),
    },
    {
      name: 'TravelPro International',
      role: 'Travel Partner',
      description:
        'Specializing in corporate travel and visa assistance, ensuring our delegates and partners travel hassle-free.',
      logo: asset('/members/meshark.jpeg'),
    },
  ]

  return (
    <section id="members" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header — single, clear identity */}
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            Meet Our Team
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            The people behind our events, our partnerships, and our vision proudly Kenyan, globally connected.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-8 max-w-6xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 whitespace-nowrap">
              Leadership
            </h3>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
            {managers.map((manager, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col border border-slate-100"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                  <img
                    src={manager.image}
                    alt={manager.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg md:text-xl font-bold text-white drop-shadow-lg">
                      {manager.name}
                    </h4>
                  </div>
                </div>

                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <div className="text-cyan-600 font-semibold text-[10px] tracking-[0.2em] uppercase mb-2">
                    {manager.role}
                  </div>
                  <div className="w-8 h-0.5 bg-cyan-500 rounded-full mb-3"></div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    {manager.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group Image */}
        <div className="relative mb-16 md:mb-20 overflow-hidden rounded-xl shadow-lg">
          <img
            src={asset('/members/group.jpg')}
            alt="Our Team"
            className="w-full h-56 sm:h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <h3 className="text-xl md:text-3xl font-bold text-white mb-1">
              One Team, One Vision
            </h3>
            <p className="text-slate-200 text-sm md:text-base max-w-xl">
              United by a passion for connecting businesses worldwide.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/Contacts"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-cyan-600 text-white text-sm font-semibold rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            Join Our Network
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Members