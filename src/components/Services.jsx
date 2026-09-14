import { useState } from 'react'

const SERVICES = [
  {
    num: '01',
    icon: '🏋️',
    title: 'MUSCULACIÓN',
    desc: 'Equipamiento de última generación. Pesas libres, máquinas y zona funcional para entrenamientos de élite.',
  },
  {
    num: '02',
    icon: '🏊',
    title: 'PILETA',
    desc: 'Pileta olímpica climatizada, ideal para natación libre, aquaerobic e hidroterapia todo el año.',
  },
  {
    num: '03',
    icon: '🥊',
    title: 'CLASES GRUPALES',
    desc: 'Funcional, boxeo, spinning y más. Clases dinámicas con instructores certificados, todos los niveles.',
  },
  {
    num: '04',
    icon: '🧠',
    title: 'NUTRICIÓN',
    desc: 'Asesoramiento nutricional personalizado para acompañar tu entrenamiento y potenciar resultados.',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="servicios" className="bg-black px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-xs font-bold tracking-widest text-gold">LO QUE OFRECEMOS</p>
        <h2 className="font-display mt-3 text-center text-4xl md:text-5xl">SERVICIOS</h2>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((service, i) => {
            const isActive = active === i
            return (
              <button
                key={service.num}
                type="button"
                onClick={() => setActive(isActive ? -1 : i)}
                className="block w-full py-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm text-gray-500">{service.num}</span>
                  <span className="text-2xl">{service.icon}</span>
                  <span className="font-display flex-1 text-xl tracking-wide text-white md:text-2xl">
                    {service.title}
                  </span>
                  <span className={`h-px w-8 bg-gold transition-all ${isActive ? 'w-12' : ''}`} />
                </div>
                {isActive && (
                  <p className="mt-4 max-w-2xl pl-14 text-sm text-gray-400 md:text-base">
                    {service.desc}
                  </p>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
