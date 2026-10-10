import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const txt=(x,y,s,size=16,color='#1e293b',anchor='middle',weight='normal')=>`<text x="${x}" y="${y}" fill="${color}" font-family="Arial,sans-serif" font-size="${size}" text-anchor="${anchor}" font-weight="${weight}">${esc(s)}</text>`;
const ln=(x1,y1,x2,y2,color='#334155',w=3,dash='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-linecap="round" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
const circ=(x,y,r=4,fill='#334155',stroke='none',sw=1)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const pathSvg=(d,color='#334155',w=3,fill='none',dash='')=>`<path d="${d}" fill="${fill}" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
const svg=(inside,view='0 0 600 340')=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${view}" width="100%" style="display:block;margin:0 auto;max-width:760px;height:auto;font-family:Arial,sans-serif"><rect x="1" y="1" width="598" height="338" rx="12" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>${inside}</svg>`;
const point=(x,y,label,dx=9,dy=-9,color='#1e293b')=>`${circ(x,y,4,color)}${txt(x+dx,y+dy,label,12,color,dx<0?'end':'start','bold')}`;
const figs={};

// Q4: exact odd cubic and the two shaded lobes.
figs.q4=svg(`${ln(70,180,535,180,'#64748b',2)}${ln(300,35,300,300,'#64748b',2)}${[-1,0,1].map((x,i)=>{let X=[190,300,410][i];return `${ln(X,176,X,184,'#94a3b8',1)}${txt(X,202,String(x),12)}`}).join('')}<path d="M190 180 C215 104 257 114 300 180 Z" fill="#6366f1" fill-opacity=".22"/><path d="M300 180 C345 246 385 260 410 180 Z" fill="#f59e0b" fill-opacity=".24"/><path d="M190 180 C215 104 257 114 300 180 C345 246 385 260 410 180" fill="none" stroke="#334155" stroke-width="3"/>${txt(520,171,'x',14)}${txt(310,48,'y',14)}${txt(234,126,'f(x)>0',12,'#4f46e5')}${txt(365,234,'f(x)<0',12,'#b45309')}`);
// Q12: source graph with open/closed endpoints and stated extrema.
figs.q12=svg(`${ln(70,180,540,180,'#64748b',2)}${ln(300,35,300,305,'#64748b',2)}${[-1,0,2,4].map((x)=>{const X=160+(x+1)*75;return `${ln(X,176,X,184,'#94a3b8',1)}${txt(X,202,String(x),12)}`}).join('')}<path d="M160 62 C190 91 210 168 260 245 C290 292 335 292 370 262 C430 219 500 180 535 180" fill="none" stroke="#4f46e5" stroke-width="4"/>${circ(160,62,6,'#fff','#4f46e5',3)}${circ(535,180,5,'#4f46e5')}${point(370,262,'(2,−4)',7,18)}${txt(520,171,'x',14)}${txt(310,48,'y',14)}${txt(153,48,'(−1,5)',12,'#4f46e5','end')}${txt(535,202,'(4,0)',12,'#4f46e5','middle')}`);
// Q16 annuity table.
figs.q16=svg(`${txt(300,38,'Future value factor for an annuity of $1',17,'#1e293b','middle','bold')}${[0,1,2,3,4].map(i=>ln(84,75+i*43,516,75+i*43,'#cbd5e1',1)).join('')}${[0,1,2,3,4].map(i=>ln(84+i*108,75,84+i*108,247,'#cbd5e1',1)).join('')}${[['Years','2.0%','2.5%','3.0%','3.5%'],['7','7.434','7.547','7.662','7.779'],['8','8.583','8.736','8.892','9.052'],['9','9.755','9.955','10.159','10.368']].map((row,r)=>row.map((v,c)=>txt(138+c*108,104+r*43,v,14,r===0?'#475569':'#1e293b','middle',r===0?'bold':'normal')).join('')).join('')}${txt(300,284,'Use the 8-year, 3.0% factor: 8.892',14,'#047857','middle','bold')}`);
// Q17 reciprocal shift graph + progressive highlights.
const q17Axes=`${ln(70,270,540,270,'#64748b',2)}${ln(245,310,245,38,'#64748b',2)}${txt(535,291,'x',14)}${txt(257,49,'y',14)}${ln(245,85,530,85,'#94a3b8',2,'7 5')}${ln(145,45,145,305,'#94a3b8',2,'7 5')}${txt(145,322,'x = −4',12,'#b45309')}${txt(505,78,'y = 2',12,'#b45309','end')}`;
figs.q17a=svg(`${q17Axes}${txt(340,55,'horizontal asymptote',11,'#64748b')}${txt(165,112,'vertical asymptote',11,'#64748b','start')}`);
figs.q17b=svg(`${q17Axes}${circ(158,270,5,'#f59e0b')}${circ(245,270-1.75*55,5,'#10b981')}${txt(158,294,'(−3.5, 0)',12,'#b45309')}${txt(264,169,'(0, 1.75)',12,'#047857','start')}`);
figs.q17=svg(`${q17Axes}<path d="M78 91 C110 92 129 112 138 155 C143 180 144 232 144 290 M146 40 C148 64 163 76 192 81 C215 84 229 85 240 85 M250 85 C280 85 322 91 356 104 C410 125 462 139 530 145" fill="none" stroke="#4f46e5" stroke-width="4"/>${circ(42,92,4,'#fff','#4f46e5',2)}${point(42,92,'',0,0)}${circ(42,92,0,'#fff')}${circ(245,174,5,'#10b981')}${circ(158,270,5,'#f59e0b')}${txt(158,294,'(−3.5,0)',12,'#b45309')}${txt(262,164,'(0,1.75)',12,'#047857','start')}`);
// Q20 cubic graph and station-point overlays.
const q20Axes=`${ln(74,160,545,160,'#64748b',2)}${ln(85,315,85,40,'#64748b',2)}${txt(540,291,'x',14)}${txt(98,51,'y',14)}${[0,1,2].map(x=>`${ln(85+x*190,156,85+x*190,164,'#94a3b8',1)}${txt(85+x*190,294,String(x),12)}`).join('')}${ln(80,160,545,160,'#e2e8f0',1,'4 4')}`;
const q20Curve=`<path d="M85 160 C145 160 203 195 275 195 C325 195 350 160 370 160 C410 160 435 75 465 20" fill="none" stroke="#4f46e5" stroke-width="4"/>`;
figs.q20a=svg(`${q20Axes}${q20Curve}${point(85,160,'(0,0)',8,-10,'#10b981')}${point(275,195,'(1,−1)',8,18,'#f59e0b')}`);
figs.q20=svg(`${q20Axes}${q20Curve}${point(85,160,'(0,0)',8,-10,'#10b981')}${point(275,195,'(1,−1)',8,18,'#f59e0b')}${point(465,20,'(2,4)',8,-8,'#2563eb')}`);
// Q23 absolute value graph; no root answer image, only solution progression.
figs.q23=svg(`${ln(70,275,540,275,'#64748b',2)}${ln(300,310,300,38,'#64748b',2)}${[-2,0,2,4,6].map(x=>`${ln(300+x*42,271,300+x*42,279,'#94a3b8',1)}${txt(300+x*42,298,String(x),12)}`).join('')}<path d="M132 58 L384 275 L552 130" fill="none" stroke="#4f46e5" stroke-width="4"/>${point(384,275,'(2,0)',8,18,'#f59e0b')}${point(300,130,'(0,6)',8,-8,'#2563eb')}${txt(525,54,'y = |3x − 6|',13,'#4f46e5','end','bold')}`);
// Q28 odd-function reflection diagram.
const q28Axes=`${ln(65,175,540,175,'#64748b',2)}${ln(300,45,300,305,'#64748b',2)}${ln(300,85,535,85,'#94a3b8',2,'7 5')}${ln(65,265,300,265,'#94a3b8',2,'7 5')}${txt(518,77,'y = 2',12,'#64748b','end')}${txt(80,258,'y = −2',12,'#64748b','start')}${txt(532,166,'x',14)}${txt(310,53,'y',14)}`;
figs.q28Given=svg(`${q28Axes}<path d="M300 175 C333 132 360 108 401 96 C441 84 480 84 535 84" fill="none" stroke="#2563eb" stroke-width="4"/>${point(300,175,'O',7,17,'#2563eb')}${txt(400,220,'given part (x ≥ 0)',12,'#2563eb')}`);
figs.q28=svg(`${q28Axes}<path d="M65 265 C120 265 159 265 199 253 C240 241 267 218 300 175 C333 132 360 108 401 96 C441 84 480 84 535 84" fill="none" stroke="#4f46e5" stroke-width="4"/>${ln(300,175,300,85,'#f59e0b',2,'5 5')}${ln(300,175,300,265,'#10b981',2,'5 5')}${txt(187,237,'rotate 180° about O',12,'#b45309','middle','bold')}`);
// Q29 trig graph: max/min and midline/period features.
figs.q29=svg(`${ln(65,270,545,270,'#64748b',2)}${ln(125,310,125,42,'#64748b',2)}${[-3,0,3,6,9].map(x=>{const X=125+(x+3)*35;return `${ln(X,266,X,274,'#94a3b8',1)}${txt(X,292,String(x),12)}`}).join('')}${[1,3,5].map(y=>{const Y=270-(y-1)*50;return `${ln(121,Y,545,Y,'#cbd5e1',1,'4 4')}${txt(111,Y+4,String(y),12,'#64748b','end')}`}).join('')}<path d="M65 108 C91 91 108 70 125 70 C164 70 192 170 230 170 C268 170 297 270 335 270 C373 270 402 170 440 170 C478 170 506 70 545 70" fill="none" stroke="#4f46e5" stroke-width="4"/>${point(125,70,'max 5',8,-10,'#10b981')}${point(335,270,'min 1',8,18,'#f59e0b')}${point(545,70,'max 5',-8,-10,'#10b981')}${ln(125,55,545,55,'#10b981',2,'5 4')}${txt(335,45,'period = 12',12,'#047857')}${txt(505,49,'y = a cos(bx) + c',13,'#4f46e5','end','bold')}`);
// Q30 piecewise velocity-time graph.
figs.q30=svg(`${ln(70,195,545,195,'#64748b',2)}${ln(95,310,95,50,'#64748b',2)}${[0,2,4,5,7].map(t=>{const X=95+t*60;return `${ln(X,191,X,199,'#94a3b8',1)}${txt(X,219,String(t),12)}`}).join('')}${[-5,0,4].map(v=>{const Y=195-v*24;return `${ln(91,Y,99,Y,'#94a3b8',1)}${txt(83,Y+4,String(v),12,'#64748b','end')}`}).join('')}<path d="M95 195 Q155 99 215 99 Q275 99 335 195 L395 315" fill="none" stroke="#4f46e5" stroke-width="4"/>${ln(395,315,545,315,'#f59e0b',4)}${point(215,99,'(2,4)',8,-10,'#2563eb')}${point(335,195,'(4,0)',8,-10,'#10b981')}${txt(530,305,'v = −5',12,'#b45309','end')}${txt(530,219,'t (s)',13,'#1e293b','end')}${txt(105,63,'v (m/s)',13,'#1e293b','start')}`);
// Q31 standard normal shaded interval 0 to .67.
figs.q31=svg(`${ln(65,260,545,260,'#64748b',2)}<path d="M75 255 C125 244 155 205 195 141 C225 93 255 70 300 68 C345 70 375 93 405 141 C445 205 475 244 535 255" fill="none" stroke="#334155" stroke-width="3"/><path d="M300 68 C345 70 375 93 405 141 L405 260 L300 260 Z" fill="#6366f1" fill-opacity=".22"/>${ln(300,68,300,260,'#64748b',1,'5 4')}${ln(405,141,405,260,'#6366f1',2,'5 4')}${txt(300,284,'0',12)}${txt(405,284,'0.67',12,'#4f46e5')}${txt(356,213,'area ≈ 0.25',12,'#4f46e5')}${txt(522,248,'z',14)}`);
// Q32 cosine tide.
figs.q32=svg(`${ln(65,270,545,270,'#64748b',2)}${ln(95,305,95,45,'#64748b',2)}${[0,4,8,12,16,20,24].map(t=>{const X=95+t*18;return `${ln(X,266,X,274,'#94a3b8',1)}${txt(X,293,String(t),11)}`}).join('')}${[1,2.2,3.4].map(y=>{const Y=270-(y-1)*80;return `${ln(91,Y,99,Y,'#94a3b8',1)}${txt(83,Y+4,String(y),11,'#64748b','end')}`}).join('')}<path d="M95 78 C145 78 190 174 239 222 C287 270 335 270 383 222 C431 174 479 78 527 78" fill="none" stroke="#4f46e5" stroke-width="4"/>${point(95,78,'3.4',7,-9,'#10b981')}${point(311,270,'1.0',8,18,'#f59e0b')}${point(527,78,'3.4',-8,-10,'#10b981')}${ln(95,174,527,174,'#94a3b8',2,'5 5')}${txt(300,164,'midline 2.2',12,'#64748b')}${txt(540,293,'t (hours)',12,'#1e293b','end')}${txt(104,57,'h (m)',12,'#1e293b','start')}`);
// Q33 source table.
figs.q33=svg(`${txt(300,48,'Source data: weight and metabolic rate',16,'#1e293b','middle','bold')}${[0,1,2,3].map(i=>ln(48,86+i*48,552,86+i*48,'#cbd5e1',1)).join('')}${[0,1,2,3,4,5,6].map(i=>ln(48+i*84,86,48+i*84,230,'#cbd5e1',1)).join('')}${[['Measure','1','2','3','4','5'],['Weight (kg)','52','63','65','47','49'],['Metabolic rate','1671','1669','1812','1442','1607']].map((row,r)=>row.map((v,c)=>txt(90+c*84,116+r*48,v,13,r===0?'#475569':'#1e293b','middle',r===0?'bold':'normal')).join('')).join('')}${txt(300,270,'x = weight (kg), y = metabolic rate',13,'#475569')}`);
// Q34 cubic bounded areas.
figs.q34=svg(`${ln(70,175,545,175,'#64748b',2)}${ln(100,310,100,45,'#64748b',2)}${[0,2,6].map(x=>{const X=100+x*67;return `${ln(X,171,X,179,'#94a3b8',1)}${txt(X,198,String(x),12)}`}).join('')}<path d="M100 175 C131 110 171 75 234 175 C282 260 363 294 502 175" fill="none" stroke="#334155" stroke-width="3"/><path d="M100 175 C131 110 171 75 234 175 L100 175Z" fill="#10b981" fill-opacity=".20"/><path d="M234 175 C282 260 363 294 502 175 L234 175Z" fill="#f59e0b" fill-opacity=".20"/>${txt(165,125,'positive area',12,'#047857')}${txt(365,248,'negative f(x)',12,'#b45309')}${txt(530,165,'x',13)}${txt(109,56,'y',13)}`);
// Q35 elevation geometry drawn to scale in 600 m baseline and true angles.
figs.q35=svg(`${ln(65,300,540,300,'#64748b',3)}${ln(455,300,455,218,'#334155',4)}${ln(70,300,455,218,'#2563eb',3)}${ln(203,300,455,218,'#10b981',3)}${ln(70,300,203,300,'#f59e0b',5)}${ln(203,300,455,300,'#64748b',2,'6 4')}${txt(136,322,'600 m',14,'#b45309','middle','bold')}${txt(466,254,'h',15,'#334155','start','bold')}${txt(65,290,'A',13,'#1e293b','end','bold')}${txt(203,322,'B',13,'#1e293b','middle','bold')}${txt(455,322,'hill foot',12,'#1e293b','middle')}${txt(466,214,'summit',12,'#1e293b','start')}${pathSvg('M91 300 A22 22 0 0 0 92 295','#f59e0b',3)}${txt(103,296,'12°',12,'#b45309','middle','bold')}${pathSvg('M224 300 A22 22 0 0 0 224 293','#10b981',3)}${txt(235,296,'18°',12,'#047857','middle','bold')}`);
figs.q35step=svg(`${ln(65,300,540,300,'#64748b',3)}${ln(455,300,455,218,'#334155',4)}${ln(70,300,455,218,'#cbd5e1',2)}${ln(203,300,455,218,'#cbd5e1',2)}${ln(70,300,203,300,'#f59e0b',5)}${ln(203,300,455,300,'#64748b',2,'6 4')}${ln(70,300,455,218,'#2563eb',4)}${ln(203,300,455,218,'#10b981',4)}${ln(455,300,455,218,'#f43f5e',5)}${txt(136,322,'600 m',14,'#b45309','middle','bold')}${txt(466,258,'height h',12,'#be123c','start','bold')}${txt(65,290,'A',13,'#1e293b','end','bold')}${txt(203,322,'B',13,'#1e293b','middle','bold')}${pathSvg('M91 300 A22 22 0 0 0 92 295','#f59e0b',3)}${txt(103,296,'12°',12,'#b45309','middle','bold')}${pathSvg('M224 300 A22 22 0 0 0 224 293','#10b981',3)}${txt(235,296,'18°',12,'#047857','middle','bold')}`);
// Q37 semicircle/rectangle.
figs.q37=svg(`${ln(65,245,545,245,'#64748b',2)}${ln(305,300,305,48,'#64748b',2)}<path d="M95 245 A210 210 0 0 1 515 245" fill="none" stroke="#4f46e5" stroke-width="4"/><path d="M179 77 L431 77 L431 245 L179 245 Z" fill="#6366f1" fill-opacity=".13" stroke="#334155" stroke-width="3"/>${point(431,77,'P(x,y)',8,-7,'#4f46e5')}${txt(305,265,'0',12)}${txt(95,265,'−1',12)}${txt(515,265,'1',12)}${txt(306,42,'y',14)}${txt(550,251,'x',14)}${txt(305,65,'width = 2x',13,'#4f46e5','middle','bold')}${txt(443,168,'height = y',12,'#b45309','start','bold')}${ln(179,77,431,77,'#4f46e5',5)}${ln(431,77,431,245,'#f59e0b',5)}`);

const m=s=>`\\(${String(s).replaceAll('$','\\$')}\\)`;
const st=(explain,work,figure)=>({explain,work,...(figure?{figure:{svg:figs[figure]}}:{})});
const kp=(stem,text,note)=>{if(!stem.includes(text))throw new Error(`highlight phrase missing from stem: ${text}`);return {text,note};};
const common={timeLimit:60,xp:1,meta:{source:'Amity 2020 Mathematics Advanced HSC Trial',school:'Amity',sourceYear:2020}};
const mc=(id,chapter,topic,difficulty,stem,options,answer,hint,highlight,note,steps,figure)=>({chapter,topic,q:{...common,id,type:'mc',difficulty,stem,options,answer,hint,keyPoints:[kp(stem,highlight,note)],steps,...(figure?{figure:{svg:figs[figure]}}:{})}});
const review=(id,chapter,topic,difficulty,stem,answer,hint,highlight,note,steps,figure)=>({chapter,topic,q:{...common,id,type:'review',difficulty,stem,answer,manual:true,hint,keyPoints:[kp(stem,highlight,note)],steps,...(figure?{figure:{svg:figs[figure]}}:{})}});
const Q=[]; const add=q=>Q.push(q);

// Section I: original multiple-choice items, with the solution made fully explicit.
add(mc('amity2020-ma-q01','y11a-8','y11a-8A','medium',`Solve \\(4^{3x+1}=8^x\\).`,[m('x=2'),m('x=\\frac32'),m('x=-\\frac23'),m('x=-\\frac32')],2,'Rewrite 4 and 8 as powers of 2, then equate exponents.','\\(4^{3x+1}=8^x\\)','Make the exponential bases the same before comparing powers.',[
 st('Rewrite both sides with base 2.','\\(4^{3x+1}=(2^2)^{3x+1}=2^{6x+2},\\quad 8^x=(2^3)^x=2^{3x}\\)'),
 st('Equal bases with equal powers give a linear equation.','\\(6x+2=3x\\)'),
 st('Solve for x and check by substituting into the exponent equation.','\\(3x=-2\\Rightarrow x=-\\frac23\\quad\\boxed{x=-\\frac23}\\)') ]));
add(mc('amity2020-ma-q02','y12a-8','y12a-8C','easy',`An amount of \\(\\$3000\\) is invested at \\(3\\%\\) per annum, compounded monthly. What is its value after five years?`,[m('$3485'),m('$3526'),m('$3571'),m('$3654')],0,'Use monthly rate 0.03/12 and count 5×12 compounding periods.','compounded monthly','Convert both the rate and the number of periods to months.',[
 st('Find the monthly interest rate and number of months.','\\(i=\\frac{0.03}{12}=0.0025,\\quad n=5\\times12=60\\)'),
 st('Use the compound-interest formula.','\\(A=3000(1+0.0025)^{60}\\)'),
 st('Evaluate and round to the nearest dollar as the choices do.','\\(A\\approx\\$3484.85\\Rightarrow\\boxed{\\$3485}\\)') ]));
add(mc('amity2020-ma-q03','y12a-5','y12a-5K','medium',`Differentiate \\(\\log_2(2x+4)\\).`,[m('\\frac{1}{2x+4}'),m('\\frac{1}{(x+2)\\ln2}'),m('\\frac{1}{(2x+4)\\ln2}'),m('\\frac{2}{(x+2)\\ln2}')],1,'For a logarithm with base 2, divide the derivative of its argument by the argument times ln 2.','\\(\\log_2(2x+4)\\)','The argument is a function of x and the logarithm base is not e.',[
 st('Use the derivative rule for logarithms to base a.','\\(\\frac{d}{dx}\\log_a u=\\frac{u′ }{u\\ln a}\\)'),
 st('Substitute u=2x+4 and u′=2.','\\(\\frac{d}{dx}\\log_2(2x+4)=\\frac{2}{(2x+4)\\ln2}\\)'),
 st('Cancel the common factor 2 in numerator and denominator.','\\(\\boxed{\\frac{1}{(x+2)\\ln2}}\\)') ]));
add(mc('amity2020-ma-q04','y12a-4','y12a-4G','medium',`The shaded region is bounded by \\(y=x^3-x\\) and the x-axis. Which integral expression gives its total area?`,[
 m('\\int_{-1}^{1}(x^3-x)\\,dx'),m('2\\int_{-1}^{0}(x^3-x)\\,dx'),m('\\int_{-1}^{0}(x^3-x)\\,dx+\\int_{0}^{1}(x^3-x)\\,dx'),m('2\\int_{0}^{1}(x^3-x)\\,dx')],1,'The cubic is odd, so the two shaded lobes have equal area; integrate one lobe and double it.','total area','Signed integrals below the x-axis are negative, but geometric area is positive.',[
 st('Find where the curve meets the x-axis.','\\(x^3-x=x(x-1)(x+1)=0\\Rightarrow x=-1,0,1\\)','q4'),
 st('The left lobe lies above the axis and the right lobe below it; odd symmetry gives equal magnitudes.','\\(\\text{Area}=\\int_{-1}^{0}(x^3-x)\\,dx-\\int_{0}^{1}(x^3-x)\\,dx\\)'),
 st('Use symmetry to express the total area using one positive lobe.','\\(\\boxed{\\text{Area}=2\\int_{-1}^{0}(x^3-x)\\,dx}\\)','q4') ],'q4'));
add(mc('amity2020-ma-q05','y11a-6','y11a-6E','medium',`Given \\(\\sin x=\\frac13\\) and \\(\\frac\\pi2<x<\\pi\\), find \\(\\tan x\\).`,[m('-\\frac{1}{2\\sqrt2}'),m('\\frac{1}{2\\sqrt2}'),m('-\\frac{2\\sqrt2}{3}'),m('-2\\sqrt2')],0,'In quadrant II, sine is positive and cosine is negative. Use sin²x+cos²x=1.','\\sin x=\\frac13','Use the interval to choose the sign of cosine before forming tangent.',[
 st('The interval places x in quadrant II, so cos x is negative.','\\(\\cos x=-\\sqrt{1-\\sin^2x}=-\\sqrt{1-\\frac19}=-\\frac{2\\sqrt2}{3}\\)'),
 st('Use tangent as sine divided by cosine.','\\(\\tan x=\\frac{\\sin x}{\\cos x}=\\frac{1/3}{-2\\sqrt2/3}=-\\frac{1}{2\\sqrt2}\\)'),
 st('State the exact value with its quadrant-consistent negative sign.','\\(\\boxed{\\tan x=-\\frac{1}{2\\sqrt2}}\\)') ]));
add(mc('amity2020-ma-q06','y11a-8','y11a-8G','medium',`Find the range of \\(f(x)=4-e^{2x-2}\\).`,[m('(-\\infty,4)'),m('(-\\infty,4]'),m('(4,\\infty)'),m('[4,\\infty)')],0,'An exponential is always positive, but it can get arbitrarily close to zero.','\\(f(x)=4-e^{2x-2}\\)','Check whether the endpoint 4 can actually be reached.',[
 st('For every real x, the exponential term is positive.','\\(e^{2x-2}>0\\)'),
 st('Subtracting a positive number from 4 gives a value strictly below 4.','\\(4-e^{2x-2}<4\\)'),
 st('As x tends to negative infinity, the exponential tends to zero, so f approaches 4 without reaching it; as x increases, f decreases without bound.','\\(f(x)\\in\\boxed{(-\\infty,4)}\\)') ]));
add(mc('amity2020-ma-q07','y12a-4','y12a-4I','medium',`A function has derivative \\(f'(x)=8\\sin4x\\) and \\(f(\\frac\\pi4)=1\\). Which is \\(f(x)\\)?`,[m('8\\cos4x+7'),m('-2\\cos4x-1'),m('2\\cos4x+3'),m('2\\sin4x+1')],1,'Integrate using the reverse chain rule, then use the given function value to find the constant.','\\(f(\\frac\\pi4)=1\\)','The inner angle 4x contributes a factor of 4 when differentiating cosine.',[
 st('Integrate 8 sin 4x using the reverse chain rule.','\\(f(x)=-2\\cos4x+C\\)'),
 st('Substitute x=π/4 and evaluate the cosine.','\\(1=-2\\cos\\pi+C=2+C\\Rightarrow C=-1\\)'),
 st('Insert the constant.','\\(\\boxed{f(x)=-2\\cos4x-1}\\)') ]));
add(mc('amity2020-ma-q08','y12a-10','y12a-10B','medium',`A continuous random variable has density \\(f(x)=\\frac34(2x-x^2)\\) for \\(0\\le x\\le2\\). What is its mode?`,[m('0'),m('0.5'),m('0.75'),m('1')],3,'The mode is where the density reaches its maximum. Differentiate the density and check the interval.','mode','A stationary value must be compared with the endpoints of the allowed interval.',[
 st('Differentiate the density on 0≤x≤2.','\\(f′(x)=\\frac34(2-2x)\\)'),
 st('Set the derivative to zero to locate the interior maximum.','\\(2-2x=0\\Rightarrow x=1\\)'),
 st('The density is zero at both endpoints and positive inside, so its maximum occurs at x=1.','\\(\\boxed{\\text{mode}=1}\\)') ]));
add(mc('amity2020-ma-q09','y12a-10','y12a-10E','medium',`Boys’ heights are normally distributed with mean 174 cm and standard deviation \\(s\\). Daniel is \\(0.25s\\) below the mean and John is \\(1.5s\\) above it. If John is 14 cm taller, find Daniel’s height.`,[m('170 cm'),m('171 cm'),m('172 cm'),m('173 cm')],2,'Write both heights in terms of s and subtract to use the 14 cm difference.','John is 14 cm taller','The standard deviation is the unknown scale s; do not treat 0.25s as 0.25 cm.',[
 st('Express the two heights.','\\(D=174-0.25s,\\quad J=174+1.5s\\)'),
 st('Use the difference between them to solve for s.','\\(J-D=1.75s=14\\Rightarrow s=8\\text{ cm}\\)'),
 st('Substitute into Daniel’s expression.','\\(D=174-0.25(8)=\\boxed{172\\text{ cm}}\\)') ]));
add(mc('amity2020-ma-q10','y11a-9','y11a-9H','hard',`Given \\(y=xf(x^2)\\), which expression is \\(\\frac{dy}{dx}\\)?`,[m('2xf(x)'),m('f(x^2)+2x^2f′(x)'),m('f(x^2)+2x^2f(x)f′(x)'),m('f(x^2)+2x^2f′(x^2)')],3,'Use the product rule, and apply the chain rule to f(x²).','\\(y=xf(x^2)\\)','Differentiate the outer x factor and the composite function factor separately.',[
 st('Apply the product rule to x·f(x²).','\\(y′=1\\cdot f(x^2)+x\\cdot\\frac{d}{dx}f(x^2)\\)'),
 st('Apply the chain rule to f(x²).','\\(\\frac{d}{dx}f(x^2)=f′(x^2)\\cdot2x\\)'),
 st('Combine and simplify.','\\(\\boxed{\\frac{dy}{dx}=f(x^2)+2x^2f′(x^2)}\\)') ]));

// Section II: every definite single-answer task becomes MC; sketch/show tasks retain a sample answer.
add(mc('amity2020-ma-q11','y12a-4','y12a-4I','easy',`Find \\(\\int24(2x-7)^5\\,dx\\).`,[m('2(2x-7)^6+C'),m('4(2x-7)^6+C'),m('24(2x-7)^6+C'),m('2(2x-7)^5+C')],0,'The derivative of 2x−7 is 2, so compensate for that factor when integrating.','\\int24(2x-7)^5\\,dx','Differentiate your proposed antiderivative to check the coefficient.',[
 st('Recognise the inner function and its derivative.','\\(u=2x-7,\\quad du=2\\,dx\\)'),
 st('Rewrite 24 dx as 12 du and integrate the fifth power.','\\(\\int24u^5\\,dx=12\\int u^5du=12\\cdot\\frac{u^6}{6}+C=2u^6+C\\)'),
 st('Substitute the original inner function back.','\\(\\boxed{2(2x-7)^6+C}\\)') ]));
add(mc('amity2020-ma-q12','y11a-3','y11a-3B','medium',`Using the graph of \\(f\\), state its domain and range in interval notation.`,[
 m('Domain: [-1,4]; range: [-4,5]'),m('Domain: (-1,4]; range: [-4,5)'),m('Domain: [-1,4); range: (-4,5]'),m('Domain: (-1,4); range: (-4,5)')],1,'An open endpoint is excluded and a filled endpoint is included; read the lowest and highest y-values.','domain and range','Read x-values horizontally for the domain and y-values vertically for the range.',[
 st('Read the horizontal extent: x starts at an open point −1 and ends at a filled point 4.','\\(\\text{Domain}=(-1,4]\\)','q12'),
 st('Read the vertical extent: the minimum y-value −4 is attained, while the top value 5 is open.','\\(\\text{Range}=[-4,5)\\)','q12'),
 st('Combine both intervals with the correct endpoint brackets.','\\(\\boxed{\\text{Domain }(-1,4],\\quad\\text{Range }[-4,5)}\\)','q12') ],'q12'));
add(mc('amity2020-ma-q13','y12a-2','y12a-2H','medium',`Which sequence of transformations changes \\(y=2^x\\) into \\(y=2^{x+1}-3\\)?`,[
 'Reflect in the x-axis, shift right 1, then down 3.','Dilate vertically by factor 2, shift left 1, then down 3.','Shift left 1, dilate vertically by factor 2, then down 3.','Dilate horizontally by factor 2, shift down 1, then left 3.'],2,'Rewrite 2^(x+1) as 2·2^x, then interpret the outside and inside changes.','\\(y=2^{x+1}-3\\)','An inside +1 shifts the graph left; the outside −3 shifts it down.',[
 st('Separate the exponent shift from the vertical translation.','\\(2^{x+1}-3=2\\cdot2^x-3\\)'),
 st('The factor 2 outside the original function is a vertical dilation; x+1 moves the graph left 1.','\\(y=2f(x+1)-3\\)'),
 st('Apply the transformations in a valid stated order.','\\(\\boxed{\\text{vertical dilation by }2,\\;\\text{left }1,\\;\\text{down }3}\\)') ]));
add(mc('amity2020-ma-q14','y11a-9','y11a-9G','medium',`Differentiate \\(\\frac{8}{1-2x}\\) with respect to x.`,[m('\\frac{8}{(1-2x)^2}'),m('\\frac{-16}{(1-2x)^2}'),m('\\frac{16}{1-2x}'),m('\\frac{16}{(1-2x)^2}')],3,'Write the reciprocal as a power and apply the chain rule.','\\frac{8}{1-2x}','The inner derivative is −2; keep track of the two negative signs.',[
 st('Rewrite the expression with exponent −1.','\\(y=8(1-2x)^{-1}\\)'),
 st('Differentiate the outer power and multiply by the inner derivative.','\\(y′=8(-1)(1-2x)^{-2}(-2)\\)'),
 st('Simplify the positive coefficient.','\\(\\boxed{y′=\\frac{16}{(1-2x)^2}}\\)') ]));
add(mc('amity2020-ma-q15a','y11a-13','y11a-13A','easy',`A four-sided die has probabilities \\(0.25, 0.4b, 2b, 0.15\\) for scores 1, 2, 3, 4. Find b.`,[m('0.20'),m('0.25'),m('0.30'),m('0.40')],1,'The probabilities in the complete table must add to 1.','probabilities \\(0.25, 0.4b, 2b, 0.15\\)','Add each score’s probability, including both terms that contain b.',[
 st('Set the total probability equal to 1.','\\(0.25+0.4b+2b+0.15=1\\)'),
 st('Combine constants and b-terms.','\\(0.4+2.4b=1\\Rightarrow2.4b=0.6\\)'),
 st('Solve.','\\(\\boxed{b=0.25}\\)') ]));
add(mc('amity2020-ma-q15b','y11a-13','y11a-13A','medium',`Using the probability table for the four-sided die, find the probability of rolling a number at most 2.`,[m('0.25'),m('0.30'),m('0.35'),m('0.60')],2,'“At most 2” includes scores 1 and 2. Substitute the value of b first.','at most 2','Add the probabilities for scores 1 and 2; do not include score 3.',[
 st('Use the value b=0.25 and identify the included scores.','\\(P(X\\le2)=P(X=1)+P(X=2)\\)'),
 st('Substitute the table entries.','\\(P(X\\le2)=0.25+0.4(0.25)\\)'),
 st('Evaluate.','\\(\\boxed{P(X\\le2)=0.35}\\)') ]));
add(mc('amity2020-ma-q16a','y12a-8','y12a-8D','easy',`An annuity pays \\(\\$600\\) at the end of each year for 8 years at 3% p.a. Use the table to find its future value.`,[m('$5335.20'),m('$4892.40'),m('$6000.00'),m('$8892.00')],0,'Use the factor in the 8-year row and 3.0% column, then multiply by $600.','end of each year','This is an ordinary annuity; the table already supplies the future-value factor.',[
 st('Read the 8-year, 3.0% factor from the table.','\\(F=8.892\\)','q16'),
 st('Multiply the annual contribution by the factor.','\\(FV=600\\times8.892\\)'),
 st('State the dollar amount to the nearest cent.','\\(\\boxed{FV=\\$5{,}335.20}\\)','q16') ],'q16'));
add(mc('amity2020-ma-q16b','y12a-8','y12a-8D','medium',`What annual end-of-year contribution gives a future value of \\(\\$15{,}000\\) after 7 years at 2.5% p.a.?`,[m('$1987.54'),m('$2025.00'),m('$1132.05'),m('$15000.00')],0,'Divide the required future value by the 7-year, 2.5% annuity factor.','future value of \\(\\$15{,}000\\)','The factor multiplies each regular contribution to give the future value.',[
 st('Read the 7-year, 2.5% factor.','\\(F=7.547\\)','q16'),
 st('Let the yearly contribution be M and solve MF=15000.','\\(M=\\frac{15000}{7.547}\\)'),
 st('Round the contribution to cents.','\\(\\boxed{M=\\$1{,}987.54}\\)','q16') ],'q16'));
add(review('amity2020-ma-q17','y11a-3','y11a-3H','medium',`Sketch \\(y=2-\\frac{1}{x+4}\\), labelling both asymptotes and the axis intercepts.`,`Sample answer: The vertical asymptote is \\(x=-4\\) and the horizontal asymptote is \\(y=2\\). The intercepts are \\((-3.5,0)\\) and \\((0,1.75)\\). Draw the two reciprocal branches approaching those asymptotes.`, 'Find the asymptotes from the denominator and the vertical shift, then solve separately for each intercept.','\\(y=2-\\frac{1}{x+4}\\)','The graph is a translated reciprocal curve; it never touches either asymptote.',[
 st('The denominator is zero at x=−4, and the vertical shift gives the horizontal asymptote.','\\(x+4=0\\Rightarrow x=-4,\\qquad y=2\\)','q17a'),
 st('Set y=0 for the x-intercept and set x=0 for the y-intercept.','\\(0=2-\\frac1{x+4}\\Rightarrow x=-\\frac72;\\quad y(0)=2-\\frac14=\\frac74\\)','q17b'),
 st('Sketch the reciprocal branches with the correct asymptotic behaviour and label both intercepts.','\\(\\text{intercepts }(-3.5,0),(0,1.75)\\)','q17') ],'q17'));
add(mc('amity2020-ma-q18','y12a-6','y12a-6B','hard',`Find the tangent to \\(y=\\sin(\\cos x)\\) at \\((\\frac\\pi2,0)\\).`,[m('y=x-\\frac\\pi2'),m('y=-x+\\frac\\pi2'),m('y=-x-\\frac\\pi2'),m('y=\\frac\\pi2x')],1,'Differentiate with the chain rule, then use the point-gradient form of a line.','at','The derivative of cos x supplies a negative sin x factor.',[
 st('Differentiate the composite sine and cosine functions.','\\(y′=\\cos(\\cos x)(-\\sin x)\\)'),
 st('Evaluate the gradient at x=π/2.','\\(m=y′(\\frac\\pi2)=-1\\)'),
 st('Use the point (π/2,0) in point-gradient form.','\\(y-0=-1(x-\\frac\\pi2)\\Rightarrow\\boxed{y=-x+\\frac\\pi2}\\)') ]));
add(review('amity2020-ma-q19a','y12a-10','y12a-10B','medium',`A density is \\(f(x)=\\frac{k}{2x-1}\\) for \\(1\\le x\\le4\\) and zero otherwise. Show that \\(k=\\frac{2}{\\ln7}\\).`,`Sample answer: A density integrates to 1, so \\(\\int_1^4\\frac{k}{2x-1}dx=1\\). This gives \\(\\frac{k}{2}[\\ln(2x-1)]_1^4=\\frac{k}{2}\\ln7=1\\), hence \\(k=\\frac{2}{\\ln7}\\).`,'A probability density has total area 1 over its support.','\\(1\\le x\\le4\\)','Use the antiderivative of 1/(2x−1), including the inner derivative factor 1/2.',[
 st('Set the total probability over the support equal to 1.','\\(\\int_1^4\\frac{k}{2x-1}\\,dx=1\\)'),
 st('Integrate using the reverse chain rule.','\\(\\frac{k}{2}[\\ln(2x-1)]_1^4=\\frac{k}{2}(\\ln7-\\ln1)\\)'),
 st('Solve for k.','\\(\\frac{k}{2}\\ln7=1\\Rightarrow\\boxed{k=\\frac{2}{\\ln7}}\\)') ]));
add(mc('amity2020-ma-q19b','y12a-10','y12a-10B','medium',`For the density \\(f(x)=\\frac{k}{2x-1}\\) on \\([1,4]\\), find \\(P(X<2)\\).`,[m('\\frac{\\ln3}{\\ln7}'),m('\\frac{\\ln7}{\\ln3}'),m('\\frac{2\\ln3}{\\ln7}'),m('\\frac{\\ln7-\\ln3}{\\ln7}')],0,'Integrate the density from its lower support bound 1 to 2, then substitute k.','\\(P(X<2)\\)','For a continuous variable, a single endpoint has probability zero.',[
 st('Write the probability as the area under the density from 1 to 2.','\\(P(X<2)=\\int_1^2\\frac{k}{2x-1}\\,dx\\)'),
 st('Evaluate the logarithmic integral.','\\(P(X<2)=\\frac{k}{2}[\\ln(2x-1)]_1^2=\\frac{k}{2}\\ln3\\)'),
 st('Substitute k=2/ln 7.','\\(\\boxed{P(X<2)=\\frac{\\ln3}{\\ln7}}\\)') ]));
add(mc('amity2020-ma-q20a','y12a-3','y12a-3B','medium',`For \\(f(x)=2x^3-3x^2\\), which gives its stationary points and their nature?`,[
 '(0, 0) minimum; (1, −1) maximum','(0, 0) maximum; (1, −1) minimum','(0, 0) and (1, −1) are both maxima','(0, 0) and (1, −1) are both minima'],1,'Solve f′(x)=0, then use the second derivative to classify each point.','\\(f(x)=2x^3-3x^2\\)','A stationary x-coordinate is not a point until you substitute it back into f.',[
 st('Differentiate and solve for stationary x-values.','\\(f′(x)=6x^2-6x=6x(x-1)=0\\Rightarrow x=0,1\\)','q20a'),
 st('Find the corresponding y-values and second derivative.','\\(f(0)=0,\\;f(1)=-1;\\quad f′′(x)=12x-6\\)'),
 st('Use f′′ to classify each stationary point.','\\(f′′(0)=-6<0\\Rightarrow\\max;\\quad f′′(1)=6>0\\Rightarrow\\min\\)'),
 st('State both coordinates and classifications.','\\(\\boxed{(0,0)\\text{ max; }(1,-1)\\text{ min}}\\)','q20') ],'q20a'));
add(review('amity2020-ma-q20b','y12a-3','y12a-3E','hard',`Sketch \\(f(x)=2x^3-3x^2\\) for \\(0\\le x\\le2\\), labelling stationary points, intercepts, and endpoints.`,`Sample answer: The curve starts at (0,0), decreases to the minimum (1,−1), then increases to the endpoint (2,4). The stationary point (0,0) is also the left endpoint and a maximum on the restricted interval. The x-intercepts are (0,0) and (1.5,0).`, 'Use the stationary points and endpoints to anchor the curve; solve f(x)=0 for the intercepts.','\\(0\\le x\\le2\\)','The domain restriction means the graph is drawn only from x=0 to x=2.',[
 st('Use the stationary points and their nature to establish the shape.','\\(f′(x)=6x(x-1);\\quad (0,0)\\text{ and }(1,-1)\\text{ are stationary}\\)','q20a'),
 st('Find the intercepts and the right endpoint.','\\(f(x)=x^2(2x-3)\\Rightarrow x=0,\\frac32;\\quad f(2)=4\\)'),
 st('Join the points with a smooth cubic that decreases to (1,−1) and then increases to (2,4).','\\(\\text{Key points: }(0,0),(1,-1),(1.5,0),(2,4)\\)','q20') ],'q20'));
add(mc('amity2020-ma-q20c','y12a-2','y12a-2E','medium',`How many solutions does \\(2x^3-3x^2=\\pi\\) have on \\(0\\le x\\le2\\)?`,[m('0'),m('1'),m('2'),m('3')],1,'Compare the horizontal line y=π with the curve’s minimum, maximum, and monotonic intervals.','\\(2x^3-3x^2=\\pi\\)','The graph falls below zero before rising to its endpoint value 4.',[
 st('The curve decreases from 0 to −1 on [0,1].','\\(f(0)=0,\\quad f(1)=-1\\)'),
 st('It then increases from −1 to 4 on [1,2].','\\(f(2)=4>\\pi\\)'),
 st('Since π is reached once on this strictly increasing section, there is one solution.','\\(\\boxed{1\\text{ solution}}\\)') ]));
add(mc('amity2020-ma-q21','y12a-7','y12a-7B','medium',`A particle has displacement \\(x=e^t-3e^{2t}\\) for \\(t\\ge0\\). Which statement explains why it never comes to rest?`,[
 'Its velocity is always positive because e^t>0.','Its velocity is \\(e^t(1-6e^t)<0\\) for every t≥0.','Its velocity is zero at t=ln 6.','Its displacement is negative, so it is at rest.'],1,'Differentiate displacement to find velocity, then use e^t≥1 on the given time domain.','\\(t\\ge0\\)','A particle is at rest only when its velocity is zero, not when displacement is negative.',[
 st('Differentiate displacement.','\\(v=\\frac{dx}{dt}=e^t-6e^{2t}\\)'),
 st('Factor the velocity and use the time restriction.','\\(v=e^t(1-6e^t),\\quad e^t\\ge1\\Rightarrow1-6e^t\\le-5<0\\)'),
 st('Velocity never equals zero for t≥0.','\\(\\boxed{v<0\\text{ for all }t\\ge0,\\text{ so the particle never rests}}\\)') ]));
add(mc('amity2020-ma-q22a','y12a-10','y12a-10E','easy',`Test times are normally distributed with mean 37.5 min and standard deviation 1.5 min. Find the z-score for 34.5 min.`,[m('-2'),m('-1'),m('1'),m('2')],0,'Use z=(x−μ)/σ.','34.5 min','A value below the mean has a negative z-score.',[
 st('Identify x, the mean, and standard deviation.','\\(x=34.5,\\quad\\mu=37.5,\\quad\\sigma=1.5\\)'),
 st('Substitute into the standardisation formula.','\\(z=\\frac{x-\\mu}{\\sigma}=\\frac{34.5-37.5}{1.5}\\)'),
 st('Evaluate.','\\(\\boxed{z=-2}\\)') ]));
add(mc('amity2020-ma-q22b','y12a-10','y12a-10E','medium',`Using the empirical rule, what percentage of students finish in less than 34.5 minutes?`,[m('2.5%'),m('5%'),m('16%'),m('32%')],0,'34.5 min is two standard deviations below the mean; use the lower tail outside the central 95%.','less than 34.5 minutes','The 5% outside ±2σ is split evenly between two tails.',[
 st('The z-score is −2.','\\(z=\\frac{34.5-37.5}{1.5}=-2\\)'),
 st('About 95% lie between z=−2 and z=2, leaving 5% in both tails.','\\(100\\%-95\\%=5\\%\\)'),
 st('Take half for the lower tail.','\\(P(Z<-2)\\approx\\frac{5\\%}{2}=\\boxed{2.5\\%}\\)') ]));
add(mc('amity2020-ma-q22c','y12a-10','y12a-10E','medium',`Approximately 68% of test times lie in a central interval (a,b). Find a and b.`,[
 m('(34.5, 40.5)'),m('(36, 39)'),m('(35.5, 39.5)'),m('(37.5, 39)')],1,'The empirical rule places 68% within one standard deviation of the mean.','Approximately 68%','Add and subtract one standard deviation from the mean.',[
 st('For a normal distribution, the central 68% is approximately μ±σ.','\\(a=\\mu-\\sigma,\\quad b=\\mu+\\sigma\\)'),
 st('Substitute μ=37.5 and σ=1.5.','\\(a=37.5-1.5=36,\\quad b=37.5+1.5=39\\)'),
 st('State the central interval.','\\(\\boxed{(36,39)\\text{ minutes}}\\)') ]));
add(review('amity2020-ma-q23a','y12a-2','y12a-2D','medium',`Sketch \\(y=|3x-6|\\), labelling both axis intercepts.`,`Sample answer: The graph is V-shaped with vertex and x-intercept (2,0), and y-intercept (0,6). The left branch has gradient −3 and the right branch has gradient 3.`, 'Set the expression inside the absolute value to zero for the vertex, and substitute x=0 for the y-intercept.','\\(y=|3x-6|\\)','The absolute value keeps y non-negative and reflects the negative branch above the x-axis.',[
 st('Find the vertex by setting the inside equal to zero.','\\(3x-6=0\\Rightarrow x=2,\\quad y=0\\)','q23'),
 st('Find the y-intercept and identify the two linear branches.','\\(y(0)=6;\\quad y=6-3x\\ (x<2),\\quad y=3x-6\\ (x\\ge2)\\)'),
 st('Draw the V through (0,6) and (2,0), continuing with the correct slopes.','\\(\\text{intercepts: }(0,6),(2,0)\\)','q23') ],'q23'));
add(mc('amity2020-ma-q23b','y12a-2','y12a-2E','medium',`Using the graph of \\(y=|3x-6|\\), solve \\(|3x-6|<x\\).`,[
 m('(−∞,1.5)'),m('(1.5,3)'),m('[1.5,3]'),m('(2,3)')],1,'Find where the V-graph meets y=x, then identify where the V lies below the line.','\\(|3x-6|<x\\)','The inequality is strict, so intersection points are excluded.',[
 st('Find the intersections by solving the equality in each branch.','\\(6-3x=x\\Rightarrow x=1.5;\\quad3x-6=x\\Rightarrow x=3\\)'),
 st('Between these points, the V-shaped graph lies below y=x.','\\(|3x-6|<x\\text{ for }1.5<x<3\\)'),
 st('Use open endpoints because equality does not satisfy a strict inequality.','\\(\\boxed{x\\in(1.5,3)}\\)') ],'q23'));
add(mc('amity2020-ma-q24','y11a-8','y11a-8D','medium',`Solve \\(\\ln(2x+3)=2\\ln x\\).`,[m('x=-1'),m('x=1'),m('x=3'),m('x=-1\\text{ or }3')],2,'First note x>0, then combine 2 ln x as ln(x²).','\\ln(2x+3)=2\\ln x','Reject any algebraic root that is outside the logarithm’s domain.',[
 st('The logarithm ln x requires x>0. Combine the right-hand logarithms.','\\(2\\ln x=\\ln(x^2)\\)'),
 st('Equate positive logarithm arguments and solve the quadratic.','\\(2x+3=x^2\\Rightarrow x^2-2x-3=0\\Rightarrow(x-3)(x+1)=0\\)'),
 st('Check the roots against x>0.','\\(x=-1\\text{ is rejected};\\quad\\boxed{x=3}\\)') ]));
add(review('amity2020-ma-q25a','y12a-10','y12a-10B','medium',`A density is \\(f(x)=\\frac{3x^2}{8}\\) for \\(0<x<a\\). Show that \\(a=2\\).`,`Sample answer: Normalize the density: \\(\\int_0^a\\frac{3x^2}{8}dx=1\\). Thus \\([x^3/8]_0^a=a^3/8=1\\), so \\(a^3=8\\) and, since a is positive, \\(a=2\\).`,'The total area under a probability density over its support must equal 1.','\\(f(x)=\\frac{3x^2}{8}\\)','The upper bound a is positive because it is the endpoint of the support.',[
 st('Set the integral over the entire support equal to 1.','\\(\\int_0^a\\frac{3x^2}{8}\\,dx=1\\)'),
 st('Integrate and substitute the limits.','\\([\\frac{x^3}{8}]_0^a=\\frac{a^3}{8}=1\\)'),
 st('Solve and choose the positive endpoint.','\\(a^3=8\\Rightarrow\\boxed{a=2}\\)') ]));
add(mc('amity2020-ma-q25b','y12a-10','y12a-10B','medium',`For the density \\(f(x)=\\frac{3x^2}{8}\\) on \\((0,2)\\), find the exact median.`,[m('\\sqrt[3]{4}'),m('\\sqrt2'),m('\\frac43'),m('2')],0,'Set the cumulative probability from 0 to the median equal to one half.','exact median','A median splits probability area in half; it does not split the interval length in half.',[
 st('Let the median be m and set the area from 0 to m equal to 1/2.','\\(\\int_0^m\\frac{3x^2}{8}\\,dx=\\frac12\\)'),
 st('Integrate and solve for m³.','\\(\\frac{m^3}{8}=\\frac12\\Rightarrow m^3=4\\)'),
 st('Take the positive cube root because m lies in (0,2).','\\(\\boxed{m=\\sqrt[3]{4}}\\)') ]));
add(mc('amity2020-ma-q26','y11a-9','y11a-9A','hard',`Let \\(f(x)=ax+b\\text{ for }x<0,\\quad f(x)=e^{2x}\\text{ for }x\\ge0\\). If f is continuous and differentiable at x=0, find (a,b).`,[
 m('(a,b)=(1,0)'),m('(a,b)=(2,0)'),m('(a,b)=(2,1)'),m('(a,b)=(1,1)')],2,'Continuity matches the function values at 0; differentiability then matches the one-sided gradients.','continuous and differentiable at x=0','Apply continuity first to find b, then match derivatives to find a.',[
 st('Continuity at 0 requires the left limit to equal the right value.','\\(b=e^0=1\\)'),
 st('Differentiate each branch and equate one-sided derivatives at 0.','\\(f′_-(0)=a,\\quad f′_+(0)=2e^0=2\\Rightarrow a=2\\)'),
 st('State both parameters in the requested order.','\\(\\boxed{(a,b)=(2,1)}\\)') ]));
add(mc('amity2020-ma-q27','y12a-1','y12a-1F','hard',`A virus infects 120 people on day 1 and 10 more people each following day than the previous day. How many days until the total infected is more than 10,000?`,[m('34 days'),m('35 days'),m('36 days'),m('40 days')],1,'The daily infections form an arithmetic sequence; use the sum and check the first integer above the threshold.','more than 10,000','The total must be strictly greater than 10,000, so round the positive root up to a whole day.',[
 st('Identify the arithmetic sequence parameters.','\\(a_1=120,\\quad d=10,\\quad S_n=\\frac n2[240+10(n-1)]\\)'),
 st('Set the total equal to 10,000 to locate the threshold.','\\(5n(n+23)=10000\\Rightarrow n^2+23n-2000=0\\)'),
 st('The positive root is about 34.7, so check the adjacent integer totals.','\\(S_{34}=9690,\\quad S_{35}=10150\\)'),
 st('The first total above 10,000 occurs after 35 days.','\\(\\boxed{35\\text{ days}}\\)') ]));
add(review('amity2020-ma-q28','y11a-3','y11a-3H','hard',`The given graph is part of an odd function for \\(x\\ge0\\), with horizontal asymptote \\(y=2\\). Complete the graph for \\(x<0\\).`,`Sample answer: Rotate the given right-hand part 180° about the origin. The completed odd graph approaches y=−2 as x→−∞ and passes through the origin.`, 'An odd function has rotational symmetry through 180° about the origin.','odd function','Every point (x,y) on the given part maps to (−x,−y).',[
 st('Identify the symmetry rule for an odd function.','\\(f(-x)=-f(x)\\quad\\text{so }(x,y)\\mapsto(-x,-y)\\)','q28Given'),
 st('Reflect the right-hand asymptote y=2 through the origin.','\\(y=2\\mapsto y=-2\\text{ on the left}\\)'),
 st('Draw the left-hand branch as a half-turn of the given right-hand branch.','\\(\\text{left branch has asymptote }y=-2\\)','q28') ],'q28Given'));
add(mc('amity2020-ma-q29','y12a-2','y12a-2I','hard',`The graph of \\(y=a\\sin(bx)+c\\), with b>0, is shown. Find (a,b,c).`,[
 m('(2, \\frac{\\pi}{6}, 3)'),m('(-2, \\frac{\\pi}{6}, 3)'),m('(-2, \\frac{\\pi}{12}, 1)'),m('(2, \\frac{\\pi}{3}, 3)')],1,'Read the midline and amplitude from the maximum and minimum, then use the period to find b.','\\(y=a\\sin(bx)+c\\)','The graph falls from its midline at x=0, so the sine coefficient is negative.',[
 st('Read maximum 5 and minimum 1 to find the midline and amplitude.','\\(c=\\frac{5+1}{2}=3,\\quad |a|=\\frac{5-1}{2}=2\\)'),
 st('The curve decreases from its midline at x=0, so a is negative. Maxima at −3 and 9 give period 12.','\\(a=-2,\\quad T=12=\\frac{2\\pi}{b}\\Rightarrow b=\\frac\\pi6\\)','q29'),
 st('Combine the parameters.','\\(\\boxed{(a,b,c)=(-2,\\frac\\pi6,3)}\\)','q29') ],'q29'));
add(mc('amity2020-ma-q30a','y12a-7','y12a-7C','hard',`A particle starts at the origin with velocity \\(v(t)=4t-t^2\\) for 0≤t≤5, then v(t)=−5 for t>5. When does it first return to the origin?`,[m('\\frac{5}{3} s'),m('5 s'),m('\\frac{20}{3} s'),m('\\frac{25}{3} s')],2,'Set the total signed area under the velocity graph from 0 to the return time equal to zero.','return to the origin','The velocity becomes negative after t=4, so the later negative area cancels the earlier positive area.',[
 st('Integrate the positive/curved section from 0 to 5.','\\(\\int_0^5(4t-t^2)dt=[2t^2-\\frac{t^3}{3}]_0^5=\\frac{25}{3}\\)'),
 st('For t>5, the velocity is −5; let the return time be T and set net displacement to zero.','\\(\\frac{25}{3}-5(T-5)=0\\)'),
 st('Solve for T.','\\(5T=\\frac{100}{3}\\Rightarrow\\boxed{T=\\frac{20}{3}\\text{ s}}\\)') ],'q30'));
add(mc('amity2020-ma-q30b','y12a-7','y12a-7B','hard',`For the piecewise velocity in Question 30, when is the acceleration zero?`,[
 m('t=2 only'),m('t=2 or t>5'),m('t=4 or t=5'),m('t<2')],1,'Acceleration is the gradient of the velocity-time graph on each smooth interval.','acceleration zero','At t=5 the piecewise gradient changes abruptly, so acceleration is not defined at that instant.',[
 st('Differentiate the quadratic velocity for 0≤t<5.','\\(a(t)=v′(t)=4-2t\\)'),
 st('Set this branch equal to zero.','\\(4-2t=0\\Rightarrow t=2\\)'),
 st('For t>5, velocity is constant −5, so its gradient is zero; at t=5 there is a corner.','\\(\\boxed{t=2\\text{ or }t>5}\\)') ],'q30'));
add(mc('amity2020-ma-q31','y12a-10','y12a-10F','hard',`For a standard normal distribution, the area from z=0 to z=0.67 is about 0.25. Which scores are approximate outliers?`,[
 m('z<-0.67 or z>0.67'),m('z<-1.34 or z>1.34'),m('z<-2.68 or z>2.68'),m('z<-3 or z>3')],2,'Use symmetry to identify Q1 and Q3, then apply the 1.5×IQR fences.','approximate outliers','The IQR spans from −0.67 to 0.67, so it is twice 0.67.',[
 st('By symmetry, the quartiles are approximately −0.67 and 0.67.','\\(Q_1=-0.67,\\quad Q_3=0.67\\)','q31'),
 st('Calculate the interquartile range and lower/upper fences.','\\(IQR=1.34;\\quad Q_1-1.5IQR=-2.68,\\;Q_3+1.5IQR=2.68\\)'),
 st('Values outside the fences are approximate outliers.','\\(\\boxed{z<-2.68\\text{ or }z>2.68}\\)','q31') ],'q31'));
add(mc('amity2020-ma-q32a','y12a-2','y12a-2I','easy',`Water height is \\(h(t)=2.2+1.2\\cos(\\frac{\\pi t}{12})\\), where t is hours after 5 am. Find the height at 5 am.`,[m('1.0 m'),m('2.2 m'),m('3.4 m'),m('4.6 m')],2,'At 5 am, t=0. Substitute into the cosine model.','at 5 am','The time variable is measured after 5 am, so the starting time corresponds to t=0.',[
 st('Set t=0 at the starting time.','\\(h(0)=2.2+1.2\\cos0\\)'),
 st('Use cos 0=1.','\\(h(0)=2.2+1.2(1)=3.4\\)'),
 st('State the height with units.','\\(\\boxed{3.4\\text{ m}}\\)','q32') ]));
add(review('amity2020-ma-q32b','y12a-2','y12a-2I','medium',`Sketch \\(h(t)=2.2+1.2\\cos(\\frac{\\pi t}{12})\\) for 0≤t≤24.`,`Sample answer: Draw a cosine curve through (0,3.4), (6,2.2), (12,1.0), (18,2.2), and (24,3.4), with midline h=2.2 and range [1.0,3.4].`,'Find the midline, amplitude, and period, then mark the quarter-period points.','for 0≤t≤24','A cosine graph starts at its maximum here because its coefficient is positive.',[
 st('Identify midline, amplitude, and period.','\\(h=2.2+1.2\\cos(\\frac{\\pi t}{12});\\quad A=1.2,\\;T=\\frac{2\\pi}{\\pi/12}=24\\)','q32'),
 st('Calculate the maximum, minimum, and midline points at quarter-period intervals.','\\(h(0)=3.4,\\;h(6)=2.2,\\;h(12)=1.0,\\;h(18)=2.2,\\;h(24)=3.4\\)'),
 st('Plot and smoothly join the points with one complete cosine cycle.','\\(\\text{range }[1.0,3.4]\\)','q32') ],'q32'));
add(mc('amity2020-ma-q32c','y12a-2','y12a-2I','medium',`At what first time after 5 am does the water height drop to 1.6 m?`,[m('4 h'),m('8 h'),m('12 h'),m('16 h')],1,'Substitute h=1.6, isolate cosine, and choose the first solution in the 24-hour cycle.','first time after 5 am','The first crossing occurs while the cosine graph is descending from its maximum.',[
 st('Substitute h=1.6 into the model and isolate the cosine.','\\(2.2+1.2\\cos(\\frac{\\pi t}{12})=1.6\\Rightarrow\\cos(\\frac{\\pi t}{12})=-\\frac12\\)'),
 st('On the descending part of the cycle, the first angle with cosine −1/2 is 2π/3.','\\(\\frac{\\pi t}{12}=\\frac{2\\pi}{3}\\)'),
 st('Solve for t.','\\(t=8\\boxed{\\text{ hours after 5 am}}\\)','q32') ]));
add(mc('amity2020-ma-q32d','y12a-2','y12a-2I','medium',`For how many hours in a 24-hour period is the water height above 1.6 m?`,[m('8 h'),m('12 h'),m('16 h'),m('20 h')],2,'The level is below 1.6 m between its two crossings; subtract that duration from 24 hours.','above 1.6 m','“Above” excludes the two exact crossing times, which do not change the duration.',[
 st('The water crosses 1.6 m at t=8 and t=16.','\\(8\\le t\\le16\\text{ is below the threshold}\\)'),
 st('Find the duration below the threshold.','\\(16-8=8\\text{ hours}\\)'),
 st('Subtract from the 24-hour period.','\\(24-8=\\boxed{16\\text{ hours}}\\)') ]));
add(mc('amity2020-ma-q33a','y12a-9','y12a-9D','medium',`For the five weight and metabolic-rate pairs shown, the correlation coefficient is approximately 0.8233. What does this indicate?`,[
 'Strong positive linear correlation','Weak positive linear correlation','Strong negative linear correlation','No linear correlation'],0,'A correlation close to +1 indicates a strong positive linear association.','correlation coefficient','Use both the sign and magnitude of r to describe the relationship.',[
 st('The coefficient is positive, so the association is positive.','\\(r=0.8233>0\\)'),
 st('Its magnitude is fairly close to 1, indicating a strong linear relationship.','\\(|r|=0.8233\\)'),
 st('Combine direction and strength.','\\(\\boxed{\\text{strong positive linear correlation}}\\)','q33') ],'q33'));
add(mc('amity2020-ma-q33b','y12a-9','y12a-9E','hard',`Using the displayed data with weight x and metabolic rate y, select the least-squares regression line rounded to 3 decimal places.`,[
 m('y=13.346x+903.499'),m('y=903.499x+13.346'),m('y=-13.346x+903.499'),m('y=13.346x-903.499')],0,'Use weight as x and metabolic rate as y; retain the variable order specified in the question.','weight x and metabolic rate y','Regression direction matters: predicting y from x is not the same as predicting x from y.',[
 st('Pair each weight with the metabolic rate in the same table column.','\\((52,1671),(63,1669),(65,1812),(47,1442),(49,1607)\\)','q33'),
 st('The least-squares calculation gives slope and intercept.','\\(m\\approx13.346,\\quad c\\approx903.499\\)'),
 st('Write the fitted response y as a function of explanatory variable x.','\\(\\boxed{y=13.346x+903.499}\\)','q33') ],'q33'));
add(mc('amity2020-ma-q33c','y12a-9','y12a-9E','medium',`Use \\(y=13.346x+903.499\\) to estimate weight when metabolic rate is 1552. Round to 1 decimal place.`,[m('45.8 kg'),m('48.6 kg'),m('51.4 kg'),m('1552.0 kg')],1,'Substitute y=1552 and solve the fitted line for x.','metabolic rate is 1552','The question asks for weight, so rearrange the y-on-x line rather than substituting 1552 as x.',[
 st('Substitute the given metabolic rate into the regression equation.','\\(1552=13.346x+903.499\\)','q33'),
 st('Rearrange to solve for the weight.','\\(x=\\frac{1552-903.499}{13.346}\\approx48.5913\\)'),
 st('Round to one decimal place and include units.','\\(\\boxed{48.6\\text{ kg}}\\)','q33') ],'q33'));
add(mc('amity2020-ma-q34a','y12a-4','y12a-4G','hard',`For \\(f(x)=x(x-2)(x-6)\\), find the exact total area bounded by the curve and the x-axis.`,[m('\\frac{108}{3}'),m('\\frac{148}{3}'),m('\\frac{20}{3}'),m('\\frac{128}{3}')],1,'Find the three roots and split the area where the curve changes sign.','exact total area','The portion below the axis contributes the negative of its signed integral.',[
 st('Expand f and identify the roots that bound the regions.','\\(f(x)=x^3-8x^2+12x;\\quad x=0,2,6\\)','q34'),
 st('The curve is above the axis on [0,2] and below it on [2,6].','\\(A=\\int_0^2f(x)dx-\\int_2^6f(x)dx\\)','q34'),
 st('Use an antiderivative and evaluate both pieces.','\\(F(x)=\\frac{x^4}{4}-\\frac{8x^3}{3}+6x^2;\\quad A=\\frac{20}{3}+\\frac{128}{3}\\)'),
 st('Add the positive geometric areas.','\\(\\boxed{A=\\frac{148}{3}\\text{ units}^2}\\)','q34') ],'q34'));
add(mc('amity2020-ma-q34b','y12a-4','y12a-4G','hard',`Let \\(g(x)=f(ax+b)\\), where \\(f(x)=x(x-2)(x-6)\\). The signed integrals \\(\\int_4^0g(x)dx+\\int_4^6g(x)dx\\) give the same total area as in part (a). Select the intended \\((a,b)\\).`,[
 m('(a,b)=(1,6)'),m('(a,b)=(-1,6)'),m('(a,b)=(-1,0)'),m('(a,b)=(2,6)')],1,'Map the roots 0, 2, and 6 through the horizontal reflection and shift so the positive and negative area pieces align with the given bounds.','\\(g(x)=f(ax+b)\\)','For g(x)=f(6−x), the integral bounds map back to the two original lobes with the correct signs.',[
 st('The original cubic has roots 0, 2, and 6; the target bounds split at x=4.','\\(f(u)=0\\text{ at }u=0,2,6\\)','q34'),
 st('Reflect horizontally and translate 6 units right, so the input to f is 6−x.','\\(g(x)=f(-x+6)\\)'),
 st('Match the input with ax+b.','\\(ax+b=-x+6\\Rightarrow\\boxed{a=-1,\\;b=6}\\)','q34') ],'q34'));
add(mc('amity2020-ma-q35','y11a-6','y11a-6B','hard',`From A, the angle of elevation to a hill summit is 12°. After walking 600 m toward the hill to B, the angle is 18°. Find the summit height above A.`,[m('268.79 m'),m('368.79 m'),m('468.79 m'),m('568.79 m')],1,'Let the horizontal distance from B to the hill foot be d and the height be h. Write a tangent equation at each observation point.','600 m','Use the same vertical height h in both right triangles; the first horizontal distance is d+600.',[
 st('Let d be the horizontal distance from B to the hill foot, and h the vertical height.','\\(\\tan18^\\circ=\\frac hd\\Rightarrow d=\\frac h{\\tan18^\\circ}\\)','q35step'),
 st('At A, the horizontal distance is d+600. Use its 12° angle.','\\(\\tan12^\\circ=\\frac h{d+600}\\Rightarrow d+600=\\frac h{\\tan12^\\circ}\\)','q35step'),
 st('Subtract the two distance equations and solve for h.','\\(600=h(\\cot12^\\circ-\\cot18^\\circ)\\Rightarrow h\\approx368.789\\text{ m}\\)','q35step'),
 st('Round the height to two decimal places.','\\(\\boxed{368.79\\text{ m}}\\)','q35step') ],'q35'));
add(mc('amity2020-ma-q36a','y12a-8','y12a-8E','hard',`A $48,000 car loan is repaid by equal month-end payments over 5 years at 8.4% p.a. compounded monthly. Find the monthly payment.`,[m('$882.48'),m('$982.48'),m('$1094.89'),m('$1200.00')],1,'Use the present-value formula for an ordinary annuity with monthly rate 0.084/12 and 60 payments.','8.4% p.a. compounded monthly','Convert the annual rate to a monthly rate and five years to 60 payments.',[
 st('Find the monthly rate and number of repayments.','\\(i=\\frac{0.084}{12}=0.007,\\quad n=5(12)=60\\)'),
 st('Set the present value of the payments equal to the loan principal.','\\(48000=M\\frac{1-(1.007)^{-60}}{0.007}\\Rightarrow M=\\frac{48000(0.007)}{1-(1.007)^{-60}}\\)'),
 st('Evaluate and round the payment to cents.','\\(M\\approx\\boxed{\\$982.48\\text{ per month}}\\)') ]));
add(mc('amity2020-ma-q36b','y12a-8','y12a-8E','medium',`Using the monthly payment for the $48,000 loan, find the total interest paid over 60 months.`,[m('$9,489.02'),m('$10,948.90'),m('$58,948.90'),m('$48,000.00')],1,'Total interest is total repayments minus the original amount borrowed.','total interest paid','There are 60 monthly payments; subtract the principal once from their total.',[
 st('Use the monthly payment and number of months.','\\(60\\times\\$982.4817\\approx\\$58{,}948.90\\)'),
 st('Subtract the amount borrowed.','\\(I=\\$58{,}948.90-\\$48{,}000=\\$10{,}948.90\\)'),
 st('State total interest to cents.','\\(\\boxed{\\$10{,}948.90}\\)') ]));
add(mc('amity2020-ma-q37','y12a-3','y12a-3G','hard',`The upper semicircle is \\(y=\\sqrt{1-x^2}\\), and the rectangle is symmetric about the y-axis. Find its maximum area.`,[m('\\frac12\\text{ units}^2'),m('\\frac{\\sqrt2}{2}\\text{ units}^2'),m('1\\text{ unit}^2'),m('2\\text{ units}^2')],2,'Let the top-right corner be (x,y). The rectangle has width 2x and height y=√(1−x²).','maximum area','Use the symmetry: the width is twice the positive x-coordinate.',[
 st('Use the point on the semicircle to express the rectangle’s dimensions.','\\(y=\\sqrt{1-x^2},\\quad w=2x\\)','q37'),
 st('Write and differentiate the area function.','\\(A(x)=2x\\sqrt{1-x^2};\\quad A′(x)=\\frac{2(1-2x^2)}{\\sqrt{1-x^2}}\\)','q37'),
 st('Set the derivative to zero and take the feasible positive x.','\\(1-2x^2=0\\Rightarrow x=\\frac1{\\sqrt2},\\quad y=\\frac1{\\sqrt2}\\)','q37'),
 st('Evaluate the maximum area.','\\(A=2\\cdot\\frac1{\\sqrt2}\\cdot\\frac1{\\sqrt2}=\\boxed{1\\text{ unit}^2}\\)','q37') ],'q37'));

if(Q.length!==54)throw new Error(`Expected 54 question entries, got ${Q.length}`);
for(const {chapter,topic,q} of Q){
 const file=path.join(root,`content/chapters/${chapter}.json`); const data=JSON.parse(fs.readFileSync(file,'utf8'));
 const target=data.topics.find(t=>t.topicId===topic); if(!target)throw new Error(`Missing topic ${topic} in ${chapter}`);
 const existingIndex=target.questions.findIndex(existing=>existing.id===q.id);
 if(existingIndex>=0) target.questions[existingIndex]=q;
 else target.questions.push(q);
 fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
}
console.log(`Added ${Q.length} Amity 2020 Mathematics Advanced questions across ${new Set(Q.map(x=>x.chapter)).size} chapter files.`);
