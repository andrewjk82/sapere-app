import React, { useState, useEffect } from 'react';
import { X, User, GraduationCap, School, Phone, MapPin, Check, Pencil, Mail, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { studentService } from '../services/studentService';
import { useToast } from '../context/ToastContext';

const ROLE_OPTIONS = [
  { value: '', label: 'Not set' },
  { value: 'student', label: 'Student' },
  { value: 'parent', label: 'Parent' }
];

const getRoleLabel = (role) => {
  if (role === 'student') return 'Student';
  if (role === 'parent') return 'Parent';
  if (role === 'admin') return 'Admin';
  return 'Role not set';
};

const StudentProfileModal = ({ open, student, onClose }) => {
  const { showToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    if (student) {
      setEditData({
        name: student.name || '',
        firstName: student.firstName || '',
        lastName: student.lastName || '',
        level: student.level || '',
        year: student.year || student.level || '',
        subject: student.subject || '',
        school: student.school || '',
        phone: student.phone || '',
        address: student.address || '',
        role: student.role || '',
        status: student.status || 'Active',
        dreamImageUrl: student.dreamImageUrl || '',
        dreamJob: student.dreamJob || ''
      });
      setIsEditing(false);
    }
  }, [student]);

  if (!open || !student) return null;

  const handleSave = async () => {
    try {
      setLoading(true);
      const isRegistered = student.source === 'registered';
      
      const updatePayload = {
        ...editData,
        role: editData.role || '',
        updatedAt: new Date().toISOString()
      };

      // Handle name syncing for registered users
      if (isRegistered) {
        updatePayload.displayName = editData.name || `${editData.firstName} ${editData.lastName}`;
        updatePayload.year = editData.year || editData.level;
        await studentService.updateRegisteredUser(student.id, updatePayload);
      } else {
        await studentService.updateStudent(student.id, updatePayload);
      }

      setIsEditing(false);
      onClose();
      showToast("Profile updated successfully!", 'success');
    } catch (error) {
      console.error("Error updating student profile:", error);
      showToast("Failed to update profile.", 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to remove ${student.name}?`)) {
      try {
        setLoading(true);
        if (student.source === 'manual') {
          await studentService.deleteStudent(student.id);
        } else {
          // For registered users, we might just want to 'unlink' or change a status
          // For now, let's just warn or handle accordingly
          showToast("Registered accounts cannot be deleted here. Change status to Inactive instead.", 'info');
          return;
        }
        onClose();
      } catch (error) {
        console.error("Error deleting student:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="app-panel modal-content"
          style={{ maxWidth: '600px', width: '90%', padding: '32px' }}
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-header" style={{ marginBottom: '24px', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '16px' }}>
            <div className="modal-header__title">
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a1c2c' }}>Student Profile</h2>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{student.source === 'registered' ? 'Registered Student Account' : 'Manually Managed Student'}</p>
            </div>
            <button className="app-icon-button" onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          <div className="modal-body">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <div>
                {isEditing ? (
                  <div className="app-form-field" style={{ marginBottom: 0 }}>
                    <input 
                      style={{ fontSize: '1.5rem', fontWeight: 800, padding: '8px 0', borderBottom: '2px solid #6366f1', borderRadius: 0, background: 'transparent' }}
                      value={editData.name} 
                      onChange={e => setEditData({...editData, name: e.target.value})}
                      placeholder="Full Name"
                    />
                  </div>
                ) : (
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#1a1c2c', margin: 0 }}>{student.name}</h3>
                )}
	                <div style={{ marginTop: '8px' }}>
	                  <span className={`status-badge ${editData.status === 'Active' ? 'status-badge--active' : 'status-badge--inactive'}`}>
	                    {editData.status}
	                  </span>
	                  <span
	                    className="status-badge"
	                    style={{
	                      marginLeft: '8px',
	                      background: editData.role ? '#ecfdf5' : '#fff1f2',
	                      color: editData.role ? '#047857' : '#e11d48',
	                      border: `1px solid ${editData.role ? '#bbf7d0' : '#fecdd3'}`
	                    }}
	                  >
	                    {getRoleLabel(editData.role)}
	                  </span>
	                </div>
              </div>

      <div className="profile-hero__actions">
                {!isEditing ? (
                  <button className="app-button app-button--secondary" onClick={() => setIsEditing(true)}>
                    <Pencil size={16} />
                    Edit Profile
                  </button>
                ) : (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="app-button app-button--primary" onClick={handleSave} disabled={loading}>
                      <Check size={16} />
                      {loading ? 'Saving...' : 'Save'}
                    </button>
                    <button className="app-button app-button--secondary" onClick={() => setIsEditing(false)}>
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>

	            <div className="app-form-grid" style={{ gap: '24px' }}>
	              <div className="app-form-field" style={{ gridColumn: 'span 2', padding: '16px', borderRadius: '16px', background: editData.role ? '#f8fafc' : '#fff1f2', border: `1px solid ${editData.role ? '#e2e8f0' : '#fecdd3'}` }}>
	                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: editData.role ? '#64748b' : '#e11d48', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
	                  Account Role
	                </label>
	                {isEditing ? (
	                  <>
	                    <select
	                      value={editData.role}
	                      onChange={e => setEditData({ ...editData, role: e.target.value })}
	                      style={{ width: '100%', marginTop: '8px', padding: '14px 16px', borderRadius: '14px', border: '1px solid #e2e8f0', background: 'white', fontWeight: 800, color: '#1a1c2c' }}
	                    >
	                      {ROLE_OPTIONS.map(option => (
	                        <option key={option.value} value={option.value}>{option.label}</option>
	                      ))}
	                    </select>
	                    {!editData.role && (
	                      <p style={{ margin: '8px 0 0', color: '#be123c', fontSize: '0.78rem', fontWeight: 700 }}>
	                        This profile is missing a role. Set it to Student or Parent.
	                      </p>
	                    )}
	                  </>
	                ) : (
	                  <p style={{ fontSize: '1.1rem', fontWeight: 800, margin: '8px 0 0', color: editData.role ? '#047857' : '#e11d48' }}>
	                    {getRoleLabel(editData.role)}
	                  </p>
	                )}
	              </div>

	              <div className="app-form-field" style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Vision Board Image URL
                </label>
                {isEditing ? (
                  <input 
                    value={editData.dreamImageUrl} 
                    onChange={e => setEditData({...editData, dreamImageUrl: e.target.value})} 
                    placeholder="https://images.unsplash.com/..."
                  />
                ) : (
                  <div style={{ marginTop: '8px', borderRadius: '16px', overflow: 'hidden', height: '120px', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <img src={student.dreamImageUrl || 'https://images.unsplash.com/photo-1516534775068-ba3e84529519?auto=format&fit=crop&q=80&w=600'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Vision Board" />
                  </div>
                )}
              </div>

              <div className="app-form-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Future Dream / Job
                </label>
                {isEditing ? (
                  <input value={editData.dreamJob} onChange={e => setEditData({...editData, dreamJob: e.target.value})} placeholder="e.g. Doctor, Artist" />
                ) : (
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '8px 0', color: '#6366f1' }}>{student.dreamJob || 'Not set'}</p>
                )}
              </div>

              <div className="app-form-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <GraduationCap size={14} /> Year / Level
                </label>
                {isEditing ? (
                  <input value={editData.year} onChange={e => setEditData({...editData, year: e.target.value, level: e.target.value})} />
                ) : (
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '8px 0', color: '#1a1c2c' }}>{student.year || student.level || 'Not set'}</p>
                )}
              </div>

              <div className="app-form-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <School size={14} /> School
                </label>
                {isEditing ? (
                  <input value={editData.school} 
                         onChange={e => setEditData({...editData, school: e.target.value})} />
                ) : (
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '8px 0', color: '#1a1c2c' }}>{student.school || 'Not set'}</p>
                )}
              </div>

              <div className="app-form-field" style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Enrolled Subjects
                </label>
                {isEditing ? (
                  <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                    {['Maths', 'English'].map(subj => {
                      const isSelected = (editData.subject || '').includes(subj);
                      return (
                        <div 
                          key={subj}
                          onClick={() => {
                            let current = (editData.subject || '').split(',').map(s => s.trim()).filter(s => s);
                            if (isSelected) {
                              current = current.filter(s => s !== subj);
                            } else {
                              current.push(subj);
                            }
                            setEditData({ ...editData, subject: current.join(', ') });
                          }}
                          style={{ 
                            flex: 1,
                            padding: '12px',
                            borderRadius: '12px',
                            border: '2px solid',
                            borderColor: isSelected ? '#6366f1' : '#e2e8f0',
                            background: isSelected ? '#f5f3ff' : 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                        >
                          <div style={{ width: '18px', height: '18px', borderRadius: '4px', border: '2px solid', borderColor: isSelected ? '#6366f1' : '#cbd5e1', background: isSelected ? '#6366f1' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            {isSelected && <Check size={12} />}
                          </div>
                          <span style={{ fontWeight: 700, fontSize: '0.9rem', color: isSelected ? '#6366f1' : '#475569' }}>{subj}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                    {(editData.subject || 'Not set').split(',').map(s => s.trim()).filter(s => s).map(s => (
                      <span key={s} style={{ padding: '4px 12px', background: '#e0e7ff', color: '#4338ca', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700 }}>{s}</span>
                    ))}
                    {(!editData.subject) && <span style={{ color: '#94a3b8', fontWeight: 600 }}>No subjects enrolled</span>}
                  </div>
                )}
              </div>

              <div className="app-form-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <Mail size={14} /> Email Address
                </label>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '8px 0', color: '#1a1c2c' }}>{student.email || 'No email provided'}</p>
              </div>

              <div className="app-form-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <Phone size={14} /> Phone Number
                </label>
                {isEditing ? (
                  <input value={editData.phone} onChange={e => setEditData({...editData, phone: e.target.value})} />
                ) : (
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '8px 0', color: '#1a1c2c' }}>{student.phone || 'Not set'}</p>
                )}
              </div>

              <div className="app-form-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Daily Questions
                </label>
                {isEditing ? (
                  <input type="number" min="5" max="50" value={editData.dailyQuestionCount || 10} onChange={e => setEditData({...editData, dailyQuestionCount: parseInt(e.target.value) || 10})} />
                ) : (
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '8px 0', color: '#1a1c2c' }}>{student.dailyQuestionCount || 10} Questions</p>
                )}
              </div>

              <div className="app-form-field" style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <MapPin size={14} /> Home Address
                </label>
                {isEditing ? (
                  <input value={editData.address} onChange={e => setEditData({...editData, address: e.target.value})} />
                ) : (
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '8px 0', color: '#1a1c2c' }}>{student.address || 'Not set'}</p>
                )}
              </div>

              {isEditing && (
                <div className="app-form-field">
                  <label>Account Status</label>
                  <select 
                    value={editData.status} 
                    onChange={e => setEditData({...editData, status: e.target.value})}
                    className="app-input"
                    style={{ width: '100%' }}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          <div className="modal-footer" style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {student.source === 'manual' ? (
              <button 
                className="app-button" 
                style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', border: 'none' }}
                onClick={handleDelete} 
                disabled={loading}
              >
                <Trash2 size={16} />
                Remove Student
              </button>
            ) : <div />}
            <button className="app-button app-button--secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default StudentProfileModal;
