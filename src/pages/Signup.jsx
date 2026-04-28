import React, { useState } from 'react';
import { Mail, Lock, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthLayout from './AuthLayout';

const Signup = ({ onToggleMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setMessage('');
      setLoading(true);
      await signup(email, password);
      setMessage('Account created! Verification email sent.');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      eyebrow=""
      title="Create account"
      description=""
      sideLabel="Lavender premium theme"
      sideTitle="Create a refined home for every student relationship."
      sideDescription="A modern sign-up experience that feels soft, trustworthy, and distinctly high-end."
      sideStats={[
        { value: 'Fast', label: 'setup flow' },
        { value: 'Secure', label: 'email verification' },
      ]}
      sidePoints={[
        'Bring students, subjects, and planning into one place',
        'Use a visual tone that feels clean without feeling cold',
        'Start with a premium experience from day one',
      ]}
    >
      {error && (
        <div className="auth-message auth-message--error">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {message && (
        <div className="auth-message auth-message--success">
          <CheckCircle2 size={18} />
          <span>{message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="auth-field">
          <label htmlFor="signup-email">Email address</label>
          <div className="auth-input">
            <Mail size={18} />
            <input
              id="signup-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="signup-password">Password</label>
          <div className="auth-input">
            <Lock size={18} />
            <input
              id="signup-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
            />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="signup-confirm-password">Confirm password</label>
          <div className="auth-input">
            <Lock size={18} />
            <input
              id="signup-confirm-password"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repeat your password"
            />
          </div>
        </div>

        <button type="submit" disabled={loading} className="auth-submit">
          {loading ? 'Creating account...' : (
            <>
              Create account
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>

      <p className="auth-footer">
        Already have an account?
        <button onClick={onToggleMode} className="auth-link">Sign in</button>
      </p>
    </AuthLayout>
  );
};

export default Signup;
