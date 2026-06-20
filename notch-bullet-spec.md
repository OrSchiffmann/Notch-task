# notch × Bullet — Project Kickoff Plan
## Build spec for an interactive presentation site

> **Purpose of this document.** This is the single source of truth for building an interactive, multi-section website that presents a TPM home-assignment: the project-management foundation for notch's kickoff with its insurance customer, Bullet. Hand this whole file to Claude Code and build the site from it. All content below is final copy — use it as written, refine wording only for fit.

---

## 0. Build instructions for Claude Code

**What to build:** A single-page application with an external tab/nav bar that switches between 8 sections (views). Each tab is a distinct view; no long scroll across all content. Smooth client-side transitions between tabs.

**Stack:** React + Vite, deploy-ready for Vercel. Tailwind for styling. No backend — all content is static. Keep it a single deployable app.

**Navigation model:** Persistent top nav (or left rail on desktop, collapsing to top on mobile) with the 8 section names. Active section highlighted. URL hash routing (e.g. `#/roadmap`) so sections are linkable and the browser back button works.

**Must be:** responsive to mobile, keyboard-accessible (visible focus states), reduced-motion respected.

**Tone & length — critical.** The site must be concise and scannable, not verbose. This spec is detailed because it's a spec; the rendered site should be tight. Rules:
- **Every tab opens with an executive summary** — 2–3 sentences maximum, set in a visually distinct block (e.g. a slightly lighter surface card or a left-bordered callout). The summary tells the evaluator what this section concludes and why, so they can decide whether to read deeper. Think of it as the "if you read nothing else" block.
- Body content uses short paragraphs (2–3 sentences), tables, and compact diagrams — not walls of text.
- No filler, no repetition across sections. If something was said in Overview, don't restate it in Risks.
- Bullet points are fine where they serve scannability, but keep each to one line where possible.

**Executive summaries per tab (use these as starting points, refine for fit):**
1. **Overview:** "Two parallel tracks — DevOps and Development — share a single-tenant bridge. WhatsApp goes first because it's the only channel with a built-in fallback. We build where we add value; everything else is a bought tool on Bullet's subscription."
2. **Roadmap:** "Thirteen weeks from kickoff to App go-live, three tracks running concurrently. The MVP window closes at week 7 with WhatsApp Phase 1 live."
3. **Dual-Track:** "This is two projects, not one. DevOps proves the deployment; Development builds on our platform. The single-tenant environment bridges them — and makes every feature generic-by-design."
4. **On-Prem:** "Two workshops, each isolating one variable. Pull-based binary handoff — we never get push access. The LLM runs self-hosted at Bullet; we provide the spec."
5. **Development:** "Discover what Bullet has, mock it, build against the mocks, then integrate for real. Mock-first means developers aren't blocked on Bullet access."
6. **MVP & DOD:** "Phase 1 is FAQ + OTP + Glassix on WhatsApp — one flow, maximum caution, full safety net. Success = containment rate. Subsequent versions grow the batch size as confidence builds."
7. **Risks:** "Six risks, led by access delays and undocumented APIs. The single-tenant mitigates most of them by decoupling development from Bullet dependencies."
8. **Kickoff:** "Align on timeline, lock the build/buy split and subscription ownership, submit access requests, and leave with the discovery artifacts requested."

**Diagrams:** Several sections need diagrams (dual-track, gantt, flows). Build these as clean inline SVG or styled HTML/CSS — not image files — so they're crisp and themeable. Specs for each are in the relevant section below.

---

## 1. Design direction

**Concept.** This is a TPM deliverable for an AI company building agentic customer-service systems. The site should feel like an internal engineering/product tool — confident, technical, calm — not like a white consulting deck. The content leads; the design frames it with discipline.

**Palette (dark, technical, one accent):**
- `--bg`: #0E1116 (near-black charcoal, primary background)
- `--surface`: #161B22 (raised cards/panels)
- `--surface-2`: #1C232D (nested elements, table rows)
- `--border`: #2A323D (hairline borders)
- `--text`: #E6EDF3 (primary text)
- `--text-dim`: #8B949E (secondary/captions)
- `--accent`: #2DD4BF (teal — the single signature accent; used for active states, key numbers, flow highlights)
- `--accent-soft`: rgba(45,212,191,0.12) (accent backgrounds/fills)
- Reserve a muted amber `--warn`: #D9A441 strictly for risk/open-question markers, nothing decorative.

