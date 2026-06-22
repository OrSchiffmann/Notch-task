import { useState, useEffect } from 'react'
import Search from './components/Search'
import Login from './components/Login'
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
import SummaryTab from './components/tabs/Summary'

const AUTH_KEY = 'notch_auth_user'

const TABS = [
  { id: 'summary',     label: 'Summary',           component: SummaryTab },
  { id: 'cover',       label: 'Purpose',           component: Cover },
  { id: 'overview',    label: 'Overview',          component: Overview },
  { id: 'prereqs',     label: 'Pre-Requisites',   component: PreRequisites },
  { id: 'dual-track',  label: 'Delivery Model',   component: DualTrack },
  { id: 'roadmap',     label: 'Roadmap',           component: Roadmap },
  { id: 'resources',   label: 'Resources',         component: Resources },
  { id: 'on-prem',     label: 'DevOps Project',    component: OnPrem },
  { id: 'development', label: 'Product Project',   component: Development },
  { id: 'mvp',         label: 'MVP & DOD',         component: MvpDod },
  { id: 'testing',     label: 'Testing Strategy',  component: Testing },
  { id: 'risks',       label: 'Risks & Deps',      component: Risks },
  { id: 'kickoff',     label: 'Kickoff',           component: Kickoff },
  { id: 'process',     label: 'Process',           component: Process },
  { id: 'launch',      label: 'Launch & Beyond',   component: LaunchBeyond },
]

const font = "'Calibri', 'Trebuchet MS', Arial, sans-serif"

