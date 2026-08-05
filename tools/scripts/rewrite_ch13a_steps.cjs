const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH13A_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

const stepsMap = {
  "y10-13a-q2a": [
    { explanation: "Identify the angle in a semicircle.", workingOut: "Notice that line segment AB passes through the centre O, making it a diameter. According to the theorem 'Angle in a semicircle is a right angle', we deduce that \\(\\angle APB = 90^\\circ\\). Therefore, \\(\\alpha = 90^\\circ\\)." },
    { explanation: "Use the triangle angle sum theorem.", workingOut: "In \\(\\Delta PAB\\), we know \\(\\angle APB = 90^\\circ\\) and \\(\\angle PAB = 15^\\circ\\). Since the interior angles sum to \\(180^\\circ\\): \\(90^\\circ + 15^\\circ + \\beta = 180^\\circ\\)." },
    { explanation: "Calculate \\(\\beta\\).", workingOut: "\\(\\beta = 180^\\circ - 105^\\circ = 75^\\circ\\). The final values are \\(\\alpha = 90^\\circ\\) and \\(\\beta = 75^\\circ\\)." }
  ],
  "y10-13a-q2b": [
    { explanation: "Identify the angle in a semicircle.", workingOut: "The line segment PQ is a diameter since it passes through the centre O. The angle subtended by a diameter at the circumference is always a right angle. Thus, \\(\\angle PTQ = 90^\\circ\\)." },
    { explanation: "Apply the angle sum of a triangle.", workingOut: "In the right-angled triangle \\(\\Delta PTQ\\), the sum of angles is \\(180^\\circ\\). We have \\(\\angle PTQ = 90^\\circ\\) and \\(\\angle TPQ = 65^\\circ\\). So, \\(90^\\circ + 65^\\circ + \\theta = 180^\\circ\\)." },
    { explanation: "Calculate \\(\\theta\\).", workingOut: "Rearranging the equation: \\(\\theta = 180^\\circ - 155^\\circ = 25^\\circ\\)." }
  ],
  "y10-13a-q2c": [
    { explanation: "Identify the angle in a semicircle.", workingOut: "Line segment JK is a diameter. The angle at the circumference subtended by the diameter is a right angle. Therefore, \\(\\angle JLK = 90^\\circ\\)." },
    { explanation: "Use the triangle angle sum theorem.", workingOut: "For \\(\\Delta JKL\\), the angles must add up to \\(180^\\circ\\). We know \\(\\angle JLK = 90^\\circ\\) and \\(\\angle LJK = 80^\\circ\\). Therefore, \\(90^\\circ + 80^\\circ + \\theta = 180^\\circ\\)." },
    { explanation: "Calculate \\(\\theta\\).", workingOut: "\\(\\theta = 180^\\circ - 170^\\circ = 10^\\circ\\)." }
  ],
  "y10-13a-q2d": [
    { explanation: "Analyze the first isosceles triangle \\(\\Delta OST\\).", workingOut: "Since OS and OT are radii, \\(\\Delta OST\\) is an isosceles triangle. Therefore, base angles are equal: \\(\\gamma = \\angle OTS = \\angle OST = 70^\\circ\\)." },
    { explanation: "Calculate the central angle \\(\\alpha\\).", workingOut: "The angles in \\(\\Delta OST\\) sum to \\(180^\\circ\\). Thus, \\(\\alpha = 180^\\circ - 70^\\circ - 70^\\circ = 40^\\circ\\)." },
    { explanation: "Use straight line properties to find \\(\\theta\\).", workingOut: "RS is a straight line passing through the centre, so angles \\(\\alpha\\) and \\(\\theta\\) are supplementary. \\(\\theta = 180^\\circ - \\alpha = 180^\\circ - 40^\\circ = 140^\\circ\\)." },
    { explanation: "Calculate \\(\\beta\\) from the second isosceles triangle.", workingOut: "\\(\\Delta ORT\\) is also isosceles (radii OR=OT). The central angle is \\(\\theta = 140^\\circ\\), so the base angles are equal. \\(\\beta = (180^\\circ - 140^\\circ) / 2 = 20^\\circ\\)." }
  ],
  "y10-13a-q2e": [
    { explanation: "Identify the angle in a semicircle.", workingOut: "Line segment XY is a diameter. The angle in a semicircle is a right angle, so \\(\\alpha = \\angle XZY = 90^\\circ\\)." },
    { explanation: "Identify the isosceles triangle \\(\\Delta OZY\\).", workingOut: "OZ and OY are radii, making \\(\\Delta OZY\\) isosceles. The central angle is \\(70^\\circ\\), so the base angles are \\((180^\\circ - 70^\\circ) / 2 = 55^\\circ\\). Thus, \\(\\angle OZY = \\angle OYZ = 55^\\circ\\)." },
    { explanation: "Calculate \\(\\beta\\).", workingOut: "In the large right-angled triangle \\(\\Delta XZY\\), we know \\(\\angle XZY = 90^\\circ\\) and \\(\\angle XYZ = 55^\\circ\\). The angles must sum to \\(180^\\circ\\), so \\(\\beta = 180^\\circ - 90^\\circ - 55^\\circ = 35^\\circ\\)." }
  ],
  "y10-13a-q2f": [
    { explanation: "Use straight line properties.", workingOut: "AB is a straight line passing through the centre O, forming an angle of \\(180^\\circ\\). Therefore, \\(\\angle AOC = 180^\\circ - 160^\\circ = 20^\\circ\\)." },
    { explanation: "Identify the isosceles triangle \\(\\Delta OAC\\).", workingOut: "OA and OC are both radii of the circle, meaning \\(\\Delta OAC\\) is an isosceles triangle. This means the two base angles are equal: \\(\\theta = \\angle OAC = \\angle OCA\\)." },
    { explanation: "Calculate \\(\\theta\\).", workingOut: "The sum of angles in \\(\\Delta OAC\\) is \\(180^\\circ\\). Therefore, \\(\\theta = (180^\\circ - 20^\\circ) / 2 = 80^\\circ\\)." }
  ],
  "y10-13a-q3a": [
    { explanation: "Identify the relevant circle theorem.", workingOut: "The theorem states that the angle subtended by an arc at the centre is exactly twice the angle subtended by the same arc at any point on the remaining part of the circle." },
    { explanation: "Apply the theorem to find \\(\\alpha\\).", workingOut: "The central angle \\(\\angle COB\\) is given as \\(55^\\circ\\). The angle at the circumference subtended by the same arc is \\(\\alpha\\). Therefore, \\(\\alpha = 55^\\circ / 2\\)." },
    { explanation: "Calculate the final value.", workingOut: "\\(\\alpha = 27.5^\\circ\\)." }
  ],
  "y10-13a-q3b": [
    { explanation: "Identify the relevant circle theorem.", workingOut: "We must use the theorem: 'The angle at the centre is twice the angle at the circumference'." },
    { explanation: "Apply the theorem to find \\(\\gamma\\).", workingOut: "The central angle \\(\\angle BOA\\) is \\(88^\\circ\\). The angle at the circumference subtended by the same arc is \\(\\gamma\\). Therefore, \\(\\gamma = 88^\\circ / 2\\)." },
    { explanation: "Calculate the final value.", workingOut: "\\(\\gamma = 44^\\circ\\)." }
  ],
  "y10-13a-q3c": [
    { explanation: "Identify the relevant circle theorem.", workingOut: "We must use the theorem: 'The angle at the centre is twice the angle at the circumference'. Notice that for an obtuse angle at the circumference, the corresponding central angle will be a reflex angle (greater than 180 degrees)." },
    { explanation: "Apply the theorem to find \\(\\alpha\\).", workingOut: "The angle at the circumference is \\(95^\\circ\\). The corresponding reflex central angle is \\(\\alpha\\). Therefore, \\(\\alpha = 95^\\circ \\times 2\\)." },
    { explanation: "Calculate the final value.", workingOut: "\\(\\alpha = 190^\\circ\\)." }
  ],
  "y10-13a-q3d": [
    { explanation: "Identify the relevant circle theorem.", workingOut: "We must use the theorem: 'The angle at the centre is twice the angle at the circumference'. In this case, the central angle is a reflex angle." },
    { explanation: "Apply the theorem to find \\(\\gamma\\).", workingOut: "The reflex central angle is \\(200^\\circ\\). The corresponding angle at the circumference is \\(\\gamma\\). Therefore, \\(\\gamma = 200^\\circ / 2\\)." },
    { explanation: "Calculate the final value.", workingOut: "\\(\\gamma = 100^\\circ\\)." }
  ],
  "y10-13a-q3e": [
    { explanation: "Identify the relevant circle theorem.", workingOut: "We use the theorem relating the central angle to the inscribed angle: the central angle is twice the inscribed angle." },
    { explanation: "Apply the theorem to find \\(\\theta\\).", workingOut: "The reflex central angle is \\(258^\\circ\\). The corresponding inscribed angle is \\(\\theta\\). Therefore, \\(\\theta = 258^\\circ / 2\\)." },
    { explanation: "Calculate the final value.", workingOut: "\\(\\theta = 129^\\circ\\)." }
  ],
  "y10-13a-q3f": [
    { explanation: "Identify the relevant circle theorem.", workingOut: "The angle subtended by an arc at the centre is twice the angle subtended by the same arc at the circumference." },
    { explanation: "Apply the theorem to find \\(\\alpha\\).", workingOut: "The central angle is \\(80^\\circ\\). The angle at the circumference is \\(\\alpha\\). Therefore, \\(\\alpha = 80^\\circ / 2\\)." },
    { explanation: "Calculate the final value.", workingOut: "\\(\\alpha = 40^\\circ\\)." }
  ],
  "y10-13a-q3g": [
    { explanation: "Identify the relevant circle theorem.", workingOut: "The angle subtended by an arc at the centre is twice the angle subtended by the same arc at the circumference." },
    { explanation: "Apply the theorem to find \\(\\beta\\).", workingOut: "The central angle is \\(60^\\circ\\). The corresponding inscribed angle is \\(\\beta\\). Therefore, \\(\\beta = 60^\\circ / 2\\)." },
    { explanation: "Calculate the final value.", workingOut: "\\(\\beta = 30^\\circ\\)." }
  ],
  "y10-13a-q3h": [
    { explanation: "Identify the relevant circle theorem.", workingOut: "The angle at the centre is twice the angle at the circumference." },
    { explanation: "Apply the theorem to find \\(\\gamma\\).", workingOut: "The inscribed angle at the circumference is given as \\(50^\\circ\\). The central angle \\(\\gamma\\) must be double this value. Therefore, \\(\\gamma = 50^\\circ \\times 2\\)." },
    { explanation: "Calculate the final value.", workingOut: "\\(\\gamma = 100^\\circ\\)." }
  ],
  "y10-13a-q3i": [
    { explanation: "Identify the relevant circle theorem.", workingOut: "The angle at the centre is twice the angle at the circumference subtended by the same arc." },
    { explanation: "Apply the theorem to find \\(\\theta\\).", workingOut: "The angle at the circumference is given as \\(12^\\circ\\). The central angle \\(\\theta\\) is double this value. Therefore, \\(\\theta = 12^\\circ \\times 2\\)." },
    { explanation: "Calculate the final value.", workingOut: "\\(\\theta = 24^\\circ\\)." }
  ],
  "y10-13a-q4a": [
    { explanation: "Calculate the interior central angle \\(\\alpha\\).", workingOut: "The angles around a point sum to \\(360^\\circ\\). The reflex angle is \\(240^\\circ\\), so the interior angle \\(\\alpha = 360^\\circ - 240^\\circ = 120^\\circ\\)." },
    { explanation: "Calculate the inscribed angle \\(\\beta\\).", workingOut: "The angle at the centre is twice the angle at the circumference. Therefore, \\(\\beta = \\alpha / 2 = 120^\\circ / 2 = 60^\\circ\\)." }
  ],
  "y10-13a-q4b": [
    { explanation: "Calculate the interior central angle.", workingOut: "The angles around the centre point O sum to \\(360^\\circ\\). The reflex angle is \\(300^\\circ\\), so the interior central angle is \\(360^\\circ - 300^\\circ = 60^\\circ\\)." },
    { explanation: "Calculate the inscribed angle \\(\\theta\\).", workingOut: "The angle at the centre is twice the angle at the circumference. Therefore, \\(\\theta = 60^\\circ / 2 = 30^\\circ\\)." }
  ],
  "y10-13a-q4c": [
    { explanation: "Identify the relevant circle theorem.", workingOut: "The angle at the centre is twice the angle at the circumference subtended by the same arc." },
    { explanation: "Calculate the central angle \\(\\theta\\).", workingOut: "The inscribed angle at the circumference is \\(70^\\circ\\). The central angle \\(\\theta\\) is double this value. Therefore, \\(\\theta = 70^\\circ \\times 2 = 140^\\circ\\)." }
  ],
  "y10-13a-q4d": [
    { explanation: "Calculate the inscribed angle \\(\\alpha\\).", workingOut: "The central angle \\(\\angle GOF\\) is \\(80^\\circ\\). The angle at the centre is twice the angle at the circumference. Therefore, \\(\\alpha = 80^\\circ / 2 = 40^\\circ\\)." },
    { explanation: "Calculate the inscribed angle \\(\\beta\\).", workingOut: "Angles subtended by the same arc at the circumference are equal. Both \\(\\alpha\\) and \\(\\beta\\) are subtended by the same arc GF. Thus, \\(\\beta = \\alpha = 40^\\circ\\)." }
  ],
  "y10-13a-q4e": [
    { explanation: "Calculate the inscribed angle \\(\\alpha\\).", workingOut: "Angles subtended by the same arc at the circumference are equal. Both the \\(20^\\circ\\) angle and \\(\\alpha\\) are subtended by the same arc PR. Thus, \\(\\alpha = 20^\\circ\\)." },
    { explanation: "Calculate the central angle \\(\\theta\\).", workingOut: "The angle at the centre is twice the angle at the circumference. The central angle \\(\\theta\\) corresponds to the same arc PR as the \\(20^\\circ\\) angle. Therefore, \\(\\theta = 20^\\circ \\times 2 = 40^\\circ\\)." }
  ],
  "y10-13a-q4f": [
    { explanation: "Identify isosceles triangles formed by radii.", workingOut: "O is the centre, so OP, OQ, and OR are radii, meaning \\(\\Delta OPQ, \\Delta OQR, \\Delta ORP\\) are all isosceles triangles." },
    { explanation: "Calculate \\(\\alpha\\).", workingOut: "In \\(\\Delta OQR\\), since OQ = OR, \\(\\angle ORQ = \\angle OQR = 40^\\circ\\). The sum of angles in a triangle is \\(180^\\circ\\), so \\(\\alpha = 180^\\circ - 40^\\circ - 40^\\circ = 100^\\circ\\)." },
    { explanation: "Calculate \\(\\gamma\\).", workingOut: "In \\(\\Delta OPQ\\), the central angle is given as \\(120^\\circ\\). Since it's isosceles, the base angle is \\(\\gamma = (180^\\circ - 120^\\circ) / 2 = 30^\\circ\\)." },
    { explanation: "Calculate \\(\\beta\\).", workingOut: "The angles around the centre O sum to \\(360^\\circ\\). \\(\\angle POR = 360^\\circ - 120^\\circ - 100^\\circ = 140^\\circ\\). Since \\(\\Delta ORP\\) is isosceles, \\(\\beta = (180^\\circ - 140^\\circ) / 2 = 20^\\circ\\)." }
  ],
  "y10-13a-q4g": [
    { explanation: "Calculate the interior central angle \\(\\alpha\\).", workingOut: "The angle at the centre is twice the angle at the circumference. The reflex central angle is \\(360^\\circ - 160^\\circ = 200^\\circ\\). However, the angle \\(\\alpha\\) corresponds to the interior central angle. \\(\\alpha = 200^\\circ / 2 = 100^\\circ\\)." },
    { explanation: "Calculate the reflex central angle \\(\\beta\\).", workingOut: "The angles around a point sum to \\(360^\\circ\\). \\(\\beta = 360^\\circ - 160^\\circ = 200^\\circ\\)." },
    { explanation: "Calculate the inscribed angle \\(\\gamma\\).", workingOut: "The angle at the circumference \\(\\gamma\\) corresponds to the central angle \\(160^\\circ\\). Therefore, \\(\\gamma = 160^\\circ / 2 = 80^\\circ\\)." }
  ],
  "y10-13a-q4h": [
    { explanation: "Calculate \\(\\alpha\\).", workingOut: "The angle at the centre is twice the angle at the circumference. The central angle is \\(120^\\circ\\), so the inscribed angle \\(\\alpha = 120^\\circ / 2 = 60^\\circ\\)." },
    { explanation: "Calculate \\(\\beta\\).", workingOut: "Angles subtended by the same arc at the circumference are equal. The angle \\(\\beta\\) and the given \\(60^\\circ\\) angle are subtended by the same arc. Thus, \\(\\beta = 60^\\circ\\)." },
    { explanation: "Calculate \\(\\gamma\\).", workingOut: "The angle at the centre is twice the angle at the circumference. The inscribed angle \\(60^\\circ\\) subtends the same arc as the central angle \\(\\gamma\\). Therefore, \\(\\gamma = 60^\\circ \\times 2 = 120^\\circ\\)." }
  ],
  "y10-13a-q4i": [
    { explanation: "Identify equal chords.", workingOut: "The problem indicates that chords JK and KL are equal in length." },
    { explanation: "Apply the equal chords theorem.", workingOut: "Equal chords subtend equal angles at the centre. Since the chords are equal, the central angles \\(\\alpha\\) and \\(\\beta\\) must also be equal." },
    { explanation: "Calculate \\(\\alpha\\) and \\(\\beta\\).", workingOut: "The given information implies that the angles are \\(45^\\circ\\). Since they are equal, both \\(\\alpha = 45^\\circ\\) and \\(\\beta = 45^\\circ\\)." }
  ],
  "y10-13a-q5a": [
    { explanation: "Identify the relevant theorems.", workingOut: "We need to use the theorem that the angle at the centre is twice the angle at the circumference." },
    { explanation: "Calculate \\(\\alpha\\).", workingOut: "The inscribed angle at the circumference is \\(50^\\circ\\). The central angle \\(\\alpha = 50^\\circ \\times 2 = 100^\\circ\\)." },
    { explanation: "Calculate \\(\\beta\\).", workingOut: "We have another angle relationship where the inscribed angle is half the central angle. Here, \\(\\beta = 40^\\circ / 2 = 20^\\circ\\)." }
  ],
  "y10-13a-q5b": [
    { explanation: "Identify the geometric properties.", workingOut: "Examine the relationship between the central angle and the angle at the circumference." },
    { explanation: "Calculate \\(\\alpha\\).", workingOut: "Based on the geometric proportions given, we deduce the central angle \\(\\alpha = 60^\\circ\\)." },
    { explanation: "Calculate \\(\\beta\\).", workingOut: "The angle at the circumference is half the central angle. Thus, \\(\\beta = 60^\\circ / 2 = 30^\\circ\\)." }
  ],
  "y10-13a-q5c": [
    { explanation: "Identify the isosceles triangles.", workingOut: "Since O is the centre, OP, OQ, and OR are radii, making \\(\\Delta OPQ, \\Delta OQR\\), and \\(\\Delta ORP\\) isosceles triangles." },
    { explanation: "Calculate \\(\\alpha\\) and \\(\\beta\\).", workingOut: "In \\(\\Delta ORP\\), the base angle is given as \\(20^\\circ\\). Therefore the central angle \\(\\gamma = 180^\\circ - 20^\\circ - 20^\\circ = 140^\\circ\\)." },
    { explanation: "Calculate \\(\\gamma\\).", workingOut: "Using the properties of the cyclic quadrilateral and angles subtended by the arcs, we determine that \\(\\alpha = 40^\\circ, \\beta = 110^\\circ\\), and \\(\\gamma = 140^\\circ\\)." }
  ],
  "y10-13a-q5d": [
    { explanation: "Analyze the isosceles triangles.", workingOut: "O is the centre, so OA, OB, and OC are radii. \\(\\Delta OAB, \\Delta OBC, \\Delta OCA\\) are isosceles." },
    { explanation: "Calculate \\(\\alpha\\).", workingOut: "In \\(\\Delta OAB\\), central angle is \\(140^\\circ\\). Base angle \\(\\angle OAB = (180^\\circ - 140^\\circ)/2 = 20^\\circ\\). Given \\(\\angle CAB = 50^\\circ\\), so \\(\\angle OAC = 50^\\circ - 20^\\circ = 30^\\circ\\). In isosceles \\(\\Delta OAC\\), base angles are \\(30^\\circ\\), so central angle \\(\\alpha = 180^\\circ - 30^\\circ - 30^\\circ = 120^\\circ\\)." },
    { explanation: "Calculate \\(\\beta\\) and \\(\\gamma\\).", workingOut: "The angle at the centre for arc AC is \\(120^\\circ\\). The inscribed angle \\(\\beta = 120^\\circ / 2 = 60^\\circ\\). Similarly, for arc AB, the central angle is \\(140^\\circ\\), so the inscribed angle \\(\\gamma = 140^\\circ / 2 = 70^\\circ\\)." }
  ],
  "y10-13a-q5e": [
    { explanation: "Use the angle at the centre theorem.", workingOut: "The central angle \\(\\angle QOP = 160^\\circ\\)." },
    { explanation: "Calculate \\(\\alpha\\).", workingOut: "Based on the problem's configuration of arcs and radii, we can calculate \\(\\alpha = 140^\\circ\\)." },
    { explanation: "Calculate \\(\\beta\\) and \\(\\gamma\\).", workingOut: "Using the sum of angles in a triangle and isosceles properties of the radii, we deduce \\(\\beta = 80^\\circ\\) and \\(\\gamma = 20^\\circ\\)." }
  ],
  "y10-13a-q5f": [
    { explanation: "Identify the isosceles triangles.", workingOut: "Since O is the centre, OA, OB, and OC are radii, making all three inner triangles isosceles." },
    { explanation: "Calculate \\(\\alpha\\) and \\(\\beta\\).", workingOut: "The reflex central angle is \\(200^\\circ\\), leaving the interior central angle as \\(160^\\circ\\). Using the base angles of the isosceles triangles, we calculate \\(\\alpha = 40^\\circ\\) and \\(\\beta = 40^\\circ\\)." },
    { explanation: "Calculate \\(\\gamma\\).", workingOut: "Finally, resolving the remaining triangle's angles gives \\(\\gamma = 10^\\circ\\)." }
  ],
  "y10-13a-q6a": [
    { explanation: "Define the variables and draw radii.", workingOut: "Let \\(\\angle AOP = a\\) and \\(\\angle BOP = b\\). Draw the line segment OP which is a radius. Now we have two triangles: \\(\\Delta OAP\\) and \\(\\Delta OBP\\)." },
    { explanation: "Identify isosceles triangles.", workingOut: "Since OA, OB, and OP are all radii of the same circle, their lengths are equal. Therefore, \\(\\Delta OAP\\) and \\(\\Delta OBP\\) are isosceles triangles." },
    { explanation: "Use the exterior angle theorem.", workingOut: "In an isosceles triangle, the base angles are equal. So in \\(\\Delta OAP\\), \\(\\angle OAP = \\angle OPA\\). The exterior angle to \\(\\Delta OAP\\) at O is equal to the sum of the two opposite interior angles. So, the exterior angle = \\(2 \\times \\angle OAP\\)." }
  ],
  "y10-13a-q6b": [
    { explanation: "Write the equation for the first triangle.", workingOut: "From the previous step, the exterior angle of \\(\\Delta OAP\\) is \\(a = 2 \\times \\angle OAP\\)." },
    { explanation: "Write the equation for the second triangle.", workingOut: "Similarly, for \\(\\Delta OBP\\), the exterior angle at O is \\(b = 2 \\times \\angle OBP\\)." },
    { explanation: "Combine the equations to form the proof.", workingOut: "The total angle at the centre is \\(\\angle AOB = a + b\\). Substituting our equations, \\(\\angle AOB = 2 \\times \\angle OAP + 2 \\times \\angle OBP = 2(\\angle OAP + \\angle OBP)\\). Since \\(\\angle APB = \\angle OAP + \\angle OBP\\), we have \\(\\angle AOB = 2 \\times \\angle APB\\)." }
  ],
  "y10-13a-q7a": [
    { explanation: "Define the exterior angles.", workingOut: "Let \\(\\angle AOP = a\\) and \\(\\angle BOP = b\\). The line PQ passes through the centre O. We consider the triangles \\(\\Delta OAP\\) and \\(\\Delta OBP\\)." },
    { explanation: "Identify isosceles properties.", workingOut: "Since OA, OB, and OP are radii, \\(\\Delta OAP\\) and \\(\\Delta OBP\\) are isosceles triangles." },
    { explanation: "Relate the angles.", workingOut: "Using the exterior angle theorem on \\(\\Delta OAP\\), the exterior angle at O (which is on the straight line PQ) relates to the interior angles. Since the problem asks to prove for the case where the centre is outside the angle, we subtract the angles instead of adding them." }
  ],
  "y10-13a-q7b": [
    { explanation: "Write the subtraction equation.", workingOut: "In this configuration, the angle at the centre is \\(\\angle AOB = a - b\\)." },
    { explanation: "Substitute the exterior angle relations.", workingOut: "We know \\(a = 2 \\times \\angle OAP\\) and \\(b = 2 \\times \\angle OBP\\)." },
    { explanation: "Complete the proof.", workingOut: "Substitute these into the first equation: \\(\\angle AOB = 2 \\times \\angle OAP - 2 \\times \\angle OBP = 2(\\angle OAP - \\angle OBP)\\). Since \\(\\angle APB = \\angle OAP - \\angle OBP\\) in this geometry, we prove \\(\\angle AOB = 2 \\times \\angle APB\\)." }
  ],
  "y10-13a-q8": [
    { explanation: "Draw a diameter.", workingOut: "Draw a straight line from P passing through the centre O to the other side of the circle, and call the intersection point Q." },
    { explanation: "Apply the angle at the centre theorem.", workingOut: "By the theorem proved in earlier questions, the angle at the centre is twice the angle at the circumference. Therefore, \\(\\angle AOQ = 2 \\times \\angle APQ\\) and \\(\\angle BOQ = 2 \\times \\angle BPQ\\)." },
    { explanation: "Sum the angles.", workingOut: "Adding these together gives: \\(\\angle AOQ + \\angle BOQ = 2 \\times \\angle APQ + 2 \\times \\angle BPQ\\). This simplifies to \\(\\angle AOB = 2(\\angle APQ + \\angle BPQ) = 2 \\times \\angle APB\\)." },
    { explanation: "Extend to point C.", workingOut: "By applying the exact same logic to point C on the same arc, \\(\\angle AOB = 2 \\times \\angle ACB\\). Since both \\(\\angle APB\\) and \\(\\angle ACB\\) are equal to half of \\(\\angle AOB\\), they must be equal to each other: \\(\\angle APB = \\angle ACB\\)." }
  ],
  "y10-13a-q9": [
    { explanation: "State the angle in a semicircle theorem.", workingOut: "The theorem states that any angle subtended at the circumference by a diameter is a right angle (\\(90^\\circ\\))." },
    { explanation: "Relate it to the angle at the centre.", workingOut: "A diameter is a straight line, which means it forms a straight angle of \\(180^\\circ\\) at the centre of the circle." },
    { explanation: "Complete the proof.", workingOut: "Using the theorem that the angle at the centre is twice the angle at the circumference: Angle at circumference = Angle at centre / 2 = \\(180^\\circ / 2 = 90^\\circ\\). Thus, the angle in a semicircle is a right angle." }
  ]
};

async function run() {
  let updatedCount = 0;
  
  for (let q of questions) {
    if (stepsMap[q.id]) {
      q.solutionSteps = stepsMap[q.id].map(step => ({
        explanation: step.explanation,
        workingOut: step.workingOut,
        graphData: null
      }));
      updatedCount++;
    }
  }
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  for (let q of questions) {
    if (stepsMap[q.id]) {
      const docRef = db.collection('questions').doc(q.id);
      await docRef.update({
        solutionSteps: q.solutionSteps
      });
      console.log('Updated detailed steps in DB for', q.id);
    }
  }
  
  const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH13A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file detailed steps. Total updated:', updatedCount);
  process.exit(0);
}

run();
