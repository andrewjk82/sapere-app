import React, { useMemo, useState } from 'react';
import { Bell, KeyRound, LogOut, Mail, ShieldCheck, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Settings = () => {
  const { user, isAdmin, logout, resetPassword } = useAuth();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const displayName = useMemo(() => user?.displayName || user?.email?.split('@')[0] || 'Account', [user]);

  const handleResetPassword = async () => {
    if (!user?.email) return;
    try {
      setError('');
      setMessage('');
      setLoading(true);
      await resetPassword(user.email);
      setMessage('Password reset email sent.');
    } catch (e) {
      setError(e?.message || 'Could not send reset email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>Settings</h2>
          <p>Account preferences, privacy, and notifications — all in one calm place.</p>
        </div>
      </div>

      {(message || error) && (
        <div className="app-panel page-card">
          <div className={`settings-message ${error ? 'is-error' : 'is-success'}`}>
            {error || message}
          </div>
        </div>
      )}

      <div className="app-grid app-grid--content">
        <section className="app-panel page-card">
          <div className="page-card__header">
            <h3>Profile</h3>
            {isAdmin && (
              <span className="page-pill">
                <ShieldCheck size={14} />
                Admin
              </span>
            )}
          </div>

          <div className="settings-profile">
            <div className="settings-profile__avatar">
              <img src={user?.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`} alt="Avatar" />
            </div>
            <div>
              <strong>{displayName}</strong>
              <p className="settings-muted">{user?.email}</p>
            </div>
          </div>

          <div className="settings-list">
            <div className="settings-item">
              <div className="settings-item__icon"><User size={18} /></div>
              <div className="settings-item__main">
                <strong>Name</strong>
                <p className="settings-muted">Managed by your sign-in provider.</p>
              </div>
              <span className="page-pill">Read-only</span>
            </div>

            <div className="settings-item">
              <div className="settings-item__icon"><Mail size={18} /></div>
              <div className="settings-item__main">
                <strong>Email</strong>
                <p className="settings-muted">Used for account verification and notifications.</p>
              </div>
              <span className="page-pill">Read-only</span>
            </div>
          </div>
        </section>

        <aside className="app-page">
          <section className="app-panel page-card">
            <div className="page-card__header">
              <h3>Security</h3>
              <span className="page-pill">
                <KeyRound size={14} />
                Password
              </span>
            </div>

            <div className="settings-actions">
              <button className="app-button app-button--secondary" onClick={handleResetPassword} disabled={loading}>
                Send password reset email
              </button>
              <button className="app-button app-button--primary" onClick={logout} disabled={loading}>
                <LogOut size={18} />
                Sign out
              </button>
            </div>
          </section>

          <section className="app-panel page-card">
            <div className="page-card__header">
              <h3>Notifications</h3>
              <span className="page-pill">
                <Bell size={14} />
                Coming soon
              </span>
            </div>
            <div className="app-empty">
              Next step: session reminders, student follow-ups, and weekly summaries — all aligned to the same premium theme.
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Settings;
