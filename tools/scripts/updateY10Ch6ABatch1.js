import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

function shuffleOptions(correct, distractors) {
  const options = [correct, ...distractors];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return { options, correctIndex: options.indexOf(correct) };
}

const batch1_questions = {
  // q1a
  "y10-6a-q1a": {
    question: "Calculate the surface area of a rectangular prism with length \\( 8 \\text{ cm} \\), width \\( 5 \\text{ cm} \\), and height \\( 3 \\text{ cm} \\).",
    correct: "158 \\text{ cm}^2",
    distractors: ["120 \\text{ cm}^2", "79 \\text{ cm}^2", "150 \\text{ cm}^2"],
    steps: [
      { explanation: "Identify the dimensions of the rectangular prism: length \\( l = 8 \\text{ cm} \\), width \\( w = 5 \\text{ cm} \\), and height \\( h = 3 \\text{ cm} \\). We plan to use the total surface area formula for a rectangular prism.", workingOut: "A = 2(lw + lh + wh)" },
      { explanation: "Substitute the given values into the surface area formula to compute each rectangular face pair.", workingOut: "A = 2(8 \\times 5 + 8 \\times 3 + 5 \\times 3)" },
      { explanation: "Evaluate the product sums within the brackets.", workingOut: "A = 2(40 + 24 + 15) = 2(79)" },
      { explanation: "Multiply by 2 to find the total surface area, noting the area unit is squared centimeters.", workingOut: "A = 158 \\text{ cm}^2" }
    ]
  },
  // q1b
  "y10-6a-q1b": {
    question: "Calculate the surface area of a rectangular prism with length \\( 10 \\text{ cm} \\), width \\( 4 \\text{ cm} \\), and height \\( 6 \\text{ cm} \\).",
    correct: "248 \\text{ cm}^2",
    distractors: ["124 \\text{ cm}^2", "240 \\text{ cm}^2", "220 \\text{ cm}^2"],
    steps: [
      { explanation: "Note the dimensions: \\( l = 10 \\text{ cm} \\), \\( w = 4 \\text{ cm} \\), and \\( h = 6 \\text{ cm} \\). We plan to apply the surface area formula.", workingOut: "A = 2(lw + lh + wh)" },
      { explanation: "Substitute the values into the formula.", workingOut: "A = 2(10 \\times 4 + 10 \\times 6 + 4 \\times 6)" },
      { explanation: "Simplify the values within brackets.", workingOut: "A = 2(40 + 60 + 24) = 2(124)" },
      { explanation: "State the final calculated total surface area with standard units.", workingOut: "A = 248 \\text{ cm}^2" }
    ]
  },
  // q1c
  "y10-6a-q1c": {
    question: "Calculate the exact surface area of a cylinder with base radius \\( 3 \\text{ cm} \\) and height \\( 8 \\text{ cm} \\) in terms of \\( \\pi \\).",
    correct: "66\\pi \\text{ cm}^2",
    distractors: ["48\\pi \\text{ cm}^2", "54\\pi \\text{ cm}^2", "72\\pi \\text{ cm}^2"],
    steps: [
      { explanation: "We are given a cylinder with radius \\( r = 3 \\text{ cm} \\) and height \\( h = 8 \\text{ cm} \\). We plan to use the total surface area formula for a closed cylinder.", workingOut: "A = 2\\pi r^2 + 2\\pi rh" },
      { explanation: "Substitute \\( r = 3 \\) and \\( h = 8 \\) into the expression.", workingOut: "A = 2\\pi(3)^2 + 2\\pi(3)(8)" },
      { explanation: "Simplify both the circular base areas and the curved side area terms separately.", workingOut: "A = 18\\pi + 48\\pi" },
      { explanation: "Add the terms to state the exact total surface area.", workingOut: "A = 66\\pi \\text{ cm}^2" }
    ]
  },
  // q1d
  "y10-6a-q1d": {
    question: "Calculate the exact surface area of a half-cylinder (open flat top) with radius \\( 4 \\text{ cm} \\) and height \\( 10 \\text{ cm} \\) in terms of \\( \\pi \\).",
    correct: "56\\pi + 80 \\text{ cm}^2",
    distractors: ["56\\pi \\text{ cm}^2", "40\\pi + 80 \\text{ cm}^2", "48\\pi + 40 \\text{ cm}^2"],
    steps: [
      { explanation: "The surface area of a half-cylinder consists of: two half-circle ends, one half-curved surface, and one rectangular flat face. Let's list their areas.", workingOut: "\\text{Area} = \\pi r^2 + \\pi rh + 2rh" },
      { explanation: "Substitute the given values: radius \\( r = 4 \\text{ cm} \\) and height \\( h = 10 \\text{ cm} \\).", workingOut: "\\text{Area} = \\pi(4)^2 + \\pi(4)(10) + 2(4)(10)" },
      { explanation: "Evaluate each term separately.", workingOut: "\\text{Area} = 16\\pi + 40\\pi + 80" },
      { explanation: "Add the like terms containing \\(\\pi\\) to state the exact combined surface area.", workingOut: "\\text{Area} = 56\\pi + 80 \\text{ cm}^2" }
    ]
  },
  // q1e
  "y10-6a-q1e": {
    question: "Calculate the surface area of a right-angled triangular prism of length \\( 12 \\text{ cm} \\), with triangular base sides of \\( 3 \\text{ cm} \\), \\( 4 \\text{ cm} \\), and hypotenuse \\( 5 \\text{ cm} \\).",
    correct: "156 \\text{ cm}^2",
    distractors: ["144 \\text{ cm}^2", "168 \\text{ cm}^2", "78 \\text{ cm}^2"],
    steps: [
      { explanation: "The surface area of a triangular prism comprises: two triangular bases and three rectangular side faces. We plan to calculate each category separately.", workingOut: "\\text{Area} = 2 \\times \\text{Base Area} + \\text{Curved Perimeter} \\times \\text{Length}" },
      { explanation: "Determine the base area of one right-angled triangle.", workingOut: "\\text{Base Area} = \\dfrac{1}{2} \\times 3 \\times 4 = 6 \\text{ cm}^2" },
      { explanation: "Calculate the total area of the three rectangular faces by multiplying the triangle perimeter by the length of the prism.", workingOut: "\\text{Rectangles Area} = (3 + 4 + 5) \\times 12 = 12 \\times 12 = 144 \\text{ cm}^2" },
      { explanation: "Add the two base areas and the rectangular faces area together.", workingOut: "\\text{Total Area} = 2(6) + 144 = 12 + 144 = 156 \\text{ cm}^2" }
    ]
  },
  // q2b
  "y10-6a-q2b": {
    question: "The base of a right prism of height \\( 10 \\text{ cm} \\) is an equilateral triangle with side length \\( 6 \\text{ cm} \\). Calculate the total surface area of the prism, correct to the nearest square centimetre.",
    correct: "211 \\text{ cm}^2",
    distractors: ["180 \\text{ cm}^2", "196 \\text{ cm}^2", "225 \\text{ cm}^2"],
    steps: [
      { explanation: "Determine the area of the equilateral triangle base using the area formula \\( \\text{Area} = \\dfrac{1}{2}ab\\sin(\\theta) \\).", workingOut: "\\text{Base Area} = \\dfrac{1}{2} \\times 6 \\times 6 \\times \\sin(60^\\circ) = 18 \\times \\dfrac{\\sqrt{3}}{2} = 9\\sqrt{3} \\approx 15.588 \\text{ cm}^2" },
      { explanation: "Calculate the total area of the three rectangular lateral sides. The side length is 6 cm and the prism height is 10 cm.", workingOut: "\\text{Lateral Area} = 3 \\times (6 \\times 10) = 180 \\text{ cm}^2" },
      { explanation: "Sum the two base areas and the lateral area together.", workingOut: "\\text{Total Area} = 2(9\\sqrt{3}) + 180 = 18\\sqrt{3} + 180 \\approx 31.177 + 180 = 211.177 \\text{ cm}^2" },
      { explanation: "Round the result to the nearest integer as requested.", workingOut: "\\text{Total Area} \\approx 211 \\text{ cm}^2" }
    ]
  },
  // q3
  "y10-6a-q3": {
    question: "A cube has a surface area of \\( 150 \\text{ m}^2 \\). Find its side length.",
    correct: "5 \\text{ m}",
    distractors: ["6 \\text{ m}", "25 \\text{ m}", "5\\sqrt{6} \\text{ m}"],
    steps: [
      { explanation: "Let the side length of the cube be \\( s \\) m. A cube has 6 congruent square faces. We plan to write an equation representing the total surface area.", workingOut: "6s^2 = 150" },
      { explanation: "Divide both sides of the equation by 6 to isolate \\( s^2 \\).", workingOut: "s^2 = 25" },
      { explanation: "Take the positive square root of both sides since side lengths must be positive.", workingOut: "s = 5 \\text{ m}" }
    ]
  },
  // q4
  "y10-6a-q4": {
    question: "A cylinder of base radius \\( 5 \\text{ cm} \\) has a curved surface area of \\( 100\\pi \\text{ cm}^2 \\). Find its height.",
    correct: "10 \\text{ cm}",
    distractors: ["5 \\text{ cm}", "20 \\text{ cm}", "8 \\text{ cm}"],
    steps: [
      { explanation: "Identify the formula for the curved surface area (lateral area) of a cylinder.", workingOut: "A_{\\text{curved}} = 2\\pi rh" },
      { explanation: "Substitute the given values: radius \\( r = 5 \\) and curved area \\( A_{\\text{curved}} = 100\\pi \\).", workingOut: "100\\pi = 2\\pi(5)h" },
      { explanation: "Simplify the right-hand side.", workingOut: "100\\pi = 10\\pi h" },
      { explanation: "Divide both sides by \\( 10\\pi \\) to isolate the height \\( h \\).", workingOut: "h = 10 \\text{ cm}" }
    ]
  },
  // q5a
  "y10-6a-q5a": {
    question: "A rubbish bin is in the shape of an open cylinder (no lid). If the bin has radius \\( 15 \\text{ cm} \\) and height \\( 40 \\text{ cm} \\), calculate its total external surface area, correct to the nearest square centimetre.",
    correct: "4477 \\text{ cm}^2",
    distractors: ["5184 \\text{ cm}^2", "4480 \\text{ cm}^2", "3769 \\text{ cm}^2"],
    steps: [
      { explanation: "Since the bin is an open cylinder, its surface area consists of one circular base and one curved lateral surface.", workingOut: "\\text{Area} = \\pi r^2 + 2\\pi rh" },
      { explanation: "Substitute the given dimensions: radius \\( r = 15 \\text{ cm} \\) and height \\( h = 40 \\text{ cm} \\).", workingOut: "\\text{Area} = \\pi(15)^2 + 2\\pi(15)(40)" },
      { explanation: "Simplify each term in terms of \\(\\pi\\).", workingOut: "\\text{Area} = 225\\pi + 1200\\pi = 1425\\pi" },
      { explanation: "Evaluate the decimal value and round to the nearest whole number.", workingOut: "\\text{Area} \\approx 1425 \\times 3.14159 \\approx 4476.77 \\approx 4477 \\text{ cm}^2" }
    ]
  },
  // q5b
  "y10-6a-q5b": {
    question: "If an open bin has radius \\( 12 \\text{ cm} \\) and a curved surface area of \\( 2000 \\text{ cm}^2 \\), find the height of the bin, correct to the nearest millimetre.",
    correct: "26.5 \\text{ cm}",
    distractors: ["26.0 \\text{ cm}", "27.2 \\text{ cm}", "25.8 \\text{ cm}"],
    steps: [
      { explanation: "We are given the curved surface area of a cylinder. We plan to write down the curved surface area formula.", workingOut: "A_{\\text{curved}} = 2\\pi rh" },
      { explanation: "Substitute the radius \\( r = 12 \\) and area \\( A_{\\text{curved}} = 2000 \\) into the formula.", workingOut: "2000 = 2\\pi(12)h \\;\\Rightarrow\\; 2000 = 24\\pi h" },
      { explanation: "Solve for the height \\( h \\) by division.", workingOut: "h = \\dfrac{2000}{24\\pi} \\approx \\dfrac{2000}{75.398} \\approx 26.5258 \\text{ cm}" },
      { explanation: "Round the height to the nearest millimetre (one decimal place).", workingOut: "h \\approx 26.5 \\text{ cm}" }
    ]
  }
};

