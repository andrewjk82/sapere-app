with open('src/components/Curriculum.jsx', 'r') as f:
    content = f.read()

registry_entry = """
  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6A',
    topicCode: '6A',
    topicTitle: 'The behaviour of sin x near the origin',
    year: 'Year 12',
    seed: Y12A_CH6_QUESTIONS,
    label: 'Y12A Ch6 · 6A The behaviour of sin x near the origin',
  },"""

# Insert at the beginning of the registry
content = content.replace(
    "const CHAPTER_SEED_REGISTRY = [",
    "const CHAPTER_SEED_REGISTRY = [" + registry_entry
)

with open('src/components/Curriculum.jsx', 'w') as f:
    f.write(content)
print("curriculum patched properly")
