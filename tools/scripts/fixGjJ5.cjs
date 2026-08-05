const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  // Fix gjH0zgswfcPeBeuQp3ju
  await db.collection('questions').doc('gjH0zgswfcPeBeuQp3ju').update({
    solutionSteps: [
      {
        explanation: 'Analyse the sequence of days.',
        workingOut: '<div style="text-align: left;"><p>In the standard calendar, Sunday always follows Saturday.</p><p>Since today is Saturday, tomorrow is guaranteed to be Sunday.</p></div>',
        graphData: null
      },
      {
        explanation: 'Determine the probability.',
        workingOut: '<div style="text-align: left;"><p>Because this is guaranteed to happen, it is a <strong>certain event</strong>.</p><p>A certain event has a probability of exactly <strong>1</strong> (or 100%).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed LaTeX and steps in gjH0zgswfcPeBeuQp3ju');

  // Fix J5QjykcTSKQDDoeJH2NA
  await db.collection('questions').doc('J5QjykcTSKQDDoeJH2NA').update({
    solutionSteps: [
      {
        explanation: 'Analyse the calendar dates.',
        workingOut: '<div style="text-align: left;"><p>The day following December 31st is always January 1st.</p><p>It can never be June 1st.</p></div>',
        graphData: null
      },
      {
        explanation: 'Determine the probability.',
        workingOut: '<div style="text-align: left;"><p>Since this outcome can never happen, it is an <strong>impossible event</strong>.</p><p>An impossible event has a probability of exactly <strong>0</strong>.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed LaTeX and steps in J5QjykcTSKQDDoeJH2NA');
}
run().catch(console.error);
