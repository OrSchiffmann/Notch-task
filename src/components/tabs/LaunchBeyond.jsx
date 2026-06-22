import { Summary, SectionHeader, H2, H3, P, NumberedItem, WarnCard, Table } from '../Shared'

export default function LaunchBeyond() {
  return (
    <div>
      <SectionHeader eyebrow="PHASE 2 READINESS" title="Launch & Beyond" />
      <Summary>
        These are the questions we need answers to before go-live - covering support operations, deployment upgrades, and security posture on Bullet's side. Development does not wait for them, but they must be resolved before any channel goes live. A meeting to begin working through them is scheduled in Week 2 of the project.
      </Summary>

      <div style={{ background: '#EFF4FE', border: '1px solid #C7D7F5', borderRadius: 8, padding: '12px 16px', marginBottom: 28 }}>
        <p style={{ fontSize: 13.5, color: '#1D4ED8', margin: 0 }}>
          <strong>Scheduled: Week 2 of the project.</strong> A focused meeting with Bullet's Owner and their IT/Security lead to begin resolving these questions. Development runs in parallel - these answers gate go-live, not the build.
        </p>
      </div>

      <H2>Support Operations (Hyper Care)</H2>
      <P>The first 2-3 weeks after each go-live are a Hyper Care window (see Roadmap): elevated monitoring and a dedicated responder on standby. These questions define who owns what when something breaks, and the boundary between Notch's responsibility and Bullet's.</P>

      <NumberedItem n={1} title="Who is the first responder?">
        When an issue is reported by a Bullet customer, who picks it up - Bullet's CS team, their IT, or Notch? Define the escalation path and response SLAs before go-live, not after the first incident.
      </NumberedItem>
      <NumberedItem n={2} title="What does Notch have visibility into on production?">
        Notch's Monitor Service runs inside Bullet's environment. What can Notch actually see remotely - logs, alerts, dashboards? What requires Bullet to relay information? Define the observability contract now.
      </NumberedItem>
      <NumberedItem n={3} title="How are incidents reproduced?">
        When a conversation fails in production, Notch developers can't access Bullet's live environment. How are bugs reproduced - via anonymized logs, test user replays, or a staging environment that mirrors production traffic patterns?
      </NumberedItem>
      <NumberedItem n={4} title="What is the handoff SLA from Glassix to a human agent?">
        The Glassix fallback is the safety net for the MVP. Is there an agreed SLA on how fast a human agent picks up after AI handoff? Who monitors this metric and who owns it if it degrades?
      </NumberedItem>
      <NumberedItem n={5} title="How does Bullet handle a full AI outage?">
        If the Notch platform is unreachable inside Bullet's environment, what happens to incoming conversations? Is there a manual fallback flow, or does the channel go dark? This must be defined and tested before go-live.
      </NumberedItem>

      <H2>Go-Live and Upgrades</H2>
      <P>The pull-based binary model means every upgrade is a handoff, not a push. These questions govern how that cadence works in practice.</P>

      <NumberedItem n={1} title="What is the upgrade approval process at Bullet?">
        Each new binary Notch ships must pass Bullet's security scanning pipeline before it runs. Who at Bullet approves a deployment? What is the typical turnaround from submission to production? This directly affects how quickly we can ship fixes after go-live.
      </NumberedItem>
      <NumberedItem n={2} title="Who coordinates the binary handoff on each release?">
        Is there a named Bullet counterpart who owns the deployment pipeline on their side? Coordinating a release without a clear owner leads to delays and finger-pointing. Define this role before v1 ships.
      </NumberedItem>
      <NumberedItem n={3} title="How do we handle a bad binary in production?">
        If a deployed version causes regressions, what is the rollback procedure? Can Bullet revert to the previous binary quickly, and who initiates that? Notch should provide a rollback-ready artifact with every release.
      </NumberedItem>
      <NumberedItem n={4} title="What is the cadence for infrastructure upgrades - LLM model updates, environment patches?">
        The self-hosted LLM will need updates over time. Who initiates them - Notch (with a new spec) or Bullet (on their own schedule)? How does Notch verify the new model version is compatible before it goes live?
      </NumberedItem>
      <NumberedItem n={5} title="How are non-production environments kept in sync with production?">
        After go-live, staging and dev environments tend to drift from production. Who is responsible for keeping them aligned? This matters for accurate testing of future releases.
      </NumberedItem>

      <H2>Security - Bullet's Side</H2>
      <P>The on-prem model means Bullet owns the security perimeter. These are the questions Notch needs answered to work safely within it.</P>

      <NumberedItem n={1} title="What security scanning tools does Bullet run on binaries?">
        Notch needs to pre-scan with the same toolchain Bullet uses before shipping each binary. If we don't know which SAST, DAST, or SCA tools they use, our binaries may fail on first submission and cause delays. This should be a pre-kickoff ask.
      </NumberedItem>
      <NumberedItem n={2} title="What data classification applies to conversation data?">
        Conversations on WhatsApp may contain PII, policy numbers, or claim details. How does Bullet classify and handle this data inside their environment? Are there retention limits, anonymization requirements, or audit log obligations that affect how Notch stores or processes it?
      </NumberedItem>
      <NumberedItem n={3} title="How is the OTP authentication provider secured?">
        OTP verification is a high-value target. Who operates the auth provider - Bullet or a third party? What controls exist around OTP issuance, rate limiting, and audit trails? Notch needs to confirm the integration doesn't introduce a weak link.
      </NumberedItem>
      <NumberedItem n={4} title="What is the access review process for Notch developer access to Bullet's dev environment?">
        Developer access is time-boxed and scoped by design. Who at Bullet reviews and renews it? What happens to in-progress work if access is revoked mid-sprint? Define the review cycle before access is granted.
      </NumberedItem>
      <NumberedItem n={5} title="Is there a penetration testing or audit requirement before go-live?">
        Some insurers require a third-party pen test or compliance audit before any AI system touches customer data. Does Bullet have this requirement? If yes, who commissions it, how long does it take, and does it block the MVP go-live date?
      </NumberedItem>

      <WarnCard title="Recommended action">
        Send this list to Bullet's Owner and their IT/Security lead before the kickoff meeting. Answers to these questions determine whether the MVP go-live target is achievable - and several of them have long lead times if escalation is needed.
      </WarnCard>
    </div>
  )
}
