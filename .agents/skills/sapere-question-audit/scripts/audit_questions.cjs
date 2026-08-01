/**
 * Sapere Question Audit Scanner
 * 
 * 사용법: node scripts/audit_questions.cjs <seed_file_path> [--fix-newlines]
 * 
 * 이 스크립트는 seed 파일의 모든 문제를 스캔하여 다음 결함을 탐지합니다:
 * - A: 그래프 렌더링 실패 (이중 이스케이프, 문법 오류)
 * - B: 라벨 겹침 (text 좌표 간 거리 < 1.5)
 * - C: 일괄 적용된 범용 해설
 * - D: 정답 인덱스 누락/범위 초과
 * 
 * --fix-newlines 플래그를 추가하면 이중 이스케이프를 자동 수정합니다.
 */

const fs = require('fs');

const GENERIC_PATTERNS = [
  "Apply the appropriate standard form",
  "Carry out the algebra carefully",
  "What rule or formula applies?",
  "Identify the relevant differentiation/integration",
  "read the full stem carefully and list the known quantities",
  "Strategy for Revision: translate the request",
  "Check signs, chain-rule factors",
  "Interpret it in context (gradient, area, amount of money"
];

function testScript(script) {
  if (!script) return { ok: false, error: 'No script' };
  if (script.includes('\\n') && !script.includes('\n')) {
    return { ok: false, error: 'Double-escaped newlines (\\\\n instead of \\n)' };
  }
  try {
    const items = [];
    const board = {
      create(type, parents, attrs = {}) {
        const mock = { type, parents, attrs };
        items.push(mock);
        return mock;
      },
      suspendUpdate() {},
      unsuspendUpdate() {},
      options: { point: {} },
      objects: {}
    };
    new Function('board', 'JXG', script)(board, { Math });
    return { ok: true, elements: items };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

function checkLabelOverlap(items) {
  const texts = items
    .filter(it => it.type === 'text' && it.parents && it.parents.length >= 2)
    .map(it => ({ x: it.parents[0], y: it.parents[1], label: it.parents[2] }));

  const overlaps = [];
  for (let i = 0; i < texts.length; i++) {
    for (let j = i + 1; j < texts.length; j++) {
      const dx = Math.abs(texts[i].x - texts[j].x);
      const dy = Math.abs(texts[i].y - texts[j].y);
      if (dx < 1.5 && dy < 1.5) {
        overlaps.push(`"${texts[i].label}" and "${texts[j].label}" at (${texts[i].x},${texts[i].y}) vs (${texts[j].x},${texts[j].y})`);
      }
    }
  }
  return overlaps;
}

function isGenericSolution(steps) {
  if (!steps || !Array.isArray(steps)) return true;
  return steps.some(s =>
    GENERIC_PATTERNS.some(p => (s.explanation || '').includes(p))
  );
}

function checkSvgLabelOverlap(svgString) {
  if (!svgString) return [];
  const overlaps = [];
  const lines = [];
  const lineRegex = /<line[^>]+x1="([\d.]+)"[^>]+y1="([\d.]+)"[^>]+x2="([\d.]+)"[^>]+y2="([\d.]+)"/g;
  let match;
  while ((match = lineRegex.exec(svgString)) !== null) {
    lines.push({
      x1: parseFloat(match[1]), y1: parseFloat(match[2]),
      x2: parseFloat(match[3]), y2: parseFloat(match[4])
    });
  }
  
  const polyRegex = /<(?:polygon|polyline)[^>]+points="([^"]+)"/g;
  while ((match = polyRegex.exec(svgString)) !== null) {
    const pts = match[1].trim().split(/\s+/).map(p => p.split(',').map(Number));
    for (let i = 0; i < pts.length - 1; i++) {
      lines.push({ x1: pts[i][0], y1: pts[i][1], x2: pts[i+1][0], y2: pts[i+1][1] });
    }
    // if polygon, connect last to first
    if (match[0].includes('<polygon') && pts.length > 2) {
      lines.push({ x1: pts[pts.length-1][0], y1: pts[pts.length-1][1], x2: pts[0][0], y2: pts[0][1] });
    }
  }

  const textRegex = /<text[^>]+x="([\d.]+)"[^>]+y="([\d.]+)"([^>]*)>(.*?)<\/text>/g;
  while ((match = textRegex.exec(svgString)) !== null) {
    const tx = parseFloat(match[1]);
    const ty = parseFloat(match[2]);
    const attrs = match[3];
    const label = match[4];
    
    let isEnd = attrs.includes('text-anchor="end"');
    let isMiddle = attrs.includes('text-anchor="middle"');
    
    let width = label.length * 8; // approx 8px per char
    let left = isEnd ? tx - width : isMiddle ? tx - width/2 : tx;
    let right = isEnd ? tx : isMiddle ? tx + width/2 : tx + width;
    let top = ty - 12;
    let bottom = ty + 3;

    for (let l of lines) {
      if (Math.abs(l.x1 - l.x2) < 1) { 
        let lineX = l.x1;
        let minY = Math.min(l.y1, l.y2) - 5;
        let maxY = Math.max(l.y1, l.y2) + 5;
        if (bottom >= minY && top <= maxY) {
          if (lineX >= left && lineX <= right) {
            overlaps.push(`SVG text "${label}" overlaps vertical line at x=${lineX}`);
          }
        }
      }
      if (Math.abs(l.y1 - l.y2) < 1) { 
        let lineY = l.y1;
        let minX = Math.min(l.x1, l.x2) - 5;
        let maxX = Math.max(l.x1, l.x2) + 5;
        if (right >= minX && left <= maxX) {
          if (lineY >= top && lineY <= bottom) {
            overlaps.push(`SVG text "${label}" overlaps horizontal line at y=${lineY}`);
          }
        }
      }
    }
  }
  return overlaps;
}

