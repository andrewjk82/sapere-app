/**
 * Export questions to a printable PDF.
 *
 * Strategy: open a new window, inject the HTML with KaTeX-rendered math,
 * trigger window.print() which lets the user save as PDF via the browser's
 * native print dialog (Cmd+P / Ctrl+P → Save as PDF).
 *
 * This avoids heavy external libraries and leverages KaTeX which is already
 * loaded in the app for perfect math rendering.
 */

/**
 * Strip double-backslashes that leak from JS string escaping into actual
 * LaTeX. The question data stores `\\(` meaning the LaTeX delimiter `\(`,
 * but when we inject it into HTML we need it as a single backslash.
 */
const cleanLatex = (str) => {
  if (!str) return '';
  let s = String(str);
  // The seed files store LaTeX with double-backslash escaping for JS strings.
  // When rendered in the app MathView handles this, but for raw HTML injection
  // we need to normalise. However the data from Firestore usually already
  // has single backslashes, so we only collapse true double-backslashes
  // that are NOT structural (e.g. \\n newlines).
  return s;
};

/**
 * Render a LaTeX-containing string to HTML suitable for KaTeX auto-render.
 * We output the raw text and let KaTeX auto-render pick up the delimiters.
 */
const mathHtml = (text) => {
  if (!text) return '';
  const escaped = cleanLatex(text)
    // Minimal HTML escaping (but preserve LaTeX backslashes and $ signs)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Convert literal \n sequences to <br>
    .replace(/\\n/g, '<br>');
  return escaped;
};

/**
 * Build the option letter (A, B, C, D …)
 */
const optLetter = (i) => String.fromCharCode(65 + i);

/**
 * Generate the full HTML document for the printable question sheet.
 */
