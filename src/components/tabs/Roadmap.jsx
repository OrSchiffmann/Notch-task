import { Summary, SectionHeader, P, H2, Card } from '../Shared'
import GanttChart from '../GanttChart'

export default function Roadmap() {
  return (
    <div>
      <SectionHeader eyebrow="TIMELINE" title="Thirteen weeks, three parallel tracks" />
      <Summary>
        From kickoff to App go-live in thirteen weeks, three tracks running concurrently. The MVP window closes at week 7 with WhatsApp Phase 1 live. The DevOps track rolls out per environment (Dev → Staging → Production).
      </Summary>

      <P>
        This timeline is achievable only with the mid-size team (3–4 devs + IM) running three parallel streams. With fewer people the tracks collapse into sequence and the deadline extends.
      </P>

      <GanttChart />

      <H2>Key dependencies visible in the chart</H2>

      <Card title="Phase 0 is a gate">
        <p>WhatsApp development starts at W2–3, but nothing can <em>deploy</em> to Bullet until the Gate Pass at W4. Development proceeds on the single-tenant; deployment waits for the plumbing.</p>
      </Card>

      <Card title="App build starts before WhatsApp closes">
        <p>App build (W9) overlaps with WhatsApp Phase 2 completion (W9) - deliberate, only possible with parallel capacity. The proven core transfers directly.</p>
      </Card>

      <Card title="Production stands up mid-project">
        <p>Production environment is established at W8–9, after Staging is validated. WhatsApp Phase 1 MVP targets production by W7 - sequence may need adjustment based on Bullet's environment provisioning speed.</p>
      </Card>
    </div>
  )
}