(async () => {
  try {
    console.log('[6A Batch 1] Upgrading initial 10 questions to MCQ...');
    let count = 0;
    for (const [id, target] of Object.entries(batch1_questions)) {
      const { options, correctIndex } = shuffleOptions(target.correct, target.distractors);
      const ref = db.collection('questions').doc(id);

      const wrappedSteps = target.steps.map(step => ({
        explanation: step.explanation,
        workingOut: String.raw`\\(${step.workingOut}\\)`,
        graphData: null
      }));

      const wrappedOpts = options.map(opt => String.raw`\\(${opt}\\)`);

      await ref.set({
        year: "Year 10",
        course: "Mathematics",
        chapterId: "y10-6",
        chapterTitle: "Chapter 6: Surface area and volume",
        topicId: "y10-6a",
        topicCode: "6A",
        topicTitle: "Prisms and cylinders",
        isManual: true,
        difficulty: "easy",
        timeLimit: 120,
        type: "multiple_choice",
        question: target.question,
        opts: wrappedOpts,
        options: wrappedOpts,
        a: correctIndex,
        answer: correctIndex,
        solutionSteps: wrappedSteps,
        isNew: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log(`  [MIGRATED] ${id} -> Correct Index: ${correctIndex}`);
      count++;
    }
    console.log(`\nBatch 1 successfully migrated ${count} questions.`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
