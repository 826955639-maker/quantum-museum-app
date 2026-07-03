import { useState } from "react";
import Icon from "./Icon";
import BadgeMedal, { type BadgeType } from "./BadgeMedal";

/* ── Small line icons ── */

function IconSparkle() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2.5c.6 3.2 1.8 4.4 5 5-3.2.6-4.4 1.8-5 5-.6-3.2-1.8-4.4-5-5 3.2-.6 4.4-1.8 5-5Z" />
      <path d="M15.5 12.5c.3 1.4.8 1.9 2.2 2.2-1.4.3-1.9.8-2.2 2.2-.3-1.4-.8-1.9-2.2-2.2 1.4-.3 1.9-.8 2.2-2.2Z" />
    </svg>
  );
}

function IconMedal() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="8" r="5" />
      <path d="m7.5 12.3-1.5 5 4-2.2 4 2.2-1.5-5" />
      <path d="m10 5.7.9 1.8 2 .3-1.45 1.4.35 2L10 10.3l-1.8.9.35-2L7.1 7.8l2-.3Z" />
    </svg>
  );
}

function IconBookHead() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 4.5C3 3.7 3.7 3 4.5 3H10v14H4.5A1.5 1.5 0 0 1 3 15.5Z" />
      <path d="M10 3h5.5A1.5 1.5 0 0 1 17 4.5v11A1.5 1.5 0 0 1 15.5 17H10Z" />
      <path d="M10 3v14" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3.5 8.5 3 3 6-7" />
    </svg>
  );
}

/* Interaction row icons */
function CatSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6V4l3 3M20 6V4l-3 3" />
      <path d="M20 10c0 5-3 8-8 8S4 15 4 10c0-3.3 1.8-5 4-5h8c2.2 0 4 1.7 4 5Z" />
      <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none" />
      <path d="M10 14c.6.5 1 .7 2 .7s1.4-.2 2-.7" />
    </svg>
  );
}
function WaveSVG() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 25h4l3-9 5 20 5-29 5 34 5-25 4 17 3-8h4" />
    </svg>
  );
}
function MazeSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M3 9h5M3 15h4M9 3v5M15 3v4M21 9h-4M21 15h-6M9 21v-5M15 21v-4M11 9h2v6h-2z" />
    </svg>
  );
}
/* Tab icons */
function TabSmiley() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5c.9 1.2 2.1 1.8 3.5 1.8s2.6-.6 3.5-1.8" />
      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TabCap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 9l10-4 10 4-10 4Z" />
      <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
      <path d="M22 9v5" />
    </svg>
  );
}
function TabAtom() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(-60 12 12)" />
    </svg>
  );
}

/* Next-step icons */
function IconBranch() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="5" cy="4" r="2" />
      <circle cx="5" cy="16" r="2" />
      <circle cx="15" cy="10" r="2" />
      <path d="M5 6v8M7 4h4a2 2 0 0 1 2 2v2M7 16h4a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}
function IconDocCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 2.5h7L18 7v13.5a1 1 0 0 1-1 1H6.5a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z" fill="#ffffff" fillOpacity="0.16" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13 2.6V7.2h4.4" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="m8.6 13.4 2.1 2.1 4.1-4.6" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8.8 3.6 3.4 6v13.4l5.4-2.4 6.4 2.4 5.4-2.4V3.6l-5.4 2.4-6.4-2.4Z" fill="#ffffff" fillOpacity="0.16" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.8 3.6v13.4M15.2 6v13.4" stroke="#fff" strokeWidth="1.2" strokeOpacity="0.7" />
      <path d="M12 8.2a2.6 2.6 0 0 0-2.6 2.6c0 1.9 2.6 4.2 2.6 4.2s2.6-2.3 2.6-4.2A2.6 2.6 0 0 0 12 8.2Z" fill="#fff" />
    </svg>
  );
}

