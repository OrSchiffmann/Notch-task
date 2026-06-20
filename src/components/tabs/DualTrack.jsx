import { Summary, SectionHeader, P, H2, Card, Table } from '../Shared'

export default function DualTrack() {
  return (
    <div>
      <SectionHeader eyebrow="ARCHITECTURE" title="Two parallel tracks, one delivery" />
      <Summary>
        This is two projects running in parallel, not one. DevOps proves the deployment; Development builds the flows on Notch's platform. They're kept separate because they have different people, different risks, and different dependencies.
      </Summary>

      <P>
        The most important structural decision in this project is recognizing that <strong style={{ color: 'var(--color-text)' }}>DevOps and Development must run independently</strong>. Merging them creates bottlenecks: developers blocked on infrastructure access, DevOps distracted by feature work. Keeping them separate lets both move at full speed.
      </P>

      <H2>Track 1 - DevOps / Infrastructure</H2>
      <P>
        Owns everything about getting Notch running inside Bullet's environment. Binary pipeline, artifact storage, LLM deployment spec, access coordination. The work here is a gate - no features run until the deployment is proven.
      </P>
      <Table
        headers={['Work item', 'What it delivers']}
        rows={[
          ['Workshop 1 - Hello World', 'Proves the pipeline works: a binary deploys, runs, and sends logs back.'],
          ['Workshop 2 - Base binary', 'Proves the full Notch platform runs in Bullet\'s environment.'],
          ['Internal dev environment', 'A Notch-side environment configured to match Bullet\'s setup, with a pipeline connecting to Bullet\'s Dev environment. Developers work here against mocks - no Bullet access needed for most of the build.'],
          ['LLM deployment spec', 'Exact spec for what Bullet installs: model, version, GPU requirements, config.'],
          ['Secure artifact storage', 'The handoff point - Notch uploads, Bullet pulls and scans.'],
        ]}
      />

      <H2>Track 2 - Development</H2>
      <P>
        Builds the AI support flows on Notch's own platform. Developers work against mocks based on Swagger specs Bullet provides - this means development can start immediately, without waiting for Bullet environment access. Real integration comes later, once the logic is mature.
      </P>
      <Table
        headers={['Phase', 'What happens']}
        rows={[
          ['Discovery', 'Receive Swagger specs from Bullet. API comprehension Q&A with their team to understand semantics, not just syntax.'],
          ['Mock-first build', 'Build all flows against accurate mocks. No Bullet network access needed.'],
          ['Real integration', 'Connect to actual Bullet APIs inside their dev environment. Logic is already mature - integration is the last step, not the first.'],
          ['Validation', 'End-to-end on staging before any production deployment.'],
        ]}
      />

      <H2>How the tracks connect</H2>
      <P>
        Track 1 creates the internal dev environment - a Notch-side environment that mirrors Bullet's configuration and has a pipeline into Bullet's Dev environment. Track 2 builds against this environment using mocks. When real integration is ready, Track 2 connects through the pipeline Track 1 built. Validated code ships as a binary from Track 1's pipeline.
      </P>

      <Card accent title="Genericization by architecture">
        <p>Because Track 2 builds on Notch's platform (not inside Bullet's environment), every capability built is reusable. The work doesn't get trapped as customer-specific customization - it flows back into the product core. Build inside the customer and that's impossible.</p>
      </Card>
    </div>
  )
}
