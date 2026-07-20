import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

/**
 * Year 7 Chapter 4A  Q1 ~ Q10
 * 변환 규칙:
 *  - interactive_grid → multiple_choice
 *  - solution(HTML) → solutionSteps 배열
 *  - options → opts  /  answer → a  (0-indexed 정수)
 *  - 정답 위치 분산: Q1→2, Q2→1, Q3→0, Q4→3, Q5→1, Q6→2, Q7→0, Q8→3, Q9→1, Q10→2
 *  - LaTeX: \\( ... \\) 인라인, $ 사용 금지
 *  - isNew: true
 */

const convertedQuestions = [

  // Q1 — 정답 index 2
  {
    id: "y7-4a-q01",
    chapterId: "y7-4",
    topicId: "y7-4a",
    topicCode: "4A",
    topicTitle: "What is a fraction?",
    year: "Year 7",
    type: "multiple_choice",
    difficulty: "easy",
    isManual: true,
    isActive: true,
    isNew: true,
    topic: "Fractions on a number line",
    question: "Where are the points \\(A = \\dfrac{3}{5}\\), \\(B = \\dfrac{9}{5}\\), and \\(C = \\dfrac{15}{5}\\) located on a number line?",
    opts: [
      "\\(A\\) is between \\(1\\) and \\(2\\); \\(B\\) is between \\(2\\) and \\(3\\); \\(C\\) is exactly at \\(5\\).",
      "\\(A\\) is exactly at \\(1\\); \\(B\\) is between \\(1\\) and \\(2\\); \\(C\\) is between \\(2\\) and \\(3\\).",
      "\\(A\\) is between \\(0\\) and \\(1\\); \\(B\\) is between \\(1\\) and \\(2\\); \\(C\\) is exactly at \\(3\\).",
      "\\(A\\) is between \\(0\\) and \\(1\\); \\(B\\) is exactly at \\(2\\); \\(C\\) is between \\(3\\) and \\(4\\)."
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "이 문제에서 주어진 것은 분자가 각각 3, 9, 15이고 분모가 모두 5인 세 분수입니다. 각 분수가 수직선의 어느 두 정수 사이에 위치하는지 알아내야 합니다. 이를 위해 각 분수를 대분수(혼합수)로 변환하는 전략을 사용합니다. 분수를 대분수로 바꾸면 정수 부분이 바로 그 분수가 속한 구간을 알려주기 때문입니다.",
        workingOut: "\\(\\dfrac{3}{5},\\; \\dfrac{9}{5},\\; \\dfrac{15}{5} \\;\\Rightarrow\\; \\text{각각 5로 나눠 대분수로 변환}\\)",
        graphData: null
      },
      {
        explanation: "첫 번째 분수 A = 3/5를 변환합니다. 3을 5로 나누면 몫이 0이고 나머지가 3이므로, 3/5 = 0과 3/5입니다. 정수 부분이 0이므로 A는 0과 1 사이에 위치합니다. 흔한 실수: 분자가 분모보다 작으면 무조건 '0에 가깝다'고 생각하기 쉽지만, 0과 1 사이에는 무수히 많은 분수가 있으므로 정확한 위치를 확인해야 합니다. 이 결과는 다음 단계에서 B와 C의 위치를 찾는 기준이 됩니다.",
        workingOut: "\\(A = \\dfrac{3}{5} = 0\\tfrac{3}{5} \\;\\Rightarrow\\; 0 < A < 1\\)",
        graphData: null
      },
      {
        explanation: "두 번째 분수 B = 9/5를 변환합니다. 9를 5로 나누면 몫이 1이고 나머지가 4이므로, 9/5 = 1과 4/5입니다. 정수 부분이 1이므로 B는 1과 2 사이에 위치합니다. 이 단계에서 흔한 실수는 나머지 4가 분자보다 크다는 이유로 값을 잘못 판단하는 것인데, 대분수는 몫과 나머지/분모로만 구성됩니다.",
        workingOut: "\\(B = \\dfrac{9}{5} = 1\\tfrac{4}{5} \\;\\Rightarrow\\; 1 < B < 2\\)",
        graphData: null
      },
      {
        explanation: "세 번째 분수 C = 15/5를 변환합니다. 15를 5로 나누면 몫이 3이고 나머지가 0이므로, 15/5 = 3입니다. 나머지가 0이라는 것은 분수가 정확히 정수와 같음을 뜻하므로, C는 수직선에서 3에 정확히 위치합니다. 이 결과가 마지막 단계에서 선택지를 판별하는 핵심 근거가 됩니다.",
        workingOut: "\\(C = \\dfrac{15}{5} = 3 \\;\\Rightarrow\\; C\\text{는 정수 3에 정확히 위치}\\)",
        graphData: null
      },
      {
        explanation: "세 분수의 위치를 종합합니다. A는 0과 1 사이, B는 1과 2 사이, C는 정수 3에 정확히 위치합니다. 이 조건과 일치하는 선택지는 C번(index 2)입니다. A번은 C가 5에 위치한다고 잘못 기술하고, B번은 A가 정수 1이라고 틀리게 기술합니다. D번은 B가 정수 2라고 잘못 주장합니다.",
        workingOut: "\\(A \\in (0,1),\\; B \\in (1,2),\\; C = 3 \\;\\Rightarrow\\; \\text{정답: C번 (index 2)}\\)",
        graphData: null
      }
    ],
    createdAt: new Date().toISOString()
  },

  // Q2 — 정답 index 1
  {
    id: "y7-4a-q02",
    chapterId: "y7-4",
    topicId: "y7-4a",
    topicCode: "4A",
    topicTitle: "What is a fraction?",
    year: "Year 7",
    type: "multiple_choice",
    difficulty: "medium",
    isManual: true,
    isActive: true,
    isNew: true,
    topic: "Fractions on a number line",
    question: "Which list correctly identifies the integers that the fractions \\(\\dfrac{2}{7}\\), \\(\\dfrac{11}{7}\\), and \\(\\dfrac{20}{7}\\) lie between?",
    opts: [
      "Between \\(1\\) and \\(2\\), between \\(2\\) and \\(3\\), between \\(3\\) and \\(4\\)",
      "Between \\(0\\) and \\(1\\), between \\(1\\) and \\(2\\), between \\(2\\) and \\(3\\)",
      "Between \\(0\\) and \\(1\\), between \\(1\\) and \\(2\\), between \\(3\\) and \\(4\\)",
      "Between \\(0\\) and \\(1\\), between \\(2\\) and \\(3\\), between \\(3\\) and \\(4\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "이 문제에서 주어진 세 분수는 분모가 모두 7입니다. 각 분수가 어느 두 정수 사이에 위치하는지 알아내려면, 각 분수를 분모 7로 나누어 대분수로 변환하는 전략을 사용합니다. 정수 부분이 해당 분수의 구간을 직접 알려주므로, 이 방법이 가장 빠릅니다.",
        workingOut: "\\(\\dfrac{2}{7},\\; \\dfrac{11}{7},\\; \\dfrac{20}{7} \\;\\Rightarrow\\; \\text{각각 7로 나눠 대분수로 변환}\\)",
        graphData: null
      },
      {
        explanation: "첫 번째 분수 2/7을 변환합니다. 2를 7로 나누면 몫이 0이고 나머지가 2이므로 2/7 = 0과 2/7입니다. 정수 부분이 0이므로, 2/7은 0과 1 사이에 위치합니다. 흔한 실수: 분자 2가 7의 약수가 아니라고 나누기를 포기하는 경우가 있는데, 분수의 구간을 판단할 때는 정수 몫만 보면 됩니다.",
        workingOut: "\\(\\dfrac{2}{7} = 0\\tfrac{2}{7} \\;\\Rightarrow\\; 0 < \\dfrac{2}{7} < 1\\)",
        graphData: null
      },
      {
        explanation: "두 번째 분수 11/7을 변환합니다. 11을 7로 나누면 몫이 1이고 나머지가 4이므로 11/7 = 1과 4/7입니다. 정수 부분이 1이므로, 11/7은 1과 2 사이에 위치합니다. 이는 11/7이 가분수임을 대분수로 확인한 것입니다.",
        workingOut: "\\(\\dfrac{11}{7} = 1\\tfrac{4}{7} \\;\\Rightarrow\\; 1 < \\dfrac{11}{7} < 2\\)",
        graphData: null
      },
      {
        explanation: "세 번째 분수 20/7을 변환합니다. 20을 7로 나누면 몫이 2이고 나머지가 6이므로 20/7 = 2와 6/7입니다. 정수 부분이 2이므로, 20/7은 2와 3 사이에 위치합니다. 나머지가 6으로 7에 가깝기 때문에 3에 가깝지만, 아직 3을 넘지 않습니다.",
        workingOut: "\\(\\dfrac{20}{7} = 2\\tfrac{6}{7} \\;\\Rightarrow\\; 2 < \\dfrac{20}{7} < 3\\)",
        graphData: null
      },
      {
        explanation: "세 분수의 위치를 종합하면, 2/7은 0과 1 사이, 11/7은 1과 2 사이, 20/7은 2와 3 사이입니다. 이 모든 조건을 동시에 만족하는 선택지는 B번(index 1)입니다. A번은 첫 번째 분수의 구간을 1~2로 잘못 표기하였고, C번은 세 번째 구간을 3~4로 잘못 표기하였습니다.",
        workingOut: "\\(\\dfrac{2}{7} \\in (0,1),\\; \\dfrac{11}{7} \\in (1,2),\\; \\dfrac{20}{7} \\in (2,3) \\;\\Rightarrow\\; \\text{정답: B번 (index 1)}\\)",
        graphData: null
      }
    ],
    createdAt: new Date().toISOString()
  },

  // Q3 — 정답 index 0
  {
    id: "y7-4a-q03",
    chapterId: "y7-4",
    topicId: "y7-4a",
    topicCode: "4A",
    topicTitle: "What is a fraction?",
    year: "Year 7",
    type: "multiple_choice",
    difficulty: "easy",
    isManual: true,
    isActive: true,
    isNew: true,
    topic: "Proper vs improper fractions",
    question: "Consider the fractions \\(\\dfrac{5}{9}\\), \\(\\dfrac{8}{9}\\), and \\(\\dfrac{13}{9}\\). Which of these fractions is greater than \\(1\\)?",
    opts: [
      "Only \\(\\dfrac{13}{9}\\)",
      "\\(\\dfrac{8}{9}\\) and \\(\\dfrac{13}{9}\\)",
      "All of them",
      "None of them"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "이 문제에서 주어진 세 분수는 분모가 모두 9입니다. 분수가 1보다 큰지 판별하기 위해 분자와 분모를 비교하는 규칙을 사용합니다. 규칙: 분자가 분모보다 크면 그 분수는 1보다 크고(가분수), 분자가 분모보다 작으면 1보다 작습니다(진분수). 이 규칙을 세 분수 각각에 적용하는 것이 풀이 전략입니다.",
        workingOut: "\\(\\dfrac{5}{9},\\; \\dfrac{8}{9},\\; \\dfrac{13}{9} \\;\\Rightarrow\\; \\text{분자와 분모(9)를 비교}\\)",
        graphData: null
      },
      {
        explanation: "첫 번째 분수 5/9를 검토합니다. 분자 5는 분모 9보다 작습니다. 따라서 5/9는 1보다 작은 진분수입니다. 1보다 크려면 분자가 분모와 같거나 커야 하는데, 5는 그렇지 않습니다.",
        workingOut: "\\(5 < 9 \\;\\Rightarrow\\; \\dfrac{5}{9} < 1\\)",
        graphData: null
      },
      {
        explanation: "두 번째 분수 8/9를 검토합니다. 분자 8은 분모 9보다 작습니다. 따라서 8/9도 1보다 작은 진분수입니다. 흔한 실수: 8이 9에 매우 가깝기 때문에 '거의 1이니까 1보다 크다'고 잘못 판단할 수 있습니다. 하지만 8이 9보다 작으므로 8/9는 반드시 1보다 작습니다.",
        workingOut: "\\(8 < 9 \\;\\Rightarrow\\; \\dfrac{8}{9} < 1\\)",
        graphData: null
      },
      {
        explanation: "세 번째 분수 13/9를 검토합니다. 분자 13은 분모 9보다 큽니다. 따라서 13/9는 1보다 큰 가분수입니다. 대분수로 변환하면 13을 9로 나누면 몫 1 나머지 4이므로 13/9 = 1과 4/9이며, 분명히 1을 초과합니다.",
        workingOut: "\\(13 > 9 \\;\\Rightarrow\\; \\dfrac{13}{9} > 1 \\quad\\left(= 1\\tfrac{4}{9}\\right)\\)",
        graphData: null
      },
      {
        explanation: "세 분수를 모두 검토한 결과, 1보다 큰 분수는 13/9 하나뿐입니다. 5/9와 8/9는 모두 분자가 분모보다 작으므로 1보다 작습니다. 따라서 정답은 A번(index 0) '오직 13/9만'이며, 이 답이 문제에서 요구한 조건을 정확히 만족합니다.",
        workingOut: "\\(\\dfrac{5}{9} < 1,\\; \\dfrac{8}{9} < 1,\\; \\dfrac{13}{9} > 1 \\;\\Rightarrow\\; \\text{정답: A번 (index 0)}\\)",
        graphData: null
      }
    ],
    createdAt: new Date().toISOString()
  },

  // Q4 — 정답 index 3
  {
    id: "y7-4a-q04",
    chapterId: "y7-4",
    topicId: "y7-4a",
    topicCode: "4A",
    topicTitle: "What is a fraction?",
    year: "Year 7",
    type: "multiple_choice",
    difficulty: "medium",
    isManual: true,
    isActive: true,
    isNew: true,
    topic: "Mixed numbers and improper fractions",
    question: "A number line is marked with whole numbers (\\(0, 1, 2, \\dots\\)). The space between each whole number is divided into \\(4\\) equal parts. A star is placed on the \\(3\\)rd tick mark after the number \\(5\\). What fraction represents the star?",
    opts: [
      "\\(\\dfrac{15}{4}\\)",
      "\\(\\dfrac{21}{4}\\)",
      "\\(\\dfrac{53}{4}\\)",
      "\\(\\dfrac{23}{4}\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "이 문제에서 주어진 정보는 수직선이 각 정수 사이를 4등분한다는 것과, 별표가 숫자 5 오른쪽 3번째 눈금에 있다는 것입니다. 구해야 할 것은 그 위치를 나타내는 가분수입니다. 풀이 전략은 먼저 혼합수로 위치를 파악한 다음 가분수로 변환하는 것입니다.",
        workingOut: "\\(\\text{분모} = 4,\\; \\text{기준 정수} = 5,\\; \\text{눈금 수} = 3\\)",
        graphData: null
      },
      {
        explanation: "각 정수 사이가 4등분되므로, 각 눈금 하나는 1/4을 나타냅니다. 별표는 5에서 3번째 눈금에 있으므로, 5에서 3/4만큼 오른쪽으로 이동한 위치입니다. 이 위치를 혼합수로 표현하면 5와 3/4입니다. 흔한 실수: 3번째 눈금을 3/4이 아닌 3으로 잘못 해석하는 경우가 있습니다. 분모는 항상 등분의 수(4)임을 기억하세요.",
        workingOut: "\\(\\text{별표 위치} = 5\\tfrac{3}{4}\\)",
        graphData: null
      },
      {
        explanation: "혼합수 5와 3/4를 가분수로 변환합니다. 공식: 정수 곱하기 분모 더하기 분자. 5 곱하기 4 더하기 3 = 20 더하기 3 = 23이므로 가분수는 23/4입니다. 흔한 실수: 5 곱하기 4 = 20에서 분자 3을 더하지 않고 20/4로 계산하는 경우가 있습니다.",
        workingOut: "\\(5 \\times 4 + 3 = 20 + 3 = 23 \\;\\Rightarrow\\; \\dfrac{23}{4}\\)",
        graphData: null
      },
      {
        explanation: "검산: 23/4를 다시 대분수로 변환하면 23을 4로 나누면 몫 5 나머지 3이므로 5와 3/4입니다. 이는 출발점 5에서 4등분 눈금 3칸 오른쪽에 해당하므로 원래 조건과 정확히 일치합니다. 오답 비교: 21/4 = 5와 1/4(1번째 눈금), 15/4 = 3과 3/4(숫자 3 이후 3번째 눈금)으로 조건에 맞지 않습니다. 정답은 D번(index 3)입니다.",
        workingOut: "\\(\\dfrac{23}{4} = 5\\tfrac{3}{4} \\;\\checkmark \\;\\Rightarrow\\; \\text{정답: D번 (index 3)}\\)",
        graphData: null
      }
    ],
    createdAt: new Date().toISOString()
  },

  // Q5 — 정답 index 1
  {
    id: "y7-4a-q05",
    chapterId: "y7-4",
    topicId: "y7-4a",
    topicCode: "4A",
    topicTitle: "What is a fraction?",
    year: "Year 7",
    type: "multiple_choice",
    difficulty: "medium",
    isManual: true,
    isActive: true,
    isNew: true,
    topic: "Mixed numbers and improper fractions",
    question: "A number line is divided into thirds (3 equal spaces between each whole number). A triangle is placed on the \\(1\\)st tick mark after the number \\(8\\). What fraction represents the triangle?",
    opts: [
      "\\(\\dfrac{8}{3}\\)",
      "\\(\\dfrac{25}{3}\\)",
      "\\(\\dfrac{11}{3}\\)",
      "\\(\\dfrac{23}{3}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "이 문제에서 주어진 정보는 수직선이 각 정수 사이를 3등분한다는 것과, 삼각형이 숫자 8 오른쪽 1번째 눈금에 있다는 것입니다. 풀이 전략: 먼저 삼각형의 위치를 혼합수로 나타내고, 그 혼합수를 가분수로 변환합니다.",
        workingOut: "\\(\\text{분모} = 3,\\; \\text{기준 정수} = 8,\\; \\text{눈금 수} = 1\\)",
        graphData: null
      },
      {
        explanation: "각 정수 사이가 3등분되므로 각 눈금 하나는 1/3을 나타냅니다. 삼각형은 8에서 1번째 눈금에 있으므로 8에서 1/3만큼 오른쪽입니다. 혼합수로 표현하면 8과 1/3입니다. 흔한 실수: 1번째 눈금을 1 전체로 해석하여 9로 잘못 계산하는 경우가 있습니다. 눈금의 수를 분자로, 등분 수를 분모로 사용해야 합니다.",
        workingOut: "\\(\\text{삼각형 위치} = 8\\tfrac{1}{3}\\)",
        graphData: null
      },
      {
        explanation: "혼합수 8과 1/3를 가분수로 변환합니다. 공식: 정수 곱하기 분모 더하기 분자. 8 곱하기 3 더하기 1 = 24 더하기 1 = 25이므로 가분수는 25/3입니다. 흔한 실수: 8 곱하기 3 = 24에서 나머지 1을 빠트려 24/3(= 8)로 계산하는 경우가 있습니다. 반드시 분자를 더해야 합니다.",
        workingOut: "\\(8 \\times 3 + 1 = 24 + 1 = 25 \\;\\Rightarrow\\; \\dfrac{25}{3}\\)",
        graphData: null
      },
      {
        explanation: "검산 및 오답 분석: 25/3를 다시 대분수로 변환하면 25를 3으로 나누면 몫 8 나머지 1이므로 8과 1/3이 되어 원래 조건과 일치합니다. 오답 비교: 8/3 = 2와 2/3, 11/3 = 3과 2/3, 23/3 = 7과 2/3으로 모두 조건에 맞지 않습니다. 정답은 B번(index 1)입니다.",
        workingOut: "\\(\\dfrac{25}{3} = 8\\tfrac{1}{3} \\;\\checkmark \\;\\Rightarrow\\; \\text{정답: B번 (index 1)}\\)",
        graphData: null
      }
    ],
    createdAt: new Date().toISOString()
  },

  // Q6 — 원본: interactive_grid (4x4, 1/4) → MCQ / 정답 index 2
  {
    id: "y7-4a-q06",
    chapterId: "y7-4",
    topicId: "y7-4a",
    topicCode: "4A",
    topicTitle: "What is a fraction?",
    year: "Year 7",
    type: "multiple_choice",
    difficulty: "medium",
    isManual: true,
    isActive: true,
    isNew: true,
    topic: "Fractions of a whole — grid model",
    question: "A square is divided into a \\(4 \\times 4\\) grid of \\(16\\) equal smaller squares. How many of the small squares must be shaded to represent \\(\\dfrac{1}{4}\\) of the total area?",
    opts: [
      "\\(2\\) squares",
      "\\(8\\) squares",
      "\\(4\\) squares",
      "\\(1\\) square"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "이 문제에서 주어진 것은 4 곱하기 4 격자(총 16칸)이며, 전체 넓이의 1/4에 해당하는 칸 수를 구해야 합니다. 분수에서 분모는 전체를 몇 등분하는가를, 분자는 그 중 몇 개를 선택하는가를 나타냅니다. 따라서 풀이 전략은 '전체 칸 수 곱하기 분수'로 필요한 칸 수를 계산하는 것입니다.",
        workingOut: "\\(\\text{전체 칸 수} = 4 \\times 4 = 16\\)",
        graphData: null
      },
      {
        explanation: "전체 16칸의 1/4을 계산합니다. 16을 4로 나누면 4입니다. 즉, 16칸 중 4칸을 칠해야 전체 넓이의 1/4이 됩니다. 흔한 실수: 분모 4와 격자의 한 변 크기가 같아 우연히 같은 결과가 나오지만, 다른 분수에서는 반드시 계산을 직접 해야 합니다. 이 계산 결과가 선택지 확인의 근거가 됩니다.",
        workingOut: "\\(\\dfrac{1}{4} \\times 16 = \\dfrac{16}{4} = 4\\)",
        graphData: null
      },
      {
        explanation: "검산: 4칸이 전체 16칸 중 차지하는 비율을 분수로 쓰면 4/16이고, 이를 최대공약수 4로 약분하면 1/4입니다. 이는 문제에서 요구한 분수와 정확히 일치합니다. 오답 분석: 2칸은 2/16 = 1/8, 8칸은 8/16 = 1/2, 1칸은 1/16을 나타냅니다. 정답은 C번(index 2)입니다.",
        workingOut: "\\(\\dfrac{4}{16} = \\dfrac{1}{4} \\;\\checkmark \\;\\Rightarrow\\; \\text{정답: C번 (index 2)}\\)",
        graphData: null
      }
    ],
    createdAt: new Date().toISOString()
  },

  // Q7 — 원본: interactive_grid (4x4, 3/8) → MCQ / 정답 index 0
  {
    id: "y7-4a-q07",
    chapterId: "y7-4",
    topicId: "y7-4a",
    topicCode: "4A",
    topicTitle: "What is a fraction?",
    year: "Year 7",
    type: "multiple_choice",
    difficulty: "medium",
    isManual: true,
    isActive: true,
    isNew: true,
    topic: "Equivalent fractions — grid model",
    question: "A \\(4 \\times 4\\) grid has \\(16\\) equal squares. How many squares must be shaded to represent \\(\\dfrac{3}{8}\\) of the grid?",
    opts: [
      "\\(6\\) squares",
      "\\(3\\) squares",
      "\\(8\\) squares",
      "\\(4\\) squares"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "이 문제에서 주어진 것은 16칸 격자와 분수 3/8입니다. 3/8의 분모 8은 16의 약수이므로, 3/8을 분모가 16인 동치분수로 변환하면 직접 칸 수를 얻을 수 있습니다. 이것이 가장 깔끔한 풀이 전략입니다.",
        workingOut: "\\(\\text{전체 칸 수} = 16,\\; \\text{목표 분수} = \\dfrac{3}{8}\\)",
        graphData: null
      },
      {
        explanation: "분모 8을 분모 16으로 확장하기 위해 분자와 분모를 모두 2로 곱합니다. 이는 분수의 값을 바꾸지 않는 동치분수 변환입니다. 흔한 실수: 분자만 2를 곱하거나 분모만 바꿔 값이 달라지는 경우가 있습니다. 반드시 분자와 분모를 같은 수로 곱해야 동치분수가 됩니다. 이 결과가 색칠할 칸 수를 알려줍니다.",
        workingOut: "\\(\\dfrac{3}{8} = \\dfrac{3 \\times 2}{8 \\times 2} = \\dfrac{6}{16}\\)",
        graphData: null
      },
      {
        explanation: "동치분수 6/16은 전체 16칸 중 6칸을 색칠해야 함을 의미합니다. 검산: 6/16을 최대공약수 2로 약분하면 3/8이 되어 문제의 조건과 일치합니다. 오답 분석: 3칸은 3/16, 8칸은 8/16 = 1/2, 4칸은 4/16 = 1/4을 나타내며 모두 3/8과 다릅니다. 정답은 A번(index 0)입니다.",
        workingOut: "\\(\\dfrac{6}{16} = \\dfrac{3}{8} \\;\\checkmark \\;\\Rightarrow\\; \\text{정답: A번 (index 0)}\\)",
        graphData: null
      }
    ],
    createdAt: new Date().toISOString()
  },

  // Q8 — 원본: interactive_grid (4x4, 5/16) → MCQ / 정답 index 3
  {
    id: "y7-4a-q08",
    chapterId: "y7-4",
    topicId: "y7-4a",
    topicCode: "4A",
    topicTitle: "What is a fraction?",
    year: "Year 7",
    type: "multiple_choice",
    difficulty: "easy",
    isManual: true,
    isActive: true,
    isNew: true,
    topic: "Fractions of a whole — grid model",
    question: "A \\(4 \\times 4\\) grid has \\(16\\) equal squares. How many squares must be shaded to represent \\(\\dfrac{5}{16}\\) of the total area?",
    opts: [
      "\\(16\\) squares",
      "\\(8\\) squares",
      "\\(11\\) squares",
      "\\(5\\) squares"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "이 문제에서 주어진 것은 16칸 격자와 분수 5/16입니다. 분수 5/16의 분모가 이미 16이므로, 분모와 총 칸 수가 같습니다. 이 경우 분자가 바로 색칠해야 할 칸 수라는 것이 이 문제의 핵심 관찰입니다. 이를 계산으로 검증합니다.",
        workingOut: "\\(\\text{전체 칸 수} = 16,\\; \\dfrac{5}{16} \\;\\Rightarrow\\; \\text{분모 = 총 칸 수}\\)",
        graphData: null
      },
      {
        explanation: "분수의 분모(16)와 격자의 총 칸 수(16)가 같으므로, 색칠할 칸 수는 분자와 정확히 같습니다. 따라서 5칸을 색칠하면 됩니다. 흔한 실수: 4 곱하기 4 격자를 보고 4번째 칸을 5번 색칠한다는 식으로 잘못 해석하는 경우가 있습니다. 단순히 분자 5개의 칸을 색칠하면 됩니다.",
        workingOut: "\\(\\dfrac{5}{16} \\;\\Rightarrow\\; \\text{색칠 칸 수} = 5\\)",
        graphData: null
      },
      {
        explanation: "검산: 5칸을 색칠했을 때 비율은 5/16입니다. 이미 분모가 16이므로 약분할 필요도 없이 5/16 그대로입니다. 오답 분석: 16칸은 전체(16/16 = 1), 8칸은 8/16 = 1/2, 11칸은 11/16으로 모두 문제의 5/16과 다릅니다. 정답은 D번(index 3)입니다.",
        workingOut: "\\(\\dfrac{5}{16} \\;\\checkmark \\;\\Rightarrow\\; \\text{정답: D번 (index 3)}\\)",
        graphData: null
      }
    ],
    createdAt: new Date().toISOString()
  },

  // Q9 — 원본: interactive_grid (triangle_split 2x2, 5/8) → MCQ / 정답 index 1
  {
    id: "y7-4a-q09",
    chapterId: "y7-4",
    topicId: "y7-4a",
    topicCode: "4A",
    topicTitle: "What is a fraction?",
    year: "Year 7",
    type: "multiple_choice",
    difficulty: "medium",
    isManual: true,
    isActive: true,
    isNew: true,
    topic: "Fractions of a whole — triangle model",
    question: "A \\(2 \\times 2\\) grid has each of its \\(4\\) squares split diagonally into \\(2\\) equal triangles. How many triangles must be shaded to represent \\(\\dfrac{5}{8}\\) of the whole area?",
    opts: [
      "\\(4\\) triangles",
      "\\(5\\) triangles",
      "\\(8\\) triangles",
      "\\(3\\) triangles"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "이 문제에서 주어진 것은 2 곱하기 2 격자이고 각 정사각형이 대각선으로 2개의 삼각형으로 나뉜다는 것입니다. 먼저 삼각형의 총 개수를 구하고, 그 다음 5/8에 해당하는 삼각형 수를 계산하는 전략을 사용합니다.",
        workingOut: "\\(\\text{정사각형 수} = 2 \\times 2 = 4,\\; \\text{삼각형 총 수} = 4 \\times 2 = 8\\)",
        graphData: null
      },
      {
        explanation: "총 삼각형 수가 8개이고 분수의 분모도 8이므로, 분자가 곧 색칠해야 할 삼각형 수입니다. 5/8이므로 5개의 삼각형을 색칠하면 됩니다. 흔한 실수: 2 곱하기 2 = 4칸이니까 4개의 삼각형이라고 생각하기 쉽지만, 각 칸이 삼각형 2개로 나뉘므로 총 8개임을 잊지 말아야 합니다. 이 결과가 선택지 판별의 기준이 됩니다.",
        workingOut: "\\(\\dfrac{5}{8} \\times 8 = 5 \\;\\Rightarrow\\; \\text{색칠 삼각형 수} = 5\\)",
        graphData: null
      },
      {
        explanation: "검산: 5개의 삼각형을 색칠하면 비율은 5/8로, 문제의 조건과 정확히 일치합니다. 오답 분석: 4개는 4/8 = 1/2, 8개는 8/8 = 1(전체), 3개는 3/8을 나타내며 모두 5/8이 아닙니다. 정답은 B번(index 1)입니다.",
        workingOut: "\\(\\dfrac{5}{8} \\;\\checkmark \\;\\Rightarrow\\; \\text{정답: B번 (index 1)}\\)",
        graphData: null
      }
    ],
    createdAt: new Date().toISOString()
  },

  // Q10 — 원본: interactive_grid (triangle_split 2x2, 1/2) → MCQ / 정답 index 2
  {
    id: "y7-4a-q10",
    chapterId: "y7-4",
    topicId: "y7-4a",
    topicCode: "4A",
    topicTitle: "What is a fraction?",
    year: "Year 7",
    type: "multiple_choice",
    difficulty: "easy",
    isManual: true,
    isActive: true,
    isNew: true,
    topic: "Fractions of a whole — triangle model",
    question: "A \\(2 \\times 2\\) grid has each of its \\(4\\) squares split diagonally into \\(2\\) equal triangles. How many triangles must be shaded to represent \\(\\dfrac{1}{2}\\) of the whole area?",
    opts: [
      "\\(2\\) triangles",
      "\\(8\\) triangles",
      "\\(4\\) triangles",
      "\\(1\\) triangle"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "이 문제에서 주어진 것은 2 곱하기 2 격자이고 각 정사각형이 대각선으로 2개의 삼각형으로 나뉜다는 것입니다. 구해야 할 것은 전체 삼각형의 1/2에 해당하는 개수입니다. 풀이 전략은 먼저 총 삼각형 수를 구한 뒤 절반을 계산하는 것입니다.",
        workingOut: "\\(\\text{정사각형 수} = 2 \\times 2 = 4,\\; \\text{삼각형 총 수} = 4 \\times 2 = 8\\)",
        graphData: null
      },
      {
        explanation: "총 삼각형이 8개이므로 절반인 1/2는 8을 2로 나눈 4개입니다. 분수 1/2 곱하기 8 = 4이므로, 4개의 삼각형을 색칠하면 전체의 절반이 됩니다. 흔한 실수: 격자가 2 곱하기 2이니까 2개를 칠하면 1/2라고 생각하는 경우가 있습니다. 하지만 분모는 격자 칸 수(4)가 아닌 삼각형 총 수(8)를 기준으로 합니다.",
        workingOut: "\\(\\dfrac{1}{2} \\times 8 = 4 \\;\\Rightarrow\\; \\text{색칠 삼각형 수} = 4\\)",
        graphData: null
      },
      {
        explanation: "검산: 4개의 삼각형을 색칠하면 비율은 4/8 = 1/2으로, 문제의 조건과 정확히 일치합니다. 오답 분석: 2개는 2/8 = 1/4, 8개는 전체(1), 1개는 1/8을 나타내므로 모두 1/2가 아닙니다. 정답은 C번(index 2)이며, 삼각형 수는 0 이상 8 이하의 정수여야 하므로 4는 유효한 답입니다.",
        workingOut: "\\(\\dfrac{4}{8} = \\dfrac{1}{2} \\;\\checkmark \\;\\Rightarrow\\; \\text{정답: C번 (index 2)}\\)",
        graphData: null
      }
    ],
    createdAt: new Date().toISOString()
  }

];

