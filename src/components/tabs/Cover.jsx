import { Summary, SectionHeader, Card, WarnCard } from '../Shared'

export default function Cover() {
  return (
    <div>
      <SectionHeader eyebrow="NOTCH × BULLET" title="The deployment that opens regulated markets" />
      <Summary>
        Bullet is Notch's first on-premise deployment in insurance, and a Notch investor. Delivering it well is worth far more than one logo: it is the reference architecture that makes every future bank, insurer, and healthcare customer addressable.
      </Summary>

      <Card title="Customer snapshot">
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li className="mb-1.5">Bullet - a large US insurance carrier, and Notch's first on-premise deployment in a regulated vertical.</li>
          <li className="mb-1.5">Backed by Lightspeed, Jibe, Munich Re Ventures, and <strong style={{ color: 'var(--color-text)' }}>Bullet itself</strong> - customer and investor in one.</li>
          <li>Proven Notch benchmark to defend: 90% automation, ~50% CS headcount reduction, 200% ROI within a year.</li>
        </ul>
      </Card>

      <p className="mt-6 mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600 }}>
        Why this engagement carries outsized weight
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        <Card title="It proves the on-premise model">
          <p>Binary-only, pull-based deployment is the exact posture regulated industries demand. Proving it here turns "can Notch run inside our walls?" from an open question into a documented yes.</p>
        </Card>
        <Card title="It is our first large US enterprise">
          <p>A working reference in a Fortune-scale regulated buyer is the credential that opens the US enterprise market - not just this account.</p>
        </Card>
        <Card title="It produces a reusable playbook">
          <p>Insurance-specific work - compliance, guardrails, data sensitivity - is built once on our platform and becomes a template the next regulated customer inherits.</p>
        </Card>
        <Card title="The customer is also an investor">
          <p>Execution here is visible to the people funding Notch's next round. Delivery is a commercial outcome and an investor signal at the same time.</p>
        </Card>
      </div>

      <WarnCard title="What winning looks like">
        WhatsApp live quickly and safely, the App live on its priority timeline, and a deployment architecture proven generic enough to lift into the next regulated customer with the integration layer swapped, not rebuilt.
      </WarnCard>
    </div>
  )
}
