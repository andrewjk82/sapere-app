/* eslint-disable */
// 16-bit "pixel hero" drawn from a small config (no image files): the student's buddy. Ported from the Pixel Hero
// prototype. draw(canvas, config, view 'full' | 'head', blink, bob).
function hx(c){c=c.replace('#','');return [parseInt(c.substr(0,2),16),parseInt(c.substr(2,2),16),parseInt(c.substr(4,2),16)];}
function sh(c,p){var a=hx(c),t=p<0?0:255,k=Math.abs(p)/100;return '#'+a.map(function(v){var x=Math.round(v+(t-v)*k);return ('0'+x.toString(16)).slice(-2);}).join('');}

var SKIN=['#fde0c8','#f5c49c','#e3a574','#b97b52','#8a5636','#5e3a24'];
var HAIRC=['#2d2430','#6b4226','#c9803a','#e8c35b','#d9577a','#4a7bd6','#8d52d9','#f1efe9'];
var IRIS=['#4a7bd6','#2fa764','#8a5636','#8d52d9','#d9577a','#2b2030'];
var CLOTH=['#d9452e','#4a7bd6','#2fa764','#8d52d9','#e8a933','#d9577a','#2b2f3a','#e9e4d8'];
var ACCENT=['#f2c13b','#e8e2f4','#d9452e','#2fa764','#4a7bd6','#2b2f3a'];
var BGS=['#6fa86b','#cfd8f0','#d5efe0','#f4d9e2','#f3e3b8','#2c2740'];
var OPT={
  eyes:[['color','Bright',0],['dot','Dot',0],['wide','Wide',0],['happy','Happy',0],['sleepy','Sleepy',0],['wink','Wink',75]],
  brows:[['soft','Soft',0],['angry','Fierce',0],['sad','Worried',0],['thick','Bold',0],['none','None',0]],
  mouth:[['smile','Smile',0],['grin','Grin',0],['open','Cheer',0],['o','Wow',0],['smirk','Smirk',0],['flat','Calm',0]],
  ears:[['human','Round',0],['elf','Elf',150]],
  hair:[['short','Short',0],['spiky','Spiky',0],['bob','Bob',0],['long','Long',0],['ponytail','Ponytail',100],['bun','Bun',75],['mohawk','Mohawk',125],['bald','Bald',0]],
  head:[['none','None',0],['headband','Headband',0],['cap','Cap',0],['hood','Hunter hat',150],['circlet','Circlet',225],['crown','Crown',300],['helm','Helmet',250],['wizard','Wizard hat',200]],
  cls:[['student','Student',0],['ranger','Ranger',0],['knight','Knight',300],['wizard','Wizard',300],['cleric','Cleric',300]],
  hand:[['none','Empty',0],['book','Book',100],['wand','Wand',150],['staff','Staff',200],['sword','Sword',250],['bow','Bow',225]],
  off:[['none','Empty',0],['shield','Shield',200],['potion','Potion',75]],
  back:[['none','Nothing',0],['cape','Cape',175],['quiver','Quiver',125]],
  border:[['dark','Dark',0],['sticker','Sticker',0],['none','None',0]]
};
var MOODS={Happy:{eyes:'color',brows:'soft',mouth:'smile'},Excited:{eyes:'wide',brows:'soft',mouth:'open'},Cool:{eyes:'sleepy',brows:'thick',mouth:'smirk'},Fierce:{eyes:'dot',brows:'angry',mouth:'grin'},Shy:{eyes:'color',brows:'sad',mouth:'flat'},Wow:{eyes:'wide',brows:'soft',mouth:'o'}};
var DEFAULT={skin:SKIN[1],iris:IRIS[0],hairColor:HAIRC[1],cloth:CLOTH[1],accent:ACCENT[0],bg:BGS[0],eyes:'color',brows:'soft',mouth:'smile',hair:'short',ears:'human',head:'none',cls:'student',hand:'none',off:'none',back:'none',border:'dark'};
var state=Object.assign({},DEFAULT),owned={},xp=150,tab='face',pending=null;
Object.keys(OPT).forEach(function(k){OPT[k].forEach(function(o){if(o[2]===0)owned[k+':'+o[0]]=true;});});
function save(){try{localStorage.setItem(KEY,JSON.stringify({state:state,owned:owned,xp:xp}));}catch(e){}}
(function(){try{var d=JSON.parse(localStorage.getItem(KEY)||'null');if(d&&d.state){state=Object.assign({},DEFAULT,d.state);owned=Object.assign(owned,d.owned||{});if(typeof d.xp==='number')xp=d.xp;}}catch(e){}})();

