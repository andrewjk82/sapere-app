import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Globe, AlertCircle, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center justify-center p-6 font-sans antialiased text-[#111827]">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[400px] flex flex-col items-center"
      >
        {/* Minimal Branding */}
        <div className="mb-12 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-700">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-black tracking-tight mb-2">Sapere Aude</h1>
          <p className="text-slate-400 font-medium text-sm">Empowering elite education</p>
        </div>

        {error && (
          <div className="w-full mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm font-semibold">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div className="space-y-1">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8B5CF6] transition-colors" size={18} />
              <input 
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:bg-white focus:border-[#8B5CF6]/30 focus:ring-4 focus:ring-[#8B5CF6]/5 text-sm font-medium transition-all"
                placeholder="Email address"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8B5CF6] transition-colors" size={18} />
              <input 
                type="password" required value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:bg-white focus:border-[#8B5CF6]/30 focus:ring-4 focus:ring-[#8B5CF6]/5 text-sm font-medium transition-all"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button type="button" className="text-xs font-semibold text-slate-400 hover:text-[#8B5CF6] transition-colors">Forgot password?</button>
          </div>

          <button 
            type="submit" disabled={loading}
            className="w-full bg-[#8B5CF6] text-white py-4 rounded-xl text-sm font-bold shadow-sm hover:bg-[#7C3AED] hover:shadow-lg hover:shadow-[#8B5CF6]/20 transition-all flex items-center justify-center gap-2 group"
          >
            {loading ? 'Processing...' : (
              <>
                Continue
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="w-full mt-10 mb-8 flex items-center gap-4">
          <div className="flex-grow h-[1px] bg-slate-100"></div>
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Or</span>
          <div className="flex-grow h-[1px] bg-slate-100"></div>
        </div>

        {/* Social Login */}
        <button 
          onClick={handleGoogleLogin}
          className="w-full py-3.5 bg-white border border-slate-100 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all text-sm font-semibold text-slate-600"
        >
          <Globe size={18} className="text-[#8B5CF6]" />
          Sign in with Google
        </button>

        {/* Footer Link */}
        <p className="mt-12 text-slate-400 text-sm font-medium">
          New here? 
          <button onClick={onToggleMode} className="text-[#8B5CF6] font-bold hover:underline ml-2">Create an account</button>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
