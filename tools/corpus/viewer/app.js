import { toDisplayText } from '/vendor/mathPreprocess.js';

const state = {
  topics: [],
  activeTopicId: null,
  activeQuestionId: null,
  openYears: new Set(),
  activeTab: 'browse', // 'browse' (approved corpus content) | 'new' (pending review queue)
};

// Curriculum year order for the sidebar groups: "Year 5" < "Year 7" < ... <
// "Year 12" < "Year 12a" (an existing data quirk — some Y12 Advanced content
// is tagged "Year 12a" — sorts right after plain "Year 12", not before it).
function yearSortKey(year) {
  const m = String(year || '').match(/(\d+)/);
  const num = m ? parseInt(m[1], 10) : 999;
  return [num, String(year || '')];
}
function compareYears(a, b) {
  const [an, as] = yearSortKey(a);
  const [bn, bs] = yearSortKey(b);
  return an !== bn ? an - bn : as.localeCompare(bs);
}

const el = (id) => document.getElementById(id);

function renderMathIn(container) {
  if (window.renderMathInElement) {
    window.renderMathInElement(container, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true },
      ],
      macros: { '\\hexagon': '\\text{⬡}' },
      throwOnError: false,
    });
  }
}

function setMathHtml(elm, text) {
  // Intentionally innerHTML: this mirrors MathView.jsx in the real app, which
  // renders question/option/solution text via toDisplayText + KaTeX the same
  // way. Everything else in this viewer (ids, badges, counts) uses safe DOM
  // construction below instead, since that metadata never needs HTML.
  elm.innerHTML = toDisplayText(text ?? '', '', { currencyHtml: true });
}

// Safe DOM element builder for plain-text metadata (ids, badges, counts) —
// never uses innerHTML, so nothing in the corpus (question text pasted from
// a past paper, etc.) can inject markup here.
function h(tag, { className, text } = {}, children = []) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  children.forEach((c) => c && node.appendChild(c));
  return node;
}

function badge(cls, text) {
  return h('span', { className: `badge ${cls}`, text });
}

// Local-only flag toggle — never touches Firestore. Marks a question as
// ready for the separate, manually-triggered `node tools/corpus/deploy.js
// --live` step, which is the only thing that actually writes to Firestore.
function buildApproveControl(q) {
  const isApproved = q.deploy_status === 'approved' || q.deploy_status === 'deployed';
  const btn = document.createElement('button');
  btn.textContent = q.deploy_status === 'deployed' ? 'Deployed' : (isApproved ? 'Unapprove' : 'Approve for deploy');
  btn.disabled = q.deploy_status === 'deployed';
  btn.style.cssText = 'padding:3px 10px;border-radius:4px;border:1px solid #334155;background:#1e293b;color:#e2e8f0;cursor:pointer;font-size:11px;';
  btn.onclick = async () => {
    const endpoint = isApproved ? 'unapprove' : 'approve';
    const result = await fetchJson(`/api/${endpoint}/${encodeURIComponent(q.id)}`, { method: 'POST' });
    if (!result.ok) { alert(result.error || 'Failed'); return; }
    await loadSummary();
    await loadDetail(q.id);
    await loadQuestions();
  };
  return btn;
}

