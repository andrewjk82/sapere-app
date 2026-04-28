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
      {/* 1. Header with Gradient Background */}
      <div className="relative h-80 w-full bg-accent flex flex-col items-center justify-center">
        {/* Simple Gradient Circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 mb-3 bg-white">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-white text-3xl font-black tracking-tight">SAPERE AUDE</h1>
          <p className="text-white/90 text-xs font-black uppercase tracking-widest">Academia</p>
        </motion.div>

        {/* CSS Wave Effect */}
        <div 
          className="absolute bottom-0 left-0 w-full h-16 bg-white" 
          style={{ borderRadius: '100% 100% 0 0 / 100% 100% 0 0' }}
        ></div>
      </div>

      {/* 2. Form Content Area */}
      <div className="flex-grow flex flex-col items-center px-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black text-text-primary mb-2">Welcome!</h2>
            <p className="text-slate-400 font-medium text-sm">Please sign in to your account</p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-500 text-sm font-bold">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 group">
              <label className="text-xs text-slate-400 uppercase font-black tracking-widest px-4">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 transition-colors" size={20} />
                <input 
                  type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:bg-white text-text-primary font-bold transition-all shadow-sm"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="text-xs text-slate-400 uppercase font-black tracking-widest px-4">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 transition-colors" size={20} />
                <input 
                  type="password" required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:bg-white text-text-primary font-bold transition-all shadow-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex justify-end pr-2">
              <button type="button" className="text-xs font-black text-accent hover:underline">Forgot Password?</button>
            </div>

            <button 
              type="submit" disabled={loading}
              className="w-full bg-accent text-white py-5 rounded-full text-lg font-black tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group mt-4"
            >
              {loading ? 'AUTHENTICATING...' : (
                <>
                  SIGN IN
                  <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 space-y-8 pb-10">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <span className="relative bg-white px-6 text-xs font-black text-slate-300 uppercase tracking-widest">Or login with</span>
            </div>

            <button 
              onClick={handleGoogleLogin}
              className="w-full py-4 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-sm"
            >
              <Globe size={20} className="text-accent" />
              <span className="font-black text-text-primary text-sm">Google Account</span>
            </button>

            <p className="text-center text-slate-400 text-sm font-medium">
              Don't have an account? 
              <button onClick={onToggleMode} className="text-accent font-black hover:underline ml-2">Sign Up Now</button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
