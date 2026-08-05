const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ─── q11a: x^2 + 2x - 15 < 0  =>  -5 < x < 3 ──────────────────────────
  // Red portion: between x=-5 and x=3 (below x-axis)
  const graph_11a = {
    jsxGraph: {
      width: 360, height: 280,
      boundingbox: [-8, 12, 6, -20],
      script: `board.suspendUpdate();
board.create('arrow',[[-8,0],[6,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-20],[0,12]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[5.5,-0.5,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,11,'y'],{fontSize:13,color:'#64748b'});
// Full parabola (light grey)
board.create('functiongraph',[function(x){return x*x+2*x-15;},-7,5],{strokeColor:'#c4b5fd',strokeWidth:1.5,dash:1});
// Highlighted portion satisfying y < 0: between x=-5 and x=3 (red)
board.create('functiongraph',[function(x){return x*x+2*x-15;},-5,3],{strokeColor:'#ef4444',strokeWidth:3});
// x-intercept dots
board.create('point',[-5,0],{name:'(-5, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[-65,-15]}});
board.create('point',[3,0],{name:'(3, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[8,-15]}});
// Vertex
board.create('point',[-1,-16],{name:'Vertex (-1,-16)',size:3,color:'#dc2626',label:{autoPosition:false,offset:[8,8]}});
// Label
board.create('text',[-1,-10,'← solution region →'],{fontSize:11,color:'#dc2626'});
board.unsuspendUpdate();`
    }
  };

  // ─── q11b: x^2 + 4x + 3 >= 0  =>  x <= -3 or x >= -1 ──────────────────
  // Red portions: left of x=-3 AND right of x=-1
  const graph_11b = {
    jsxGraph: {
      width: 360, height: 280,
      boundingbox: [-6, 8, 3, -4],
      script: `board.suspendUpdate();
board.create('arrow',[[-6,0],[3,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-4],[0,8]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[2.5,-0.4,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,7.5,'y'],{fontSize:13,color:'#64748b'});
// Full parabola (light)
board.create('functiongraph',[function(x){return x*x+4*x+3;},-3,-1],{strokeColor:'#c4b5fd',strokeWidth:1.5,dash:1});
// Red highlighted portions satisfying y >= 0: outside the roots
board.create('functiongraph',[function(x){return x*x+4*x+3;},-5.5,-3],{strokeColor:'#ef4444',strokeWidth:3});
board.create('functiongraph',[function(x){return x*x+4*x+3;},-1,2],{strokeColor:'#ef4444',strokeWidth:3});
// x-intercept dots
board.create('point',[-3,0],{name:'(-3, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[-65,-15]}});
board.create('point',[-1,0],{name:'(-1, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[8,-15]}});
// Vertex
board.create('point',[-2,-1],{name:'Vertex (-2,-1)',size:3,color:'#7c3aed',label:{autoPosition:false,offset:[8,0]}});
// Labels
board.create('text',[-5,5,'solution'],{fontSize:11,color:'#dc2626'});
board.create('text',[0.2,5,'solution'],{fontSize:11,color:'#dc2626'});
board.unsuspendUpdate();`
    }
  };

  // ─── q11c: -x^2 + 2x + 24 <= 0  =>  x <= -4 or x >= 6 ─────────────────
  // Red portions: left of x=-4 AND right of x=6
  const graph_11c = {
    jsxGraph: {
      width: 360, height: 280,
      boundingbox: [-7, 30, 9, -10],
      script: `board.suspendUpdate();
board.create('arrow',[[-7,0],[9,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-10],[0,30]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[8.5,-0.8,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,29,'y'],{fontSize:13,color:'#64748b'});
// Middle portion (not satisfying: above x-axis), light
board.create('functiongraph',[function(x){return -x*x+2*x+24;},-4,6],{strokeColor:'#c4b5fd',strokeWidth:1.5,dash:1});
// Red highlighted portions satisfying y <= 0: outside the roots
board.create('functiongraph',[function(x){return -x*x+2*x+24;},-6.5,-4],{strokeColor:'#ef4444',strokeWidth:3});
board.create('functiongraph',[function(x){return -x*x+2*x+24;},6,8.5],{strokeColor:'#ef4444',strokeWidth:3});
// x-intercept dots
board.create('point',[-4,0],{name:'(-4, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[-65,-15]}});
board.create('point',[6,0],{name:'(6, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[8,-15]}});
// Vertex
board.create('point',[1,25],{name:'Vertex (1,25)',size:3,color:'#7c3aed',label:{autoPosition:false,offset:[8,0]}});
// Labels
board.create('text',[-6,-6,'solution'],{fontSize:11,color:'#dc2626'});
board.create('text',[6.5,-6,'solution'],{fontSize:11,color:'#dc2626'});
board.unsuspendUpdate();`
    }
  };

  // Read current steps and replace only graphData in step 3 (index 2)
  const qIds = ['y10-7h-q11a', 'y10-7h-q11b', 'y10-7h-q11c'];
  const newGraphs = [graph_11a, graph_11b, graph_11c];

  for (let i = 0; i < qIds.length; i++) {
    const snap = await db.collection('questions').doc(qIds[i]).get();
    if (!snap.exists) continue;
    const data = snap.data();
    const steps = [...data.solutionSteps];
    // Step index 2 (3rd step) has the graph
    steps[2] = { ...steps[2], graphData: newGraphs[i] };
    await db.collection('questions').doc(qIds[i]).update({
      solutionSteps: steps,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent
  const pRef = db.collection('questions').doc('y10-7h-q11');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
      const idx = qIds.indexOf(sq.id);
      if (idx >= 0) {
        const steps = [...(sq.solutionSteps || [])];
        if (steps[2]) steps[2] = { ...steps[2], graphData: newGraphs[idx] };
        return { ...sq, solutionSteps: steps };
      }
      return sq;
    }));
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q11a, q11b, q11c graphs with red solution highlighting");
  process.exit(0);
}

run().catch(console.error);
