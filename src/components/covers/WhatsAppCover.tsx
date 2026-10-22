// WhatsApp Clone: a live chat thread beside the service topology it runs on.

const thread = [
  { me: false, text: "is the socket layer merged?" },
  { me: true, text: "yep, rate limits too" },
  { me: false, text: "messages feel instant now" },
  { me: true, text: "under 300 ms end to end" },
];

const Ticks = ({ x, y }: { x: number; y: number }) => (
  <path d={`M${x} ${y} l2.4 2.4 l4.6 -4.6 M${x + 4} ${y + 2.4} l4.6 -4.6`} fill="none" stroke="#fa4eab" strokeWidth="1.2" strokeLinecap="round" />
);

function Node({ x, y, w, label, hot }: { x: number; y: number; w: number; label: string; hot?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="24" rx="7" fill={hot ? "#fa4eab" : "#1d191b"} fillOpacity={hot ? 0.14 : 1} stroke={hot ? "#fa4eab" : "#3a3236"} />
      <text x={x + w / 2} y={y + 15.5} textAnchor="middle" className="font-mono" fontSize="7.5" letterSpacing="0.6" fill={hot ? "#f5f0f2" : "#aba1a6"}>
        {label}
      </text>
    </g>
  );
}

export function WhatsAppCover() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Chat thread next to a microservice architecture diagram">
      {/* chat */}
      <rect x="26" y="26" width="186" height="248" rx="16" fill="#1d191b" stroke="#2b2528" />
      <circle cx="48" cy="50" r="10" fill="#fa4eab" fillOpacity="0.25" />
      <text x="66" y="48" className="font-sans" fontSize="10" fill="#f5f0f2">
        Study group
      </text>
      <text x="66" y="59" className="font-mono" fontSize="7" fill="#756c71">
        4 online
      </text>
      <line x1="26" x2="212" y1="72" y2="72" stroke="#2b2528" />

      {thread.map((m, i) => {
        const y = 86 + i * 40;
        const w = m.text.length * 4.9 + 22;
        const x = m.me ? 200 - w : 38;
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height="26" rx="10" fill={m.me ? "#fa4eab" : "#2b2528"} fillOpacity={m.me ? 0.16 : 1} stroke={m.me ? "#fa4eab" : "none"} strokeOpacity="0.45" />
            <text x={x + 10} y={y + 16.5} className="font-sans" fontSize="9" fill="#f5f0f2">
              {m.text}
            </text>
            {m.me && <Ticks x={x + w - 15} y={y + 31} />}
          </g>
        );
      })}

      <g fill="#756c71">
        <circle cx="48" cy="257" r="2" />
        <circle cx="55" cy="257" r="2" opacity="0.7" />
        <circle cx="62" cy="257" r="2" opacity="0.4" />
      </g>

      {/* topology */}
      <text x="232" y="38" className="font-mono" fontSize="8" letterSpacing="1.2" fill="#756c71">
        SERVICES
      </text>
      <g stroke="#3a3236" strokeWidth="1">
        <line x1="306" y1="74" x2="306" y2="104" />
        <path d="M306 128 V140 M254 140 H362 M254 140 V152 M306 140 V152 M362 140 V152" fill="none" />
        <path d="M306 176 V194 M272 194 H340 M272 194 V206 M340 194 V206" fill="none" strokeDasharray="2 3" />
      </g>
      <path d="M332 164 C 386 150, 386 70, 360 62" fill="none" stroke="#fa4eab" strokeWidth="1.3" strokeDasharray="3 3" />
      <text x="378" y="118" className="font-mono" fontSize="7" fill="#fa4eab" transform="rotate(90 378 118)" textAnchor="middle">
        socket.io
      </text>

      <Node x={246} y={50} w={120} label="REACT CLIENT" />
      <Node x={246} y={104} w={120} label="API GATEWAY" />
      <Node x={230} y={152} w={48} label="USER" />
      <Node x={282} y={152} w={48} label="MESSAGE" hot />
      <Node x={334} y={152} w={48} label="VIDEO" />
      <Node x={244} y={206} w={56} label="REDIS" />
      <Node x={312} y={206} w={56} label="MONGODB" />

      <text x="232" y="262" className="font-mono" fontSize="7.5" letterSpacing="1" fill="#756c71">
        DOCKER COMPOSE · JWT AUTH
      </text>
    </svg>
  );
}
