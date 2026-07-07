export type ZoneVisualType = "creation" | "perception" | "future";

type ZoneVisualProps = {
  type: ZoneVisualType;
};

/* Isometric wireframe cube (front face + visible back edges).
   Optional translucent glowing side/top faces give the "量子感" glass look. */
function WireCube({
  cx,
  cy,
  s,
  d,
  stroke = "#c3b0ff",
  sw = 1.4,
  opacity = 1,
  face = "rgba(150,120,255,0.07)",
  glow,
}: {
  cx: number;
  cy: number;
  s: number;
  d?: number;
  stroke?: string;
  sw?: number;
  opacity?: number;
  face?: string;
  glow?: string;
}) {
  const h = s / 2;
  const dd = d ?? s * 0.42;
  const f = [
    [cx - h, cy - h],
    [cx + h, cy - h],
    [cx + h, cy + h],
    [cx - h, cy + h],
  ];
  const b = f.map(([x, y]) => [x + dd, y - dd]);
  return (
    <g opacity={opacity} filter={glow} strokeLinejoin="round">
      {/* translucent glowing faces */}
      <path d={`M${f[0]} L${b[0]} L${b[1]} L${f[1]} Z`} fill={face} stroke="none" />
      <path d={`M${f[1]} L${b[1]} L${b[2]} L${f[2]} Z`} fill={face} stroke="none" />
      <path d={`M${b[0]} L${b[1]} L${b[2]}`} fill="none" stroke={stroke} strokeWidth={sw} strokeOpacity="0.5" />
      <path d={`M${f[0]} L${b[0]}`} fill="none" stroke={stroke} strokeWidth={sw} strokeOpacity="0.5" />
      <path d={`M${f[2]} L${b[2]}`} fill="none" stroke={stroke} strokeWidth={sw} strokeOpacity="0.55" />
      <path d={`M${f[0]} L${f[1]} L${f[2]} L${f[3]} Z`} fill="none" stroke={stroke} strokeWidth={sw} />
      <path d={`M${f[1]} L${b[1]}`} fill="none" stroke={stroke} strokeWidth={sw} strokeOpacity="0.7" />
    </g>
  );
}

/* 创见区 — Schrödinger cat sitting inside a neon wireframe cube, wrapped in a
   dense electron-cloud of glowing orbit ellipses with bright energy particles. */
