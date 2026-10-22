// Code QA retrieval: arbitrary text chunks vs. an AST-derived graph, answering the same query.

const chunks = [
  [0.9, 0.7, 0.8],
  [0.6, 0.95, 0.5],
  [0.85, 0.4, 0.75],
  [0.7, 0.9, 0.55],
];

type GNode = { id: string; x: number; y: number; label: string; hot?: boolean };

const nodes: GNode[] = [
  { id: "m", x: 300, y: 98, label: "module" },
  { id: "c1", x: 258, y: 146, label: "class" },
  { id: "c2", x: 342, y: 146, label: "class" },
  { id: "f1", x: 236, y: 198, label: "def" },
  { id: "f2", x: 280, y: 198, label: "@def", hot: true },
  { id: "f3", x: 322, y: 198, label: "def" },
  { id: "f4", x: 364, y: 198, label: "def" },
];
const edges = [
  ["m", "c1"],
  ["m", "c2"],
  ["c1", "f1"],
  ["c1", "f2"],
  ["c2", "f3"],
  ["c2", "f4"],
];
const at = (id: string) => nodes.find((n) => n.id === id)!;

export function RagCover() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Text-chunk retrieval compared with AST graph retrieval for a code question">
      <rect x="70" y="20" width="260" height="28" rx="14" fill="#1d191b" stroke="#3a3236" />
      <text x="86" y="38" className="font-mono" fontSize="8.5" fill="#fa4eab">
        Q
      </text>
      <text x="100" y="38" className="font-sans" fontSize="9.5" fill="#f5f0f2">
        Which function has a decorator?
      </text>

      <line x1="200" y1="62" x2="200" y2="262" stroke="#2b2528" strokeDasharray="2 4" />

      {/* P1: text chunks */}
      <text x="36" y="78" className="font-mono" fontSize="8" letterSpacing="1.2" fill="#756c71">
        P1 · TEXT CHUNKS
      </text>
      {chunks.map((lines, i) => {
        const y = 92 + i * 40;
        const hit = i === 1;
        return (
          <g key={i}>
            <rect x="36" y={y} width="140" height="32" rx="6" fill="#1d191b" stroke={hit ? "#aba1a6" : "#2b2528"} strokeDasharray={hit ? "3 3" : undefined} />
            {lines.map((w, j) => (
              <rect key={j} x="46" y={y + 7 + j * 7} width={118 * w} height="3" rx="1.5" fill={hit ? "#756c71" : "#3a3236"} />
            ))}
          </g>
        );
      })}
      <path d="M150 48 C 150 70, 176 96, 176 108" fill="none" stroke="#756c71" strokeDasharray="2 3" />
      <text x="36" y="262" className="font-mono" fontSize="7.5" fill="#756c71">
        regex splits cut context
      </text>

      {/* P2: AST graph */}
      <text x="224" y="78" className="font-mono" fontSize="8" letterSpacing="1.2" fill="#756c71">
        P2 · AST GRAPH
      </text>
      {edges.map(([a, b]) => (
        <line key={a + b} x1={at(a).x} y1={at(a).y} x2={at(b).x} y2={at(b).y} stroke="#3a3236" />
      ))}
      <path d={`M${at("f2").x} ${at("f2").y + 12} C 290 232, 312 232, ${at("f3").x} ${at("f3").y + 12}`} fill="none" stroke="#756c71" strokeDasharray="2 3" />
      <text x="301" y="240" textAnchor="middle" className="font-mono" fontSize="6.5" fill="#756c71">
        calls
      </text>
      <path d="M250 48 C 250 120, 280 150, 280 186" fill="none" stroke="#fa4eab" strokeWidth="1.3" />
      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={n.hot ? 13 : 11} fill={n.hot ? "#fa4eab" : "#1d191b"} fillOpacity={n.hot ? 0.2 : 1} stroke={n.hot ? "#fa4eab" : "#3a3236"} />
          <text x={n.x} y={n.y + 2.8} textAnchor="middle" className="font-mono" fontSize="6.5" fill={n.hot ? "#f5f0f2" : "#aba1a6"}>
            {n.label}
          </text>
        </g>
      ))}
      <text x="224" y="262" className="font-mono" fontSize="7.5" fill="#fa4eab">
        structure preserved
      </text>
    </svg>
  );
}
