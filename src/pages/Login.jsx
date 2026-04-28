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
    <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-[#4A3F35] mb-2">Welcome Back!!</h1>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-500 text-sm">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#4A3F35]/70 px-4 uppercase tracking-wider">Email</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8C7E72]" size={18} />
                <input 
                  type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#FFF8F0] border-transparent rounded-full py-4 pl-14 pr-6 focus:bg-white focus:border-[#F8D7C1] transition-all text-[#4A3F35]"
                  placeholder="email@gmail.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#4A3F35]/70 px-4 uppercase tracking-wider">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8C7E72]" size={18} />
                <input 
                  type="password" required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#FFF8F0] border-transparent rounded-full py-4 pl-14 pr-6 focus:bg-white focus:border-[#F8D7C1] transition-all text-[#4A3F35]"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex justify-end pr-2">
              <button type="button" className="text-xs font-bold text-[#8C7E72] hover:text-[#4A3F35] transition-colors">Forgot Password?</button>
            </div>

            <button 
              type="submit" disabled={loading}
              className="w-full bg-[#F8D7C1] text-[#4A3F35] py-5 rounded-full text-lg font-bold shadow-lg hover:bg-[#EBC4AC] hover:scale-[1.01] active:scale-[0.99] transition-all mt-4"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 w-full">
              <div className="flex-grow border-t border-[#FFF8F0]"></div>
              <span className="text-xs text-[#8C7E72] font-bold">- or -</span>
              <div className="flex-grow border-t border-[#FFF8F0]"></div>
            </div>

            <div className="flex gap-6">
              <button onClick={handleGoogleLogin} className="w-12 h-12 bg-[#FFF8F0] rounded-full flex items-center justify-center hover:bg-[#F2E8DF] transition-all border border-[#F2E8DF] shadow-sm">
                <Globe size={20} className="#4A3F35" />
              </button>
              {/* Add more icons if needed */}
            </div>

            <p className="text-sm font-medium text-[#8C7E72]">
              Don't have an account? 
              <button onClick={onToggleMode} className="text-[#EBC4AC] font-bold hover:underline ml-1">Sign up</button>
            </p>
          </div>
        </div>

        {/* Right: Illustration Section (Responsive) */}
        <div className="w-full md:w-1/2 bg-[#FFF8F0] flex items-center justify-center relative overflow-hidden min-h-[300px]">
          {/* Background Arch Shape */}
          <div className="absolute bottom-0 w-[80%] h-[90%] bg-[#FCE8D8] rounded-t-full"></div>
          
          <div className="relative z-10 p-8 w-full max-w-[400px]">
            <img 
              src="/tutor.png" 
              alt="Tutor" 
              className="w-full h-auto drop-shadow-2xl animate-float"
              style={{ filter: 'drop-shadow(0 20px 30px rgba(74, 63, 53, 0.2))' }}
            />
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default Login;
