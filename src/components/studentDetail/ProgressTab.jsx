import { useMemo, useState } from "react";
import { arrayRemove, arrayUnion, deleteField, doc, FieldPath, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { touchStudentsSyncMeta } from "../../services/studentService";
import { courseTopics, deriveTopicStates, topicStatuses, STATE_LABEL } from "../../utils/topicProgress";

// Progress tab: every chapter with its topics as coloured chips (same rule as the Class page: taught → homework in →
// checked → mistakes gone through = Done). Kept from the old Curriculum tab: tapping the chapter's status pill cycles
// Not assigned → Active → Done (Daily Practice chapters + Learning path dates). New: tap a topic to set it Done /
// Not done by hand, or back to Auto (same progressOverrides field as the Class page).
const CHAPTER_STATE = (assigned, completed) => (completed ? ["Done", "is-done"] : assigned ? ["Active", "is-active"] : ["Not assigned", ""]);
const stamp = () => Date.now();
const LEGEND = ["done", "mistakes", "check", "notin", "taught", "none"];

const flatten = (chapters) => chapters.flatMap((ch) => (Array.isArray(ch.topics) && ch.topics.length
  ? ch.topics.map((t) => ({ id: t.id, code: t.code || "", title: t.title || "", chapterId: ch.id, chapterTitle: ch.title }))
  : [{ id: ch.id, code: "", title: ch.title, chapterId: ch.id, chapterTitle: ch.title }]));

export default function ProgressTab({ student, collectionName, studentDocId, chapters, assignedYears, assignedChapters, completedChapters, sessions, onToggleChapter }) {
  const [local, setLocal] = useState({});        // topicId → 'done' | 'open' | 'auto' just set here
  const [picked, setPicked] = useState(null);     // topic id with its menu open
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");
  const [openCh, setOpenCh] = useState(null);

  const taught = useMemo(() => courseTopics(student || {}, sessions || []), [student, sessions]);
  // Chapters: the course being taught first (it may be ahead of the school year), then the assigned year's.
  const allChapters = useMemo(() => {
    const seen = new Set();
    const list = [];
    const taughtIds = [...new Set(taught.topics.map((t) => t.chapterId))];
    taughtIds.forEach((id) => {
      const first = taught.topics.find((t) => t.chapterId === id);
      list.push({ id, title: first.chapterTitle, topics: taught.topics.filter((t) => t.chapterId === id), group: taught.year });
      seen.add(id);
    });
    chapters.forEach((ch) => { if (!seen.has(ch.id)) { list.push({ ...ch, topics: flatten([ch]), group: assignedYears.join(", ") }); seen.add(ch.id); } });
    return list;
  }, [taught, chapters, assignedYears]);

  const overrides = useMemo(() => {
    const base = { ...(student?.progressOverrides || {}) };
    Object.entries(local).forEach(([id, v]) => { if (v === "auto") delete base[id]; else base[id] = v; });
    return base;
  }, [student?.progressOverrides, local]);
  const derived = useMemo(() => (sessions ? deriveTopicStates(sessions, new Date().toLocaleDateString("en-CA")) : new Map()), [sessions]);
  const stateById = useMemo(() => {
    const map = new Map();
    topicStatuses(allChapters.flatMap((c) => c.topics), derived, { completed: completedChapters, overrides })
      .forEach((t) => map.set(t.id, t));
    return map;
  }, [allChapters, derived, completedChapters, overrides]);

  const firstActive = allChapters.find((c) => c.topics.some((t) => ["mistakes", "check", "notin", "taught"].includes(stateById.get(t.id)?.state)))?.id;
  const current = openCh ?? firstActive ?? allChapters[0]?.id;

  const setTopic = async (topic, mode) => {
    if (!studentDocId || busy) return;
    setBusy(topic.id); setError(""); setPicked(null);
    const ov = new FieldPath("progressOverrides", topic.id);
    const args = mode === "done"
      ? ["completedChapters", arrayUnion(topic.id), ov, "done", new FieldPath("chapterDates", topic.id, "completedAt"), stamp()]
      : mode === "open"
        ? ["completedChapters", arrayRemove(topic.id), ov, "open"]
        : ["completedChapters", arrayRemove(topic.id), ov, deleteField()];
    setLocal((cur) => ({ ...cur, [topic.id]: mode }));
    try {
      await Promise.race([updateDoc(doc(db, collectionName, studentDocId), ...args), new Promise((r) => { setTimeout(r, 8000); })]);
      touchStudentsSyncMeta(null, true).catch(() => {});
    } catch (err) {
      console.error("Progress change failed:", err);
      setLocal((cur) => { const next = { ...cur }; delete next[topic.id]; return next; });
      setError("Could not save. Check the connection and try again.");
    } finally { setBusy(""); }
  };

  let lastGroup = null;
  return (
    <section className="sd-tile">
      <h3 className="sd-h">Progress <small>tap a chapter to see its topics · tap a topic to change it</small></h3>
      <div className="sd-legend">{LEGEND.map((k) => <span key={k} className={`sd-t is-${k}`}>{STATE_LABEL[k]}</span>)}</div>
      {error && <p className="sd-error" role="alert">{error}</p>}
      <div className="sd-chapters">
        {allChapters.map((ch) => {
          const header = ch.group !== lastGroup ? <div className="sd-ch-group" key={`g-${ch.id}`}>{ch.group === taught.year && taught.year ? `Learning · ${ch.group}` : `Assigned · ${ch.group}`}</div> : null;
          lastGroup = ch.group;
          const states = ch.topics.map((t) => stateById.get(t.id)?.state || "none");
          const done = states.filter((s) => s === "done").length;
          const [label, cls] = CHAPTER_STATE(assignedChapters.includes(ch.id), completedChapters.includes(ch.id));
          const isOpen = current === ch.id;
          return [header, (
            <div key={ch.id} className={`sd-ch${isOpen ? " is-open" : ""}`}>
              <div className="sd-ch-head">
                <button type="button" className="sd-ch-title" aria-expanded={isOpen} onClick={() => setOpenCh(isOpen ? "" : ch.id)}>
                  <span className="sd-ch-caret" aria-hidden="true">{isOpen ? "▾" : "▸"}</span>
                  <b>{ch.title}</b>
                  <span className="sd-ch-bar" aria-hidden="true"><i style={{ width: `${ch.topics.length ? (done / ch.topics.length) * 100 : 0}%` }} /></span>
                  <span className="sd-ch-num">{done}/{ch.topics.length}</span>
                </button>
                <button type="button" className={`sd-ch-pill ${cls}`} title="Daily Practice: Not assigned → Active → Done" onClick={() => onToggleChapter(ch.id)}>{label}</button>
              </div>
              {isOpen && (
                <div className="sd-topics">
                  {ch.topics.map((t) => {
                    const st = stateById.get(t.id);
                    const state = st?.state || "none";
                    return (
                      <span key={t.id} className="sd-topic-wrap">
                        <button type="button" className={`sd-t is-${state}${st?.override ? " is-set" : ""}`} aria-expanded={picked === t.id} disabled={busy === t.id}
                          title={`${t.title} · ${STATE_LABEL[state]}${st?.override ? " · set by you" : ""}`} onClick={() => setPicked(picked === t.id ? null : t.id)}>
                          {t.code || t.title}{st?.override ? " •" : ""}
                        </button>
                      </span>
                    );
                  })}
                  {(() => {
                    const t = ch.topics.find((x) => x.id === picked);
                    if (!t) return null;
                    const st = stateById.get(t.id);
                    const state = st?.state || "none";
                    return (
                      <div className="sd-topic-menu" role="group" aria-label={`Set ${t.code || t.title}`}>
                        <span><b>{t.code} {t.title}</b><small>{STATE_LABEL[state]}{st?.override ? " · set by you" : " · automatic"}</small></span>
                        <span>
                          <button type="button" onClick={() => setTopic(t, "done")}>Done</button>
                          <button type="button" onClick={() => setTopic(t, "open")}>Not done</button>
                          <button type="button" disabled={!st?.override} onClick={() => setTopic(t, "auto")}>Auto</button>
                        </span>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          )];
        })}
      </div>
    </section>
  );
}
