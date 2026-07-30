/**
 * Read-only query helpers over the local corpus DB, used by tools/corpus/server.js.
 */
import { openDb } from './db.js';

function parseJsonCol(row, col) {
  if (!row[col]) return null;
  try { return JSON.parse(row[col]); } catch { return null; }
}

export function listTopics() {
  const db = openDb();
  return db.prepare(`
    SELECT
      chapter_id AS chapterId,
      topic_id AS topicId,
      topic_code AS topicCode,
      MAX(topic_title) AS topicTitle,
      MAX(year) AS year,
      COUNT(*) AS total,
      SUM(CASE WHEN source = 'original' THEN 1 ELSE 0 END) AS originalCount,
      SUM(CASE WHEN source = 'generated' THEN 1 ELSE 0 END) AS generatedCount,
      SUM(CASE WHEN source = 'existing' THEN 1 ELSE 0 END) AS existingCount
    FROM questions
    WHERE topic_id IS NOT NULL AND corpus_status = 'approved'
    GROUP BY chapter_id, topic_id, topic_code
    ORDER BY chapter_id, topic_id
  `).all();
}

export function listYears() {
  const db = openDb();
  return db.prepare(`
    SELECT year, COUNT(*) AS total
    FROM questions
    WHERE year IS NOT NULL AND year != '' AND corpus_status = 'approved'
    GROUP BY year
    ORDER BY
      CAST(REPLACE(REPLACE(year, 'Year ', ''), 'a', '') AS INTEGER),
      year
  `).all();
}

export function listTypes(topicId) {
  const db = openDb();
  const params = [];
  let where = '';
  if (topicId) { where = 'WHERE qt.topic_id = ?'; params.push(topicId); }
  return db.prepare(`
    SELECT qt.id, qt.topic_id AS topicId, qt.code, qt.label,
      COUNT(q.id) AS total
    FROM question_types qt
    LEFT JOIN questions q ON q.type_id = qt.id
    ${where}
    GROUP BY qt.id
    ORDER BY qt.topic_id, qt.code
  `).all(...params);
}

export function listPapers() {
  const db = openDb();
  return db.prepare(`
    SELECT p.id, p.school, p.exam_year AS examYear, p.course, p.term, p.title,
      COUNT(q.id) AS total
    FROM papers p
    LEFT JOIN questions q ON q.paper_id = p.id
    GROUP BY p.id
    ORDER BY p.exam_year DESC, p.school
  `).all();
}

