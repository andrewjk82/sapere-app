#!/usr/bin/env python3
"""Sample parent weekly report (Jamie Chan, 16-22 Nov 2026) in English and Korean -> docs/sample-parent-weekly-report-jamie[-ko].html"""
T = {
 'en': dict(lang='en', title="Weekly report · Jamie Chan", pre="Jamie's week: 2 lessons, practice on 4 of 7 days, 5 homework topics due Tuesday.",
  kicker="Weekly report · 16 – 22 Nov", sub="Year 11 · Maths · Extension 1 &amp; Extension 2",
  intro="Hi, here is a summary of Jamie's week.",
  t_lessons="Lessons", t_hw="Homework due", t_days="Practice days", t_acc="Accuracy",
  s_lessons="Lessons &amp; what we covered", l1d="Tue 17 Nov", l1t="7:30 – 9:30 pm", l1h="Extension 2 · Chapter 3",
  l1="3A Polynomials and complex numbers<br>3B Powers of complex numbers<br>3C Trigonometric identities",
  l2d="Sun 22 Nov", l2t="6:30 – 8:30 pm", l2h="Extension 1 · Chapter 5",
  l2="5A Review of the exponential function base e<br>5B Differentiation involving exponential functions",
  s_hw="Homework", hw1="Ext 2 · 3A–3C", hw1s="Polynomials, powers of complex numbers, trig identities", hw2="Ext 1 · 5A–5B", hw2s="Exponential functions base e", due="Due Tue 24 Nov",
  s_prac="Online practice", dayn=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], goal="Questions answered each day · daily set is 15",
  q="Questions answered", qv="60 &nbsp;<span style=\"font-weight:600;color:#64748b;\">(21 correct)</span>", byday="Accuracy by day", study="Study time logged (Sat)", studyv="1 h 50 min",
  most="Most practised topics", tp=["9C Variance &amp; standard deviation","1H Limiting sum of a GP","8E Paying off a loan","16E Sum of sine and cosine"],
  s_book="Textbook progress", b1="Year 12 Extension 1", b2="Year 12 Extension 2", wk="+{n} topics this week", ofbook="of the book covered", topics="{a} of {b} topics",
  ch1=["Ch 4 Integration","Ch 5 Exponential functions","Ch 8 Motion and rates","Ch 9 Vectors"], ch2=["Ch 1 Complex numbers I","Ch 2 Proof","Ch 3 Complex numbers II"],
  bnote="Topics covered in lessons so far, per textbook. Current chapter in bold.",
  s_next="Next week", n1="Hand in homework <b>Ext 2 3A–3C</b> and <b>Ext 1 5A–5B</b> by Tuesday 24 Nov.", n2="Daily practice: keep going with the 15-question set. Sunday's 60% was the best day of the week.",
  cta="See Jamie's full results", foot="Sent to parents of Secret Study students · North Sydney NSW<br>Reply to this email if you have any questions.", out='docs/sample-parent-weekly-report-jamie.html'),
 'ko': dict(lang='ko', title="주간 리포트 · Jamie Chan", pre="Jamie의 한 주: 수업 2회, 7일 중 4일 연습, 화요일까지 숙제 5개.",
  kicker="주간 리포트 · 11월 16일 – 22일", sub="Year 11 · 수학 · Extension 1 &amp; Extension 2",
  intro="안녕하세요, Jamie의 이번 주 학습 내용을 정리해 드립니다.",
  t_lessons="수업", t_hw="마감 숙제", t_days="연습한 날", t_acc="정답률",
  s_lessons="수업 &amp; 배운 내용", l1d="11월 17일 (화)", l1t="오후 7:30 – 9:30", l1h="Extension 2 · 3장",
  l1="3A 다항식과 복소수<br>3B 복소수의 거듭제곱<br>3C 삼각함수 항등식",
  l2d="11월 22일 (일)", l2t="오후 6:30 – 8:30", l2h="Extension 1 · 5장",
  l2="5A 지수함수 e 복습<br>5B 지수함수의 미분",
  s_hw="숙제", hw1="Ext 2 · 3A–3C", hw1s="다항식, 복소수의 거듭제곱, 삼각함수 항등식", hw2="Ext 1 · 5A–5B", hw2s="지수함수 (밑 e)", due="11월 24일(화) 마감",
  s_prac="온라인 연습", dayn=['월','화','수','목','금','토','일'], goal="하루에 푼 문제 수 · 하루 기본 세트는 15문제",
  q="푼 문제 수", qv="60 &nbsp;<span style=\"font-weight:600;color:#64748b;\">(정답 21)</span>", byday="요일별 정답률", study="기록된 학습 시간 (토)", studyv="1시간 50분",
  most="가장 많이 푼 단원", tp=["9C 분산과 표준편차","1H 등비수열의 무한합","8E 대출 상환","16E 사인과 코사인의 합"],
  s_book="교재 진도", b1="Year 12 Extension 1", b2="Year 12 Extension 2", wk="이번 주 +{n}개 단원", ofbook="교재 진행률", topics="전체 {b}개 중 {a}개 완료",
  ch1=["4장 적분","5장 지수함수","8장 운동과 변화율","9장 벡터"], ch2=["1장 복소수 I","2장 증명","3장 복소수 II"],
  bnote="지금까지 수업에서 다룬 단원 기준, 교재별 진도입니다. 현재 진행 중인 장은 굵게 표시됩니다.",
  s_next="다음 주", n1="숙제 <b>Ext 2 3A–3C</b>와 <b>Ext 1 5A–5B</b>를 11월 24일(화)까지 제출해 주세요.", n2="매일 연습: 15문제 세트를 계속 이어가세요. 일요일 60%가 이번 주 최고 기록이었습니다.",
  cta="Jamie의 전체 결과 보기", foot="Secret Study 학부모님께 발송 · North Sydney NSW<br>궁금한 점은 이 메일에 답장해 주세요.", out='docs/sample-parent-weekly-report-jamie-ko.html'),
}
FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Apple SD Gothic Neo','Malgun Gothic',Helvetica,Arial,sans-serif"
def chip(t,bg,fg): return f'<span style="display:inline-block;background:{bg};color:{fg};font-size:11px;font-weight:800;padding:3px 9px;border-radius:99px;">{t}</span>'
def sec(t): return f'<div style="margin:34px 0 14px;"><div style="font-size:11.5px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#4f46e5;">{t}</div><div style="height:1px;background:#e5e7eb;margin-top:10px;"></div></div>'
def tile(v,l): return f'<td width="25%" style="padding:0 3px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f3ff;border-radius:14px;"><tr><td style="padding:14px 6px;text-align:center;"><div style="font-size:24px;font-weight:800;color:#4c1d95;">{v}</div><div style="font-size:11px;font-weight:700;color:#7c3aed;margin-top:2px;">{l}</div></td></tr></table></td>'
def bar(p,color='#4f46e5'):
    if p<=0: return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background:#e5e7eb;height:8px;border-radius:99px;font-size:0;line-height:0;">&nbsp;</td></tr></table>'
    if p>=100: return f'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background:{color};height:8px;border-radius:99px;font-size:0;line-height:0;">&nbsp;</td></tr></table>'
    return f'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td width="{p}%" style="background:{color};height:8px;border-radius:99px 0 0 99px;font-size:0;line-height:0;">&nbsp;</td><td style="background:#e5e7eb;height:8px;border-radius:0 99px 99px 0;font-size:0;line-height:0;">&nbsp;</td></tr></table>'
