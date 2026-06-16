import fs from 'fs';
import path from 'path';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
import _generate from '@babel/generator';

const traverse = _traverse.default || _traverse;
const generate = _generate.default || _generate;

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
        next();
      });
    }
  }
}

function syncSeedFile(questionData) {
  const qId = questionData.id;
  if (!qId) return { success: false, message: 'No question ID provided.' };

  const dir = path.join(process.cwd(), 'src', 'constants');
  const files = fs.readdirSync(dir).filter(f => f.startsWith('seed') && f.endsWith('.js'));
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Quick check to avoid parsing every file
    if (!content.includes(qId)) continue;

    let ast;
    try {
      ast = parse(content, { sourceType: 'module' });
    } catch (e) {
      continue; // Parse error, skip this file
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
          // Reconstruct all properties from the new payload
          const newProps = [];
          
          // First add ID
          newProps.push({
            type: 'ObjectProperty',
            key: { type: 'Identifier', name: 'id' },
            value: { type: 'StringLiteral', value: qId }
          });

          // Add all other properties from payload
          const payload = questionData.question || {};
          for (const [key, val] of Object.entries(payload)) {
            if (key === 'id' || key === 'updatedAt' || key === 'createdAt') continue;
            
            // Serialize val to AST
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
      return { success: true, file };
    }
  }
  return { success: false, message: 'Question ID not found in any seed file.' };
}
