const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ─── q10a: y = 2x^2 - 4x - 6, Sketch graph ─────────────────────────────
  // Vertex: (1, -8), y-int: (0, -6), x-ints: (-1, 0) and (3, 0)
  // For sketch problem: highlight the curve nicely, mark all key points
  // The parabola is the full graph - no inequality, so just show it clearly
  // Make the portion between x-ints red so students see the "below axis" region clearly
  const graph_10a = {
    jsxGraph: {
      width: 360, height: 300,
      boundingbox: [-3, 6, 6, -12],
      script: `board.suspendUpdate();
board.create('arrow',[[-3,0],[6,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-12],[0,6]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[5.5,-0.4,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,5.5,'y'],{fontSize:13,color:'#64748b'});
// Portions above x-axis (outside roots) — light purple
board.create('functiongraph',[function(x){return 2*x*x-4*x-6;},-2.5,-1],{strokeColor:'#c4b5fd',strokeWidth:2});
board.create('functiongraph',[function(x){return 2*x*x-4*x-6;},3,5],{strokeColor:'#c4b5fd',strokeWidth:2});
// Portion below x-axis (between roots) — main color bold
board.create('functiongraph',[function(x){return 2*x*x-4*x-6;},-1,3],{strokeColor:'#6366f1',strokeWidth:3});
// Key points
board.create('point',[1,-8],{name:'Vertex (1, -8)',size:4,color:'#dc2626',label:{autoPosition:false,offset:[8,0]}});
board.create('point',[-1,0],{name:'(-1, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[-65,-15]}});
board.create('point',[3,0],{name:'(3, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[8,-15]}});
board.create('point',[0,-6],{name:'(0, -6)',size:4,color:'#22c55e',label:{autoPosition:false,offset:[8,0]}});
board.unsuspendUpdate();`
    }
  };

  // ─── q10b: 2x^2 - 4x - 6 < 0  =>  -1 < x < 3 ──────────────────────────
  // Red portion: between x=-1 and x=3 (parabola below x-axis = solution)
  const graph_10b = {
    jsxGraph: {
      width: 360, height: 300,
      boundingbox: [-3, 6, 6, -12],
      script: `board.suspendUpdate();
board.create('arrow',[[-3,0],[6,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-12],[0,6]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[5.5,-0.4,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,5.5,'y'],{fontSize:13,color:'#64748b'});
// Portions NOT satisfying (above x-axis, outside roots) — light dashed
board.create('functiongraph',[function(x){return 2*x*x-4*x-6;},-2.5,-1],{strokeColor:'#c4b5fd',strokeWidth:1.5,dash:1});
board.create('functiongraph',[function(x){return 2*x*x-4*x-6;},3,5],{strokeColor:'#c4b5fd',strokeWidth:1.5,dash:1});
// Solution region (below x-axis between roots) — RED BOLD
board.create('functiongraph',[function(x){return 2*x*x-4*x-6;},-1,3],{strokeColor:'#ef4444',strokeWidth:3});
// x-intercepts (boundary points)
board.create('point',[-1,0],{name:'(-1, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[-65,-15]}});
board.create('point',[3,0],{name:'(3, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[8,-15]}});
// Vertex
board.create('point',[1,-8],{name:'Vertex (1,-8)',size:3,color:'#dc2626',label:{autoPosition:false,offset:[8,8]}});
// Label
board.create('text',[1,-4,'← solution region →'],{fontSize:11,color:'#dc2626'});
board.unsuspendUpdate();`
    }
  };

  // ─── q11a: x^2 + 2x - 15 < 0  =>  -5 < x < 3 ──────────────────────────
  // (Already updated but re-apply with improved label)
  const graph_11a = {
    jsxGraph: {
      width: 360, height: 280,
      boundingbox: [-8, 12, 6, -20],
      script: `board.suspendUpdate();
board.create('arrow',[[-8,0],[6,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-20],[0,12]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[5.5,-0.5,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,11,'y'],{fontSize:13,color:'#64748b'});
// Portions NOT satisfying (above x-axis, outside roots) — light dashed
board.create('functiongraph',[function(x){return x*x+2*x-15;},-7,-5],{strokeColor:'#c4b5fd',strokeWidth:1.5,dash:1});
board.create('functiongraph',[function(x){return x*x+2*x-15;},3,5],{strokeColor:'#c4b5fd',strokeWidth:1.5,dash:1});
// Solution region (below x-axis between roots) — RED BOLD
board.create('functiongraph',[function(x){return x*x+2*x-15;},-5,3],{strokeColor:'#ef4444',strokeWidth:3});
// x-intercepts
board.create('point',[-5,0],{name:'(-5, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[-65,-15]}});
board.create('point',[3,0],{name:'(3, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[8,-15]}});
// Vertex
board.create('point',[-1,-16],{name:'Vertex (-1,-16)',size:3,color:'#dc2626',label:{autoPosition:false,offset:[8,8]}});
board.create('text',[-1,-10,'← solution region →'],{fontSize:11,color:'#dc2626'});
board.unsuspendUpdate();`
    }
  };

  // Update q10a step 5 (last step, index 5)
  const snap10a = await db.collection('questions').doc('y10-7h-q10a').get();
  const steps10a = [...snap10a.data().solutionSteps];
  steps10a[5] = { ...steps10a[5], graphData: graph_10a };
  await db.collection('questions').doc('y10-7h-q10a').update({
    solutionSteps: steps10a,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update q10b step 2 (index 2)
  const snap10b = await db.collection('questions').doc('y10-7h-q10b').get();
  const steps10b = [...snap10b.data().solutionSteps];
  steps10b[2] = { ...steps10b[2], graphData: graph_10b };
  await db.collection('questions').doc('y10-7h-q10b').update({
    solutionSteps: steps10b,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update q11a step 2 (index 2)
  const snap11a = await db.collection('questions').doc('y10-7h-q11a').get();
  const steps11a = [...snap11a.data().solutionSteps];
  steps11a[2] = { ...steps11a[2], graphData: graph_11a };
  await db.collection('questions').doc('y10-7h-q11a').update({
    solutionSteps: steps11a,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent y10-7h-q10
  const pRef10 = db.collection('questions').doc('y10-7h-q10');
  const pSnap10 = await pRef10.get();
  if (pSnap10.exists && pSnap10.data().subQuestions) {
    const newSubQs = pSnap10.data().subQuestions.map(sq => {
      if (sq.id === 'y10-7h-q10a' && sq.solutionSteps) {
        const steps = [...sq.solutionSteps];
        steps[5] = { ...steps[5], graphData: graph_10a };
        return { ...sq, solutionSteps: steps };
      }
      if (sq.id === 'y10-7h-q10b' && sq.solutionSteps) {
        const steps = [...sq.solutionSteps];
        steps[2] = { ...steps[2], graphData: graph_10b };
        return { ...sq, solutionSteps: steps };
      }
      return sq;
    });
    await pRef10.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  // Update parent y10-7h-q11
  const pRef11 = db.collection('questions').doc('y10-7h-q11');
  const pSnap11 = await pRef11.get();
  if (pSnap11.exists && pSnap11.data().subQuestions) {
    const newSubQs = pSnap11.data().subQuestions.map(sq => {
      if (sq.id === 'y10-7h-q11a' && sq.solutionSteps) {
        const steps = [...sq.solutionSteps];
        steps[2] = { ...steps[2], graphData: graph_11a };
        return { ...sq, solutionSteps: steps };
      }
      return sq;
    });
    await pRef11.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Applied red highlight to q10a, q10b, q11a");
  process.exit(0);
}

run().catch(console.error);