// 자가 검증: 정답 인덱스 분포 확인
const dist = [0, 0, 0, 0];
convertedQuestions.forEach(q => { dist[q.a]++; });
console.log('[자가검증] 정답 인덱스 분포 (0=A, 1=B, 2=C, 3=D):', dist);
// 기대: [1, 3, 4, 2]

// Firestore 동기화 (upsert: id 기반 merge)
(async () => {
  console.log('[Y7 Ch4A Q1~Q10] Firestore 동기화 시작...');

  const existingSnap = await db.collection('questions').where('topicId', '==', 'y7-4a').get();
  console.log(`[확인] 기존 y7-4a 문제 수: ${existingSnap.size}`);
  console.log(`[확인] 이번 Q1~Q10 변환 수: ${convertedQuestions.length}`);

  const writtenIds = [];

  for (const q of convertedQuestions) {
    try {
      const snap = await db.collection('questions').where('id', '==', q.id).get();
      if (!snap.empty) {
        await snap.docs[0].ref.set(q, { merge: true });
        console.log(`  [UPDATE] ${q.id}`);
      } else {
        await db.collection('questions').add(q);
        console.log(`  [INSERT] ${q.id}`);
      }
      writtenIds.push(q.id);
    } catch (err) {
      console.error(`  [ERROR] ${q.id}:`, err.message);
    }
  }

  console.log(`\n[완료] 총 ${writtenIds.length}개 문제 동기화 완료.`);
  console.log('[isNew: true 세팅 대상]:', writtenIds);
  process.exit(0);
})();
