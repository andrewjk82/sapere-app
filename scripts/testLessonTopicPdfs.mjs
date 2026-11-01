/** Lesson PDF topic list. Run via npm run test:homework. */
import assert from 'node:assert';
import { listTopicPdfs, groupTopicPdfsByBook } from '../src/utils/lessonTopicPdfs.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const drive = (id) => `https://drive.google.com/file/d/${id}/view`;
const docs = [{ chapters: [
  { id: 'c1', title: 'Ch 1', topics: [{ id: 't1', code: '1A', title: 'Numbers', homeworkPdfUrl: drive('AAAAAAAAAAAAAAAAAAAA') }, { id: 't2', code: '1B', title: 'No pdf' }] },
  { id: 'c2', title: 'Ch 2', topics: [{ id: 't3', code: '2A', group: 'Algebra', title: 'Expand', homeworkPdfUrl: drive('BBBBBBBBBBBBBBBBBBBB') }, { id: 't4', title: 'Blank link', homeworkPdfUrl: '   ' }] },
] }];

test('only topics with a Drive PDF are listed, in curriculum order', () => {
  const list = listTopicPdfs(docs, {});
  assert.deepEqual(list.map((t) => t.id), ['t1', 't3']);
  assert.equal(list[1].label, '2A · Algebra: Expand');
  assert.equal(list[1].chapterTitle, 'Ch 2');
});

test('assigned topics (or topics of an assigned chapter) come first', () => {
  assert.deepEqual(listTopicPdfs(docs, { assignedChapters: ['c2'] }).map((t) => t.id), ['t3', 't1']);
  assert.deepEqual(listTopicPdfs(docs, { assignedChapters: ['t1'] }).map((t) => [t.id, t.assigned]), [['t1', true], ['t3', false]]);
});

test('topics carry their book; books come out grouped by chapter in curriculum order', () => {
  const two = [
    { id: 'Year_11_Extension 1', year: 'Year 11', course: 'Extension 1', chapters: docs[0].chapters },
    { id: 'Year_12_Advanced', chapters: [{ id: 'k1', title: 'Calc', topics: [{ id: 'u1', code: '1A', title: 'Limits', homeworkPdfUrl: drive('CCCCCCCCCCCCCCCCCCCC') }] }] },
  ];
  const list = listTopicPdfs(two, { assignedChapters: ['k1'] });
  assert.deepEqual(list.map((t) => [t.id, t.bookTitle]), [['u1', 'Year 12 Advanced'], ['t1', 'Year 11 Extension 1'], ['t3', 'Year 11 Extension 1']]);
  const books = groupTopicPdfsByBook(list);
  assert.deepEqual(books.map((b) => [b.title, b.total, b.assigned]), [['Year 11 Extension 1', 2, 0], ['Year 12 Advanced', 1, 1]]);
  assert.deepEqual(books[0].chapters.map((c) => [c.id, c.topics.map((t) => t.id)]), [['c1', ['t1']], ['c2', ['t3']]]);
  assert.deepEqual(groupTopicPdfsByBook(null), []);
});

test('missing data gives an empty list', () => {
  assert.deepEqual(listTopicPdfs(null, null), []);
  assert.deepEqual(listTopicPdfs([{}], {}), []);
});

console.log(`\nlesson topic pdfs: ${passed} passed`);
