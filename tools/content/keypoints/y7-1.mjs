// keyPoints for Y7 Ch1 (Whole numbers / integers). Rules written after reading every question
// template in the chapter (2026-09-26). Each rule: `when` (stem test) → `points`, each point a
// stem pattern to highlight + the tip. Maths is widened to the whole expression by applyKeyPoints.
// Order matters: the first rule that yields a highlight wins; topic fallbacks come last.

const M = String.raw`\\{1,2}\((?:(?!\\{1,2}\)).)*?\\{1,2}\)`; // one inline maths block
const lastMath = new RegExp(`${M}(?![\\s\\S]*${M})`, 's');

// ── Word-problem cue phrases ──
const SUB_CUE = /\b(defective|removes|rejects|discarded|send|reused|deletes|killed|become permanently unresponsive|evaporate|melt away|manually|paid off|expended|cut away|die off|discharges|allocates|consumes|bleaches|would not be able|relocated|purchased|release|drives south|backfill\w*|decreas\w*|falls?|fell|fallen|drops?|dropped|reduc\w*|lost|loss of|withdr[ae]w\w*|withdrawal|rejected|removed?|remove|burns?|burned|destroy\w*|used up|uses|drains?|draws? down|hauls?( away)?|trimmed away|separated|set aside|shipping|shipped|caught|migrated out|terminat\w*|deallocates|extracts?|takes|spends?|gave away|sold)\b/i;
const LEFT_CUE = /\b(survived|healthy|free|standing|final|expect\w*|remaining|remain\w*|left|leftover|still|new|approved|functional|usable|safely stored|active|unburned|now)\b/i;
const TOTAL_CUE = /\b(over the \w+ days|were present|total|combined|altogether|in all|aggregated|in the week|sum)\b/i;
const EACH_CUE = /\b(each|per|every)\b/i;
const SHARE_CUE = /\b(per|average|each|equally|holds?|holding|contains exactly|in each)\b/i;
const ROUND_UP_CUE = /\b(must be delivered|are needed|needed|are required|required)\b/i;

