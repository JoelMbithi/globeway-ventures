import React from 'react'

const Flagship = () => {
  const events = [
    /* {
      logo: 'assets/2025_img/logo 10.png',
      title: 'North East India Pharma & Health Expo',
      date: '26 – 28 February, 2026',
      venue: 'Guwahati, India',
      link: 'https://www.northeastpharmed.com/',
    },
    {
      logo: 'assets/2025_img/logo 11.png',
      title: 'North East India Medical & Lab Expo',
      date: '26 – 28 February, 2026',
      venue: 'Guwahati, India',
      link: 'https://www.northeastpharmed.com/',
    },
    {
      logo: 'assets/2025_img/logo 4.png',
      title: 'Uganda Pharma & Healthcare',
      date: '26 – 28 March, 2026',
      venue: 'Kampala, Uganda',
      link: 'https://www.ugandapharmahealth.com/',
    }, */
    {
      logo: '/flagship/flagship3.jpeg',
      title: 'Kenya Pharma & Healthcare',
      date: '9 – 11 April, 2026',
      venue: 'Kampala, Uganda',
      link: 'https://www.kenyapharmahealth.com/',
    },
    {
      logo: '/flagship/flagship2.jpeg',
      title: 'Kenya Buildcon International Expo',
      date: '11 – 13 June, 2026',
      venue: 'Kampala, Uganda',
      link: 'https://kenyabuildcon.com/',
    },
    {
      logo: '/flagship/flagship1.jpeg',
      title: 'Kenya Wood International Expo',
      date: '11 – 13 June, 2026',
      venue: 'Kampala, Uganda',
      link: 'https://kenyawoodexpo.com/',
    },
    {
      logo: '/flagship/flagship.jpeg',
      title: 'Kenya Solar, Electric, Power & Lights International Expo',
      date: '11 – 13 June, 2026',
      venue: 'Kampala, Uganda',
      link: 'https://www.kenyasepl.com/',
    },
    /* {
      logo: 'assets/2025_img/logo 5.png',
      title: 'Power & Elec Uganda International Exhibition',
      date: '9 – 11 July, 2026',
      venue: 'Kampala, Uganda',
      link: 'https://www.powerelecuganda.com/',
    },
    {
      logo: 'assets/2025_img/logo 7.png',
      title: 'Uganda Buildcon International Expo',
      date: '6 – 8 August, 2026',
      venue: 'Kampala, Uganda',
      link: 'https://ugandabuildcon.com/',
    },
    {
      logo: 'assets/2025_img/logo 1 1.png',
      title: 'Pharmatech & Health East Africa',
      date: '19 – 21 August, 2026',
      venue: 'Dar Es Salaam, Tanzania',
      link: 'https://www.eastafricapharmed.com/',
    },
    {
      logo: 'assets/2025_img/logo2.png',
      title: 'Medical & Lab East Africa',
      date: '19 – 21 August, 2026',
      venue: 'Dar Es Salaam, Tanzania',
      link: 'https://www.eastafricapharmed.com/',
    },
    {
      logo: 'assets/2025_img/logo 8.png',
      title: 'Power & Elec Tanzania International Exhibition',
      date: '19 – 21 August, 2026',
      venue: 'Dar Es Salaam, Tanzania',
      link: 'https://powerelectanzania.com/',
    },
    {
      logo: 'assets/2025_img/logo 13.png',
      title: 'Nepal Electric, Power & Lights Expo',
      date: 'September, 2026',
      venue: 'Kathmandu, Nepal',
      link: 'https://nepalpowerelec.com/',
    },
    {
      logo: 'assets/2025_img/logo 6.png',
      title: 'Power & Elec Zambia',
      date: '28 – 30 October, 2026',
      venue: 'Lusaka, Zambia',
      link: 'https://www.powereleczambia.com/',
    },
    {
      logo: 'assets/2025_img/logo 3.png',
      title: 'Zambia PharmaHealth',
      date: '28 – 30 October, 2026',
      venue: 'Lusaka, Zambia',
      link: 'https://www.zambiapharmahealth.com/',
    },
    {
      logo: 'assets/2025_img/logo 12.png',
      title: 'Hometex Nepal',
      date: '',
      venue: 'Kathmandu, Nepal',
      link: 'https://www.hometexnepal.com/',
    },
    {
      logo: 'assets/2025_img/logo 9.png',
      title: 'Nepal Pharma & Health International Expo',
      date: '19 – 21 December, 2026',
      venue: 'Kathmandu, Nepal',
      link: null, // non-clickable
    }, */
  ]

  return (
    <section id='events' className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">

      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-cyan-400 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            Upcoming Exhibitions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Flagship Events
          </h2>
          <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto"></div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

          {events.map((event, index) => {
            const CardWrapper = event.link ? 'a' : 'div'
            const wrapperProps = event.link
              ? { href: event.link, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <CardWrapper
                key={index}
                {...wrapperProps}
                className="group relative block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 aspect-square"
              >
                {/* Logo */}
                <div className="absolute inset-0 flex items-center justify-center p-6 bg-white">
                  <img
                    src={event.logo}
                    alt={event.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay (mask) */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-cyan-900/90 backdrop-blur-sm flex flex-col justify-center items-center text-center p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">

                  {/* Date badge */}
                  {event.date && (
                    <div className="bg-cyan-500 text-slate-900 text-[10px] md:text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3">
                      {event.date}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-white font-bold text-sm md:text-base leading-snug mb-3 line-clamp-4">
                    {event.title}
                  </h3>

                  {/* Venue */}
                  <div className="flex items-center gap-1.5 text-cyan-300 text-xs md:text-sm font-medium">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.venue}</span>
                  </div>

                  {/* Visit link hint */}
                  {event.link && (
                    <div className="mt-4 text-white/70 text-xs font-medium tracking-wider uppercase flex items-center gap-1.5">
                      Visit Website
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              </CardWrapper>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default Flagship