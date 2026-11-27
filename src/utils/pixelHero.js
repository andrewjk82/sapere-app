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
  eyes:[['color','Bright',0],['dot','Dot',0],['wide','Wide',0],['happy','Happy',0],['sleepy','Sleepy',0],['wink','Wink',75],['star','Starry',150],['heart','Heart eyes',150],['cat','Cat eyes',100]],
  brows:[['soft','Soft',0],['angry','Fierce',0],['sad','Worried',0],['thick','Bold',0],['none','None',0]],
  mouth:[['smile','Smile',0],['grin','Grin',0],['open','Cheer',0],['o','Wow',0],['smirk','Smirk',0],['flat','Calm',0],['tongue','Tongue out',75],['cat','Cat smile',75],['fangs','Fangs',100]],
  ears:[['human','Round',0],['elf','Elf',150]],
  hair:[['short','Short',0],['spiky','Spiky',0],['bob','Bob',0],['long','Long',0],['ponytail','Ponytail',100],['bun','Bun',75],['mohawk','Mohawk',125],['bald','Bald',0],['twintails','Twin tails',150],['afro','Afro',150],['curly','Curly',125],['braids','Braids',150],['side','Side sweep',75],['buns','Double buns',150],['hime','Princess cut',175]],
  head:[['none','None',0],['headband','Headband',0],['cap','Cap',0],['hood','Hunter hat',150],['circlet','Circlet',225],['crown','Crown',300],['helm','Helmet',250],['wizard','Wizard hat',200],['catears','Cat ears',200],['bunny','Bunny ears',200],['beanie','Beanie',125],['headphones','Headphones',250],['flower','Flower',100],['bow','Ribbon',100],['halo','Halo',400],['horns','Little horns',250],['pirate','Pirate hat',300],['chef','Chef hat',200],['gradcap','Grad cap',350],['santa','Santa hat',200],['frog','Frog hood',350]],
  cls:[['student','Student',0],['ranger','Ranger',0],['knight','Knight',300],['wizard','Wizard',300],['cleric','Cleric',300],['tee','T-shirt',150],['hoodie','Hoodie',200],['sport','Sports kit',200],['dress','Dress',250],['labcoat','Scientist',300],['chef','Chef',300],['ninja','Ninja',400],['pirate','Pirate',400],['astronaut','Astronaut',500],['hero','Superhero',500],['suit','Tuxedo',350],['pyjamas','Pyjamas',200]],
  hand:[['none','Empty',0],['book','Book',100],['wand','Wand',150],['staff','Staff',200],['sword','Sword',250],['bow','Bow',225],['balloon','Balloon',100],['lollipop','Lollipop',75],['pencil','Giant pencil',125],['flowers','Flower',100],['icecream','Ice cream',100],['guitar','Guitar',350],['flag','Flag',150],['torch','Torch',150],['racket','Racket',200],['trophy','Trophy',500],['lightsaber','Light blade',450]],
  off:[['none','Empty',0],['shield','Shield',200],['potion','Potion',75],['ball','Soccer ball',150],['teddy','Teddy bear',250],['boba','Bubble tea',100],['lantern','Lantern',150],['apple','Apple',50],['gem','Big gem',350]],
  back:[['none','Nothing',0],['cape','Cape',175],['quiver','Quiver',125],['angel','Angel wings',500],['devil','Bat wings',450],['fairy','Fairy wings',500],['backpack','Backpack',150],['jetpack','Jetpack',450],['tail','Cat tail',200],['foxtail','Fox tail',300]],
  face:[['none','Nothing',0],['glasses','Glasses',100],['round','Round glasses',100],['shades','Sunglasses',200],['starshades','Star glasses',250],['patch','Eye patch',150],['blush','Rosy cheeks',50],['freckles','Freckles',50],['bandaid','Plaster',50],['mustache','Moustache',100],['mask','Ninja mask',150],['monocle','Monocle',200]],
  pet:[['none','No pet',0],['chick','Chick',300],['cat','Cat',500],['dog','Puppy',500],['bunny','Bunny',500],['slime','Slime',350],['frog','Frog',350],['penguin','Penguin',600],['fox','Fox',700],['ghost','Ghost',600],['dragon','Baby dragon',900]],
  border:[['dark','Dark',0],['sticker','Sticker',0],['none','None',0]]
};
var MOODS={Happy:{eyes:'color',brows:'soft',mouth:'smile'},Excited:{eyes:'wide',brows:'soft',mouth:'open'},Cool:{eyes:'sleepy',brows:'thick',mouth:'smirk'},Fierce:{eyes:'dot',brows:'angry',mouth:'grin'},Shy:{eyes:'color',brows:'sad',mouth:'flat'},Wow:{eyes:'wide',brows:'soft',mouth:'o'}};
var DEFAULT={skin:SKIN[1],iris:IRIS[0],hairColor:HAIRC[1],cloth:CLOTH[1],accent:ACCENT[0],bg:BGS[0],eyes:'color',brows:'soft',mouth:'smile',hair:'short',ears:'human',head:'none',cls:'student',hand:'none',off:'none',back:'none',face:'none',pet:'none',border:'dark'};
var state=Object.assign({},DEFAULT),owned={},xp=150,tab='face',pending=null;
Object.keys(OPT).forEach(function(k){OPT[k].forEach(function(o){if(o[2]===0)owned[k+':'+o[0]]=true;});});
function save(){try{localStorage.setItem(KEY,JSON.stringify({state:state,owned:owned,xp:xp}));}catch(e){}}
(function(){try{var d=JSON.parse(localStorage.getItem(KEY)||'null');if(d&&d.state){state=Object.assign({},DEFAULT,d.state);owned=Object.assign(owned,d.owned||{});if(typeof d.xp==='number')xp=d.xp;}}catch(e){}})();