**Typography:**
- Display/headings: a precise grotesque — "Space Grotesk" or "Geist" — used at large sizes for section titles, with tight tracking.
- Body: "Inter" — clean, legible at small sizes.
- Mono/utility: "JetBrains Mono" or "Geist Mono" for labels, eyebrows, metrics, table headers, milestone codes. The mono utility face is part of the identity — use it for all small caps-y labels and data.

**Signature element.** The recurring "dual-track" motif: wherever sequencing appears, render it as two (or three) parallel horizontal lanes with a teal connection node where they meet. This visual — parallel lanes meeting at a bridge — is the thing the site is remembered by, and it mirrors the core strategic idea (DevOps track ∥ Development track, joined by the single-tenant bridge).

**Restraint.** One accent. No gradients except possibly one subtle radial behind the hero. Generous whitespace. Hairline borders, not heavy boxes. Motion only on: tab transitions (subtle fade/slide), and a single scroll/load reveal on the hero. Nothing else animates.

**Hero (Overview section opening).** Not a big-number template. Open with a one-line thesis statement set large in the display face:
> "Two tracks, one kickoff: de-risk the deployment before we build, build on our platform before we integrate."
Below it, a compact strip: customer (Bullet), first channel (WhatsApp), target (App go-live), model (on-prem, binary-only). Set these as mono labels with values.

---

## 2. Section content

The 8 sections (tabs), in order. Each `###` below is one tab.

---

### Tab 0 — Cover (Why This Matters)

**Eyebrow:** NOTCH × BULLET
**Title:** Why this project matters

**Keep this tab very short — shorter than every other tab.** This is a framing page, not a content page. Bullet points, not paragraphs. No table needed.

**Executive summary (2 sentences max):**
Bullet is notch's first deployment in a new, regulated vertical — and a notch investor. This project is as much a strategic proof point as a delivery project.

**Customer snapshot (compact, 3-4 lines):**
- Bullet — large US insurance carrier, notch's first on-prem deployment in insurance.
- Backed by Lightspeed, Jibe, Munich Re Ventures, and **Bullet itself** — Bullet is both customer and investor.
- Existing notch benchmark: 70–73% automation, ~50% CS headcount reduction, 200% ROI within a year.

**Why this matters strategically to notch (short bullets, not prose):**
- **Proves the on-prem model.** Binary-only, pull-based deployment is exactly what regulated industries (banking, healthcare, government) require. Getting this right here unlocks every similar customer after.
- **First large US enterprise customer.** A proof point for US market expansion, not just one deal.
- **New vertical, reusable playbook.** Insurance-specific learnings (compliance, guardrails, data sensitivity) become a template — ties directly to the genericization principle (single-tenant bridge, Tab 3).
- **Bullet is also an investor.** Delivery success here is a signal to current and future investors, not only a customer outcome.

**What winning looks like (one line):** WhatsApp live fast and safely, App live on target, and an architecture proven reusable for the next regulated customer.

---

### Tab 1 — Overview & Strategy

[... existing Overview content unchanged, now Tab 1 instead of Tab 0 ...]

**Eyebrow:** STRATEGY
**Title:** Two tracks, one kickoff

**Lead paragraph:**
notch is standing up its first insurance deployment with Bullet. The work splits into two projects that run in parallel because they need different people and carry different risks: a **DevOps / Infrastructure track** that proves the on-prem deployment, and a **Development track** that builds the AI support flows on notch's own platform. They meet at one place — a single-tenant environment that mirrors Bullet — and converge again at deployment.

**The sequencing thesis (channels):**
We go live channel by channel, in this order, and each choice is deliberate:

