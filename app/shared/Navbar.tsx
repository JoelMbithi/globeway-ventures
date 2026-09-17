"use client"
import React, { useState } from 'react'
import { asset } from '../lib/asset'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Sectors', href: '#sectors' },
    { name: 'Exhibitions & Events', href: '#events' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '/Gallery' },
    { name: 'Contact', href: '/Contacts' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#home" className="flex-shrink-0 cursor-pointer">
            <img
              src={asset('/globeway-logo.jpg')} 
              alt="GLOBEWAY VENTURES Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-7 xl:gap-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-cyan-600 font-medium text-sm xl:text-base transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-900 p-2 cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="max-w-[1740px] mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-cyan-600 hover:bg-slate-50 font-medium text-base py-3 px-3 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar