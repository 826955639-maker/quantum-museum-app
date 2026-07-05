export type ZoneVisualType = "creation" | "perception" | "future";

type ZoneVisualProps = {
  type: ZoneVisualType;
};

/* Isometric wireframe cube (front face + visible back edges) */
function WireCube({
  cx,
  cy,
  s,
  d,
  stroke = "#c3b0ff",
  sw = 1.4,
  opacity = 1,
  face = "rgba(150,120,255,0.07)",
}: {
  cx: number;
  cy: number;
  s: number;
  d?: number;
  stroke?: string;
  sw?: number;
  opacity?: number;
  face?: string;
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
    <g stroke={stroke} strokeWidth={sw} fill="none" opacity={opacity} strokeLinejoin="round">
      <path d={`M${f[0]} L${b[0]} L${b[1]} L${f[1]} Z`} fill={face} stroke="none" />
      <path d={`M${b[0]} L${b[1]} L${b[2]}`} strokeOpacity="0.5" />
      <path d={`M${f[0]} L${b[0]}`} strokeOpacity="0.5" />
      <path d={`M${f[2]} L${b[2]}`} strokeOpacity="0.5" />
      <path d={`M${f[0]} L${f[1]} L${f[2]} L${f[3]} Z`} />
      <path d={`M${f[1]} L${b[1]}`} strokeOpacity="0.65" />
    </g>
  );
}

/* 创见区 — Schrödinger cat sitting inside a wireframe cube wrapped in a
   dense electron-cloud of orbit ellipses with bright energy particles. */
function CreationVisual() {
  const CX = 256;
  const CY = 100;
  // dense swirl of orbit ellipses (electron cloud)
  const orbits = [
    { rx: 152, ry: 30, rot: -24, o: 0.75, w: 1.5, c: "#cdbdff" },
    { rx: 140, ry: 52, rot: -6, o: 0.5, w: 1.1, c: "#a78bfa" },
    { rx: 148, ry: 40, rot: 14, o: 0.62, w: 1.2, c: "#c4b5fd" },
    { rx: 128, ry: 62, rot: 34, o: 0.4, w: 1, c: "#8b74ff" },
    { rx: 150, ry: 22, rot: 52, o: 0.34, w: 0.9, c: "#9d84f5" },
  ];
  // bright particles riding the cloud
  const riders: Array<[number, number, number, string]> = [
    [120, 130, 4.2, "#fff"],
    [392, 92, 3, "#e8dcff"],
    [180, 46, 2.2, "#fff"],
    [330, 150, 2.6, "#d7c9ff"],
    [110, 84, 2, "#c4b5fd"],
  ];
  return (
    <svg className="zone-visual zone-visual--creation" viewBox="0 0 420 190" aria-hidden="true">
      <defs>
        <radialGradient id="cv-floor" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b98cff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3a1f7a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cv-aura" cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="#6a4ee0" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#0d0a24" stopOpacity="0" />
        </radialGradient>
        <filter id="cv-soft" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
      </defs>

      <ellipse cx={CX} cy="96" rx="156" ry="88" fill="url(#cv-aura)" />
      <ellipse className="zone-visual__energy" cx={CX} cy="150" rx="80" ry="13" fill="url(#cv-floor)" filter="url(#cv-soft)" />

      {/* back half of the electron cloud */}
      <g className="zone-visual__orbits" fill="none">
        {orbits.slice(0, 2).map((o, i) => (
          <ellipse key={`b${i}`} cx={CX} cy={CY} rx={o.rx} ry={o.ry} stroke={o.c} strokeWidth={o.w} strokeOpacity={o.o * 0.7} transform={`rotate(${o.rot} ${CX} ${CY})`} />
        ))}
      </g>

      {/* containment cube */}
      <WireCube cx={CX} cy={92} s={98} d={40} stroke="#cbbcff" sw={1.6} />

      {/* sitting cat silhouette (facing right) */}
      <g transform="translate(198 42) scale(1.5)">
        <path
          d="M20 60 C18 44 18 34 22 28 C20 22 22 14 26 12 L24 4 L30 10 L34 2 L37 12 C44 14 46 24 44 34 C46 44 44 56 38 60 Z"
          fill="#0b0820"
          stroke="#a78bfa"
          strokeWidth="0.7"
          strokeOpacity="0.6"
          strokeLinejoin="round"
        />
        <path d="M40 58 C52 58 56 46 49 40 C55 45 52 54 42 54" fill="#0b0820" stroke="#a78bfa" strokeWidth="0.6" strokeOpacity="0.5" />
        <circle cx="31" cy="14" r="1" fill="#c4b5fd" />
      </g>

      {/* front half of the electron cloud */}
      <g className="zone-visual__orbits" fill="none">
        {orbits.slice(2).map((o, i) => (
          <ellipse key={`f${i}`} cx={CX} cy={CY} rx={o.rx} ry={o.ry} stroke={o.c} strokeWidth={o.w} strokeOpacity={o.o} transform={`rotate(${o.rot} ${CX} ${CY})`} />
        ))}
      </g>

      {/* bright energy particles + a strong glow node at the base */}
      <circle cx="196" cy="140" r="7" fill="#fff" filter="url(#cv-soft)" />
      {riders.map(([x, y, r, c], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={c} filter="url(#cv-soft)" />
      ))}
      <path d="M128 60l1.6 4.4 4.4 1.6-4.4 1.6-1.6 4.4-1.6-4.4-4.4-1.6 4.4-1.6Z" fill="#fff" opacity="0.9" />
      <g className="zone-visual__stars" fill="#d7c9ff">
        <circle cx="150" cy="38" r="1.6" opacity="0.8" />
        <circle cx="360" cy="46" r="1.6" opacity="0.7" />
        <circle cx="404" cy="140" r="1.5" opacity="0.6" />
      </g>
    </svg>
  );
}

