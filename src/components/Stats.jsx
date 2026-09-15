import { useContent } from '../ContentContext'
import Editable from './Editable'
import Draggable from './Draggable'

export default function Stats() {
  const { content } = useContent()

  return (
    <section className="border-y border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 text-center md:grid-cols-4">
        {content.stats.map((stat, i) => (
          <Draggable key={i} path={`stats.${i}`}>
            <Editable
              path={`stats.${i}.value`}
              value={stat.value}
              className="font-display block text-4xl text-gold md:text-5xl"
            />
            <Editable
              path={`stats.${i}.label`}
              value={stat.label}
              className="mt-2 block text-xs font-semibold tracking-widest text-gray-400"
            />
          </Draggable>
        ))}
      </div>
    </section>
  )
}
