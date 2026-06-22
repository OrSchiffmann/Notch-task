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
        Every deliverable answered in brief, with a link to the full detail. Two parallel projects (DevOps + Product), WhatsApp in three steps inside Q1 2026 (V0 pilot → V1 full → V2 complete), the App live by the end-of-Q1-2026 deadline, and a deployment architecture built to be reused by the next regulated customer.
      </Callout>

      {/* ===== SIGNS OF SUCCESS ===== */}
      <div style={{ background: '#F0FDF7', border: '1px solid #BBF7D0', borderRadius: 10, padding: '20px 24px', marginBottom: 36 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.12em', color: '#047857', marginBottom: 12, fontWeight: 700, textTransform: 'uppercase', fontFamily: font }}>
          Signs of success
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px 24px' }}>
          {[
            'WhatsApp MVP live and safe - containment at or above 70–73% on covered intents.',
            'App live by end of Q1 2026 - the priority deadline hit.',
            'Glassix safety net holds - every failure recovers to a human, zero dead ends.',
            'Zero compliance breaches on personal or financial data.',
            'On-prem deployment proven (binary-only, pull-based) and reusable for the next regulated customer.',
            'Every version shipped on its named cadence - no surprise drops.',
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 9, fontSize: 14, color: '#374151', fontFamily: font, lineHeight: 1.5 }}>
              <span style={{ color: '#059669', fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ROADMAP ===== */}
      <Block title="Project Roadmap" links={<><Link to="roadmap">Roadmap</Link><Link to="resources">Resources</Link></>}>
        <Row q="Phases (per channel)">Seven: DevOps connectivity → Discovery + mocks → Build → Testing funnel → Go-live → Hyper Care → Optimization.</Row>
        <Row q="Timeline & milestones">1 Nov 2025 kickoff. Committed by end Q1 2026: WhatsApp V0 (Dec) · WhatsApp V1 (Jan) · WhatsApp V2 (Feb) · App (Mar). Sequenced into Q2 2026: Voice (Apr) · Web (May). Hyper Care starts immediately after each go-live. Optimization for WhatsApp starts only after V2 Hyper Care is complete.</Row>
        <Row q="Prioritisation logic">WhatsApp first - has a Glassix fallback and is the first live test of the pipeline. App second - Bullet's priority, reuses the proven core. Voice, then Web. Within WhatsApp: all four flows present from V0; versioning is about knowledge breadth (Flow B), not which capabilities are live.</Row>
        <Row q="Environment rollout">Dev → Staging → Production, in sequence. Each inherits a proven config from the one before; Production is built from a recipe that already worked twice.</Row>
        <Row q="Notch resources">PM (delivery lead) · IM (business/advisory) · Product · DevOps/Infra Engineer · 2 Platform Developers · AI/Prompt Engineer · QA/Test Engineer.</Row>
        <Row q="Bullet resources">Owner (critical - single coordination point) · DevOps/Cloud Engineer · API owners · Security/Compliance lead · QA. Services: 3 cloud environments, GPU for the LLM, artifact storage, security scanning, BI + observability systems, 3rd-party subscriptions.</Row>
      </Block>

      {/* ===== MVP ===== */}
      <Block title="MVP & Definition of Done" links={<Link to="mvp">MVP &amp; DOD</Link>}>
        <Row q="First channel">WhatsApp - a channel with a built-in human fallback (Glassix). Ships in three steps: V0 pilot (all four flows live, one FAQ intent), V1 full (Flow B expanded to all intents - the only change), V2 complete (full KB + hardening + scraping).</Row>
        <Row q="V0 (pilot)">All four flows live from day one: Flow A (routing + Glassix) + Flow B (1 intent only) + Flow C (OTP identity) + Flow D (compliance baseline). All capabilities present; knowledge coverage intentionally narrow.</Row>
        <Row q="V1 (WhatsApp Full)">V0 unchanged + Flow B expanded to all remaining top intents. This is the only difference between V0 and V1.</Row>
        <Row q="V2">Full KB (all intents, not just top-N), prompt hardening, website scraping. WhatsApp complete.</Row>
        <Row q="Success metrics">Business: containment rate (headline; target 70–73% (Bullet's figure), calibrate at kickoff), handoff quality. Technical: answer accuracy / re-contact rate, availability/latency. Compliance: guardrail pass rate.</Row>
        <Row q="DOD highlights">Flow A: clean handoff with context, BI dashboard live. Flow B: top intents validated, zero hallucinated answers, tests green. Flow C: in-flow OTP verify, graceful failure, no data pre-verify, audited. Flow D: guardrail pass rate meets threshold.</Row>
        <Row q="How we prove it">Staged: internal mocks → Staging real APIs → limited Production behind Glassix → containment measured on real traffic before widening.</Row>
      </Block>

      {/* ===== KICKOFF ===== */}
      <Block title="Kickoff Meeting Plan" links={<><Link to="kickoff">Kickoff</Link><Link to="prereqs">Pre-Reqs</Link></>}>
        <Row q="Agenda">Strategy &amp; sequencing → timeline → deployment model → critical decisions → access &amp; discovery → first four weeks.</Row>
        <Row q="Critical decisions">Scope vs end-Q1-2026 deadline · build/buy boundary &amp; vendors · subscription ownership (recommend Bullet) · production access model · access-list sign-off.</Row>
        <Row q="Weeks 1-4">W1: submit access + discovery, stand up internal env, WS1 prep. W2: Workshop 1 (Hello World), first Swagger, Launch & Beyond meeting with Bullet's Owner + IT/Security. W3: internal gap (Bullet adjustments), API Q&A, first mocks. W4: Workshop 2 (Base Binary), core platform running in Bullet Dev.</Row>
      </Block>

      <div style={{ marginBottom: 36, marginTop: -8 }}>
        <p style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 14, fontFamily: font }}>
          Key questions, by priority
        </p>
        <QGroup p="P0" items={[
          'Is all five-channel scope required by end Q1 2026, or is the App the one committed deliverable?',
          'Confirm the LLM is self-hosted - does any customer data leave the environment?',
          'Are the internal APIs documented (Swagger) and reachable from our pipeline?',
          'Is there a named Bullet Owner to own coordination and be the single escalation point?',
          'What security scanning toolchain runs on binaries before deployment?',
        ]} />
        <QGroup p="P1" items={[
          'Which third-party tools does Bullet already operate (auth/OTP, monitoring, search)?',
          'Per bought tool - who brings the vendor, and who holds the subscription?',
          'What are the top intents and traffic volumes (to scope the MVP FAQ)?',
          'Is GPU capacity already in place to self-host the LLM?',
          'What are the regulatory constraints on production access?',
        ]} />
        <QGroup p="P2" items={[
          'Swagger / API docs for the Policy and Claims endpoints - needed before the Flow C integration phase.',
          'Who commissions the pentest - Notch or Bullet? Existing security vendor?',
          'Is a PVT (friends & family) soft-launch feasible per channel?',
        ]} />
      </div>

      {/* ===== RISKS ===== */}
      <Block title="Risks & Dependencies" links={<Link to="risks">Risks &amp; Deps</Link>}>
        <p style={{ fontSize: 13.5, fontWeight: 700, color: '#5B6472', marginBottom: 10, fontFamily: font }}>Top 5 risks (by score) → mitigation</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px' }}>
          {[
            ['Production access refused on regulatory grounds (16 · Critical)', 'Request with controls (test user, time-boxed, audited); fallback to Staging or repro-as-a-service.'],
            ['Containment rate below target at launch (15 · High)', 'Staged rollout behind Glassix; tune against Bullet KB; measure on real traffic before widening.'],
            ['Resource contention serialises the two projects (12 · High)', 'Staff both in parallel; if constrained, protect the DevOps project + internal env first.'],
            ['Binary fails Bullet\'s security scan on first submission (8 · Medium)', 'Get the toolchain as a pre-req; pre-scan internally before every handoff.'],
            ['Third-party tooling ownership unresolved at go-live (4 · Low)', 'Lock build/buy boundary + subscription owner per tool at kickoff; recommend Bullet owns.'],
          ].map(([r, m], i) => (
            <li key={i} style={{ fontSize: 14.5, color: '#374151', fontFamily: font, lineHeight: 1.5, marginBottom: 8, paddingLeft: 18, position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#F06A22', fontWeight: 700 }}>{i + 1}</span>
              <strong style={{ color: '#111827' }}>{r}.</strong> {m}
            </li>
          ))}
        </ul>
        <Row q="Critical dependencies">DevOps pipeline access (W1) · Swagger, all internal APIs (W2) · network reachability (W3) · flow/intent inventory (W2) · named Bullet Owner (kickoff) · security toolchain (W1). Each has a due date; a slip escalates it to a tracked risk.</Row>
        <Row q="Team coordination">Two internal weekly syncs (DevOps, Product) → PM consolidates → one external weekly sync with Bullet's Owner (IM joins when scope or business questions are open). Shared dependency tracker with owners and dates; escalation path agreed at kickoff.</Row>
      </Block>
    </div>
  )
}