// First gate: promotes a newly-ingested (pending) question into the
// browsable corpus, or deletes it outright. Local-only — never touches
// Firestore. A question must pass through this BEFORE it's even eligible
// for buildApproveControl()'s separate deploy step above.
function buildCorpusReviewControl(q) {
  const wrap = document.createElement('span');
  wrap.style.cssText = 'display:inline-flex;gap:6px;';

  const addBtn = document.createElement('button');
  addBtn.textContent = 'Add to corpus';
  addBtn.style.cssText = 'padding:3px 10px;border-radius:4px;border:1px solid #16a34a;background:#166534;color:#dcfce7;cursor:pointer;font-size:11px;';
  addBtn.onclick = async () => {
    const result = await fetchJson(`/api/corpus-approve/${encodeURIComponent(q.id)}`, { method: 'POST' });
    if (!result.ok) { alert(result.error || 'Failed'); return; }
    await loadSummary();
    await loadTopics();
    await loadYears();
    await loadDetail(q.id);
    await loadQuestions();
  };

  const rejectBtn = document.createElement('button');
  rejectBtn.textContent = 'Reject';
  rejectBtn.style.cssText = 'padding:3px 10px;border-radius:4px;border:1px solid #dc2626;background:#7f1d1d;color:#fecaca;cursor:pointer;font-size:11px;';
  rejectBtn.onclick = async () => {
    if (!confirm(`Delete ${q.id}? It never entered the corpus, so this cannot be undone.`)) return;
    const result = await fetchJson(`/api/reject/${encodeURIComponent(q.id)}`, { method: 'POST' });
    if (!result.ok) { alert(result.error || 'Failed'); return; }
    state.activeQuestionId = null;
    el('questionDetail').innerHTML = '';
    el('questionDetail').appendChild(h('p', { className: 'empty-hint', text: 'Select a question to preview it (rendered exactly as students would see it).' }));
    await loadSummary();
    await loadQuestions();
  };

  wrap.appendChild(addBtn);
  wrap.appendChild(rejectBtn);
  return wrap;
}

async function fetchJson(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.json();
}

function currentFilters() {
  const f = { corpusStatus: state.activeTab === 'new' ? 'pending' : 'approved' };
  if (state.activeTopicId) f.topicId = state.activeTopicId;
  const year = el('fYear').value; if (year) f.year = year;
  const source = el('fSource').value; if (source) f.source = source;
  const difficulty = el('fDifficulty').value; if (difficulty) f.difficulty = difficulty;
  const typeId = el('fType').value; if (typeId) f.typeId = typeId;
  const validationStatus = el('fValidation').value; if (validationStatus) f.validationStatus = validationStatus;
  const deployStatus = el('fDeploy').value; if (deployStatus) f.deployStatus = deployStatus;
  const search = el('fSearch').value.trim(); if (search) f.search = search;
  return f;
}

function summaryItem(label, value) {
  return h('span', {}, [
    document.createTextNode(`${label}: `),
    h('b', { text: String(value || 0) }),
  ]);
}

async function loadSummary() {
  const s = await fetchJson('/api/summary');
  const summary = el('summary');
  summary.innerHTML = '';
  summary.appendChild(summaryItem('Total', s.total));
  summary.appendChild(summaryItem('Original', s.originalCount));
  summary.appendChild(summaryItem('Existing', s.existingCount));
  summary.appendChild(summaryItem('Generated', s.generatedCount));
  summary.appendChild(summaryItem('Failed validation', s.failedCount));
  summary.appendChild(summaryItem('Approved', s.approvedCount));
  summary.appendChild(summaryItem('Deployed', s.deployedCount));
  el('tabNew').textContent = `New Questions (${s.pendingCount || 0})`;
}

async function loadTopics() {
  state.topics = await fetchJson('/api/topics');
  renderTopicList();
}

async function loadYears() {
  const years = await fetchJson('/api/years');
  const select = el('fYear');
  select.innerHTML = '';
  const allOpt = h('option', { text: 'All years' });
  allOpt.value = '';
  select.appendChild(allOpt);
  years.forEach((y) => {
    const opt = h('option', { text: `${y.year} (${y.total})` });
    opt.value = y.year;
    select.appendChild(opt);
  });
}

// Types are scoped per topic (the same code, e.g. "A", can mean a different
// question type in a different topic) — reload the dropdown whenever the
// active topic filter changes, and clear the selection since a type id from
// the old topic wouldn't mean anything under the new one.
async function loadTypes() {
  const params = state.activeTopicId ? `?topicId=${encodeURIComponent(state.activeTopicId)}` : '';
  const types = await fetchJson(`/api/types${params}`);
  const select = el('fType');
  select.innerHTML = '';
  select.appendChild(h('option', { text: 'All types' }));
  select.lastChild.value = '';
  types.forEach((t) => {
    const opt = h('option', { text: `${t.code}${t.label ? ` — ${t.label}` : ''} (${t.total})` });
    opt.value = t.id;
    select.appendChild(opt);
  });
}