1. **WhatsApp — first (MVP).** Bullet already operates this channel, it's the simplest technically (asynchronous text, no real-time voice NLU), and critically it's the **only channel with a built-in fallback**: if the AI fails mid-conversation, Glassix hands off to a human agent. We want our failure modes discovered where they're recoverable.
2. **Mobile App — second (Bullet's stated 2026 priority).** Highest customer value. WhatsApp is treated as **Phase 0 of the App**: the core capabilities (FAQ, OTP, data integration, guardrails) proven on WhatsApp are exactly what the App reuses. App has no graceful fallback, so nothing unproven should land there first.
3. **Voice — third.** Reuses the proven core, adds real-time/NLU complexity.
4. **Website — fourth (Medium priority).** Lowest marginal value once the above exist.

**Reframe to state explicitly to Bullet:** WhatsApp first is not a detour from the App deadline — it is the first, recoverable increment of the same core the App depends on.

**Working assumptions (flag these openly):**
- **Build where we add value, buy where we don't.** notch builds only its core differentiator — the AI agents, the flows, orchestration, guardrails, the platform. For everything commodity, we use existing market tools rather than rebuilding. Authentication/OTP is the clearest case: there's no reason for notch to build an auth system when mature solutions exist. The same applies to website search/scraping (a tool like Firecrawl) and the LLM Model itself. For each bought tool, one open question remains: **who brings the vendor — notch (a tool we already work with) or Bullet (one they already have)?**
- **Subscription ownership → recommend Bullet owns.** For every third-party tool (LLM, auth provider, website-search tool), our recommendation is that **Bullet holds the subscription**. AI pricing is still unsettled and consumption-based; notch should not hedge itself against costs it doesn't control and that grow with the customer's success. We sell value (the platform and agents), not a markup on infrastructure. This keeps notch's pricing clean and insulated from third-party volatility. Decide per tool at kickoff.
- **Timeline interpretation.** The brief states a Q1 2026 App go-live. Working back from a **July 1, 2026 kickoff**, that date has passed, so we read "Q1 2026" as *"one quarter from kickoff"* → target **end of Q3 2026 (end of September)**. If Q1 2026 is a hard external commitment, the plan needs rescoping — flagged as the first open question for kickoff.
- **Deployment model.** Bullet receives **binaries only**, never notch source — IP stays protected. notch needs access to Bullet's systems/data to run the support model.
- **LLM.** Bullet went on-prem specifically so customer data does not leave their environment, so we assume a **self-hosted LLM Model** inside Bullet's cloud.

**Diagram:** the dual-track + single-tenant bridge (see Tab 3 for the detailed version; on this tab show a simplified two-lane version as the hero motif).

---

### Tab 2 — Roadmap & Timeline

**Eyebrow:** ROADMAP
**Title:** Thirteen weeks, three parallel tracks

**Lead:**
From a July 1 kickoff to end-of-September go-live. Three tracks run concurrently — this is only achievable with the mid-size team (see Resources); with fewer people the tracks collapse into sequence and the timeline extends.

**Gantt diagram — build as a styled HTML/CSS grid, 13 week columns.** This is a primary deliverable — make it detailed and readable. Left column = task label, grouped under track headers. Each track is broken into phases (not just one bar). Bars positioned by week. A separate MVP-window row spans the whole project. Four milestone flags along the bottom.

**Critical detail — Track 1 is phased per environment.** The DevOps track does NOT end after two workshops. Because the architecture is 3-layer (Dev / Staging / Production), each environment is stood up as its own phase, in sequence — you prove Dev first, then roll the same proven setup to Staging, then Production. Show this as distinct bars, shading from solid to lighter blue across environments.

*Track 1 — DevOps / Infra (blue) — per-environment rollout:*
- WS1 hello world · Dev: weeks 1–2 (plumbing)
- WS2 base binary · Dev: weeks 3–4 (core + LLM)
- Stand up Staging: weeks 5–6
- Stand up Production: weeks 8–9
- Deploy + support ops (ongoing): weeks 5–13

*Track 3 — Single-tenant bridge (purple):*
- Build Bullet-like env: weeks 1–3
- Maintain + sync (test bed): weeks 4–13

*Track 2 — Development (teal), App build in deeper purple) — by flow/phase:*
- Discovery + mocks (swagger + Q&A): weeks 1–3
- Flow A routing (Glassix + IVR replace): weeks 2–5
- Flow B + D — Phase 1 (FAQ + guardrails): weeks 3–6
- Flow C — Phase 2 (OTP + data): weeks 6–9
- App build (reuse core): weeks 9–13

