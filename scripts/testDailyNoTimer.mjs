import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { isTimedSession } from '../src/constants/challengeModes.js';

let passed = 0;
const test = (name, fn) => {
  fn();
  passed += 1;
  console.log(`  ok ${name}`);
};
const source = (path) => readFileSync(new URL(`../src/components/${path}`, import.meta.url), 'utf8');

test('only Daily Calculation is timed', () => {
  assert.equal(isTimedSession('calc'), true);
  assert.equal(isTimedSession('daily'), false);
  assert.equal(isTimedSession(undefined), false);
});

test('running out of time submits only in a timed session', () => {
  const src = source('DailyChallenge.jsx');
  const expiry = src.slice(src.indexOf('if (remaining <= 0) {'), src.indexOf('handleAnswerRef.current?.(typed, null)'));
  assert.match(expiry, /stepRef\.current === 'quiz' && isTimedSession\(challengeType\)/);
});

test('reopening an untimed session does not burn questions', () => {
  const src = source('DailyChallenge.jsx');
  const guard = src.indexOf('if (!isTimedSession(draft.challengeType))');
  const burn = src.indexOf("ua[idx] = '__timeout__'");
  assert.ok(guard > 0 && guard < burn);
});

test('the clock and the bar are shown only when timed', () => {
  const src = source('challenge/ChallengeQuizView.jsx');
  assert.ok(src.indexOf('{timed && (\n') < src.indexOf('<Clock size={16} /> {timeLeft}s'));
  assert.ok(src.includes('{timed && (() => {'));
  assert.ok(src.includes('timed = false'));
  assert.ok(source('DailyChallenge.jsx').includes('timed={isTimedSession(challengeType)}'));
});

console.log(`daily no timer: ${passed} passed`);
