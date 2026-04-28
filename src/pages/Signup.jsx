import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Globe, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
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
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center justify-center p-6 font-sans antialiased text-[#111827]">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[400px] flex flex-col items-center"
      >
        <div className="mb-10 flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl overflow-hidden mb-6 grayscale">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-black tracking-tight mb-2">Create Account</h1>
          <p className="text-slate-400 font-medium text-sm">Start your journey with us</p>
        </div>

        {error && (
          <div className="w-full mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm font-semibold">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {message && (
          <div className="w-full mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-3 text-emerald-600 text-sm font-semibold">
            <CheckCircle2 size={16} />
            <span>{message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="space-y-1 group">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8B5CF6] transition-colors" size={18} />
              <input 
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:bg-white focus:border-[#8B5CF6]/30 focus:ring-4 focus:ring-[#8B5CF6]/5 text-sm font-medium transition-all"
                placeholder="Email address"
              />
            </div>
          </div>

          <div className="space-y-1 group">
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8B5CF6] transition-colors" size={18} />
              <input 
                type="password" required value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:bg-white focus:border-[#8B5CF6]/30 focus:ring-4 focus:ring-[#8B5CF6]/5 text-sm font-medium transition-all"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="space-y-1 group">
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8B5CF6] transition-colors" size={18} />
              <input 
                type="password" required value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:bg-white focus:border-[#8B5CF6]/30 focus:ring-4 focus:ring-[#8B5CF6]/5 text-sm font-medium transition-all"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <button 
            type="submit" disabled={loading}
            className="w-full bg-[#8B5CF6] text-white py-4 rounded-xl text-sm font-bold shadow-sm hover:bg-[#7C3AED] hover:shadow-lg hover:shadow-[#8B5CF6]/20 transition-all flex items-center justify-center gap-2 group mt-2"
          >
            {loading ? 'Creating Account...' : (
              <>
                Create Account
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <p className="mt-10 text-slate-400 text-sm font-medium text-center">
          Already have an account? 
          <button onClick={onToggleMode} className="text-[#8B5CF6] font-bold hover:underline ml-2">Sign In</button>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
