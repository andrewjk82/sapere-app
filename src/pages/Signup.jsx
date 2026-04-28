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
    <div className="min-h-screen flex flex-col bg-bg-deep font-sans">
      <div className="relative w-full h-64 bg-accent flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 mb-2 bg-white">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-white text-2xl font-bold font-heading">SIGN UP</h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-bg-deep" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}></div>
      </div>

      <div className="flex-grow bg-bg-deep px-6 -mt-8 relative z-20 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-text-primary mb-2">Create Account</h2>
            <p className="text-text-secondary text-sm">Join our elite tutor community</p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500 text-sm">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {message && (
            <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3 text-emerald-600 text-sm">
              <CheckCircle2 size={18} />
              <span>{message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="space-y-2 group">
              <label className="text-[10px] text-text-secondary uppercase font-black tracking-widest px-1">Email Address</label>
              <div className="relative border-b-2 border-slate-200 group-focus-within:border-accent transition-all duration-300">
                <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-accent" size={18} />
                <input 
                  type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent py-4 pl-8 focus:outline-none text-text-primary font-medium"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] text-text-secondary uppercase font-black tracking-widest px-1">Password</label>
              <div className="relative border-b-2 border-slate-200 group-focus-within:border-accent transition-all duration-300">
                <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-accent" size={18} />
                <input 
                  type="password" required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent py-4 pl-8 focus:outline-none text-text-primary font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] text-text-secondary uppercase font-black tracking-widest px-1">Confirm Password</label>
              <div className="relative border-b-2 border-slate-200 group-focus-within:border-accent transition-all duration-300">
                <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-accent" size={18} />
                <input 
                  type="password" required value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-transparent py-4 pl-8 focus:outline-none text-text-primary font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" disabled={loading}
              className="btn-primary w-full justify-center py-5 rounded-2xl text-lg font-black tracking-wide shadow-glow mt-4"
            >
              {loading ? 'CREATING ACCOUNT...' : 'SIGN UP NOW'}
            </button>
          </form>

          <p className="text-center text-text-secondary text-sm mt-12">
            Already have an account? 
            <button onClick={onToggleMode} className="text-accent font-black hover:underline ml-2">Sign In</button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
