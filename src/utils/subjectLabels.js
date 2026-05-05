export const normalizeSubjectLabel = (value = '') => (
  String(value).replace(/\bmaths\b/gi, 'Maths')
);
