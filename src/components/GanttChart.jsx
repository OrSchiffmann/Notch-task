const MONTHS = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const QUARTERS = [
  { label: 'Q3 2026', cols: '2 / 5' },
  { label: 'Q4 2026', cols: '5 / 8' },
  { label: 'Q1 2027', cols: '8 / 11' },
  { label: 'Q2 2027', cols: '11 / 14' },
]

const LABEL_COL = '160px'
const GRID = `${LABEL_COL} repeat(12, 1fr)`

const COLORS = {
  devops: '#2563EB',
  dev: '#F06A22',
  testing: '#6B7280',
  milestone: '#F06A22',
}

const channels = [
  {
    id: 'wa-v0',
    label: 'WhatsApp V0',
    target: 3,
    bars: [
      { type: 'devops', name: 'Glassix + IVR connectivity', start: 1, end: 2 },
      { type: 'dev',    name: 'Discovery + mocks (Swagger)', start: 1, end: 2 },
      { type: 'dev',    name: 'Build: routing + FAQ + guardrails', start: 2, end: 3 },
      { type: 'dev',    name: 'Real API integration', start: 2.5, end: 3 },
    ],
  },
  {
    id: 'wa-full',
    label: 'WhatsApp Full',
    target: 5,
    bars: [
      { type: 'devops', name: 'Auth provider + data APIs', start: 3, end: 4 },
      { type: 'dev',    name: 'OTP + data integration', start: 3, end: 5 },
      { type: 'dev',    name: 'Website scraping', start: 4, end: 5 },
      { type: 'dev',    name: 'Prompt injection hardening', start: 4.5, end: 5 },
    ],
  },
  {
    id: 'app',
    label: 'Mobile App',
    target: 9,
    bars: [
      { type: 'devops', name: 'Mobile SDK + deeplinks connectivity', start: 5, end: 6.5 },
      { type: 'dev',    name: 'Adapt core flows for mobile', start: 5, end: 7.5 },
      { type: 'dev',    name: 'App deeplinks + mobile UX', start: 7, end: 9 },
    ],
  },
  {
    id: 'voice',
    label: 'Voice',
    target: 11,
    bars: [
      { type: 'devops', name: 'Telephony / IVR connectivity', start: 9, end: 10 },
      { type: 'dev',    name: 'Real-time NLU + voice flows', start: 9, end: 11 },
    ],
  },
  {
    id: 'web',
    label: 'Web',
    target: 12,
    bars: [
      { type: 'devops', name: 'Website integration', start: 11, end: 11.5 },
      { type: 'dev',    name: 'Web chat widget', start: 11, end: 12 },
    ],
  },
]

const testingPhases = [
  { name: 'Notch Stage testing',  start: 2.5, end: 3,   channel: 'wa-v0' },
  { name: 'Bullet UAT',           start: 3,   end: 3.5, channel: 'wa-v0' },
  { name: 'Notch Stage testing',  start: 4.5, end: 5,   channel: 'wa-full' },
  { name: 'Bullet UAT',           start: 5,   end: 5.5, channel: 'wa-full' },
  { name: 'Pentest + load',       start: 5.5, end: 6,   channel: 'wa-full' },
  { name: 'Notch Stage testing',  start: 8,   end: 9,   channel: 'app' },
  { name: 'Bullet UAT',           start: 9,   end: 9.5, channel: 'app' },
  { name: 'Notch Stage testing',  start: 10.5, end: 11, channel: 'voice' },
  { name: 'Bullet UAT',           start: 11,  end: 11.5,channel: 'voice' },
  { name: 'Notch Stage + UAT',    start: 11.5,end: 12,  channel: 'web' },
]

const milestones = [3, 5, 9, 11, 12]
const milestoneLabels = { 3: 'WA V0', 5: 'WA Full', 9: 'App', 11: 'Voice', 12: 'Web' }

function barCol(start, end) {
  return `${Math.ceil(start) + 1} / ${Math.ceil(end) + 2}`
}

