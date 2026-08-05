const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Clean graph script showing only the quadrilateral ABCD
  const graphScript = `board.suspendUpdate();
var pA = board.create('point', [2, 3], {size: 3, color: 'black', name: 'A(2, 3)', withLabel: true, label: {autoPosition: true}});
var pB = board.create('point', [4, 6], {size: 3, color: 'black', name: 'B(4, 6)', withLabel: true, label: {autoPosition: true}});
var pC = board.create('point', [8, 0], {size: 3, color: 'black', name: 'C(8, 0)', withLabel: true, label: {autoPosition: true}});
var pD = board.create('point', [6, -3], {size: 3, color: 'black', name: 'D(6, -3)', withLabel: true, label: {autoPosition: true}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: '#bfdbfe', fillOpacity: 0.1, borders: {strokeColor: 'black', strokeWidth: 1.5}});
board.unsuspendUpdate();`;

  const solutionGraphScript = `board.suspendUpdate();
var pA = board.create('point', [2, 3], {size: 3, color: 'black', name: 'A(2, 3)', withLabel: true, label: {autoPosition: true}});
var pB = board.create('point', [4, 6], {size: 3, color: 'black', name: 'B(4, 6)', withLabel: true, label: {autoPosition: true}});
var pC = board.create('point', [8, 0], {size: 3, color: 'black', name: 'C(8, 0)', withLabel: true, label: {autoPosition: true}});
var pD = board.create('point', [6, -3], {size: 3, color: 'black', name: 'D(6, -3)', withLabel: true, label: {autoPosition: true}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});
var pM = board.create('point', [3, 4.5], {size: 3, color: 'blue', name: 'M(3, 4.5)', withLabel: true, label: {autoPosition: true}});
var pN = board.create('point', [6, 3], {size: 3, color: 'blue', name: 'N(6, 3)', withLabel: true, label: {autoPosition: true}});
var pP = board.create('point', [7, -1.5], {size: 3, color: 'blue', name: 'P(7, -1.5)', withLabel: true, label: {autoPosition: true}});
var pQ = board.create('point', [4, 0], {size: 3, color: 'blue', name: 'Q(4, 0)', withLabel: true, label: {autoPosition: true}});
board.create('polygon', [pM, pN, pP, pQ], {fillColor: '#bfdbfe', fillOpacity: 0.3, borders: {strokeColor: 'blue', strokeWidth: 1.5}});
board.unsuspendUpdate();`;

  const baseGraphData = {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 8, 10, -5],
      showConstructionPoints: true,
      boardOptions: { axis: true, grid: true },
      script: graphScript
    }
  };

  const solutionGraphData = {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 8, 10, -5],
      showConstructionPoints: true,
      boardOptions: { axis: true, grid: true },
      script: solutionGraphScript
    }
  };

  // Update parent question y9-11g-q9
  batch.update(db.collection('questions').doc('y9-11g-q9'), {
    graphData: baseGraphData,
    solution: "a) Midpoint \\(M\\) of \\(AB\\): \\((3, 4.5)\\).\n\nb) Midpoint \\(N\\) of \\(BC\\): \\((6, 3)\\).\n\nc) Gradient \\(MN\\): \\(m = -0.5\\).\n\nd) Midpoints \\(P\\) of \\(CD\\) and \\(Q\\) of \\(DA\\):\n   - \\(P = (7, -1.5)\\)\n   - \\(Q = (4, 0)\\)\n   - Gradient \\(PQ\\): \\(-0.5\\).\n\ne) Since \\(m_{MN} = m_{PQ} = -0.5\\), the intervals \\(MN\\) and \\(PQ\\) are parallel.\n\nf) Gradients of \\(QM\\) and \\(PN\\):\n   - \\(m_{QM} = -4.5\\)\n   - \\(m_{PN} = -4.5\\).\n\ng) Since opposite sides are parallel, \\(MNPQ\\) is a parallelogram.",
    updatedAt: FieldValue.serverTimestamp()
  });

  const updateQ = (id, options, answerIdx, steps, hint) => {
    batch.update(db.collection('questions').doc(id), {
      type: 'multiple_choice',
      options: options.map(opt => ({ text: opt, imageUrl: '' })),
      answer: answerIdx.toString(),
      solutionSteps: steps,
      graphData: baseGraphData,
      hint: hint,
      updatedAt: FieldValue.serverTimestamp()
    });
  };

  // 9a
  updateQ('y9-11g-q9a', [
    '\\((3, 4.5)\\)',
    '\\((3, 3.5)\\)',
    '\\((2.5, 4.5)\\)',
    '\\((6, 9)\\)'
  ], 0, [
    {
      explanation: '선분 \\(AB\\)의 양 끝점인 \\(A(2, 3)\\)과 \\(B(4, 6)\\)의 좌표를 확인하고, 중점 공식 \\(M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)\\)을 사용할 준비를 합니다.',
      workingOut: 'A(2, 3), \\quad B(4, 6)',
      graphData: null
    },
    {
      explanation: '공식에 두 점의 좌표값을 대입하여 평균을 구하는 식을 세웁니다.',
      workingOut: 'M = \\left(\\frac{2+4}{2}, \\frac{3+6}{2}\\right)',
      graphData: null
    },
    {
      explanation: '분수 식을 단순화하여 최종 좌표값을 구합니다.',
      workingOut: 'M = \\left(\\frac{6}{2}, \\frac{9}{2}\\right) = (3, 4.5)',
      graphData: null
    },
    {
      explanation: '따라서 중점 \\(M\\)의 좌표는 \\((3, 4.5)\\)입니다.',
      workingOut: '(3, 4.5)',
      graphData: null
    }
  ], '두 점의 x좌표 평균과 y좌표 평균을 계산합니다.');

  // 9b
  updateQ('y9-11g-q9b', [
    '\\((6, 3)\\)',
    '\\((5, 3)\\)',
    '\\((6, 4)\\)',
    '\\((12, 6)\\)'
  ], 0, [
    {
      explanation: '선분 \\(BC\\)의 양 끝점인 \\(B(4, 6)\\)과 \\(C(8, 0)\\)의 좌표를 확인하고, 중점 공식 \\(N = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)\\)을 준비합니다.',
      workingOut: 'B(4, 6), \\quad C(8, 0)',
      graphData: null
    },
    {
      explanation: '공식에 두 점의 좌표를 대입하여 계산식을 세웁니다.',
      workingOut: 'N = \\left(\\frac{4+8}{2}, \\frac{6+0}{2}\\right)',
      graphData: null
    },
    {
      explanation: '식을 단순화하여 중점 \\(N\\)의 좌표를 최종적으로 얻습니다.',
      workingOut: 'N = \\left(\\frac{12}{2}, \\frac{6}{2}\\right) = (6, 3)',
      graphData: null
    },
    {
      explanation: '따라서 중점 \\(N\\)의 좌표는 \\((6, 3)\\)입니다.',
      workingOut: '(6, 3)',
      graphData: null
    }
  ], 'B와 C의 좌표의 평균을 구합니다.');

  // 9c
  updateQ('y9-11g-q9c', [
    '\\(-\\dfrac{1}{2}\\)',
    '\\(\\dfrac{1}{2}\\)',
    '\\(-2\\)',
    '\\(2\\)'
  ], 0, [
    {
      explanation: '이전 문항에서 구한 두 점 \\(M(3, 4.5)\\)와 \\(N(6, 3)\\)의 좌표를 확인하고, 기울기 공식 \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\)을 떠올립니다.',
      workingOut: 'M(3, 4.5), \\quad N(6, 3)',
      graphData: null
    },
    {
      explanation: '공식에 각 좌표값을 대입하여 기울기 계산식을 세웁니다.',
      workingOut: 'm = \\frac{3 - 4.5}{6 - 3}',
      graphData: null
    },
    {
      explanation: '분자와 분모를 각각 단순화하여 기울기를 구합니다.',
      workingOut: 'm = \\frac{-1.5}{3} = -0.5 = -\\frac{1}{2}',
      graphData: null
    },
    {
      explanation: '따라서 기울기는 \\(-\\dfrac{1}{2}\\)입니다.',
      workingOut: '-\\frac{1}{2}',
      graphData: null
    }
  ], '기울기 공식 (y2 - y1)/(x2 - x1)을 사용하여 계산합니다.');

  // 9d
  updateQ('y9-11g-q9d', [
    '\\(-\\dfrac{1}{2}\\)',
    '\\(\\dfrac{1}{2}\\)',
    '\\(-2\\)',
    '\\(2\\)'
  ], 0, [
    {
      explanation: '먼저 선분 \\(CD\\)의 중점 \\(P\\)와 선분 \\(DA\\)의 중점 \\(Q\\)의 좌표를 각각 계산합니다.',
      workingOut: 'P = \\left(\\frac{8+6}{2}, \\frac{0-3}{2}\\right) = (7, -1.5), \\quad Q = \\left(\\frac{6+2}{2}, \\frac{-3+3}{2}\\right) = (4, 0)',
      graphData: null
    },
    {
      explanation: '두 점 \\(P(7, -1.5)\\)와 \\(Q(4, 0)\\)의 기울기 공식을 세웁니다.',
      workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{0 - (-1.5)}{4 - 7}',
      graphData: null
    },
    {
      explanation: '공식을 단순화하여 선분 \\(PQ\\)의 기울기를 얻습니다.',
      workingOut: 'm = \\frac{1.5}{-3} = -0.5 = -\\frac{1}{2}',
      graphData: null
    },
    {
      explanation: '따라서 기울기는 \\(-\\dfrac{1}{2}\\)입니다.',
      workingOut: '-\\frac{1}{2}',
      graphData: null
    }
  ], 'P와 Q의 좌표를 구한 다음, 두 점의 기울기를 계산합니다.');

  // 9e
  updateQ('y9-11g-q9e', [
    'They are parallel',
    'They are perpendicular',
    'They intersect but are not parallel',
    'They are the same line'
  ], 0, [
    {
      explanation: '앞에서 구한 두 선분의 기울기를 확인합니다.',
      workingOut: 'm_{MN} = -0.5, \\quad m_{PQ} = -0.5',
      graphData: null
    },
    {
      explanation: '기울기가 서로 같으면 두 선분은 평행하다는 규칙을 적용합니다.',
      workingOut: 'm_{MN} = m_{PQ} \\implies MN \\parallel PQ',
      graphData: null
    },
    {
      explanation: '따라서 두 선분은 서로 평행(parallel)하다는 결론을 내릴 수 있습니다.',
      workingOut: '\\text{They are parallel}',
      graphData: null
    }
  ], '두 선분의 기울기 값을 비교해 봅니다.');

  // 9f
  updateQ('y9-11g-q9f', [
    '\\(-4.5\\) and \\(-4.5\\)',
    '\\(4.5\\) and \\(4.5\\)',
    '\\(-4.5\\) and \\(4.5\\)',
    '\\(-\\dfrac{2}{9}\\) and \\(-\\dfrac{2}{9}\\)'
  ], 0, [
    {
      explanation: '각 점의 좌표를 다시 정리합니다.',
      workingOut: 'Q(4, 0), \\ M(3, 4.5), \\ P(7, -1.5), \\ N(6, 3)',
      graphData: null
    },
    {
      explanation: '선분 \\(QM\\)의 기울기를 기울기 공식에 의해 구합니다.',
      workingOut: 'm_{QM} = \\frac{4.5 - 0}{3 - 4} = \\frac{4.5}{-1} = -4.5',
      graphData: null
    },
    {
      explanation: '선분 \\(PN\\)의 기울기를 마찬가지로 구합니다.',
      workingOut: 'm_{PN} = \\frac{3 - (-1.5)}{6 - 7} = \\frac{4.5}{-1} = -4.5',
      graphData: null
    },
    {
      explanation: '두 선분의 기울기는 각각 \\(-4.5\\)와 \\(-4.5\\)입니다.',
      workingOut: '-4.5 \\text{ and } -4.5',
      graphData: null
    }
  ], '각 점의 좌표를 구하고 기울기 공식을 적용합니다.');

  // 9g
  updateQ('y9-11g-q9g', [
    'Parallelogram',
    'Rectangle',
    'Rhombus',
    'Trapezium'
  ], 0, [
    {
      explanation: '사각형 \\(MNPQ\\)에서 마주보는 한 쌍의 대변 \\(MN\\)과 \\(PQ\\)의 평행 여부를 확인합니다.',
      workingOut: 'm_{MN} = m_{PQ} = -0.5 \\implies MN \\parallel PQ',
      graphData: null
    },
    {
      explanation: '마주보는 다른 한 쌍의 대변 \\(QM\\)과 \\(PN\\)의 평행 여부를 확인합니다.',
      workingOut: 'm_{QM} = m_{PN} = -4.5 \\implies QM \\parallel PN',
      graphData: null
    },
    {
      explanation: '두 쌍의 대변이 각각 평행하므로 평행사변형의 정의를 충족합니다.',
      workingOut: '\\text{MNPQ is a parallelogram}',
      graphData: solutionGraphData
    },
    {
      explanation: '따라서 정답은 평행사변형(Parallelogram)입니다.',
      workingOut: '\\text{Parallelogram}',
      graphData: null
    }
  ], '마주보는 두 쌍의 변이 각각 평행한지 확인합니다.');

  await batch.commit();
  console.log("Updated q9 graph, options, and steps successfully to database.");
  process.exit(0);
}

run().catch(console.error);
