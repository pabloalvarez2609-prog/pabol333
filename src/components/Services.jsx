import { useState } from 'react'

function IconShell({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-gold"
    >
      {children}
    </svg>
  )
}

function DumbbellIcon() {
  return (
    <IconShell>
      <rect x="1.5" y="8" width="3" height="8" rx="1" />
      <rect x="19.5" y="8" width="3" height="8" rx="1" />
      <rect x="4.5" y="9.5" width="2.5" height="5" rx="0.5" />
      <rect x="17" y="9.5" width="2.5" height="5" rx="0.5" />
      <line x1="7" y1="12" x2="17" y2="12" />
    </IconShell>
  )
}

function PoolIcon() {
  return (
    <IconShell>
      <path d="M2 7c1.5 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0 3.5-1.5 5 0" />
      <path d="M2 13c1.5 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0 3.5-1.5 5 0" />
      <path d="M2 19c1.5 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0 3.5-1.5 5 0" />
    </IconShell>
  )
}

function GloveIcon() {
  return (
    <IconShell>
      <path d="M7 11V6a2 2 0 1 1 4 0v4M11 10V5a2 2 0 1 1 4 0v5M15 10.5V6.5a2 2 0 1 1 4 0V13a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6v-2a2 2 0 1 1 4 0v2" />
    </IconShell>
  )
}

function AppleIcon() {
  return (
    <IconShell>
      <path d="M12 8c-3-3-8-2-8 3 0 5 5 9 8 10 3-1 8-5 8-10 0-5-5-6-8-3Z" />
      <path d="M12 8V4" />
      <path d="M12 4c1-1.5 3-2 4-1" />
    </IconShell>
  )
}

const SERVICES = [
  {
    num: '01',
    icon: DumbbellIcon,
    title: 'MUSCULACIÓN',
    desc: 'Equipamiento de última generación. Pesas libres, máquinas y zona funcional para entrenamientos de élite.',
  },
  {
    num: '02',
    icon: PoolIcon,
    title: 'PILETA',
    desc: 'Pileta olímpica climatizada, ideal para natación libre, aquaerobic e hidroterapia todo el año.',
  },
  {
    num: '03',
    icon: GloveIcon,
    title: 'CLASES GRUPALES',
    desc: 'Funcional, boxeo, spinning y más. Clases dinámicas con instructores certificados, todos los niveles.',
  },
  {
    num: '04',
    icon: AppleIcon,
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
            const Icon = service.icon
            return (
              <button
                key={service.num}
                type="button"
                onClick={() => setActive(isActive ? -1 : i)}
                className="block w-full py-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm text-gray-500">{service.num}</span>
                  <Icon />
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
