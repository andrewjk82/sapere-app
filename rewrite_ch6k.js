const fs = require('fs');
const file = './src/constants/seedYear10Ch6KQuestions.js';
let content = fs.readFileSync(file, 'utf8');

// Match the array content
const data = require(file);
const questions = data.Y10_CH6K_QUESTIONS;

questions.forEach(q => {
  // Convert opts to options
  if (q.opts && !q.options) {
    q.options = q.opts.map(opt => ({ text: opt, imageUrl: "" }));
    delete q.opts;
  }
  
  // Custom logic to rewrite solutionSteps based on q.id
  let steps = [];
  
  const stepTemplate = (s1, s2, s3, s4) => [
    { explanation: "Step 1: Identify given information and the goal.", workingOut: s1, graphData: null },
    { explanation: "Step 2: State the relevant formula or rule.", workingOut: s2, graphData: null },
    { explanation: "Step 3: Substitute the known values and calculate.", workingOut: s3, graphData: null },
    { explanation: "Step 4: State the final answer.", workingOut: s4, graphData: null }
  ];

  switch (q.id) {
    case 'y10-6k-q1a':
      steps = stepTemplate(
        "Prism dimensions: length $l = 40$, width $w = 25$, height $h = 15$. We need Surface Area.",
        "$SA = 2(lw + lh + wh)$",
        "SA = $2(40 \\times 25 + 40 \\times 15 + 25 \\times 15) = 2(1000 + 600 + 375) = 2(1975) = 3950$",
        "The surface area is $3950$ cm$^2$."
      );
      break;
    case 'y10-6k-q1b':
      steps = stepTemplate(
        "Prism dimensions: length $l = 40$, width $w = 25$, height $h = 15$. We need Volume.",
        "$V = l \\times w \\times h$",
        "V = $40 \\times 25 \\times 15 = 15000$",
        "The volume is $15000$ cm$^3$."
      );
      break;
    case 'y10-6k-q2a':
      steps = stepTemplate(
        "Surface Area $SA = 600$, length $l = 20$, width $w = 5$. We need height $h$.",
        "$SA = 2(lw + lh + wh)$",
        "$600 = 2(20 \\times 5 + 20h + 5h) \\Rightarrow 300 = 100 + 25h \\Rightarrow 25h = 200 \\Rightarrow h = 8$",
        "The height is $8$ cm."
      );
      break;
    case 'y10-6k-q3a':
      steps = stepTemplate(
        "Volume $V = 840$, length $l = 14$, width $w = 10$. We need height $h$.",
        "$V = l \\times w \\times h$",
        "$840 = 14 \\times 10 \\times h \\Rightarrow 840 = 140h \\Rightarrow h = 6$",
        "The height is $6$ cm."
      );
      break;
    case 'y10-6k-q4a':
      steps = stepTemplate(
        "Isosceles trapezium $ABCD$: $a = 10$, $b = 22$, slanted sides $= 10$.",
        "Height $h$: base difference $= (22 - 10) / 2 = 6$. $h = \\sqrt{10^2 - 6^2} = 8$. Area = $\\frac{1}{2}(a+b)h$",
        "Area = $\\frac{1}{2}(10 + 22) \\times 8 = 16 \\times 8 = 128$",
        "The area is $128$ cm$^2$."
      );
      break;
    case 'y10-6k-q4b':
      steps = stepTemplate(
        "Prism with trapezium base. Base Area $= 128$, depth $= 25$. Perimeter $= 10+10+22+10=52$.",
        "$SA = 2 \\times \\text{Base Area} + \\text{Perimeter} \\times \\text{depth}$",
        "SA = $2(128) + 52 \\times 25 = 256 + 1300 = 1556$",
        "The surface area is $1556$ cm$^2$."
      );
      break;
    case 'y10-6k-q4c':
      steps = stepTemplate(
        "Prism with trapezium base. Base Area $= 128$, depth $= 25$.",
        "$V = \\text{Base Area} \\times \\text{depth}$",
        "V = $128 \\times 25 = 3200$",
        "The volume is $3200$ cm$^3$."
      );
      break;
    case 'y10-6k-q5a':
      steps = stepTemplate(
        "Cylinder: diameter $= 4$m (radius $r = 2$m), height $h = 2.5$m. Need volume in litres.",
        "$V = \\pi r^2 h$. $1$ m$^3 = 1000$ litres.",
        "V = $\\pi \\times 2^2 \\times 2.5 = 10\\pi$ m$^3 \\approx 31.4159$ m$^3 = 31416$ litres.",
        "The volume is $31416$ litres."
      );
      break;
    case 'y10-6k-q5b':
      steps = stepTemplate(
        "Cylinder radius $r = 2$m. Volume $= 5000$ litres $= 5$ m$^3$. Need depth $h$ in cm.",
        "$V = \\pi r^2 h$",
        "$5 = \\pi \\times 2^2 \\times h \\Rightarrow 5 = 4\\pi h \\Rightarrow h = \\frac{5}{4\\pi} \\approx 0.3979$ m $= 40$ cm.",
        "The depth is $40$ cm."
      );
      break;
    case 'y10-6k-q6a':
      steps = stepTemplate(
        "Square-based pyramid: base side $= 14$, perpendicular height $= 24$.",
        "Slant height $l = \\sqrt{24^2 + 7^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25$. $SA = \\text{base} + 4 \\times \\text{triangle}$",
        "Base $= 14 \\times 14 = 196$. Triangles $= 4 \\times (\\frac{1}{2} \\times 14 \\times 25) = 700$. SA $= 196 + 700 = 896$.",
        "The exact surface area is $896$ cm$^2$."
      );
      break;
    case 'y10-6k-q6b':
      steps = stepTemplate(
        "Square-based pyramid: base area $= 196$, perpendicular height $h = 24$.",
        "$V = \\frac{1}{3} \\times \\text{base area} \\times h$",
        "V = $\\frac{1}{3} \\times 196 \\times 24 = 196 \\times 8 = 1568$",
        "The exact volume is $1568$ cm$^3$."
      );
      break;
    case 'y10-6k-q6c':
      steps = stepTemplate(
        "Cone: radius $r = 5$, slant height $l = 13$.",
        "$SA = \\pi r^2 + \\pi r l$",
        "SA = $\\pi(5^2) + \\pi(5)(13) = 25\\pi + 65\\pi = 90\\pi$",
        "The exact surface area is $90\\pi$ cm$^2$."
      );
      break;
    case 'y10-6k-q6d':
      steps = stepTemplate(
        "Cone: radius $r = 5$, slant height $l = 13$. Need height $h$.",
        "$h = \\sqrt{l^2 - r^2}$, $V = \\frac{1}{3}\\pi r^2 h$",
        "$h = \\sqrt{13^2 - 5^2} = 12$. V = $\\frac{1}{3}\\pi(5^2)(12) = 100\\pi$",
        "The exact volume is $100\\pi$ cm$^3$."
      );
      break;
    case 'y10-6k-q7a':
      steps = stepTemplate(
        "Pyramid VABCD. Base $15 \\times 8$. $VB = 6$ is perpendicular to ABCD.",
        "Sum the areas of the base and four triangular faces.",
        "Base $= 120$. $\\Delta VAB = 0.5 \\times 15 \\times 6 = 45$. $\\Delta VBC = 0.5 \\times 8 \\times 6 = 24$. $VA = \\sqrt{6^2 + 15^2} = \\sqrt{261}$, $\\Delta VAD = 0.5 \\times 8 \\times \\sqrt{261} \\approx 64.6$. $VC = \\sqrt{6^2 + 8^2} = 10$, $\\Delta VDC = 0.5 \\times 15 \\times 10 = 75$. SA $= 120 + 45 + 24 + 64.6 + 75 = 328.6$",
        "The surface area is $328.6$ m$^2$."
      );
      break;
    case 'y10-6k-q7b':
      steps = stepTemplate(
        "Pyramid VABCD. Base $15 \\times 8$, height $VB = 6$.",
        "$V = \\frac{1}{3} \\times \\text{base area} \\times h$",
        "Base Area $= 15 \\times 8 = 120$. V = $\\frac{1}{3} \\times 120 \\times 6 = 240$",
        "The volume is $240$ m$^3$."
      );
      break;
    case 'y10-6k-q8a':
      steps = stepTemplate(
        "Cone: Base Area $= 25\\pi$. Curved SA $= 65\\pi$.",
        "Base Area $= \\pi r^2$",
        "$\\pi r^2 = 25\\pi \\Rightarrow r^2 = 25 \\Rightarrow r = 5$",
        "The radius is $5$ cm."
      );
      break;
    case 'y10-6k-q8b':
      steps = stepTemplate(
        "Cone: $r = 5$. Curved SA $= 65\\pi$.",
        "Curved SA $= \\pi r l$. Then $h = \\sqrt{l^2 - r^2}$",
        "$\\pi(5)l = 65\\pi \\Rightarrow l = 13$. $h = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$",
        "The exact perpendicular height is $12$ cm."
      );
      break;
    case 'y10-6k-q8c':
      steps = stepTemplate(
        "Cone: $r = 5$, height $h = 12$.",
        "$V = \\frac{1}{3}\\pi r^2 h$",
        "V = $\\frac{1}{3}\\pi(5^2)(12) = 100\\pi \\approx 314.159$",
        "The volume is $314$ cm$^3$."
      );
      break;
    case 'y10-6k-q9a':
      steps = stepTemplate(
        "Tank: Cylinder with two hemispheres. Total length $= 10$, radius $r = 2$.",
        "Cylinder length $= 10 - 2 - 2 = 6$. Total SA = Sphere SA + Cylinder Curved SA.",
        "$SA = 4\\pi(2^2) + 2\\pi(2)(6) = 16\\pi + 24\\pi = 40\\pi \\approx 125.66$",
        "The surface area is $125.7$ m$^2$."
      );
      break;
    case 'y10-6k-q9b':
      steps = stepTemplate(
        "Tank: Sphere ($r=2$) + Cylinder ($r=2, h=6$).",
        "$V = \\frac{4}{3}\\pi r^3 + \\pi r^2 h$",
        "V = $\\frac{4}{3}\\pi(2^3) + \\pi(2^2)(6) = \\frac{32}{3}\\pi + 24\\pi = \\frac{104}{3}\\pi \\approx 108.9$",
        "The volume is $108.9$ m$^3$."
      );
      break;
    case 'y10-6k-q10a':
      steps = stepTemplate("Length SF = 4.", "Area SF = (Length SF)$^2$, Vol SF = (Length SF)$^3$", "Area SF = $4^2 = 16$, Vol SF = $4^3 = 64$", "Area SF: $16$, Vol SF: $64$");
      break;
    case 'y10-6k-q10b':
      steps = stepTemplate("Length SF = 2.5.", "Area SF = (Length SF)$^2$, Vol SF = (Length SF)$^3$", "Area SF = $2.5^2 = 6.25$, Vol SF = $2.5^3 = 15.625$", "Area SF: $6.25$, Vol SF: $15.625$");
      break;
    case 'y10-6k-q10c':
      steps = stepTemplate("Area SF = 9.", "Length SF = $\\sqrt{\\text{Area SF}}$, Vol SF = (Length SF)$^3$", "Length SF = $\\sqrt{9} = 3$, Vol SF = $3^3 = 27$", "Length SF: $3$, Vol SF: $27$");
      break;
    case 'y10-6k-q10d':
      steps = stepTemplate("Area SF = 49.", "Length SF = $\\sqrt{\\text{Area SF}}$, Vol SF = (Length SF)$^3$", "Length SF = $\\sqrt{49} = 7$, Vol SF = $7^3 = 343$", "Length SF: $7$, Vol SF: $343$");
      break;
    case 'y10-6k-q10e':
      steps = stepTemplate("Vol SF = 216.", "Length SF = $\\sqrt[3]{\\text{Vol SF}}$, Area SF = (Length SF)$^2$", "Length SF = $\\sqrt[3]{216} = 6$, Area SF = $6^2 = 36$", "Length SF: $6$, Area SF: $36$");
      break;
    case 'y10-6k-q10f':
      steps = stepTemplate("Vol SF = 1000.", "Length SF = $\\sqrt[3]{\\text{Vol SF}}$, Area SF = (Length SF)$^2$", "Length SF = $\\sqrt[3]{1000} = 10$, Area SF = $10^2 = 100$", "Length SF: $10$, Area SF: $100$");
      break;
    default:
      console.log('Unhandled question ID:', q.id);
  }

  q.solutionSteps = steps;
});

const output = 'export const Y10_CH6K_QUESTIONS = ' + JSON.stringify(questions, null, 2) + ';\n';
fs.writeFileSync(file, output);
console.log('Successfully rewrote seedYear10Ch6KQuestions.js');
