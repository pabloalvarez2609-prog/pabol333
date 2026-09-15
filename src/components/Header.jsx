import { useState } from 'react'

function BeeLogo() {
  return (
    <svg viewBox="0 0 64 64" width="34" height="34" className="shrink-0 text-gold">
      <path d="M20 26 C4 20 2 8 10 4 C18 2 26 12 28 24 Z" fill="currentColor" opacity="0.4" />
      <path d="M44 26 C60 20 62 8 54 4 C46 2 38 12 36 24 Z" fill="currentColor" opacity="0.4" />
      <path d="M26 10 L20 2 L24 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M38 10 L44 2 L40 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="20" cy="2" r="1.6" fill="currentColor" />
      <circle cx="44" cy="2" r="1.6" fill="currentColor" />
      <ellipse cx="32" cy="16" rx="12" ry="9" fill="currentColor" transform="rotate(-6 32 16)" />
      <path d="M22 13 Q26 8 31 13 Q26 17 22 13 Z" fill="black" />
      <path d="M42 13 Q38 8 33 13 Q38 17 42 13 Z" fill="black" />
      <path d="M21 19 Q32 27 43 19 Q32 24 21 19 Z" fill="black" />
      <path
        d="M24 19.5 L26 22 L28 19.5 M30 20 L32 22.5 L34 20 M36 19.5 L38 22 L40 19.5"
        stroke="white"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 27 C18 40 22 52 32 58 C42 52 46 40 44 27 C38 31 26 31 20 27 Z" fill="currentColor" />
      <rect x="14" y="34" width="36" height="5" rx="2.5" fill="currentColor" transform="rotate(-18 32 36.5)" />
      <rect x="14" y="34" width="36" height="5" rx="2.5" fill="currentColor" transform="rotate(18 32 36.5)" />
      <rect x="21" y="44" width="22" height="3" fill="black" />
      <rect x="22" y="50" width="20" height="3" fill="black" />
      <path d="M28 58 L32 64 L36 58 Z" fill="currentColor" />
    </svg>
  )
}

const LINKS = [
  { label: 'NOSOTROS', href: '#nosotros' },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'PLANES', href: '#planes' },
  { label: 'COMUNIDAD', href: '#comunidad' },
  { label: 'CONTACTO', href: '#contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <BeeLogo />
          <span className="font-display text-2xl tracking-wide text-gold">HARD</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-gray-300 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#planes"
          className="hidden rounded-sm bg-gold px-5 py-2.5 text-sm font-bold tracking-wide text-black transition hover:bg-gold-dark md:inline-block"
        >
          INSCRIBITE
        </a>

        <button
          type="button"
          className="text-gold md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/10 bg-black px-6 py-6 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-wide text-gray-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#planes"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm bg-gold px-5 py-2.5 text-center text-sm font-bold tracking-wide text-black"
          >
            INSCRIBITE
          </a>
        </nav>
      )}
    </header>
  )
}
