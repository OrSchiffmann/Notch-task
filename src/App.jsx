import { useState, useEffect } from 'react'
import Cover from './components/tabs/Cover'
import Overview from './components/tabs/Overview'
import Roadmap from './components/tabs/Roadmap'
import DualTrack from './components/tabs/DualTrack'
import OnPrem from './components/tabs/OnPrem'
import Development from './components/tabs/Development'
import MvpDod from './components/tabs/MvpDod'
import Risks from './components/tabs/Risks'
import Kickoff from './components/tabs/Kickoff'
import Process from './components/tabs/Process'

const TABS = [
  { id: 'cover', label: 'Cover', component: Cover },
  { id: 'overview', label: 'Overview', component: Overview },
  { id: 'roadmap', label: 'Roadmap', component: Roadmap },
  { id: 'dual-track', label: 'Dual-Track', component: DualTrack },
  { id: 'on-prem', label: 'On-Prem', component: OnPrem },
  { id: 'development', label: 'Development', component: Development },
  { id: 'mvp', label: 'MVP & DOD', component: MvpDod },
  { id: 'risks', label: 'Risks', component: Risks },
  { id: 'kickoff', label: 'Kickoff', component: Kickoff },
  { id: 'process', label: 'Process & Cadence', component: Process },
]

function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.replace('#/', '')
    return TABS.find(t => t.id === hash)?.id || 'cover'
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#/', '')
      const tab = TABS.find(t => t.id === hash)
      if (tab) setActiveTab(tab.id)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const switchTab = (id) => {
    setActiveTab(id)
    window.location.hash = `#/${id}`
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }

  const ActiveComponent = TABS.find(t => t.id === activeTab)?.component || Cover

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <header className="lg:hidden flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontSize: 13, fontWeight: 500 }}>
          notch × Bullet
        </span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded" style={{ color: 'var(--color-text-dim)' }}
          aria-label="Toggle navigation">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileMenuOpen
              ? <path d="M5 5l10 10M15 5L5 15" />
              : <><path d="M3 5h14" /><path d="M3 10h14" /><path d="M3 15h14" /></>}
          </svg>
        </button>
      </header>

      <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block lg:w-56 shrink-0 border-r overflow-y-auto lg:sticky lg:top-0 lg:h-screen`}
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
        <div className="hidden lg:block px-5 pt-6 pb-4">
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontSize: 13, fontWeight: 500 }}>
            notch × Bullet
          </span>
          <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-dim)', fontSize: 11, marginTop: 4 }}>
            Project Kickoff Plan
          </p>
        </div>
        <ul className="py-2 lg:py-0">
          {TABS.map((tab, i) => (
            <li key={tab.id}>
              <button
                onClick={() => switchTab(tab.id)}
                className="w-full text-left px-5 py-2.5 transition-colors duration-150 focus:outline-none"
                style={{
                  background: activeTab === tab.id ? 'var(--color-accent-soft)' : 'transparent',
                  borderLeft: activeTab === tab.id ? '2px solid var(--color-accent)' : '2px solid transparent',
                }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em',
                  color: activeTab === tab.id ? 'var(--color-accent)' : 'var(--color-text-dim)',
                  display: 'block', marginBottom: 1,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: 14,
                  fontWeight: activeTab === tab.id ? 600 : 400,
                  color: activeTab === tab.id ? 'var(--color-text)' : 'var(--color-text-dim)',
                }}>
                  {tab.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="flex-1 overflow-y-auto px-8 py-12 lg:px-20 lg:py-16 max-w-4xl">
        <ActiveComponent />
      </main>
    </div>
  )
}

export default App