/* ---------- tiny pixel rasteriser: shapes -> grid, with automatic light/shadow ---------- */
var W=32,H=56,OY=8,PAD=4,PADX=10,OUT='#2b1d2f',KEY='pixel-hero-v3';
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

var HATCUT={cap:13,hood:12,wizard:10,helm:99,beanie:12,pirate:10,chef:9,santa:11,frog:12,gradcap:9};
function compose(s,blink,dy,only){
  var S=2,PW=W*S+2*PADX,PH=H*S+2*PAD,g=[],HX=0,HY=0;
  for(var y=0;y<PH;y++){g.push([]);for(var x=0;x<PW;x++)g[y].push(null);}
  function setpx(px,py,c){px+=PADX+Math.round(HX*S);py+=PAD+Math.round(HY*S);if(px>=0&&py>=0&&px<PW&&py<PH)g[py][px]=c;}
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
    mohawk:poly([[12,10],[12,-2],[14,-6],[18,-6],[20,-2],[20,10]]),bald:null,
    twintails:fringe,braids:fringe,
    afro:SUB(OR(ell(16,8,16,13),ell(4,14,5,7),ell(28,14,5,7)),faceOpen),
    curly:SUB(OR(ell(16,11,13,10),ell(5,10,4,4),ell(8,4,4,4),ell(13,1,4,4),ell(19,1,4,4),ell(24,4,4,4),ell(27,10,4,4),ell(5,17,3,3),ell(27,17,3,3)),faceOpen),
    side:OR(shortM,poly([[4,9],[26,8],[8,17],[5,16]])),
    buns:OR(fringe,ell(5,3,4.5,4.5),ell(27,3,4.5,4.5)),
    hime:OR(shortM,rect(7,9,18,5),rect(3,10,5,16),rect(24,10,5,16))}[s.hair];
  var hairBack={bob:OR(rrect(3,8,26,17,6),ell(6,23,4,3),ell(26,23,4,3)),long:poly([[5,9],[27,9],[29,22],[30,34],[27,40],[24,36],[22,41],[18,37],[14,37],[10,41],[8,36],[5,40],[2,34],[3,22]]),ponytail:OR(ell(27,13,4,5),poly([[25,10],[31,15],[31,31],[27,29],[26,19]])),
    twintails:OR(ell(3,16,4.5,7),ell(29,16,4.5,7),poly([[0,17],[7,18],[4,34],[-1,30]]),poly([[32,17],[25,18],[28,34],[33,30]])),
    braids:OR(ell(4,21,2.8,3),ell(3.5,26,2.8,3),ell(4,31,2.6,3),ell(28,21,2.8,3),ell(28.5,26,2.8,3),ell(28,31,2.6,3)),
    hime:rrect(3,8,26,29,7)}[s.hair];
  function petArt(){
    var pt=s.pet;
    if(pt&&pt!=='none'){
      var PX=30.8,PY=44,eyes2=function(dx,y,c){paint(ell(PX-dx,y,.7,.9),c||'#23242e',false);paint(ell(PX+dx,y,.7,.9),c||'#23242e',false);};
      if(pt==='chick'){paint(ell(PX,PY,4,3.8),'#ffd93b');eyes2(1.6,PY-1);paint(poly([[PX-1.4,PY],[PX+1.4,PY],[PX,PY+1.8]]),'#f2802b',false);}
      if(pt==='cat'){paint(poly([[PX-4.5,PY-1],[PX-4,PY-8],[PX,PY-4]]),'#8f8a99');paint(poly([[PX+4.5,PY-1],[PX+4,PY-8],[PX,PY-4]]),'#8f8a99');paint(ell(PX,PY-1,4.8,4.4),'#a9a4b3');eyes2(2,PY-2);paint(ell(PX,PY+.5,.8,.6),'#e8648a',false);}
      if(pt==='dog'){paint(ell(PX,PY-1,4.6,4.4),'#e0a96d');paint(ell(PX-4.4,PY-2,2,3.6),'#8a5a2b');paint(ell(PX+4.4,PY-2,2,3.6),'#8a5a2b');eyes2(1.8,PY-2);paint(ell(PX,PY+1,2.4,1.8),'#fbe8d0',false);paint(ell(PX,PY+.4,1,.8),'#23242e',false);}
      if(pt==='bunny'){paint(ell(PX-2,PY-6.5,1.5,4),'#f4f2ec');paint(ell(PX+2,PY-6.5,1.5,4),'#f4f2ec');paint(ell(PX,PY,4.6,4),'#f4f2ec');eyes2(1.8,PY-.5,'#d9452e');paint(ell(PX,PY+1.2,.7,.5),'#f58ab0',false);}
      if(pt==='slime'){paint(poly([[PX-6,PY+4],[PX-5,PY-1],[PX,PY-6],[PX+5,PY-1],[PX+6,PY+4]]),'#5fd3a0');eyes2(2,PY);paint(rect(PX-1,PY+1.6,2,.8),'#23242e',false);paint(ell(PX-2.5,PY-2,1,.8),'#d6fff0',false);}
      if(pt==='frog'){paint(ell(PX-2.6,PY-3.4,2.2,2.2),'#5cbf62');paint(ell(PX+2.6,PY-3.4,2.2,2.2),'#5cbf62');paint(ell(PX,PY,5,3.8),'#5cbf62');eyes2(2.6,PY-3.4);paint(seg(PX-2.5,PY+.8,PX+2.5,PY+.8,.8),'#23242e',false);}
      if(pt==='penguin'){paint(ell(PX,PY-1,4.4,5.6),'#2b2f3a');paint(ell(PX,PY,2.8,4),'#ffffff',false);eyes2(1.4,PY-3);paint(poly([[PX-1.2,PY-2],[PX+1.2,PY-2],[PX,PY-.4]]),'#f2a02b',false);paint(rect(PX-3.5,PY+4,3,1.2),'#f2a02b',false);paint(rect(PX+.5,PY+4,3,1.2),'#f2a02b',false);}
      if(pt==='fox'){paint(poly([[PX-5,PY-2],[PX-4.6,PY-9],[PX,PY-4]]),'#e8812f');paint(poly([[PX+5,PY-2],[PX+4.6,PY-9],[PX,PY-4]]),'#e8812f');paint(poly([[PX-6,PY-2],[PX,PY-6],[PX+6,PY-2],[PX,PY+4]]),'#e8812f');paint(poly([[PX-5,PY-1],[PX,PY],[PX+5,PY-1],[PX,PY+4]]),'#f9f4e8',false);eyes2(2.2,PY-2);paint(ell(PX,PY+2.6,.9,.8),'#23242e',false);}
      if(pt==='ghost'){paint(OR(ell(PX,PY-4,4.6,4.6),poly([[PX-4.6,PY-4],[PX+4.6,PY-4],[PX+4.6,PY+3],[PX+2.3,PY+1],[PX,PY+3],[PX-2.3,PY+1],[PX-4.6,PY+3]])),'#eef0ff');eyes2(1.8,PY-4);paint(ell(PX,PY-1.5,.9,1),'#23242e',false);}
      if(pt==='dragon'){paint(poly([[PX-3,PY],[PX-8,PY-6],[PX-7,PY+1]]),'#c04fd0');paint(poly([[PX+3,PY],[PX+7,PY-6],[PX+6,PY+1]]),'#c04fd0');paint(poly([[PX-3,PY-6],[PX-3.4,PY-10],[PX-1,PY-7]]),'#ffd23b',false);paint(poly([[PX+3,PY-6],[PX+3.4,PY-10],[PX+1,PY-7]]),'#ffd23b',false);paint(ell(PX,PY+1,3.4,3.4),'#4fbf7a');paint(ell(PX,PY-4,4.2,3.8),'#4fbf7a');paint(ell(PX,PY+1.8,1.9,2.2),'#fff0a8',false);eyes2(1.8,PY-4.6);paint(rect(PX-1.4,PY-2.4,.8,.8),'#23242e',false);paint(rect(PX+.8,PY-2.4,.8,.8),'#23242e',false);}
    }
  }
  /* a walking pet is drawn on its own canvas: just the pet and its outline */
  if(only==='pet'){petArt();if(s.border!=='none')dil(OUT);return g;}
  /* back items */
  if(s.back==='cape')paint(poly([[8,26],[24,26],[29,47],[3,47]]),'#b23a48');
  if(s.back==='quiver'){paint(poly([[21,22],[25,19],[28,31],[24,33]]),'#8a5a2b');pix([[25,17,'#f4f2ec'],[26,17,'#f4f2ec'],[25,18,'#f4f2ec'],[27,18,'#f4f2ec'],[26,19,'#f4f2ec']]);}
  function both(pts,c){paint(poly(pts),c);paint(poly(pts.map(function(p){return [32-p[0],p[1]];})),c);}
  if(s.back==='angel'){both([[11,28],[3,19],[-2,20],[0,25],[-2,28],[1,31],[0,35],[5,35],[11,34]],'#ffffff');}
  if(s.back==='devil'){both([[11,28],[4,21],[-2,22],[-1,35],[2,32],[4,36],[7,32],[11,35]],'#5b3a78');}
  if(s.back==='fairy'){both([[11,29],[2,17],[-2,21],[-1,29],[5,32],[11,31]],'#9fe3f0');both([[11,32],[2,33],[0,40],[4,43],[10,36]],'#f5b6dc');}
  if(s.back==='backpack'){paint(rrect(4,25,24,15,4),acc);}
  if(s.back==='jetpack'){both([[4,25],[10,25],[10,40],[4,40]],'#aab3c2');both([[5,40],[9,40],[7,47]],'#f2a02b');both([[6,40],[8,40],[7,43]],'#fff4b8');}
  if(s.back==='tail'){[[22,40,26,42],[26,42,29,39],[29,39,29,33],[29,33,31,30]].forEach(function(q){paint(seg(q[0],q[1],q[2],q[3],2.6),HC,false);});}
  if(s.back==='foxtail'){paint(poly([[21,38],[27,28],[32,26],[34,33],[31,42],[24,44]]),'#e8812f');paint(poly([[27,28],[32,26],[33,30],[29,31]]),'#f9f4e8');}
  if(hairBack)paint(hairBack,HC);
  if(s.back==='backpack'){paint(rrect(10,23,12,3,1),sh(acc,-20));}
  /* body */
  var cls=s.cls,P_,B_,SL,CF,GL,BELT,TOP=cl;
  if(cls==='student'){P_='#3d4663';B_='#5a3a28';SL=cl;CF='#f4f2ec';GL=sk;BELT=sh(cl,-35);}
  else if(cls==='ranger'){P_='#6b4a2a';B_='#4a3320';SL=sh(cl,-14);CF='#6b4a2a';GL='#6b4a2a';BELT='#4a3320';}
  else if(cls==='knight'){P_='#68748a';B_='#3d4558';SL='#8f99aa';CF='#68748a';GL='#68748a';BELT='#4a3a2a';TOP='#aab3c2';}
  else if(cls==='wizard'||cls==='cleric'){SL=sh(cl,-14);CF=acc;GL=sk;BELT=acc;}
  else{
    var L={tee:['#4a6fa5','#e9e4d8',sk,sk],hoodie:['#3d4663','#e9e4d8',cl,sh(cl,-20)],sport:[sh(cl,-30),'#d9452e',sk,sk],dress:[sk,'#d9577a',sk,sk],
      labcoat:['#3d4663','#2b2f3a','#f4f2ec','#dcd8cc'],chef:['#3d4663','#2b2f3a','#f4f2ec','#dcd8cc'],ninja:['#2b2f3a','#1d1b26','#2b2f3a',acc],
      pirate:['#3d2f28','#2b1d16','#f4f2ec',acc],astronaut:['#dfe3ea','#8f99aa','#dfe3ea',acc],hero:[cl,acc,cl,acc],suit:['#23242e','#15151c','#23242e','#f4f2ec'],pyjamas:[cl,acc,cl,'#f4f2ec']}[cls];
    P_=L[0];B_=L[1];SL=L[2];CF=L[3];GL=cls==='astronaut'?'#8f99aa':cls==='hero'?acc:sk;BELT=acc;}
  if(!robe){
    paint(rect(11,38,4,6),P_);paint(rect(17,38,4,6),P_);
    if(cls==='student'){paint(rect(11,42,4,2),'#f4f2ec',false);paint(rect(17,42,4,2),'#f4f2ec',false);}
    paint(rrect(9.5,43.5,6,3.6,1.6),B_);paint(rrect(16.5,43.5,6,3.6,1.6),B_);
    pix([[11,44],[12,44],[18,44],[19,44]],sh(B_,38));
  }
  var hold=s.hand!=='none';
  paint(rrect(7,27,3,11,1.2),SL);paint(rect(7,35,3,2),CF,false);
  if(hold){paint(seg(23,28.5,27.2,36.5,3.2),SL);paint(seg(26.2,34.6,27.2,36.5,3.2),CF,false);}
  else{paint(rrect(22,27,3,11,1.2),SL);paint(rect(22,35,3,2),CF,false);}
  if(cls==='tee'||cls==='sport'){paint(rrect(7,27,3,4,1),cl);if(hold)paint(seg(23,28.5,24.5,31.4,3.2),cl,false);else paint(rrect(22,27,3,4,1),cl);}
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
  }else if(cls!=='student'&&cls!=='knight'){
    var top={labcoat:'#f4f2ec',chef:'#f4f2ec',ninja:'#2b2f3a',astronaut:'#dfe3ea',suit:'#23242e'}[cls]||cl;
    paint(rrect(10,26,12,13,2),top);
    if(cls==='tee'){paint(poly([[13,26],[19,26],[16,28.5]]),sk,false);paint(poly([[16,30],[17,32.5],[19.5,32.5],[17.5,34],[18.5,36.5],[16,35],[13.5,36.5],[14.5,34],[12.5,32.5],[15,32.5]]),acc,false);}
    if(cls==='hoodie'){paint(poly([[10,26],[22,26],[16,31]]),sh(cl,-18),false);paint(seg(14,29,14,34,.9),'#f4f2ec',false);paint(seg(18,29,18,34,.9),'#f4f2ec',false);paint(rrect(12,34,8,4,1),sh(cl,-15),false);}
    if(cls==='sport'){paint(rect(10,29,12,2),acc,false);paint(rect(15,32,2,5),'#f4f2ec',false);paint(rect(14,33,1,1),'#f4f2ec',false);paint(rect(11,41,4,3),'#f4f2ec',false);paint(rect(17,41,4,3),'#f4f2ec',false);}
    if(cls==='dress'){paint(poly([[11,33],[21,33],[26,43],[6,43]]),cl);paint(rect(10,32,12,2),acc,false);paint(rect(7,41,18,2),sh(cl,22),false);paint(ell(16,33,1.6,1.6),'#f4f2ec',false);}
    if(cls==='labcoat'){paint(poly([[10,36],[15,36],[13,44],[8,44]]),'#f4f2ec');paint(poly([[17,36],[22,36],[24,44],[19,44]]),'#f4f2ec');paint(poly([[13,26],[19,26],[16,34]]),cl,false);paint(rect(18,31,3,3),'#dcd8cc',false);paint(rect(19,29,1,3),'#4a7bd6',false);}
    if(cls==='chef'){[29,32,35].forEach(function(y){paint(ell(13.5,y,.7,.7),'#2b2f3a',false);paint(ell(18.5,y,.7,.7),'#2b2f3a',false);});paint(poly([[12,26],[20,26],[16,30]]),'#d9452e',false);}
    if(cls==='ninja'){paint(seg(11,27,21,37,2),'#454a5c',false);paint(rect(10,35,12,2),acc,false);paint(rect(19,36,2,5),acc,false);}
    if(cls==='pirate'){paint(poly([[13,26],[19,26],[16,34]]),'#f4f2ec',false);paint(rect(10,35,12,3),'#2b1d16',false);paint(rect(14.5,35,3,3),'#f2c13b',false);paint(seg(11,27,13,34,1.4),acc,false);paint(seg(21,27,19,34,1.4),acc,false);}
    if(cls==='astronaut'){paint(rrect(12.5,29,7,6,1),'#aab3c2',false);paint(ell(14.5,31,1,1),'#d9452e',false);paint(ell(17.5,31,1,1),'#2fa764',false);paint(rect(13.5,33,5,1),acc,false);paint(rect(10,26,12,2),'#8f99aa',false);}
    if(cls==='hero'){paint(poly([[12,28],[20,28],[16,35]]),acc,false);paint(poly([[17,28.5],[14.5,32],[16,32],[15,34],[18,30.8],[16.3,30.8]]),'#f4f2ec',false);paint(rect(10,36,12,2),acc,false);}
    if(cls==='suit'){paint(poly([[13,26],[19,26],[16,34]]),'#f4f2ec',false);paint(poly([[13,26.5],[16,28],[13,29.5]]),'#d9452e',false);paint(poly([[19,26.5],[16,28],[19,29.5]]),'#d9452e',false);paint(ell(16,34,.7,.7),'#f4f2ec',false);paint(ell(16,36.5,.7,.7),'#f4f2ec',false);}
    if(cls==='pyjamas'){[[12,29],[19,29],[15,33],[12,36],[19,36]].forEach(function(p){paint(ell(p[0],p[1],1,1),'#f4f2ec',false);});paint(poly([[12.5,26],[19.5,26],[16,29]]),acc,false);}
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
  if(s.back==='backpack'){paint(rect(10.5,27,1.6,9),sh(acc,-20),false);paint(rect(19.9,27,1.6,9),sh(acc,-20),false);}
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
    if(t==='star'){paint(ell(cx,cy,2.7,3.3),K,false);paint(ell(cx,cy+.1,2.1,2.7),KI,false);paint(poly([[cx,cy-2.4],[cx+.7,cy-.5],[cx+2.2,cy],[cx+.7,cy+.7],[cx,cy+2.6],[cx-.7,cy+.7],[cx-2.2,cy],[cx-.7,cy-.5]]),'#fff4b8',false);}
    if(t==='heart'){paint(ell(cx-1.3,cy-.6,1.7,1.7),'#e8436f',false);paint(ell(cx+1.3,cy-.6,1.7,1.7),'#e8436f',false);paint(poly([[cx-3,cy],[cx+3,cy],[cx,cy+3.4]]),'#e8436f',false);paint(ell(cx-1.4,cy-1,.6,.6),'#ffffff',false);}
    if(t==='cat'){paint(ell(cx,cy,2.6,2.9),K,false);paint(ell(cx,cy+.1,2.1,2.4),'#f2d23b',false);paint(ell(cx,cy+.1,.6,2.2),K,false);paint(ell(cx-1*sg,cy-1,.5,.5),'#ffffff',false);}
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
  if(mo==='tongue'){paint(seg(13.4,22.6,18.6,22.6,1.1),K,false);paint(rrect(15,23,3,2.8,1.4),'#e8648a',false);}
  if(mo==='cat'){paint(seg(13,22.4,14.5,23.6,1),K,false);paint(seg(14.5,23.6,16,22.4,1),K,false);paint(seg(16,22.4,17.5,23.6,1),K,false);paint(seg(17.5,23.6,19,22.4,1),K,false);}
  if(mo==='fangs'){paint(seg(13.4,22.5,18.6,22.5,1.1),K,false);paint(poly([[13.8,22.8],[15.4,22.8],[14.6,24.8]]),'#ffffff',false);paint(poly([[16.6,22.8],[18.2,22.8],[17.4,24.8]]),'#ffffff',false);}
  function ring(cx,cy,r,c){for(var a=0;a<6.29;a+=.22)paint(ell(cx+Math.cos(a)*r,cy+Math.sin(a)*r*1.05,.45,.45),c,false);}
  function face(){var f=s.face;
    if(f==='glasses'){[10.5,21.5].forEach(function(x){paint(rect(x-3.5,15.5,7,1),K,false);paint(rect(x-3.5,21,7,1),K,false);paint(rect(x-3.5,16,1,5),K,false);paint(rect(x+2.5,16,1,5),K,false);});paint(rect(14,17,4,1),K,false);}
    if(f==='round'){ring(10.5,18.4,3.6,'#8a5a2b');ring(21.5,18.4,3.6,'#8a5a2b');paint(rect(14,17.5,4,1),'#8a5a2b',false);}
    if(f==='shades'){paint(rrect(6.5,15.5,8.5,6,2),'#1d1b26',false);paint(rrect(17,15.5,8.5,6,2),'#1d1b26',false);paint(rect(6,16,20,1),'#1d1b26',false);paint(seg(8,19,10,17,1),'#8fa0c8',false);paint(seg(18.5,19,20.5,17,1),'#8fa0c8',false);}
    if(f==='starshades'){[10.5,21.5].forEach(function(x){paint(poly([[x,13.5],[x+1.6,16.6],[x+5,17.2],[x+2.6,19.6],[x+3.1,23],[x,21.4],[x-3.1,23],[x-2.6,19.6],[x-5,17.2],[x-1.6,16.6]]),'#f2c13b',false);paint(ell(x,18.8,2,2),'#d9577a',false);});paint(rect(14,18,4,1),'#f2c13b',false);}
    if(f==='patch'){paint(seg(5,11,26,22,1),'#1d1b26',false);paint(ell(21.5,18.4,3.6,3.6),'#1d1b26',false);}
    if(f==='blush'){paint(ell(7.8,21.8,2.2,1.2),'#f08a8a',false);paint(ell(24.2,21.8,2.2,1.2),'#f08a8a',false);}
    if(f==='freckles'){[[7,21],[9,22],[11,21],[21,21],[23,22],[25,21]].forEach(function(p){paint(ell(p[0],p[1],.7,.7),sh(sk,-45),false);});}
    if(f==='bandaid'){paint(seg(21,23.5,25.5,20.5,2.4),'#e9b98a',false);paint(ell(23.2,22,.8,.8),'#c9905f',false);}
    if(f==='mustache'){paint(ell(13.8,22,2.6,1.2),HB,false);paint(ell(18.2,22,2.6,1.2),HB,false);}
    if(f==='mask'){paint(AND(ell(16,18,9,8.5),rect(0,20.5,40,10)),'#2b2f3a');paint(seg(5,19,8,21,1),'#2b2f3a',false);paint(seg(27,19,24,21,1),'#2b2f3a',false);}
    if(f==='monocle'){ring(21.5,18.4,3.8,'#f2c13b');paint(seg(25,20,27,29,.7),'#f2c13b',false);}
  }
  /* hair front, hats */
  var cut=HATCUT[s.head];
  if(hairFront){var hf=cut!==undefined?AND(hairFront,yge(cut)):hairFront;paint(hf,HC);if(!cut){pix([[10,3],[11,3],[12,3],[13,3],[9,4],[10,4]],sh(HC,34));}}
  if(s.hair==='ponytail')paint(ell(26.5,10,1.6,1.6),acc,false);
  if(s.hair==='twintails'){paint(ell(5,11,1.7,1.7),acc,false);paint(ell(27,11,1.7,1.7),acc,false);}
  if(s.hair==='braids'){paint(rect(3,33,3,2),acc,false);paint(rect(27,33,3,2),acc,false);}
  face();
  var hd=s.head;
  if(hd==='cap'){paint(AND(ell(16,12,12.5,11),rect(0,-20,40,33)),cl);paint(poly([[4,12],[28,12],[30,15],[2,15]]),sh(cl,-20));paint(ell(16,1.5,1.6,1.6),sh(cl,-25),false);}
  if(hd==='headband'){paint(AND(ell(16,15,11.8,10.8),rect(0,8,40,3)),acc);paint(ell(27,10,2.2,2.2),acc);paint(poly([[26,11],[31,15],[29,16],[25,12]]),sh(acc,-15));}
  if(hd==='hood'){paint(AND(ell(16,11,12,9.5),rect(0,-20,40,31)),'#2fa764');paint(ell(16,11.5,15.5,3),'#1d7a48');paint(poly([[22,6],[30,-5],[31,0],[26,8]]),'#d9452e');}
  if(hd==='circlet'){paint(AND(ell(16,15,11.8,10.8),rect(0,8,40,2)),'#f2c13b');paint(ell(16,8.5,1.8,1.8),'#4a7bd6',false);}
  if(hd==='crown'){paint(rect(8,5,16,4),'#f2c13b');paint(poly([[8,5],[8,-2],[12,3],[12,5]]),'#f2c13b');paint(poly([[12,5],[16,-4],[20,5]]),'#f2c13b');paint(poly([[20,5],[20,3],[24,-2],[24,5]]),'#f2c13b');pix([[11,7],[20,7]],'#4a7bd6');pix([[15,7],[16,7]],'#d9452e');}
  if(hd==='helm'){paint(AND(ell(16,13,13,12.5),rect(0,-20,40,34)),'#aab3c2');paint(rect(3,12,26,2),'#7d8798',false);paint(rect(3,13,4,10),'#8f99aa');paint(rect(25,13,4,10),'#8f99aa');paint(rect(15,14,2,6),'#8f99aa',false);paint(poly([[14,-1],[21,-5],[26,5],[17,3]]),'#d9452e');}
  if(hd==='wizard'){paint(ell(16,10,15.5,3.5),sh(cl,-12));paint(poly([[7,10],[12,-3],[16,-9],[20,-5],[25,10]]),cl);paint(poly([[16,-9],[24,-8],[24,-3],[19,-5]]),cl);paint(AND(poly([[7,10],[12,-3],[16,-9],[20,-5],[25,10]]),rect(0,5,40,3)),acc,false);pix([[14,-1],[17,-5]],acc);}
  if(hd==='catears'){paint(poly([[4,9],[5,-5],[14,3]]),HC);paint(poly([[28,9],[27,-5],[18,3]]),HC);paint(poly([[6,6],[6.5,-1],[11,3]]),'#f5a6b8',false);paint(poly([[26,6],[25.5,-1],[21,3]]),'#f5a6b8',false);}
  if(hd==='bunny'){paint(ell(10,-1,3,8),'#f4f2ec');paint(ell(22,-1,3,8),'#f4f2ec');paint(ell(10,-1,1.3,5.5),'#f5a6b8',false);paint(ell(22,-1,1.3,5.5),'#f5a6b8',false);paint(AND(ell(16,15,11.8,10.8),rect(0,6,40,2)),'#f4f2ec');}
  if(hd==='beanie'){paint(AND(ell(16,11,12.5,11),rect(0,-20,40,31)),acc);paint(rect(4,9,24,4),sh(acc,-22));paint(ell(16,-1,3,3),'#f4f2ec');}
  if(hd==='headphones'){for(var an=3.3;an<=6.13;an+=.09)paint(ell(16+Math.cos(an)*12.5,15+Math.sin(an)*13.5,1.2,1.2),'#2b2f3a',false);paint(rrect(1,13,5,9,2),acc);paint(rrect(26,13,5,9,2),acc);}
  if(hd==='flower'){[[25,4],[28,6],[27,9],[23,9],[22,6]].forEach(function(p){paint(ell(p[0],p[1],2.2,2.2),'#f58ab0');});paint(ell(25,7,1.8,1.8),'#f2c13b',false);}
  if(hd==='bow'){paint(poly([[16,4],[8,-2],[8,8]]),acc);paint(poly([[16,4],[24,-2],[24,8]]),acc);paint(ell(16,4,2.4,2.4),sh(acc,-22));}
  if(hd==='halo'){for(var an2=0;an2<6.29;an2+=.1)paint(ell(16+Math.cos(an2)*8,-3+Math.sin(an2)*2.6,.9,.9),'#ffd93b',false);}
  if(hd==='horns'){paint(poly([[7,8],[4,-3],[9,0],[12,5]]),'#d9452e');paint(poly([[25,8],[28,-3],[23,0],[20,5]]),'#d9452e');}
  if(hd==='pirate'){paint(poly([[1,11],[7,0],[16,-5],[25,0],[31,11],[16,7]]),'#23242e');paint(seg(2,10.5,16,7,1.2),'#f2c13b',false);paint(seg(16,7,30,10.5,1.2),'#f2c13b',false);paint(ell(16,1,2.4,2.2),'#f4f2ec',false);pix([[15,1],[17,1]],'#23242e');}
  if(hd==='chef'){paint(ell(10,-1,5,4.5),'#ffffff');paint(ell(22,-1,5,4.5),'#ffffff');paint(ell(16,-3,6,5),'#ffffff');paint(rect(8,0,16,10),'#ffffff');paint(rect(8,7,16,1),'#cfcabd',false);}
  if(hd==='gradcap'){paint(AND(ell(16,11,11,8),rect(0,-20,40,31)),'#23242e');paint(poly([[16,-5],[33,2],[16,9],[-1,2]]),'#2f3140');paint(seg(16,2,28,5,1),'#f2c13b',false);paint(rect(27,5,2,8),'#f2c13b',false);}
  if(hd==='santa'){paint(poly([[5,11],[10,0],[19,-5],[28,0],[31,9],[27,8],[25,4],[27,11]]),'#d9452e');paint(rrect(3,8,26,5,2),'#ffffff');paint(ell(30,10,3,3),'#ffffff');}
  if(hd==='frog'){paint(AND(ell(16,11,13,11),rect(0,-20,40,32)),'#5cbf62');paint(ell(8,0,4,4),'#5cbf62');paint(ell(24,0,4,4),'#5cbf62');paint(ell(8,0,2.4,2.4),'#ffffff',false);paint(ell(24,0,2.4,2.4),'#ffffff',false);paint(ell(8,.3,1.2,1.2),K,false);paint(ell(24,.3,1.2,1.2),K,false);paint(seg(11,7,21,7,1),'#2f7a38',false);}
  /* held items */
  if(s.off==='shield'){paint(poly([[0,28],[11,28],[11,41],[5.5,47],[0,41]]),'#8f99aa');paint(poly([[2,30],[9,30],[9,40],[5.5,44],[2,40]]),acc,false);pix([[5,32],[5,33],[5,34],[5,35],[5,36],[5,37],[3,34],[4,34],[6,34],[7,34]],'#f4f2ec');}
  if(s.off==='potion'){paint(rect(6,31,3,3),'#cfe0ff',false);paint(rect(6,29,3,2),'#8a5a2b',false);paint(ell(7.5,38,4.2,3.6),'#d9577a');pix([[5,37]],'#ff9fb8');}
  if(s.off==='ball'){paint(ell(5,40,4.8,4.8),'#ffffff');paint(ell(5,40,1.7,1.7),'#23242e',false);[[1.5,38],[8.5,38],[3,43.5],[7,43.5]].forEach(function(p){paint(ell(p[0],p[1],.9,.9),'#23242e',false);});}
  if(s.off==='teddy'){paint(ell(2,31,2,2),'#a8703f');paint(ell(9,31,2,2),'#a8703f');paint(ell(5.5,34,4.5,4),'#b9814a');paint(ell(5.5,41,3.8,4),'#a8703f');paint(ell(5.5,35.5,2,1.5),'#ecd0a8',false);pix([[4,33],[7,33],[5,35]],'#23242e');}
  if(s.off==='boba'){paint(seg(7,33,9,25,1.2),'#e8436f',false);paint(poly([[2,32],[11,32],[10,43],[3,43]]),'#e9c9a0');paint(rect(2,31,9,2),'#ffffff',false);[[4,40],[6,41],[8,40],[5,38],[7,38]].forEach(function(p){paint(ell(p[0],p[1],.9,.9),'#4a2e1a',false);});}
  if(s.off==='lantern'){paint(rect(8,38,1,4),'#6b6478',false);paint(rrect(4.5,41.5,8,7,2.5),'#d9452e');paint(rrect(6.5,43,4,4,1.5),'#ffd97a',false);paint(rect(5.5,41,6,1.4),'#f2c13b',false);paint(rect(5.5,47.6,6,1.2),'#f2c13b',false);}
  if(s.off==='apple'){paint(ell(7,38,3.8,3.8),'#d9452e');paint(rect(7,33,1,2),'#6b4226',false);paint(ell(9,33.5,1.6,1),'#2fa764',false);}
  if(s.off==='gem'){paint(poly([[2,34],[5,31],[10,31],[13,34],[7.5,43]]),'#5fd3e8');paint(poly([[5,34],[10,34],[7.5,42]]),'#a8ecf5',false);pix([[4,32],[5,32]],'#ffffff');}
  var it=s.hand;
  var GRIP={sword:[24,42],staff:[26,38],wand:[24.6,37.4],bow:[30.4,31],balloon:[24,38],lollipop:[24.2,38],pencil:[26,38],flowers:[24.6,38.4],icecream:[26,39],guitar:[23.4,33],flag:[24.8,38],torch:[24.8,38],racket:[24.3,38],trophy:[27,37],lightsaber:[23.2,40],book:[25,39]}[it];
  if(GRIP){HX=28-GRIP[0];HY=38-GRIP[1];}
  if(it==='sword'){paint(rect(23,22,2,15),'#e2e7f0');paint(poly([[23,22],[25,22],[24,19]]),'#e2e7f0',false);paint(rect(20,36,8,1),'#f2c13b',false);paint(rect(23,41,2,2),'#f2c13b',false);}
  if(it==='staff'){paint(rect(25,9,2,39),'#8a5a2b');paint(ell(26,6,3.6,3.6),acc);pix([[25,5]],'#fff4b8');}
  if(it==='wand'){paint(seg(24,38,30,30,1.8),'#8a5a2b',false);paint(poly([[30,26],[31,29],[34,30],[31,31],[30,34],[29,31],[26,30],[29,29]]),'#fff4b8',false);}
  if(it==='bow'){for(var a=-1.3;a<=1.3;a+=.1)paint(ell(24+Math.cos(a)*6.5,31+Math.sin(a)*11,1.1,1.1),'#8a5a2b',false);paint(seg(24+Math.cos(1.3)*6.5,31-11*.96,24+Math.cos(1.3)*6.5,31+11*.96,.9),'#f4f2ec',false);}
  if(it==='balloon'){paint(seg(24,38,29,16,.7),'#6b6478',false);paint(ell(27,9,5.2,7),'#e8436f');paint(poly([[27,16],[29,16],[28,18]]),'#e8436f',false);paint(ell(26,6,1.2,1.8),'#ffb0c4',false);}
  if(it==='lollipop'){paint(seg(24,39,27,29,1.2),'#f4f2ec',false);paint(ell(28,26,5,5),'#e8436f');paint(ell(28,26,3.2,3.2),'#ffffff',false);paint(ell(28,26,1.6,1.6),'#e8436f',false);}
  if(it==='pencil'){paint(rect(24,18,4,24),'#f2c13b');paint(poly([[24,18],[28,18],[26,12]]),'#e9c9a0',false);paint(poly([[25,15],[27,15],[26,12]]),'#2b2f3a',false);paint(rect(24,42,4,2),'#aab3c2',false);paint(rect(24,44,4,3),'#f58ab0');}
  if(it==='flowers'){paint(seg(24,40,27,29,1.2),'#2fa764',false);paint(ell(24.8,34,2,1),'#2fa764',false);[[27,23],[31,26],[30,30],[24,30],[23,26]].forEach(function(p){paint(ell(p[0],p[1],2.5,2.5),acc);});paint(ell(27,27,2.2,2.2),'#fff4b8',false);}
  if(it==='icecream'){paint(poly([[23,32],[31,32],[26,42]]),'#d9a05b');paint(ell(27,30,4.5,3.5),'#f58ab0');paint(ell(27,26,3.8,3.2),'#fff0c8');paint(ell(27,22.5,1.5,1.5),'#d9452e',false);}
  if(it==='guitar'){paint(seg(21,36,31,22,2),'#6b4226',false);paint(ell(19,40,5,5),'#d9822f');paint(ell(22.5,35.5,3.8,3.8),'#d9822f');paint(ell(20.5,38,1.8,1.8),'#4a2e1a',false);paint(rect(29,20,4,3),'#4a2e1a',false);}
  if(it==='flag'){paint(rect(24,10,1.6,36),'#8a5a2b');paint(poly([[25,10],[34,12],[31,16],[34,21],[25,19]]),acc);}
  if(it==='torch'){paint(rect(23.5,28,2.6,14),'#8a5a2b');paint(rect(22.5,26,4.6,3),'#6b6478');paint(poly([[22,26],[23,21],[25,23],[26,16],[29,23],[27,26]]),'#f2802b',false);paint(ell(25,23.5,1.4,2.2),'#ffe27a',false);}
  if(it==='racket'){paint(seg(24,39,27,31,1.8),'#2b2f3a',false);paint(ell(29,24,5,7),'#d9452e');paint(ell(29,24,3.5,5.5),'#f4f2ec',false);[22,24,26].forEach(function(y){paint(rect(26,y,6,.6),'#9aa0b0',false);});}
  if(it==='trophy'){paint(poly([[21,27],[33,27],[31,34],[28,36],[26,36],[23,34]]),'#ffd23b');paint(rect(26,36,2,4),'#e0a820');paint(rect(23,40,8,3),'#8a5a2b');paint(ell(27,31,1.5,1.5),'#fff4b8',false);}
  if(it==='lightsaber'){paint(seg(24,36,31,8,3.4),acc,false);paint(seg(24,36,31,8,1.4),'#ffffff',false);paint(seg(22.8,41,24,36,2.4),'#8f99aa',false);}
  if(it==='book'){paint(rrect(21,32,8,8,1),acc);paint(rect(28,33,1,6),'#f4f2ec',false);paint(rect(22,33,1,6),sh(acc,-25),false);}
  HX=0;HY=0;
  /* hands */
  paint(ell(8.5,38.5,2.3,2.3),GL,false);
  if(hold){paint(ell(28,38,2.5,2.4),GL,false);paint(rect(26.5,38,3.5,.5),sh(GL,-28),false);}
  else paint(ell(23.5,38.5,2.3,2.3),GL,false);
  petArt();
  /* outline */
  function dil(col){var add=[];for(var y=0;y<PH;y++)for(var x=0;x<PW;x++){if(g[y][x])continue;var n=false;for(var j=-1;j<=1&&!n;j++)for(var i=-1;i<=1;i++){var yy=y+j,xx=x+i;if(yy>=0&&xx>=0&&yy<PH&&xx<PW&&g[yy][xx]){n=true;break;}}if(n)add.push([x,y]);}add.forEach(function(p){g[p[1]][p[0]]=col;});}
  if(s.border!=='none')dil(OUT);
  if(s.border==='sticker'){dil('#ffffff');dil('#ffffff');}
  for(var sy=0;sy<2;sy++)for(var sx=7*S;sx<=24*S;sx++){var px=sx+PADX,py=(OY+48)*S+sy+PAD;if(!g[py][px])g[py][px]='rgba(0,0,0,.2)';}
  return g;
}
var VIEWS={full:{x:0,y:0,w:W*2+2*PADX,h:H*2+2*PAD},pet:{x:55,y:86,w:32,h:34},head:{x:PADX-2,y:PAD+(OY-9)*2,w:60,h:76}};
function draw(cv,s,view,blink,dy){
  var v=VIEWS[view],g=compose(s,blink,dy||0,view==='pet'?'pet':'');cv.width=v.w;cv.height=v.h;var ctx=cv.getContext('2d');ctx.clearRect(0,0,v.w,v.h);
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
