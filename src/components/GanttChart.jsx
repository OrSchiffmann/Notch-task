const MONTHS = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const QUARTERS = [
  { label: 'Q3 2026', span: '2 / 5' },
  { label: 'Q4 2026', span: '5 / 8' },
  { label: 'Q1 2027', span: '8 / 11' },
  { label: 'Q2 2027', span: '11 / 14' },
]

// start/end are 1-indexed month numbers
const devopsTrack = {
  label: 'DevOps / Infrastructure',
  color: '#2563EB',
  bars: [
    { name: 'Workshop 1 - Hello World', start: 1, end: 1.5, text: 'pipeline + access' },
    { name: 'Workshop 2 - Base binary', start: 1.5, end: 2.5, text: 'core platform' },
    { name: 'Stand up Staging', start: 2.5, end: 3, text: 'staging env' },
    { name: 'Stand up Production', start: 3, end: 3.5, text: 'prod env' },
    { name: 'Deploy + support ops', start: 3, end: 12, text: 'ongoing', light: true },
  ],
}

const devTrack = {
  label: 'Development',
  color: '#F06A22',
  milestones: [
    { month: 3, label: 'WhatsApp V0 live' },
    { month: 5, label: 'WhatsApp full' },
    { month: 9, label: 'App live' },
    { month: 11, label: 'Voice live' },
    { month: 12, label: 'Web live' },
  ],
  bars: [
    { name: 'Discovery + mocks', start: 1, end: 2, text: 'Swagger + Q&A' },
    { name: 'WhatsApp V0 - first flow', start: 1.5, end: 3, text: 'FAQ + routing + Glassix' },
    { name: 'WhatsApp full flows', start: 3, end: 5, text: 'OTP + data + hardening' },
    { name: 'App build', start: 5, end: 9, text: 'reuse core + mobile integration', customColor: '#7C3AED' },
    { name: 'Voice', start: 9, end: 11, text: 'IVR replacement + NLU', customColor: '#0891B2' },
    { name: 'Web', start: 11, end: 12, text: 'website AI support', customColor: '#059669' },
  ],
}

function monthToCol(m) {
  // m is 1-indexed month, returns grid column (label col = 1, month 1 = col 2)
  return Math.round(m * 2) + 1 // 2 sub-columns per month for finer positioning
}

// Simplified: just use integer month positions for grid
function Bar({ bar, color }) {
  const startCol = bar.start + 1 // +1 for label column
  const endCol = bar.end + 1
  return (
    <div className="grid items-center mb-1.5" style={{ gridTemplateColumns: '160px repeat(12, 1fr)', gap: 0 }}>
      <div style={{ fontSize: 12, color: '#6B7280', paddingRight: 8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {bar.name}
      </div>
      <div style={{
        gridColumn: `${Math.ceil(bar.start) + 1} / ${Math.ceil(bar.end) + 2}`,
        height: 22,
        background: bar.customColor || color,
        opacity: bar.light ? 0.25 : 0.85,
        borderRadius: 4,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 10, color: '#fff',
        overflow: 'hidden',
      }}>
        {bar.text}
      </div>
    </div>
  )
}

export default function GanttChart() {
  return (
    <div style={{ overflowX: 'auto', marginBottom: 24 }}>
      <div style={{ minWidth: 700 }}>

        {/* Quarter headers */}
        <div className="grid mb-0" style={{ gridTemplateColumns: '160px repeat(12, 1fr)', gap: 0 }}>
          <div />
          {QUARTERS.map(q => (
            <div key={q.label} style={{
              gridColumn: q.span,
              textAlign: 'center',
              fontSize: 10,
              fontWeight: 700,
              color: '#9CA3AF',
              letterSpacing: '0.08em',
              paddingBottom: 4,
              borderBottom: '1px solid #E4E7EC',
            }}>
              {q.label}
            </div>
          ))}
        </div>

        {/* Month headers */}
        <div className="grid mb-4" style={{ gridTemplateColumns: '160px repeat(12, 1fr)', gap: 0 }}>
          <div />
          {MONTHS.map((m, i) => (
            <div key={i} style={{
              textAlign: 'center',
              fontSize: 10,
              color: '#9CA3AF',
              paddingTop: 4,
            }}>
              {m}
            </div>
          ))}
        </div>

        {/* DevOps Track */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#2563EB', letterSpacing: '0.08em', marginBottom: 8, textTransform: 'uppercase' }}>
            DevOps / Infrastructure
          </div>
          {devopsTrack.bars.map(bar => <Bar key={bar.name} bar={bar} color={devopsTrack.color} />)}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #F3F4F6', marginBottom: 24 }} />

        {/* Development Track */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#F06A22', letterSpacing: '0.08em', marginBottom: 8, textTransform: 'uppercase' }}>
            Development
          </div>
          {devTrack.bars.map(bar => <Bar key={bar.name} bar={bar} color={devTrack.color} />)}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #F3F4F6', marginBottom: 8 }} />

        {/* Milestone row */}
        <div className="grid" style={{ gridTemplateColumns: '160px repeat(12, 1fr)', gap: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#6B7280' }}>Milestones</div>
          {MONTHS.map((_, i) => {
            const month = i + 1
            const ms = devTrack.milestones.find(m => m.month === month)
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {ms && (
                  <>
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <polygon points="5,0 10,5 5,10 0,5" fill="#F06A22" />
                    </svg>
                    <span style={{ fontSize: 8, color: '#6B7280', textAlign: 'center', marginTop: 2, lineHeight: 1.2 }}>
                      {ms.label}
                    </span>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
