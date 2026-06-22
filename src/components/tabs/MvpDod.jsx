import { Summary, SectionHeader, P, H2, H3, Card, Table, WarnCard } from '../Shared'

export default function MvpDod() {
  return (
    <div>
      <SectionHeader eyebrow="SCOPE & VERSIONING" title="MVP: start small, go live fast" />
      <Summary>
        The MVP is the first WhatsApp release. It ships in two steps: V0 is a narrow pilot (one FAQ flow) that proves the pipeline on real traffic, then V1 (WhatsApp Full) brings all flows including OTP identity verification - because a customer reaching out without being identified is not a good experience. How much to switch on and when is Bullet's decision.
      </Summary>

      <H2>The core message: we don't have to replace it all</H2>
      <P>
        The instinct on a first deployment is to wait until the whole channel is rebuilt before going live. We do the opposite. WhatsApp has a human fallback, so the MVP can switch on a narrow slice, prove it on real traffic, and expand from there. Each version is a deliberate, bounded increment - not a big-bang cutover.
      </P>
      <P>
        We use four flows across all channels. In WhatsApp: V0 proves the pipeline with one flow, V1 brings the complete experience including customer identity. OTP (Flow C) is not deferred to a distant future version - it lands in V1 (WhatsApp Full), which is the second WhatsApp release.
      </P>

      <H2>The four flows, in scope for WhatsApp</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card title="Flow A - Routing & Handoff">
          <p>IVR replacement and Glassix fallback. The skeleton of every conversation - always on. Any AI failure or low-confidence turn hands off cleanly to a human agent with full context.</p>
        </Card>
        <Card title="Flow B - Knowledge & Answers">
          <p>FAQ on the agreed top intents. No personal data required. The first live test of the model's ability to resolve real customer questions without a human.</p>
        </Card>
        <Card title="Flow C - OTP & Identity">
          <p>Customer identification via OTP verification inside the WhatsApp flow, enabling personalised answers about their policy or claim. Required before the full experience is opened to all traffic - a customer reaching out without being identified is not a complete product.</p>
        </Card>
        <Card title="Flow D - Safety & Compliance Baseline">
          <p>Guardrail baseline. Insurance answers carry regulatory obligations; this gate is the minimum compliance requirement for any live deployment. Ships with every version.</p>
        </Card>
      </div>

      <H2>What ships in each version</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
        <Card title="V0 - Pipeline pilot (WhatsApp MVP)">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Flow A - Routing & Glassix fallback. The skeleton; always on.',
              'Flow B - ONE FAQ flow (single top intent). Narrow by design - the goal is pipeline proof, not coverage.',
              'Flow D - guardrail baseline. Minimum compliance gate.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 14, marginBottom: 8, lineHeight: 1.6 }}>
                <span style={{ color: 'var(--color-accent)', marginRight: 8, fontWeight: 700 }}>✓</span>{item}
              </li>
            ))}
          </ul>
        </Card>
        <Card title="V1 - WhatsApp Full">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Everything in V0, plus:',
              'Flow C - OTP + identity. Customer identified from first interaction.',
              'Flow B expanded - full FAQ coverage across all agreed top intents.',
              'Flow D hardened - full compliance posture.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 14, marginBottom: 8, lineHeight: 1.6 }}>
                <span style={{ color: 'var(--color-accent)', marginRight: 8, fontWeight: 700 }}>✓</span>{item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <WarnCard title="The go-live decision is Bullet's to make">
        V0 is the minimum: Flow A plus one content flow. We recommend switching it on as a limited pilot and measuring containment before widening. V1 (with OTP) is what opens the channel to all traffic - it requires Flow C to be stable and security-reviewed. Bullet decides the trigger and the ramp.
      </WarnCard>

      <H2>Definition of Done - by flow</H2>

      <H3>Flow A - Routing & Handoff</H3>
      <Table
        headers={['Criterion', 'How it is measured']}
        rows={[
          ['Any AI failure or low-confidence turn hands off cleanly', 'No dead ends across all tested scenarios'],
          ['Full conversation context passes to the human agent', 'Agent sees history - no "start over"'],
          ['Handoff rate is tracked as a live metric', 'BI dashboard in place - this is a go-live gate'],
        ]}
      />

      <H3>Flow B - Knowledge & Answers</H3>
      <Table
        headers={['Criterion', 'How it is measured']}
        rows={[
          ['Answers the agreed top-N intents on WhatsApp', 'Validated against Bullet\'s knowledge base'],
          ['Out-of-scope questions route to Glassix, never guessed', 'Zero hallucinated answers in the test set'],
          ['Passes the automated test suite', 'Testing Service green'],
          ['Fully observable in production', 'Logs and metrics flowing to Monitor Service and BI'],
        ]}
      />

      <H3>Flow C - OTP & Identity</H3>
      <Table
        headers={['Criterion', 'How it is measured']}
        rows={[
          ['User verifies identity via OTP inside the WhatsApp flow', 'End-to-end test passes'],
          ['Failed or expired OTP is handled gracefully', 'A retry path exists; no dead end'],
          ['No personal data is exposed before verification', 'Security review sign-off'],
          ['Every verification event is audit-logged', 'Logged and queryable'],
        ]}
      />

      <H3>Flow D - Safety & Compliance Baseline</H3>
      <Table
        headers={['Criterion', 'How it is measured']}
        rows={[
          ['Guardrail pass rate meets the agreed threshold', 'Automated compliance check on every response'],
          ['Zero personal or financial data exposed outside verified sessions', 'Security review sign-off'],
          ['All compliance events logged', 'Audit trail queryable by Bullet\'s compliance team'],
        ]}
      />

      <H2>Success metrics</H2>
      <P>One headline business metric, supported by technical and compliance guardrails. Containment is the number that ties directly to Notch's promise - resolve, not reply.</P>
      <Table
        headers={['Type', 'Metric', 'Target / detail']}
        rows={[
          ['Business', 'Containment rate', '% of conversations resolved end-to-end without a human. The headline. Based on Notch\'s internal deployment benchmarks (70-73%); the specific target for this engagement should be confirmed at kickoff, calibrated against Bullet\'s intent mix.'],
          ['Business', 'Handoff quality', '% of handoffs that arrive with context preserved.'],
          ['Technical', 'Answer accuracy', 'Validated correctness on agreed top intents. Can also be tracked as the re-contact rate: conversations where the customer had to follow up with the same query, indicating the answer did not resolve the issue.'],
          ['Technical', 'Availability / latency', 'Uptime and response time within agreed targets.'],
          ['Compliance', 'Guardrail pass rate', '% of responses passing compliance checks. Zero tolerance on personal or financial data outside verified sessions.'],
        ]}
      />

      <Card accent title="How we prove it works">
        <p>Staged validation, from safest to riskiest environment: internal dev environment on mocks → Staging on real APIs with test users → limited Production behind the Glassix safety net → containment measured on real traffic before widening coverage. The proof is a containment number on live traffic, not a demo.</p>
      </Card>

      <H2>Versioning - the increment grows with confidence</H2>
      <P>
        V0 is the narrowest live step. Each version after it is deliberately larger, because the model has proved more. By the time we reach later channels the core is trusted, so App and Voice take bigger increments from day one.
      </P>
      <Table
        headers={['Version', 'Scope', 'Why this size']}
        rows={[
          ['V0 (Pilot)', 'Flow A + Flow B (one intent) + Flow D baseline', 'Narrowest live increment: proves the pipeline and gets the first containment number on real traffic'],
          ['V1 (WhatsApp Full)', 'V0 + Flow C (OTP + identity) + Flow B expanded + Flow D hardened', 'First complete WhatsApp experience - customer identified, full FAQ coverage, hardened compliance'],
          ['V2 (WhatsApp Complete)', 'Full KB, prompt hardening, website scraping', 'Full KB: all intents indexed, not just curated top-N. Hardening: adversarial and prompt-injection testing. Website scraping: Bullet\'s public web content automatically indexed and kept fresh.'],
          ['Next channels', 'App, then Voice, then Web', 'Proven core reused - each channel takes larger initial increments than WhatsApp did'],
        ]}
      />
    </div>
  )
}
