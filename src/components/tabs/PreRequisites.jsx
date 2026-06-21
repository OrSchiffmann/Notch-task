import { Summary, SectionHeader, P, H2, H3, NumberedItem, WarnCard, Table } from '../Shared'

export default function PreRequisites() {
  return (
    <div>
      <SectionHeader eyebrow="BEFORE KICKOFF" title="Pre-Requisites" />
      <Summary>
        These are the items that must be resolved before the kickoff meeting - not during it. Arriving at kickoff without these means the first weeks will be spent chasing information instead of building. Send this list to Bullet at least one week in advance.
      </Summary>

      <H2>Access requests - submit before kickoff</H2>
      <P>
        Access has long lead times at regulated companies. Every day we wait to request is a day added to the critical path. These should be submitted as soon as the project is confirmed, not at the kickoff meeting.
      </P>

      <Table
        headers={['Access type', 'Who needs it', 'Why it is on the critical path']}
        rows={[
          ['DevOps pipeline access', 'Notch DevOps / Infra', 'Workshop 1 cannot start without it. First gate in the entire project.'],
          ['Artifact storage (push rights)', 'Notch DevOps', 'Needed to hand off binaries to Bullet\'s pull pipeline.'],
          ['Bullet Dev environment access', 'Notch Developers', 'Required for real integration phase. Can be deferred until after mocks, but request early.'],
          ['Log/observability access', 'Notch DevOps + Support', 'Without this, debugging in Bullet\'s environment is blind.'],
          ['LLM verification access', 'Notch DevOps', 'Must confirm the self-hosted model is the correct version and correctly configured.'],
          ['VPN / network access for developers', 'Notch Developers', 'Required to reach Bullet\'s internal APIs from our pipeline.'],
        ]}
      />

      <H2>Artifacts needed from Bullet</H2>
      <P>
        These are knowledge artifacts - documents and specs that Notch needs to start building. Without them, development either cannot start or proceeds on assumptions that will need to be undone later.
      </P>

      <NumberedItem n={1} title="Swagger / API specs for all internal APIs">
        For every internal API the flows will touch (policy data, claims, customer info), Notch needs the Swagger spec before building mocks. Mocks based on assumptions are mocks that break during integration. Request all specs upfront, even for APIs used in later phases.
      </NumberedItem>

      <NumberedItem n={2} title="Swagger / API specs for third-party integrations (Glassix, auth provider, etc.)">
        Third-party integrations are Bullet's responsibility to facilitate. For each one, Notch needs (a) confirmation the integration is technically possible from Bullet's side, and (b) the API spec for that third-party service. This is a scope-control lever: every integration Bullet facilitates is risk removed from Notch.
      </NumberedItem>

      <NumberedItem n={3} title="Existing flow and intent inventory">
        What does the current WhatsApp flow look like? What does the IVR handle today? What are the top intents by volume? This shapes the MVP scope directly - we cannot define "top intents for FAQ" without this data.
      </NumberedItem>

      <NumberedItem n={4} title="Network reachability confirmation">
        Which internal APIs are reachable from the pipeline Notch will build? This must be confirmed before integration starts - not discovered during it. A simple yes/no per API is sufficient; the full network topology is not needed.
      </NumberedItem>

      <NumberedItem n={5} title="Policy and claims data structures">
        The personal-data flow (Flow C - OTP and data integration) depends on understanding the data model for policies and claims. Even though Flow C lands in V1 rather than the MVP, Notch needs this early to design the connectors correctly.
      </NumberedItem>

      <NumberedItem n={6} title="Security scanning toolchain">
        Which SAST, DAST, or SCA tools does Bullet run on binaries before deployment? Notch needs to pre-scan with the same toolchain internally before shipping. Binaries should pass our scans before they ever reach Bullet's pipeline - failures should be caught on our side, not theirs.
      </NumberedItem>

      <H2>Decisions Bullet needs to make before kickoff</H2>
      <P>
        These are not questions to discuss at kickoff - they are decisions that should arrive at kickoff already made. Arriving with these open means the first meeting is spent on alignment instead of planning.
      </P>

      <Table
        headers={['Decision', 'Why it must be pre-decided']}
        rows={[
          ['Timeline: is the end-Q1-2026 deadline immovable, and is all five-channel scope required?', 'Affects scope, resourcing, and whether the plan as written is feasible.'],
          ['LLM hosting confirmed: self-hosted inside Bullet\'s cloud?', 'The entire on-prem architecture depends on this. If data can leave the environment, the model changes significantly.'],
          ['Which 3rd-party tools does Bullet already operate? (auth/OTP, monitoring, website search)', 'Determines vendor decisions and integration scope at kickoff. Use what Bullet has before introducing new tools.'],
          ['Named Implementation Engineer on Bullet\'s side', 'The DevOps workshops need a Bullet counterpart who owns the deployment pipeline. Without a named owner, coordination fails.'],
          ['GPU / infra capacity confirmed for self-hosted LLM?', 'If Bullet does not have the hardware, this becomes a procurement blocker. Surface early.'],
        ]}
      />

      <WarnCard title="If these are not ready at kickoff">
        The kickoff meeting should not be used to chase these. If access requests are not submitted and API specs are not available, Week 1 becomes a coordination week instead of a build week - and the timeline slips before a single line of code is written. Send this list to Bullet's counterpart at least one week before the kickoff date.
      </WarnCard>
    </div>
  )
}
