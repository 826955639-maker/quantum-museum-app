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
  face = "rgba(150,120,255,0.08)",
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
      <path d={`M${b[0]} L${b[1]} L${b[2]}`} strokeOpacity="0.55" />
      <path d={`M${f[0]} L${b[0]}`} strokeOpacity="0.55" />
      <path d={`M${f[2]} L${b[2]}`} strokeOpacity="0.55" />
      <path d={`M${f[0]} L${f[1]} L${f[2]} L${f[3]} Z`} />
      <path d={`M${f[1]} L${b[1]}`} strokeOpacity="0.7" />
    </g>
  );
}

/* 创见区 — Schrödinger cat sealed inside a glowing wireframe cube */
function CreationVisual() {
  return (
    <svg className="zone-visual zone-visual--creation" viewBox="0 0 420 190" aria-hidden="true">
      <defs>
        <radialGradient id="cv-floor" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a678ff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3a1f7a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cv-aura" cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="#6a4ee0" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#0d0a24" stopOpacity="0" />
        </radialGradient>
        <filter id="cv-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.6" />
        </filter>
      </defs>

      <ellipse cx="252" cy="96" rx="150" ry="86" fill="url(#cv-aura)" />
      {/* floor bloom */}
      <ellipse className="zone-visual__energy" cx="252" cy="152" rx="78" ry="13" fill="url(#cv-floor)" filter="url(#cv-soft)" />

      {/* back orbit */}
      <ellipse cx="252" cy="100" rx="150" ry="36" stroke="#8b6ce0" strokeWidth="1.4" strokeOpacity="0.4" fill="none" transform="rotate(-16 252 100)" />

      {/* containment cube */}
      <WireCube cx={256} cy={92} s={96} d={38} stroke="#cbbcff" sw={1.6} />

      {/* Schrödinger cat silhouette (sitting, facing left) */}
      <g transform="translate(96 -20) scale(2.2)">
        <path
          d="M54 62 C50 60 50 46 56 43 L59 34 L62 42 L66 34 L69 43 C74 47 74 60 70 62 Z"
          fill="#0b0820"
          stroke="#a78bfa"
          strokeWidth="0.7"
          strokeOpacity="0.65"
          strokeLinejoin="round"
        />
        <path d="M70 60 C80 61 83 53 78 49 C82 53 78 58 71 57" fill="#0b0820" stroke="#a78bfa" strokeWidth="0.6" strokeOpacity="0.55" />
        <circle cx="60" cy="49" r="1" fill="#c4b5fd" />
        <circle cx="65" cy="49" r="1" fill="#c4b5fd" />
      </g>

      {/* front orbits */}
      <ellipse cx="252" cy="104" rx="146" ry="30" stroke="#cdbdff" strokeWidth="1.6" strokeOpacity="0.8" fill="none" transform="rotate(-15 252 104)" />
      <ellipse cx="252" cy="98" rx="126" ry="46" stroke="#8b74ff" strokeWidth="1.1" strokeOpacity="0.45" fill="none" transform="rotate(13 252 98)" />

      {/* riders + sparkles */}
      <circle cx="118" cy="118" r="3.4" fill="#fff" filter="url(#cv-soft)" />
      <circle cx="392" cy="86" r="2.8" fill="#e8dcff" filter="url(#cv-soft)" />
      <path d="M128 62l1.6 4.4 4.4 1.6-4.4 1.6-1.6 4.4-1.6-4.4-4.4-1.6 4.4-1.6Z" fill="#fff" opacity="0.9" />
      <path d="M372 118l1.2 3.4 3.4 1.2-3.4 1.2-1.2 3.4-1.2-3.4-3.4-1.2 3.4-1.2Z" fill="#c4b5fd" opacity="0.8" />
      <g className="zone-visual__stars" fill="#d7c9ff">
        <circle cx="150" cy="40" r="1.7" opacity="0.8" />
        <circle cx="352" cy="44" r="1.7" opacity="0.75" />
        <circle cx="404" cy="140" r="1.6" opacity="0.6" />
        <circle cx="108" cy="70" r="1.4" opacity="0.6" />
      </g>
    </svg>
  );
}

