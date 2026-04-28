import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Globe, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
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
    <div className="flex min-h-screen bg-white font-sans text-slate-900">
      
      {/* Left: Login Form Section */}
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
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-slate-900">Sign in</h1>
            <p className="text-slate-500 font-medium">Welcome back to Sapere Aude Academia.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm font-semibold">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border-2 border-slate-200 rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-[#8B5CF6] focus:ring-4 focus:ring-[#8B5CF6]/10 text-slate-900 font-medium transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <button type="button" className="text-sm font-bold text-[#8B5CF6] hover:text-[#7C3AED] transition-colors">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border-2 border-slate-200 rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-[#8B5CF6] focus:ring-4 focus:ring-[#8B5CF6]/10 text-slate-900 font-medium transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" disabled={loading}
              className="w-full bg-[#8B5CF6] text-white py-4 rounded-xl text-sm font-bold shadow-md hover:bg-[#7C3AED] hover:shadow-xl hover:shadow-[#8B5CF6]/20 transition-all flex items-center justify-center gap-2 group mt-2"
            >
              {loading ? 'Signing in...' : (
                <>
                  Sign in
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-slate-200"></div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Or continue with</span>
            <div className="flex-1 h-[1px] bg-slate-200"></div>
          </div>

          <button 
            onClick={handleGoogleLogin}
            className="mt-8 w-full py-3.5 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all text-sm font-bold text-slate-700"
          >
            <Globe size={18} className="text-[#8B5CF6]" />
            Google
          </button>

          <p className="mt-10 text-center text-slate-500 text-sm font-medium">
            Don't have an account? 
            <button onClick={onToggleMode} className="text-[#8B5CF6] font-bold hover:underline ml-1.5">Sign up</button>
          </p>
        </motion.div>
      </div>

      {/* Right: Brand/Showcase Section (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-1 relative bg-slate-900 overflow-hidden items-center justify-center">
        {/* Dynamic Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E1065] via-[#4C1D95] to-[#7C3AED] opacity-90"></div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        {/* Floating Brand Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 w-full max-w-lg p-12"
        >
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-8">
            <ShieldCheck className="text-white" size={32} />
          </div>
          <h2 className="text-4xl font-black text-white leading-tight mb-6">
            Manage your students <br/><span className="text-[#A78BFA]">with ultimate precision.</span>
          </h2>
          <p className="text-lg text-white/70 font-medium leading-relaxed">
            The premium platform designed exclusively for elite tutors. Streamline your workflow, track progress, and focus on what matters most—teaching.
          </p>
          
          {/* Mockup UI Element */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]"></div>
              <div>
                <div className="h-2 w-24 bg-white/20 rounded-full mb-2"></div>
                <div className="h-2 w-16 bg-white/10 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <div className="h-2 w-full bg-white/10 rounded-full"></div>
              <div className="h-2 w-4/5 bg-white/10 rounded-full"></div>
              <div className="h-2 w-full bg-white/10 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Login;
