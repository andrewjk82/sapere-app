# Topic-Specific Homework Notes Design

## Goal
Give every homework topic its own independent student notebook, draft, and submitted page group so switching from 1A to 1B opens a clean notebook and teachers can review notes beside the matching answer key.

## Current behavior
`HomeworkWorkspace` has one `WorkingOutCanvas` ref and one session-level `draft` in IndexedDB. Topic tabs only change the worksheet PDF. Submission flattens all ink into one `pageImages` array, and Firestore page documents carry only a global page index. The teacher viewer therefore shows one combined page sequence, independent of the selected answer-key topic.

## Proposed behavior
- Selecting a topic selects that topic's own notebook. Each topic has its own pages, current page, page paper type, undo state, and autosaved draft.
- Switching topics saves the current topic before loading the selected topic's notebook. Ink and page navigation never carry over to another topic.
- Submitting collects every non-empty page, in homework topic order and then page order, with its `topicId` and display label. The existing ten-page homework limit applies to the combined submission.
- The submission viewer has a topic selector. Selecting a topic synchronizes the answer-key/marking panel and the right-hand student-work pages. Page navigation/count is scoped to the selected topic. Topics with no submitted ink show an empty state.
- Existing submitted pages without topic metadata remain available under an “Earlier combined notes” group; they are not assigned to a guessed topic.
- Existing local session drafts are preserved as an “Earlier combined notes” group and included with that explicit group if the student resubmits. New pages created after this change are topic-specific.
- Existing submissions and checked-work restrictions continue to work. Re-submissions replace page records and metadata together; pages removed in a later submission are deleted as today.

## Data model and interfaces

### Local IndexedDB record
Keep the existing per-user/per-session key and store:

```js
{
  topicDrafts: {
    [topicId]: { pages, pageTypes, currentPage }
  },
  earlierCombinedDraft: { pages, pageTypes, currentPage }, // only for pre-change `draft`
  submittedImages: [/* legacy images, retained for older submissions */],
  submittedPages: [{ image, topicId, topicLabel }]
}
```

When opening a record with the old `draft` field and no `topicDrafts`, move its value to `earlierCombinedDraft` without changing stroke content. Keep the old field readable during the transition so a failed new-format write does not erase an existing draft.

### Firestore submission pages
Continue using `homework_submissions/{sessionId}/pages/{index}` and the existing global `index`; add `topicId` and `topicLabel` to each new page document. Add no new collection and retain session-level submission/status fields. Legacy page docs without topic metadata are rendered in the earlier-combined group.

`submitHomework` accepts page records `{ image, topicId, topicLabel }`, resizes each `image` as it does now, and writes the metadata with its page. `fetchSubmissionPages` returns ordered records instead of bare image strings; the viewer normalizes old local images and legacy Firestore documents into the same shape.

## UI and state flow
- `HomeworkWorkspace` owns the active topic's draft state and keeps a single canvas instance. Before changing the active topic, it flushes the pending autosave and snapshots the active canvas. After selecting the new topic it loads that topic's draft, or a blank first page.
- Autosave callbacks are bound to the topic ID that produced the change, and pending timers are flushed/cancelled on topic change, submit, and close. This prevents a delayed save from writing 1A ink into 1B.
- The submit flow exports pages separately for every topic, applies the ten-page combined limit, and preserves a single submission record for the session.
- `HomeworkSubmissionViewer` owns the active topic selection and page index. The selection is passed to `HomeworkMarkingPanel` so answer and student work stay synchronized. Legacy combined pages have their own clearly labeled selection.
- On narrow screens, the existing Student work / Answers / Marking tabs remain; the active topic selection remains available across those tabs.

## Compatibility and failure handling
- Do not guess which topic owns old combined ink. Keep it visible and submit it under the explicit earlier-combined group.
- If local storage fails, the homework screen continues to work as it does today; only local draft persistence is unavailable.
- Keep current maximum of ten non-empty pages per homework submission. If the combined topic pages exceed it, show the existing page-limit message before writing.
- Continue using the existing transaction/batch order so page data and the submission/session status remain consistent.
- Re-submission retains the current checked-work guard and removes stale page indices.

## Scope
Modify `src/components/homework/HomeworkWorkspace.jsx`, `src/components/homework/HomeworkSubmissionViewer.jsx`, `src/components/homework/HomeworkMarkingPanel.jsx`, `src/services/homeworkService.js`, and `src/utils/homeworkLocalStore.js` only as needed for this flow. Do not alter the generic `WorkingOutCanvas` behavior unless the existing ref API proves insufficient; prefer its current `getPagesData`, `loadPagesData`, `exportPageImages`, and `onInkChange` interface.

## Acceptance criteria
1. Writing on 1A, switching to 1B, and returning to 1A shows only the 1A work; each topic has its own page count.
2. Topic drafts survive closing and reopening the homework workspace on the same device.
3. Submitting saves all topic pages and their topic IDs/labels while respecting the ten-page total limit.
4. The teacher can switch topics and see that topic's answer key, marking list, and student pages together; page count reflects only that topic.
5. A topic with no work shows an empty state; pages without topic metadata are still visible under “Earlier combined notes”.
6. Legacy local drafts are preserved during migration and are not silently assigned to one topic.
7. Marking, checked status, thumbnail fallback, and student viewing remain compatible.
