import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, EyeOff, Globe } from 'lucide-react';
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
    <div className="min-h-screen bg-[#FFF8F1] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left: Login Form Area */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-bold text-[#4D4D4D] text-center mb-12">Welcome Back!!</h1>

            {error && (
              <div className="mb-6 p-3 bg-red-50 text-red-500 text-xs rounded-xl text-center border border-red-100 font-bold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Email Input with Label on Border */}
              <div className="relative">
                <div className="absolute -top-3 left-6 bg-white px-2 z-10">
                  <span className="text-sm font-bold text-[#8C8C8C]">Email</span>
                </div>
                <div className="relative border border-[#CCCCCC] rounded-[1.5rem] flex items-center px-5 py-4 focus-within:border-[#F9E3D2] transition-colors">
                  <Mail className="text-[#8C8C8C] mr-3" size={20} />
                  <input 
                    type="email" required value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent outline-none text-[#4D4D4D] text-sm font-medium"
                    placeholder="email@gmail.com"
                  />
                </div>
              </div>

              {/* Password Input with Label on Border */}
              <div className="relative">
                <div className="absolute -top-3 left-6 bg-white px-2 z-10">
                  <span className="text-sm font-bold text-[#8C8C8C]">Password</span>
                </div>
                <div className="relative border border-[#CCCCCC] rounded-[1.5rem] flex items-center px-5 py-4 focus-within:border-[#F9E3D2] transition-colors">
                  <Lock className="text-[#8C8C8C] mr-3" size={20} />
                  <input 
                    type="password" required value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent outline-none text-[#4D4D4D] text-sm font-medium pr-10"
                    placeholder="Enter your password"
                  />
                  <EyeOff className="absolute right-5 text-[#CCCCCC] cursor-pointer" size={20} />
                </div>
              </div>

              <div className="flex justify-end pr-2 -mt-6">
                <button type="button" className="text-sm font-bold text-[#8C8C8C] hover:text-[#4D4D4D] transition-colors">Forgot Password?</button>
              </div>

              <button 
                type="submit" disabled={loading}
                className="w-full bg-[#F9E3D2] text-[#9C724F] py-5 rounded-full text-lg font-bold shadow-sm hover:bg-[#F2D7C5] transition-all mt-6"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className="mt-12 flex flex-col items-center gap-8">
              <span className="text-xs text-[#CCCCCC] font-bold">- or -</span>
              
              <div className="flex gap-10">
                <button onClick={handleGoogleLogin} className="transition-transform hover:scale-110">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-6 h-6" alt="Google" />
                </button>
                <button className="transition-transform hover:scale-110">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" className="w-6 h-6" alt="Facebook" />
                </button>
                <button className="transition-transform hover:scale-110">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="w-6 h-6" alt="Apple" />
                </button>
              </div>

              <p className="text-sm font-medium text-[#CCCCCC]">
                Don't have an account? 
                <button onClick={onToggleMode} className="text-[#9C724F] font-bold hover:underline ml-1">Sign up</button>
              </p>
            </div>
          </div>
        </div>

        {/* Right: Illustration Area (Stable Layout) */}
        <div className="hidden md:flex md:w-1/2 bg-[#FFF8F1] items-center justify-center p-12 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[85%] h-[85%] bg-[#FCE8D8] rounded-t-full"></div>
          </div>
          <div className="relative z-10 w-full max-w-[450px]">
            <img src="/tutor.png" alt="Tutor" className="w-full h-auto drop-shadow-2xl" />
          </div>
        </div>

        {/* Mobile Illustration (Top) */}
        <div className="md:hidden w-full bg-[#FFF8F1] pt-12 pb-4 flex justify-center">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 bg-[#FCE8D8] rounded-full"></div>
            <img src="/tutor.png" alt="Tutor" className="relative z-10 w-full h-full object-contain" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
