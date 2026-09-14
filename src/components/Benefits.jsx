const BENEFITS = [
  {
    pct: '15%',
    title: 'CONSULTA INICIAL',
    desc: 'Para vos, que querés empezar a cuidarte.',
  },
  {
    pct: '25%',
    title: 'TRAÉ A UN AMIGO',
    desc: 'Para vos y para quien invités. Los dos ganan.',
  },
]

export default function Benefits() {
  return (
    <section className="honeycomb px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-bold tracking-widest text-gold">SOCIOS HARD</p>
        <h2 className="font-display mt-3 text-center text-4xl md:text-5xl">BENEFICIOS</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-gray-400 md:text-base">
          CUIDÁ TU SALUD — INICIÁ TU CAMBIO HOY
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-sm border border-white/10 bg-black p-8 text-center">
              <p className="font-display text-5xl text-gold">{b.pct}</p>
              <p className="mt-1 text-xs font-bold tracking-widest text-gold">DE DESCUENTO</p>
              <p className="font-display mt-4 text-xl text-white">{b.title}</p>
              <p className="mt-2 text-sm text-gray-400">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-sm border border-white/10 bg-black p-8 text-center">
          <p className="font-display text-lg text-gold">NUTRICIÓN CLÍNICA Y DEPORTIVA</p>
          <p className="mt-2 text-sm text-white">Gallego, Juan Manuel</p>
          <p className="text-xs text-gray-400">Antropometrista ISAK 2 · MP 1682</p>
          <p className="mt-1 text-sm text-gray-400">342 422-8923</p>
        </div>
      </div>
    </section>
  )
}