def row(label,p,val,color='#4f46e5',vcolor='#0f172a',bold=False):
    l=f'<b style="color:#0f172a;">{label}</b>' if bold else label
    return f'<tr><td width="42%" style="padding:6px 0;">{l}</td><td style="padding:6px 8px;">{bar(p,color)}</td><td width="56" align="right" style="padding:6px 0;font-weight:800;color:{vcolor};white-space:nowrap;">{val}</td></tr>'
def day(l,v):
    on=v is not None
    return f'<td align="center" width="14.28%" style="padding:0 2px;"><div style="font-size:11px;font-weight:700;color:#94a3b8;padding-bottom:6px;">{l}</div><div style="background:{"#4f46e5" if on else "#f1f5f9"};color:{"#fff" if on else "#cbd5e1"};border-radius:10px;padding:9px 0;font-size:13px;font-weight:800;">{v if on else "–"}</div></td>'
def book(L,name,pct,done,total,week,chapters):
    rows=''.join(row(*c) for c in chapters)
    return f'''<div style="margin-top:6px;padding:16px;border:1px solid #e5e7eb;border-radius:14px;margin-bottom:14px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="font-size:14px;font-weight:800;color:#4c1d95;">{name}</td><td align="right" style="font-size:12px;font-weight:800;color:#16a34a;white-space:nowrap;">{L['wk'].format(n=week)}</td></tr></table>
<div style="margin-top:8px;font-size:14px;color:#334155;"><b style="color:#0f172a;font-size:22px;">{pct}%</b> &nbsp;{L['ofbook']} <span style="color:#94a3b8;">· {L['topics'].format(a=done,b=total)}</span></div>
<div style="margin-top:8px;">{bar(pct)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;font-size:13px;color:#334155;">{rows}</table></div>'''
def build(L):
    days=''.join(day(n,v) for n,v in zip(L['dayn'],[None,15,None,None,15,15,15]))
    amber=chip(L['due'],'#fef3c7','#92400e')
    c1,c2=L['ch1'],L['ch2']; tp=L['tp']
    return f'''<!DOCTYPE html>
<html lang="{L['lang']}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="color-scheme" content="light only"><title>{L['title']}</title></head>
<body style="margin:0;padding:0;background:#f3f1fb;font-family:{FONT};color:#0f172a;word-break:keep-all;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">{L['pre']}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f3f1fb"><tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
<tr><td style="padding:0 4px 16px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="width:34px;height:34px;background:#7c3aed;border-radius:9px;text-align:center;vertical-align:middle;color:#fff;font-weight:800;font-size:16px;">S</td><td style="padding-left:10px;font-weight:800;font-size:15px;color:#1e1b4b;">Secret Study</td></tr></table></td></tr>
<tr><td style="background:#ffffff;border-radius:22px;overflow:hidden;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background:#4c1d95;padding:30px 32px 28px;">
<div style="font-size:11.5px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#c4b5fd;">{L['kicker']}</div>
<div style="font-size:26px;line-height:1.25;font-weight:800;color:#ffffff;margin-top:8px;">Jamie Chan</div>
<div style="font-size:14px;color:#ddd6fe;margin-top:4px;">{L['sub']}</div></td></tr></table>
<div style="padding:8px 32px 32px;">
<p style="margin:22px 0 0;font-size:15px;line-height:1.65;color:#334155;">{L['intro']}</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:22px;"><tr>{tile("2",L['t_lessons'])}{tile("5",L['t_hw'])}{tile("4/7",L['t_days'])}{tile("35%",L['t_acc'])}</tr></table>
{sec(L['s_lessons'])}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:14px;"><tr><td width="118" valign="top" style="font-size:13px;font-weight:800;color:#1e1b4b;line-height:1.5;">{L['l1d']}<br><span style="font-weight:600;color:#94a3b8;">{L['l1t']}</span></td><td valign="top" style="font-size:14px;line-height:1.6;color:#334155;"><b style="color:#0f172a;">{L['l1h']}</b><br>{L['l1']}</td></tr></table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td width="118" valign="top" style="font-size:13px;font-weight:800;color:#1e1b4b;line-height:1.5;">{L['l2d']}<br><span style="font-weight:600;color:#94a3b8;">{L['l2t']}</span></td><td valign="top" style="font-size:14px;line-height:1.6;color:#334155;"><b style="color:#0f172a;">{L['l2h']}</b><br>{L['l2']}</td></tr></table>
{sec(L['s_hw'])}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px;color:#334155;">
<tr><td style="padding:9px 0;border-bottom:1px solid #f1f5f9;"><b style="color:#0f172a;">{L['hw1']}</b><br><span style="font-size:12.5px;color:#64748b;">{L['hw1s']}</span></td><td align="right" valign="top" style="padding:9px 0;border-bottom:1px solid #f1f5f9;white-space:nowrap;">{amber}</td></tr>
<tr><td style="padding:9px 0;"><b style="color:#0f172a;">{L['hw2']}</b><br><span style="font-size:12.5px;color:#64748b;">{L['hw2s']}</span></td><td align="right" valign="top" style="padding:9px 0;white-space:nowrap;">{amber}</td></tr></table>
{sec(L['s_prac'])}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>{days}</tr><tr><td colspan="7" style="padding-top:8px;font-size:12px;color:#94a3b8;">{L['goal']}</td></tr></table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:18px;font-size:14px;color:#334155;">
<tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;">{L['q']}</td><td align="right" style="padding:8px 0;border-bottom:1px solid #f1f5f9;font-weight:800;color:#0f172a;">{L['qv']}</td></tr>
<tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;">{L['byday']}</td><td align="right" style="padding:8px 0;border-bottom:1px solid #f1f5f9;font-weight:800;color:#0f172a;">20% → 33% → 27% → <span style="color:#16a34a;">60%</span></td></tr>
<tr><td style="padding:8px 0;">{L['study']}</td><td align="right" style="padding:8px 0;font-weight:800;color:#0f172a;">{L['studyv']}</td></tr></table>
<div style="margin-top:20px;font-size:12px;font-weight:800;color:#64748b;letter-spacing:0.04em;">{L['most']}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:8px;font-size:13px;color:#334155;">
{row(tp[0],67,"2/3")}{row(tp[1],50,"1/2","#f59e0b","#b45309")}{row(tp[2],0,"0/3","#ef4444","#b91c1c")}{row(tp[3],0,"0/3","#ef4444","#b91c1c")}</table>
{sec(L['s_book'])}
{book(L,L['b1'],17,20,121,2,[(c1[0],90,"9/10"),(c1[1],29,"2/7","#4f46e5","#4f46e5",True),(c1[2],83,"5/6"),(c1[3],38,"3/8")])}
{book(L,L['b2'],20,11,56,3,[(c2[0],86,"6/7"),(c2[1],22,"2/9"),(c2[2],60,"3/5","#4f46e5","#4f46e5",True)])}
<div style="font-size:12px;color:#94a3b8;">{L['bnote']}</div>
{sec(L['s_next'])}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px;line-height:1.65;color:#334155;">
<tr><td width="22" valign="top" style="color:#7c3aed;font-weight:800;">1.</td><td style="padding-bottom:6px;">{L['n1']}</td></tr>
<tr><td valign="top" style="color:#7c3aed;font-weight:800;">2.</td><td>{L['n2']}</td></tr></table>
</div></td></tr>
<tr><td style="padding:22px 8px 0;text-align:center;color:#9890b5;font-size:12px;line-height:1.6;font-weight:500;">{L['foot']}</td></tr>
</table></td></tr></table></body></html>'''
for L in T.values():
    open(L['out'],'w').write(build(L)); print('wrote',L['out'])
