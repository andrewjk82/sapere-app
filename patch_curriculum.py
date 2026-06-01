with open('src/components/Curriculum.jsx', 'r') as f:
    content = f.read()

import_statement = "import { Y12A_CH6_QUESTIONS } from '../constants/seedYear12aCh6Questions';\nimport { Y12A_CH6B_QUESTIONS } from '../constants/seedYear12aCh6BQuestions';"
content = content.replace("import { Y12A_CH6_QUESTIONS } from '../constants/seedYear12aCh6Questions';", import_statement)

registry_entry = """
  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12-6b',
    topicCode: '6B',
    topicTitle: 'Calculus of trigonometric functions',
    year: 'Year 12 Advanced',
    seed: Y12A_CH6B_QUESTIONS,
    label: 'Y12A Ch6 · 6B Calculus of trigonometric functions',
  },
"""

# Insert registry entry before the first '];' after CHAPTER_SEED_REGISTRY
# It's better to find where CHAPTER_SEED_REGISTRY is defined and append to it.
import re
match = re.search(r'export const CHAPTER_SEED_REGISTRY = \[(.*?)\];', content, flags=re.DOTALL)
if match:
    old_registry = match.group(1)
    new_registry = old_registry + registry_entry
    content = content.replace(old_registry, new_registry)

with open('src/components/Curriculum.jsx', 'w') as f:
    f.write(content)
