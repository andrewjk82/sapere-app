import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync, existsSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const CHAPTER_ID = 'y8-4';
const DUMP_PATH = '/Users/andrewkim/Desktop/sapere1/tools/audit-state/dump-y8-4.json';
const LOG_PATH = '/Users/andrewkim/Desktop/sapere1/tools/audit-state/fix-y8-4-log.json';

const w = (s) => `\\(${s}\\)`; // wrap in \( \) — never $

// ---- Full conversion data for all 45 in-scope docs ----
const CONVERSIONS = [
  // ===== Topic y8-4a =====
  {
    id: 'y8-4a-q1a', topicId: 'y8-4a',
    options: [w('-15, -14, -13, -12'), w('-13, -12, -11, -10'), w('11, 12, 13, 14'), w('-14, -13, -12, -11')],
    answer: 3,
    solutionSteps: [
      { explanation: 'We need every integer that lies strictly between -15 and -10. Because the question uses "less than" and "greater than" rather than "at most/at least", the two boundary values -15 and -10 themselves are not included in the list.', workingOut: w('-15 < x < -10'), graphData: null },
      { explanation: 'Starting just above -15, count upward one integer at a time until reaching just below -10. Each of these values satisfies both conditions at once.', workingOut: w('-14, -13, -12, -11'), graphData: null },
      { explanation: 'Checking each value confirms they are all greater than -15 and less than -10, with no other integers fitting in between. So the full list of integers satisfying both conditions is complete.', workingOut: w('\\{-14, -13, -12, -11\\}'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q1b', topicId: 'y8-4a',
    options: [w('-100, -99, -98, -97'), w('-98, -97, -96, -95'), w('-99, -98, -97, -96'), w('99, 98, 97, 96')],
    answer: 2,
    solutionSteps: [
      { explanation: 'We need every integer that is strictly greater than -100 and strictly less than -95. Since the inequalities are strict, neither -100 nor -95 belongs in the list.', workingOut: w('-100 < x < -95'), graphData: null },
      { explanation: 'Starting just above -100, count upward one integer at a time until reaching just below -95. This produces the run of integers that satisfy both conditions.', workingOut: w('-99, -98, -97, -96'), graphData: null },
      { explanation: 'Each of these four values is greater than -100 and less than -95, and no other integer fits between them. Therefore the complete list is confirmed.', workingOut: w('\\{-99, -98, -97, -96\\}'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q1c', topicId: 'y8-4a',
    options: [w('-5, -4, -3, -2, -1, 0'), w('-4, -3, -2, -1, 0, 1'), w('-4, -3, -2, -1, 0, 1, 2'), w('-4, -3, -2, -1, 1')],
    answer: 1,
    solutionSteps: [
      { explanation: 'We need every integer that is strictly less than 2 and strictly greater than -5. The boundaries -5 and 2 themselves are excluded, and zero must be included since it is an integer.', workingOut: w('-5 < x < 2'), graphData: null },
      { explanation: 'Starting just above -5, list every integer in order up to just below 2, remembering that zero sits between the negative and positive integers. This produces six consecutive integers in total.', workingOut: w('-4, -3, -2, -1, 0, 1'), graphData: null },
      { explanation: 'These six values are all greater than -5 and less than 2, and there are no other integers in that range. So the full list is confirmed.', workingOut: w('\\{-4, -3, -2, -1, 0, 1\\}'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q1d', topicId: 'y8-4a',
    options: [w('-209, -208, -207, -206'), w('-208, -207, -206, -205'), w('-210, -209, -208, -207'), w('209, 208, 207, 206')],
    answer: 0,
    solutionSteps: [
      { explanation: 'We need every integer that is strictly greater than -210 and strictly less than -205. The boundary values -210 and -205 are not included since the inequalities are strict.', workingOut: w('-210 < x < -205'), graphData: null },
      { explanation: 'Starting just above -210, count upward one integer at a time until reaching just below -205, listing each value along the way. This produces four consecutive integers in total.', workingOut: w('-209, -208, -207, -206'), graphData: null },
      { explanation: 'These four values all satisfy both conditions, and no other integer lies strictly between -210 and -205. The list is therefore complete.', workingOut: w('\\{-209, -208, -207, -206\\}'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q3', topicId: 'y8-4a',
    options: [w('-16, -20, -24'), w('-8, -4, 1'), w('-7, -2, 3'), w('-8, -4, 0')],
    answer: 3,
    solutionSteps: [
      { explanation: 'The sequence -20, -16, -12, ... increases by 4 each time, so the plan is to keep adding 4 to the previous term to find the next three terms.', workingOut: w('-12 + 4, \\; (-12+4) + 4, \\; ((-12+4)+4) + 4'), graphData: null },
      { explanation: 'Add 4 to the last given term, -12, to find the fourth term of the sequence. This follows directly from the constant increase described in the pattern.', workingOut: w('-12 + 4 = -8'), graphData: null },
      { explanation: 'Add 4 to the new term, -8, to find the fifth term. The pattern continues in exactly the same way as the previous step.', workingOut: w('-8 + 4 = -4'), graphData: null },
      { explanation: 'Add 4 to -4 to find the sixth term. This completes the pattern of adding 4 repeatedly.', workingOut: w('-4 + 4 = 0'), graphData: null },
      { explanation: 'The next three terms of the sequence are -8, -4 and 0, continuing the "going up by fours" pattern described in the question. Each term is 4 more than the one before it, matching the original sequence.', workingOut: w('-8, -4, 0'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q4', topicId: 'y8-4a',
    options: [w('5, 10, 15'), w('5, 0, 5'), w('5, 0, -5'), w('0, -5, -10')],
    answer: 2,
    solutionSteps: [
      { explanation: 'The sequence 20, 15, 10, ... decreases by 5 each time, so the plan is to subtract 5 from the previous term three times in a row to find the next three terms.', workingOut: w('10 - 5, \\; (10-5) - 5, \\; ((10-5)-5) - 5'), graphData: null },
      { explanation: 'Subtract 5 from the last given term, 10, to find the fourth term. This follows directly from the constant decrease described in the pattern.', workingOut: w('10 - 5 = 5'), graphData: null },
      { explanation: 'Subtract 5 from the new term, 5, to find the fifth term. Note that this crosses from positive to zero.', workingOut: w('5 - 5 = 0'), graphData: null },
      { explanation: 'Subtract 5 from 0 to find the sixth term, which becomes negative since we have gone below zero. This is the first negative term produced by the sequence.', workingOut: w('0 - 5 = -5'), graphData: null },
      { explanation: 'The next three terms of the sequence are 5, 0 and -5, continuing the "going down by fives" pattern. Each term is 5 less than the one before it, matching the original sequence.', workingOut: w('5, 0, -5'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q5', topicId: 'y8-4a',
    options: [w('-32, -40, -48, -56'), w('-16, -8, 0, 8'), w('-16, -8, 0, -8'), w('-16, -8, 0, 0')],
    answer: 1,
    solutionSteps: [
      { explanation: 'The sequence -40, -32, -24, ... increases by 8 each time, so the plan is to add 8 to the previous term repeatedly to find the next four terms.', workingOut: w('-24 + 8, \\ldots'), graphData: null },
      { explanation: 'Add 8 to the last given term, -24, to find the fourth term. This follows directly from the constant increase described in the pattern.', workingOut: w('-24 + 8 = -16'), graphData: null },
      { explanation: 'Add 8 to -16 to find the fifth term. The pattern continues in exactly the same way as the previous step.', workingOut: w('-16 + 8 = -8'), graphData: null },
      { explanation: 'Add 8 to -8 to find the sixth term. This crosses from negative to zero.', workingOut: w('-8 + 8 = 0'), graphData: null },
      { explanation: 'Add 8 to 0 to find the seventh term, giving a positive result for the first time in this run. This shows the sequence has crossed from negative to positive values.', workingOut: w('0 + 8 = 8'), graphData: null },
      { explanation: 'The next four terms of the sequence are -16, -8, 0 and 8, continuing the "going up by eights" pattern. Each term is 8 more than the one before it, matching the original sequence.', workingOut: w('-16, -8, 0, 8'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q6a', topicId: 'y8-4a',
    options: [w('10^\\circ\\text{C}'), w('-10^\\circ\\text{C}'), w('20^\\circ\\text{C}'), w('0^\\circ\\text{C}')],
    answer: 0,
    solutionSteps: [
      { explanation: 'The plan is to read the level of the red mercury column against the marked scale on the thermometer, counting the gridlines from zero. Each small gridline on this thermometer represents 2 degrees, and every fifth gridline is labelled.', workingOut: w('\\text{Scale marked every } 2^\\circ\\text{C, labelled every } 10^\\circ\\text{C}'), graphData: null },
      { explanation: 'Trace the top of the red column across to the nearest labelled gridline on the scale to identify its value. The value at that gridline is the temperature shown on the thermometer.', workingOut: w('\\text{Top of column aligns with the } 10^\\circ\\text{C line}'), graphData: null },
      { explanation: 'Since the column sits at the 10 degree mark above zero, the reading is positive. The thermometer therefore shows a temperature of 10 degrees Celsius.', workingOut: w('10^\\circ\\text{C}'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q6b', topicId: 'y8-4a',
    options: [w('20^\\circ\\text{C}'), w('-10^\\circ\\text{C}'), w('-30^\\circ\\text{C}'), w('-20^\\circ\\text{C}')],
    answer: 3,
    solutionSteps: [
      { explanation: 'The plan is to read the level of the red mercury column against the marked scale on the thermometer, paying close attention to whether it is above or below zero. Each small gridline on this thermometer represents 2 degrees, and every fifth gridline is labelled.', workingOut: w('\\text{Scale marked every } 2^\\circ\\text{C, labelled every } 10^\\circ\\text{C}'), graphData: null },
      { explanation: 'Trace the top of the red column across to the nearest labelled gridline. Because the column sits below the zero mark, the reading must be negative.', workingOut: w('\\text{Top of column aligns with the } -20^\\circ\\text{C line}'), graphData: null },
      { explanation: 'Since the column reaches 20 degrees below zero, the reading is negative twenty degrees Celsius. This reflects a temperature well below freezing.', workingOut: w('-20^\\circ\\text{C}'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q6c', topicId: 'y8-4a',
    options: [w('12^\\circ\\text{C}'), w('-10^\\circ\\text{C}'), w('-12^\\circ\\text{C}'), w('-14^\\circ\\text{C}')],
    answer: 2,
    solutionSteps: [
      { explanation: 'The plan is to read the level of the red mercury column against the marked scale, checking carefully how far below zero it extends. Each small gridline on this thermometer represents 2 degrees, and every fifth gridline is labelled.', workingOut: w('\\text{Scale marked every } 2^\\circ\\text{C, labelled every } 10^\\circ\\text{C}'), graphData: null },
      { explanation: 'Trace the top of the red column across to the scale. It lines up two small gridlines below the -10 degree mark.', workingOut: w('\\text{Top of column aligns with the } -12^\\circ\\text{C line}'), graphData: null },
      { explanation: 'Since the column sits 12 degrees below zero, the reading is negative twelve degrees Celsius, indicating a cold temperature below freezing. This is 2 degrees colder than the nearest labelled mark of -10 degrees.', workingOut: w('-12^\\circ\\text{C}'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q6d', topicId: 'y8-4a',
    options: [w('-4^\\circ\\text{C}'), w('4^\\circ\\text{C}'), w('6^\\circ\\text{C}'), w('2^\\circ\\text{C}')],
    answer: 1,
    solutionSteps: [
      { explanation: 'The plan is to read the level of the red mercury column against the marked scale, checking whether it sits above or below zero. Each small gridline on this thermometer represents 2 degrees, and every fifth gridline is labelled.', workingOut: w('\\text{Scale marked every } 2^\\circ\\text{C, labelled every } 10^\\circ\\text{C}'), graphData: null },
      { explanation: 'Trace the top of the red column across to the scale. It lines up two small gridlines above zero.', workingOut: w('\\text{Top of column aligns with the } 4^\\circ\\text{C line}'), graphData: null },
      { explanation: 'Since the column sits 4 degrees above zero, the reading is a small positive temperature of 4 degrees Celsius. This is 4 degrees warmer than freezing point.', workingOut: w('4^\\circ\\text{C}'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q7a', topicId: 'y8-4a',
    options: [w('-8'), w('8'), w('0'), w('-9')],
    answer: 0,
    solutionSteps: [
      { explanation: 'The opposite of an integer is the number with the same distance from zero but the reversed sign. The plan is to flip the sign of the given integer, 8.', workingOut: w('8'), graphData: null },
      { explanation: 'Since 8 is positive, its opposite is the same size but negative. The magnitude of the number stays exactly the same at 8, only the sign changes.', workingOut: w('8 \\to -8'), graphData: null },
      { explanation: 'Therefore, the opposite of 8 is -8. Both numbers sit exactly the same distance from zero on the number line, just on opposite sides.', workingOut: w('-8'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q7b', topicId: 'y8-4a',
    options: [w('-7'), w('0'), w('8'), w('7')],
    answer: 3,
    solutionSteps: [
      { explanation: 'The opposite of an integer is the number with the same distance from zero but the reversed sign. The plan is to flip the sign of the given integer, -7.', workingOut: w('-7'), graphData: null },
      { explanation: 'Since -7 is negative, its opposite is the same size but positive. The magnitude of the number stays exactly the same at 7, only the sign changes.', workingOut: w('-7 \\to 7'), graphData: null },
      { explanation: 'Therefore, the opposite of -7 is 7. Both numbers are exactly 7 units away from zero, just in opposite directions.', workingOut: w('7'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q7c', topicId: 'y8-4a',
    options: [w('42'), w('-24'), w('-42'), w('-41')],
    answer: 2,
    solutionSteps: [
      { explanation: 'The opposite of an integer is the number with the same distance from zero but the reversed sign. The plan is to flip the sign of the given integer, 42.', workingOut: w('42'), graphData: null },
      { explanation: 'Since 42 is positive, its opposite is the same size but negative. The magnitude of the number stays exactly the same at 42, only the sign changes.', workingOut: w('42 \\to -42'), graphData: null },
      { explanation: 'Therefore, the opposite of 42 is -42. Both numbers sit exactly 42 units from zero, just on opposite sides of the number line.', workingOut: w('-42'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q7d', topicId: 'y8-4a',
    options: [w('-12'), w('12'), w('21'), w('13')],
    answer: 1,
    solutionSteps: [
      { explanation: 'The opposite of an integer is the number with the same distance from zero but the reversed sign. The plan is to flip the sign of the given integer, -12.', workingOut: w('-12'), graphData: null },
      { explanation: 'Since -12 is negative, its opposite is the same size but positive. The magnitude of the number stays exactly the same at 12, only the sign changes.', workingOut: w('-12 \\to 12'), graphData: null },
      { explanation: 'Therefore, the opposite of -12 is 12. Both numbers are exactly 12 units from zero, in opposite directions.', workingOut: w('12'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q7e', topicId: 'y8-4a',
    options: [w('85'), w('-85'), w('58'), w('84')],
    answer: 0,
    solutionSteps: [
      { explanation: 'The opposite of an integer is the number with the same distance from zero but the reversed sign. The plan is to flip the sign of the given integer, -85.', workingOut: w('-85'), graphData: null },
      { explanation: 'Since -85 is negative, its opposite is the same size but positive. The magnitude of the number stays exactly the same at 85, only the sign changes.', workingOut: w('-85 \\to 85'), graphData: null },
      { explanation: 'Therefore, the opposite of -85 is 85. Both numbers sit exactly 85 units from zero, on opposite sides.', workingOut: w('85'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q7f', topicId: 'y8-4a',
    options: [w('93'), w('-39'), w('-94'), w('-93')],
    answer: 3,
    solutionSteps: [
      { explanation: 'The opposite of an integer is the number with the same distance from zero but the reversed sign. The plan is to flip the sign of the given integer, 93.', workingOut: w('93'), graphData: null },
      { explanation: 'Since 93 is positive, its opposite is the same size but negative. The magnitude of the number stays exactly the same at 93, only the sign changes.', workingOut: w('93 \\to -93'), graphData: null },
      { explanation: 'Therefore, the opposite of 93 is -93. Both numbers are exactly 93 units from zero, just in opposite directions.', workingOut: w('-93'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q7g', topicId: 'y8-4a',
    options: [w('-567'), w('657'), w('567'), w('568')],
    answer: 2,
    solutionSteps: [
      { explanation: 'The opposite of an integer is the number with the same distance from zero but the reversed sign. The plan is to flip the sign of the given integer, -567.', workingOut: w('-567'), graphData: null },
      { explanation: 'Since -567 is negative, its opposite is the same size but positive. The magnitude of the number stays exactly the same at 567, only the sign changes.', workingOut: w('-567 \\to 567'), graphData: null },
      { explanation: 'Therefore, the opposite of -567 is 567. Both numbers sit exactly 567 units from zero, on opposite sides.', workingOut: w('567'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q7h', topicId: 'y8-4a',
    options: [w('20000'), w('-20000'), w('-2000'), w('-20001')],
    answer: 1,
    solutionSteps: [
      { explanation: 'The opposite of an integer is the number with the same distance from zero but the reversed sign. The plan is to flip the sign of the given integer, 20000, keeping every digit unchanged.', workingOut: w('20000'), graphData: null },
      { explanation: 'Since 20000 is positive, its opposite is the same size but negative. The magnitude of the number stays exactly the same at 20000, only the sign changes.', workingOut: w('20000 \\to -20000'), graphData: null },
      { explanation: 'Therefore, the opposite of 20000 is -20000. Both numbers are exactly 20000 units from zero, just in opposite directions.', workingOut: w('-20000'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q7i', topicId: 'y8-4a',
    options: [w('4500'), w('-4500'), w('450'), w('4501')],
    answer: 0,
    solutionSteps: [
      { explanation: 'The opposite of an integer is the number with the same distance from zero but the reversed sign. The plan is to flip the sign of the given integer, -4500, keeping every digit unchanged.', workingOut: w('-4500'), graphData: null },
      { explanation: 'Since -4500 is negative, its opposite is the same size but positive. The magnitude of the number stays exactly the same at 4500, only the sign changes.', workingOut: w('-4500 \\to 4500'), graphData: null },
      { explanation: 'Therefore, the opposite of -4500 is 4500. Both numbers sit exactly 4500 units from zero, on opposite sides.', workingOut: w('4500'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q7j', topicId: 'y8-4a',
    options: [w('8900'), w('-890'), w('-8901'), w('-8900')],
    answer: 3,
    solutionSteps: [
      { explanation: 'The opposite of an integer is the number with the same distance from zero but the reversed sign. The plan is to flip the sign of the given integer, 8900, keeping every digit unchanged.', workingOut: w('8900'), graphData: null },
      { explanation: 'Since 8900 is positive, its opposite is the same size but negative. The magnitude of the number stays exactly the same at 8900, only the sign changes.', workingOut: w('8900 \\to -8900'), graphData: null },
      { explanation: 'Therefore, the opposite of 8900 is -8900. Both numbers are exactly 8900 units from zero, just in opposite directions.', workingOut: w('-8900'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q7k', topicId: 'y8-4a',
    options: [w('-67000'), w('-6700'), w('67000'), w('67001')],
    answer: 2,
    solutionSteps: [
      { explanation: 'The opposite of an integer is the number with the same distance from zero but the reversed sign. The plan is to flip the sign of the given integer, -67000, keeping every digit unchanged.', workingOut: w('-67000'), graphData: null },
      { explanation: 'Since -67000 is negative, its opposite is the same size but positive. The magnitude of the number stays exactly the same at 67000, only the sign changes.', workingOut: w('-67000 \\to 67000'), graphData: null },
      { explanation: 'Therefore, the opposite of -67000 is 67000. Both numbers sit exactly 67000 units from zero, on opposite sides.', workingOut: w('67000'), graphData: null }
    ]
  },
  {
    id: 'y8-4a-q7l', topicId: 'y8-4a',
    options: [w('84000'), w('-84000'), w('-8400'), w('-84001')],
    answer: 1,
    solutionSteps: [
      { explanation: 'The opposite of an integer is the number with the same distance from zero but the reversed sign. The plan is to flip the sign of the given integer, 84000, keeping every digit unchanged.', workingOut: w('84000'), graphData: null },
      { explanation: 'Since 84000 is positive, its opposite is the same size but negative. The magnitude of the number stays exactly the same at 84000, only the sign changes.', workingOut: w('84000 \\to -84000'), graphData: null },
      { explanation: 'Therefore, the opposite of 84000 is -84000. Both numbers are exactly 84000 units from zero, just in opposite directions.', workingOut: w('-84000'), graphData: null }
    ]
  },

  // ===== Topic y8-4h =====
  {
    id: 'y8-4h-q10', topicId: 'y8-4h',
    options: [w('10'), w('9'), w('20'), w('30')],
    answer: 0,
    solutionSteps: [
      { explanation: 'Harry scored a total of 30 marks, earning 12 marks for each of his 5 correct answers and losing 3 marks for every incorrect answer. The plan is to first find how many marks his correct answers alone were worth, then work out how many marks were lost to incorrect answers.', workingOut: w('5 \\times 12'), graphData: null },
      { explanation: 'Multiply the number of correct answers by the marks each is worth to find his marks from correct answers alone. This tells us the maximum score Harry would have had if every question he attempted was correct.', workingOut: w('5 \\times 12 = 60'), graphData: null },
      { explanation: 'Subtract his actual total score from the marks earned by correct answers to find how many marks were lost to incorrect answers. This difference represents the total penalty applied across all of his incorrect answers.', workingOut: w('60 - 30 = 30'), graphData: null },
      { explanation: 'Divide the marks lost by the penalty per incorrect answer to find the number of incorrect answers. This gives the number of questions Harry answered incorrectly.', workingOut: w('30 \\div 3 = 10'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q1a', topicId: 'y8-4h',
    options: [w('44'), w('-44'), w('-8'), w('8')],
    answer: 3,
    solutionSteps: [
      { explanation: 'We need to calculate -18 + 26. Adding a positive number to a negative number moves us to the right on the number line, so the plan is to combine the two values directly.', workingOut: w('-18 + 26'), graphData: null },
      { explanation: 'Since 26 is larger in size than 18, the result is positive. Subtract 18 from 26 to find the size of the result.', workingOut: w('26 - 18 = 8'), graphData: null },
      { explanation: 'Therefore, -18 + 26 equals 8. This is a positive result because the positive term outweighed the negative one.', workingOut: w('8'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q1b', topicId: 'y8-4h',
    options: [w('-22'), w('22'), w('86'), w('-86')],
    answer: 2,
    solutionSteps: [
      { explanation: 'We need to calculate 32 - (-54). Subtracting a negative number is equivalent to adding its positive counterpart, so the plan is to rewrite the expression as an addition first.', workingOut: w('32 - (-54)'), graphData: null },
      { explanation: 'Convert the double negative into addition, since subtracting -54 is the same as adding 54. This is because subtracting a negative number always increases the value.', workingOut: w('32 - (-54) = 32 + 54'), graphData: null },
      { explanation: 'Add the two positive values together to reach the final result. The answer is larger than either original number since both contributions are positive.', workingOut: w('32 + 54 = 86'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q1c', topicId: 'y8-4h',
    options: [w('18'), w('-18'), w('-56'), w('56')],
    answer: 1,
    solutionSteps: [
      { explanation: 'We need to calculate 45 - 82 + 19. Since there is no bracket, the plan is to work through the expression from left to right, one operation at a time.', workingOut: w('45 - 82 + 19'), graphData: null },
      { explanation: 'Subtract 82 from 45 first. Since 82 is larger than 45, the result is negative.', workingOut: w('45 - 82 = -37'), graphData: null },
      { explanation: 'Add 19 to -37 to complete the calculation. This brings the running total closer to zero.', workingOut: w('-37 + 19 = -18'), graphData: null },
      { explanation: 'Therefore, 45 - 82 + 19 equals -18, a negative result since the subtraction of 82 outweighed the additions. This shows how working left to right keeps track of the running total correctly.', workingOut: w('-18'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q1d', topicId: 'y8-4h',
    options: [w('-14'), w('14'), w('2'), w('-2')],
    answer: 0,
    solutionSteps: [
      { explanation: 'We need to calculate 19 - 25 - 8. Since there is no bracket, the plan is to work through the expression from left to right, one subtraction at a time.', workingOut: w('19 - 25 - 8'), graphData: null },
      { explanation: 'Subtract 25 from 19 first. Since 25 is larger than 19, the result is negative.', workingOut: w('19 - 25 = -6'), graphData: null },
      { explanation: 'Subtract 8 from -6 to complete the calculation, moving further into negative territory. Since both numbers being combined are negative, the result becomes more negative.', workingOut: w('-6 - 8 = -14'), graphData: null },
      { explanation: 'Therefore, 19 - 25 - 8 equals -14, since both subtractions reduced the running total below zero. This confirms the running total became increasingly negative with each step.', workingOut: w('-14'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q1e', topicId: 'y8-4h',
    options: [w('-1483'), w('925'), w('-997'), w('997')],
    answer: 3,
    solutionSteps: [
      { explanation: 'We need to calculate -315 - (-1240) + 72. Subtracting a negative is equivalent to adding a positive, so the plan is to rewrite the double negative before combining terms left to right.', workingOut: w('-315 - (-1240) + 72'), graphData: null },
      { explanation: 'Convert the double negative into addition, since subtracting -1240 is the same as adding 1240. This is because subtracting a negative number always increases the value.', workingOut: w('-315 - (-1240) = -315 + 1240'), graphData: null },
      { explanation: 'Add -315 and 1240 together. Since 1240 is larger, the running total becomes positive.', workingOut: w('-315 + 1240 = 925'), graphData: null },
      { explanation: 'Add the final term, 72, to the running total to reach the answer. The result is a positive number since the additions outweighed the subtraction.', workingOut: w('925 + 72 = 997'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q1f', topicId: 'y8-4h',
    options: [w('-5'), w('-41'), w('29'), w('5')],
    answer: 2,
    solutionSteps: [
      { explanation: 'We need to calculate 12 - (18 + (-35)). The order of operations tells us to evaluate the expression inside the brackets first, before applying the outer subtraction.', workingOut: w('12 - (18 + (-35))'), graphData: null },
      { explanation: 'Evaluate the bracket first. Adding -35 to 18 is the same as subtracting 35 from 18.', workingOut: w('18 + (-35) = -17'), graphData: null },
      { explanation: 'Substitute the bracket result back into the expression, converting the subtraction of a negative into an addition. Subtracting a negative number is equivalent to adding its positive counterpart.', workingOut: w('12 - (-17) = 12 + 17'), graphData: null },
      { explanation: 'Add 12 and 17 to reach the final answer. The result is positive because subtracting a negative bracket increased the total.', workingOut: w('12 + 17 = 29'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q2a', topicId: 'y8-4h',
    options: [w('-24'), w('12'), w('20'), w('-12')],
    answer: 1,
    solutionSteps: [
      { explanation: 'We need to evaluate 4 \\times (-7 + 12) - 8. Following the order of operations (BIDMAS/BODMAS), the plan is to evaluate the bracket first, then multiply, then subtract.', workingOut: w('4 \\times (-7 + 12) - 8'), graphData: null },
      { explanation: 'Evaluate the bracket first, adding -7 and 12 together. Brackets must always be simplified before any other operation is applied.', workingOut: w('-7 + 12 = 5'), graphData: null },
      { explanation: 'Multiply the result of the bracket by 4, since multiplication comes before the remaining subtraction. This follows the standard order of operations.', workingOut: w('4 \\times 5 = 20'), graphData: null },
      { explanation: 'Subtract 8 from 20 to complete the calculation. The final result is a positive number.', workingOut: w('20 - 8 = 12'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q2b', topicId: 'y8-4h',
    options: [w('17'), w('-47'), w('47'), w('-17')],
    answer: 0,
    solutionSteps: [
      { explanation: 'We need to evaluate -4 \\times -8 - 15. Following the order of operations, the plan is to perform the multiplication first, then subtract.', workingOut: w('-4 \\times -8 - 15'), graphData: null },
      { explanation: 'Multiply the two negative numbers first. A negative multiplied by a negative gives a positive result.', workingOut: w('-4 \\times -8 = 32'), graphData: null },
      { explanation: 'Subtract 15 from 32 to complete the calculation. This is the final step needed to reach the answer.', workingOut: w('32 - 15 = 17'), graphData: null },
      { explanation: 'Therefore, -4 \\times -8 - 15 equals 17, a positive result since the multiplication of two negatives produced a positive that outweighed the subtraction. This confirms that multiplying two negative numbers together always produces a positive result.', workingOut: w('17'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q2c', topicId: 'y8-4h',
    options: [w('-14'), w('14'), w('28'), w('-28')],
    answer: 3,
    solutionSteps: [
      { explanation: 'We need to evaluate -28 \\div 4 + 7 \\times -3. Following the order of operations, the plan is to perform the division and multiplication before the addition.', workingOut: w('-28 \\div 4 + 7 \\times -3'), graphData: null },
      { explanation: 'Divide -28 by 4 first. A negative divided by a positive gives a negative result.', workingOut: w('-28 \\div 4 = -7'), graphData: null },
      { explanation: 'Multiply 7 by -3. A positive multiplied by a negative gives a negative result.', workingOut: w('7 \\times -3 = -21'), graphData: null },
      { explanation: 'Add the two results together to complete the calculation. Both terms are negative, so the final answer is also negative.', workingOut: w('-7 + (-21) = -28'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q2d', topicId: 'y8-4h',
    options: [w('53'), w('5'), w('85'), w('-85')],
    answer: 2,
    solutionSteps: [
      { explanation: 'We need to evaluate -15 \\times (-3) - (-6 - 4) \\times 4. Following the order of operations, the plan is to evaluate the bracket first, then perform both multiplications, then subtract.', workingOut: w('-15 \\times (-3) - (-6 - 4) \\times 4'), graphData: null },
      { explanation: 'Evaluate the bracket first by subtracting 4 from -6. Brackets are always simplified before any multiplication or subtraction outside them.', workingOut: w('-6 - 4 = -10'), graphData: null },
      { explanation: 'Perform both multiplications: a negative times a negative gives a positive, and the bracket result times 4 stays negative. These two products must be found before the final subtraction can be carried out.', workingOut: w('-15 \\times (-3) = 45 \\text{ and } -10 \\times 4 = -40'), graphData: null },
      { explanation: 'Subtract -40 from 45, which is the same as adding 40, to reach the final answer. This completes the calculation and gives a positive result.', workingOut: w('45 - (-40) = 45 + 40 = 85'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q2e', topicId: 'y8-4h',
    options: [w('-126'), w('14'), w('-\\frac{14}{3}'), w('-14')],
    answer: 3,
    solutionSteps: [
      { explanation: 'We need to evaluate \\frac{-84 - 7 \\times 6}{5 - (-4)}. The plan is to simplify the numerator and the denominator separately before dividing.', workingOut: w('\\frac{-84 - 7 \\times 6}{5 - (-4)}'), graphData: null },
      { explanation: 'Simplify the numerator by multiplying first, then subtracting, following the order of operations. Multiplication must be completed before the subtraction is carried out.', workingOut: w('-84 - 7 \\times 6 = -84 - 42 = -126'), graphData: null },
      { explanation: 'Simplify the denominator by converting the subtraction of a negative into an addition. This gives a positive value for the denominator.', workingOut: w('5 - (-4) = 5 + 4 = 9'), graphData: null },
      { explanation: 'Divide the numerator by the denominator to complete the calculation. The result is negative since a negative divided by a positive gives a negative value.', workingOut: w('\\frac{-126}{9} = -14'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q2f', topicId: 'y8-4h',
    options: [w('68'), w('32'), w('-32'), w('-68')],
    answer: 0,
    solutionSteps: [
      { explanation: 'We need to evaluate \\frac{25 \\times 6}{3} - \\frac{9 \\times (-10)}{5}. The plan is to simplify each fraction separately before combining them.', workingOut: w('\\frac{25 \\times 6}{3} - \\frac{9 \\times (-10)}{5}'), graphData: null },
      { explanation: 'Simplify the first fraction by multiplying then dividing. Both operations in the numerator and division are completed to reach a whole number.', workingOut: w('\\frac{25 \\times 6}{3} = \\frac{150}{3} = 50'), graphData: null },
      { explanation: 'Simplify the second fraction. A positive multiplied by a negative gives a negative numerator.', workingOut: w('\\frac{9 \\times (-10)}{5} = \\frac{-90}{5} = -18'), graphData: null },
      { explanation: 'Subtract the second fraction from the first, converting the subtraction of a negative into addition to reach the final answer. This gives a larger positive result than either fraction alone.', workingOut: w('50 - (-18) = 50 + 18 = 68'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q2g', topicId: 'y8-4h',
    options: [w('-\\frac{2}{19}'), w('\\frac{71}{84}'), w('-\\frac{1}{84}'), w('\\frac{1}{84}')],
    answer: 3,
    solutionSteps: [
      { explanation: 'We need to evaluate -\\frac{5}{12} + \\frac{3}{7}. Since the denominators are different, the plan is to find a common denominator before adding the fractions.', workingOut: w('-\\frac{5}{12} + \\frac{3}{7}'), graphData: null },
      { explanation: 'The lowest common denominator of 12 and 7 is 84. Convert both fractions to have this denominator.', workingOut: w('-\\frac{5}{12} = -\\frac{35}{84}, \\quad \\frac{3}{7} = \\frac{36}{84}'), graphData: null },
      { explanation: 'Add the numerators now that the fractions share a common denominator. Only the numerators change when adding fractions with the same denominator.', workingOut: w('-\\frac{35}{84} + \\frac{36}{84} = \\frac{1}{84}'), graphData: null },
      { explanation: 'Therefore, -\\frac{5}{12} + \\frac{3}{7} equals \\frac{1}{84}, a small positive fraction since the positive term was very slightly larger once converted. Even though the fractions started far apart in size, converting to a common denominator revealed how close they actually were.', workingOut: w('\\frac{1}{84}'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q2h', topicId: 'y8-4h',
    options: [w('\\frac{11}{4}'), w('-\\frac{7}{4}'), w('\\frac{7}{4}'), w('\\frac{7}{8}')],
    answer: 2,
    solutionSteps: [
      { explanation: 'We need to evaluate \\frac{5}{14} \\times \\left( -\\frac{7}{5} \\right) + \\frac{9}{4}. Following the order of operations, the plan is to multiply the two fractions first, then add the last term.', workingOut: w('\\frac{5}{14} \\times \\left( -\\frac{7}{5} \\right) + \\frac{9}{4}'), graphData: null },
      { explanation: 'Multiply the first two fractions. A positive multiplied by a negative gives a negative result, and common factors cancel to simplify.', workingOut: w('\\frac{5}{14} \\times \\left( -\\frac{7}{5} \\right) = -\\frac{1}{2}'), graphData: null },
      { explanation: 'Convert both terms to a common denominator of 4 so they can be added. This allows the two fractions to be combined directly.', workingOut: w('-\\frac{1}{2} = -\\frac{2}{4}'), graphData: null },
      { explanation: 'Add the two fractions together to complete the calculation. The result is positive since the larger fraction was positive.', workingOut: w('-\\frac{2}{4} + \\frac{9}{4} = \\frac{7}{4}'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q3', topicId: 'y8-4h',
    options: [w('-12.5^\\circ\\text{C}'), w('12.5^\\circ\\text{C}'), w('24.5^\\circ\\text{C}'), w('6.5^\\circ\\text{C}')],
    answer: 1,
    solutionSteps: [
      { explanation: 'Perisher had a maximum temperature of -6 degrees Celsius, while Mount Buller had -18.5 degrees Celsius. The plan is to subtract the lower temperature from the higher one to find how much warmer Perisher was.', workingOut: w('-6 - (-18.5)'), graphData: null },
      { explanation: 'Convert the subtraction of a negative into addition, since subtracting -18.5 is the same as adding 18.5.', workingOut: w('-6 - (-18.5) = -6 + 18.5'), graphData: null },
      { explanation: 'Add -6 and 18.5 together. Since 18.5 is larger in size, the result is positive, confirming Perisher was warmer.', workingOut: w('-6 + 18.5 = 12.5'), graphData: null },
      { explanation: 'Therefore, Perisher was 12.5 degrees Celsius warmer than Mount Buller that day.', workingOut: w('12.5^\\circ\\text{C}'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q5', topicId: 'y8-4h',
    options: [w('12'), w('24'), w('16'), w('15')],
    answer: 0,
    solutionSteps: [
      { explanation: 'Points A(2, 0), B(5, 4) and C(8, 0) form a triangle. The plan is to use A and C, which both lie on the x-axis, as the base, and use the height of B above that axis to find the area.', workingOut: w('A(2,0), \\; B(5,4), \\; C(8,0)'), graphData: null },
      { explanation: 'Find the length of the base AC by subtracting the x-coordinates of A and C, since both points sit on the x-axis. This works because the distance between two points on the same horizontal line equals the difference in their x-coordinates.', workingOut: w('8 - 2 = 6'), graphData: null },
      { explanation: 'Find the perpendicular height of the triangle, which is the y-coordinate of point B, since that is how far B sits above the base. This works because the base lies exactly on the x-axis, where the y-coordinate is zero.', workingOut: w('\\text{height} = 4'), graphData: null },
      { explanation: 'Apply the triangle area formula, half of base times height, to find the final area. This formula works for any triangle once the base and perpendicular height are known.', workingOut: w('\\frac{1}{2} \\times 6 \\times 4 = 12'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q7a', topicId: 'y8-4h',
    options: [w('2\\frac{5}{12}'), w('-2\\frac{1}{12}'), w('-2\\frac{7}{12}'), w('-2\\frac{5}{12}')],
    answer: 3,
    solutionSteps: [
      { explanation: 'We need to calculate 3\\frac{1}{3} - 5\\frac{3}{4}. Since the second mixed number is larger, the plan is to convert both to improper fractions first so they can be compared and subtracted correctly.', workingOut: w('3\\frac{1}{3} - 5\\frac{3}{4}'), graphData: null },
      { explanation: 'Convert each mixed number into an improper fraction. This makes it possible to subtract the two values using standard fraction rules.', workingOut: w('3\\frac{1}{3} = \\frac{10}{3}, \\quad 5\\frac{3}{4} = \\frac{23}{4}'), graphData: null },
      { explanation: 'Rewrite both fractions using the common denominator 12 so they can be subtracted. A common denominator is required before the numerators can be combined.', workingOut: w('\\frac{10}{3} = \\frac{40}{12}, \\quad \\frac{23}{4} = \\frac{69}{12}'), graphData: null },
      { explanation: 'Subtract the numerators, then convert the resulting improper fraction back into a mixed number. The answer is negative since 69 twelfths is larger than 40 twelfths.', workingOut: w('\\frac{40}{12} - \\frac{69}{12} = -\\frac{29}{12} = -2\\frac{5}{12}'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q7b', topicId: 'y8-4h',
    options: [w('18.08'), w('7.3'), w('21.7'), w('22.9')],
    answer: 2,
    solutionSteps: [
      { explanation: 'We need to calculate 14.5 - (-9.6) \\times \\frac{3}{4}. Following the order of operations, the plan is to perform the multiplication before the subtraction.', workingOut: w('14.5 - (-9.6) \\times \\frac{3}{4}'), graphData: null },
      { explanation: 'Multiply -9.6 by three-quarters first. A negative multiplied by a positive fraction stays negative.', workingOut: w('-9.6 \\times \\frac{3}{4} = -7.2'), graphData: null },
      { explanation: 'Substitute this result back into the expression, converting the subtraction of a negative into an addition. Subtracting a negative value always increases the total.', workingOut: w('14.5 - (-7.2) = 14.5 + 7.2'), graphData: null },
      { explanation: 'Add 14.5 and 7.2 to reach the final answer, which is a positive decimal value.', workingOut: w('14.5 + 7.2 = 21.7'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q7c', topicId: 'y8-4h',
    options: [w('7\\frac{1}{2}'), w('-7\\frac{1}{2}'), w('-6\\frac{1}{2}'), w('-8\\frac{1}{2}')],
    answer: 1,
    solutionSteps: [
      { explanation: 'We need to calculate 15 \\times \\frac{4}{5} \\times \\left( -\\frac{5}{8} \\right). Since there are no brackets to prioritise beyond grouping, the plan is to multiply the three terms working from left to right.', workingOut: w('15 \\times \\frac{4}{5} \\times \\left( -\\frac{5}{8} \\right)'), graphData: null },
      { explanation: 'Multiply the first two terms, cancelling common factors between 15 and 5. Cancelling common factors first keeps the numbers smaller and easier to work with.', workingOut: w('15 \\times \\frac{4}{5} = 12'), graphData: null },
      { explanation: 'Multiply this result by the final term. A positive multiplied by a negative gives a negative result.', workingOut: w('12 \\times \\left( -\\frac{5}{8} \\right) = -\\frac{60}{8}'), graphData: null },
      { explanation: 'Simplify the resulting fraction to lowest terms and convert to a mixed number for the final answer. Writing the answer as a mixed number makes its size easier to interpret.', workingOut: w('-\\frac{60}{8} = -\\frac{15}{2} = -7\\frac{1}{2}'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q8', topicId: 'y8-4h',
    options: [w('2624.75\\text{ dollars}'), w('3466.25\\text{ dollars}'), w('2924.75\\text{ dollars}'), w('3124.75\\text{ dollars}')],
    answer: 0,
    solutionSteps: [
      { explanation: 'Sam started the week owing 420.75 dollars, then had several changes to his balance: earning 3500 dollars, losing 300 dollars to theft, winning 95.50 dollars, and paying a 250 dollar bill. The plan is to add every positive change and subtract every negative change from his starting position.', workingOut: w('-420.75 + 3500 - 300 + 95.50 - 250'), graphData: null },
      { explanation: 'Add together all the amounts that increased his balance: the money he earned and the money he won. Grouping the positive changes together makes the overall calculation clearer.', workingOut: w('3500 + 95.50 = 3595.50'), graphData: null },
      { explanation: 'Add together all the amounts that decreased his balance: his starting debt, the stolen money, and the electricity bill. Grouping the negative changes together in the same way simplifies the final subtraction.', workingOut: w('420.75 + 300 + 250 = 970.75'), graphData: null },
      { explanation: 'Subtract the total decreases from the total increases to find how much Sam had left at the end of the week. Since the increases were larger than the decreases, Sam ended the week with a positive balance.', workingOut: w('3595.50 - 970.75 = 2624.75'), graphData: null }
    ]
  },
  {
    id: 'y8-4h-q9', topicId: 'y8-4h',
    options: [w('4335\\text{ m}'), w('-9355\\text{ m}'), w('9345\\text{ m}'), w('9355\\text{ m}')],
    answer: 3,
    solutionSteps: [
      { explanation: 'The mountain peak sits 2510 metres above sea level, while its base on the sea floor sits 6845 metres below sea level. The plan is to subtract the base height, which is negative, from the peak height to find the total height of the mountain.', workingOut: w('2510 - (-6845)'), graphData: null },
      { explanation: 'Convert the subtraction of a negative into addition, since subtracting -6845 is the same as adding 6845. This is because subtracting a negative number always increases the value.', workingOut: w('2510 - (-6845) = 2510 + 6845'), graphData: null },
      { explanation: 'Add the two values together to find the total vertical distance from the sea floor to the summit. This distance spans both the height above sea level and the depth below it.', workingOut: w('2510 + 6845 = 9355'), graphData: null },
      { explanation: 'Therefore, the mountain measures 9355 metres from its base on the sea floor to its peak above sea level. This total height combines both the portion above sea level and the portion below it.', workingOut: w('9355\\text{ m}'), graphData: null }
    ]
  }
];

// ---- Self-verification helpers ----
function hasDollarSign(str) {
  return typeof str === 'string' && str.includes('$');
}
function hasNestedDelimiters(str) {
  if (typeof str !== 'string') return false;
  // strip the single outer \( \) then check for any remaining \( or \)
  const m = str.match(/^\\\((.*)\\\)$/s);
  if (!m) return true; // not properly wrapped at all
  const inner = m[1];
  return inner.includes('\\(') || inner.includes('\\)');
}

(async () => {
  const dumpDocs = JSON.parse(readFileSync(DUMP_PATH, 'utf8'));
  const dumpById = new Map(dumpDocs.map(d => [d.id, d]));

  const inscope = JSON.parse(readFileSync('/Users/andrewkim/Desktop/sapere1/tools/audit-state/inscope-y8-4.json', 'utf8'));
  const inScopeIds = new Set(inscope.inScopeIds);

  // Sanity: every conversion id must be in scope, and every in-scope id must be covered.
  const convIds = new Set(CONVERSIONS.map(c => c.id));
  const missing = [...inScopeIds].filter(id => !convIds.has(id));
  const extra = [...convIds].filter(id => !inScopeIds.has(id));
  if (missing.length) throw new Error(`Missing conversions for in-scope ids: ${missing.join(', ')}`);
  if (extra.length) throw new Error(`Conversions include out-of-scope ids: ${extra.join(', ')}`);

  const logEntries = existsSync(LOG_PATH) ? JSON.parse(readFileSync(LOG_PATH, 'utf8')) : [];
  const skipped = [];
  const converted = [];

  for (const conv of CONVERSIONS) {
    const orig = dumpById.get(conv.id);
    if (!orig) { skipped.push({ id: conv.id, reason: 'not found in dump' }); continue; }
    if (orig.origin === 'teacher') { skipped.push({ id: conv.id, reason: 'origin teacher' }); continue; }

    // Self-verification
    if (!Array.isArray(conv.options) || conv.options.length !== 4) {
      throw new Error(`${conv.id}: options must have exactly 4 entries`);
    }
    conv.options.forEach((opt, i) => {
      if (hasDollarSign(opt)) throw new Error(`${conv.id}: option[${i}] contains a $ character: ${opt}`);
      if (hasNestedDelimiters(opt)) throw new Error(`${conv.id}: option[${i}] not a single clean \\( \\) wrap: ${opt}`);
    });
    if (typeof conv.answer !== 'number' || conv.answer < 0 || conv.answer > 3) {
      throw new Error(`${conv.id}: answer must be an integer 0-3`);
    }
    if (!Array.isArray(conv.solutionSteps) || conv.solutionSteps.length < 3) {
      throw new Error(`${conv.id}: solutionSteps must have at least 3 steps`);
    }
    conv.solutionSteps.forEach((step, i) => {
      if (hasDollarSign(step.workingOut)) throw new Error(`${conv.id}: step[${i}].workingOut contains $`);
      if (hasNestedDelimiters(step.workingOut)) throw new Error(`${conv.id}: step[${i}].workingOut nested delimiters`);
      if (!step.explanation || step.explanation.split(/[.!?]/).filter(s => s.trim()).length < 2) {
        throw new Error(`${conv.id}: step[${i}].explanation must be at least 2 sentences`);
      }
    });

    const updateFields = {
      type: 'multiple_choice',
      options: conv.options,
      answer: conv.answer,
      solutionSteps: conv.solutionSteps,
      isNew: true,
    };

    await db.collection('questions').doc(conv.id).update(updateFields);

    // Remove any prior log entry for this id (idempotent re-run) then append fresh.
    const existingIdx = logEntries.findIndex(e => e.id === conv.id);
    if (existingIdx !== -1) logEntries.splice(existingIdx, 1);
    logEntries.push({
      id: conv.id,
      chapterId: CHAPTER_ID,
      topicId: conv.topicId,
      changedFields: {
        type: { old: orig.type, new: 'multiple_choice' },
        options: { old: orig.options || [], new: conv.options },
        answer: { old: orig.answer, new: conv.answer },
        solutionSteps: { old: orig.solutionSteps || [], new: conv.solutionSteps },
        isNew: { old: orig.isNew !== undefined ? orig.isNew : null, new: true },
      }
    });
    converted.push(conv.id);
    console.log(`Converted ${conv.id}`);
    // Write incrementally so a mid-run failure never loses the record.
    writeFileSync(LOG_PATH, JSON.stringify(logEntries, null, 2));
  }

  console.log(`\nDone. Converted: ${converted.length}. Skipped: ${skipped.length}.`);
  if (skipped.length) console.log('Skipped:', skipped);
  console.log(`Log written to ${LOG_PATH} with ${logEntries.length} total entries.`);
  process.exit(0);
})().catch(err => {
  console.error('FATAL ERROR:', err);
  process.exit(1);
});
