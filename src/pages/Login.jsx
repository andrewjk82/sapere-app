import React, { useState } from 'react';
import { Mail, Lock, Globe, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthLayout from './AuthLayout';

const Login = ({ onToggleMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, loginWithGoogle, resetPassword } = useAuth();

  // Load saved email on mount
  React.useEffect(() => {
    const savedEmail = localStorage.getItem('sapere_remembered_email');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setMessage('');
      setLoading(true);
      await login(email, password);
      
      // Save or remove email based on rememberMe
      if (rememberMe) {
        localStorage.setItem('sapere_remembered_email', email);
      } else {
        localStorage.removeItem('sapere_remembered_email');
      }
    } catch (err) {
      setError('Invalid email or password');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      return setError('Please enter your email address first');
    }
    try {
      setError('');
      setLoading(true);
      await resetPassword(email);
      setMessage('Password reset email sent! Check your inbox.');
    } catch (err) {
      setError('Failed to send reset email. Check if the email is correct.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError('');
      setMessage('');
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
      sideLabel="Academic Growth"
      sideTitle="Nurture steady progress through daily habits."
      sideDescription="Our platform ensures children stay engaged with their studies through structured schedules and rewarding daily challenges."
      sideStats={[
        { value: 'Habit', label: 'forming tasks' },
        { value: 'Smart', label: 'schedule tracking' },
      ]}
      sidePoints={[
        'Integrated schedule checking to never miss a lesson',
        'Daily problem solving designed for long-term retention',
        'Tools that help children build independent study habits',
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
          <div className="auth-remember">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="login-password">Password</label>
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
          <button type="button" onClick={handleForgotPassword} className="auth-help-link">
            Forgot password?
          </button>
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
