import { Summary, SectionHeader, P, H2, Card, WarnCard, Table, NumberedItem } from '../Shared'

export default function Kickoff() {
  return (
    <div>
      <SectionHeader eyebrow="THE MEETING" title="Kickoff agenda and the first three weeks" />
      <Summary>
        The kickoff is a decision-forcing meeting, not a status update. We arrive with the pre-requisites already requested, align on timeline and the two-project structure, lock the decisions that gate the build, and leave with every open question converted into an owned action with a date.
      </Summary>

      <P>
        The pre-requisites tab lists what must reach us before this meeting. The kickoff itself is where we turn that material into commitments: a confirmed timeline, a signed-off access list, named owners, and a build that can start on day one rather than week three.
      </P>

      <H2>Agenda</H2>
      <div className="space-y-2 mb-6">
        {[
          'Strategy and sequencing - the two-project structure, and WhatsApp-first as the recoverable first increment of the App.',
          'Timeline alignment - confirm the Q1 2027 App target, or surface a hard commitment we need to design around.',
          'The deployment model - binary-only, pull-based, the two workshops, the environment rollout.',
          'Critical decisions - work through the list below and record an owner for each.',
          'Access and discovery - walk the pre-requisites list, sign off what is approved, escalate what is not.',
          'First three weeks - confirm action items, owners, and dates before anyone leaves the room.',
        ].map((item, i) => (
          <div key={i} className="flex gap-3 items-start p-3 rounded-lg" style={{ background: 'var(--color-surface)' }}>
            <span style={{ fontSize: 13, color: 'var(--color-accent)', fontWeight: 700, width: 22, textAlign: 'right', flexShrink: 0 }}>
              {i + 1}.
            </span>
            <span style={{ fontSize: 14, color: 'var(--color-text-dim)', lineHeight: 1.6 }}>{item}</span>
          </div>
        ))}
      </div>

      <H2>Key questions to resolve at the table</H2>
      <P>The pre-requisites cover the documents we need. These are the judgement questions that need Bullet's people in the room.</P>

      <NumberedItem n="Q1" title="Third-party integrations - who owns each one?">
        For every bought capability (auth/OTP, website search, the LLM), does Bullet already operate it, or does Notch bring the vendor? Each integration Bullet owns is scope and risk removed from Notch - so this question is also a scoping lever.
      </NumberedItem>
      <NumberedItem n="Q2" title="Are the internal APIs reachable from our pipeline?">
        If they are not reachable externally, mock-first is mandatory and developer access to Bullet's Dev environment becomes the gating dependency for real integration.
      </NumberedItem>
      <NumberedItem n="Q3" title="What do the policy and claim data structures look like?">
        The shape of this data drives the Flow C connector design. We need enough to design against, even though Flow C lands in V1.
      </NumberedItem>
      <NumberedItem n="Q4" title="What are the constraints on production access?">
        Especially the regulatory ones. This determines whether our test-user, time-boxed, audited model is acceptable or whether we plan around a refusal from day one.
      </NumberedItem>
      <NumberedItem n="Q5" title="Is the GPU capacity for the self-hosted LLM already in place?">
        If the hardware needs procurement, that lead time lands on the critical path and we need to know now, not in month two.
      </NumberedItem>

      <H2>Critical decisions to lock</H2>
      <div className="space-y-3 mb-6">
        {[
          { title: 'Timeline', desc: 'Confirm App go-live at Q1 2027 with WhatsApp in Q3 2026, or surface the hard commitment that forces a rescope.' },
          { title: 'Build / buy boundary and vendors', desc: 'Ratify what Notch builds versus buys, and per bought tool, who supplies the vendor - Notch or Bullet.' },
          { title: 'Subscription ownership', desc: 'Confirm Bullet holds third-party subscriptions, given volatile consumption-based AI pricing Notch should not hedge.' },
          { title: 'Production access model', desc: 'Agree whether time-boxed, audited, test-user access is acceptable - and the fallback if it is not.' },
          { title: 'Access list sign-off', desc: 'Which pre-requisite asks are approved, which need escalation, and who owns each escalation.' },
        ].map((d, i) => (
          <WarnCard key={i} title={d.title}>
            <p>{d.desc}</p>
          </WarnCard>
        ))}
      </div>

      <H2>First three weeks</H2>
      <Table
        headers={['Week', 'Notch', 'Bullet']}
        rows={[
          [
            'Week 1',
            'Confirm access list and discovery asks are in flight. Stand up the internal dev environment. Begin Workshop 1 prep. Schedule the API comprehension Q&A.',
            'Begin provisioning access. Assemble the flow and intent inventory. Identify which third-party tools they already run.',
          ],
          [
            'Week 2',
            'Run Workshop 1 (Hello World). Start Flow A on the internal dev environment. Receive the first Swagger specs.',
            'Provide Swagger for the priority APIs. Confirm the security scanning toolchain.',
          ],
          [
            'Week 3',
            'Prep Workshop 2. Run the API comprehension session. Build the first mocks. Continue Flow A and B against mocks.',
            'Join the Q&A with their API owners. Confirm per-API reachability from our pipeline.',
          ],
        ]}
      />

      <Card accent title="How we coordinate from here">
        <p>One weekly sync between the Notch IM and Bullet's Implementation Engineer, backed by a shared tracker for access and discovery items - every line with an owner and a due date. Asynchronous updates between syncs, and an escalation path for blockers agreed at this kickoff, not improvised later. The operating rhythm in full is in the Process tab.</p>
      </Card>
    </div>
  )
}
