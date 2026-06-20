import { Summary, SectionHeader, P, H2, Card, WarnCard, Table, NumberedItem } from '../Shared'

export default function Kickoff() {
  return (
    <div>
      <SectionHeader eyebrow="WEEK ONE" title="The kickoff meeting and first three weeks" />
      <Summary>
        Align on timeline, lock the build/buy split and subscription ownership, submit access requests, and leave with the discovery artifacts requested. The meeting goal is converting open questions into owned action items.
      </Summary>

      <H2>Meeting agenda</H2>
      <div className="space-y-2 mb-6">
        {[
          'Strategy & sequencing - WhatsApp-first as Phase 0 of the App; the timeline interpretation.',
          'Dual-track structure - DevOps ∥ Development, single-tenant bridge.',
          'On-prem foundation - binary-only, pull-based deployment, the two workshops.',
          'Critical decisions (below).',
          'Access matrix & discovery asks - walk through, assign owners.',
          'Week 1–3 action items & owners.',
        ].map((item, i) => (
          <div key={i} className="flex gap-3 items-start p-3 rounded-lg" style={{ background: 'var(--color-surface)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-accent)', width: 20, textAlign: 'right', shrink: 0 }}>
              {i + 1}.
            </span>
            <span style={{ fontSize: 13, color: 'var(--color-text-dim)' }}>{item}</span>
          </div>
        ))}
      </div>

      <H2>Pre-kickoff information from Bullet</H2>
      <P>Required before the meeting to make it productive, not exploratory:</P>
      <Table
        headers={['What we need', 'Why']}
        rows={[
          ['Existing flows/intents per channel (WhatsApp first)', 'Defines the actual scope - "FAQ" and "Replace IVR" are empty words without this'],
          ['Current state description of each flow', 'Understand what we\'re replacing, not guessing'],
          ['API state - are they documented? Swagger available?', 'Determines mock-first timeline'],
          ['3rd-party tools Bullet already has', 'Avoid introducing vendors for what they already run (auth, monitoring, etc.)'],
          ['Top intents / traffic volumes', 'Scope the FAQ MVP - which N intents to cover first'],
          ['Security scanning toolchain', 'We need to install the same tools on our single-tenant'],
        ]}
      />

      <H2>Key questions for Bullet at kickoff</H2>

      <NumberedItem n="?" title="3rd-party integrations - who owns what?">
        For each integration we need to buy (auth/OTP, website search, LLM): does Bullet already have it, or do we bring the vendor? Swagger needed for 3rd-party APIs too.
      </NumberedItem>
      <NumberedItem n="?" title="Are internal APIs reachable from our pipeline?">
        If not reachable externally, the mock-first pattern applies and dev-env access is needed for Stage 5.
      </NumberedItem>
      <NumberedItem n="?" title="Policy/claim data structures">
        What the data looks like - critical for Data Integration (Flow C).
      </NumberedItem>
      <NumberedItem n="?" title="Security/compliance constraints on access">
        Especially production access - what controls are required?
      </NumberedItem>
      <NumberedItem n="?" title="LLM infra readiness">
        Does Bullet have the infra (GPU) to self-host the LLM Model, or does it need provisioning?
      </NumberedItem>

      <H2>Critical decisions needed at kickoff</H2>

      <div className="space-y-3 mb-6">
        {[
          { title: 'Timeline', desc: 'Is Q1 2026 a hard commitment, or do we plan to end-of-Q3 2026?' },
          { title: 'Build/buy boundary & vendors', desc: 'Confirm the split. Per bought tool, who brings the vendor - notch or Bullet?' },
          { title: 'Subscription ownership (all tools)', desc: 'Recommendation: Bullet owns. AI pricing is volatile and shouldn\'t be hedged by notch.' },
          { title: 'Production access model', desc: 'Is time-boxed, audited, test-user access acceptable?' },
          { title: 'Access matrix sign-off', desc: 'Which asks are approved, which need escalation.' },
        ].map((d, i) => (
          <WarnCard key={i} title={d.title}>
            <p>{d.desc}</p>
          </WarnCard>
        ))}
      </div>

      <H2>Week 1–3 action items</H2>
      <Table
        headers={['Week', 'notch', 'Bullet']}
        rows={[
          [
            'Week 1',
            'Submit access matrix + discovery asks. Start Track 3 (single-tenant). Start WS1 prep. Schedule API Q&A.',
            'Begin provisioning access. Gather flow inventory. Identify existing 3rd-party tools.',
          ],
          [
            'Week 2',
            'Workshop 1 (hello world). Begin Flow A (routing) on single-tenant. Receive first Swagger specs.',
            'Provide Swagger for priority APIs. Confirm security toolchain.',
          ],
          [
            'Week 3',
            'Workshop 2 prep. API comprehension session. Build first mocks. Continue Flow A/B.',
            'Q&A session with architecture team. Confirm API reachability.',
          ],
        ]}
      />

      <Card accent title="Team coordination approach">
        <p>Weekly sync between notch IM and Bullet counterpart. Shared tracker for access requests and discovery artifacts with clear owners and due dates. Async updates via shared channel; escalation path for blockers defined at kickoff.</p>
      </Card>
    </div>
  )
}
