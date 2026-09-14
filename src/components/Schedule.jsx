const DAYS = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE']

const ROWS = [
  ['07:00', 'Natación', 'Natación', 'Natación', 'Natación', 'Natación'],
  ['08:00', 'Natación', 'Aquaerobic', 'Natación', 'Aquaerobic', 'Natación'],
  ['09:00', 'Natación', 'Hidro-terapia', 'Natación', 'Hidro-terapia', 'Natación'],
  ['10:00', 'Natación', 'Hidro-terapia', 'Natación', 'Hidro-terapia', 'Natación'],
  ['11:00', 'Hidro-terapia', 'Natación', 'Hidro-terapia', 'Natación', 'Hidro-terapia'],
  ['12:00', 'Hidro-terapia', 'Natación', 'Hidro-terapia', 'Natación', 'Hidro-terapia'],
  ['13:00', 'Hidro-terapia', 'Natación', 'Hidro-terapia', 'Natación', 'Hidro-terapia'],
  ['14:00', 'Aquaerobic', 'Natación', 'Aquaerobic', 'Natación', 'Aquaerobic'],
  ['15:00', 'Natación', 'Natación', 'Natación', 'Natación', 'Natación'],
  ['16:00', '—', 'Natación Niños', '—', 'Natación Niños', '—'],
  ['17:00', '—', 'Natación Niños', '—', 'Natación Niños', '—'],
  ['18:00', 'Natación Niños', 'Natación Niños', 'Natación Niños', 'Natación Niños', 'Natación'],
  ['19:00', 'Aquaerobic', 'Natación', 'Aquaerobic', 'Natación', 'Aquaerobic'],
  ['20:00', 'Natación', 'Natación', 'Natación', 'Natación', 'Natación'],
  ['21:00', 'Natación', 'Natación', 'Natación', 'Natación', 'Natación'],
]

const LEGEND = [
  { label: 'NATACIÓN', color: 'bg-blue-400' },
  { label: 'AQUAEROBIC', color: 'bg-teal-400' },
  { label: 'HIDRO-TERAPIA', color: 'bg-purple-400' },
  { label: 'NATACIÓN NIÑOS', color: 'bg-pink-400' },
]

const COLOR_BY_ACTIVITY = {
  'Natación': 'bg-blue-400',
  'Aquaerobic': 'bg-teal-400',
  'Hidro-terapia': 'bg-purple-400',
  'Natación Niños': 'bg-pink-400',
}

export default function Schedule() {
  return (
    <section className="bg-black px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-bold tracking-widest text-gold">PLANIFICÁ TU SEMANA</p>
        <h2 className="font-display mt-3 text-center text-4xl md:text-5xl">HORARIOS</h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="overflow-x-auto lg:col-span-2">
            <p className="mb-3 text-xs font-bold tracking-widest text-gray-400">CLASES</p>
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-2 pr-4 text-left font-semibold"> </th>
                  {DAYS.map((d) => (
                    <th key={d} className="px-2 py-2 text-center font-semibold">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row[0]} className="border-b border-white/5">
                    <td className="py-2 pr-4 font-display text-gold">{row[0]}</td>
                    {row.slice(1).map((cell, i) => (
                      <td key={i} className="px-2 py-2 text-center text-xs text-gray-300">
                        {cell !== '—' ? (
                          <span className="inline-flex items-center gap-1.5">
                            <span className={`h-1.5 w-1.5 rounded-full ${COLOR_BY_ACTIVITY[cell]}`} />
                            {cell}
                          </span>
                        ) : (
                          '—'
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 flex flex-wrap gap-4">
              {LEGEND.map((l) => (
                <span key={l.label} className="flex items-center gap-2 text-xs text-gray-400">
                  <span className={`h-2 w-2 rounded-full ${l.color}`} />
                  {l.label}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-sm border border-white/10 p-6">
            <p className="font-display text-xl text-gold">MUSCULACIÓN</p>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-white">LUNES A VIERNES</dt>
                <dd className="text-gray-400">7:00 a 22:00 hs</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">SÁBADO</dt>
                <dd className="text-gray-400">10:00 a 13:00 hs</dd>
                <dd className="text-gray-400">18:00 a 20:30 hs</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">DOMINGOS / FERIADOS</dt>
                <dd className="text-gray-400">10:00 a 14:00 hs</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
