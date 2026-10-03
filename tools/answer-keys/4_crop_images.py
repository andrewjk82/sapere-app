import json, os
from PIL import Image
from collections import OrderedDict
segs=json.load(open('segs.json')); d=json.load(open('parsed.json'))
S=150/72; TOP=72; BOT=760
order=OrderedDict()
for s in segs: order.setdefault(s[0],[]).append(s)
os.makedirs('out',exist_ok=True)
meta={}
for key,ss in order.items():
    crops=[]
    for k,pg,col,y0,y1,x0,x1 in ss:
        p=d['pages'][pg-1]; W=p['W']
        words=[w for w in p['words'] if w[1]>70 and w[3]<762]
        L0,R0=(85,320) if pg%2==1 else (63,298)
        L=[w for w in words if w[0]<R0-6]; R=[w for w in words if w[0]>=R0-6]
        if col=='L': cx0,cx1=L0-12,R0-3
        else: cx0,cx1=R0-8,min(W-6,R0+262)
        top=max(TOP,y0-5)
        colw=L if col=='L' else R
        colbot=max(w[3] for w in colw)
        bot=y1-4 if y1<colbot-1 else BOT
        if y0<=TOP+25: top=TOP  # continuation: include from column top
        im=Image.open(f'pages/p-{pg:03d}.png')
        cr=im.crop((int(cx0*S),int(top*S),int(cx1*S),int(bot*S))).convert('L')
        # erase the thin vertical column divider near either edge
        px=cr.load(); wpx,hpx=cr.size
        edge=range(max(0,wpx-30),wpx) if col=='L' else range(0,min(30,wpx))
        for x in edge:
            dark=sum(1 for y in range(0,hpx,2) if px[x,y]<140)
            if hpx>40 and dark>0.6*(hpx/2):
                for y in range(hpx): px[x,y]=255
        crops.append(cr)
    w=max(c.width for c in crops)
    # chunk into images <= 3000px tall
    chunks=[];cur=[];h=0
    for c in crops:
        if cur and h+c.height>3000: chunks.append(cur);cur=[];h=0
        cur.append(c);h+=c.height
    if cur: chunks.append(cur)
    files=[]
    for i,ch in enumerate(chunks):
        out=Image.new('L',(w,sum(c.height for c in ch)),'white');y=0
        for c in ch: out.paste(c,(0,y)); y+=c.height
        fn=f'out/{key}_{i}.webp'; out.save(fn,'WEBP',quality=60,method=6); files.append(fn)
    meta[key]=files
json.dump(meta,open('meta.json','w'),indent=0)
import glob
sizes=[os.path.getsize(f) for f in glob.glob('out/*.webp')]
print(len(meta),'keys',len(sizes),'images', round(sum(sizes)/1e6,2),'MB total, max',max(sizes)//1024,'KB')
big=sorted(((sum(os.path.getsize(f) for f in v),k) for k,v in meta.items()),reverse=True)[:5]; print(big)
