const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const ref = db.collection('questions').doc('8fff7565669472ee2db861f03e3c1c6c');
  const doc = await ref.get();
  const steps = doc.data().solutionSteps;

  steps[0].workingOut = '<div style="text-align: left;"><p>Define variables: let \\(a\\) = number of adult tickets, \\(c\\) = number of child tickets. Set up a system of equations from the given information.</p></div>';
  steps[1].workingOut = '<div style="text-align: left;"><p>From the total tickets: \\(a + c = 50 \\Rightarrow c = 50 - a\\)</p><p>Substitute into the cost equation:</p><p>\\(8a + 5(50 - a) = 310\\)</p></div>';
  steps[2].workingOut = '<div style="text-align: left;"><p>Expand and solve:</p><p>\\(8a + 250 - 5a = 310\\)</p><p>\\(3a = 60\\)</p><p>\\(a = 20\\)</p></div>';
  steps[3].workingOut = '<div style="text-align: left;"><p>Find the number of child tickets:</p><p>\\(c = 50 - 20 = 30\\)</p><p>Therefore, <strong>20 adult tickets</strong> and <strong>30 child tickets</strong> were sold.</p></div>';

  await ref.update({
    solutionSteps: steps,
    solution: '<div style="text-align: left;"><p>\\(20\\) adult tickets and \\(30\\) child tickets were sold.</p></div>'
  });
  console.log('Fixed 8fff7565669472ee2db861f03e3c1c6c');
}
run().catch(console.error);
