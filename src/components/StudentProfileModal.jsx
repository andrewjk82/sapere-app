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
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="app-panel modal-content modal-content--medium"
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-header">
            <div className="modal-header__title">
              <h2>Student Profile</h2>
              <p>{student.source === 'registered' ? 'Registered Account' : 'Manually Added'}</p>
            </div>
            <button className="modal-close" onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          <div className="modal-body">
            <div className="profile-hero">
              <div className="profile-hero__avatar">
                {student.avatarUrl ? (
                  <img src={student.avatarUrl} alt={student.name} />
                ) : (
                  student.name?.charAt(0) || 'S'
                )}
              </div>
              <div className="profile-hero__info">
                {isEditing ? (
                  <input 
                    className="profile-name-input"
                    value={editData.name} 
                    onChange={e => setEditData({...editData, name: e.target.value})}
                    placeholder="Full Name"
                  />
                ) : (
                  <h3>{student.name}</h3>
                )}
                <span className={`status-badge ${editData.status === 'Active' ? 'status-badge--active' : 'status-badge--inactive'}`}>
                  {editData.status}
                </span>
              </div>
              <div className="profile-hero__actions">
                {!isEditing ? (
                  <button className="app-button app-button--secondary" onClick={() => setIsEditing(true)}>
                    <Pencil size={16} />
                    Edit
                  </button>
                ) : (
                  <button className="app-button app-button--primary" onClick={handleSave} disabled={loading}>
                    <Check size={16} />
                    {loading ? 'Saving...' : 'Save'}
                  </button>
                )}
              </div>
            </div>

            <div className="profile-details-grid">
              <div className="profile-detail-item">
                <label><GraduationCap size={14} /> Year / Level</label>
                {isEditing ? (
                  <input value={editData.year} onChange={e => setEditData({...editData, year: e.target.value, level: e.target.value})} />
                ) : (
                  <p>{student.year || student.level || 'Not set'}</p>
                )}
              </div>

              <div className="profile-detail-item">
                <label><School size={14} /> School / Subject</label>
                {isEditing ? (
                  <input value={student.source === 'registered' ? editData.school : editData.subject} 
                         onChange={e => setEditData({...editData, [student.source === 'registered' ? 'school' : 'subject']: e.target.value})} />
                ) : (
                  <p>{student.school || student.subject || 'Not set'}</p>
                )}
              </div>

              <div className="profile-detail-item">
                <label><Mail size={14} /> Email Address</label>
                <p>{student.email || 'No email provided'}</p>
              </div>

              <div className="profile-detail-item">
                <label><Phone size={14} /> Phone Number</label>
                {isEditing ? (
                  <input value={editData.phone} onChange={e => setEditData({...editData, phone: e.target.value})} />
                ) : (
                  <p>{student.phone || 'Not set'}</p>
                )}
              </div>

              <div className="profile-detail-item" style={{ gridColumn: 'span 2' }}>
                <label><MapPin size={14} /> Home Address</label>
                {isEditing ? (
                  <input value={editData.address} onChange={e => setEditData({...editData, address: e.target.value})} />
                ) : (
                  <p>{student.address || 'Not set'}</p>
                )}
              </div>

              {isEditing && (
                <div className="profile-detail-item">
                  <label>Status</label>
                  <select 
                    value={editData.status} 
                    onChange={e => setEditData({...editData, status: e.target.value})}
                    className="app-select"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          <div className="modal-footer" style={{ justifyContent: 'space-between' }}>
            {student.source === 'manual' ? (
              <button className="app-button app-button--danger" onClick={handleDelete} disabled={loading}>
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
