const font = "'Calibri', 'Trebuchet MS', Arial, sans-serif"

export function Summary({ children }) {
  return (
    <div className="mb-10" style={{
      borderLeft: '3px solid var(--color-accent)',
      paddingLeft: 20,
      paddingTop: 4,
      paddingBottom: 4,
    }}>
      <p style={{ fontSize: 11, letterSpacing: '0.12em', color: 'var(--color-accent)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase' }}>
        Executive Summary
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-dim)' }}>{children}</p>
    </div>
  )
}

export function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p style={{ fontSize: 11, letterSpacing: '0.14em', color: 'var(--color-accent)', marginBottom: 10, fontWeight: 600, textTransform: 'uppercase' }}>
        {eyebrow}
      </p>
      <h1 style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.2, color: 'var(--color-text)' }}>
        {title}
      </h1>
    </div>
  )
}

export function P({ children }) {
  return <p className="mb-5" style={{ fontSize: 16, color: 'var(--color-text-dim)', lineHeight: 1.8 }}>{children}</p>
}

export function H2({ children, className = '' }) {
  return (
    <h2 className={`mb-4 ${className}`} style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-text)', marginTop: 40 }}>
      {children}
    </h2>
  )
}

export function H3({ children }) {
  return (
    <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-text)', marginTop: 28, marginBottom: 8 }}>
      {children}
    </h3>
  )
}

export function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-8" style={{ marginTop: 8 }}>
      <table className="w-full" style={{ fontSize: 15, borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
            {headers.map((h, i) => (
              <th key={i} className="text-left py-3 pr-6"
                style={{ fontSize: 12, letterSpacing: '0.08em', color: 'var(--color-text-dim)', fontWeight: 600, textTransform: 'uppercase' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
              {row.map((cell, j) => (
                <td key={j} className="py-3 pr-6" style={{ color: 'var(--color-text-dim)', fontSize: 15 }}>
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

export function Card({ title, children, accent = false }) {
  return (
    <div className="mb-6" style={{ paddingLeft: 0 }}>
      {title && (
        <p style={{ fontSize: 16, fontWeight: 700, color: accent ? 'var(--color-accent)' : 'var(--color-text)', marginBottom: 6 }}>
          {title}
        </p>
      )}
      <div style={{ fontSize: 15, color: 'var(--color-text-dim)', lineHeight: 1.8 }}>{children}</div>
    </div>
  )
}

export function WarnCard({ title, children }) {
  return (
    <div className="mb-6" style={{
      borderLeft: '3px solid var(--color-warn)',
      paddingLeft: 20,
      paddingTop: 4,
      paddingBottom: 4,
      marginTop: 32,
    }}>
      {title && (
        <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-warn)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {title}
        </p>
      )}
      <div style={{ fontSize: 15, color: 'var(--color-text-dim)', lineHeight: 1.8 }}>{children}</div>
    </div>
  )
}

export function NumberedItem({ n, title, children }) {
  return (
    <div className="flex gap-5 mb-6">
      <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
        style={{ background: 'var(--color-accent-soft)', fontSize: 13, color: 'var(--color-accent)', fontWeight: 700, marginTop: 2 }}>
        {n}
      </span>
      <div className="flex-1">
        <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text)', marginBottom: 4 }}>{title}</p>
        <div style={{ fontSize: 15, color: 'var(--color-text-dim)', lineHeight: 1.8 }}>{children}</div>
      </div>
    </div>
  )
}

export function Mono({ children }) {
  return <span style={{ fontSize: 13, color: 'var(--color-accent)', fontWeight: 600 }}>{children}</span>
}
