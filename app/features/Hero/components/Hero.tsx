"use client"
import React, { useState, useEffect } from 'react'

const Hero = () => {
  const slides = [
    { src: '/images/sarit.jpg', alt: 'GLOBEWAY Exhibition' },
    { src: '/images/sarit2.jpg', alt: 'GLOBEWAY Exhibition' },
    { src: '/images/sarit3.jpg', alt: 'GLOBEWAY Exhibition' },
    { src: '/images/sarit4.jpg', alt: 'GLOBEWAY Exhibition' },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/40"></div>

      {/* Content */}
      <div className="relative max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="max-w-3xl">

          {/* Label */}
          <span className="inline-block text-cyan-400 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            Exhibitions • Events • Brand Visibility
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            We Make It Stand Out
          </h1>

          {/* Divider */}
          <div className="w-20 h-1 bg-cyan-400 rounded-full mb-6"></div>

          {/* Intro */}
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-4 max-w-2xl">
            Professional exhibition and event management solutions connecting global brands with opportunities in Kenya and the East African market.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
            From exhibitions and trade fairs to booth construction, logistics, travel assistance, security, branding and marketing, GLOBEWAY Ventures delivers end-to-end solutions designed to create visibility and impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="exhibitions.html"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Exhibitions
            </a>
            <a
              href="contact.html"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent hover:bg-white text-white hover:text-slate-900 font-semibold rounded-lg border-2 border-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Partner With Us
            </a>
          </div>

        </div>
      </div>

      {/* Slideshow Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

    </section>
  )
}

export default Hero