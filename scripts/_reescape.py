import io, glob, re
setre = re.compile(r'(?<![\\A-Za-z0-9^_}])\{((?:[^{}]|\([^()]*\))*,(?:[^{}]|\([^()]*\))*)\}')
tot = files = 0
for p in glob.glob('src/constants/*.js'):
    s = io.open(p, encoding='utf-8').read()
    s2, n = setre.subn(lambda m: '\\\\{' + m.group(1) + '\\\\}', s)
    if n:
        io.open(p, 'w', encoding='utf-8').write(s2)
        tot += n
        files += 1
print('re-escaped', tot, 'in', files)
