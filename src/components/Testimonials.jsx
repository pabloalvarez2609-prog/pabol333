import { useContent } from '../ContentContext'
import Editable from './Editable'
import Draggable from './Draggable'

export default function Testimonials() {
  const { content } = useContent()
  const { testimonial } = content

  return (
    <section id="comunidad" className="bg-black px-6 py-20 md:py-28">
      <Draggable path="testimonial" className="mx-auto max-w-3xl text-center">
        <Editable
          path="testimonial.eyebrow"
          value={testimonial.eyebrow}
          className="block text-xs font-bold tracking-widest text-gold"
        />

        <Editable
          path="testimonial.quote"
          value={testimonial.quote}
          multiline
          className="font-display mt-8 block text-2xl leading-snug text-white md:text-3xl"
        />

        <div className="mt-8 flex items-center justify-center gap-3">
          <Editable
            path="testimonial.initial"
            value={testimonial.initial}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display text-black"
          />
          <div className="text-left">
            <Editable path="testimonial.name" value={testimonial.name} className="block text-sm font-semibold text-white" />
            <Editable
              path="testimonial.since"
              value={testimonial.since}
              className="block text-xs tracking-widest text-gray-500"
            />
          </div>
        </div>
      </Draggable>
    </section>
  )
}
