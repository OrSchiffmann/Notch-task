import { Summary, SectionHeader, P, H2, Card } from '../Shared'
import GanttChart from '../GanttChart'

export default function Roadmap() {
  return (
    <div>
      <SectionHeader eyebrow="TIMELINE" title="MVP committed, the rest sequenced" />
      <Summary>
        From a 1 November 2025 kickoff, the MVP (WhatsApp first flow) is the one hard commitment - live in December, well inside the window. The App, Bullet's priority, is targeted for the end-of-Q1-2026 deadline. Voice, Web, and every channel's post-launch Hyper Care and Optimization deliberately extend into Q2 2026. We protect the must-haves rather than forcing all five channels into five months.
      </Summary>

      <Card accent title="What is committed vs sequenced">
        <p><strong style={{ color: 'var(--color-text)' }}>Committed by end of Q1 2026:</strong> WhatsApp MVP, WhatsApp Full, and the Mobile App. <strong style={{ color: 'var(--color-text)' }}>Sequenced into Q2 2026:</strong> Voice, Web, and the Hyper Care + Optimization tail of every channel. The red dashed line on the chart is the Q1 2026 deadline - the App lands just inside it; nothing committed sits to the right of it.</p>
      </Card>

      <GanttChart />

      <H2>Pattern repeated for each channel</H2>
      <P>
        Every channel follows the same sequence of work. The only thing that changes is the specific integrations and flows involved.
      </P>

      <Card title="1. DevOps connectivity">
        <p>Before Development can integrate, DevOps establishes connectivity to the channel's relevant third-party and internal systems - Glassix for WhatsApp, mobile SDK for App, telephony system for Voice. This is a gate: integration cannot be validated without the pipeline.</p>
      </Card>

      <Card title="2. Discovery + mocks">
        <p>Swagger specs received from Bullet. API comprehension Q&A to understand semantics. Mocks built from the understood contracts. Development starts immediately against mocks - no Bullet environment access needed at this stage.</p>
      </Card>

      <Card title="3. Build">
        <p>Flows built on Notch's platform against the internal environment. Real API integration replaces mocks once the logic is mature. This is the longest phase for each channel.</p>
      </Card>

      <Card title="4. Testing funnel">
        <p>Notch Stage testing, then Bullet UAT, then pentest and load (required from WhatsApp Full onward), then production validation. PVT (friends and family) is a decision per channel. Full detail in the Testing Strategy tab.</p>
      </Card>

      <Card title="5. Go-live">
        <p>Production launch. Glassix fallback active for the first week regardless of containment rate. Both Notch and Bullet on standby for the first 48 hours.</p>
      </Card>

      <Card title="6. Hyper Care">
        <p>An intensive, time-boxed support window (2-3 weeks) immediately after go-live: elevated monitoring, a dedicated responder on standby, and a fast incident loop. The goal is to catch and resolve the surprises that only real traffic reveals, before the channel is treated as steady-state.</p>
      </Card>

      <Card title="7. Optimization">
        <p>Once stable, each channel enters ongoing optimization: tuning prompts and guardrails against real conversations, expanding intent coverage, and lifting the containment rate. This phase has no hard end - it runs as the channel matures and deliberately extends past the Q1 2026 window.</p>
      </Card>
    </div>
  )
}
