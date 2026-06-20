import { Summary, SectionHeader, P, H2, Card, Table } from '../Shared'

const font = "'Calibri', 'Trebuchet MS', Arial, sans-serif"

function Node({ children, accent }) {
  return (
    <div style={{
      background: '#fff',
      border: `1px solid ${accent === 'blue' ? '#C7D7F5' : accent === 'orange' ? '#FAD2BD' : '#E4E7EC'}`,
      borderRadius: 8, padding: '10px 12px', fontSize: 13, color: '#374151',
      textAlign: 'center', fontFamily: font, lineHeight: 1.35,
    }}>{children}</div>
  )
}

function DeliveryDiagram() {
  const colHead = (color) => ({
    fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
    color, marginBottom: 12, textAlign: 'center', fontFamily: font,
  })
  return (
    <div style={{ background: '#FBFBFC', border: '1px solid #ECEEF2', borderRadius: 12, padding: '26px 22px', marginBottom: 32 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <div>
          <p style={colHead('#2563EB')}>DevOps Project</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Node accent="blue">Workshops + binary pipeline</Node>
            <Node accent="blue">Dev → Staging → Production</Node>
            <Node accent="blue">Per-channel connectivity</Node>
          </div>
        </div>
        <div>
          <p style={colHead('#F06A22')}>Product Project</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Node accent="orange">Build flows on Notch platform</Node>
            <Node accent="orange">Mock-first, then real integration</Node>
            <Node accent="orange">Validated binaries</Node>
          </div>
        </div>
      </div>

      {/* converging arrows */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '6px 0' }}>
        <svg width="240" height="34" viewBox="0 0 240 34" fill="none">
          <path d="M60 2 C60 18, 120 16, 120 30" stroke="#C0C4CC" strokeWidth="1.5" />
          <path d="M180 2 C180 18, 120 16, 120 30" stroke="#C0C4CC" strokeWidth="1.5" />
          <path d="M115 25 L120 32 L125 25" stroke="#C0C4CC" strokeWidth="1.5" />
        </svg>
      </div>

      <div style={{ maxWidth: 360, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ background: '#FFF4EE', border: '1px solid #FAD2BD', borderRadius: 8, padding: '10px 14px' }}>
          <p style={{ fontSize: 13.5, fontWeight: 700, color: '#C2410C', fontFamily: font }}>The single convergence point</p>
          <p style={{ fontSize: 12.5, color: '#6B7280', fontFamily: font, marginTop: 2 }}>
            Validated binary, pulled into Bullet's environment through the DevOps pipeline
          </p>
        </div>
      </div>
    </div>
  )
}

export default function DualTrack() {
  return (
    <div>
      <SectionHeader eyebrow="DELIVERY MODEL" title="How the two projects run and connect" />
      <Summary>
        The DevOps project owns everything about running inside Bullet's environment. The Product project owns the AI flows, built on Notch's own platform. They stay decoupled through most of the timeline and meet at one handoff: a validated binary, shipped through the pipeline DevOps built. Building on our platform - not inside the customer - is also what keeps the work reusable.
      </Summary>

      <DeliveryDiagram />

      <H2>DevOps Project - prove the deployment</H2>
      <P>
        Owns the on-premise foundation: the deployment workshops, the binary pipeline, the rollout across Dev, Staging and Production, secure artifact storage, the LLM deployment spec, and all access coordination. Its output is a proven, repeatable path for getting a binary safely into Bullet's environment - and the connectivity each new channel needs to its integrations.
      </P>

      <H2>Product Project - build the flows</H2>
      <P>
        Builds the AI support flows on Notch's platform, in Notch's codebase, where the IP lives. It develops against mocks first and connects to Bullet's real systems only once the logic is mature. Its output is validated binaries, handed to the DevOps project for deployment.
      </P>

      <H2>The internal dev environment - a DevOps deliverable, not a strategy</H2>
      <P>
        To let the Product team build without waiting on Bullet at every step, DevOps stands up an internal environment on Notch's side, configured to resemble Bullet's setup, with a pipeline into Bullet's Dev environment. Developers work here against mocks built from the Swagger specs Bullet provides. It is a practical tactic that removes a dependency - not an architectural centrepiece.
      </P>
      <Table
        headers={['What it gives us', 'How']}
        rows={[
          ['Velocity', 'Developers build and test against Bullet-like conditions without waiting on Bullet access each iteration.'],
          ['Mock-driven development', 'Mocks built from Bullet\'s Swagger stand in for real APIs until integration is ready. Swagger quality sets mock quality.'],
          ['A clean handoff', 'When the logic is mature, the same pipeline carries the build from internal environment to Bullet\'s Dev for real integration.'],
        ]}
      />

      <H2>Where they converge</H2>
      <P>
        Through discovery, build, and mock integration, the two projects barely touch. They meet at one point and one point only: when a binary the Product project has validated is handed to the DevOps project and pulled into Bullet's environment through the pipeline. A single, well-defined seam between two otherwise independent efforts - which is exactly why they can move in parallel.
      </P>

      <Card accent title="Bonus - genericisation falls out of the architecture">
        <p>Because the Product project builds on Notch's platform rather than inside Bullet's environment, every capability it produces is reusable by default. The work is never trapped as customer-specific customisation - it flows back into the product core. Concretely: the Data Integration flow's contract-driven connector becomes a reusable primitive, and the next regulated customer inherits it with only their API mapping swapped in. Genericisation is not a phase we add later; it is a consequence of where we build.</p>
      </Card>
    </div>
  )
}
