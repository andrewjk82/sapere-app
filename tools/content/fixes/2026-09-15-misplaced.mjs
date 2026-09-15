// Three placement fixes found by comparing content/ against the live curriculum tree.
import fs from 'node:fs'; import path from 'node:path';
const DIR = 'content/chapters';
const load = (c) => JSON.parse(fs.readFileSync(path.join(DIR, `${c}.json`), 'utf8'));
const save = (c, ch) => fs.writeFileSync(path.join(DIR, `${c}.json`), JSON.stringify(ch, null, 2));
const move = (id, fromC, toC, toTopic) => {
  const src = load(fromC); let q;
  for (const t of src.topics) { const i = t.questions.findIndex((x) => x.id === id); if (i >= 0) { q = t.questions.splice(i, 1)[0]; break; } }
  if (!q) throw new Error(`${id} not in ${fromC}`);
  src.topics = src.topics.filter((t) => t.questions.length); save(fromC, src);
  const dst = load(toC); let t = dst.topics.find((x) => x.topicId === toTopic);
  if (!t) { t = { topicId: toTopic, code: toTopic.replace(/^.*-/, '').toUpperCase(), title: '', questions: [] }; dst.topics.push(t); dst.topics.sort((a, b) => a.topicId.localeCompare(b.topicId, undefined, { numeric: true })); }
  delete q.alsoIn; t.questions.push(q); save(toC, dst);
  console.log(`${id}: ${fromC} → ${toC}/${toTopic}`);
};
// 1. topic id case: the app matches topicId exactly against the curriculum's "y11a-1c"
{ const ch = load('y11a-1'); const t = ch.topics.find((x) => x.topicId === 'y11a-1C'); if (t) { t.topicId = 'y11a-1c'; save('y11a-1', ch); console.log(`y11a-1: topic y11a-1C → y11a-1c (${t.questions.length} q)`); } }
// 2. Year 8 stem-and-leaf question filed under Year 9 measurement (doc says year: "Year 8", chapterId: "y9-16")
move('y8-19a-q9b', 'y9-16', 'y8-19', 'y8-19a');
// 3. Year 10 quadratic (vertex/intercepts) filed under Year 11 Advanced ch1 with no topic; y10-7h exists and lacks it
move('y10-7h-q7b', 'y11a-1', 'y10-7', 'y10-7h');
