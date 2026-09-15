import { useContent } from '../ContentContext'
import Editable from './Editable'

const DAYS = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE']

const ACTIVITIES = ['—', 'Natación', 'Aquaerobic', 'Hidro-terapia', 'Natación Niños']

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
  const { content, editing, updateField } = useContent()
  const { schedule } = content

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
                {schedule.rows.map((row, r) => (
                  <tr key={r} className="border-b border-white/5">
                    <td className="py-2 pr-4 font-display text-gold">{row[0]}</td>
                    {row.slice(1).map((cell, i) => (
                      <td key={i} className="px-2 py-2 text-center text-xs text-gray-300">
                        {editing ? (
                          <select
                            value={cell}
                            onChange={(e) => updateField(`schedule.rows.${r}.${i + 1}`, e.target.value)}
                            className="rounded-sm border border-cyan-400/40 bg-black px-1 py-0.5 text-xs text-white outline-none"
                          >
                            {ACTIVITIES.map((a) => (
                              <option key={a} value={a}>
                                {a}
                              </option>
                            ))}
                          </select>
                        ) : cell !== '—' ? (
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
            <Editable path="schedule.muscTitle" value={schedule.muscTitle} className="font-display block text-xl text-gold" />
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <Editable
                  path="schedule.weekdayLabel"
                  value={schedule.weekdayLabel}
                  as="dt"
                  className="block font-semibold text-white"
                />
                <Editable
                  path="schedule.weekdayHours"
                  value={schedule.weekdayHours}
                  as="dd"
                  className="block text-gray-400"
                />
              </div>
              <div>
                <Editable
                  path="schedule.saturdayLabel"
                  value={schedule.saturdayLabel}
                  as="dt"
                  className="block font-semibold text-white"
                />
                <Editable
                  path="schedule.saturdayHours1"
                  value={schedule.saturdayHours1}
                  as="dd"
                  className="block text-gray-400"
                />
                <Editable
                  path="schedule.saturdayHours2"
                  value={schedule.saturdayHours2}
                  as="dd"
                  className="block text-gray-400"
                />
              </div>
              <div>
                <Editable
                  path="schedule.sundayLabel"
                  value={schedule.sundayLabel}
                  as="dt"
                  className="block font-semibold text-white"
                />
                <Editable
                  path="schedule.sundayHours"
                  value={schedule.sundayHours}
                  as="dd"
                  className="block text-gray-400"
                />
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
