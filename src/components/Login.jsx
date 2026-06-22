import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import emailjs from '@emailjs/browser'
import { ALLOWED_EMAILS } from '../allowedEmails'

const font = "'Calibri', 'Trebuchet MS', Arial, sans-serif"

function decodeJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')))
  } catch {
    return null
  }
}

const EMAILJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || ''
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || ''

export default function Login({ onAuth }) {
  const [stage, setStage] = useState('login') // login | denied | requesting | sent | error
  const [denied, setDenied] = useState(null)  // { email, name }
  const [note, setNote] = useState('')
  const [sending, setSending] = useState(false)

  const handleSuccess = (response) => {
    const payload = decodeJwt(response.credential)
    if (!payload) return
    const email = payload.email?.toLowerCase()
    if (ALLOWED_EMAILS.map(e => e.toLowerCase()).includes(email)) {
      onAuth({ email, name: payload.name, picture: payload.picture })
    } else {
      setDenied({ email, name: payload.name })
      setStage('denied')
    }
  }

  const sendRequest = async () => {
    setSending(true)
    if (EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_KEY) {
      try {
        await emailjs.send(
          EMAILJS_SERVICE,
          EMAILJS_TEMPLATE,
          {
            requester_name:  denied.name || denied.email,
            requester_email: denied.email,
            note:            note.trim() || '—',
            reply_to:        denied.email,
          },
          EMAILJS_KEY
        )
        setStage('sent')
      } catch {
        setStage('error')
      }
    } else {
      // Fallback: mailto link (when EmailJS isn't configured yet)
      const subject = encodeURIComponent(`Access request — Notch × Bullet plan`)
      const body = encodeURIComponent(
        `Name: ${denied.name || '—'}\nEmail: ${denied.email}\n\nNote: ${note.trim() || '—'}`
      )
      window.location.href = `mailto:orgabizohar@gmail.com?subject=${subject}&body=${body}`
      setStage('sent')
    }
    setSending(false)
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#F8F9FB', fontFamily: font,
    }}>
      <div style={{
        width: '100%', maxWidth: 400, margin: '0 24px',
        background: '#fff', borderRadius: 16,
        boxShadow: '0 4px 32px rgba(14,21,38,0.10)',
        padding: '48px 40px 40px',
        textAlign: 'center',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 32 }}>
          <img src="/notch-icon.svg" alt="Notch" style={{ height: 32 }} />
          <span style={{ fontSize: 22, fontWeight: 700, color: '#111827', letterSpacing: '-0.3px' }}>
            Notch <span style={{ color: '#F06A22' }}>×</span> Bullet
          </span>
        </div>

        {/* ── STAGE: login ── */}
        {stage === 'login' && <>
          <p style={{ fontSize: 15, color: '#374151', marginBottom: 8, fontWeight: 600 }}>
            Project Kickoff Plan
          </p>
          <p style={{ fontSize: 13.5, color: '#9CA3AF', marginBottom: 36, lineHeight: 1.5 }}>
            Sign in with your Google account to continue.<br />
            Access is restricted to approved team members.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={() => alert('Sign-in failed. Please try again.')}
              theme="outline"
              size="large"
              text="signin_with"
              shape="rectangular"
              logo_alignment="left"
            />
          </div>
        </>}

        {/* ── STAGE: denied ── */}
        {stage === 'denied' && <>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 22 }}>
            🔒
          </div>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 8 }}>
            Access not granted
          </p>
          <p style={{ fontSize: 13.5, color: '#6B7280', marginBottom: 6, lineHeight: 1.5 }}>
            <strong style={{ color: '#374151' }}>{denied?.email}</strong> is not on the approved list.
          </p>
          <p style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 28, lineHeight: 1.5 }}>
            You can request access below — the plan owner will be notified.
          </p>
          <button
            onClick={() => setStage('requesting')}
            style={{
              width: '100%', padding: '11px', borderRadius: 8,
              background: '#F06A22', color: '#fff', border: 'none',
              fontFamily: font, fontSize: 14, fontWeight: 600, cursor: 'pointer',
              marginBottom: 12,
            }}>
            Request access
          </button>
          <button
            onClick={() => { setStage('login'); setDenied(null) }}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: font, fontSize: 13, color: '#9CA3AF',
            }}>
            Try a different account
          </button>
        </>}

        {/* ── STAGE: requesting ── */}
        {stage === 'requesting' && <>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 6 }}>
            Request access
          </p>
          <p style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 24 }}>
            Requesting as <strong style={{ color: '#374151' }}>{denied?.email}</strong>
          </p>
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="Optional: add a short note (who you are, why you need access)"
            rows={3}
            style={{
              width: '100%', padding: '10px 12px', borderRadius: 8,
              border: '1px solid #E5E7EB', outline: 'none',
              fontFamily: font, fontSize: 13.5, color: '#374151',
              resize: 'none', boxSizing: 'border-box', marginBottom: 16,
            }}
          />
          <button
            onClick={sendRequest}
            disabled={sending}
            style={{
              width: '100%', padding: '11px', borderRadius: 8,
              background: sending ? '#FDB68B' : '#F06A22',
              color: '#fff', border: 'none',
              fontFamily: font, fontSize: 14, fontWeight: 600,
              cursor: sending ? 'default' : 'pointer', marginBottom: 12,
            }}>
            {sending ? 'Sending…' : 'Send request'}
          </button>
          <button
            onClick={() => setStage('denied')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: font, fontSize: 13, color: '#9CA3AF' }}>
            Back
          </button>
        </>}

        {/* ── STAGE: sent ── */}
        {stage === 'sent' && <>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 22 }}>
            ✉️
          </div>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 8 }}>
            Request sent
          </p>
          <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6 }}>
            The plan owner has been notified. You'll hear back once your access is approved.
          </p>
        </>}

        {/* ── STAGE: error ── */}
        {stage === 'error' && <>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#B91C1C', marginBottom: 8 }}>
            Something went wrong
          </p>
          <p style={{ fontSize: 13.5, color: '#6B7280', marginBottom: 24, lineHeight: 1.5 }}>
            The request couldn't be sent. Please try again or contact the plan owner directly.
          </p>
          <button
            onClick={() => setStage('requesting')}
            style={{
              background: 'none', border: '1px solid #E5E7EB', cursor: 'pointer',
              fontFamily: font, fontSize: 13, color: '#374151', padding: '8px 16px', borderRadius: 7,
            }}>
            Try again
          </button>
        </>}
      </div>
    </div>
  )
}
