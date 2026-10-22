// cos(x) over [0, 2π] — the function the network learns — with sampled
// inference points, framed as it streams off the ESP32.

const X0 = 52;
const X1 = 360;
const Y_MID = 150;
const AMP = 78;

const px = (t: number) => X0 + (t / (2 * Math.PI)) * (X1 - X0);
const py = (v: number) => Y_MID - v * AMP;

const curve = Array.from({ length: 121 }, (_, i) => {
  const t = (i / 120) * 2 * Math.PI;
  return `${i ? "L" : "M"}${px(t).toFixed(2)} ${py(Math.cos(t)).toFixed(2)}`;
}).join(" ");

const samples = Array.from({ length: 25 }, (_, i) => (i / 24) * 2 * Math.PI);

export function TinyMLCover() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Plot of cos(x) with sampled model predictions">
      <text x={X0} y="32" className="fill-dim font-mono" fontSize="9" letterSpacing="1.2">
        SERIAL PLOTTER · 115200 BAUD
      </text>
      <text x={X1} y="32" textAnchor="end" className="fill-pink font-mono" fontSize="9" letterSpacing="1.2">
        INT8 · 2,736 B
      </text>

      {[-1, -0.5, 0, 0.5, 1].map((v) => (
        <g key={v}>
          <line x1={X0} x2={X1} y1={py(v)} y2={py(v)} stroke="#2b2528" strokeDasharray={v === 0 ? undefined : "2 4"} />
          <text x={X0 - 10} y={py(v) + 3} textAnchor="end" className="font-mono" fontSize="8" fill="#756c71">
            {v.toFixed(1)}
          </text>
        </g>
      ))}

      {[
        [0, "0"],
        [Math.PI / 2, "π/2"],
        [Math.PI, "π"],
        [(3 * Math.PI) / 2, "3π/2"],
        [2 * Math.PI, "2π"],
      ].map(([t, label]) => (
        <text key={label} x={px(t as number)} y={py(-1) + 22} textAnchor="middle" className="font-mono" fontSize="8" fill="#756c71">
          {label}
        </text>
      ))}

      <path
        d={curve}
        fill="none"
        stroke="#fa4eab"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="draw-path"
        style={{ "--len": 520 } as React.CSSProperties}
      />

      {samples.map((t, i) => (
        <circle key={i} cx={px(t)} cy={py(Math.cos(t))} r="2.6" fill="#0d0b0c" stroke="#f5f0f2" strokeWidth="1.3" />
      ))}

      <g transform="translate(52 262)" className="font-mono" fontSize="8.5" fill="#756c71">
        <line x1="0" x2="16" y1="5" y2="5" stroke="#fa4eab" strokeWidth="2.5" strokeLinecap="round" />
        <text x="22" y="8">y = cos(x)</text>
        <circle cx="96" cy="5" r="2.6" fill="#0d0b0c" stroke="#f5f0f2" strokeWidth="1.3" />
        <text x="104" y="8">on-device inference</text>
      </g>
    </svg>
  );
}
