import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Globe, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

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
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      {/* Top Wave Background */}
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-accent overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
          fill="#ffffff"
        >
          <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div className="relative z-10 flex flex-col items-center justify-center h-full pb-10">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl border-4 border-white/20 mb-2">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-white text-xl font-bold font-heading">Sign Up</h1>
        </div>
      </div>

      <div className="flex-grow flex items-end justify-center relative z-20 pb-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md px-8 pt-10"
        >
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-text-primary mb-2">Create Account</h2>
            <p className="text-text-secondary text-sm">Join the elite tutor community</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-500 text-sm">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-3 text-emerald-600 text-sm">
              <CheckCircle2 size={18} />
              <span>{message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-text-secondary uppercase font-bold px-1">Email</label>
              <div className="relative group">
                <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" size={20} />
                <input 
                  type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-slate-100 py-3 pl-8 focus:outline-none focus:border-accent text-text-primary transition-all placeholder:text-slate-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-text-secondary uppercase font-bold px-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" size={20} />
                <input 
                  type="password" required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-slate-100 py-3 pl-8 focus:outline-none focus:border-accent text-text-primary transition-all placeholder:text-slate-300"
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-text-secondary uppercase font-bold px-1">Confirm Password</label>
              <div className="relative group">
                <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" size={20} />
                <input 
                  type="password" required value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-slate-100 py-3 pl-8 focus:outline-none focus:border-accent text-text-primary transition-all placeholder:text-slate-300"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <button 
              type="submit" disabled={loading}
              className="btn-primary w-full justify-center py-4 rounded-2xl text-lg font-bold shadow-xl mt-4"
            >
              {loading ? 'Creating Account...' : 'SIGN UP'}
            </button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-8">
            Already have an account? 
            <button onClick={onToggleMode} className="text-accent font-bold hover:underline ml-2">Sign in</button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
