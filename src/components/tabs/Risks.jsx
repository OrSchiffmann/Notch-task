import { Summary, SectionHeader, P, H2, Table, WarnCard } from '../Shared'

const font = "'Calibri', 'Trebuchet MS', Arial, sans-serif"

/* ---- severity badge for the dependencies table ---- */
function Sev({ level }) {
  const map = {
    Critical: { bg: '#FEF2F2', border: '#FECACA', color: '#B91C1C' },
    High:     { bg: '#FFF7ED', border: '#FED7AA', color: '#C2410C' },
    Medium:   { bg: '#F3F4F6', border: '#E5E7EB', color: '#6B7280' },
  }
  const c = map[level]
  return (
    <span style={{
      display: 'inline-block', background: c.bg, border: `1px solid ${c.border}`, color: c.color,
      borderRadius: 999, padding: '2px 10px', fontSize: 11, fontWeight: 700,
      letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: font, whiteSpace: 'nowrap',
    }}>{level}</span>
  )
}

/* ---- risk scoring ---- */
const BANDS = {
  Low:      { heat: '#BBF7D0', color: '#047857', bg: '#ECFDF5', border: '#A7F3D0' },
  Medium:   { heat: '#FDE68A', color: '#B45309', bg: '#FFFBEB', border: '#FDE68A' },
  High:     { heat: '#FDBA74', color: '#C2410C', bg: '#FFF4EE', border: '#FDBA74' },
  Critical: { heat: '#FCA5A5', color: '#B91C1C', bg: '#FEF2F2', border: '#FECACA' },
}
function bandFor(score) {
  if (score >= 16) return 'Critical'
  if (score >= 10) return 'High'
  if (score >= 5) return 'Medium'
  return 'Low'
}

const RISKS = [
  { n: 1, title: 'Resource contention collapses the parallel tracks', type: 'Resourcing', sev: 4, prob: 3,
    mitigation: 'Explicit resourcing commitment before kickoff. If constrained, the internal dev environment gets the dedicated resource first - it unblocks all development testing.' },
  { n: 2, title: "Binary fails Bullet's security scanning", type: 'Technical', sev: 2, prob: 4,
    mitigation: "Obtain Bullet's security toolchain list as a pre-requisite. Install the same tools internally and pre-scan before every handoff - failures are caught on our side, not theirs." },
  { n: 3, title: 'Production support access refused (regulatory)', type: 'Compliance', sev: 4, prob: 4,
    mitigation: 'Request with controls built in - test user only, time-boxed, audited, break-glass. Define the fallback early: staging with production-like data, or Bullet reproduces issues on our behalf.' },
  { n: 4, title: 'Third-party tooling ownership unresolved at go-live', type: 'Commercial', sev: 2, prob: 2,
    mitigation: 'Lock the build/buy boundary and subscription owner per tool at kickoff - not left open. Recommendation: Bullet owns all third-party subscriptions.' },
  { n: 5, title: 'Containment rate below target at launch', type: 'Product', sev: 5, prob: 3,
    mitigation: "Staged rollout behind the Glassix safety net; tune against Bullet's knowledge base during UAT; measure containment on real traffic before widening coverage, so misses surface early and recoverably." },
]

function NumChip({ n }) {
  return (
    <span style={{
      flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: '#1F2937', color: '#fff',
      fontSize: 13, fontWeight: 700, fontFamily: font, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>{n}</span>
  )
}

function TypeBadge({ children }) {
  return (
    <span style={{
      display: 'inline-block', background: '#F3F4F6', border: '1px solid #E5E7EB', color: '#4B5563',
      borderRadius: 6, padding: '2px 9px', fontSize: 10.5, fontWeight: 700,
      letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: font, whiteSpace: 'nowrap',
    }}>{children}</span>
  )
}

function ScoreBadge({ score }) {
  const b = BANDS[bandFor(score)]
  return (
    <span style={{
      display: 'inline-block', background: b.bg, border: `1px solid ${b.border}`, color: b.color,
      borderRadius: 999, padding: '2px 11px', fontSize: 11.5, fontWeight: 700,
      fontFamily: font, whiteSpace: 'nowrap',
    }}>{score} · {bandFor(score)}</span>
  )
}

function DotMeter({ val }) {
  return (
    <span style={{ display: 'inline-flex', gap: 3, alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: i <= val ? '#374151' : '#E5E7EB' }} />
      ))}
    </span>
  )
}

function Metric({ label, val }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#6B7280', fontFamily: font }}>
      <span style={{ fontWeight: 600 }}>{label}</span>
      <DotMeter val={val} />
      <span style={{ color: '#9CA3AF' }}>{val}/5</span>
    </span>
  )
}