/* 感知区 — particle-stream light wave dispersing through a wireframe prism
   into a red laser, over a grid floor with a hexagonal molecular network. */
function PerceptionVisual() {
  // sine wave rendered as a stream of particles (like the reference)
  const dots: Array<[number, number, number]> = [];
  for (let i = 0; i <= 46; i += 1) {
    const x = 14 + i * 4.6;
    const y = 88 + Math.sin(i * 0.42) * 30;
    const r = 0.7 + (Math.sin(i * 1.3) * 0.5 + 0.6) * 1.4;
    dots.push([x, y, r]);
  }
  const hex = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 6 }, (_, k) => {
      const a = (Math.PI / 3) * k - Math.PI / 6;
      return `${(cx + Math.cos(a) * r).toFixed(1)},${(cy + Math.sin(a) * r).toFixed(1)}`;
    });
    return `M${pts.join("L")}Z`;
  };
  return (
    <svg className="zone-visual zone-visual--perception" viewBox="0 0 420 190" aria-hidden="true">
      <defs>
        <radialGradient id="pv-prism" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3b1f7a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pv-ray" x1="0" x2="1">
          <stop offset="0%" stopColor="#ff5a5a" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ff3b3b" />
        </linearGradient>
        <filter id="pv-soft" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* perspective grid floor */}
      <g stroke="#4a3a86" strokeWidth="0.7" strokeOpacity="0.38" fill="none">
        <path d="M18 178h384M58 162h304M96 148h228M126 137h168" />
        <path d="M18 178 152 137M96 178 170 137M182 178 192 137M272 178 214 137M362 178 236 137M402 178 250 137" />
      </g>

      {/* molecular hexagon network (bottom right) */}
      <g stroke="#6a5ac0" strokeWidth="0.8" strokeOpacity="0.5" fill="none">
        <path d={hex(300, 150, 15)} />
        <path d={hex(330, 165, 15)} />
        <path d={hex(360, 148, 14)} />
        <path d="M312 143 L318 158M345 158 L349 150" />
      </g>
      <g fill="#a78bfa">
        <circle cx="300" cy="135" r="1.4" />
        <circle cx="330" cy="150" r="1.4" />
        <circle cx="360" cy="134" r="1.3" />
        <circle cx="345" cy="172" r="1.2" />
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
      {dots.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={i % 6 === 0 ? "#ffffff" : "#d7c9ff"} opacity={0.55 + (r - 0.7) * 0.3} />
      ))}

      {/* prism glow */}
      <ellipse cx="300" cy="86" rx="66" ry="52" fill="url(#pv-prism)" />

      {/* wireframe prism */}
      <g stroke="#d0c0ff" strokeWidth="1.5" fill="none" strokeLinejoin="round">
        <path d="M300 38 L262 114 L350 106 Z" />
        <path d="M300 38 L300 120 M262 114 L300 120 L350 106" strokeOpacity="0.6" />
      </g>
      <path d="M300 38 L262 114 L350 106 Z" fill="#9f7bff" fillOpacity="0.12" stroke="none" />
      <circle cx="304" cy="92" r="6" fill="#fff" filter="url(#pv-soft)" />

      {/* red refraction laser fanning out */}
      <path d="M322 90 L414 66" stroke="url(#pv-ray)" strokeWidth="3.4" strokeLinecap="round" filter="url(#pv-soft)" />
      <path d="M322 94 L414 86" stroke="#ff6b6b" strokeWidth="1.4" strokeOpacity="0.75" strokeLinecap="round" />
      <path d="M322 98 L414 106" stroke="#ff8a8a" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" />

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

