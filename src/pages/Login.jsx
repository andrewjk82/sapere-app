import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Globe, AlertCircle, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-hidden">
      {/* 1. Header with Gradient Wave */}
      <div className="relative h-[35vh] w-full bg-gradient-to-br from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] flex items-center justify-center">
        {/* Animated Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-10 w-60 h-60 bg-white rounded-full blur-[100px]"></div>
        </div>

        {/* Brand Identity */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/40 mb-3 bg-white">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-white text-2xl font-black font-heading tracking-tight">SAPERE AUDE</h1>
          <p className="text-white/90 text-[10px] font-black uppercase tracking-[0.4em]">Academia</p>
        </motion.div>

        {/* SVG Wave Transition */}
        <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 320" className="relative block w-full h-[80px]" preserveAspectRatio="none">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,107,864,112C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* 2. Content Area */}
      <div className="flex-grow flex flex-col items-center px-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Welcome Text */}
          <div className="mb-10 mt-4">
            <h2 className="text-4xl font-black text-[#1E1B4B] mb-2">Welcome!</h2>
            <p className="text-slate-400 font-medium text-sm">Please sign in to your account</p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-500 text-sm font-bold"
            >
              <AlertCircle size={18} />
              <span>{error}</span>
            </motion.div>
          )}

          {/* Form */}
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
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex justify-end pr-2">
              <button type="button" className="text-xs font-black text-[#8B5CF6] hover:underline">Forgot Password?</button>
            </div>

            <button 
              type="submit" disabled={loading}
              className="w-full bg-[#8B5CF6] text-white py-5 rounded-full text-lg font-black tracking-wider shadow-lg hover:bg-[#7C3AED] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group mt-4"
            >
              {loading ? 'AUTHENTICATING...' : (
                <>
                  SIGN IN
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Social and Switch */}
          <div className="mt-12 space-y-8 pb-10">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <span className="relative bg-white px-6 text-[10px] font-black text-slate-300 uppercase tracking-widest">Or login with</span>
            </div>

            <button 
              onClick={handleGoogleLogin}
              className="w-full py-4 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center gap-3 hover:border-[#8B5CF6]/20 hover:bg-slate-50 transition-all shadow-sm"
            >
              <Globe size={20} className="text-[#8B5CF6]" />
              <span className="font-black text-[#1E1B4B] text-sm">Google Account</span>
            </button>

            <p className="text-center text-slate-400 text-sm font-medium">
              Don't have an account? 
              <button onClick={onToggleMode} className="text-[#8B5CF6] font-black hover:underline ml-2">Sign Up Now</button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
