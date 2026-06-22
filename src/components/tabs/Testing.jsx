import { Summary, SectionHeader, P, H2, H3, NumberedItem, WarnCard, Table } from '../Shared'

const font = "'Calibri', 'Trebuchet MS', Arial, sans-serif"

const Yes = () => <span style={{ color: '#F06A22', fontWeight: 700, fontSize: 15 }}>✓</span>

function Tag({ children, tone = 'gray' }) {
  const c = tone === 'amber' ? '#B45309' : '#9CA3AF'
  return <span style={{ fontSize: 12, color: c, fontStyle: tone === 'amber' ? 'normal' : 'italic', fontWeight: tone === 'amber' ? 600 : 400, fontFamily: font }}>{children}</span>
}

export default function Testing() {
  return (
    <div>
      <SectionHeader eyebrow="QUALITY & VALIDATION" title="Testing Strategy" />
      <Summary>
        Each channel goes through the same six-phase testing funnel before go-live. The funnel is ordered by cost of failure - we catch issues in Notch's staging before Bullet's UAT, and in UAT before production. PVT (friends and family) is an open question per channel.
      </Summary>

      <H2>The six-phase funnel</H2>
      <P>Every channel release - WhatsApp V0, V1, V2, App, Voice, Web - passes through these phases in order. Phase 6 (go-live) is only reached after all prior phases are signed off.</P>

      <NumberedItem n={1} title="Notch Stage testing">
        <p>Notch's internal QA on the staging environment. Tests run against real Bullet APIs (not mocks) in a non-production environment. Goal: validate the full flow end-to-end before Bullet's team is involved.</p>
        <p className="mt-2">Covers: functional correctness per DOD criteria, regression across existing flows, guardrail and compliance checks, Monitor Service observability, automated test suite green.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-text)' }}>Exit criterion:</strong> all DOD criteria pass, no critical or high-severity open issues.</p>
      </NumberedItem>

      <NumberedItem n={2} title="Bullet UAT (User Acceptance Testing)">
        <p>Bullet's own team validates the flows against their expectations. This is the first time Bullet's CS and product stakeholders interact with the system directly. Notch provides a test plan; Bullet executes against it with real scenarios from their operations.</p>
        <p className="mt-2">Covers: business logic correctness, edge cases from Bullet's real traffic, tone and phrasing of AI responses, guardrail behavior on insurance-specific scenarios.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-text)' }}>Exit criterion:</strong> Bullet sign-off from named stakeholder. Open issues triaged and prioritized - blocking issues resolved before proceeding, non-blocking issues logged for next version.</p>
      </NumberedItem>

      <NumberedItem n={3} title="Pentest and load testing">
        <p>Security and performance validation. Pentest is run by a third party (or Bullet's own security team if they have one). Load testing validates the system holds under expected traffic volumes.</p>
        <p className="mt-2">Covers: penetration test of the deployed binary and API surface, OTP flow security (rate limiting, replay attacks), load test at 2x expected peak traffic, latency under load within agreed SLA.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-text)' }}>Timing:</strong> runs in parallel with or immediately after UAT. Required before production deployment for channels handling personal data (WhatsApp Full onward).</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-text)' }}>Open question:</strong> who commissions the pentest - Notch or Bullet? Does Bullet have an existing security vendor? This affects timeline and cost.</p>
      </NumberedItem>

      <NumberedItem n={4} title="Production environment validation">
        <p>Before any real customer traffic, the binary is deployed to production and validated with synthetic or test-user traffic. This proves the production environment behaves identically to staging - and catches any config drift.</p>
        <p className="mt-2">Covers: binary deploys and starts cleanly, Monitor Service is live and alerting correctly, all integrations reachable from production network, rollback procedure verified.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-text)' }}>Exit criterion:</strong> synthetic traffic end-to-end pass, monitoring confirmed live, rollback test passed.</p>
      </NumberedItem>

      <NumberedItem n={5} title="PVT - friends and family">
        <p>A limited soft-launch to a controlled group of real users before full go-live. Surfaces issues that only appear with real human behavior - unexpected intents, unusual phrasing, edge cases that no test plan predicts.</p>
        <p className="mt-2">Covers: containment rate on real traffic, handoff rate and quality, any AI behavior surprises, Monitor Service alerts under real load.</p>

        <WarnCard title="Open question: is PVT feasible for each channel?">
          For WhatsApp, a friends-and-family group is straightforward - Bullet invites a small set of internal users or willing customers to the WhatsApp flow before broad launch. For the App, it depends on whether Bullet can release a limited build (TestFlight / internal track). For Voice, it may require routing a subset of incoming calls - feasibility depends on the telephony setup. This should be a named decision per channel at kickoff planning.
        </WarnCard>
      </NumberedItem>

      <NumberedItem n={6} title="Go-live">
        <p>Full production launch to all customers on that channel. Notch and Bullet are both on standby for the first 48-72 hours. Glassix fallback remains active for the first week regardless of containment rate.</p>
        <p className="mt-2">Covers: traffic ramp (gradual or full flip, Bullet's decision), Monitor Service watched actively, containment rate tracked in real time, escalation path confirmed and staffed.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-text)' }}>Exit criterion:</strong> containment rate at or above agreed threshold after 48 hours of live traffic. If below threshold, fallback to human agents while root cause is investigated.</p>
      </NumberedItem>

      <H2>Phase requirements per channel</H2>
      <Table
        headers={['Channel', 'Stage testing', 'Bullet UAT', 'Pentest + load', 'Prod validation', 'PVT', 'Go-live']}
        rows={[
          ['WhatsApp V0',  <Yes />, <Yes />, <Tag>Light</Tag>, <Yes />, <Tag>Recommended</Tag>, <Yes />],
          ['WhatsApp V1/V2', <Yes />, <Yes />, <Yes />,       <Yes />, <Tag>Recommended</Tag>, <Yes />],
          ['App',           <Yes />, <Yes />, <Yes />,          <Yes />, <Tag tone="amber">Open question</Tag>, <Yes />],
          ['Voice',         <Yes />, <Yes />, <Yes />,          <Yes />, <Tag tone="amber">Open question</Tag>, <Yes />],
          ['Web',           <Yes />, <Yes />, <Tag>Light</Tag>, <Yes />, <Tag>Optional</Tag>, <Yes />],
        ]}
      />

      <H2>Who owns what</H2>
      <Table
        headers={['Phase', 'Lead', 'Bullet involvement']}
        rows={[
          ['Notch Stage testing', 'Notch QA', 'None - Notch internal'],
          ['Bullet UAT', 'Bullet product / CS lead', 'Executes test plan, signs off'],
          ['Pentest + load', 'TBD - third party or Bullet security', 'Coordinates access, reviews findings'],
          ['Production validation', 'Notch DevOps + Bullet Owner', 'Deployment approval, monitoring setup'],
          ['PVT', 'Bullet (owns the customer relationship)', 'Selects participants, monitors'],
          ['Go-live', 'Joint - Notch PM + Bullet Owner', 'Both on standby first 48h'],
        ]}
      />
    </div>
  )
}
