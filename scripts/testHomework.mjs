/**
 * Homework helpers — pure logic only (no Firebase).
 * Usage: npm run test:homework
 */
import assert from 'node:assert';
import {
  MAX_HOMEWORK_PAGES,
  extractDriveFileId,
  toDrivePreviewUrl,
  toDriveOpenUrl,
  getHomeworkStatus,
  getHomeworkItems,
  getHomeworkHistory,
  curriculumDocIdsForProfile,
  buildTopicPdfMap,
  dataUrlBytes,
  purgeAfterDate,
  isSafeImageDataUrl,
} from '../src/utils/homework.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

console.log('homework helpers');

test('extractDriveFileId handles share, open?id= and uc?id= links', () => {
  assert.equal(extractDriveFileId('https://drive.google.com/file/d/ABC_123-x/view?usp=sharing'), 'ABC_123-x');
  assert.equal(extractDriveFileId('https://drive.google.com/open?id=XYZ789'), 'XYZ789');
  assert.equal(extractDriveFileId('https://drive.google.com/uc?export=download&id=Q1'), 'Q1');
  assert.equal(extractDriveFileId('https://example.com/file/d/NOPE/view'), null);
  assert.equal(extractDriveFileId(''), null);
  assert.equal(extractDriveFileId(undefined), null);
});

test('extractDriveFileId reads Google Docs viewer (gview) wrappers', () => {
  const gview = 'https://docs.google.com/gview?embedded=true&url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Ddownload%26id%3D13lto_vrV838XFNFZtT8al_vIkCotMx7v';
  assert.equal(extractDriveFileId(gview), '13lto_vrV838XFNFZtT8al_vIkCotMx7v');
  assert.equal(extractDriveFileId('https://docs.google.com/gview?url=https://drive.google.com/uc?export=download&id=PLAIN1&embedded=true'), 'PLAIN1');
  assert.equal(extractDriveFileId('https://drive.usercontent.google.com/download?id=UC9&export=download'), 'UC9');
  assert.equal(extractDriveFileId('https://docs.google.com/gview?url=https%3A%2F%2Fexample.com%2Fa.pdf'), null);
  assert.equal(extractDriveFileId('https://drive.google.com/file/d/%E0%A4%A/view'), '%E0%A4%A'); // bad escape must not throw
});

test('toDrivePreviewUrl normalises Drive links and passes others through', () => {
  assert.equal(
    toDrivePreviewUrl(' https://drive.google.com/file/d/ABC/view?usp=sharing '),
    'https://drive.google.com/file/d/ABC/preview',
  );
  assert.equal(toDrivePreviewUrl('https://drive.google.com/file/d/ABC/preview'), 'https://drive.google.com/file/d/ABC/preview');
  assert.equal(toDrivePreviewUrl('https://example.com/sheet.pdf'), 'https://example.com/sheet.pdf');
  assert.equal(toDrivePreviewUrl(''), '');
  assert.equal(toDrivePreviewUrl(null), '');
});

test('toDriveOpenUrl points Drive links at the viewer page', () => {
  assert.equal(toDriveOpenUrl('https://drive.google.com/file/d/ABC/preview'), 'https://drive.google.com/file/d/ABC/view');
  assert.equal(toDriveOpenUrl('https://example.com/a.pdf'), 'https://example.com/a.pdf');
});

test('getHomeworkStatus', () => {
  assert.equal(getHomeworkStatus({}), 'todo');
  assert.equal(getHomeworkStatus({ homeworkStatus: 'submitted' }), 'submitted');
  assert.equal(getHomeworkStatus({ homeworkStatus: 'checked' }), 'checked');
  assert.equal(getHomeworkStatus({ homeworkStatus: 'submitted', isHomeworkCompleted: true }), 'checked');
  assert.equal(getHomeworkStatus({ isHomeworkCompleted: true }), 'checked');
});

test('getHomeworkItems keeps sessions with learnedTopics, newest first, drops stale todos', () => {
  const today = new Date('2026-09-28T12:00:00');
  const sessions = [
    { id: 's1', date: '2026-09-20', learnedTopics: [{ id: 'y10-2a', label: '2A · Surds' }] },
    { id: 's2', date: '2026-09-27', learnedTopics: [{ id: 'y10-2b', title: 'Adding surds' }], homeworkStatus: 'submitted' },
    { id: 's3', date: '2026-09-25', learnedTopics: [] },
    { id: 's4', date: '2026-08-01', learnedTopics: [{ id: 'y10-1a', label: '1A' }] },
    { id: 's5', date: '2026-08-02', learnedTopics: [{ id: 'y10-1b', label: '1B' }], isHomeworkCompleted: true },
    { date: '2026-09-27', learnedTopics: [{ id: 'x' }] },
  ];
  const items = getHomeworkItems(sessions, { today });
  assert.deepEqual(items.map((i) => i.sessionId), ['s2', 's1', 's5']);
  assert.deepEqual(items[0].topics, [{ id: 'y10-2b', label: 'Adding surds' }]);
  assert.equal(items[0].status, 'submitted');
  assert.equal(items[1].status, 'todo');
  assert.equal(items[2].status, 'checked');
});

