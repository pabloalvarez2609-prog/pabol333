import { useEffect, useRef, useState } from 'react'
import { useContent } from '../ContentContext'
import { useAlignment } from '../AlignmentContext'

const SNAP_THRESHOLD = 8

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = () => setIsDesktop(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isDesktop
}

function closestSnap(values, targets) {
  let best = null
  for (const v of values) {
    for (const t of targets) {
      const diff = t - v
      if (Math.abs(diff) <= SNAP_THRESHOLD && (best === null || Math.abs(diff) < Math.abs(best.diff))) {
        best = { diff, guide: t }
      }
    }
  }
  return best
}

export default function Draggable({ path, children, className = '', baseOffset = { x: 0, y: 0 } }) {
  const { editing, content, updateLayout } = useContent()
  const { register, unregister, collectTargets, setGuides } = useAlignment()
  const isDesktop = useIsDesktop()
  const nodeRef = useRef(null)
  const dragState = useRef(null)

  useEffect(() => {
    register(path, nodeRef.current)
    return () => unregister(path)
  }, [path])

  const pos = content.layout?.[path] || { x: 0, y: 0 }
  const totalX = baseOffset.x + pos.x
  const totalY = baseOffset.y + pos.y

  function handlePointerDown(e) {
    if (!editing || !isDesktop) return
    if (e.target.closest('[contenteditable="true"]')) return
    e.preventDefault()
    const rect = nodeRef.current.getBoundingClientRect()
    dragState.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: pos.x,
      originY: pos.y,
      rect,
      finalDx: 0,
      finalDy: 0,
    }
    nodeRef.current.setPointerCapture(e.pointerId)
  }

  function handlePointerMove(e) {
    const state = dragState.current
    if (!state || !nodeRef.current) return
    const rawDx = e.clientX - state.startX
    const rawDy = e.clientY - state.startY

    const left = state.rect.left + rawDx
    const centerX = left + state.rect.width / 2
    const right = left + state.rect.width
    const top = state.rect.top + rawDy
    const centerY = top + state.rect.height / 2
    const bottom = top + state.rect.height

    const { xs, ys } = collectTargets(path)
    const snapX = closestSnap([left, centerX, right], xs)
    const snapY = closestSnap([top, centerY, bottom], ys)

    const finalDx = rawDx + (snapX ? snapX.diff : 0)
    const finalDy = rawDy + (snapY ? snapY.diff : 0)
    state.finalDx = finalDx
    state.finalDy = finalDy

    const x = baseOffset.x + state.originX + finalDx
    const y = baseOffset.y + state.originY + finalDy
    nodeRef.current.style.transform = `translate(${x}px, ${y}px)`

    setGuides({
      x: snapX ? [snapX.guide] : [],
      y: snapY ? [snapY.guide] : [],
    })
  }

  function handlePointerUp() {
    const state = dragState.current
    if (!state) return
    dragState.current = null
    updateLayout(path, { x: state.originX + state.finalDx, y: state.originY + state.finalDy })
    setGuides({ x: [], y: [] })
  }

  function handleDoubleClick() {
    if (!editing || !isDesktop) return
    updateLayout(path, { x: 0, y: 0 })
  }

  return (
    <div
      ref={nodeRef}
      className={`${className} ${
        editing && isDesktop ? 'cursor-move outline-dashed outline-1 outline-offset-4 outline-fuchsia-400/60' : ''
      }`}
      style={{ transform: isDesktop ? `translate(${totalX}px, ${totalY}px)` : 'none' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onDoubleClick={handleDoubleClick}
    >
      {children}
    </div>
  )
}