// ── Main shell (only rendered when authenticated) ─────────────────────────────
function AppShell({ user, onSignOut }) {
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.replace('#/', '')
    return TABS.find(t => t.id === hash)?.id || 'cover'
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#/', '')
      const tab = TABS.find(t => t.id === hash)
      if (tab) { setActiveTab(tab.id); window.scrollTo(0, 0) }
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const switchTab = (id) => {
    setActiveTab(id)
    window.location.hash = `#/${id}`
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }

  const ActiveComponent = TABS.find(t => t.id === activeTab)?.component || Cover

  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: font, display: 'flex' }}>

      {/* ===== Desktop sidebar ===== */}
      <aside
        className="hidden lg:flex"
        style={{
          flexDirection: 'column',
          width: 256, flexShrink: 0,
          borderRight: '1px solid #ECEEF2',
          background: '#FBFBFC',
          position: 'sticky', top: 0, height: '100vh',
        }}>
        {/* Brand */}
        <div style={{ padding: '26px 22px 20px', borderBottom: '1px solid #ECEEF2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <img src="/notch-icon.svg" alt="Notch" style={{ height: 26 }} />
            <span style={{ fontSize: 17, fontWeight: 700, color: '#111827', letterSpacing: '-0.3px' }}>
              Notch <span style={{ color: '#F06A22' }}>×</span> Bullet
            </span>
          </div>
          <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 8, letterSpacing: '0.04em' }}>
            Project Kickoff Plan
          </p>
          <button
            onClick={() => setSearchOpen(true)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8, width: '100%',
              marginTop: 12, padding: '7px 10px', borderRadius: 8,
              background: '#F2F3F5', border: '1px solid #ECEEF2',
              cursor: 'pointer', fontFamily: font, fontSize: 12.5, color: '#9CA3AF',
              textAlign: 'left',
            }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 12l3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Search...
            <kbd style={{ marginLeft: 'auto', fontSize: 10, background: '#E9EAEC', borderRadius: 4, padding: '1px 5px', fontFamily: 'monospace', color: '#9CA3AF' }}>⌘K</kbd>
          </button>
        </div>

        {/* Nav list */}
        <nav style={{ flex: 1, overflowY: 'auto', padding: '10px 0' }}>
          {TABS.map((tab, i) => {
            const active = activeTab === tab.id

            if (tab.id === 'summary') {
              return (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 9,
                    width: 'calc(100% - 24px)', margin: '6px 12px', textAlign: 'left',
                    padding: '10px 12px', borderRadius: 9,
                    fontFamily: font, fontSize: 13.5, fontWeight: 700, color: '#fff',
                    background: '#F06A22', border: 'none', cursor: 'pointer',
                    boxShadow: active ? '0 0 0 2px #0E1526' : '0 1px 4px rgba(240,106,34,0.35)',
                    transition: 'box-shadow 0.12s',
                  }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
                    <path d="M7 1 Q7.8 6.2 13 7 Q7.8 7.8 7 13 Q6.2 7.8 1 7 Q6.2 6.2 7 1 Z" fill="#fff" />
                  </svg>
                  {tab.label}
                  <span style={{ marginLeft: 'auto', fontSize: 8.5, fontWeight: 800, color: '#F06A22', background: '#fff', borderRadius: 999, padding: '2px 7px', letterSpacing: '0.06em' }}>
                    ANSWERS
                  </span>
                </button>
              )
            }

            return (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 11,
                  width: '100%', textAlign: 'left',
                  padding: '8px 22px',
                  fontFamily: font, fontSize: 13.5,
                  fontWeight: active ? 700 : 400,
                  color: active ? '#F06A22' : '#5B6472',
                  background: active ? '#FFF4EE' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  borderLeft: active ? '3px solid #F06A22' : '3px solid transparent',
                  transition: 'color 0.12s, background 0.12s',
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = '#F2F3F5' }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: active ? '#F06A22' : '#BFC4CC', minWidth: 16 }}>
                  {String(i).padStart(2, '0')}
                </span>
                {tab.label}
              </button>
            )
          })}
        </nav>

        {/* User + sign-out */}
        <div style={{ padding: '12px 16px', borderTop: '1px solid #ECEEF2', display: 'flex', alignItems: 'center', gap: 9 }}>
          {user.picture
            ? <img src={user.picture} alt="" style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0 }} />
            : <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#F06A22', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                {user.name?.[0] || user.email?.[0] || '?'}
              </div>
          }
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#374151', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name || user.email}</div>
          </div>
          <button onClick={onSignOut} title="Sign out"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', padding: 4, flexShrink: 0, fontSize: 14 }}>
            ⎋
          </button>
        </div>
      </aside>

      {/* ===== Mobile top bar ===== */}
      <header
        className="flex lg:hidden"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          background: '#fff', borderBottom: '1px solid #ECEEF2',
          alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 20px',
        }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/notch-icon.svg" alt="Notch" style={{ height: 22 }} />
          <span style={{ fontSize: 15, fontWeight: 700, color: '#111827' }}>
            Notch <span style={{ color: '#F06A22' }}>×</span> Bullet
          </span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#5B6472', padding: 4 }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6">
            {mobileMenuOpen
              ? <path d="M5 5l12 12M17 5L5 17" />
              : <><path d="M3 6h16" /><path d="M3 11h16" /><path d="M3 16h16" /></>}
          </svg>
        </button>
      </header>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden" style={{
          position: 'fixed', top: 47, left: 0, right: 0, bottom: 0, zIndex: 49,
          background: '#fff', overflowY: 'auto', paddingBottom: 40,
        }}>
          {TABS.map((tab, i) => {
            const active = activeTab === tab.id

            if (tab.id === 'summary') {
              return (
                <button key={tab.id} onClick={() => switchTab(tab.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    width: 'calc(100% - 32px)', margin: '8px 16px', textAlign: 'left',
                    padding: '13px 16px', borderRadius: 10,
                    fontFamily: font, fontSize: 15, fontWeight: 700, color: '#fff',
                    background: '#F06A22', border: 'none', cursor: 'pointer',
                    boxShadow: active ? '0 0 0 2px #0E1526' : '0 1px 4px rgba(240,106,34,0.35)',
                  }}>
                  <svg width="15" height="15" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
                    <path d="M7 1 Q7.8 6.2 13 7 Q7.8 7.8 7 13 Q6.2 7.8 1 7 Q6.2 6.2 7 1 Z" fill="#fff" />
                  </svg>
                  {tab.label}
                  <span style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 800, color: '#F06A22', background: '#fff', borderRadius: 999, padding: '2px 8px', letterSpacing: '0.06em' }}>
                    ANSWERS
                  </span>
                </button>
              )
            }

            return (
              <button key={tab.id} onClick={() => switchTab(tab.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 11, width: '100%', textAlign: 'left',
                  padding: '13px 24px',
                  fontFamily: font, fontSize: 15,
                  fontWeight: active ? 700 : 400,
                  color: active ? '#F06A22' : '#374151',
                  background: active ? '#FFF4EE' : 'none',
                  borderLeft: active ? '3px solid #F06A22' : '3px solid transparent',
                  border: 'none', cursor: 'pointer',
                }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: active ? '#F06A22' : '#BFC4CC', minWidth: 16 }}>
                  {String(i).padStart(2, '0')}
                </span>
                {tab.label}
              </button>
            )
          })}
          {/* Mobile sign-out */}
          <button onClick={onSignOut}
            style={{
              display: 'flex', alignItems: 'center', gap: 8, width: '100%', textAlign: 'left',
              padding: '13px 24px', marginTop: 8,
              fontFamily: font, fontSize: 14, color: '#9CA3AF',
              background: 'none', border: 'none', borderTop: '1px solid #ECEEF2', cursor: 'pointer',
            }}>
            Sign out
          </button>
        </div>
      )}

      {/* ===== Main content ===== */}
      <main style={{ flex: 1, minWidth: 0 }}>
        <div className="main-pad" style={{ maxWidth: 820, margin: '0 auto', padding: '64px 48px 96px' }}>
          <ActiveComponent />
        </div>
      </main>

      {/* ===== Search modal ===== */}
      {searchOpen && (
        <Search
          onNavigate={switchTab}
          onClose={() => setSearchOpen(false)}
        />
      )}
    </div>
  )
}

// ── Root: auth gate ───────────────────────────────────────────────────────────
export default function App() {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem(AUTH_KEY)) } catch { return null }
  })

  const handleAuth = (u) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(u))
    setUser(u)
  }

  const handleSignOut = () => {
    localStorage.removeItem(AUTH_KEY)
    setUser(null)
  }

  if (!user) return <Login onAuth={handleAuth} />
  return <AppShell user={user} onSignOut={handleSignOut} />
}
