import { Summary, SectionHeader, P, H2, Card, WarnCard, Table, NumberedItem } from '../Shared'

export default function Overview() {
  return (
    <div>
      <SectionHeader eyebrow="STRATEGY" title="Two projects, one kickoff" />
      <Summary>
        We are managing this as two separate projects: a DevOps project and a Product project. They run in parallel, have different owners and different risks, and converge only at deployment. WhatsApp goes first - it has a fallback, and going live on it is the first real test of the DevOps pipeline in production.
      </Summary>

      <H2>Two separate projects</H2>
      <P>
        The most important framing decision: this is not one project. It is two. A <strong style={{ color: 'var(--color-text)' }}>DevOps project</strong> that proves Notch can deploy and operate inside Bullet's on-prem environment, and a <strong style={{ color: 'var(--color-text)' }}>Product project</strong> that builds the AI support flows on Notch's platform. They have different people, different dependencies, and different risk profiles. Managing them as one project means the slower track blocks the faster one. Keeping them separate lets both move at full speed.
      </P>
      <P>
        They converge at one point: when a validated binary from the Product project is handed off through the pipeline the DevOps project built. Until that moment, they operate independently.
      </P>

      <H2>Channel sequencing</H2>
      <P>We go live channel by channel, each choice deliberate:</P>

      <NumberedItem n="1" title="WhatsApp - first (V0)">
        Bullet already operates this channel and it is the simplest technically (async text, no real-time NLU). It has a <strong style={{ color: 'var(--color-accent)' }}>built-in fallback via Glassix</strong> - if AI fails, a human agent picks up. That makes it the right place to discover failure modes, because they are recoverable. Going live on WhatsApp also gives us the first real end-to-end test of the DevOps pipeline in a production environment - validating the deployment model before we build on top of it. Critically, we do not need to go live with all WhatsApp flows - V0 can be a single category.
      </NumberedItem>
      <NumberedItem n="2" title="Mobile App - second (Bullet's 2026 priority)">
        Highest customer value. WhatsApp V0 is Phase 0 of the App: the core capabilities proven there are exactly what the App reuses. App has no graceful fallback, so nothing unproven lands there first.
      </NumberedItem>
      <NumberedItem n="3" title="Voice - third">
        Reuses the proven core, adds real-time and NLU complexity.
      </NumberedItem>
      <NumberedItem n="4" title="Website - fourth">
        Lowest marginal value once the above channels exist.
      </NumberedItem>

      <Card accent>
        <p>WhatsApp first is not a detour from the App deadline - it is the first, recoverable increment of the same core the App depends on.</p>
      </Card>

      <H2>Build vs Buy</H2>
      <P>
        Notch builds only where it adds unique value. Everything else is a bought tool - and for each bought tool, the question is who brings the vendor: Notch (a tool we already work with) or Bullet (one they already operate).
      </P>
      <Table
        headers={['Category', 'What', 'Recommended owner']}
        rows={[
          ['BUILD', 'AI agents, flow orchestration, guardrails, routing logic', 'Notch'],
          ['BUY', 'Auth/OTP provider', 'Bullet - likely already have one'],
          ['BUY', 'LLM model', 'Bullet - self-hosted in their cloud'],
          ['BUY', 'Website search/scraping (e.g. Firecrawl)', 'Decide at kickoff'],
          ['BUY', 'Monitoring/observability tools', 'Bullet - likely already have one'],
        ]}
      />
      <Card title="Subscription ownership - Bullet holds">
        <p>For every third-party tool, Bullet holds the subscription. AI pricing is unsettled and consumption-based. Notch sells value, not an infrastructure markup - and should not hedge costs it does not control. Confirm per tool at kickoff.</p>
      </Card>

      <H2>Working assumptions</H2>

      <WarnCard title="Timeline interpretation">
        The brief states Q1 2026 for App go-live. From a July 1 kickoff that date has already passed, so we read it as "one quarter from kickoff" - target end of Q3 2026 (September). If Q1 2026 is a hard external commitment, the plan needs rescoping. Flagged as the first open question for kickoff.
      </WarnCard>

      <Table
        headers={['Assumption', 'Detail']}
        rows={[
          ['Deployment model', 'Binary-only - Bullet never sees Notch source code. IP protected.'],
          ['LLM', 'Self-hosted inside Bullet\'s cloud. Customer data never leaves their environment.'],
          ['3rd-party tools', 'Bullet likely already operates some of these (auth, monitoring). Use theirs before introducing new vendors.'],
        ]}
      />
    </div>
  )
}
