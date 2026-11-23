"""Parent guide (A4 PDF, EN + KO). iPad screenshots in docs/parent-guide/img get numbered callout pins + legend."""
import pathlib
from playwright.sync_api import sync_playwright
ROOT = pathlib.Path(__file__).resolve().parents[2] / 'docs' / 'parent-guide'
W, H = 800, 556
INK, BRAND, TINT, PIN = '#1d1747', '#6d4ed8', '#f3f0ff', '#ff6b4a'
# image -> pins (x, y in screenshot px)
PINS = {
 'dashboard': [(330, 300), (500, 172), (668, 300), (668, 418)],
 'dailystudy': [(380, 290), (640, 290), (330, 410), (551, 410)],
 'challenge': [(30, 84), (30, 184), (590, 300)],
 'curriculum': [(310, 88), (312, 181), (380, 323), (740, 487)],
 'lesson': [(130, 48), (430, 48), (530, 48), (400, 300)],
 'answers': [(150, 86), (350, 300)],
 'homework': [(150, 56), (200, 300), (600, 350), (750, 21)],
 'feedback': [(292, 80), (292, 190), (330, 232), (292, 346)],
}
T = {
 'en': dict(
  title='Secret Study', headline='How your child studies with us', sub='A parent’s guide to the Secret Study app, shown on the iPad your child uses every day.', url='sapere-app.vercel.app',
  foot='Secret Study · Parent guide',
  intro_h='A week with Secret Study', intro='Your child uses the app in class and at home. You do not need to log in — a weekly report arrives by email.',
  flow=[('In class','Teacher teaches from the Curriculum; your child works through the worksheet.'),('Every day','A short Daily Challenge and practice sets.'),('Homework','Done on the worksheet and submitted in the app.'),('Marking','Teacher marks it and leaves feedback.'),('Weekly report','A summary is emailed to you.')],
  help_h='How you can help', how=['Ask to see “Today’s plan” each day. Ten minutes daily beats one long session.','Praise the streak and the effort, not only the score.','Check that Homework shows “Submitted” before the next lesson.','Read Teacher Feedback together and ask your child to explain one corrected question.'],
  rep_h='Your weekly report', rep='Every week you will receive an email with lessons, homework, online practice (days practised, accuracy, study time) and textbook progress, in English or Korean.',
  tip_h='If something will not load', tip='Wait a few seconds, then tap the refresh button. If it keeps happening, tell your child’s teacher.',
  tipl='What you can do',
  pages=[
   ('dashboard','Every day','Dashboard','The first screen each day: what to do today, what is next, and how the week is going.',
    ['Today’s plan: Daily Challenge, Daily Calculation, practice sets and Homework.','The bar shows how many items are finished.','Next lesson and notes from the last lesson.','Daily Practice for the week, with XP and the streak.'],'Ask your child to show you the plan — it takes ten seconds.'),
   ('dailystudy','Every day','Daily Study','Every daily activity in one place, with a weekly summary underneath.',
    ['Teacher Feedback: comments and marking from the teacher.','Homework: shows “Submitted” once handed in.','This week: which days practice was done.','Last 7 days: accuracy over the past week.'],'Low accuracy early on is normal — the app is built to find gaps.'),
   ('challenge','Every day','Daily Challenge','Questions arrive one at a time, with room to show the working.',
    ['The question (here, Question 1 of 5).','Four answer choices. A wrong answer gives a hint and another try, then a worked solution.','The Working-out pad: your child writes the method with Apple Pencil or finger, as on paper.'],'Encourage writing the working — it shows how your child thinks.'),
   ('curriculum','In class','Curriculum','The map of the course. Teachers use this screen in lessons to choose today’s topic.',
    ['Switch year level at the top.','Term progress: chapters completed so far.','Lessons in each chapter (1A, 1B, 1C …).','Continue opens the next lesson; Review reopens a finished chapter.'],'This is where you can see how far through the textbook your child is.'),
   ('lesson','In class','The lesson worksheet','Tapping a lesson opens its worksheet, used in class and again for revision at home.',
    ['Prev and Next move between lessons.','Check answer shows the textbook answers.','Start Maths timer records study time.','The worksheet itself.'],'Revising a worksheet at home is easy — it is always here.'),
   ('answers','In class','Check answer','Your child marks their own work straight away and sees where it went wrong.',
    ['Answers for this lesson only.','The textbook answers, laid out as in the book.'],'Self-marking builds independence. The teacher still reviews the work.'),
   ('homework','Homework','Homework','The worksheet and a lined notes pad sit side by side, so the whole task is done on one screen.',
    ['Submitted: handed in. Your child can edit and resubmit until the teacher checks it.','Worksheet on the left.','Notes pad on the right for handwritten working.','Resubmit sends the latest version.'],'Before the next lesson, check the banner says Submitted.'),
   ('feedback','Marking','Teacher Feedback','After marking, each question shows the result, your child’s answer and a full solution.',
    ['Result: Correct or Incorrect.','Your child’s answer.','The correct answer and a solution guide.','Note from the teacher on the marking.'],'Read the solution guide together — the best help you can give.'),
  ]),
 'ko': dict(
  title='Secret Study', headline='우리 아이는 이렇게 공부합니다', sub='아이가 매일 사용하는 아이패드 화면으로 보는 Secret Study 앱 학부모 안내', url='sapere-app.vercel.app',
  foot='Secret Study · 학부모 안내',
  intro_h='한 주의 흐름', intro='아이는 수업 시간과 집에서 앱을 사용합니다. 학부모님이 로그인하실 필요는 없으며, 주간 리포트가 이메일로 전달됩니다.',
  flow=[('수업 시간','선생님이 커리큘럼으로 수업하고, 아이는 워크시트를 풉니다.'),('매일','짧은 Daily Challenge와 연습 세트를 합니다.'),('숙제','워크시트에 풀고 앱에서 제출합니다.'),('채점','선생님이 채점하고 피드백을 남깁니다.'),('주간 리포트','요약 리포트가 이메일로 전달됩니다.')],
  help_h='이렇게 도와주세요', how=['매일 “Today’s plan”을 보여 달라고 해 주세요. 하루 10분이 가끔의 긴 공부보다 낫습니다.','점수만이 아니라 연속 학습과 노력도 칭찬해 주세요.','다음 수업 전에 Homework가 “Submitted”인지 확인해 주세요.','Teacher Feedback을 함께 읽고, 고쳐진 문제 하나를 아이가 설명해 보게 해 주세요.'],
  rep_h='주간 리포트', rep='매주 수업, 숙제, 온라인 연습(연습한 날, 정확도, 공부 시간), 교재 진도를 이메일로 보내드립니다. 영어 또는 한국어로 받아보실 수 있습니다.',
  tip_h='화면이 열리지 않을 때', tip='몇 초 기다린 뒤 새로고침 버튼을 눌러 보세요. 계속되면 선생님께 알려 주세요.',
  tipl='이렇게 해 보세요',
  pages=[
   ('dashboard','매일','대시보드','매일 처음 만나는 화면입니다. 오늘 할 일, 다음 수업, 이번 주 진행 상황이 한눈에 보입니다.',
    ['Today’s plan: Daily Challenge, Daily Calculation, 연습 세트, Homework.','진행 막대는 완료한 항목 수를 보여줍니다.','다음 수업과 지난 수업 노트.','이번 주 Daily Practice와 XP, 연속 학습 기록.'],'아이에게 계획을 보여 달라고 해 보세요. 10초면 충분합니다.'),
   ('dailystudy','매일','Daily Study','매일 하는 활동이 한곳에 모여 있고, 아래에 주간 요약이 있습니다.',
    ['Teacher Feedback: 선생님의 채점과 코멘트.','Homework: 제출하면 “Submitted”로 표시됩니다.','This week: 연습한 요일.','Last 7 days: 최근 7일 정확도.'],'처음에 정확도가 낮은 것은 정상입니다. 앱은 부족한 부분을 찾아내도록 만들어졌습니다.'),
   ('challenge','매일','Daily Challenge','문제가 한 번에 하나씩 나오고, 풀이 과정을 적을 공간이 함께 있습니다.',
    ['문제(여기서는 5문제 중 1번).','4개의 보기. 오답이면 힌트와 재시도 기회를 준 뒤 풀이를 보여줍니다.','Working-out 패드: 애플펜슬이나 손가락으로 종이처럼 풀이를 적습니다.'],'풀이를 적도록 격려해 주세요. 아이의 사고 과정이 보입니다.'),
   ('curriculum','수업 시간','Curriculum','과정 전체의 지도입니다. 수업 시간에 오늘 주제를 고를 때 이 화면을 사용합니다.',
    ['상단에서 학년을 바꿀 수 있습니다.','Term progress: 지금까지 끝낸 챕터.','챕터별 레슨(1A, 1B, 1C …).','Continue는 다음 레슨, Review는 끝낸 챕터를 다시 엽니다.'],'아이가 교재의 어디까지 왔는지 여기서 알 수 있습니다.'),
   ('lesson','수업 시간','수업 워크시트','레슨을 누르면 워크시트가 열립니다. 수업과 집에서의 복습에 같은 자료를 씁니다.',
    ['Prev / Next로 레슨을 이동합니다.','Check answer: 교재 정답을 보여줍니다.','Start Maths timer: 공부 시간을 기록합니다.','워크시트 본문.'],'집에서 복습하기 쉽습니다. 워크시트는 언제나 앱에 있습니다.'),
   ('answers','수업 시간','Check answer','아이가 바로 스스로 채점하고, 어디가 틀렸는지 확인합니다.',
    ['해당 레슨의 정답만 보여줍니다.','교재와 같은 모양으로 정리된 정답.'],'스스로 채점하면 자기주도력이 길러집니다. 선생님도 추가로 확인합니다.'),
   ('homework','숙제','Homework','워크시트와 줄 노트 패드가 나란히 있어 한 화면에서 숙제를 끝낼 수 있습니다.',
    ['Submitted: 제출 완료. 선생님이 확인하기 전까지는 수정 후 다시 제출할 수 있습니다.','왼쪽: 워크시트.','오른쪽: 손글씨 풀이를 적는 노트 패드.','Resubmit: 최신 버전을 다시 제출합니다.'],'다음 수업 전에 상단에 Submitted가 보이는지 확인해 주세요.'),
   ('feedback','채점','Teacher Feedback','채점이 끝나면 문제마다 결과, 아이의 답, 자세한 풀이가 표시됩니다.',
    ['결과: Correct 또는 Incorrect.','아이가 쓴 답.','정답과 풀이 가이드.','채점에 대한 선생님의 안내.'],'풀이 가이드를 함께 읽는 것이 가장 좋은 도움입니다.'),
  ]),
}
CSS = f"""
@font-face{{font-family:Pretendard;src:url(fonts/PretendardVariable.woff2) format("woff2");font-weight:45 920}}
@font-face{{font-family:Gaegu;src:url(fonts/Gaegu-Bold.ttf);font-weight:700}}
@font-face{{font-family:Gaegu;src:url(fonts/Gaegu-Regular.ttf);font-weight:400}}
@page{{size:A4;margin:0}} *{{box-sizing:border-box}}
body{{margin:0;font-family:Gaegu,Pretendard,'Apple SD Gothic Neo',Arial,sans-serif;font-weight:400;color:{INK};background:#fff;-webkit-font-smoothing:antialiased;word-break:keep-all;overflow-wrap:break-word}}
.pg{{width:210mm;height:297mm;padding:15mm 16mm;position:relative;page-break-after:always;overflow:hidden}}
.cover{{background:{INK};color:#fff;padding:0}}
.cover .glow{{position:absolute;inset:0;background:radial-gradient(120mm 90mm at 85% 20%,{BRAND}cc,transparent 70%),radial-gradient(100mm 80mm at 0% 100%,#3b2a8f,transparent 70%)}}
.cover .in{{position:relative;padding:18mm 16mm}}
.brand{{font-family:Gaegu,Pretendard;font-size:16pt!important;font-weight:700;letter-spacing:.22em;font-size:10.5pt}}
.cover h1{{font-family:Gaegu,Pretendard;font-size:52pt;line-height:1.1;margin:56mm 0 6mm;font-weight:700}}
.cover p{{font-size:17pt;line-height:1.4;opacity:.85;max-width:150mm;margin:0}}
.cover .dev{{position:absolute;left:16mm;right:16mm;bottom:20mm}}
.cover .url{{position:absolute;left:16mm;top:26mm;font-size:13pt;opacity:.7;letter-spacing:.04em}}
.eyebrow{{font-size:13pt;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:{BRAND};display:flex;align-items:center;gap:3mm}}
.eyebrow:before{{content:'';width:8mm;height:.7mm;background:{PIN}}}
h2{{font-family:Gaegu,Pretendard;font-size:36pt;margin:2mm 0 1mm;font-weight:700;line-height:1.1}}
.sum{{font-size:15pt;line-height:1.45;color:#4a4670;margin:0 0 5mm;max-width:150mm}}
.ipad{{position:relative;background:#14122b;border-radius:7mm;padding:3.2mm;box-shadow:0 6mm 14mm -6mm rgba(29,23,71,.35)}}
.ipad .scr{{position:relative;border-radius:4mm;overflow:hidden;background:#fff7ec;line-height:0}}
.ipad img{{width:100%;display:block}}
.pin{{position:absolute;width:6.2mm;height:6.2mm;border-radius:50%;background:{PIN};color:#fff;font-weight:800;font-size:9pt;line-height:6.2mm;text-align:center;transform:translate(-50%,-50%);border:.6mm solid #fff;box-shadow:0 1mm 2mm rgba(0,0,0,.3);font-family:inherit}}
.leg{{display:grid;grid-template-columns:1fr 1fr;gap:3.5mm 8mm;margin-top:7mm}}
.leg div{{display:flex;gap:3mm;font-size:14.5pt;line-height:1.35;font-weight:700}}
.leg b{{flex:0 0 6mm;height:6mm;border-radius:50%;background:{PIN};color:#fff;font-size:8.5pt;text-align:center;line-height:6mm;margin-top:.5mm}}
.tip{{position:absolute;left:16mm;right:16mm;bottom:16mm;background:{TINT};border-left:1.2mm solid {BRAND};border-radius:2mm;padding:5mm 6mm}}
.tip small{{display:block;font-size:12pt;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{BRAND};margin-bottom:1.5mm}}
.tip span{{font-size:16pt;line-height:1.4;font-weight:700}}
.foot{{position:absolute;left:16mm;right:16mm;bottom:7mm;display:flex;justify-content:space-between;font-size:11pt;color:#8b87a8}}
.flow{{display:flex;flex-direction:column;margin-top:8mm}}
.step{{display:flex;gap:6mm;align-items:flex-start;position:relative;padding-bottom:7mm}}
.step:not(:last-child):after{{content:'';position:absolute;left:5.4mm;top:12mm;bottom:0;width:.5mm;background:#d8d2f5}}
.step i{{flex:0 0 11mm;height:11mm;border-radius:50%;background:{BRAND};color:#fff;font-style:normal;font-weight:800;text-align:center;line-height:11mm;font-size:12pt}}
.step h4{{font-family:Gaegu,Pretendard;margin:0 0 1mm;font-size:20pt;font-weight:700}} .step p{{margin:0;font-size:15pt;line-height:1.4;color:#4a4670}}
.card{{background:{TINT};border-radius:3mm;padding:6mm 7mm;margin-top:6mm}}
.card h4{{font-family:Gaegu,Pretendard;margin:0 0 2.5mm;font-size:19pt;font-weight:700;color:{BRAND}}} .card p,.card li{{font-size:15pt;line-height:1.4;margin:0}}
.card ul{{padding-left:5mm;margin:0}} .card li{{margin-bottom:2mm}}
"""
def build(lang):
    t = T[lang]; n = 1
    def foot():
        nonlocal n; n += 1
        return f'<div class="foot"><span>{t["foot"]}</span><span>{n}</span></div>'
    cover = (f'<div class="pg cover"><div class="glow"></div><div class="in"><div class="brand">SECRET STUDY</div><div class="url">{t["url"]}</div><h1>{t["headline"]}</h1><p>{t["sub"]}</p></div>'
             f'<div class="dev"><div class="ipad"><div class="scr"><img src="img/dashboard.jpg"></div></div></div></div>')
    flow = ''.join(f'<div class="step"><i>{i}</i><div><h4>{a}</h4><p>{b}</p></div></div>' for i, (a, b) in enumerate(t['flow'], 1))
    p2 = f'<div class="pg"><div class="eyebrow">Secret Study</div><h2>{t["intro_h"]}</h2><p class="sum">{t["intro"]}</p><div class="flow">{flow}</div>{foot()}</div>'
    pages = [cover, p2]
    for img, eyebrow, title, summ, legend, tip in t['pages']:
        pins = ''.join(f'<div class="pin" style="left:{x/W*100:.2f}%;top:{y/H*100:.2f}%">{i}</div>' for i, (x, y) in enumerate(PINS[img], 1))
        leg = ''.join(f'<div><b>{i}</b><span>{s}</span></div>' for i, s in enumerate(legend, 1))
        pages.append(f'<div class="pg"><div class="eyebrow">{eyebrow}</div><h2>{title}</h2><p class="sum">{summ}</p>'
                     f'<div class="ipad"><div class="scr"><img src="img/{img}.jpg">{pins}</div></div><div class="leg">{leg}</div>'
                     f'<div class="tip"><small>{t["tipl"]}</small><span>{tip}</span></div>{foot()}</div>')
    last = (f'<div class="pg"><div class="eyebrow">Secret Study</div><h2>{t["help_h"]}</h2><div class="card"><ul>' + ''.join(f'<li>{x}</li>' for x in t['how']) +
            f'</ul></div><div class="card"><h4>{t["rep_h"]}</h4><p>{t["rep"]}</p></div><div class="card"><h4>{t["tip_h"]}</h4><p>{t["tip"]}</p></div>{foot()}</div>')
    pages.append(last)
    f = ROOT / f'parent-guide-{lang}.html'
    f.write_text(f'<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><title>{t["title"]}</title><style>{CSS}</style></head><body>' + ''.join(pages) + '</body></html>', encoding='utf-8')
    return f
with sync_playwright() as pw:
    b = pw.chromium.launch(channel='chrome')
    for lang in ('en', 'ko'):
        f = build(lang); pg = b.new_page(); pg.goto(f'file://{f}'); pg.wait_for_timeout(500)
        pg.pdf(path=str(ROOT / f'parent-guide-{lang}.pdf'), format='A4', print_background=True); pg.close()
    b.close()
print('ok')
