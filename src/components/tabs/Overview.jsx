import { Summary, SectionHeader, P, H2, Card, WarnCard, Table, NumberedItem } from '../Shared'

export default function Overview() {
  return (
    <div>
      <SectionHeader eyebrow="STRATEGY" title="Two tracks, one kickoff" />
      <Summary>
        Two parallel tracks - DevOps and Development - run independently and converge at deployment. WhatsApp goes first because it has a built-in fallback, and because going live on it gives us the first real test of the DevOps pipeline in production. We build where we add value; everything else is bought, on Bullet's subscription.
      </Summary>

      <P>
        Notch is standing up its first insurance deployment with Bullet. The work splits into two projects that run in parallel because they need different people and carry different risks: a <strong style={{ color: 'var(--color-text)' }}>DevOps / Infrastructure track</strong> that proves the on-prem deployment, and a <strong style={{ color: 'var(--color-text)' }}>Development track</strong> that builds the AI support flows on Notch's own platform. Both tracks converge at the deployment pipeline.
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
