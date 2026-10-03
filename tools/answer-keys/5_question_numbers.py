import json,re
from collections import OrderedDict
segs=json.load(open('segs.json')); items=json.load(open('items.json'))
order=OrderedDict()
for s in segs: order.setdefault(s[0],[]).append(s)
bold=[i for i in items if i['font'].endswith('TimesLTStd-Bold') and re.fullmatch(r'\d{1,2}',i['s'].strip())]
res={}
for key,ss in order.items():
    nums=set()
    for k,pg,col,y0,y1,x0,x1 in ss:
        R0=320 if pg%2==1 else 298
        for b in bold:
            if b['p']!=pg: continue
            top=b['y']-b['h']
            if not (y0-2<=top<y1-1): continue
            if (b['x']<R0-6)!=(col=='L'): continue
            nums.add(int(b['s']))
    n=max(nums) if nums else 0
    res[key]={'n':n,'missing':[i for i in range(1,n+1) if i not in nums]}
json.dump(res,open('qnums.json','w'))
bad={k:v for k,v in res.items() if v['missing'] or v['n']==0}
print(len(res),'keys; with gaps/zero:',len(bad))
for k,v in bad.items(): print(k,v)
