import re, json
html=open('bbox.html').read()
pages=[]
for pm in re.finditer(r'<page width="([\d.]+)" height="([\d.]+)">(.*?)</page>', html, re.S):
    W,H=float(pm.group(1)),float(pm.group(2))
    words=[(float(a),float(b),float(c),float(d),t) for a,b,c,d,t in re.findall(r'<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</word>', pm.group(3))]
    pages.append({'W':W,'H':H,'words':words})
print('pages',len(pages), 'empty', [i+1 for i,p in enumerate(pages) if len(p['words'])<20])
# headings
heads=[]
for pi,p in enumerate(pages):
    ws=sorted(p['words'],key=lambda w:(round(w[1]),w[0]))
    for i,w in enumerate(ws):
        t=w[4]
        nxt=[v for v in ws if abs(v[1]-w[1])<2 and v[0]>w[2] and v[0]-w[2]<15]
        nxt=min(nxt,key=lambda v:v[0]) if nxt else None
        if t=='Exercise' and nxt and re.fullmatch(r'\d+[A-Z]',nxt[4]): heads.append((pi+1,w[0],w[1],'EX',nxt[4],w[3]-w[1]))
        if t in('Review','Challenge') and nxt and nxt[4]=='exercise': heads.append((pi+1,w[0],w[1],t.upper(),'',w[3]-w[1]))
        if t=='Chapter' and nxt and re.fullmatch(r'\d+',nxt[4]) and (w[3]-w[1])>12: heads.append((pi+1,w[0],w[1],'CH',nxt[4],w[3]-w[1]))
json.dump({'pages':[{'W':p['W'],'H':p['H'],'words':p['words']} for p in pages],'heads':heads},open('parsed.json','w'))
from collections import Counter
print(Counter(h[3] for h in heads))
print('heading heights',sorted(set(round(h[5]) for h in heads)))
for h in heads[:40]: print(h[:5])