function RiskMatrix() {
  const sevs = [5, 4, 3, 2, 1]
  const probs = [1, 2, 3, 4, 5]
  const COLS = '20px repeat(5, 46px)'
  return (
    <div style={{ overflowX: 'auto', marginBottom: 16 }}>
      <div style={{ display: 'flex', gap: 8, minWidth: 300 }}>
        <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', textAlign: 'center', fontSize: 10.5, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.12em', paddingBottom: 18 }}>
          IMPACT →
        </div>
        <div>
          {sevs.map(sev => (
            <div key={sev} style={{ display: 'grid', gridTemplateColumns: COLS, gap: 4, marginBottom: 4, alignItems: 'center' }}>
              <div style={{ fontSize: 11, color: '#9CA3AF', textAlign: 'center', fontWeight: 600 }}>{sev}</div>
              {probs.map(prob => {
                const score = sev * prob
                const r = RISKS.find(x => x.sev === sev && x.prob === prob)
                return (
                  <div key={prob} style={{ height: 46, borderRadius: 6, background: BANDS[bandFor(score)].heat, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {r && <NumChip n={r.n} />}
                  </div>
                )
              })}
            </div>
          ))}
          <div style={{ display: 'grid', gridTemplateColumns: COLS, gap: 4 }}>
            <div />
            {probs.map(p => <div key={p} style={{ textAlign: 'center', fontSize: 11, color: '#9CA3AF', fontWeight: 600 }}>{p}</div>)}
          </div>
          <div style={{ textAlign: 'center', fontSize: 10.5, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.12em', marginTop: 6, paddingLeft: 24 }}>
            PROBABILITY →
          </div>
        </div>
      </div>
    </div>
  )
}

function BandLegend() {
  return (
    <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 28 }}>
      {['Low', 'Medium', 'High', 'Critical'].map(k => (
        <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#6B7280', fontFamily: font }}>
          <span style={{ width: 14, height: 14, borderRadius: 4, background: BANDS[k].heat }} />
          {k}
        </span>
      ))}
    </div>
  )
}

export default function Risks() {
  return (
    <div>
      <SectionHeader eyebrow="RISKS & DEPENDENCIES" title="What we own, what we need" />
      <Summary>
        Risks are uncertainties that threaten the project regardless of Bullet's cooperation - each is scored on a 5×5 matrix (impact × probability) and typed. Dependencies are deliverables Bullet owes us; they are not risks until a deadline is missed. The two are tracked and managed differently.
      </Summary>

      <H2>Risk register</H2>
      <P>
        Each risk carries a type, an impact and a probability rating (1-5), and a score (impact × probability) that places it on the heatmap below. Scores are inherent - before mitigation; the mitigation column is what moves each risk down and to the left.
      </P>

      <RiskMatrix />
      <BandLegend />

      {RISKS.map(r => {
        const score = r.sev * r.prob
        return (
          <div key={r.n} style={{ padding: '16px 0', borderTop: '1px solid #F3F4F6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <NumChip n={r.n} />
              <span style={{ fontSize: 15.5, fontWeight: 700, color: '#111827', fontFamily: font, flex: 1, minWidth: 180 }}>{r.title}</span>
              <TypeBadge>{r.type}</TypeBadge>
              <ScoreBadge score={score} />
            </div>
            <div style={{ display: 'flex', gap: 22, margin: '10px 0 8px 36px', flexWrap: 'wrap' }}>
              <Metric label="Impact" val={r.sev} />
              <Metric label="Probability" val={r.prob} />
            </div>
            <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.6, marginLeft: 36, fontFamily: font }}>
              <strong style={{ color: '#111827' }}>Mitigation:</strong> {r.mitigation}
            </p>
          </div>
        )
      })}

      <H2>Dependencies - what we need from Bullet</H2>
      <P>
        These are deliverables Bullet owes us. They are not risks today - they become risks the moment a deadline is missed with no escalation path. Each dependency has a due date and an owner; if it slips, it immediately elevates to a tracked risk.
      </P>

      <Table
        headers={['Dependency', 'Needed by', 'Impact if missed', 'Risk level if missed']}
        rows={[
          ['DevOps pipeline access', 'Before Week 1', 'Workshop 1 cannot start. First gate in the entire project.', <Sev level="Critical" />],
          ['Swagger specs - all internal APIs', 'Before Week 2', 'Mock-first development blocked. Developers idle.', <Sev level="Critical" />],
          ['Network reachability confirmation per API', 'Before Week 3', 'Integration phase blocked. Discovered late = rework.', <Sev level="Critical" />],
          ['Existing flow and intent inventory', 'Before Week 2', 'Cannot define V0 scope (top intents for FAQ).', <Sev level="High" />],
          ['Swagger specs - 3rd-party integrations (Glassix, auth)', 'Before Week 3', 'Flow A (Glassix) and Flow C (auth) blocked.', <Sev level="High" />],
          ['Named Bullet Implementation Engineer', 'At kickoff', 'No single coordination point. Access requests have no owner.', <Sev level="High" />],
          ['Security toolchain list', 'Before Week 1', 'Cannot pre-scan binaries. First handoff may fail.', <Sev level="High" />],
          ['GPU / infra capacity confirmed for LLM', 'Before Week 2', 'LLM deployment spec cannot be finalized. Procurement blocker.', <Sev level="Medium" />],
          ['Policy and claims data structures', 'Before Week 4', 'Flow C connector design blocked.', <Sev level="Medium" />],
          ['Developer access to Bullet dev environment', 'Before Week 6', 'Real integration phase blocked. Only impacts if mock dev is done.', <Sev level="Medium" />],
        ]}
      />

      <WarnCard title="Escalation rule">
        Any dependency not delivered by its due date is immediately raised in the weekly external sync as a tracked risk with a revised date and a named Bullet owner. Dependencies with no owner at kickoff default to the Bullet Implementation Engineer.
      </WarnCard>
    </div>
  )
}