/* ── Layered-explanation thumbnails ── */
/* Isometric wireframe cube helper (front face + visible back edges) */
function WireCube({
  cx,
  cy,
  s,
  d,
  stroke = "#c3b0ff",
  sw = 1.1,
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
      {/* top face fill for a hint of volume */}
      <path d={`M${f[0]} L${b[0]} L${b[1]} L${f[1]} Z`} fill={face} stroke="none" />
      {/* back edges (top + right) */}
      <path d={`M${b[0]} L${b[1]} L${b[2]}`} strokeOpacity="0.55" />
      <path d={`M${f[0]} L${b[0]}`} strokeOpacity="0.55" />
      <path d={`M${f[2]} L${b[2]}`} strokeOpacity="0.55" />
      {/* front face */}
      <path d={`M${f[0]} L${f[1]} L${f[2]} L${f[3]} Z`} />
      {/* right edge to back */}
      <path d={`M${f[1]} L${b[1]}`} strokeOpacity="0.7" />
    </g>
  );
}

/* p6 #1 — Schrödinger cat sealed inside a glowing wireframe cube */
function ThumbPossibility() {
  return (
    <svg viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="rp-floor" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a678ff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3a1f7a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="rp-aura" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#6a4ee0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0d0a24" stopOpacity="0" />
        </radialGradient>
        <filter id="rp-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
      </defs>
      <ellipse cx="66" cy="50" rx="60" ry="42" fill="url(#rp-aura)" />
      {/* floor bloom beneath the cube */}
      <ellipse cx="66" cy="82" rx="30" ry="6" fill="url(#rp-floor)" filter="url(#rp-soft)" />

      {/* orbit trail behind */}
      <ellipse cx="66" cy="52" rx="52" ry="15" stroke="#8b6ce0" strokeWidth="0.9" strokeOpacity="0.4" fill="none" transform="rotate(-18 66 52)" />

      {/* wireframe containment cube */}
      <WireCube cx={68} cy={48} s={40} d={16} stroke="#cbbcff" sw={1.2} />

      {/* Schrödinger cat silhouette (sitting, facing left) */}
      <g filter="url(#rp-soft)">
        <path
          d="M54 62 C50 60 50 46 56 43 L59 34 L62 42 L66 34 L69 43 C74 47 74 60 70 62 Z"
          fill="#0d0a24"
        />
      </g>
      <path
        d="M54 62 C50 60 50 46 56 43 L59 34 L62 42 L66 34 L69 43 C74 47 74 60 70 62 Z"
        fill="#0b0820"
        stroke="#a78bfa"
        strokeWidth="1"
        strokeOpacity="0.7"
        strokeLinejoin="round"
      />
      {/* curling tail */}
      <path d="M70 60 C80 61 83 53 78 49 C82 53 78 58 71 57" fill="#0b0820" stroke="#a78bfa" strokeWidth="0.9" strokeOpacity="0.6" />
      {/* glowing eyes */}
      <circle cx="60" cy="49" r="1.1" fill="#c4b5fd" />
      <circle cx="65" cy="49" r="1.1" fill="#c4b5fd" />

      {/* orbit trails in front */}
      <ellipse cx="66" cy="54" rx="50" ry="13" stroke="#cdbdff" strokeWidth="1.2" strokeOpacity="0.8" fill="none" transform="rotate(-16 66 54)" />
      <ellipse cx="66" cy="50" rx="44" ry="19" stroke="#8b74ff" strokeWidth="0.8" strokeOpacity="0.45" fill="none" transform="rotate(14 66 50)" />

      {/* riders + sparkles */}
      <circle cx="18" cy="60" r="2" fill="#fff" filter="url(#rp-soft)" />
      <circle cx="112" cy="46" r="1.7" fill="#e8dcff" filter="url(#rp-soft)" />
      <path d="M22 40l1.1 3 3 1.1-3 1.1-1.1 3-1.1-3-3-1.1 3-1.1Z" fill="#fff" opacity="0.9" />
      <path d="M108 66l0.9 2.4 2.4 0.9-2.4 0.9-0.9 2.4-0.9-2.4-2.4-0.9 2.4-0.9Z" fill="#c4b5fd" opacity="0.8" />
      <g fill="#d7c9ff">
        <circle cx="34" cy="24" r="1" opacity="0.7" />
        <circle cx="98" cy="22" r="1.1" opacity="0.7" />
        <circle cx="120" cy="78" r="1" opacity="0.5" />
      </g>
    </svg>
  );
}

