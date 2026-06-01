import re

with open('src/components/GeometryFigure.jsx', 'r') as f:
    content = f.read()

# We need to find the bounds calculation:
# const allX = Object.values(points).map(p => p[0]);
# const allY = Object.values(points).map(p => p[1]);

new_calc = """
  let allX = Object.values(points).map(p => p[0]);
  let allY = Object.values(points).map(p => p[1]);

  // Include circles in bounds
  if (circles && circles.length > 0) {
    circles.forEach(c => {
      const center = points[c.center];
      if (!center) return;
      let r = c.radius || 0;
      if (c.through && points[c.through]) {
        const pt = points[c.through];
        r = Math.hypot(pt[0] - center[0], pt[1] - center[1]);
      }
      if (r > 0) {
        allX.push(center[0] - r, center[0] + r);
        allY.push(center[1] - r, center[1] + r);
      }
    });
  }
"""

content = content.replace("  const allX = Object.values(points).map(p => p[0]);\n  const allY = Object.values(points).map(p => p[1]);", new_calc)

with open('src/components/GeometryFigure.jsx', 'w') as f:
    f.write(content)

print("GeometryFigure patched")
