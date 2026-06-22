const MONTHS = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']
const TOTAL = MONTHS.length // Nov 2025 → May 2026
const LABEL_W = 172
const DEADLINE = 5 // end of March = end of Q1 2026

const COLORS = {
  devops: '#2563EB',
  dev: '#F06A22',
  testing: '#94A0AE',
  app: '#7C3AED',
  voice: '#0891B2',
  web: '#059669',
  hypercare: '#DC2626',
  optimization: '#16A34A',
  milestone: '#F06A22',
}

const pct = x => `${(x / TOTAL) * 100}%`

const channels = [
  {
    id: 'wa-v0', label: 'WhatsApp V0 (Pilot)', target: 1.2, committed: true,
    bars: [
      { type: 'devops', name: 'WS1 - Hello World', start: 0.1, end: 0.35 },
      { type: 'devops', name: 'WS2 - Base Binary', start: 0.6, end: 0.85 },
      { type: 'dev',    name: 'Discovery + mocks', start: 0.1, end: 0.7 },
      { type: 'dev',    name: 'Build + integration (A+B1+C+D)', start: 0.5, end: 1.2 },
      { type: 'testing', name: 'Stage testing + Bullet UAT', start: 1.0, end: 1.4 },
      { type: 'hypercare', name: 'Hyper Care', start: 1.2, end: 1.6 },
    ],
  },
  {
    id: 'wa-v1', label: 'WhatsApp V1 (Full)', target: 2.4, committed: true,
    bars: [
      { type: 'devops', name: 'Auth provider + data APIs', start: 1.5, end: 1.9 },
      { type: 'dev',    name: 'Flow B expansion (all intents)', start: 1.6, end: 2.3 },
      { type: 'testing', name: 'Stage + UAT + pentest', start: 2.0, end: 2.5 },
      { type: 'hypercare', name: 'Hyper Care', start: 2.4, end: 2.8 },
    ],
  },
  {
    id: 'wa-v2', label: 'WhatsApp V2 (Complete)', target: 3.6, committed: true,
    bars: [
      { type: 'devops', name: 'Website + scraping infra', start: 2.5, end: 3.0 },
      { type: 'dev',    name: 'Full KB + hardening + scraping', start: 2.6, end: 3.5 },
      { type: 'testing', name: 'Stage + UAT', start: 3.2, end: 3.7 },
      { type: 'hypercare', name: 'Hyper Care', start: 3.6, end: 4.0 },
      { type: 'optimization', name: 'Optimization (all WA stages done)', start: 4.0, end: 5.5 },
    ],
  },
  {
    id: 'app', label: 'Mobile App', target: 4.7, committed: true,
    bars: [
      { type: 'devops', name: 'Mobile SDK + deeplinks', start: 2.6, end: 3.3 },
      { type: 'app',    name: 'Adapt core flows + mobile UX', start: 2.7, end: 4.5 },
      { type: 'testing', name: 'Stage + UAT + pentest', start: 4.0, end: 4.7 },
      { type: 'hypercare', name: 'Hyper Care', start: 4.7, end: 5.1 },
      { type: 'optimization', name: 'Optimization', start: 6.0, end: 7.0 },
    ],
  },
  {
    id: 'voice', label: 'Voice (Q2)', target: 5.6,
    bars: [
      { type: 'devops', name: 'Telephony / IVR connectivity', start: 4.6, end: 5.1 },
      { type: 'voice',  name: 'Real-time NLU + voice flows', start: 4.7, end: 5.6 },
      { type: 'testing', name: 'Stage + UAT', start: 5.2, end: 5.7 },
      { type: 'hypercare', name: 'Hyper Care', start: 5.6, end: 6.0 },
      { type: 'optimization', name: 'Optimization', start: 6.0, end: 6.8 },
    ],
  },
  {
    id: 'web', label: 'Web (Q2)', target: 6.4,
    bars: [
      { type: 'devops', name: 'Website integration', start: 5.5, end: 5.9 },
      { type: 'web',    name: 'Web chat widget', start: 5.6, end: 6.4 },
      { type: 'testing', name: 'Stage + UAT', start: 6.0, end: 6.5 },
      { type: 'hypercare', name: 'Hyper Care', start: 6.4, end: 6.8 },
      { type: 'optimization', name: 'Optimization', start: 6.8, end: 7.0 },
    ],
  },
]

const milestones = [
  { at: 1.2, label: 'WA V0' },
  { at: 2.4, label: 'WA V1' },
  { at: 3.6, label: 'WA V2' },
  { at: 4.7, label: 'App' },
  { at: 5.6, label: 'Voice' },
  { at: 6.4, label: 'Web' },
]

const QUARTERS = [
  { label: 'Q4 2025', grow: 2 },
  { label: 'Q1 2026', grow: 3 },
  { label: 'Q2 2026', grow: 2 },
]

function Track({ children }) {
  return <div style={{ position: 'relative', height: '100%' }}>{children}</div>
}

