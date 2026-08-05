const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function genSteps(id, question) {
    const q = question || '';

    // q25: R_c = pi * sqrt(D) / B
    const t25 = q.match(/R_c = \\frac\{\\pi \\sqrt\{D\}\}\{B\}.*?D = ([\d\.]+).*?B = ([\d\.]+)/s);
    if (t25) {
      const D = parseFloat(t25[1]), B = parseFloat(t25[2]), pi = 3.14;
      const sqD = Math.sqrt(D);
      const num = pi * sqD;
      const ans = (num / B).toFixed(1);
      return [
        { explanation: `Substitute \\(D = ${D}\\), \\(B = ${B}\\), and \\(\\pi \\approx 3.14\\) into the formula \\(R_c = \\frac{\\pi \\sqrt{D}}{B}\\).`, workingOut: `\\( R_c = \\frac{3.14 \\sqrt{${D}}}{${B}} \\)`, graphData: null },
        { explanation: `Evaluate the square root first, then multiply by \\(3.14\\) for the numerator.`, workingOut: `\\( \\sqrt{${D}} = ${sqD} \\)\n\\( 3.14 \\times ${sqD} = ${num} \\)`, graphData: null },
        { explanation: `Divide by the denominator \\(B\\) and round to one decimal place.`, workingOut: `\\( \\frac{${num}}{${B}} = ${ans} \\)`, graphData: null }
      ];
    }

    // q31: I = (V - nv) / V * 100
    const t31 = q.match(/I = \\frac\{V - n v\}\{V\} \\times 100.*?V = ([\d\.]+).*?n = ([\d\.]+).*?v = ([\d\.]+)/s);
    if (t31) {
      const V = parseFloat(t31[1]), n = parseFloat(t31[2]), v = parseFloat(t31[3]);
      const nv = n * v, num = V - nv, frac = num / V, ans = frac * 100;
      return [
        { explanation: `Substitute \\(V = ${V}\\), \\(n = ${n}\\), and \\(v = ${v}\\) into the formula \\(I = \\frac{V - n v}{V} \\times 100\\).`, workingOut: `\\( I = \\frac{${V} - ${n}(${v})}{${V}} \\times 100 \\)`, graphData: null },
        { explanation: `Evaluate the numerator by multiplying first, then subtracting.`, workingOut: `\\( ${n} \\times ${v} = ${nv} \\)\n\\( ${V} - ${nv} = ${num} \\)`, graphData: null },
        { explanation: `Divide by \\(V\\) and multiply by 100.`, workingOut: `\\( \\frac{${num}}{${V}} \\times 100 = ${frac} \\times 100 = ${ans} \\)`, graphData: null }
      ];
    }

    // q32: 1/F = 1/f1 + 1/f2 - d/(f1f2)
    const t32 = q.match(/\\frac\{1\}\{F\} = \\frac\{1\}\{f_1\} \+ \\frac\{1\}\{f_2\} - \\frac\{d\}\{f_1 f_2\}.*?f_1 = ([\d\.]+).*?f_2 = ([\d\.]+).*?d = ([\d\.]+)/s);
    if (t32) {
      const f1 = parseFloat(t32[1]), f2 = parseFloat(t32[2]), d = parseFloat(t32[3]);
      const den = f1 * f2;
      return [
        { explanation: `Substitute \\(f_1 = ${f1}\\), \\(f_2 = ${f2}\\), and \\(d = ${d}\\) into the lens formula.`, workingOut: `\\( \\frac{1}{F} = \\frac{1}{${f1}} + \\frac{1}{${f2}} - \\frac{${d}}{(${f1})(${f2})} \\)`, graphData: null },
        { explanation: `Evaluate the denominator of the third term.`, workingOut: `\\( ${f1} \\times ${f2} = ${den} \\)`, graphData: null },
        { explanation: `Find a common denominator of \\(${den}\\) and combine the fractions.`, workingOut: `\\( \\frac{1}{F} = \\frac{${f2}}{${den}} + \\frac{${f1}}{${den}} - \\frac{${d}}{${den}} = \\frac{${f2} + ${f1} - ${d}}{${den}} = \\frac{${f2+f1-d}}{${den}} \\)`, graphData: null }
      ];
    }

    // q34: E = Po / (Pi * (1 + kT))
    const t34 = q.match(/E = \\frac\{P_o\}\{P_i \\cdot \(1 \+ k T\)\}.*?P_o = ([\d\.]+).*?P_i = ([\d\.]+).*?k = ([\d\.]+).*?T = ([\d\.]+)/s);
    if (t34) {
      const Po = parseFloat(t34[1]), Pi = parseFloat(t34[2]), k = parseFloat(t34[3]), T = parseFloat(t34[4]);
      const kT = k * T, bracket = 1 + kT, den = Pi * bracket, E = Po / den;
      return [
        { explanation: `Substitute \\(P_o = ${Po}\\), \\(P_i = ${Pi}\\), \\(k = ${k}\\), and \\(T = ${T}\\) into \\(E = \\frac{P_o}{P_i \\cdot (1 + k T)}\\).`, workingOut: `\\( E = \\frac{${Po}}{${Pi} \\times (1 + ${k}(${T}))} \\)`, graphData: null },
        { explanation: `Use BODMAS — evaluate inside the parentheses first.`, workingOut: `\\( ${k} \\times ${T} = ${kT} \\)\n\\( 1 + ${kT} = ${bracket} \\)`, graphData: null },
        { explanation: `Multiply by \\(P_i\\) for the denominator, then divide the numerator.`, workingOut: `\\( ${Pi} \\times ${bracket} = ${den} \\)\n\\( \\frac{${Po}}{${den}} = ${E} \\)`, graphData: null }
      ];
    }

    // q35: r = mv / qB
    const t35 = q.match(/r = \\frac\{m v\}\{q B\}.*?m = ([\d\.]+).*?v = ([\d\.]+).*?q = ([\d\.]+).*?B = ([\d\.]+)/s);
    if (t35) {
      const m = parseFloat(t35[1]), v = parseFloat(t35[2]), q2 = parseFloat(t35[3]), B = parseFloat(t35[4]);
      const num = m * v, den = q2 * B, ans = num / den;
      return [
        { explanation: `Substitute \\(m = ${m}\\), \\(v = ${v}\\), \\(q = ${q2}\\), and \\(B = ${B}\\) into \\(r = \\frac{m v}{q B}\\).`, workingOut: `\\( r = \\frac{${m} \\times ${v}}{${q2} \\times ${B}} \\)`, graphData: null },
        { explanation: `Evaluate the numerator and denominator separately.`, workingOut: `Numerator: \\( ${m} \\times ${v} = ${num} \\)\nDenominator: \\( ${q2} \\times ${B} = ${den} \\)`, graphData: null },
        { explanation: `Divide the numerator by the denominator.`, workingOut: `\\( \\frac{${num}}{${den}} = ${ans} \\)`, graphData: null }
      ];
    }

    // q37: S = WL / d^2
    const t37 = q.match(/S = \\frac\{W L\}\{d\^2\}.*?W = ([\d\.]+).*?L = ([\d\.]+).*?d = ([\d\.]+)/s);
    if (t37) {
      const W = parseFloat(t37[1]), L = parseFloat(t37[2]), d = parseFloat(t37[3]);
      const num = W * L, den = d * d, ans = num / den;
      return [
        { explanation: `Substitute \\(W = ${W}\\), \\(L = ${L}\\), and \\(d = ${d}\\) into \\(S = \\frac{W L}{d^2}\\).`, workingOut: `\\( S = \\frac{${W} \\times ${L}}{(${d})^2} \\)`, graphData: null },
        { explanation: `Evaluate the numerator and the power in the denominator.`, workingOut: `Numerator: \\( ${W} \\times ${L} = ${num} \\)\nDenominator: \\( (${d})^2 = ${den.toFixed(2)} \\)`, graphData: null },
        { explanation: `Divide the numerator by the denominator.`, workingOut: `\\( \\frac{${num}}{${den.toFixed(2)}} = ${ans} \\)`, graphData: null }
      ];
    }

    // q38: D = (P0 + rt) / A
    const t38 = q.match(/D = \\frac\{P_0 \+ r t\}\{A\}.*?P_0 = ([\d\.]+).*?r = (-?[\d\.]+).*?t = ([\d\.]+).*?A = ([\d\.]+)/s);
    if (t38) {
      const P0 = parseFloat(t38[1]), r = parseFloat(t38[2]), t = parseFloat(t38[3]), A = parseFloat(t38[4]);
      const rt = r * t, num = P0 + rt, ans = num / A;
      return [
        { explanation: `Substitute \\(P_0 = ${P0}\\), \\(r = ${r}\\), \\(t = ${t}\\), and \\(A = ${A}\\) into \\(D = \\frac{P_0 + r t}{A}\\).`, workingOut: `\\( D = \\frac{${P0} + (${r})(${t})}{${A}} \\)`, graphData: null },
        { explanation: `Evaluate the numerator by first multiplying, then adding.`, workingOut: `\\( ${r} \\times ${t} = ${rt} \\)\n\\( ${P0} + (${rt}) = ${num} \\)`, graphData: null },
        { explanation: `Divide by the area \\(A\\).`, workingOut: `\\( \\frac{${num}}{${A}} = ${ans} \\)`, graphData: null }
      ];
    }
    
    // q39: v = sqrt(gamma R T / M)
    const t39 = q.match(/v = \\sqrt\{\\frac\{\\gamma R T\}\{M\}\}.*?\\gamma = ([\d\.]+).*?R = ([\d\.]+).*?T = ([\d\.]+).*?M = ([\d\.]+)/s);
    if (t39) {
      const g = parseFloat(t39[1]), R = parseFloat(t39[2]), T = parseFloat(t39[3]), M = parseFloat(t39[4]);
      const num = g * R * T, frac = num / M, ans = Math.round(Math.sqrt(frac));
      return [
        { explanation: `Substitute \\(\\gamma = ${g}\\), \\(R = ${R}\\), \\(T = ${T}\\), and \\(M = ${M}\\) into \\(v = \\sqrt{\\frac{\\gamma R T}{M}}\\).`, workingOut: `\\( v = \\sqrt{\\frac{${g} \\times ${R} \\times ${T}}{${M}}} \\)`, graphData: null },
        { explanation: `Evaluate the numerator, then divide by \\(M\\) before taking the root.`, workingOut: `\\( ${g} \\times ${R} \\times ${T} = ${num} \\)\n\\( \\frac{${num}}{${M}} = ${frac} \\)`, graphData: null },
        { explanation: `Take the square root and round to the nearest integer.`, workingOut: `\\( \\sqrt{${frac}} = ${Math.sqrt(frac).toFixed(2)} \\approx ${ans} \\)`, graphData: null }
      ];
    }

    // q40: C = at / (t^2 + b)
    const t40 = q.match(/C = \\frac\{a t\}\{t\^2 \+ b\}.*?a = ([\d\.]+).*?t = ([\d\.]+).*?b = ([\d\.]+)/s);
    if (t40) {
      const a = parseFloat(t40[1]), t = parseFloat(t40[2]), b = parseFloat(t40[3]);
      const num = a * t, tSq = t * t, den = tSq + b, ans = num / den;
      return [
        { explanation: `Substitute \\(a = ${a}\\), \\(t = ${t}\\), and \\(b = ${b}\\) into \\(C = \\frac{a t}{t^2 + b}\\).`, workingOut: `\\( C = \\frac{${a}(${t})}{(${t})^2 + ${b}} \\)`, graphData: null },
        { explanation: `Evaluate the numerator and the denominator separately.`, workingOut: `Numerator: \\( ${a} \\times ${t} = ${num} \\)\nDenominator: \\( (${t})^2 + ${b} = ${tSq} + ${b} = ${den} \\)`, graphData: null },
        { explanation: `Divide the numerator by the denominator.`, workingOut: `\\( \\frac{${num}}{${den}} = ${ans} \\)`, graphData: null }
      ];
    }
    
    // q41: a = v^2 / r
    const t41 = q.match(/a = \\frac\{v\^2\}\{r\}.*?v = ([\d\.]+).*?r = ([\d\.]+)/s);
    if (t41) {
      const v = parseFloat(t41[1]), r = parseFloat(t41[2]);
      const vSq = v * v, ans = vSq / r;
      return [
        { explanation: `Substitute \\(v = ${v}\\) and \\(r = ${r}\\) into \\(a = \\frac{v^2}{r}\\).`, workingOut: `\\( a = \\frac{(${v})^2}{${r}} \\)`, graphData: null },
        { explanation: `Evaluate the square in the numerator.`, workingOut: `\\( (${v})^2 = ${vSq} \\)`, graphData: null },
        { explanation: `Divide by the radius \\(r\\).`, workingOut: `\\( \\frac{${vSq}}{${r}} = ${ans} \\)`, graphData: null }
      ];
    }

    // q42: A = 2(lw + wh + lh)
    const t42 = q.match(/A = 2\(l w \+ w h \+ l h\).*?l = ([\d\.]+).*?w = ([\d\.]+).*?h = ([\d\.]+)/s);
    if (t42) {
      const l = parseFloat(t42[1]), w = parseFloat(t42[2]), h = parseFloat(t42[3]);
      const lw = l * w, wh = w * h, lh = l * h, sum = lw + wh + lh, ans = 2 * sum;
      return [
        { explanation: `Substitute \\(l = ${l}\\), \\(w = ${w}\\), and \\(h = ${h}\\) into \\(A = 2(l w + w h + l h)\\).`, workingOut: `\\( A = 2((${l})(${w}) + (${w})(${h}) + (${l})(${h})) \\)`, graphData: null },
        { explanation: `Calculate the area of each distinct face (the multiplications).`, workingOut: `\\( ${l} \\times ${w} = ${lw} \\)\n\\( ${w} \\times ${h} = ${wh} \\)\n\\( ${l} \\times ${h} = ${lh} \\)`, graphData: null },
        { explanation: `Add them together, then multiply by 2 for the total surface area.`, workingOut: `Sum = \\( ${lw} + ${wh} + ${lh} = ${sum} \\)\n\\( 2 \\times ${sum} = ${ans} \\)`, graphData: null }
      ];
    }

    // q43: R = d1/k1 + d2/k2
    const t43 = q.match(/R = \\frac\{d_1\}\{k_1\} \+ \\frac\{d_2\}\{k_2\}.*?d_1 = ([\d\.]+).*?k_1 = ([\d\.]+).*?d_2 = ([\d\.]+).*?k_2 = ([\d\.]+)/s);
    if (t43) {
      const d1 = parseFloat(t43[1]), k1 = parseFloat(t43[2]), d2 = parseFloat(t43[3]), k2 = parseFloat(t43[4]);
      const t1 = d1 / k1, t2 = d2 / k2, ans = t1 + t2;
      return [
        { explanation: `Substitute the values into the thermal resistance formula \\(R = \\frac{d_1}{k_1} + \\frac{d_2}{k_2}\\).`, workingOut: `\\( R = \\frac{${d1}}{${k1}} + \\frac{${d2}}{${k2}} \\)`, graphData: null },
        { explanation: `Calculate the resistance of each layer (the divisions) separately.`, workingOut: `\\( \\frac{${d1}}{${k1}} = ${t1} \\)\n\\( \\frac{${d2}}{${k2}} = ${t2} \\)`, graphData: null },
        { explanation: `Add the two thermal resistances together.`, workingOut: `\\( ${t1} + ${t2} = ${ans} \\)`, graphData: null }
      ];
    }

    // q45: K = 1/2 m (vx^2 + vy^2)
    const t45 = q.match(/K = \\frac\{1\}\{2\} m \(v_x\^2 \+ v_y\^2\).*?m = ([\d\.]+).*?v_x = (-?[\d\.]+).*?v_y = (-?[\d\.]+)/s);
    if (t45) {
      const m = parseFloat(t45[1]), vx = parseFloat(t45[2]), vy = parseFloat(t45[3]);
      const vxSq = vx * vx, vySq = vy * vy, sum = vxSq + vySq;
      const ans = 0.5 * m * sum;
      return [
        { explanation: `Substitute \\(m = ${m}\\), \\(v_x = ${vx}\\), \\(v_y = ${vy}\\) into \\(K = \\frac{1}{2} m (v_x^2 + v_y^2)\\).`, workingOut: `\\( K = \\frac{1}{2}(${m})((${vx})^2 + (${vy})^2) \\)`, graphData: null },
        { explanation: `Evaluate the squared velocities inside the parentheses first.`, workingOut: `\\( (${vx})^2 = ${vxSq} \\)\n\\( (${vy})^2 = ${vySq} \\)\nSum = \\( ${vxSq} + ${vySq} = ${sum} \\)`, graphData: null },
        { explanation: `Multiply by mass and \\(\\frac{1}{2}\\) to find kinetic energy.`, workingOut: `\\( \\frac{1}{2} \\times ${m} \\times ${sum} = ${ans} \\)`, graphData: null }
      ];
    }

    // q46: d = WL^3 / 3EI
    const t46 = q.match(/d = \\frac\{W L\^3\}\{3 E I\}.*?W = ([\d\.]+).*?L = ([\d\.]+).*?E = ([\d\.]+).*?I = ([\d\.]+)/s);
    if (t46) {
      const W = parseFloat(t46[1]), L = parseFloat(t46[2]), E = parseFloat(t46[3]), I = parseFloat(t46[4]);
      const lCube = L * L * L, num = W * lCube, den = 3 * E * I, ans = num / den;
      return [
        { explanation: `Substitute \\(W = ${W}\\), \\(L = ${L}\\), \\(E = ${E}\\), \\(I = ${I}\\) into \\(d = \\frac{W L^3}{3 E I}\\).`, workingOut: `\\( d = \\frac{${W}(${L})^3}{3(${E})(${I})} \\)`, graphData: null },
        { explanation: `Evaluate the numerator by calculating the cube of length first.`, workingOut: `\\( (${L})^3 = ${lCube} \\)\n\\( ${W} \\times ${lCube} = ${num} \\)`, graphData: null },
        { explanation: `Evaluate the denominator and divide.`, workingOut: `Denominator: \\( 3 \\times ${E} \\times ${I} = ${den} \\)\n\\( \\frac{${num}}{${den}} = ${ans} \\)`, graphData: null }
      ];
    }

    // q47: M = (S - (F + Vn)) / S
    const t47 = q.match(/M = \\frac\{S - \(F \+ V n\)\}\{S\}.*?S = ([\d\.]+).*?F = ([\d\.]+).*?V = ([\d\.]+).*?n = ([\d\.]+)/s);
    if (t47) {
      const S = parseFloat(t47[1]), F = parseFloat(t47[2]), V = parseFloat(t47[3]), n = parseFloat(t47[4]);
      const Vn = V * n, totalCost = F + Vn, num = S - totalCost, ans = num / S;
      return [
        { explanation: `Substitute \\(S = ${S}\\), \\(F = ${F}\\), \\(V = ${V}\\), \\(n = ${n}\\) into \\(M = \\frac{S - (F + V n)}{S}\\).`, workingOut: `\\( M = \\frac{${S} - (${F} + ${V}(${n}))}{${S}} \\)`, graphData: null },
        { explanation: `Calculate the total costs inside the parentheses first.`, workingOut: `Variable cost: \\( ${V} \\times ${n} = ${Vn} \\)\nTotal cost: \\( ${F} + ${Vn} = ${totalCost} \\)`, graphData: null },
        { explanation: `Subtract costs from sales, then divide by sales.`, workingOut: `\\( ${S} - ${totalCost} = ${num} \\)\n\\( \\frac{${num}}{${S}} = ${ans} \\)`, graphData: null }
      ];
    }

    // q48: Tm = Tb - 0.0065h - kv
    const t48 = q.match(/T_m = T_b - 0\.0065 h - k v.*?T_b = ([\d\.]+).*?h = ([\d\.]+).*?v = ([\d\.]+).*?k = ([\d\.]+)/s);
    if (t48) {
      const Tb = parseFloat(t48[1]), h = parseFloat(t48[2]), v = parseFloat(t48[3]), k = parseFloat(t48[4]);
      const altDrop = 0.0065 * h, windDrop = k * v, ans = Tb - altDrop - windDrop;
      return [
        { explanation: `Substitute \\(T_b = ${Tb}\\), \\(h = ${h}\\), \\(v = ${v}\\), \\(k = ${k}\\) into \\(T_m = T_b - 0.0065 h - k v\\).`, workingOut: `\\( T_m = ${Tb} - 0.0065(${h}) - ${k}(${v}) \\)`, graphData: null },
        { explanation: `Evaluate the two multiplicative terms (altitude drop and wind chill).`, workingOut: `\\( 0.0065 \\times ${h} = ${altDrop} \\)\n\\( ${k} \\times ${v} = ${windDrop} \\)`, graphData: null },
        { explanation: `Subtract both from the base temperature.`, workingOut: `\\( ${Tb} - ${altDrop} - ${windDrop} = ${ans} \\)`, graphData: null }
      ];
    }

    // q49: r = h^2 / GM
    const t49 = q.match(/r = \\frac\{h\^2\}\{G M\}.*?h = ([\d\.]+).*?G = ([\d\.]+).*?M = ([\d\.]+)/s);
    if (t49) {
      const h = parseFloat(t49[1]), G = parseFloat(t49[2]), M = parseFloat(t49[3]);
      const num = h * h, den = G * M, ans = num / den;
      return [
        { explanation: `Substitute \\(h = ${h}\\), \\(G = ${G}\\), \\(M = ${M}\\) into \\(r = \\frac{h^2}{G M}\\).`, workingOut: `\\( r = \\frac{(${h})^2}{${G} \\times ${M}} \\)`, graphData: null },
        { explanation: `Evaluate numerator (power) and denominator (product).`, workingOut: `\\( (${h})^2 = ${num.toFixed(2)} \\)\n\\( ${G} \\times ${M} = ${den.toFixed(2)} \\)`, graphData: null },
        { explanation: `Divide numerator by denominator and round to two decimal places.`, workingOut: `\\( \\frac{${num.toFixed(2)}}{${den.toFixed(2)}} \\approx ${ans.toFixed(2)} \\)`, graphData: null }
      ];
    }

    // q50: eta = 1 - Tc/Th
    const t50 = q.match(/\\eta = 1 - \\frac\{T_c\}\{T_h\}.*?T_c = ([\d\.]+).*?T_h = ([\d\.]+)/s);
    if (t50) {
      const Tc = parseFloat(t50[1]), Th = parseFloat(t50[2]);
      const frac = Tc / Th, ans = 1 - frac;
      return [
        { explanation: `Substitute \\(T_c = ${Tc}\\) and \\(T_h = ${Th}\\) into the efficiency formula \\(\\eta = 1 - \\frac{T_c}{T_h}\\).`, workingOut: `\\( \\eta = 1 - \\frac{${Tc}}{${Th}} \\)`, graphData: null },
        { explanation: `Calculate the temperature ratio (fraction).`, workingOut: `\\( \\frac{${Tc}}{${Th}} = ${frac.toFixed(2)} \\)`, graphData: null },
        { explanation: `Subtract the ratio from 1.`, workingOut: `\\( 1 - ${frac.toFixed(2)} = ${ans.toFixed(2)} \\)`, graphData: null }
      ];
    }

    // q51: V = sqrt(S^2 - K^2 e^{-rt})
    const t51 = q.match(/V = \\sqrt\{S\^2 - K\^2 e\^\{-rt\}\}.*?S = ([\d\.]+).*?K = ([\d\.]+).*?r = ([\d\.]+).*?t = ([\d\.]+)/s);
    if (t51) {
      const S = parseFloat(t51[1]), K = parseFloat(t51[2]), r = parseFloat(t51[3]), t = parseFloat(t51[4]);
      const expTerm = Math.exp(-r * t);
      const sSq = S * S, kSq = K * K;
      const sub = kSq * expTerm;
      const inside = sSq - sub;
      const ans = Math.sqrt(inside);
      return [
        { explanation: `Substitute \\(S = ${S}\\), \\(K = ${K}\\), \\(r = ${r}\\), \\(t = ${t}\\) into \\(V = \\sqrt{S^2 - K^2 e^{-rt}}\\).`, workingOut: `\\( V = \\sqrt{(${S})^2 - (${K})^2 e^{-${r}(${t})}} \\)`, graphData: null },
        { explanation: `Evaluate the exponential term and the squared values.`, workingOut: `\\( e^{-0} = 1 \\)\n\\( (${S})^2 = ${sSq}, \\quad (${K})^2 = ${kSq} \\)`, graphData: null },
        { explanation: `Subtract from \\(S^2\\), then take the square root.`, workingOut: `\\( \\sqrt{${sSq} - ${kSq}(1)} = \\sqrt{${inside}} = ${ans} \\)`, graphData: null }
      ];
    }
    
    // q52: v = Vmax [S] / (Km + [S])
    const t52 = q.match(/v = \\frac\{V_\{max\} \[S\]\}\{K_m \+ \[S\]\}.*?V_\{max\} = ([\d\.]+).*?\[S\] = ([\d\.]+).*?K_m = ([\d\.]+)/s);
    if (t52) {
      const Vmax = parseFloat(t52[1]), S = parseFloat(t52[2]), Km = parseFloat(t52[3]);
      const num = Vmax * S, den = Km + S, ans = num / den;
      return [
        { explanation: `Substitute \\(V_{max} = ${Vmax}\\), \\([S] = ${S}\\), and \\(K_m = ${Km}\\) into \\(v = \\frac{V_{max} [S]}{K_m + [S]}\\).`, workingOut: `\\( v = \\frac{${Vmax}(${S})}{${Km} + ${S}} \\)`, graphData: null },
        { explanation: `Evaluate the numerator (product) and denominator (sum).`, workingOut: `Numerator: \\( ${Vmax} \\times ${S} = ${num} \\)\nDenominator: \\( ${Km} + ${S} = ${den} \\)`, graphData: null },
        { explanation: `Divide numerator by denominator and round to three decimal places.`, workingOut: `\\( \\frac{${num}}{${den}} \\approx ${ans.toFixed(3)} \\)`, graphData: null }
      ];
    }
    
    // q53: S = 2d / (t1 + t2)
    const t53 = q.match(/S = \\frac\{2 d\}\{t_1 \+ t_2\}.*?d = ([\d\.]+).*?t_1 = ([\d\.]+).*?t_2 = ([\d\.]+)/s);
    if (t53) {
      const d = parseFloat(t53[1]), t1 = parseFloat(t53[2]), t2 = parseFloat(t53[3]);
      const num = 2 * d, den = t1 + t2, ans = num / den;
      return [
        { explanation: `Substitute \\(d = ${d}\\), \\(t_1 = ${t1}\\), and \\(t_2 = ${t2}\\) into the average speed formula \\(S = \\frac{2 d}{t_1 + t_2}\\).`, workingOut: `\\( S = \\frac{2(${d})}{${t1} + ${t2}} \\)`, graphData: null },
        { explanation: `Evaluate the numerator and denominator separately.`, workingOut: `\\( 2 \\times ${d} = ${num} \\)\n\\( ${t1} + ${t2} = ${den} \\)`, graphData: null },
        { explanation: `Divide to find the average speed.`, workingOut: `\\( \\frac{${num}}{${den}} = ${ans} \\)`, graphData: null }
      ];
    }

    return null;
  }

  const ids = ['y9-1a-q25','y9-1a-q31','y9-1a-q32','y9-1a-q34','y9-1a-q35','y9-1a-q37','y9-1a-q38','y9-1a-q39','y9-1a-q40','y9-1a-q41','y9-1a-q42','y9-1a-q43','y9-1a-q45','y9-1a-q46','y9-1a-q47','y9-1a-q48','y9-1a-q49','y9-1a-q50','y9-1a-q51','y9-1a-q52','y9-1a-q53'];
  const parentSet = new Set();
  
  for (const id of ids) {
    const snap = await db.collection('questions').doc(id).get();
    if (snap.exists) {
      const data = snap.data();
      const newSteps = genSteps(id, data.question);
      if (newSteps) {
        await snap.ref.update({ solutionSteps: newSteps, updatedAt: FieldValue.serverTimestamp() });
        console.log(`Fixed physics: ${id}`);
        parentSet.add(id.replace(/[a-z]$/, ''));
      } else {
        console.log(`Failed to parse: ${id}`);
      }
    }
  }

  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, solutionSteps: cSnap.data().solutionSteps } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('\\nDone.');
  process.exit(0);
}

run().catch(console.error);
