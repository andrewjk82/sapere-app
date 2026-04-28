import React, { useEffect, useMemo, useState } from 'react';
import { Bell, KeyRound, LogOut, Mail, ShieldCheck, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import AvatarPickerModal from './AvatarPickerModal';

const Settings = () => {
  const { user, isAdmin, logout, resetPassword } = useAuth();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [editData, setEditData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    school: '',
    year: ''
  });

  const displayName = useMemo(() => profile?.firstName ? `${profile.firstName} ${profile.lastName}` : (user?.displayName || user?.email?.split('@')[0] || 'Account'), [profile, user]);
  const fallbackUrl = useMemo(() => {
    if (user?.photoURL) return user.photoURL;
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user?.email || 'sapere')}`;
  }, [user?.photoURL, user?.email]);

  const avatarUrl = profile?.avatarUrl || (profile?.avatarStyle && profile?.avatarSeed
    ? `https://api.dicebear.com/7.x/${profile.avatarStyle}/svg?seed=${encodeURIComponent(profile.avatarSeed)}`
    : fallbackUrl);

  useEffect(() => {
    if (!user?.uid) return undefined;
    const ref = doc(db, 'users', user.uid);
    return onSnapshot(ref, (snap) => {
      const data = snap.exists() ? snap.data() : null;
      setProfile(data);
      if (data) {
        setEditData({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          phone: data.phone || '',
          address: data.address || '',
          school: data.school || '',
          year: data.year || ''
        });
      }
    });
  }, [user?.uid]);

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

  const handleSaveProfile = async () => {
    if (!user?.uid) return;
    try {
      setError('');
      setMessage('');
      setLoading(true);
      await setDoc(doc(db, 'users', user.uid), {
        ...editData,
        displayName: `${editData.firstName} ${editData.lastName}`,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      setMessage('Profile updated successfully!');
    } catch (e) {
      setError('Failed to update profile.');
      console.error(e);
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
            <h3>Profile & Personal Info</h3>
            {isAdmin && (
              <span className="page-pill">
                <ShieldCheck size={14} />
                Admin
              </span>
            )}
          </div>

          <div className="settings-profile" style={{ marginBottom: '2rem' }}>
            <div className="settings-profile__avatar clickable-avatar" onClick={() => setAvatarOpen(true)} role="button" tabIndex={0}>
              <img src={avatarUrl} alt="Avatar" />
              <div className="avatar-overlay">Change</div>
            </div>
            <div>
              <strong>{displayName}</strong>
              <p className="settings-muted">{user?.email}</p>
            </div>
          </div>

          <div className="app-form-grid">
            <div className="app-form-field">
              <label>Given Name</label>
              <input 
                type="text" 
                value={editData.firstName} 
                onChange={(e) => setEditData({...editData, firstName: e.target.value})} 
                placeholder="First name"
              />
            </div>
            <div className="app-form-field">
              <label>Surname</label>
              <input 
                type="text" 
                value={editData.lastName} 
                onChange={(e) => setEditData({...editData, lastName: e.target.value})} 
                placeholder="Last name"
              />
            </div>
            <div className="app-form-field">
              <label>Phone Number</label>
              <input 
                type="text" 
                value={editData.phone} 
                onChange={(e) => setEditData({...editData, phone: e.target.value})} 
                placeholder="04xx xxx xxx"
              />
            </div>
            
            {profile?.role === 'student' && (
              <>
                <div className="app-form-field">
                  <label>Year / Grade</label>
                  <input 
                    type="text" 
                    value={editData.year} 
                    onChange={(e) => setEditData({...editData, year: e.target.value})} 
                    placeholder="e.g. Year 10"
                  />
                </div>
                <div className="app-form-field" style={{ gridColumn: 'span 2' }}>
                  <label>School Name</label>
                  <input 
                    type="text" 
                    value={editData.school} 
                    onChange={(e) => setEditData({...editData, school: e.target.value})} 
                    placeholder="e.g. Central High"
                  />
                </div>
              </>
            )}

            <div className="app-form-field" style={{ gridColumn: 'span 2' }}>
              <label>Home Address</label>
              <input 
                type="text" 
                value={editData.address} 
                onChange={(e) => setEditData({...editData, address: e.target.value})} 
                placeholder="Full street address"
              />
            </div>

            <div style={{ marginTop: '1rem', gridColumn: 'span 2' }}>
              <button 
                className="app-button app-button--primary" 
                onClick={handleSaveProfile}
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
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
              <button className="app-button app-button--secondary" onClick={handleResetPassword} disabled={loading} style={{ width: '100%' }}>
                Send password reset email
              </button>
              <div style={{ height: '8px' }} />
              <button className="app-button app-button--primary" onClick={logout} disabled={loading} style={{ width: '100%' }}>
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
            <div className="app-empty" style={{ fontSize: '0.82rem' }}>
              Next step: session reminders, student follow-ups, and weekly summaries.
            </div>
          </section>
        </aside>
      </div>

      <AvatarPickerModal
        open={avatarOpen}
        title="My Persona"
        subtitle="Choose your face"
        initialStyle={profile?.avatarStyle || 'avataaars'}
        initialSeed={profile?.avatarSeed || (user?.email?.split('@')[0] ?? '')}
        onClose={() => setAvatarOpen(false)}
        onApply={async ({ avatarStyle, avatarSeed, avatarUrl: nextUrl }) => {
          if (!user?.uid) return;
          await setDoc(
            doc(db, 'users', user.uid),
            { avatarStyle, avatarSeed, avatarUrl: nextUrl, updatedAt: new Date().toISOString() },
            { merge: true },
          );
          setAvatarOpen(false);
        }}
      />
    </div>
  );
};

export default Settings;
