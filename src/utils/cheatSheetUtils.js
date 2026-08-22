// Shared helpers for the per-chapter "cheat sheet" image feature.
// Used by both Curriculum.jsx (teacher/admin editor + admin chapter grid)
// and LearningPath.jsx (student-facing roadmap) so the URL-rewriting logic
// and legacy-field normalization live in exactly one place.

// Google Drive share links ("/file/d/{id}/view?usp=sharing") return an HTML
// viewer page, not the image bytes, so an <img src> pointed at one just
// fails to load. drive.google.com/uc?export=view fixes that for direct
// navigation, but Drive still blocks it as an <img> hotlink from another
// origin (onerror fires — verified against this app's own domain). The
// lh3.googleusercontent.com/d/{id} thumbnail endpoint has no such referrer
// check and embeds fine cross-origin, so that's the one we rewrite to. Any
// other URL (regular image host, /public path, etc.) passes through as-is.
export const toDirectImageUrl = (url) => {
  if (!url) return url;
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/) || url.match(/[?&]id=([^&]+)/);
  if (driveMatch && url.includes('drive.google.com')) {
    return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
  }
  return url;
};

// lh3.googleusercontent.com supports a "=w{n}-h{n}-c" size suffix that makes
// Google serve an actual small, cropped thumbnail instead of the full-size
// original — keeps a row of mini-cards cheap even with several cheat sheets
// on one chapter. Non-Drive URLs are returned as-is (no resize param to apply).
export const toThumbnailUrl = (url, size = 96) => {
  const direct = toDirectImageUrl(url);
  return direct && direct.includes('lh3.googleusercontent.com') ? `${direct}=w${size}-h${size}-c` : direct;
};

// Chapters may still carry the old single `cheatSheetUrl` string from before
// multi-cheat-sheet support — normalize both shapes into one array so render
// code only has to handle one case.
export const getChapterCheatSheets = (chapter) => {
  if (Array.isArray(chapter?.cheatSheets) && chapter.cheatSheets.length) return chapter.cheatSheets;
  if (chapter?.cheatSheetUrl) return [{ id: 'legacy', label: 'Cheat Sheet', url: chapter.cheatSheetUrl }];
  return [];
};