const buildPrintHtml = (questions, { chapterTitle, topicTitle, showAnswers = true }) => {
  const title = `${chapterTitle || ''} – ${topicTitle || 'Questions'}`.trim().replace(/^–\s*/, '');

  let questionsHtml = '';

  questions.forEach((q, idx) => {
    if (!q || q.loading) return;

    const questionText = q.question || q.q || '';
    const answer = q.answer ?? q.a ?? '';
    const solution = q.solution || q.s || '';
    const difficulty = q.difficulty || 'medium';
    const type = q.type || 'short_answer';
    const diffBadge = difficulty === 'easy' ? '🟢 Easy' : difficulty === 'hard' ? '🔴 Hard' : '🟡 Medium';

    // Question header
    questionsHtml += `
      <div class="question-block">
        <div class="question-header">
          <span class="question-number">Question ${idx + 1}</span>
          <span class="difficulty-badge ${difficulty}">${diffBadge}</span>
          <span class="type-badge">${type.replace(/_/g, ' ')}</span>
        </div>
        <div class="question-text">${mathHtml(questionText)}</div>
    `;

    // Sub-questions
    if (q.subQuestions && q.subQuestions.length > 0) {
      questionsHtml += '<div class="sub-questions">';
      q.subQuestions.forEach((sq, sIdx) => {
        const sqText = sq.question || sq.q || '';
        const sqAnswer = sq.answer ?? sq.a ?? '';
        questionsHtml += `
          <div class="sub-question">
            <div class="sub-label">(${String.fromCharCode(97 + sIdx)})</div>
            <div class="sub-content">
              <div class="question-text">${mathHtml(sqText)}</div>
        `;

        // Sub-question MC options
        if (sq.type === 'multiple_choice' && sq.options) {
          questionsHtml += '<div class="options-grid">';
          sq.options.forEach((opt, oIdx) => {
            const optText = typeof opt === 'string' ? opt : opt.text || '';
            const isCorrect = showAnswers && !isNaN(Number(sqAnswer)) && oIdx === Number(sqAnswer);
            questionsHtml += `
              <div class="option ${isCorrect ? 'correct' : ''}">
                <span class="option-letter">${optLetter(oIdx)}.</span>
                <span>${mathHtml(optText)}</span>
                ${isCorrect ? '<span class="correct-mark">✓</span>' : ''}
              </div>
            `;
          });
          questionsHtml += '</div>';
        }

        // Sub-question answer
        if (showAnswers && sqAnswer !== '' && sqAnswer != null) {
          questionsHtml += `<div class="answer-box"><strong>Answer:</strong> ${mathHtml(String(sqAnswer))}</div>`;
        }

        // Sub-question solution steps
        if (showAnswers && Array.isArray(sq.solutionSteps) && sq.solutionSteps.length > 0) {
          questionsHtml += '<div class="solution-steps">';
          questionsHtml += '<div class="solution-title">Solution Steps:</div>';
          sq.solutionSteps.forEach((step, si) => {
            questionsHtml += `
              <div class="step">
                <span class="step-num">${si + 1}.</span>
                <div class="step-content">
                  ${step.explanation ? `<div class="step-explanation">${mathHtml(step.explanation)}</div>` : ''}
                  ${step.workingOut ? `<div class="step-working">${mathHtml(step.workingOut)}</div>` : ''}
                </div>
              </div>
            `;
          });
          questionsHtml += '</div>';
        }

        questionsHtml += '</div></div>'; // close sub-content, sub-question
      });
      questionsHtml += '</div>'; // close sub-questions
    }

    // MC options (top-level)
    const isMC = type === 'multiple_choice' || (!q.subQuestions?.length && (q.options || []).length > 0);
    if (isMC && q.options) {
      questionsHtml += '<div class="options-grid">';
      q.options.forEach((opt, i) => {
        const optText = typeof opt === 'string' ? opt : opt.text || '';
        const correctIdx = Number(answer);
        const isCorrect = showAnswers && !isNaN(correctIdx) && i === correctIdx;
        questionsHtml += `
          <div class="option ${isCorrect ? 'correct' : ''}">
            <span class="option-letter">${optLetter(i)}.</span>
            <span>${mathHtml(optText)}</span>
            ${isCorrect ? '<span class="correct-mark">✓</span>' : ''}
          </div>
        `;
      });
      questionsHtml += '</div>';
    }

    // Fill-in-the-blank
    if (type === 'fill_blank' && q.blanks) {
      questionsHtml += '<div class="blanks-area">';
      q.blanks.forEach((b) => {
        questionsHtml += `
          <div class="blank-item">
            ${b.label ? `<span class="blank-label">${mathHtml(b.label)}</span>` : ''}
            <span class="blank-box">________</span>
            ${showAnswers && b.answer ? `<span class="blank-answer">(${mathHtml(String(b.answer))})</span>` : ''}
          </div>
        `;
      });
      questionsHtml += '</div>';
    }

    // Answer line (for short answer / teacher review)
    if (showAnswers && answer !== '' && answer != null && !isMC && type !== 'fill_blank') {
      questionsHtml += `<div class="answer-box"><strong>Answer:</strong> ${mathHtml(String(answer))}</div>`;
    }

    // Answer space for student version (no answers)
    if (!showAnswers && !isMC && type !== 'fill_blank') {
      questionsHtml += '<div class="answer-space"></div>';
    }

    // Solution steps
    if (showAnswers && Array.isArray(q.solutionSteps) && q.solutionSteps.length > 0) {
      questionsHtml += '<div class="solution-steps">';
      questionsHtml += '<div class="solution-title">Solution Steps:</div>';
      q.solutionSteps.forEach((step, si) => {
        questionsHtml += `
          <div class="step">
            <span class="step-num">${si + 1}.</span>
            <div class="step-content">
              ${step.explanation ? `<div class="step-explanation">${mathHtml(step.explanation)}</div>` : ''}
              ${step.workingOut ? `<div class="step-working">${mathHtml(step.workingOut)}</div>` : ''}
            </div>
          </div>
        `;
      });
      questionsHtml += '</div>';
    } else if (showAnswers && solution) {
      questionsHtml += `<div class="solution-box"><strong>Solution:</strong> ${mathHtml(solution)}</div>`;
    }

    questionsHtml += '</div>'; // close question-block
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.17.0/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.17.0/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.17.0/dist/contrib/auto-render.min.js"
    onload="renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\\\(', right: '\\\\)', display: false},
        {left: '\\\\[', right: '\\\\]', display: true}
      ],
      throwOnError: false
    });">
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,500;0,600;0,700&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #1e1b4b;
      background: #fff;
      padding: 40px;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 40px;
      padding-bottom: 24px;
      border-bottom: 3px solid #6366f1;
    }

    .header h1 {
      font-size: 1.6rem;
      font-weight: 900;
      color: #1e1b4b;
      margin-bottom: 4px;
    }

    .header .subtitle {
      font-size: 0.85rem;
      color: #64748b;
      font-weight: 600;
    }

    .header .meta {
      font-size: 0.75rem;
      color: #94a3b8;
      margin-top: 8px;
    }

    .question-block {
      margin-bottom: 28px;
      padding: 20px 24px;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .question-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }

    .question-number {
      font-weight: 900;
      font-size: 0.95rem;
      color: #6366f1;
    }

    .difficulty-badge {
      font-size: 0.68rem;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .difficulty-badge.easy { background: #f0fdf4; color: #166534; }
    .difficulty-badge.medium { background: #fffbeb; color: #92400e; }
    .difficulty-badge.hard { background: #fef2f2; color: #991b1b; }

    .type-badge {
      font-size: 0.65rem;
      font-weight: 700;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .question-text {
      font-family: 'Lora', Georgia, 'Times New Roman', serif;
      font-size: 1.05rem;
      font-weight: 500;
      line-height: 1.7;
      color: #1e1b4b;
      margin-bottom: 12px;
    }

    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
      margin: 12px 0;
    }

    .option {
      padding: 10px 16px;
      border: 1.5px solid #e2e8f0;
      border-radius: 8px;
      font-size: 0.92rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .option.correct {
      border-color: #10b981;
      background: #f0fdf4;
    }

    .option-letter {
      font-weight: 800;
      color: #64748b;
      min-width: 20px;
    }

    .correct-mark {
      margin-left: auto;
      color: #10b981;
      font-weight: 900;
      font-size: 1.1rem;
    }

    .answer-box {
      margin-top: 12px;
      padding: 10px 16px;
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 8px;
      color: #166534;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .answer-space {
      margin-top: 12px;
      height: 60px;
      border-bottom: 1px dashed #cbd5e1;
    }

    .solution-steps {
      margin-top: 14px;
      padding: 14px 18px;
      background: #fafaff;
      border: 1px solid #e0e7ff;
      border-radius: 10px;
    }

    .solution-title {
      font-weight: 800;
      font-size: 0.78rem;
      color: #6366f1;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 10px;
    }

    .step {
      display: flex;
      gap: 10px;
      margin-bottom: 8px;
      align-items: flex-start;
    }

    .step-num {
      font-weight: 900;
      color: #7c3aed;
      min-width: 20px;
      font-size: 0.85rem;
    }

    .step-content { flex: 1; }

    .step-explanation {
      font-size: 0.88rem;
      color: #334155;
      font-weight: 500;
      line-height: 1.5;
    }

    .step-working {
      font-family: 'Lora', Georgia, serif;
      font-size: 0.9rem;
      color: #1e1b4b;
      padding: 6px 10px;
      background: #fff;
      border: 1px solid #eef2f7;
      border-radius: 6px;
      margin-top: 4px;
    }

    .solution-box {
      margin-top: 12px;
      padding: 12px 16px;
      background: #fafaff;
      border: 1px solid #e0e7ff;
      border-radius: 8px;
      color: #334155;
      font-size: 0.88rem;
      line-height: 1.6;
    }

    .sub-questions {
      margin-top: 8px;
    }

    .sub-question {
      display: flex;
      gap: 10px;
      margin-bottom: 14px;
      align-items: flex-start;
    }

    .sub-label {
      font-weight: 900;
      color: #6366f1;
      font-size: 0.95rem;
      min-width: 24px;
    }

    .sub-content { flex: 1; }

    .blanks-area {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin: 12px 0;
    }

    .blank-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .blank-label { font-weight: 700; color: #1e1b4b; }

    .blank-box {
      display: inline-block;
      min-width: 80px;
      border-bottom: 2px solid #94a3b8;
      text-align: center;
      padding: 4px;
      color: #94a3b8;
      font-family: monospace;
    }

    .blank-answer {
      color: #10b981;
      font-weight: 700;
      font-size: 0.85rem;
    }

    .footer {
      margin-top: 40px;
      padding-top: 16px;
      border-top: 1px solid #e2e8f0;
      text-align: center;
      font-size: 0.72rem;
      color: #94a3b8;
    }

    @media print {
      body { padding: 20px; }
      .question-block { border: 1px solid #ddd; box-shadow: none; }
      .no-print { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>${title}</h1>
    <div class="subtitle">${questions.length} Questions${showAnswers ? ' · With Answers & Solutions' : ' · Student Worksheet'}</div>
    <div class="meta">Generated on ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
  </div>

  ${questionsHtml}

  <div class="footer">
    Sapere – Question Bank Export
  </div>

  <script>
    // Auto-trigger print dialog after math is rendered
    window.addEventListener('load', function() {
      setTimeout(function() {
        window.print();
      }, 1500); // give KaTeX time to render
    });
  </script>
</body>
</html>`;
};

/**
 * Open a new window with the printable question sheet.
 * The user can then use Cmd+P / Ctrl+P → Save as PDF.
 *
 * @param {Array} questions - Array of question objects
 * @param {Object} meta - { chapterTitle, topicTitle }
 * @param {Object} options - { showAnswers: boolean }
 */
export const exportQuestionsPdf = (questions, meta, options = {}) => {
  const { showAnswers = true } = options;
  const validQuestions = questions.filter(q => q && !q.loading);

  if (validQuestions.length === 0) {
    alert('No questions to export');
    return;
  }

  const html = buildPrintHtml(validQuestions, {
    chapterTitle: meta.chapterTitle || '',
    topicTitle: meta.topicTitle || '',
    showAnswers,
  });

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Popup blocked! Please allow popups for this site to export PDF.');
    return;
  }

  printWindow.document.write(html);
  printWindow.document.close();
};
