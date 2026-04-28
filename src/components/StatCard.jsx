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
    <div className="glass-card p-6 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="p-3 bg-glass rounded-lg border border-glass-border">
          <Icon className="text-accent" size={24} />
        </div>
        {trend && (
          <span className="text-emerald-400 text-sm font-medium">+{trend}%</span>
        )}
      </div>
      <div>
        <p className="text-text-secondary text-sm">{label}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
