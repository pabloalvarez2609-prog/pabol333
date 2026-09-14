const PLANS = [
  {
    name: 'BÁSICO',
    price: '15.000',
    popular: false,
    features: [
      'Musculación libre',
      'Vestuarios y duchas',
      'Acceso 6am–22pm',
      '1 clase grupal / semana',
    ],
  },
  {
    name: 'HARD',
    price: '22.000',
    popular: true,
    features: [
      'Todo BÁSICO incluido',
      'Clases grupales ilimitadas',
      'Acceso a pileta',
      'Asesoramiento nutricional',
    ],
  },
  {
    name: 'ÉLITE',
    price: '32.000',
    popular: false,
    features: [
      'Todo HARD incluido',
      'Entrenador personal 2x/sem',
      'Acceso 24 horas',
      'Plan de nutrición mensual',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="planes" className="honeycomb px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-bold tracking-widest text-gold">ELEGÍ TU PLAN</p>
        <h2 className="font-display mt-3 text-center text-4xl md:text-5xl">MEMBRESÍAS</h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-sm border p-8 ${
                plan.popular
                  ? 'border-gold bg-gold text-black md:-translate-y-3'
                  : 'border-white/10 bg-black text-white'
              }`}
            >
              {plan.popular && (
                <span className="mb-4 inline-block w-fit rounded-sm bg-black px-3 py-1 text-xs font-bold tracking-widest text-gold">
                  MÁS POPULAR
                </span>
              )}
              <h3 className="font-display text-2xl">{plan.name}</h3>
              <p className="font-display mt-4 text-4xl">
                ${plan.price}
                <span className="text-base font-sans font-normal opacity-70">/mes</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className={plan.popular ? 'text-black' : 'text-gold'}>◆</span>
                    <span className={plan.popular ? 'text-black/80' : 'text-gray-300'}>
                      {feature}
                    </span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
