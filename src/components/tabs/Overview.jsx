import { Summary, SectionHeader, P, H2, Card, WarnCard, Table, NumberedItem } from '../Shared'

export default function Overview() {
  return (
    <div>
      <SectionHeader eyebrow="STRATEGY" title="Two projects, one kickoff" />
      <Summary>
        We run this as two projects, not one: a DevOps project that proves Notch can deploy and operate inside Bullet's environment, and a Product project that builds the AI flows on Notch's platform. They run in parallel with different owners and different risks, and meet only at the deployment pipeline. WhatsApp is the first channel - it has a human fallback, and shipping it is our first real production test of the deployment itself.
      </Summary>

      <H2>Why two projects, not one</H2>
      <P>
        These two bodies of work have nothing in common except the customer. One is an infrastructure problem - getting a binary to deploy, run, and be observable inside a regulated insurer's cloud. The other is a product problem - building support flows that resolve real customer issues. They need different skills, depend on different things, and fail for different reasons.
      </P>
      <P>
        Managed as a single project, the slower of the two sets the pace for both and developers sit idle waiting on infrastructure. Managed as two, each runs at its own speed against its own dependencies. They converge at exactly one point: a validated binary from the Product project, handed off through the pipeline the DevOps project built. Everything in this plan follows from that split.
      </P>

      <H2>Channel sequencing</H2>
      <P>We go live one channel at a time. The order is deliberate, and each position earns its place:</P>

      <NumberedItem n="1" title="WhatsApp - first (the MVP)">
        Bullet already runs this channel, it is the simplest technically (asynchronous text, no real-time speech), and it has a <strong style={{ color: 'var(--color-accent)' }}>human fallback through Glassix</strong> - if the AI is unsure, an agent picks up. That makes it the right place to find our failure modes, because here they are recoverable. Going live also gives us the first end-to-end proof of the deployment pipeline in production, before anything higher-stakes depends on it. Critically, "WhatsApp" is not all-or-nothing - the MVP can go live as a single slice and expand from there.
      </NumberedItem>
      <NumberedItem n="2" title="Mobile App - second (Bullet's 2026 priority)">
        The highest-value channel, and the reason the engagement exists. By the time we reach it, the core capabilities are already proven on WhatsApp - the App reuses them rather than discovering them. The App has no graceful fallback, so nothing unproven is allowed to land there first.
      </NumberedItem>
      <NumberedItem n="3" title="Voice - third">
        Reuses the proven core and adds the genuinely hard part: real-time speech understanding. Sequenced after text is stable so the new variable is isolated.
      </NumberedItem>
      <NumberedItem n="4" title="Website - fourth">
        The lowest marginal value once the channels above exist, and the cheapest to add because the core is fully proven by then.
      </NumberedItem>

      <Card accent>
        <p>The reframe to hold in every Bullet conversation: WhatsApp-first is not a detour from the App deadline. It is the first recoverable increment of the exact core the App depends on.</p>
      </Card>

      <H2>Build vs Buy</H2>
      <P>
        Notch builds only where it is the differentiator. Everything commodity is bought - and for each bought capability, the only open question is who supplies the vendor: Notch, bringing a tool we already operate, or Bullet, using one they already run.
      </P>
      <Table
        headers={['', 'Capability', 'Default owner']}
        rows={[
          ['BUILD', 'AI agents, resolution logic, flow orchestration, guardrails, routing', 'Notch - this is the product'],
          ['BUY', 'Authentication / OTP', 'Bullet - insurers already run one'],
          ['BUY', 'LLM model', 'Bullet - self-hosted in their cloud'],
          ['BUY', 'Website search / scraping (e.g. Firecrawl)', 'Decide at kickoff'],
          ['BUY', 'Monitoring / observability tooling', 'Bullet - likely already in place'],
        ]}
      />
      <Card title="Subscription ownership - our recommendation is Bullet holds it">
        <p>For every bought tool, Bullet should hold the subscription. AI pricing is unsettled and consumption-based, and it scales with the customer's own success. Notch sells outcomes, not a margin on infrastructure - and should not carry a cost it neither controls nor caps. We confirm this per tool at kickoff.</p>
      </Card>

      <H2>Working assumptions</H2>
      <P>Stated openly so Bullet can confirm or correct them at kickoff. Each is a decision waiting to be ratified, not a fact we are hiding.</P>

      <WarnCard title="Timeline - what we commit to vs what extends">
        Kickoff is <strong style={{ color: 'var(--color-text)' }}>1 November 2025</strong>. Fitting all five channels into five months is not realistic for a first on-premise deployment, so we are explicit about what we commit to: the <strong style={{ color: 'var(--color-text)' }}>MVP (WhatsApp first flow) ships in December</strong>, and the <strong style={{ color: 'var(--color-text)' }}>App - Bullet's priority - lands by the end-of-Q1-2026 deadline</strong>. Voice, Web, and every channel's Hyper Care and Optimization deliberately extend into Q2 2026. Protecting the must-haves beats forcing the whole scope into the window and missing the one that matters.
      </WarnCard>

      <Table
        headers={['Assumption', 'What it means in practice']}
        rows={[
          ['Binary-only deployment', 'Bullet receives compiled binaries and never sees Notch source. Our IP stays protected; their environment stays controlled.'],
          ['Self-hosted LLM', 'The model runs inside Bullet\'s cloud. The reason Bullet went on-premise is that customer data must not leave - so the model comes to the data.'],
          ['Reuse before introduce', 'Where Bullet already runs a capable tool (auth, monitoring), we integrate with theirs before proposing a new vendor.'],
        ]}
      />
    </div>
  )
}
