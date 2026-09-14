export default function Testimonials() {
  return (
    <section id="comunidad" className="bg-black px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold tracking-widest text-gold">LO QUE DICEN NUESTROS SOCIOS</p>

        <p className="font-display mt-8 text-2xl leading-snug text-white md:text-3xl">
          "El HARD cambió mi vida. El ambiente, los profes, la pileta... es otro nivel.
          No me imagino entrenando en otro lugar."
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display text-black">
            M
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold text-white">Martina G.</p>
            <p className="text-xs tracking-widest text-gray-500">SOCIA DESDE 2019</p>
          </div>
        </div>
      </div>
    </section>
  )
}
