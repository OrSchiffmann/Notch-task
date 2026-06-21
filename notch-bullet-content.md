Notch × Bullet — Project Kickoff Plan
Full content export (for NotebookLM / text ingestion)

This document contains the complete text of the interactive kickoff-plan site. The site itself is a client-side React app, so its public URL serves an empty HTML shell and tools that do not execute JavaScript cannot read it. Use this file instead.

===============================================================================

# Cover

NOTCH × BULLET

The deployment that opens regulated markets

EXECUTIVE SUMMARY

Bullet is Notch's first on-premise deployment in insurance, and a Notch investor. Delivering it well is worth far more than one logo: it is the reference architecture that makes every future bank, insurer, and healthcare customer addressable.

Customer snapshot
- Bullet - a large US insurance carrier, and Notch's first on-premise deployment in a regulated vertical.
- Backed by Lightspeed, Jibe, Munich Re Ventures, and Bullet itself - customer and investor in one.
- Proven Notch benchmark to defend: 70-73% automation, ~50% CS headcount reduction, 200% ROI within a year.

Why this engagement carries outsized weight
- It proves the on-premise model. Binary-only, pull-based deployment is the exact posture regulated industries demand. Proving it here turns "can Notch run inside our walls?" from an open question into a documented yes.
- It is our first large US enterprise. A working reference in a Fortune-scale regulated buyer is the credential that opens the US enterprise market - not just this account.
- It produces a reusable playbook. Insurance-specific work - compliance, guardrails, data sensitivity - is built once on our platform and becomes a template the next regulated customer inherits.
- The customer is also an investor. Execution here is visible to the people funding Notch's next round. Delivery is a commercial outcome and an investor signal at the same time.

WHAT WINNING LOOKS LIKE
WhatsApp live quickly and safely, the App live on its priority timeline, and a deployment architecture proven generic enough to lift into the next regulated customer with the integration layer swapped, not rebuilt.

-------------------------------------------------------------------------------

# Summary (TL;DR)

Everything, on one page. Every deliverable answered in brief. Two parallel projects (DevOps + Product), WhatsApp first via a recoverable V0, App on a Q1 2027 target, and a deployment architecture built to be reused by the next regulated customer.

Project Roadmap
- Phases (kickoff → prod): Six per channel: DevOps connectivity → Discovery + mocks → Build → Real integration → Testing funnel → Go-live.
- Timeline & milestones: 12 months from a Jul 2026 kickoff. WhatsApp V0 (Q3 26), WhatsApp Full (Q4 26), App (Q1 27), Voice (Q2 27), Web (Q2 27).
- Prioritisation logic: WhatsApp first - has a Glassix fallback and is the first live test of the pipeline. App second - Bullet's priority, reuses the proven core. Voice, then Web. Within WhatsApp: Flow A + B + D before C.
- Environment rollout: Dev → Staging → Production, in sequence. Each inherits a proven config from the one before; Production is built from a recipe that already worked twice.
- Notch resources: IM, DevOps/Infra Engineer, 2 Platform Developers, AI/Prompt Engineer, QA/Test Engineer.
- Bullet resources: Implementation Engineer (critical), DevOps/Cloud Engineer, API owners, Security/Compliance lead, Product/CS stakeholder. Services: 3 cloud environments, GPU for the LLM, artifact storage, security scanning, 3rd-party subscriptions.

MVP (V0) & Definition of Done
- First channel: WhatsApp - the only first option with a built-in human fallback (Glassix).
- IN scope (V0): Flow A (routing + Glassix), Flow B (FAQ on top intents), Flow D (guardrail baseline).
- OUT of V0: Flow C (OTP + personal data) → V1. Full KB, hardening, website scraping → V2. App / Voice / Web → own rollouts.
- Success metrics: Business: containment rate (headline, 70-73% benchmark), handoff quality. Technical: answer accuracy, availability/latency. Safety: guardrail pass rate.
- DOD (first features): FAQ: answers validated top-N, out-of-scope → Glassix, tests green, observable. Glassix: clean handoff with context, rate tracked. OTP (V1): in-flow verify, graceful failure, no data pre-verify, audited.
- How we prove it: Staged: internal mocks → Staging real APIs → limited Production behind Glassix → containment measured on real traffic before widening.

Kickoff Meeting Plan
- Agenda: Strategy & sequencing → timeline → deployment model → critical decisions → access & discovery → first three weeks.
- Critical decisions: Timeline (Q1 2027?), build/buy boundary & vendors, subscription ownership (recommend Bullet), production access model, access-list sign-off.
- Week 1-3: W1: submit access + discovery, stand up internal env, WS1 prep, schedule API Q&A. W2: Workshop 1, Flow A on mocks, first Swagger. W3: Workshop 2 prep, API Q&A, first mocks.

Key questions, by priority
P0 · BLOCKING
- Is Q1 2026 a hard external commitment, or is Q1 2027 the real App target?
- Confirm the LLM is self-hosted - does any customer data leave the environment?
- Are the internal APIs documented (Swagger) and reachable from our pipeline?
- Is there a named Bullet Implementation Engineer to own coordination?
- What security scanning toolchain runs on binaries before deployment?
P1 · HIGH
- Which third-party tools does Bullet already operate (auth/OTP, monitoring, search)?
- Per bought tool - who brings the vendor, and who holds the subscription?
- What are the top intents and traffic volumes (to scope the V0 FAQ)?
- Is GPU capacity already in place to self-host the LLM?
- What are the regulatory constraints on production access?
P2 · BEFORE PHASE
- What do the policy and claim data structures look like (Flow C / V1)?
- Who commissions the pentest - Notch or Bullet? Existing security vendor?
- Is a PVT (friends & family) soft-launch feasible per channel?

