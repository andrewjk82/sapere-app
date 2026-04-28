import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Globe, AlertCircle } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col bg-bg-deep font-sans">
      {/* Curved Header Background */}
      <div className="relative w-full h-80 bg-accent flex flex-col items-center justify-center overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        
        {/* Logo and Title */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 mb-4 bg-white">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-white text-3xl font-bold font-heading tracking-tight mb-1">SAPERE AUDE</h1>
          <p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.3em]">Academia</p>
        </motion.div>

        {/* Bottom Curve (CSS version for stability) */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-bg-deep" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}></div>
      </div>

      {/* Main Login Card Area */}
      <div className="flex-grow bg-bg-deep px-6 -mt-8 relative z-20 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-text-primary mb-2">Sign in</h2>
            <p className="text-text-secondary text-sm">Please login to access your dashboard</p>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500 text-sm"
            >
              <AlertCircle size={18} />
              <span>{error}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="space-y-2 group">
              <label className="text-[10px] text-text-secondary uppercase font-black tracking-widest px-1">Email Address</label>
              <div className="relative border-b-2 border-slate-200 group-focus-within:border-accent transition-all duration-300">
                <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-accent" size={18} />
                <input 
                  type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent py-4 pl-8 pr-2 focus:outline-none text-text-primary font-medium"
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
                  className="w-full bg-transparent py-4 pl-8 pr-2 focus:outline-none text-text-primary font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex justify-end -mt-4">
              <button type="button" className="text-xs font-bold text-accent hover:underline">Forgot password?</button>
            </div>

            <button 
              type="submit" disabled={loading}
              className="btn-primary w-full justify-center py-5 rounded-2xl text-lg font-black tracking-wide shadow-glow hover:scale-[1.02] active:scale-[0.98] mt-4"
            >
              {loading ? 'AUTHENTICATING...' : 'SIGN IN'}
            </button>
          </form>

          {/* Social and Footer */}
          <div className="mt-12 space-y-8">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
              <span className="relative bg-bg-deep px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Or continue with</span>
            </div>

            <button 
              onClick={handleGoogleLogin}
              className="w-full py-4 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center gap-3 hover:border-accent/20 hover:bg-accent/5 transition-all shadow-sm group"
            >
              <Globe size={20} className="text-accent group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-text-primary">Google Account</span>
            </button>

            <p className="text-center text-text-secondary text-sm">
              New here? 
              <button onClick={onToggleMode} className="text-accent font-black hover:underline ml-2">Create Account</button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
