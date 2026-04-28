import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, GraduationCap, Code, Globe, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

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
      setError('Failed to log in. Please check your credentials.');
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
      setError('Failed to log in with Google.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-bg-deep">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 w-full max-w-md border-accent/10"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-glow mb-4">
            <GraduationCap className="text-bg-deep" size={32} />
          </div>
          <h1 className="text-3xl font-bold font-heading">Welcome Back</h1>
          <p className="text-text-secondary mt-2">Elite Tutor Management System</p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm"
          >
            <AlertCircle size={18} />
            <span>{error}</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-text-secondary uppercase font-bold px-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-glass border border-glass-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-accent text-text-primary transition-all"
                placeholder="andrew@sapere.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-text-secondary uppercase font-bold px-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-glass border border-glass-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-accent text-text-primary transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary w-full justify-center py-4 mt-2 text-lg disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-bg-card px-4 text-text-secondary">Or continue with</span>
          </div>
        </div>

        <button 
          onClick={handleGoogleLogin}
          className="w-full py-3 bg-glass border border-glass-border rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 transition-all mb-6"
        >
          <Globe size={20} className="text-accent" />
          <span className="font-semibold">Google Account</span>
        </button>

        <p className="text-center text-text-secondary text-sm">
          Don't have an account? 
          <button onClick={onToggleMode} className="text-accent font-bold hover:underline ml-2">Sign Up</button>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
