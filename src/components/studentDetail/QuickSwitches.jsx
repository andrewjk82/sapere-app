// Top of the Settings tab: every on/off switch in one place. Same fields the panels below write.
const ITEMS = [
  { key: "calculationEnabled", label: "Daily Calculation", isOn: (s) => s?.calculationEnabled !== false },
  { key: "examPrepEnabled", label: "Exam prep", isOn: (s) => s?.examPrepEnabled === true },
  { key: "scholarshipEnabled", label: "Special tests", note: "OC · Selective · Scholarship", isOn: (s) => s?.scholarshipEnabled === true },
  { key: "hscPastPaperEnabled", label: "HSC past paper questions", note: "extra questions in Daily Challenge", isOn: (s) => s?.hscPastPaperEnabled === true },
];

export default function QuickSwitches({ student, onUpdateSetting }) {
  return (
    <section className="sd-tile">
      <h3 className="sd-h">Features <small>details for each one are below</small></h3>
      <div className="sd-switches">
        <div className="sd-switch-row">
          <span>Daily Challenge<small>{student?.dailyQuestionCount || 10} questions a day · always on</small></span>
        </div>
        {ITEMS.map((it) => {
          const on = it.isOn(student);
          return (
            <div key={it.key} className="sd-switch-row">
              <span>{it.label}{it.note && <small>{it.note}</small>}</span>
              <button type="button" role="switch" aria-checked={on} aria-label={it.label} className="sd-switch" onClick={() => onUpdateSetting(it.key, !on)} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
