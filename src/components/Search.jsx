import { useState, useEffect, useRef } from 'react'
import { search } from '../searchData'

const font = "'Calibri', 'Trebuchet MS', Arial, sans-serif"

const TAB_COLORS = {
  'Summary': { bg: '#FFF4EE', color: '#C2410C' },
  'Purpose': { bg: '#EFF4FE', color: '#1D4ED8' },
  'Overview': { bg: '#F3F4F6', color: '#4B5563' },
  'Pre-Requisites': { bg: '#FEF2F2', color: '#B91C1C' },
  'Delivery Model': { bg: '#F3F4F6', color: '#4B5563' },
  'Roadmap': { bg: '#F0FDF4', color: '#047857' },
  'Resources': { bg: '#FFF4EE', color: '#C2410C' },
  'DevOps Project': { bg: '#EFF4FE', color: '#1D4ED8' },
  'Product Project': { bg: '#FFF4EE', color: '#C2410C' },
  'MVP & DOD': { bg: '#F0FDF4', color: '#047857' },
  'Testing Strategy': { bg: '#F3F4F6', color: '#4B5563' },
  'Risks & Deps': { bg: '#FEF2F2', color: '#B91C1C' },
  'Kickoff': { bg: '#FFFBEB', color: '#B45309' },
  'Process': { bg: '#F3F4F6', color: '#4B5563' },
  'Launch & Beyond': { bg: '#EFF4FE', color: '#1D4ED8' },
}

export default function Search({ onNavigate, onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selected, setSelected] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    setResults(search(query))
    setSelected(0)
  }, [query])

  useEffect(() => {
    const el = listRef.current?.children[selected]
    el?.scrollIntoView({ block: 'nearest' })
  }, [selected])

  const handleKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, results.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)) }
    if (e.key === 'Enter' && results[selected]) { onNavigate(results[selected].tab); onClose() }
    if (e.key === 'Escape') onClose()
  }

  return (
    // backdrop
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(14,21,38,0.45)',
        backdropFilter: 'blur(2px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        paddingTop: '10vh',
      }}>
      {/* modal */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 580, margin: '0 16px',
          background: '#fff', borderRadius: 14,
          boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
          overflow: 'hidden', fontFamily: font,
        }}>

        {/* input row */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', borderBottom: '1px solid #ECEEF2', gap: 10 }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, color: '#9CA3AF' }}>
            <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M12 12l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="חפש בתוכן התוכנית..."
            style={{
              flex: 1, border: 'none', outline: 'none',
              fontSize: 15.5, fontFamily: font, color: '#111827',
              background: 'transparent',
            }}
          />
          {query && (
            <button onClick={() => setQuery('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontSize: 16, lineHeight: 1, padding: '0 2px' }}>
              ✕
            </button>
          )}
          <kbd style={{ fontSize: 11, color: '#9CA3AF', background: '#F3F4F6', borderRadius: 5, padding: '2px 6px', fontFamily: 'monospace', flexShrink: 0 }}>
            Esc
          </kbd>
        </div>

        {/* results */}
        <div ref={listRef} style={{ maxHeight: 420, overflowY: 'auto' }}>
          {!query && (
            <p style={{ padding: '28px 20px', textAlign: 'center', color: '#9CA3AF', fontSize: 14 }}>
              התחל להקליד כדי לחפש בכל הטאבים
            </p>
          )}
          {query && results.length === 0 && (
            <p style={{ padding: '28px 20px', textAlign: 'center', color: '#9CA3AF', fontSize: 14 }}>
              לא נמצאו תוצאות עבור "{query}"
            </p>
          )}
          {results.map((r, i) => {
            const tc = TAB_COLORS[r.tabLabel] || { bg: '#F3F4F6', color: '#4B5563' }
            const isSelected = i === selected
            return (
              <button
                key={i}
                onClick={() => { onNavigate(r.tab); onClose() }}
                onMouseEnter={() => setSelected(i)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  width: '100%', textAlign: 'left', padding: '10px 16px',
                  background: isSelected ? '#FFF4EE' : 'transparent',
                  borderLeft: isSelected ? '3px solid #F06A22' : '3px solid transparent',
                  border: 'none', cursor: 'pointer',
                  borderBottom: '1px solid #F3F4F6',
                  transition: 'background 0.08s',
                }}>
                <span style={{
                  flexShrink: 0, fontSize: 11, fontWeight: 700, letterSpacing: '0.04em',
                  background: tc.bg, color: tc.color,
                  borderRadius: 6, padding: '3px 8px', whiteSpace: 'nowrap',
                }}>{r.tabLabel}</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {r.section}
                  </div>
                </div>
                {isSelected && (
                  <kbd style={{ marginLeft: 'auto', fontSize: 10, color: '#9CA3AF', background: '#F3F4F6', borderRadius: 4, padding: '2px 6px', fontFamily: 'monospace', flexShrink: 0 }}>
                    ↵
                  </kbd>
                )}
              </button>
            )
          })}
        </div>

        {/* footer hint */}
        {results.length > 0 && (
          <div style={{ padding: '8px 16px', borderTop: '1px solid #ECEEF2', display: 'flex', gap: 16, fontSize: 11, color: '#9CA3AF' }}>
            <span><kbd style={{ fontFamily: 'monospace', background: '#F3F4F6', borderRadius: 3, padding: '1px 5px' }}>↑↓</kbd> ניווט</span>
            <span><kbd style={{ fontFamily: 'monospace', background: '#F3F4F6', borderRadius: 3, padding: '1px 5px' }}>↵</kbd> פתח</span>
            <span><kbd style={{ fontFamily: 'monospace', background: '#F3F4F6', borderRadius: 3, padding: '1px 5px' }}>Esc</kbd> סגור</span>
          </div>
        )}
      </div>
    </div>
  )
}
