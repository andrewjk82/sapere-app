import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Globe, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Signup = ({ onToggleMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setMessage('');
      setLoading(true);
      await signup(email, password);
      setMessage('Account created! Verification email sent.');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4 md:p-8 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row-reverse min-h-[600px]"
      >
        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-4xl font-black text-primary mb-2">Join Us!!</h1>
            <p className="text-secondary font-medium">Create your elite tutor account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-500 text-sm font-bold">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-3 text-emerald-600 text-sm font-bold">
              <CheckCircle2 size={18} />
              <span>{message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-bold text-primary px-2">Email</label>
              <input 
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-cream/30 border-transparent focus:bg-white transition-all"
                placeholder="email@gmail.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-primary px-2">Password</label>
              <input 
                type="password" required value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-cream/30 border-transparent focus:bg-white transition-all"
                placeholder="Create password"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-primary px-2">Confirm Password</label>
              <input 
                type="password" required value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-cream/30 border-transparent focus:bg-white transition-all"
                placeholder="Confirm password"
              />
            </div>

            <button 
              type="submit" disabled={loading}
              className="btn-primary w-full py-4 rounded-full text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all mt-4"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <p className="text-center text-sm font-medium text-secondary mt-8">
            Already have an account? 
            <button onClick={onToggleMode} className="text-[#EBC4AC] font-bold hover:underline ml-1">Sign in</button>
          </p>
        </div>

        {/* Illustration Side */}
        <div className="hidden md:flex md:w-1/2 bg-cream items-center justify-center relative p-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] h-[80%] bg-[#FCE8D8] rounded-t-full"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 w-full"
          >
            <img src="/tutor.png" alt="Tutor" className="w-full h-auto drop-shadow-2xl" />
          </motion.div>
        </div>

        {/* Mobile Illustration */}
        <div className="md:hidden w-full bg-cream p-8 flex justify-center">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 bg-[#FCE8D8] rounded-full"></div>
            <img src="/tutor.png" alt="Tutor" className="relative z-10 w-full h-full object-contain" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
