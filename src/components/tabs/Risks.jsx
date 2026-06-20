import { Summary, SectionHeader, P, H2, Table, NumberedItem, WarnCard, Card } from '../Shared'

export default function Risks() {
  return (
    <div>
      <SectionHeader eyebrow="RISK" title="What blocks us, and what we do about it" />
      <Summary>
        Six risks, led by access delays and undocumented APIs. The single-tenant mitigates most of them by decoupling development from Bullet dependencies.
      </Summary>

      <H2>Top 6 risks</H2>

      <NumberedItem n="1" title="On-prem access not granted in time (HIGHEST)">
        <p>Phase 0 is gated on Bullet provisioning access (pipeline, logs, DBs, VPN, LLM verification). If it slips, everything slips.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-accent)' }}>Mitigation:</strong> Turn the access matrix into a pre-kickoff ask sent before the meeting. Workshop 1 doesn't start until access is confirmed. Track 3 (single-tenant) runs in parallel so developers aren't idle while waiting.</p>
      </NumberedItem>

      <NumberedItem n="2" title="Internal APIs undocumented or unreachable">
        <p>Flow C is blocked without Swagger + network reachability.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-accent)' }}>Mitigation:</strong> Swagger + reachability confirmation as pre-kickoff asks. API comprehension Q&A scheduled early. Mock-first development so platform-side work proceeds regardless.</p>
      </NumberedItem>

      <NumberedItem n="3" title="Third-party tooling — hosting, billing & ownership unresolved">
        <p>The self-hosted LLM and bought tools (auth/OTP, website search) raise infra provisioning, ongoing consumption cost, and ownership questions.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-accent)' }}>Mitigation:</strong> Structured open decision at kickoff: build/buy boundary, who brings each vendor, subscription ownership (recommend Bullet owns). notch prepares the LLM deployment spec.</p>
      </NumberedItem>

      <NumberedItem n="4" title="Production access refused (insurance/regulatory)">
        <p>A vendor with VPN to an insurer's production is a regulatory red flag.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-accent)' }}>Mitigation:</strong> Request with controls built in: test user only, time-boxed, audited, break-glass model. Fallback: staging with production-like data, or reproduction-as-a-service by Bullet.</p>
      </NumberedItem>

      <NumberedItem n="5" title="Resource contention collapses parallel tracks">
        <p>The 13-week plan assumes 3 concurrent tracks; with too few people they serialize and the deadline slips.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-accent)' }}>Mitigation:</strong> Explicit resourcing recommendation (mid-size team). If constrained, single-tenant build gets the dedicated resource since it unblocks all testing.</p>
      </NumberedItem>

      <NumberedItem n="6" title="Security scanning tools — unknown toolchain">
        <p>Bullet's pipeline runs security scans on every binary. Unknown tools = binaries fail on first submission, causing delays.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-accent)' }}>Mitigation:</strong> Obtain Bullet's security toolchain list early. Get a subscription and install on our single-tenant — pre-scan internally before shipping. Failures caught on our side, not theirs.</p>
      </NumberedItem>

      <H2>Access categories (timed by need)</H2>
      <Table
        headers={['Category', 'Who', 'Why', 'When']}
        rows={[
          ['DevOps access', 'DevOps/Infra', 'Pipeline, deploy, artifact storage', 'Phase 0 — immediately'],
          ['Support access', 'Support team', 'Logs, VPN, reproduction with test user', 'Toward go-live'],
          ['Developer access', 'Developers', 'Bullet dev-env for real integration', 'After mock dev'],
        ]}
      />

      <H2>Two categories of ask</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card title="Access asks (permissions)">
          <p>Pipeline, logs, DBs, VPN, LLM verification, dev-env access.</p>
        </Card>
        <Card title="Knowledge asks (artifacts)">
          <p>Flow/intent inventory, internal API list, Swagger per API (internal + 3rd-party), pipeline-reachability confirmation.</p>
        </Card>
      </div>

      <WarnCard title="Scope ownership — 3rd-party integrations">
        Some integrations (authentication is the clearest case) are existing systems at Bullet and should not be rebuilt by notch. For each, Bullet confirms the integration is possible from their side and supplies the 3rd-party Swagger. Every Bullet-owned integration is risk removed from notch.
      </WarnCard>
    </div>
  )
}
