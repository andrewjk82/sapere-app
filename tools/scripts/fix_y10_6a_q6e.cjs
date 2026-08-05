const admin = require('firebase-admin');
const serviceAccount = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const db = admin.firestore();

async function fix() {
  await db.collection('questions').doc('y10-6a-q6e').update({
    question: 'A cylinder has a radius of 5 cm and a height of 12 cm. Calculate the exact volume of the cylinder (in terms of \\(\\pi\\)).',
    hint: 'Use the formula \\(V = \\pi r^2 h\\) with \\(r = 5\\) cm and \\(h = 12\\) cm.',
    hintText: 'Use the formula \\(V = \\pi r^2 h\\) with \\(r = 5\\) cm and \\(h = 12\\) cm.',
    solutionSteps: [
      {
        explanation: 'Identify the given values and the formula for the volume of a cylinder.',
        workingOut: '\\(r = 5 \\text{ cm},\\quad h = 12 \\text{ cm}\\\\V = \\pi r^2 h\\)',
        graphData: null
      },
      {
        explanation: 'Substitute the values into the formula.',
        workingOut: '\\(V = \\pi(5^2)(12)\\)',
        graphData: null
      },
      {
        explanation: 'Simplify.',
        workingOut: '\\(V = 25 \\times 12 \\times \\pi = 300\\pi\\)',
        graphData: null
      },
      {
        explanation: 'State the exact volume.',
        workingOut: '\\(V = 300\\pi \\text{ cm}^3\\)',
        graphData: null
      }
    ],
    graphData: {
      cylinder: {
        radius: 5,
        height: 12,
        labels: {
          radius: '5 cm',
          height: '12 cm'
        }
      }
    },
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });
  console.log('Updated y10-6a-q6e successfully');
  process.exit(0);
}

fix().catch(e => { console.error(e); process.exit(1); });
