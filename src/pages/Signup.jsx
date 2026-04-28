import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Globe, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-hidden">
      {/* 1. Header with Gradient Wave */}
      <div className="relative h-[25vh] w-full bg-gradient-to-br from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white/40 mb-2 bg-white">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-white text-xl font-black font-heading tracking-tight">SIGN UP</h1>
        </motion.div>
        <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 320" className="relative block w-full h-[60px]" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,107,864,112C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* 2. Content Area */}
      <div className="flex-grow flex flex-col items-center px-8 relative z-20 overflow-y-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md pt-6 pb-10">
          <div className="mb-8">
            <h2 className="text-4xl font-black text-[#1E1B4B] mb-2">Join Us</h2>
            <p className="text-slate-400 font-medium text-sm">Create an account to start your journey</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-500 text-sm font-bold">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-3 text-emerald-600 text-sm font-bold">
              <CheckCircle2 size={18} />
              <span>{message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] text-slate-400 uppercase font-black tracking-widest px-4">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8B5CF6] transition-colors" size={20} />
                <input 
                  type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:bg-white focus:border-[#8B5CF6]/20 text-[#1E1B4B] font-bold transition-all shadow-sm"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] text-slate-400 uppercase font-black tracking-widest px-4">Password</label>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8B5CF6] transition-colors" size={20} />
                <input 
                  type="password" required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:bg-white focus:border-[#8B5CF6]/20 text-[#1E1B4B] font-bold transition-all shadow-sm"
                  placeholder="Create password"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] text-slate-400 uppercase font-black tracking-widest px-4">Confirm Password</label>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8B5CF6] transition-colors" size={20} />
                <input 
                  type="password" required value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:bg-white focus:border-[#8B5CF6]/20 text-[#1E1B4B] font-bold transition-all shadow-sm"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <button 
              type="submit" disabled={loading}
              className="w-full bg-[#8B5CF6] text-white py-5 rounded-full text-lg font-black tracking-wider shadow-lg hover:bg-[#7C3AED] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group mt-4"
            >
              {loading ? 'CREATING ACCOUNT...' : (
                <>
                  SIGN UP NOW
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-slate-400 text-sm font-medium mt-10">
            Already have an account? 
            <button onClick={onToggleMode} className="text-[#8B5CF6] font-black hover:underline ml-2">Sign In</button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
