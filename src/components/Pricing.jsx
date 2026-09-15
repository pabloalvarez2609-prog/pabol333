import { useContent } from '../ContentContext'
import Editable from './Editable'
import Draggable from './Draggable'

export default function Pricing() {
  const { content } = useContent()
  const { pricing } = content

  return (
    <section id="planes" className="honeycomb px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Editable
          path="pricing.eyebrow"
          value={pricing.eyebrow}
          className="block text-center text-xs font-bold tracking-widest text-gold"
        />
        <Editable
          path="pricing.title"
          value={pricing.title}
          className="font-display mt-3 block text-center text-4xl md:text-5xl"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pricing.plans.map((plan, i) => (
            <Draggable
              key={i}
              path={`pricing.plans.${i}`}
              baseOffset={plan.popular ? { x: 0, y: -12 } : { x: 0, y: 0 }}
              className={`flex flex-col rounded-sm border p-8 ${
                plan.popular ? 'border-gold bg-gold text-black' : 'border-white/10 bg-black text-white'
              }`}
            >
              {plan.popular && (
                <span className="mb-4 inline-block w-fit rounded-sm bg-black px-3 py-1 text-xs font-bold tracking-widest text-gold">
                  MÁS POPULAR
                </span>
              )}
              <Editable path={`pricing.plans.${i}.name`} value={plan.name} className="font-display text-2xl" />
              <p className="font-display mt-4 text-4xl">
                $
                <Editable path={`pricing.plans.${i}.price`} value={plan.price} />
                <span className="text-base font-sans font-normal opacity-70">/mes</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm">
                    <span className={plan.popular ? 'text-black' : 'text-gold'}>◆</span>
                    <Editable
                      path={`pricing.plans.${i}.features.${fi}`}
                      value={feature}
                      className={plan.popular ? 'text-black/80' : 'text-gray-300'}
                    />
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-8 rounded-sm py-3 text-center text-sm font-bold tracking-wide transition ${
                  plan.popular
                    ? 'bg-black text-gold hover:bg-black/80'
                    : 'border border-white/30 text-white hover:border-gold hover:text-gold'
                }`}
              >
                INSCRIBIRSE
              </a>
            </Draggable>
          ))}
        </div>
      </div>
    </section>
  )
}
