#!/usr/bin/env node
/**
 * Phase 0 — Past Paper Question Type Taxonomy Extractor
 *
 * 1. Loads all past paper questions from seed files
 * 2. Sends batches to Claude Sonnet to identify question type patterns
 * 3. Produces taxonomy draft: tools/scripts/output/question_types_draft.json
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-ant-... node tools/scripts/extractQuestionTypes.js
 *
 * Output:
 *   tools/scripts/output/question_types_draft.json  — taxonomy (types + assignments)
 */

import Anthropic from '@anthropic-ai/sdk';
import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, 'output');
mkdirSync(OUTPUT_DIR, { recursive: true });

// ─── Load all past paper questions ──────────────────────────────────────────

const PAST_PAPER_MODULES = [
  '../../../src/constants/seedAscham2020Questions.js',
  '../../../src/constants/seedBarker2020Questions.js',
  '../../../src/constants/seedBaulkham2020Questions.js',
  '../../../src/constants/seedAbbotsleigh2020Questions.js',
  '../../../src/constants/seedAbbotsleigh2020Ext1Questions.js',
  '../../../src/constants/seedBlacktownBoys2020Questions.js',
  '../../../src/constants/seedBlacktownBoys2020SimilarQuestions.js',
  '../../../src/constants/seedCaringbah2020Questions.js',
  '../../../src/constants/seedCaringbah2020SimilarQuestions.js',
  '../../../src/constants/seedCherrybrookTech2020Questions.js',
  '../../../src/constants/seedCherrybrookTech2020SimilarQuestions.js',
  '../../../src/constants/seedCranbrook2023Questions.js',
  '../../../src/constants/seedCranbrook2023SimilarQuestions.js',
  '../../../src/constants/seedDanebank2020Questions.js',
  '../../../src/constants/seedDanebank2020SimilarQuestions.js',
  '../../../src/constants/seedFortSt2020Questions.js',
  '../../../src/constants/seedFortSt2020SimilarQuestions.js',
];

async function loadAllPastPaperQuestions() {
  const questions = [];
  for (const modulePath of PAST_PAPER_MODULES) {
    try {
      const mod = await import(modulePath);
      const exported = Object.values(mod);
      for (const val of exported) {
        if (Array.isArray(val)) {
          questions.push(...val);
        }
      }
    } catch (e) {
      console.warn(`  Skipping ${modulePath}: ${e.message}`);
    }
  }
  // Dedupe by id
  const seen = new Set();
  return questions.filter(q => {
    if (seen.has(q.id)) return false;
    seen.add(q.id);
    return true;
  });
}

// ─── Slim question for API (save tokens) ────────────────────────────────────

function slim(q) {
  return {
    id: q.id,
    topicId: q.topicId || null,
    chapter: q.c || null,
    topic: q.t || null,
    question: q.q?.slice(0, 300) || '',
    type: q.type || null,        // answer format (MC / free_response)
    difficulty: q.difficulty || null,
    source: q.source || null,
  };
}

// ─── Phase A: Taxonomy generation ───────────────────────────────────────────
// Send a representative sample (~100q) and ask Claude to derive the taxonomy

async function deriveTypeTaxonomy(client, sampleQuestions) {
  console.log(`\n[Phase A] Deriving taxonomy from ${sampleQuestions.length} sample questions...`);

  const prompt = `You are a NSW HSC Mathematics curriculum expert. I will give you a sample of past trial paper questions from various schools (Advanced Maths + Extension 1).

Your job: identify a clean, reusable set of QUESTION TYPE categories — by *mathematical skill/technique required*, NOT by topic or chapter. These types will be used so students can practise "all questions requiring the chain rule" or "all questions involving area under a curve" across different papers and schools.

Rules for types:
- 15–30 distinct types (not too granular, not too broad)
- Each type describes the PRIMARY mathematical technique/pattern required to solve the question
- Types should be course-level appropriate (separate Adv from Ext1 where technique differs significantly)
- Use kebab-case slugs, e.g. "chain-rule-differentiation", "geometric-series-sum"
- Include: slug, label (human-readable), description (1 sentence), chapterIds (array of relevant chapter codes like ["11B","12C"]), examLevel ("Advanced" | "Extension 1" | "Both")

Sample questions:
${JSON.stringify(sampleQuestions.map(slim), null, 2)}

Respond with ONLY a JSON object in this exact shape — no markdown, no explanation:
{
  "types": [
    {
      "slug": "...",
      "label": "...",
      "description": "...",
      "chapterIds": ["...", "..."],
      "examLevel": "Advanced" | "Extension 1" | "Both"
    }
  ]
}`;

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = response.content[0].text.trim();
  try {
    return JSON.parse(text);
  } catch {
    // Try to extract JSON if there's any surrounding text
    const match = text.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error('Failed to parse taxonomy JSON from Claude response');
  }
}