*MVP window (amber, dashed outline, separate row):* spans weeks 1–7 — "kickoff → WhatsApp Phase 1 live." This row exists to answer "what's the MVP and when" visually across the whole project.

**Milestones (flags on the timeline):**
- **W4 — Gate pass:** on-prem Dev foundation validated; channel work unblocked.
- **W7 — MVP live:** WhatsApp Phase 1 in production (FAQ + OTP + Glassix). Amber flag — this is the MVP.
- **W10 — WhatsApp full:** Phase 2 complete (personal data answers).
- **W13 — App live:** target go-live, end of Q3.

**Note on overlaps:** App build (W9) starts before WhatsApp fully closes (W10) — deliberate, and only possible with parallel streams. Production stand-up (W8–9) deliberately precedes App go-live. State these dependencies explicitly.

---

### Tab 3 — Dual-Track Strategy

**Eyebrow:** ARCHITECTURE
**Title:** Two projects, one bridge

**Lead:**
The single most important structural decision: this is **not one project**. It's two projects with different resources, different dependencies, and different risk profiles, joined by a single-tenant environment.

**Track 1 — DevOps / Infrastructure.** Owns the on-prem foundation: the two workshops, the binary pipeline, the LLM deployment spec, the secure artifact storage, and all access. Owner: DevOps/Infra engineer; Implementation Manager runs the Bullet-side dependencies.

**Track 2 — Development.** Builds the AI support flows **on notch's platform** — our code, our IP, never exposed. Ships binaries to Track 1 for deployment.

**The single-tenant bridge.** An internal, single-tenant environment that mimics Bullet's setup and code types. It solves three problems at once:
1. **Velocity / dependency reduction** — developers test against Bullet-like conditions without waiting on Bullet access each iteration.
2. **IP protection** — developers work against a mimic, never inside Bullet's environment, never touching source either way.
3. **Product genericization** — because we build on *our* platform (not inside the customer), everything built can flow back into the generic product core. Build inside the customer and the work is trapped as customer-specific customization.

**This answers the bonus.** Genericization isn't a separate feature we retrofit — it's a *consequence* of the architecture. Any capability built on the single-tenant through our platform is generic-by-design and reusable for the next customer. (If showing one concrete example: Data Integration — built against a mock + single-tenant, its contract-driven connector pattern becomes a reusable primitive, with only the per-customer API mapping swapped in.)

**Build vs buy (related principle — give it a small panel on this tab).** The same discipline that keeps work generic also keeps scope tight: notch builds only its core value (agents, flows, orchestration, guardrails) and buys commodity capabilities (auth/OTP, LLM Model, website search like Firecrawl). For every bought tool the recommendation is that **Bullet owns the subscription** — AI pricing is unsettled and consumption-based, and notch sells value, not an infrastructure markup. Render as a two-column build/buy split with a subscription-ownership line beneath.

**Diagram:** Two columns (Track 1 left, Track 2 right), each with 3 stacked nodes. A central single-tenant "bridge" box both tracks point into. Below it, an arrow to "developments flow back to generic product," then to "validated binary → Bullet deployment." This is the centerpiece diagram — give it room.

---

### Tab 4 — On-Prem Foundation

**Eyebrow:** TRACK 1 · DEVOPS
**Title:** Prove the deployment before building on it

**Lead:**
The on-prem foundation is a gate, not a warm-up. It's the one place we find out whether the deployment model works at all — before investing in features on top of it. If it fails, no other phase is relevant.

**Two workshops (isolate one variable each):**
- **Workshop 1 — Hello World.** A minimal binary deploys, runs, and reports back. Proves the *plumbing*: pipeline, permissions, networking, observability. Proves nothing about product — that's the point. If it fails, the problem is infrastructure/access, not our code. **Exit criterion:** a log from the deployed binary reaches notch's Monitor Service.
- **Workshop 2 — Base binary.** The real core platform deploys and runs in Bullet's environment. Plumbing already proven, so any failure here is binary/config-specific — focused debugging. **Exit criterion:** core healthy in staging.

