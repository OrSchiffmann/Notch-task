import { Summary, SectionHeader, P, H2, Card, Table, NumberedItem } from '../Shared'

export default function Development() {
  return (
    <div>
      <SectionHeader eyebrow="TRACK 2 · DEVELOPMENT" title="Discover, mock, build, integrate" />
      <Summary>
        Discover what Bullet has, mock it, build against the mocks, then integrate for real. Mock-first means developers aren't blocked on Bullet access - only the final integration step requires their network.
      </Summary>

      <H2>Known vs unknown</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card title="Known (our platform)">
          <p>Notch core capabilities, 9 features as primitives, 4 flow patterns, deployment model, LLM integration approach, single-tenant test methodology.</p>
        </Card>
        <Card title="Unknown (Bullet-specific)">
          <p>Existing WhatsApp flows/intents, what the IVR handles, which internal APIs exist, their contracts and data shapes, reachability from our pipeline, policy/claim data structures, volume and priority of top intents.</p>
        </Card>
      </div>

      <H2>The four flows (vertical slices)</H2>

      <NumberedItem n="A" title="Inbound & Routing">
        Replace IVR, Glassix integration. Components: Platform, Backlog Run. The skeleton - nothing works without it.
      </NumberedItem>
      <NumberedItem n="B" title="Knowledge & Answers">
        FAQ, website scraping. Components: AI Components (LLM), Platform. Website data pulled via a tool like Firecrawl (subscription: Bullet's). First customer value.
      </NumberedItem>
      <NumberedItem n="C" title="Identity & Personal Data">
        OTP authentication, data integration. Components: Platform (auth), AI Components, Bullet DB connectors. The complex core - longer path, more components.
      </NumberedItem>
      <NumberedItem n="D" title="Safety & Compliance">
        Guardrails, prompt-injection safety. A gate every other flow passes through - not standalone. At least partially present from Phase 1.
      </NumberedItem>

      <P>
        <em>App Deeplinks and Voice routing are out of WhatsApp scope - mapped to their own channels deliberately.</em>
      </P>

      <H2>Development sequence</H2>

      <div className="space-y-3 mb-6">
        {[
          { n: '1', title: 'Receive Swagger per API', desc: 'Bullet dependency, pre-kickoff ask. Internal APIs and 3rd-party APIs.' },
          { n: '2', title: 'API comprehension', desc: 'Architecture studies APIs (AI-assisted parsing) + Q&A session with Bullet. Swagger gives syntax; Q&A gives semantics.' },
          { n: '3', title: 'Build mocks', desc: 'Accurate fakes from understood contracts. The mocks are a deliverable in themselves.' },
          { n: '4', title: 'Platform-side build', desc: 'On the single-tenant. No Bullet network needed - can start immediately.' },
          { n: '5', title: 'Real integration', desc: 'Connect to actual internal APIs inside Bullet\'s network. Requires dev-env access for our developers.' },
          { n: '6', title: 'Validation', desc: 'End-to-end on staging, then production.' },
        ].map(s => (
          <div key={s.n} className="flex gap-3 items-start p-3 rounded-lg" style={{ background: 'var(--color-surface)' }}>
            <span className="shrink-0 w-6 h-6 rounded flex items-center justify-center"
              style={{ background: 'var(--color-accent-soft)', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-accent)' }}>
              {s.n}
            </span>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{s.title}</p>
              <p style={{ fontSize: 13, color: 'var(--color-text-dim)' }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Card accent title="Why mock-first matters">
        <p>Everything buildable without Bullet is built against mocks - fast, independent. Only the final integration needs the expensive network access, and it arrives once the logic is already mature. Swagger quality determines mock quality: accurate Swagger = accurate mocks = fewer surprises at integration.</p>
      </Card>

      <H2>Three types of Bullet dependency (timed differently)</H2>
      <Table
        headers={['Category', 'Who needs it', 'When']}
        rows={[
          ['DevOps access', 'DevOps/Infra', 'Phase 0 - immediately'],
          ['Support access', 'Support team', 'Toward go-live'],
          ['Developer access', 'Developers', 'Stage 5 - after mock dev'],
        ]}
      />
    </div>
  )
}
