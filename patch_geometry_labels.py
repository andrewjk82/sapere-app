with open('src/components/GeometryFigure.jsx', 'r') as f:
    content = f.read()

helper = """
const formatLabel = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .replace(/\^\\\\circ/g, '°')
    .replace(/\\\\circ/g, '°')
    .replace(/\\\\alpha/g, 'α')
    .replace(/\\\\beta/g, 'β')
    .replace(/\\\\gamma/g, 'γ')
    .replace(/\\\\theta/g, 'θ')
    .replace(/\\\\pi/g, 'π')
    .replace(/\\^2/g, '²')
    .replace(/\\^3/g, '³')
    .replace(/\\\\sqrt/g, '√')
    .replace(/\\\\/g, '') // remove trailing backslashes if any
    .replace(/\$+/g, '');
};

const GeometryFigure = ({
"""

content = content.replace("const GeometryFigure = ({", helper)

# Now apply formatLabel to {ang.label}, {sl.text}, {label.text}
content = content.replace("{ang.label}", "{formatLabel(ang.label)}")
content = content.replace("{sl.text}", "{formatLabel(sl.text)}")
content = content.replace("{label.text}", "{formatLabel(label.text)}")

with open('src/components/GeometryFigure.jsx', 'w') as f:
    f.write(content)

print("GeometryFigure patched")
