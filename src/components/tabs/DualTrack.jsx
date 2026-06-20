import { Summary, SectionHeader, P, H2, Card, Table } from '../Shared'

export default function DualTrack() {
  return (
    <div>
      <SectionHeader eyebrow="DELIVERY MODEL" title="How the two projects run and connect" />
      <Summary>
        The DevOps project owns everything about running inside Bullet's environment. The Product project owns the AI flows, built on Notch's own platform. They stay decoupled through most of the timeline and meet at one handoff: a validated binary, shipped through the pipeline DevOps built. Building on our platform - not inside the customer - is also what keeps the work reusable.
      </Summary>

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
