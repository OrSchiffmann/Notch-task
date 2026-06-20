import { Summary, SectionHeader, P, H2, H3, Card, Table } from '../Shared'

export default function MvpDod() {
  return (
    <div>
      <SectionHeader eyebrow="SCOPE" title="Live fast, recoverable first" />
      <Summary>
        Phase 1 is FAQ + OTP + Glassix on WhatsApp — one flow, maximum caution, full safety net. Success = containment rate. Subsequent versions grow the batch size as confidence builds.
      </Summary>

      <H2>MVP = WhatsApp Phase 1</H2>
      <P>First channel: WhatsApp. The goal is speed-to-live with something real, not feature-completeness.</P>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card title="IN scope (Phase 1)">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'FAQ — top intents only (not full KB)',
              'OTP authentication — identity verification',
              'Glassix integration — human handoff (precondition, not feature)',
              'Minimal guardrails — baseline compliance gate',
            ].map((item, i) => (
              <li key={i} className="flex gap-2 mb-1.5" style={{ fontSize: 13 }}>
                <span style={{ color: 'var(--color-accent)' }}>✓</span> {item}
              </li>
            ))}
          </ul>
        </Card>
        <Card title="OUT of Phase 1">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Personal data answers → Phase 2',
              'Full KB / FAQ v2 → Phase 2',
              'Website scraping, prompt hardening → Phase 3',
              'Voice, App, Website channels → later',
            ].map((item, i) => (
              <li key={i} className="flex gap-2 mb-1.5" style={{ fontSize: 13 }}>
                <span style={{ color: 'var(--color-text-dim)' }}>—</span> {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <H2>Definition of Done — first features</H2>

      <H3>FAQ (top intents)</H3>
      <Table
        headers={['Criterion', 'Measure']}
        rows={[
          ['Answers agreed top-N intents on WhatsApp', 'Validated against Bullet KB'],
          ['Out-of-scope questions route to Glassix', 'No hallucinated answers'],
          ['Passes automated test suite', 'Testing Service green'],
          ['Observable in Monitor Service', 'Logs flowing'],
        ]}
      />

      <H3>OTP authentication</H3>
      <Table
        headers={['Criterion', 'Measure']}
        rows={[
          ['User verifies identity via OTP in WhatsApp flow', 'End-to-end test'],
          ['Failed/expired OTP handled gracefully', 'Retry path exists'],
          ['No personal data exposed pre-verification', 'Security review'],
          ['Audit trail of verification events', 'Logged'],
        ]}
      />

      <H3>Glassix handoff (fallback)</H3>
      <Table
        headers={['Criterion', 'Measure']}
        rows={[
          ['AI failure or low confidence hands off cleanly', 'No dead ends'],
          ['Conversation context passed to agent', 'No "start over"'],
          ['Handoff rate tracked', 'BI dashboard'],
        ]}
      />

      <H2>Success metrics</H2>
      <Table
        headers={['Type', 'Metric', 'Detail']}
        rows={[
          ['Business', 'Containment rate', '% resolved E2E without a human. Headline metric. Benchmark: 70–73%.'],
          ['Business', 'Handoff quality', '% handed off cleanly with context preserved.'],
          ['Technical', 'Answer accuracy', 'Validated correctness on top intents.'],
          ['Technical', 'Availability / latency', 'Uptime and response time within target.'],
          ['Safety', 'Guardrail pass rate', '% passing compliance checks. Zero tolerance on personal/financial info.'],
        ]}
      />

      <Card accent title="How we prove it works">
        <p>Staged validation: single-tenant (mocks) → staging (real APIs, test users) → limited production with Glassix safety net → containment measured on real traffic before expanding.</p>
      </Card>

      <H2>Versions after the MVP</H2>
      <P>
        The batch size increases each version — we start cautious and accelerate as confidence builds:
      </P>
      <Table
        headers={['Version', 'Scope', 'Batch size']}
        rows={[
          ['v1 (MVP)', 'Single flow (FAQ top intents + OTP + Glassix)', 'One flow, maximum caution'],
          ['v2', 'Small set of flows added', 'A few flows'],
          ['v3', 'Many flows', 'Larger batches'],
          ['v4', 'Remaining — WhatsApp complete', 'Everything'],
        ]}
      />
      <P>
        By the time we reach later channels (App, Voice), <strong style={{ color: 'var(--color-text)' }}>we no longer slice this finely</strong> — the core is proven, so those channels take larger increments.
      </P>
    </div>
  )
}