test('getHomeworkItems tolerates junk input', () => {
  assert.deepEqual(getHomeworkItems(null), []);
  assert.deepEqual(getHomeworkItems([null, {}]), []);
});

test('curriculumDocIdsForProfile mirrors LearningPath doc ids', () => {
  assert.deepEqual(curriculumDocIdsForProfile({ assignedYear: ['9', 'Year 10'] }), ['Year_9', 'Year_10']);
  assert.deepEqual(curriculumDocIdsForProfile({ assignedYear: 'Year 7' }), ['Year_7']);
  assert.deepEqual(
    curriculumDocIdsForProfile({ assignedYear: ['Year 12'], assignedCourse: ['Advanced', 'Extension 1'] }),
    ['Year_12_Advanced', 'Year_12_Extension 1'],
  );
  assert.deepEqual(curriculumDocIdsForProfile({ assignedYear: ['Year 11'] }), ['Year_11_Advanced']);
  assert.deepEqual(curriculumDocIdsForProfile({}), []);
});

test('buildTopicPdfMap collects homeworkPdfUrl from every chapter topic', () => {
  const map = buildTopicPdfMap([
    { chapters: [{ id: 'y10-2', topics: [{ id: 'y10-2a', homeworkPdfUrl: 'P1' }, { id: 'y10-2b' }] }] },
    { chapters: [{ id: 'y9-1', topics: [{ id: 'y9-1a', homeworkPdfUrl: 'P2' }] }, { id: 'no-topics' }] },
    null,
  ]);
  assert.deepEqual(map, { 'y10-2a': 'P1', 'y9-1a': 'P2' });
});

test('dataUrlBytes estimates decoded size', () => {
  const b64 = Buffer.from('x'.repeat(3000)).toString('base64');
  assert.equal(dataUrlBytes(`data:image/jpeg;base64,${b64}`), 3000);
  assert.equal(dataUrlBytes(''), 0);
});

test('purgeAfterDate adds the retention window', () => {
  assert.equal(purgeAfterDate(new Date('2026-09-28T00:00:00Z')), '2026-10-28');
  assert.equal(purgeAfterDate(new Date('2026-09-28T00:00:00Z'), 1), '2026-09-29');
});

test('isSafeImageDataUrl only accepts inline raster data URLs', () => {
  assert.equal(isSafeImageDataUrl('data:image/jpeg;base64,AAAA'), true);
  assert.equal(isSafeImageDataUrl('data:image/png;base64,AAAA'), true);
  assert.equal(isSafeImageDataUrl('data:image/webp;base64,AAAA'), true);
  assert.equal(isSafeImageDataUrl('https://evil.example/beacon.png'), false);
  assert.equal(isSafeImageDataUrl('//evil.example/x.png'), false);
  assert.equal(isSafeImageDataUrl('data:image/svg+xml;base64,AAAA'), false);
  assert.equal(isSafeImageDataUrl('data:text/html;base64,AAAA'), false);
  assert.equal(isSafeImageDataUrl(null), false);
});

test('page limit constant', () => {
  assert.equal(MAX_HOMEWORK_PAGES, 20);
});

test('getHomeworkHistory keeps everything, marks stale to-dos missed, carries the mark', () => {
  const today = new Date('2026-10-04T12:00:00');
  const sessions = [
    { id: 'old', date: '2026-08-01', learnedTopics: [{ id: 't1', label: '1A' }] },
    { id: 'new', date: '2026-10-02', learnedTopics: [{ id: 't2', label: '1B' }] },
    { id: 'chk', date: '2026-07-01', learnedTopics: [{ id: 't3' }], homeworkStatus: 'checked', homeworkScore: 8, homeworkTotal: 10, homeworkComment: ' Good work ' },
    { id: 'none', date: '2026-10-03', learnedTopics: [] },
  ];
  const items = getHomeworkHistory(sessions, { today });
  assert.deepEqual(items.map((i) => [i.sessionId, i.status, i.mark]), [
    ['new', 'todo', ''], ['old', 'missed', ''], ['chk', 'checked', '8/10'],
  ]);
  assert.equal(items[2].topics[0].label, 't3');
  assert.equal(items[2].comment, 'Good work');
});

console.log(`\n${passed} passed`);
