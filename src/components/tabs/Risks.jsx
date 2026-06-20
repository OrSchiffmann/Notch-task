import { Summary, SectionHeader, P, H2, H3, Table, NumberedItem, WarnCard, Card } from '../Shared'

export default function Risks() {
  return (
    <div>
      <SectionHeader eyebrow="RISKS & DEPENDENCIES" title="What we own, what we need" />
      <Summary>
        Dependencies are things Bullet needs to deliver - they are not risks until a deadline is missed. Risks are uncertainties that threaten the project regardless of Bullet's cooperation. Both are tracked separately and managed differently.
      </Summary>

      <H2>Risks - Notch's exposure</H2>
      <P>These are uncertainties we own mitigation for, regardless of what Bullet does.</P>

      <NumberedItem n="1" title="Resource contention collapses the parallel tracks">
        <p>The plan assumes the DevOps and Product projects run concurrently. If either is understaffed, they serialise and every milestone slides to the right.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-accent)' }}>Mitigation:</strong> Explicit resourcing commitment before kickoff. If constrained, the internal dev environment gets the dedicated resource first - it unblocks all development testing.</p>
      </NumberedItem>

      <NumberedItem n="2" title="Binary fails Bullet's security scanning">
        <p>Bullet's pipeline runs security scans on every binary before deployment. If we don't know their toolchain, our binaries may fail on first submission - causing delays and re-work cycles.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-accent)' }}>Mitigation:</strong> Obtain Bullet's security toolchain list as a pre-requisite. Install the same tools in our internal environment and pre-scan before every handoff. Failures are caught on our side, not theirs.</p>
      </NumberedItem>

      <NumberedItem n="3" title="Production support access refused (regulatory)">
        <p>A vendor with VPN access to an insurer's production environment is a regulatory red flag. This may not be grantable under any conditions.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-accent)' }}>Mitigation:</strong> Request with controls built in - test user only, time-boxed, audited, break-glass model. Define fallback early: staging with production-like data, or Bullet reproduces issues on our behalf.</p>
      </NumberedItem>

      <NumberedItem n="4" title="Third-party tooling ownership unresolved at go-live">
        <p>If subscription ownership (LLM, auth provider, website search) is not decided before go-live, consumption costs land in the wrong place and become a billing dispute post-launch.</p>
        <p className="mt-2"><strong style={{ color: 'var(--color-accent)' }}>Mitigation:</strong> Lock build/buy boundary and subscription owner per tool at kickoff - not left open. Notch recommendation: Bullet owns all third-party subscriptions.</p>
      </NumberedItem>

      <H2>Dependencies - what we need from Bullet</H2>
      <P>
        These are deliverables Bullet owes us. They are not risks today - they become risks the moment a deadline is missed with no escalation path. Each dependency has a due date and an owner; if it slips, it immediately elevates to a tracked risk.
      </P>

      <Table
        headers={['Dependency', 'Needed by', 'Impact if missed', 'Risk level if missed']}
        rows={[
          ['DevOps pipeline access', 'Before Week 1', 'Workshop 1 cannot start. First gate in the entire project.', '⭐⭐⭐ Critical'],
          ['Swagger specs - all internal APIs', 'Before Week 2', 'Mock-first development blocked. Developers idle.', '⭐⭐⭐ Critical'],
          ['Network reachability confirmation per API', 'Before Week 3', 'Integration phase blocked. Discovered late = rework.', '⭐⭐⭐ Critical'],
          ['Existing flow and intent inventory', 'Before Week 2', 'Cannot define V0 scope (top intents for FAQ).', '⭐⭐ High'],
          ['Swagger specs - 3rd-party integrations (Glassix, auth)', 'Before Week 3', 'Flow A (Glassix) and Flow C (auth) blocked.', '⭐⭐ High'],
          ['Named Bullet Implementation Engineer', 'At kickoff', 'No single coordination point. Access requests have no owner.', '⭐⭐ High'],
          ['Security toolchain list', 'Before Week 1', 'Cannot pre-scan binaries. First handoff may fail.', '⭐⭐ High'],
          ['GPU / infra capacity confirmed for LLM', 'Before Week 2', 'LLM deployment spec cannot be finalized. Procurement blocker.', '⭐ Medium'],
          ['Policy and claims data structures', 'Before Week 4', 'Flow C connector design blocked.', '⭐ Medium'],
          ['Developer access to Bullet dev environment', 'Before Week 6', 'Real integration phase blocked. Only impacts if mock dev is done.', '⭐ Medium'],
        ]}
      />

      <WarnCard title="Escalation rule">
        Any dependency not delivered by its due date is immediately raised in the weekly external sync as a tracked risk with a revised date and a named Bullet owner. Dependencies with no owner at kickoff default to the Bullet Implementation Engineer.
      </WarnCard>
    </div>
  )
}
