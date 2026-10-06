import React from 'react'
import { asset } from '@/app/lib/asset'

const statements = [
  {
    label: 'Our vision',
    title: 'The gateway to East Africa',
    text: 'To be East Africa’s leading gateway for global brands looking to enter the market and be seen.',
  },
  {
    label: 'Our mission',
    title: 'Real connections, well run',
    text: 'To run exhibitions that are professional and run smoothly, and that connect global companies with local opportunity.',
  },
]

const Vission = () => {
  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <div className="mx-auto max-w-[1740px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">

          {/* Photo */}
          <div className="relative min-h-[320px] overflow-hidden bg-slate-800 lg:col-span-5 lg:min-h-[640px]">
            <img
              src={asset('/images/sarit3.jpg')}
              alt="Globeway exhibition floor"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-24 md:p-8">
              <p className="font-serif text-2xl leading-snug text-white md:text-3xl">
                Where we’re headed
              </p>
            </div>
          </div>

          {/* Statements */}
          <div className="flex flex-col lg:col-span-7">
            {statements.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-1 flex-col justify-center border-t border-white/20 py-10 md:py-12 ${
                  index === statements.length - 1
                    ? 'border-b lg:border-b-0'
                    : ''
                }`}
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-10 bg-cyan-400" />
                  <span className="text-sm font-medium text-slate-300">
                    {item.label}
                  </span>
                </div>

                <h3 className="font-serif text-4xl leading-[1.1] tracking-tight text-white md:text-5xl">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Vission