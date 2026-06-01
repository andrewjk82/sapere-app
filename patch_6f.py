with open('src/components/Curriculum.jsx', 'r') as f:
    content = f.read()

import_statement = "import { Y12A_CH6_QUESTIONS } from '../constants/seedYear12aCh6Questions';\nimport { Y12A_CH6B_QUESTIONS } from '../constants/seedYear12aCh6BQuestions';\nimport { Y12A_CH6C_QUESTIONS } from '../constants/seedYear12aCh6CQuestions';\nimport { Y12A_CH6D_QUESTIONS } from '../constants/seedYear12aCh6DQuestions';\nimport { Y12A_CH6E_QUESTIONS } from '../constants/seedYear12aCh6EQuestions';\nimport { Y12A_CH6F_QUESTIONS } from '../constants/seedYear12aCh6FQuestions';"

# update imports
if "import { Y12A_CH6E_QUESTIONS }" in content and "import { Y12A_CH6F_QUESTIONS }" not in content:
    content = content.replace("import { Y12A_CH6E_QUESTIONS } from '../constants/seedYear12aCh6EQuestions';", import_statement)

registry_entry = """  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6E',
    topicCode: '6E',
    topicTitle: 'Area',
    year: 'Year 12',
    seed: Y12A_CH6E_QUESTIONS,
    label: 'Y12A Ch6 · 6E Area',
  },
  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6F',
    topicCode: '6F',
    topicTitle: 'Chapter review exercise',
    year: 'Year 12',
    seed: Y12A_CH6F_QUESTIONS,
    label: 'Y12A Ch6 · 6F Chapter review',
  },"""

if "topicId: 'y12a-6F'" not in content:
    old_entry = """  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6E',
    topicCode: '6E',
    topicTitle: 'Area',
    year: 'Year 12',
    seed: Y12A_CH6E_QUESTIONS,
    label: 'Y12A Ch6 · 6E Area',
  },"""
    content = content.replace(old_entry, registry_entry)

with open('src/components/Curriculum.jsx', 'w') as f:
    f.write(content)