**Pull-based deployment (binary handoff).** notch packages a binary and uploads it to a **secure intermediate artifact storage**. Bullet's pipeline **pulls** from there, runs their security scans, and deploys. notch never gets push access into Bullet's environment — smaller attack surface, and Bullet controls what enters and when. This is the model insurance security will accept.

**LLM Model (self-hosted at Bullet).** Because Bullet went on-prem for data residency, the LLM runs inside their environment. This creates two notch responsibilities:
- **LLM deployment spec** — an internal notch deliverable: exactly what Bullet must install (model, version, infra/GPU requirements, configuration).
- **LLM verification access** — notch must be able to verify the installed model is correct, the right version, configured properly. A new access requirement.

**Track 1 work items:**
| Work item | What it is |
|---|---|
| Workshop 1 — hello world | pipeline + access + observability |
| Workshop 2 — base binary | core platform on Bullet cloud |
| LLM deployment spec | internal proposal: what Bullet installs |
| LLM verification access | confirm the installed model is correct |
| Secure artifact storage | the pull-based handoff zone |
| Deploy + support ops | ongoing maintenance across the project |

---

### Tab 5 — Development Track

**Eyebrow:** TRACK 2 · DEVELOPMENT
**Title:** Discover, mock, build, integrate

**Lead:**
Development is cut into vertical slices — each flow a full end-to-end increment — so we go live fast with something real. But before a line of integration code, we need to know what we're building against. Most of what we don't know is Bullet-specific.

**Known vs unknown (the discovery frame):**
- **Known (our platform):** notch core capabilities, the 9 features as primitives, 4 flow patterns, how we deploy, our LLM integration approach, the single-tenant test method.
- **Unknown (Bullet-specific):** existing WhatsApp flows/intents, what the current IVR handles, which internal APIs exist, their contracts and data shapes, whether they're reachable from our pipeline, the policy/claim data structures, traffic volume and top intents.

**The four flows (vertical slices):**
- **Flow A — Inbound & Routing.** Features: Replace IVR, Glassix integration. Components: Platform, Backlog Run. The skeleton — nothing works without it.
- **Flow B — Knowledge & Answers.** Features: FAQ, Website scraping. Components: AI Components (LLM), Platform. First customer value. Website data is pulled via a third-party search/scraping tool (e.g. **Firecrawl**) that retrieves public-site content and feeds it to the LLM — not something notch builds. Subscription ownership recommended to Bullet (see Overview assumptions).
- **Flow C — Identity & Personal Data.** Features: OTP authentication, Data integration. Components: Platform (auth), AI Components, Bullet DB connectors. The complex core — longer path, more components.
- **Flow D — Safety & Compliance.** Features: Guardrails, external prompt-injection safety. A gate every other flow passes through, not a standalone flow. At least partially present from Phase 1 — you cannot serve insurance answers without minimal guardrails.

*(App Deeplinks and Voice routing are out of WhatsApp scope — mapped to their own channels. Mapping features to channels deliberately is the point.)*

**Track 2 sequence (with API comprehension):**
1. **Receive Swagger** per API — Bullet dependency, pre-kickoff ask.
2. **API comprehension** — architecture studies the APIs (AI-assisted parsing) **plus a Q&A session with Bullet**. Swagger gives syntax; the Q&A gives semantics — edge cases, business logic, what an empty field means. Requires Bullet engineer time; schedule early.
3. **Build mocks** — accurate fakes from understood contracts.
4. **Platform-side build** — on the single-tenant; **no Bullet network needed**, can start immediately.
5. **Real integration** — connect to actual internal APIs **inside Bullet's network**; requires dev-env access for our developers.
6. **Validation** — end-to-end on staging.

**Why mock-first matters:** everything buildable without Bullet is built against mocks (fast, independent); only the final integration needs the expensive network access, and it arrives once the logic is already mature.

**Support components (run across all flows):** Testing Service (automated tests per flow), Monitor Service (observability — critical under binary deployment), BI Service (analytics → success metrics).

---

### Tab 6 — MVP & Definition of Done

**Eyebrow:** SCOPE
**Title:** Live fast, recoverable first

**MVP = WhatsApp Phase 1.** First channel: WhatsApp. The goal is speed-to-live with something real, not feature-completeness.

