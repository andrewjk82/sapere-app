/** Feedback card image split (text stays in Firestore, photos move to the device). Run via npm run test:homework. */
import assert from 'node:assert';
import { splitFeedbackImages, imageStripUpdate, mergeFeedbackImages } from '../src/utils/feedbackImages.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

const IMG = 'data:image/jpeg;base64,AAAA';
const IMG2 = 'data:image/png;base64,BBBB';
const DEL = () => '__delete__';

test('photos are split off, text fields stay', () => {
  const { text, images } = splitFeedbackImages({ questionText: 'Q', teacherFeedback: 'good', answerImages: [IMG], teacherAnnotation: IMG2 });
  assert.deepEqual(text, { questionText: 'Q', teacherFeedback: 'good' });
  assert.deepEqual(images, { answerImages: [IMG], teacherAnnotation: IMG2 });
});

test('answerImage that repeats answerImages is not kept twice', () => {
  const { images } = splitFeedbackImages({ answerImage: IMG, answerImages: [IMG] });
  assert.deepEqual(images, { answerImages: [IMG] });
});

test('answerImage different from answerImages is kept', () => {
  const { images } = splitFeedbackImages({ answerImage: IMG2, answerImages: [IMG] });
  assert.deepEqual(images, { answerImages: [IMG], answerImage: IMG2 });
});

test('an http image URL is not a device photo', () => {
  const { text, images } = splitFeedbackImages({ questionImage: 'https://x/y.png', answerText: '4' });
  assert.equal(images, null);
  assert.equal(text.questionImage, 'https://x/y.png');
});

test('a card with no photos needs no Firestore update', () => {
  assert.equal(imageStripUpdate({ answerText: '4', answerImages: [] }, DEL), null);
});

test('strip update deletes every photo field and records them', () => {
  const update = imageStripUpdate({ answerImage: IMG, answerImages: [IMG], teacherAnnotation: null }, DEL);
  assert.deepEqual(update, { answerImages: '__delete__', answerImage: '__delete__', deviceImageFields: ['answerImages', 'answerImage'] });
});

test('photos found on this device are shown', () => {
  const note = mergeFeedbackImages({ id: 'a', deviceImageFields: ['answerImages'] }, { answerImages: [IMG] });
  assert.deepEqual(note.answerImages, [IMG]);
  assert.equal(note.imagesMissing, false);
});

test('photos kept on another device are flagged missing, text still shown', () => {
  const note = mergeFeedbackImages({ id: 'a', teacherFeedback: 'good', deviceImageFields: ['answerImages'] }, null);
  assert.equal(note.imagesMissing, true);
  assert.equal(note.teacherFeedback, 'good');
});

test('a card that never had photos is not flagged', () => {
  assert.equal(mergeFeedbackImages({ id: 'a' }, null).imagesMissing, false);
});

console.log(`feedbackImages: ${passed} passed`);
