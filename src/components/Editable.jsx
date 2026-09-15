import { useContent } from '../ContentContext'

export default function Editable({ path, value, as: Tag = 'span', className = '', multiline = false }) {
  const { editing, updateField } = useContent()

  function handleBlur(e) {
    updateField(path, e.currentTarget.textContent)
  }

  function handleKeyDown(e) {
    if (!multiline && e.key === 'Enter') {
      e.preventDefault()
      e.currentTarget.blur()
    }
  }

  if (!editing) {
    return <Tag className={className}>{value}</Tag>
  }

  return (
    <Tag
      className={`${className} rounded-sm outline-dashed outline-1 outline-offset-2 outline-cyan-400/60 transition hover:bg-white/5 focus:bg-white/10 focus:outline-cyan-300`}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      {value}
    </Tag>
  )
}
