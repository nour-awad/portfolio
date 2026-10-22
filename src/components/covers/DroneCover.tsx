// A miniature of the Delivery Drone problem: a weighted grid with obstacles,
// solved with 8-directional A* at build time. The explored set is drawn too.

const COLS = 24;
const ROWS = 16;
const CELL = 14;
const OX = (400 - COLS * CELL) / 2;
const OY = 52;

type Cell = { wall: boolean; cost: 1 | 2 };
type Pt = [number, number];

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildGrid(seed: number): Cell[][] {
  const rand = mulberry32(seed);
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => {
      const r = rand();
      return { wall: r < 0.24, cost: r > 0.8 ? 2 : 1 } as Cell;
    }),
  );
}

function aStar(grid: Cell[][], start: Pt, goal: Pt) {
  const key = ([x, y]: Pt) => y * COLS + x;
  const h = ([x, y]: Pt) => Math.max(Math.abs(x - goal[0]), Math.abs(y - goal[1]));
  const g = new Map<number, number>([[key(start), 0]]);
  const parent = new Map<number, Pt>();
  const open: { p: Pt; f: number }[] = [{ p: start, f: h(start) }];
  const closed = new Set<number>();
  const explored: Pt[] = [];

  while (open.length) {
    open.sort((a, b) => a.f - b.f);
    const { p } = open.shift()!;
    const k = key(p);
    if (closed.has(k)) continue;
    closed.add(k);
    explored.push(p);
    if (p[0] === goal[0] && p[1] === goal[1]) {
      const path: Pt[] = [p];
      let cur = p;
      while (parent.has(key(cur))) path.unshift((cur = parent.get(key(cur))!));
      return { path, explored };
    }
    for (let dx = -1; dx <= 1; dx++)
      for (let dy = -1; dy <= 1; dy++) {
        if (!dx && !dy) continue;
        const n: Pt = [p[0] + dx, p[1] + dy];
        if (n[0] < 0 || n[1] < 0 || n[0] >= COLS || n[1] >= ROWS) continue;
        const cell = grid[n[1]][n[0]];
        if (cell.wall || closed.has(key(n))) continue;
        const step = cell.cost * (dx && dy ? Math.SQRT2 : 1);
        const tentative = g.get(k)! + step;
        if (tentative < (g.get(key(n)) ?? Infinity)) {
          g.set(key(n), tentative);
          parent.set(key(n), p);
          open.push({ p: n, f: tentative + h(n) });
        }
      }
  }
  return null;
}

function solve() {
  const start: Pt = [0, 0];
  const goal: Pt = [COLS - 3, ROWS - 2];
  for (let seed = 7; ; seed++) {
    const grid = buildGrid(seed);
    grid[start[1]][start[0]] = { wall: false, cost: 1 };
    grid[goal[1]][goal[0]] = { wall: false, cost: 1 };
    const result = aStar(grid, start, goal);
    // Prefer a layout where the route has to work around obstacles.
    if (result && result.path.length > COLS + 2) return { grid, start, goal, ...result };
  }
}

const { grid, start, goal, path, explored } = solve();
const cx = (x: number) => OX + x * CELL + CELL / 2;
const cy = (y: number) => OY + y * CELL + CELL / 2;
const d = path.map(([x, y], i) => `${i ? "L" : "M"}${cx(x)} ${cy(y)}`).join(" ");
const pathLength = path.reduce((len, p, i) => (i ? len + Math.hypot(p[0] - path[i - 1][0], p[1] - path[i - 1][1]) * CELL : 0), 0);
const onPath = new Set(path.map(([x, y]) => `${x},${y}`));

export function DroneCover() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="A* finding a path across a grid with obstacles">
      <text x={OX} y="32" className="fill-dim font-mono" fontSize="9" letterSpacing="1.2">
        A* · 8-DIRECTIONAL · WEIGHTED TERRAIN
      </text>
      <text x={400 - OX} y="32" textAnchor="end" className="fill-pink font-mono" fontSize="9" letterSpacing="1.2">
        {explored.length} EXPANDED
      </text>

      {grid.map((row, y) =>
        row.map((cell, x) =>
          cell.wall ? (
            <rect key={`${x}-${y}`} x={OX + x * CELL + 1} y={OY + y * CELL + 1} width={CELL - 2} height={CELL - 2} rx="2" fill="#2f282c" />
          ) : cell.cost === 2 ? (
            <rect key={`${x}-${y}`} x={OX + x * CELL + 1} y={OY + y * CELL + 1} width={CELL - 2} height={CELL - 2} rx="2" fill="#fa4eab" fillOpacity="0.09" />
          ) : null,
        ),
      )}

      {explored.map(([x, y]) =>
        onPath.has(`${x},${y}`) ? null : <circle key={`e${x}-${y}`} cx={cx(x)} cy={cy(y)} r="1.4" fill="#aba1a6" fillOpacity="0.35" />,
      )}

      <path
        d={d}
        fill="none"
        stroke="#fa4eab"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="draw-path"
        style={{ "--len": Math.ceil(pathLength) } as React.CSSProperties}
      />

      <circle cx={cx(start[0])} cy={cy(start[1])} r="5" fill="#f5f0f2" />
      <circle cx={cx(goal[0])} cy={cy(goal[1])} r="7" fill="none" stroke="#fa4eab" strokeWidth="1.5" />
      <circle cx={cx(goal[0])} cy={cy(goal[1])} r="3" fill="#fa4eab" />

      <g className="font-mono" fontSize="8.5" fill="#756c71">
        <rect x={OX} y="282" width="8" height="8" rx="1.5" fill="#2f282c" />
        <text x={OX + 13} y="289">obstacle</text>
        <rect x={OX + 68} y="282" width="8" height="8" rx="1.5" fill="#fa4eab" fillOpacity="0.18" />
        <text x={OX + 81} y="289">cost ×2</text>
        <circle cx={OX + 136} cy="286" r="1.6" fill="#aba1a6" />
        <text x={OX + 143} y="289">explored</text>
      </g>
    </svg>
  );
}
