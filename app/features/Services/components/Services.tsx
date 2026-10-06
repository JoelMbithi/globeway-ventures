import React from 'react'
import { asset } from '@/app/lib/asset'

const services = [
  {
    number: '01',
    title: 'Exhibitions & Trade Fairs',
    description:
      'Exhibitions put buyers and sellers face to face, in one place at one time. We bring leading brands to our shows around the world and connect them directly with the business delegates they want to meet.',
    image: asset('/images/sarit.jpg'),
    secondaryImage: asset('/images/sarit4.jpg'),
  },
  {
    number: '02',
    title: 'Event Management & Solutions',
    description:
      'Whatever your event needs, we can take it on: booth design and construction, conferences, webinars, branding and marketing, travel and visa support, and the planning and running of the event itself.',
    image: asset('/images/sarit4.jpg'),
    secondaryImage: asset('/images/sarit3.jpg'),
  },
  {
    number: '03',
    title: 'Buyer Seller Meets',
    description:
      'We have organized Buyer Seller and Reverse Buyer Seller Meets across the world. With our network of international partners, we can set one up in whichever country suits your sector and where the demand is.',
    image: asset('/images/sarit3.jpg'),
    secondaryImage: asset('/images/sarit.jpg'),
  },
]

const Services = () => {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1740px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-slate-900" />
              <span className="text-sm font-medium text-slate-900">
                What we do
              </span>
            </div>
            <h2 className="max-w-2xl font-serif text-4xl leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              How we help brands show up
            </h2>
          </div>

          {/* <a
            href="/services"
            className="inline-flex w-fit items-center gap-2 border-b border-slate-900 pb-1 text-sm font-medium text-slate-900 transition-colors hover:border-cyan-700 hover:text-cyan-700"
          >
            All services
            <span aria-hidden="true">→</span>
          </a> */}
        </div>

        {/* Rows */}
        <div>
          {services.map((service, index) => {
            const reversed = index % 2 === 1

            return (
              <article
                key={service.number}
                className="grid grid-cols-1 gap-6 border-t border-slate-300 py-8 md:py-10 lg:grid-cols-12 lg:gap-10"
              >
                {/* Main image */}
                <div className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[3/2] h-full w-full overflow-hidden bg-slate-200 lg:aspect-auto lg:min-h-[420px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Second image + text */}
                <div
                  className={`flex flex-col gap-6 lg:col-span-5 ${
                    reversed ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="relative min-h-[200px] flex-1 overflow-hidden bg-slate-200">
                    <img
                      src={service.secondaryImage}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <span className="font-serif text-lg tabular-nums text-slate-400">
                      {service.number}
                    </span>
                    <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-slate-900 md:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
          <div className="border-t border-slate-300" />
        </div>

      </div>
    </section>
  )
}

export default Services