Risks & Dependencies — Top 5 risks → mitigation
1. Resource contention serialises the two projects. Staff both in parallel; if constrained, protect the DevOps project + internal env first.
2. Binary fails Bullet's security scan on first submission. Get the toolchain as a pre-req; pre-scan internally before every handoff.
3. Production access refused on regulatory grounds. Request with controls (test user, time-boxed, audited); fallback to Staging or repro-as-a-service.
4. Internal APIs undocumented or unreachable. Swagger + reachability as pre-reqs; mock-first so the build proceeds regardless.
5. Containment rate below target at launch. Staged rollout behind Glassix; tune against Bullet KB; measure on real traffic before widening.
- Critical dependencies: DevOps pipeline access (W1), Swagger all internal APIs (W2), network reachability (W3), flow/intent inventory (W2), named Impl. Engineer (kickoff), security toolchain (W1). Each has a due date; a slip escalates it to a tracked risk.
- Team coordination: Two internal weekly syncs (DevOps, Product) → IM consolidates → one external weekly sync with Bullet's Impl. Engineer. Shared dependency tracker with owners and dates; escalation path agreed at kickoff.

-------------------------------------------------------------------------------

# Overview — Two projects, one kickoff

EXECUTIVE SUMMARY
We run this as two projects, not one: a DevOps project that proves Notch can deploy and operate inside Bullet's environment, and a Product project that builds the AI flows on Notch's platform. They run in parallel with different owners and different risks, and meet only at the deployment pipeline. WhatsApp is the first channel - it has a human fallback, and shipping it is our first real production test of the deployment itself.

Why two projects, not one
These two bodies of work have nothing in common except the customer. One is an infrastructure problem - getting a binary to deploy, run, and be observable inside a regulated insurer's cloud. The other is a product problem - building support flows that resolve real customer issues. They need different skills, depend on different things, and fail for different reasons.

Managed as a single project, the slower of the two sets the pace for both and developers sit idle waiting on infrastructure. Managed as two, each runs at its own speed against its own dependencies. They converge at exactly one point: a validated binary from the Product project, handed off through the pipeline the DevOps project built. Everything in this plan follows from that split.

