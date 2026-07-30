#!/usr/bin/env node
/**
 * One-time (re-runnable) bulk import: pull EVERY question already live in the
 * app into the local corpus DB, straight from the local seed files —
 * CHAPTER_SEED_REGISTRY in src/constants/curriculumSeeds.js — never from
 * Firestore. Zero Firestore reads, zero network traffic: this is a pure
 * static import of files already sitting in the repo.
 *
 * Resolves topicId/topicCode/topicTitle/chapterId with the EXACT SAME
 * per-question-falls-back-to-chapter logic as mapSeedQuestion() in
 * src/services/chapterSeeder.js, so the corpus DB's topic mapping matches
 * what's actually live in Firestore today.
 *
 * Tagging:
 *   - chapterId starting with 'exam:' (a real past-paper trial exam)
 *       -> source='original' (copyrighted, style reference ONLY)
 *   - everything else (ordinary per-topic curriculum content)
 *       -> source='existing' (already deployed, safe style reference)
 * Both get deploy_status='deployed' immediately — they're already live, so
 * deploy.js (which only ever selects source='generated') will never touch
 * them again.
 *
 * Usage: node tools/corpus/ingestAllExisting.js
 */
import { openDb } from './lib/db.js';
import { validateQuestion } from './lib/validate.js';
import { CHAPTER_SEED_REGISTRY } from '../../src/constants/curriculumSeeds.js';

function upsertPaper(db, { examPaper, chapterTitle, year }) {
  if (!examPaper) return null;
  const existing = db.prepare('SELECT id FROM papers WHERE id = ?').get(examPaper);
  if (!existing) {
    db.prepare('INSERT INTO papers (id, school, exam_year, title) VALUES (?, ?, ?, ?)')
      .run(examPaper, chapterTitle || examPaper, null, chapterTitle || examPaper);
  }
  return examPaper;
}

// Mirrors the resolution in chapterSeeder.js's mapSeedQuestion() exactly —
// per-question fields win, falling back to the chapter-level entry.
function resolveTopic(raw, chapter) {
  const topicId = raw.topicId || chapter.topicId;
  const topicCode = raw.c || raw.topicCode || chapter.topicCode || '';
  const topicTitle = raw.t || raw.topicTitle || chapter.topicTitle || '';
  const chapterId = raw.chapterId
    || (topicId !== chapter.topicId ? topicId.replace(/[A-Z]+$/, '') : chapter.chapterId);
  return { topicId, topicCode, topicTitle, chapterId };
}

async function main() {
  const db = openDb();

  const insertStmt = db.prepare(`
    INSERT INTO questions (
      id, source, corpus_status, paper_id, year, chapter_id, topic_id, topic_code, topic_title,
      difficulty, q_type, question, options_json, answer, solution_steps_json,
      sub_questions_json, graph_data_json, raw_json, validation_status,
      validation_errors_json, deploy_status, deployed_at
    ) VALUES (?, ?, 'approved', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'deployed', datetime('now'))
    ON CONFLICT(id) DO UPDATE SET
      source=excluded.source, paper_id=excluded.paper_id, year=excluded.year,
      chapter_id=excluded.chapter_id, topic_id=excluded.topic_id, topic_code=excluded.topic_code,
      topic_title=excluded.topic_title, difficulty=excluded.difficulty, q_type=excluded.q_type,
      question=excluded.question, options_json=excluded.options_json, answer=excluded.answer,
      solution_steps_json=excluded.solution_steps_json, sub_questions_json=excluded.sub_questions_json,
      graph_data_json=excluded.graph_data_json, raw_json=excluded.raw_json,
      validation_status=excluded.validation_status, validation_errors_json=excluded.validation_errors_json
  `);

  let total = 0;
  let passed = 0;
  let failed = 0;
  let originalCount = 0;
  let existingCount = 0;
  const failedSample = [];
  const idsInBatch = new Set();

  db.exec('BEGIN');
  try {
    for (const chapter of CHAPTER_SEED_REGISTRY) {
      if (!chapter || !Array.isArray(chapter.seed)) continue;
      const isExam = String(chapter.chapterId || '').startsWith('exam:');
      const source = isExam ? 'original' : 'existing';
      const paperId = isExam ? upsertPaper(db, chapter) : null;

      for (const raw of chapter.seed) {
        if (!raw || !raw.id) continue;
        total++;
        const { topicId, topicCode, topicTitle, chapterId } = resolveTopic(raw, chapter);
        const { valid, errors } = validateQuestion(raw, { idsInBatch });

        insertStmt.run(
          raw.id,
          source,
          paperId,
          chapter.year || null,
          chapterId || null,
          topicId || null,
          topicCode || null,
          topicTitle || null,
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

        if (isExam) originalCount++; else existingCount++;
        if (valid) passed++;
        else {
          failed++;
          if (failedSample.length < 30) failedSample.push({ id: raw.id, chapterId, topicId, errors });
        }
      }
    }
    db.exec('COMMIT');
  } catch (err) {
    db.exec('ROLLBACK');
    throw err;
  }

  console.log(`\nImported ${total} question(s) from ${CHAPTER_SEED_REGISTRY.length} chapter entries in curriculumSeeds.js (zero Firestore reads).`);
  console.log(`  original (past-paper, exam: chapters): ${originalCount}`);
  console.log(`  existing (ordinary curriculum content): ${existingCount}`);
  console.log(`  validation passed: ${passed} | failed: ${failed}`);

  if (failedSample.length) {
    console.log(`\nFirst ${failedSample.length} validation failures (these are LIVE in the app today — worth a look):`);
    failedSample.forEach(({ id, chapterId, topicId, errors }) => {
      console.log(`  - ${id} [${chapterId}/${topicId}]`);
      errors.forEach((e) => console.log(`      [${e.field}] ${e.error}`));
    });
    if (failed > failedSample.length) console.log(`  ...and ${failed - failedSample.length} more (filter validationStatus=failed in the viewer to see all).`);
  }

  console.log('\nOpen the viewer to browse: npm run corpus:viewer');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
