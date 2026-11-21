// Year 6 was re-laid out to ICE-EM Mathematics Year 6 (3rd ed.): old chapters (y6-wn, y6-frac, …) became y6-1 … y6-17.
// New ids never reuse old ones, so this map is safe to run more than once. A student's assigned / completed old chapter
// becomes every new chapter its questions moved to.
export const OLD_TO_NEW_CHAPTER = {
  'y6-wn': ['y6-1', 'y6-2', 'y6-3', 'y6-4', 'y6-15'],
  'y6-frac': ['y6-6', 'y6-7'],
  'y6-rqf': ['y6-6', 'y6-7'],
  'y6-rn': ['y6-8', 'y6-9'],
  'y6-ar': ['y6-8'],
  'y6-mr': ['y6-8'],
  'y6-gm': ['y6-5', 'y6-10', 'y6-14'],
  'y6-2ds': ['y6-5', 'y6-17'],
  'y6-3ds': ['y6-5', 'y6-12'],
  'y6-nsm': ['y6-13'],
  'y6-data': ['y6-15'],
  'y6-chan': ['y6-15'],
};

export const migrateStudentIds = (ids) => {
  const out = [];
  const add = (id) => { if (id && !out.includes(id)) out.push(id); };
  for (const id of Array.isArray(ids) ? ids : []) {
    const m = /^(y6-[a-z0-9]+?)(?:-\d+)?$/.exec(String(id));
    if (OLD_TO_NEW_CHAPTER[id]) OLD_TO_NEW_CHAPTER[id].forEach(add);
    else if (m && OLD_TO_NEW_CHAPTER[m[1]] && !/^y6-\d+$/.test(id)) OLD_TO_NEW_CHAPTER[m[1]].forEach(add);   // an old topic id
    else add(id);
  }
  return out;
};
