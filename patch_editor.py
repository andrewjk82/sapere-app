import sys

with open('src/components/QuestionBankModal.jsx', 'r') as f:
    content = f.read()

# 1. Add updateCircle
update_circle_str = """
  const updateCircle = (idx, patch) => {
    const circles = [...(geometry.circles || [])];
    circles[idx] = { ...circles[idx], ...patch };
    updateGeometry({ ...geometry, circles });
  };
"""
content = content.replace(
    "const updateSegment = (idx, patch) => {",
    update_circle_str + "\n  const updateSegment = (idx, patch) => {"
)

# 2. Add SVG rendering for circles
circle_svg_str = """
        {(geometry.circles || []).map((circ, idx) => {
          if (!geometry.points[circ.center]) return null;
          const [cx, cy] = toSvg(geometry.points[circ.center]);
          let r = 0;
          if (circ.through && geometry.points[circ.through]) {
            const [tx, ty] = toSvg(geometry.points[circ.through]);
            r = Math.hypot(tx - cx, ty - cy);
          } else if (circ.radius) {
            r = circ.radius * scale;
          }
          if (r <= 0) return null;
          return (
            <circle
              key={`c${idx}`}
              cx={cx}
              cy={cy}
              r={r}
              stroke={circ.color || "#000000"}
              strokeWidth="1.2"
              strokeDasharray={circ.dashed ? '6 4' : undefined}
              fill={circ.filled ? (circ.color || "#000000") : "none"}
              fillOpacity={circ.filled ? (circ.fillOpacity ?? 0.1) : undefined}
              pointerEvents="none"
            />
          );
        })}
"""
content = content.replace(
    "        {(() => {\n          const edCx = pointNames.reduce",
    circle_svg_str + "        {(() => {\n          const edCx = pointNames.reduce"
)

# 3. Add UI form for circles
circle_ui_str = """
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button type="button" onClick={() => updateGeometry({ ...geometry, circles: [...(geometry.circles || []), { center: pointNames[0] || 'A', radius: 2 }] })} style={{ alignSelf: 'flex-start', padding: '8px 12px', borderRadius: '10px', border: '1px solid #c4b5fd', background: '#fff', color: '#6d28d9', fontWeight: 800, cursor: 'pointer' }}>Add circle</button>
        {(geometry.circles || []).map((circ, idx) => (
          <div key={idx} style={{ display: 'grid', gridTemplateColumns: '80px 80px 80px auto auto 70px 80px', gap: '6px', alignItems: 'center' }}>
            <select value={circ.center} onChange={(e) => updateCircle(idx, { center: e.target.value })} style={{ padding: '6px', borderRadius: '8px', border: '1px solid #ddd6fe', width: '100%' }}>{pointNames.map((name) => <option key={name} value={name}>{name}</option>)}</select>
            <select value={circ.through || ''} onChange={(e) => updateCircle(idx, { through: e.target.value || undefined })} style={{ padding: '6px', borderRadius: '8px', border: '1px solid #ddd6fe', width: '100%' }}>
              <option value="">(Radius)</option>
              {pointNames.map((name) => <option key={name} value={name}>{name}</option>)}
            </select>
            <input type="number" step="0.1" value={circ.radius || ''} disabled={!!circ.through} onChange={(e) => updateCircle(idx, { radius: Number(e.target.value) || 0 })} style={{ padding: '6px', borderRadius: '8px', border: '1px solid #ddd6fe', width: '100%' }} placeholder="Rad" />
            <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', whiteSpace: 'nowrap' }}><input type="checkbox" checked={!!circ.dashed} onChange={(e) => updateCircle(idx, { dashed: e.target.checked || undefined })} /> Dashed</label>
            <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', whiteSpace: 'nowrap' }}><input type="checkbox" checked={!!circ.filled} onChange={(e) => updateCircle(idx, { filled: e.target.checked || undefined })} /> Filled</label>
            <input type="text" value={circ.color || ''} onChange={(e) => updateCircle(idx, { color: e.target.value || undefined })} style={{ padding: '6px', borderRadius: '8px', border: '1px solid #ddd6fe', width: '100%' }} placeholder="#color" />
            <button type="button" onClick={() => updateGeometry({ ...geometry, circles: (geometry.circles || []).filter((_, i) => i !== idx) })} style={{ border: 0, background: '#fff1f2', color: '#e11d48', borderRadius: '8px', padding: '6px 8px', cursor: 'pointer', fontWeight: 800, fontSize: '0.72rem' }}>Remove</button>
          </div>
        ))}
      </div>
"""
content = content.replace(
    "      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>\n        <div style={{ display: 'flex', gap: '10px' }}>\n          <button type=\"button\" onClick={() => updateGeometry({ ...geometry, angles:",
    circle_ui_str + "\n      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>\n        <div style={{ display: 'flex', gap: '10px' }}>\n          <button type=\"button\" onClick={() => updateGeometry({ ...geometry, angles:"
)

with open('src/components/QuestionBankModal.jsx', 'w') as f:
    f.write(content)
print("done")
