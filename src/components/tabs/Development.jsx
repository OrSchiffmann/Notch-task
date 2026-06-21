import { Summary, SectionHeader, P, H2, Card, Table, NumberedItem } from '../Shared'

export default function Development() {
  return (
    <div>
      <SectionHeader eyebrow="PRODUCT PROJECT" title="Discover, mock, build, integrate" />
      <Summary>
        Almost everything we don't know is Bullet-specific. So we discover what Bullet has, mock it from their Swagger, build the full flow against the mocks, and integrate for real only at the end. Mock-first means developers are never blocked waiting on Bullet access - only the final integration step needs their network.
      </Summary>

      <H2>Known versus unknown</H2>
      <P>
        The build is mostly an exercise in resolving unknowns, and the unknowns sit almost entirely on Bullet's side. Naming them precisely is what lets us sequence the work.
      </P>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card title="Known - our platform">
          <p>Notch's core capabilities, the nine required features as reusable primitives, our flow patterns, the deployment model, our LLM integration approach, and the mock-first method itself. None of this waits on Bullet.</p>
        </Card>
        <Card title="Unknown - Bullet-specific">
          <p>The existing WhatsApp flows and intents, what the current IVR handles, which internal APIs exist and what their contracts look like, whether they're reachable from our pipeline, the policy and claim data structures, and the real traffic mix. All of this is a dependency.</p>
        </Card>
      </div>

      <H2>The four flows</H2>
      <P>
        We cut the build into four vertical flows - each a full end-to-end slice rather than a horizontal layer - so we can take one live without waiting for the rest. These four labels are used consistently across the plan, including in MVP scoping.
      </P>

      <NumberedItem n="A" title="Routing & Handoff">
        Replace IVR, Glassix integration. The skeleton every other flow runs on - inbound routing and the human fallback. Nothing ships without it, so it is present in every version.
      </NumberedItem>
      <NumberedItem n="B" title="Knowledge & Answers">
        FAQ and website scraping. The first real customer value, and the lowest-risk content to serve because it touches no personal data. Website content is pulled by a bought tool (e.g. Firecrawl) and fed to the LLM - not something Notch builds.
      </NumberedItem>
      <NumberedItem n="C" title="Identity & Personal Data">
        OTP authentication and data integration. The complex core: once identity is verified, the agent answers using the customer's own policy and claim data. The longest path and the most components - it follows once B is stable.
      </NumberedItem>
      <NumberedItem n="D" title="Safety & Compliance">
        Guardrails and prompt-injection defence. Not a standalone flow but a gate every other flow passes through. A baseline is present from the very first version - you cannot serve insurance answers without it.
      </NumberedItem>

      <P>
        <em>App deeplinks and Voice routing are intentionally out of WhatsApp scope - they belong to their own channels. Mapping each feature to the right channel deliberately is part of the design, not an oversight.</em>
      </P>

      <H2>Build sequence</H2>
      <P>The same sequence runs for each channel. The expensive, access-dependent step is deliberately last.</P>

      <div className="space-y-3 mb-6">
        {[
          { n: '1', title: 'Receive Swagger per API', desc: 'A pre-kickoff dependency on Bullet, for internal and third-party APIs alike. Swagger quality sets the ceiling on mock quality.' },
          { n: '2', title: 'API comprehension', desc: 'We study the specs (AI-assisted) and run a Q&A with Bullet\'s engineers. Swagger gives us syntax; the Q&A gives us semantics - edge cases, business rules, what an empty field actually means.' },
          { n: '3', title: 'Build mocks', desc: 'Accurate stand-ins generated from the understood contracts. The mocks are a deliverable in their own right - they unblock the entire build.' },
          { n: '4', title: 'Build on the platform', desc: 'Flows built on Notch\'s platform against the internal dev environment. No Bullet network required, so this starts immediately and runs the longest.' },
          { n: '5', title: 'Real integration', desc: 'Swap mocks for Bullet\'s actual internal APIs, inside their Dev environment. This is the one step that needs developer access - and by now the logic is already mature.' },
          { n: '6', title: 'Validation', desc: 'End-to-end through the testing funnel: Stage, then Bullet UAT, then production validation. Covered in the Testing Strategy tab.' },
        ].map(s => (
          <div key={s.n} className="flex gap-3 items-start p-3 rounded-lg" style={{ background: 'var(--color-surface)' }}>
            <span className="shrink-0 w-7 h-7 rounded flex items-center justify-center"
              style={{ background: 'var(--color-accent-soft)', fontSize: 13, color: 'var(--color-accent)', fontWeight: 700 }}>
              {s.n}
            </span>
            <div>
              <p style={{ fontSize: 15, fontWeight: 700, marginBottom: 2, color: 'var(--color-text)' }}>{s.title}</p>
              <p style={{ fontSize: 14, color: 'var(--color-text-dim)', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Card accent title="Why mock-first is the whole game">
        <p>Everything buildable without Bullet is built against mocks - fast, parallel, and independent of access delays. Only the final integration needs the expensive network access, and it arrives after the logic is already proven. The discipline turns Bullet's access timeline from a blocker on the whole build into a constraint on its last mile.</p>
      </Card>

      <H2>Supporting components, running across every flow</H2>
      <Table
        headers={['Component', 'Role across the build']}
        rows={[
          ['Testing Service', 'Automated test suites per flow, run continuously from the MVP onward.'],
          ['Monitor Service', 'Observability - especially critical under binary deployment, where we cannot read the running code.'],
          ['BI Service', 'Analytics feeding the success metrics: containment, handoff quality, accuracy.'],
        ]}
      />
    </div>
  )
}
