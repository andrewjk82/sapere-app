#!/usr/bin/env node
/**
 * Ingest a batch of questions into the local corpus DB (SQLite, never
 * committed, never uploaded to Firebase — see tools/corpus/README.md).
 *
 * Usage:
 *   node tools/corpus/ingest.js <file.js> --source=original --paper="Killara 1995" --course="Year 7" --examYear=1995
 *   node tools/corpus/ingest.js <file.js> --source=generated
 *
 * <file.js> must export an array of questions (default export, or the first
 * exported array found) in the same seed dialect as src/services/chapterSeeder.js
 * expects (id, type, question/q, options/opts, answer/a, difficulty, chapterId,
 * topicId, topicCode, t, solutionSteps, subQuestions, graphData, ...).
 *
 * Every question is validated (tools/corpus/lib/validate.js — the same LaTeX/
 * answer-index authority the real seed pipeline uses) and inserted with
 * validation_status='passed'|'failed'. Failed rows ARE stored (so you can see
 * them in the viewer and fix the source file) but are never eligible for
 * Firestore deploy — only validation_status='passed' AND source='generated'
 * AND deploy_status='approved' rows may ever be uploaded.
 */
import { openDb } from './lib/db.js';
import { validateQuestion } from './lib/validate.js';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

function parseArgs(argv) {
  const args = { _: [] };
  for (const arg of argv) {
    const m = arg.match(/^--([^=]+)=(.*)$/);
    if (m) args[m[1]] = m[2];
    else args._.push(arg);
  }
  return args;
}

function slugify(str) {
  return String(str).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function loadQuestions(filePath) {
  const absPath = resolve(process.cwd(), filePath);
  const mod = await import(pathToFileURL(absPath).href);
  if (Array.isArray(mod.default)) return mod.default;
  for (const key of Object.keys(mod)) {
    if (Array.isArray(mod[key])) return mod[key];
  }
  throw new Error(`No exported array found in ${filePath}`);
}

function upsertPaper(db, { paper, course, examYear, term }) {
  if (!paper) return null;
  const id = slugify(`${paper}-${examYear || ''}`);
  const existing = db.prepare('SELECT id FROM papers WHERE id = ?').get(id);
  if (!existing) {
    db.prepare(
      `INSERT INTO papers (id, school, exam_year, course, term, title) VALUES (?, ?, ?, ?, ?, ?)`
    ).run(id, paper, examYear ? Number(examYear) : null, course || null, term || null, paper);
  }
  return id;
}

function upsertQuestionType(db, topicId, code, label) {
  if (!topicId || !code) return null;
  const id = `${topicId}::${code}`;
  const existing = db.prepare('SELECT id FROM question_types WHERE id = ?').get(id);
  if (!existing) {
    db.prepare('INSERT INTO question_types (id, topic_id, code, label) VALUES (?, ?, ?, ?)').run(id, topicId, code, label || null);
  }
  return id;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const filePath = args._[0];
  if (!filePath) {
    console.error('Usage: node tools/corpus/ingest.js <file.js> --source=original|generated [--paper=... --course=... --examYear=... --term=...] [--typeField=field]');
    process.exit(1);
  }
  const source = args.source;
  if (source !== 'original' && source !== 'generated') {
    console.error("--source must be 'original' or 'generated'");
    process.exit(1);
  }

  const db = openDb();
  const questions = await loadQuestions(filePath);
  const paperId = upsertPaper(db, args);

  // corpus_status is hardcoded 'pending' here (not a bound param, not touched
  // on conflict) rather than relying on the column's schema default — a DB
  // migrated via ALTER TABLE (see lib/db.js) carries a different ongoing
  // default ('approved', for backfilling pre-existing rows) than a freshly
  // created table ('pending'), so an implicit default would silently skip
  // the review gate on a migrated DB. Being explicit here works either way.
  const insertStmt = db.prepare(`
    INSERT INTO questions (
      id, source, corpus_status, paper_id, year, course, chapter_id, topic_id, topic_code, topic_title,
      type_id, difficulty, q_type, question, options_json, answer, solution_steps_json,
      sub_questions_json, graph_data_json, raw_json, validation_status, validation_errors_json
    ) VALUES (?, ?, 'pending', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      source=excluded.source, paper_id=excluded.paper_id, year=excluded.year, course=excluded.course,
      chapter_id=excluded.chapter_id, topic_id=excluded.topic_id, topic_code=excluded.topic_code,
      topic_title=excluded.topic_title, type_id=excluded.type_id, difficulty=excluded.difficulty,
      q_type=excluded.q_type, question=excluded.question, options_json=excluded.options_json,
      answer=excluded.answer, solution_steps_json=excluded.solution_steps_json,
      sub_questions_json=excluded.sub_questions_json, graph_data_json=excluded.graph_data_json,
      raw_json=excluded.raw_json, validation_status=excluded.validation_status,
      validation_errors_json=excluded.validation_errors_json
  `);

  const idsInBatch = new Set();
  let passed = 0;
  let failed = 0;
  const failedReport = [];

  const insertMany = db.transaction ? null : null; // node:sqlite has no .transaction(); wrap manually below
  db.exec('BEGIN');
  try {
    for (const raw of questions) {
      const { valid, errors } = validateQuestion(raw, { idsInBatch, source });
      const typeCode = raw.typeCode || raw.questionType || null;
      const typeId = typeCode ? upsertQuestionType(db, raw.topicId, typeCode, raw.typeLabel) : null;

      insertStmt.run(
        raw.id ?? `unknown-${passed + failed}`,
        source,
        paperId,
        args.year || raw.year || null,
        args.course || raw.course || null,
        raw.chapterId || null,
        raw.topicId || null,
        raw.topicCode || null,
        raw.t || raw.topicTitle || null,
        typeId,
        raw.difficulty || null,
        raw.type || null,
        raw.q ?? raw.question ?? null,
        JSON.stringify(raw.opts ?? raw.options ?? null),
        String(raw.a ?? raw.answer ?? ''),
        JSON.stringify(raw.solutionSteps ?? null),
        JSON.stringify(raw.subQuestions ?? null),
        JSON.stringify(raw.graphData ?? null),
        JSON.stringify(raw),
        valid ? 'passed' : 'failed',
        errors.length ? JSON.stringify(errors) : null
      );

      if (valid) passed++;
      else {
        failed++;
        failedReport.push({ id: raw.id, errors });
      }
    }
    db.exec('COMMIT');
  } catch (err) {
    db.exec('ROLLBACK');
    throw err;
  }

  console.log(`\nIngested ${filePath} (source=${source}${paperId ? `, paper=${paperId}` : ''})`);
  console.log(`  Total: ${questions.length} | Passed: ${passed} | Failed: ${failed}`);
  if (failedReport.length) {
    console.log('\nFailed questions (stored, but NOT deployable until fixed):');
    for (const { id, errors } of failedReport) {
      console.log(`  - ${id}`);
      for (const e of errors) console.log(`      [${e.field}] ${e.error}`);
    }
  }
  console.log('\nOpen the local viewer to browse: npm run corpus:viewer');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
