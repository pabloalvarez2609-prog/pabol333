import { createContext, useContext, useMemo, useState } from 'react'
import initialContent from './content.json'

const ContentContext = createContext(null)

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}

function setAtPath(obj, path, value) {
  const next = clone(obj)
  const keys = path.split('.')
  let cursor = next
  for (let i = 0; i < keys.length - 1; i++) {
    cursor = cursor[keys[i]]
  }
  cursor[keys[keys.length - 1]] = value
  return next
}

export function ContentProvider({ children }) {
  const [saved, setSaved] = useState(initialContent)
  const [draft, setDraft] = useState(initialContent)
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState(null)

  const dirty = useMemo(() => JSON.stringify(saved) !== JSON.stringify(draft), [saved, draft])

  function updateField(path, value) {
    setDraft((prev) => setAtPath(prev, path, value))
  }

  function updateLayout(path, pos) {
    setDraft((prev) => ({ ...prev, layout: { ...prev.layout, [path]: pos } }))
  }

  function discardChanges() {
    setDraft(saved)
  }

  async function saveChanges() {
    setSaving(true)
    setSaveError(null)
    try {
      const res = await fetch('/api/save-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(draft),
      })
      if (!res.ok) throw new Error('save failed')
      setSaved(draft)
    } catch (err) {
      setSaveError('No se pudo guardar. ¿Está corriendo "npm run dev"?')
    } finally {
      setSaving(false)
    }
  }

  const value = {
    content: draft,
    editing,
    setEditing,
    dirty,
    saving,
    saveError,
    updateField,
    updateLayout,
    discardChanges,
    saveChanges,
  }

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContent must be used inside ContentProvider')
  return ctx
}
