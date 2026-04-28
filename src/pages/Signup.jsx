import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Globe, AlertCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
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
    <div className="min-h-screen bg-bg-deep flex items-center justify-center p-6 relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md glass-panel p-10 rounded-[2.5rem] relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md border border-accent/10 mb-4 overflow-hidden">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-black text-primary tracking-tight mb-2">Create Account</h1>
          <p className="text-secondary font-medium text-sm">Join the elite tutor community</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500 text-sm font-bold">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {message && (
          <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3 text-emerald-600 text-sm font-bold">
            <CheckCircle2 size={18} />
            <span>{message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-secondary uppercase tracking-widest px-4">Email</label>
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" size={18} />
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="pl-14" placeholder="name@example.com" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black text-secondary uppercase tracking-widest px-4">Password</label>
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" size={18} />
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="pl-14" placeholder="Create password" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black text-secondary uppercase tracking-widest px-4">Confirm</label>
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" size={18} />
              <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="pl-14" placeholder="Confirm password" />
            </div>
          </div>

          <button type="submit" disabled={loading} className="btn-primary flex items-center justify-center gap-2 group mt-4">
            {loading ? 'Creating Account...' : (
              <>
                SIGN UP NOW
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-secondary text-sm font-medium mt-10">
          Already have an account? 
          <button onClick={onToggleMode} className="text-accent font-black hover:underline ml-2">Sign In</button>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