**IN scope (Phase 1):**
- **FAQ** — top intents only (not the full knowledge base).
- **OTP authentication** — identity verification (so we're ready for personal data, even before we serve it).
- **Glassix integration** — human handoff fallback. Not a feature — a *precondition*. Without it there's no safety net and Phase 1 is unsafe to ship.
- **Minimal guardrails** — baseline legal/compliance gate.

**OUT of Phase 1 (later phases):**
- Personal data answers (Data integration) → Phase 2.
- Full knowledge base / FAQ v2 → Phase 2.
- Website scraping, prompt-injection hardening → Phase 3.
- Voice, App, Website channels → later tracks.

**Definition of Done — first prioritized features:**

*FAQ (top intents):*
- Answers the agreed top-N insurance intents (e.g. claim status, policy details, payments) on WhatsApp.
- Correct answers validated against Bullet's knowledge base.
- Out-of-scope questions routed to Glassix handoff, not hallucinated.
- Passes automated test suite; observable in Monitor Service.

*OTP authentication:*
- User can verify identity via OTP within the WhatsApp flow.
- Failed/expired OTP handled gracefully with a retry path.
- No personal data exposed pre-verification.
- Audit trail of verification events.

*Glassix handoff (fallback):*
- Any AI failure or low-confidence response hands off cleanly to a human agent.
- Conversation context passed to the agent (no "start over").
- Handoff rate tracked as a metric.

**Success metrics (primary: containment / automation rate):**
- **Business — Containment rate:** % of conversations resolved end-to-end without a human. This is the headline metric and ties directly to notch's promise — *resolve, not reply*. (Bullet's stated benchmark: 70–73% automation.)
- **Business — Handoff quality:** of those handed off, % handed off cleanly (context preserved).
- **Technical — Answer accuracy:** validated correctness on the top intents.
- **Technical — Availability / latency:** uptime and response time within target.
- **Safety — Guardrail pass rate:** % of responses passing compliance checks; zero tolerance for compliance breaches on personal/financial info.

**How we prove it works:** staged validation — single-tenant (mocks) → staging (real APIs, test users) → limited production with Glassix safety net → containment measured on real traffic before expanding intent coverage.

**Versions after the MVP — granularity that grows with confidence.**
The MVP is the smallest possible live increment; subsequent versions deliberately get bigger as the model proves out. WhatsApp rolls out across several versions before we move to the next channel:

- **v1 (MVP):** a single flow live (FAQ top intents + OTP + Glassix). One flow, maximum caution, full safety net.
- **v2:** a small set of flows added.
- **v3:** many flows.
- **v4:** the remaining flows — WhatsApp complete (adds Data integration, full KB, website scraping, hardening).

The batch size increases each version — we start cautious (one flow, recoverable) and accelerate as confidence builds. **By the time we reach later channels (App, Voice), we no longer slice this finely** — the core is proven, so those channels take larger increments rather than one-flow-at-a-time. Changing the batch size with the risk level is the point, not a fixed cadence.

---

### Tab 7 — Risks & Dependencies

**Eyebrow:** RISK
**Title:** What blocks us, and what we do about it

**Top 5 risks (with mitigation):**

1. **On-prem access not granted in time (HIGHEST).** Phase 0 is gated on Bullet provisioning access (pipeline, logs, DBs, VPN, LLM verification). If it slips, everything slips. *Mitigation:* turn the access matrix into a **pre-kickoff ask** sent before the meeting; Workshop 1 doesn't start until access is confirmed; Track 3 (single-tenant) runs in parallel so developers aren't idle while waiting.

2. **Internal APIs undocumented or unreachable from our pipeline.** Flow C is blocked without Swagger + network reachability. *Mitigation:* Swagger + reachability confirmation as pre-kickoff asks; API comprehension Q&A scheduled early; mock-first development so platform-side work proceeds regardless.

3. **Third-party tooling — hosting, billing & ownership unresolved.** The self-hosted LLM and the bought tools (auth/OTP, website search) raise infra (GPU) provisioning, ongoing consumption cost that scales with usage (OpEx), and ownership questions. *Mitigation:* bring as a structured open decision to kickoff — build/buy boundary, who brings each vendor, and subscription ownership (recommend Bullet owns, given volatile AI pricing); notch prepares the LLM deployment spec so Bullet knows exactly what's required.