function Bar({ bar }) {
  const color = COLORS[bar.type] || COLORS.dev
  const muted = bar.type === 'devops' || bar.type === 'testing'
  const opacity = bar.type === 'optimization' ? 0.5 : muted ? 0.55 : 0.9
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `${LABEL_W}px 1fr`, alignItems: 'center', height: 25, position: 'relative', zIndex: 1 }}>
      <div style={{ fontSize: 12, color: '#6B7280', paddingRight: 10, display: 'flex', alignItems: 'center', gap: 7, overflow: 'hidden' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bar.name}</span>
      </div>
      <Track>
        <div style={{
          position: 'absolute', left: pct(bar.start), width: pct(bar.end - bar.start),
          top: '50%', transform: 'translateY(-50%)', height: 14,
          background: color, opacity, borderRadius: 8,
        }} />
      </Track>
    </div>
  )
}

export default function GanttChart() {
  return (
    <div style={{ overflowX: 'auto', marginBottom: 32, paddingBottom: 4 }}>
      <div style={{ minWidth: 780, position: 'relative' }}>

        {/* Gridlines + Q1-2026 deadline */}
        <div style={{ position: 'absolute', top: 44, bottom: 34, left: LABEL_W, right: 0, pointerEvents: 'none', zIndex: 0 }}>
          {[1, 2, 3, 4, 5, 6].map(m => {
            const deadline = m === DEADLINE
            const quarter = m === 2
            return (
              <div key={m} style={{
                position: 'absolute', left: `${(m / TOTAL) * 100}%`, top: 0, bottom: 0,
                borderLeft: deadline ? '1.5px dashed #DC2626' : quarter ? '1px solid #D1D5DB' : '1px solid #EDEFF2',
              }} />
            )
          })}
        </div>

        {/* Sticky axis */}
        <div style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 3, paddingTop: 2 }}>
          {/* deadline label */}
          <div style={{ display: 'grid', gridTemplateColumns: `${LABEL_W}px 1fr` }}>
            <div />
            <Track>
              <div style={{ position: 'absolute', left: pct(DEADLINE), transform: 'translateX(-50%)', fontSize: 9, fontWeight: 700, color: '#DC2626', whiteSpace: 'nowrap', letterSpacing: '0.03em' }}>
                ◆ Q1 2026 deadline
              </div>
            </Track>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: `${LABEL_W}px 1fr`, marginTop: 14 }}>
            <div />
            <div style={{ display: 'flex' }}>
              {QUARTERS.map((q, i) => (
                <div key={q.label} style={{ flexGrow: q.grow, flexBasis: 0, textAlign: 'center', fontSize: 10.5, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.06em', paddingBottom: 5, borderRight: i < QUARTERS.length - 1 ? '1px solid #D1D5DB' : 'none' }}>
                  {q.label}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: `${LABEL_W}px 1fr`, borderBottom: '1px solid #E4E7EC', paddingBottom: 5 }}>
            <div style={{ fontSize: 10.5, color: '#C0C4CC', fontWeight: 600, letterSpacing: '0.05em', alignSelf: 'end' }}>TIMELINE</div>
            <div style={{ display: 'flex' }}>
              {MONTHS.map((m, i) => <div key={i} style={{ flex: 1, textAlign: 'center', fontSize: 10, color: '#AEB4BD' }}>{m}</div>)}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', margin: '14px 0 16px', paddingLeft: 2 }}>
          {[['DevOps', COLORS.devops, 0.55], ['Development', COLORS.dev, 0.9], ['Testing', COLORS.testing, 0.55], ['Hyper Care', COLORS.hypercare, 0.9], ['Optimization', COLORS.optimization, 0.5]].map(([label, c, o]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 18, height: 7, background: c, borderRadius: 4, opacity: o }} />
              <span style={{ fontSize: 11, color: '#6B7280' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Channels */}
        {channels.map((ch, ci) => (
          <div key={ch.id} style={{ marginBottom: ci < channels.length - 1 ? 16 : 8 }}>
            <div style={{ display: 'grid', gridTemplateColumns: `${LABEL_W}px 1fr`, alignItems: 'center', marginBottom: 4, position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: ch.committed ? '#111827' : '#6B7280' }}>{ch.label}</div>
              <Track>
                <div style={{ position: 'absolute', left: pct(ch.target), transform: 'translateX(-50%)', top: 0 }}>
                  <svg width="11" height="11" viewBox="0 0 11 11"><polygon points="5.5,0 11,5.5 5.5,11 0,5.5" fill={COLORS.milestone} /></svg>
                </div>
              </Track>
            </div>
            {ch.bars.map(bar => <Bar key={bar.name} bar={bar} />)}
          </div>
        ))}

        {/* Milestone axis */}
        <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid #E4E7EC', paddingTop: 10, marginTop: 4 }}>
          <div style={{ display: 'grid', gridTemplateColumns: `${LABEL_W}px 1fr` }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#6B7280' }}>Go-live</div>
            <Track>
              {milestones.map(m => (
                <div key={m.label} style={{ position: 'absolute', left: pct(m.at), transform: 'translateX(-50%)', top: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', width: 60 }}>
                  <svg width="11" height="11" viewBox="0 0 11 11"><polygon points="5.5,0 11,5.5 5.5,11 0,5.5" fill={COLORS.milestone} /></svg>
                  <span style={{ fontSize: 8.5, color: '#6B7280', marginTop: 3, textAlign: 'center', lineHeight: 1.2, fontWeight: 600 }}>{m.label}</span>
                </div>
              ))}
            </Track>
          </div>
        </div>
      </div>
    </div>
  )
}
