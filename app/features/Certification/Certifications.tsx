import React from 'react'

const Certifications = () => {
  const certificates = [
    { image: 'assets/img/certificates/DGFT.jpg', label: 'REGISTERED', name: 'DGFT' },
    { image: 'assets/img/certificates/cert2.jpg', label: 'CERTIFIED', name: 'ISO Certified' },
    { image: 'assets/img/certificates/cert3.jpg', label: 'REGISTERED', name: 'Trade Council' },
    { image: 'assets/img/certificates/cert4.jpg', label: 'MEMBER', name: 'Chamber of Commerce' },
    { image: 'assets/img/certificates/cert5.jpg', label: 'MEMBER', name: 'Export Association' },
  ]

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-cyan-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Recognized, registered, and trusted — our certifications reflect a
            commitment to professional excellence and industry standards.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl border border-slate-200 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 mb-4">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay badge */}
                <div className="absolute top-3 left-3 bg-cyan-500 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-lg">
                  {cert.label}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-1">
                  {cert.label}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {cert.name}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Certifications