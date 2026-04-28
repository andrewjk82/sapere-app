import React, { useState } from 'react';
import { Mail, Lock, AlertCircle, ArrowRight, CheckCircle2, User, Users, GraduationCap, School, Phone, MapPin, Plus, Trash2, Globe } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import AuthLayout from './AuthLayout';

const Signup = ({ onToggleMode }) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState(''); // 'student' or 'parent'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Profile Data
  const [profileData, setProfileData] = useState({
    year: '',
    school: '',
    phone: '',
    address: '',
    parentName: '',
    students: [{ name: '', year: '', school: '', phone: '', address: '' }]
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { signup, loginWithGoogle } = useAuth();

  const handleNextStep = () => {
    if (step === 1) {
      if (!email || !password) return setError('Please enter credentials');
      if (password !== confirmPassword) return setError('Passwords do not match');
      if (password.length < 6) return setError('Password must be at least 6 characters');
    }
    if (step === 2 && !role) return setError('Please select your role');
    
    setError('');
    setStep(step + 1);
  };

  const handlePrevStep = () => setStep(step - 1);

  const handleGoogleAuth = async () => {
    try {
      setError('');
      setLoading(true);
      await loginWithGoogle();
      // Move to Step 2 (Role Selection) after authentication
      setStep(2);
    } catch (err) {
      setError('Google authentication failed');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStudentField = (index, field, value) => {
    const newStudents = [...profileData.students];
    newStudents[index][field] = value;
    setProfileData({ ...profileData, students: newStudents });
  };

  const addStudent = () => {
    setProfileData({
      ...profileData,
      students: [...profileData.students, { name: '', year: '', school: '', phone: '', address: '' }]
    });
  };

  const removeStudent = (index) => {
    if (profileData.students.length <= 1) return;
    const newStudents = profileData.students.filter((_, i) => i !== index);
    setProfileData({ ...profileData, students: newStudents });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      
      // 1. Get Current Auth User
      const { auth } = await import('../firebase/config');
      let user = auth.currentUser;

      // If not authenticated (Email/Pass flow), create the account now
      if (!user) {
        const userCredential = await signup(email, password);
        user = userCredential.user;
      }

      // 2. Prepare Firestore Data
      const userData = {
        uid: user.uid,
        email: user.email,
        role,
        createdAt: new Date().toISOString(),
        ...(role === 'student' ? {
          year: profileData.year,
          school: profileData.school,
          phone: profileData.phone,
          address: profileData.address
        } : {
          parentName: profileData.parentName,
          students: profileData.students
        })
      };

      // 3. Save to Firestore
      await setDoc(doc(db, 'users', user.uid), userData);

      setMessage('Welcome to Sapere! Your profile has been created.');
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      eyebrow={`Step ${step} of 3`}
      title={step === 1 ? "Create Account" : step === 2 ? "Who are you?" : "Complete Profile"}
      description={
        step === 1 ? "Join our academic community today." :
        step === 2 ? "Tell us your role to personalize your workspace." :
        "We're almost there! Enter your final details."
      }
      sideLabel="Consistency is Key"
      sideTitle="Build a powerful academic routine, every day."
      sideDescription="From real-time schedule tracking to personalized daily practice, Sapere turns consistency into academic excellence."
      sideStats={[
        { value: 'Daily', label: 'problem sets' },
        { value: 'Sync', label: 'schedule updates' },
      ]}
      sidePoints={[
        'Stay on top of tasks with an integrated calendar',
        'Master concepts through consistent daily practice',
        'Cultivate a routine that leads to academic excellence',
      ]}
    >
      {error && (
        <div className="auth-message auth-message--error">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {message && (
        <div className="auth-message auth-message--success">
          <CheckCircle2 size={18} />
          <span>{message}</span>
        </div>
      )}

      <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()} className="auth-form">
        {step === 1 && (
          <>
            <div className="auth-field">
              <label htmlFor="signup-email">Email address</label>
              <div className="auth-input">
                <Mail size={18} />
                <input id="signup-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              </div>
            </div>
            <div className="auth-field">
              <label htmlFor="signup-password">Password</label>
              <div className="auth-input">
                <Lock size={18} />
                <input id="signup-password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="min. 6 characters" />
              </div>
            </div>
            <div className="auth-field">
              <label htmlFor="signup-confirm-password">Confirm password</label>
              <div className="auth-input">
                <Lock size={18} />
                <input id="signup-confirm-password" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repeat password" />
              </div>
            </div>

            <div className="auth-divider">or</div>

            <button type="button" onClick={handleGoogleAuth} disabled={loading} className="auth-social">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="auth-social__icon" />
              <span>Continue with Google</span>
            </button>
          </>
        )}

        {step === 2 && (
          <div className="auth-role-grid">
            <button 
              type="button" 
              className={`auth-role-card ${role === 'student' ? 'active' : ''}`}
              onClick={() => setRole('student')}
            >
              <div className="auth-role-card__icon"><GraduationCap size={28} /></div>
              <strong>Student</strong>
              <span>Individual learning workspace</span>
            </button>
            <button 
              type="button" 
              className={`auth-role-card ${role === 'parent' ? 'active' : ''}`}
              onClick={() => setRole('parent')}
            >
              <div className="auth-role-card__icon"><Users size={28} /></div>
              <strong>Parent</strong>
              <span>Manage multiple students</span>
            </button>
          </div>
        )}

        {step === 3 && role === 'student' && (
          <div className="auth-scroll-container">
            <div className="auth-field">
              <label>Year / Grade</label>
              <div className="auth-input">
                <GraduationCap size={18} />
                <input required value={profileData.year} onChange={(e) => setProfileData({...profileData, year: e.target.value})} placeholder="e.g. Year 10" />
              </div>
            </div>
            <div className="auth-field">
              <label>School Name</label>
              <div className="auth-input">
                <School size={18} />
                <input required value={profileData.school} onChange={(e) => setProfileData({...profileData, school: e.target.value})} placeholder="e.g. Central High" />
              </div>
            </div>
            <div className="auth-field">
              <label>Phone Number</label>
              <div className="auth-input">
                <Phone size={18} />
                <input required value={profileData.phone} onChange={(e) => setProfileData({...profileData, phone: e.target.value})} placeholder="04xx xxx xxx" />
              </div>
            </div>
            <div className="auth-field">
              <label>Home Address</label>
              <div className="auth-input">
                <MapPin size={18} />
                <input required value={profileData.address} onChange={(e) => setProfileData({...profileData, address: e.target.value})} placeholder="Full street address" />
              </div>
            </div>
          </div>
        )}

        {step === 3 && role === 'parent' && (
          <div className="auth-scroll-container">
            <div className="auth-field">
              <label>Parent/Guardian Full Name</label>
              <div className="auth-input">
                <User size={18} />
                <input required value={profileData.parentName} onChange={(e) => setProfileData({...profileData, parentName: e.target.value})} placeholder="Your full name" />
              </div>
            </div>
            
            <div className="auth-section-divider">Student Information</div>
            
            {profileData.students.map((student, index) => (
              <div key={index} className="auth-student-entry">
                <div className="auth-student-entry__header">
                  <strong>Student #{index + 1}</strong>
                  {profileData.students.length > 1 && (
                    <button type="button" onClick={() => removeStudent(index)} className="auth-remove-btn">
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
                <div className="auth-field">
                  <input required value={student.name} onChange={(e) => updateStudentField(index, 'name', e.target.value)} placeholder="Student's full name" />
                </div>
                <div className="auth-field-row">
                  <input required value={student.year} onChange={(e) => updateStudentField(index, 'year', e.target.value)} placeholder="Year/Grade" />
                  <input required value={student.school} onChange={(e) => updateStudentField(index, 'school', e.target.value)} placeholder="School" />
                </div>
                <div className="auth-field">
                  <input required value={student.phone} onChange={(e) => updateStudentField(index, 'phone', e.target.value)} placeholder="Student's phone" />
                </div>
              </div>
            ))}
            
            <button type="button" onClick={addStudent} className="auth-add-btn">
              <Plus size={16} />
              Add another student
            </button>
          </div>
        )}

        <div className="auth-step-actions">
          {step > 1 && (
            <button type="button" onClick={handlePrevStep} className="auth-back-btn">
              Back
            </button>
          )}
          {step < 3 ? (
            <button type="button" onClick={handleNextStep} className="auth-submit">
              Continue
              <ArrowRight size={18} />
            </button>
          ) : (
            <button type="submit" disabled={loading} className="auth-submit">
              {loading ? 'Finalizing...' : 'Complete Setup'}
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      </form>

      {step === 1 && (
        <p className="auth-footer">
          Already have an account?
          <button onClick={onToggleMode} className="auth-link">Sign in</button>
        </p>
      )}
    </AuthLayout>
  );
};

export default Signup;
