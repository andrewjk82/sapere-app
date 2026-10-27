# Year 12 Extension 2 — Chapter 7: Mechanics

Source basis: `CMS6_Extension2_Yr12_ch07.pdf`, sections 7A–7J. This profile follows the topic structure in `content/chapters/y12e2-7.json`.

## Topic mapping used for the Caringbah 2020 4U trial

| Source item | Topic | Reason |
|---|---|---|
| Q8, Q11(a) | 7D Simple Harmonic Motion and Time | Displacement is given as a function of time; use amplitude, angular frequency, phase and distance travelled. |
| Q9 | 7H Projectile Motion | Resolve the horizontal and vertical velocity components and use the vertical fall time. |
| Q15(b) | 7J Miscellaneous Problems | Acceleration depends on position; use (a=v\,dv/dx), then integrate (dx/dt=v). |
| Q16(b) | 7G Vertical Resisted Motion | Linear resistance (mkv), terminal speed, and the exponential velocity-time solution. |

## Core methods and teaching sequence

### 7D — SHM expressed in time
- Write a sinusoid in a form such as (x=c+a\cos(nt-\alpha)); identify centre (c), amplitude (|a|), angular frequency (n), and period (T=2\pi/n).
- To find an arrival time, solve the displacement equation and select the first valid time after (t=0), respecting the motion's phase and turning points.
- Average speed is total distance travelled divided by elapsed time. Split the path at each turning point; do not substitute net displacement for distance.
- For a cosine displacement, velocity is its derivative. The speed is greatest at the centre and zero at the turning points.

### 7G — vertical motion with resistance proportional to velocity
- Choose and state a positive direction. For a falling particle, downward-positive gives (m\dot v=mg-mkv), because resistance points upward.
- Terminal speed is reached when acceleration is zero: (V=g/k). Rearranging gives (\dot v=k(V-v)).
- With the particle released from rest, solve the first-order equation using (v(0)=0): (v=V(1-e^{-kt})).
- Obtain distance fallen by integrating velocity from zero to the required time. For a fraction (p) of terminal speed, solve (p=1-e^{-kt}).
- A velocity-time sketch starts at ((0,0)), rises concavely toward the horizontal asymptote (v=V), and never crosses it.
- In force diagrams include weight (mg) downward and resistive force (mkv) opposite the velocity; do not draw resistance downward during a fall.

### 7H — projectile motion without resistance
- Resolve initial velocity into horizontal and vertical components. Horizontal acceleration is zero; vertical acceleration is (-g) when upward is positive.
- Use vertical displacement and the appropriate initial/final heights to find flight time, then compute the velocity components at impact.
- The impact direction angle to the horizontal follows from (\tan\theta=|v_y|/|v_x|). State whether the angle is below or above horizontal.

### 7J — miscellaneous mechanics
- When acceleration is supplied as a function of position, use the chain rule (a=dv/dt=(dv/dx)(dx/dt)=v\,dv/dx).
- Integrate with respect to position, apply the initial position and velocity, and choose the sign of the velocity using the stated direction of travel.
- Then solve (dx/dt=v(x)) by separation and apply the initial condition again. Interpret the resulting formulas to describe direction, boundedness, and limiting speed/acceleration.

## Common student pitfalls
- Confusing SHM period with angular frequency, or amplitude with total range.
- Using displacement instead of total path length when finding average speed.
- Selecting a later trigonometric root instead of the first time the particle reaches the target.
- Assigning drag the same direction as velocity, or forgetting that terminal speed means zero net force.
- Integrating acceleration with respect to time when it is given as a function of displacement; use (v\,dv/dx).
- Losing the negative sign in a velocity that remains in the initial negative direction.
- For projectiles, using the initial vertical velocity at impact or mixing up the angle's reference direction.

## Solution and visual requirements
- Explain the choice of coordinates/sign convention before writing a force equation.
- Show algebraic separation, integration constants, initial-condition substitution, and the physical root/time interval.
- Include a force diagram only in the worked solution for a source prompt that asks students to draw one; do not reveal it in the question figure.
- For a requested velocity-time sketch, put the annotated curve in that part's final solution step. Highlight (T,V/2), (2T,3V/4), and the asymptote (V), and pair them with the calculation.
- Keep every diagram at the standing 50% display width, format its mathematical labels legibly, and inspect all labels for overlap and clipping.
