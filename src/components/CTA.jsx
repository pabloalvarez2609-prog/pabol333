import { useContent } from '../ContentContext'
import Editable from './Editable'
import Draggable from './Draggable'

export default function CTA() {
  const { content } = useContent()
  const { cta } = content

  return (
    <section className="bg-black px-6 py-20 text-center md:py-28">
      <Draggable path="cta">
        <Editable path="cta.label" value={cta.label} className="font-display block text-sm tracking-widest text-gold" />
        <Editable
          path="cta.title"
          value={cta.title}
          className="font-display mx-auto mt-3 block max-w-2xl text-4xl md:text-5xl"
        />
        <Editable
          path="cta.paragraph"
          value={cta.paragraph}
          multiline
          className="mx-auto mt-4 block max-w-xl text-sm text-gray-400 md:text-base"
        />
        <a
          href="#contacto"
          className="mt-8 inline-block rounded-sm bg-gold px-8 py-3.5 text-sm font-bold tracking-wide text-black transition hover:bg-gold-dark"
        >
          <Editable path="cta.button" value={cta.button} />
        </a>
      </Draggable>
    </section>
  )
}