Channel sequencing (deliberate order)
1. WhatsApp - first. Bullet already runs this channel, it is the simplest technically (asynchronous text, no real-time speech), and it has a human fallback through Glassix - if the AI is unsure, an agent picks up. That makes it the right place to find our failure modes, because here they are recoverable. Going live also gives us the first end-to-end proof of the deployment pipeline in production, before anything higher-stakes depends on it. Critically, "WhatsApp" is not all-or-nothing - we can go live with a single slice and expand from there.
2. Mobile App - second (Bullet's 2026 priority). The highest-value channel, and the reason the engagement exists. By the time we reach it, the core capabilities are already proven on WhatsApp - the App reuses them rather than discovering them. The App has no graceful fallback, so nothing unproven is allowed to land there first.
3. Voice - third. Reuses the proven core and adds the genuinely hard part: real-time speech understanding. Sequenced after text is stable so the new variable is isolated.
4. Website - fourth. The lowest marginal value once the channels above exist, and the cheapest to add because the core is fully proven by then.

The reframe to hold in every Bullet conversation: WhatsApp-first is not a detour from the App deadline. It is the first recoverable increment of the exact core the App depends on.

Build vs Buy
Notch builds only where it is the differentiator. Everything commodity is bought - and for each bought capability, the only open question is who supplies the vendor: Notch, bringing a tool we already operate, or Bullet, using one they already run.
- BUILD: AI agents, resolution logic, flow orchestration, guardrails, routing → Notch (this is the product).
- BUY: Authentication / OTP → Bullet (insurers already run one).
- BUY: LLM model → Bullet (self-hosted in their cloud).
- BUY: Website search / scraping (e.g. Firecrawl) → Decide at kickoff.
- BUY: Monitoring / observability tooling → Bullet (likely already in place).

Subscription ownership - our recommendation is Bullet holds it. For every bought tool, Bullet should hold the subscription. AI pricing is unsettled and consumption-based, and it scales with the customer's own success. Notch sells outcomes, not a margin on infrastructure - and should not carry a cost it neither controls nor caps. We confirm this per tool at kickoff.

Working assumptions
- Timeline (the first thing to align on): The brief names Q1 2026 for App go-live, which is unreachable from a mid-2026 kickoff. We read the intent as "the App is the priority channel" and target App go-live in Q1 2027, with WhatsApp live in Q3 2026 to prove the core first. If Q1 2026 reflects a hard external commitment we do not yet understand, the scope needs rethinking - and that is the very first conversation at kickoff.
- Binary-only deployment: Bullet receives compiled binaries and never sees Notch source. Our IP stays protected; their environment stays controlled.
- Self-hosted LLM: The model runs inside Bullet's cloud. The reason Bullet went on-premise is that customer data must not leave - so the model comes to the data.
- Reuse before introduce: Where Bullet already runs a capable tool (auth, monitoring), we integrate with theirs before proposing a new vendor.

-------------------------------------------------------------------------------

# Pre-Requisites — before kickoff

EXECUTIVE SUMMARY
These are the items that must be resolved before the kickoff meeting - not during it. Arriving at kickoff without these means the first weeks will be spent chasing information instead of building. Send this list to Bullet at least one week in advance.

Access requests - submit before kickoff (access has long lead times at regulated companies)
- DevOps pipeline access (Notch DevOps/Infra): Workshop 1 cannot start without it. First gate in the entire project.
- Artifact storage, push rights (Notch DevOps): Needed to hand off binaries to Bullet's pull pipeline.
- Bullet Dev environment access (Notch Developers): Required for real integration phase. Can be deferred until after mocks, but request early.
- Log/observability access (Notch DevOps + Support): Without this, debugging in Bullet's environment is blind.
- LLM verification access (Notch DevOps): Must confirm the self-hosted model is the correct version and correctly configured.
- VPN / network access for developers (Notch Developers): Required to reach Bullet's internal APIs from our pipeline.

Artifacts needed from Bullet (knowledge artifacts development needs to start)
1. Swagger / API specs for all internal APIs: For every internal API the flows touch (policy data, claims, customer info), Notch needs the Swagger spec before building mocks. Request all specs upfront, even for APIs used in later phases.
2. Swagger / API specs for third-party integrations (Glassix, auth provider, etc.): Third-party integrations are Bullet's responsibility to facilitate. Notch needs (a) confirmation the integration is technically possible from Bullet's side, and (b) the API spec for that third-party service. Every integration Bullet facilitates is risk removed from Notch.
3. Existing flow and intent inventory: What does the current WhatsApp flow look like? What does the IVR handle today? What are the top intents by volume? This shapes the V0 scope directly.
4. Network reachability confirmation: Which internal APIs are reachable from the pipeline Notch will build? Confirm before integration starts. A simple yes/no per API is sufficient.
5. Policy and claims data structures: The personal-data flow (Flow C - OTP and data integration) depends on understanding the data model. Even though Flow C lands in V1, Notch needs this early to design the connectors correctly.
6. Security scanning toolchain: Which SAST, DAST, or SCA tools does Bullet run on binaries before deployment? Notch needs to pre-scan with the same toolchain internally before shipping.

Decisions Bullet needs to make before kickoff (should arrive already made)
- Timeline: is Q3 2026 the real target, or is there a hard external commitment? Affects scope, resourcing, feasibility.
- LLM hosting confirmed: self-hosted inside Bullet's cloud? The entire on-prem architecture depends on this.
- Which 3rd-party tools does Bullet already operate? (auth/OTP, monitoring, website search) Use what Bullet has before introducing new tools.
- Named Implementation Engineer on Bullet's side: the DevOps workshops need a Bullet counterpart who owns the deployment pipeline.
- GPU / infra capacity confirmed for self-hosted LLM? If Bullet does not have the hardware, this becomes a procurement blocker.

If these are not ready at kickoff: Week 1 becomes a coordination week instead of a build week, and the timeline slips before a single line of code is written. Send this list to Bullet's counterpart at least one week before the kickoff date.

-------------------------------------------------------------------------------

# Delivery Model — how the two projects run and connect

EXECUTIVE SUMMARY
The DevOps project owns everything about running inside Bullet's environment. The Product project owns the AI flows, built on Notch's own platform. They stay decoupled through most of the timeline and meet at one handoff: a validated binary, shipped through the pipeline DevOps built. Building on our platform - not inside the customer - is also what keeps the work reusable.

Diagram (two projects converging):
- DevOps Project: Workshops + binary pipeline; Dev → Staging → Production; Per-channel connectivity.
- Product Project: Build flows on Notch platform; Mock-first, then real integration; Validated binaries.
- The single convergence point: Validated binary, pulled into Bullet's environment through the DevOps pipeline.

DevOps Project - prove the deployment. Owns the on-premise foundation: the deployment workshops, the binary pipeline, the rollout across Dev, Staging and Production, secure artifact storage, the LLM deployment spec, and all access coordination. Its output is a proven, repeatable path for getting a binary safely into Bullet's environment - and the connectivity each new channel needs to its integrations.

Product Project - build the flows. Builds the AI support flows on Notch's platform, in Notch's codebase, where the IP lives. It develops against mocks first and connects to Bullet's real systems only once the logic is mature. Its output is validated binaries, handed to the DevOps project for deployment.

The internal dev environment - a DevOps deliverable, not a strategy. To let the Product team build without waiting on Bullet at every step, DevOps stands up an internal environment on Notch's side, configured to resemble Bullet's setup, with a pipeline into Bullet's Dev environment. Developers work against mocks built from the Swagger specs Bullet provides. It is a practical tactic that removes a dependency - not an architectural centrepiece.
- Velocity: developers build and test against Bullet-like conditions without waiting on Bullet access each iteration.
- Mock-driven development: mocks built from Bullet's Swagger stand in for real APIs until integration is ready. Swagger quality sets mock quality.
- A clean handoff: when the logic is mature, the same pipeline carries the build from internal environment to Bullet's Dev for real integration.

Where they converge. Through discovery, build, and mock integration, the two projects barely touch. They meet at one point only: when a binary the Product project has validated is handed to the DevOps project and pulled into Bullet's environment through the pipeline. A single, well-defined seam between two otherwise independent efforts - which is exactly why they can move in parallel.

Bonus - genericisation falls out of the architecture. Because the Product project builds on Notch's platform rather than inside Bullet's environment, every capability it produces is reusable by default. The work is never trapped as customer-specific customisation - it flows back into the product core. Concretely: the Data Integration flow's contract-driven connector becomes a reusable primitive, and the next regulated customer inherits it with only their API mapping swapped in. Genericisation is not a phase we add later; it is a consequence of where we build.

-------------------------------------------------------------------------------

# Roadmap — five milestones, twelve months

EXECUTIVE SUMMARY
Five channel go-lives over twelve months. Each milestone follows the same pattern: DevOps connectivity for that channel's integrations, Development building against mocks and then real APIs, and a testing funnel before production. The DevOps foundation runs in the first three months and enables everything after.

Timeline (Jul 2026 → Jun 2027), by channel:
- WhatsApp V0 (go-live Q3 2026 / Sep): Glassix + IVR connectivity; Discovery + mocks; Build routing + FAQ + guardrails; Real API integration; Stage testing + Bullet UAT.
- WhatsApp Full (go-live Q4 2026 / Nov): Auth provider + data APIs; OTP + data integration; Website scraping + hardening; Stage + UAT + pentest & load.
- Mobile App (go-live Q1 2027 / Mar): Mobile SDK + deeplinks; Adapt core flows for mobile; App deeplinks + mobile UX; Stage + UAT + pentest.
- Voice (go-live Q2 2027 / May): Telephony / IVR connectivity; Real-time NLU + voice flows; Stage + UAT.
- Web (go-live Q2 2027 / Jun): Website integration; Web chat widget; Stage + UAT.

Pattern repeated for each channel:
1. DevOps connectivity - establishes connectivity to the channel's third-party and internal systems (Glassix for WhatsApp, mobile SDK for App, telephony for Voice). A gate: integration cannot be validated without the pipeline.
2. Discovery + mocks - Swagger received; API comprehension Q&A; mocks built. Development starts immediately against mocks, no Bullet access needed.
3. Build - flows built on Notch's platform against the internal environment; real API integration replaces mocks once logic is mature. The longest phase.
4. Testing funnel - Notch Stage testing → Bullet UAT → pentest and load (required from WhatsApp Full onward) → production validation. PVT is a per-channel decision.
5. Go-live - production launch. Glassix fallback active for the first week regardless of containment rate. Both Notch and Bullet on standby for the first 48 hours.

-------------------------------------------------------------------------------

# Resources — who we need on both sides

EXECUTIVE SUMMARY
The two-project structure only delivers in parallel if both are staffed in parallel. Under-staffing either side collapses the parallel tracks into a sequence and extends every milestone.

Notch team (a focused team of five to six, spanning both projects)
- Implementation Manager (Both): Single point of accountability. Owns the dependency tracker, runs the external sync, escalates blockers, manages scope. Load: Full.
- DevOps / Infrastructure Engineer (DevOps): Owns the on-prem foundation: workshops, binary pipeline, environment rollout, artifact storage, LLM deployment spec, access coordination. Load: Full.
- Platform Developers x2 (Product): Build the flows on Notch's platform. Mock-first, then real integration. The core build capacity. Load: Full.
- AI / Prompt Engineer (Product): Agent behaviour, guardrails, LLM integration, response tuning against Bullet's knowledge base and compliance rules. Load: Full → tapering.
- QA / Test Engineer (Both): Owns the testing funnel: automated suites, Stage validation, coordinating Bullet UAT, regression across versions. Load: Ramps at V0.

Bullet team (Bullet's involvement is the project's critical path)
- Implementation Engineer: Bullet's counterpart to our IM. Owns the deployment pipeline on their side, coordinates access, the single escalation point. Weekly + on-demand.
- DevOps / Cloud Engineer: Provisions the three environments, grants pipeline and network access, stands up GPU for the self-hosted LLM. Heavy at start, then as-needed.
- API / Backend owner(s): Provide Swagger specs, join the API comprehension Q&A, confirm reachability. They hold the semantics our mocks depend on. Concentrated in discovery.
- Security / Compliance lead: Owns the scanning toolchain, the pentest decision, and the production-access model. Gatekeeper for anything touching customer data. Decision points + reviews.
- Product / CS stakeholder: Defines the top intents that scope V0, runs UAT, owns the tone and correctness of AI responses. Scoping + UAT + go-live.

Services and infrastructure Bullet provides
- Cloud infrastructure - 3 environments: Dev, Staging, Production stood up on Bullet's cloud, provisioned in sequence.
- GPU capacity for self-hosted LLM: Hardware to run the model inside their environment. Procurement lead time is a risk if not already available.
- Secure artifact storage: The pull-based handoff zone where Notch uploads binaries and Bullet's pipeline collects them.
- Security scanning pipeline: SAST / DAST / SCA tooling run on every binary before deployment.
- Third-party subscriptions: Auth/OTP provider, LLM licence, website search. Recommendation: Bullet holds all subscriptions.

The resourcing trade-off, stated plainly. This plan assumes the team above runs both projects concurrently. If Notch staffing is constrained, protect the DevOps project and the internal dev environment first - they unblock everything downstream. If Bullet staffing is constrained, the API owners and Implementation Engineer are the bottleneck to protect. Cutting either side does not shrink the work; it only serialises it and moves every go-live date to the right.

-------------------------------------------------------------------------------

# DevOps Project — prove the deployment before building on it

EXECUTIVE SUMMARY
The on-premise foundation is a gate, not a warm-up. Two workshops isolate one variable at a time, the binary handoff is pull-based so Notch never holds push access, and the LLM runs self-hosted inside Bullet's cloud. If this project does not succeed, nothing the Product project builds can ship - so it goes first.

Every other phase of this engagement assumes a working deployment path into Bullet's environment. That assumption is the single biggest unknown on day one, so we test it deliberately and early - and we design the test so that when something fails, we know exactly which variable failed.

Two workshops, one variable each
- Workshop 1 - Hello World: A minimal binary deploys, runs, and reports back. Proves the plumbing - pipeline, permissions, networking, observability - and deliberately proves nothing about the product. If it fails, the problem is infrastructure or access, never our code. Exit criterion: a log line from the deployed binary reaches Notch's Monitor Service.
- Workshop 2 - Base Binary: The real core platform deploys and runs in Bullet's environment. Because the plumbing is already proven, any failure here is binary- or config-specific - a focused debugging problem. Exit criterion: the core platform reports healthy in the Dev environment.

Environment rollout - Dev, then Staging, then Production (stood up in sequence, not parallel). We prove the full deployment in Dev, then roll the same validated setup to Staging, then to Production. Each environment inherits a proven configuration from the one before it.
- Development: Active integration and the first real deployment target. Where the workshops land. Stood up first (months 1-2).
- Staging: Pre-production validation. Where the testing funnel runs against production-like conditions. Stood up second (month 2-3).
- Production: Live customer traffic. Built from the proven Staging recipe, stood up before the first go-live needs it. Stood up third (month 3).

Pull-based deployment. Notch packages a binary and uploads it to a secure intermediate artifact store. Bullet's pipeline pulls from there, runs its security scans, and deploys. Notch never holds push access into Bullet's environment. Flow: Notch — push → Artifact store ← pull — Bullet pipeline — scan + deploy → Environments. The only arrow reaching Bullet's side is the pull they initiate; Notch never pushes in. This is a smaller attack surface and leaves Bullet in full control - the only model an insurer's security team will sign off on.

Self-hosted LLM. Bullet went on-premise precisely so customer data never leaves their environment, so the model comes to the data: the LLM runs inside their cloud. Two Notch responsibilities: (1) an LLM deployment spec - the exact model, version, GPU requirements, and configuration Bullet must install; (2) verification access - the ability to confirm the installed model is the right one, correctly configured (a new access requirement).

Project work items: Workshop 1 (pipeline, access, observability); Workshop 2 (core platform in Bullet's cloud); Environment rollout (Dev → Staging → Production); LLM deployment spec; LLM verification access; Secure artifact storage; Per-channel connectivity (Glassix, telephony, mobile SDK); Deploy + support operations.

Production access - the sensitive ask. A vendor holding network access to an insurer's production is a regulatory red flag, so we request it with controls built in: a dedicated test user only, time-boxed, fully audited, on a break-glass model. If refused outright, the fallback is Staging with production-like data, or reproduction-as-a-service performed by Bullet on our behalf.

-------------------------------------------------------------------------------

# Product Project — discover, mock, build, integrate

EXECUTIVE SUMMARY
Almost everything we don't know is Bullet-specific. So we discover what Bullet has, mock it from their Swagger, build the full flow against the mocks, and integrate for real only at the end. Mock-first means developers are never blocked waiting on Bullet access - only the final integration step needs their network.

Known versus unknown
- Known - our platform: Notch's core capabilities, the nine required features as reusable primitives, our flow patterns, the deployment model, our LLM integration approach, and the mock-first method itself. None of this waits on Bullet.
- Unknown - Bullet-specific: The existing WhatsApp flows and intents, what the current IVR handles, which internal APIs exist and their contracts, whether they're reachable from our pipeline, the policy and claim data structures, and the real traffic mix. All of this is a dependency.

The four flows (vertical end-to-end slices, used consistently across the plan)
- Flow A - Routing & Handoff: Replace IVR, Glassix integration. The skeleton every other flow runs on. Present in every version.
- Flow B - Knowledge & Answers: FAQ and website scraping. The first real customer value, lowest-risk content (no personal data). Website content pulled by a bought tool (e.g. Firecrawl) and fed to the LLM - not something Notch builds.
- Flow C - Identity & Personal Data: OTP authentication and data integration. The complex core: once identity is verified, the agent answers using the customer's own policy and claim data. Follows once B is stable.
- Flow D - Safety & Compliance: Guardrails and prompt-injection defence. Not standalone but a gate every flow passes through. A baseline is present from the first version.
(App deeplinks and Voice routing are intentionally out of WhatsApp scope - they belong to their own channels.)

Build sequence (same for each channel; the expensive access-dependent step is deliberately last)
1. Receive Swagger per API - a pre-kickoff dependency, for internal and third-party APIs alike. Swagger quality sets the ceiling on mock quality.
2. API comprehension - study the specs (AI-assisted) and run a Q&A with Bullet's engineers. Swagger gives syntax; the Q&A gives semantics - edge cases, business rules, what an empty field means.
3. Build mocks - accurate stand-ins from the understood contracts. The mocks are a deliverable in their own right.
4. Build on the platform - flows built on Notch's platform against the internal dev environment. No Bullet network required, so this starts immediately and runs the longest.
5. Real integration - swap mocks for Bullet's actual internal APIs, inside their Dev environment. The one step that needs developer access; by now the logic is already mature.
6. Validation - end-to-end through the testing funnel.

Why mock-first is the whole game. Everything buildable without Bullet is built against mocks - fast, parallel, independent of access delays. Only the final integration needs the expensive network access, and it arrives after the logic is already proven. The discipline turns Bullet's access timeline from a blocker on the whole build into a constraint on its last mile.

Supporting components (across every flow): Testing Service (automated test suites per flow); Monitor Service (observability - critical under binary deployment); BI Service (analytics feeding success metrics).

-------------------------------------------------------------------------------

# V0 & DOD — start small, go live fast

EXECUTIVE SUMMARY
Going live on WhatsApp does not mean replacing everything on WhatsApp. V0 is the smallest slice that delivers real value with a full safety net - Flow A for routing, Flow B for knowledge, and a Flow D guardrail baseline. Identity and personal data (Flow C) deliberately wait for V1. How much to switch on, and when, is Bullet's decision.

The core message: we don't have to replace it all. WhatsApp has a human fallback, so we can switch on a single slice, prove it on real traffic, and expand from there. Each version is a deliberate, bounded increment - not a big-bang cutover.

What V0 includes:
- Flow A - Routing & Handoff. IVR replacement + Glassix fallback. The skeleton; always on.
- Flow B - Knowledge & Answers. FAQ on agreed top intents. No personal data, lowest risk.
- Flow D - guardrail baseline. Minimum compliance gate; insurance answers require it.

Held for later versions:
- Flow C - OTP + personal data answers → V1, once Flow B is stable in production.
- Full knowledge base and prompt-injection hardening → V2.
- Website scraping at scale → V2.
- App, Voice, Web channels → their own rollouts after WhatsApp.

The go-live decision is Bullet's to make. V0 is, at minimum, Flow A plus one content flow. Our recommendation is Flow A + Flow B with a Flow D baseline: lowest risk, fastest to validate, immediate value. Bullet decides the trigger to switch it on and how fast to ramp traffic behind it.

Definition of Done - the V0 flows
Flow B - FAQ (Knowledge & Answers):
- Answers the agreed top-N intents on WhatsApp → Validated against Bullet's knowledge base.
- Out-of-scope questions route to Glassix, never guessed → Zero hallucinated answers in the test set.
- Passes the automated test suite → Testing Service green.
- Fully observable in production → Logs and metrics flowing to Monitor Service.
Flow A - Glassix handoff (Routing & Handoff):
- Any AI failure or low-confidence turn hands off cleanly → No dead ends across all tested scenarios.
- Full conversation context passes to the human agent → Agent sees history, no "start over".
- Handoff rate is tracked as a live metric → BI dashboard in place.
Flow C - OTP authentication (DOD for when V1 lands):
- User verifies identity via OTP inside the WhatsApp flow → End-to-end test passes.
- Failed or expired OTP is handled gracefully → A retry path exists; no dead end.
- No personal data is exposed before verification → Security review sign-off.
- Every verification event is audit-logged → Logged and queryable.

Success metrics
- Business / Containment rate: % of conversations resolved end-to-end without a human. The headline. Notch benchmark: 70-73%.
- Business / Handoff quality: % of handoffs that arrive with context preserved.
- Technical / Answer accuracy: Validated correctness on the agreed top intents.
- Technical / Availability / latency: Uptime and response time within agreed targets.
- Safety / Guardrail pass rate: % of responses passing compliance checks. Zero tolerance on personal or financial data.

How we prove it works. Staged validation, from safest to riskiest environment: internal dev environment on mocks → Staging on real APIs with test users → limited Production behind the Glassix safety net → containment measured on real traffic before we widen intent coverage. The proof is a containment number on live traffic, not a demo.

Versioning - the increment grows with confidence
- V0: Flow A + Flow B + Flow D baseline. Smallest live increment, full safety net, real value.
- V1: Add Flow C - OTP + personal data. Identity layer added once knowledge is stable.
- V2: Full KB, hardening, website scraping - WhatsApp complete. Confidence high; broaden aggressively.
- Next channels: App, then Voice, then Web. Proven core - each channel reuses it in larger steps.

-------------------------------------------------------------------------------

# Testing Strategy — the six-phase funnel

EXECUTIVE SUMMARY
Each channel goes through the same six-phase testing funnel before go-live. The funnel is ordered by cost of failure - we catch issues in Notch's staging before Bullet's UAT, and in UAT before production. PVT (friends and family) is an open question per channel.

The six phases (every channel release passes through these in order):
1. Notch Stage testing - Notch's internal QA on the staging environment, against real Bullet APIs (not mocks) in a non-production environment. Covers functional correctness per DOD, regression, guardrail/compliance checks, observability, automated suite green. Exit: all DOD criteria pass, no critical/high open issues.
2. Bullet UAT - Bullet's own team validates flows against their expectations; first direct interaction by Bullet CS/product. Notch provides a test plan; Bullet executes with real scenarios. Covers business logic, edge cases from real traffic, tone/phrasing, guardrails on insurance scenarios. Exit: Bullet sign-off from a named stakeholder; issues triaged.
3. Pentest and load testing - security and performance validation. Pentest by a third party (or Bullet security). Load test at 2x expected peak; latency within SLA. Required before production for channels handling personal data (WhatsApp Full onward). Open question: who commissions the pentest - Notch or Bullet? Existing security vendor?
4. Production environment validation - deploy to production and validate with synthetic/test-user traffic before real customers. Proves prod behaves identically to staging; catches config drift. Covers clean deploy, monitoring live, integrations reachable, rollback verified.
5. PVT - friends and family - a limited soft-launch to a controlled group of real users before full go-live. Surfaces issues that only appear with real human behavior. Open question: is PVT feasible per channel? WhatsApp is straightforward; App depends on a limited build (TestFlight/internal track); Voice may require routing a subset of calls. A named decision per channel at kickoff.
6. Go-live - full production launch. Notch and Bullet on standby for the first 48-72 hours. Glassix fallback active for the first week regardless of containment. Exit: containment at or above agreed threshold after 48 hours; if below, fall back to human agents while root cause is investigated.

Phase requirements per channel:
- WhatsApp V0: Stage ✓, UAT ✓, Pentest+load Light, Prod validation ✓, PVT Recommended, Go-live ✓.
- WhatsApp Full: Stage ✓, UAT ✓, Pentest+load ✓, Prod validation ✓, PVT Recommended, Go-live ✓.
- App: Stage ✓, UAT ✓, Pentest+load ✓, Prod validation ✓, PVT Open question, Go-live ✓.
- Voice: Stage ✓, UAT ✓, Pentest+load ✓, Prod validation ✓, PVT Open question, Go-live ✓.
- Web: Stage ✓, UAT ✓, Pentest+load Light, Prod validation ✓, PVT Optional, Go-live ✓.

Who owns what:
- Notch Stage testing → Lead: Notch QA. Bullet involvement: none (Notch internal).
- Bullet UAT → Lead: Bullet product / CS lead. Bullet executes test plan, signs off.
- Pentest + load → Lead: TBD (third party or Bullet security). Bullet coordinates access, reviews findings.
- Production validation → Lead: Notch DevOps + Bullet Impl. Engineer. Bullet: deployment approval, monitoring setup.
- PVT → Lead: Bullet (owns the customer relationship). Bullet selects participants, monitors.
- Go-live → Lead: Joint (Notch IM + Bullet Impl. Engineer). Both on standby first 48h.

-------------------------------------------------------------------------------

# Risks & Dependencies — what we own, what we need

EXECUTIVE SUMMARY
Dependencies are things Bullet needs to deliver - they are not risks until a deadline is missed. Risks are uncertainties that threaten the project regardless of Bullet's cooperation. Both are tracked separately and managed differently.

Risks - Notch's exposure (we own mitigation regardless of Bullet)
1. Resource contention collapses the parallel tracks. The plan assumes the DevOps and Product projects run concurrently; if either is understaffed, they serialise and every milestone slides right. Mitigation: explicit resourcing commitment before kickoff; if constrained, the internal dev environment gets the dedicated resource first.
2. Binary fails Bullet's security scanning. If we don't know their toolchain, binaries may fail on first submission. Mitigation: obtain the toolchain list as a pre-requisite; install the same tools internally and pre-scan before every handoff.
3. Production support access refused (regulatory). A vendor with VPN access to an insurer's production is a red flag; may not be grantable. Mitigation: request with controls (test user, time-boxed, audited, break-glass); fallback to staging with production-like data, or Bullet reproduces issues for us.
4. Third-party tooling ownership unresolved at go-live. If subscription ownership (LLM, auth, search) is undecided, consumption costs land wrong and become a billing dispute. Mitigation: lock build/buy boundary and subscription owner per tool at kickoff; recommendation Bullet owns all subscriptions.
5. Containment rate below target at launch. The whole value promise rests on containment; if the AI underperforms on insurance traffic, the headline metric misses. Mitigation: staged rollout behind Glassix; tune against Bullet's KB during UAT; measure containment on real traffic before widening, so misses surface early and recoverably.

Dependencies - what we need from Bullet (each has a due date; a slip elevates it to a tracked risk)
- DevOps pipeline access — needed before Week 1 — Workshop 1 cannot start; first gate — CRITICAL.
- Swagger specs, all internal APIs — before Week 2 — mock-first dev blocked; developers idle — CRITICAL.
- Network reachability confirmation per API — before Week 3 — integration blocked; discovered late = rework — CRITICAL.
- Existing flow and intent inventory — before Week 2 — cannot define V0 scope — HIGH.
- Swagger specs, 3rd-party integrations (Glassix, auth) — before Week 3 — Flow A (Glassix) and Flow C (auth) blocked — HIGH.
- Named Bullet Implementation Engineer — at kickoff — no single coordination point; access requests have no owner — HIGH.
- Security toolchain list — before Week 1 — cannot pre-scan binaries; first handoff may fail — HIGH.
- GPU / infra capacity confirmed for LLM — before Week 2 — LLM deployment spec cannot be finalised; procurement blocker — MEDIUM.
- Policy and claims data structures — before Week 4 — Flow C connector design blocked — MEDIUM.
- Developer access to Bullet dev environment — before Week 6 — real integration blocked (only if mock dev is done) — MEDIUM.

Escalation rule. Any dependency not delivered by its due date is immediately raised in the weekly external sync as a tracked risk with a revised date and a named Bullet owner. Dependencies with no owner at kickoff default to the Bullet Implementation Engineer.

-------------------------------------------------------------------------------

# Kickoff — agenda and the first three weeks

EXECUTIVE SUMMARY
The kickoff is a decision-forcing meeting, not a status update. We arrive with the pre-requisites already requested, align on timeline and the two-project structure, lock the decisions that gate the build, and leave with every open question converted into an owned action with a date.

Agenda
1. Strategy and sequencing - the two-project structure, and WhatsApp-first as the recoverable first increment of the App.
2. Timeline alignment - confirm the Q1 2027 App target, or surface a hard commitment we need to design around.
3. The deployment model - binary-only, pull-based, the two workshops, the environment rollout.
4. Critical decisions - work through the list and record an owner for each.
5. Access and discovery - walk the pre-requisites list, sign off what is approved, escalate what is not.
6. First three weeks - confirm action items, owners, and dates before anyone leaves the room.

Key questions to resolve at the table (the judgement questions that need Bullet's people in the room)
- Q1. Third-party integrations - who owns each one? For every bought capability (auth/OTP, website search, LLM), does Bullet already operate it or does Notch bring the vendor? Each integration Bullet owns is scope/risk removed from Notch.
- Q2. Are the internal APIs reachable from our pipeline? If not reachable externally, mock-first is mandatory and developer access to Bullet's Dev environment becomes the gating dependency.
- Q3. What do the policy and claim data structures look like? Drives the Flow C connector design; we need enough to design against, even though Flow C lands in V1.
- Q4. What are the constraints on production access? Especially regulatory; determines whether our test-user, time-boxed, audited model is acceptable.
- Q5. Is the GPU capacity for the self-hosted LLM already in place? If hardware needs procurement, that lead time lands on the critical path.

Critical decisions to lock
- Timeline: confirm App go-live at Q1 2027 with WhatsApp in Q3 2026, or surface the hard commitment that forces a rescope.
- Build / buy boundary and vendors: ratify what Notch builds vs buys, and per bought tool who supplies the vendor.
- Subscription ownership: confirm Bullet holds third-party subscriptions, given volatile consumption-based AI pricing.
- Production access model: agree whether time-boxed, audited, test-user access is acceptable - and the fallback if not.
- Access list sign-off: which pre-requisite asks are approved, which need escalation, and who owns each escalation.

First three weeks
- Week 1 — Notch: confirm access list and discovery asks are in flight, stand up the internal dev environment, begin Workshop 1 prep, schedule the API comprehension Q&A. Bullet: begin provisioning access, assemble the flow and intent inventory, identify which third-party tools they already run.
- Week 2 — Notch: run Workshop 1 (Hello World), start Flow A on the internal dev environment, receive the first Swagger specs. Bullet: provide Swagger for priority APIs, confirm the security scanning toolchain.
- Week 3 — Notch: prep Workshop 2, run the API comprehension session, build the first mocks, continue Flow A and B against mocks. Bullet: join the Q&A with their API owners, confirm per-API reachability.

How we coordinate from here. One weekly sync between the Notch IM and Bullet's Implementation Engineer, backed by a shared tracker for access and discovery items - every line with an owner and a due date. Asynchronous updates between syncs, and an escalation path agreed at kickoff, not improvised later.

-------------------------------------------------------------------------------

# Process — how we run delivery

EXECUTIVE SUMMARY
Releases ship as named versions through the pull-based pipeline, on the V0 → V1 → V2 cadence - not ad hoc. Each project runs its own weekly internal sync, and the IM consolidates both into a single weekly meeting with Bullet, so Bullet receives one coherent signal rather than two raw feeds.

Release cadence. Every release is a named version shipped as a binary through the pull-based pipeline. Bullet always knows what is coming and when, tied to a specific version rather than a surprise drop. Predictability here is part of the trust we are building with a regulated customer.

Weekly cadence:
- DevOps project sync (weekly, internal): environments, access status, pipeline health, security-scan results.
- Product project sync (weekly, internal): flow progress, mock and integration status, blockers.
- The two stay separate on purpose - they move on different rhythms and fail for different reasons; merging the syncs dilutes both.
- IM consolidates both → External sync (weekly) with Bullet's Implementation Engineer: combined status, decisions needed, blockers, what ships next. Bullet sees one coherent picture, and the IM is the single point of accountability for escalation.

-------------------------------------------------------------------------------

# Launch & Beyond — Phase 2 readiness (Day-2 questions)

EXECUTIVE SUMMARY
These are the questions to resolve before and immediately after go-live - covering support operations, deployment upgrades, and security posture on Bullet's side. Answering them early prevents the most common post-launch surprises.

Support Operations
1. Who is the first responder? When a Bullet customer reports an issue, who picks it up - Bullet CS, their IT, or Notch? Define the escalation path and response SLAs before go-live.
2. What does Notch have visibility into on production? Monitor Service runs inside Bullet's environment - what can Notch see remotely (logs, alerts, dashboards) vs. what requires Bullet to relay? Define the observability contract now.
3. How are incidents reproduced? Notch developers can't access Bullet's live environment - reproduce via anonymized logs, test-user replays, or a staging environment mirroring production traffic?
4. What is the handoff SLA from Glassix to a human agent? The Glassix fallback is the V0 safety net - agreed SLA on pickup speed? Who monitors it if it degrades?
5. How does Bullet handle a full AI outage? If the Notch platform is unreachable inside Bullet's environment, is there a manual fallback flow or does the channel go dark? Define and test before go-live.

Go-Live and Upgrades (every upgrade is a pull-based handoff, not a push)
1. What is the upgrade approval process at Bullet? Each new binary must pass security scanning - who approves a deployment, and what is the typical turnaround? Directly affects how fast we can ship fixes.
2. Who coordinates the binary handoff on each release? Is there a named Bullet counterpart who owns the deployment pipeline on their side?
3. How do we handle a bad binary in production? Rollback procedure? Can Bullet revert quickly, and who initiates? Notch provides a rollback-ready artifact with every release.
4. What is the cadence for infrastructure upgrades (LLM model updates, environment patches)? Who initiates - Notch (new spec) or Bullet (own schedule)? How does Notch verify a new model version is compatible?
5. How are non-production environments kept in sync with production? Staging/dev drift after go-live - who keeps them aligned? Matters for accurate testing of future releases.

Security - Bullet's Side (Bullet owns the security perimeter)
1. What security scanning tools does Bullet run on binaries? Notch needs to pre-scan with the same toolchain (SAST/DAST/SCA). A pre-kickoff ask.
2. What data classification applies to conversation data? WhatsApp conversations may contain PII, policy numbers, claim details - retention limits, anonymization, audit-log obligations?
3. How is the OTP authentication provider secured? Who operates it (Bullet or third party)? Controls around OTP issuance, rate limiting, audit trails?
4. What is the access review process for Notch developer access to Bullet's dev environment? Who reviews/renews time-boxed access? What happens to in-progress work if access is revoked mid-sprint?
5. Is there a penetration testing or audit requirement before go-live? Some insurers require a third-party pen test or compliance audit before any AI touches customer data - who commissions it, how long, does it block the V0 go-live date?

Recommended action. Send this list to Bullet's Implementation Engineer and their IT/Security lead before the kickoff meeting. Several of these have long lead times if escalation is needed.
