import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Globe, AlertCircle, ArrowRight, CheckCircle2, Award } from 'lucide-react';
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
    <div className="flex min-h-screen bg-white font-sans text-slate-900">
      
      {/* Left: Signup Form Section */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 md:px-24 lg:px-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm mx-auto"
        >
          {/* Logo for mobile only */}
          <div className="lg:hidden w-12 h-12 bg-[#8B5CF6] rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-[#8B5CF6]/30">
            <span className="text-white font-black text-xl">S</span>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-slate-900">Create Account</h1>
            <p className="text-slate-500 font-medium">Join the elite tutor community today.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm font-semibold">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-3 text-emerald-600 text-sm font-semibold">
              <CheckCircle2 size={18} />
              <span>{message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border-2 border-slate-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#8B5CF6] focus:ring-4 focus:ring-[#8B5CF6]/10 text-slate-900 font-medium transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border-2 border-slate-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#8B5CF6] focus:ring-4 focus:ring-[#8B5CF6]/10 text-slate-900 font-medium transition-all"
                  placeholder="Create password"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" required value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-white border-2 border-slate-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#8B5CF6] focus:ring-4 focus:ring-[#8B5CF6]/10 text-slate-900 font-medium transition-all"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <button 
              type="submit" disabled={loading}
              className="w-full bg-[#8B5CF6] text-white py-4 rounded-xl text-sm font-bold shadow-md hover:bg-[#7C3AED] hover:shadow-xl hover:shadow-[#8B5CF6]/20 transition-all flex items-center justify-center gap-2 group mt-6"
            >
              {loading ? 'Creating Account...' : (
                <>
                  Sign Up
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="mt-10 text-center text-slate-500 text-sm font-medium">
            Already have an account? 
            <button onClick={onToggleMode} className="text-[#8B5CF6] font-bold hover:underline ml-1.5">Sign in</button>
          </p>
        </motion.div>
      </div>

      {/* Right: Brand/Showcase Section (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-1 relative bg-slate-900 overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-bl from-[#1E1B4B] via-[#4C1D95] to-[#8B5CF6] opacity-90"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 w-full max-w-lg p-12"
        >
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-8">
            <Award className="text-[#A78BFA]" size={32} />
          </div>
          <h2 className="text-4xl font-black text-white leading-tight mb-6">
            Join the ranks of <br/><span className="text-[#A78BFA]">top educators.</span>
          </h2>
          <p className="text-lg text-white/70 font-medium leading-relaxed mb-12">
            Access powerful tools, organize your curriculum, and deliver exceptional results. Your students deserve the best.
          </p>
          
          <div className="flex gap-4">
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 flex-1">
               <h4 className="text-white font-bold text-xl">100+</h4>
               <p className="text-white/60 text-xs mt-1 uppercase tracking-wider font-bold">Students Managed</p>
             </div>
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 flex-1">
               <h4 className="text-white font-bold text-xl">99.9%</h4>
               <p className="text-white/60 text-xs mt-1 uppercase tracking-wider font-bold">Uptime Reliability</p>
             </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Signup;
