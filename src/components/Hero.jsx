import { useContent } from '../ContentContext'
import Editable from './Editable'
import Draggable from './Draggable'

export default function Hero() {
  const { content } = useContent()
  const { hero } = content

  return (
    <section id="top" className="honeycomb relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Draggable path="hero.badge">
          <Editable
            path="hero.badge"
            value={hero.badge}
            className="rounded-sm bg-gold px-4 py-1.5 text-xs font-bold tracking-widest text-black"
          />
        </Draggable>

        <Draggable path="hero.headline" className="mt-6">
          <h1 className="text-5xl leading-[0.95] tracking-tight md:text-7xl">
            <Editable path="hero.titleLine1" value={hero.titleLine1} className="font-display block text-white" />
            <Editable
              path="hero.titleAccent"
              value={hero.titleAccent}
              className="font-accent block translate-x-[0.06em] italic text-gold"
            />
            <Editable path="hero.titleLine2" value={hero.titleLine2} className="font-display block text-white" />
          </h1>
        </Draggable>

        <Draggable path="hero.paragraph" className="mt-6">
          <Editable
            path="hero.paragraph"
            value={hero.paragraph}
            multiline
            className="block max-w-xl text-base text-gray-300 md:text-lg"
          />
        </Draggable>

        <Draggable path="hero.buttons" className="mt-8">
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#planes"
              className="rounded-sm bg-gold px-8 py-3.5 text-sm font-bold tracking-wide text-black transition hover:bg-gold-dark"
            >
              <Editable path="hero.ctaPrimary" value={hero.ctaPrimary} />
            </a>
            <a
              href="#servicios"
              className="rounded-sm border border-white/30 px-8 py-3.5 text-sm font-bold tracking-wide text-white transition hover:border-gold hover:text-gold"
            >
              <Editable path="hero.ctaSecondary" value={hero.ctaSecondary} />
            </a>
          </div>
        </Draggable>
      </div>
    </section>
  )
}
