import fs from 'fs';
import path from 'path';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
import _generate from '@babel/generator';

const traverse = _traverse.default || _traverse;
const generate = _generate.default || _generate;

// Maps topicId (lowercase) → seed file info
const TOPIC_SEED_MAP = {
  'y11a-1a': { file: 'seedYear11Ch1AQuestions.js', exportVar: 'Y11_CH1A_QUESTIONS' },
  'y11a-1b': { file: 'seedYear11Ch1BQuestions.js', exportVar: 'Y11_CH1B_QUESTIONS' },
  'y11a-1c': { file: 'seedYear11Ch1CQuestions.js', exportVar: 'Y11_CH1C_QUESTIONS' },
  'y11a-1d': { file: 'seedYear11Ch1DQuestions.js', exportVar: 'Y11_CH1D_QUESTIONS' },
  'y11a-1e': { file: 'seedYear11Ch1EQuestions.js', exportVar: 'Y11_CH1E_QUESTIONS' },
  'y11a-1f': { file: 'seedYear11Ch1FQuestions.js', exportVar: 'Y11_CH1F_QUESTIONS' },
};

// Infer topicId from question doc ID when the field is missing/empty.
function inferTopicId(docId) {
  const m = String(docId).match(/^(y11a-1[a-fA-F])/i);
  return m ? m[1].toLowerCase() : null;
}

export default function localSyncPlugin() {
  return {
    name: 'local-sync-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/__local-api/sync-seed' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const result = syncSeedFile(data);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(result));
            } catch (err) {
              console.error(err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }

        if (req.url === '/__local-api/sync-all' && req.method === 'POST') {
          const { exec } = await import('child_process');
          exec('npm run sync-seeds', (error, stdout, stderr) => {
            res.setHeader('Content-Type', 'application/json');
            if (error) {
              console.error(`sync-all exec error: ${error}`);
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: error.message, stderr }));
            } else {
              console.log(`sync-all result: ${stdout}`);
              res.end(JSON.stringify({ success: true, output: stdout }));
            }
          });
          return;
        }
        next();
      });
    }
  }
}

function buildCleanQuestion(qId, payload) {
  const data = payload || {};
  return {
    id: qId,
    type: data.type || 'short_answer',
    difficulty: data.difficulty || 'medium',
    timeLimit: data.timeLimit || 120,
    question: data.question || '',
    options: data.options || [],
    answer: data.answer || '',
    blanks: data.blanks || [],
    hint: data.hint || '',
    solution: data.solution || '',
    solutionSteps: data.solutionSteps || [],
    graphData: data.graphData || null,
    requiresManualGrading: data.requiresManualGrading || false,
  };
}

function syncSeedFile(questionData) {
  const qId = questionData.id;
  if (!qId) return { success: false, message: 'No question ID provided.' };

  const dir = path.join(process.cwd(), 'src', 'constants');
  const files = fs.readdirSync(dir).filter(f => f.startsWith('seed') && f.endsWith('.js'));

  // Try to update existing entry
  for (const file of files) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    if (!content.includes(qId)) continue;

    let ast;
    try {
      ast = parse(content, { sourceType: 'module' });
    } catch (e) {
      continue;
    }

    let updated = false;

    traverse(ast, {
      ObjectExpression(p) {
        const idProp = p.node.properties.find(prop =>
          prop.key &&
          (prop.key.name === 'id' || prop.key.value === 'id') &&
          prop.value &&
          prop.value.value === qId
        );

        if (idProp) {
          const newProps = [];
          const payload = questionData.question || {};
          const clean = buildCleanQuestion(qId, payload);

          for (const [key, val] of Object.entries(clean)) {
            const tempAst = parse(`const a = ${JSON.stringify(val)};`);
            const valNode = tempAst.program.body[0].declarations[0].init;
            newProps.push({
              type: 'ObjectProperty',
              key: { type: 'Identifier', name: key },
              value: valNode
            });
          }

          p.node.properties = newProps;
          updated = true;
          p.stop();
        }
      }
    });

    if (updated) {
      const { code } = generate(ast, {}, content);
      fs.writeFileSync(filePath, code, 'utf-8');
      console.log(`[sync-seed] Updated ${qId} in ${file}`);
      return { success: true, file };
    }
  }

  // Question not found in any seed — try to append to the correct file
  const payload = questionData.question || {};
  const rawTopicId = (payload.topicId || '').toLowerCase();
  const topicKey = TOPIC_SEED_MAP[rawTopicId] ? rawTopicId : inferTopicId(qId);

  if (!topicKey || !TOPIC_SEED_MAP[topicKey]) {
    return { success: false, message: `Question ${qId} not in any seed and topicId not recognized (${payload.topicId}).` };
  }

  const { file: seedFile, exportVar } = TOPIC_SEED_MAP[topicKey];
  const filePath = path.join(dir, seedFile);

  if (!fs.existsSync(filePath)) {
    return { success: false, message: `Seed file ${seedFile} not found.` };
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const ast = parse(content, { sourceType: 'module' });
    let appended = false;

    traverse(ast, {
      ExportNamedDeclaration(p) {
        const decl = p.node.declaration;
        if (!decl || decl.type !== 'VariableDeclaration') return;
        const declarator = decl.declarations.find(d => d.id && d.id.name === exportVar);
        if (!declarator || declarator.init.type !== 'ArrayExpression') return;

        const clean = buildCleanQuestion(qId, payload);
        const tempAst = parse(`const a = ${JSON.stringify(clean)};`);
        const newObj = tempAst.program.body[0].declarations[0].init;
        declarator.init.elements.push(newObj);
        appended = true;
        p.stop();
      }
    });

    if (appended) {
      const { code } = generate(ast, {}, content);
      fs.writeFileSync(filePath, code, 'utf-8');
      console.log(`[sync-seed] Appended ${qId} to ${seedFile}`);
      return { success: true, file: seedFile, appended: true };
    }

    return { success: false, message: `Could not find array ${exportVar} in ${seedFile}.` };
  } catch (err) {
    return { success: false, message: `Append failed: ${err.message}` };
  }
}
