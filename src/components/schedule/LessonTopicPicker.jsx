import { useMemo, useState } from 'react';
import { ChevronDown, ChevronRight, Plus, X } from 'lucide-react';
import { groupTopicOptions, topicChipLabel } from '../../utils/lessonTopics';

const S = {
  box: { border: '2px solid #f1f5f9', borderRadius: '16px', padding: '14px', background: '#fff', display: 'grid', gap: '12px' },
  picked: { display: 'flex', flexWrap: 'wrap', gap: '6px' },
  pickedChip: { display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#eef2ff', color: '#312e81', border: 'none', borderRadius: '999px', padding: '6px 8px 6px 12px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' },
  nextUp: { display: 'flex', alignItems: 'center', gap: '8px', width: '100%', border: '1.5px dashed #c7d2fe', background: '#f8faff', borderRadius: '12px', padding: '9px 12px', cursor: 'pointer', textAlign: 'left', color: '#4338ca', fontWeight: 800, fontSize: '0.82rem' },
  tabs: { display: 'flex', gap: '6px', flexWrap: 'wrap' },
  tab: (on) => ({ border: 'none', borderRadius: '999px', padding: '6px 12px', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', background: on ? '#4f46e5' : '#f1f5f9', color: on ? '#fff' : '#475569' }),
  chapterHead: { display: 'flex', alignItems: 'center', gap: '6px', width: '100%', border: 'none', background: 'none', padding: '4px 0', cursor: 'pointer', textAlign: 'left', color: '#1e293b', fontWeight: 800, fontSize: '0.85rem' },
  count: { marginLeft: 'auto', color: '#6366f1', fontSize: '0.72rem', fontWeight: 800 },
  codes: { display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '4px 0 6px 20px' },
  code: (on, done) => ({ minWidth: '44px', border: `1.5px solid ${on ? '#4f46e5' : '#e2e8f0'}`, background: on ? '#4f46e5' : '#fff', color: on ? '#fff' : done ? '#94a3b8' : '#1e293b', borderRadius: '10px', padding: '6px 10px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }),
  hint: { color: '#94a3b8', fontWeight: 700, fontSize: '0.72rem' },
};

/**
 * "Today covered" picker: picked topics as chips on top, a "Next up"
 * suggestion, then year (or year + course) tabs → collapsible chapters →
 * topic code buttons. Purely presentational; the parent owns the selection.
 */
const LessonTopicPicker = ({ options, selected, onToggle, nextUp, emptyText }) => {
  const groups = useMemo(() => groupTopicOptions(options), [options]);
  const selectedIds = useMemo(() => new Set(selected.map((t) => t.id)), [selected]);
  // Topics saved by older sessions only carry { id, label }; show them with
  // the current option's code/title when it still exists.
  const pickedTopics = useMemo(() => {
    const byId = new Map(options.map((o) => [o.id, o]));
    return selected.map((t) => byId.get(t.id) || t);
  }, [options, selected]);
  const multiGroup = groups.length > 1;

  // Open on the group/chapter the lesson is most likely about.
  const focus = nextUp || options.find((o) => selectedIds.has(o.id)) || options.find((o) => !o.completed) || options[0];
  const [activeGroup, setActiveGroup] = useState(focus?.groupKey || groups[0]?.key);
  const [openChapters, setOpenChapters] = useState(() => new Set(focus ? [focus.chapterId || focus.id] : []));

  if (options.length === 0) return <div style={{ ...S.box, color: '#64748b', fontWeight: 700, fontSize: '0.9rem' }}>{emptyText}</div>;

  const group = groups.find((g) => g.key === activeGroup) || groups[0];
  const toggleChapter = (id) => setOpenChapters((prev) => {
    const next = new Set(prev);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });

  return (
    <div style={S.box}>
      {pickedTopics.length > 0 && (
        <div style={S.picked}>
          {pickedTopics.map((t) => (
            <button key={t.id} type="button" style={S.pickedChip} onClick={() => onToggle(t)} title="Remove">
              {t.code ? `${topicChipLabel(t, { withGroup: multiGroup })} ${t.title || ''}` : (t.label || t.title || t.id)}
              <X size={13} strokeWidth={3} />
            </button>
          ))}
        </div>
      )}

      {nextUp && !selectedIds.has(nextUp.id) && (
        <button type="button" style={S.nextUp} onClick={() => onToggle(nextUp)}>
          <Plus size={15} strokeWidth={3} />
          <span>Next up: {topicChipLabel(nextUp, { withGroup: multiGroup })} {nextUp.title}</span>
        </button>
      )}

      {multiGroup && (
        <div style={S.tabs}>
          {groups.map((g) => (
            <button key={g.key} type="button" style={S.tab(g.key === group.key)} onClick={() => setActiveGroup(g.key)}>
              {g.label}
            </button>
          ))}
        </div>
      )}

      <div style={{ display: 'grid', gap: '2px', maxHeight: '260px', overflowY: 'auto' }}>
        {group.chapters.map((chapter) => {
          const open = openChapters.has(chapter.id);
          const picked = chapter.topics.filter((t) => selectedIds.has(t.id)).length;
          const singleChapterItem = chapter.topics.length === 1 && chapter.topics[0].id === chapter.id;
          if (singleChapterItem) {
            const t = chapter.topics[0];
            const on = selectedIds.has(t.id);
            return (
              <button key={chapter.id} type="button" style={{ ...S.chapterHead, color: on ? '#4338ca' : '#1e293b' }} onClick={() => onToggle(t)}>
                <span style={{ width: 14, display: 'inline-flex' }}>{on ? '✓' : ''}</span>
                {chapter.title}
              </button>
            );
          }
          return (
            <div key={chapter.id}>
              <button type="button" style={S.chapterHead} onClick={() => toggleChapter(chapter.id)}>
                {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                {chapter.title}
                {picked > 0 && <span style={S.count}>{picked} picked</span>}
              </button>
              {open && (
                <div style={S.codes}>
                  {chapter.topics.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      title={`${t.title}${t.completed ? ' (completed)' : ''}`}
                      style={S.code(selectedIds.has(t.id), t.completed)}
                      onClick={() => onToggle(t)}
                    >
                      {topicChipLabel(t)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={S.hint}>Tap a chapter to open it · grey codes are completed</div>
    </div>
  );
};

export default LessonTopicPicker;
