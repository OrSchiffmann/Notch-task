import { SectionHeader, Summary as Callout, H2 } from '../Shared'

const font = "'Calibri', 'Trebuchet MS', Arial, sans-serif"

function Link({ to, children }) {
  return (
    <a href={`#/${to}`} style={{ color: '#F06A22', fontWeight: 700, textDecoration: 'none', fontFamily: font, whiteSpace: 'nowrap' }}>
      {children} →
    </a>
  )
}

function Block({ title, links, children }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', borderBottom: '1px solid #E4E7EC', paddingBottom: 8, marginBottom: 14 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', fontFamily: font }}>{title}</h2>
        <div style={{ display: 'flex', gap: 14, fontSize: 13 }}>{links}</div>
      </div>
      {children}
    </div>
  )
}

function Row({ q, children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 16, marginBottom: 10, alignItems: 'baseline' }}>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: '#5B6472', fontFamily: font }}>{q}</div>
      <div style={{ fontSize: 14.5, color: '#374151', fontFamily: font, lineHeight: 1.6 }}>{children}</div>
    </div>
  )
}

function PBadge({ p }) {
  const map = {
    P0: { bg: '#FEF2F2', border: '#FECACA', color: '#B91C1C', label: 'P0 · Blocking' },
    P1: { bg: '#FFF7ED', border: '#FED7AA', color: '#C2410C', label: 'P1 · High' },
    P2: { bg: '#F3F4F6', border: '#E5E7EB', color: '#6B7280', label: 'P2 · Before phase' },
  }
  const c = map[p]
  return (
    <span style={{
      display: 'inline-block', background: c.bg, border: `1px solid ${c.border}`, color: c.color,
      borderRadius: 999, padding: '3px 12px', fontSize: 11.5, fontWeight: 700,
      letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: font,
    }}>{c.label}</span>
  )
}