/* 感知区 — dashed light wave dispersing through a wireframe prism */
function PerceptionVisual() {
  return (
    <svg className="zone-visual zone-visual--perception" viewBox="0 0 420 190" aria-hidden="true">
      <defs>
        <linearGradient id="pv-wave" x1="0" x2="1">
          <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.2" />
          <stop offset="55%" stopColor="#d7c9ff" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="pv-ray" x1="0" x2="1">
          <stop offset="0%" stopColor="#c96bff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ff6ec7" />
        </linearGradient>
        <radialGradient id="pv-prism" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3b1f7a" stopOpacity="0" />
        </radialGradient>
        <filter id="pv-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>

      {/* perspective grid floor */}
      <g stroke="#4a3a86" strokeWidth="0.7" strokeOpacity="0.4" fill="none">
        <path d="M20 176h380M60 160h300M96 146h228M124 135h172" />
        <path d="M20 176 150 135M96 176 168 135M180 176 190 135M270 176 214 135M360 176 236 135M400 176 250 135" />
      </g>

      {/* glowing dashed sine wave */}
      <path d="M14 84C42 34 70 34 98 84S154 134 182 84" stroke="#a78bfa" strokeWidth="9" strokeOpacity="0.28" fill="none" strokeLinecap="round" filter="url(#pv-soft)" />
      <path d="M14 84C42 34 70 34 98 84S154 134 182 84" stroke="url(#pv-wave)" strokeWidth="4.4" fill="none" strokeLinecap="round" strokeDasharray="12 10" />

      {/* prism glow */}
      <ellipse cx="300" cy="88" rx="66" ry="52" fill="url(#pv-prism)" />

      {/* wireframe prism */}
      <g stroke="#d0c0ff" strokeWidth="1.5" fill="none" strokeLinejoin="round">
        <path d="M300 40 L262 116 L350 108 Z" />
        <path d="M300 40 L300 122 M262 116 L300 122 L350 108" strokeOpacity="0.6" />
      </g>
      <path d="M300 40 L262 116 L350 108 Z" fill="#9f7bff" fillOpacity="0.12" stroke="none" />

      {/* pink refraction ray fanning out */}
      <path d="M322 90 L410 68" stroke="url(#pv-ray)" strokeWidth="3.4" strokeLinecap="round" filter="url(#pv-soft)" />
      <path d="M322 94 L410 88" stroke="#ff8ad4" strokeWidth="1.4" strokeOpacity="0.7" strokeLinecap="round" />
      <path d="M322 98 L410 108" stroke="#c96bff" strokeWidth="1.1" strokeOpacity="0.5" strokeLinecap="round" />

      {/* incoming photon + stars */}
      <circle cx="70" cy="44" r="2.6" fill="#fff" filter="url(#pv-soft)" />
      <circle cx="34" cy="112" r="2" fill="#c4b5fd" />
      <g className="zone-visual__stars" fill="#d7c9ff">
        <circle cx="150" cy="34" r="1.6" opacity="0.7" />
        <circle cx="392" cy="34" r="1.7" opacity="0.6" />
        <circle cx="212" cy="40" r="1.4" opacity="0.5" />
        <circle cx="404" cy="130" r="1.4" opacity="0.55" />
      </g>
    </svg>
  );
}

/* 引领区 — entangled wireframe cubes floating over a concentric platform */
function FutureVisual() {
  return (
    <svg className="zone-visual zone-visual--future" viewBox="0 0 420 190" aria-hidden="true">
      <defs>
        <radialGradient id="fv-plat" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8f7bff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1a1145" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fv-aura" cx="50%" cy="44%" r="60%">
          <stop offset="0%" stopColor="#5b45d6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0d0a24" stopOpacity="0" />
        </radialGradient>
        <filter id="fv-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>
      <ellipse cx="250" cy="92" rx="160" ry="86" fill="url(#fv-aura)" />

      {/* concentric diamond platform + bloom */}
      <ellipse cx="250" cy="150" rx="86" ry="26" fill="url(#fv-plat)" filter="url(#fv-soft)" />
      <g stroke="#b9a6ff" fill="none">
        <path d="M250 128 L326 150 L250 172 L174 150 Z" strokeWidth="1.5" strokeOpacity="0.75" />
        <path d="M250 136 L304 150 L250 164 L196 150 Z" strokeWidth="1.1" strokeOpacity="0.5" />
        <path d="M250 143 L276 150 L250 157 L224 150 Z" strokeWidth="0.9" strokeOpacity="0.35" />
      </g>

      {/* dashed entanglement links + vertical drop lines */}
      <g stroke="#a793ff" strokeWidth="1.2" fill="none">
        <path d="M176 64 L236 92" strokeDasharray="4 5" />
        <path d="M324 66 L272 92" strokeDasharray="4 5" />
        <path d="M250 112 L250 130" strokeDasharray="3 5" strokeOpacity="0.6" />
        <path d="M176 76 L188 128" strokeDasharray="3 5" strokeOpacity="0.4" />
        <path d="M324 78 L312 128" strokeDasharray="3 5" strokeOpacity="0.4" />
      </g>

      {/* three wireframe cubes */}
      <WireCube cx={176} cy={64} s={40} d={16} stroke="#c3b0ff" sw={1.3} opacity={0.92} />
      <WireCube cx={324} cy={66} s={40} d={16} stroke="#c3b0ff" sw={1.3} opacity={0.92} />
      <WireCube cx={250} cy={92} s={60} d={24} stroke="#e0d3ff" sw={1.6} />

      {/* glowing connection nodes */}
      <g fill="#fff">
        <circle cx="176" cy="64" r="2.6" filter="url(#fv-soft)" />
        <circle cx="324" cy="66" r="2.6" filter="url(#fv-soft)" />
        <circle cx="250" cy="92" r="3.2" filter="url(#fv-soft)" />
      </g>
      <circle cx="212" cy="78" r="1.6" fill="#e8dcff" />
      <circle cx="290" cy="80" r="1.6" fill="#e8dcff" />

      {/* field stars */}
      <g className="zone-visual__stars" fill="#d7c9ff">
        <circle cx="118" cy="40" r="1.6" opacity="0.7" />
        <circle cx="386" cy="42" r="1.7" opacity="0.6" />
        <circle cx="108" cy="120" r="1.4" opacity="0.5" />
        <circle cx="398" cy="120" r="1.4" opacity="0.5" />
      </g>
    </svg>
  );
}

export default function ZoneVisual({ type }: ZoneVisualProps) {
  if (type === "creation") return <CreationVisual />;
  if (type === "perception") return <PerceptionVisual />;
  return <FutureVisual />;
}
