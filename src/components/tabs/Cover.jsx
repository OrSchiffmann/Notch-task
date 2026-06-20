import { Summary, SectionHeader, Card, WarnCard } from '../Shared'

export default function Cover() {
  return (
    <div>
      <SectionHeader eyebrow="NOTCH × BULLET" title="The deployment that opens regulated markets" />
      <Summary>
        Bullet is Notch's first on-prem insurance deployment, and also a Notch investor. Delivering here isn't just one customer win - it's the proof point that unlocks banking, healthcare, and government.
      </Summary>

      <Card title="Customer snapshot">
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li className="mb-1.5">Bullet - large US insurance carrier, Notch's first on-prem deployment in insurance.</li>
          <li className="mb-1.5">Backed by Lightspeed, Jibe, Munich Re Ventures, and <strong style={{ color: 'var(--color-text)' }}>Bullet itself</strong> - customer and investor in one.</li>
          <li>Notch benchmark: 70-73% automation, ~50% CS headcount reduction, 200% ROI within a year.</li>
        </ul>
      </Card>

      <p className="mt-6 mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600 }}>
        Why this matters strategically
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        <Card title="Proves the on-prem model">
          <p>Binary-only, pull-based deployment is exactly what regulated industries require. Getting it right here is the template for every similar customer after.</p>
        </Card>
        <Card title="First large US enterprise customer">
          <p>A proof point for US market expansion. Not just one deal - a signal that enterprise is in reach.</p>
        </Card>
        <Card title="Reusable playbook for a new vertical">
          <p>Insurance-specific learnings (compliance, guardrails, data sensitivity) become a repeatable framework for the next regulated customer.</p>
        </Card>
        <Card title="Bullet is also an investor">
          <p>Delivery success here sends a signal to current and future investors. This is not only a customer outcome.</p>
        </Card>
      </div>

      <WarnCard title="What winning looks like">
        WhatsApp live fast and safely. App live on target. An architecture proven reusable for the next regulated customer.
      </WarnCard>
    </div>
  )
}
