import React from 'react'

const CONTACTS = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/254700000000?text=' + encodeURIComponent(
      "Hi Globway Ventures, I'd like to know more about your exhibitions."
    ),
    color: 'bg-[#25D366]',
    ring: 'ring-[#25D366]/30',
    label: 'WhatsApp',
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zM16.02 5.5c-5.803 0-10.513 4.71-10.513 10.513 0 1.863.485 3.61 1.33 5.127L5.5 26.5l5.518-1.44c1.457.79 3.122 1.234 4.999 1.234 5.803 0 10.513-4.71 10.513-10.513S21.823 5.5 16.02 5.5zm0 19.236c-1.663 0-3.222-.488-4.522-1.318l-.315-.2-3.35.87.9-3.265-.214-.344a8.66 8.66 0 0 1-1.318-4.578c0-4.808 3.91-8.718 8.719-8.718 4.808 0 8.718 3.91 8.718 8.718 0 4.808-3.91 8.718-8.718 8.718z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/your-handle',
    color: 'bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
    ring: 'ring-[#DD2A7B]/30',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/your-page',
    color: 'bg-[#1877F2]',
    ring: 'ring-[#1877F2]/30',
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
      </svg>
    ),
  },
]

const SocialRail = () => {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-2 md:bottom-7 md:right-6 md:gap-2.5">
      {CONTACTS.map((c) => (
        <a
          key={c.name}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={c.name}
          className="group flex items-center"
        >
          {/* Label pill — slides in on hover */}
          <span
            className="
              mr-2 hidden translate-x-2 rounded-md bg-slate-900 px-2.5 py-1.5
              text-[11px] font-medium tracking-wide text-white
              opacity-0 shadow-md transition-all duration-200
              group-hover:translate-x-0 group-hover:opacity-100
              md:block
            "
          >
            {c.label}
          </span>

          {/* Icon button */}
          <span
            className={`
              flex h-10 w-10 items-center justify-center rounded-full
              text-white shadow-md ring-1 ring-black/5
              transition-transform duration-200
              group-hover:scale-110
              md:h-11 md:w-11
              ${c.color}
            `}
          >
            <span className="h-5 w-5 md:h-[22px] md:w-[22px]">{c.icon}</span>
          </span>
        </a>
      ))}
    </div>
  )
}

export default SocialRail