function GanttBar({ bar }) {
  const color = bar.type === 'devops' ? COLORS.devops : bar.type === 'testing' ? COLORS.testing : COLORS.dev
  const isDevops = bar.type === 'devops'
  return (
    <div style={{ display: 'grid', gridTemplateColumns: GRID, gap: 0, marginBottom: 4 }}>
      <div style={{ fontSize: 11, color: '#9CA3AF', paddingRight: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0, display: 'inline-block' }} />
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bar.name}</span>
      </div>
      <div style={{
        gridColumn: barCol(bar.start, bar.end),
        height: 18,
        background: color,
        opacity: isDevops ? 0.6 : 0.8,
        borderRadius: 3,
      }} />
    </div>
  )
}

export default function GanttChart() {
  return (
    <div style={{ overflowX: 'auto', marginBottom: 32 }}>
      <div style={{ minWidth: 720 }}>

        {/* Quarter headers */}
        <div style={{ display: 'grid', gridTemplateColumns: GRID, gap: 0, marginBottom: 0 }}>
          <div />
          {QUARTERS.map(q => (
            <div key={q.label} style={{
              gridColumn: q.cols,
              textAlign: 'center', fontSize: 10, fontWeight: 700,
              color: '#9CA3AF', letterSpacing: '0.08em',
              paddingBottom: 4, borderBottom: '1px solid #E4E7EC',
            }}>
              {q.label}
            </div>
          ))}
        </div>

        {/* Month headers */}
        <div style={{ display: 'grid', gridTemplateColumns: GRID, gap: 0, marginBottom: 16 }}>
          <div />
          {MONTHS.map((m, i) => (
            <div key={i} style={{ textAlign: 'center', fontSize: 10, color: '#9CA3AF', paddingTop: 4 }}>{m}</div>
          ))}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
          {[['DevOps', COLORS.devops], ['Development', COLORS.dev], ['Testing', COLORS.testing]].map(([label, color]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 20, height: 8, background: color, borderRadius: 2, opacity: 0.75 }} />
              <span style={{ fontSize: 11, color: '#6B7280' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Channel sections */}
        {channels.map((ch, ci) => (
          <div key={ch.id} style={{ marginBottom: 20 }}>
            {/* Channel header */}
            <div style={{ display: 'grid', gridTemplateColumns: GRID, gap: 0, marginBottom: 6 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>{ch.label}</div>
              {/* Target milestone marker */}
              <div style={{
                gridColumn: `${ch.target + 1} / ${ch.target + 2}`,
                display: 'flex', justifyContent: 'center',
              }}>
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <polygon points="5,0 10,5 5,10 0,5" fill={COLORS.milestone} />
                </svg>
              </div>
            </div>

            {/* Sub-process bars */}
            {ch.bars.map(bar => <GanttBar key={bar.name} bar={bar} />)}

            {/* Testing bars for this channel */}
            {testingPhases.filter(t => t.channel === ch.id).map(t => (
              <GanttBar key={t.name + t.channel} bar={{ ...t, type: 'testing' }} />
            ))}

            {/* Separator */}
            {ci < channels.length - 1 && (
              <div style={{ borderBottom: '1px solid #F3F4F6', marginTop: 12 }} />
            )}
          </div>
        ))}

        {/* Milestone row */}
        <div style={{ borderTop: '1px solid #E4E7EC', paddingTop: 12, display: 'grid', gridTemplateColumns: GRID, gap: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#6B7280' }}>Go-live</div>
          {MONTHS.map((_, i) => {
            const month = i + 1
            const isMs = milestones.includes(month)
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {isMs && (
                  <>
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <polygon points="5,0 10,5 5,10 0,5" fill={COLORS.milestone} />
                    </svg>
                    <span style={{ fontSize: 8, color: '#6B7280', textAlign: 'center', marginTop: 2, lineHeight: 1.2 }}>
                      {milestoneLabels[month]}
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
