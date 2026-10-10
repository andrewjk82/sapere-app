import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const p = (inner, vb='0 0 500 300', width='78%') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${width}" style="display:block;margin:0 auto;max-width:100%;height:auto;font-family:Arial,sans-serif"><rect x="1" y="1" width="${vb.split(' ')[2]-2}" height="${vb.split(' ')[3]-2}" rx="12" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>${inner}</svg>`;
const line=(x1,y1,x2,y2,c='#334155',w=4,d='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" ${d?`stroke-dasharray="${d}"`:''} stroke-linecap="round"/>`;
const text=(x,y,t,size=17,c='#1e293b',anchor='middle',weight='normal')=>`<text x="${x}" y="${y}" fill="${c}" font-size="${size}" text-anchor="${anchor}" font-weight="${weight}">${t}</text>`;
const circle=(x,y,r=4,c='#334155')=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const axes=(x0=60,y0=230,x1=460,y1=40)=>`${line(x0,y0,x1,y0,'#64748b',2)}${line(x0,y0,x0,y1,'#64748b',2)}${text(x1-5,y0+22,'x',15)}${text(x0-15,y1+5,'y',15)}`;

const figs={};
figs.tri30=p(`${line(85,230,285,230)}${line(285,230,285,115)}${line(85,230,285,115)}<path d="M265 230v-20h20" fill="none" stroke="#f59e0b" stroke-width="3"/><path d="M115.0 230.0L115.0 229.0L114.9 228.0L114.9 227.1L114.7 226.1L114.6 225.1L114.4 224.1L114.2 223.2L114.0 222.2L113.7 221.3L113.4 220.4L113.1 219.4L112.7 218.5L112.3 217.6L111.9 216.7L111.5 215.9L111.0 215.0" fill="none" stroke="#f59e0b" stroke-width="3"/><path d="M285.0 145.0L283.0 144.9L281.1 144.7L279.1 144.4L277.2 144.0L275.4 143.4L273.5 142.7L271.7 141.9L270.0 141.0L268.3 139.9L266.7 138.8L265.2 137.6L263.8 136.2L262.4 134.8L261.2 133.3L260.1 131.7L259.0 130.0" fill="none" stroke="#f59e0b" stroke-width="3"/>${text(183,255,'√3',17)}${text(302,176,'1',17,'#1e293b','start')}${text(174,155,'2',17)}${text(128,222,'30°',14,'#d97706','middle','bold')}${text(267,150,'60°',14,'#d97706','middle','bold')}`);
figs.ineq=p(`${line(65,160,435,160,'#334155',3)}${[65,145,225,305,385].map(x=>line(x,153,x,168,'#64748b',2)).join('')}${text(65,194,'−3',14)}${text(145,194,'−2',14)}${text(225,194,'−1',14)}${text(305,194,'0',14)}${text(385,194,'1',14)}<path d="M225 160H425" stroke="#6366f1" stroke-width="8"/><path d="M425 151L440 160L425 169Z" fill="#6366f1"/><circle cx="225" cy="160" r="7" fill="#fff" stroke="#6366f1" stroke-width="3"/>${text(225,125,'−1',16,'#6366f1','middle','bold')}`);
figs.scatterQ6=p(`${line(70,245,445,245,'#64748b',2)}${line(70,55,70,245,'#64748b',2)}${text(260,289,'km run per week',11,'#334155')}${text(56,58,'Weight',11,'#334155','end')}${[0,1,2,3,4,5,6,7].map((v,i)=>`${line(70+i*52,242,70+i*52,248,'#94a3b8',1)}${text(70+i*52,265,String(v),11)}`).join('')}${[82,84,86,88,90].map((v,i)=>{const y=240-i*44;return `${line(67,y,73,y,'#94a3b8',1)}${text(61,y+4,String(v),10,'#64748b','end')}`}).join('')}${[[78,196],[96,120],[122,105],[140,123],[165,126],[190,92],[205,158],[220,173],[246,140],[274,90],[288,166],[296,187],[318,176],[340,193],[365,211],[391,153],[417,158],[430,186]].map(a=>circle(...a,4)).join('')}${line(72,122,438,190,'#94a3b8',2,'7 6')}`);
figs.parabQ7=p(`${line(70,190,450,190,'#64748b',2)}${line(360,275,360,42,'#64748b',2)}${text(448,212,'x',14)}${text(345,52,'y',14)}${[-6,-4,-2,0,2].map((v)=>{const x=360+40*v;return `${line(x,185,x,195,'#94a3b8',1)}${text(x,215,String(v),12)}`}).join('')}${[-2,0,2,4].map(v=>`${line(355,190-30*v,365,190-30*v,'#94a3b8',1)}${text(343,194-30*v,String(v),12,'#64748b','end')}`).join('')}<path d="M 180 -12.5 Q 300 527.5 420 -12.5" fill="none" stroke="#334155" stroke-width="4"/>${circle(240,190,5,'#6366f1')}${circle(360,190,5,'#6366f1')}${circle(300,257,5,'#f59e0b')}${text(299,282,'(−1.5, −2.25)',11,'#b45309')}`);
figs.triCos=p(`${line(70,120,150,220)}${line(150,220,374,220)}${line(70,120,374,220)}${text(102,190,'4',17,'#334155','middle','bold')}${text(262,245,'7',17,'#334155','middle','bold')}${text(225,148,'10',17,'#334155','middle','bold')}<path d="M340.0 220.0L340.0 219.3L340.0 218.6L340.1 218.0L340.1 217.3L340.2 216.6L340.2 216.0L340.3 215.3L340.4 214.6L340.5 214.0L340.7 213.3L340.8 212.6L341.0 212.0L341.1 211.3L341.3 210.7L341.5 210.0L341.7 209.4" fill="none" stroke="#6366f1" stroke-width="3"/>${text(316,216,'θ',14,'#4f46e5','middle','bold')}`);
figs.triCosHighlight=figs.triCos.replace('</svg>',`${line(70,120,150,220,'#6366f1',7)}${line(150,220,374,220,'#f59e0b',7)}${line(70,120,374,220,'#f59e0b',7)}<path d="M342 220 A32 32 0 0 1 344 210" fill="none" stroke="#f59e0b" stroke-width="4"/></svg>`);
figs.treeBlank=p(`${line(250,42,250,80,'#6366f1',3)}${line(250,80,145,145,'#94a3b8',2)}${line(250,80,355,145,'#94a3b8',2)}${line(145,145,95,218,'#94a3b8',2)}${line(145,145,195,218,'#94a3b8',2)}${line(355,145,305,218,'#94a3b8',2)}${line(355,145,405,218,'#94a3b8',2)}${circle(250,42,6,'#6366f1')}${circle(145,145,5,'#94a3b8')}${circle(355,145,5,'#94a3b8')}${text(250,29,'Start',13,'#334155','middle','bold')}${text(145,171,'1st draw',12)}${text(355,171,'1st draw',12)}${text(95,245,'S',13)}${text(195,245,'P',13)}${text(305,245,'S',13)}${text(405,245,'P',13)}${text(145,270,'2nd draw',12)}${text(355,270,'2nd draw',12)}`);
figs.treeDone=p(`${line(250,55,250,100,'#6366f1',3)}${line(250,100,135,165,'#10b981',3)}${line(250,100,365,165,'#64748b',3)}${text(190,105,'2/10',14,'#10b981')}${text(310,105,'8/10',14,'#64748b')}${line(135,165,85,245,'#10b981',3)}${line(135,165,185,245,'#64748b',3)}${line(365,165,315,245,'#10b981',3)}${line(365,165,415,245,'#64748b',3)}${text(105,187,'1/9',13,'#10b981')}${text(165,187,'8/9',13,'#64748b')}${text(335,187,'2/9',13,'#10b981')}${text(395,187,'7/9',13,'#64748b')}${text(85,270,'S',14)}${text(185,270,'P',14)}${text(315,270,'S',14)}${text(415,270,'P',14)}`);
figs.venn=p(`<circle cx="190" cy="135" r="82" fill="#dbeafe" fill-opacity=".22" stroke="#334155" stroke-width="2"/><circle cx="310" cy="135" r="82" fill="#dcfce7" fill-opacity=".22" stroke="#334155" stroke-width="2"/><circle cx="250" cy="205" r="82" fill="#fce7f3" fill-opacity=".22" stroke="#334155" stroke-width="2"/>${text(136,73,'F',16,'#334155','middle','bold')}${text(364,73,'S',16,'#334155','middle','bold')}${text(331,274,'G',16,'#334155','middle','bold')}${text(130,145,'12',16)}${text(370,145,'10',16)}${text(250,91,'6',16)}${text(195,211,'5',16)}${text(305,211,'4',16)}${text(250,164,'7',16,'#b91c1c','middle','bold')}${text(250,262,'16',16)}`);
figs.squareGraph=p(`${axes(180,220,450,45)}${[-3,-2,-1,0,1,2,3,4].map(x=>`${line(180+x*38,215,180+x*38,225,'#94a3b8',1)}${text(180+x*38,245,String(x),12)}`).join('')}${[-2,0,2,4,6].map(y=>`${line(175,220-y*20,185,220-y*20,'#94a3b8',1)}${text(158,225-y*20,String(y),12)}`).join('')}`);
figs.parabStep1=p(`${axes(180,220,450,45)}${circle(142,220,6,'#10b981')}${circle(294,220,6,'#10b981')}${text(142,245,'(−1,0)',13,'#047857')}${text(294,245,'(3,0)',13,'#047857')}`);
figs.parabStep2=p(`${axes(180,220,450,45)}${circle(142,220,6,'#10b981')}${circle(294,220,6,'#10b981')}${circle(180,160,6,'#2563eb')}${line(218,55,218,220,'#f59e0b',2,'6 5')}${text(142,245,'(−1,0)',13,'#047857')}${text(294,245,'(3,0)',13,'#047857')}${text(165,151,'(0,3)',13,'#1d4ed8','end')}${text(225,75,'axis x=1',12,'#b45309','start')}`);
figs.parabStep3=p(`${axes(180,220,450,45)}${circle(142,220,6,'#10b981')}${circle(294,220,6,'#10b981')}${circle(180,160,6,'#2563eb')}${circle(218,140,7,'#f59e0b')}${line(218,55,218,220,'#f59e0b',2,'6 5')}${text(142,245,'(−1,0)',13,'#047857')}${text(294,245,'(3,0)',13,'#047857')}${text(165,151,'(0,3)',13,'#1d4ed8','end')}${text(241,133,'(1,4)',13,'#b45309','start')}`);
figs.parabSolution=p(`${axes(180,220,450,45)}<path d="M142 220 C162 177 194 140 218 140 C246 140 273 177 294 220" fill="none" stroke="#6366f1" stroke-width="4"/>${circle(142,220,6,'#10b981')}${circle(294,220,6,'#10b981')}${circle(180,160,6,'#2563eb')}${circle(218,140,6,'#f59e0b')}${line(218,55,218,220,'#f59e0b',2,'6 5')}${text(142,245,'(−1,0)',13,'#047857')}${text(294,245,'(3,0)',13,'#047857')}${text(165,151,'(0,3)',13,'#1d4ed8','end')}${text(241,133,'(1,4)',13,'#b45309','start')}`);
figs.circle=p(`${line(70,100,450,100,'#64748b',2)}${line(200,270,200,35,'#64748b',2)}${text(445,122,'x',15)}${text(185,43,'y',15)}${[-4,-2,0,2,4,6,8].map(v=>{const x=200+25*v; return x>65&&x<455?`${line(x,96,x,104,'#94a3b8',1)}${text(x,121,String(v),11)}`:''}).join('')}${[-8,-6,-4,-2,0,2].map(v=>{const y=100-25*v;return y>25&&y<275?`${line(196,y,204,y,'#94a3b8',1)}${text(188,y+4,String(v),11,'#64748b','end')}`:''}).join('')}<circle cx="250" cy="175" r="100" fill="#dbeafe" fill-opacity=".5" stroke="#334155" stroke-width="3"/>${circle(250,175,5,'#dc2626')}${line(250,175,350,175,'#f59e0b',3)}${text(250,198,'(2,−3)',14,'#b91c1c')}${text(303,166,'4',14,'#b45309','middle','bold')}`);
figs.hyperbola=p(`${axes(70,240,450,45)}<path d="M80 235 C95 180 105 125 125 85 C145 55 170 50 190 48" fill="none" stroke="#64748b" stroke-width="3"/><path d="M290 45 C315 50 340 60 355 82 C380 120 395 180 420 235" fill="none" stroke="#64748b" stroke-width="3"/><path d="M420 238 C395 280 380 315 355 340" fill="none" stroke="#6366f1" stroke-width="3"/>${line(70,160,450,160,'#cbd5e1',1,'5 5')}${line(260,240,260,45,'#cbd5e1',1,'5 5')}${text(313,92,'y = 3/x',13,'#64748b')}${text(325,205,'y = −3/(x − 5)',13,'#6366f1')}`);
figs.expLine=p(`${line(45,230,455,230,'#64748b',2)}${line(250,270,250,35,'#64748b',2)}${text(451,250,'x',14)}${text(238,43,'y',14)}<path d="M220 225 C239 221 252 205 267 177 C283 148 294 113 300 92" fill="none" stroke="#6366f1" stroke-width="3"/><path d="M80 95L300 230" fill="none" stroke="#f59e0b" stroke-width="3"/>${line(80,95,300,95,'#94a3b8',2,'6 5')}${line(80,95,80,230,'#94a3b8',2,'6 5')}${line(300,95,300,230,'#94a3b8',2,'6 5')}${circle(80,95,5,'#b91c1c')}${circle(300,95,5,'#b91c1c')}${circle(300,230,5,'#2563eb')}${text(335,65,'y = 2ˣ',14,'#4f46e5')}${text(403,218,'x + 3y = 3',13,'#b45309','end')}${text(80,255,'P',14,'#1e293b')}${text(300,255,'x=3',12,'#1e293b')}${text(65,89,'y=8',12,'#64748b','end')}`);
figs.triSine=p(`${line(144,292,220,95)}${line(220,95,400,130)}${line(144,292,400,130)}<path d="M211 118 A26 26 0 0 1 245 100" fill="none" stroke="#f59e0b" stroke-width="3"/>${text(226,136,'100°',14,'#b45309','middle','bold')}<path d="M154 264 A30 30 0 0 1 170 276" fill="none" stroke="#4f46e5" stroke-width="3"/>${text(174,261,'θ',14,'#4f46e5','middle','bold')}${text(314,102,'3 cm',14)}${text(281,222,'5 cm',14)}`);
figs.triSinePair=figs.triSine.replace('</svg>',`${line(220,95,400,130,'#f59e0b',7)}${line(144,292,400,130,'#2563eb',7)}</svg>`);
figs.triSineArea=figs.triSine.replace('</svg>',`${line(220,95,400,130,'#f59e0b',7)}${line(144,292,400,130,'#2563eb',7)}<path d="M375 125 A26 26 0 0 0 381 148" fill="none" stroke="#10b981" stroke-width="4"/>${text(360,158,'43.8°',12,'#047857','middle','bold')}</svg>`);
figs.bearings=p(`${line(90,270,90,90,'#334155',3)}${line(90,270,165,220,'#6366f1',3)}${line(90,150,165,220,'#6366f1',3)}${line(90,110,90,90,'#334155',2)}${text(90,82,'N',15,'#334155','middle','bold')}${circle(90,270,5,'#334155')}${circle(90,150,5,'#334155')}${circle(90,108,5,'#334155')}${circle(165,220,5,'#334155')}${text(71,292,'A',15)}${text(71,145,'C',15)}${text(71,105,'D',15)}${text(183,222,'E',15)}${text(53,216,'175 km',13,'#334155','end')}${text(53,129,'60 km',12,'#334155','end')}<path d="M90 240 A30 30 0 0 1 114 257" fill="none" stroke="#f59e0b" stroke-width="3"/><path d="M90 180 A30 30 0 0 1 111 171" fill="none" stroke="#f59e0b" stroke-width="3"/>${text(119,240,'055°',11,'#b45309','start','bold')}${text(124,187,'134°',11,'#b45309','start','bold')}`);
figs.gate=p(`<text x="18" y="24" font-size="14" fill="#334155" font-weight="bold">Ground plan</text><path d="M35 190L145 190L200 94Z" fill="#e0f2fe" stroke="#334155" stroke-width="3"/>${text(30,210,'G',13)}${text(145,210,'F',13)}${text(207,92,'L',13)}<path d="M120 190 A25 25 0 0 1 157.5 168.3" fill="none" stroke="#f59e0b" stroke-width="3"/>${text(122,171,'120°',12,'#b45309','middle','bold')}${text(260,24,'Right-triangle elevation views',14,'#334155','middle','bold')}${line(245,190,330,190,'#334155',3)}${line(330,190,330,141,'#6366f1',5)}${line(245,190,330,141,'#334155',3)}<path d="M269 190 A24 24 0 0 0 266 176" fill="none" stroke="#f59e0b" stroke-width="3"/>${text(278,177,'30°',12,'#b45309','start','bold')}${text(240,207,'G',13)}${text(330,207,'F',13)}${text(330,134,'T',13)}${text(274,220,'FG = 3.5 m',11)}${line(365,190,465,190,'#334155',3)}${line(365,190,365,106,'#6366f1',5)}${line(365,106,465,190,'#334155',3)}<path d="M438 190 A27 27 0 0 1 444 174" fill="none" stroke="#f59e0b" stroke-width="3"/>${text(427,169,'40°',12,'#b45309','middle','bold')}${text(358,207,'F',13)}${text(472,207,'L',13)}${text(365,99,'T',13)}${text(355,150,'h',12,'#4f46e5','end','bold')}`);
figs.tableScatter=p(`<rect x="55" y="35" width="390" height="66" fill="#f8fafc" stroke="#94a3b8"/>${text(65,61,'x',13,'#334155','start','bold')}${text(65,88,'y',13,'#334155','start','bold')}${['1','1','2','3','3','4','4','a','6','6','7','7','8','9','9'].map((v,i)=>text(94+i*23,61,v,13)).join('')}${['5','8','6','4','5','5','6','4','2','3','3','4','2','1','2'].map((v,i)=>text(94+i*23,88,v,13)).join('')}${line(55,70,445,70,'#cbd5e1',1)}${Array.from({length:11},(_,i)=>`${line(65+i*38,105,65+i*38,265,'#e2e8f0',1)}${line(65,265-i*16,445,265-i*16,'#e2e8f0',1)}`).join('')}${line(65,265,445,265,'#64748b',2)}${line(65,265,65,105,'#64748b',2)}${Array.from({length:11},(_,i)=>`${line(65+i*38,261,65+i*38,269,'#64748b',1)}${text(65+i*38,284,String(i),10)}`).join('')}${[0,2,4,6,8,10].map(v=>`${line(61,265-v*16,69,265-v*16,'#64748b',1)}${text(56,269-v*16,String(v),10,'#64748b','end')}`).join('')}${text(470,282,'x',13)}${text(59,114,'y',13,'#334155','end')}${[[1,5],[1,8],[2,6],[3,4],[3,5],[4,5],[4,6],[5,4],[6,2],[6,3],[7,3],[7,4],[8,2],[9,1],[9,2]].map(([x,y])=>circle(65+x*38,265-y*16,3.3,'#334155')).join('')}`);
figs.tableScatterFit=figs.tableScatter.replace('</svg>',`${line(103,163,407,247,'#6366f1',3)}</svg>`);
figs.tableScatterRead=figs.tableScatterFit.replace('</svg>',`${line(312,161,312,265,'#f59e0b',2,'5 4')}${line(65,221,312,221,'#f59e0b',2,'5 4')}${circle(312,221,5,'#f59e0b')}${text(330,214,'(6.5, 2.75)',11,'#b45309','start','bold')}</svg>`);
figs.bestfit=p(`${axes(60,245,445,45)}${[[1,5],[1,8],[2,6],[3,4],[3,5],[4,5],[4,6],[5,4],[6,2],[6,3],[7,3],[7,4],[8,2],[9,1],[9,2]].map(([x,y])=>circle(60+x*39,245-y*19,3.5)).join('')}${line(99,124,411,223,'#6366f1',3)}${text(260,285,'Data points and a balanced line of fit',13,'#334155')}`);
figs.boxplots=p(`${line(75,240,445,240,'#64748b',2)}${line(75,48,75,240,'#64748b',2)}${[105,155,205,255,305,355,405].map(x=>line(x,236,x,244,'#64748b',1)).join('')}${[0,2,4,6,8,10,12].map(v=>`${line(71,240-v*16,79,240-v*16,'#94a3b8',1)}${text(65,244-v*16,String(v),10,'#64748b','end')}`).join('')}${text(18,60,'Hours',11,'#334155','start')}<g stroke="#334155" fill="#dbeafe" stroke-width="2">${[[4,6,7.5,8,9.2],[4.7,5.8,6.7,7.4,8.7],[4,5.2,6.2,6.8,7.3],[3.2,5.1,6,6.8,8],[6,8.2,9.4,10.8,11.5],[5.5,7.3,8.7,10.4,11.5],[4.2,6.2,7.4,8,8.7]].map(([lo,q1,med,q3,hi],i)=>{const x=105+i*50, k=v=>240-v*16; return `${line(x,k(lo),x,k(hi),'#334155',2)}${line(x-8,k(lo),x+8,k(lo),'#334155',2)}${line(x-8,k(hi),x+8,k(hi),'#334155',2)}<rect x="${x-13}" y="${k(q3)}" width="26" height="${k(q1)-k(q3)}" fill="#dbeafe" stroke="#334155"/><line x1="${x-13}" y1="${k(med)}" x2="${x+13}" y2="${k(med)}" stroke="#dc2626" stroke-width="3"/>${text(x,285,['Mon','Tue','Wed','Thurs','Fri','Sat','Sun'][i],12)}`}).join('')}</g>${circle(155,77,4,'#dc2626')}${circle(255,200,4,'#dc2626')}${circle(305,236,4,'#dc2626')}${circle(405,54,4,'#dc2626')}`);
figs.projectile=p(`${line(70,235,445,235,'#64748b',2)}${line(75,270,75,45,'#64748b',2)}${text(448,254,'x',14)}${text(64,49,'y',14)}<path d="M75 235 C125 86 166 63 215 63 C267 63 310 92 355 235" fill="none" stroke="#6366f1" stroke-width="4"/>${line(75,235,410,111,'#94a3b8',2)}${circle(313,147,5,'#dc2626')}${text(329,145,'B (170,15.9)',12,'#b91c1c','start')}${text(75,260,'A',14)}<path d="M105 235 A30 30 0 0 0 104 224" fill="none" stroke="#f59e0b" stroke-width="3"/>${text(116,226,'θ',14,'#b45309','start','bold')}${line(215,63,215,183,'#f59e0b',2,'5 4')}${line(205,63,225,63,'#f59e0b',3)}${text(231,120,'h',14,'#b45309','start','bold')}${line(313,147,313,235,'#64748b',1,'4 4')}`);
figs.projectileSlope=p(`${line(70,235,445,235,'#64748b',2)}${line(75,270,75,45,'#64748b',2)}${text(448,254,'x',14)}${text(64,49,'y',14)}${line(75,235,410,111,'#f59e0b',3)}${line(75,235,313,235,'#64748b',2,'5 4')}${line(313,147,313,235,'#10b981',3)}${line(75,235,313,147,'#334155',3)}${circle(313,147,5,'#dc2626')}${text(328,143,'B (170,15.9)',12,'#b91c1c','start')}${text(190,254,'170 m',12,'#64748b')}${text(327,196,'15.9 m',12,'#047857','start')}${text(75,260,'A',14)}<path d="M105 235 A30 30 0 0 0 104 224" fill="none" stroke="#f59e0b" stroke-width="3"/>${text(116,226,'θ',14,'#b45309','start','bold')}`);
figs.projectileHeight=figs.projectile.replace('</svg>',`${circle(215,63,6,'#f59e0b')}${line(215,63,215,183,'#f59e0b',3,'5 4')}${text(231,148,'above ground',10,'#b45309','start','bold')}</svg>`);
figs.triangle23=p(`${line(100,160,100,250,'#334155',4)}${line(100,250,436,250,'#334155',4)}${line(100,160,256,250,'#334155',3)}${line(100,160,436,250,'#334155',3)}<path d="M100 230h20v20" fill="none" stroke="#dc2626" stroke-width="3"/><path d="M226 250 A30 30 0 0 1 230 235" fill="none" stroke="#f59e0b" stroke-width="3"/>${text(100,153,'A',15)}${text(91,270,'B',15)}${text(256,272,'C',15)}${text(445,270,'D',15)}${text(84,207,'1',15)}${text(346,276,'2',15)}${text(224,235,'30°',13,'#b45309','middle','bold')}`);
figs.triangle23In=figs.triangle23.replace('</svg>',`${line(100,160,100,250,'#2563eb',7)}${line(100,250,256,250,'#10b981',7)}</svg>`);
figs.triangle23Out=figs.triangle23.replace('</svg>',`${line(100,160,100,250,'#2563eb',7)}${line(100,250,436,250,'#6366f1',7)}<path d="M100 190 A30 30 0 0 0 129 168" fill="none" stroke="#f59e0b" stroke-width="4"/>${text(125,193,'75°',12,'#b45309','middle','bold')}</svg>`);

const svg = (name)=>({svg:figs[name]});
const highlight=(stem,phrase,note)=>({text:stem.includes(phrase)?phrase:stem.split(/[.!?]/)[0].slice(0,70),note});
const mc=(id,difficulty,stem,options,answer,hint,keyText,keyNote,steps,figure)=>({id,type:'mc',difficulty,stem,options,answer,hint,keyPoints:[highlight(stem,keyText,keyNote)],steps,figure:figure?svg(figure):undefined,timeLimit:60,xp:1,meta:{source:'Canberra Grammar 2024 Year 10 Maths Yearly & Solutions',sourceYear:2024}});
const review=(id,difficulty,stem,answer,hint,keyText,keyNote,steps,figure)=>({id,type:'review',difficulty,stem,answer,manual:true,hint,keyPoints:[highlight(stem,keyText,keyNote)],steps,figure:figure?svg(figure):undefined,timeLimit:60,xp:1,meta:{source:'Canberra Grammar 2024 Year 10 Maths Yearly & Solutions',sourceYear:2024}});
const st=(explain,work,figure)=>({explain,work,...(figure?{figure:svg(figure)}:{})});
const Q=[];
const add=(ch,topic,q)=>Q.push({ch,topic,q});

// Multiple choice section
add(12,'y10-12b',mc('cgs-y10-2024-q1','easy','From the right-triangle diagram, which trigonometric statement is correct?',[
  '\\(\\cos 30^\\circ=\\frac{1}{2}\\)','\\(\\tan 60^\\circ=\\frac{1}{\\sqrt{3}}\\)','\\(\\sin 60^\\circ=\\frac{\\sqrt{3}}{2}\\)','\\(\\sin 30^\\circ=\\frac{1}{\\sqrt{3}}\\)'],2,
  'Use the side opposite the named angle divided by the hypotenuse for sine.','right-triangle diagram','Compare each ratio with the side lengths opposite and adjacent to the marked angle.',[
  st('For the marked 60° angle, identify the opposite side and the hypotenuse.','\\(\\text{opposite}=\\sqrt{3},\\quad \\text{hypotenuse}=2\\)'),
  st('Use the sine ratio because the question asks for sine.','\\(\\sin60^\\circ=\\frac{\\text{opposite}}{\\text{hypotenuse}}=\\frac{\\sqrt{3}}{2}\\)'),
  st('Match the exact ratio with the choices; do not swap sine and cosine.','\\(\\boxed{\\sin60^\\circ=\\frac{\\sqrt{3}}{2}}\\)')], 'tri30'));
add(3,'y10-3b',mc('cgs-y10-2024-q2','easy','The number line shows an open endpoint at −1 and is shaded to the right. Which inequality is represented?',[
  '\\(x \\le -1\\)','\\(-1 < x \\le 1\\)','\\(x < -1\\)','\\(x > -1\\)'],3,
  'An open circle excludes its value. The ray extends right, so values larger than −1 are included.','open endpoint at −1','An open circle means strict inequality; the shaded ray shows which values satisfy it.',[
  st('The shaded ray extends from −1 toward larger values.','\\(-1\\quad\\longrightarrow\\quad+\\infty\\)'),
  st('The open endpoint at −1 means x is greater than −1, not equal to it.','\\(x > -1\\)'),
  st('There is no right endpoint, so all greater values are included.','\\(\\boxed{x > -1}\\)')], 'ineq'));
add(9,'y10-9a',mc('cgs-y10-2024-q3','easy','Simplify \\( (4a^5)^2 \\).',['\\(8a^7\\)','\\(4a^{10}\\)','\\(16a^7\\)','\\(16a^{10}\\)'],3,
  'Square the coefficient and multiply the exponent on a by the outside power.','\\((4a^5)^2\\)','Apply the power to both the coefficient and the variable factor.',[
  st('Apply the power of a product to both factors.','\\((4a^5)^2=4^2(a^5)^2\\)'),
  st('Square the coefficient and multiply powers of a.','\\(4^2=16,\\qquad(a^5)^2=a^{5\\cdot2}=a^{10}\\)'),
  st('Combine the results.','\\(\\boxed{16a^{10}}\\)') ]));
add(5,'y10-5a',mc('cgs-y10-2024-q4','easy','Solve \\( (x+2)^2=16 \\).',['\\(x=6\\)','\\(x=2\\) or \\(x=-6\\)','\\(x=14\\)','\\(x=4\\) or \\(x=-4\\)'],1,
  'If a square equals 16, its expression can be either 4 or −4.','\\((x+2)^2=16\\)','Remember to consider both square roots before solving for x.',[
  st('Take both square roots of 16.','\\(x+2=4\\quad\\text{or}\\quad x+2=-4\\)'),
  st('Solve each linear equation.','\\(x=4-2=2\\quad\\text{or}\\quad x=-4-2=-6\\)'),
  st('Check both values in the original squared equation.','\\((2+2)^2=16,\\quad(-6+2)^2=16\\)'),
  st('Both values satisfy the equation.','\\(\\boxed{x=2\\text{ or }x=-6}\\)') ]));
add(18,'y10-18a',mc('cgs-y10-2024-q5','easy','Which pair of measures is normally least affected by an outlier in a data set?',[
  'Mean or range','Median or mode','Range or interquartile range','Mean or interquartile range'],1,
  'Think about which measures depend on the ordered positions of values rather than their exact sizes.','least affected by an outlier','An extreme value changes the mean and range more than the median or mode.',[
  st('An outlier is an unusually extreme observation.','\\(\\text{Outlier}\\longrightarrow\\text{extreme value}\\)'),
  st('The mean uses every numerical value and the range uses the minimum and maximum, so both can shift greatly.','\\(\\text{mean}=\\frac{\\sum x}{n},\\qquad\\text{range}=\\max-\\min\\)'),
  st('The median depends on the middle position and the mode on the most frequent value.','\\(\\boxed{\\text{Median or mode}}\\)') ]));
add(18,'y10-18g-icem',mc('cgs-y10-2024-q6','easy','Which description best matches the correlation in the scatter plot?',[
  'Strong, positive correlation','Strong, negative correlation','Weak, positive correlation','Weak, negative correlation'],3,
  'Follow the overall direction of the points, then judge how closely they cluster around a straight trend.','scatter plot','A downward trend is negative; noticeable scatter around the trend makes it weak.',[
  st('As the weekly running distance increases, the plotted weights tend to decrease.','\\(x\\uparrow\\quad\\Rightarrow\\quad y\\text{ tends to }\\downarrow\\)'),
  st('The points are spread around the downward trend rather than tightly following a line.','\\(\\text{direction: negative; strength: weak}\\)'),
  st('Combine the direction and strength.','\\(\\boxed{\\text{weak negative correlation}}\\)')], 'scatterQ6'));
add(7,'y10-7b',mc('cgs-y10-2024-q7','medium','Which equation could represent the parabola shown?',[
  '\\(y=x^2-3\\)','\\(y=x^2-3x\\)','\\(y=x(x+3)\\)','\\(y=-x^2-3x\\)'],2,
  'Read the x-intercepts and the direction the parabola opens.','parabola shown','The graph opens upward and crosses the x-axis at x = 0 and x = −3.',[
  st('The curve opens upward, so its leading coefficient is positive.','\\(a>0\\)'),
  st('Its roots are x = 0 and x = −3, so a matching factored form is x(x+3).','\\(y=a(x-0)(x+3)\\)'),
  st('The graph has the standard vertical scale, so take a = 1.','\\(\\boxed{y=x(x+3)}\\)')], 'parabQ7'));
add(12,'y10-12g',mc('cgs-y10-2024-q8','medium','The triangle has side lengths 4, 7 and 10. Which cosine-rule formula finds its smallest angle \\(\\theta\\)?',[
  '\\(\\cos\\theta=\\frac{4^2+7^2-10^2}{2\\cdot4\\cdot7}\\)',
  '\\(\\cos\\theta=\\frac{4^2+10^2-7^2}{2\\cdot4\\cdot10}\\)',
  '\\(\\cos\\theta=\\frac{10^2+7^2-4^2}{2\\cdot10\\cdot7}\\)',
  '\\(\\cos\\theta=\\frac{10^2-7^2-4^2}{2\\cdot4\\cdot7}\\)'],2,
  'The smallest angle lies opposite the shortest side. In the cosine rule, the denominator uses the two sides that enclose the angle.','smallest angle \\(\\theta\\)','Pair the angle with its opposite side before substituting into the cosine rule.',[
  st('The shortest side is 4, so the smallest angle is opposite it; the highlighted sides 7 and 10 enclose θ.','\\(\\text{opposite}=4,\quad\text{adjacent sides}=7,10\\)','triCosHighlight'),
  st('The two sides enclosing this angle are 7 and 10.','\\(\\cos\\theta=\\frac{7^2+10^2-4^2}{2\\cdot7\\cdot10}\\)'),
  st('This is the cosine-rule form for the required angle.','\\(\\boxed{\\cos\\theta=\\frac{10^2+7^2-4^2}{2\\cdot10\\cdot7}}\\)')], 'triCos'));
add(18,'y10-18d',mc('cgs-y10-2024-q9','medium','Five bag weights are ordered from lightest to heaviest. The heaviest is 25 kg, the median is 16 kg, the mode is 12 kg, and the mean is 17 kg. What is the second-heaviest weight?',[
  '18 kg','19 kg','20 kg','22 kg'],2,
  'Write the ordered values using the median and mode first, then use the mean to find the missing total.','mean is 17 kg','For five ordered values, the median is the third value; the second-heaviest is fourth.',[
  st('The ordered list has the form 12, 12, 16, x, 25.','\\(12,\\ 12,\\ 16,\\ x,\\ 25\\)'),
  st('Use the mean to find the sum of all five weights.','\\(\\text{sum}=5\\cdot17=85\\)'),
  st('Subtract the known weights to find x.','\\(x=85-(12+12+16+25)=85-65=20\\)'),
  st('The fourth value is the second-heaviest.','\\(\\boxed{20\\text{ kg}}\\)') ]));
add(15,'y10-15e',mc('cgs-y10-2024-q10','medium','A box contains \\(n\\) tennis balls: one orange and \\(n-1\\) white. Two balls are selected without replacement. What is the probability both are white?',[
  '\\(\\frac1n\\)','\\(\\frac{n-1}{n}\\)','\\(\\frac{n-2}{n}\\)','\\(\\frac{n-1}{n-2}\\)'],2,
  'Multiply the probability of white on the first draw by the updated probability of white on the second draw.','without replacement','After a white ball is taken, both the total and white count decrease by one.',[
  st('There are n balls in total and n−1 are white on the first draw.','\\(P(W_1)=\\frac{n-1}{n}\\)'),
  st('After a white is removed, n−2 white balls remain among n−1 balls.','\\(P(W_2\\mid W_1)=\\frac{n-2}{n-1}\\)'),
  st('Multiply the conditional probabilities and cancel the common factor.','\\(P(W_1\\cap W_2)=\\frac{n-1}{n}\\cdot\\frac{n-2}{n-1}=\\boxed{\\frac{n-2}{n}}\\)') ]));

// Section 1 — lines, probability, indices, surds and algebra
add(3,'y10-3b',mc('cgs-y10-2024-s1-q1','medium','Solve \\(3(2x+5)=4-x\\).',['\\(x=-\\frac{11}{7}\\)','\\(x=\\frac{11}{7}\\)','\\(x=-\\frac{19}{7}\\)','\\(x=\\frac{19}{7}\\)'],0,
  'Expand the bracket first, then gather x-terms on one side.','\\(3(2x+5)=4-x\\)','When moving −x to the left, add x to both sides.',[
  st('Expand the left-hand side.','\\(6x+15=4-x\\)'),
  st('Add x to both sides, then subtract 15.','\\(7x+15=4\\quad\\Rightarrow\\quad7x=-11\\)'),
  st('Divide both sides by 7 and check by substitution.','\\(\\boxed{x=-\\frac{11}{7}}\\)') ]));
add(3,'y10-3h',mc('cgs-y10-2024-s1-q2','medium','Simplify \\(\\frac{7x}{3}-\\frac{2x-1}{9}\\).',[
  '\\(\\frac{19x-1}{9}\\)','\\(\\frac{19x+1}{9}\\)','\\(\\frac{5x+1}{9}\\)','\\(\\frac{5x-1}{9}\\)'],1,
  'Rewrite the first fraction with denominator 9, then subtract the entire second numerator.','\\frac{7x}{3}','The minus sign applies to both terms in (2x-1).',[
  st('Use 9 as the common denominator.','\\(\\frac{7x}{3}=\\frac{21x}{9}\\)'),
  st('Subtract the second numerator with its parentheses.','\\(\\frac{21x-(2x-1)}{9}=\\frac{21x-2x+1}{9}\\)'),
  st('Collect like terms.','\\(\\boxed{\\frac{19x+1}{9}}\\)') ]));
add(4,'y10-4c',review('cgs-y10-2024-s1-q3a','medium','Points \\(A(1,-22)\\) and \\(B(5,-2)\\) lie on a straight line. Show that the equation of line AB is \\(y=5x-27\\).','Sample answer: The gradient is \\(m=\\frac{-2-(-22)}{5-1}=\\frac{20}{4}=5\\). Using \\(y=mx+c\\) and point A gives \\(-22=5(1)+c\\), so \\(c=-27\\). Therefore the line is \\(y=5x-27\\).',
  'Find the gradient from the two coordinates, then use one point to determine the intercept.','A(1,−22) and B(5,−2)','A line equation needs both its gradient and y-intercept.',[
  st('Calculate rise over run using the same point order in numerator and denominator.','\\(m=\\frac{-2-(-22)}{5-1}=\\frac{20}{4}=5\\)'),
  st('Substitute point A into y = mx + c.','\\(-22=5(1)+c\\quad\\Rightarrow\\quad c=-27\\)'),
  st('Write the line equation and verify point B.','\\(y=5x-27;\\quad 5(5)-27=-2\\)') ]));
add(4,'y10-4e',mc('cgs-y10-2024-s1-q3b','medium','Line AB passes through \\(A(1,-22)\\) and \\(B(5,-2)\\). Find its intersection with line \\(3x+2y=-2\\).',[
  '\\((4,-7)\\)','\\((4,7)\\)','\\((-4,-7)\\)','\\((2,-4)\\)'],0,
  'First find line AB using its two points; then solve the two line equations together.','intersection with line \\(3x+2y=-2\\)','An intersection coordinate must satisfy both lines.',[
  st('Find the gradient of AB and use A to determine the intercept.','\\(m=\\frac{20}{4}=5,\\quad -22=5(1)+c\\Rightarrow c=-27\\)'),
  st('Substitute y = 5x − 27 into the second line.','\\(3x+2(5x-27)=-2\\Rightarrow13x=52\\Rightarrow x=4\\)'),
  st('Substitute x = 4 into AB.','\\(y=5(4)-27=-7\\)'),
  st('Check in the second equation.','\\(3(4)+2(-7)=-2\\Rightarrow\\boxed{(4,-7)}\\)') ]));
add(15,'y10-15a',mc('cgs-y10-2024-s1-q4','easy','Each letter in EQUILATERAL is written on a separate card. What is the probability of selecting A or E?',[
  '\\(\\frac{2}{11}\\)','\\(\\frac{4}{11}\\)','\\(\\frac{5}{11}\\)','\\(\\frac{4}{9}\\)'],1,
  'Count all letters, then count the A cards and E cards. Each card is one equally likely outcome.','EQUILATERAL','A and E are different letters, so add their counts without overlap.',[
  st('Count the letters in the word.','\\(n(\\text{EQUILATERAL})=11\\)'),
  st('There are two A cards and two E cards.','\\(n(A\\text{ or }E)=2+2=4\\)'),
  st('Divide favourable cards by all cards.','\\(P(A\\text{ or }E)=\\frac4{11}\\)') ]));
const jelly='A bag contains 10 jellybeans: 2 are strawberry and 8 are plain. Two jellybeans are drawn one after the other without replacement.';
add(15,'y10-15e',review('cgs-y10-2024-s1-q5a','medium',`${jelly} Draw a complete probability tree diagram, labelling every branch probability.`,
  'Sample answer: First draw: strawberry \\(2/10\\), plain \\(8/10\\). After strawberry, the second-draw probabilities are strawberry \\(1/9\\) and plain \\(8/9\\). After plain, they are strawberry \\(2/9\\) and plain \\(7/9\\). The completed tree is shown in the solution diagram.',
  'For the second draw, update the counts after following each first-draw branch.','without replacement','Each pair of branch probabilities from the same node must add to 1.',[
  st('Start with 10 jellybeans: 2 strawberry and 8 plain.','\\(P(S_1)=\\frac2{10},\\quad P(P_1)=\\frac8{10}\\)','treeBlank'),
  st('If strawberry was drawn first, 1 strawberry and 8 plain remain out of 9.','\\(P(S_2|S_1)=\\frac1{9},\\quad P(P_2|S_1)=\\frac8{9}\\)'),
  st('If plain was drawn first, 2 strawberry and 7 plain remain out of 9.','\\(P(S_2|P_1)=\\frac2{9},\\quad P(P_2|P_1)=\\frac7{9}\\)','treeDone') ]));
add(15,'y10-15e',mc('cgs-y10-2024-s1-q5b','medium',`${jelly} What is the probability of drawing at least one strawberry?`,[
  '\\(\\frac{2}{9}\\)','\\(\\frac{8}{45}\\)','\\(\\frac{17}{45}\\)','\\(\\frac{37}{45}\\)'],2,
  'Use the complement: subtract the probability of drawing two plain jellybeans from 1.','at least one strawberry','The two plain draws have probabilities 8/10 and then 7/9.',[
  st('The complement of at least one strawberry is no strawberry, meaning two plain draws.','\\(P(\\text{at least one }S)=1-P(PP)\\)'),
  st('Multiply the no-replacement probabilities for two plain draws.','\\(P(PP)=\\frac8{10}\\cdot\\frac7{9}=\\frac{28}{45}\\)'),
  st('Subtract from 1.','\\(1-\\frac{28}{45}=\\boxed{\\frac{17}{45}}\\)') ]));
const vennContext='A language survey has 60 students: French-only 12, Spanish-only 10, German-only 16, French and Spanish only 6, French and German only 5, Spanish and German only 4, and all three languages 7.';
add(15,'y10-15b',mc('cgs-y10-2024-s1-q6a','medium',`${vennContext} What is the probability that a randomly selected student studies all three languages?`,[
  '\\(\\frac7{60}\\)','\\(\\frac7{22}\\)','\\(\\frac{13}{60}\\)','\\(\\frac{53}{60}\\)'],0,
  'Use the number in the centre of the three-way Venn intersection over the total number of students.','all three languages','Use 60 as the total sample space, not the number who study at least one language.',[
  st('The all-three region contains 7 students.','\\(n(F\\cap S\\cap G)=7\\)'),
  st('There are 60 students in the survey.','\\(n(\\text{all students})=60\\)'),
  st('Form favourable over total outcomes.','\\(P(F\\cap S\\cap G)=\\boxed{\\frac7{60}}\\)') ],'venn'));
add(15,'y10-15c',mc('cgs-y10-2024-s1-q6b','medium',`${vennContext} Given that a student studies at least two languages, what is the probability that the student studies all three?`,[
  '\\(\\frac7{60}\\)','\\(\\frac7{22}\\)','\\(\\frac{22}{60}\\)','\\(\\frac{15}{22}\\)'],1,
  'For a conditional probability, restrict the denominator to all regions with at least two languages.','at least two languages','The condition includes the three pair-only regions and the centre region.',[
  st('Count students studying at least two languages: 6 + 5 + 4 + 7.','\\(n(\\text{at least 2})=6+5+4+7=22\\)','venn'),
  st('Of those 22 students, 7 study all three.','\\(n(\\text{all 3})=7\\)'),
  st('Use the conditional sample space.','\\(P(\\text{all 3}|\\text{at least 2})=\\boxed{\\frac7{22}}\\)') ],'venn'));
add(9,'y10-9a',mc('cgs-y10-2024-s1-q7','medium','Simplify \\(\\frac{(-5x^0y^6)^2}{y^4}\\), assuming \\(y\\ne0\\).',[
  '\\(25y^4\\)','\\(-25y^8\\)','\\(25y^8\\)','\\(25x^2y^8\\)'],2,
  'Use x⁰ = 1, square every factor in the numerator, then subtract exponents when dividing powers of y.','\\(x^0y^6\\)','A squared negative factor becomes positive; division subtracts exponents.',[
  st('Replace x⁰ by 1 and square each factor.','\\((-5x^0y^6)^2=(-5)^2(1)^2y^{12}=25y^{12}\\)'),
  st('Divide powers of y by subtracting exponents.','\\(\\frac{25y^{12}}{y^4}=25y^{12-4}\\)'),
  st('Simplify.','\\(\\boxed{25y^8}\\)') ]));
add(2,'y10-2e',mc('cgs-y10-2024-s1-q8','medium','Rationalise the denominator and simplify \\(\\frac{1+\\sqrt3}{2\\sqrt3}\\).',[
  '\\(\\frac{3+\\sqrt3}{6}\\)','\\(\\frac{1+3\\sqrt3}{6}\\)','\\(\\frac{1+\\sqrt3}{6}\\)','\\(\\frac{3-\\sqrt3}{6}\\)'],0,
  'Multiply top and bottom by √3 so the denominator becomes rational.','\\(2\\sqrt3\\)','Multiply every term in the numerator by √3 as well.',[
  st('Multiply numerator and denominator by √3.','\\(\\frac{1+\\sqrt3}{2\\sqrt3}\\cdot\\frac{\\sqrt3}{\\sqrt3}\\)'),
  st('Expand the numerator and simplify the denominator.','\\(\\frac{\\sqrt3+3}{2\\cdot3}=\\frac{\\sqrt3+3}{6}\\)'),
  st('Write in exact simplest form.','\\(\\boxed{\\frac{3+\\sqrt3}{6}}\\)') ]));
add(1,'y10-1d',mc('cgs-y10-2024-s1-q9a','easy','An investment of $8000 earns 4.5% compound interest in the first year. What is its value after that year?',[
  '\\(\\$8{,}360\\)','\\(\\$8{,}450\\)','\\(\\$8{,}360.45\\)','\\(\\$8{,}800\\)'],0,
  'A 4.5% increase means the new balance is 104.5% of the starting amount.','4.5% compound interest in the first year','Convert the percentage to a multiplier before multiplying.',[
  st('Convert the first-year interest rate to a multiplier.','\\(1+\\frac{4.5}{100}=1.045\\)'),
  st('Multiply the principal by the multiplier.','\\(8000\\times1.045=8360\\)'),
  st('State the first-year balance in dollars.','\\(\\boxed{\\$8,360}\\)') ]));
add(1,'y10-1d',mc('cgs-y10-2024-s1-q9b','medium','An investment starts at $8000. It earns 4.5% compound interest in year 1, then 2.75% compound interest in each of the next three years. What is its value after four years, to the nearest cent?',[
  '\\(\\$8{,}920.00\\)','\\(\\$9{,}068.84\\)','\\(\\$9{,}020.00\\)','\\(\\$9{,}068.00\\)'],1,
  'Apply the first-year multiplier, then apply the later annual multiplier three times to the new balance.','each of the next three years','Do not apply all four years at the same rate.',[
  st('Calculate the balance after year one.','\\(8000(1.045)=8360\\)'),
  st('Use the 2.75% multiplier for each of the remaining three years.','\\(8360(1.0275)^3\\)'),
  st('Evaluate and round only the final amount to cents.','\\(8360(1.0275)^3=9068.84\\)'),
  st('The four-year value is approximately.','\\(\\boxed{\\$9,068.84}\\)') ]));
add(3,'y10-3e',mc('cgs-y10-2024-s1-q10a','medium','Factorise \\(y^2-100x^2\\).',[
  '\\((y-10x)(y+10x)\\)','\\((y-100x)(y+100x)\\)','\\((y-10x)^2\\)','\\((y-x)(y+100x)\\)'],0,
  'Recognise a difference of two squares.','\\(y^2-100x^2\\)','Write 100x² as (10x)² before factoring.',[
  st('Identify the two square terms.','\\(y^2-100x^2=y^2-(10x)^2\\)'),
  st('Apply A² − B² = (A − B)(A + B).','\\(A=y,\\quad B=10x\\)'),
  st('Write both conjugate factors.','\\(\\boxed{(y-10x)(y+10x)}\\)') ]));
add(3,'y10-3f',mc('cgs-y10-2024-s1-q10b','medium','Factorise \\(6m^2+m-2\\).',[
  '\\((2m-1)(3m+2)\\)','\\((2m+1)(3m-2)\\)','\\((6m-1)(m+2)\\)','\\((3m-1)(2m+2)\\)'],0,
  'Find two binomials whose first terms multiply to 6m² and constants multiply to −2.','\\(6m^2+m-2\\)','Check the middle term after expanding your factor pair.',[
  st('Choose factors of 6m² and −2 that can produce a middle coefficient of 1.','\\(6m^2+m-2=(2m-1)(3m+2)\\)'),
  st('Expand to verify the cross terms.','\\(6m^2+4m-3m-2=6m^2+m-2\\)'),
  st('The factorisation is correct.','\\(\\boxed{(2m-1)(3m+2)}\\)') ]));
add(3,'y10-3h',mc('cgs-y10-2024-s1-q11','medium','Simplify \\(\\frac{p^2+2p-15}{p^2-3p}\\), stating any excluded values.',[
  '\\(\\frac{p+5}{p},\\ p\\ne0,3\\)','\\(\\frac{p-3}{p},\\ p\\ne0\\)','\\(p+5,\\ p\\ne0,3\\)','\\(\\frac{p+5}{p-3},\\ p\\ne3\\)'],0,
  'Factor the numerator and denominator before cancelling a common factor.','\\(p^2-3p\\)','The original denominator determines excluded values even after cancellation.',[
  st('Factor the numerator and denominator.','\\(p^2+2p-15=(p+5)(p-3),\\quad p^2-3p=p(p-3)\\)'),
  st('Cancel the common factor p − 3, while retaining restrictions from the original denominator.','\\(\\frac{(p+5)(p-3)}{p(p-3)}=\\frac{p+5}{p}\\)'),
  st('The denominator p(p−3) is zero at p = 0 or p = 3.','\\(p\\ne0,3\\)'),
  st('State the simplified expression and its domain.','\\(\\boxed{\\frac{p+5}{p},\\ p\\ne0,3}\\)') ]));
add(5,'y10-5a',mc('cgs-y10-2024-s1-q12','medium','A ball’s height above the ground is \\(h=-t^2+6t\\) metres after t seconds. When does it return to the ground after launch?',[
  '\\(3\\text{ s}\\)','\\(6\\text{ s}\\)','\\(−6\\text{ s}\\)','\\(9\\text{ s}\\)'],1,
  'Set the height to zero and factor out t. Discard the launch time t = 0.','\\(h=-t^2+6t\\)','The nonzero root gives when the ball returns to the ground.',[
  st('At ground level, set h = 0.','\\(-t^2+6t=0\\)'),
  st('Factor the quadratic.','\\(-t(t-6)=0\\)'),
  st('The roots are t = 0 and t = 6; t = 0 is the launch.','\\(t=0\\text{ or }t=6\\)'),
  st('Use the later time for the return.','\\(\\boxed{6\\text{ s}}\\)') ]));

// Non-linear relations
const parabStem='Consider the parabola \\(y=-(x-3)(x+1)\\).';
add(7,'y10-7b',mc('cgs-y10-2024-s2-q13a','easy',`${parabStem} What is its y-intercept?`,['\\(-3\\)','\\(3\\)','\\(1\\)','\\(4\\)'],1,
  'At the y-intercept, x equals zero.','y-intercept','Substitute x = 0 into the equation.',[
  st('Set x = 0 to locate the y-axis crossing.','\\(y=-(0-3)(0+1)\\)'),st('Evaluate the expression.','\\(y=-(-3)(1)=3\\)'),st('The y-intercept is the y-value.','\\(\\boxed{3}\\)') ]));
add(7,'y10-7b',mc('cgs-y10-2024-s2-q13b','easy',`${parabStem} What are the x-intercepts?`,[
  '\\(x=-3,1\\)','\\(x=3,-1\\)','\\(x=0,3\\)','\\(x=-1,-3\\)'],1,
  'Set y = 0; the factored form shows each root directly.','x-intercepts','Do not confuse the y-intercept with a root.',[
  st('At each x-intercept, y = 0.','\\(0=-(x-3)(x+1)\\)'),st('Set each factor equal to zero.','\\(x-3=0\\quad\\text{or}\\quad x+1=0\\)'),st('Solve both equations.','\\(\\boxed{x=3\\text{ and }x=-1}\\)') ]));
add(7,'y10-7b',mc('cgs-y10-2024-s2-q13c','medium',`${parabStem} Find the coordinates of its vertex.`,[
  '\\((1,4)\\)','\\((1,-4)\\)','\\((-1,4)\\)','\\((3,0)\\)'],0,
  'The axis of symmetry is halfway between the two roots; substitute that x-value to find y.','vertex','Use both roots to find the midpoint of the axis of symmetry.',[
  st('The roots are 3 and −1, so their midpoint gives the vertex x-coordinate.','\\(x_v=\\frac{3+(-1)}2=1\\)'),
  st('Substitute x = 1 into the parabola.','\\(y_v=-(1-3)(1+1)=-(-2)(2)=4\\)'),
  st('Combine the coordinates.','\\(\\boxed{(1,4)}\\)') ]));
add(7,'y10-7b',review('cgs-y10-2024-s2-q13d','medium',`${parabStem} Sketch the parabola on a coordinate plane. Label its intercepts and vertex.`,
  'Sample answer: The graph opens downward. It crosses the x-axis at \\((-1,0)\\) and \\((3,0)\\), crosses the y-axis at \\((0,3)\\), and has vertex \\((1,4)\\). Draw a smooth curve symmetric about \\(x=1\\).',
  'Find both roots, the y-intercept and the axis of symmetry before drawing the curve.','\\(y=-(x-3)(x+1)\\)','Plot symmetric points around x = 1 and make the curve open downward.',[
  st('Set y = 0 to find and plot both x-intercepts.','\\(0=-(x-3)(x+1)\\Rightarrow x=3,-1\\)','squareGraph'),
  st('Set x = 0 for the y-intercept, then find the midpoint of the roots for the axis.','\\(y(0)=3,\\quad x_v=\\frac{3+(-1)}2=1\\)'),
  st('Substitute x = 1 to find and plot the vertex.','\\(y(1)=4\\Rightarrow (1,4)\\)'),
  st('Draw a smooth downward-opening curve through the points, symmetric about x = 1.','\\(y=-(x-3)(x+1)\\Rightarrow a=-1\\)','parabSolution') ], 'squareGraph'));
add(11,'y10-11a',mc('cgs-y10-2024-s2-q14','medium','The circle shown has centre \\((2,-3)\\) and radius 4 units. Which is its equation?',[
  '\\((x+2)^2+(y-3)^2=16\\)','\\((x-2)^2+(y+3)^2=16\\)','\\((x-2)^2+(y+3)^2=4\\)','\\((x+2)^2+(y+3)^2=16\\)'],1,
  'Use \\((x-h)^2+(y-k)^2=r^2\\); watch the signs inside the brackets.','centre \\((2,-3)\\) and radius 4','The radius is squared on the right-hand side.',[
  st('Use the standard circle form and identify h = 2, k = −3, r = 4.','\\((x-h)^2+(y-k)^2=r^2\\)'),
  st('Substitute the centre coordinates and radius.','\\((x-2)^2+(y-(-3))^2=4^2\\)'),
  st('Simplify the signs and square the radius.','\\(\\boxed{(x-2)^2+(y+3)^2=16}\\)') ], 'circle'));
add(11,'y10-11b',mc('cgs-y10-2024-s2-q15','medium','Describe the transformations that change \\(y=\\frac3x\\) into \\(y=-\\frac3{x-5}\\).',[
  'Reflect in the x-axis, then translate 5 units right.','Reflect in the y-axis, then translate 5 units left.','Translate 5 units right, then reflect in the y-axis.','Reflect in the x-axis, then translate 5 units left.'],0,
  'A negative multiplier outside the fraction reflects vertically; x − 5 inside shifts the graph right.','\\(y=-\\frac3{x-5}\\)','Compare the change to y = f(x): outside changes affect vertical values; inside changes affect horizontal position.',[
  st('The negative sign outside the original function changes y to −y.','\\(y=\\frac3x\\longrightarrow y=-\\frac3x\\quad(\\text{reflection in x-axis})\\)'),
  st('Replacing x by x − 5 translates the graph 5 units to the right.','\\(f(x)\\longrightarrow f(x-5)\\)'),
  st('Combine both transformations in order.','\\(\\boxed{\\text{reflect in the x-axis, then shift 5 right}}\\)') ], 'hyperbola'));
add(9,'y10-9d',mc('cgs-y10-2024-s2-q16','hard','The diagram shows \\(y=2^x\\), the line \\(x+3y=3\\), and the indicated projections. Find the x-coordinate of P, where the line meets the x-axis.',[
  '\\(-21\\)','\\(-3\\)','\\(3\\)','\\(21\\)'],0,
  'Use the line’s x-intercept to locate x = 3, transfer that x-value to the exponential curve, and follow the projections.','\\(y=2^x\\)','The dotted projections connect the line’s x-intercept, the exponential curve and the line at a shared height.',[
  st('Find where the line meets the x-axis by setting y = 0.','\\(x+3(0)=3\\Rightarrow x=3\\)','expLine'),
  st('At x = 3 on the exponential curve, calculate its height.','\\(y=2^3=8\\)'),
  st('Follow the horizontal projection to the line and solve for its x-coordinate at y = 8.','\\(x+3(8)=3\\Rightarrow x+24=3\\Rightarrow x=-21\\)','expLine'),
  st('The vertical projection from this point meets the x-axis at P.','\\(\\boxed{P=(-21,0)}\\)') ],'expLine'));

// Trigonometry
const tri17='A triangle has an angle of 100°, the side opposite that angle is 5 cm, and the side opposite the unknown angle θ is 3 cm.';
add(12,'y10-12d',mc('cgs-y10-2024-s2-q17a','medium',`${tri17} Use the sine rule to find θ to the nearest degree.`,[
  '\\(26^\\circ\\)','\\(36^\\circ\\)','\\(44^\\circ\\)','\\(80^\\circ\\)'],1,
  'Match each known side with its opposite angle before writing the sine rule.','side opposite that angle is 5 cm','Use the pair 5 cm ↔ 100° and 3 cm ↔ θ.',[
  st('Pair opposite sides and angles in the sine rule.','\\(\\frac{\\sin\\theta}{3}=\\frac{\\sin100^\\circ}{5}\\)','triSinePair'),
  st('Rearrange and evaluate the inverse sine.','\\(\\sin\\theta=\\frac{3\\sin100^\\circ}{5}=0.5909\\)'),
  st('Take the inverse sine and round to the nearest degree.','\\(\\theta=\\sin^{-1}(0.5909)\\approx36.2^\\circ\\)'),
  st('The angle is approximately.','\\(\\boxed{36^\\circ}\\)') ],'triSine'));
add(12,'y10-12h',mc('cgs-y10-2024-s2-q17b','medium',`${tri17} Find the triangle’s area to the nearest square centimetre.`,[
  '\\(4\\text{ cm}^2\\)','\\(5\\text{ cm}^2\\)','\\(7\\text{ cm}^2\\)','\\(8\\text{ cm}^2\\)'],1,
  'Find the included angle between the 3 cm and 5 cm sides, then use \\(A=\\frac12 ab\\sin C\\).','side opposite that angle is 5 cm','The included angle is the third angle of the triangle, not the 100° angle.',[
  st('Use the unrounded sine-rule angle to find the included angle between the 3 cm and 5 cm sides.','\\(\\theta\\approx36.2^\\circ,\\quad C=180^\\circ-100^\\circ-36.2^\\circ=43.8^\\circ\\)','triSineArea'),
  st('Use the highlighted 3 cm and 5 cm sides with their included angle.','\\(A=\\frac12(3)(5)\\sin43.8^\\circ\\)','triSineArea'),
  st('Evaluate and round to the nearest square centimetre.','\\(A\\approx5.18\\text{ cm}^2\\Rightarrow\\boxed{5\\text{ cm}^2}\\)') ],'triSine'));
const ship='A ship travels north from A to D. C is 175 km north of A and D is 60 km north of C. The bearing of E from A is 055°, and the bearing of E from C is 134°.';
add(12,'y10-12a',mc('cgs-y10-2024-s2-q18a','easy',`${ship} Find the bearing of A from E.`,[
  '055°','125°','235°','305°'],2,
  'The reverse bearing differs from the forward bearing by 180°.','bearing of E from A is 055°','Keep bearings as three digits and measure clockwise from north.',[
  st('The bearing from A to E is 055°.','\\(\\text{bearing}(A\\to E)=055^\\circ\\)','bearings'),
  st('Reverse direction by adding 180°.','\\(055^\\circ+180^\\circ=235^\\circ\\)'),
  st('Write the bearing from E to A.','\\(\\boxed{235^\\circ}\\)') ],'bearings'));
add(12,'y10-12d',mc('cgs-y10-2024-s2-q18b','hard',`${ship} Use the sine rule to find CE to the nearest kilometre.`,[
  '\\(128\\text{ km}\\)','\\(146\\text{ km}\\)','\\(175\\text{ km}\\)','\\(201\\text{ km}\\)'],1,
  'In triangle ACE, use the parallel north lines to find angle C, then find angle E.','175 km north of A','The 55° angle at A is opposite CE; first derive the angle at C from the 134° bearing.',[
  st('At C, the angle between CA (bearing 180°) and CE (bearing 134°) is 46°.','\\(\\angle ACE=180^\\circ-134^\\circ=46^\\circ\\)','bearings'),
  st('Find the third angle in triangle ACE.','\\(\\angle AEC=180^\\circ-55^\\circ-46^\\circ=79^\\circ\\)'),
  st('Use the sine rule: CE is opposite 55° and AC = 175 km is opposite 79°.','\\(\\frac{CE}{\\sin55^\\circ}=\\frac{175}{\\sin79^\\circ}\\)'),
  st('Evaluate and round to the nearest kilometre.','\\(CE=\\frac{175\\sin55^\\circ}{\\sin79^\\circ}\\approx146\\text{ km}\\)') ],'bearings'));
const gate='A vertical gate post TF is fixed at F on level ground. FG = 3.5 m, the angle of elevation of T from G is 30°, the angle of elevation of T from L is 40°, and ground angle GFL is 120°.';
add(12,'y10-12c',mc('cgs-y10-2024-s2-q19a','medium',`${gate} Find the post height h to the nearest metre.`,[
  '\\(1\\text{ m}\\)','\\(2\\text{ m}\\)','\\(3\\text{ m}\\)','\\(4\\text{ m}\\)'],1,
  'In right triangle GFT, FG is adjacent to 30° and FT is opposite.','FG = 3.5 m','Use tangent for opposite over adjacent.',[
  st('Identify the right triangle and the sides relative to 30°.','\\(\\tan30^\\circ=\\frac{FT}{FG}=\\frac{h}{3.5}\\)','gate'),
  st('Solve for h.','\\(h=3.5\\tan30^\\circ\\approx2.02\\text{ m}\\)'),
  st('Round to the nearest metre as requested.','\\(\\boxed{h=2\\text{ m}}\\)') ],'gate'));
add(12,'y10-12c',mc('cgs-y10-2024-s2-q19b','medium',`${gate} Use the rounded height from part (a) to find FL to the nearest metre.`,[
  '\\(1\\text{ m}\\)','\\(2\\text{ m}\\)','\\(3\\text{ m}\\)','\\(4\\text{ m}\\)'],1,
  'In right triangle LFT, use the rounded h = 2 m as the side opposite 40°.','angle of elevation of T from L is 40°','The question specifically says to use the rounded result from (a).',[
  st('Use the right triangle formed by L, F and T.','\\(\\tan40^\\circ=\\frac{h}{FL}\\)','gate'),
  st('Substitute the rounded height h = 2 m and rearrange.','\\(FL=\\frac{2}{\\tan40^\\circ}\\approx2.38\\text{ m}\\)'),
  st('Round to the nearest metre.','\\(\\boxed{FL=2\\text{ m}}\\)') ],'gate'));
add(12,'y10-12f',mc('cgs-y10-2024-s2-q19c','hard',`${gate} Using the rounded value FL = 2 m, find GL to the nearest metre.`,[
  '\\(4\\text{ m}\\)','\\(5\\text{ m}\\)','\\(6\\text{ m}\\)','\\(7\\text{ m}\\)'],1,
  'The known sides FG and FL enclose the 120° angle, so use the cosine rule.','ground angle GFL is 120°','Use the rounded FL = 2 m as directed.',[
  st('The ground triangle has FG = 3.5 m, FL = 2 m and included angle 120°.','\\(GL^2=FG^2+FL^2-2(FG)(FL)\\cos120^\\circ\\)','gate'),
  st('Substitute the side lengths and angle.','\\(GL^2=3.5^2+2^2-2(3.5)(2)\\cos120^\\circ=23.25\\)'),
  st('Take the positive square root and round.','\\(GL=\\sqrt{23.25}\\approx4.82\\text{ m}\\Rightarrow\\boxed{5\\text{ m}}\\)') ],'gate'));

// Statistics and problem solving
const tableCtx='The paired data are x: 1, 1, 2, 3, 3, 4, 4, a, 6, 6, 7, 7, 8, 9, 9 and y: 5, 8, 6, 4, 5, 5, 6, 4, 2, 3, 3, 4, 2, 1, 2. The scatter plot has x-values from 1 to 9 and a negative trend.';
add(18,'y10-18d',mc('cgs-y10-2024-s2-q20a','medium',`${tableCtx} The mean of x is 5 and the mean of y is 4. Find a.`,['4','5','6','7'],1,
  'Use sum of all 15 x-values = 15 times the mean.','mean of x is 5','There are 15 entries, including a.',[
  st('A mean of 5 across 15 values requires a total of 75.','\\(\\sum x=15\\cdot5=75\\)','tableScatter'),
  st('Add the known x-values.','\\(1+1+2+3+3+4+4+6+6+7+7+8+9+9=70\\)'),
  st('Solve for the missing entry.','\\(a=75-70=\\boxed5\\)') ],'tableScatter'));
add(18,'y10-18h-icem',review('cgs-y10-2024-s2-q20b','medium',`${tableCtx} Draw a line of best fit on the scatter plot.`,
  'Sample answer: Draw a straight line through the centre of the plotted trend, with approximately equal numbers of points above and below. One reasonable line is \\(y\\approx7.0-0.65x\\).',
  'Place a straight line through the middle of the downward trend, balancing the points on both sides.','line of best fit','A best-fit line follows the overall pattern, not every individual point.',[
  st('Plot the paired values; each ordered pair is one point.','\\((x,y)=(1,5),(1,8),(2,6),\\ldots,(9,2)\\)','tableScatter'),
  st('Identify the overall negative trend and balance the points above and below the line.','\\(\\text{trend: }x\\uparrow,\\ y\\downarrow\\)','tableScatterFit'),
  st('Draw a straight line through the central trend; a reasonable estimate is shown.','\\(y\\approx7.0-0.65x\\)','tableScatterFit') ],'tableScatter'));
add(18,'y10-18h-icem',review('cgs-y10-2024-s2-q20c','medium',`${tableCtx} The displayed scatter plot includes a reasonable line of best fit. Estimate y when x = 6.5.`,
  'Sample answer: Reading the source line of best fit at \\(x=6.5\\) gives approximately \\(y=2.75\\). Estimates close to this value are reasonable because a hand-drawn line of best fit is not unique.',
  'Read vertically from x = 6.5 to the line of best fit, then read the corresponding y-value.','x = 6.5','Because best-fit lines can vary slightly, treat the result as an estimate rather than an exact value.',[
  st('Locate x = 6.5 on the horizontal axis.','\\(x=6.5\\)','tableScatterFit'),
  st('Move vertically to the fitted line, then horizontally to the y-axis; dashed guides mark the estimate.','\\(x=6.5\\longrightarrow y\\approx2.75\\)','tableScatterRead'),
  st('Read the approximate y-value where the guides meet the fitted line.','\\(y\\approx2.75\\)','tableScatterRead') ],'tableScatterFit'));
add(18,'y10-18h-icem',mc('cgs-y10-2024-s2-q20d','easy',`${tableCtx} Is estimating y at x = 6.5 interpolation or extrapolation?`,[
  'Interpolation','Extrapolation','Neither','Both'],0,
  'Compare 6.5 with the smallest and largest x-values in the data.','x-values from 1 to 9','An estimate within the observed x-range is interpolation.',[
  st('The observed x-values range from 1 to 9.','\\(1\\le x\\le9\\)'),
  st('The estimate uses x = 6.5, which lies inside this interval.','\\(1<6.5<9\\)'),
  st('Therefore the estimate is within the data range.','\\(\\boxed{\\text{interpolation}}\\)') ],'tableScatterFit'));
const boxContext='Use the supplied box-and-whisker plots showing hours slept from Monday to Sunday.';
add(18,'y10-18b-icem',mc('cgs-y10-2024-s2-q21a','easy',`${boxContext} What is the interquartile range for Monday?`,['1 hour','2 hours','3 hours','4 hours'],1,
  'Read Monday’s lower and upper quartiles from the left and right edges of its box.','interquartile range for Monday','IQR is Q3 minus Q1, not maximum minus minimum.',[
  st('From Monday’s boxplot, Q1 = 6 hours and Q3 = 8 hours.','\\(Q_1=6,\\quad Q_3=8\\)','boxplots'),
  st('Subtract the lower quartile from the upper quartile.','\\(IQR=Q_3-Q_1=8-6\\)'),
  st('State the spread of the middle half.','\\(\\boxed{2\\text{ hours}}\\)') ],'boxplots'));
add(18,'y10-18c-icem',mc('cgs-y10-2024-s2-q21b','easy',`${boxContext} Which day has the smallest sleep range?`,[
  'Monday','Tuesday','Wednesday','Thursday'],2,
  'Compare each day’s minimum-to-maximum span, including any outlier shown.','smallest sleep range','Range uses the full extent of the data, including plotted outliers.',[
  st('Range is the maximum minus the minimum for each day.','\\(\\text{range}=\\max-\\min\\)','boxplots'),
  st('Wednesday spans approximately 4 to 7 hours, so its range is about 3 hours.','\\(R_{Wed}=7-4=3\\text{ h}\\)','boxplots'),
  st('For comparison, the other days have wider spans; include the outliers in Tuesday, Thursday, Friday and Sunday.','\\(R_{Mon}\\approx5.2,\\ R_{Tue}\\approx5.5,\\ R_{Thu}\\approx5.5,\\ R_{Fri}\\approx11.5,\\ R_{Sat}\\approx6,\\ R_{Sun}\\approx7.4\\text{ h}\\)'),
  st('The smallest range is therefore Wednesday’s.','\\(\\boxed{3\\text{ h on Wednesday}}\\)') ],'boxplots'));
add(18,'y10-18c-icem',review('cgs-y10-2024-s2-q21c','medium',`${boxContext} Compare Tuesday and Saturday. Refer to each day’s IQR, median and outliers, and suggest a reason for the difference.`,
  'Sample answer: Tuesday’s median is about 6.7 h and its IQR is about 7.4 − 5.8 = 1.6 h. Saturday’s median is about 8.7 h and its IQR is about 10.4 − 7.3 = 3.1 h. Tuesday has a high outlier near 10 h, while Saturday has none. Students may sleep longer and less regularly on weekends.',
  'Compare the centre (median), middle spread (IQR), and any isolated points before suggesting a contextual reason.','Tuesday and Saturday','Support each comparison with what the box, median line and outlier marker show.',[
  st('Read the medians: Tuesday is about 6.7 h and Saturday about 8.7 h, so Saturday’s typical sleep is roughly 2 h longer.','\\(8.7-6.7=2.0\\text{ h}\\)','boxplots'),
  st('Calculate each IQR from the box edges; Saturday’s middle spread is larger. Tuesday also has a high outlier.','\\(IQR_{Tue}=7.4-5.8=1.6\\text{ h},\\quad IQR_{Sat}=10.4-7.3=3.1\\text{ h}\\)','boxplots'),
  st('Use these graph features to explain the difference; for example, weekend routines may allow longer and less regular sleep.','Tuesday: one high outlier; Saturday: no outlier.') ],'boxplots'));
const golf='A golf ball follows \\(y=0.003125x(200-x)\\) metres while travelling up a slope. Point B on the path is \\(B(170,15.9)\\).';
add(7,'y10-7c',mc('cgs-y10-2024-s2-q22a','easy',`${golf} How far horizontally would the ball travel if the ground were flat?`,[
  '100 m','170 m','200 m','400 m'],2,
  'On flat ground, the ball lands when its height y returns to zero.','\\(y=0.003125x(200-x)\\)','Use the nonzero root because x = 0 is the launch point.',[
  st('Set the path height to zero.','\\(0=0.003125x(200-x)\\)','projectile'),
  st('Since 0.003125 is not zero, the roots are x = 0 or x = 200.','\\(x=0\\quad\\text{or}\\quad200-x=0\\)'),
  st('The second root is the landing distance.','\\(\\boxed{200\\text{ m}}\\)') ],'projectile'));
add(12,'y10-12a',mc('cgs-y10-2024-s2-q22b','medium',`${golf} Use point B to find the slope angle θ to the nearest degree.`,[
  '3°','5°','9°','15°'],1,
  'The slope rises 15.9 m over a horizontal run of 170 m. Use tangent.','point B on the path is \\(B(170,15.9)\\)','Use the slope triangle from A to B, not the curved flight path.',[
  st('Use the slope triangle: 170 m is the horizontal run and 15.9 m is the rise to B.','\\(\\tan\\theta=\\frac{15.9}{170}\\)','projectileSlope'),
  st('Take the inverse tangent.','\\(\\theta=\\tan^{-1}(15.9/170)\\approx5.34^\\circ\\)'),
  st('Round to the nearest degree.','\\(\\boxed{5^\\circ}\\)') ],'projectile'));
add(7,'y10-7c',mc('cgs-y10-2024-s2-q22c','hard',`${golf} Find the ball’s maximum height above the sloping ground, to the nearest metre. Use the slope angle \\(5^\\circ\\).`,[
  '22 m','23 m','31 m','39 m'],1,
  'Find the parabola’s vertex height, then subtract the height of the slope at the same horizontal position.','maximum height above the sloping ground','The vertex occurs halfway between the roots; ground height there is not zero.',[
  st('The roots are x = 0 and x = 200, so the vertex has x-coordinate 100.','\\(x_v=\\frac{0+200}{2}=100\\)','projectileHeight'),
  st('Find the path height at x = 100.','\\(y_v=0.003125(100)(100)=31.25\\text{ m}\\)','projectileHeight'),
  st('At x = 100, the sloping ground is about 100 tan 5° = 8.75 m above A.','\\(h_g=100\\tan5^\\circ\\approx8.75\\text{ m}\\)'),
  st('Subtract the ground height and round.','\\(31.25-8.75=22.50\\text{ m}\\approx\\boxed{23\\text{ m}}\\)','projectileHeight') ],'projectile'));
const tri23='In the diagram, AB = 1, angle ACB = 30°, CD = 2, and AB is perpendicular to BD. Points B, C and D lie on a straight line.';
add(12,'y10-12b',review('cgs-y10-2024-s2-q23a','hard',`${tri23} Use trigonometry to show that \\(\\angle BAD=75^\\circ\\).`,
  'Sample answer: In right triangle ABC, \\(\\tan30^\\circ=AB/BC\\), so \\(BC=1/\\tan30^\\circ=\\sqrt3\\). Hence \\(BD=BC+CD=\\sqrt3+2\\). In right triangle ABD, \\(\\tan\\angle BAD=BD/AB=2+\\sqrt3\\), so \\(\\angle BAD=\\tan^{-1}(2+\\sqrt3)=75^\\circ\\).',
  'Start with the small right triangle ABC to find BC, then add CD before using triangle ABD.','\\(CD=2\\)','The 30° angle is at C; AB is opposite and BC is adjacent to it.',[
  st('In right triangle ABC, use tangent at C to calculate BC.','\\(\\tan30^\\circ=\\frac{AB}{BC}=\\frac1{BC}\\Rightarrow BC=\\frac1{\\tan30^\\circ}=\\sqrt3\\)','triangle23In'),
  st('Add the adjacent ground segments to obtain BD.','\\(BD=BC+CD=\\sqrt3+2\\)'),
  st('In right triangle ABD, use tangent for angle BAD.','\\(\\tan(\\angle BAD)=\\frac{BD}{AB}=\\frac{\\sqrt3+2}{1}=2+\\sqrt3\\)','triangle23Out'),
  st('Evaluate the inverse tangent.','\\(\\angle BAD=\\tan^{-1}(2+\\sqrt3)=\\boxed{75^\\circ}\\)','triangle23Out') ],'triangle23'));
add(12,'y10-12b',mc('cgs-y10-2024-s2-q23b','hard',`${tri23} Hence find the exact value of \\(\\tan75^\\circ\\) in simplest surd form.`,[
  '\\(2-\\sqrt3\\)','\\(2+\\sqrt3\\)','\\(\\sqrt3+1\\)','\\(\\frac{2+\\sqrt3}{2}\\)'],1,
  'Use the right triangle with angle 75°, opposite side BD = 2 + √3 and adjacent side AB = 1.','\\(\\tan75^\\circ\\)','Keep the exact value; do not round the surd to a decimal.',[
  st('From the diagram, BD = BC + CD and BC = √3.','\\(BD=\\sqrt3+2\\)','triangle23'),
  st('Use tangent as opposite over adjacent for angle BAD = 75°.','\\(\\tan75^\\circ=\\frac{BD}{AB}\\)'),
  st('Substitute BD = 2 + √3 and AB = 1.','\\(\\tan75^\\circ=\\frac{2+\\sqrt3}{1}=\\boxed{2+\\sqrt3}\\)') ],'triangle23'));

// Insert each question under its curriculum-matched topic, preserving topic order.
for (const {ch,topic,q} of Q) {
  const file=path.join(root,`content/chapters/y10-${ch}.json`);
  const data=JSON.parse(fs.readFileSync(file,'utf8'));
  const dest=data.topics.find(t=>t.topicId===topic);
  if(!dest) throw new Error(`Missing ${topic} in ${file}`);
  if(data.topics.some(t=>t.questions.some(x=>x.id===q.id))) throw new Error(`Duplicate ${q.id}`);
  dest.questions.push(q);
  fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
}
console.log(`Added ${Q.length} questions to ${new Set(Q.map(x=>x.ch)).size} Year 10 chapters.`);
