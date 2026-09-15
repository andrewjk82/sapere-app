// Re-file questions that sat in topics absent from the curriculum tree into real curriculum topics.
// Each decision was made by reading the question + solution (see P1-REPORT.md, placement pass).
import fs from 'node:fs'; import path from 'node:path';
const DIR = 'content/chapters';
const load = (c) => JSON.parse(fs.readFileSync(path.join(DIR, `${c}.json`), 'utf8'));
const save = (c, ch) => fs.writeFileSync(path.join(DIR, `${c}.json`), JSON.stringify(ch, null, 2));
const cur = JSON.parse(fs.readFileSync('content/_export/raw-meta/curriculum.json', 'utf8'));
const titles = {}; const walk = (o) => { if (Array.isArray(o)) return o.forEach(walk); if (o && typeof o === 'object') { if (o.id && (o.topics || o.subtopics)) for (const t of (o.topics || o.subtopics)) titles[t.id] = t.title || t.name || ''; Object.values(o).forEach(walk); } }; walk(cur);

// id (or id prefix ending with *) → [chapterId, topicId]
const MAP = {
  // ---- Y7 term-3 2018 exam items misfiled under y7-11e..h (geometry, not Cartesian plane)
  'y7-t3-2018-p2-q1-mc': ['y7-12', 'y7-12c'],   // property of an equilateral triangle
  'y7-t3-2018-p2-q2-mc': ['y7-12', 'y7-12a'],   // which does not equal 180° (triangle sum / supplementary / co-interior)
  'y7-t3-2018-p2-q4i': ['y7-12', 'y7-12a'],     // triangle angle sum
  'y7-t3-2018-p2-q4iii': ['y7-12', 'y7-12a'],   // isosceles-style triangle angle sum
  'y7-t3-2018-p2-q4iv': ['y7-12', 'y7-12a'],    // exterior angle of a triangle
  'y7-t3-2018-p2-q3': ['y7-5', 'y7-5d'],        // angles making a right angle
  'y7-t3-2018-p2-q4ii': ['y7-12', 'y7-12e'],    // quadrilateral angle sum
  'y7-t3-2018-p2-q4': ['y7-5', 'y7-5e'],        // vertically opposite / alternate / co-interior on parallel lines
  // ---- y7-12f / y7-12i: measurement, not triangles
  'y7-t3-2018-p2-area-q4a': ['y7-8', 'y7-8f'],  // composite area
  'y7-t3-2018-p2-area-q4b': ['y7-8', 'y7-8f'],
  'y7-t3-2018-p2-area-q6': ['y7-8', 'y7-8h'],   // volume of rectangular prism (fish tank)
  // ---- y7-5i: recurring decimals belong to Decimals; y7-6f: integer order of operations
  'y7-t3-2018-p1-q38': ['y7-7', 'y7-7g'],
  'y7-t3-2018-p1-q40': ['y7-7', 'y7-7g'],
  'y7-t3-2018-p1-q2': ['y7-10', 'y7-10f'],
  // ---- y11a-2F (binomial-denominator rationalising) → 2D; y11a-2G surd equations
  'y11a-2F/*': ['y11a-2', 'y11a-2D'],
  'DrDBa7gxvKNSv8JPTRaJ': ['y11a-2', 'y11a-2C'],  // √12+√27=√x  (simplification)
  'hircY9W5PAe05munthlw': ['y11a-2', 'y11a-2C'],  // √18+√50=√x
  'u7Kg66CNIq3U1J81kcwX': ['y11a-2', 'y11a-2C'],  // √20+√45=√x
  'bbwvZDKtjrmIKqmJLoaZ': ['y11a-2', 'y11a-2D'],  // p+q√5 form → rationalising
  'Uakoudk3Co6J5j8Jl3w0': ['y11a-2', 'y11a-2D'],
  // ---- y12a-6F chapter review → the section each item exercises
  'y12a-6f-q1*': ['y12a-6', 'y12a-6B'],           // differentiate
  'y12a-6f-q2': ['y12a-6', 'y12a-6C'],            // gradient of tangent
  'y12a-6f-q3*': ['y12a-6', 'y12a-6C'],           // tangent equations (+ parent)
  'y12a-6f-q4*': ['y12a-6', 'y12a-6C'],           // stationary points
  'y12a-6f-q5*': ['y12a-6', 'y12a-6D'],           // indefinite integrals
  'y12a-6f-q6*': ['y12a-6', 'y12a-6D'],           // definite integrals
  'y12a-6f-q7': ['y12a-6', 'y12a-6D'],
  'y12a-6f-q8': ['y12a-6', 'y12a-6D'],            // curve from gradient function
  'y12a-6f-q9*': ['y12a-6', 'y12a-6E'],           // areas
  'y12a-6f-q10*': ['y12a-6', 'y12a-6E'],
  'y12a-6f-q11*': ['y12a-6', 'y12a-6E'],
  // ---- y10-12c-app: right-angled applications → 12A review; non-right (two bearings / two elevations / slope) → 12I revision
  'y10-12c-app-q7*': ['y10-12', 'y10-12i'],
  'y10-12c-app-q8*': ['y10-12', 'y10-12i'],
  'y10-12c-app-q9': ['y10-12', 'y10-12i'],
  'y10-12c-app-q10': ['y10-12', 'y10-12a'],
  'jr2013-qCc': ['y10-12', 'y10-12a'],
  'willoughby2019-s1-q3*': ['y10-12', 'y10-12a'],
  'willoughby2019-s1-q4': ['y10-12', 'y10-12a'],
  // ---- y11a-5 untopiced: the id names the section
  'y11a-5D-new-*': ['y11a-5', 'y11a-5D'],
  'y11a-5E-new-*': ['y11a-5', 'y11a-5E'],
};
const SOURCE_TOPICS = { 'y7-11': ['y7-11e', 'y7-11f', 'y7-11g', 'y7-11h'], 'y7-12': ['y7-12f', 'y7-12i'], 'y7-5': ['y7-5i'], 'y7-6': ['y7-6f'], 'y11a-2': ['y11a-2F', 'y11a-2G'], 'y12a-6': ['y12a-6F'], 'y10-12': ['y10-12c-app'], 'y11a-5': ['y11a-5'] };
const target = (id, fromTopic) => {
  if (MAP[id]) return MAP[id];
  for (const [k, v] of Object.entries(MAP)) { if (k.endsWith('/*') && k.slice(0, -2) === fromTopic) return v; if (k.endsWith('*') && !k.endsWith('/*') && id.startsWith(k.slice(0, -1))) return v; }
  return null;
};
const log = []; const unmapped = []; const pending = {}; // dstChapter → [{q, topicId}]
for (const [cid, tids] of Object.entries(SOURCE_TOPICS)) {
  const ch = load(cid);
  for (const t of ch.topics) {
    if (!tids.includes(t.topicId)) continue;
    for (const q of [...t.questions]) {
      const tg = target(q.id, t.topicId);
      if (!tg) { unmapped.push(`${cid}/${t.topicId}#${q.id}`); continue; }
      t.questions.splice(t.questions.indexOf(q), 1); delete q.alsoIn;
      (pending[tg[0]] ||= []).push({ q, topicId: tg[1] }); log.push(`${q.id}: ${cid}/${t.topicId} → ${tg[0]}/${tg[1]}`);
    }
  }
  ch.topics = ch.topics.filter((t) => t.questions.length); save(cid, ch);
}
for (const [cid, items] of Object.entries(pending)) {
  const ch = load(cid);
  for (const { q, topicId } of items) {
    let t = ch.topics.find((x) => x.topicId === topicId);
    if (!t) { t = { topicId, code: topicId.replace(/^.*-\d+/, '').toUpperCase(), title: titles[topicId] || '', questions: [] }; ch.topics.push(t); }
    t.questions.push(q);
  }
  ch.topics.sort((a, b) => a.topicId.localeCompare(b.topicId, undefined, { numeric: true })); save(cid, ch);
}
console.log(log.join('\n')); console.log(`\nmoved ${log.length}, unmapped ${unmapped.length}`, unmapped);