/* p6 #2 — dashed light wave dispersing through a wireframe prism on a grid floor */
function ThumbLightForms() {
  return (
    <svg viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="rl-wave" x1="0" x2="1">
          <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.2" />
          <stop offset="55%" stopColor="#d7c9ff" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="rl-ray" x1="0" x2="1">
          <stop offset="0%" stopColor="#c96bff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ff6ec7" />
        </linearGradient>
        <radialGradient id="rl-prism" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3b1f7a" stopOpacity="0" />
        </radialGradient>
        <filter id="rl-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.3" />
        </filter>
      </defs>

      {/* perspective grid floor */}
      <g stroke="#4a3a86" strokeWidth="0.6" strokeOpacity="0.42" fill="none">
        <path d="M6 92h118M16 84h98M26 76h78M34 70h62" />
        <path d="M6 92 46 70M34 92 52 70M64 92 60 70M94 92 68 70M124 92 76 70" />
      </g>

      {/* glowing dashed sine wave (under-glow + crisp dashes) */}
      <path d="M6 44C16 22 26 22 36 44S56 66 66 44" stroke="#a78bfa" strokeWidth="5" strokeOpacity="0.3" fill="none" strokeLinecap="round" filter="url(#rl-soft)" />
      <path d="M6 44C16 22 26 22 36 44S56 66 66 44" stroke="url(#rl-wave)" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="7 6" />

      {/* prism glow */}
      <ellipse cx="96" cy="46" rx="30" ry="24" fill="url(#rl-prism)" />

      {/* wireframe triangular prism / tetrahedron */}
      <g stroke="#d0c0ff" strokeWidth="1.1" fill="none" strokeLinejoin="round">
        <path d="M96 24 L80 58 L112 54 Z" />
        <path d="M96 24 L96 62 M80 58 L96 62 L112 54" strokeOpacity="0.6" />
      </g>
      <path d="M96 24 L80 58 L112 54 Z" fill="#9f7bff" fillOpacity="0.12" stroke="none" />

      {/* pink refraction ray fanning out of the prism */}
      <path d="M104 48 L128 40" stroke="url(#rl-ray)" strokeWidth="2.6" strokeLinecap="round" filter="url(#rl-soft)" />
      <path d="M104 50 L128 48" stroke="#ff8ad4" strokeWidth="1.1" strokeOpacity="0.7" strokeLinecap="round" />
      <path d="M104 52 L128 56" stroke="#c96bff" strokeWidth="0.9" strokeOpacity="0.5" strokeLinecap="round" />

      {/* incoming photon + stars */}
      <circle cx="30" cy="24" r="2" fill="#fff" filter="url(#rl-soft)" />
      <circle cx="16" cy="60" r="1.5" fill="#c4b5fd" />
      <g fill="#d7c9ff">
        <circle cx="46" cy="16" r="1" opacity="0.7" />
        <circle cx="120" cy="18" r="1.1" opacity="0.6" />
        <circle cx="70" cy="20" r="0.9" opacity="0.5" />
      </g>
    </svg>
  );
}

