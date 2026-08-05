const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);

// 1. y9-16a-q10b
const q10b = questions.find(x => x.id === 'y9-16a-q10b');
if (q10b) {
  q10b.solutionSteps[0].graphData = {
    svg: `<svg viewBox="0 0 250 200" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="25" width="180" height="150" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><path d="M70,25 L70,125 L170,125 L170,25" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="4 4" /><text x="120" y="189" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">18 cm</text><text x="8" y="100" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">15 cm</text></svg>`
  };
  q10b.solutionSteps[1].graphData = {
    svg: `<svg viewBox="0 0 250 200" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M30,175 L210,175 L210,25 L170,25 L170,125 L70,125 L70,25 L30,25 Z" fill="#dbeafe" fill-opacity="0.55" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><rect x="70" y="25" width="100" height="100" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" stroke-dasharray="4 4" /><text x="120" y="189" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">18 cm</text><text x="8" y="100" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">15 cm</text><text x="50" y="157" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">4 cm</text><text x="190" y="157" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">4 cm</text><text x="120" y="113" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text></svg>`
  };
}

// 2. y9-16a-q10c
const q10c = questions.find(x => x.id === 'y9-16a-q10c');
if (q10c) {
  q10c.solutionSteps[0].graphData = {
    svg: `<svg viewBox="0 0 240 200" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M60,156 L168,156 L168,84 L114,30 L60,84 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><rect x="60" y="84" width="108" height="72" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><text x="114" y="170" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="38" y="120" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">4 cm</text><text x="184" y="57" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">3 cm</text></svg>`
  };
  q10c.solutionSteps[1].graphData = {
    svg: `<svg viewBox="0 0 240 200" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M60,156 L168,156 L168,84 L114,30 L60,84 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><path d="M60,84 L168,84 L114,30 Z" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><text x="114" y="170" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="38" y="120" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">4 cm</text><text x="184" y="57" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">3 cm</text></svg>`
  };
}

// 3. y9-16a-q10d
const q10d = questions.find(x => x.id === 'y9-16a-q10d');
if (q10d) {
  q10d.solutionSteps[0].graphData = {
    svg: `<svg viewBox="0 0 250 220" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 50,100 L 182,100 L 182,34 A 66,66 0 0,0 50,34 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2" /><rect x="50" y="34" width="132" height="66" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" /><text x="116" y="116" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="28" y="67" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">3 cm</text></svg>`
  };
  q10d.solutionSteps[2].graphData = {
    svg: `<svg viewBox="0 0 250 220" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 50,100 L 182,100 L 182,34 A 66,66 0 0,0 50,34 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2" /><path d="M 182,34 A 66,66 0 0,0 50,34 Z" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" /><text x="116" y="116" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="28" y="67" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">3 cm</text></svg>`
  };
}

// 4. y9-16a-q10e
const q10e = questions.find(x => x.id === 'y9-16a-q10e');
if (q10e) {
  q10e.solutionSteps[0].graphData = {
    svg: `<svg viewBox="0 0 320 180" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 50,40 L 200,40 A 50,50 0 0,1 200,140 L 50,140 A 50,50 0 0,1 50,40 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><rect x="50" y="40" width="150" height="100" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" /><line x1="50" y1="40" x2="50" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="200" y1="40" x2="200" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4"/><text x="125" y="172" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">15 m</text><text x="149" y="90" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 m</text></svg>`
  };
  q10e.solutionSteps[2].graphData = {
    svg: `<svg viewBox="0 0 320 180" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 50,40 L 200,40 A 50,50 0 0,1 200,140 L 50,140 A 50,50 0 0,1 50,40 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><path d="M 50,140 A 50,50 0 0,1 50,40 Z" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" /><path d="M 200,40 A 50,50 0 0,1 200,140 Z" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" /><line x1="50" y1="40" x2="50" y2="140" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="200" y1="40" x2="200" y2="140" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 4"/><text x="125" y="172" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">15 m</text><text x="149" y="90" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 m</text></svg>`
  };
}