function CreationVisual() {
  const CX = 250;
  const CY = 104;
  // dense swirl of orbit ellipses (electron cloud) — bright neon purple
  const orbits = [
    { rx: 150, ry: 30, rot: -24, o: 0.9, w: 1.6, c: "#d8ccff" },
    { rx: 138, ry: 54, rot: -6, o: 0.62, w: 1.2, c: "#b49bff" },
    { rx: 146, ry: 40, rot: 15, o: 0.78, w: 1.3, c: "#cbb9ff" },
    { rx: 126, ry: 64, rot: 34, o: 0.5, w: 1.1, c: "#9d84f5" },
    { rx: 150, ry: 22, rot: 54, o: 0.42, w: 1, c: "#af96ff" },
  ];
  // bright particles riding the cloud
  const riders: Array<[number, number, number, string]> = [
    [116, 138, 4.4, "#fff"],
    [388, 96, 3, "#e8dcff"],
    [176, 48, 2.4, "#fff"],
    [326, 156, 2.8, "#d7c9ff"],
    [104, 90, 2.1, "#c4b5fd"],
  ];
  return (
    <svg className="zone-visual zone-visual--creation" viewBox="0 0 420 190" aria-hidden="true">
      <defs>
        <radialGradient id="cv-floor" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c39bff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#3a1f7a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cv-aura" cx="50%" cy="48%" r="55%">
          <stop offset="0%" stopColor="#6a4ee0" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#0d0a24" stopOpacity="0" />
        </radialGradient>
        <filter id="cv-soft" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
        {/* neon glow: blur the source and lay the crisp line back on top */}
        <filter id="cv-neon" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.9" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx={CX} cy="98" rx="156" ry="90" fill="url(#cv-aura)" />
      <ellipse className="zone-visual__energy" cx={CX} cy="156" rx="82" ry="14" fill="url(#cv-floor)" filter="url(#cv-soft)" />

      {/* back half of the electron cloud */}
      <g className="zone-visual__orbits" fill="none" filter="url(#cv-neon)">
        {orbits.slice(0, 2).map((o, i) => (
          <ellipse key={`b${i}`} cx={CX} cy={CY} rx={o.rx} ry={o.ry} stroke={o.c} strokeWidth={o.w} strokeOpacity={o.o * 0.7} transform={`rotate(${o.rot} ${CX} ${CY})`} />
        ))}
      </g>

      {/* containment cube (floats gently) */}
      <g className="zone-visual__floating-cube--center">
        <WireCube cx={CX} cy={98} s={88} d={34} stroke="#dbccff" sw={1.7} glow="url(#cv-neon)" face="rgba(150,120,255,0.06)" />
      </g>

      {/* cat artwork (PNG) sitting inside the cube */}
      <image
        href="/creation-cat.png"
        x="217"
        y="58"
        width="66"
        height="80"
        preserveAspectRatio="xMidYMid meet"
      />

      {/* front half of the electron cloud */}
      <g className="zone-visual__orbits" fill="none" filter="url(#cv-neon)">
        {orbits.slice(2).map((o, i) => (
          <ellipse key={`f${i}`} cx={CX} cy={CY} rx={o.rx} ry={o.ry} stroke={o.c} strokeWidth={o.w} strokeOpacity={o.o} transform={`rotate(${o.rot} ${CX} ${CY})`} />
        ))}
      </g>

      {/* bright energy particles + a strong glow node at the base */}
      <circle cx="190" cy="146" r="7.5" fill="#fff" filter="url(#cv-soft)" />
      <circle className="zone-visual__moving-dot" cx="330" cy="70" r="2.6" fill="#fff" />
      <circle className="zone-visual__moving-dot--two" cx="150" cy="150" r="2.4" fill="#e8dcff" />
      {riders.map(([x, y, r, c], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={c} filter="url(#cv-soft)" />
      ))}
      <path d="M124 62l1.7 4.6 4.6 1.7-4.6 1.7-1.7 4.6-1.7-4.6-4.6-1.7 4.6-1.7Z" fill="#fff" opacity="0.92" />
      <g className="zone-visual__stars" fill="#e0d4ff">
        <circle cx="146" cy="40" r="1.7" opacity="0.85" />
        <circle cx="356" cy="48" r="1.7" opacity="0.72" />
        <circle cx="400" cy="146" r="1.6" opacity="0.6" />
      </g>
    </svg>
  );
}

/* 感知区 — particle-stream light wave dispersing through a glass prism into a
   full rainbow spectrum, over a faint perspective grid floor. */
function PerceptionVisual() {
  // sine wave rendered as a stream of particles (like the reference)
  const dots: Array<[number, number, number]> = [];
  for (let i = 0; i <= 46; i += 1) {
    const x = 14 + i * 4.6;
    const y = 88 + Math.sin(i * 0.42) * 30;
    const r = 0.7 + (Math.sin(i * 1.3) * 0.5 + 0.6) * 1.4;
    dots.push([x, y, r]);
  }
  // rainbow spectrum fanning out of the prism (红橙黄绿蓝紫)
  const spectrum = [
    { c: "#ff4d4d", y2: 60, w: 2.6 },
    { c: "#ff9a3d", y2: 70, w: 2.2 },
    { c: "#ffe14d", y2: 80, w: 2 },
    { c: "#5dff9b", y2: 92, w: 2 },
    { c: "#4db8ff", y2: 104, w: 2.2 },
    { c: "#9a6bff", y2: 116, w: 2.6 },
  ];
  return (
    <svg className="zone-visual zone-visual--perception" viewBox="0 0 420 190" aria-hidden="true">
      <defs>
        <radialGradient id="pv-prism" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3b1f7a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pv-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d6c8ff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#6a4ed6" stopOpacity="0.05" />
        </linearGradient>
        {spectrum.map((s, i) => (
          <linearGradient key={i} id={`pv-sp${i}`} x1="0" x2="1">
            <stop offset="0%" stopColor={s.c} stopOpacity="0" />
            <stop offset="20%" stopColor={s.c} stopOpacity="0.9" />
            <stop offset="100%" stopColor={s.c} stopOpacity="0.85" />
          </linearGradient>
        ))}
        <filter id="pv-soft" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id="pv-neon" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* perspective grid floor */}
      <g className="zone-visual__grid" stroke="#4a3a86" strokeWidth="0.7" strokeOpacity="0.34" fill="none">
        <path d="M18 178h384M58 162h304M96 148h228M126 137h168" />
        <path d="M18 178 152 137M96 178 170 137M182 178 192 137M272 178 214 137M362 178 236 137M402 178 250 137" />
      </g>

      {/* particle-stream sine wave */}
      <path
        d={`M${dots.map((d) => d.slice(0, 2).join(",")).join(" L")}`}
        stroke="#a78bfa"
        strokeWidth="7"
        strokeOpacity="0.18"
        fill="none"
        strokeLinecap="round"
        filter="url(#pv-soft)"
      />
      <g className="zone-visual__wave-particles">
        {dots.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={i % 6 === 0 ? "#ffffff" : "#d7c9ff"} opacity={0.55 + (r - 0.7) * 0.3} />
        ))}
      </g>

      {/* prism glow */}
      <ellipse cx="300" cy="86" rx="66" ry="52" fill="url(#pv-prism)" />

      {/* rainbow spectrum fanning out (behind the prism edge) */}
      <g className="zone-visual__rays" strokeLinecap="round">
        {spectrum.map((s, i) => (
          <path key={i} d={`M322 92 L416 ${s.y2}`} stroke={`url(#pv-sp${i})`} strokeWidth={s.w} filter="url(#pv-soft)" />
        ))}
      </g>

      {/* glass wireframe prism */}
      <path d="M300 38 L262 114 L350 106 Z" fill="url(#pv-glass)" stroke="none" />
      <g stroke="#e0d3ff" strokeWidth="1.6" fill="none" strokeLinejoin="round" filter="url(#pv-neon)">
        <path d="M300 38 L262 114 L350 106 Z" />
        <path d="M300 38 L300 120 M262 114 L300 120 L350 106" strokeOpacity="0.55" />
      </g>
      <circle cx="303" cy="90" r="6.5" fill="#fff" filter="url(#pv-soft)" />

      {/* incoming photon + stars */}
      <circle cx="70" cy="42" r="2.4" fill="#fff" filter="url(#pv-soft)" />
      <g className="zone-visual__stars" fill="#d7c9ff">
        <circle cx="150" cy="32" r="1.6" opacity="0.7" />
        <circle cx="396" cy="34" r="1.6" opacity="0.6" />
        <circle cx="210" cy="40" r="1.3" opacity="0.5" />
      </g>
    </svg>
  );
}

