import { GoogleLogin } from '@react-oauth/google'
import { ALLOWED_EMAILS } from '../allowedEmails'

const font = "'Calibri', 'Trebuchet MS', Arial, sans-serif"

function decodeJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')))
  } catch {
    return null
  }
}

export default function Login({ onAuth }) {
  const handleSuccess = (response) => {
    const payload = decodeJwt(response.credential)
    if (!payload) return
    const email = payload.email?.toLowerCase()
    if (ALLOWED_EMAILS.map(e => e.toLowerCase()).includes(email)) {
      onAuth({ email, name: payload.name, picture: payload.picture })
    } else {
      alert(`Access denied.\n\n${email} is not on the approved list.\nContact the plan owner to request access.`)
    }
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

        <p style={{ fontSize: 15, color: '#374151', marginBottom: 8, fontWeight: 600 }}>
          Project Kickoff Plan
        </p>
        <p style={{ fontSize: 13.5, color: '#9CA3AF', marginBottom: 36, lineHeight: 1.5 }}>
          Sign in with your Google account to continue.<br />Access is restricted to approved team members.
        </p>

        {/* Google Sign-In button */}
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
      </div>
    </div>
  )
}