/* ---------- tiny pixel rasteriser: shapes -> grid, with automatic light/shadow ---------- */
var W=32,H=56,OY=8,PAD=4,OUT='#2b1d2f',KEY='pixel-hero-v3';
function bb(f,a){f.bb=a;return f;}
function ell(cx,cy,rx,ry){return bb(function(x,y){var dx=(x+.5-cx)/rx,dy=(y+.5-cy)/ry;return dx*dx+dy*dy<=1;},[cx-rx-1,cy-ry-1,cx+rx+1,cy+ry+1]);}
function rect(x0,y0,w,h){return bb(function(x,y){return x>=x0&&x<x0+w&&y>=y0&&y<y0+h;},[x0-1,y0-1,x0+w+1,y0+h+1]);}
function rrect(x0,y0,w,h,r){return bb(function(x,y){if(x<x0||x>=x0+w||y<y0||y>=y0+h)return false;var cx=Math.min(Math.max(x+.5,x0+r),x0+w-r),cy=Math.min(Math.max(y+.5,y0+r),y0+h-r),dx=x+.5-cx,dy=y+.5-cy;return dx*dx+dy*dy<=r*r;},[x0-1,y0-1,x0+w+1,y0+h+1]);}
function poly(p){var x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;p.forEach(function(q){x0=Math.min(x0,q[0]);x1=Math.max(x1,q[0]);y0=Math.min(y0,q[1]);y1=Math.max(y1,q[1]);});
  return bb(function(x,y){var px=x+.5,py=y+.5,ins=false;for(var i=0,j=p.length-1;i<p.length;j=i++){var xi=p[i][0],yi=p[i][1],xj=p[j][0],yj=p[j][1];if(((yi>py)!==(yj>py))&&(px<(xj-xi)*(py-yi)/(yj-yi)+xi))ins=!ins;}return ins;},[x0-1,y0-1,x1+1,y1+1]);}
function seg(x1,y1,x2,y2,t){var dx=x2-x1,dy=y2-y1,l2=dx*dx+dy*dy;return bb(function(x,y){var px=x+.5-x1,py=y+.5-y1,u=l2?Math.max(0,Math.min(1,(px*dx+py*dy)/l2)):0,ex=px-u*dx,ey=py-u*dy;return ex*ex+ey*ey<=t*t/4;},[Math.min(x1,x2)-t,Math.min(y1,y2)-t,Math.max(x1,x2)+t,Math.max(y1,y2)+t]);}
function OR(){var a=Array.prototype.slice.call(arguments),b=[1e9,1e9,-1e9,-1e9];a.forEach(function(f){b=[Math.min(b[0],f.bb[0]),Math.min(b[1],f.bb[1]),Math.max(b[2],f.bb[2]),Math.max(b[3],f.bb[3])];});return bb(function(x,y){for(var i=0;i<a.length;i++)if(a[i](x,y))return true;return false;},b);}
function AND(a,b){return bb(function(x,y){return a(x,y)&&b(x,y);},[Math.max(a.bb[0],b.bb[0]),Math.max(a.bb[1],b.bb[1]),Math.min(a.bb[2],b.bb[2]),Math.min(a.bb[3],b.bb[3])]);}
function SUB(a,b){return bb(function(x,y){return a(x,y)&&!b(x,y);},a.bb);}

