import { Summary, SectionHeader, P, H2, H3, Card, Table, WarnCard } from '../Shared'

export default function MvpDod() {
  return (
    <div>
      <SectionHeader eyebrow="SCOPE & VERSIONING" title="MVP: start small, go live fast" />
      <Summary>
        The MVP is the first WhatsApp release. All four flows (A, B, C, D) are live from day one - including OTP identity verification. The only thing that changes between V0 and V1 is the breadth of Flow B: V0 covers one intent to prove the pipeline, V1 expands to all agreed top intents. How much to switch on and when is Bullet's decision.
      </Summary>

      <H2>The core message: we don't have to replace it all</H2>
      <P>
        The instinct on a first deployment is to wait until the whole channel is rebuilt before going live. We do the opposite. WhatsApp has a human fallback, so the MVP can go live with the full product stack on a narrow slice of intents, prove it on real traffic, and expand coverage from there. The versioning is about knowledge breadth, not about which capabilities exist.
      </P>
      <P>
        All four flows are wired from V0. The customer is identified (Flow C), the safety net is active (Flow A), compliance is enforced (Flow D), and one FAQ intent is live (Flow B). V1 adds the remaining intents to Flow B - and that is the only change.
      </P>

      <H2>The four flows - all present from V0</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card title="Flow A - Routing & Handoff">
          <p>IVR replacement and Glassix fallback. The skeleton of every conversation - always on from day one. Any AI failure or low-confidence turn hands off cleanly to a human agent with full conversation context.</p>
        </Card>
        <Card title="Flow B - Knowledge & Answers">
          <p>FAQ on the agreed top intents. In V0, only one intent is live - enough to prove the pipeline and measure containment on real traffic. In V1 (WhatsApp Full), all remaining top intents are added. This is the only thing that changes between V0 and V1.</p>
        </Card>
        <Card title="Flow C - OTP & Identity">
          <p>Customer identification via OTP verification inside the WhatsApp flow, enabling personalised answers about their policy or claim. Present from V0 - a customer reaching out without being identified is not a viable product experience.</p>
        </Card>
        <Card title="Flow D - Safety & Compliance Baseline">
          <p>Guardrails that prevent the AI from providing incorrect, harmful, or non-compliant responses. For insurance: blocking answers that could constitute unauthorised financial advice, ensuring PII is only accessible in verified sessions, and preventing the AI from making coverage commitments. The minimum compliance gate; required from V0.</p>
        </Card>
      </div>

      <H2>What changes between versions</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
        <Card title="V0 - Pipeline pilot (WhatsApp MVP)">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Flow A - Routing & Glassix fallback. The skeleton; always on.',
              'Flow B - ONE top intent only. Proves the pipeline, gets the first containment number.',
              'Flow C - OTP + identity. Customer identified from first interaction.',
              'Flow D - Safety & Compliance baseline. Required from day one.',
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
              'Everything in V0 - unchanged.',
              'Flow B expanded - all remaining top intents added. This is the only change.',
              'V1 is not a new product - it is V0 with broader knowledge coverage.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 14, marginBottom: 8, lineHeight: 1.6 }}>
                <span style={{ color: 'var(--color-accent)', marginRight: 8, fontWeight: 700 }}>{i === 0 ? '=' : '+'}</span>{item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <WarnCard title="The go-live decision is Bullet's to make">
        V0 goes live with all four flows - but Flow B covers only one intent, intentionally. This keeps the scope narrow for the pilot, proves the full product stack on real traffic, then expands coverage in V1 without any architectural change. Bullet decides the trigger to go live and when to widen.
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
      <P>Flow D is the guardrail layer applied to every response. It blocks answers that could constitute unauthorised financial advice, prevents PII from being exposed outside verified OTP sessions, and ensures the AI cannot make coverage commitments on Bullet's behalf. It runs silently on every turn - not a separate user-facing flow, but a gate that every other flow passes through.</P>
      <Table
        headers={['Criterion', 'How it is measured']}
        rows={[
          ['Guardrail pass rate meets the agreed threshold', 'Automated compliance check on every response'],
          ['No unauthorised financial advice, coverage commitments, or PII exposure', 'Security review sign-off'],
          ['All compliance events logged', 'Audit trail queryable by Bullet\'s compliance team'],
          ['Guardrail behaviour documented and agreed with Bullet\'s compliance lead', 'Sign-off before go-live'],
        ]}
      />

      <H2>Success metrics</H2>
      <P>One headline business metric, supported by technical and compliance guardrails. Containment is the number that ties directly to Notch's promise - resolve, not reply.</P>
      <Table
        headers={['Type', 'Metric', 'Target / detail']}
        rows={[
          ['Business', 'Containment rate', '% of conversations resolved end-to-end without a human. The headline. Target: 90%. To be confirmed at kickoff and calibrated against Bullet\'s intent mix.'],
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
        headers={['Version', 'Scope', 'What changes']}
        rows={[
          ['V0 (Pilot)', 'Flow A + Flow B (1 intent) + Flow C (OTP) + Flow D', 'All four flows live from day one. Flow B covers one intent - narrow by design to prove the pipeline first.'],
          ['V1 (WhatsApp Full)', 'V0 + Flow B (remaining intents)', 'Only change: Flow B expands to all agreed top intents. Architecture, identity, and compliance are unchanged.'],
          ['V2 (WhatsApp Complete)', 'V1 + Full KB + prompt hardening + website scraping', 'Full KB: all intents indexed, not just curated top-N. Hardening: adversarial and prompt-injection testing. Website scraping: Bullet\'s public web content automatically indexed and kept fresh.'],
          ['Next channels', 'App, then Voice, then Web', 'Proven core reused - each channel takes larger initial increments because the foundation is already trusted.'],
        ]}
      />
    </div>
  )
}
