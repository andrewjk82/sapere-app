const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function fix() {
  const fixes = {
    'BFhzM0bWyBfwAQegceez': {
      step0: '<div style="text-align: left;"><p>We need to subtract two mixed numbers. Convert to improper fractions first, then find a common denominator.</p></div>'
    },
    'c7zjNOo8brVdv0j9aQ1u': {
      step0: '<div style="text-align: left;"><p>We need to add a negative mixed number and a positive integer. Treat it as subtraction: \\(5 - 2\\frac{1}{2}\\).</p></div>'
    },
    'HSpNVJRCRqwIXfQ0GLQr': {
      step0: '<div style="text-align: left;"><p>We need to add a negative mixed number and a positive mixed number. Convert to improper fractions first, then find a common denominator.</p></div>'
    }
  };

  for (const [id, fix] of Object.entries(fixes)) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      const steps = doc.data().solutionSteps;
      steps[0].workingOut = fix.step0;
      await doc.ref.update({ solutionSteps: steps });
      console.log(`Fixed ${id}`);
    }
  }
}
fix().catch(console.error);
