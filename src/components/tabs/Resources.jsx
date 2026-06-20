import { Summary, SectionHeader, P, H2, Card, WarnCard, Table } from '../Shared'

export default function Resources() {
  return (
    <div>
      <SectionHeader eyebrow="TEAM & CAPACITY" title="Who we need on both sides" />
      <Summary>
        The two-project structure only delivers in parallel if both are staffed in parallel. This is the resourcing the plan assumes - on Notch's side to build and deploy, and on Bullet's side to unblock. Under-staffing either side collapses the parallel tracks into a sequence and extends every milestone.
      </Summary>

      <H2>Notch team</H2>
      <P>
        A focused team of five to six, spanning both projects. The DevOps and Product projects need different skills, so they are staffed separately - one person cannot run both at the pace the timeline requires.
      </P>
      <Table
        headers={['Role', 'Project', 'Responsibility', 'Load']}
        rows={[
          ['Implementation Manager', 'Both', 'Single point of accountability. Owns the dependency tracker, runs the external sync, escalates blockers, manages scope.', 'Full'],
          ['DevOps / Infrastructure Engineer', 'DevOps', 'Owns the on-prem foundation: workshops, binary pipeline, environment rollout, artifact storage, LLM deployment spec, access coordination.', 'Full'],
          ['Platform Developers (2)', 'Product', 'Build the flows on Notch\'s platform. Mock-first, then real integration. The core build capacity.', 'Full'],
          ['AI / Prompt Engineer', 'Product', 'Agent behaviour, guardrails, LLM integration, response tuning against Bullet\'s knowledge base and compliance rules.', 'Full → tapering'],
          ['QA / Test Engineer', 'Both', 'Owns the testing funnel: automated suites, Stage validation, coordinating Bullet UAT, regression across versions.', 'Ramps at V0'],
        ]}
      />

      <H2>Bullet team</H2>
      <P>
        Bullet's involvement is the project's critical path. Every Notch deliverable that touches their environment, data, or systems depends on a named Bullet owner being available. The single most important appointment is a dedicated Implementation Engineer - without one, coordination has no counterpart and access requests have no home.
      </P>
      <Table
        headers={['Role', 'Why we need them', 'Engagement']}
        rows={[
          ['Implementation Engineer', 'Bullet\'s counterpart to our IM. Owns the deployment pipeline on their side, coordinates access, the single escalation point.', 'Weekly + on-demand'],
          ['DevOps / Cloud Engineer', 'Provisions the three environments, grants pipeline and network access, stands up GPU for the self-hosted LLM.', 'Heavy at start, then as-needed'],
          ['API / Backend owner(s)', 'Provide Swagger specs, join the API comprehension Q&A, confirm reachability. They hold the semantics our mocks depend on.', 'Concentrated in discovery'],
          ['Security / Compliance lead', 'Owns the scanning toolchain, the pentest decision, and the production-access model. Gatekeeper for anything touching customer data.', 'Decision points + reviews'],
          ['Product / CS stakeholder', 'Defines the top intents that scope V0, runs UAT, owns the tone and correctness of AI responses against their standards.', 'Scoping + UAT + go-live'],
        ]}
      />

      <H2>Services and infrastructure Bullet provides</H2>
      <P>
        Beyond people, Bullet owns the environment the system runs in. These are demands on Bullet's infrastructure, not requests Notch can satisfy itself.
      </P>
      <Table
        headers={['Service', 'Detail']}
        rows={[
          ['Cloud infrastructure - 3 environments', 'Dev, Staging, Production stood up on Bullet\'s cloud, provisioned in sequence.'],
          ['GPU capacity for self-hosted LLM', 'Hardware to run the model inside their environment. Procurement lead time is a risk if not already available.'],
          ['Secure artifact storage', 'The pull-based handoff zone where Notch uploads binaries and Bullet\'s pipeline collects them.'],
          ['Security scanning pipeline', 'SAST / DAST / SCA tooling run on every binary before deployment.'],
          ['Third-party subscriptions', 'Auth/OTP provider, LLM licence, website search. Recommendation: Bullet holds all subscriptions (see Overview).'],
        ]}
      />

      <WarnCard title="The resourcing trade-off, stated plainly">
        This plan assumes the team above runs both projects concurrently. If Notch staffing is constrained, the honest recommendation is to protect the DevOps project and the internal dev environment first - they unblock everything downstream. If Bullet staffing is constrained, the API owners and Implementation Engineer are the bottleneck to protect. Cutting either side does not shrink the work; it only serialises it and moves every go-live date to the right.
      </WarnCard>
    </div>
  )
}