4. **Production access for support refused (insurance/regulatory).** A vendor with VPN to an insurer's production is a regulatory red flag. *Mitigation:* request with controls built in — test user only, time-boxed, audited, break-glass model. Fallback: staging with production-like data, or reproduction-as-a-service by Bullet.

5. **Resource contention collapses the parallel tracks.** The 13-week plan assumes 3 concurrent tracks; with too few people they serialize and the deadline slips. *Mitigation:* explicit resourcing recommendation (mid-size team); if constrained, single-tenant build (Track 3) gets the dedicated/extra resource since it unblocks all testing.

6. **Security scanning tools on binaries — unknown toolchain.** Bullet's pipeline runs security scans on every binary before deployment. If we don't know *which* tools they use, our binaries may fail on first submission, causing delays and re-work cycles. *Mitigation:* obtain Bullet's security toolchain list (SAST/DAST/SCA tools) early; get a subscription to the same tools and **install them on our single-tenant** so we pre-scan internally before shipping. Binaries should pass our local scans before they ever hit Bullet's pipeline — failures should be caught on our side, not discovered on theirs. This also goes into the pipeline at Bullet's end: security scanning must run automatically before any binary executes in their environment.

**Three categories of access (timed by need):**
| Category | Who | Why | When |
|---|---|---|---|
| DevOps access | DevOps/Infra | pipeline, deploy, artifact storage | Phase 0, immediately |
| Support access | Support team | logs, VPN, reproduction with test user | toward go-live |
| Developer access | Developers | Bullet dev-env for real integration | Stage 2, after mock dev |

**Two categories of ask (separate them):**
- **Access asks (permissions):** pipeline, logs, DBs, VPN, LLM verification, dev-env.
- **Knowledge asks (artifacts):** existing flow/intent inventory, internal API list, Swagger per API (internal **and** 3rd-party), pipeline-reachability confirmation.

**Scope ownership — 3rd-party integrations are Bullet's, not notch's.** Some integrations (authentication is the clearest case) are existing systems at Bullet and should not be rebuilt by notch. For each, Bullet confirms the integration is possible from their side and supplies the 3rd-party Swagger. Treat as both a dependency (blocks the relevant flow if unavailable) and a scope-control lever (every Bullet-owned integration is risk removed from notch). Surface at kickoff, assign owners.

---

### Tab 8 — Kickoff Plan

**Eyebrow:** WEEK ONE
**Title:** The kickoff meeting and first three weeks

**Meeting goal:** align on scope and sequencing, lock the critical decisions, and convert open questions into owned action items. Leave with access requests submitted and the discovery artifacts requested.

**Agenda:**
1. Strategy & sequencing — WhatsApp-first as Phase 0 of the App; the timeline interpretation (and the Q1-vs-Q3 question).
2. Dual-track structure — DevOps ∥ Development, single-tenant bridge.
3. On-prem foundation — binary-only, pull-based deployment, the two workshops.
4. The critical decisions (below).
5. Access matrix & discovery asks — walk through, assign owners.
6. Week 1–3 action items & owners.

**Key questions for Bullet (need before/at kickoff):**
- **API state:** how many flows exist today per channel (WhatsApp first), and a description of how each works in its current state.
- Are the internal APIs documented (Swagger available)? Are they reachable from the pipeline we'll build outward?
- **3rd-party integrations — ownership and access.** Some integrations should be Bullet's responsibility, not built by notch — authentication is the clearest example: it's an existing system at an insurer, and there's no reason for notch to rebuild it. For each such integration we need Bullet to (a) confirm the integration can be done from their side, and (b) provide the Swagger/API spec for that 3rd-party service too — not just the internal APIs. Every integration Bullet owns is scope and risk removed from notch; every one they can't support is a blocker to surface now.
- **3rd-party tools Bullet already has.** Before we start, we need a clear picture of which tools from the "buy" list Bullet already operates (auth/OTP provider, LLM infra, website search/scraping, monitoring). They likely already cover some of it — and whatever they have, we use rather than introducing another vendor. This determines the per-tool vendor decision and may simplify onboarding.
- What are the top intents / traffic volumes (to scope the FAQ MVP)?
- What are the policy/claim data structures?
- What are the security/compliance constraints on access (especially production)?
- Does Bullet have the infra (GPU) to self-host the LLM Model?

