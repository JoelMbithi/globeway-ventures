"use client"
import React, { useState } from 'react'
import { asset } from '@/app/lib/asset'

const Contacts = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (parseInt(form.captcha) !== 14) {
      setStatus('error')
      return
    }
    setStatus('success')
    setForm({ name: '', email: '', phone: '', message: '', captcha: '' })
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Head Office',
      value: 'Nairobi, Kenya',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Contact Numbers',
      value: 'Official phone coming soon',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'E-mail',
      value: 'Official email coming soon',
    },
  ]

  return (
    <>
      {/* ===== PAGE TITLE AREA ===== */}
      <div className="relative overflow-hidden">
        <img
          src={asset('/images/sarit.jpg')}
          alt="Contact GLOBEWAY VENTURES"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-blue-900/80"></div>

        <div className="relative max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <ul className="flex items-center justify-center gap-2 text-sm md:text-base text-slate-300">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition-colors cursor-pointer">
                Home
              </a>
            </li>
            <li className="text-slate-500">/</li>
            <li className="text-cyan-400 font-medium">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* ===== CONTACT AREA ===== */}
      <section id="contact" className="py-20 md:py-28 bg-white scroll-mt-20">
        <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Info Side */}
            <div className="lg:col-span-5 space-y-5">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-slate-200 hover:border-cyan-500/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 bg-white"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500 flex items-center justify-center transition-colors duration-300">
                    <span className="text-cyan-600 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <div className="text-cyan-600 font-semibold text-xs tracking-[0.15em] uppercase mb-1">
                      {item.label}
                    </div>
                    <div className="text-slate-900 font-semibold leading-snug">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label htmlFor="name" className="block text-slate-900 font-semibold text-sm mb-2">
                      Name <span className="text-cyan-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition bg-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-slate-900 font-semibold text-sm mb-2">
                      Email <span className="text-cyan-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition bg-white"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block text-slate-900 font-semibold text-sm mb-2">
                      Phone Number <span className="text-cyan-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition bg-white"
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-slate-900 font-semibold text-sm mb-2">
                      Message <span className="text-cyan-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition bg-white resize-none"
                      placeholder="Tell us about your project, exhibition or event..."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="captcha" className="block text-slate-900 font-semibold text-sm mb-2">
                      Solve: 7 + 7 <span className="text-cyan-600">*</span>
                    </label>
                    <input
                      type="number"
                      id="captcha"
                      name="captcha"
                      required
                      value={form.captcha}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition bg-white"
                      placeholder="Your answer"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                    >
                      Submit
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>

                    {status === 'success' && (
                      <p className="mt-4 text-green-600 font-medium">
                        ✓ Thank you! We'll be in touch shortly.
                      </p>
                    )}
                    {status === 'error' && (
                      <p className="mt-4 text-red-600 font-medium">
                        ✗ Incorrect captcha. Please try again.
                      </p>
                    )}
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ===== OUR PREMISES ===== */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block text-cyan-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
              Our Locations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Our Premises
            </h2>
            <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <img
                src={asset('/images/sarit.jpg')}
                alt="GLOBEWAY VENTURES Nairobi Office"
                className="w-full h-120 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                <h3 className="text-white font-bold text-lg">Nairobi, Kenya</h3>
                <p className="text-cyan-400 text-sm font-medium">Head Office</p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <img
                src={asset('/images/sarit2.jpg')}
                alt="GLOBEWAY VENTURES Kampala Office"
                className="w-full h-120 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block text-cyan-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
              Find Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Locate Us
            </h2>
            <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto"></div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32452600908!2d36.68357585!3d-1.30286355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1733000000000!5m2!1sen!2ske"
              className="w-full h-[400px] md:h-[500px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GLOBEWAY VENTURES — Nairobi, Kenya"
            />
          </div>

        </div>
      </section>
    </>
  )
}

export default Contacts