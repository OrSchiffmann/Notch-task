import { Summary, SectionHeader, P, H2, Card, WarnCard, Table } from '../Shared'

export default function OnPrem() {
  return (
    <div>
      <SectionHeader eyebrow="TRACK 1 · DEVOPS" title="Prove the deployment before building on it" />
      <Summary>
        Two workshops, each isolating one variable. Pull-based binary handoff — we never get push access to Bullet's environment. The LLM runs self-hosted at Bullet; we provide the deployment spec.
      </Summary>

      <P>
        The on-prem foundation is a <strong style={{ color: 'var(--color-text)' }}>gate, not a warm-up</strong>. If the deployment model doesn't work, no other phase is relevant.
      </P>

      <H2>Two workshops — one variable each</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card title="Workshop 1 — Hello World">
          <p>A minimal binary deploys, runs, and reports back. Proves the <em>plumbing</em>: pipeline, permissions, networking, observability. Proves nothing about product — that's the point.</p>
          <p className="mt-2" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-accent)' }}>
            Exit: a log from the binary reaches notch's Monitor Service.
          </p>
        </Card>
        <Card title="Workshop 2 — Base Binary">
          <p>The real core platform deploys and runs. Plumbing already proven, so any failure here is binary/config-specific — focused debugging.</p>
          <p className="mt-2" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-accent)' }}>
            Exit: core healthy in staging.
          </p>
        </Card>
      </div>

      <H2>Pull-based deployment</H2>
      <P>
        notch packages a binary and uploads it to a <strong style={{ color: 'var(--color-text)' }}>secure intermediate artifact storage</strong>. Bullet's pipeline pulls from there, runs their security scans, and deploys. notch never gets push access into Bullet's environment — smaller attack surface, and Bullet controls what enters and when.
      </P>

      <div className="flex items-center justify-center gap-2 mb-6 p-4 rounded-lg" style={{ background: 'var(--color-surface)', fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--color-text-dim)' }}>
        <span style={{ color: 'var(--color-accent)' }}>notch</span>
        <span>→ push →</span>
        <span style={{ color: 'var(--color-warn)', padding: '2px 8px', background: 'var(--color-warn-soft)', borderRadius: 4 }}>artifact storage</span>
        <span>← pull ←</span>
        <span style={{ color: 'var(--color-track1)' }}>Bullet pipeline</span>
        <span>→ deploy →</span>
        <span style={{ color: 'var(--color-track1)' }}>environments</span>
      </div>

      <H2>LLM Model — self-hosted</H2>
      <P>
        Bullet went on-prem specifically so customer data doesn't leave their environment. The LLM runs inside their cloud. notch delivers two things: an <strong style={{ color: 'var(--color-text)' }}>LLM deployment spec</strong> (what Bullet installs — model, version, infra requirements) and <strong style={{ color: 'var(--color-text)' }}>verification access</strong> to confirm the installed model is correct.
      </P>

      <H2>Track 1 work items</H2>
      <Table
        headers={['Work item', 'What it is']}
        rows={[
          ['WS1 — hello world', 'Pipeline + access + observability'],
          ['WS2 — base binary', 'Core platform on Bullet cloud'],
          ['LLM deployment spec', 'Internal proposal: what Bullet installs'],
          ['LLM verification access', 'Confirm installed model is correct'],
          ['Secure artifact storage', 'Pull-based handoff zone'],
          ['Stand up Staging', 'Replicate proven Dev setup'],
          ['Stand up Production', 'Final environment for live traffic'],
          ['Deploy + support ops', 'Ongoing maintenance'],
        ]}
      />

      <H2>Access matrix — what we need from Bullet</H2>
      <Table
        headers={['What', 'Why', 'When']}
        rows={[
          ['Pipeline deploy access', 'Push binaries via artifact storage', 'Phase 0'],
          ['Security scan visibility', 'Anticipate failures before submission', 'Phase 0'],
          ['Full logs + metrics/traces', 'Debug binary we can\'t read locally', 'Phase 0'],
          ['DB / data structure access', 'Code runs on their data — maintenance requires it', 'Phase 0'],
          ['VPN + test user per env', 'Reproduce flows including production', 'Toward go-live'],
          ['LLM verification', 'Confirm correct model + config', 'Phase 0'],
        ]}
      />

      <WarnCard title="Production access — the sensitive ask">
        Requested with controls built in: test user only, time-boxed, audited, break-glass model. Fallback if refused: staging with production-like data, or reproduction-as-a-service by Bullet.
      </WarnCard>
    </div>
  )
}
