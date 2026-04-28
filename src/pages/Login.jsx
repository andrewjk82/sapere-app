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
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      {/* Top Wave Background */}
      <div className="absolute top-0 left-0 w-full h-[40vh] bg-accent overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
          fill="#ffffff"
        >
          <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 flex flex-col items-center justify-center h-full pb-20"
        >
          <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 mb-4">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-white text-2xl font-bold font-heading tracking-tight">SAPERE AUDE</h1>
          <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">Academia</p>
        </motion.div>
      </div>

      {/* Login Form Section */}
      <div className="flex-grow flex items-end justify-center relative z-20 pb-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md px-8"
        >
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-text-primary mb-2">Sign in</h2>
            <p className="text-text-secondary text-sm">Please login to continue</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-500 text-sm">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-text-secondary uppercase font-bold px-1">Email</label>
              <div className="relative group">
                <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" size={20} />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-slate-100 py-3 pl-8 pr-4 focus:outline-none focus:border-accent text-text-primary transition-all placeholder:text-slate-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-text-secondary uppercase font-bold px-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" size={20} />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-slate-100 py-3 pl-8 pr-4 focus:outline-none focus:border-accent text-text-primary transition-all placeholder:text-slate-300"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button type="button" className="text-xs font-bold text-accent hover:underline">Forgot Password?</button>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="btn-primary w-full justify-center py-4 rounded-2xl text-lg font-bold shadow-xl active:scale-[0.98] mt-4"
            >
              {loading ? 'Logging in...' : 'LOGIN'}
            </button>
          </form>

          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 w-full">
              <div className="flex-grow border-t border-slate-100"></div>
              <span className="text-xs text-slate-400 uppercase font-bold">Social Login</span>
              <div className="flex-grow border-t border-slate-100"></div>
            </div>

            <button 
              onClick={handleGoogleLogin}
              className="w-full py-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-all"
            >
              <Globe size={20} className="text-accent" />
              <span className="font-bold text-text-primary text-sm">Sign in with Google</span>
            </button>

            <p className="text-center text-slate-400 text-sm">
              Don't have an account? 
              <button onClick={onToggleMode} className="text-accent font-bold hover:underline ml-2">Sign up</button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