// ─── Phase B: Batch classification ──────────────────────────────────────────
// Assign a typeSlug to every question in batches of 40

async function classifyBatch(client, questions, taxonomy) {
  const typeList = taxonomy.types.map(t => `${t.slug}: ${t.description}`).join('\n');

  const prompt = `You are a NSW HSC Mathematics question classifier.

QUESTION TYPES (assign one slug per question):
${typeList}

QUESTIONS TO CLASSIFY:
${JSON.stringify(questions.map(slim), null, 2)}

Assign the single best matching type slug to each question. If a question spans two types, pick the PRIMARY technique. If no type fits well, use "other".

Respond with ONLY a JSON array — no markdown, no explanation:
[
  { "id": "...", "typeSlug": "..." },
  ...
]`;

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2048,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = response.content[0].text.trim();
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\[[\s\S]*\]/);
    if (match) return JSON.parse(match[0]);
    throw new Error('Failed to parse classification JSON');
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('ERROR: ANTHROPIC_API_KEY environment variable not set.');
    console.error('Usage: ANTHROPIC_API_KEY=sk-ant-... node tools/scripts/extractQuestionTypes.js');
    process.exit(1);
  }

  const client = new Anthropic({ apiKey });

  console.log('Loading past paper questions...');
  const allQuestions = await loadAllPastPaperQuestions();
  console.log(`Loaded ${allQuestions.length} questions (deduplicated).`);

  // Phase A: derive taxonomy from a representative sample
  // Use up to 120 questions spread across different topics/chapters
  const sample = [];
  const seenTopics = new Set();
  for (const q of allQuestions) {
    const key = q.c || q.topicId || 'unknown';
    if (!seenTopics.has(key)) { sample.push(q); seenTopics.add(key); }
    else if (sample.length < 120) sample.push(q);
    if (sample.length >= 120) break;
  }

  const taxonomy = await deriveTypeTaxonomy(client, sample);
  console.log(`  → Derived ${taxonomy.types.length} question types.`);
  taxonomy.types.forEach(t => console.log(`     • ${t.slug}: ${t.label}`));

  // Phase B: classify all questions in batches of 40
  console.log(`\n[Phase B] Classifying ${allQuestions.length} questions in batches of 40...`);
  const BATCH_SIZE = 40;
  const assignments = [];
  for (let i = 0; i < allQuestions.length; i += BATCH_SIZE) {
    const batch = allQuestions.slice(i, i + BATCH_SIZE);
    process.stdout.write(`  Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(allQuestions.length / BATCH_SIZE)}... `);
    try {
      const result = await classifyBatch(client, batch, taxonomy);
      assignments.push(...result);
      console.log(`${result.length} classified.`);
    } catch (e) {
      console.error(`FAILED: ${e.message}`);
      // Fallback: mark as 'other'
      batch.forEach(q => assignments.push({ id: q.id, typeSlug: 'other' }));
    }
    // Small delay to respect rate limits
    if (i + BATCH_SIZE < allQuestions.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  // ─── Build output ──────────────────────────────────────────────────────────
  // Merge taxonomy + assignments + original question metadata
  const assignmentMap = new Map(assignments.map(a => [a.id, a.typeSlug]));

  // Compute per-type question id lists
  const typeQuestionIds = {};
  taxonomy.types.forEach(t => { typeQuestionIds[t.slug] = []; });
  typeQuestionIds['other'] = [];

  const questionsWithType = allQuestions.map(q => {
    const typeSlug = assignmentMap.get(q.id) || 'other';
    if (!typeQuestionIds[typeSlug]) typeQuestionIds[typeSlug] = [];
    typeQuestionIds[typeSlug].push(q.id);
    return { ...q, questionType: typeSlug };
  });

  const output = {
    generatedAt: new Date().toISOString(),
    totalQuestions: allQuestions.length,
    taxonomy: taxonomy.types.map(t => ({
      ...t,
      count: (typeQuestionIds[t.slug] || []).length,
      questionIds: typeQuestionIds[t.slug] || [],
    })),
    // Also include "other" if any fell through
    ...(typeQuestionIds['other'].length > 0 ? {
      unclassified: {
        count: typeQuestionIds['other'].length,
        questionIds: typeQuestionIds['other'],
      }
    } : {}),
    questions: questionsWithType,
  };

  const outPath = join(OUTPUT_DIR, 'question_types_draft.json');
  writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf8');

  console.log(`\n✅ Done!`);
  console.log(`   Output: ${outPath}`);
  console.log(`   ${output.taxonomy.length} types, ${allQuestions.length} questions classified.`);
  if (output.unclassified) {
    console.log(`   ⚠️  ${output.unclassified.count} questions fell into "other" — review needed.`);
  }
  console.log(`\nNext step: review the draft, edit types/assignments as needed, then run the import script.`);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
