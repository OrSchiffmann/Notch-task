import { Summary, SectionHeader, P, H2, Card } from '../Shared'
import GanttChart from '../GanttChart'

export default function Roadmap() {
  return (
    <div>
      <SectionHeader eyebrow="TIMELINE" title="Five milestones, twelve months" />
      <Summary>
        Five channel go-lives over twelve months. Each milestone follows the same pattern: DevOps connectivity for that channel's integrations, Development building against mocks and then real APIs, and a testing funnel before production. The DevOps track foundation runs in the first three months and enables everything after.
      </Summary>

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
    </div>
  )
}
