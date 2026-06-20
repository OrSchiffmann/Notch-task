import { Summary, SectionHeader, P, H2, Card } from '../Shared'

function CadenceDiagram() {
  const box = (extra = {}) => ({
    background: 'var(--color-surface)', border: '1px solid var(--color-border)',
    borderRadius: 8, padding: '10px 14px', fontSize: 13, textAlign: 'center', ...extra,
  })
  return (
    <div className="mb-8 p-5 rounded-lg border" style={{ background: 'var(--color-surface-2)', borderColor: 'var(--color-border)' }}>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div style={box({ borderColor: 'var(--color-track1)' })}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-track1)', marginBottom: 4 }}>WEEKLY</p>
          DevOps track sync
        </div>
        <div style={box({ borderColor: 'var(--color-track2)' })}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-track2)', marginBottom: 4 }}>WEEKLY</p>
          Development track sync
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <svg width="120" height="30" viewBox="0 0 120 30">
          <path d="M20 0 L60 20 L100 0" fill="none" stroke="var(--color-text-dim)" strokeWidth="1.5" />
          <path d="M55 16 L60 22 L65 16" fill="none" stroke="var(--color-text-dim)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="flex justify-center mb-4">
        <div style={box({ borderColor: 'var(--color-accent)', background: 'var(--color-accent-soft)', maxWidth: 220 })}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-accent)' }}>
            IM consolidates
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <svg width="20" height="24" viewBox="0 0 20 24"><path d="M10 0v18M3 14l7 7 7-7" fill="none" stroke="var(--color-text-dim)" strokeWidth="1.5" /></svg>
      </div>

      <div className="flex justify-center">
        <div style={box({ borderColor: 'var(--color-warn)', background: 'var(--color-warn-soft)', maxWidth: 320 })}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-warn)', marginBottom: 4 }}>WEEKLY · EXTERNAL</p>
          Sync with Bullet's Implementation Engineer
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <div>
      <SectionHeader eyebrow="OPERATING RHYTHM" title="How we run delivery" />
      <Summary>
        Binaries ship through the pipeline on the version cadence (v1→v4). Each track holds its own weekly sync. The IM consolidates both into one weekly external meeting with Bullet's Implementation Engineer, so Bullet gets one coherent signal, not two raw feeds.
      </Summary>

      <H2>Delivery pipeline cadence</H2>
      <P>
        Each version (see MVP & DOD, v1–v4) ships as a binary through the pull-based pipeline — delivery cadence matches the version plan, not ad hoc releases. Bullet always knows what's coming and when, tied to a named version.
      </P>

      <H2>Weekly cadence</H2>
      <CadenceDiagram />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card title="Internal track syncs (separate)">
          <p><strong style={{ color: 'var(--color-text)' }}>DevOps sync</strong> — environments, access status, pipeline health, security scan results.</p>
          <p className="mt-2"><strong style={{ color: 'var(--color-text)' }}>Development sync</strong> — flow progress, mock/integration status, blockers.</p>
          <p className="mt-2">Kept separate — the two tracks have different rhythms and different blockers; merging dilutes both.</p>
        </Card>
        <Card title="External client sync (consolidated)" accent>
          <p>IM runs one weekly meeting with Bullet's Implementation Engineer, bringing the consolidated output of both internal syncs: status, decisions needed, blockers, what's shipping next.</p>
          <p className="mt-2">Bullet sees one coherent picture, not two raw internal feeds — and the IM is the single point of accountability for escalation.</p>
        </Card>
      </div>
    </div>
  )
}
