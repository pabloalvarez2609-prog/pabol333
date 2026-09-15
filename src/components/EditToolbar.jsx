import { useEffect } from 'react'
import { useContent } from '../ContentContext'

export default function EditToolbar() {
  const { content, editing, setEditing, dirty, saving, saveError, updateField, discardChanges, saveChanges } =
    useContent()

  useEffect(() => {
    document.documentElement.style.setProperty('--color-gold', content.theme.gold)
    document.documentElement.style.setProperty('--color-gold-dark', content.theme.goldDark)
  }, [content.theme.gold, content.theme.goldDark])

  if (!editing) {
    return (
      <button
        type="button"
        onClick={() => setEditing(true)}
        className="fixed bottom-5 right-5 z-[100] rounded-full bg-gold px-5 py-3 text-sm font-bold text-black shadow-lg shadow-black/50 transition hover:bg-gold-dark"
      >
        ✎ Editar
      </button>
    )
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-cyan-400/30 bg-black/95 px-4 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold tracking-widest text-cyan-300">MODO EDICIÓN</span>
          <span className="hidden text-xs text-gray-400 sm:inline">
            Clic para editar texto · Arrastrá los bloques marcados para moverlos (doble clic = resetear posición)
          </span>
        </div>

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-xs text-gray-300">
            Dorado
            <input
              type="color"
              value={content.theme.gold}
              onChange={(e) => updateField('theme.gold', e.target.value)}
              className="h-7 w-9 cursor-pointer rounded border border-white/20 bg-transparent"
            />
          </label>
          <label className="flex items-center gap-2 text-xs text-gray-300">
            Dorado oscuro
            <input
              type="color"
              value={content.theme.goldDark}
              onChange={(e) => updateField('theme.goldDark', e.target.value)}
              className="h-7 w-9 cursor-pointer rounded border border-white/20 bg-transparent"
            />
          </label>

          {saveError && <span className="text-xs text-red-400">{saveError}</span>}

          <button
            type="button"
            onClick={discardChanges}
            disabled={!dirty || saving}
            className="rounded-sm border border-white/20 px-4 py-2 text-xs font-bold text-white disabled:opacity-30"
          >
            Descartar
          </button>
          <button
            type="button"
            onClick={saveChanges}
            disabled={!dirty || saving}
            className="rounded-sm bg-cyan-400 px-4 py-2 text-xs font-bold text-black disabled:opacity-30"
          >
            {saving ? 'Guardando…' : 'Guardar cambios'}
          </button>
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="rounded-sm bg-gold px-4 py-2 text-xs font-bold text-black"
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  )
}
