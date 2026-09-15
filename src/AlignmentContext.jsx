import { createContext, useContext, useRef, useState } from 'react'

const AlignmentContext = createContext(null)

export function AlignmentProvider({ children }) {
  const nodes = useRef(new Map())
  const [guides, setGuides] = useState({ x: [], y: [] })

  function register(path, node) {
    nodes.current.set(path, node)
  }

  function unregister(path) {
    nodes.current.delete(path)
  }

  function collectTargets(excludePath) {
    const xs = new Set([window.innerWidth / 2])
    const ys = new Set()
    nodes.current.forEach((node, path) => {
      if (path === excludePath || !node) return
      const r = node.getBoundingClientRect()
      xs.add(r.left)
      xs.add(r.left + r.width / 2)
      xs.add(r.right)
      ys.add(r.top)
      ys.add(r.top + r.height / 2)
      ys.add(r.bottom)
    })
    return { xs: [...xs], ys: [...ys] }
  }

  const value = { guides, setGuides, register, unregister, collectTargets }
  return <AlignmentContext.Provider value={value}>{children}</AlignmentContext.Provider>
}

export function useAlignment() {
  const ctx = useContext(AlignmentContext)
  if (!ctx) throw new Error('useAlignment must be used inside AlignmentProvider')
  return ctx
}
