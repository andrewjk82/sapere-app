import React, { useState } from 'react';
import { Mail, Lock, Globe, AlertCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthLayout from './AuthLayout';

const Login = ({ onToggleMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, loginWithGoogle } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
    } catch (err) {
      setError('Invalid email or password');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError('');
      await loginWithGoogle();
    } catch (err) {
      setError('Google login failed');
      console.error(err);
    }
  };

  return (
    <AuthLayout
      eyebrow=""
      title="Sign in"
      description=""
      sideLabel="Luxury made simple"
      sideTitle="Run your tutoring business with calm confidence."
      sideDescription="Soft surfaces, thoughtful structure, and the clarity to focus on every student."
      sideStats={[
        { value: '24/7', label: 'smooth access' },
        { value: '1 hub', label: 'for students and planning' },
      ]}
      sidePoints={[
        'Track learner progress in one elegant dashboard',
        'Keep class notes, schedules, and records in sync',
        'Present a premium experience from the first login',
      ]}
    >
      {error && (
        <div className="auth-message auth-message--error">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="auth-field">
          <label htmlFor="login-email">Email address</label>
          <div className="auth-input">
            <Mail size={18} />
            <input
              id="login-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="auth-field">
          <div className="auth-field__row">
            <label htmlFor="login-password">Password</label>
            <button type="button" className="auth-link">Forgot?</button>
          </div>
          <div className="auth-input">
            <Lock size={18} />
            <input
              id="login-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button type="submit" disabled={loading} className="auth-submit">
          {loading ? 'Signing in...' : (
            <>
              Sign in
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>

      <div className="auth-divider">or</div>

      <button onClick={handleGoogleLogin} className="auth-social">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="auth-social__icon" />
        <span>Continue with Google</span>
      </button>

      <p className="auth-footer">
        Don&apos;t have an account?
        <button onClick={onToggleMode} className="auth-link">Sign up</button>
      </p>
    </AuthLayout>
  );
};

export default Login;
