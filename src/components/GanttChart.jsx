const MONTHS = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar']
const TOTAL = MONTHS.length // 5 months: Nov 2025 → Mar 2026
const LABEL_W = 172

const COLORS = {
  devops: '#2563EB',
  dev: '#F06A22',
  testing: '#94A0AE',
  app: '#7C3AED',
  voice: '#0891B2',
  web: '#059669',
  milestone: '#F06A22',
}

const pct = x => `${(x / TOTAL) * 100}%`

const channels = [
  {
    id: 'wa-mvp', label: 'WhatsApp MVP', target: 1.2,
    bars: [
      { type: 'devops', name: 'Glassix + IVR connectivity', start: 0.1, end: 0.8 },
      { type: 'dev',    name: 'Discovery + mocks', start: 0.1, end: 0.7 },
      { type: 'dev',    name: 'Build: routing + FAQ + guardrails', start: 0.5, end: 1.1 },
      { type: 'dev',    name: 'Real API integration', start: 0.9, end: 1.2 },
      { type: 'testing', name: 'Stage testing + Bullet UAT', start: 1.0, end: 1.4 },
    ],
  },
  {
    id: 'wa-full', label: 'WhatsApp Full', target: 2.2,
    bars: [
      { type: 'devops', name: 'Auth provider + data APIs', start: 1.2, end: 1.7 },
      { type: 'dev',    name: 'OTP + data integration', start: 1.3, end: 2.1 },
      { type: 'dev',    name: 'Website scraping + hardening', start: 1.7, end: 2.2 },
      { type: 'testing', name: 'Stage + UAT + pentest & load', start: 1.9, end: 2.4 },
    ],
  },
  {
    id: 'app', label: 'Mobile App', target: 4.0, color: 'app',
    bars: [
      { type: 'devops', name: 'Mobile SDK + deeplinks', start: 2.2, end: 2.9 },
      { type: 'app',    name: 'Adapt core flows for mobile', start: 2.3, end: 3.4 },
      { type: 'app',    name: 'App deeplinks + mobile UX', start: 3.2, end: 4.0 },
      { type: 'testing', name: 'Stage + UAT + pentest', start: 3.6, end: 4.2 },
    ],
  },
  {
    id: 'voice', label: 'Voice', target: 4.6, color: 'voice',
    bars: [
      { type: 'devops', name: 'Telephony / IVR connectivity', start: 3.9, end: 4.4 },
      { type: 'voice',  name: 'Real-time NLU + voice flows', start: 4.0, end: 4.7 },
      { type: 'testing', name: 'Stage + UAT', start: 4.4, end: 4.9 },
    ],
  },
  {
    id: 'web', label: 'Web', target: 5.0, color: 'web',
    bars: [
      { type: 'devops', name: 'Website integration', start: 4.5, end: 4.9 },
      { type: 'web',    name: 'Web chat widget', start: 4.5, end: 5.0 },
      { type: 'testing', name: 'Stage + UAT', start: 4.8, end: 5.0 },
    ],
  },
]

const milestones = [
  { at: 1.2, label: 'WA MVP' },
  { at: 2.2, label: 'WA Full' },
  { at: 4.0, label: 'App' },
  { at: 4.6, label: 'Voice' },
  { at: 5.0, label: 'Web' },
]

function Track({ children }) {
  return <div style={{ position: 'relative', height: '100%' }}>{children}</div>
}

function Bar({ bar }) {
  const color = COLORS[bar.type] || COLORS.dev
  const muted = bar.type === 'devops' || bar.type === 'testing'
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `${LABEL_W}px 1fr`, alignItems: 'center', height: 26, position: 'relative', zIndex: 1 }}>
      <div style={{ fontSize: 12, color: '#6B7280', paddingRight: 10, display: 'flex', alignItems: 'center', gap: 7, overflow: 'hidden' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bar.name}</span>
      </div>
      <Track>
        <div style={{
          position: 'absolute', left: pct(bar.start), width: pct(bar.end - bar.start),
          top: '50%', transform: 'translateY(-50%)', height: 15,
          background: color, opacity: muted ? 0.55 : 0.92, borderRadius: 8,
        }} />
      </Track>
    </div>
  )
}

export default function GanttChart() {
  return (
    <div style={{ overflowX: 'auto', marginBottom: 32, paddingBottom: 4 }}>
      <div style={{ minWidth: 640, position: 'relative' }}>

        {/* Vertical month gridlines + quarter divider */}
        <div style={{ position: 'absolute', top: 44, bottom: 34, left: LABEL_W, right: 0, display: 'flex', pointerEvents: 'none', zIndex: 0 }}>
          {MONTHS.map((_, i) => (
            <div key={i} style={{ flex: 1, borderRight: i < MONTHS.length - 1 ? `1px ${i === 1 ? 'solid #D1D5DB' : 'solid #EDEFF2'}` : 'none' }} />
          ))}
        </div>

        {/* Sticky axis: quarters + months */}
        <div style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 3, paddingTop: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: `${LABEL_W}px 1fr` }}>
            <div />
            <div style={{ display: 'flex' }}>
              <div style={{ flexGrow: 2, flexBasis: 0, textAlign: 'center', fontSize: 10.5, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.07em', paddingBottom: 5, borderRight: '1px solid #D1D5DB' }}>Q4 2025</div>
              <div style={{ flexGrow: 3, flexBasis: 0, textAlign: 'center', fontSize: 10.5, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.07em', paddingBottom: 5 }}>Q1 2026</div>
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
            <div style={{ display: 'grid', gridTemplateColumns: `${LABEL_W}px 1fr`, alignItems: 'center', marginBottom: 4, position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: '#111827' }}>{ch.label}</div>
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
