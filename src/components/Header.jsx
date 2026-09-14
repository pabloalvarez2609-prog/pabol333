import { useState } from 'react'

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
          <span className="text-2xl">🦁</span>
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
