export const Y9_CH14F_QUESTIONS = [
{
  "id": "y9-14f-q1a",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "Describe the geometric properties of the family of straight lines given by the equation:\n\\( y = x + b \\)\nwhere \\( b \\) is a real parameter, by considering specific lines like \\( y = x + 1 \\), \\( y = x + 3 \\), and \\( y = x - 2 \\).",
  "a": "This represents a family of parallel lines, all having a gradient of 1, but with different y-intercepts b.",
  "solution": "All lines in the family \\( y = x + b \\) have the same gradient \\( m = 1 \\).\nSince they have the same gradient but different y-intercepts \\( b \\), they are all parallel to each other.\nThus, geometrically, the family represents a set of parallel lines with a gradient of 1.",
  "solutionSteps": [
  {
    "explanation": "Identify the gradient of the line family",
    "workingOut": "y = x + b \\implies m = 1"
  },
  {
    "explanation": "Describe the effect of the parameter b",
    "workingOut": "b \\text{ represents the varying y-intercept}"
  },
  {
    "explanation": "Conclude the geometric relationship",
    "workingOut": "\\text{The lines are all parallel to } y = x"
  }],

  "t": "Families of straight lines",
  "hint": "Look at the slope (coefficient of x) and the y-intercept of the lines in the family.",
  "graphData": null
},
{
  "id": "y9-14f-q1b",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "Describe the geometric properties of the family of straight lines given by the equation:\n\\( y = mx + 2 \\)\nwhere \\( m \\) is a real parameter, by considering specific lines like \\( y = 2x + 2 \\), \\( y = -x + 2 \\), and \\( y = -3x + 2 \\).",
  "a": "This represents a family of lines that all pass through the common point (0, 2), which is their y-intercept.",
  "solution": "All lines in the family \\( y = mx + 2 \\) have different gradients \\( m \\) but share the same y-intercept, which is \\( 2 \\).\nThus, every line in this family passes through the point \\( (0, 2) \\).\nGeometrically, this represents a pencil of lines radiating from the point \\( (0, 2) \\).",
  "solutionSteps": [
  {
    "explanation": "Identify the common feature of the line family",
    "workingOut": "\\text{For any value of } m, \\; x = 0 \\implies y = 2"
  },
  {
    "explanation": "Identify the varying parameter",
    "workingOut": "m \\text{ represents the varying gradient}"
  },
  {
    "explanation": "Conclude the geometric description",
    "workingOut": "\\text{A family of lines intersecting at } (0, 2)"
  }],

  "t": "Families of straight lines",
  "hint": "Substitute x = 0 into the equation and observe what happens to the parameter m.",
  "graphData": null
},
{
  "id": "y9-14f-q1c",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "Describe the geometric properties of the family of straight lines given by the equation:\n\\( y = mx + 3 \\)\nwhere \\( m \\) is a real parameter, by considering specific lines like \\( y = 3x + 3 \\), \\( y = -2x + 3 \\), and \\( y = 4x + 3 \\).",
  "a": "This represents a family of lines that all pass through the common point (0, 3), which is their y-intercept.",
  "solution": "All lines in the family \\( y = mx + 3 \\) have different gradients \\( m \\) but share the same y-intercept, which is \\( 3 \\).\nThus, every line in this family passes through the point \\( (0, 3) \\).\nGeometrically, this represents a pencil of lines intersecting at the point \\( (0, 3) \\).",
  "solutionSteps": [
  {
    "explanation": "Find the common y-intercept of the lines",
    "workingOut": "\\text{When } x = 0, \\; y = 3 \\implies (0, 3)"
  },
  {
    "explanation": "Describe the role of the parameter m",
    "workingOut": "m \\text{ determines the steepness and direction (gradient)}"
  },
  {
    "explanation": "State the geometric property",
    "workingOut": "\\text{The lines all intersect at } (0, 3)"
  }],

  "t": "Families of straight lines",
  "hint": "Find the point where all these lines intersect by substituting x = 0.",
  "graphData": null
},
{
  "id": "y9-14f-q2a",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The equations of two lines are \\( y = x + 4 \\) and \\( y = mx - 3 \\). For what value of \\( m \\) will the two lines not intersect?",
  "a": "1",
  "solution": "Two lines in a plane do not intersect if and only if they are parallel (same gradient, different y-intercepts).\nThe gradient of the first line \\( y = x + 4 \\) is \\( 1 \\).\nThe gradient of the second line \\( y = mx - 3 \\) is \\( m \\).\nSince their y-intercepts are different (4 and -3), the lines will be parallel and not intersect when \\( m = 1 \\).",
  "solutionSteps": [
  {
    "explanation": "Find the gradient of the first line",
    "workingOut": "y = x + 4 \\implies m_1 = 1"
  },
  {
    "explanation": "State the condition for no intersection",
    "workingOut": "m = m_1 \\implies m = 1"
  }],

  "t": "Families of straight lines",
  "hint": "Parallel lines have the same gradient and do not intersect.",
  "graphData": null
},
{
  "id": "y9-14f-q2b",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The equations of two lines are \\( y = x + 4 \\) and \\( y = mx - 3 \\). For what values of \\( m \\) will the two lines intersect?",
  "a": "m!=1",
  "solution": "Two lines will intersect at exactly one point if they are not parallel (different gradients).\nThe gradient of the first line is \\( 1 \\).\nThe gradient of the second line is \\( m \\).\nFor the lines to intersect, their gradients must be different:\n\\( m \\neq 1 \\).",
  "solutionSteps": [
  {
    "explanation": "Identify the gradients of both lines",
    "workingOut": "m_1 = 1 \\text{ and } m_2 = m"
  },
  {
    "explanation": "State the condition for intersection",
    "workingOut": "m \\neq 1"
  }],

  "t": "Families of straight lines",
  "hint": "Lines intersect if they have different gradients.",
  "graphData": null
},
{
  "id": "y9-14f-q2c",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The equations of two lines are \\( y = x + 4 \\) and \\( y = mx - 3 \\). Given that the lines intersect at \\( (7, 11) \\), find \\( m \\).",
  "a": "2",
  "solution": "Since the point \\( (7, 11) \\) is the point of intersection, it must satisfy both equations.\nSubstitute \\( x = 7, \\; y = 11 \\) into the second equation:\n\\( 11 = m(7) - 3 \\implies 11 = 7m - 3 \\implies 7m = 14 \\implies m = 2 \\).",
  "solutionSteps": [
  {
    "explanation": "Substitute the intersection point into the second equation",
    "workingOut": "11 = 7m - 3"
  },
  {
    "explanation": "Solve for m",
    "workingOut": "7m = 14 \\implies m = 2"
  }],

  "t": "Families of straight lines",
  "hint": "Substitute the x and y coordinates of the intersection point into the equation with m.",
  "graphData": null
},
{
  "id": "y9-14f-q3a",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The equations of two lines are \\( y = x - 2 \\) and \\( mx - 3y = 6 \\). For what value of \\( m \\) will the two lines not intersect?",
  "a": "3",
  "solution": "Rewrite the second equation in slope-intercept form:\n\\( 3y = mx - 6 \\implies y = \\frac{m}{3}x - 2 \\).\nFor the lines to not intersect, they must be parallel (same gradient, different intercepts).\nThe gradient of the first line is \\( 1 \\) and its y-intercept is \\( -2 \\).\nThe gradient of the second line is \\( \\frac{m}{3} \\) and its y-intercept is \\( -2 \\).\nWait! If \\( \\frac{m}{3} = 1 \\implies m = 3 \\), then both lines are \\( y = x - 2 \\). In this case, they are identical and intersect at infinitely many points.\nTherefore, if \\( m = 3 \\), they intersect. For any other value of \\( m \\), they have different gradients and intersect at exactly one point.\nThus, there are **no values** of \\( m \\) for which the two lines do not intersect (they are either identical or intersect at one point).",
  "solutionSteps": [
  {
    "explanation": "Express the second line in slope-intercept form",
    "workingOut": "y = \\frac{m}{3}x - 2"
  },
  {
    "explanation": "Analyze the y-intercepts",
    "workingOut": "\\text{Both lines have y-intercept } -2"
  },
  {
    "explanation": "Determine if they can be parallel but separate",
    "workingOut": "\\text{Since intercepts are equal, they cannot be parallel and separate. No values of m.}"
  }],

  "t": "Families of straight lines",
  "hint": "Rearrange the second equation to y = (m/3)x - 2. Note that both lines share the y-intercept of -2.",
  "graphData": null,
  "answerText": "None"
},
{
  "id": "y9-14f-q3b",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The equations of two lines are \\( y = x - 2 \\) and \\( mx - 3y = 6 \\). For what values of \\( m \\) will the two lines intersect?",
  "a": "0",
  "solution": "Rearrange the second equation to \\( y = \\frac{m}{3}x - 2 \\).\nBoth lines share the same y-intercept \\( (0, -2) \\).\n- If \\( m \\neq 3 \\), the gradients are different, so the lines intersect at exactly one point: \\( (0, -2) \\).\n- If \\( m = 3 \\), the lines are identical, so they intersect at infinitely many points.\nIn either case, the lines intersect. Thus, they intersect for **all values of m**.",
  "solutionSteps": [
  {
    "explanation": "Observe y-intercept of both lines",
    "workingOut": "\\text{Both lines pass through } (0, -2)"
  },
  {
    "explanation": "Conclude intersection behavior",
    "workingOut": "\\text{They intersect at least at (0, -2) for all } m"
  }],

  "t": "Families of straight lines",
  "hint": "Since both lines pass through the point (0, -2), they always intersect regardless of the gradient.",
  "graphData": null,
  "opts": [
  "All values of m",
  "m!=3",
  "m=3",
  "No values of m"],

  "answerText": "All values of m"
},
{
  "id": "y9-14f-q3c",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The equations of two lines are \\( y = x - 2 \\) and \\( mx - 3y = 6 \\). Given that the lines intersect at \\( (5, 3) \\), find \\( m \\).",
  "a": "3",
  "solution": "Substitute \\( x = 5, \\; y = 3 \\) into the second equation:\n\\( m(5) - 3(3) = 6 \\implies 5m - 9 = 6 \\implies 5m = 15 \\implies m = 3 \\).",
  "solutionSteps": [
  {
    "explanation": "Substitute the intersection coordinates",
    "workingOut": "5m - 3(3) = 6"
  },
  {
    "explanation": "Solve for m",
    "workingOut": "5m - 9 = 6 \\implies 5m = 15 \\implies m = 3"
  }],

  "t": "Families of straight lines",
  "hint": "Substitute x = 5 and y = 3 into the second equation.",
  "graphData": null
},
{
  "id": "y9-14f-q4a",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The equations of two lines are \\( y = mx + 4 \\) and \\( 4x + 2y = 8 \\). For what values of \\( m \\) will the two lines not intersect?",
  "a": "None",
  "solution": "Write the second equation in slope-intercept form:\n\\( 2y = -4x + 8 \\implies y = -2x + 4 \\).\nBoth lines have the y-intercept of \\( 4 \\). Since they both pass through \\( (0, 4) \\), they always intersect at least at that point.\nThus, there are no values of \\( m \\) for which they do not intersect.",
  "solutionSteps": [
  {
    "explanation": "Write the second equation in slope-intercept form",
    "workingOut": "y = -2x + 4"
  },
  {
    "explanation": "Find the common point",
    "workingOut": "\\text{Both lines pass through } (0, 4) \\implies \\text{No values of m}"
  }],

  "t": "Families of straight lines",
  "hint": "Rewrite the second equation and identify the y-intercept.",
  "graphData": null
},
{
  "id": "y9-14f-q4b",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The equations of two lines are \\( y = mx + 4 \\) and \\( 4x + 2y = 8 \\). For what values of \\( m \\) will the two lines intersect?",
  "a": "0",
  "solution": "Since both lines pass through the point \\( (0, 4) \\), they will always intersect for any value of \\( m \\).",
  "solutionSteps": [
  {
    "explanation": "Check intersection at y-intercept",
    "workingOut": "\\text{They intersect at } (0, 4) \\text{ for all } m"
  }],

  "t": "Families of straight lines",
  "hint": "Consider the y-intercepts of both lines.",
  "graphData": null,
  "opts": [
  "All values of m",
  "m!=-2",
  "m=-2",
  "No values of m"],

  "answerText": "All values of m"
},
{
  "id": "y9-14f-q4c",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "For the values of \\( m \\) where the lines \\( y = mx + 4 \\) and \\( 4x + 2y = 8 \\) intersect, comment on the nature of their intersection.",
  "a": "For m != -2, the lines intersect at exactly one point (0, 4). For m = -2, the lines are identical, so they intersect at infinitely many points along the entire line.",
  "solution": "The second equation simplifies to \\( y = -2x + 4 \\).\n- If \\( m \\neq -2 \\), the lines have different gradients and intersect at exactly one point, which is \\( (0, 4) \\).\n- If \\( m = -2 \\), the two lines are identical, meaning they intersect at infinitely many points (all points on the line \\( y = -2x + 4 \\)).",
  "solutionSteps": [
  {
    "explanation": "Case 1: gradients are different",
    "workingOut": "m \\neq -2 \\implies \\text{One intersection point at } (0, 4)"
  },
  {
    "explanation": "Case 2: gradients are identical",
    "workingOut": "m = -2 \\implies \\text{Lines are identical, infinitely many intersection points}"
  }],

  "t": "Families of straight lines",
  "hint": "Compare the case where the gradients are different (m != -2) with the case where they are equal (m = -2).",
  "graphData": null
},
{
  "id": "y9-14f-q5a",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The equations of two lines are \\( x + 3y = 6 \\) and \\( 2x + 6y = k \\). For what value of \\( k \\) will the two lines intersect?",
  "a": "12",
  "solution": "Express both lines in slope-intercept form:\n1) \\( 3y = -x + 6 \\implies y = -\\frac{1}{3}x + 2 \\) (gradient is \\( -\\frac{1}{3} \\))\n2) \\( 6y = -2x + k \\implies y = -\\frac{1}{3}x + \\frac{k}{6} \\) (gradient is \\( -\\frac{1}{3} \\))\nSince they have the same gradient, they are parallel. Parallel lines only intersect if they are the same line (infinitely many solutions).\nThey will be the same line if their y-intercepts are equal:\n\\( \\frac{k}{6} = 2 \\implies k = 12 \\).\nThus, the lines intersect only when \\( k = 12 \\).",
  "solutionSteps": [
  {
    "explanation": "Find the gradients of both lines",
    "workingOut": "m_1 = -\\frac{1}{3} \\text{ and } m_2 = -\\frac{1}{3}"
  },
  {
    "explanation": "Equate y-intercepts for intersection",
    "workingOut": "\\frac{k}{6} = 2 \\implies k = 12"
  }],

  "t": "Families of straight lines",
  "hint": "Since the lines have the same coefficients on the left-hand side, they are parallel. They can only intersect if they represent the same line.",
  "graphData": null
},
{
  "id": "y9-14f-q5b",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The equations of two lines are \\( x + 3y = 6 \\) and \\( 2x + 6y = k \\). For what values of \\( k \\) will the two lines not intersect?",
  "a": "k!=12",
  "solution": "The lines are parallel since they both have a gradient of \\( -\\frac{1}{3} \\).\nThey will not intersect if they are parallel and distinct (different y-intercepts).\nThis happens when \\( k \\neq 12 \\).",
  "solutionSteps": [
  {
    "explanation": "State the condition for separate parallel lines",
    "workingOut": "\\frac{k}{6} \\neq 2 \\implies k \\neq 12"
  }],

  "t": "Families of straight lines",
  "hint": "The lines do not intersect if they are parallel but not identical.",
  "graphData": null
},
{
  "id": "y9-14f-q5c",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "For the value of \\( k \\) where the lines \\( x + 3y = 6 \\) and \\( 2x + 6y = k \\) intersect, comment on the nature of their intersection.",
  "a": "For k = 12, the two equations represent the same line. Therefore, they intersect at infinitely many points.",
  "solution": "When \\( k = 12 \\), the second equation becomes \\( 2x + 6y = 12 \\), which simplifies to \\( x + 3y = 6 \\).\nSince both equations represent the same line, the lines coincide, resulting in infinitely many points of intersection.",
  "solutionSteps": [
  {
    "explanation": "Substitute k = 12 into the second equation",
    "workingOut": "2x + 6y = 12 \\implies x + 3y = 6"
  },
  {
    "explanation": "Analyze the relationship",
    "workingOut": "\\text{The lines are identical, so they coincide and have infinitely many intersection points.}"
  }],

  "t": "Families of straight lines",
  "hint": "Substitute k = 12 into the second equation and compare it to the first equation.",
  "graphData": null
},
{
  "id": "y9-14f-q6a",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The lines with equations \\( y = x + k \\) and \\( y = mx + 3 \\) intersect at \\( (1, 2) \\). Find \\( k \\).",
  "a": "1",
  "solution": "Substitute the intersection point \\( (1, 2) \\) into the first equation:\n\\( 2 = 1 + k \\implies k = 1 \\).",
  "solutionSteps": [
  {
    "explanation": "Substitute x = 1 and y = 2 into y = x + k",
    "workingOut": "2 = 1 + k"
  },
  {
    "explanation": "Solve for k",
    "workingOut": "k = 1"
  }],

  "t": "Families of straight lines",
  "hint": "Substitute the x and y values of the intersection point into the first equation.",
  "graphData": null
},
{
  "id": "y9-14f-q6b",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The lines with equations \\( y = x + k \\) and \\( y = mx + 3 \\) intersect at \\( (1, 2) \\). Find \\( m \\).",
  "a": "-1",
  "solution": "Substitute the intersection point \\( (1, 2) \\) into the second equation:\n\\( 2 = m(1) + 3 \\implies 2 = m + 3 \\implies m = -1 \\).",
  "solutionSteps": [
  {
    "explanation": "Substitute x = 1 and y = 2 into y = mx + 3",
    "workingOut": "2 = m(1) + 3"
  },
  {
    "explanation": "Solve for m",
    "workingOut": "m = -1"
  }],

  "t": "Families of straight lines",
  "hint": "Substitute the x and y values of the intersection point into the second equation.",
  "graphData": null
},
{
  "id": "y9-14f-q7a",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The lines with equations \\( y = nx + 1 \\) and \\( y = mx + 9 \\) intersect at \\( (2, 5) \\). Find \\( n \\).",
  "a": "2",
  "solution": "Substitute the intersection point \\( (2, 5) \\) into the first equation:\n\\( 5 = n(2) + 1 \\implies 5 = 2n + 1 \\implies 2n = 4 \\implies n = 2 \\).",
  "solutionSteps": [
  {
    "explanation": "Substitute x = 2 and y = 5 into the first equation",
    "workingOut": "5 = 2n + 1"
  },
  {
    "explanation": "Solve for n",
    "workingOut": "2n = 4 \\implies n = 2"
  }],

  "t": "Families of straight lines",
  "hint": "Substitute the coordinates (2, 5) into the equation y = nx + 1.",
  "graphData": null
},
{
  "id": "y9-14f-q7b",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "The lines with equations \\( y = nx + 1 \\) and \\( y = mx + 9 \\) intersect at \\( (2, 5) \\). Find \\( m \\).",
  "a": "-2",
  "solution": "Substitute the intersection point \\( (2, 5) \\) into the second equation:\n\\( 5 = m(2) + 9 \\implies 5 = 2m + 9 \\implies 2m = -4 \\implies m = -2 \\).",
  "solutionSteps": [
  {
    "explanation": "Substitute x = 2 and y = 5 into the second equation",
    "workingOut": "5 = 2m + 9"
  },
  {
    "explanation": "Solve for m",
    "workingOut": "2m = -4 \\implies m = -2"
  }],

  "t": "Families of straight lines",
  "hint": "Substitute the coordinates (2, 5) into the equation y = mx + 9.",
  "graphData": null
}];