"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { asset } from '@/app/lib/asset'

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
  '4ec12a93-7ac1-4a2e-a66c-5924eb8a5b39 (1).jpg',
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
  'a672e300-8978-4c94-8e96-135f9a50288f (1).jpg',
  'abe40f46-728d-4153-84a9-6879037417fc.jpg',
  'af9c5050-db77-4fde-adf4-77056e2bd09b.jpg',
  'b0563707-49ca-4390-87c1-1d2c97cc2548.jpg',
  'b0829417-e7e9-49d7-b5d3-d547ab7ba13d.jpg',
  'b0829417-e7e9-49d7-b5d3-d547ab7ba13d (1).jpg',
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
  'e35b0065-26aa-452e-9133-4ba973b61adf (1).jpg',
  'ebf9cc3e-354c-46f4-a932-b15f62b977c6.jpg',
  'f060d265-c091-48cd-9955-49eccf060c2f.jpg',
  'f24515ac-8065-4956-a426-b9fa9d5684ff.jpg',
  'f5cfa28a-5425-42c2-b36a-19f847cdee89.jpg',
  'f61e1b01-b514-4d36-a3b7-af5dea80f3a7.jpg',
  'f84f0392-8820-4007-9d15-a727ba50824f.jpg',
  'f8de5353-7e1d-4434-b976-4e539a30b113.jpg',
  'ffe52328-598c-4ab2-a29f-a3389e291b37.jpg',
  'WhatsApp Image 2026-10-06 at 19.05.43.jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.44.jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.45.jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.46.jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.48.jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.49.jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.49(1).jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.49(2).jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.50.jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.50(1).jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.54.jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.54(1).jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.54(2).jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.55.jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.56.jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.56(1).jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.56(2).jpeg',
  'WhatsApp Image 2026-10-06 at 19.05.57.jpeg',
]

const allImages = filenames.map((filename, i) => ({
  src: asset(`/gallery/${encodeURIComponent(filename)}`),
  alt: `Gallery image ${i + 1}`,
  id: filename,
}))

type GalleryImage = { src: string; alt: string; id: string }

// Tile layout — same fixed positions, images shuffle between them
const tiles = [
  { size: 'lg', span: 'col-span-2 row-span-2' },
  { size: 'md', span: 'col-span-1 row-span-1' },
  { size: 'sm', span: 'col-span-1 row-span-1' },
  { size: 'md', span: 'col-span-1 row-span-1' },
  { size: 'sm', span: 'col-span-1 row-span-1' },
  { size: 'lg', span: 'col-span-2 row-span-2' },
  { size: 'sm', span: 'col-span-1 row-span-1' },
  { size: 'md', span: 'col-span-1 row-span-1' },
  { size: 'sm', span: 'col-span-1 row-span-1' },
  { size: 'md', span: 'col-span-1 row-span-1' },
  { size: 'sm', span: 'col-span-1 row-span-1' },
  { size: 'md', span: 'col-span-1 row-span-1' },
] as const

const HOLD_MS = 10_000   // how long each set stays on screen
const FADE_MS = 800      // fade duration — smooth, not jarring

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickRandom<T>(pool: T[], count: number): T[] {
  if (pool.length <= count) return shuffle(pool)
  return shuffle(pool).slice(0, count)
}

