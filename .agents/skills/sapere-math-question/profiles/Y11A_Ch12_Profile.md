# Chapter Profile: Year 11 Advanced Chapter 12
## Probability

### Core concepts and formulas
- Equally likely outcomes: \(P(E)=\frac{\text{number of favourable outcomes}}{\text{number of outcomes}}\).
- For two fair dice there are 36 ordered outcomes; one specified double has probability \(1/36\).
- Complement rule: \(P(E^c)=1-P(E)\).
- Independent stages multiply: \(P(A\cap B)=P(A)P(B)\) when the stages are independent.
- Mutually exclusive alternatives add.
- For repeated independent attempts, the probability of no success in \(n\) attempts is \(q^n\), so at least one success is \(1-q^n\). For an indefinitely repeated race between two players taking alternate turns, sum the relevant geometric sequence of win probabilities.

### Standard solution progression
1. Specify the event whose probability is requested and count the equally likely outcomes for one stage.
2. Build a tree or a short sequence of success/failure branches for repeated stages.
3. Multiply along each branch, add disjoint winning branches, and use a geometric-series sum for an unlimited sequence if appropriate.
4. Check the answer lies between 0 and 1 and state it in the requested form.

### Common pitfalls
- Counting doubles as six outcomes out of 12 faces rather than one ordered pair out of 36.
- Adding probabilities for stages that must happen successively instead of multiplying.
- Omitting the opponent's failure between one player's turns.
- Confusing “wins on one of the first two personal turns” with “wins by the second overall throw.”
