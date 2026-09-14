const STATS = [
  { value: '24', label: 'AÑOS DE EXPERIENCIA' },
  { value: '1.200+', label: 'SOCIOS ACTIVOS' },
  { value: '30+', label: 'ACTIVIDADES SEMANALES' },
  { value: '100%', label: 'COMPROMISO' },
]

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 text-center md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-4xl text-gold md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-xs font-semibold tracking-widest text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