/* p6 #3 — entangled wireframe cubes floating over a concentric platform */
function ThumbMultipath() {
  return (
    <svg viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="rm-plat" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8f7bff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1a1145" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="rm-aura" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#5b45d6" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#0d0a24" stopOpacity="0" />
        </radialGradient>
        <filter id="rm-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>
      <rect x="0" y="0" width="130" height="100" fill="url(#rm-aura)" />

      {/* concentric diamond platform + bloom */}
      <ellipse cx="65" cy="76" rx="30" ry="12" fill="url(#rm-plat)" filter="url(#rm-soft)" />
      <g stroke="#b9a6ff" fill="none">
        <path d="M65 66 L91 76 L65 86 L39 76 Z" strokeWidth="1.1" strokeOpacity="0.75" />
        <path d="M65 70 L83 76 L65 82 L47 76 Z" strokeWidth="0.9" strokeOpacity="0.5" />
        <path d="M65 73 L74 76 L65 79 L56 76 Z" strokeWidth="0.7" strokeOpacity="0.35" />
      </g>

      {/* dashed entanglement links + vertical drop lines */}
      <g stroke="#a793ff" strokeWidth="0.9" fill="none">
        <path d="M30 34 L60 48" strokeDasharray="3 4" />
        <path d="M100 36 L72 48" strokeDasharray="3 4" />
        <path d="M65 58 L65 68" strokeDasharray="2 4" strokeOpacity="0.6" />
        <path d="M30 44 L36 66" strokeDasharray="2 4" strokeOpacity="0.4" />
        <path d="M100 46 L94 66" strokeDasharray="2 4" strokeOpacity="0.4" />
      </g>

      {/* three wireframe cubes (center large, two small floating) */}
      <WireCube cx={30} cy={34} s={16} d={7} stroke="#c3b0ff" sw={1} opacity={0.92} />
      <WireCube cx={100} cy={36} s={16} d={7} stroke="#c3b0ff" sw={1} opacity={0.92} />
      <WireCube cx={65} cy={48} s={24} d={10} stroke="#e0d3ff" sw={1.3} />

      {/* glowing connection nodes */}
      <g fill="#fff">
        <circle cx="30" cy="34" r="1.6" filter="url(#rm-soft)" />
        <circle cx="100" cy="36" r="1.6" filter="url(#rm-soft)" />
        <circle cx="65" cy="48" r="2" filter="url(#rm-soft)" />
      </g>
      <circle cx="46" cy="41" r="1" fill="#e8dcff" />
      <circle cx="84" cy="42" r="1" fill="#e8dcff" />

      {/* field stars */}
      <g fill="#d7c9ff">
        <circle cx="14" cy="20" r="1" opacity="0.7" />
        <circle cx="120" cy="22" r="1.1" opacity="0.6" />
        <circle cx="16" cy="60" r="0.9" opacity="0.5" />
        <circle cx="116" cy="60" r="0.9" opacity="0.5" />
      </g>
    </svg>
  );
}

/* ── Data ── */
const completed = [
  { id: "cat", title: "薛定谔的猫", desc: "理解叠加态与观测效应", glyph: <CatSVG /> },
  { id: "wave", title: "跳动的光波", desc: "探索光的波动性与干涉", glyph: <WaveSVG /> },
  { id: "maze", title: "量子迷宫", desc: "体验多路径与概率分布", glyph: <MazeSVG /> },
];

const badges: Array<{ id: string; title: string; desc: string; medal: BadgeType }> = [
  { id: "observer", title: "观察者徽章", desc: "理解观测如何影响结果", medal: "eye" },
  { id: "wave", title: "光波探索徽章", desc: "掌握光的波动性知识", medal: "wave" },
  { id: "maze", title: "迷宫挑战徽章", desc: "完成多路径探索挑战", medal: "maze" },
];

const tabs = [
  { id: "kid", title: "儿童版", sub: "轻松有趣", glyph: <TabSmiley /> },
  { id: "normal", title: "普通版", sub: "通俗易懂", glyph: <TabCap /> },
  { id: "deep", title: "深度版", sub: "专业深入", glyph: <TabAtom /> },
] as const;

const levels = [
  {
    num: "01",
    title: "多种可能",
    desc: "在被观测前，粒子可以同时处于多种状态，这就是叠加态。",
    tags: ["叠加态", "量子态"],
    thumb: <ThumbPossibility />,
  },
  {
    num: "02",
    title: "光的两种样子",
    desc: "光既能像波一样产生干涉，又能像粒子一样被探测，展现出波粒二象性。",
    tags: ["波动性", "粒子性"],
    thumb: <ThumbLightForms />,
  },
  {
    num: "03",
    title: "多路径探索",
    desc: "粒子可以同时经过多条路径，不同路径的干涉决定了最终出现的概率分布。",
    tags: ["干涉", "概率"],
    thumb: <ThumbMultipath />,
  },
];

