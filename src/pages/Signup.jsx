import React, { useState } from 'react';
import { Mail, Lock, AlertCircle, ArrowRight, CheckCircle2, User, Users, GraduationCap, School, Phone, MapPin, Plus, Trash2 } from 'lucide-react';
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
    if (step === 1 && !role) return setError('Please select your role');
    if (step === 2) {
      if (password !== confirmPassword) return setError('Passwords do not match');
      if (password.length < 6) return setError('Password must be at least 6 characters');
    }
    setError('');
    setStep(step + 1);
  };

  const handlePrevStep = () => setStep(step - 1);

  const handleGoogleSignup = async () => {
    try {
      setError('');
      setLoading(true);
      await loginWithGoogle();
      // After successful Google login, move to Step 3 to collect remaining details
      setStep(3);
    } catch (err) {
      setError('Google signup failed');
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
      
      // 1. Create Auth Account (only if using email/pass, for Google they are already authed)
      let user;
      const currentUser = db.app.options ? null : null; // Check if already authed via Google

      // Note: useAuth provides the currentUser via the user state, 
      // but for simplicity in this flow, we'll assume if they reach Step 3 and click submit, 
      // we save their current uid to Firestore.
      
      // However, to be safe, let's just use the current Auth state's user
      const { auth } = await import('../firebase/config');
      user = auth.currentUser;

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

      setMessage('Account created successfully! Welcome to Sapere.');
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
      title={step === 1 ? "Who are you?" : step === 2 ? "Set up credentials" : "Profile details"}
      description={
        step === 1 ? "Select your role to personalize your experience." :
        step === 2 ? "Enter your email and a secure password." :
        "Tell us a bit more to complete your setup."
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

        {step === 2 && (
          <>
            <div className="auth-field">
              <label>Email address</label>
              <div className="auth-input">
                <Mail size={18} />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              </div>
            </div>
            <div className="auth-field">
              <label>Password</label>
              <div className="auth-input">
                <Lock size={18} />
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="min. 6 characters" />
              </div>
            </div>
            <div className="auth-field">
              <label>Confirm password</label>
              <div className="auth-input">
                <Lock size={18} />
                <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repeat password" />
              </div>
            </div>

            <div className="auth-divider">or</div>

            <button type="button" onClick={handleGoogleSignup} disabled={loading} className="auth-social">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="auth-social__icon" />
              <span>Continue with Google</span>
            </button>
          </>
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
              {loading ? 'Creating account...' : 'Complete setup'}
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
