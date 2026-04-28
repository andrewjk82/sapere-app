import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Globe, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = ({ onToggleMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="min-h-screen bg-cream flex items-center justify-center p-4 md:p-8 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]"
      >
        {/* Left Side: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-4xl font-black text-primary mb-2">Welcome Back!!</h1>
            <p className="text-secondary font-medium">Please login to your account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-500 text-sm font-bold">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary px-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                <input 
                  type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-14 bg-cream/30 border-transparent focus:bg-white transition-all"
                  placeholder="email@gmail.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary px-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                <input 
                  type="password" required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-14 pr-12 bg-cream/30 border-transparent focus:bg-white transition-all"
                  placeholder="Enter your password"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button type="button" className="text-xs font-bold text-secondary hover:text-primary transition-colors">Forgot Password?</button>
            </div>

            <button 
              type="submit" disabled={loading}
              className="btn-primary w-full py-4 rounded-full text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 w-full">
              <div className="flex-grow border-t border-cream"></div>
              <span className="text-xs text-secondary font-bold">- or -</span>
              <div className="flex-grow border-t border-cream"></div>
            </div>

            <div className="flex gap-4">
              <button onClick={handleGoogleLogin} className="w-12 h-12 bg-cream/30 rounded-full flex items-center justify-center hover:bg-cream/50 transition-all">
                <Globe size={20} className="text-primary" />
              </button>
              {/* Other social icons could go here */}
            </div>

            <p className="text-sm font-medium text-secondary">
              Don't have an account? 
              <button onClick={onToggleMode} className="text-[#EBC4AC] font-bold hover:underline ml-1">Sign up</button>
            </p>
          </div>
        </div>

        {/* Right Side: 3D Illustration */}
        <div className="hidden md:flex md:w-1/2 bg-cream items-center justify-center relative p-12">
          {/* Decorative Arch */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] h-[80%] bg-[#FCE8D8] rounded-t-full"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 w-full"
          >
            <img src="/tutor.png" alt="Tutor Illustration" className="w-full h-auto drop-shadow-2xl" />
          </motion.div>
        </div>

        {/* Mobile Illustration (appears at top for mobile) */}
        <div className="md:hidden w-full bg-cream p-8 flex justify-center">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 bg-[#FCE8D8] rounded-full"></div>
            <img src="/tutor.png" alt="Tutor" className="relative z-10 w-full h-full object-contain" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
