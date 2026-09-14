const SOCIALS = ['INSTAGRAM', 'FACEBOOK', 'YOUTUBE']

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-white/10 bg-black px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-gold">HARD</p>
          <p className="mt-3 max-w-xs text-sm text-gray-400">
            24 años formando campeones. Tu comunidad fitness.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-gold">HORARIOS</p>
          <ul className="mt-3 space-y-1 text-sm text-gray-400">
            <li>Lunes a Viernes: 6:00 – 23:00</li>
            <li>Sábados: 7:00 – 21:00</li>
            <li>Domingos: 8:00 – 20:00</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-gold">CONTACTO</p>
          <ul className="mt-3 space-y-1 text-sm text-gray-400">
            <li>📍 Av. Siempreviva 742, Buenos Aires</li>
            <li>📞 011 4XXX-XXXX</li>
            <li>📧 info@hardgimnasio.com.ar</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 md:flex-row">
        <p>© 2026 HARD GIMNASIO. TODOS LOS DERECHOS RESERVADOS.</p>
        <div className="flex gap-5">
          {SOCIALS.map((s) => (
            <a key={s} href="#" className="tracking-widest hover:text-gold">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