function auditQuestion(q, isRoot) {
  const issues = [];

  // --- Graph checks ---
  const checkGraph = (graphData, context) => {
    if (!graphData) return;
    if (graphData.jsxGraph) {
      const result = testScript(graphData.jsxGraph.script);
      if (!result.ok) {
        issues.push({ cat: 'A', severity: 'ERROR', msg: `[${context}] Graph broken: ${result.error}` });
      } else {
        const overlaps = checkLabelOverlap(result.elements);
        overlaps.forEach(o => {
          issues.push({ cat: 'B', severity: 'WARN', msg: `[${context}] JSXGraph Label overlap: ${o}` });
        });
      }
    }
    if (graphData.svg) {
      const svgOverlaps = checkSvgLabelOverlap(graphData.svg);
      svgOverlaps.forEach(o => {
        issues.push({ cat: 'B', severity: 'WARN', msg: `[${context}] ${o}` });
      });
    }
  };

  checkGraph(q.graphData, 'root');
  if (q.solutionSteps) {
    q.solutionSteps.forEach((s, i) => {
      if (s.graphData) checkGraph(s.graphData, `step[${i}]`);
    });
  }

  // --- Answer checks ---
  if (q.type === 'multiple_choice') {
    if (q.a === undefined || q.a === null) {
      issues.push({ cat: 'C', severity: 'ERROR', msg: 'MC question missing answer index (a)' });
    } else if (!q.opts || q.a < 0 || q.a >= q.opts.length) {
      issues.push({ cat: 'C', severity: 'ERROR', msg: `Answer index ${q.a} out of range (${q.opts?.length || 0} options)` });
    }
  }

  // --- LaTeX Typography ---
  const checkLatexTypography = (text, context) => {
    if (typeof text !== 'string') return;
    // Check for \frac inside regular () without \left( and \right)
    // Matches '(' not preceded by '\left', containing '\frac', ending with ')'
    if (/(?<!\\\\left)\\\([^)]*?\\\\frac.*?\\\)(?!\\\\right)/.test(text)) {
      issues.push({ cat: 'D', severity: 'WARN', msg: `[${context}] Bad LaTeX: \\\\frac inside regular () instead of \\\\left( ... \\\\right)` });
    }
  };
  
  checkLatexTypography(q.question, 'question');
  if (q.opts) q.opts.forEach((opt, i) => checkLatexTypography(opt, `opt[${i}]`));
  if (q.solutionSteps) {
    q.solutionSteps.forEach((step, i) => {
      checkLatexTypography(step.explanation, `step[${i}].explanation`);
      checkLatexTypography(step.workingOut, `step[${i}].workingOut`);
    });
  }

  // --- Solution quality ---
  if (isGenericSolution(q.solutionSteps)) {
    issues.push({ cat: 'D', severity: 'WARN', msg: 'Generic/bulk-applied solution template detected' });
  }
  if (q.solutionSteps && q.solutionSteps.length < 3) {
    issues.push({ cat: 'D', severity: 'INFO', msg: `Only ${q.solutionSteps.length} solution steps (recommend 4+)` });
  }

  // --- Orphaned Context ---
  if (isRoot && q.question) {
    const lowerQ = q.question.toLowerCase();
    const triggerPhrases = [
      "from the same",
      "from the previous",
      "in the previous",
      "refer to the previous",
      "following from"
    ];
    if (triggerPhrases.some(phrase => lowerQ.indexOf(phrase) >= 0 && lowerQ.indexOf(phrase) < 50)) {
      issues.push({ cat: 'E', severity: 'ERROR', msg: 'Orphaned Context: Root question references a previous context.' });
    }
  }

  // --- Poor Distractors ---
  if (q.type === 'multiple_choice' && q.opts && q.opts.length > 0) {
    const isGeoQuestion = (q.t && q.t.match(/angle|length|area|perimeter|triangle|polygon/i)) || 
                          (q.question && q.question.match(/angle|length|area|perimeter|triangle|polygon/i));
    
    let numOpts = [];
    q.opts.forEach(opt => {
      // Find the first standalone number in the latex string
      const match = opt.match(/-?\\d+(\\.\\d+)?/);
      if (match) numOpts.push(parseFloat(match[0]));
    });


    // Check Rule 3: Mixed formatting (fractions and decimals)
    let hasFraction = false;
    let hasDecimal = false;
    q.opts.forEach(opt => {
      if (opt.includes('/')) hasFraction = true;
      if (opt.match(/.d+/)) hasDecimal = true;
    });
    if (hasFraction && hasDecimal) {
      issues.push({ cat: 'F', severity: 'WARN', msg: 'Poor Distractors: Mixed formats (fractions and decimals).' });
    }

    // Check Rule 4: Negative probabilities
    const isProbQuestion = (q.topicId && q.topicId.match(/15/)) || (q.t && q.t.match(/probability/i));
    if (isProbQuestion && numOpts.some(n => n < 0)) {
      issues.push({ cat: 'F', severity: 'WARN', msg: 'Poor Distractors: Negative probability.' });
    }

    if (numOpts.length === q.opts.length) {
      if (isGeoQuestion && numOpts.some(n => n < 0)) {
        if (!q.question.match(/coordinate|point|gradient/i)) {
          issues.push({ cat: 'F', severity: 'WARN', msg: 'Poor Distractors: Negative number in a geometry question.' });
        }
      }

      let sortedOpts = [...numOpts].sort((a, b) => a - b);
      let consecCount = 1;
      let maxConsec = 1;
      for (let i = 1; i < sortedOpts.length; i++) {
        if (Math.abs(sortedOpts[i] - sortedOpts[i-1] - 1) < 0.001) {
          consecCount++;
          maxConsec = Math.max(maxConsec, consecCount);
        } else if (sortedOpts[i] !== sortedOpts[i-1]) {
          consecCount = 1;
        }
      }
      if (maxConsec >= 3) {
        issues.push({ cat: 'F', severity: 'WARN', msg: 'Poor Distractors: 3 or more consecutive options (+1/-1 variance).' });
      }
    }
  }

  return issues;
}

