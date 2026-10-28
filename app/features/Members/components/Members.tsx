/* import React from 'react'
import Link from 'next/link'
import { asset } from '@/app/lib/asset'

const Members = () => {
  const directors = [
    {
      name: 'Mr.Oscar Mwanga Abwoga',
      role: 'Director',
      description:
        'Over 20 years in international trade and event management. Oscar leads the company with one aim: connecting businesses across continents.',
      image: asset('/members/osca.jpeg'),
    },
    {
      name: 'Mr.Meshack Oduor Ochieng',
      role: 'Director',
      description:
        'Meshack runs operations for every event, from the first concept to the last day on the floor. His attention to detail is what clients remember.',
      image: asset('/members/meshark.jpeg'),
    },
  ]

  const partners = [
    {
      name: 'Global Expo Alliance',
      role: 'Strategic Partner',
      description:
        'International exhibition organizer with a presence in over 30 countries, helping us reach further.',
    },
    {
      name: 'TravelPro International',
      role: 'Travel Partner',
      description:
        'Corporate travel and visa support, so delegates and partners arrive without the hassle.',
    },
  ]

  return (
    <section id="members" className="py-14 md:py-20 bg-white scroll-mt-20">
      <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="grid md:grid-cols-2 gap-4 md:gap-12 md:items-end mb-10 md:mb-12">
          <div>
            <p className="text-cyan-700 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Our team
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
              The people behind the events
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Two directors, one shared goal: events that bring the right
            businesses into the same room.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {directors.map((person, index) => (
            <article
              key={person.name}
              className="group flex gap-5 sm:gap-6 p-4 sm:p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors duration-300"
            >
            
              <div className="relative shrink-0 w-32 sm:w-40 self-start">
                <div className="absolute -bottom-2 -right-2 w-full h-full rounded-lg bg-cyan-500/90"></div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-slate-200">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover   group-hover:grayscale-100 transition-[filter] duration-500"
                  />
                </div>
              </div>

             
              <div className="flex flex-col min-w-0 py-1">
                <span className="text-slate-300 text-sm font-semibold tabular-nums mb-2">
                  0{index + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {person.name}
                </h3>
                <p className="text-cyan-700 text-xs font-medium tracking-[0.15em] uppercase mt-1 mb-3">
                  {person.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {person.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        
        <figure className="mt-12 md:mt-16">
          <div className="overflow-hidden rounded-xl">
            <img
              src={asset('/members/group.jpg')}
              alt="The Globeway team together"
              className="w-full h-40 sm:h-60 md:h-110 object-cover hover:scale-[1.03] transition-transform duration-700"
            />
          </div>
          <figcaption className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mt-3">
            <span className="text-slate-900 text-sm font-semibold">
              One team, one vision
            </span>
           
          </figcaption>
        </figure>

       
        <div className="mt-12 md:mt-16">
          <div className="flex items-center gap-4 mb-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.15em] whitespace-nowrap">
              Partners
            </h3>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-x-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="py-5 border-b border-slate-200"
              >
                <div className="flex items-baseline justify-between gap-4 mb-1.5">
                  <h4 className="text-base font-semibold text-slate-900">
                    {partner.name}
                  </h4>
                  <span className="text-cyan-700 text-xs font-medium uppercase tracking-wide whitespace-nowrap">
                    {partner.role}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-slate-600 text-sm md:text-base">
            Want to exhibit, partner or work with us?
          </p>
          <Link
            href="/Contacts"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-cyan-700 text-white text-sm font-semibold rounded-md transition-colors duration-200"
          >
            Join our network
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Members */
import React from 'react'
import Link from 'next/link'
import { asset } from '@/app/lib/asset'

const Members = () => {
  const groups = [
    {
      label: 'Leadership',
      people: [
        {
          name: 'Mr.Oscar Mwanga Abwoga',
          role: 'Director',
          description:
            'Over 20 years in international trade and event management. Oscar leads the company and its work connecting businesses across continents.',
          image: asset('/members/osca.jpeg'),
        },
        {
          name: 'Mr.Meshack Oduor Ochieng',
          role: 'Director',
          description:
            'Oversees operations for every event, from first concept to the final day on the floor. Nothing gets past him.',
          image: asset('/members/meshark.jpeg'),
        },
      ],
    },
    {
      label: 'Team',
      people: [
        {
          name: 'Eric Kyalo',
          role: 'Administrator',
          description:
            'Keeps schedules, communication and day-to-day admin running so the rest of the team can focus on events.',
          image: asset('/members/admin.jpeg'),
        },
        {
          name: 'Joel Mbithi',
          role: 'IT Specialist',
          description:
            "Looks after the company's website, systems and infrastructure for the team and clients.",
          image: asset('/members/it.jpeg'),
        },
      ],
    },
  ]

  const partners = [
    {
      name: 'Global Expo Alliance',
      role: 'Strategic Partner',
      description:
        'International exhibition organizer with a presence in over 30 countries, helping us reach further.',
    },
    {
      name: 'TravelPro International',
      role: 'Travel Partner',
      description:
        'Corporate travel and visa support, so delegates and partners arrive without the hassle.',
    },
  ]

  return (
    <section id="members" className="py-14 md:py-20 bg-white scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-12 md:items-end mb-10 md:mb-12">
          <div>
            <p className="text-cyan-700 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Our team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              The people behind the events
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            A small team that handles everything from partnerships to the last
            detail on the exhibition floor.
          </p>
        </div>

        {/* Two groups of two, side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0">
          {groups.map((group, groupIndex) => (
            <div
              key={group.label}
              className={
                groupIndex === 0
                  ? 'lg:pr-8 xl:pr-12'
                  : 'lg:pl-8 xl:pl-12 lg:border-l lg:border-slate-200'
              }
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.15em] whitespace-nowrap">
                  {group.label}
                </h3>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10">
                {group.people.map((person) => (
                  <div key={person.name} className="flex flex-col">
                    <div className="aspect-[3/4] sm:aspect-[3/4] overflow-hidden rounded-lg bg-slate-100">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="pt-4">
                      <h4 className="text-base font-semibold text-slate-900 leading-snug">
                        {person.name}
                      </h4>
                      <p className="text-cyan-700 text-xs font-medium tracking-wide uppercase mt-1 mb-3">
                        {person.role}
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {person.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Group photo */}
        <figure className="mt-14 md:mt-16">
          <img
            src={asset('/members/group.jpg')}
            alt="The Globeway team together"
            className="w-full h-40 sm:h-60 md:h-110 object-cover hover:scale-[1.03] transition-transform duration-700"
          />
          <figcaption className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mt-3">
            <span className="text-slate-900 text-sm font-semibold">
              One team, one vision
            </span>
            <span className="text-slate-500 text-sm">
              United by a passion for connecting businesses worldwide.
            </span>
          </figcaption>
        </figure>

        {/* Partners */}
        <div className="mt-14 md:mt-16">
          <div className="flex items-center gap-4 mb-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.15em] whitespace-nowrap">
              Partners
            </h3>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-x-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="py-5 border-b border-slate-200"
              >
                <div className="flex items-baseline justify-between gap-4 mb-1.5">
                  <h4 className="text-base font-semibold text-slate-900">
                    {partner.name}
                  </h4>
                  <span className="text-cyan-700 text-xs font-medium uppercase tracking-wide whitespace-nowrap">
                    {partner.role}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-slate-600 text-sm md:text-base">
            Want to exhibit, partner or work with us?
          </p>
          <Link
            href="/Contacts"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-cyan-700 text-white text-sm font-semibold rounded-md transition-colors duration-200"
          >
            Join our network
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Members