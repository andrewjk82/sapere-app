import React from 'react';
import { 
  Users, 
  Clock, 
  CheckCircle2, 
  GraduationCap, 
  Info 
} from 'lucide-react';

const iconMap = {
  Users,
  Clock,
  CheckCircle2,
  GraduationCap,
};

const StatCard = ({ label, value, iconName, trend }) => {
  const Icon = iconMap[iconName] || Info;
  
  return (
    <div className="app-panel stat-card">
      <div className="stat-card__top">
        <div className="stat-card__icon">
          <Icon size={24} />
        </div>
        {trend && (
          <span className="status-badge status-badge--active">+{trend}%</span>
        )}
      </div>
      <div>
        <p className="stat-card__label">{label}</p>
        <h3 className="stat-card__value">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
