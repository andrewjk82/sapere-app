const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  // 1. l7k2AZaf4bDk9oPlOBcO
  await db.collection('questions').doc('l7k2AZaf4bDk9oPlOBcO').update({
    solution: '<div style="text-align: left;"><p>Let us calculate the probabilities:</p><ul><li>Total number of marbles in the bag = \\(5 + 5 = 10\\).</li><li>Number of yellow marbles = 5, so Probability = \\(\\frac{5}{10} = \\frac{1}{2}\\).</li><li>Number of green marbles = 5, so Probability = \\(\\frac{5}{10} = \\frac{1}{2}\\).</li></ul><p>Since both outcomes have the exact same chance, they are <strong>equally likely</strong> with a probability of \\(\\frac{1}{2}\\) each.</p></div>',
    solutionSteps: [
      {
        explanation: 'Find the total number of marbles.',
        workingOut: '<div style="text-align: left;"><p>Total number of marbles in the bag = \\(5 + 5 = 10\\).</p></div>',
        graphData: null
      },
      {
        explanation: 'Calculate the probability of drawing a yellow marble.',
        workingOut: '<div style="text-align: left;"><p>There are 5 yellow marbles out of 10 total marbles.</p><p>Probability = \\(\\frac{5}{10} = \\frac{1}{2}\\).</p></div>',
        graphData: null
      },
      {
        explanation: 'Calculate the probability of drawing a green marble.',
        workingOut: '<div style="text-align: left;"><p>There are 5 green marbles out of 10 total marbles.</p><p>Probability = \\(\\frac{5}{10} = \\frac{1}{2}\\).</p><p>Therefore, the probabilities are \\(\\frac{1}{2}\\) and \\(\\frac{1}{2}\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed l7k2AZaf4bDk9oPlOBcO');

  // 2. nAmsRq6KwG9iEoOidqSa
  await db.collection('questions').doc('nAmsRq6KwG9iEoOidqSa').update({
    solutionSteps: [
      {
        explanation: 'Analyse the event.',
        workingOut: '<div style="text-align: left;"><p>Since an ice cube is guaranteed to melt in boiling water, this is a <strong>certain event</strong>.</p></div>',
        graphData: null
      },
      {
        explanation: 'Determine the probability.',
        workingOut: '<div style="text-align: left;"><p>An event that is certain to happen always has a probability of exactly <strong>1</strong> (or <strong>100%</strong>).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed nAmsRq6KwG9iEoOidqSa');

  // 3. pfCwdyIUOxAGgddvhMmb
  const fixedPfSolution = '<div style="text-align: left;"><p>An event with a probability of 1 is guaranteed to happen (a certain event):</p><ul><li><strong>Selecting a blue counter from a box containing only blue counters</strong>: Since there are no other colors, you will always pick a blue counter. Probability = <strong>1</strong>.</li><li>Rolling an even number: Probability = \\(\\frac{3}{6} = \\frac{1}{2}\\).</li><li>Flipping a coin and landing on tails: Probability = \\(\\frac{1}{2}\\).</li><li>It raining tomorrow in London: Unsure, so the probability is between 0 and 1.</li></ul></div>';
  await db.collection('questions').doc('pfCwdyIUOxAGgddvhMmb').update({
    solution: fixedPfSolution,
    solutionSteps: [
      {
        explanation: 'Understand what a probability of 1 means.',
        workingOut: '<div style="text-align: left;"><p>An event with a probability of 1 is a <strong>certain event</strong>, meaning it is guaranteed to happen.</p></div>',
        graphData: null
      },
      {
        explanation: 'Evaluate each option.',
        workingOut: fixedPfSolution,
        graphData: null
      }
    ]
  });
  console.log('Fixed pfCwdyIUOxAGgddvhMmb');

  // 4. RNvKtoZ8ym98QebKgeU5
  await db.collection('questions').doc('RNvKtoZ8ym98QebKgeU5').update({
    solutionSteps: [
      {
        explanation: 'Analyse the event.',
        workingOut: '<div style="text-align: left;"><p>Since naturally flying to the moon by flapping arms is physically impossible, it is an <strong>impossible event</strong>.</p></div>',
        graphData: null
      },
      {
        explanation: 'Determine the probability.',
        workingOut: '<div style="text-align: left;"><p>An event that has <strong>no chance</strong> of occurring always has a probability of exactly <strong>0</strong>.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed RNvKtoZ8ym98QebKgeU5');
}
run().catch(console.error);
