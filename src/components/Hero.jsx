export default function Hero() {
  return (
    <section id="top" className="honeycomb relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="rounded-sm bg-gold px-4 py-1.5 text-xs font-bold tracking-widest text-black">
          24 AÑOS FORMANDO CAMPEONES
        </span>

        <h1 className="mt-6 text-5xl leading-[0.95] tracking-tight md:text-7xl">
          <span className="font-display block text-white">ENTRENÁ</span>
          <span className="font-accent block italic text-gold">DURO.</span>
          <span className="font-display block text-white">VIVÍ HARD.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-gray-300 md:text-lg">
          El gimnasio más completo de la ciudad. Musculación, pileta olímpica, clases
          grupales y entrenadores de élite. Tu transformación empieza acá.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#planes"
            className="rounded-sm bg-gold px-8 py-3.5 text-sm font-bold tracking-wide text-black transition hover:bg-gold-dark"
          >
            EMPEZÁ HOY →
          </a>
          <a
            href="#servicios"
            className="rounded-sm border border-white/30 px-8 py-3.5 text-sm font-bold tracking-wide text-white transition hover:border-gold hover:text-gold"
          >
            VER SERVICIOS
          </a>
        </div>
      </div>
    </section>
  )
}
