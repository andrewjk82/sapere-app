with open('src/components/Curriculum.jsx', 'r') as f:
    content = f.read()

import_statement = "import { Y12A_CH6_QUESTIONS } from '../constants/seedYear12aCh6Questions';\nimport { Y12A_CH6B_QUESTIONS } from '../constants/seedYear12aCh6BQuestions';\nimport { Y12A_CH6C_QUESTIONS } from '../constants/seedYear12aCh6CQuestions';\nimport { Y12A_CH6D_QUESTIONS } from '../constants/seedYear12aCh6DQuestions';\nimport { Y12A_CH6E_QUESTIONS } from '../constants/seedYear12aCh6EQuestions';"
content = content.replace("import { Y12A_CH6_QUESTIONS } from '../constants/seedYear12aCh6Questions';\nimport { Y12A_CH6B_QUESTIONS } from '../constants/seedYear12aCh6BQuestions';\nimport { Y12A_CH6C_QUESTIONS } from '../constants/seedYear12aCh6CQuestions';\nimport { Y12A_CH6D_QUESTIONS } from '../constants/seedYear12aCh6DQuestions';", import_statement)

registry_entry = """  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6D',
    topicCode: '6D',
    topicTitle: 'Integrating the trigonometric functions',
    year: 'Year 12',
    seed: Y12A_CH6D_QUESTIONS,
    label: 'Y12A Ch6 · 6D Integrating the trigonometric functions',
  },
  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6E',
    topicCode: '6E',
    topicTitle: 'Area',
    year: 'Year 12',
    seed: Y12A_CH6E_QUESTIONS,
    label: 'Y12A Ch6 · 6E Area',
  },"""
content = content.replace("""  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6D',
    topicCode: '6D',
    topicTitle: 'Integrating the trigonometric functions',
    year: 'Year 12',
    seed: Y12A_CH6D_QUESTIONS,
    label: 'Y12A Ch6 · 6D Integrating the trigonometric functions',
  },""", registry_entry)

with open('src/components/Curriculum.jsx', 'w') as f:
    f.write(content)
