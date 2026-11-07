// Generated (gen-) questions: every generator, many rolls. The answer shown as correct must really be
// correct, because a wrong key here marks a right student wrong and puts the question in their Secret Note.
// Run: node --import ./scripts/extResolve.mjs scripts/testGeneratedQuestions.mjs
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { generateQuestion } from '../src/services/questionGenerator.js';
import { retryHints } from '../src/utils/answerAttempts.js';

const source = fs.readFileSync(new URL('../src/services/questionGenerator.js', import.meta.url), 'utf8');
const registry = source.slice(source.indexOf('GENERATORS_BY_TYPE = {'));
const types = [...new Set(
  [...registry.slice(0, registry.indexOf('\n};')).matchAll(/^\s+([a-z0-9_]+):\s*(?:gen|\()/gm)].map((m) => m[1]),
)];
assert.ok(types.length > 150, `found only ${types.length} generator types`);

console.warn = () => {};
const ROLLS = 150;
const roll = (type, check) => {
  for (const difficulty of ['easy', 'medium', 'hard']) {
    for (let i = 0; i < ROLLS; i += 1) {
      const q = generateQuestion({ year: 'Year 3', type, difficulty });
      const options = (q.options || []).map((o) => String(o?.text ?? o).trim());
      const context = `${type}: ${q.question} => ${q.answer} [${options.join(' ; ')}]`;
      check(q, options, String(q.answer).trim(), context);
    }
  }
};
const modesOf = (values) => {
  const count = {};
  values.forEach((v) => { count[v] = (count[v] || 0) + 1; });
  const top = Math.max(...Object.values(count));
  return Object.keys(count).filter((k) => count[k] === top);
};

for (const type of types) {
  roll(type, (q, options, answer, context) => {
    assert.ok(answer, `empty answer ${context}`);
    assert.equal(new Set(options).size, options.length, `repeated option ${context}`);
    if (options.length) assert.ok(options.includes(answer), `answer not an option ${context}`);
    assert.ok(!options.some((o) => ['Other', 'None of these', '—', '??'].includes(o)), `filler option ${context}`);
    assert.ok(!/undefined|NaN/.test(`${q.question} ${options.join(' ')}`), `broken text ${context}`);
  });
}

roll('ordinal_numbers', (q, options, answer, context) => {
  const inRow = q.question.match(/^This row keeps repeating: (.+)\. Which item is in the (\d+)\w\w position\?$/);
  if (inRow) {
    const row = inRow[1].split(', ');
    const position = Number(inRow[2]);
    assert.ok(position > row.length, `must go past the row ${context}`);
    assert.equal(answer, row[(position - 1) % row.length], context);
    assert.ok(!q.hint.includes(`"${answer}" `) || answer === row[row.length - 1], `hint gives the answer ${context}`);
    return;
  }
  const ahead = q.question.match(/^(No|\d+) runners? finish/);
  assert.ok(ahead, `unknown stem ${context}`);
  assert.equal(parseInt(answer, 10), (ahead[1] === 'No' ? 0 : Number(ahead[1])) + 1, context);
});

roll('pattern_error', (q, options, answer, context) => {
  const m = q.question.match(/^The group (.+) keeps repeating, but someone wrote: (.+)\. The (\d)\w\w item is wrong\. What should it be\?$/);
  assert.ok(m, `unknown stem ${context}`);
  const unit = m[1].split(', ');
  const wrong = m[2].split(', ').map((item, i) => (item === unit[i % unit.length] ? null : i + 1)).filter(Boolean);
  assert.deepEqual(wrong, [Number(m[3])], `exactly the named item must be wrong ${context}`);
  assert.equal(answer, unit[(wrong[0] - 1) % unit.length], context);
  assert.ok(options.includes(m[2].split(', ')[wrong[0] - 1]), `the wrong item is a tempting option ${context}`);
});

roll('pattern_nth', (q, options, answer, context) => {
  const m = q.question.match(/^This group keeps repeating: (.+)\. What is the (\d+)\w\w item\?$/);
  assert.ok(m, `unknown stem ${context}`);
  const unit = m[1].split(', ');
  const position = Number(m[2]);
  assert.ok(position > unit.length, `must go past the group ${context}`);
  assert.equal(answer, unit[(position - 1) % unit.length], context);
  assert.ok(options.length >= 2, context);
  assert.ok(!q.hint.includes(`is ${answer}`), `hint gives the answer ${context}`);
});
assert.equal(['A', 'B', 'C', 'D', 'E', 'F'][(9 - 1) % 6], 'C');

roll('repeating_pattern', (q, options, answer, context) => {
  const shown = q.question.replace('What comes next? ', '').replace(', ___', '').split(', ');
  const unitLength = [1, 2, 3].find((n) => shown.every((item, i) => item === shown[i % n]));
  assert.equal(answer, shown[shown.length % unitLength], context);
});

roll('pattern_missing', (q, options, answer, context) => {
  const shown = q.question.replace('What is missing? ', '').split(', ');
  const gap = shown.indexOf('___');
  const unitLength = [2, 3].find((n) => shown.every((item, i) => (
    item === '___' || shown[i % n] === '___' || item === shown[i % n]
  )));
  const sameSlot = shown.find((item, i) => i % unitLength === gap % unitLength && item !== '___');
  assert.equal(answer, sameSlot, context);
});

const SIDES = { pentagon: 5, hexagon: 6, heptagon: 7, octagon: 8 };
roll('angle_relationships', (q, options, answer, context) => {
  const m = q.question.match(/interior angles of a (\w+)\?/);
  if (m) assert.equal(Number(answer), (SIDES[m[1]] - 2) * 180, context);
});

for (const type of ['division_with_remainder', 'division_multi_digit', 'division_facts']) {
  roll(type, (q, options, answer, context) => {
    const m = q.question.match(/^(\d+) ÷ (\d+) = \?$/);
    if (!m) return;
    const quotient = Math.floor(Number(m[1]) / Number(m[2]));
    const remainder = Number(m[1]) % Number(m[2]);
    assert.ok(!/\.\d/.test(answer), `decimal replaced the answer ${context}`);
    assert.ok(!options.some((o) => /^\d+\.\d+$/.test(o)), `decimal option ${context}`);
    if (remainder === 0) assert.equal(Number(answer), quotient, context);
    else {
      assert.equal(parseInt(answer, 10), quotient, context);
      assert.equal(Number(answer.match(/(\d+)$/)[1]), remainder, context);
    }
  });
}

roll('mean_median_mode', (q, options, answer, context) => {
  const m = q.question.match(/^Find the mode of: (.+)$/);
  if (!m) return;
  assert.deepEqual(modesOf(m[1].split(', ')), [answer], context);
});
roll('stem_leaf', (q, options, answer, context) => {
  if (!q.question.endsWith('What is the mode?')) return;
  const values = q.question.replace('Stem-and-leaf plot: ', '').replace('. What is the mode?', '').split(', ')
    .flatMap((row) => { const [stem, leaves] = row.split(' | '); return leaves.split(' ').map((leaf) => `${stem}${leaf}`); });
  assert.deepEqual(modesOf(values), [answer], context);
});
roll('dot_plot', (q, options, answer, context) => {
  const m = q.question.match(/^Dot plot data: (.+)\. What is the mode\?$/);
  if (m) assert.deepEqual(modesOf(m[1].split(', ')), [answer], context);
});

roll('factors_multiples', (q, options, answer, context) => {
  let m = q.question.match(/common factor of (\d+) and (\d+)\?/);
  if (m) {
    const good = options.filter((o) => Number(m[1]) % Number(o) === 0 && Number(m[2]) % Number(o) === 0);
    assert.deepEqual(good, [answer], `one option must fit ${context}`);
  }
  m = q.question.match(/multiple of (\d+)\?/);
  if (m) {
    assert.deepEqual(options.filter((o) => Number(o) % Number(m[1]) === 0), [answer], `one option must fit ${context}`);
  }
});

roll('percentage_problems', (q, options, answer, context) => {
  let m = q.question.match(/\$(\d+) is increased by (\d+)%/);
  if (m) assert.equal(Number(answer), Number(m[1]) * (100 + Number(m[2])) / 100, context);
  m = q.question.match(/\$(\d+) is discounted by (\d+)%/);
  if (m) assert.equal(Number(answer), Number(m[1]) * (100 - Number(m[2])) / 100, context);
  m = q.question.match(/What percentage is (\d+) out of (\d+)\?/);
  if (m) assert.equal(Number(answer), (Number(m[1]) * 100) / Number(m[2]), context);
});

roll('probability_observed_expected', (q, options, answer, context) => {
  assert.ok(!/coin.*probability of Heads is 1\/[46]/i.test(q.question), `a coin is 1/2 ${context}`);
});

roll('money_add_sub', (q, options, answer, context) => {
  const m = q.question.match(/\$([\d.]+) − \$([\d.]+)/);
  if (m) assert.ok(Number(m[1]) >= Number(m[2]), `negative money ${context}`);
});

for (const type of ['stage_place_value', 'place_value_to_100000', 'place_value_millions']) {
  roll(type, (q, options, answer, context) => {
    const m = q.question.match(/value of (?:the )?digit (\d)/);
    if (!m) return;
    const number = q.question.match(/\d[\d,]{3,}/)[0].replace(/,/g, '');
    assert.equal(number.split(m[1]).length - 1, 1, `digit must appear once ${context}`);
    assert.notEqual(m[1], '0', context);
  });
}

for (const [type, pattern] of [
  ['place_value_to_100000', /^Which is larger: ([\d,-]+) or ([\d,-]+)\?$/],
  ['place_value_millions', /^Which is greater: ([\d,-]+) or ([\d,-]+)\?$/],
  ['decimal_tenths_hundredths', /^Which decimal is larger: ([\d.]+) or ([\d.]+)\?$/],
]) {
  roll(type, (q, options, answer, context) => {
    const m = q.question.match(pattern);
    if (!m) return;
    assert.notEqual(m[1], m[2], `compare needs two different numbers ${context}`);
    assert.ok(!m[1].startsWith('-') && !m[2].startsWith('-'), context);
  });
}
roll('fraction_number_line', (q, options, answer, context) => {
  const m = q.question.match(/further from 0: \$\\dfrac\{(\d+)\}\{(\d+)\}\$ or \$\\dfrac\{(\d+)\}\{\d+\}\$/);
  if (m) assert.notEqual(m[1], m[3], `same fraction twice ${context}`);
});

// These hints must reach the student: a hint containing the answer is dropped for a generic prompt.
for (const type of ['pattern_nth', 'pattern_error', 'ordinal_numbers']) {
  roll(type, (q, options, answer, context) => {
    if (type === 'ordinal_numbers' && !q.question.startsWith('This row')) return;
    assert.deepEqual(retryHints(q)?.[0]?.lines, [q.hint], `hint was dropped ${context}`);
  });
}

console.log(`generated questions: ${types.length} generators OK`);
