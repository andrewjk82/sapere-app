/**
 * ── Step-by-step Lesson Registry ──────────────────────────────────────────
 *
 * Lessons are AUTHORED (by Claude from textbook screenshots, then reviewed)
 * and stored here in code — no database, no per-student storage, no API cost
 * at runtime. Each lesson is keyed by its curriculum `topicId` (see
 * constants/curriculumData.js). A "Learn step-by-step" button appears in the
 * app ONLY for topics that have an entry here, so students only ever see
 * vetted lessons.
 *
 * ── Lesson Spec schema ────────────────────────────────────────────────────
 * {
 *   topicId: string,           // matches curriculum topic id, e.g. 'y7-1g'
 *   title:   string,
 *   steps: [
 *     {
 *       narration: string,     // HTML shown on screen (allows <b>, <sup>…)
 *       speech:    string,     // plain text read aloud (Web Speech API)
 *       board:     BoardItem[] // what to draw on the visual board this step
 *     }
 *   ]
 * }
 *
 * BoardItem (a small set of reusable primitives — extend as new lessons need):
 *   { type:'placeValueTable', columns:[{ name, digit, value, power,
 *        showDigit?, showValue?, showPower?, active? }] }
 *   { type:'math', content:string, emphasis?:boolean }   // KaTeX via MathView
 *   { type:'text', content:string }
 *
 * To add a lesson: build a spec (often via a small helper like the one below
 * for place value) and register it in LESSONS keyed by topicId.
 */

// ── Helper: build a Place Value lesson spec for any whole number ───────────
const PLACE_NAMES = ['Ones', 'Tens', 'Hundreds', 'Thousands', 'Ten thousands', 'Hundred thousands', 'Millions'];
const PV_WORD = ['1', '10', '100', '1000', '10\\,000', '100\\,000', '1\\,000\\,000'];
const PV_SPOKEN = ['1', '10', '100', '1 thousand', '10 thousand', '100 thousand', '1 million'];
const fmt = (n) => n.toLocaleString('en-US').replace(/,/g, '\\,');
const fmtPlain = (n) => n.toLocaleString('en-US').replace(/,/g, ' ');

export const buildPlaceValueLesson = (number, title = 'Place value') => {
  const s = String(Math.max(0, Math.floor(number)));
  const digits = s.split('').map(Number);
  const len = digits.length;
  const cols = digits.map((d, i) => {
    const power = len - 1 - i;
    return { d, power, name: PLACE_NAMES[power] || `10^${power}`,
             value: d * Math.pow(10, power),
             pvWord: PV_WORD[power] || `10^${power}`,
             pvSpoken: PV_SPOKEN[power] || `ten to the power ${power}` };
  });
  const value = cols.reduce((a, c) => a + c.value, 0);

  // Build the place-value table board for a given step.
  const table = (activeIdx, valueUpto, showPow) => ({
    type: 'placeValueTable',
    columns: cols.map((c, i) => ({
      name: c.name, digit: c.d, value: c.value, power: c.power,
      showDigit: true,
      showValue: valueUpto !== undefined && i <= valueUpto,
      showPower: !!showPow,
      active: i === activeIdx,
    })),
  });

  const steps = [];
  // 0 — intro
  steps.push({
    narration: `The number <b>${fmtPlain(value)}</b> is a <b>${len}-digit number</b>. Each place has a name: ${cols.map(c => c.name).join(', ')}.`,
    speech: `The number ${fmtPlain(value)} is a ${len} digit number. Each place has a name: ${cols.map(c => c.name.toLowerCase()).join(', ')}.`,
    board: [table(-1, undefined, false)],
  });
  // per-digit
  cols.forEach((c, i) => {
    steps.push({
      narration: c.d === 0
        ? `The digit in the <b>${c.name}</b> place is <b>0</b>. A zero place has a value of <b>0</b>, so there is nothing to add.`
        : `In the <b>${c.name}</b> place, the digit <b>${c.d}</b> has a place value of <b>${c.d} × ${c.pvWord.replace(/\\,/g, ' ')} = ${fmtPlain(c.value)}</b>.`,
      speech: c.d === 0
        ? `The digit in the ${c.name.toLowerCase()} place is zero. A zero place has a value of zero, so there is nothing to add.`
        : `In the ${c.name.toLowerCase()} place, the digit ${c.d} has a place value of ${c.d} times ${c.pvSpoken}, which equals ${fmtPlain(c.value)}.`,
      board: [table(i, i, false)],
    });
  });
  // expanded form
  const stdTerms = cols.filter(c => c.d !== 0).map(c => c.power > 0 ? `${c.d}\\times ${c.pvWord}` : `${c.d}`);
  steps.push({
    narration: `Adding all the place values gives the number back. Writing it this way is called <b>expanded form</b>.`,
    speech: `Adding all the place values gives the number back. Writing a number this way is called expanded form.`,
    board: [table(-1, len - 1, false), { type: 'math', content: `$$${fmt(value)} = ${stdTerms.join(' + ')}$$`, emphasis: true }],
  });
  // powers of 10
  const powTerms = cols.filter(c => c.d !== 0).map(c => c.power > 0 ? `${c.d}\\times 10^{${c.power}}` : `${c.d}`);
  steps.push({
    narration: `Using <b>powers of 10</b> makes it shorter: 10 = 10<sup>1</sup>, 100 = 10<sup>2</sup>, 1000 = 10<sup>3</sup>, …`,
    speech: `Using powers of ten makes it shorter. Ten is ten to the power one, one hundred is ten to the power two, one thousand is ten to the power three, and so on.`,
    board: [table(-1, len - 1, true), { type: 'math', content: `$$${fmt(value)} = ${powTerms.join(' + ')}$$`, emphasis: true }],
  });

  return { topicId: null, title, number, steps };
};

// ── Registered lessons (topicId → spec) ────────────────────────────────────
export const LESSONS = {
  // Year 7 · 1G · Place value (textbook example uses 3721)
  'y7-1g': { ...buildPlaceValueLesson(3721, 'Place value'), topicId: 'y7-1g' },
};

export const getLesson = (topicId) => (topicId && LESSONS[topicId]) || null;
export const hasLesson = (topicId) => Boolean(topicId && LESSONS[topicId]);
