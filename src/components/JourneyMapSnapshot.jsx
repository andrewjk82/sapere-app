import { useEffect, useRef } from 'react';

// ── Deterministic pseudo-random (seeded) ─────────────────────────────────────
function seededRand(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

// ── Build a static mini-graph layout ─────────────────────────────────────────
function buildMiniGraph(W, H, completedCount = 0, totalYears = 12) {
  const rand = seededRand(42);
  const cx = W / 2, cy = H / 2;

  // Year nodes arranged in a loose sphere around centre
  const YEAR_COLORS = [
    '#818cf8','#a78bfa','#c084fc','#e879f9','#f472b6','#fb7185',
    '#f97316','#eab308','#84cc16','#22c55e','#14b8a6','#06b6d4',
  ];

  const yearNodes = YEAR_COLORS.map((color, i) => {
    const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const r = Math.min(W, H) * 0.33 + (rand() - 0.5) * 14;
    return {
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
      r: 8,
      color,
      done: i < completedCount,
      label: `Y${i + 1}`,
    };
  });

  // Subject nodes — 3–5 per year, clustered around their year node
  const subjNodes = [];
  yearNodes.forEach((yn, yi) => {
    const count = 3 + Math.floor(rand() * 3);
    for (let s = 0; s < count; s++) {
      const angle = rand() * Math.PI * 2;
      const r = 18 + rand() * 12;
      subjNodes.push({
        x: yn.x + Math.cos(angle) * r,
        y: yn.y + Math.sin(angle) * r,
        r: 3.5,
        color: yn.color,
        done: yn.done,
        yi,
      });
    }
  });

  // Student (centre)
  const student = { x: cx, y: cy, r: 11 };

  // Links: student → each year, year → its subjects
  const links = [];
  yearNodes.forEach((yn, i) => {
    links.push({ x1: student.x, y1: student.y, x2: yn.x, y2: yn.y, color: yn.color, done: yn.done });
    subjNodes.filter(s => s.yi === i).forEach(s => {
      links.push({ x1: yn.x, y1: yn.y, x2: s.x, y2: s.y, color: yn.color, done: yn.done });
    });
  });

  return { student, yearNodes, subjNodes, links };
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function JourneyMapSnapshot({ profile, onClick }) {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const W = canvas.width  = canvas.offsetWidth  * devicePixelRatio;
    const H = canvas.height = canvas.offsetHeight * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    const w = canvas.offsetWidth, h = canvas.offsetHeight;

    const completedCount = (profile?.completedChapters?.length || 0);
    const rawYear   = Array.isArray(profile?.assignedYear) ? profile.assignedYear[0] : profile?.assignedYear;
    const yearIdx   = rawYear ? (parseInt(String(rawYear).replace(/\D/g,''), 10) || 1) - 1 : 0;
    // auto-complete past years
    const effectiveDone = Math.max(completedCount > 0 ? yearIdx : 0, 0);

    const graph = buildMiniGraph(w, h, effectiveDone);
    let tick = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Background
      const bg = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w*0.7);
      bg.addColorStop(0, '#16153a');
      bg.addColorStop(1, '#09090f');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const pulse = 0.85 + Math.sin(tick * 0.04) * 0.15;

      // Links
      graph.links.forEach(l => {
        ctx.beginPath();
        ctx.moveTo(l.x1, l.y1);
        ctx.lineTo(l.x2, l.y2);
        ctx.strokeStyle = l.done
          ? l.color + 'cc'
          : '#ffffff18';
        ctx.lineWidth = l.done ? 1.2 : 0.7;
        ctx.stroke();
      });

      // Subject nodes
      graph.subjNodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.done ? n.color + 'cc' : '#4a4a6a55';
        ctx.fill();
      });

      // Year nodes
      graph.yearNodes.forEach((n, i) => {
        // Glow for completed
        if (n.done) {
          const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 2.5);
          grd.addColorStop(0, n.color + '55');
          grd.addColorStop(1, n.color + '00');
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 2.5 * pulse, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.done ? n.color : '#3a3a5a';
        ctx.fill();
      });

      // Student node — glowing centre
      const glowR = graph.student.r * 2.2 * pulse;
      const grad = ctx.createRadialGradient(
        graph.student.x, graph.student.y, 0,
        graph.student.x, graph.student.y, glowR
      );
      grad.addColorStop(0, 'rgba(129,140,248,0.5)');
      grad.addColorStop(1, 'rgba(129,140,248,0)');
      ctx.beginPath();
      ctx.arc(graph.student.x, graph.student.y, glowR, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(graph.student.x, graph.student.y, graph.student.r, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      tick++;
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, [profile]);

  const name = profile?.displayName || profile?.name || '';
  const firstName = name.split(' ')[0];
  const title = firstName ? `${firstName}'s Journey Map` : 'My Journey Map';

  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        borderRadius: '28px',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#09090f',
        boxShadow: '0 15px 40px rgba(99,102,241,0.2)',
        border: '1px solid rgba(129,140,248,0.2)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        minHeight: '180px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 22px 50px rgba(99,102,241,0.32)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(99,102,241,0.2)';
      }}
    >
      {/* Canvas fills the card */}
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%', minHeight: '180px' }}
      />

      {/* Overlay text */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '20px 22px',
        background: 'linear-gradient(to top, rgba(9,9,15,0.85) 0%, transparent 60%)',
        pointerEvents: 'none',
      }}>
        <div style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#818cf8', marginBottom: '4px' }}>
          Interactive 3D Map
        </div>
        <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
          {title}
        </div>
        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', marginTop: '3px' }}>
          Year 1 – 12 · tap to explore
        </div>
      </div>

      {/* Arrow badge */}
      <div style={{
        position: 'absolute', top: '16px', right: '16px',
        width: '32px', height: '32px', borderRadius: '10px',
        background: 'rgba(129,140,248,0.2)',
        border: '1px solid rgba(129,140,248,0.35)',
        display: 'grid', placeItems: 'center',
        color: '#818cf8', fontSize: '1rem', pointerEvents: 'none',
      }}>↗</div>
    </div>
  );
}
