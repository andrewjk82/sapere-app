export const Y10_CH12C_QUESTIONS = [
  {
    id: "y10-12c-q1a",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the rectangular prism shown, find BN. (exact value)",
    opts: [
      "\\(-2\\sqrt{41}\\)",
      "\\(2\\sqrt{41}\\)",
      "\\(2\\sqrt{41} + 1\\)",
      "\\(3\\sqrt{41}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "Identify the appropriate 2D right-angled triangle within the 3D shape.",
    solution: "The correct answer is \\(2\\sqrt{41}\\).",
    solutionSteps: [
      {
        explanation: "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for 3D Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        workingOut: "\\(BM = 8, MN = 10\\)",
        graphData: {
          geometry: {
            width: 300,
            points: {
              L: [
                0,
                0,
                0
              ],
              M: [
                12,
                0,
                0
              ],
              N: [
                12,
                0,
                10
              ],
              P: [
                0,
                0,
                10
              ],
              A: [
                0,
                8,
                0
              ],
              B: [
                12,
                8,
                0
              ],
              C: [
                12,
                8,
                10
              ],
              D: [
                0,
                8,
                10
              ],
              Q: [
                6,
                0,
                10
              ]
            },
            segments: [
              {
                from: "P",
                to: "N"
              },
              {
                from: "N",
                to: "M"
              },
              {
                from: "M",
                to: "L",
                dashed: true
              },
              {
                from: "L",
                to: "P",
                dashed: true
              },
              {
                from: "D",
                to: "C"
              },
              {
                from: "C",
                to: "B"
              },
              {
                from: "B",
                to: "A"
              },
              {
                from: "A",
                to: "D"
              },
              {
                from: "P",
                to: "D"
              },
              {
                from: "N",
                to: "C"
              },
              {
                from: "M",
                to: "B"
              },
              {
                from: "L",
                to: "A",
                dashed: true
              }
            ],
            sideLabels: [
              {
                between: [
                  "B",
                  "M"
                ],
                text: "8 cm"
              },
              {
                between: [
                  "N",
                  "M"
                ],
                text: "10 cm"
              },
              {
                between: [
                  "P",
                  "N"
                ],
                text: "12 cm",
                labelPos: [
                  6,
                  -1.5,
                  10
                ]
              }
            ],
            angles: []
          }
        }
      },
      {
        explanation: "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        workingOut: "\\(BN = \\sqrt{8^2 + 10^2} = \\sqrt{64 + 100} = \\sqrt{164} = 2\\sqrt{41}\\)",
        graphData: null
      },
      {
        explanation: "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        workingOut: "\\(2\\sqrt{41}\\)",
        graphData: null
      },
      {
        explanation: "Final answer: 2\\sqrt{41}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        workingOut: "\\(2\\sqrt{41}\\)",
        graphData: null
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          L: [
            0,
            0,
            0
          ],
          M: [
            12,
            0,
            0
          ],
          N: [
            12,
            0,
            10
          ],
          P: [
            0,
            0,
            10
          ],
          A: [
            0,
            8,
            0
          ],
          B: [
            12,
            8,
            0
          ],
          C: [
            12,
            8,
            10
          ],
          D: [
            0,
            8,
            10
          ],
          Q: [
            6,
            0,
            10
          ]
        },
        segments: [
          {
            from: "P",
            to: "N"
          },
          {
            from: "N",
            to: "M"
          },
          {
            from: "M",
            to: "L",
            dashed: true
          },
          {
            from: "L",
            to: "P",
            dashed: true
          },
          {
            from: "D",
            to: "C"
          },
          {
            from: "C",
            to: "B"
          },
          {
            from: "B",
            to: "A"
          },
          {
            from: "A",
            to: "D"
          },
          {
            from: "P",
            to: "D"
          },
          {
            from: "N",
            to: "C"
          },
          {
            from: "M",
            to: "B"
          },
          {
            from: "L",
            to: "A",
            dashed: true
          }
        ],
        sideLabels: [
          {
            between: [
              "B",
              "M"
            ],
            text: "8 cm"
          },
          {
            between: [
              "N",
              "M"
            ],
            text: "10 cm"
          },
          {
            between: [
              "P",
              "N"
            ],
            text: "12 cm",
            labelPos: [
              6,
              -1.5,
              10
            ]
          }
        ],
        angles: []
      }
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q1b",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the rectangular prism shown, find \\angle BNM. (correct to one decimal place)",
    opts: [
      "\\(-38.7^\\circ\\)",
      "\\(38.7^\\circ\\)",
      "\\(38.7^\\circ + 1\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "Identify the appropriate 2D right-angled triangle within the 3D shape.",
    solution: "The correct answer is \\(38.7^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for 3D Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        workingOut: "\\(\\tan(\\angle BNM) = \\frac{BM}{MN} = \\frac{8}{10} = 0.8\\)",
        graphData: {
          geometry: {
            width: 300,
            points: {
              L: [
                0,
                0,
                0
              ],
              M: [
                12,
                0,
                0
              ],
              N: [
                12,
                0,
                10
              ],
              P: [
                0,
                0,
                10
              ],
              A: [
                0,
                8,
                0
              ],
              B: [
                12,
                8,
                0
              ],
              C: [
                12,
                8,
                10
              ],
              D: [
                0,
                8,
                10
              ],
              Q: [
                6,
                0,
                10
              ]
            },
            segments: [
              {
                from: "P",
                to: "N"
              },
              {
                from: "N",
                to: "M"
              },
              {
                from: "M",
                to: "L",
                dashed: true
              },
              {
                from: "L",
                to: "P",
                dashed: true
              },
              {
                from: "D",
                to: "C"
              },
              {
                from: "C",
                to: "B"
              },
              {
                from: "B",
                to: "A"
              },
              {
                from: "A",
                to: "D"
              },
              {
                from: "P",
                to: "D"
              },
              {
                from: "N",
                to: "C"
              },
              {
                from: "M",
                to: "B"
              },
              {
                from: "L",
                to: "A",
                dashed: true
              }
            ],
            sideLabels: [
              {
                between: [
                  "B",
                  "M"
                ],
                text: "8 cm"
              },
              {
                between: [
                  "N",
                  "M"
                ],
                text: "10 cm"
              },
              {
                between: [
                  "P",
                  "N"
                ],
                text: "12 cm",
                labelPos: [
                  6,
                  -1.5,
                  10
                ]
              }
            ],
            angles: []
          }
        }
      },
      {
        explanation: "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        workingOut: "\\(\\angle BNM = \\tan^{-1}(0.8) \\approx 38.7^\\circ\\)",
        graphData: null
      },
      {
        explanation: "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        workingOut: "\\(38.7^\\circ\\)",
        graphData: null
      },
      {
        explanation: "Final answer: 38.7^\\circ. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        workingOut: "\\(38.7^\\circ\\)",
        graphData: null
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          L: [
            0,
            0,
            0
          ],
          M: [
            12,
            0,
            0
          ],
          N: [
            12,
            0,
            10
          ],
          P: [
            0,
            0,
            10
          ],
          A: [
            0,
            8,
            0
          ],
          B: [
            12,
            8,
            0
          ],
          C: [
            12,
            8,
            10
          ],
          D: [
            0,
            8,
            10
          ],
          Q: [
            6,
            0,
            10
          ]
        },
        segments: [
          {
            from: "P",
            to: "N"
          },
          {
            from: "N",
            to: "M"
          },
          {
            from: "M",
            to: "L",
            dashed: true
          },
          {
            from: "L",
            to: "P",
            dashed: true
          },
          {
            from: "D",
            to: "C"
          },
          {
            from: "C",
            to: "B"
          },
          {
            from: "B",
            to: "A"
          },
          {
            from: "A",
            to: "D"
          },
          {
            from: "P",
            to: "D"
          },
          {
            from: "N",
            to: "C"
          },
          {
            from: "M",
            to: "B"
          },
          {
            from: "L",
            to: "A",
            dashed: true
          }
        ],
        sideLabels: [
          {
            between: [
              "B",
              "M"
            ],
            text: "8 cm"
          },
          {
            between: [
              "N",
              "M"
            ],
            text: "10 cm"
          },
          {
            between: [
              "P",
              "N"
            ],
            text: "12 cm",
            labelPos: [
              6,
              -1.5,
              10
            ]
          }
        ],
        angles: []
      }
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q1c",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the rectangular prism shown, find BP. (exact value)",
    opts: [
      "\\(-2\\sqrt{77}\\)",
      "\\(2\\sqrt{77}\\)",
      "\\(2\\sqrt{77} + 1\\)",
      "\\(3\\sqrt{77}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "Identify the appropriate 2D right-angled triangle within the 3D shape.",
    solution: "The correct answer is \\(2\\sqrt{77}\\).",
    solutionSteps: [
      {
        explanation: "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for 3D Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        workingOut: "\\(PN = 12, BN = \\sqrt{164}. \\triangle BNP is a right-angled triangle at N.\\)",
        graphData: {
          geometry: {
            width: 300,
            points: {
              L: [
                0,
                0,
                0
              ],
              M: [
                12,
                0,
                0
              ],
              N: [
                12,
                0,
                10
              ],
              P: [
                0,
                0,
                10
              ],
              A: [
                0,
                8,
                0
              ],
              B: [
                12,
                8,
                0
              ],
              C: [
                12,
                8,
                10
              ],
              D: [
                0,
                8,
                10
              ],
              Q: [
                6,
                0,
                10
              ]
            },
            segments: [
              {
                from: "P",
                to: "N"
              },
              {
                from: "N",
                to: "M"
              },
              {
                from: "M",
                to: "L",
                dashed: true
              },
              {
                from: "L",
                to: "P",
                dashed: true
              },
              {
                from: "D",
                to: "C"
              },
              {
                from: "C",
                to: "B"
              },
              {
                from: "B",
                to: "A"
              },
              {
                from: "A",
                to: "D"
              },
              {
                from: "P",
                to: "D"
              },
              {
                from: "N",
                to: "C"
              },
              {
                from: "M",
                to: "B"
              },
              {
                from: "L",
                to: "A",
                dashed: true
              }
            ],
            sideLabels: [
              {
                between: [
                  "B",
                  "M"
                ],
                text: "8 cm"
              },
              {
                between: [
                  "N",
                  "M"
                ],
                text: "10 cm"
              },
              {
                between: [
                  "P",
                  "N"
                ],
                text: "12 cm",
                labelPos: [
                  6,
                  -1.5,
                  10
                ]
              }
            ],
            angles: []
          }
        }
      },
      {
        explanation: "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        workingOut: "\\(BP = \\sqrt{BN^2 + PN^2} = \\sqrt{164 + 144} = \\sqrt{308} = 2\\sqrt{77}\\)",
        graphData: null
      },
      {
        explanation: "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        workingOut: "\\(2\\sqrt{77}\\)",
        graphData: null
      },
      {
        explanation: "Final answer: 2\\sqrt{77}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        workingOut: "\\(2\\sqrt{77}\\)",
        graphData: null
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          L: [
            0,
            0,
            0
          ],
          M: [
            12,
            0,
            0
          ],
          N: [
            12,
            0,
            10
          ],
          P: [
            0,
            0,
            10
          ],
          A: [
            0,
            8,
            0
          ],
          B: [
            12,
            8,
            0
          ],
          C: [
            12,
            8,
            10
          ],
          D: [
            0,
            8,
            10
          ],
          Q: [
            6,
            0,
            10
          ]
        },
        segments: [
          {
            from: "P",
            to: "N"
          },
          {
            from: "N",
            to: "M"
          },
          {
            from: "M",
            to: "L",
            dashed: true
          },
          {
            from: "L",
            to: "P",
            dashed: true
          },
          {
            from: "D",
            to: "C"
          },
          {
            from: "C",
            to: "B"
          },
          {
            from: "B",
            to: "A"
          },
          {
            from: "A",
            to: "D"
          },
          {
            from: "P",
            to: "D"
          },
          {
            from: "N",
            to: "C"
          },
          {
            from: "M",
            to: "B"
          },
          {
            from: "L",
            to: "A",
            dashed: true
          }
        ],
        sideLabels: [
          {
            between: [
              "B",
              "M"
            ],
            text: "8 cm"
          },
          {
            between: [
              "N",
              "M"
            ],
            text: "10 cm"
          },
          {
            between: [
              "P",
              "N"
            ],
            text: "12 cm",
            labelPos: [
              6,
              -1.5,
              10
            ]
          }
        ],
        angles: []
      }
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q1d",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the rectangular prism shown, find \\angle BPM. (correct to one decimal place)",
    opts: [
      "\\(-27.1^\\circ\\)",
      "\\(27.1^\\circ\\)",
      "\\(27.1^\\circ + 1\\)",
      "\\(37.1^\\circ\\)"
    ],
    a: 1,
    answer: "1",
    hint: "Identify the appropriate 2D right-angled triangle within the 3D shape.",
    solution: "The correct answer is \\(27.1^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for 3D Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        workingOut: "\\(BM = 8, PM = \\sqrt{12^2 + 10^2} = \\sqrt{244}\\)",
        graphData: {
          geometry: {
            width: 300,
            points: {
              L: [
                0,
                0,
                0
              ],
              M: [
                12,
                0,
                0
              ],
              N: [
                12,
                0,
                10
              ],
              P: [
                0,
                0,
                10
              ],
              A: [
                0,
                8,
                0
              ],
              B: [
                12,
                8,
                0
              ],
              C: [
                12,
                8,
                10
              ],
              D: [
                0,
                8,
                10
              ],
              Q: [
                6,
                0,
                10
              ]
            },
            segments: [
              {
                from: "P",
                to: "N"
              },
              {
                from: "N",
                to: "M"
              },
              {
                from: "M",
                to: "L",
                dashed: true
              },
              {
                from: "L",
                to: "P",
                dashed: true
              },
              {
                from: "D",
                to: "C"
              },
              {
                from: "C",
                to: "B"
              },
              {
                from: "B",
                to: "A"
              },
              {
                from: "A",
                to: "D"
              },
              {
                from: "P",
                to: "D"
              },
              {
                from: "N",
                to: "C"
              },
              {
                from: "M",
                to: "B"
              },
              {
                from: "L",
                to: "A",
                dashed: true
              }
            ],
            sideLabels: [
              {
                between: [
                  "B",
                  "M"
                ],
                text: "8 cm"
              },
              {
                between: [
                  "N",
                  "M"
                ],
                text: "10 cm"
              },
              {
                between: [
                  "P",
                  "N"
                ],
                text: "12 cm",
                labelPos: [
                  6,
                  -1.5,
                  10
                ]
              }
            ],
            angles: []
          }
        }
      },
      {
        explanation: "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        workingOut: "\\(\\tan(\\angle BPM) = \\frac{BM}{PM} = \\frac{8}{\\sqrt{244}} \\implies \\angle BPM \\approx 27.1^\\circ\\)",
        graphData: null
      },
      {
        explanation: "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        workingOut: "\\(27.1^\\circ\\)",
        graphData: null
      },
      {
        explanation: "Final answer: 27.1^\\circ. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        workingOut: "\\(27.1^\\circ\\)",
        graphData: null
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          L: [
            0,
            0,
            0
          ],
          M: [
            12,
            0,
            0
          ],
          N: [
            12,
            0,
            10
          ],
          P: [
            0,
            0,
            10
          ],
          A: [
            0,
            8,
            0
          ],
          B: [
            12,
            8,
            0
          ],
          C: [
            12,
            8,
            10
          ],
          D: [
            0,
            8,
            10
          ],
          Q: [
            6,
            0,
            10
          ]
        },
        segments: [
          {
            from: "P",
            to: "N"
          },
          {
            from: "N",
            to: "M"
          },
          {
            from: "M",
            to: "L",
            dashed: true
          },
          {
            from: "L",
            to: "P",
            dashed: true
          },
          {
            from: "D",
            to: "C"
          },
          {
            from: "C",
            to: "B"
          },
          {
            from: "B",
            to: "A"
          },
          {
            from: "A",
            to: "D"
          },
          {
            from: "P",
            to: "D"
          },
          {
            from: "N",
            to: "C"
          },
          {
            from: "M",
            to: "B"
          },
          {
            from: "L",
            to: "A",
            dashed: true
          }
        ],
        sideLabels: [
          {
            between: [
              "B",
              "M"
            ],
            text: "8 cm"
          },
          {
            between: [
              "N",
              "M"
            ],
            text: "10 cm"
          },
          {
            between: [
              "P",
              "N"
            ],
            text: "12 cm",
            labelPos: [
              6,
              -1.5,
              10
            ]
          }
        ],
        angles: []
      }
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q1e",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the rectangular prism shown, find MQ. (exact value)",
    opts: [
      "\\(-2\\sqrt{34}\\)",
      "\\(2\\sqrt{34}\\)",
      "\\(2\\sqrt{34} + 1\\)",
      "\\(3\\sqrt{34}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "Identify the appropriate 2D right-angled triangle within the 3D shape.",
    solution: "The correct answer is \\(2\\sqrt{34}\\).",
    solutionSteps: [
      {
        explanation: "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for 3D Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        workingOut: "\\(MN = 10, NQ = \\frac{12}{2} = 6\\)",
        graphData: {
          geometry: {
            width: 300,
            points: {
              L: [
                0,
                0,
                0
              ],
              M: [
                12,
                0,
                0
              ],
              N: [
                12,
                0,
                10
              ],
              P: [
                0,
                0,
                10
              ],
              A: [
                0,
                8,
                0
              ],
              B: [
                12,
                8,
                0
              ],
              C: [
                12,
                8,
                10
              ],
              D: [
                0,
                8,
                10
              ],
              Q: [
                6,
                0,
                10
              ]
            },
            segments: [
              {
                from: "P",
                to: "N"
              },
              {
                from: "N",
                to: "M"
              },
              {
                from: "M",
                to: "L",
                dashed: true
              },
              {
                from: "L",
                to: "P",
                dashed: true
              },
              {
                from: "D",
                to: "C"
              },
              {
                from: "C",
                to: "B"
              },
              {
                from: "B",
                to: "A"
              },
              {
                from: "A",
                to: "D"
              },
              {
                from: "P",
                to: "D"
              },
              {
                from: "N",
                to: "C"
              },
              {
                from: "M",
                to: "B"
              },
              {
                from: "L",
                to: "A",
                dashed: true
              }
            ],
            sideLabels: [
              {
                between: [
                  "B",
                  "M"
                ],
                text: "8 cm"
              },
              {
                between: [
                  "N",
                  "M"
                ],
                text: "10 cm"
              },
              {
                between: [
                  "P",
                  "N"
                ],
                text: "12 cm",
                labelPos: [
                  6,
                  -1.5,
                  10
                ]
              }
            ],
            angles: []
          }
        }
      },
      {
        explanation: "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        workingOut: "\\(MQ = \\sqrt{10^2 + 6^2} = \\sqrt{100 + 36} = \\sqrt{136} = 2\\sqrt{34}\\)",
        graphData: null
      },
      {
        explanation: "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        workingOut: "\\(2\\sqrt{34}\\)",
        graphData: null
      },
      {
        explanation: "Final answer: 2\\sqrt{34}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        workingOut: "\\(2\\sqrt{34}\\)",
        graphData: null
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          L: [
            0,
            0,
            0
          ],
          M: [
            12,
            0,
            0
          ],
          N: [
            12,
            0,
            10
          ],
          P: [
            0,
            0,
            10
          ],
          A: [
            0,
            8,
            0
          ],
          B: [
            12,
            8,
            0
          ],
          C: [
            12,
            8,
            10
          ],
          D: [
            0,
            8,
            10
          ],
          Q: [
            6,
            0,
            10
          ]
        },
        segments: [
          {
            from: "P",
            to: "N"
          },
          {
            from: "N",
            to: "M"
          },
          {
            from: "M",
            to: "L",
            dashed: true
          },
          {
            from: "L",
            to: "P",
            dashed: true
          },
          {
            from: "D",
            to: "C"
          },
          {
            from: "C",
            to: "B"
          },
          {
            from: "B",
            to: "A"
          },
          {
            from: "A",
            to: "D"
          },
          {
            from: "P",
            to: "D"
          },
          {
            from: "N",
            to: "C"
          },
          {
            from: "M",
            to: "B"
          },
          {
            from: "L",
            to: "A",
            dashed: true
          }
        ],
        sideLabels: [
          {
            between: [
              "B",
              "M"
            ],
            text: "8 cm"
          },
          {
            between: [
              "N",
              "M"
            ],
            text: "10 cm"
          },
          {
            between: [
              "P",
              "N"
            ],
            text: "12 cm",
            labelPos: [
              6,
              -1.5,
              10
            ]
          }
        ],
        angles: []
      }
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q1f",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the rectangular prism shown, find \\angle BQM. (correct to one decimal place)",
    opts: [
      "\\(-34.4^\\circ\\)",
      "\\(34.4^\\circ\\)",
      "\\(34.4^\\circ + 1\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "Identify the appropriate 2D right-angled triangle within the 3D shape.",
    solution: "The correct answer is \\(34.4^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for 3D Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        workingOut: "\\(BM = 8, MQ = \\sqrt{136}\\)",
        graphData: {
          geometry: {
            width: 300,
            points: {
              L: [
                0,
                0,
                0
              ],
              M: [
                12,
                0,
                0
              ],
              N: [
                12,
                0,
                10
              ],
              P: [
                0,
                0,
                10
              ],
              A: [
                0,
                8,
                0
              ],
              B: [
                12,
                8,
                0
              ],
              C: [
                12,
                8,
                10
              ],
              D: [
                0,
                8,
                10
              ],
              Q: [
                6,
                0,
                10
              ]
            },
            segments: [
              {
                from: "P",
                to: "N"
              },
              {
                from: "N",
                to: "M"
              },
              {
                from: "M",
                to: "L",
                dashed: true
              },
              {
                from: "L",
                to: "P",
                dashed: true
              },
              {
                from: "D",
                to: "C"
              },
              {
                from: "C",
                to: "B"
              },
              {
                from: "B",
                to: "A"
              },
              {
                from: "A",
                to: "D"
              },
              {
                from: "P",
                to: "D"
              },
              {
                from: "N",
                to: "C"
              },
              {
                from: "M",
                to: "B"
              },
              {
                from: "L",
                to: "A",
                dashed: true
              }
            ],
            sideLabels: [
              {
                between: [
                  "B",
                  "M"
                ],
                text: "8 cm"
              },
              {
                between: [
                  "N",
                  "M"
                ],
                text: "10 cm"
              },
              {
                between: [
                  "P",
                  "N"
                ],
                text: "12 cm",
                labelPos: [
                  6,
                  -1.5,
                  10
                ]
              }
            ],
            angles: []
          }
        }
      },
      {
        explanation: "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        workingOut: "\\(\\tan(\\angle BQM) = \\frac{BM}{MQ} = \\frac{8}{\\sqrt{136}} \\implies \\angle BQM \\approx 34.4^\\circ\\)",
        graphData: null
      },
      {
        explanation: "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        workingOut: "\\(34.4^\\circ\\)",
        graphData: null
      },
      {
        explanation: "Final answer: 34.4^\\circ. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        workingOut: "\\(34.4^\\circ\\)",
        graphData: null
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          L: [
            0,
            0,
            0
          ],
          M: [
            12,
            0,
            0
          ],
          N: [
            12,
            0,
            10
          ],
          P: [
            0,
            0,
            10
          ],
          A: [
            0,
            8,
            0
          ],
          B: [
            12,
            8,
            0
          ],
          C: [
            12,
            8,
            10
          ],
          D: [
            0,
            8,
            10
          ],
          Q: [
            6,
            0,
            10
          ]
        },
        segments: [
          {
            from: "P",
            to: "N"
          },
          {
            from: "N",
            to: "M"
          },
          {
            from: "M",
            to: "L",
            dashed: true
          },
          {
            from: "L",
            to: "P",
            dashed: true
          },
          {
            from: "D",
            to: "C"
          },
          {
            from: "C",
            to: "B"
          },
          {
            from: "B",
            to: "A"
          },
          {
            from: "A",
            to: "D"
          },
          {
            from: "P",
            to: "D"
          },
          {
            from: "N",
            to: "C"
          },
          {
            from: "M",
            to: "B"
          },
          {
            from: "L",
            to: "A",
            dashed: true
          }
        ],
        sideLabels: [
          {
            between: [
              "B",
              "M"
            ],
            text: "8 cm"
          },
          {
            between: [
              "N",
              "M"
            ],
            text: "10 cm"
          },
          {
            between: [
              "P",
              "N"
            ],
            text: "12 cm",
            labelPos: [
              6,
              -1.5,
              10
            ]
          }
        ],
        angles: []
      }
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q2a",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the cube shown, find CE.",
    opts: [
      "\\(-12\\sqrt{3}\\)",
      "\\(12\\sqrt{3}\\)",
      "\\(12\\sqrt{3} + 1\\)",
      "\\(13\\sqrt{3}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "Identify the appropriate 2D right-angled triangle within the 3D shape.",
    solution: "The correct answer is \\(12\\sqrt{3}\\).",
    solutionSteps: [
      {
        explanation: "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for 3D Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        workingOut: "\\(CG = 12, EG = \\sqrt{12^2 + 12^2} = 12\\sqrt{2}\\)",
        graphData: {
          geometry: {
            width: 300,
            points: {
              E: [
                0,
                0,
                12
              ],
              H: [
                12,
                0,
                12
              ],
              G: [
                12,
                0,
                0
              ],
              F: [
                0,
                0,
                0
              ],
              A: [
                0,
                12,
                12
              ],
              D: [
                12,
                12,
                12
              ],
              C: [
                12,
                12,
                0
              ],
              B: [
                0,
                12,
                0
              ]
            },
            segments: [
              {
                from: "E",
                to: "H"
              },
              {
                from: "H",
                to: "G"
              },
              {
                from: "G",
                to: "F",
                dashed: true
              },
              {
                from: "F",
                to: "E",
                dashed: true
              },
              {
                from: "A",
                to: "D"
              },
              {
                from: "D",
                to: "C"
              },
              {
                from: "C",
                to: "B"
              },
              {
                from: "B",
                to: "A"
              },
              {
                from: "E",
                to: "A"
              },
              {
                from: "H",
                to: "D"
              },
              {
                from: "G",
                to: "C"
              },
              {
                from: "F",
                to: "B",
                dashed: true
              }
            ],
            sideLabels: [
              {
                between: [
                  "E",
                  "H"
                ],
                text: "12 cm",
                labelPos: [
                  6,
                  -1.5,
                  12
                ]
              }
            ],
            angles: []
          }
        }
      },
      {
        explanation: "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        workingOut: "\\(CE = \\sqrt{12^2 + (12\\sqrt{2})^2} = \\sqrt{144 + 288} = \\sqrt{432} = 12\\sqrt{3}\\)",
        graphData: null
      },
      {
        explanation: "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        workingOut: "\\(12\\sqrt{3}\\)",
        graphData: null
      },
      {
        explanation: "Final answer: 12\\sqrt{3}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        workingOut: "\\(12\\sqrt{3}\\)",
        graphData: null
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          E: [
            0,
            0,
            12
          ],
          H: [
            12,
            0,
            12
          ],
          G: [
            12,
            0,
            0
          ],
          F: [
            0,
            0,
            0
          ],
          A: [
            0,
            12,
            12
          ],
          D: [
            12,
            12,
            12
          ],
          C: [
            12,
            12,
            0
          ],
          B: [
            0,
            12,
            0
          ]
        },
        segments: [
          {
            from: "E",
            to: "H"
          },
          {
            from: "H",
            to: "G"
          },
          {
            from: "G",
            to: "F",
            dashed: true
          },
          {
            from: "F",
            to: "E",
            dashed: true
          },
          {
            from: "A",
            to: "D"
          },
          {
            from: "D",
            to: "C"
          },
          {
            from: "C",
            to: "B"
          },
          {
            from: "B",
            to: "A"
          },
          {
            from: "E",
            to: "A"
          },
          {
            from: "H",
            to: "D"
          },
          {
            from: "G",
            to: "C"
          },
          {
            from: "F",
            to: "B",
            dashed: true
          }
        ],
        sideLabels: [
          {
            between: [
              "E",
              "H"
            ],
            text: "12 cm",
            labelPos: [
              6,
              -1.5,
              12
            ]
          }
        ],
        angles: []
      }
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q2b",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the cube shown, find \\angle CEG. (correct to one decimal place)",
    opts: [
      "\\(-35.3^\\circ\\)",
      "\\(35.3^\\circ\\)",
      "\\(35.3^\\circ + 1\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "Identify the appropriate 2D right-angled triangle within the 3D shape.",
    solution: "The correct answer is \\(35.3^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for 3D Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        workingOut: "\\(CG = 12, EG = 12\\sqrt{2}\\)",
        graphData: {
          geometry: {
            width: 300,
            points: {
              E: [
                0,
                0,
                12
              ],
              H: [
                12,
                0,
                12
              ],
              G: [
                12,
                0,
                0
              ],
              F: [
                0,
                0,
                0
              ],
              A: [
                0,
                12,
                12
              ],
              D: [
                12,
                12,
                12
              ],
              C: [
                12,
                12,
                0
              ],
              B: [
                0,
                12,
                0
              ]
            },
            segments: [
              {
                from: "E",
                to: "H"
              },
              {
                from: "H",
                to: "G"
              },
              {
                from: "G",
                to: "F",
                dashed: true
              },
              {
                from: "F",
                to: "E",
                dashed: true
              },
              {
                from: "A",
                to: "D"
              },
              {
                from: "D",
                to: "C"
              },
              {
                from: "C",
                to: "B"
              },
              {
                from: "B",
                to: "A"
              },
              {
                from: "E",
                to: "A"
              },
              {
                from: "H",
                to: "D"
              },
              {
                from: "G",
                to: "C"
              },
              {
                from: "F",
                to: "B",
                dashed: true
              }
            ],
            sideLabels: [
              {
                between: [
                  "E",
                  "H"
                ],
                text: "12 cm",
                labelPos: [
                  6,
                  -1.5,
                  12
                ]
              }
            ],
            angles: []
          }
        }
      },
      {
        explanation: "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        workingOut: "\\(\\tan(\\angle CEG) = \\frac{12}{12\\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\implies \\angle CEG \\approx 35.3^\\circ\\)",
        graphData: null
      },
      {
        explanation: "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        workingOut: "\\(35.3^\\circ\\)",
        graphData: null
      },
      {
        explanation: "Final answer: 35.3^\\circ. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        workingOut: "\\(35.3^\\circ\\)",
        graphData: null
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          E: [
            0,
            0,
            12
          ],
          H: [
            12,
            0,
            12
          ],
          G: [
            12,
            0,
            0
          ],
          F: [
            0,
            0,
            0
          ],
          A: [
            0,
            12,
            12
          ],
          D: [
            12,
            12,
            12
          ],
          C: [
            12,
            12,
            0
          ],
          B: [
            0,
            12,
            0
          ]
        },
        segments: [
          {
            from: "E",
            to: "H"
          },
          {
            from: "H",
            to: "G"
          },
          {
            from: "G",
            to: "F",
            dashed: true
          },
          {
            from: "F",
            to: "E",
            dashed: true
          },
          {
            from: "A",
            to: "D"
          },
          {
            from: "D",
            to: "C"
          },
          {
            from: "C",
            to: "B"
          },
          {
            from: "B",
            to: "A"
          },
          {
            from: "E",
            to: "A"
          },
          {
            from: "H",
            to: "D"
          },
          {
            from: "G",
            to: "C"
          },
          {
            from: "F",
            to: "B",
            dashed: true
          }
        ],
        sideLabels: [
          {
            between: [
              "E",
              "H"
            ],
            text: "12 cm",
            labelPos: [
              6,
              -1.5,
              12
            ]
          }
        ],
        angles: []
      }
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q2c",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the cube shown, find \\angle CBE.",
    opts: [
      "\\(-90^\\circ\\)",
      "\\(90^\\circ\\)",
      "\\(90^\\circ + 1\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "Identify the appropriate 2D right-angled triangle within the 3D shape.",
    solution: "The correct answer is \\(90^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for 3D Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        workingOut: "\\(CB = 12, BE = 12\\sqrt{2}, CE = 12\\sqrt{3}\\)",
        graphData: {
          geometry: {
            width: 300,
            points: {
              E: [
                0,
                0,
                12
              ],
              H: [
                12,
                0,
                12
              ],
              G: [
                12,
                0,
                0
              ],
              F: [
                0,
                0,
                0
              ],
              A: [
                0,
                12,
                12
              ],
              D: [
                12,
                12,
                12
              ],
              C: [
                12,
                12,
                0
              ],
              B: [
                0,
                12,
                0
              ]
            },
            segments: [
              {
                from: "E",
                to: "H"
              },
              {
                from: "H",
                to: "G"
              },
              {
                from: "G",
                to: "F",
                dashed: true
              },
              {
                from: "F",
                to: "E",
                dashed: true
              },
              {
                from: "A",
                to: "D"
              },
              {
                from: "D",
                to: "C"
              },
              {
                from: "C",
                to: "B"
              },
              {
                from: "B",
                to: "A"
              },
              {
                from: "E",
                to: "A"
              },
              {
                from: "H",
                to: "D"
              },
              {
                from: "G",
                to: "C"
              },
              {
                from: "F",
                to: "B",
                dashed: true
              }
            ],
            sideLabels: [
              {
                between: [
                  "E",
                  "H"
                ],
                text: "12 cm",
                labelPos: [
                  6,
                  -1.5,
                  12
                ]
              }
            ],
            angles: []
          }
        }
      },
      {
        explanation: "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        workingOut: "\\(12^2 + (12\\sqrt{2})^2 = 144 + 288 = 432 = (12\\sqrt{3})^2. \\therefore \\angle CBE = 90^\\circ\\)",
        graphData: null
      },
      {
        explanation: "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        workingOut: "\\(90^\\circ\\)",
        graphData: null
      },
      {
        explanation: "Final answer: 90^\\circ. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        workingOut: "\\(90^\\circ\\)",
        graphData: null
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          E: [
            0,
            0,
            12
          ],
          H: [
            12,
            0,
            12
          ],
          G: [
            12,
            0,
            0
          ],
          F: [
            0,
            0,
            0
          ],
          A: [
            0,
            12,
            12
          ],
          D: [
            12,
            12,
            12
          ],
          C: [
            12,
            12,
            0
          ],
          B: [
            0,
            12,
            0
          ]
        },
        segments: [
          {
            from: "E",
            to: "H"
          },
          {
            from: "H",
            to: "G"
          },
          {
            from: "G",
            to: "F",
            dashed: true
          },
          {
            from: "F",
            to: "E",
            dashed: true
          },
          {
            from: "A",
            to: "D"
          },
          {
            from: "D",
            to: "C"
          },
          {
            from: "C",
            to: "B"
          },
          {
            from: "B",
            to: "A"
          },
          {
            from: "E",
            to: "A"
          },
          {
            from: "H",
            to: "D"
          },
          {
            from: "G",
            to: "C"
          },
          {
            from: "F",
            to: "B",
            dashed: true
          }
        ],
        sideLabels: [
          {
            between: [
              "E",
              "H"
            ],
            text: "12 cm",
            labelPos: [
              6,
              -1.5,
              12
            ]
          }
        ],
        angles: []
      }
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q2d",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the cube shown, find \\angle CEB. (correct to one decimal place)",
    opts: [
      "\\(-35.3^\\circ\\)",
      "\\(35.3^\\circ\\)",
      "\\(35.3^\\circ + 1\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "Identify the appropriate 2D right-angled triangle within the 3D shape.",
    solution: "The correct answer is \\(35.3^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for 3D Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        workingOut: "\\(CB = 12, BE = 12\\sqrt{2}\\)",
        graphData: {
          geometry: {
            width: 300,
            points: {
              E: [
                0,
                0,
                12
              ],
              H: [
                12,
                0,
                12
              ],
              G: [
                12,
                0,
                0
              ],
              F: [
                0,
                0,
                0
              ],
              A: [
                0,
                12,
                12
              ],
              D: [
                12,
                12,
                12
              ],
              C: [
                12,
                12,
                0
              ],
              B: [
                0,
                12,
                0
              ]
            },
            segments: [
              {
                from: "E",
                to: "H"
              },
              {
                from: "H",
                to: "G"
              },
              {
                from: "G",
                to: "F",
                dashed: true
              },
              {
                from: "F",
                to: "E",
                dashed: true
              },
              {
                from: "A",
                to: "D"
              },
              {
                from: "D",
                to: "C"
              },
              {
                from: "C",
                to: "B"
              },
              {
                from: "B",
                to: "A"
              },
              {
                from: "E",
                to: "A"
              },
              {
                from: "H",
                to: "D"
              },
              {
                from: "G",
                to: "C"
              },
              {
                from: "F",
                to: "B",
                dashed: true
              }
            ],
            sideLabels: [
              {
                between: [
                  "E",
                  "H"
                ],
                text: "12 cm",
                labelPos: [
                  6,
                  -1.5,
                  12
                ]
              }
            ],
            angles: []
          }
        }
      },
      {
        explanation: "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        workingOut: "\\(\\tan(\\angle CEB) = \\frac{12}{12\\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\implies \\angle CEB \\approx 35.3^\\circ\\)",
        graphData: null
      },
      {
        explanation: "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        workingOut: "\\(35.3^\\circ\\)",
        graphData: null
      },
      {
        explanation: "Final answer: 35.3^\\circ. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        workingOut: "\\(35.3^\\circ\\)",
        graphData: null
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          E: [
            0,
            0,
            12
          ],
          H: [
            12,
            0,
            12
          ],
          G: [
            12,
            0,
            0
          ],
          F: [
            0,
            0,
            0
          ],
          A: [
            0,
            12,
            12
          ],
          D: [
            12,
            12,
            12
          ],
          C: [
            12,
            12,
            0
          ],
          B: [
            0,
            12,
            0
          ]
        },
        segments: [
          {
            from: "E",
            to: "H"
          },
          {
            from: "H",
            to: "G"
          },
          {
            from: "G",
            to: "F",
            dashed: true
          },
          {
            from: "F",
            to: "E",
            dashed: true
          },
          {
            from: "A",
            to: "D"
          },
          {
            from: "D",
            to: "C"
          },
          {
            from: "C",
            to: "B"
          },
          {
            from: "B",
            to: "A"
          },
          {
            from: "E",
            to: "A"
          },
          {
            from: "H",
            to: "D"
          },
          {
            from: "G",
            to: "C"
          },
          {
            from: "F",
            to: "B",
            dashed: true
          }
        ],
        sideLabels: [
          {
            between: [
              "E",
              "H"
            ],
            text: "12 cm",
            labelPos: [
              6,
              -1.5,
              12
            ]
          }
        ],
        angles: []
      }
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q3a",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the square pyramid shown, find \\(AC\\), the diagonal of the square base. (leave your answer as a surd)",
    opts: [
      "\\(-10\\sqrt{2}\\)",
      "\\(10\\sqrt{2}\\)",
      "\\(10\\sqrt{2} + 1\\)",
      "\\(10\\sqrt{3}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "ABCD is a square, so triangle ADC is right-angled at D. Use Pythagoras’ theorem with legs AD and DC.",
    solution: "Triangle ADC is right-angled at D (a corner of the square base): \\(AC = \\sqrt{AD^2+DC^2} = \\sqrt{10^2+10^2} = \\sqrt{200} = 10\\sqrt{2}\\)",
    solutionSteps: [
      {
        explanation: "AC is the diagonal of the square base ABCD. It is the hypotenuse of right triangle ADC, which is right-angled at D (a corner of the square).",
        workingOut: "\\(AD = 10 \\text{ cm}, \\quad DC = 10 \\text{ cm} \\quad (\\text{sides of the square base})\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"190\" x2=\"280\" y2=\"330\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<text x=\"256\" y=\"260\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AC = ?</text>\n<text x=\"256\" y=\"260\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AC = ?</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "Apply Pythagoras’ theorem in triangle ADC, using AD and DC as the two legs.",
        workingOut: "\\(AC^2 = AD^2 + DC^2 = 10^2 + 10^2\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"190\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<text x=\"250\" y=\"225\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AD</text>\n<text x=\"250\" y=\"225\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AD</text>\n<text x=\"210\" y=\"306\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">DC</text>\n<text x=\"210\" y=\"306\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">DC</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate the sum, then take the square root, simplifying the surd.",
        workingOut: "\\(AC = \\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"190\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<text x=\"250\" y=\"225\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AD</text>\n<text x=\"250\" y=\"225\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AD</text>\n<text x=\"210\" y=\"306\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">DC</text>\n<text x=\"210\" y=\"306\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">DC</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "This is the exact (surd) answer, as requested — no rounding needed.",
        workingOut: "\\(AC = 10\\sqrt{2} \\text{ cm} \\;(\\approx 14.14 \\text{ cm})\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"190\" x2=\"280\" y2=\"330\" stroke=\"#16a34a\" stroke-width=\"3\" stroke-dasharray=\"3,3\"/>\n<text x=\"246\" y=\"260\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 14.14</text>\n<text x=\"246\" y=\"260\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 14.14</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"190\" x2=\"280\" y2=\"330\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<text x=\"256\" y=\"260\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AC = ?</text>\n<text x=\"256\" y=\"260\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AC = ?</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q3b",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the square pyramid shown, find \\(OC\\), where \\(O\\) is the centre of the square base. (leave your answer as a surd)",
    opts: [
      "\\(-5\\sqrt{2}\\)",
      "\\(5\\sqrt{2}\\)",
      "\\(5\\sqrt{2} + 1\\)",
      "\\(5\\sqrt{3}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "The diagonals of a square bisect each other, so O (the centre) is the midpoint of diagonal AC. OC is half of AC.",
    solution: "O is the midpoint of diagonal AC (diagonals of a square bisect each other), so \\(OC = \\frac{AC}{2} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}\\)",
    solutionSteps: [
      {
        explanation: "O is the centre of the square base, which is also the midpoint of diagonal AC — the diagonals of a square bisect each other. From the previous part, AC has already been found.",
        workingOut: "\\(AC = 10\\sqrt{2} \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"190\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OC = ?</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">OC = ?</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "Since O is the midpoint of AC, OC is exactly half the length of the full diagonal.",
        workingOut: "\\(OC = \\frac{AC}{2}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"190\" x2=\"280\" y2=\"330\" stroke=\"#4f46e5\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"3,3\"/>\n<text x=\"250\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AC</text>\n<text x=\"250\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OC</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">OC</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the value of AC and simplify.",
        workingOut: "\\(OC = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"190\" x2=\"280\" y2=\"330\" stroke=\"#4f46e5\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"3,3\"/>\n<text x=\"250\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AC</text>\n<text x=\"250\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">AC</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OC</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">OC</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "This is the exact (surd) answer, as requested.",
        workingOut: "\\(OC = 5\\sqrt{2} \\text{ cm} \\;(\\approx 7.07 \\text{ cm})\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"190\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#16a34a\" stroke-width=\"3\" stroke-dasharray=\"3,3\"/>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 7.07</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 7.07</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"190\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OC = ?</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">OC = ?</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q3c",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the square pyramid shown, \\(VO = 12\\) cm is the height. Find \\(VC\\). (leave your answer as a surd)",
    opts: [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(\\sqrt{194}\\)",
      "\\(\\sqrt{194} + 1\\)"
    ],
    a: 2,
    answer: "2",
    hint: "Triangle VOC is right-angled at O (VO is the vertical height, OC lies in the horizontal base plane). Use Pythagoras’ theorem.",
    solution: "Triangle VOC is right-angled at O: \\(VC = \\sqrt{VO^2+OC^2} = \\sqrt{12^2+(5\\sqrt{2})^2} = \\sqrt{144+50} = \\sqrt{194}\\)",
    solutionSteps: [
      {
        explanation: "VC is a slant edge of the pyramid, and the hypotenuse of right triangle VOC (right-angled at O, since VO is vertical and OC lies flat in the base).",
        workingOut: "\\(VO = 12 \\text{ cm}, \\quad OC = 5\\sqrt{2} \\text{ cm} \\quad (\\text{found previously})\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n<text x=\"306\" y=\"200\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">VC = ?</text>\n<text x=\"306\" y=\"200\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">VC = ?</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "Apply Pythagoras’ theorem in triangle VOC, using VO and OC as the two legs.",
        workingOut: "\\(VC^2 = VO^2 + OC^2 = 12^2 + (5\\sqrt{2})^2\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">VO</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">VO</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OC</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">OC</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate each square: \\(12^2=144\\) and \\((5\\sqrt{2})^2 = 25 \\times 2 = 50\\), then add.",
        workingOut: "\\(VC^2 = 144 + 50 = 194\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">VO</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">VO</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OC</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">OC</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "Take the square root. 194 has no perfect-square factors, so this surd cannot be simplified further.",
        workingOut: "\\(VC = \\sqrt{194} \\text{ cm} \\;(\\approx 13.93 \\text{ cm})\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<text x=\"310\" y=\"200\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 13.93</text>\n<text x=\"310\" y=\"200\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 13.93</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n<text x=\"306\" y=\"200\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">VC = ?</text>\n<text x=\"306\" y=\"200\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">VC = ?</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q3d",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the square pyramid shown, \\(VO = 12\\) cm is the height. Find \\(\\angle VCO\\). (correct to one decimal place)",
    opts: [
      "\\(-59.5^\\circ\\)",
      "\\(59.5^\\circ\\)",
      "\\(59.5^\\circ + 1\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "In right triangle VOC (right-angled at O), \\(\\angle VCO\\) is at vertex C. VO is opposite this angle, OC is adjacent — use the tangent ratio.",
    solution: "In right triangle VOC, \\(\\tan(\\angle VCO) = \\frac{VO}{OC} = \\frac{12}{5\\sqrt{2}} \\approx 1.697\\), so \\(\\angle VCO \\approx 59.5^\\circ\\)",
    solutionSteps: [
      {
        explanation: "In right triangle VOC (right-angled at O), \\(\\angle VCO\\) is at vertex C. Relative to this angle, VO is the opposite side and OC is the adjacent side.",
        workingOut: "\\(VO = 12 \\text{ cm}, \\quad OC = 5\\sqrt{2} \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<text x=\"274\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠VCO = ?</text>\n<text x=\"274\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">∠VCO = ?</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "Use the tangent ratio, since we know the opposite and adjacent sides relative to \\(\\angle VCO\\).",
        workingOut: "\\(\\tan(\\angle VCO) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{VO}{OC}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"3,3\"/>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">VO</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">VO</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OC</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">OC</text>\n<text x=\"274\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠VCO</text>\n<text x=\"274\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠VCO</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the known lengths and evaluate the ratio.",
        workingOut: "\\(\\tan(\\angle VCO) = \\frac{12}{5\\sqrt{2}} \\approx 1.6971\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"3,3\"/>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">VO</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">VO</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OC</text>\n<text x=\"288\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">OC</text>\n<text x=\"274\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠VCO</text>\n<text x=\"274\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠VCO</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "Apply the inverse tangent function, then round to one decimal place.",
        workingOut: "\\(\\angle VCO = \\tan^{-1}(1.6971) \\approx 59.5^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<text x=\"274\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 59.5°</text>\n<text x=\"274\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 59.5°</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<text x=\"274\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠VCO = ?</text>\n<text x=\"274\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">∠VCO = ?</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q3e",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the square pyramid shown, find \\(OM\\), where \\(M\\) is the midpoint of side \\(BC\\).",
    opts: [
      "\\(-5\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(6\\)"
    ],
    a: 2,
    answer: "2",
    hint: "O is the centre of the square base, directly opposite the midpoint of each side. OM is half the side length of the square.",
    solution: "Since M is the midpoint of BC, OM is perpendicular to BC and equal to half the side length: \\(OM = \\frac{DC}{2} = \\frac{10}{2} = 5\\)",
    solutionSteps: [
      {
        explanation: "M is the midpoint of side BC. O, the centre of the square, sits directly opposite the midpoint of every side, so OM runs perpendicular to BC.",
        workingOut: "\\(DC = 10 \\text{ cm} \\quad (\\text{side length of the square base})\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OM = ?</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">OM = ?</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "OM is exactly half the side length of the square base.",
        workingOut: "\\(OM = \\frac{1}{2} \\times DC\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\"/>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OM</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">OM</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the side length and evaluate.",
        workingOut: "\\(OM = \\frac{1}{2} \\times 10\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#4f46e5\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\"/>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OM</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">OM</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "This is the final answer — no rounding needed.",
        workingOut: "\\(OM = 5 \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#16a34a\" stroke-width=\"3\" stroke-dasharray=\"4,3\"/>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">= 5</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">= 5</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OM = ?</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">OM = ?</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q3f",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the square pyramid shown, \\(VO = 12\\) cm is the height. Find \\(\\angle VMO\\). (correct to one decimal place)",
    opts: [
      "\\(-67.4^\\circ\\)",
      "\\(67.4^\\circ\\)",
      "\\(67.4^\\circ + 1\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "Extract right triangle VOM: VO is the vertical height (opposite \\(\\angle VMO\\)), OM is half the base side (adjacent). Use \\(\\tan(\\angle VMO) = \\frac{VO}{OM}\\).",
    solution: "In right triangle VOM (right angle at O), \\(\\tan(\\angle VMO) = \\frac{VO}{OM} = \\frac{12}{5} = 2.4\\), so \\(\\angle VMO = \\tan^{-1}(2.4) \\approx 67.4^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the right-angled triangle VOM inside the solid: O is the centre of the square base, M is the midpoint of side BC, and V is the apex directly above O. Since VO is the vertical height and OM lies in the horizontal base plane, the angle at O is a right angle.",
        workingOut: "\\(VO = 12 \\text{ cm} \\quad (\\text{given height}), \\qquad OM = \\frac{1}{2}(10) = 5 \\text{ cm} \\quad (\\text{half the base side, since } M \\text{ is the midpoint of } BC)\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"340\" y2=\"295\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">VO</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">VO</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OM</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">OM</text>\n<text x=\"346\" y=\"273\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠VMO = ?</text>\n<text x=\"346\" y=\"273\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">∠VMO = ?</text>\n</svg>"
        }
      },
      {
        explanation: "In right triangle VOM, \\(\\angle VMO\\) is at vertex M. Relative to this angle, VO is the opposite side and OM is the adjacent side, so use the tangent ratio.",
        workingOut: "\\(\\tan(\\angle VMO) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{VO}{OM}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"340\" y2=\"295\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">VO</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">VO</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OM</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">OM</text>\n<text x=\"346\" y=\"273\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠VMO</text>\n<text x=\"346\" y=\"273\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠VMO</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the known lengths and evaluate the ratio.",
        workingOut: "\\(\\tan(\\angle VMO) = \\frac{12}{5} = 2.4\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"340\" y2=\"295\" stroke=\"#e11d48\" stroke-width=\"2\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">VO</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">VO</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OM</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">OM</text>\n<text x=\"346\" y=\"273\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠VMO</text>\n<text x=\"346\" y=\"273\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠VMO</text>\n</svg>"
        }
      },
      {
        explanation: "Apply the inverse tangent function to both sides to solve for the angle, then round to one decimal place.",
        workingOut: "\\(\\angle VMO = \\tan^{-1}(2.4) \\approx 67.4^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"340\" y2=\"295\" stroke=\"#16a34a\" stroke-width=\"2.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">VO</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">VO</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OM</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">OM</text>\n<text x=\"346\" y=\"273\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 67.4°</text>\n<text x=\"346\" y=\"273\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 67.4°</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"340\" y2=\"295\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">VO</text>\n<text x=\"258\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">VO</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">OM</text>\n<text x=\"312\" y=\"297.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">OM</text>\n<text x=\"346\" y=\"273\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠VMO = ?</text>\n<text x=\"346\" y=\"273\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">∠VMO = ?</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q3g",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 60,
    question: "In the square pyramid shown, \\(VO = 12\\) cm is the height. Find \\(\\angle VBM\\). (correct to one decimal place)",
    opts: [
      "\\(-69.0^\\circ\\)",
      "\\(69.0^\\circ\\)",
      "\\(69.0^\\circ + 1\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "In right triangle VMB (right-angled at M, since VM ⊥ BC), \\(\\angle VBM\\) is at vertex B. VM is opposite, MB is adjacent — use the tangent ratio.",
    solution: "In right triangle VMB, \\(\\tan(\\angle VBM) = \\frac{VM}{MB} = \\frac{13}{5} = 2.6\\), so \\(\\angle VBM \\approx 69.0^\\circ\\)",
    solutionSteps: [
      {
        explanation: "Since OM ⊥ BC and VO ⊥ the base, the plane VOM is perpendicular to BC, so VM ⊥ BC too — triangle VMB is right-angled at M. First find VM using right triangle VOM (right-angled at O).",
        workingOut: "\\(VM = \\sqrt{VO^2+OM^2} = \\sqrt{12^2+5^2} = \\sqrt{169} = 13 \\text{ cm}, \\quad MB = 5 \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"340\" y2=\"295\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"340\" y1=\"295\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2.5\"/>\n<text x=\"366\" y=\"246\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠VBM = ?</text>\n<text x=\"366\" y=\"246\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">∠VBM = ?</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "In right triangle VMB, \\(\\angle VBM\\) is at vertex B. Relative to this angle, VM is the opposite side and MB is the adjacent side.",
        workingOut: "\\(\\tan(\\angle VBM) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{VM}{MB}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"340\" y2=\"295\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"340\" y1=\"295\" x2=\"400\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<text x=\"330\" y=\"182.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">VM</text>\n<text x=\"330\" y=\"182.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">VM</text>\n<text x=\"370\" y=\"317\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">MB</text>\n<text x=\"370\" y=\"317\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">MB</text>\n<text x=\"366\" y=\"246\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠VBM</text>\n<text x=\"366\" y=\"246\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠VBM</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the known lengths and evaluate the ratio.",
        workingOut: "\\(\\tan(\\angle VBM) = \\frac{13}{5} = 2.6\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"340\" y2=\"295\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"340\" y1=\"295\" x2=\"400\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<text x=\"330\" y=\"182.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">VM</text>\n<text x=\"330\" y=\"182.5\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">VM</text>\n<text x=\"370\" y=\"317\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">MB</text>\n<text x=\"370\" y=\"317\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">MB</text>\n<text x=\"366\" y=\"246\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠VBM</text>\n<text x=\"366\" y=\"246\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠VBM</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      },
      {
        explanation: "Apply the inverse tangent function, then round to one decimal place.",
        workingOut: "\\(\\angle VBM = \\tan^{-1}(2.6) \\approx 69.0^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"340\" y2=\"295\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"340\" y1=\"295\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2.5\"/>\n<text x=\"366\" y=\"246\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 69.0°</text>\n<text x=\"366\" y=\"246\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 69.0°</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 480 380\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"400\" y1=\"260\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"190\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"140\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"330\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"280\" y1=\"70\" x2=\"140\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"2\"/>\n<path d=\"M 280 70 L 140 260 L 280 330 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<path d=\"M 280 70 L 280 330 L 400 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.5\" stroke=\"none\"/>\n<line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"280\" y2=\"330\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"280\" y1=\"260\" x2=\"340\" y2=\"295\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n<line x1=\"280\" y1=\"70\" x2=\"340\" y2=\"295\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"340\" y1=\"295\" x2=\"400\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2.5\"/>\n<text x=\"366\" y=\"246\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠VBM = ?</text>\n<text x=\"366\" y=\"246\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">∠VBM = ?</text>\n<circle cx=\"280\" cy=\"190\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"270\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"400\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"414\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"280\" cy=\"330\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"274\" y=\"352\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<circle cx=\"140\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"120\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"280\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">V</text>\n<text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">V</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">O</text>\n<text x=\"262\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n<circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">M</text>\n<text x=\"356\" y=\"301\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">M</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">10 cm</text>\n<text x=\"210\" y=\"321\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">10 cm</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q4a",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "AEFD is a horizontal rectangle, and B, C sit directly above E, F respectively so that ABCD is a rectangle inclined at angle \\(\\theta\\) to the horizontal (hinged along AD). \\(AD = 32\\) cm, \\(AE = 24\\) cm, and \\(BE = 41\\) cm. Find \\(DC\\) (exact value).",
    opts: [
      "\\(\\dfrac{13}{6}\\)",
      "\\(\\sqrt{2257}\\)",
      "\\(\\sqrt{2257} + 1\\)",
      "\\(\\sqrt{3357}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "DC is opposite AB in rectangle ABCD, so DC = AB. Find AB using right triangle ABE (right-angled at E, since BE is vertical and AE is horizontal).",
    solution: "In right triangle ABE (right-angled at E): \\(AB = \\sqrt{AE^2+BE^2} = \\sqrt{24^2+41^2} = \\sqrt{2257}\\). Since DC and AB are opposite sides of rectangle ABCD, \\(DC = AB = \\sqrt{2257}\\).",
    solutionSteps: [
      {
        explanation: "DC and AB are opposite sides of rectangle ABCD, so they are equal in length: DC = AB. Find AB using right triangle ABE, which is right-angled at E (BE is the vertical rise, AE is horizontal).",
        workingOut: "\\(AE = 24 \\text{ cm}, \\quad BE = 41 \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n<text x=\"176\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AB = DC = ?</text>\n<text x=\"176\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AB = DC = ?</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AE</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#f59e0b\">AE</text>\n<text x=\"147\" y=\"190\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">BE</text>\n<text x=\"147\" y=\"190\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#f59e0b\">BE</text>\n</svg>"
        }
      },
      {
        explanation: "Apply Pythagoras’ theorem in triangle ABE, using AE and BE as the two legs.",
        workingOut: "\\(AB^2 = AE^2 + BE^2 = 24^2 + 41^2\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<text x=\"176\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AB = DC = ?</text>\n<text x=\"176\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AB = DC = ?</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AE</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">AE</text>\n<text x=\"147\" y=\"190\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">BE</text>\n<text x=\"147\" y=\"190\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">BE</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate each square and add: \\(24^2=576\\), \\(41^2=1681\\).",
        workingOut: "\\(AB^2 = 576 + 1681 = 2257\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<text x=\"176\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AB = DC = ?</text>\n<text x=\"176\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AB = DC = ?</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AE</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">AE</text>\n<text x=\"147\" y=\"190\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">BE</text>\n<text x=\"147\" y=\"190\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">BE</text>\n</svg>"
        }
      },
      {
        explanation: "2257 has no perfect-square factors, so take the square root as the final surd — and since DC = AB, this is also the answer to DC.",
        workingOut: "\\(DC = AB = \\sqrt{2257} \\text{ cm} \\;(\\approx 47.5 \\text{ cm})\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<text x=\"176\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 47.5</text>\n<text x=\"176\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 47.5</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AE</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">AE</text>\n<text x=\"147\" y=\"190\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">BE</text>\n<text x=\"147\" y=\"190\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">BE</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<text x=\"176\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AB = DC = ?</text>\n<text x=\"176\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = DC = ?</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q4b",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "AEFD is a horizontal rectangle, and B, C sit directly above E, F respectively so that ABCD is a rectangle inclined at angle \\(\\theta\\) to the horizontal (hinged along AD). \\(AD = 32\\) cm, \\(AE = 24\\) cm, and \\(BE = 41\\) cm. Find \\(AF\\) (exact value).",
    opts: [
      "\\(-40\\)",
      "\\(39\\)",
      "\\(40\\)",
      "\\(41\\)"
    ],
    a: 2,
    answer: "2",
    hint: "AF is the diagonal of the horizontal rectangle AEFD. Use right triangle AEF (right-angled at E), with EF = AD = 32 cm (opposite sides of the rectangle).",
    solution: "EF is opposite AD in rectangle AEFD, so EF = AD = 32 cm. In right triangle AEF (right-angled at E): \\(AF = \\sqrt{AE^2+EF^2} = \\sqrt{24^2+32^2} = \\sqrt{1600} = 40\\) cm.",
    solutionSteps: [
      {
        explanation: "AF is the diagonal of rectangle AEFD, and the hypotenuse of right triangle AEF (right-angled at E). Since EF is opposite AD in the rectangle, EF = AD = 32 cm.",
        workingOut: "\\(AE = 24 \\text{ cm}, \\quad EF = AD = 32 \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n<text x=\"206\" y=\"328\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AF = ?</text>\n<text x=\"206\" y=\"328\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AF = ?</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AE</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#f59e0b\">AE</text>\n<text x=\"165\" y=\"300\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">EF</text>\n<text x=\"165\" y=\"300\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#f59e0b\">EF</text>\n</svg>"
        }
      },
      {
        explanation: "Apply Pythagoras’ theorem in triangle AEF, using AE and EF as the two legs.",
        workingOut: "\\(AF^2 = AE^2 + EF^2 = 24^2 + 32^2\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<text x=\"206\" y=\"328\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AF = ?</text>\n<text x=\"206\" y=\"328\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AF = ?</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AE</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">AE</text>\n<text x=\"165\" y=\"300\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">EF</text>\n<text x=\"165\" y=\"300\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">EF</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate each square and add: \\(24^2=576\\), \\(32^2=1024\\).",
        workingOut: "\\(AF^2 = 576 + 1024 = 1600\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<text x=\"206\" y=\"328\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AF = ?</text>\n<text x=\"206\" y=\"328\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">AF = ?</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AE</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">AE</text>\n<text x=\"165\" y=\"300\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">EF</text>\n<text x=\"165\" y=\"300\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4f46e5\">EF</text>\n</svg>"
        }
      },
      {
        explanation: "Take the square root — 1600 is a perfect square, so the answer is a whole number, not a surd.",
        workingOut: "\\(AF = \\sqrt{1600} = 40 \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<text x=\"206\" y=\"328\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">= 40</text>\n<text x=\"206\" y=\"328\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">= 40</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AE</text>\n<text x=\"135\" y=\"294\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">AE</text>\n<text x=\"165\" y=\"300\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">EF</text>\n<text x=\"165\" y=\"300\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12.5\" font-weight=\"700\" fill=\"#16a34a\">EF</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<text x=\"206\" y=\"328\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AF = ?</text>\n<text x=\"206\" y=\"328\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AF = ?</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q4c",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "AEFD is a horizontal rectangle, and B, C sit directly above E, F respectively so that ABCD is a rectangle inclined at angle \\(\\theta\\) to the horizontal (hinged along AD). \\(AD = 32\\) cm, \\(AE = 24\\) cm, and \\(BE = 41\\) cm. Find \\(\\angle CAF\\) (correct to one decimal place).",
    opts: [
      "\\(-45.7^\\circ\\)",
      "\\(45.7^\\circ\\)",
      "\\(45.7^\\circ + 1\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "F is the point directly below C on the horizontal plane (CF is vertical), so triangle ACF is right-angled at F. AF is adjacent to ∠CAF, CF is opposite — use the tangent ratio. (AF was found in the previous part; CF = BE, since BC is horizontal and parallel to AD.)",
    solution: "F is directly below C (CF is vertical), so triangle ACF is right-angled at F: \\(\\tan(\\angle CAF) = \\frac{CF}{AF} = \\frac{41}{40} = 1.025\\), so \\(\\angle CAF \\approx 45.7^\\circ\\).",
    solutionSteps: [
      {
        explanation: "F sits directly below C on the horizontal base (CF is vertical), so triangle ACF is right-angled at F. Relative to \\(\\angle CAF\\) (at vertex A), CF is the opposite side and AF is the adjacent side. AF = 40 was found in the previous part; CF = BE = 41 (BC is horizontal and parallel to AD, so C is the same height above F as B is above E).",
        workingOut: "\\(AF = 40 \\text{ cm}, \\quad CF = BE = 41 \\text{ cm}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"300\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n<line x1=\"200\" y1=\"320\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<text x=\"172\" y=\"276\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠CAF = ?</text>\n<text x=\"172\" y=\"276\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">∠CAF = ?</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Use the tangent ratio, since we know the opposite and adjacent sides relative to \\(\\angle CAF\\).",
        workingOut: "\\(\\tan(\\angle CAF) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{CF}{AF}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"300\" stroke=\"#4f46e5\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"200\" y1=\"320\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<text x=\"172\" y=\"276\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠CAF</text>\n<text x=\"172\" y=\"276\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠CAF</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the known lengths and evaluate the ratio.",
        workingOut: "\\(\\tan(\\angle CAF) = \\frac{41}{40} = 1.025\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"300\" stroke=\"#4f46e5\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"200\" y1=\"320\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<text x=\"172\" y=\"276\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠CAF</text>\n<text x=\"172\" y=\"276\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠CAF</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      },
      {
        explanation: "Apply the inverse tangent function, then round to one decimal place.",
        workingOut: "\\(\\angle CAF = \\tan^{-1}(1.025) \\approx 45.7^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"300\" stroke=\"#16a34a\" stroke-width=\"2.5\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"200\" y1=\"320\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<text x=\"172\" y=\"276\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 45.7°</text>\n<text x=\"172\" y=\"276\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 45.7°</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 420\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"200\" y1=\"320\" x2=\"110\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<line x1=\"310\" y1=\"360\" x2=\"200\" y2=\"320\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"120\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"310\" y1=\"180\" x2=\"310\" y2=\"360\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"260\" x2=\"220\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n<path d=\"M 200 320 L 220 120 L 310 180 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.4\" stroke=\"none\"/>\n<path d=\"M 200 320 L 110 260 L 220 300 L 310 360 Z\" fill=\"#dbeafe\" fill-opacity=\"0.25\" stroke=\"none\"/>\n<line x1=\"200\" y1=\"320\" x2=\"220\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"220\" y1=\"300\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"200\" y1=\"320\" x2=\"310\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<text x=\"172\" y=\"276\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠CAF = ?</text>\n<text x=\"172\" y=\"276\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">∠CAF = ?</text>\n<circle cx=\"200\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"184\" y=\"326\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"110\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">E</text>\n<text x=\"94\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">E</text>\n<circle cx=\"220\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">F</text>\n<text x=\"234\" y=\"296\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">F</text>\n<circle cx=\"310\" cy=\"360\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">D</text>\n<text x=\"320\" y=\"376\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">D</text>\n<circle cx=\"220\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"214\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<circle cx=\"310\" cy=\"180\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">C</text>\n<text x=\"320\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"700\" fill=\"#1e293b\">C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q5a",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "The base of a tree is situated \\(50\\) metres due north of a point \\(P\\). The angle of elevation of the top of the tree from \\(P\\) is \\(32^\\circ\\). \\(Q\\) is a point \\(100\\) metres due east of \\(P\\).\n\nFind the height of the tree, correct to one decimal place.",
    opts: [
      "\\(-31.2\\)",
      "\\(30.2\\)",
      "\\(31.2\\)",
      "\\(32.2\\)"
    ],
    a: 2,
    answer: "2",
    hint: "In the vertical right triangle formed by P, the base of the tree, and the top of the tree (right-angled at the base), PT = 50 m is adjacent to the 32° angle of elevation, and the height h is opposite. Use the tangent ratio.",
    solution: "In the vertical triangle (right-angled at the tree's base): \\(\\tan(32^\\circ) = \\frac{h}{50}\\), so \\(h = 50\\tan(32^\\circ) \\approx 31.2\\) m.",
    solutionSteps: [
      {
        explanation: "The angle of elevation is measured at P, in the vertical plane containing P and the tree. This forms a right triangle: right-angled at the base of the tree (T), with PT = 50 m as the horizontal leg (adjacent to the 32° angle) and the tree's height h as the vertical leg (opposite).",
        workingOut: "\\(PT = 50 \\text{ m}, \\quad \\angle P = 32^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#f59e0b\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">P</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">P</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top of tree</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top of tree</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">PT = 50 m</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">PT = 50 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h = ?</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">h = ?</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">32°</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">32°</text>\n</svg>"
        }
      },
      {
        explanation: "Use the tangent ratio, since we know the adjacent side and want the opposite side.",
        workingOut: "\\(\\tan(32^\\circ) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{h}{50}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">P</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">P</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top of tree</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top of tree</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">PT</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">PT</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">h</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">32°</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">32°</text>\n</svg>"
        }
      },
      {
        explanation: "Rearrange to make h the subject, then evaluate.",
        workingOut: "\\(h = 50 \\times \\tan(32^\\circ) \\approx 50 \\times 0.6249\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">P</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">P</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top of tree</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top of tree</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">PT</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">PT</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">h</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">32°</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">32°</text>\n</svg>"
        }
      },
      {
        explanation: "Compute the product and round to one decimal place.",
        workingOut: "\\(h \\approx 31.2 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">P</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">P</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top of tree</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top of tree</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">PT = 50 m</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">PT = 50 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 31.2 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 31.2 m</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">32°</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">32°</text>\n</svg>"
        }
      }
    ],
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q5b-i",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "The base of a tree is situated \\(50\\) metres due north of a point \\(P\\). The angle of elevation of the top of the tree from \\(P\\) is \\(32^\\circ\\). \\(Q\\) is a point \\(100\\) metres due east of \\(P\\).\n\nFind the distance of \\(Q\\) from the base of the tree.",
    opts: [
      "\\(-111.8\\)",
      "\\(110.8\\)",
      "\\(111.8\\)",
      "\\(112.8\\)"
    ],
    a: 2,
    answer: "2",
    hint: "On the horizontal ground (plan view), P, Q and the tree's base T form a right triangle with the right angle at P (PT points north, PQ points east — perpendicular directions).",
    solution: "On the ground, triangle PQT is right-angled at P: \\(QT = \\sqrt{PQ^2+PT^2} = \\sqrt{100^2+50^2} = \\sqrt{12500} \\approx 111.8\\) m.",
    solutionSteps: [
      {
        explanation: "On the horizontal ground, P, Q, and the tree's base T form a right triangle, right-angled at P — since PT runs due north and PQ runs due east, these two directions are perpendicular.",
        workingOut: "\\(PT = 50 \\text{ m}, \\quad PQ = 100 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"110\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"110\" y1=\"280\" x2=\"340\" y2=\"280\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"340\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"60\" y1=\"300\" x2=\"60\" y2=\"274\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 55 280 L 60 270 L 65 280 Z\" fill=\"#475569\"/>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"110\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">P</text>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">P</text>\n<circle cx=\"110\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T (tree base)</text>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T (tree base)</text>\n<circle cx=\"340\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Q</text>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Q</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">50 m</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">50 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">100 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">100 m</text>\n<text x=\"255\" y=\"195\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">QT = ?</text>\n<text x=\"255\" y=\"195\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">QT = ?</text>\n</svg>"
        }
      },
      {
        explanation: "Apply Pythagoras' theorem in triangle PQT, using PT and PQ as the two legs.",
        workingOut: "\\(QT^2 = PQ^2 + PT^2 = 100^2 + 50^2\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"110\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"110\" y1=\"280\" x2=\"340\" y2=\"280\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"340\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"60\" y1=\"300\" x2=\"60\" y2=\"274\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 55 280 L 60 270 L 65 280 Z\" fill=\"#475569\"/>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"110\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">P</text>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">P</text>\n<circle cx=\"110\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T (tree base)</text>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T (tree base)</text>\n<circle cx=\"340\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Q</text>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Q</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">50 m</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">50 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">100 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">100 m</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate each square and add: \\(100^2=10000\\), \\(50^2=2500\\).",
        workingOut: "\\(QT^2 = 10000 + 2500 = 12500\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"110\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"110\" y1=\"280\" x2=\"340\" y2=\"280\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"340\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"60\" y1=\"300\" x2=\"60\" y2=\"274\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 55 280 L 60 270 L 65 280 Z\" fill=\"#475569\"/>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"110\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">P</text>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">P</text>\n<circle cx=\"110\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T (tree base)</text>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T (tree base)</text>\n<circle cx=\"340\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Q</text>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Q</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">50 m</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">50 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">100 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">100 m</text>\n</svg>"
        }
      },
      {
        explanation: "Take the square root and round to one decimal place.",
        workingOut: "\\(QT = \\sqrt{12500} \\approx 111.8 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"110\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"110\" y1=\"280\" x2=\"340\" y2=\"280\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"340\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"60\" y1=\"300\" x2=\"60\" y2=\"274\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 55 280 L 60 270 L 65 280 Z\" fill=\"#475569\"/>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"110\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">P</text>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">P</text>\n<circle cx=\"110\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T (tree base)</text>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T (tree base)</text>\n<circle cx=\"340\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Q</text>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Q</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">50 m</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">50 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">100 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">100 m</text>\n<text x=\"255\" y=\"195\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 111.8 m</text>\n<text x=\"255\" y=\"195\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 111.8 m</text>\n</svg>"
        }
      }
    ],
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q5b-ii",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "The base of a tree is situated \\(50\\) metres due north of a point \\(P\\). The angle of elevation of the top of the tree from \\(P\\) is \\(32^\\circ\\). \\(Q\\) is a point \\(100\\) metres due east of \\(P\\).\n\nFind the angle of elevation of the top of the tree from \\(Q\\), correct to one decimal place.",
    opts: [
      "\\(-15.6^\\circ\\)",
      "\\(15.6^\\circ\\)",
      "\\(15.6^\\circ + 1\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "In the vertical right triangle formed by Q, the base of the tree, and the top of the tree (right-angled at the base), QT (found previously) is adjacent to the required angle, and the height h (found earlier) is opposite. Use the tangent ratio.",
    solution: "In the vertical triangle (right-angled at the tree's base): \\(\\tan(\\angle Q) = \\frac{h}{QT} = \\frac{31.24}{111.80} \\approx 0.2794\\), so \\(\\angle Q \\approx 15.6^\\circ\\).",
    solutionSteps: [
      {
        explanation: "The angle of elevation from Q is in the vertical plane containing Q and the tree. This forms a right triangle, right-angled at the tree's base, with QT as the horizontal leg (adjacent) and the tree's height h as the vertical leg (opposite) — both already found in the earlier parts.",
        workingOut: "\\(QT \\approx 111.80 \\text{ m}, \\quad h \\approx 31.24 \\text{ m} \\quad (\\text{unrounded values kept for accuracy})\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Q</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Q</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top of tree</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top of tree</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">QT ≈ 111.8 m</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">QT ≈ 111.8 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h ≈ 31.2 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">h ≈ 31.2 m</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠Q = ?</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">∠Q = ?</text>\n</svg>"
        }
      },
      {
        explanation: "Use the tangent ratio, since we know the opposite and adjacent sides.",
        workingOut: "\\(\\tan(\\angle Q) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{h}{QT}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#4f46e5\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Q</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Q</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top of tree</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top of tree</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">QT</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">QT</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">h</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠Q</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠Q</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the unrounded values and evaluate the ratio.",
        workingOut: "\\(\\tan(\\angle Q) = \\frac{31.24}{111.80} \\approx 0.2794\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#4f46e5\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Q</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Q</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top of tree</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top of tree</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">QT</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">QT</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">h</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠Q</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠Q</text>\n</svg>"
        }
      },
      {
        explanation: "Apply the inverse tangent function, then round to one decimal place.",
        workingOut: "\\(\\angle Q = \\tan^{-1}(0.2794) \\approx 15.6^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Q</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Q</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top of tree</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top of tree</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">QT ≈ 111.8 m</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">QT ≈ 111.8 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h ≈ 31.2 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">h ≈ 31.2 m</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 15.6°</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 15.6°</text>\n</svg>"
        }
      }
    ],
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q5b-iii",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "The base of a tree is situated \\(50\\) metres due north of a point \\(P\\). The angle of elevation of the top of the tree from \\(P\\) is \\(32^\\circ\\). \\(Q\\) is a point \\(100\\) metres due east of \\(P\\).\n\nFind the bearing of the tree from \\(Q\\), correct to one decimal place.",
    opts: [
      "\\(-296.6^\\circ\\)",
      "\\(296.6^\\circ\\)",
      "\\(296.6^\\circ + 1\\)",
      "\\(396.6^\\circ\\)"
    ],
    a: 1,
    answer: "1",
    hint: "From Q, the tree lies north and west — first find the acute angle θ between north and QT using the right triangle PQT (right-angled at P), then convert to a true bearing.",
    solution: "From Q, the tree is in the north-west direction. θ (measured west of north) satisfies \\(\\tan\\theta = \\frac{PQ}{PT} = \\frac{100}{50} = 2\\), so \\(\\theta \\approx 63.43^\\circ\\), giving a true bearing of \\(360^\\circ - 63.43^\\circ \\approx 296.6^\\circ\\).",
    solutionSteps: [
      {
        explanation: "From Q, the tree (T) lies to the north and west, since T is north of P and Q is east of P. Let θ be the acute angle at Q, measured from due north (from Q) around to the line QT — this is the angle in right triangle PQT at vertex Q, since QP points due west from Q.",
        workingOut: "\\(PT = 50 \\text{ m} \\quad (\\text{north-south offset}), \\quad PQ = 100 \\text{ m} \\quad (\\text{east-west offset})\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"110\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"110\" y1=\"280\" x2=\"340\" y2=\"280\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"340\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"60\" y1=\"300\" x2=\"60\" y2=\"274\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 55 280 L 60 270 L 65 280 Z\" fill=\"#475569\"/>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<line x1=\"340\" y1=\"280\" x2=\"340\" y2=\"220\" stroke=\"#475569\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/>\n<text x=\"340\" y=\"214\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"340\" y=\"214\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"110\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">P</text>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">P</text>\n<circle cx=\"110\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T (tree base)</text>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T (tree base)</text>\n<circle cx=\"340\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Q</text>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Q</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">50 m</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">50 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">100 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">100 m</text>\n<text x=\"270\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">bearing = ?</text>\n<text x=\"270\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">bearing = ?</text>\n</svg>"
        }
      },
      {
        explanation: "In right triangle PQT (right-angled at P), θ is the angle at Q. Relative to θ, PT (the north-south leg) is opposite and PQ (the east-west leg) is adjacent — since θ is measured from the north-south direction.",
        workingOut: "\\(\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{PQ}{PT}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"110\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"110\" y1=\"280\" x2=\"340\" y2=\"280\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"340\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"60\" y1=\"300\" x2=\"60\" y2=\"274\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 55 280 L 60 270 L 65 280 Z\" fill=\"#475569\"/>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<line x1=\"340\" y1=\"280\" x2=\"340\" y2=\"220\" stroke=\"#475569\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/>\n<text x=\"340\" y=\"214\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"340\" y=\"214\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"110\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">P</text>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">P</text>\n<circle cx=\"110\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T (tree base)</text>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T (tree base)</text>\n<circle cx=\"340\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Q</text>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Q</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">50 m</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">50 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">100 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">100 m</text>\n<text x=\"270\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">θ (west of N)</text>\n<text x=\"270\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">θ (west of N)</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute the known distances and evaluate.",
        workingOut: "\\(\\tan\\theta = \\frac{100}{50} = 2 \\implies \\theta = \\tan^{-1}(2) \\approx 63.43^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"110\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"110\" y1=\"280\" x2=\"340\" y2=\"280\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"340\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"60\" y1=\"300\" x2=\"60\" y2=\"274\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 55 280 L 60 270 L 65 280 Z\" fill=\"#475569\"/>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<line x1=\"340\" y1=\"280\" x2=\"340\" y2=\"220\" stroke=\"#475569\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/>\n<text x=\"340\" y=\"214\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"340\" y=\"214\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"110\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">P</text>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">P</text>\n<circle cx=\"110\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T (tree base)</text>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T (tree base)</text>\n<circle cx=\"340\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Q</text>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Q</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">50 m</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">50 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">100 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">100 m</text>\n<text x=\"270\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">θ (west of N)</text>\n<text x=\"270\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">θ (west of N)</text>\n</svg>"
        }
      },
      {
        explanation: "Since the tree is to the west of north from Q, the true bearing is measured clockwise from north, all the way around: \\(360^\\circ - \\theta\\). Round to one decimal place.",
        workingOut: "\\(\\text{Bearing} = 360^\\circ - 63.43^\\circ \\approx 296.6^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"110\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"110\" y1=\"280\" x2=\"340\" y2=\"280\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"340\" y1=\"280\" x2=\"110\" y2=\"110\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"60\" y1=\"300\" x2=\"60\" y2=\"274\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 55 280 L 60 270 L 65 280 Z\" fill=\"#475569\"/>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"60\" y=\"266\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<line x1=\"340\" y1=\"280\" x2=\"340\" y2=\"220\" stroke=\"#475569\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/>\n<text x=\"340\" y=\"214\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"340\" y=\"214\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"110\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">P</text>\n<text x=\"92\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">P</text>\n<circle cx=\"110\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">T (tree base)</text>\n<text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">T (tree base)</text>\n<circle cx=\"340\" cy=\"280\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Q</text>\n<text x=\"354\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Q</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">50 m</text>\n<text x=\"110\" y=\"195\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">50 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">100 m</text>\n<text x=\"225\" y=\"304\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">100 m</text>\n<text x=\"270\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 296.6°</text>\n<text x=\"270\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 296.6°</text>\n</svg>"
        }
      }
    ],
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q6a",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Dillon and Eugene are both looking at a tower of height \\(35\\) metres. Dillon is standing due south of the tower and he measures the angle of elevation from the ground to the top of the tower to be \\(15^\\circ\\). Eugene is standing due east of the tower and he measures the angle of elevation from the ground to the top of the tower to be \\(20^\\circ\\).\n\nFind, correct to one decimal place, the distance Dillon is from the foot of the tower.",
    opts: [
      "\\(-130.6\\)",
      "\\(129.6\\)",
      "\\(130.6\\)",
      "\\(131.6\\)"
    ],
    a: 2,
    answer: "2",
    hint: "In the vertical right triangle (right-angled at the tower's base), the tower height (35 m) is opposite Dillon's 15° angle of elevation, and Dillon's distance d is adjacent. Use the tangent ratio.",
    solution: "In the vertical triangle: \\(\\tan(15^\\circ) = \\frac{35}{d} \\implies d = \\frac{35}{\\tan(15^\\circ)} \\approx 130.6\\) m.",
    solutionSteps: [
      {
        explanation: "Dillon, the tower's base, and the tower's top form a right triangle, right-angled at the base. The height (35 m) is opposite Dillon's angle of elevation (15°), and Dillon's unknown distance d is adjacent.",
        workingOut: "\\(\\text{height} = 35 \\text{ m}, \\quad \\angle \\text{Dillon} = 15^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#f59e0b\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Dillon</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Dillon</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">d = ?</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">d = ?</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">35 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">35 m</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">15°</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">15°</text>\n</svg>"
        }
      },
      {
        explanation: "Use the tangent ratio, since we know the opposite side and want the adjacent side.",
        workingOut: "\\(\\tan(15^\\circ) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{35}{d}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#4f46e5\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Dillon</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Dillon</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">d</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">d</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">35 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">35 m</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">15°</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">15°</text>\n</svg>"
        }
      },
      {
        explanation: "Rearrange to make d the subject.",
        workingOut: "\\(d = \\frac{35}{\\tan(15^\\circ)} \\approx \\frac{35}{0.2679}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#4f46e5\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Dillon</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Dillon</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">d</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">d</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">35 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">35 m</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">15°</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">15°</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate the division and round to one decimal place.",
        workingOut: "\\(d \\approx 130.6 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Dillon</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Dillon</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 130.6 m</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 130.6 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">35 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">35 m</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">15°</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">15°</text>\n</svg>"
        }
      }
    ],
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q6b",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Dillon and Eugene are both looking at a tower of height \\(35\\) metres. Dillon is standing due south of the tower and he measures the angle of elevation from the ground to the top of the tower to be \\(15^\\circ\\). Eugene is standing due east of the tower and he measures the angle of elevation from the ground to the top of the tower to be \\(20^\\circ\\).\n\nFind, correct to one decimal place, the distance Eugene is from the foot of the tower.",
    opts: [
      "\\(-96.2\\)",
      "\\(95.2\\)",
      "\\(96.2\\)",
      "\\(97.2\\)"
    ],
    a: 2,
    answer: "2",
    hint: "In the vertical right triangle (right-angled at the tower's base), the tower height (35 m) is opposite Eugene's 20° angle of elevation, and Eugene's distance d is adjacent. Use the tangent ratio.",
    solution: "In the vertical triangle: \\(\\tan(20^\\circ) = \\frac{35}{d} \\implies d = \\frac{35}{\\tan(20^\\circ)} \\approx 96.2\\) m.",
    solutionSteps: [
      {
        explanation: "Eugene, the tower's base, and the tower's top form a right triangle, right-angled at the base. The height (35 m) is opposite Eugene's angle of elevation (20°), and Eugene's unknown distance d is adjacent.",
        workingOut: "\\(\\text{height} = 35 \\text{ m}, \\quad \\angle \\text{Eugene} = 20^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#f59e0b\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Eugene</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Eugene</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">d = ?</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">d = ?</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">35 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">35 m</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">20°</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">20°</text>\n</svg>"
        }
      },
      {
        explanation: "Use the tangent ratio, since we know the opposite side and want the adjacent side.",
        workingOut: "\\(\\tan(20^\\circ) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{35}{d}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#4f46e5\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Eugene</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Eugene</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">d</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">d</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">35 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">35 m</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">20°</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">20°</text>\n</svg>"
        }
      },
      {
        explanation: "Rearrange to make d the subject.",
        workingOut: "\\(d = \\frac{35}{\\tan(20^\\circ)} \\approx \\frac{35}{0.3640}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#e11d48\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#4f46e5\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Eugene</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Eugene</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">d</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">d</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">35 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">35 m</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">20°</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">20°</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate the division and round to one decimal place.",
        workingOut: "\\(d \\approx 96.2 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 260 L 370 260 L 130 80 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"260\" x2=\"130\" y2=\"80\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"80\" x2=\"370\" y2=\"260\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"116\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Eugene</text>\n<text x=\"384\" y=\"282\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Eugene</text>\n<circle cx=\"130\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">top</text>\n<text x=\"130\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">top</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 96.2 m</text>\n<text x=\"250\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 96.2 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">35 m</text>\n<text x=\"114\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">35 m</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">20°</text>\n<text x=\"324\" y=\"244\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">20°</text>\n</svg>"
        }
      }
    ],
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q6c",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Dillon and Eugene are both looking at a tower of height \\(35\\) metres. Dillon is standing due south of the tower and he measures the angle of elevation from the ground to the top of the tower to be \\(15^\\circ\\). Eugene is standing due east of the tower and he measures the angle of elevation from the ground to the top of the tower to be \\(20^\\circ\\).\n\nFind, correct to one decimal place, the distance between Dillon and Eugene.",
    opts: [
      "\\(-162.2\\)",
      "\\(161.2\\)",
      "\\(162.2\\)",
      "\\(163.2\\)"
    ],
    a: 2,
    answer: "2",
    hint: "On the ground (plan view), Dillon, Eugene and the tower's base form a right triangle with the right angle at the tower's base (due south and due east are perpendicular directions). Use the distances found in the previous two parts.",
    solution: "On the ground, triangle (Dillon, tower base, Eugene) is right-angled at the tower's base: \\(DE = \\sqrt{130.6^2+96.2^2} \\approx 162.2\\) m.",
    solutionSteps: [
      {
        explanation: "On the ground, Dillon (due south of the tower) and Eugene (due east of the tower) form a right angle at the tower's base — south and east are perpendicular directions. Use the distances already found for Dillon and Eugene.",
        workingOut: "\\(\\text{Dillon–base} \\approx 130.6 \\text{ m}, \\quad \\text{Eugene–base} \\approx 96.2 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"230\" y1=\"120\" x2=\"230\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"120\" x2=\"400\" y2=\"120\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"300\" x2=\"400\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"70\" y1=\"100\" x2=\"70\" y2=\"74\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 65 80 L 70 70 L 75 80 Z\" fill=\"#475569\"/>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"230\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"230\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Dillon</text>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Dillon</text>\n<circle cx=\"400\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"416\" y=\"124\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Eugene</text>\n<text x=\"416\" y=\"124\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Eugene</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">130.6 m</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">130.6 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">96.2 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">96.2 m</text>\n<text x=\"345\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">DE = ?</text>\n<text x=\"345\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">DE = ?</text>\n</svg>"
        }
      },
      {
        explanation: "Apply Pythagoras' theorem, using the two distances-to-base as the legs of the right triangle.",
        workingOut: "\\(DE^2 = 130.6^2 + 96.2^2\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"230\" y1=\"120\" x2=\"230\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"120\" x2=\"400\" y2=\"120\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"300\" x2=\"400\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"70\" y1=\"100\" x2=\"70\" y2=\"74\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 65 80 L 70 70 L 75 80 Z\" fill=\"#475569\"/>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"230\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"230\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Dillon</text>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Dillon</text>\n<circle cx=\"400\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"416\" y=\"124\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Eugene</text>\n<text x=\"416\" y=\"124\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Eugene</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">130.6 m</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">130.6 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">96.2 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">96.2 m</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate each square and add.",
        workingOut: "\\(DE^2 \\approx 17056.4 + 9254.4 = 26310.8\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"230\" y1=\"120\" x2=\"230\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"120\" x2=\"400\" y2=\"120\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"300\" x2=\"400\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n<line x1=\"70\" y1=\"100\" x2=\"70\" y2=\"74\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 65 80 L 70 70 L 75 80 Z\" fill=\"#475569\"/>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"230\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"230\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Dillon</text>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Dillon</text>\n<circle cx=\"400\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"416\" y=\"124\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Eugene</text>\n<text x=\"416\" y=\"124\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Eugene</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">130.6 m</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">130.6 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">96.2 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">96.2 m</text>\n</svg>"
        }
      },
      {
        explanation: "Take the square root and round to one decimal place.",
        workingOut: "\\(DE \\approx \\sqrt{26310.8} \\approx 162.2 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"230\" y1=\"120\" x2=\"230\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"120\" x2=\"400\" y2=\"120\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"300\" x2=\"400\" y2=\"120\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"70\" y1=\"100\" x2=\"70\" y2=\"74\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 65 80 L 70 70 L 75 80 Z\" fill=\"#475569\"/>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"230\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"230\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Dillon</text>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Dillon</text>\n<circle cx=\"400\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"416\" y=\"124\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Eugene</text>\n<text x=\"416\" y=\"124\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Eugene</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">130.6 m</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">130.6 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">96.2 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">96.2 m</text>\n<text x=\"345\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 162.2 m</text>\n<text x=\"345\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 162.2 m</text>\n</svg>"
        }
      }
    ],
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q6d",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Dillon and Eugene are both looking at a tower of height \\(35\\) metres. Dillon is standing due south of the tower and he measures the angle of elevation from the ground to the top of the tower to be \\(15^\\circ\\). Eugene is standing due east of the tower and he measures the angle of elevation from the ground to the top of the tower to be \\(20^\\circ\\).\n\nFind, correct to one decimal place, the bearing of Dillon from Eugene.",
    opts: [
      "\\(-216.4^\\circ\\)",
      "\\(216.4^\\circ\\)",
      "\\(216.4^\\circ + 1\\)",
      "\\(316.4^\\circ\\)"
    ],
    a: 1,
    answer: "1",
    hint: "From Eugene, Dillon lies south and west — first find the acute angle φ between south and the line from Eugene to Dillon, using the right triangle (tower base, Dillon, Eugene), then convert to a true bearing.",
    solution: "From Eugene, Dillon is in the south-west direction. In the right triangle at the tower's base, \\(\\tan\\varphi = \\frac{96.2}{130.6} \\approx 0.7366\\), so \\(\\varphi \\approx 36.4^\\circ\\) (west of south), giving a true bearing of \\(180^\\circ + 36.4^\\circ \\approx 216.4^\\circ\\).",
    solutionSteps: [
      {
        explanation: "From Eugene, Dillon lies to the south and west (Dillon is south of the tower, Eugene is east of the tower). Let φ be the acute angle at Eugene, between due south and the line to Dillon, inside the right triangle (tower base, Dillon, Eugene).",
        workingOut: "\\(\\text{Eugene–base} \\approx 96.2 \\text{ m}, \\quad \\text{Dillon–base} \\approx 130.6 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"230\" y1=\"120\" x2=\"230\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"120\" x2=\"400\" y2=\"120\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"300\" x2=\"400\" y2=\"120\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"70\" y1=\"100\" x2=\"70\" y2=\"74\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 65 80 L 70 70 L 75 80 Z\" fill=\"#475569\"/>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<line x1=\"400\" y1=\"120\" x2=\"400\" y2=\"70\" stroke=\"#475569\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/>\n<text x=\"400\" y=\"64\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"400\" y=\"64\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"230\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"230\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Dillon</text>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Dillon</text>\n<circle cx=\"400\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"416\" y=\"114\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Eugene</text>\n<text x=\"416\" y=\"114\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Eugene</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">130.6 m</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">130.6 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">96.2 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">96.2 m</text>\n<text x=\"310\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">bearing = ?</text>\n<text x=\"310\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">bearing = ?</text>\n</svg>"
        }
      },
      {
        explanation: "Relative to φ (measured from the south direction), the east-west offset (Eugene–base) is opposite and the north-south offset (Dillon–base) is adjacent.",
        workingOut: "\\(\\tan\\varphi = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{96.2}{130.6}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"230\" y1=\"120\" x2=\"230\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"120\" x2=\"400\" y2=\"120\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"300\" x2=\"400\" y2=\"120\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"70\" y1=\"100\" x2=\"70\" y2=\"74\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 65 80 L 70 70 L 75 80 Z\" fill=\"#475569\"/>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<line x1=\"400\" y1=\"120\" x2=\"400\" y2=\"70\" stroke=\"#475569\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/>\n<text x=\"400\" y=\"64\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"400\" y=\"64\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"230\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"230\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Dillon</text>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Dillon</text>\n<circle cx=\"400\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"416\" y=\"114\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Eugene</text>\n<text x=\"416\" y=\"114\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Eugene</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">130.6 m</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">130.6 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">96.2 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">96.2 m</text>\n<text x=\"310\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">φ (west of S)</text>\n<text x=\"310\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">φ (west of S)</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate the ratio and apply the inverse tangent function.",
        workingOut: "\\(\\tan\\varphi \\approx 0.7366 \\implies \\varphi \\approx 36.4^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"230\" y1=\"120\" x2=\"230\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"120\" x2=\"400\" y2=\"120\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"300\" x2=\"400\" y2=\"120\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"70\" y1=\"100\" x2=\"70\" y2=\"74\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 65 80 L 70 70 L 75 80 Z\" fill=\"#475569\"/>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<line x1=\"400\" y1=\"120\" x2=\"400\" y2=\"70\" stroke=\"#475569\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/>\n<text x=\"400\" y=\"64\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"400\" y=\"64\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"230\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"230\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Dillon</text>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Dillon</text>\n<circle cx=\"400\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"416\" y=\"114\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Eugene</text>\n<text x=\"416\" y=\"114\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Eugene</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">130.6 m</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">130.6 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">96.2 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">96.2 m</text>\n<text x=\"310\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">φ (west of S)</text>\n<text x=\"310\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">φ (west of S)</text>\n</svg>"
        }
      },
      {
        explanation: "Since Dillon is south-west of Eugene, the true bearing is measured clockwise from north, past east and south: \\(180^\\circ + \\varphi\\). Round to one decimal place.",
        workingOut: "\\(\\text{Bearing} = 180^\\circ + 36.4^\\circ \\approx 216.4^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"230\" y1=\"120\" x2=\"230\" y2=\"300\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"120\" x2=\"400\" y2=\"120\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"230\" y1=\"300\" x2=\"400\" y2=\"120\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"70\" y1=\"100\" x2=\"70\" y2=\"74\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 65 80 L 70 70 L 75 80 Z\" fill=\"#475569\"/>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"70\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<line x1=\"400\" y1=\"120\" x2=\"400\" y2=\"70\" stroke=\"#475569\" stroke-width=\"1.3\" stroke-dasharray=\"4,3\"/>\n<text x=\"400\" y=\"64\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"400\" y=\"64\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"230\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">tower base</text>\n<text x=\"242\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">tower base</text>\n<circle cx=\"230\" cy=\"300\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Dillon</text>\n<text x=\"216\" y=\"320\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Dillon</text>\n<circle cx=\"400\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"416\" y=\"114\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">Eugene</text>\n<text x=\"416\" y=\"114\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">Eugene</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">130.6 m</text>\n<text x=\"214\" y=\"210\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">130.6 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">96.2 m</text>\n<text x=\"315\" y=\"108\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">96.2 m</text>\n<text x=\"310\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 216.4°</text>\n<text x=\"310\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 216.4°</text>\n</svg>"
        }
      }
    ],
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q7",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "From a point \\(A\\), a lighthouse is on a bearing of \\(026^\\circ\\mathrm{T}\\) and the top of the lighthouse is at angle of elevation of \\(20.25^\\circ\\). From a point \\(B\\), the lighthouse is on a bearing of \\(296^\\circ\\mathrm{T}\\) and the top of the lighthouse is at angle of elevation of \\(10.20^\\circ\\). If \\(A\\) and \\(B\\) are \\(500\\) metres apart, find the height of the lighthouse, correct to the nearest metre.",
    opts: [
      "\\(-81\\)",
      "\\(80\\)",
      "\\(81\\)",
      "\\(82\\)"
    ],
    a: 2,
    answer: "2",
    hint: "Bearings are absolute compass directions, so the angle at L between LA and LB equals the difference between the reverse bearings L→A and L→B — this gives a right angle here. Then use AL²+BL²=AB² together with the two elevation ratios (both equal to the height h) to solve for h.",
    solution: "Reverse bearings give ∠ALB = 90°. Solving AL·tan(20.25°)=BL·tan(10.20°) together with AL²+BL²=500² gives AL≈219.2 m, BL≈449.4 m, so h = AL·tan(20.25°) ≈ 81 m.",
    solutionSteps: [
      {
        explanation: "The bearing of L from A is 026°T, so the reverse bearing (of A from L) is 026°+180°=206°. The bearing of L from B is 296°T, so the reverse bearing (of B from L) is 296°−180°=116°. Since bearings are absolute compass directions, the angle at L between LA and LB is the difference between these reverse bearings.",
        workingOut: "\\(\\angle ALB = 206^\\circ - 116^\\circ = 90^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 400\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"110\" y1=\"320\" x2=\"280\" y2=\"230\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"310\" y1=\"100\" x2=\"280\" y2=\"230\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"110\" y1=\"320\" x2=\"310\" y2=\"100\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"110\" y1=\"320\" x2=\"110\" y2=\"296\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 105 302 L 110 292 L 115 302 Z\" fill=\"#475569\"/>\n<text x=\"110\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"110\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<line x1=\"310\" y1=\"100\" x2=\"310\" y2=\"76\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 305 82 L 310 72 L 315 82 Z\" fill=\"#475569\"/>\n<text x=\"310\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"310\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"280\" cy=\"230\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"292\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">L (lighthouse)</text>\n<text x=\"292\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">L (lighthouse)</text>\n<circle cx=\"110\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"92\" y=\"330\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"92\" y=\"330\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"310\" cy=\"100\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"324\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"324\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<text x=\"180\" y=\"210\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AB = 500 m</text>\n<text x=\"180\" y=\"210\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 500 m</text>\n</svg>"
        }
      },
      {
        explanation: "In the vertical planes through A and B, the lighthouse height h is opposite each elevation angle, with AL and BL as the adjacent (horizontal) legs. Since triangle ALB is right-angled at L (from the plan view), also AL²+BL²=AB².",
        workingOut: "\\(h = AL\\tan(20.25^\\circ) = BL\\tan(10.20^\\circ), \\qquad AL^2+BL^2 = 500^2\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 400\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"110\" y1=\"320\" x2=\"280\" y2=\"230\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"310\" y1=\"100\" x2=\"280\" y2=\"230\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"110\" y1=\"320\" x2=\"310\" y2=\"100\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"110\" y1=\"320\" x2=\"110\" y2=\"296\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 105 302 L 110 292 L 115 302 Z\" fill=\"#475569\"/>\n<text x=\"110\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"110\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<line x1=\"310\" y1=\"100\" x2=\"310\" y2=\"76\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 305 82 L 310 72 L 315 82 Z\" fill=\"#475569\"/>\n<text x=\"310\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"310\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"280\" cy=\"230\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"292\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">L (lighthouse)</text>\n<text x=\"292\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">L (lighthouse)</text>\n<circle cx=\"110\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"92\" y=\"330\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"92\" y=\"330\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"310\" cy=\"100\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"324\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"324\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<text x=\"180\" y=\"210\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AB = 500 m</text>\n<text x=\"180\" y=\"210\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 500 m</text>\n<text x=\"290\" y=\"260\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠ALB = 90°</text>\n<text x=\"290\" y=\"260\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠ALB = 90°</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute AL = BL·\\(\\frac{\\tan(10.20^\\circ)}{\\tan(20.25^\\circ)}\\) ≈ 0.4877·BL into the Pythagorean equation and solve for BL, then AL.",
        workingOut: "\\((0.4877\\,BL)^2 + BL^2 = 250000 \\implies BL \\approx 449.4 \\text{ m}, \\quad AL \\approx 219.2 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 400\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"110\" y1=\"320\" x2=\"280\" y2=\"230\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"310\" y1=\"100\" x2=\"280\" y2=\"230\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"110\" y1=\"320\" x2=\"310\" y2=\"100\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"110\" y1=\"320\" x2=\"110\" y2=\"296\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 105 302 L 110 292 L 115 302 Z\" fill=\"#475569\"/>\n<text x=\"110\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"110\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<line x1=\"310\" y1=\"100\" x2=\"310\" y2=\"76\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 305 82 L 310 72 L 315 82 Z\" fill=\"#475569\"/>\n<text x=\"310\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"310\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"280\" cy=\"230\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"292\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">L (lighthouse)</text>\n<text x=\"292\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">L (lighthouse)</text>\n<circle cx=\"110\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"92\" y=\"330\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"92\" y=\"330\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"310\" cy=\"100\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"324\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"324\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<text x=\"180\" y=\"210\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AB = 500 m</text>\n<text x=\"180\" y=\"210\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 500 m</text>\n<text x=\"290\" y=\"260\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠ALB = 90°</text>\n<text x=\"290\" y=\"260\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠ALB = 90°</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute AL back into the height equation and round to the nearest metre.",
        workingOut: "\\(h = 219.2 \\times \\tan(20.25^\\circ) \\approx 80.9 \\approx 81 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 400\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"110\" y1=\"320\" x2=\"280\" y2=\"230\" stroke=\"#16a34a\" stroke-width=\"2.5\"/>\n<line x1=\"310\" y1=\"100\" x2=\"280\" y2=\"230\" stroke=\"#16a34a\" stroke-width=\"2.5\"/>\n<line x1=\"110\" y1=\"320\" x2=\"310\" y2=\"100\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"110\" y1=\"320\" x2=\"110\" y2=\"296\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 105 302 L 110 292 L 115 302 Z\" fill=\"#475569\"/>\n<text x=\"110\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"110\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<line x1=\"310\" y1=\"100\" x2=\"310\" y2=\"76\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 305 82 L 310 72 L 315 82 Z\" fill=\"#475569\"/>\n<text x=\"310\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"310\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"280\" cy=\"230\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"292\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">L (lighthouse)</text>\n<text x=\"292\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">L (lighthouse)</text>\n<circle cx=\"110\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"92\" y=\"330\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"92\" y=\"330\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"310\" cy=\"100\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"324\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"324\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<text x=\"180\" y=\"210\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AB = 500 m</text>\n<text x=\"180\" y=\"210\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 500 m</text>\n<text x=\"290\" y=\"260\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠ALB = 90°</text>\n<text x=\"290\" y=\"260\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">∠ALB = 90°</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 400\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"110\" y1=\"320\" x2=\"280\" y2=\"230\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"310\" y1=\"100\" x2=\"280\" y2=\"230\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n<line x1=\"110\" y1=\"320\" x2=\"310\" y2=\"100\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"110\" y1=\"320\" x2=\"110\" y2=\"296\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 105 302 L 110 292 L 115 302 Z\" fill=\"#475569\"/>\n<text x=\"110\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"110\" y=\"288\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<line x1=\"310\" y1=\"100\" x2=\"310\" y2=\"76\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 305 82 L 310 72 L 315 82 Z\" fill=\"#475569\"/>\n<text x=\"310\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"310\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"280\" cy=\"230\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"292\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">L (lighthouse)</text>\n<text x=\"292\" y=\"220\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">L (lighthouse)</text>\n<circle cx=\"110\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"92\" y=\"330\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">A</text>\n<text x=\"92\" y=\"330\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">A</text>\n<circle cx=\"310\" cy=\"100\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"324\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">B</text>\n<text x=\"324\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">B</text>\n<text x=\"180\" y=\"210\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">AB = 500 m</text>\n<text x=\"180\" y=\"210\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">AB = 500 m</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q8a",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "From the top of a cliff that runs north-south, the angle of depression of a yacht, \\(200\\) metres out to sea and due east of the observer, is \\(20^\\circ\\). When the observer next looks at the yacht, he notices that it has sailed \\(150\\) metres parallel to the cliff.\n\nFind the height of the cliff, correct to the nearest metre.",
    opts: [
      "\\(-73\\)",
      "\\(72\\)",
      "\\(73\\)",
      "\\(74\\)"
    ],
    a: 2,
    answer: "2",
    hint: "The cliff, the observer, and the yacht form a right triangle, right-angled at the base of the cliff. The 200 m distance is adjacent to the 20° angle of depression (equal to the angle of elevation from the yacht, alternate angles), and the cliff height h is opposite.",
    solution: "Angle of depression = angle of elevation from the yacht (alternate angles): \\(\\tan(20^\\circ) = \\frac{h}{200} \\implies h = 200\\tan(20^\\circ) \\approx 73\\) m.",
    solutionSteps: [
      {
        explanation: "The angle of depression from the observer equals the angle of elevation from the yacht (alternate angles, since the observer's horizontal line of sight is parallel to sea level). This gives a right triangle: right-angled at the cliff base, with the 200 m distance adjacent to the 20° angle, and the cliff height h opposite.",
        workingOut: "\\(\\text{horizontal distance} = 200 \\text{ m}, \\quad \\text{angle} = 20^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 60 L 130 260 L 380 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"60\" x2=\"130\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"130\" y1=\"260\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">observer</text>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">observer</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">yacht</text>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">yacht</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">h</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">200 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">200 m</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">20°</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">20°</text>\n</svg>"
        }
      },
      {
        explanation: "Use the tangent ratio, since we know the adjacent side and want the opposite side.",
        workingOut: "\\(\\tan(20^\\circ) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{h}{200}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 60 L 130 260 L 380 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"60\" x2=\"130\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"130\" y1=\"260\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">observer</text>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">observer</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">yacht</text>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">yacht</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">h</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">200 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">200 m</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">20°</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">20°</text>\n</svg>"
        }
      },
      {
        explanation: "Rearrange to make h the subject.",
        workingOut: "\\(h = 200 \\times \\tan(20^\\circ) \\approx 200 \\times 0.3640\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 60 L 130 260 L 380 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"60\" x2=\"130\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"130\" y1=\"260\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">observer</text>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">observer</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">yacht</text>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">yacht</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">h</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">200 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">200 m</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">20°</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">20°</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate the product and round to the nearest metre.",
        workingOut: "\\(h \\approx 72.8 \\approx 73 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 60 L 130 260 L 380 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"60\" x2=\"130\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"130\" y1=\"260\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">observer</text>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">observer</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">yacht</text>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">yacht</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">h</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">200 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">200 m</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 73 m</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 73 m</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 60 L 130 260 L 380 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"60\" x2=\"130\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"130\" y1=\"260\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">observer</text>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">observer</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">yacht</text>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">yacht</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">h</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">200 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">200 m</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">20°</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">20°</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q8b",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "From the top of a cliff that runs north-south, the angle of depression of a yacht, \\(200\\) metres out to sea and due east of the observer, is \\(20^\\circ\\). When the observer next looks at the yacht, he notices that it has sailed \\(150\\) metres parallel to the cliff.\n\nFind the distance the yacht is from the observer after it has sailed \\(150\\) metres parallel to the cliff, correct to the nearest metre.",
    opts: [
      "\\(-260\\)",
      "\\(259\\)",
      "\\(260\\)",
      "\\(261\\)"
    ],
    a: 2,
    answer: "2",
    hint: "First find the new horizontal distance from the cliff base to the yacht (Pythagoras, since \"parallel to the cliff\" is perpendicular to the original line to the yacht). Then find the actual 3D distance from the observer (who is h ≈ 72.8 m up), again using Pythagoras with the cliff height.",
    solution: "New horizontal distance from base: \\(d_h = \\sqrt{200^2+150^2} = 250\\) m. Distance from the observer: \\(d = \\sqrt{250^2+72.8^2} \\approx 260\\) m.",
    solutionSteps: [
      {
        explanation: "On the ground (plan view), the yacht's old position, its new position, and the cliff base form a right triangle, right-angled at the old position (200 m east, then 150 m north/south — perpendicular directions). Find the new horizontal distance from the cliff base.",
        workingOut: "\\(d_h^2 = 200^2 + 150^2 = 40000+22500=62500 \\implies d_h = 250 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"380\" y1=\"260\" x2=\"280\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"130\" y1=\"60\" x2=\"280\" y2=\"260\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"-4\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 125 2 L 130 -8 L 135 2 Z\" fill=\"#475569\"/>\n<text x=\"130\" y=\"-12\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"130\" y=\"-12\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"386\" y=\"248\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">old position</text>\n<text x=\"386\" y=\"248\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">old position</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"290\" y=\"280\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">new position</text>\n<text x=\"290\" y=\"280\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">new position</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">200 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">200 m</text>\n<text x=\"320\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">150 m</text>\n<text x=\"320\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\">150 m</text>\n<text x=\"245\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">d = ?</text>\n<text x=\"245\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">d = ?</text>\n</svg>"
        }
      },
      {
        explanation: "The distance \"from the observer\" is the actual 3D line-of-sight distance — not just the horizontal distance. This forms a second right triangle (right-angled at the cliff base) with legs \\(d_h\\) (horizontal) and h ≈ 72.8 m (the cliff height, found earlier, kept unrounded).",
        workingOut: "\\(d^2 = d_h^2 + h^2 = 250^2 + 72.8^2\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"380\" y1=\"260\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"130\" y1=\"60\" x2=\"280\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"-4\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 125 2 L 130 -8 L 135 2 Z\" fill=\"#475569\"/>\n<text x=\"130\" y=\"-12\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"130\" y=\"-12\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"386\" y=\"248\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">old position</text>\n<text x=\"386\" y=\"248\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">old position</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"290\" y=\"280\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">new position</text>\n<text x=\"290\" y=\"280\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">new position</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">200 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">200 m</text>\n<text x=\"320\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">150 m</text>\n<text x=\"320\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">150 m</text>\n<text x=\"245\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">d (horizontal)</text>\n<text x=\"245\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">d (horizontal)</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate each square and add.",
        workingOut: "\\(d^2 \\approx 62500 + 5299 = 67799\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"380\" y1=\"260\" x2=\"280\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"130\" y1=\"60\" x2=\"280\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"-4\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 125 2 L 130 -8 L 135 2 Z\" fill=\"#475569\"/>\n<text x=\"130\" y=\"-12\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"130\" y=\"-12\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"386\" y=\"248\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">old position</text>\n<text x=\"386\" y=\"248\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">old position</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"290\" y=\"280\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">new position</text>\n<text x=\"290\" y=\"280\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">new position</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">200 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">200 m</text>\n<text x=\"320\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">150 m</text>\n<text x=\"320\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">150 m</text>\n<text x=\"245\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">d (horizontal)</text>\n<text x=\"245\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#4f46e5\">d (horizontal)</text>\n</svg>"
        }
      },
      {
        explanation: "Take the square root and round to the nearest metre.",
        workingOut: "\\(d \\approx \\sqrt{67799} \\approx 260 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"380\" y1=\"260\" x2=\"280\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"130\" y1=\"60\" x2=\"280\" y2=\"260\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"-4\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 125 2 L 130 -8 L 135 2 Z\" fill=\"#475569\"/>\n<text x=\"130\" y=\"-12\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"130\" y=\"-12\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"386\" y=\"248\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">old position</text>\n<text x=\"386\" y=\"248\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">old position</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"290\" y=\"280\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">new position</text>\n<text x=\"290\" y=\"280\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">new position</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">200 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">200 m</text>\n<text x=\"320\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">150 m</text>\n<text x=\"320\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\">150 m</text>\n<text x=\"245\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 260 m</text>\n<text x=\"245\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 260 m</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"380\" y1=\"260\" x2=\"280\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"130\" y1=\"60\" x2=\"280\" y2=\"260\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"-4\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 125 2 L 130 -8 L 135 2 Z\" fill=\"#475569\"/>\n<text x=\"130\" y=\"-12\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"130\" y=\"-12\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"386\" y=\"248\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">old position</text>\n<text x=\"386\" y=\"248\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">old position</text>\n<circle cx=\"280\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"290\" y=\"280\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">new position</text>\n<text x=\"290\" y=\"280\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">new position</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">200 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">200 m</text>\n<text x=\"320\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">150 m</text>\n<text x=\"320\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#475569\">150 m</text>\n<text x=\"245\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">d = ?</text>\n<text x=\"245\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">d = ?</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q8c",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "From the top of a cliff that runs north-south, the angle of depression of a yacht, \\(200\\) metres out to sea and due east of the observer, is \\(20^\\circ\\). When the observer next looks at the yacht, he notices that it has sailed \\(150\\) metres parallel to the cliff.\n\nFind the angle of depression of the yacht from the top of the cliff when it is in its new position, correct to the nearest degree.",
    opts: [
      "\\(-16^\\circ\\)",
      "\\(16^\\circ\\)",
      "\\(16^\\circ + 1\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    a: 1,
    answer: "1",
    hint: "Use the right triangle formed by the cliff (right-angled at the base): the cliff height h ≈ 72.8 m is opposite the new angle of depression, and the new horizontal distance (250 m, found in the previous part) is adjacent.",
    solution: "In the vertical triangle: \\(\\tan(\\text{angle}) = \\frac{h}{d_h} = \\frac{72.8}{250} \\approx 0.2912\\), so the angle of depression \\(\\approx 16^\\circ\\).",
    solutionSteps: [
      {
        explanation: "The new angle of depression is found in the same vertical right triangle as before, but now using the NEW horizontal distance (250 m, found in the previous part) instead of the original 200 m. The cliff height h ≈ 72.8 m stays the same.",
        workingOut: "\\(h \\approx 72.8 \\text{ m}, \\quad \\text{new horizontal distance} = 250 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 60 L 130 260 L 380 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"60\" x2=\"130\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"130\" y1=\"260\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">observer</text>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">observer</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">yacht</text>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">yacht</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">h</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">250 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">250 m</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">?</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">?</text>\n</svg>"
        }
      },
      {
        explanation: "Use the tangent ratio, since we know the opposite (height) and adjacent (new horizontal distance) sides.",
        workingOut: "\\(\\tan(\\text{angle}) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{h}{250}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 60 L 130 260 L 380 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"60\" x2=\"130\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"130\" y1=\"260\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">observer</text>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">observer</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">yacht</text>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">yacht</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">h</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">250 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">250 m</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠ = ?</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠ = ?</text>\n</svg>"
        }
      },
      {
        explanation: "Substitute and evaluate the ratio.",
        workingOut: "\\(\\tan(\\text{angle}) = \\frac{72.8}{250} \\approx 0.2912\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 60 L 130 260 L 380 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"60\" x2=\"130\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"130\" y1=\"260\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">observer</text>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">observer</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">yacht</text>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">yacht</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">h</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">250 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">250 m</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">∠ = ?</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">∠ = ?</text>\n</svg>"
        }
      },
      {
        explanation: "Apply the inverse tangent function, then round to the nearest degree.",
        workingOut: "\\(\\text{angle} = \\tan^{-1}(0.2912) \\approx 16.2^\\circ \\approx 16^\\circ\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 60 L 130 260 L 380 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"60\" x2=\"130\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"130\" y1=\"260\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">observer</text>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">observer</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">yacht</text>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">yacht</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">h</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">250 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">250 m</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 16°</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 16°</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 340\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 130 60 L 130 260 L 380 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.35\" stroke=\"none\"/>\n<line x1=\"130\" y1=\"60\" x2=\"130\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"130\" y1=\"60\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"130\" y1=\"260\" x2=\"380\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<circle cx=\"130\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">observer</text>\n<text x=\"112\" y=\"250\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">observer</text>\n<circle cx=\"130\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">cliff base</text>\n<text x=\"114\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">cliff base</text>\n<circle cx=\"380\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">yacht</text>\n<text x=\"394\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">yacht</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">h</text>\n<text x=\"110\" y=\"160\" text-anchor=\"end\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">h</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">250 m</text>\n<text x=\"255\" y=\"84\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">250 m</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">?</text>\n<text x=\"140\" y=\"286\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">?</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  },
  {
    id: "y10-12c-q9",
    topicId: "y10-12c",
    c: "12C",
    t: "3D Trigonometry",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "A mast is held in position by means of two taut ropes running from the ground to the top of the mast. One rope is of length \\(40\\) metres and makes an angle of \\(58^\\circ\\) with the ground. Its anchor point with the ground is due south of the mast. The other rope is \\(50\\) metres long and its anchor point is due east of the mast. Find the distance, correct to the nearest metre, between the two anchor points.",
    opts: [
      "\\(-42\\)",
      "\\(41\\)",
      "\\(42\\)",
      "\\(43\\)"
    ],
    a: 2,
    answer: "2",
    hint: "Rope 1 (40 m, 58° to the ground) gives the mast height and the south-anchor distance directly. Use the same height with rope 2 (50 m) to find the east-anchor distance. Then the two ground distances (south and east) are perpendicular, so combine them with Pythagoras.",
    solution: "Rope 1: height ≈ 33.9 m, south distance ≈ 21.2 m. Rope 2: east distance = \\(\\sqrt{50^2-33.9^2}\\) ≈ 36.7 m. Distance between anchors: \\(\\sqrt{21.2^2+36.7^2} \\approx 42\\) m.",
    solutionSteps: [
      {
        explanation: "Rope 1 forms a right triangle with the mast (right-angled at the mast's base): the mast height is opposite the 58° angle, and the south-anchor distance is adjacent. Use sine and cosine to find both from the rope length.",
        workingOut: "\\(\\text{height} = 40\\sin(58^\\circ) \\approx 33.9 \\text{ m}, \\quad \\text{south distance} = 40\\cos(58^\\circ) \\approx 21.2 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 360\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 230 260 L 230 320 L 370 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.3\" stroke=\"none\"/>\n<line x1=\"230\" y1=\"260\" x2=\"230\" y2=\"60\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"230\" y1=\"320\" x2=\"230\" y2=\"60\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n<line x1=\"370\" y1=\"260\" x2=\"230\" y2=\"60\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"230\" y1=\"260\" x2=\"230\" y2=\"320\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"230\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"290\" y1=\"260\" x2=\"290\" y2=\"236\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 285 242 L 290 232 L 295 242 Z\" fill=\"#475569\"/>\n<text x=\"290\" y=\"228\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"290\" y=\"228\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"230\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"240\" y=\"50\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">mast top</text>\n<text x=\"240\" y=\"50\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">mast top</text>\n<circle cx=\"230\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"210\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">mast base</text>\n<text x=\"210\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">mast base</text>\n<circle cx=\"230\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"220\" y=\"342\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">south anchor</text>\n<text x=\"220\" y=\"342\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">south anchor</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">east anchor</text>\n<text x=\"384\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">east anchor</text>\n<text x=\"270\" y=\"290\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">58°</text>\n<text x=\"270\" y=\"290\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">58°</text>\n</svg>"
        }
      },
      {
        explanation: "Rope 2 forms another right triangle with the SAME mast height (right-angled at the mast's base). Use Pythagoras to find the east-anchor distance from the rope length and the height.",
        workingOut: "\\(\\text{east distance} = \\sqrt{50^2 - 33.9^2} = \\sqrt{2500-1149.2} \\approx 36.7 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 360\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 230 260 L 230 320 L 370 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.3\" stroke=\"none\"/>\n<line x1=\"230\" y1=\"260\" x2=\"230\" y2=\"60\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"230\" y1=\"320\" x2=\"230\" y2=\"60\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"370\" y1=\"260\" x2=\"230\" y2=\"60\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n<line x1=\"230\" y1=\"260\" x2=\"230\" y2=\"320\" stroke=\"#4f46e5\" stroke-width=\"2\"/>\n<line x1=\"230\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2\"/>\n<line x1=\"290\" y1=\"260\" x2=\"290\" y2=\"236\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 285 242 L 290 232 L 295 242 Z\" fill=\"#475569\"/>\n<text x=\"290\" y=\"228\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"290\" y=\"228\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"230\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"240\" y=\"50\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">mast top</text>\n<text x=\"240\" y=\"50\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">mast top</text>\n<circle cx=\"230\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"210\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">mast base</text>\n<text x=\"210\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">mast base</text>\n<circle cx=\"230\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"220\" y=\"342\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">south anchor</text>\n<text x=\"220\" y=\"342\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">south anchor</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">east anchor</text>\n<text x=\"384\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">east anchor</text>\n<text x=\"270\" y=\"290\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">58°</text>\n<text x=\"270\" y=\"290\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">58°</text>\n</svg>"
        }
      },
      {
        explanation: "On the ground (plan view), the two anchor points and the mast's base form a right triangle, right-angled at the mast's base — south and east are perpendicular directions.",
        workingOut: "\\(d^2 = 21.2^2 + 36.7^2\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 360\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 230 260 L 230 320 L 370 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.3\" stroke=\"none\"/>\n<line x1=\"230\" y1=\"260\" x2=\"230\" y2=\"60\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"230\" y1=\"320\" x2=\"230\" y2=\"60\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"370\" y1=\"260\" x2=\"230\" y2=\"60\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"230\" y1=\"260\" x2=\"230\" y2=\"320\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"230\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\n<line x1=\"290\" y1=\"260\" x2=\"290\" y2=\"236\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 285 242 L 290 232 L 295 242 Z\" fill=\"#475569\"/>\n<text x=\"290\" y=\"228\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"290\" y=\"228\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"230\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"240\" y=\"50\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">mast top</text>\n<text x=\"240\" y=\"50\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">mast top</text>\n<circle cx=\"230\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"210\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">mast base</text>\n<text x=\"210\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">mast base</text>\n<circle cx=\"230\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"220\" y=\"342\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">south anchor</text>\n<text x=\"220\" y=\"342\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">south anchor</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">east anchor</text>\n<text x=\"384\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">east anchor</text>\n<text x=\"280\" y=\"310\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">d = ?</text>\n<text x=\"280\" y=\"310\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#f59e0b\">d = ?</text>\n</svg>"
        }
      },
      {
        explanation: "Evaluate, take the square root, and round to the nearest metre.",
        workingOut: "\\(d^2 \\approx 449.4 + 1346.9 = 1796.3 \\implies d \\approx 42.4 \\approx 42 \\text{ m}\\)",
        graphData: {
          svg: "<svg viewBox=\"0 0 460 360\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 230 260 L 230 320 L 370 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.3\" stroke=\"none\"/>\n<line x1=\"230\" y1=\"260\" x2=\"230\" y2=\"60\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"230\" y1=\"320\" x2=\"230\" y2=\"60\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"370\" y1=\"260\" x2=\"230\" y2=\"60\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"230\" y1=\"260\" x2=\"230\" y2=\"320\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"230\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<line x1=\"290\" y1=\"260\" x2=\"290\" y2=\"236\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 285 242 L 290 232 L 295 242 Z\" fill=\"#475569\"/>\n<text x=\"290\" y=\"228\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"290\" y=\"228\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"230\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"240\" y=\"50\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">mast top</text>\n<text x=\"240\" y=\"50\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">mast top</text>\n<circle cx=\"230\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"210\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">mast base</text>\n<text x=\"210\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">mast base</text>\n<circle cx=\"230\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"220\" y=\"342\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">south anchor</text>\n<text x=\"220\" y=\"342\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">south anchor</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">east anchor</text>\n<text x=\"384\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">east anchor</text>\n<text x=\"280\" y=\"310\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">≈ 42 m</text>\n<text x=\"280\" y=\"310\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#16a34a\">≈ 42 m</text>\n</svg>"
        }
      }
    ],
    graphData: {
      svg: "<svg viewBox=\"0 0 460 360\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\">\n<path d=\"M 230 260 L 230 320 L 370 260 Z\" fill=\"#dbeafe\" fill-opacity=\"0.3\" stroke=\"none\"/>\n<line x1=\"230\" y1=\"260\" x2=\"230\" y2=\"60\" stroke=\"#475569\" stroke-width=\"2\"/>\n<line x1=\"230\" y1=\"320\" x2=\"230\" y2=\"60\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n<line x1=\"370\" y1=\"260\" x2=\"230\" y2=\"60\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<line x1=\"230\" y1=\"260\" x2=\"230\" y2=\"320\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"230\" y1=\"260\" x2=\"370\" y2=\"260\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"2,3\"/>\n<line x1=\"290\" y1=\"260\" x2=\"290\" y2=\"236\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n<path d=\"M 285 242 L 290 232 L 295 242 Z\" fill=\"#475569\"/>\n<text x=\"290\" y=\"228\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">N</text>\n<text x=\"290\" y=\"228\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">N</text>\n<circle cx=\"230\" cy=\"60\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"240\" y=\"50\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">mast top</text>\n<text x=\"240\" y=\"50\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">mast top</text>\n<circle cx=\"230\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"210\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">mast base</text>\n<text x=\"210\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">mast base</text>\n<circle cx=\"230\" cy=\"320\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"220\" y=\"342\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">south anchor</text>\n<text x=\"220\" y=\"342\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">south anchor</text>\n<circle cx=\"370\" cy=\"260\" r=\"2.5\" fill=\"#1e293b\"/>\n<text x=\"384\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">east anchor</text>\n<text x=\"384\" y=\"264\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"700\" fill=\"#1e293b\">east anchor</text>\n<text x=\"270\" y=\"290\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" stroke=\"#f8fafc\" stroke-width=\"4\" stroke-linejoin=\"round\">58°</text>\n<text x=\"270\" y=\"290\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\">58°</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false
  }
];
