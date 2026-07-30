/**
 * Local question corpus DB — a private SQLite file (never committed, never
 * uploaded to Firebase). Holds BOTH original past-paper questions (source:
 * 'original', for style/difficulty reference only) and questions we generate
 * from that reference (source: 'generated', the only rows ever eligible for
 * Firestore upload — see ingest.js / lib/validate.js).
 *
 * Uses node's built-in node:sqlite (Node 22+) so no extra dependency is
 * needed. It is still "experimental" upstream but works fine for local,
 * single-process tooling like this.
 */
import { DatabaseSync } from 'node:sqlite';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const DB_DIR = join(__dirname, '..', 'data');
export const DB_PATH = join(DB_DIR, 'corpus.db');

const SCHEMA = `
CREATE TABLE IF NOT EXISTS papers (
  id TEXT PRIMARY KEY,
  school TEXT,
  exam_year INTEGER,
  course TEXT,
  term TEXT,
  title TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS question_types (
  id TEXT PRIMARY KEY,
  topic_id TEXT NOT NULL,
  code TEXT NOT NULL,
  label TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(topic_id, code)
);

CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  -- 'original': copyrighted past-paper text, style reference ONLY, never deploy-eligible.
  -- 'generated': a fresh candidate Claude wrote from the corpus, pending approval — the
  --   ONLY value deploy.js will ever push to Firestore.
  -- 'existing': already-live app content pulled in from the local seed files (see
  --   ingestAllExisting.js) — safe style reference, already deployed, never re-pushed
  --   (deploy.js's query only ever matches source='generated').
  source TEXT NOT NULL CHECK (source IN ('original','generated','existing')),
  -- Second gate, separate from deploy_status: whether this row has been
  -- reviewed into the corpus at all. New ingests (ingest.js) land 'pending'
  -- and only appear in normal topic browsing / count as generation reference
  -- once corpus-approved in the viewer's "New Questions" tab. The one-time
  -- historical bulk import (ingestAllExisting.js) marks its rows 'approved'
  -- directly — that content is already live in production.
  corpus_status TEXT NOT NULL DEFAULT 'pending' CHECK (corpus_status IN ('pending','approved')),
  paper_id TEXT REFERENCES papers(id),
  year TEXT,
  course TEXT,
  chapter_id TEXT,
  topic_id TEXT,
  topic_code TEXT,
  topic_title TEXT,
  type_id TEXT REFERENCES question_types(id),
  difficulty TEXT,
  q_type TEXT,
  question TEXT,
  options_json TEXT,
  answer TEXT,
  solution_steps_json TEXT,
  sub_questions_json TEXT,
  graph_data_json TEXT,
  raw_json TEXT NOT NULL,
  validation_status TEXT NOT NULL DEFAULT 'pending' CHECK (validation_status IN ('pending','passed','failed')),
  validation_errors_json TEXT,
  deploy_status TEXT CHECK (deploy_status IS NULL OR deploy_status IN ('approved','deployed')),
  deployed_at TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_questions_topic ON questions(topic_id);
CREATE INDEX IF NOT EXISTS idx_questions_chapter ON questions(chapter_id);
CREATE INDEX IF NOT EXISTS idx_questions_source ON questions(source);
CREATE INDEX IF NOT EXISTS idx_questions_deploy ON questions(deploy_status);
CREATE INDEX IF NOT EXISTS idx_questions_type ON questions(type_id);
CREATE INDEX IF NOT EXISTS idx_questions_paper ON questions(paper_id);
`;

let dbInstance = null;

// Migrate a DB created before a column existed. Existing rows predate the
// pending/approved review gate entirely, so they default to 'approved' here
// (already-live production content, not new incoming questions) — the
// opposite of the CREATE TABLE default above, which is for brand-new rows
// going forward via ingest.js.
function migrate(db) {
  const cols = db.prepare("PRAGMA table_info(questions)").all().map((c) => c.name);
  if (!cols.includes('corpus_status')) {
    db.exec("ALTER TABLE questions ADD COLUMN corpus_status TEXT NOT NULL DEFAULT 'approved'");
  }
}

export function openDb() {
  if (dbInstance) return dbInstance;
  if (!existsSync(DB_DIR)) mkdirSync(DB_DIR, { recursive: true });
  dbInstance = new DatabaseSync(DB_PATH);
  dbInstance.exec('PRAGMA foreign_keys = ON;');
  dbInstance.exec(SCHEMA);
  migrate(dbInstance);
  return dbInstance;
}
