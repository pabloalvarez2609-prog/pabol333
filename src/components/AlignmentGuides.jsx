import { useAlignment } from '../AlignmentContext'

export default function AlignmentGuides() {
  const { guides } = useAlignment()

  return (
    <div className="pointer-events-none fixed inset-0 z-[90]">
      {guides.x.map((x, i) => (
        <div key={`x-${i}`} className="absolute top-0 h-full w-px bg-fuchsia-400" style={{ left: x }} />
      ))}
      {guides.y.map((y, i) => (
        <div key={`y-${i}`} className="absolute left-0 w-full h-px bg-fuchsia-400" style={{ top: y }} />
      ))}
    </div>
  )
}
