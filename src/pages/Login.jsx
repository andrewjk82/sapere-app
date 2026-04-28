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
    <div className="min-h-screen bg-bg-deep flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[20%] left-[5%] w-[10vw] h-[10vw] bg-accent/30 rounded-full blur-[60px] pointer-events-none animate-pulse"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md glass-panel p-10 rounded-[2.5rem] relative z-10"
      >
        {/* Logo and Welcome */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-md border border-accent/10 mb-6 overflow-hidden">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-black text-primary tracking-tight mb-2">Welcome</h1>
          <p className="text-secondary font-medium text-sm">Elite Tutor Management System</p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500 text-sm font-bold"
          >
            <AlertCircle size={18} />
            <span>{error}</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-secondary uppercase tracking-widest px-4">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" size={18} />
              <input 
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-14"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-secondary uppercase tracking-widest px-4">Password</label>
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" size={18} />
              <input 
                type="password" required value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-14"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button type="button" className="text-xs font-bold text-accent hover:underline">Forgot password?</button>
          </div>

          <button 
            type="submit" disabled={loading}
            className="btn-primary flex items-center justify-center gap-2 group"
          >
            {loading ? 'Authenticating...' : (
              <>
                SIGN IN
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-10 flex flex-col items-center gap-8">
          <div className="relative w-full flex items-center justify-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-accent/20"></div></div>
            <span className="relative bg-white/20 backdrop-blur-md px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Or login with</span>
          </div>

          <button 
            onClick={handleGoogleLogin}
            className="w-full py-4 bg-white/50 hover:bg-white border border-accent/10 rounded-full flex items-center justify-center gap-3 transition-all shadow-sm"
          >
            <Globe size={20} className="text-accent" />
            <span className="font-bold text-primary text-sm">Google Account</span>
          </button>

          <p className="text-center text-secondary text-sm font-medium">
            Don't have an account? 
            <button onClick={onToggleMode} className="text-accent font-black hover:underline ml-2">Sign Up Now</button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
