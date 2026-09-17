import React from 'react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: 'index.html' },
    { name: 'About Us', href: 'about.html' },
    { name: 'Sectors', href: 'sectors.html' },
    { name: 'Exhibitions & Events', href: 'exhibitions.html' },
    { name: 'Services', href: 'services.html' },
    { name: 'Gallery', href: 'gallery.html' },
    { name: 'Contact', href: 'contact.html' },
  ]

  const services = [
    'Exhibition Management',
    'Booth Construction',
    'Travel & Visa Assistance',
    'Security Solutions',
    'Logistics & Freight',
    'Branding & Marketing',
  ]

  const sectors = [
    'Agriculture',
    'Construction',
    'Manufacturing',
    'Technology',
    'Tourism',
    'Energy',
  ]

  return (
    <footer className="bg-slate-900 text-slate-300">

     

      {/* ===== FOOTER MAIN ===== */}
      <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* 1. BRAND */}
          <div className="lg:col-span-4">
            <img
              src="globeway-logo.jpg"
              alt="GLOBWAY VENTURES"
              className="h-50 w-auto object-contain mb-5  rounded"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              GLOBWAY VENTURES is a fully integrated exhibition and events management company connecting global brands with opportunities in Kenya and East Africa.
            </p>
            <div className="inline-block text-cyan-400 font-semibold text-sm tracking-wider italic border-l-2 border-cyan-500 pl-3">
              We Make It Stand Out.
            </div>
          </div>

          {/* 2. SHORT LINKS */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-base mb-5 tracking-wide">
              Short Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. SERVICES */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-base mb-5 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="services.html"
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. SECTORS */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-base mb-5 tracking-wide">
              Sectors
            </h3>
            <ul className="space-y-3">
              {sectors.map((sector, index) => (
                <li key={index}>
                  <a
                    href="sectors.html"
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-300"></span>
                    {sector}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. CONTACT */}
          <div  className="lg:col-span-2">
           <a
              href="/Contacts" className="text-white font-bold text-base mb-5 tracking-wide">
              Get In Touch
            </a>

            <div className="space-y-4 text-sm">
              <div>
                <div className="text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-1">
                  Location
                </div>
                <div className="text-slate-400">Nairobi, Kenyaa</div>
              </div>

              <div>
                <div className="text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-1">
                  Email
                </div>
                <div className="text-slate-400">Official email coming soon</div>
              </div>

              <div>
                <div className="text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-1">
                  Phone
                </div>
                <div className="text-slate-400">Official phone coming soon</div>
              </div>
            </div>

            <a
              href="contact.html"
              className="inline-flex items-center gap-2 mt-5 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors duration-300 group"
            >
              Contact Us
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* ===== FOOTER BOTTOM ===== */}
      <div className="border-t border-slate-800">
        <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">

            {/* Left — Copyright */}
            <div className="text-center md:text-left order-2 md:order-1">
              © 2026 GLOBWAY VENTURES. All Rights Reserved.
            </div>

            {/* Center — Tagline */}
            <div className="text-cyan-500 font-semibold tracking-[0.2em] uppercase text-[10px] sm:text-xs order-1 md:order-2">
              Exhibitions • Events • Brand Visibility
            </div>

            {/* Right — Legal */}
            <div className="flex items-center gap-3 order-3">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-slate-700">|</span>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                Terms & Conditions
              </a>
            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer