const WEEKS = Array.from({ length: 13 }, (_, i) => i + 1)

const tracks = [
  {
    label: 'Track 1 — DevOps / Infra',
    color: 'var(--color-track1)',
    sublabel: 'per-environment rollout',
    bars: [
      { name: 'WS1 hello world · Dev', start: 1, end: 2, text: 'plumbing', shade: 1 },
      { name: 'WS2 base binary · Dev', start: 3, end: 4, text: 'core+LLM', shade: 1 },
      { name: 'Stand up Staging', start: 5, end: 6, text: 'staging env', shade: 0.7 },
      { name: 'Stand up Production', start: 8, end: 9, text: 'prod env', shade: 0.5 },
      { name: 'Deploy + support ops', start: 5, end: 13, text: 'ongoing', shade: 0.35 },
    ],
  },
  {
    label: 'Track 3 — Single-tenant',
    color: 'var(--color-track3)',
    sublabel: 'bridge',
    bars: [
      { name: 'Build Bullet-like env', start: 1, end: 3, text: 'mimic setup', shade: 1 },
      { name: 'Maintain + sync', start: 4, end: 13, text: 'test bed', shade: 0.5 },
    ],
  },
  {
    label: 'Track 2 — Development',
    color: 'var(--color-track2)',
    sublabel: 'by flow / phase',
    bars: [
      { name: 'Discovery + mocks', start: 1, end: 3, text: 'swagger+Q&A', shade: 0.7 },
      { name: 'Flow A · routing', start: 2, end: 5, text: 'Glassix+IVR', shade: 1 },
      { name: 'Flow B+D · Phase 1', start: 3, end: 6, text: 'FAQ+guardrails', shade: 1 },
      { name: 'Flow C · Phase 2', start: 6, end: 9, text: 'OTP+data', shade: 1 },
      { name: 'App build', start: 9, end: 13, text: 'reuse core', shade: 1, customColor: 'var(--color-app)' },
    ],
  },
]

const milestones = [
  { week: 4, label: 'gate', color: 'var(--color-track1)' },
  { week: 7, label: 'MVP live', color: 'var(--color-warn)' },
  { week: 10, label: 'WA full', color: 'var(--color-track2)' },
  { week: 13, label: 'App live', color: 'var(--color-accent)' },
]

export default function GanttChart() {
  return (
    <div className="overflow-x-auto mb-6">
      <div style={{ minWidth: 680 }}>
        {/* Week headers */}
        <div className="grid gap-0 mb-1" style={{ gridTemplateColumns: '140px repeat(13, 1fr)' }}>
          <div />
          {WEEKS.map(w => (
            <div key={w} className="text-center" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-text-dim)' }}>
              W{w}
            </div>
          ))}
        </div>

        {/* Month labels */}
        <div className="grid gap-0 mb-3 pb-2 border-b" style={{ gridTemplateColumns: '140px repeat(13, 1fr)', borderColor: 'var(--color-border)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-text-dim)' }}>Jul 1</div>
          <div style={{ gridColumn: '2 / 6', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-text-dim)' }}>July</div>
          <div style={{ gridColumn: '6 / 10', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-text-dim)' }}>August</div>
          <div style={{ gridColumn: '10 / 14', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-text-dim)' }}>September</div>
        </div>

        {/* Tracks */}
        {tracks.map((track) => (
          <div key={track.label} className="mb-4">
            <div className="mb-2" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.05em', color: track.color, fontWeight: 600 }}>
              {track.label} <span style={{ color: 'var(--color-text-dim)', fontWeight: 400 }}>· {track.sublabel}</span>
            </div>
            {track.bars.map((bar) => (
              <div key={bar.name} className="grid gap-0 items-center mb-1.5" style={{ gridTemplateColumns: '140px repeat(13, 1fr)' }}>
                <div style={{ fontSize: 12, color: 'var(--color-text-dim)', paddingRight: 8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {bar.name}
                </div>
                <div style={{
                  gridColumn: `${bar.start + 1} / ${bar.end + 2}`,
                  height: 22,
                  background: bar.customColor || track.color,
                  opacity: bar.shade,
                  borderRadius: 5,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 9, fontFamily: 'var(--font-mono)', color: bar.shade > 0.6 ? '#E6EDF3' : '#1a1a1a',
                }}>
                  {bar.text}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* MVP window */}
        <div className="grid gap-0 items-center mb-3 pt-3 border-t" style={{ gridTemplateColumns: '140px repeat(13, 1fr)', borderColor: 'var(--color-border)' }}>
          <div style={{ fontSize: 12, color: 'var(--color-warn)', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>MVP window</div>
          <div style={{
            gridColumn: '2 / 9',
            height: 20, border: '1.5px dashed var(--color-warn)', borderRadius: 5,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--color-warn)',
          }}>
            kickoff → WhatsApp Phase 1 live (W7)
          </div>
        </div>

        {/* Milestones */}
        <div className="grid gap-0 items-center pt-2" style={{ gridTemplateColumns: '140px repeat(13, 1fr)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-text-dim)' }}>Milestones</div>
          {WEEKS.map(w => {
            const m = milestones.find(ms => ms.week === w)
            return (
              <div key={w} className="flex flex-col items-center">
                {m ? (
                  <>
                    <svg width="12" height="12" viewBox="0 0 12 12"><polygon points="6,1 11,6 6,11 1,6" fill={m.color} /></svg>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'var(--color-text-dim)', marginTop: 1 }}>{m.label}</span>
                  </>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