export function listQuestions(filters = {}) {
  const db = openDb();
  const clauses = [];
  const params = [];

  if (filters.chapterId) { clauses.push('chapter_id = ?'); params.push(filters.chapterId); }
  if (filters.topicId) { clauses.push('topic_id = ?'); params.push(filters.topicId); }
  if (filters.year) { clauses.push('year = ?'); params.push(filters.year); }
  if (filters.corpusStatus) { clauses.push('corpus_status = ?'); params.push(filters.corpusStatus); }
  if (filters.difficulty) { clauses.push('difficulty = ?'); params.push(filters.difficulty); }
  if (filters.typeId) { clauses.push('type_id = ?'); params.push(filters.typeId); }
  if (filters.source) { clauses.push('source = ?'); params.push(filters.source); }
  if (filters.validationStatus) { clauses.push('validation_status = ?'); params.push(filters.validationStatus); }
  if (filters.paperId) { clauses.push('paper_id = ?'); params.push(filters.paperId); }
  if (filters.deployStatus === 'none') { clauses.push('deploy_status IS NULL'); }
  else if (filters.deployStatus) { clauses.push('deploy_status = ?'); params.push(filters.deployStatus); }
  if (filters.search) { clauses.push('question LIKE ?'); params.push(`%${filters.search}%`); }

  const where = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
  const limit = Math.min(Number(filters.limit) || 100, 500);
  const offset = Number(filters.offset) || 0;

  const rows = db.prepare(`
    SELECT id, source, corpus_status AS corpusStatus, paper_id AS paperId, chapter_id AS chapterId, topic_id AS topicId,
      topic_code AS topicCode, topic_title AS topicTitle, type_id AS typeId, difficulty,
      q_type AS qType, question, validation_status AS validationStatus, deploy_status AS deployStatus,
      created_at AS createdAt
    FROM questions
    ${where}
    ORDER BY topic_id, id
    LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  const total = db.prepare(`SELECT COUNT(*) AS c FROM questions ${where}`).get(...params).c;

  return { rows, total, limit, offset };
}

export function getQuestion(id) {
  const db = openDb();
  const row = db.prepare('SELECT * FROM questions WHERE id = ?').get(id);
  if (!row) return null;
  return {
    ...row,
    options: parseJsonCol(row, 'options_json'),
    solutionSteps: parseJsonCol(row, 'solution_steps_json'),
    subQuestions: parseJsonCol(row, 'sub_questions_json'),
    graphData: parseJsonCol(row, 'graph_data_json'),
    raw: parseJsonCol(row, 'raw_json'),
    validationErrors: parseJsonCol(row, 'validation_errors_json'),
  };
}

/**
 * Local-only approval gate: marks a generated+passed question as ready for
 * the (separate, manually-triggered) deploy.js step. Never touches
 * Firestore — this is purely a flag in the local corpus DB.
 */
export function approveQuestion(id) {
  const db = openDb();
  const row = db.prepare('SELECT source, validation_status, corpus_status FROM questions WHERE id = ?').get(id);
  if (!row) return { ok: false, error: 'Not found' };
  if (row.source !== 'generated') return { ok: false, error: "Only source='generated' questions can be approved for deploy." };
  if (row.validation_status !== 'passed') return { ok: false, error: 'Question has not passed validation.' };
  if (row.corpus_status !== 'approved') return { ok: false, error: 'Question must be approved into the corpus first (see New Questions tab).' };
  db.prepare("UPDATE questions SET deploy_status = 'approved' WHERE id = ?").run(id);
  return { ok: true };
}

export function unapproveQuestion(id) {
  const db = openDb();
  db.prepare("UPDATE questions SET deploy_status = NULL WHERE id = ? AND deploy_status = 'approved'").run(id);
  return { ok: true };
}

/**
 * Second, earlier gate: promotes a newly-ingested (pending) question into the
 * browsable corpus. Purely a local flag — never touches Firestore. Only
 * after this can a source='generated' row go through approveQuestion() above
 * for the separate deploy step.
 */
export function corpusApproveQuestion(id) {
  const db = openDb();
  const row = db.prepare('SELECT corpus_status FROM questions WHERE id = ?').get(id);
  if (!row) return { ok: false, error: 'Not found' };
  db.prepare("UPDATE questions SET corpus_status = 'approved' WHERE id = ?").run(id);
  return { ok: true };
}

/**
 * Rejects a still-pending question by deleting it outright — it never
 * entered the corpus, so there is nothing to "unapprove". Guarded to
 * corpus_status='pending' only, so this can never delete an already-approved
 * (and possibly already-deployed) row.
 */
export function rejectQuestion(id) {
  const db = openDb();
  const row = db.prepare('SELECT corpus_status FROM questions WHERE id = ?').get(id);
  if (!row) return { ok: false, error: 'Not found' };
  if (row.corpus_status !== 'pending') return { ok: false, error: 'Only pending (not yet approved) questions can be rejected.' };
  db.prepare("DELETE FROM questions WHERE id = ? AND corpus_status = 'pending'").run(id);
  return { ok: true };
}

export function summary() {
  const db = openDb();
  const totals = db.prepare(`
    SELECT
      COUNT(*) AS total,
      SUM(CASE WHEN source = 'original' THEN 1 ELSE 0 END) AS originalCount,
      SUM(CASE WHEN source = 'generated' THEN 1 ELSE 0 END) AS generatedCount,
      SUM(CASE WHEN source = 'existing' THEN 1 ELSE 0 END) AS existingCount,
      SUM(CASE WHEN corpus_status = 'pending' THEN 1 ELSE 0 END) AS pendingCount,
      SUM(CASE WHEN validation_status = 'failed' THEN 1 ELSE 0 END) AS failedCount,
      SUM(CASE WHEN deploy_status = 'deployed' THEN 1 ELSE 0 END) AS deployedCount,
      SUM(CASE WHEN deploy_status = 'approved' THEN 1 ELSE 0 END) AS approvedCount
    FROM questions
  `).get();
  return totals;
}
