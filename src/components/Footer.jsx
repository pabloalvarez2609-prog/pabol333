import { useContent } from '../ContentContext'
import Editable from './Editable'
import Draggable from './Draggable'

const SOCIALS = ['INSTAGRAM', 'FACEBOOK', 'YOUTUBE']

export default function Footer() {
  const { content } = useContent()
  const { footer } = content

  return (
    <footer id="contacto" className="border-t border-white/10 bg-black px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <Draggable path="footer.col.0">
          <p className="font-display text-2xl text-gold">HARD</p>
          <Editable
            path="footer.tagline"
            value={footer.tagline}
            multiline
            className="mt-3 block max-w-xs text-sm text-gray-400"
          />
        </Draggable>

        <Draggable path="footer.col.1">
          <p className="text-xs font-bold tracking-widest text-gold">HORARIOS</p>
          <ul className="mt-3 space-y-1 text-sm text-gray-400">
            {footer.hours.map((h, i) => (
              <li key={i}>
                <Editable path={`footer.hours.${i}`} value={h} />
              </li>
            ))}
          </ul>
        </Draggable>

        <Draggable path="footer.col.2">
          <p className="text-xs font-bold tracking-widest text-gold">CONTACTO</p>
          <ul className="mt-3 space-y-1 text-sm text-gray-400">
            <li>
              <Editable path="footer.address" value={footer.address} />
            </li>
            <li>
              <Editable path="footer.phone" value={footer.phone} />
            </li>
            <li>
              <Editable path="footer.email" value={footer.email} />
            </li>
          </ul>
        </Draggable>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 md:flex-row">
        <p>© 2026 HARD GIMNASIO. TODOS LOS DERECHOS RESERVADOS.</p>
        <div className="flex gap-5">
          {SOCIALS.map((s) => (
            <a key={s} href="#" className="tracking-widest hover:text-gold">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