function QGroup({ p, items }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ marginBottom: 8 }}><PBadge p={p} /></div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{ fontSize: 14.5, color: '#374151', fontFamily: font, lineHeight: 1.55, marginBottom: 5, paddingLeft: 16, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#C0C4CC' }}>•</span>{it}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function SummaryTab() {
  return (
    <div>
      <SectionHeader eyebrow="TL;DR" title="Everything, on one page" />
      <Callout>
        Every deliverable answered in brief, with a link to the full detail. Two parallel projects (DevOps + Product), WhatsApp first via a recoverable V0, App on a Q1 2027 target, and a deployment architecture built to be reused by the next regulated customer.
      </Callout>

      {/* ===== ROADMAP ===== */}
      <Block title="Project Roadmap" links={<><Link to="roadmap">Roadmap</Link><Link to="resources">Resources</Link></>}>
        <Row q="Phases (kickoff → prod)">Six per channel: DevOps connectivity → Discovery + mocks → Build → Real integration → Testing funnel → Go-live.</Row>
        <Row q="Timeline & milestones">12 months from a Jul 2026 kickoff. WhatsApp V0 (Q3 26) · WhatsApp Full (Q4 26) · App (Q1 27) · Voice (Q2 27) · Web (Q2 27).</Row>
        <Row q="Prioritisation logic">WhatsApp first - has a Glassix fallback and is the first live test of the pipeline. App second - Bullet's priority, reuses the proven core. Voice, then Web. Within WhatsApp: Flow A + B + D before C.</Row>
        <Row q="Environment rollout">Dev → Staging → Production, in sequence. Each inherits a proven config from the one before; Production is built from a recipe that already worked twice.</Row>
        <Row q="Notch resources">IM · DevOps/Infra Engineer · 2 Platform Developers · AI/Prompt Engineer · QA/Test Engineer.</Row>
        <Row q="Bullet resources">Implementation Engineer (critical) · DevOps/Cloud Engineer · API owners · Security/Compliance lead · Product/CS stakeholder. Services: 3 cloud environments, GPU for the LLM, artifact storage, security scanning, 3rd-party subscriptions.</Row>
      </Block>

      {/* ===== MVP / V0 ===== */}
      <Block title="MVP (V0) & Definition of Done" links={<Link to="mvp">V0 &amp; DOD</Link>}>
        <Row q="First channel">WhatsApp - the only first option with a built-in human fallback (Glassix).</Row>
        <Row q="IN scope (V0)">Flow A (routing + Glassix), Flow B (FAQ on top intents), Flow D (guardrail baseline).</Row>
        <Row q="OUT of V0">Flow C (OTP + personal data) → V1. Full KB, hardening, website scraping → V2. App / Voice / Web → own rollouts.</Row>
        <Row q="Success metrics">Business: containment rate (headline, 70-73% benchmark), handoff quality. Technical: answer accuracy, availability/latency. Safety: guardrail pass rate.</Row>
        <Row q="DOD (first features)">FAQ: answers validated top-N, out-of-scope → Glassix, tests green, observable. Glassix: clean handoff with context, rate tracked. OTP (V1): in-flow verify, graceful failure, no data pre-verify, audited.</Row>
        <Row q="How we prove it">Staged: internal mocks → Staging real APIs → limited Production behind Glassix → containment measured on real traffic before widening.</Row>
      </Block>

      {/* ===== KICKOFF ===== */}
      <Block title="Kickoff Meeting Plan" links={<><Link to="kickoff">Kickoff</Link><Link to="prereqs">Pre-Reqs</Link></>}>
        <Row q="Agenda">Strategy &amp; sequencing → timeline → deployment model → critical decisions → access &amp; discovery → first three weeks.</Row>
        <Row q="Critical decisions">Timeline (Q1 2027?) · build/buy boundary &amp; vendors · subscription ownership (recommend Bullet) · production access model · access-list sign-off.</Row>
        <Row q="Week 1-3">W1: submit access + discovery, stand up internal env, WS1 prep, schedule API Q&A. W2: Workshop 1, Flow A on mocks, first Swagger. W3: Workshop 2 prep, API Q&A, first mocks.</Row>
      </Block>

      <div style={{ marginBottom: 36, marginTop: -8 }}>
        <p style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 14, fontFamily: font }}>
          Key questions, by priority
        </p>
        <QGroup p="P0" items={[
          'Is Q1 2026 a hard external commitment, or is Q1 2027 the real App target?',
          'Confirm the LLM is self-hosted - does any customer data leave the environment?',
          'Are the internal APIs documented (Swagger) and reachable from our pipeline?',
          'Is there a named Bullet Implementation Engineer to own coordination?',
          'What security scanning toolchain runs on binaries before deployment?',
        ]} />
        <QGroup p="P1" items={[
          'Which third-party tools does Bullet already operate (auth/OTP, monitoring, search)?',
          'Per bought tool - who brings the vendor, and who holds the subscription?',
          'What are the top intents and traffic volumes (to scope the V0 FAQ)?',
          'Is GPU capacity already in place to self-host the LLM?',
          'What are the regulatory constraints on production access?',
        ]} />
        <QGroup p="P2" items={[
          'What do the policy and claim data structures look like (Flow C / V1)?',
          'Who commissions the pentest - Notch or Bullet? Existing security vendor?',
          'Is a PVT (friends & family) soft-launch feasible per channel?',
        ]} />
      </div>

      {/* ===== RISKS ===== */}
      <Block title="Risks & Dependencies" links={<Link to="risks">Risks &amp; Deps</Link>}>
        <p style={{ fontSize: 13.5, fontWeight: 700, color: '#5B6472', marginBottom: 10, fontFamily: font }}>Top 5 risks → mitigation</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px' }}>
          {[
            ['Resource contention serialises the two projects', 'Staff both in parallel; if constrained, protect the DevOps project + internal env first.'],
            ['Binary fails Bullet\'s security scan on first submission', 'Get the toolchain as a pre-req; pre-scan internally before every handoff.'],
            ['Production access refused on regulatory grounds', 'Request with controls (test user, time-boxed, audited); fallback to Staging or repro-as-a-service.'],
            ['Internal APIs undocumented or unreachable', 'Swagger + reachability as pre-reqs; mock-first so the build proceeds regardless.'],
            ['Containment rate below target at launch', 'Staged rollout behind Glassix; tune against Bullet KB; measure on real traffic before widening.'],
          ].map(([r, m], i) => (
            <li key={i} style={{ fontSize: 14.5, color: '#374151', fontFamily: font, lineHeight: 1.5, marginBottom: 8, paddingLeft: 18, position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#F06A22', fontWeight: 700 }}>{i + 1}</span>
              <strong style={{ color: '#111827' }}>{r}.</strong> {m}
            </li>
          ))}
        </ul>
        <Row q="Critical dependencies">DevOps pipeline access (W1) · Swagger, all internal APIs (W2) · network reachability (W3) · flow/intent inventory (W2) · named Impl. Engineer (kickoff) · security toolchain (W1). Each has a due date; a slip escalates it to a tracked risk.</Row>
        <Row q="Team coordination">Two internal weekly syncs (DevOps, Product) → IM consolidates → one external weekly sync with Bullet's Impl. Engineer. Shared dependency tracker with owners and dates; escalation path agreed at kickoff.</Row>
      </Block>
    </div>
  )
}
