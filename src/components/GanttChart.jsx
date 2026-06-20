const MONTHS = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const QUARTERS = ['Q3 2026', 'Q4 2026', 'Q1 2027', 'Q2 2027']

const LABEL_W = 168
const GRID = `${LABEL_W}px repeat(12, 1fr)`

const COLORS = {
  devops: '#2563EB',
  dev: '#F06A22',
  testing: '#94A0AE',
  app: '#7C3AED',
  voice: '#0891B2',
  web: '#059669',
  milestone: '#F06A22',
}

const channels = [
  {
    id: 'wa-v0', label: 'WhatsApp V0', target: 3,
    bars: [
      { type: 'devops', name: 'Glassix + IVR connectivity', start: 1, end: 2 },
      { type: 'dev',    name: 'Discovery + mocks', start: 1, end: 2 },
      { type: 'dev',    name: 'Build: routing + FAQ + guardrails', start: 2, end: 3 },
      { type: 'dev',    name: 'Real API integration', start: 2.5, end: 3 },
      { type: 'testing', name: 'Stage testing + Bullet UAT', start: 2.5, end: 3.5 },
    ],
  },
  {
    id: 'wa-full', label: 'WhatsApp Full', target: 5,
    bars: [
      { type: 'devops', name: 'Auth provider + data APIs', start: 3, end: 4 },
      { type: 'dev',    name: 'OTP + data integration', start: 3, end: 5 },
      { type: 'dev',    name: 'Website scraping + hardening', start: 4, end: 5 },
      { type: 'testing', name: 'Stage + UAT + pentest & load', start: 4.5, end: 6 },
    ],
  },
  {
    id: 'app', label: 'Mobile App', target: 9, color: 'app',
    bars: [
      { type: 'devops', name: 'Mobile SDK + deeplinks', start: 5, end: 6.5 },
      { type: 'app',    name: 'Adapt core flows for mobile', start: 5, end: 7.5 },
      { type: 'app',    name: 'App deeplinks + mobile UX', start: 7, end: 9 },
      { type: 'testing', name: 'Stage + UAT + pentest', start: 8, end: 9.5 },
    ],
  },
  {
    id: 'voice', label: 'Voice', target: 11, color: 'voice',
    bars: [
      { type: 'devops', name: 'Telephony / IVR connectivity', start: 9, end: 10 },
      { type: 'voice',  name: 'Real-time NLU + voice flows', start: 9, end: 11 },
      { type: 'testing', name: 'Stage + UAT', start: 10.5, end: 11.5 },
    ],
  },
  {
    id: 'web', label: 'Web', target: 12, color: 'web',
    bars: [
      { type: 'devops', name: 'Website integration', start: 11, end: 11.5 },
      { type: 'web',    name: 'Web chat widget', start: 11, end: 12 },
      { type: 'testing', name: 'Stage + UAT', start: 11.5, end: 12 },
    ],
  },
]

const milestoneLabels = { 3: 'WA V0', 5: 'WA Full', 9: 'App', 11: 'Voice', 12: 'Web' }

function barColumn(start, end) {
  return `${Math.round(start) + 1} / ${Math.round(end) + 2}`
}

function Row({ bar }) {
  const color = COLORS[bar.type] || COLORS.dev
  const muted = bar.type === 'devops' || bar.type === 'testing'
  return (
    <div style={{ display: 'grid', gridTemplateColumns: GRID, alignItems: 'center', height: 26, position: 'relative', zIndex: 1 }}>
      <div style={{ fontSize: 12, color: '#6B7280', paddingRight: 10, display: 'flex', alignItems: 'center', gap: 7, overflow: 'hidden' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bar.name}</span>
      </div>
      <div style={{
        gridColumn: barColumn(bar.start, bar.end),
        height: 15, background: color, opacity: muted ? 0.55 : 0.92,
        borderRadius: 8,
      }} />
    </div>
  )
}

export default function GanttChart() {
  return (
    <div style={{ overflowX: 'auto', marginBottom: 32, paddingBottom: 4 }}>
      <div style={{ minWidth: 700, position: 'relative' }}>

        {/* Vertical quarter gridlines behind everything */}
        <div style={{ position: 'absolute', top: 44, bottom: 34, left: LABEL_W, right: 0, display: 'flex', pointerEvents: 'none', zIndex: 0 }}>
          {QUARTERS.map((_, i) => (
            <div key={i} style={{ flex: 1, borderRight: i < 3 ? '1px solid #EDEFF2' : 'none' }} />
          ))}
        </div>

        {/* Sticky axis: quarters + months */}
        <div style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 3, paddingTop: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: GRID }}>
            <div />
            {QUARTERS.map((q, i) => (
              <div key={q} style={{
                gridColumn: `${i * 3 + 2} / ${i * 3 + 5}`,
                textAlign: 'center', fontSize: 10.5, fontWeight: 700, color: '#9CA3AF',
                letterSpacing: '0.07em', paddingBottom: 5,
              }}>{q}</div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: GRID, borderBottom: '1px solid #E4E7EC', paddingBottom: 5 }}>
            <div style={{ fontSize: 10.5, color: '#C0C4CC', fontWeight: 600, letterSpacing: '0.05em', alignSelf: 'end' }}>TIMELINE</div>
            {MONTHS.map((m, i) => (
              <div key={i} style={{ textAlign: 'center', fontSize: 10, color: '#AEB4BD' }}>{m}</div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 18, margin: '14px 0 16px', paddingLeft: 2 }}>
          {[['DevOps', COLORS.devops], ['Development', COLORS.dev], ['Testing', COLORS.testing]].map(([label, c]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 18, height: 7, background: c, borderRadius: 4, opacity: label === 'Development' ? 0.92 : 0.55 }} />
              <span style={{ fontSize: 11, color: '#6B7280' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Channel sections */}
        {channels.map((ch, ci) => (
          <div key={ch.id} style={{ marginBottom: ci < channels.length - 1 ? 18 : 8 }}>
            <div style={{ display: 'grid', gridTemplateColumns: GRID, alignItems: 'center', marginBottom: 4, position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: '#111827' }}>{ch.label}</div>
              <div style={{ gridColumn: `${ch.target + 1} / ${ch.target + 2}`, display: 'flex', justifyContent: 'center' }}>
                <svg width="11" height="11" viewBox="0 0 11 11"><polygon points="5.5,0 11,5.5 5.5,11 0,5.5" fill={COLORS.milestone} /></svg>
              </div>
            </div>
            {ch.bars.map(bar => <Row key={bar.name} bar={bar} />)}
          </div>
        ))}

        {/* Milestone axis */}
        <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid #E4E7EC', paddingTop: 10, marginTop: 4 }}>
          <div style={{ display: 'grid', gridTemplateColumns: GRID, alignItems: 'start' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#6B7280' }}>Go-live</div>
            {MONTHS.map((_, i) => {
              const label = milestoneLabels[i + 1]
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {label && <>
                    <svg width="11" height="11" viewBox="0 0 11 11"><polygon points="5.5,0 11,5.5 5.5,11 0,5.5" fill={COLORS.milestone} /></svg>
                    <span style={{ fontSize: 8.5, color: '#6B7280', marginTop: 3, textAlign: 'center', lineHeight: 1.2, fontWeight: 600 }}>{label}</span>
                  </>}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
