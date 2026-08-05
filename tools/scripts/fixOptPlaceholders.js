import fs from 'fs';
import path from 'path';

function stripDelims(s) {
  if (s == null) return '';
  let t = String(s).trim();
  const m = t.match(/^\\\(([\s\S]*)\\\)$/);
  if (m) t = m[1].trim();
  return t;
}

function wrapMath(s) {
  const t = stripDelims(s);
  if (!t) return t;
  if (/^[A-Z][a-z].*\s/.test(t) && !/\\[a-zA-Z]/.test(t) && !/[=^_{}]/.test(t)) return t;
  if (/\\\(/.test(t)) return t;
  return `\\(${t}\\)`;
}

// Generate valid distractors dynamically instead of using opt1
function inventDistractors(correctRaw) {
  const raw = stripDelims(correctRaw);
  const set = new Set();
  const add = (s) => {
    const t = stripDelims(s);
    if (!t || t === raw) return;
    set.add(t);
  };

  const num = Number(String(raw).replace(/[^0-9.eE+-]/g, ''));
  if (Number.isFinite(num) && /^-?\d+(\.\d+)?$/.test(raw.replace(/\s/g, ''))) {
    add(String(num + 1));
    add(String(num - 1));
    add(String(-num));
    add(String(num * 2));
  }

  const frac = raw.match(/^(-?)\\?frac\{([^}]+)\}\{([^}]+)\}$/) || raw.match(/^(-?)(\d+)\/(\d+)$/);
  if (frac) {
    add(`${frac[1] || ''}\\frac{${frac[3]}}{${frac[2]}}`);
    const num3 = Number(frac[3]);
    if (!Number.isNaN(num3)) {
      add(`${frac[1] || ''}\\frac{${frac[2]}}{${num3 + 1}}`);
      add(`${frac[1] || ''}\\frac{${frac[2]}}{${num3 > 1 ? num3 - 1 : num3 + 2}}`);
    }
  }

  if (raw.startsWith('-')) add(raw.slice(1));
  else add(`-${raw}`);

  add(raw.replace(/\+/g, '−').replace(/-/g, '+'));
  add(raw.replace(/(\d+)/, (_, n) => String(Number(n) + 1)));

  const pool = [...set].filter(Boolean);
  while (pool.length < 3) {
    pool.push(`\\frac{${pool.length + 1}x}{${pool.length + 3}}`); // Generic fallback
  }

  const out = [];
  const seen = new Set([wrapMath(raw)]);
  for (const p of pool) {
    const w = wrapMath(p);
    if (seen.has(w)) continue;
    seen.add(w);
    out.push(w);
    if (out.length === 3) break;
  }
  return out;
}

export function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const exportMatch = content.match(/export const (Y\d+_[A-Z0-9_]+_QUESTIONS) =/);
  if (!exportMatch) return;
  const exportName = exportMatch[1];
  
  const prefix = `export const ${exportName} = `;
  const startIndex = content.indexOf(prefix);
  let arrayContent = content.substring(startIndex + prefix.length).trim();
  if (arrayContent.endsWith(';')) arrayContent = arrayContent.substring(0, arrayContent.length - 1);
  
  const questions = eval(`(${arrayContent})`);
  let modifiedCount = 0;

  for (const q of questions) {
    if (!q.options) continue;
    
    let hasPlaceholder = false;
    for (const o of q.options) {
      if (o.text && o.text.includes('opt')) {
        hasPlaceholder = true;
        break;
      }
    }
    
    if (hasPlaceholder) {
      const a = Number(q.answer);
      const correctText = q.options[a].text;
      const newDistractors = inventDistractors(correctText);
      let dIdx = 0;
      
      for (let i = 0; i < q.options.length; i++) {
        if (i === a) continue;
        if (q.options[i].text.includes('opt')) {
           q.options[i].text = newDistractors[dIdx++] || wrapMath(String(dIdx + 5));
        }
      }
      modifiedCount++;
    }
  }

  if (modifiedCount > 0) {
    const newContent = `${prefix}${JSON.stringify(questions, null, 2)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed opt placeholders in ${modifiedCount} questions in ${filePath}.`);
  } else {
    console.log(`No opt placeholders found in ${filePath}.`);
  }
}

const isMain = process.argv[1] === new URL(import.meta.url).pathname || process.argv[1] === import.meta.filename || process.argv[1] === __filename;
if (isMain) {
  const targetFiles = process.argv.slice(2);
  for (const f of targetFiles) {
    fixFile(path.resolve(process.cwd(), f));
  }
}