type ExplorationRecordSectionProps = {
  onViewReport?: () => void;
  onReturnToMap?: () => void;
};

export default function ExplorationRecordSection({ onViewReport, onReturnToMap }: ExplorationRecordSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("normal");

  return (
    <section className="record-section" aria-label="探索记录详情">
      {/* Left column */}
      <div className="rec-left">
        {/* 本次完成互动 */}
        <article className="rec-card">
          <header className="rec-head">
            <span className="rec-head__icon"><IconSparkle /></span>
            <div>
              <h2>本次完成互动</h2>
              <p>你已完成 3 项互动探索</p>
            </div>
          </header>
          <ul className="rec-done-list">
            {completed.map((item) => (
              <li key={item.id}>
                <span className="rec-done__icon">{item.glyph}</span>
                <span className="rec-done__copy">
                  <strong>{item.title}</strong>
                  <small>{item.desc}</small>
                </span>
                <span className="rec-done__pill">
                  已完成 <IconCheck />
                </span>
              </li>
            ))}
          </ul>
        </article>

        {/* 获得徽章 */}
        <article className="rec-card">
          <header className="rec-head">
            <span className="rec-head__icon"><IconMedal /></span>
            <div>
              <h2>获得徽章</h2>
              <p>恭喜你获得 3 枚徽章</p>
            </div>
          </header>
          <div className="rec-badges">
            {badges.map((badge) => (
              <figure className="rec-badge" key={badge.id}>
                <span className="rec-badge__medal">
                  <BadgeMedal type={badge.medal} />
                </span>
                <figcaption>
                  <strong>{badge.title}</strong>
                  <small>{badge.desc}</small>
                </figcaption>
              </figure>
            ))}
          </div>
        </article>
      </div>

      {/* Right column: 分层讲解 */}
      <article className="rec-card rec-layers">
        <header className="rec-head">
          <span className="rec-head__icon"><IconBookHead /></span>
          <div>
            <h2>分层讲解</h2>
            <p>根据你的兴趣，选择适合的讲解深度</p>
          </div>
        </header>

        <div className="rec-tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={activeTab === tab.id}
              className={`rec-tab${activeTab === tab.id ? " is-active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="rec-tab__icon">{tab.glyph}</span>
              <span className="rec-tab__copy">
                <strong>{tab.title}</strong>
                <small>{tab.sub}</small>
              </span>
            </button>
          ))}
        </div>

        <ol className="rec-levels">
          {levels.map((level) => (
            <li className="rec-level" key={level.num}>
              <div className="rec-level__thumb">{level.thumb}</div>
              <div className="rec-level__body">
                <span className="rec-level__num">{level.num}</span>
                <h3>{level.title}</h3>
                <p>{level.desc}</p>
                <div className="rec-level__tags">
                  {level.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <button className="rec-level__arrow" type="button" aria-label={`查看${level.title}详情`}>
                <Icon name="arrow-right" />
              </button>
            </li>
          ))}
        </ol>
      </article>

      {/* 下一步 */}
      <article className="rec-card rec-next">
        <div className="rec-next__intro">
          <span className="rec-next__icon"><IconBranch /></span>
          <div>
            <h2>下一步</h2>
            <p>继续你的量子探索之旅</p>
          </div>
        </div>
        <div className="rec-next__actions">
          <button className="rec-next__action" type="button" onClick={onViewReport}>
            <span className="rec-next__action-icon"><IconDocCheck /></span>
            <span className="rec-next__action-copy">
              <strong>查看我的探索报告</strong>
              <small>回顾学习成果，生成专属报告</small>
            </span>
            <Icon name="arrow-right" className="rec-next__action-arrow" />
          </button>
          <button className="rec-next__action" type="button" onClick={onReturnToMap}>
            <span className="rec-next__action-icon"><IconMapPin /></span>
            <span className="rec-next__action-copy">
              <strong>返回地图继续探索</strong>
              <small>发现更多展项，解锁新的知识</small>
            </span>
            <Icon name="arrow-right" className="rec-next__action-arrow" />
          </button>
        </div>
      </article>
    </section>
  );
}
