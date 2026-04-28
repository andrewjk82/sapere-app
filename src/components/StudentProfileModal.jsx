import React, { useState, useEffect } from 'react';
import { X, User, GraduationCap, School, Phone, MapPin, Check, Pencil, Mail, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { studentService } from '../services/studentService';

const StudentProfileModal = ({ open, student, onClose }) => {
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
        status: student.status || 'Active'
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
    } catch (error) {
      console.error("Error updating student profile:", error);
      alert("Failed to update profile. Please try again.");
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
          alert("Registered user accounts cannot be deleted from here. You can change their status to Inactive.");
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
                  <School size={14} /> School / Subject
                </label>
                {isEditing ? (
                  <input value={student.source === 'registered' ? editData.school : editData.subject} 
                         onChange={e => setEditData({...editData, [student.source === 'registered' ? 'school' : 'subject']: e.target.value})} />
                ) : (
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '8px 0', color: '#1a1c2c' }}>{student.school || student.subject || 'Not set'}</p>
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
