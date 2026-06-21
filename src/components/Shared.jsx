const font = "'Calibri', 'Trebuchet MS', Arial, sans-serif"

export function Summary({ children }) {
  return (
    <div style={{
      background: '#FFF4EE',
      borderRadius: 8,
      padding: '20px 24px',
      marginBottom: 40,
    }}>
      <p style={{ fontSize: 11, letterSpacing: '0.14em', color: '#F06A22', marginBottom: 8, fontWeight: 700, textTransform: 'uppercase', fontFamily: font }}>
        Executive Summary
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.85, color: '#374151', fontFamily: font }}>{children}</p>
    </div>
  )
}

export function SectionHeader({ eyebrow, title }) {
  return (
    <div style={{ marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid #E4E7EC' }}>
      <p style={{ fontSize: 11, letterSpacing: '0.16em', color: '#F06A22', marginBottom: 12, fontWeight: 700, textTransform: 'uppercase', fontFamily: font }}>
        {eyebrow}
      </p>
      <h1 style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.18, color: '#111827', fontFamily: font, letterSpacing: '-0.3px', textTransform: 'uppercase' }}>
        {title}
      </h1>
    </div>
  )
}

export function P({ children }) {
  return <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.85, marginBottom: 20, fontFamily: font }}>{children}</p>
}

export function H2({ children, className = '' }) {
  return (
    <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111827', marginTop: 48, marginBottom: 16, fontFamily: font, paddingBottom: 10, borderBottom: '1px solid #E4E7EC' }}>
      {children}
    </h2>
  )
}

export function H3({ children }) {
  return (
    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', marginTop: 32, marginBottom: 10, fontFamily: font }}>
      {children}
    </h3>
  )
}

export function Table({ headers, rows }) {
  return (
    <div style={{ overflowX: 'auto', marginBottom: 32, marginTop: 8 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: font }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E4E7EC' }}>
            {headers.map((h, i) => (
              <th key={i} style={{
                textAlign: 'left', padding: '10px 16px 10px 0',
                fontSize: 11, letterSpacing: '0.1em', color: '#9CA3AF',
                fontWeight: 700, textTransform: 'uppercase', fontFamily: font,
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #F3F4F6' }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '12px 16px 12px 0', color: '#4B5563', fontSize: 15, lineHeight: 1.6, fontFamily: font }}>
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
    <div style={{ marginBottom: 28, paddingBottom: 28, borderBottom: '1px solid #F3F4F6' }}>
      {title && (
        <p style={{ fontSize: 16, fontWeight: 700, color: accent ? '#F06A22' : '#111827', marginBottom: 8, fontFamily: font }}>
          {title}
        </p>
      )}
      <div style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.85, fontFamily: font }}>{children}</div>
    </div>
  )
}

export function WarnCard({ title, children }) {
  return (
    <div style={{
      background: '#FFFBEB',
      borderRadius: 8,
      padding: '20px 24px',
      marginTop: 36,
      marginBottom: 24,
    }}>
      {title && (
        <p style={{ fontSize: 11, fontWeight: 700, color: '#92400E', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: font }}>
          {title}
        </p>
      )}
      <div style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.85, fontFamily: font }}>{children}</div>
    </div>
  )
}

export function NumberedItem({ n, title, children }) {
  return (
    <div style={{ display: 'flex', gap: 20, marginBottom: 28, paddingBottom: 28, borderBottom: '1px solid #F3F4F6' }}>
      <span style={{
        flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#FFF4EE', fontSize: 13, color: '#F06A22', fontWeight: 700, marginTop: 2, fontFamily: font,
      }}>
        {n}
      </span>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 6, fontFamily: font }}>{title}</p>
        <div style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.85, fontFamily: font }}>{children}</div>
      </div>
    </div>
  )
}

export function Mono({ children }) {
  return <span style={{ fontSize: 13, color: '#F06A22', fontWeight: 600, fontFamily: font }}>{children}</span>
}