// --- Main ---
const filePath = process.argv[2];
if (!filePath) {
  console.log('Usage: node audit_questions.cjs <seed_file_path> [--fix-newlines]');
  process.exit(1);
}

const fixNewlines = process.argv.includes('--fix-newlines');
const content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const (\w+) = (\[[\s\S]*\]);$/m);
if (!match) {
  console.error('Could not parse seed file.');
  process.exit(1);
}

const constName = match[1];
const questions = eval(match[2]);

let totalIssues = 0;
const summary = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

for (const q of questions) {
  const allQs = q.subQuestions ? [q, ...q.subQuestions] : [q];
  for (const sq of allQs) {
    const issues = auditQuestion(sq, sq === q);
    if (issues.length) {
      console.log(`\n🔍 ${sq.id} (${sq.type})`);
      issues.forEach(i => {
        const icon = i.severity === 'ERROR' ? '❌' : i.severity === 'WARN' ? '⚠️' : 'ℹ️';
        console.log(`  ${icon} [${i.cat}] ${i.msg}`);
        summary[i.cat]++;
        totalIssues++;
      });
    }
  }
}

console.log(`\n${'═'.repeat(60)}`);
console.log(`📊 Audit Summary: ${totalIssues} issues found in ${questions.length} questions`);
console.log(`  A (Graph Rendering): ${summary.A}`);
console.log(`  B (Label Overlap):   ${summary.B}`);
console.log(`  C (Answer Errors):   ${summary.C}`);
console.log(`  D (Solution Quality):${summary.D}`);
console.log(`  E (Orphaned Context):${summary.E || 0}`);
console.log(`  F (Poor Distractors):${summary.F || 0}`);
console.log('═'.repeat(60));

if (totalIssues === 0) {
  console.log('✅ All questions passed audit!');
}
