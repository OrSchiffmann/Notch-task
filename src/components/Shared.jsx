// Executive Summary callout
export function Summary({ children }) {
  return (
    <div className="mb-8 p-4 rounded-lg border-l-2"
      style={{ background: 'var(--color-surface)', borderColor: 'var(--color-accent)', color: 'var(--color-text-dim)' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 6 }}>
        EXECUTIVE SUMMARY
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.7 }}>{children}</p>
    </div>
  )
}

// Section header with eyebrow
export function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-6">
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 6 }}>
        {eyebrow}
      </p>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, lineHeight: 1.2 }}>
        {title}
      </h1>
    </div>
  )
}

// Body paragraph
export function P({ children }) {
  return <p className="mb-4" style={{ fontSize: 14, color: 'var(--color-text-dim)', lineHeight: 1.7 }}>{children}</p>
}

// Subsection heading
export function H2({ children, className = '' }) {
  return (
    <h2 className={`mt-8 mb-3 ${className}`}
      style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600 }}>
      {children}
    </h2>
  )
}

export function H3({ children }) {
  return (
    <h3 className="mt-6 mb-2"
      style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600 }}>
      {children}
    </h3>
  )
}

// Compact table
export function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-6 rounded-lg border" style={{ borderColor: 'var(--color-border)' }}>
      <table className="w-full" style={{ fontSize: 13 }}>
        <thead>
          <tr style={{ background: 'var(--color-surface-2)' }}>
            {headers.map((h, i) => (
              <th key={i} className="text-left px-3 py-2 border-b"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.05em', color: 'var(--color-text-dim)', borderColor: 'var(--color-border)', fontWeight: 500 }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--color-surface)' }}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 border-b"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-dim)' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Highlight card
export function Card({ title, children, accent = false }) {
  return (
    <div className="p-4 rounded-lg border mb-4"
      style={{
        background: accent ? 'var(--color-accent-soft)' : 'var(--color-surface)',
        borderColor: accent ? 'var(--color-accent)' : 'var(--color-border)',
      }}>
      {title && (
        <p className="mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: accent ? 'var(--color-accent)' : 'var(--color-text)' }}>
          {title}
        </p>
      )}
      <div style={{ fontSize: 13, color: 'var(--color-text-dim)', lineHeight: 1.6 }}>{children}</div>
    </div>
  )
}

// Warning/open-question card
export function WarnCard({ title, children }) {
  return (
    <div className="p-4 rounded-lg border mb-4"
      style={{ background: 'var(--color-warn-soft)', borderColor: 'var(--color-warn)' }}>
      {title && (
        <p className="mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--color-warn)' }}>
          {title}
        </p>
      )}
      <div style={{ fontSize: 13, color: 'var(--color-text-dim)', lineHeight: 1.6 }}>{children}</div>
    </div>
  )
}

// Numbered list item (for flows, risks, etc.)
export function NumberedItem({ n, title, children }) {
  return (
    <div className="flex gap-3 mb-4">
      <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
        style={{ background: 'var(--color-accent-soft)', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-accent)', fontWeight: 500 }}>
        {n}
      </span>
      <div className="flex-1">
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{title}</p>
        <div style={{ fontSize: 13, color: 'var(--color-text-dim)', lineHeight: 1.6 }}>{children}</div>
      </div>
    </div>
  )
}

// Mono label
export function Mono({ children }) {
  return <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-accent)' }}>{children}</span>
}