/* 引领区 — entangled wireframe cubes floating above a glowing circuit chip. */
function FutureVisual() {
  const CX = 250;
  return (
    <svg className="zone-visual zone-visual--future" viewBox="0 0 420 190" aria-hidden="true">
      <defs>
        <radialGradient id="fv-chip" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a08cff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#1a1145" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fv-aura" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#5b45d6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0d0a24" stopOpacity="0" />
        </radialGradient>
        <filter id="fv-soft" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <ellipse cx={CX} cy="92" rx="170" ry="88" fill="url(#fv-aura)" />

      {/* circuit traces radiating from the chip */}
      <g stroke="#5a48a8" strokeWidth="0.8" strokeOpacity="0.5" fill="none">
        <path d="M250 150 H150 V120M250 150 H350 V126M180 150 V172H150M320 150 V172H352M210 164 H120M290 164 H382" />
      </g>
      <g fill="#7c68d8">
        <rect x="147" y="118" width="4" height="4" />
        <rect x="349" y="124" width="4" height="4" />
        <rect x="118" y="162" width="4" height="4" />
        <rect x="380" y="162" width="4" height="4" />
      </g>

      {/* glowing concentric chip platform */}
      <ellipse cx={CX} cy="150" rx="90" ry="27" fill="url(#fv-chip)" filter="url(#fv-soft)" />
      <g stroke="#b9a6ff" fill="none">
        <path d="M250 126 L332 150 L250 174 L168 150 Z" strokeWidth="1.5" strokeOpacity="0.75" />
        <path d="M250 134 L310 150 L250 166 L190 150 Z" strokeWidth="1.1" strokeOpacity="0.5" />
        <path d="M250 141 L282 150 L250 159 L218 150 Z" strokeWidth="0.9" strokeOpacity="0.35" />
      </g>
      <circle cx={CX} cy="150" r="3" fill="#fff" filter="url(#fv-soft)" />

      {/* dashed entanglement links + vertical drop lines */}
      <g stroke="#a793ff" strokeWidth="1.2" fill="none">
        <path d="M176 62 L236 92" strokeDasharray="4 5" />
        <path d="M324 64 L272 92" strokeDasharray="4 5" />
        <path d="M250 112 L250 128" strokeDasharray="3 5" strokeOpacity="0.6" />
        <path d="M176 74 L188 128" strokeDasharray="3 5" strokeOpacity="0.4" />
        <path d="M324 76 L312 128" strokeDasharray="3 5" strokeOpacity="0.4" />
      </g>

      {/* three wireframe cubes */}
      <WireCube cx={176} cy={62} s={42} d={17} stroke="#c3b0ff" sw={1.3} opacity={0.92} />
      <WireCube cx={324} cy={64} s={42} d={17} stroke="#c3b0ff" sw={1.3} opacity={0.92} />
      <WireCube cx={CX} cy={90} s={62} d={25} stroke="#e0d3ff" sw={1.6} />

      {/* connection nodes */}
      <g fill="#fff">
        <circle cx="176" cy="62" r="2.6" filter="url(#fv-soft)" />
        <circle cx="324" cy="64" r="2.6" filter="url(#fv-soft)" />
        <circle cx={CX} cy="90" r="3.4" filter="url(#fv-soft)" />
      </g>
      <circle cx="212" cy="77" r="1.6" fill="#e8dcff" />
      <circle cx="288" cy="78" r="1.6" fill="#e8dcff" />

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
