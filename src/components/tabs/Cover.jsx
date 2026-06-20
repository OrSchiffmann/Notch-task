import { Summary, SectionHeader, Card, WarnCard } from '../Shared'

export default function Cover() {
  return (
    <div>
      <SectionHeader eyebrow="NOTCH × BULLET" title="Why this project matters" />
      <Summary>
        Bullet is notch's first deployment in a new, regulated vertical — and a notch investor. This project is as much a strategic proof point as a delivery project.
      </Summary>

      <Card title="Customer snapshot">
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li className="mb-1.5">Bullet — large US insurance carrier, notch's first on-prem deployment in insurance.</li>
          <li className="mb-1.5">Backed by Lightspeed, Jibe, Munich Re Ventures, and <strong style={{ color: 'var(--color-text)' }}>Bullet itself</strong> — customer and investor.</li>
          <li>notch benchmark: 70–73% automation, ~50% CS headcount reduction, 200% ROI within a year.</li>
        </ul>
      </Card>

      <p className="mt-6 mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600 }}>
        Why this matters strategically to notch
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        <Card title="Proves the on-prem model">
          <p>Binary-only, pull-based deployment is exactly what regulated industries — banking, healthcare, government — require. Getting it right here unlocks every similar customer after.</p>
        </Card>
        <Card title="First large US enterprise customer">
          <p>A proof point for US market expansion, not just one deal.</p>
        </Card>
        <Card title="New vertical, reusable playbook">
          <p>Insurance-specific learnings become a template — ties directly to the genericization principle (single-tenant bridge).</p>
        </Card>
        <Card title="Bullet is also an investor">
          <p>Delivery success here is a signal to current and future investors, not only a customer outcome.</p>
        </Card>
      </div>

      <WarnCard title="What winning looks like">
        WhatsApp live fast and safely, App live on target, and an architecture proven reusable for the next regulated customer.
      </WarnCard>
    </div>
  )
}