function buildTopicRow(t) {
  const label = h('span', {}, [
    h('div', { className: 'tid', text: `${t.chapterId || ''} · ${t.topicCode || ''}` }),
    document.createTextNode(t.topicTitle || t.topicId),
  ]);
  const row = h('div', { className: 'topic-row' + (state.activeTopicId === t.topicId ? ' active' : '') }, [
    label,
    h('span', { className: 'counts', text: String(t.total) }),
  ]);
  row.onclick = () => { state.activeTopicId = t.topicId; renderTopicList(); loadTypes(); loadQuestions(); };
  return row;
}

// Sidebar is grouped Year -> Topic (collapsible <details> per year) since a
// flat list of 300+ topics across 8 year levels is unbrowsable otherwise.
// "All topics" stays pinned above the year groups.
function renderTopicList() {
  const filterText = el('topicSearch').value.trim().toLowerCase();
  const list = el('topicList');
  list.innerHTML = '';
  const filtered = state.topics.filter((t) => {
    if (!filterText) return true;
    return (t.topicId || '').toLowerCase().includes(filterText) ||
      (t.topicTitle || '').toLowerCase().includes(filterText) ||
      (t.chapterId || '').toLowerCase().includes(filterText);
  });

  const allRow = h('div', { className: 'topic-row' + (state.activeTopicId === null ? ' active' : '') }, [
    h('span', { text: 'All topics' }),
  ]);
  allRow.onclick = () => { state.activeTopicId = null; renderTopicList(); loadTypes(); loadQuestions(); };
  list.appendChild(allRow);

  const byYear = new Map();
  filtered.forEach((t) => {
    const key = t.year || '(no year)';
    if (!byYear.has(key)) byYear.set(key, []);
    byYear.get(key).push(t);
  });
  const years = [...byYear.keys()].sort(compareYears);

  // While searching, force every group open so matches aren't hidden inside
  // a collapsed section — otherwise respect each group's remembered state.
  const forceOpen = filterText.length > 0;

  years.forEach((year) => {
    const topicsInYear = byYear.get(year);
    const details = document.createElement('details');
    details.open = forceOpen || state.openYears.has(year);
    details.addEventListener('toggle', () => {
      if (details.open) state.openYears.add(year); else state.openYears.delete(year);
    });
    const summaryEl = h('summary', { text: `${year} (${topicsInYear.length})` });
    details.appendChild(summaryEl);
    topicsInYear.forEach((t) => details.appendChild(buildTopicRow(t)));
    list.appendChild(details);
  });
}

async function loadQuestions() {
  const params = new URLSearchParams(currentFilters());
  const { rows, total } = await fetchJson(`/api/questions?${params.toString()}`);
  const list = el('questionList');
  list.innerHTML = '';
  list.appendChild(h('div', { text: `${total} question(s)` }));
  list.lastChild.style.cssText = 'padding:8px 14px;font-size:11px;color:#64748b;';
  rows.forEach((q) => {
    const qidRow = h('div', { className: 'qid' }, [
      h('span', { text: q.id }),
      badge(q.source, q.source),
      badge(q.validationStatus, q.validationStatus),
    ]);
    if (q.corpusStatus === 'pending') qidRow.appendChild(badge('pending', 'pending'));
    if (q.deployStatus) qidRow.appendChild(badge(q.deployStatus, q.deployStatus));
    const qtext = h('div', {
      className: 'qtext',
      text: (q.question || '').replace(/\\\(|\\\)|\$/g, ''),
    });
    const row = h('div', { className: 'question-row' + (state.activeQuestionId === q.id ? ' active' : '') }, [qidRow, qtext]);
    row.onclick = () => { state.activeQuestionId = q.id; loadQuestions(); loadDetail(q.id); };
    list.appendChild(row);
  });
}

