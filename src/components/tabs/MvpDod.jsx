import { Summary, SectionHeader, P, H2, H3, Card, Table, WarnCard } from '../Shared'

export default function MvpDod() {
  return (
    <div>
      <SectionHeader eyebrow="SCOPE & VERSIONING" title="MVP: start small, go live fast" />
      <Summary>
        The MVP is the first WhatsApp release - the smallest slice that delivers real value with a full safety net. It ships as V0 (the initial WhatsApp flow that goes live): Flow A for routing, Flow B for knowledge, and a Flow D guardrail baseline. Identity and personal data (Flow C) deliberately wait for V1. How much to switch on, and when, is Bullet's decision.
      </Summary>

      <H2>The core message: we don't have to replace it all</H2>
      <P>
        The instinct on a first deployment is to wait until the whole channel is rebuilt before going live. We do the opposite. WhatsApp has a human fallback, so the MVP can switch on a single slice, prove it on real traffic, and expand from there. Each version is a deliberate, bounded increment - not a big-bang cutover.
      </P>
      <P>
        We use the same four flows defined in the Product Project tab. The MVP combines the flows that carry value at the lowest risk, and holds back the one that carries personal data until the model has earned trust in production.
      </P>

      <H2>What the MVP includes - and what it doesn't</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
        <Card title="In the MVP (V0)">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Flow A - Routing & Handoff. IVR replacement + Glassix fallback. The skeleton; always on.',
              'Flow B - Knowledge & Answers. FAQ on agreed top intents. No personal data, lowest risk.',
              'Flow D - guardrail baseline. Minimum compliance gate; insurance answers require it.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 14, marginBottom: 8, lineHeight: 1.6 }}>
                <span style={{ color: 'var(--color-accent)', marginRight: 8, fontWeight: 700 }}>✓</span>{item}
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Held for later versions">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Flow C - OTP + personal data answers → V1, once Flow B is stable in production.',
              'Full knowledge base and prompt-injection hardening → V2.',
              'Website scraping at scale → V2.',
              'App, Voice, Web channels → their own rollouts after WhatsApp.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 14, marginBottom: 8, lineHeight: 1.6 }}>
                <span style={{ color: '#9CA3AF', marginRight: 8, fontWeight: 700 }}>✕</span>{item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <WarnCard title="The go-live decision is Bullet's to make">
        The MVP is, at minimum, Flow A plus one content flow. Our recommendation is Flow A + Flow B with a Flow D baseline: lowest risk, fastest to validate, immediate value. Bullet decides the trigger to switch it on and how fast to ramp traffic behind it.
      </WarnCard>

      <H2>Definition of Done - the MVP flows</H2>

      <H3>Flow B - FAQ (Knowledge & Answers)</H3>
      <Table
        headers={['Criterion', 'How it is measured']}
        rows={[
          ['Answers the agreed top-N intents on WhatsApp', 'Validated against Bullet\'s knowledge base'],
          ['Out-of-scope questions route to Glassix, never guessed', 'Zero hallucinated answers in the test set'],
          ['Passes the automated test suite', 'Testing Service green'],
          ['Fully observable in production', 'Logs and metrics flowing to Monitor Service'],
        ]}
      />

      <H3>Flow A - Glassix handoff (Routing & Handoff)</H3>
      <Table
        headers={['Criterion', 'How it is measured']}
        rows={[
          ['Any AI failure or low-confidence turn hands off cleanly', 'No dead ends across all tested scenarios'],
          ['Full conversation context passes to the human agent', 'Agent sees history - no "start over"'],
          ['Handoff rate is tracked as a live metric', 'BI dashboard in place'],
        ]}
      />

      <H3>Flow C - OTP authentication (DOD for when V1 lands)</H3>
      <Table
        headers={['Criterion', 'How it is measured']}
        rows={[
          ['User verifies identity via OTP inside the WhatsApp flow', 'End-to-end test passes'],
          ['Failed or expired OTP is handled gracefully', 'A retry path exists; no dead end'],
          ['No personal data is exposed before verification', 'Security review sign-off'],
          ['Every verification event is audit-logged', 'Logged and queryable'],
        ]}
      />

      <H2>Success metrics</H2>
      <P>One headline business metric, supported by technical and safety guardrails. Containment is the number that ties directly to Notch's promise - resolve, not reply.</P>
      <Table
        headers={['Type', 'Metric', 'Target / detail']}
        rows={[
          ['Business', 'Containment rate', '% of conversations resolved end-to-end without a human. The headline. Notch benchmark: 70-73%.'],
          ['Business', 'Handoff quality', '% of handoffs that arrive with context preserved.'],
          ['Technical', 'Answer accuracy', 'Validated correctness on the agreed top intents.'],
          ['Technical', 'Availability / latency', 'Uptime and response time within agreed targets.'],
          ['Safety', 'Guardrail pass rate', '% of responses passing compliance checks. Zero tolerance on personal or financial data.'],
        ]}
      />

      <Card accent title="How we prove it works">
        <p>Staged validation, from safest to riskiest environment: internal dev environment on mocks → Staging on real APIs with test users → limited Production behind the Glassix safety net → containment measured on real traffic before we widen intent coverage. The proof is a containment number on live traffic, not a demo.</p>
      </Card>

      <H2>Versioning - the increment grows with confidence</H2>
      <P>
        The MVP ships as V0, the smallest live step. Each version after it is deliberately larger, because the model has proven more. By the time we reach later channels we no longer slice this finely - the core is trusted, so App and Voice take bigger increments.
      </P>
      <Table
        headers={['Version', 'Scope', 'Why this size']}
        rows={[
          ['V0 (MVP)', 'Flow A + Flow B + Flow D baseline', 'Smallest live increment, full safety net, real value'],
          ['V1', 'Add Flow C - OTP + personal data', 'Identity layer added once knowledge is stable'],
          ['V2', 'Full KB, hardening, website scraping - WhatsApp complete', 'Confidence high; broaden aggressively'],
          ['Next channels', 'App, then Voice, then Web', 'Proven core - each channel reuses it in larger steps'],
        ]}
      />
    </div>
  )
}
