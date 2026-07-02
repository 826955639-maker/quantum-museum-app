export type BadgeType = "eye" | "wave" | "maze";

/* Hexagon path helpers — pointy-top hexagon around (60,58) */
function hexPath(r: number, cx = 60, cy = 58) {
  const pts = [90, 30, -30, -90, 210, 150].map((deg) => {
    const a = (deg * Math.PI) / 180;
    return `${(cx + Math.cos(a) * r).toFixed(2)},${(cy - Math.sin(a) * r).toFixed(2)}`;
  });
  return `M${pts.join("L")}Z`;
}

/* Glyph drawn in a 24×24 box centred on (60,58) */
function Glyph({ type, glow }: { type: BadgeType; glow?: boolean }) {
  const stroke = glow
    ? { stroke: "#b79dff", strokeWidth: 4.6, opacity: 0.85, filter: "url(#bm-blur)" }
    : { stroke: "#f4efff", strokeWidth: 2.1 };
  return (
    <g
      transform="translate(41.5 39.5) scale(1.55)"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...stroke}
    >
      {type === "eye" && (
        <>
          <path d="M2 12s3.6-6.6 10-6.6S22 12 22 12s-3.6 6.6-10 6.6S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3.4" />
          <circle cx="12" cy="12" r="1.2" fill={glow ? "none" : "#f4efff"} stroke="none" />
        </>
      )}
      {type === "wave" && (
        <path d="M2 12.5h3.2l1.6-4 2.4 8.5L12 4.5l2.6 13 2.2-9 1.6 3.5H22" />
      )}
      {type === "maze" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="1.6" />
          <path d="M3 9h5M3 15h4M9 3v5M15 3v4M21 9h-4M21 15h-6M9 21v-5M15 21v-4M11 9h2v6h-2z" />
        </>
      )}
    </g>
  );
}

/* Award medal recreated from the reference sheet:
   dotted ring + diamond sparkles, laurel wreath, metallic bevelled
   hexagon rim, deep-space face with star specks, glowing white glyph */
export default function BadgeMedal({ type }: { type: BadgeType }) {
  const uid = `bm-${type}`;
  // laurel leaves along two lower arcs
  const laurel = (side: 1 | -1) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (108 + i * 13) * (Math.PI / 180); // from lower-side upward
      const rr = 50;
      const x = 60 + side * Math.sin(a) * rr;
      const y = 58 + Math.cos(a) * rr + 8;
      const rot = side * (28 + i * 13);
      return (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="4.6"
          ry="1.9"
          transform={`rotate(${90 - rot} ${x} ${y})`}
        />
      );
    });

  return (
    <svg viewBox="0 0 120 124" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="badge-medal">
      <defs>
        <linearGradient id={`${uid}-rim`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e6dcff" />
          <stop offset="30%" stopColor="#9d7bf0" />
          <stop offset="62%" stopColor="#6337d0" />
          <stop offset="100%" stopColor="#391c96" />
        </linearGradient>
        <linearGradient id={`${uid}-rim2`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#c9b6ff" />
          <stop offset="100%" stopColor="#4c27b0" />
        </linearGradient>
        <radialGradient id={`${uid}-face`} cx="50%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#2c1d6e" />
          <stop offset="55%" stopColor="#1a1050" />
          <stop offset="100%" stopColor="#0d0730" />
        </radialGradient>
        <radialGradient id={`${uid}-aura`} cx="50%" cy="48%" r="50%">
          <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3a1c8c" stopOpacity="0" />
        </radialGradient>
        <filter id="bm-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.8" />
        </filter>
        <filter id={`${uid}-soft`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>

      {/* ambient aura */}
      <circle cx="60" cy="58" r="52" fill={`url(#${uid}-aura)`} />

      {/* dotted circular ring */}
      <circle
        cx="60"
        cy="58"
        r="51"
        stroke="#b9a6ee"
        strokeOpacity="0.75"
        strokeWidth="1.6"
        strokeDasharray="0.2 5.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* small ring beads left/right */}
      <circle cx="8" cy="58" r="1.6" fill="#cabaff" opacity="0.9" />
      <circle cx="112" cy="58" r="1.6" fill="#cabaff" opacity="0.9" />

      {/* diamond sparkles top & bottom of the ring */}
      <path d="M60 0l3.2 6-3.2 6-3.2-6Z" fill="#e8ddff" />
      <path d="M60 112l3.2 6-3.2 6-3.2-6Z" fill="#e8ddff" opacity="0.95" />

      {/* laurel wreath */}
      <g fill="#5b4a9e" opacity="0.95">
        {laurel(1)}
        {laurel(-1)}
      </g>
      <g stroke="#5b4a9e" strokeWidth="1.4" fill="none" opacity="0.9">
        <path d="M27 96c8 8 18 12 28 13" />
        <path d="M93 96c-8 8-18 12-28 13" />
      </g>

      {/* metallic rim (rounded via stroke join) */}
      <path d={hexPath(38)} fill={`url(#${uid}-rim)`} stroke={`url(#${uid}-rim)`} strokeWidth="9" strokeLinejoin="round" />
      {/* inner bevel step */}
      <path d={hexPath(33.5)} fill="none" stroke={`url(#${uid}-rim2)`} strokeWidth="3.4" strokeLinejoin="round" />
      {/* deep-space face */}
      <path d={hexPath(31)} fill={`url(#${uid}-face)`} stroke="#cabaff" strokeOpacity="0.55" strokeWidth="1" strokeLinejoin="round" />

      {/* rim top gloss */}
      <path d="M35 41 60 26.5 85 41" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="2.2" strokeLinecap="round" fill="none" filter={`url(#${uid}-soft)`} />

      {/* face star specks */}
      <g fill="#cabaff">
        <circle cx="45" cy="42" r="0.9" opacity="0.85" />
        <circle cx="76" cy="47" r="0.7" opacity="0.7" />
        <circle cx="42" cy="72" r="0.7" opacity="0.6" />
        <circle cx="78" cy="70" r="0.9" opacity="0.75" />
      </g>
      {/* tiny diamond sparkles inside face, above & below glyph */}
      <path d="M60 33.5l1.7 3-1.7 3-1.7-3Z" fill="#e8ddff" opacity="0.9" />
      <path d="M60 76.5l1.7 3-1.7 3-1.7-3Z" fill="#e8ddff" opacity="0.85" />

      {/* glyph: glow underlay + crisp white */}
      <Glyph type={type} glow />
      <Glyph type={type} />

      {/* side light streaks on the face (lens flare feel) */}
      <path d="M31 58h10M79 58h10" stroke="#e8ddff" strokeOpacity="0.5" strokeWidth="1" strokeLinecap="round" filter={`url(#${uid}-soft)`} />
    </svg>
  );
}