/* 引领区 — entangled wireframe cubes (each with a glowing particle core)
   floating above a multi-layer glowing chip platform with circuit traces. */
function FutureVisual() {
  const CX = 250;
  // radiating particle-burst core (starburst) inside the centre cube
  const burst = Array.from({ length: 14 }, (_, k) => {
    const a = (Math.PI * 2 * k) / 14;
    const r = 15 + (k % 2) * 5;
    return [Math.cos(a) * r, Math.sin(a) * r] as const;
  });
  return (
    <svg className="zone-visual zone-visual--future" viewBox="0 0 420 190" aria-hidden="true">
      <defs>
        <radialGradient id="fv-chip" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b49bff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#1a1145" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fv-aura" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#5b45d6" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#0d0a24" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fv-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="45%" stopColor="#c9b6ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7a5cf0" stopOpacity="0" />
        </radialGradient>
        <filter id="fv-soft" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id="fv-neon" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse cx={CX} cy="92" rx="170" ry="90" fill="url(#fv-aura)" />

      {/* circuit traces radiating from the chip */}
      <g className="zone-visual__connections" stroke="#6a55c0" strokeWidth="0.9" strokeOpacity="0.55" fill="none">
        <path d="M250 150 H150 V120M250 150 H350 V126M180 150 V172H150M320 150 V172H352M210 164 H120M290 164 H382" />
      </g>
      <g fill="#8c78e8">
        <rect x="147" y="118" width="4" height="4" />
        <rect x="349" y="124" width="4" height="4" />
        <rect x="118" y="162" width="4" height="4" />
        <rect x="380" y="162" width="4" height="4" />
      </g>

      {/* glowing concentric chip platform */}
      <ellipse cx={CX} cy="150" rx="92" ry="28" fill="url(#fv-chip)" filter="url(#fv-soft)" />
      <g stroke="#c9b6ff" fill="none" filter="url(#fv-neon)">
        <path className="zone-visual__platform-scan" d="M250 126 L332 150 L250 174 L168 150 Z" strokeWidth="1.6" strokeOpacity="0.8" />
        <path d="M250 134 L310 150 L250 166 L190 150 Z" strokeWidth="1.2" strokeOpacity="0.55" />
        <path d="M250 141 L282 150 L250 159 L218 150 Z" strokeWidth="1" strokeOpacity="0.4" />
      </g>
      <circle cx={CX} cy="150" r="3.4" fill="#fff" filter="url(#fv-soft)" />

      {/* dashed entanglement links + vertical drop lines */}
      <g className="zone-visual__connections" stroke="#b7a3ff" strokeWidth="1.2" fill="none">
        <path d="M176 62 L236 92" />
        <path d="M324 64 L272 92" />
        <path d="M250 112 L250 128" strokeOpacity="0.6" />
        <path d="M176 74 L188 128" strokeOpacity="0.4" />
        <path d="M324 76 L312 128" strokeOpacity="0.4" />
      </g>

      {/* three floating wireframe cubes, each with a glowing core */}
      <g className="zone-visual__floating-cube--left">
        <WireCube cx={176} cy={62} s={44} d={18} stroke="#cebfff" sw={1.4} opacity={0.95} glow="url(#fv-neon)" face="rgba(150,120,255,0.08)" />
        <circle cx="176" cy="62" r="9" fill="url(#fv-core)" />
        <circle cx="176" cy="62" r="2.2" fill="#fff" />
      </g>
      <g className="zone-visual__floating-cube--right">
        <WireCube cx={324} cy={64} s={44} d={18} stroke="#cebfff" sw={1.4} opacity={0.95} glow="url(#fv-neon)" face="rgba(150,120,255,0.08)" />
        <circle cx="324" cy="64" r="9" fill="url(#fv-core)" />
        <circle cx="324" cy="64" r="2.2" fill="#fff" />
      </g>
      <g className="zone-visual__floating-cube--center">
        <WireCube cx={CX} cy={90} s={64} d={26} stroke="#e6dbff" sw={1.7} glow="url(#fv-neon)" face="rgba(160,130,255,0.1)" />
        {/* particle-burst core */}
        <g stroke="#d8ccff" strokeWidth="0.8" strokeOpacity="0.7" filter="url(#fv-neon)">
          {burst.map(([dx, dy], k) => (
            <line key={k} x1={CX} y1="90" x2={CX + dx} y2={90 + dy} />
          ))}
        </g>
        <circle cx={CX} cy="90" r="14" fill="url(#fv-core)" />
        <circle cx={CX} cy="90" r="3.4" fill="#fff" filter="url(#fv-soft)" />
      </g>

      {/* travelling data dots on the links */}
      <circle className="zone-visual__moving-dot" cx="212" cy="77" r="1.8" fill="#fff" />
      <circle className="zone-visual__moving-dot--two" cx="288" cy="78" r="1.8" fill="#fff" />

      {/* field particles */}
      <g className="zone-visual__stars" fill="#d7c9ff">
        <circle cx="118" cy="42" r="1.6" opacity="0.7" />
        <circle cx="386" cy="44" r="1.6" opacity="0.6" />
        <circle cx="140" cy="150" r="1.3" opacity="0.5" />
        <circle cx="360" cy="150" r="1.3" opacity="0.5" />
      </g>
    </svg>
  );
}

export default function ZoneVisual({ type }: ZoneVisualProps) {
  if (type === "creation") return <CreationVisual />;
  if (type === "perception") return <PerceptionVisual />;
  return <FutureVisual />;
}