**Critical decisions needed:**
- **Timeline:** is Q1 2026 a hard commitment, or do we plan to end-of-Q3 2026?
- **LLM hosting & compliance:** confirm self-hosted; does any data leave the environment?
- **Third-party tooling — build/buy boundary & vendors.** Confirm the build/buy split (notch builds core value; auth/OTP, website search, LLM are bought). For each bought tool, decide **who brings the vendor** — notch (a tool we already use) or Bullet (one they already have).
- **Subscription ownership (all tools):** who owns the subscription and pays — for the LLM and for every third-party tool. Recommendation: **Bullet owns**, because AI/consumption pricing is volatile and shouldn't be hedged by notch. Confirm tracking and caps.
- **Production access model:** is time-boxed, audited, test-user access acceptable?
- **Access matrix sign-off:** which asks are approved, which need escalation.

**Week 1–3 action items:**
- *Week 1:* submit access matrix + discovery asks; start Track 3 single-tenant build; start Workshop 1 prep; schedule API comprehension Q&A.
- *Week 2:* Workshop 1 (hello world) — prove the plumbing; begin Flow A (routing) on single-tenant; receive first Swagger specs.
- *Week 3:* Workshop 2 prep; API comprehension session; build first mocks; continue platform-side Flow A/B.

---

### Tab 9 — Process & Cadence

**Eyebrow:** OPERATING RHYTHM
**Title:** How we run delivery

**Executive summary:** Binaries ship through the pipeline on the version cadence (v1→v4). Each track — DevOps and Development — holds its own weekly sync. The IM consolidates both into one weekly external meeting with Bullet's Implementation Engineer, so Bullet gets one coherent signal, not two raw feeds.

**Delivery pipeline cadence.** Each version (see MVP & DOD versions v1–v4) ships as a binary through the pull-based pipeline (Tab 4) — delivery cadence matches the version plan, not ad hoc releases. Bullet always knows what's coming and when, tied to a named version.

**Internal track syncs (weekly, separate):**
- **DevOps track sync** — track lead reports on environments, access status, pipeline health, security scan results.
- **Development track sync** — track lead reports on flow progress, mock/integration status, blockers.

These stay separate because the two tracks have different rhythms and different blockers — merging them dilutes both.

**External client sync (weekly, consolidated).** The Implementation Manager runs one weekly meeting with Bullet's Implementation Engineer, bringing the consolidated output of both internal syncs: status, decisions needed, blockers, and what's shipping next. Bullet sees one coherent picture, not two raw internal feeds — and the IM is the single point of accountability for what gets escalated.

**Diagram:** two boxes ("DevOps track sync" and "Development track sync") both feeding an arrow into an "IM consolidates" node, which feeds a final box "External sync w/ Bullet Impl. Engineer." Use the same lane/bridge visual language as Tab 3.

---

## 3. Section/tab summary (for the nav)

| # | Tab label | One-line purpose |
|---|---|---|
| 0 | Cover | Why this project matters strategically |
| 1 | Overview | Strategy & sequencing thesis |
| 2 | Roadmap | 13-week, three-track gantt |
| 3 | Dual-Track | The two-projects + bridge architecture |
| 4 | On-Prem | Track 1: deployment foundation & gate |
| 5 | Development | Track 2: discover → mock → build → integrate |
| 6 | MVP & DOD | Scope, definition of done, success metrics |
| 7 | Risks | Top 6 risks, dependencies, access categories |
| 8 | Kickoff | Agenda, questions, decisions, week 1–3 |
| 9 | Process & Cadence | Delivery pipeline + weekly sync structure |

---

## 4. Tone for all copy

Plain, active, confident. Name things by what they do. No filler, no consulting-speak. Where something is an assumption or an open question, say so plainly — surfacing uncertainty is a strength here, not a weakness. The reader is an evaluator deciding whether this person thinks like a real TPM: every section should show a decision and the reasoning behind it, not just a list.