var HATCUT={cap:13,hood:12,wizard:10,helm:99};
function compose(s,blink,dy){
  var S=2,PW=W*S+2*PAD,PH=H*S+2*PAD,g=[];
  for(var y=0;y<PH;y++){g.push([]);for(var x=0;x<PW;x++)g[y].push(null);}
  function setpx(px,py,c){px+=PAD;py+=PAD;if(px>=0&&py>=0&&px<PW&&py<PH)g[py][px]=c;}
  function put(x,y,c){var oy=(y<OY+40?dy:0),X=x*S,Y=(y+OY)*S+oy;for(var j=0;j<S;j++)for(var i=0;i<S;i++)setpx(X+i,Y+j,c);}
  function paint(f,col,shade){var b=f.bb,lo=sh(col,-22),hi=sh(col,16);
    var F=function(px,py){return f((px+.5)/S-.5,(py+.5)/S-.5-OY);};
    var d=((b[2]-b[0])>10&&(b[3]-b[1])>6)?2:1;
    for(var py=Math.floor((b[1]+OY)*S);py<=Math.ceil((b[3]+OY)*S);py++)for(var px=Math.floor(b[0]*S);px<=Math.ceil(b[2]*S);px++){
      if(!F(px,py))continue;var c=col;
      if(shade!==false){if(!F(px,py+d)||!F(px+d,py))c=lo;else if(!F(px,py-d)||!F(px-d,py))c=hi;}
      setpx(px,py+((py/S-OY)<40?dy:0),c);}}
  function pix(list,c){list.forEach(function(p){put(p[0],p[1],p[2]||c);});}
  var sk=s.skin,skD=sh(sk,-18),HC=s.hairColor,acc=s.accent,cl=s.cloth,K=OUT;
  var robe=(s.cls==='wizard'||s.cls==='cleric');
  var faceOpen=ell(16,19,9.5,8.5),yge=function(n){return bb(function(x,y){return y>=n;},[-30,n,60,70]);};
  var shortM=SUB(ell(16,11,13.5,11),faceOpen);
  var bangs=OR(poly([[5,10],[13,9],[8,14]]),poly([[11,9],[19,9],[13,13]]),poly([[17,9],[27,10],[22,13]]));
  var lockL=poly([[4,10],[8,10],[7.5,20],[6,26],[4,22]]),lockR=poly([[24,10],[28,10],[28,22],[26,26],[24.5,20]]);
  var fringe=OR(shortM,bangs);
  var hairFront={short:fringe,bob:OR(fringe,poly([[3,10],[7,10],[7,23],[3,22]]),poly([[25,10],[29,10],[29,22],[25,23]])),long:OR(fringe,lockL,lockR),ponytail:OR(fringe,lockL),
    bun:OR(shortM,ell(16,1,5,4)),
    spiky:SUB(OR(ell(16,11,13.5,11),poly([[4,10],[3,0],[11,5]]),poly([[9,6],[12,-6],[19,4]]),poly([[15,4],[21,-8],[26,6]]),poly([[22,5],[31,-1],[28,12]])),faceOpen),
    mohawk:poly([[12,10],[12,-2],[14,-6],[18,-6],[20,-2],[20,10]]),bald:null}[s.hair];
  var hairBack={bob:OR(rrect(3,8,26,17,6),ell(6,23,4,3),ell(26,23,4,3)),long:poly([[5,9],[27,9],[29,22],[30,34],[27,40],[24,36],[22,41],[18,37],[14,37],[10,41],[8,36],[5,40],[2,34],[3,22]]),ponytail:OR(ell(27,13,4,5),poly([[25,10],[31,15],[31,31],[27,29],[26,19]]))}[s.hair];
  /* back items */
  if(s.back==='cape')paint(poly([[8,26],[24,26],[29,47],[3,47]]),'#b23a48');
  if(s.back==='quiver'){paint(poly([[21,22],[25,19],[28,31],[24,33]]),'#8a5a2b');pix([[25,17,'#f4f2ec'],[26,17,'#f4f2ec'],[25,18,'#f4f2ec'],[27,18,'#f4f2ec'],[26,19,'#f4f2ec']]);}
  if(hairBack)paint(hairBack,HC);
  /* body */
  var cls=s.cls,P_,B_,SL,CF,GL,BELT,TOP=cl;
  if(cls==='student'){P_='#3d4663';B_='#5a3a28';SL=cl;CF='#f4f2ec';GL=sk;BELT=sh(cl,-35);}
  else if(cls==='ranger'){P_='#6b4a2a';B_='#4a3320';SL=sh(cl,-14);CF='#6b4a2a';GL='#6b4a2a';BELT='#4a3320';}
  else if(cls==='knight'){P_='#68748a';B_='#3d4558';SL='#8f99aa';CF='#68748a';GL='#68748a';BELT='#4a3a2a';TOP='#aab3c2';}
  else{SL=sh(cl,-14);CF=acc;GL=sk;BELT=acc;}
  if(!robe){
    paint(rect(11,38,4,6),P_);paint(rect(17,38,4,6),P_);
    if(cls==='student'){paint(rect(11,42,4,2),'#f4f2ec',false);paint(rect(17,42,4,2),'#f4f2ec',false);}
    paint(rrect(9.5,43.5,6,3.6,1.6),B_);paint(rrect(16.5,43.5,6,3.6,1.6),B_);
    pix([[11,44],[12,44],[18,44],[19,44]],sh(B_,38));
  }
  paint(rrect(7,27,3,11,1.2),SL);paint(rrect(22,27,3,11,1.2),SL);
  paint(rect(7,35,3,2),CF,false);paint(rect(22,35,3,2),CF,false);
  if(robe){
    paint(poly([[10,26],[22,26],[24,36],[27,47],[5,47],[8,36]]),cl);
    paint(rect(10,35,12,2),BELT,false);
    paint(rect(5,45,22,2),acc,false);
    paint(poly([[13,26],[19,26],[16,30]]),acc,false);
    if(cls==='cleric'){paint(rect(15,30,2,6),acc,false);paint(rect(13,31,6,2),acc,false);}
    else {pix([[12,40],[19,42],[15,44],[21,38]],acc);}
  }else if(cls==='ranger'){
    paint(rrect(9,26,14,16,2),cl);paint(poly([[10,26],[13,26],[22,40],[19,40]]),'#6b4a2a',false);paint(rect(9,35,14,2),BELT,false);paint(rect(15,34,2,4),acc,false);
    paint(poly([[13,26],[19,26],[16,29]]),sh(cl,-25),false);
  }else{
    paint(rrect(10,26,12,13,2),TOP);paint(rect(10,36,12,2),BELT,false);paint(rect(15,35,2,4),acc,false);
    if(cls==='student'){
      paint(poly([[12.5,26],[19.5,26],[16,33]]),'#f4f2ec',false);
      paint(poly([[12,26],[15,26],[14,30]]),sh(cl,-22),false);paint(poly([[17,26],[20,26],[18,30]]),sh(cl,-22),false);
      paint(poly([[15,27],[17,27],[17.4,32],[16,34],[14.6,32]]),acc,false);
      paint(rect(15.6,34,1,3),sh(cl,-30),false);
      paint(rect(18,30,3,2),'#f2c13b',false);}
    else {paint(poly([[12,26],[20,26],[16,29]]),'#7d8798',false);paint(ell(16,32,2.6,2.6),acc,false);
      paint(ell(8.5,27.5,3.2,2.8),'#c3cbd8');paint(ell(23.5,27.5,3.2,2.8),'#c3cbd8');}
  }
  paint(rect(14,24,4,3),skD,false);
  /* head */
  var ear=s.ears==='elf';
  if(ear){paint(poly([[6,15],[0,10],[4,20],[7,20]]),sk);paint(poly([[26,15],[32,10],[28,20],[25,20]]),sk);}
  else{paint(ell(5,17,2.4,3.2),sk);paint(ell(27,17,2.4,3.2),sk);}
  paint(ell(16,15,11,10),sk);
  paint(ell(16,23,6,2),sh(sk,-6),false);
  pix([[15,20],[16,20]],sh(sk,-30));
  /* face */
  var KI=s.iris,HB=sh(HC,-38);
  function eyeAt(cx0,cy,t,flip){var sg=flip?-1:1,cx=flip?32-cx0:cx0,Wt='#ffffff';
    if(t==='color'){paint(ell(cx,cy,2.2,3),K,false);paint(ell(cx,cy+.1,1.7,2.5),Wt,false);paint(ell(cx,cy+.4,1.45,2.1),KI,false);paint(AND(ell(cx,cy+.4,1.45,2.1),rect(cx-3,cy+1.2,6,3)),sh(KI,30),false);paint(ell(cx,cy+.5,.7,1.2),K,false);paint(ell(cx-.55*sg,cy-.5,.6,.6),Wt,false);}
    if(t==='dot'){paint(ell(cx,cy+.2,1.6,2.4),K,false);paint(ell(cx-.5*sg,cy-.6,.6,.6),Wt,false);}
    if(t==='wide'){paint(ell(cx,cy,3.4,4.1),K,false);paint(ell(cx,cy+.1,2.8,3.5),Wt,false);paint(ell(cx,cy+.5,2.4,3.1),KI,false);paint(AND(ell(cx,cy+.5,2.4,3.1),rect(cx-3,cy+1.6,6,3)),sh(KI,30),false);paint(ell(cx,cy+.7,1.2,1.7),K,false);paint(ell(cx-1*sg,cy-.8,.9,.9),Wt,false);paint(ell(cx+.9*sg,cy+1.8,.5,.5),Wt,false);}
    if(t==='happy'){[[-2.4,1.2,-1.2,-.3],[-1.2,-.3,0,-.9],[0,-.9,1.2,-.3],[1.2,-.3,2.4,1.2]].forEach(function(q){paint(seg(cx+q[0],cy+q[1],cx+q[2],cy+q[3],1.2),K,false);});}
    if(t==='sleepy'){paint(ell(cx,cy+.7,2.7,2.7),K,false);paint(ell(cx,cy+.7,2.1,2.1),Wt,false);paint(ell(cx,cy+1.1,1.5,1.6),KI,false);paint(ell(cx,cy+1.2,.8,.9),K,false);paint(AND(ell(cx,cy+.7,3,3),rect(cx-4,cy-3,8,2.9)),sh(sk,-8),false);paint(seg(cx-2.8,cy-.1,cx+2.8,cy-.1,1.2),K,false);}
    if(t==='blink')paint(seg(cx-2.4,cy+1.4,cx+2.4,cy+1.4,1.1),K,false);}
  var etL=s.eyes,etR=s.eyes;if(s.eyes==='wink'){etL='color';etR='happy';}
  eyeAt(10.5,18.3,blink&&etL!=='happy'?'blink':etL,false);eyeAt(10.5,18.3,blink&&etR!=='happy'?'blink':etR,true);
  function brow(x1,y1,x2,y2,t){paint(seg(x1,y1,x2,y2,t),HB,false);paint(seg(32-x1,y1,32-x2,y2,t),HB,false);}
  if(s.brows==='soft')brow(8,14.2,12.7,13.4,1.3);
  if(s.brows==='angry')brow(8,13,12.7,14.8,1.4);
  if(s.brows==='sad')brow(8,14.8,12.7,13,1.4);
  if(s.brows==='thick')brow(8,14,12.7,13.4,2.2);
  paint(ell(16,21,.9,.55),sh(sk,-28),false);
  var mo=s.mouth;
  if(mo==='smile'){paint(seg(13.4,22.4,15,23.6,1.1),K,false);paint(seg(15,23.6,17,23.6,1.1),K,false);paint(seg(17,23.6,18.6,22.4,1.1),K,false);}
  if(mo==='grin'){paint(poly([[13.2,22.1],[18.8,22.1],[17.6,24.8],[14.4,24.8]]),K,false);paint(rect(14,22.6,4,1.3),'#ffffff',false);}
  if(mo==='open'){paint(ell(16,23.6,2.2,2),K,false);paint(ell(16,24.4,1.3,.8),'#d9577a',false);}
  if(mo==='o')paint(ell(16,23.6,1.3,1.7),K,false);
  if(mo==='smirk'){paint(seg(14,23.6,17,23.6,1.1),K,false);paint(seg(17,23.6,18.9,22.3,1.1),K,false);}
  if(mo==='flat')paint(seg(14,23.6,18,23.6,1.1),K,false);
  /* hair front, hats */
  var cut=HATCUT[s.head];
  if(hairFront){var hf=cut!==undefined?AND(hairFront,yge(cut)):hairFront;paint(hf,HC);if(!cut){pix([[10,3],[11,3],[12,3],[13,3],[9,4],[10,4]],sh(HC,34));}}
  if(s.hair==='ponytail')paint(ell(26.5,10,1.6,1.6),acc,false);
  var hd=s.head;
  if(hd==='cap'){paint(AND(ell(16,12,12.5,11),rect(0,-20,40,33)),cl);paint(poly([[4,12],[28,12],[30,15],[2,15]]),sh(cl,-20));paint(ell(16,1.5,1.6,1.6),sh(cl,-25),false);}
  if(hd==='headband'){paint(AND(ell(16,15,11.8,10.8),rect(0,8,40,3)),acc);paint(ell(27,10,2.2,2.2),acc);paint(poly([[26,11],[31,15],[29,16],[25,12]]),sh(acc,-15));}
  if(hd==='hood'){paint(AND(ell(16,11,12,9.5),rect(0,-20,40,31)),'#2fa764');paint(ell(16,11.5,15.5,3),'#1d7a48');paint(poly([[22,6],[30,-5],[31,0],[26,8]]),'#d9452e');}
  if(hd==='circlet'){paint(AND(ell(16,15,11.8,10.8),rect(0,8,40,2)),'#f2c13b');paint(ell(16,8.5,1.8,1.8),'#4a7bd6',false);}
  if(hd==='crown'){paint(rect(8,5,16,4),'#f2c13b');paint(poly([[8,5],[8,-2],[12,3],[12,5]]),'#f2c13b');paint(poly([[12,5],[16,-4],[20,5]]),'#f2c13b');paint(poly([[20,5],[20,3],[24,-2],[24,5]]),'#f2c13b');pix([[11,7],[20,7]],'#4a7bd6');pix([[15,7],[16,7]],'#d9452e');}
  if(hd==='helm'){paint(AND(ell(16,13,13,12.5),rect(0,-20,40,34)),'#aab3c2');paint(rect(3,12,26,2),'#7d8798',false);paint(rect(3,13,4,10),'#8f99aa');paint(rect(25,13,4,10),'#8f99aa');paint(rect(15,14,2,6),'#8f99aa',false);paint(poly([[14,-1],[21,-5],[26,5],[17,3]]),'#d9452e');}
  if(hd==='wizard'){paint(ell(16,10,15.5,3.5),sh(cl,-12));paint(poly([[7,10],[12,-3],[16,-9],[20,-5],[25,10]]),cl);paint(poly([[16,-9],[24,-8],[24,-3],[19,-5]]),cl);paint(AND(poly([[7,10],[12,-3],[16,-9],[20,-5],[25,10]]),rect(0,5,40,3)),acc,false);pix([[14,-1],[17,-5]],acc);}
  /* held items */
  if(s.off==='shield'){paint(poly([[0,28],[11,28],[11,41],[5.5,47],[0,41]]),'#8f99aa');paint(poly([[2,30],[9,30],[9,40],[5.5,44],[2,40]]),acc,false);pix([[5,32],[5,33],[5,34],[5,35],[5,36],[5,37],[3,34],[4,34],[6,34],[7,34]],'#f4f2ec');}
  if(s.off==='potion'){paint(rect(6,31,3,3),'#cfe0ff',false);paint(rect(6,29,3,2),'#8a5a2b',false);paint(ell(7.5,38,4.2,3.6),'#d9577a');pix([[5,37]],'#ff9fb8');}
  var it=s.hand;
  if(it==='sword'){paint(rect(23,22,2,15),'#e2e7f0');paint(poly([[23,22],[25,22],[24,19]]),'#e2e7f0',false);paint(rect(20,36,8,1),'#f2c13b',false);paint(rect(23,41,2,2),'#f2c13b',false);}
  if(it==='staff'){paint(rect(25,9,2,39),'#8a5a2b');paint(ell(26,6,3.6,3.6),acc);pix([[25,5]],'#fff4b8');}
  if(it==='wand'){paint(seg(24,38,30,30,1.8),'#8a5a2b',false);paint(poly([[30,26],[31,29],[34,30],[31,31],[30,34],[29,31],[26,30],[29,29]]),'#fff4b8',false);}
  if(it==='bow'){for(var a=-1.3;a<=1.3;a+=.1)paint(ell(24+Math.cos(a)*6.5,31+Math.sin(a)*11,1.1,1.1),'#8a5a2b',false);paint(seg(24+Math.cos(1.3)*6.5,31-11*.96,24+Math.cos(1.3)*6.5,31+11*.96,.9),'#f4f2ec',false);}
  if(it==='book'){paint(rrect(21,32,8,8,1),acc);paint(rect(28,33,1,6),'#f4f2ec',false);paint(rect(22,33,1,6),sh(acc,-25),false);}
  /* hands */
  paint(ell(8.5,38.5,2.3,2.3),GL,false);paint(ell(23.5,38.5,2.3,2.3),GL,false);
  /* outline */
  function dil(col){var add=[];for(var y=0;y<PH;y++)for(var x=0;x<PW;x++){if(g[y][x])continue;var n=false;for(var j=-1;j<=1&&!n;j++)for(var i=-1;i<=1;i++){var yy=y+j,xx=x+i;if(yy>=0&&xx>=0&&yy<PH&&xx<PW&&g[yy][xx]){n=true;break;}}if(n)add.push([x,y]);}add.forEach(function(p){g[p[1]][p[0]]=col;});}
  if(s.border!=='none')dil(OUT);
  if(s.border==='sticker'){dil('#ffffff');dil('#ffffff');}
  for(var sy=0;sy<2;sy++)for(var sx=7*S;sx<=24*S;sx++){var px=sx+PAD,py=(OY+48)*S+sy+PAD;if(!g[py][px])g[py][px]='rgba(0,0,0,.2)';}
  return g;
}
var VIEWS={full:{x:0,y:0,w:W*2+2*PAD,h:H*2+2*PAD},head:{x:2,y:PAD+(OY-9)*2,w:60,h:76}};
function draw(cv,s,view,blink,dy){
  var v=VIEWS[view],g=compose(s,blink,dy||0);cv.width=v.w;cv.height=v.h;var ctx=cv.getContext('2d');ctx.clearRect(0,0,v.w,v.h);
  for(var y=0;y<v.h;y++)for(var x=0;x<v.w;x++){var c=g[v.y+y]&&g[v.y+y][v.x+x];if(c){ctx.fillStyle=c;ctx.fillRect(x,y,1,1);}}
}


export { draw, OPT, DEFAULT, SKIN, HAIRC, IRIS, CLOTH, ACCENT };

/** A saved avatar merged over the default, keeping only values the drawing knows. */
export const heroConfig = (saved) => {
  const out = { ...DEFAULT };
  if (!saved || typeof saved !== 'object') return out;
  Object.keys(DEFAULT).forEach((k) => {
    const v = saved[k];
    if (typeof v !== 'string') return;
    if (OPT[k] ? OPT[k].some((o) => o[0] === v) : /^#[0-9a-f]{6}$/i.test(v)) out[k] = v;
  });
  return out;
};

// Faces for the buddy's moods (they only change the face, never what the student chose to wear).
export const HERO_MOODS = {
  idle: { eyes: 'color', brows: 'soft', mouth: 'smile' },
  hint: { eyes: 'wide', brows: 'soft', mouth: 'o' },
  thinking: { eyes: 'color', brows: 'sad', mouth: 'flat' },
  urgent: { eyes: 'wide', brows: 'sad', mouth: 'open' },
  cheer: { eyes: 'happy', brows: 'soft', mouth: 'open' },
};
