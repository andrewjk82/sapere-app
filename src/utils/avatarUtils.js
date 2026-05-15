const DICEBEAR_BASE = 'https://api.dicebear.com/7.x';

/**
 * Builds the best available avatar URL for a user/student data object.
 * Priority: dreamImageUrl → custom avatarStyle+Seed → avatarUrl → dicebear fallback.
 * @param {object} data  — any user/student/profile object
 * @param {string} [fallbackSeed] — seed for the dicebear fallback (email, id, etc.)
 */
export const buildAvatarUrl = (data, fallbackSeed) => {
  if (!data) return `${DICEBEAR_BASE}/avataaars/svg?seed=${encodeURIComponent(fallbackSeed || 'sapere')}`;
  if (data.dreamImageUrl) return data.dreamImageUrl;
  if (data.avatarStyle && data.avatarSeed) {
    return `${DICEBEAR_BASE}/${data.avatarStyle}/svg?seed=${encodeURIComponent(data.avatarSeed)}`;
  }
  if (data.avatarUrl) return data.avatarUrl;
  const seed = fallbackSeed || data.email || data.id || 'sapere';
  return `${DICEBEAR_BASE}/avataaars/svg?seed=${encodeURIComponent(seed)}`;
};

/**
 * Resolves the best available display name for a user/student data object.
 * Priority: name → displayName → firstName+lastName → email → 'Student'.
 * @param {object} data
 */
export const buildDisplayName = (data) => {
  if (!data) return 'Student';
  if (data.name) return data.name;
  if (data.displayName) return data.displayName;
  if (data.firstName) return `${data.firstName} ${data.lastName || ''}`.trim();
  if (data.email) return data.email;
  return 'Student';
};
