import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Defining the correct SVG graphData objects
const correctSvgs = {
  // 3/4 question
  "IT97K2p7zjP7f86oGoI6": {
    html: `<svg width="100" height="100" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto;">\n  <rect width="80" height="80" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>\n  <rect x="0" y="0" width="60" height="80" fill="#93c5fd" />\n  <line x1="20" y1="0" x2="20" y2="80" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="40" y1="0" x2="40" y2="80" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="60" y1="0" x2="60" y2="80" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="0" y1="20" x2="80" y2="20" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="0" y1="40" x2="80" y2="40" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="0" y1="60" x2="80" y2="60" stroke="#94a3b8" stroke-width="1"/>\n</svg>`
  },
  // 4/3 question
  "MrB0aAU2IadXYB8myw3w": {
    html: `<div style="display: flex; gap: 16px; justify-content: center; align-items: center;">\n<svg width="80" height="80" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">\n  <rect width="60" height="60" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>\n  <rect x="0" y="20" width="60" height="20" fill="#93c5fd" />\n  <line x1="20" y1="0" x2="20" y2="60" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="40" y1="0" x2="40" y2="60" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="0" y1="20" x2="60" y2="20" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="0" y1="40" x2="60" y2="40" stroke="#94a3b8" stroke-width="1"/>\n</svg>\n<svg width="80" height="80" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">\n  <rect width="60" height="60" fill="#93c5fd" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="20" y1="0" x2="20" y2="60" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="40" y1="0" x2="40" y2="60" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="0" y1="20" x2="60" y2="20" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="0" y1="40" x2="60" y2="40" stroke="#94a3b8" stroke-width="1"/>\n</svg>\n</div>`
  },
  // 1/2 pinwheel question
  "lTA9xFFreaduZeiQseUA": {
    html: `<svg width="120" height="120" viewBox="0 0 85 85" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto;">\n  <g transform="translate(42.5, 42.5) rotate(45) translate(-30, -30)">\n    <rect width="60" height="60" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>\n    <polygon points="30,30 0,0 30,0" fill="#93c5fd" />\n    <polygon points="30,30 60,0 60,30" fill="#93c5fd" />\n    <polygon points="30,30 60,60 30,60" fill="#93c5fd" />\n    <polygon points="30,30 0,60 0,30" fill="#93c5fd" />\n    <line x1="0" y1="0" x2="60" y2="60" stroke="#94a3b8" stroke-width="1"/>\n    <line x1="0" y1="60" x2="60" y2="0" stroke="#94a3b8" stroke-width="1"/>\n    <line x1="30" y1="0" x2="30" y2="60" stroke="#94a3b8" stroke-width="1"/>\n    <line x1="0" y1="30" x2="60" y2="30" stroke="#94a3b8" stroke-width="1"/>\n  </g>\n</svg>`
  },
  // 1 whole question (2 grids split diagonally)
  "b88zApuCGfA8kPbosBzC": {
    html: `<div style="display: flex; gap: 16px; justify-content: center; align-items: center;">\n<svg width="80" height="80" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">\n  <rect width="60" height="60" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>\n  <polygon points="0,0 0,30 30,30" fill="#93c5fd" />\n  <polygon points="30,0 30,30 60,30" fill="#93c5fd" />\n  <polygon points="0,30 0,60 30,60" fill="#93c5fd" />\n  <polygon points="30,30 30,60 60,60" fill="#93c5fd" />\n  <line x1="30" y1="0" x2="30" y2="60" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="0" y1="30" x2="60" y2="30" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="0" y1="0" x2="30" y2="30" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="30" y1="0" x2="60" y2="30" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="0" y1="30" x2="30" y2="60" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="30" y1="30" x2="60" y2="60" stroke="#94a3b8" stroke-width="1"/>\n</svg>\n<svg width="80" height="80" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">\n  <rect width="60" height="60" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>\n  <polygon points="0,0 0,30 30,30" fill="#93c5fd" />\n  <polygon points="30,0 30,30 60,30" fill="#93c5fd" />\n  <polygon points="0,30 0,60 30,60" fill="#93c5fd" />\n  <polygon points="30,30 30,60 60,60" fill="#93c5fd" />\n  <line x1="30" y1="0" x2="30" y2="60" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="0" y1="30" x2="60" y2="30" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="0" y1="0" x2="30" y2="30" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="30" y1="0" x2="60" y2="30" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="0" y1="30" x2="30" y2="60" stroke="#94a3b8" stroke-width="1"/>\n  <line x1="30" y1="30" x2="60" y2="60" stroke="#94a3b8" stroke-width="1"/>\n</svg>\n</div>`
  }
};

(async () => {
  try {
    console.log('[Repair SVG] Adjusting graphData.html for matching questions...');
    for (const [docId, svgData] of Object.entries(correctSvgs)) {
      const ref = db.collection('questions').doc(docId);
      const doc = await ref.get();
      if (doc.exists) {
        await ref.update({
          graphData: svgData
        });
        console.log(`  [UPDATED SVG] Doc ID: ${docId}`);
      } else {
        console.log(`  [ERROR] Doc ${docId} does not exist.`);
      }
    }
    console.log('\nSVG correction complete.');
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during SVG repair:', err);
    process.exit(1);
  }
})();
//
