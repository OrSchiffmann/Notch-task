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
import LaunchBeyond from './components/tabs/LaunchBeyond'
import PreRequisites from './components/tabs/PreRequisites'
import Testing from './components/tabs/Testing'
import Resources from './components/tabs/Resources'

const TABS = [
  { id: 'cover',       label: 'Cover',            component: Cover },
  { id: 'overview',    label: 'Overview',          component: Overview },
  { id: 'prereqs',     label: 'Pre-Requisites',   component: PreRequisites },
  { id: 'dual-track',  label: 'Delivery Model',   component: DualTrack },
  { id: 'roadmap',     label: 'Roadmap',           component: Roadmap },
  { id: 'resources',   label: 'Resources',         component: Resources },
  { id: 'on-prem',     label: 'DevOps Project',    component: OnPrem },
  { id: 'development', label: 'Product Project',   component: Development },
  { id: 'mvp',         label: 'V0 & DOD',          component: MvpDod },
  { id: 'testing',     label: 'Testing Strategy',  component: Testing },
  { id: 'risks',       label: 'Risks & Deps',      component: Risks },
  { id: 'kickoff',     label: 'Kickoff',           component: Kickoff },
  { id: 'process',     label: 'Process',           component: Process },
  { id: 'launch',      label: 'Launch & Beyond',   component: LaunchBeyond },
]

const font = "'Calibri', 'Trebuchet MS', Arial, sans-serif"

export default function App() {
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
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: font }}>

      {/* Top bar */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: '#fff',
        borderBottom: '1px solid #E4E7EC',
      }}>
        {/* Brand row */}
        <div style={{
          maxWidth: 900, margin: '0 auto',
          padding: '16px 40px 0',
          display: 'flex', alignItems: 'baseline', gap: 12,
        }}>
          <img src="/notch-icon.svg" alt="Notch" style={{ height: 26, display: 'inline-block' }} />
          <span style={{ fontSize: 17, fontWeight: 700, color: '#111827', letterSpacing: '-0.3px', marginLeft: 6 }}>
            Notch <span style={{ color: '#F06A22' }}>×</span> Bullet
          </span>
          <span style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 400, marginLeft: 8 }}>
            Project Kickoff Plan
          </span>
        </div>

        {/* Tab row — desktop */}
        <nav style={{ maxWidth: 900, margin: '0 auto', padding: '12px 36px 14px', display: 'flex', flexWrap: 'wrap', gap: 4 }}
          className="hidden lg:flex">
          {TABS.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              style={{
                fontFamily: font,
                fontSize: 13,
                fontWeight: activeTab === tab.id ? 600 : 400,
                color: activeTab === tab.id ? '#F06A22' : '#6B7280',
                background: activeTab === tab.id ? '#FFF4EE' : 'transparent',
                border: 'none', cursor: 'pointer',
                padding: '6px 12px',
                borderRadius: 7,
                transition: 'color 0.15s, background 0.15s',
                whiteSpace: 'nowrap',
                display: 'flex', alignItems: 'baseline', gap: 6,
              }}
              onMouseEnter={e => { if (activeTab !== tab.id) e.currentTarget.style.background = '#F7F8FA' }}
              onMouseLeave={e => { if (activeTab !== tab.id) e.currentTarget.style.background = 'transparent' }}>
              <span style={{ fontSize: 10, color: activeTab === tab.id ? '#F06A22' : '#C0C4CC', fontWeight: 600 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <div className="lg:hidden" style={{ maxWidth: 900, margin: '0 auto', padding: '8px 40px 12px', display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', fontSize: 13, fontFamily: font }}>
            {mobileMenuOpen ? 'Close' : 'Menu ▾'}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div style={{ borderTop: '1px solid #E4E7EC', background: '#fff' }}>
            {TABS.map(tab => (
              <button key={tab.id} onClick={() => switchTab(tab.id)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '12px 40px',
                  fontFamily: font, fontSize: 14,
                  fontWeight: activeTab === tab.id ? 600 : 400,
                  color: activeTab === tab.id ? '#F06A22' : '#374151',
                  background: activeTab === tab.id ? '#FFF4EE' : 'none',
                  border: 'none', cursor: 'pointer',
                }}>
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Page content */}
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '56px 40px 80px' }}>
        <ActiveComponent />
      </main>
    </div>
  )
}