const Gallery = ({ images = allImages }: { images?: GalleryImage[] }) => {
  const pool = images.length > 0 ? images : allImages
  const tileCount = Math.min(tiles.length, pool.length)

  const [assignment, setAssignment] = useState<GalleryImage[]>(() =>
    pickRandom(pool, tileCount)
  )
  const [fading, setFading] = useState(false)
  const poolRef = useRef(pool)
  poolRef.current = pool

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Preload every image once so the shuffle never shows a blank tile
  useEffect(() => {
    poolRef.current.forEach((img) => {
      const i = new window.Image()
      i.src = img.src
    })
  }, [])

  // Shuffle loop — hold 10s, fade out, swap, fade in, repeat
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    let swapId: ReturnType<typeof setTimeout>

    const cycle = () => {
      // fade out
      setFading(true)

      // swap at the midpoint of the fade so the transition feels seamless
      swapId = setTimeout(() => {
        setAssignment(pickRandom(poolRef.current, tileCount))
        setFading(false)
      }, FADE_MS / 2)

      // schedule the next cycle — hold for HOLD_MS from the swap point
      timeoutId = setTimeout(cycle, HOLD_MS)
    }

    timeoutId = setTimeout(cycle, HOLD_MS)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(swapId)
    }
  }, [tileCount])

  const next = useCallback(
    () => setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % pool.length)),
    [pool.length]
  )
  const prev = useCallback(
    () => setSelectedIndex((p) => (p === null ? 0 : (p - 1 + pool.length) % pool.length)),
    [pool.length]
  )

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedIndex, next, prev])

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedIndex])

  return (
    <>
      <section
        id="gallery"
        className="scroll-mt-20 bg-[#f7f6f3] px-6 py-24 text-[#0b1f33] md:px-12 md:py-32"
      >
        {/* Header */}
        <div className="mx-auto mb-12 max-w-[1520px] md:mb-16">
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-10">
            <div className="md:col-span-7">
              <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#004d9c]">
                <span className="inline-block h-px w-6 bg-[#004d9c]" />
                Gallery
               
              </div>

              <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.02em]">
                Moments from
                <br />
                <span className="italic text-[#004d9c]">the work.</span>
              </h2>
            </div>

            <p className="max-w-sm text-base leading-relaxed text-[#0b1f33]/70 md:col-span-5 md:justify-self-end">
              Stands, exhibitions and events. Click any photo to open it.
            </p>
          </div>
        </div>

        {/* Tile grid */}
        <div className="mx-auto max-w-[1320px]">
          <div
            className={`
              grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4
              transition-opacity ease-in-out
              ${fading ? 'opacity-0' : 'opacity-100'}
            `}
            style={{ transitionDuration: `${FADE_MS}ms` }}
          >
            {assignment.map((image, tileIndex) => {
              const tile = tiles[tileIndex]
              if (!tile) return null

              return (
                <button
                  key={tileIndex}
                  onClick={() => {
                    const idx = pool.findIndex((p) => p.id === image.id)
                    setSelectedIndex(idx === -1 ? 0 : idx)
                  }}
                  className={`
                    group relative cursor-pointer overflow-hidden
                    bg-[#e8e6e1]
                    ${tile.span}
                    ${
                      tile.size === 'lg'
                        ? 'aspect-square md:aspect-auto md:min-h-[28rem]'
                        : 'aspect-square md:min-h-[13.5rem]'
                    }
                    focus:outline-none focus:ring-2 focus:ring-[#004d9c] focus:ring-offset-2
                  `}
                  aria-label={`View ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f33]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b1f33]/95 p-4 backdrop-blur-sm animate-[lbFade_.25s_ease]"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 md:p-6">
            <span className="font-mono text-[11px] tabular-nums tracking-[0.14em] text-white/60">
              {String(selectedIndex + 1).padStart(2, '0')} / {String(pool.length).padStart(2, '0')}
            </span>
            <button
              onClick={() => setSelectedIndex(null)}
              className="cursor-pointer border-b border-white/40 pb-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white transition-colors hover:border-[#00ade2] hover:text-[#00ade2]"
            >
              Close
            </button>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full p-3 text-white/60 transition-colors hover:bg-white/10 hover:text-white md:left-6"
            aria-label="Previous image"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full p-3 text-white/60 transition-colors hover:bg-white/10 hover:text-white md:right-6"
            aria-label="Next image"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <img
            key={selectedIndex}
            src={pool[selectedIndex].src}
            alt={pool[selectedIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full object-contain animate-[lbImg_.3s_ease]"
          />
        </div>
      )}

      <style>{`
        @keyframes lbFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lbImg {
          from { opacity: 0; transform: scale(0.98); }
          to   { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[lb"] { animation: none !important; }
        }
      `}</style>
    </>
  )
}

export default Gallery