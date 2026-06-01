with open('src/components/Curriculum.jsx', 'r') as f:
    content = f.read()

import_statement = "import { Y12A_CH6_QUESTIONS } from '../constants/seedYear12aCh6Questions';\nimport { Y12A_CH6B_QUESTIONS } from '../constants/seedYear12aCh6BQuestions';\nimport { Y12A_CH6C_QUESTIONS } from '../constants/seedYear12aCh6CQuestions';\nimport { Y12A_CH6D_QUESTIONS } from '../constants/seedYear12aCh6DQuestions';"
content = content.replace("import { Y12A_CH6_QUESTIONS } from '../constants/seedYear12aCh6Questions';\nimport { Y12A_CH6B_QUESTIONS } from '../constants/seedYear12aCh6BQuestions';\nimport { Y12A_CH6C_QUESTIONS } from '../constants/seedYear12aCh6CQuestions';", import_statement)

registry_entry = """  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6C',
    topicCode: '6C',
    topicTitle: 'Applications of differentiation',
    year: 'Year 12',
    seed: Y12A_CH6C_QUESTIONS,
    label: 'Y12A Ch6 · 6C Applications of differentiation',
  },
  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6D',
    topicCode: '6D',
    topicTitle: 'Integrating the trigonometric functions',
    year: 'Year 12',
    seed: Y12A_CH6D_QUESTIONS,
    label: 'Y12A Ch6 · 6D Integrating the trigonometric functions',
  },"""
content = content.replace("""  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6C',
    topicCode: '6C',
    topicTitle: 'Applications of differentiation',
    year: 'Year 12',
    seed: Y12A_CH6C_QUESTIONS,
    label: 'Y12A Ch6 · 6C Applications of differentiation',
  },""", registry_entry)

with open('src/components/Curriculum.jsx', 'w') as f:
    f.write(content)
