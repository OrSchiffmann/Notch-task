import { Summary, SectionHeader, P, H2, H3, Card, Table, WarnCard } from '../Shared'

export default function MvpDod() {
  return (
    <div>
      <SectionHeader eyebrow="SCOPE & VERSIONING" title="V0: Start small, go live fast" />
      <Summary>
        WhatsApp doesn't have to go live all at once. V0 is the smallest slice that delivers real value and has a safety net - the customer decides how much to activate. The key message: we don't need to replace everything to go live.
      </Summary>

      <H2>First channel: WhatsApp</H2>
      <P>
        WhatsApp is the right first channel because it's the only one with a built-in fallback. If something goes wrong, Glassix hands off to a human agent - no dead ends, no customer impact. That's the safety net that makes it safe to start.
      </P>
      <P>
        Crucially, <strong style={{ color: 'var(--color-text)' }}>going live on WhatsApp doesn't mean going live with everything</strong>. Bullet decides how much to activate. V0 can be a single flow category - and that's a valid, valuable go-live.
      </P>

      <H2>Flow categories - Bullet decides what goes live first</H2>
      <P>
        The WhatsApp flows break into three natural categories. Each can go live independently. Bullet chooses the starting point based on their priorities and risk appetite.
      </P>

      <Card title="Category A - Knowledge & Answers (recommended V0 start)">
        <p style={{ marginBottom: 8 }}>FAQ on top intents from the Bullet knowledge base. No personal data, no authentication required. Lowest risk, fastest to validate, immediate value.</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {['FAQ - top intents only (not full KB)', 'Website scraping for public content', 'Guardrails - baseline compliance gate'].map((item, i) => (
            <li key={i} style={{ fontSize: 14, marginBottom: 4 }}>
              <span style={{ color: '#F06A22', marginRight: 8 }}>✓</span>{item}
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Category B - Identity & Personal Data">
        <p style={{ marginBottom: 8 }}>Requires OTP authentication. Once identity is verified, the AI can answer questions using the customer's personal policy and claim data. Adds meaningful complexity - goes live after Category A is stable.</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {['OTP authentication', 'Data integration (policy, claims, personal info)', 'Prompt injection safety'].map((item, i) => (
            <li key={i} style={{ fontSize: 14, marginBottom: 4 }}>
              <span style={{ color: '#F06A22', marginRight: 8 }}>✓</span>{item}
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Category C - Routing & Handoff (always present)">
        <p style={{ marginBottom: 8 }}>Not optional - this is the skeleton every other category depends on. IVR replacement, Glassix integration, and routing logic must be live before anything else runs.</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {['Replace IVR - AI-powered routing', 'Glassix integration - human handoff fallback', 'App deeplinks (WhatsApp-specific)'].map((item, i) => (
            <li key={i} style={{ fontSize: 14, marginBottom: 4 }}>
              <span style={{ color: '#F06A22', marginRight: 8 }}>✓</span>{item}
            </li>
          ))}
        </ul>
      </Card>

      <WarnCard title="Go-live decision: Bullet's call">
        V0 = Category C (routing) + at least one content category. The recommendation is to start with Category A only - lowest risk, fastest to validate. Category B can follow in V1 once Category A is stable in production.
      </WarnCard>

      <H2>Definition of Done - V0 features</H2>

      <H3>FAQ (Category A)</H3>
      <Table
        headers={['Criterion', 'Measure']}
        rows={[
          ['Answers agreed top-N intents on WhatsApp', 'Validated against Bullet KB'],
          ['Out-of-scope questions route to Glassix', 'No hallucinated answers'],
          ['Passes automated test suite', 'Testing Service green'],
          ['Observable in Monitor Service', 'Logs flowing'],
        ]}
      />

      <H3>OTP authentication (Category B)</H3>
      <Table
        headers={['Criterion', 'Measure']}
        rows={[
          ['User verifies identity via OTP in WhatsApp flow', 'End-to-end test passes'],
          ['Failed/expired OTP handled gracefully', 'Retry path exists, no dead end'],
          ['No personal data exposed pre-verification', 'Security review sign-off'],
          ['Audit trail of verification events', 'Logged and queryable'],
        ]}
      />

      <H3>Glassix handoff (Category C - always)</H3>
      <Table
        headers={['Criterion', 'Measure']}
        rows={[
          ['AI failure or low confidence hands off cleanly', 'No dead ends in any tested scenario'],
          ['Conversation context passed to human agent', 'Agent sees full history, no "start over"'],
          ['Handoff rate tracked as a metric', 'BI dashboard live'],
        ]}
      />

      <H2>Success metrics</H2>
      <Table
        headers={['Type', 'Metric', 'Detail']}
        rows={[
          ['Business', 'Containment rate', '% resolved E2E without a human. Headline metric. Benchmark: 70-73%.'],
          ['Business', 'Handoff quality', '% handed off cleanly with context preserved.'],
          ['Technical', 'Answer accuracy', 'Validated correctness on agreed top intents.'],
          ['Technical', 'Availability / latency', 'Uptime and response time within agreed targets.'],
          ['Safety', 'Guardrail pass rate', '% passing compliance checks. Zero tolerance on personal/financial data.'],
        ]}
      />

      <H2>Versioning after V0</H2>
      <P>Batch size grows with confidence. V0 is one category; subsequent versions expand scope as the model proves out.</P>
      <Table
        headers={['Version', 'Scope', 'Logic']}
        rows={[
          ['V0', 'Category C + Category A (Bullet decision)', 'Smallest live increment, full safety net'],
          ['V1', 'Add Category B (OTP + personal data)', 'Identity layer added once A is stable'],
          ['V2', 'Full WhatsApp - all flows, full KB, hardening', 'WhatsApp complete'],
          ['V3+', 'Next channel (App or Voice)', 'Core proven - larger increments from here'],
        ]}
      />
      <P>
        By the time we reach App or Voice, <strong style={{ color: 'var(--color-text)' }}>we no longer need to slice this finely</strong>. The core is proven - those channels take larger increments rather than one-category-at-a-time.
      </P>
    </div>
  )
}
