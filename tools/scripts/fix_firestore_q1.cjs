const admin = require('firebase-admin');
const serviceAccount = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

async function fixQ1() {
  const ids = ['y11a-3b-q1a', 'y11a-3b-q1b', 'y11a-3b-q1c', 'y11a-3b-q1d', 'y11a-3b-q1e', 'y11a-3b-q1f'];
  
  for (const id of ids) {
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    
    if (doc.exists) {
      const data = doc.data();
      if (data.graphData && data.graphData.svg) {
        console.log(`Fixing ${id}...`);
        const redLineSvg = data.graphData.svg;
        
        // Remove svg from the main graphData
        const updatedGraphData = { ...data.graphData };
        delete updatedGraphData.svg;
        
        const updatedSolutionSteps = [ ...data.solutionSteps ];
        if (updatedSolutionSteps.length > 2) {
          if (!updatedSolutionSteps[2].graphData) {
            updatedSolutionSteps[2].graphData = {};
          }
          updatedSolutionSteps[2].graphData.svg = redLineSvg;
        }
        
        // Notice we explicitly delete the svg field in Firestore using update() rather than merge:true
        await docRef.update({
          'graphData.svg': admin.firestore.FieldValue.delete(),
          'solutionSteps': updatedSolutionSteps
        });
        
        console.log(`Successfully fixed ${id}.`);
      } else {
        console.log(`No SVG found in main graphData for ${id}.`);
      }
    }
  }
}

fixQ1().then(() => process.exit(0)).catch(console.error);
