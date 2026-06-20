import { Summary, SectionHeader, P, H2, Card, Table } from '../Shared'

function DualTrackDiagram() {
  const boxStyle = (color) => ({
    background: color === 'accent' ? 'var(--color-accent-soft)' : color === 'purple' ? 'rgba(122,107,196,0.12)' : 'var(--color-surface)',
    border: `1px solid ${color === 'accent' ? 'var(--color-accent)' : color === 'purple' ? 'var(--color-track3)' : 'var(--color-border)'}`,
    borderRadius: 8, padding: '10px 14px', fontSize: 13, textAlign: 'center',
  })
  const label = (color) => ({
    fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em',
    color: color === 'accent' ? 'var(--color-accent)' : color === 'purple' ? 'var(--color-track3)' : 'var(--color-text-dim)',
    fontWeight: 500,
  })

  return (
    <div className="mb-8 p-5 rounded-lg border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p style={label('accent')} className="mb-3">TRACK 1 - DEVOPS</p>
          <div className="space-y-2">
            <div style={boxStyle('accent')}>Workshops 1 & 2</div>
            <div style={boxStyle('accent')}>Pipeline + artifact storage</div>
            <div style={boxStyle('accent')}>LLM deployment spec</div>
          </div>
        </div>
        <div>
          <p style={label('gray')} className="mb-3">TRACK 2 - DEVELOPMENT</p>
          <div className="space-y-2">
            <div style={boxStyle('gray')}>Build on Notch platform</div>
            <div style={boxStyle('gray')}>4 flows + guardrails</div>
            <div style={boxStyle('gray')}>Ship as binaries</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-3">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M7 8l5 5 5-5" fill="none" stroke="var(--color-track3)" strokeWidth="2" /></svg>
      </div>

      <div style={boxStyle('purple')} className="mb-3">
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--color-track3)', marginBottom: 4 }}>
          Single-tenant bridge
        </p>
        <p style={{ color: 'var(--color-text-dim)', fontSize: 12 }}>
          Internal env mimicking Bullet - where both tracks meet
        </p>
      </div>

      <div className="flex justify-center mb-3">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M7 8l5 5 5-5" fill="none" stroke="var(--color-text-dim)" strokeWidth="2" /></svg>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div style={{ ...boxStyle('gray'), background: 'var(--color-warn-soft)', borderColor: 'var(--color-warn)' }}>
          <p style={{ fontSize: 12, color: 'var(--color-warn)' }}>↩ Flows back to generic product</p>
        </div>
        <div style={boxStyle('gray')}>
          <p style={{ fontSize: 12, color: 'var(--color-text-dim)' }}>→ Validated binary to Bullet</p>
        </div>
      </div>
    </div>
  )
}

export default function DualTrack() {
  return (
    <div>
      <SectionHeader eyebrow="ARCHITECTURE" title="Two projects, one bridge" />
      <Summary>
        This is two projects, not one. DevOps proves the deployment; Development builds on our platform. The single-tenant environment bridges them - and makes every feature generic-by-design.
      </Summary>

      <P>
        The single most important structural decision: these are <strong style={{ color: 'var(--color-text)' }}>two projects with different resources, dependencies, and risk profiles</strong>, joined by a single-tenant environment.
      </P>

      <DualTrackDiagram />

      <H2>The single-tenant solves three problems at once</H2>
      <Table
        headers={['Problem', 'How it solves it']}
        rows={[
          ['Velocity', 'Developers test against Bullet-like conditions without waiting on Bullet access each iteration.'],
          ['IP protection', 'Developers work against a mimic, never inside Bullet\u2019s env, never touching source either way.'],
          ['Genericization', 'Built on our platform → everything flows back to the product core. Build inside the customer and the work is trapped.'],
        ]}
      />

      <H2>Build vs buy</H2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card title="BUILD - our value">
          <p>AI agents & resolution logic, 4 flows / orchestration, guardrails & routing, single-tenant platform. Generic-by-design.</p>
        </Card>
        <Card title="BUY - commodity">
          <p>Auth/OTP, LLM Model, website search (e.g. Firecrawl). No reason to rebuild. Per tool: who brings the vendor? Subscription → Bullet owns.</p>
        </Card>
      </div>

      <Card accent title="Bonus: genericization by architecture">
        <p>Genericization isn't a feature we retrofit - it's a consequence of building on our platform through a single-tenant. Any capability is reusable for the next customer. Example: Data Integration's contract-driven connector pattern becomes a reusable primitive with only the per-customer API mapping swapped.</p>
      </Card>
    </div>
  )
}
