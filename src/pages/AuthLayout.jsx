import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import './auth.css';

const AuthLayout = ({
  eyebrow,
  title,
  description,
  children,
  sideLabel,
  sideTitle,
  sideDescription,
  sideStats = [],
  sidePoints = [],
}) => {
  return (
    <div className="auth-shell">
      <div className="auth-shell__glow auth-shell__glow--left" />
      <div className="auth-shell__glow auth-shell__glow--right" />

      <div className="auth-shell__grid">
        <motion.section
          className="auth-card"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="auth-brand">
            <div className="auth-brand__logo">
              <img src="/logo.png?v=1" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="auth-brand__name">Sapere Aude Academia</p>
              <p className="auth-brand__tag">Dare to know</p>
            </div>
          </div>

          <div className="auth-copy auth-copy--centered">
            {eyebrow && <span className="auth-eyebrow">{eyebrow}</span>}
            <h1>{title}</h1>
            {description && <p>{description}</p>}
          </div>

          {children}
        </motion.section>

        <motion.aside
          className="auth-showcase"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="auth-showcase__badge">
            <Sparkles size={16} />
            <span>{sideLabel}</span>
          </div>

          <div className="auth-showcase__copy">
            <h2>{sideTitle}</h2>
            <p>{sideDescription}</p>
          </div>

          <div className="auth-showcase__panel">
            <div className="auth-showcase__panel-header">
              <div className="auth-showcase__avatar" />
              <div>
                <strong>Elegant workflow</strong>
                <span>Built for focused tutoring teams</span>
              </div>
            </div>

            <div className="auth-showcase__stats">
              {sideStats.map((stat) => (
                <div key={stat.label} className="auth-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="auth-showcase__points">
              {sidePoints.map((point) => (
                <div key={point} className="auth-showcase__point">
                  <ArrowRight size={15} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default AuthLayout;
