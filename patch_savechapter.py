with open('src/components/Curriculum.jsx', 'r') as f:
    content = f.read()

import re

# We want to patch handleSaveChapter to auto-add pending subtopic if fields are filled.
old_func = """  const handleSaveChapter = async (e) => {
    e.preventDefault();
    const chapterData = editingChapter.chapter;"""

new_func = """  const handleSaveChapter = async (e) => {
    e.preventDefault();
    let chapterData = { ...editingChapter.chapter };

    // UX FIX: If user typed in the "Add Subtopic" form but forgot to click [+], 
    // we automatically append it to the topics array before saving!
    if (subtopicForm.code && subtopicForm.title) {
      const currentTopics = [...(chapterData.topics || [])];
      const newSubtopic = {
        id: subtopicForm.id || `${chapterData.id || ''}-${subtopicForm.code.toLowerCase()}`,
        code: subtopicForm.code,
        title: subtopicForm.title,
        page: subtopicForm.page ? parseInt(subtopicForm.page) : ''
      };
      if (editingSubtopicIndex >= 0) {
        currentTopics[editingSubtopicIndex] = newSubtopic;
      } else {
        currentTopics.push(newSubtopic);
      }
      chapterData.topics = currentTopics;
      setSubtopicForm({ code: '', title: '', page: '' });
      setEditingSubtopicIndex(-1);
    }
"""

content = content.replace(old_func, new_func)

with open('src/components/Curriculum.jsx', 'w') as f:
    f.write(content)