export const RULES = [
  // ───────────── Specific wording (any topic) ─────────────
  { when: /how many more|winning margin/i, points: [[/winning margin|how many more/i, '“How many more” means find the difference — subtract the smaller from the larger.']] },
  { when: /\b(fewer|less than)\b[\s\S]*\btimes\b/, points: [
    [/\d+ (dollars )?(fewer|less than)/, 'Fewer means subtract — find this person’s amount first…'],
    [/\d+ times/, '…then multiply that amount.'],
  ] },
  { when: /the result is multiplied/, points: [[/the result is multiplied/, 'Do the addition first, then multiply the result (it’s like brackets).']] },
  { when: /How many \w+ are there in \d+ \w+|in \d+ hours|How many \w+ can it make/, points: [
    [/boxes of \d+|in an hour|packets of \d+/, 'This is the amount in ONE group…'],
    [/in \d+ (boxes|hours)/, '…so multiply by the number of groups.'],
  ] },
  { when: /in weeks/, points: [[/in weeks/, 'There are 52 weeks in a year — multiply.']] },
  { when: /(collected|travelled)[\s\S]*(earn|travel|altogether|total|How far)/i, points: [[/collected|travelled/, 'Add each amount together.']] },
  { when: /value of the digit/, points: [[/value of the digit \d/, 'A digit’s value depends on its place — count positions from the right.']] },
  { when: /(divides? [\w\s]*into|segmented into|each (bus|block|rack|computer|shop)|per channel|crates of \d+|stored in \d+)/, points: [
    [/(divides? [\w\s]*into|segmented into|each (bus|block|rack|computer)|per channel|crates of \d+|in each rack)/, 'Sharing into equal groups — divide the total by the number (or size) of the groups.'],
    [/filled|prepared/, 'Only full groups count — ignore any remainder.'],
  ] },
  { when: /is added to the result/, points: [[/is added to the result/, 'Work out both products first, then add them.']] },
  { when: /subtracted from the result|result of multiplying[\s\S]*subtract/i, points: [[/result of multiplying/, 'Work out each product first, then subtract as the words say.']] },
  { when: /in days/, points: [[/in days/, 'Use 365 days in a year — multiply.']] },
  { when: /Convert this to hours, minutes and seconds/, points: [[/hours, minutes and seconds/, 'Divide by 60 to get minutes (keep the remainder as seconds), then divide the minutes by 60 to get hours.']] },
  { when: /Write as a numeral/, points: [[/Write as a numeral/, 'A million has 6 zeros — fill every empty place value with 0.']] },
  { when: /\d+ adults/, points: [[/\d+ adults/, 'Adults + children = the whole population, so subtract the adults.']] },
  { when: /\bcloser\b/, points: [[/\bcloser\b/, '“Closer” means a smaller distance — subtract.']] },
  { when: /\b(on|in) each \w+|each (model|node|locker|computer)|ampoules of \d+|over \d+ hours|packed in (boxes|cases) of|into bags of|per [a-z]+( [a-z]+)?\?/, points: [
    [/\b(on|in) each \w+( \w+)?|each (model|node|locker|computer)|ampoules of \d+ \w+|over \d+ hours|packed in (boxes|cases) of \d+|bags of \d+|per [a-z]+( [a-z]+)?(?=\?)/, 'Sharing into equal groups — divide the total by the number (or size) of the groups.'],
    [/completed|delivered|filled/, 'Count only full groups — unless every item must fit, then you need one more.'],
  ] },
  { when: /Work from left to right|calculating from left to right/, points: [[lastMath, 'Work strictly from left to right, one operation at a time.']] },
  { when: /distributive law to carry out/, points: [[lastMath, 'Look for the common factor: a × c − b × c = (a − b) × c.']] },
  { when: /per (hour|day|minute)[\s\S]*How many[\s\S]*in an? \d+/, points: [
    [/\d+ \w+ per (hour|day|minute)/, 'This is the amount in ONE hour/day…'],
    [/in an? \d+(-hour| hours?| days?)/, '…so multiply by the number of hours/days.'],
  ] },
  { when: /vertical algorithm|Work out the answer to this addition/, points: [[lastMath, 'Line up units, tens, hundreds…; add each column from the right and carry into the next.']] },
  { when: /withdraw \$/, points: [
    [/account balance/, 'Start from the balance, take away the withdrawal (it can go below 0), then add the deposit.'],
  ] },
  { when: /\b99\d\b[\s\S]*(mentally|distributive)/, points: [
    [/\b99\d\b( kits)?/, 'Round up to 1000, multiply, then subtract the extra lots you added (e.g. 998 = 1000 − 2).'],
  ] },
  { when: /Each \w+ operates for \d+ hours per day/, points: [
    [/Each \w+ operates/, 'Three “per/each” quantities — multiply all three numbers.'],
    [/\d+ hours per day/, 'Multiply two of them first (pick an easy pair), then multiply by the third.'],
  ] },
  { when: /mixed numeral/, points: [[lastMath, 'Divide: the quotient is the whole number and the remainder goes over the divisor.']] },
  { when: /exactly five 5s/, points: [[/exactly five 5s/, 'Check each option: count the 5s, then work it out using the order of operations.']] },
  { when: /\\times 10\^\{?\d+\}? \+/, points: [[lastMath, 'Each term is a digit times a power of ten — the power tells you which place it goes in.']] },
  { when: /smallest possible remainder/, points: [
    [/smallest possible remainder/, 'The remainder must be smaller than the divisor — use the biggest multiple that fits.'],
  ] },
  { when: /addition mentally/, points: [[/mentally/, 'Add the tens first, then the units — or make a round ten first.']] },
  { when: /subtraction mentally/, points: [[/mentally/, 'Subtract the tens first, then the units — or count up from the smaller number.']] },
  { when: /calculation mentally: \\\(\d+ \\times \(/, points: [[lastMath, 'Work out the bracket first, then multiply.']] },
  { when: /pairing techniques?/, points: [[lastMath, 'Pair numbers that add to a round ten (like 22 + 18), then add the pairs.']] },
  { when: /hundred and/, points: [[/hundred and/, 'Write each number in digits first, then add in columns.']] },
  { when: /\b(deficit|shortfall)\b/, points: [
    [/\b(deficit|shortfall)\b/, 'A deficit/shortfall is the gap between the target and what actually happened — subtract.'],
  ] },
  { when: /backfill/, points: [[/backfill\w*/, 'Backfilling makes the hole shallower, so the depth gets smaller — subtract.']] },
  { when: /\blonger\b|\bmore than\b(?! Anna)/, points: [[/\d+ \w+ longer|\blonger\b|more than/, '“Longer / more than” means add the extra amount.']] },
  { when: /trip meter/, points: [[/showed/, 'The distance between two readings is the later reading minus the earlier one.']] },
  { when: /\b(left|leave)\b[\s\S]*\b(joined|get on|got on)\b/, points: [
    [/\b(left|leave)\b/, 'People leaving are subtracted…'],
    [/\b(joined|get on|got on)\b/, '…and people joining are added.'],
  ] },
  { when: /in months/, points: [[/in months/, 'There are 12 months in a year — multiply.']] },
  { when: /How many minutes/, points: [[/How many minutes/, 'There are 60 minutes in an hour — multiply.']] },
  { when: /Find the product/, points: [[/product/, 'Product means multiply.']] },
  { when: /is multiplied by \d+, and \d+ is added|multiplied by [\w\s]+, and/i, points: [[/multiplied by/, 'Do the steps in the order the words say: multiply first, then add.']] },
  { when: /\b(halved|triples|doubles|doubled|tripled|double)\b/, points: [
    [/\b(halved|triples|tripled|doubles|doubled|double)\b/, 'Do each change in order — halve means ÷ 2, triple means × 3, double means × 2.'],
  ] },
  { when: /years after she arrived/, points: [
    [/\d+\\\) years ago/, 'Find her age when she arrived first: her age now − the years since.'],
    [/years after she arrived/, 'Then add the years after she arrived.'],
  ] },
  { when: /can be used more than once/, points: [[/can be used more than once/, 'Digits can repeat — list them systematically, largest hundreds digit first.']] },
  { when: /(rows|packets|packs|cartons?) of \d+|contains \d+ packets/, points: [
    [/(rows|packets|packs) of \d+|contains \d+ packets/, 'Equal groups — multiply the number of groups by the amount in each.'],
  ] },
  { when: /(evenly|equal (groups|lengths)|into (racks|boxes) of|containers of|per (cycle|thread|slot)|fully completed|completely filled|tour groups?)/, points: [
    [/(evenly|equal (groups|lengths)|racks of \d+|boxes of \d+|containers of \d+ \w+|per (cycle|thread|slot)|people in a tour group)/, 'Sharing into equal groups — divide the total by the size (or number) of the groups.'],
    [/fully completed|completely filled|filled/, 'Only full groups count — ignore any remainder.'],
  ] },
  // ───────────── 1a Operations with integers ─────────────
  { when: /Let \\\( M_2/, points: [
    [/midpoint of segment \\\( XY \\\)/, 'Find M₁ first: add the coordinates of X and Y, then divide by 2.'],
    [/midpoint of segment \\\( XM_1 \\\)/, 'Then find the midpoint again, this time between X and M₁.'],
  ] },
  { when: /of the distance from/, points: [
    [/\\\( \\frac\{\d+\}\{\d+\} \\\)/, 'Find the whole distance from A to B first, then take this fraction of it.'],
    [/from \\\( A \\\) to \\\( B \\\)/, 'Start at A and move towards B — add that part of the distance to A’s coordinate.'],
  ] },
  { when: /equal segments/, points: [
    [/equal segments/, 'Find the size of one segment: the gap between the markers ÷ the number of segments.'],
    [/major markers at/, 'The gap is the higher value minus the lower one — subtracting a negative adds.'],
  ] },
  { when: /compound inequality/, points: [
    [new RegExp(`${M}\\.?$`), '< means that end is NOT included; ≤ means it IS included.'],
    [/sum of all integers/, 'List every integer in the range, then add — a positive and its negative cancel.'],
  ] },
  { when: /absolute distance/, points: [
    [/\\\( -\d+[^)]*\\\)/, 'Below zero is negative. Count from this point up to 0, then from 0 to the other point.'],
    [/absolute distance/, 'Distance is never negative — it’s how far apart the two points are.'],
  ] },
  { when: /distance between \\\( x \\\) and/, points: [
    [/exactly/, 'There are two possible values of x — one on each side of the given point.'],
    [/sum of all possible values/, 'Find both values of x first, then add them together.'],
  ] },
  { when: /midpoint of segment \\\( C_1 C_2 \\\)/, points: [
    [/midpoint/, 'The midpoint is halfway: add the two coordinates and divide by 2.'],
    [/\\\( -\d[\d.]* \\\)/, 'Watch the sign — adding a negative number moves you left.'],
  ] },
  { when: /midpoint of the geological segment/, points: [
    [/midpoint of the geological segment/, 'M is exactly halfway, so B is as far beyond M as A is before it.'],
    [/\\\( A = -\d+ \\\)/, 'A is negative — find how far A is from M first.'],
  ] },
  { when: /units to the left/, points: [
    [/units to the left/, 'Left is negative, right is positive — add the moves in order.'],
    [/starts at position/, 'Begin from the starting position, not from 0 (unless it is 0).'],
  ] },
  { when: /Arrange in ascending order/, points: [
    [/ascending order/, 'Ascending means smallest first. With negatives, the bigger the number after the minus sign, the smaller it is.'],
  ] },

  // ───────────── 1b Associative grouping ─────────────
  { when: /same result as/, points: [
    [/same result as/, 'You may regroup and reorder numbers in addition — the associative and commutative laws.'],
  ] },

  // ───────────── 1c / 1d column puzzles ─────────────
  { when: /missing digit/i, points: [
    [/missing digit[^.:]*/, 'Start in the units column and work left, keeping track of any carry or borrow.'],
  ] },
  { when: /is equivalent to/, points: [
    [/is equivalent to/, 'Addition and subtraction undo each other: if a + b = c, then c − a = b.'],
  ] },
  { when: /\bodometer\b/, points: [
    [/at the beginning of a journey/, 'The odometer keeps counting up — add the journey to the starting reading.'],
  ] },
  { when: /more than Anna/, points: [
    [/more than Anna/, 'Bill has more, so Anna has less: take the difference away from Bill’s amount.'],
  ] },

  // ───────────── 1e Multiplication ─────────────
  { when: /any-order property/, points: [
    [lastMath, 'Multiply in any order — pair numbers that make 10, 100 or 1000 first.'],
  ] },
  { when: /Fill in the box.*imes/s, points: [
    [lastMath, 'In multiplication the brackets can move (associative law) — match the numbers on both sides.'],
  ] },
  { when: /Perform the multiplication/, points: [
    [lastMath, 'Multiplying by 10, 100 or 1000 moves every digit 1, 2 or 3 places left — add that many zeros.'],
  ] },

  // ───────────── 1f Mental strategies and the distributive law ─────────────
  { when: /using the distributive laws?(?! of division)/, points: [
    [lastMath, 'Look for a common factor: a × c + b × c = (a + b) × c, or split one number into an easy sum.'],
  ] },
  { when: /make the statement true: \\\(\d+ \\times \(/, points: [
    [lastMath, 'Distributive law: a × (b + c) = a × b + a × c. Match the pieces on each side.'],
  ] },
  { when: /Carry out the calculation mentally/, points: [
    [lastMath, 'Multiply before you add or subtract.'],
  ] },
  { when: /mentally/i, points: [
    [/\b99\d\b|\b10\d\b|\b99\b|\b\d+\s*(kits|units)/, 'Round to a friendly number (like 1000 or 100), multiply, then adjust for the difference.'],
    [/mentally/, 'Use the distributive law: e.g. 997 × 27 = 1000 × 27 − 3 × 27.'],
  ] },
  { when: /missing integer|missing value/, points: [
    [/missing (integer|value)/, 'Use the distributive law to match both sides of the equation.'],
  ] },
  { when: /Using the distributive law/, points: [
    [/Using the distributive law/, 'Find the common factor first, add or subtract the other parts, then multiply once.'],
    [/\beach\b/, 'The same number of boxes/days appears in each part — that is the common factor.'],
  ] },
  { when: /Simplify \\\( \d+ \\times \(/, points: [
    [lastMath, 'Work out the bracket first to get a round number, then multiply.'],
  ] },

  // ───────────── 1g Place value ─────────────
  { when: /expanded form/, points: [
    [/expanded form/, 'Write each digit times its place value: …thousands, hundreds, tens, units.'],
    [/the digit \d/, 'Count positions from the right: units, tens, hundreds, thousands…'],
  ] },
  { when: /10\^\\Box/, points: [
    [lastMath, 'The power of 10 is the number of zeros after the 1.'],
  ] },
  { when: /leftmost non-zero digit/, points: [
    [/leftmost non-zero digit/, 'Count how many digits come after it — that is the power of 10.'],
  ] },
  { when: /difference between the value of the digit/, points: [
    [/value of the digit/, 'A digit’s value depends on its position — find each value first, then subtract.'],
  ] },
  { when: /How many times greater is the value/, points: [
    [/How many times greater/, 'Find each digit’s place value, then divide the larger by the smaller.'],
  ] },
  { when: /multiplied by \\\(10\^/, points: [
    [/multiplied by/, 'Multiplying by 10ⁿ adds n zeros; dividing by 10ⁿ removes n zeros. Combine the powers first.'],
  ] },
  { when: /three-digit numbers that can be formed/, points: [
    [/use each digit only once/, 'List them systematically: fix the hundreds digit, then swap the other two.'],
  ] },
  { when: /Round \d+ to the nearest/, points: [
    [/to the nearest \w+/, 'Look at the digit just to the right of that place: 5 or more rounds up.'],
  ] },

  // ───────────── 1h Multiplication algorithms ─────────────
  { when: /Each \w+ (operates|has|contains|yields)[^.]*,? and each/i, points: [
    [/Each \w+/, 'Two “each”s mean two multiplications — multiply all three numbers.'],
    [/and each \w+/, 'Multiply two of the numbers first (pick an easy pair), then multiply by the third.'],
  ] },
  { when: /(short|long) multiplication method|^Evaluate \\\( \d+ \\times \d+ \\\)\.?$/, points: [
    [lastMath, 'Multiply the units digit first, carry, then the tens — or split into tens and units.'],
  ] },
  { when: /each own/, points: [
    [/each own/, 'Work out each group separately (people × pairs × 2 shoes), then add the groups.'],
  ] },

  // ───────────── 1i–1k Division ─────────────
  { when: /distributive law of division|short division rules: \\\(\(/, points: [
    [lastMath, 'Split it: (a ± b) ÷ c = a ÷ c ± b ÷ c. Divide each part, then combine.'],
  ] },
  { when: /Work from left to right/, points: [
    [lastMath, '× and ÷ have equal priority — work strictly from left to right.'],
  ] },
  { when: /Evaluate: \\\(\\frac/, points: [
    [lastMath, 'A fraction bar means divide: top ÷ bottom.'],
  ] },
  { when: /indicated method/, points: [
    [/\(divide by[^)]*\)|\(halv[^)]*\)|\(divide[^)]*\)/, 'Follow the method exactly: repeat the small division step the stated number of times.'],
  ] },
  { when: /split \d+ into a sum/, points: [
    [/split \d+ into a sum or difference/, 'Split into numbers that divide easily, e.g. 390 = 400 − 10.'],
  ] },
  { when: /quotient r remainder|quotient, remainder/, points: [
    [/quotient r remainder|"quotient, remainder"/, 'The remainder is what is left after the last step — it must be smaller than the divisor.'],
  ] },
  { when: /long division algorithm/, points: [
    [lastMath, 'Divide, multiply, subtract, bring down the next digit — repeat until done.'],
  ] },
  { when: /short division/i, points: [
    [lastMath, 'Divide from the left, one digit at a time, carrying each remainder into the next digit.'],
  ] },

  // ───────────── 1l Order of operations ─────────────
  { when: /places brackets/, points: [
    [/places brackets/, 'Brackets are worked out first — test each option to see which gives the target.'],
  ] },
  { when: /^Perform these calculations:/, points: [
    [/and then/, 'Do the steps in the order given — you may need brackets to write it as one expression.'],
  ] },
  { when: /^Evaluate: \\\(\d+ \\times 10\^/, points: [
    [lastMath, '10³ means 10 × 10 × 10 = 1000 — work out the power first.'],
  ] },

  // ───────────── 1m Revision ─────────────
  { when: /observation windows/, points: [
    [/in each window/, 'The same decrease happens every window — multiply it by the number of windows first.'],
    [/decreases/, 'A decrease is subtracted from the starting reading.'],
  ] },
  { when: /parallel lines/, points: [
    [/each producing/, 'Equal lines: multiply the number of lines by the amount each produces.'],
    [/additional reserve line/, 'Add the reserve line’s units on top of the main lines.'],
  ] },
  { when: /scaled up by a factor/, points: [
    [/combined units/, 'Add the two stations first…'],
    [/scaled up by a factor/, '…then multiply the combined amount by the factor.'],
  ] },
  { when: /for reference/, points: [
    [/remove \\\(\d+\\text\{ units\}\\\)|remove/, 'Subtract the removed units first to find what is left.'],
  ] },
  { when: /trigger at regular intervals|triggers every/, points: [
    [/triggers every/, 'They trigger together at a common multiple of both times — find the lowest common multiple.'],
  ] },
  { when: /buses are needed|buses are required/, points: [
    [/buses are (needed|required)/, 'Every student needs a seat — if there is a remainder, you need one more bus.'],
  ] },

  // ───────────── Generic word problems (by operation cue) ─────────────
  // Division-type questions first (topics 1i–1k and similar wording).
  { when: /(How many [\w\s-]+ (are|is) (filled|created|required|needed|delivered)|how many [\w\s-]+ does each|each [\w\s-]+ get|per (hour|second|run|batch|week|day|register|stage|area|line|qubit|core|substation|module|rack|node|shop|zone|block|unit|person)|average|equally|distributed|divided)/i, points: [
    [SHARE_CUE, 'Sharing into equal groups — divide the total by the number of groups.'],
    [ROUND_UP_CUE, 'If there is a remainder, one more is needed to fit everything.'],
  ] },
  { when: SUB_CUE, points: [
    [SUB_CUE, 'This amount is taken away — subtract it from the starting amount.'],
    [LEFT_CUE, 'The question asks what is left after the change.'],
  ] },
  { when: /\b(ascends|raises?|rises|climbs)\b.*\\\( ?-?\d/, points: [
    [/\b(ascends|raises?|rises|climbs)\b/, 'Going up moves the value towards 0 (or higher) — add.'],
  ] },
  { when: /\beach\b[\s\S]*\b(total|how many|find|calculate|solve|determine)\b|\b(rows?|by \\\( \d+ \\\))\b/i, points: [
    [EACH_CUE, '“Each” means equal groups — multiply the number of groups by the amount in each.'],
    [TOTAL_CUE, 'The total of equal groups is found by multiplying.'],
  ] },
  { when: TOTAL_CUE, points: [
    [TOTAL_CUE, 'Total/combined means add all the amounts together.'],
    [/\\\( ?\d+ ?\\\)[^.]*?, (and )?\\\( ?\d+ ?\\\)/, 'Group numbers that are easy to add first, then add the rest.'],
  ] },

  // ───────────── Topic drill fallbacks (bare expressions) ─────────────
  { when: /\\\(/, points: [[lastMath, (m) => {
    const e = m.replace(/\\left|\\right/g, '');
    const hasBr = /\(/.test(e.replace(/^\\{1,2}\(|\\{1,2}\)$/g, ''));
    const hasMulDiv = /\\times|\\div|imes|\\frac/.test(e);
    const hasAdd = /\+/.test(e); const hasSub = /\d\s*-\s*\d/.test(e);
    if (hasBr) return 'Work out the brackets first.';
    if (hasMulDiv && (hasAdd || hasSub)) return '× and ÷ come before + and − — do those first.';
    if (hasMulDiv) return '× and ÷ have equal priority — work from left to right.';
    if (hasSub) return 'Only + and − here: work strictly from left to right.';
    if (hasAdd) return 'Only addition — add in any order; group numbers that make round tens first.';
    return 'Work through the calculation one step at a time.';
  }]] },
];
