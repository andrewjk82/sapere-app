const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const fixes = {
  'j2434fSDlkYYajG7ARxd': {
    step0: '<div style="text-align: left;"><p>We need to add a negative mixed number and a positive mixed number. Convert both to improper fractions and find a common denominator.</p></div>',
    step1: '<div style="text-align: left;"><p>\\(-3\\frac{1}{3} + 2\\frac{1}{2} = -\\frac{10}{3} + \\frac{5}{2} = -\\frac{20}{6} + \\frac{15}{6} = -\\frac{5}{6}\\)</p></div>',
    solution: '<div style="text-align: left;"><p>\\(-3\\frac{1}{3} + 2\\frac{1}{2} = -\\frac{10}{3} + \\frac{5}{2} = -\\frac{20}{6} + \\frac{15}{6} = -\\frac{5}{6}\\)</p></div>'
  },
  'jKWgDPPnCbnUriSEPkPb': {
    step0: '<div style="text-align: left;"><p>We need to subtract two mixed numbers (both operations give a negative result). Convert to improper fractions and find a common denominator.</p></div>',
    step1: '<div style="text-align: left;"><p>\\(-1\\frac{1}{4} - 3\\frac{2}{5} = -\\frac{5}{4} - \\frac{17}{5} = -\\frac{25}{20} - \\frac{68}{20} = -\\frac{93}{20} = -4\\frac{13}{20}\\)</p></div>',
    solution: '<div style="text-align: left;"><p>\\(-1\\frac{1}{4} - 3\\frac{2}{5} = -\\frac{5}{4} - \\frac{17}{5} = -\\frac{25}{20} - \\frac{68}{20} = -\\frac{93}{20} = -4\\frac{13}{20}\\)</p></div>'
  },
  'lGFeYxCB6tyfGm0dnw0d': {
    step0: '<div style="text-align: left;"><p>We need to add a negative mixed number and a positive mixed number. Convert to improper fractions and find a common denominator.</p></div>',
    step1: '<div style="text-align: left;"><p>\\(-2\\frac{3}{4} + 4\\frac{2}{5} = -\\frac{11}{4} + \\frac{22}{5} = -\\frac{55}{20} + \\frac{88}{20} = \\frac{33}{20} = 1\\frac{13}{20}\\)</p></div>',
    solution: '<div style="text-align: left;"><p>\\(-2\\frac{3}{4} + 4\\frac{2}{5} = -\\frac{11}{4} + \\frac{22}{5} = -\\frac{55}{20} + \\frac{88}{20} = \\frac{33}{20} = 1\\frac{13}{20}\\)</p></div>'
  },
  'LMgiYvyJC8gXtYL5NMS0': {
    step0: '<div style="text-align: left;"><p>We need to arrange the numbers in increasing order. Convert each to a decimal to make comparison easier.</p></div>',
    step1: '<div style="text-align: left;"><p>Converting to decimals:</p><ul><li>\\(-3 = -3.0\\)</li><li>\\(-\\frac{8}{5} = -1.6\\)</li><li>\\(-1 = -1.0\\)</li><li>\\(\\frac{1}{3} \\approx 0.333\\)</li><li>\\(\\frac{1}{2} = 0.5\\)</li><li>\\(2 = 2.0\\)</li></ul><p>Comparing: \\(-3.0 < -1.6 < -1.0 < 0.333 < 0.5 < 2.0\\)</p></div>',
    solution: '<div style="text-align: left;"><p>Converting to decimals:</p><ul><li>\\(-3 = -3.0\\)</li><li>\\(-\\frac{8}{5} = -1.6\\)</li><li>\\(-1 = -1.0\\)</li><li>\\(\\frac{1}{3} \\approx 0.333\\)</li><li>\\(\\frac{1}{2} = 0.5\\)</li><li>\\(2 = 2.0\\)</li></ul><p>Hence, in increasing order: \\(-3, -\\frac{8}{5}, -1, \\frac{1}{3}, \\frac{1}{2}, 2\\)</p></div>'
  },
  'nr61rVufvMITKSPmLtWM': {
    step0: '<div style="text-align: left;"><p>We need to add two positive mixed numbers. Convert to improper fractions and find a common denominator.</p></div>',
    step1: '<div style="text-align: left;"><p>\\(3\\frac{1}{4} + 1\\frac{2}{5} = \\frac{13}{4} + \\frac{7}{5} = \\frac{65}{20} + \\frac{28}{20} = \\frac{93}{20} = 4\\frac{13}{20}\\)</p></div>',
    solution: '<div style="text-align: left;"><p>\\(3\\frac{1}{4} + 1\\frac{2}{5} = \\frac{13}{4} + \\frac{7}{5} = \\frac{65}{20} + \\frac{28}{20} = \\frac{93}{20} = 4\\frac{13}{20}\\)</p></div>'
  },
  'sbeB0NeLphIP8adMfpDP': {
    step0: '<div style="text-align: left;"><p>We need to subtract two negative mixed numbers. Convert to improper fractions and find a common denominator.</p></div>',
    step1: '<div style="text-align: left;"><p>\\(-2\\frac{1}{4} - 1\\frac{2}{3} = -\\frac{9}{4} - \\frac{5}{3} = -\\frac{27}{12} - \\frac{20}{12} = -\\frac{47}{12} = -3\\frac{11}{12}\\)</p></div>',
    solution: '<div style="text-align: left;"><p>\\(-2\\frac{1}{4} - 1\\frac{2}{3} = -\\frac{9}{4} - \\frac{5}{3} = -\\frac{27}{12} - \\frac{20}{12} = -\\frac{47}{12} = -3\\frac{11}{12}\\)</p></div>'
  }
};

async function fix() {
  for (const [id, f] of Object.entries(fixes)) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      const steps = doc.data().solutionSteps || [];
      steps[0].workingOut = f.step0;
      if (steps[1]) steps[1].workingOut = f.step1;
      await doc.ref.update({ solutionSteps: steps, solution: f.solution });
      console.log(`Fixed: ${id}`);
    } else {
      console.log(`Not found: ${id}`);
    }
  }
}
fix().catch(console.error);
