import { Summary, SectionHeader, P, H2, Card, WarnCard, Table } from '../Shared'

const font = "'Calibri', 'Trebuchet MS', Arial, sans-serif"

function FlowNode({ children, tone }) {
  const map = {
    orange: { bg: '#FFF4EE', border: '#FAD2BD', color: '#C2410C' },
    amber:  { bg: '#FFFBEB', border: '#FCE3B0', color: '#B45309' },
    blue:   { bg: '#EFF4FE', border: '#C7D7F5', color: '#1D4ED8' },
  }
  const c = map[tone] || map.blue
  return (
    <div style={{
      background: c.bg, border: `1px solid ${c.border}`, color: c.color,
      borderRadius: 8, padding: '9px 14px', fontSize: 13, fontWeight: 700,
      fontFamily: font, whiteSpace: 'nowrap',
    }}>{children}</div>
  )
}

function FlowArrow({ label, dir = 'right' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: '0 2px' }}>
      <span style={{ fontSize: 10, color: '#9CA3AF', fontFamily: font, whiteSpace: 'nowrap' }}>{label}</span>
      <span style={{ fontSize: 15, color: '#C0C4CC', lineHeight: 1 }}>{dir === 'left' ? '←' : '→'}</span>
    </div>
  )
}

export default function OnPrem() {
  return (
    <div>
      <SectionHeader eyebrow="DEVOPS PROJECT" title="Prove the deployment before building on it" />
      <Summary>
        The on-premise foundation is a gate, not a warm-up. Two workshops isolate one variable at a time, the binary handoff is pull-based so Notch never holds push access, and the LLM runs self-hosted inside Bullet's cloud. If this project does not succeed, nothing the Product project builds can ship - so it goes first.
      </Summary>

      <P>
        Every other phase of this engagement assumes a working deployment path into Bullet's environment. That assumption is the single biggest unknown on day one, so we test it deliberately and early - and we design the test so that when something fails, we know exactly which variable failed.
      </P>

      <H2>Two workshops, one variable each</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card title="Workshop 1 - Hello World">
          <p>A minimal binary deploys, runs, and reports back. It proves the <em>plumbing</em> - pipeline, permissions, networking, observability - and deliberately proves nothing about the product. If it fails, the problem is infrastructure or access, never our code.</p>
          <p className="mt-2" style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: 13 }}>
            Exit criterion: a log line from the deployed binary reaches Notch's Monitor Service.
          </p>
        </Card>
        <Card title="Workshop 2 - Base Binary">
          <p>The real core platform deploys and runs in Bullet's environment. Because the plumbing is already proven, any failure here is binary- or config-specific - a focused debugging problem, not a hunt across the whole stack.</p>
          <p className="mt-2" style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: 13 }}>
            Exit criterion: the core platform reports healthy in the Dev environment.
          </p>
        </Card>
      </div>

      <H2>Environment rollout - Dev, then Staging, then Production</H2>
      <P>
        The architecture is three environments, and we stand them up in sequence rather than in parallel. We prove the full deployment in Dev, then roll the same validated setup to Staging, then to Production. Each environment inherits a proven configuration from the one before it, so each stand-up is lower-risk than the last - and Production is built from a recipe that has already worked twice.
      </P>
      <Table
        headers={['Environment', 'Purpose', 'Stood up']}
        rows={[
          ['Development', 'Active integration and the first real deployment target. Where the workshops land.', 'First - months 1-2'],
          ['Staging', 'Pre-production validation. Where the testing funnel runs against production-like conditions.', 'Second - month 2-3'],
          ['Production', 'Live customer traffic. Built from the proven Staging recipe, stood up before the first go-live needs it.', 'Third - month 3'],
        ]}
      />

      <H2>Pull-based deployment</H2>
      <P>
        Notch packages a binary and uploads it to a secure intermediate artifact store. Bullet's pipeline <strong style={{ color: 'var(--color-text)' }}>pulls</strong> from there, runs its security scans, and deploys. Notch never holds push access into Bullet's environment. This is a smaller attack surface and it leaves Bullet in full control of what enters and when - which is the only model an insurer's security team will sign off on.
      </P>

      <div style={{
        display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center',
        gap: 8, marginBottom: 12, padding: '20px 16px',
        background: '#FBFBFC', border: '1px solid #ECEEF2', borderRadius: 12,
      }}>
        <FlowNode tone="orange">Notch</FlowNode>
        <FlowArrow label="push" dir="right" />
        <FlowNode tone="amber">Artifact store</FlowNode>
        <FlowArrow label="Bullet pulls" dir="left" />
        <FlowNode tone="blue">Bullet pipeline</FlowNode>
        <FlowArrow label="scan + deploy" dir="right" />
        <FlowNode tone="blue">Environments</FlowNode>
      </div>
      <p style={{ fontSize: 12.5, color: '#9CA3AF', textAlign: 'center', marginBottom: 28, fontFamily: font }}>
        The only arrow reaching Bullet's side is the pull they initiate. Notch never pushes in.
      </p>

      <H2>Self-hosted LLM</H2>
      <P>
        Bullet went on-premise precisely so customer data never leaves their environment, so the model comes to the data: the LLM runs inside their cloud. This creates two Notch responsibilities. First, an <strong style={{ color: 'var(--color-text)' }}>LLM deployment spec</strong> - the exact model, version, GPU requirements, and configuration Bullet must install. Second, <strong style={{ color: 'var(--color-text)' }}>verification access</strong> - the ability to confirm the installed model is the right one, correctly configured. The second is a new access requirement worth flagging early.
      </P>

      <H2>Project work items</H2>
      <Table
        headers={['Work item', 'What it delivers']}
        rows={[
          ['Workshop 1 - Hello World', 'Pipeline, access, and observability proven end-to-end'],
          ['Workshop 2 - Base binary', 'The core platform running in Bullet\'s cloud'],
          ['Environment rollout', 'Dev → Staging → Production, each from a proven recipe'],
          ['LLM deployment spec', 'Exactly what Bullet installs to self-host the model'],
          ['LLM verification access', 'Confirmation the installed model is correct and configured'],
          ['Secure artifact storage', 'The pull-based handoff zone between Notch and Bullet'],
          ['Per-channel connectivity', 'Integration access each new channel needs (Glassix, telephony, mobile SDK)'],
          ['Deploy + support operations', 'Ongoing release handling and production support'],
        ]}
      />

      <WarnCard title="Production access - the sensitive ask">
        A vendor holding network access to an insurer's production is a regulatory red flag, so we request it with controls built in from the start: a dedicated test user only, time-boxed, fully audited, on a break-glass model. If it is refused outright, the fallback is Staging with production-like data, or reproduction-as-a-service performed by Bullet on our behalf.
      </WarnCard>
    </div>
  )
}