// 5. y9-16a-q10f
const q10f = questions.find(x => x.id === 'y9-16a-q10f');
if (q10f) {
  q10f.solutionSteps[0].graphData = {
    svg: `<svg viewBox="0 0 280 200" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 40,142 L 40,30 L 120,30 L 120,62 A 80,80 0 0,1 200,142 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><rect x="40" y="30" width="80" height="112" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" /><text x="80" y="156" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 m</text><text x="22" y="86" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">7 m</text><text x="160" y="156" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 m</text></svg>`
  };
  q10f.solutionSteps[1].graphData = {
    svg: `<svg viewBox="0 0 280 200" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 40,142 L 40,30 L 120,30 L 120,62 A 80,80 0 0,1 200,142 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><path d="M 120,62 A 80,80 0 0,1 200,142 L 120,142 Z" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" /><line x1="120" y1="30" x2="120" y2="142" stroke="#475569" stroke-width="2" stroke-dasharray="4 4" /><text x="80" y="156" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 m</text><text x="22" y="86" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">7 m</text><text x="160" y="156" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 m</text></svg>`
  };
}

// 6. y9-16a-q10g
const q10g = questions.find(x => x.id === 'y9-16a-q10g');
if (q10g) {
  q10g.solutionSteps[1].graphData = {
    svg: `<svg viewBox="0 0 260 160" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M30,126 L222,126 L222,46 L126,46 L126,30 L30,30 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><rect x="30" y="30" width="96" height="96" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><line x1="126" y1="30" x2="126" y2="126" stroke="#475569" stroke-width="2" stroke-dasharray="4 4" /><text x="126" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">24 cm</text><text x="12" y="78" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="174" y="38" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text></svg>`
  };
  q10g.solutionSteps[2].graphData = {
    svg: `<svg viewBox="0 0 260 160" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M30,126 L222,126 L222,46 L126,46 L126,30 L30,30 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><rect x="126" y="46" width="96" height="80" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><line x1="126" y1="30" x2="126" y2="126" stroke="#475569" stroke-width="2" stroke-dasharray="4 4" /><text x="126" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">24 cm</text><text x="12" y="78" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="174" y="38" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text></svg>`
  };
}

// 7. y9-16a-q10h
const q10h = questions.find(x => x.id === 'y9-16a-q10h');
if (q10h) {
  q10h.solutionSteps[0].graphData = {
    svg: `<svg viewBox="0 0 280 280" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 50,100 L 218,100 L 134,160 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><rect x="50" y="28" width="168" height="72" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2"/><path d="M 74,28 A 60,60 0 0,1 194,28" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><text x="134" y="174" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">14 cm</text><text x="28" y="64" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="134" y="-42" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="234" y="130" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 cm</text></svg>`
  };
  q10h.solutionSteps[1].graphData = {
    svg: `<svg viewBox="0 0 280 280" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 50,100 L 218,100 L 134,160 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><rect x="50" y="28" width="168" height="72" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><path d="M 74,28 A 60,60 0 0,1 194,28 Z" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2"/><text x="134" y="174" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">14 cm</text><text x="28" y="64" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="134" y="-42" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="234" y="130" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 cm</text></svg>`
  };
  q10h.solutionSteps[2].graphData = {
    svg: `<svg viewBox="0 0 280 280" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 50,100 L 218,100 L 134,160 Z" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2"/><rect x="50" y="28" width="168" height="72" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><path d="M 74,28 A 60,60 0 0,1 194,28" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><text x="134" y="174" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">14 cm</text><text x="28" y="64" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="134" y="-42" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="234" y="130" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 cm</text></svg>`
  };
}

const newContent = `export const Y9_CH16_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const batch = db.batch();
  const ids = ['y9-16a-q10b', 'y9-16a-q10c', 'y9-16a-q10d', 'y9-16a-q10e', 'y9-16a-q10f', 'y9-16a-q10g', 'y9-16a-q10h'];
  
  for (const id of ids) {
    const q = questions.find(x => x.id === id);
    if (q) {
      batch.update(db.collection('questions').doc(id), {
        solutionSteps: q.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
    }
  }

  await batch.commit();

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated solution steps SVGs for all composite questions in Y9 Ch16a.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
