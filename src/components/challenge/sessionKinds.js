import { BookOpen, Target, MessageCircle, BookOpenCheck } from 'lucide-react';

// Per-kind palette + glyph for the Challenge page's session cards. Shared by
// ChallengeStartView (daily / calc / feedback) and HomeworkCard (homework) so
// every card on that page uses the same ring icon.
export const KIND = {
  daily:    { Glyph: BookOpen,      ring: '#7c3aed', noteGrad: 'linear-gradient(135deg,#f5f3ff,#e7e0fb)', noteBorder: '#ddd6fe', badge: 'linear-gradient(135deg,#a78bfa,#7c3aed)' },
  calc:     { Glyph: Target,        ring: '#d97706', noteGrad: 'linear-gradient(135deg,#fffbeb,#fef3c7)', noteBorder: '#fde68a', badge: 'linear-gradient(135deg,#fbbf24,#d97706)' },
  feedback: { Glyph: MessageCircle, ring: '#0284c7' },
  homework: { Glyph: BookOpenCheck, ring: '#db2777' },
};
