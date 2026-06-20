import { Summary, SectionHeader, P, H2, Card, WarnCard, Table, NumberedItem } from '../Shared'

export default function Overview() {
  return (
    <div>
      <SectionHeader eyebrow="STRATEGY" title="Two tracks, one kickoff" />
      <Summary>
        Two parallel tracks - DevOps and Development - share a single-tenant bridge. WhatsApp goes first because it's the only channel with a built-in fallback. We build where we add value; everything else is a bought tool on Bullet's subscription.
      </Summary>

      <P>
        Notch is standing up its first insurance deployment with Bullet. The work splits into two projects that run in parallel because they need different people and carry different risks: a <strong style={{ color: 'var(--color-text)' }}>DevOps / Infrastructure track</strong> that proves the on-prem deployment, and a <strong style={{ color: 'var(--color-text)' }}>Development track</strong> that builds the AI support flows on Notch's own platform. They meet at one place - a single-tenant environment that mirrors Bullet - and converge again at deployment.
      </P>

      <H2>Channel sequencing</H2>
      <P>We go live channel by channel, each choice deliberate:</P>

      <NumberedItem n="1" title="WhatsApp - first (MVP)">
        Bullet already operates this channel, it's the simplest technically (async text, no real-time voice NLU), and it's the <strong style={{ color: 'var(--color-accent)' }}>only channel with a built-in fallback</strong> - if AI fails, Glassix hands off to a human. We want failure modes discovered where they're recoverable.
      </NumberedItem>
      <NumberedItem n="2" title="Mobile App - second (Bullet's 2026 priority)">
        Highest customer value. WhatsApp is Phase 0 of the App: the core capabilities proven on WhatsApp are exactly what the App reuses. App has no graceful fallback, so nothing unproven lands there first.
      </NumberedItem>
      <NumberedItem n="3" title="Voice - third">
        Reuses the proven core, adds real-time/NLU complexity.
      </NumberedItem>
      <NumberedItem n="4" title="Website - fourth">
        Lowest marginal value once the above exist.
      </NumberedItem>

      <Card accent>
        <p>WhatsApp first is not a detour from the App deadline - it is the first, recoverable increment of the same core the App depends on.</p>
      </Card>

      <H2>Working assumptions</H2>

      <WarnCard title="Timeline interpretation">
        The brief states Q1 2026 for App go-live. From a July 1 kickoff that date has passed, so we read it as "one quarter from kickoff" → target end of Q3 2026 (September). If Q1 2026 is a hard commitment, the plan needs rescoping - flagged as the first open question for kickoff.
      </WarnCard>

      <Card title="Build where we add value, buy where we don't">
        <p>Notch builds only its core differentiator - AI agents, flows, orchestration, guardrails. Everything commodity (auth/OTP, LLM, website search like Firecrawl) uses existing market tools. Per tool, one open question: who brings the vendor - Notch or Bullet?</p>
      </Card>

      <Card title="Subscription ownership → Bullet owns">
        <p>For every third-party tool, Bullet holds the subscription. AI pricing is unsettled and consumption-based; Notch sells value, not infrastructure markup. Keeps pricing clean and insulated from third-party volatility.</p>
      </Card>

      <Table
        headers={['Assumption', 'Detail']}
        rows={[
          ['Deployment', 'Binary-only - Bullet never sees Notch source. IP protected.'],
          ['LLM', 'Self-hosted inside Bullet\u2019s cloud. Data never leaves their environment.'],
          ['3rd-party tools', 'Bullet likely already has some (auth, monitoring). Use theirs before introducing vendors.'],
        ]}
      />
    </div>
  )
}
