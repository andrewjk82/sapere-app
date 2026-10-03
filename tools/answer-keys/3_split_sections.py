import json, re
d=json.load(open('parsed.json'))
pages=d['pages']; FOOT=762
def heads(cw):
    hs=[]
    for w in cw:
        if w[3]-w[1]<12: continue
        same=[v for v in cw if abs(v[1]-w[1])<2 and v[0]>w[2] and v[0]-w[2]<15]
        nxt=min(same,key=lambda v:v[0]) if same else None
        t=w[4]
        if t=='Exercise' and nxt and re.fullmatch(r'\d+[A-Z]',nxt[4]): hs.append((w[1],w[3],'EX',nxt[4]))
        elif t in('Review','Challenge') and nxt and nxt[4] in ('exercise','execrise'): hs.append((w[1],w[3],t.upper(),''))
        elif t=='Chapter' and nxt and re.fullmatch(r'\d+',nxt[4]): hs.append((w[1],w[3],'CH',nxt[4]))
        elif re.fullmatch(r'\d+[A-Z]',t) and nxt and nxt[4][:1].isupper(): hs.append((w[1],w[3],'EX',t))
    return sorted(hs)
segs=[]; chap=None; key=None
for pi,p in enumerate(pages[:103]):
    W=p['W']; words=[w for w in p['words'] if w[1]>70 and w[3]<FOOT]
    R0=320 if (pi+1)%2==1 else 298
    mid=R0-6
    for col in ('L','R'):
        cw=[w for w in words if (w[0]<mid)==(col=='L')]
        if not cw: continue
        top=min(w[1] for w in cw); bot=max(w[3] for w in cw)
        x0=min(w[0] for w in cw); x1=max(w[2] for w in cw)
        hs=heads(cw)
        bounds=[h[0] for h in hs]+[bot]
        if (not hs or hs[0][0]-top>4) and key:
            segs.append([key,pi+1,col,top,bounds[0],x0,x1])
        for i,h in enumerate(hs):
            y0,y1,kind,code=h
            if kind=='CH': chap=code; key=None; continue
            key=code if kind=='EX' else f'{chap}{kind}'
            segs.append([key,pi+1,col,y0,bounds[i+1],x0,x1])
segs=[s for s in segs if s[4]-s[3]>3]
json.dump(segs,open('segs.json','w'))
from collections import OrderedDict
order=OrderedDict()
for s in segs: order.setdefault(s[0],[]).append(s)
print(len(order),'keys')
for k,v in order.items():
    if len(v)>3 or k in('1A','1C','1REVIEW','2A','10A','10B','10C','21A','21B','20E'): print(k, [(s[1],s[2],round(s[3]),round(s[4])) for s in v])
