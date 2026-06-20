import admin from 'firebase-admin';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
import _generate from '@babel/generator';

const traverse = _traverse.default || _traverse;
const generate = _generate.default || _generate;

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'andrewjk82@gmail.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = 'andrewjk82/sapere-app';
const GITHUB_BRANCH = 'main';

function getAdminApp() {
  if (admin.apps.length > 0) return admin.apps[0];
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  if (!projectId || !clientEmail || !privateKey) throw new Error('Missing Firebase admin credentials');
  return admin.initializeApp({ credential: admin.credential.cert({ projectId, clientEmail, privateKey }) });
}

async function verifyAdmin(req) {
  const token = (req.headers.authorization || '').replace('Bearer ', '').trim();
  if (!token) return null;
  try {
    const app = getAdminApp();
    const decoded = await admin.auth(app).verifyIdToken(token);
    return decoded.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase() ? decoded : null;
  } catch {
    return null;
  }
}

async function githubRequest(path, options = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'User-Agent': 'sapere-seed-sync',
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
      ...(options.headers || {}),
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || `GitHub API error ${res.status}`);
  return data;
}

async function findSeedFilePath(questionId) {
  const escaped = encodeURIComponent(`"${questionId}"`);
  const results = await githubRequest(
    `/search/code?q=${escaped}+repo:${GITHUB_REPO}+path:src/constants&type=code`
  );
  const match = (results.items || []).find(
    (item) => item.name.startsWith('seed') && item.name.endsWith('.js')
  );
  return match?.path || null;
}

async function fetchGithubFile(filePath) {
  const data = await githubRequest(
    `/repos/${GITHUB_REPO}/contents/${filePath}?ref=${GITHUB_BRANCH}`
  );
  const content = Buffer.from(data.content, 'base64').toString('utf-8');
  return { content, sha: data.sha };
}

function buildCleanQuestion(id, payload) {
  const clean = { id };
  const fields = [
    'type', 'difficulty', 'timeLimit', 'question', 'options', 'answer',
    'blanks', 'hint', 'solution', 'solutionSteps', 'graphData',
    'requiresManualGrading', 'subQuestions', 'acceptedAnswers',
  ];
  for (const f of fields) {
    if (payload[f] !== undefined && payload[f] !== null) {
      const v = payload[f];
      // Skip empty arrays/strings for optional fields to keep seed files compact
      if (Array.isArray(v) && v.length === 0 && ['blanks', 'subQuestions', 'acceptedAnswers', 'options'].includes(f)) continue;
      if (v === '' && ['hint', 'solution', 'graphData'].includes(f)) continue;
      clean[f] = v;
    }
  }
  return clean;
}

function updateQuestionInFileContent(content, questionId, payload) {
  let ast;
  try {
    ast = parse(content, { sourceType: 'module' });
  } catch (e) {
    throw new Error(`Babel parse failed: ${e.message}`);
  }

  let updated = false;

  traverse(ast, {
    ObjectExpression(path) {
      const idProp = path.node.properties.find(
        (prop) =>
          prop.key &&
          (prop.key.name === 'id' || prop.key.value === 'id') &&
          prop.value?.value === questionId
      );
      if (!idProp) return;

      const clean = buildCleanQuestion(questionId, payload);
      const newProps = [];
      for (const [key, val] of Object.entries(clean)) {
        const tmpAst = parse(`const _a = ${JSON.stringify(val)};`);
        const valNode = tmpAst.program.body[0].declarations[0].init;
        newProps.push({
          type: 'ObjectProperty',
          key: { type: 'Identifier', name: key },
          value: valNode,
        });
      }
      path.node.properties = newProps;
      updated = true;
      path.stop();
    },
  });

  if (!updated) return null;
  const { code } = generate(ast, {}, content);
  return code;
}

async function commitFile(filePath, content, sha, message) {
  await githubRequest(`/repos/${GITHUB_REPO}/contents/${filePath}`, {
    method: 'PUT',
    body: JSON.stringify({
      message,
      content: Buffer.from(content).toString('base64'),
      sha,
      branch: GITHUB_BRANCH,
    }),
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!GITHUB_TOKEN) {
    console.warn('[sync-seed] GITHUB_TOKEN not set — seed sync disabled');
    return res.status(200).json({ success: false, message: 'Seed sync not configured (GITHUB_TOKEN missing)' });
  }

  const user = await verifyAdmin(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const { id, question } = req.body || {};
  if (!id) return res.status(400).json({ error: 'No question ID provided' });

  try {
    const filePath = await findSeedFilePath(id);
    if (!filePath) {
      // Not a seed question (teacher-added) — nothing to sync
      return res.status(200).json({ success: false, message: `${id} is not a seed question` });
    }

    const { content, sha } = await fetchGithubFile(filePath);
    const updatedContent = updateQuestionInFileContent(content, id, question || {});
    if (!updatedContent) {
      return res.status(200).json({ success: false, message: `Could not locate ${id} in ${filePath}` });
    }

    const fileName = filePath.split('/').pop();
    await commitFile(filePath, updatedContent, sha, `sync: update ${id} in ${fileName}`);

    console.log(`[sync-seed] Updated ${id} in ${filePath}`);
    return res.status(200).json({ success: true, file: filePath });
  } catch (err) {
    console.error('[sync-seed] Error:', err?.message || err);
    return res.status(500).json({ success: false, error: err?.message || 'Unknown error' });
  }
}