async function loadDetail(id) {
  const q = await fetchJson(`/api/question/${encodeURIComponent(id)}`);
  const detail = el('questionDetail');
  detail.innerHTML = '';

  const meta = h('div', { className: 'detail-meta' }, [
    h('span', {}, [h('b', { text: q.id })]),
    badge(q.source, q.source),
    badge(q.corpus_status, q.corpus_status),
    badge(q.validation_status, q.validation_status),
    ...(q.deploy_status ? [badge(q.deploy_status, q.deploy_status)] : []),
    h('span', { text: `${q.chapter_id || ''} / ${q.topic_id || ''}` }),
    h('span', { text: q.difficulty || '' }),
    h('span', { text: q.q_type || '' }),
    ...(q.corpus_status === 'pending' ? [buildCorpusReviewControl(q)] : []),
    ...(q.corpus_status === 'approved' && q.source === 'generated' && q.validation_status === 'passed' ? [buildApproveControl(q)] : []),
  ]);
  detail.appendChild(meta);

  if (q.validationErrors && q.validationErrors.length) {
    const title = h('div', { className: 'section-title', text: 'Validation errors' });
    title.style.marginTop = '0';
    const box = h('div', { className: 'validation-errors' }, [
      title,
      ...q.validationErrors.map((e) => {
        const item = h('div', { className: 'err-item' });
        item.appendChild(document.createTextNode(`[${e.field}] ${e.error}`));
        if (e.tex) {
          item.appendChild(document.createTextNode(' — '));
          item.appendChild(h('code', { text: e.tex }));
        }
        return item;
      }),
    ]);
    detail.appendChild(box);
  }

  const qDiv = document.createElement('div');
  qDiv.className = 'detail-question';
  setMathHtml(qDiv, q.question);
  detail.appendChild(qDiv);

  if (Array.isArray(q.options) && q.options.length) {
    const ul = document.createElement('ul');
    ul.className = 'detail-options';
    const answerIdx = parseInt(q.answer, 10);
    q.options.forEach((opt, i) => {
      const li = document.createElement('li');
      if (i === answerIdx) li.classList.add('correct');
      const text = typeof opt === 'object' && opt !== null ? opt.text : opt;
      const span = document.createElement('span');
      setMathHtml(span, text);
      li.appendChild(h('span', { className: 'idx', text: String.fromCharCode(65 + i) }));
      li.appendChild(span);
      ul.appendChild(li);
    });
    detail.appendChild(ul);
  }

  const diagramSvg = q.graphData?.diagramSvg || q.graphData?.svgSnapshot || q.graphData?.svg;
  if (typeof diagramSvg === 'string' && diagramSvg.trim().startsWith('<svg')) {
    const img = document.createElement('img');
    img.className = 'diagram';
    img.src = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(diagramSvg)))}`;
    detail.appendChild(img);
  } else if (q.graphData) {
    const title = document.createElement('div');
    title.className = 'section-title';
    title.textContent = 'Graph data (raw — not rendered in this viewer)';
    detail.appendChild(title);
    const pre = document.createElement('pre');
    pre.className = 'rawjson';
    pre.textContent = JSON.stringify(q.graphData, null, 2);
    detail.appendChild(pre);
  }

  if (Array.isArray(q.solutionSteps) && q.solutionSteps.length) {
    const title = document.createElement('div');
    title.className = 'section-title';
    title.textContent = 'Solution steps';
    detail.appendChild(title);
    q.solutionSteps.forEach((step) => {
      const div = document.createElement('div');
      div.className = 'solution-step';
      const exp = document.createElement('div');
      exp.className = 'explanation';
      setMathHtml(exp, step.explanation);
      const wo = document.createElement('div');
      setMathHtml(wo, step.workingOut);
      div.appendChild(exp);
      div.appendChild(wo);
      detail.appendChild(div);
    });
  }

  if (Array.isArray(q.subQuestions) && q.subQuestions.length) {
    const title = document.createElement('div');
    title.className = 'section-title';
    title.textContent = `Sub-questions (${q.subQuestions.length})`;
    detail.appendChild(title);
    q.subQuestions.forEach((sq, i) => {
      const box = document.createElement('div');
      box.className = 'sub-question';
      const label = document.createElement('div');
      label.className = 'subq-label';
      label.textContent = `(${String.fromCharCode(97 + i)}) ${sq.id || ''}`;
      box.appendChild(label);
      const qd = document.createElement('div');
      qd.className = 'detail-question';
      setMathHtml(qd, sq.question || sq.q);
      box.appendChild(qd);

      const opts = sq.options || sq.opts;
      if (Array.isArray(opts) && opts.length) {
        const ul = document.createElement('ul');
        ul.className = 'detail-options';
        const ansIdx = parseInt(sq.answer ?? sq.a, 10);
        opts.forEach((opt, oi) => {
          const li = document.createElement('li');
          if (oi === ansIdx) li.classList.add('correct');
          const text = typeof opt === 'object' && opt !== null ? opt.text : opt;
          const span = document.createElement('span');
          setMathHtml(span, text);
          li.appendChild(h('span', { className: 'idx', text: String.fromCharCode(65 + oi) }));
          li.appendChild(span);
          ul.appendChild(li);
        });
        box.appendChild(ul);
      }

      if (Array.isArray(sq.solutionSteps) && sq.solutionSteps.length) {
        sq.solutionSteps.forEach((step) => {
          const div = document.createElement('div');
          div.className = 'solution-step';
          const exp = document.createElement('div');
          exp.className = 'explanation';
          setMathHtml(exp, step.explanation);
          const wo = document.createElement('div');
          setMathHtml(wo, step.workingOut);
          div.appendChild(exp);
          div.appendChild(wo);
          box.appendChild(div);
        });
      }
      detail.appendChild(box);
    });
  }

  const rawTitle = document.createElement('div');
  rawTitle.className = 'section-title';
  rawTitle.textContent = 'Raw record';
  detail.appendChild(rawTitle);
  const pre = document.createElement('pre');
  pre.className = 'rawjson';
  pre.textContent = JSON.stringify(q.raw, null, 2);
  detail.appendChild(pre);

  renderMathIn(detail);
}

function clearDetail() {
  state.activeQuestionId = null;
  const detail = el('questionDetail');
  detail.innerHTML = '';
  detail.appendChild(h('p', { className: 'empty-hint', text: 'Select a question to preview it (rendered exactly as students would see it).' }));
}

function setActiveTab(tab) {
  state.activeTab = tab;
  state.activeTopicId = null;
  clearDetail();
  el('tabBrowse').classList.toggle('active', tab === 'browse');
  el('tabNew').classList.toggle('active', tab === 'new');
  el('sidebar').hidden = tab === 'new';
  el('newQuestionsHint').hidden = tab === 'browse';
  renderTopicList();
  loadTypes();
  loadQuestions();
}

function wireFilters() {
  ['fYear', 'fSource', 'fDifficulty', 'fType', 'fValidation', 'fDeploy'].forEach((id) => {
    el(id).addEventListener('change', loadQuestions);
  });
  let searchTimer;
  el('fSearch').addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(loadQuestions, 250);
  });
  el('topicSearch').addEventListener('input', renderTopicList);
  el('tabBrowse').addEventListener('click', () => setActiveTab('browse'));
  el('tabNew').addEventListener('click', () => setActiveTab('new'));
}

async function init() {
  wireFilters();
  await loadSummary();
  await loadYears();
  await loadTopics();
  await loadTypes();
  await loadQuestions();
}

init();
