const DICEBEAR_BASE = 'https://api.dicebear.com/7.x';

// dreamImageUrl is stored inline (a base64 data URL) in users/{uid} and copied into leaderboard/{uid},
// so its size is paid on every profile/leaderboard read. Largest on-screen use is 128 CSS px (Dashboard header).
export const AVATAR_MAX_PX = 128;
export const MAX_DREAM_CHARS = 12000; // ~9KB of JPEG; was 60000 at 400px

// Downscales a loaded <img> to AVATAR_MAX_PX and re-encodes JPEG until it fits MAX_DREAM_CHARS.
// Returns null if even the smallest attempt is too large.
export const compressAvatarImage = (img) => {
  const srcW = img.naturalWidth || img.width || 1;
  const srcH = img.naturalHeight || img.height || 1;
  let max = AVATAR_MAX_PX;
  for (let shrink = 0; shrink < 3; shrink += 1, max = Math.round(max * 0.8)) {
    const scale = Math.min(1, max / Math.max(srcW, srcH));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(srcW * scale));
    canvas.height = Math.max(1, Math.round(srcH * scale));
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    for (let quality = 0.75; quality >= 0.35; quality -= 0.1) {
      const url = canvas.toDataURL('image/jpeg', quality);
      if (url.length <= MAX_DREAM_CHARS) return url;
    }
  }
  return null;
};

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
