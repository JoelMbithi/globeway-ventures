"use client"
import React, { useState, useEffect } from 'react'

const filenames = [
  '0426f457-c214-4325-9d10-4fe68de3a44d.jpg',
  '0510659e-460d-47f4-b5b0-24107e7145d9.jpg',
  '05f87d18-94be-4e61-80c5-cf8e515aafc4.jpg',
  '09024102-c7b3-4711-b45e-8792a81fe62c.jpg',
  '0ae1a52e-5a1d-43ce-a79d-3cf5c0b1f331.jpg',
  '0e3ffb6e-8bc7-4c4d-917e-2955e92c1296.jpg',
  '0e5cc197-4c77-47bb-b280-7c1376f84885.jpg',
  '10ca5d44-0c52-488a-8f1e-2beebec373f9.jpg',
  '126bc067-3c55-44aa-bd81-aafc91cd4ca0.jpg',
  '18fb2635-45a3-4eec-86a4-b9901570626c.jpg',
  '1d9692d1-92eb-42d1-ad6b-000635c1df7a.jpg',
  '22c2b023-5cf6-47dc-b1db-dec5effd0866.jpg',
  '33f8bf4f-77eb-49d6-9a37-d4d7cee871c5.jpg',
  '430accca-964e-4fd1-9f87-845015ae667f.jpg',
  '4370bfde-e3da-4520-8ec6-2b0de2ba4206.jpg',
  '462e8a3d-6521-4cd7-bed5-aace93bfd965.jpg',
  '46dc4c2c-f824-4738-9718-6258db5891de.jpg',
  '47cb130b-45ec-4f53-80d2-19a0c6b200c8.jpg',
 
  '4ec12a93-7ac1-4a2e-a66c-5924eb8a5b39.jpg',
  '4fdeb3cd-5fd3-4a51-b448-af559672d179.jpg',
  '543cd8d6-dd84-4b74-a799-d3ccd104968e.jpg',
  '548d56ae-5fd3-42fa-97e0-b9aba5f2e6eb.jpg',
  '59d54fc8-b496-48bd-bd62-491ff3c85a4a.jpg',
  '5b8f04d4-d7e0-4e2c-a155-91bbd075fff9.jpg',
  '5fa9fd29-383b-4dfd-b25b-3593083296b2.jpg',
  '64281988-06ec-4062-b1f7-065a5d2b93ff.jpg',
  '6632730e-2c80-4ab8-8ace-10c5464647e0.jpg',
  '69e49504-d261-43f4-a7b7-273e7ac7d5c6.jpg',
  '7dd4e303-517c-4b43-9c18-f997ec4d64ff.jpg',
  '8265cfe2-e580-4632-a30f-5c13e5f91965.jpg',
  '8633285e-15fb-40b2-ade5-29bca7a5ced2.jpg',
  '8778f7dc-9347-4130-abb8-1ee4e81f660f.jpg',
  '8ac6edab-f289-4bd9-93fc-df1d62aadf7f.jpg',
  '8b031e34-1a21-4dbc-af24-74ec367d7298.jpg',
  '8bf0ca5f-e2ff-47c3-ad6e-9b57b8d4555a.jpg',
  '8d8e5084-2ece-4985-bcc1-fa682a253013.jpg',
  '93a4283b-963f-48a8-b82c-0b0e3401b303.jpg',
  '9e54bc1f-8596-49cf-b969-112a02eb2ca1.jpg',
  '9ffc8e88-b347-4e8d-b371-6b58dcaae130.jpg',
 
  'a672e300-8978-4c94-8e96-135f9a50288f.jpg',
  'abe40f46-728d-4153-84a9-6879037417fc.jpg',
  'af9c5050-db77-4fde-adf4-77056e2bd09b.jpg',
  'b0563707-49ca-4390-87c1-1d2c97cc2548.jpg',
  
  'b0829417-e7e9-49d7-b5d3-d547ab7ba13d.jpg',
  'b2b045d4-8e9b-4a01-8671-77ea570f6613.jpg',
  'b95e35ca-8fdf-46de-ba88-7438acd4807f.jpg',
  'ba802cee-28ab-49d0-9139-ffb17d37b488.jpg',
  'baf4c552-b68d-44d4-9fe6-50d88f277a34.jpg',
  'bcf91727-5212-4bba-aefd-b19af907e238.jpg',
  'bd059e0b-89d0-4230-b4e7-4662b5b2d848.jpg',
  'bfc2fd03-453e-4a6d-9dbc-adcc6967a307.jpg',
  'c2759916-2725-4828-b89b-ef7262060b39.jpg',
  'c4bbe141-04f0-4559-ab2e-2b99a89b9440.jpg',
  'c4c7b450-4de8-4453-a9e6-f1ee30f06d7a.jpg',
  'c4f80e93-375d-4b30-9ebb-a50fab89ef35.jpg',
  'cbaef5a8-7057-4f72-adce-ce02bd72212e.jpg',
  'cc317604-2f83-4d30-a3bd-422423b4bfae.jpg',
  'cd21426c-793c-4d7d-a32e-6dcfe2e40f76.jpg',
  'd4be3f9a-4b75-4998-8642-bb50ca357ada.jpg',
  'd6de8a6c-0a52-44a4-a351-f159aae89855.jpg',
  'd9d04ad6-8671-4610-a8ba-00a2a3833255.jpg',
  'db39506f-25f1-46c5-8336-0a8d81c8b9a1.jpg',
  'e1333099-46f1-4764-b683-f3b5a269e713.jpg',

  'e35b0065-26aa-452e-9133-4ba973b61adf.jpg',
  'ebf9cc3e-354c-46f4-a932-b15f62b977c6.jpg',
  'f060d265-c091-48cd-9955-49eccf060c2f.jpg',
  'f24515ac-8065-4956-a426-b9fa9d5684ff.jpg',
  'f5cfa28a-5425-42c2-b36a-19f847cdee89.jpg',
  'f61e1b01-b514-4d36-a3b7-af5dea80f3a7.jpg',
  'f84f0392-8820-4007-9d15-a727ba50824f.jpg',
  'f8de5353-7e1d-4434-b976-4e539a30b113.jpg',
  'ffe52328-598c-4ab2-a29f-a3389e291b37.jpg',
]

const images = filenames.map((filename, i) => ({
  src: `/gallery/${filename}`,
  alt: `Gallery image ${i + 1}`,
}))

const Gallery = ({ images: propImages }: { images?: { src: string; alt: string }[] } = {}) => {
  const galleryImages = propImages ?? images
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? 0 : (prev + 1) % galleryImages.length
        )
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null ? 0 : (prev - 1 + galleryImages.length) % galleryImages.length
        )
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedIndex, galleryImages.length])

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedIndex])

  return (
    <>
      <section className="py-20 md:py-28 bg-white" id="gallery">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block text-cyan-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
              Our Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Creating Experiences That Stand Out
            </h2>
            <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              A glimpse into exhibition environments, brand experiences and event solutions delivered with professionalism and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    View
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
            {selectedIndex + 1} / {galleryImages.length}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex((prev) =>
                prev === null ? 0 : (prev - 1 + galleryImages.length) % galleryImages.length
              )
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-cyan-500 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex((prev) =>
                prev === null ? 0 : (prev + 1) % galleryImages.length
              )
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-cyan-500 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <img
            src={galleryImages[selectedIndex].src}
            alt={galleryImages[selectedIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
          />
        </div>
      )}
    </>
  )
}

export default Gallery