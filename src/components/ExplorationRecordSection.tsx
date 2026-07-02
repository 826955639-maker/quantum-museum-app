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
function ThumbPossibility() {
  return (
    <svg viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="rp-glow" cx="50%" cy="58%" r="58%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
          <stop offset="55%" stopColor="#5b2fc0" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1a1145" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rp-cube" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.45" />
        </linearGradient>
        <filter id="rp-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
      </defs>
      <ellipse cx="65" cy="58" rx="56" ry="42" fill="url(#rp-glow)" />

      {/* floor ripple rings under cube */}
      <g stroke="#8b5cf6" fill="none">
        <ellipse cx="65" cy="82" rx="34" ry="8" strokeWidth="1" strokeOpacity="0.5" />
        <ellipse cx="65" cy="82" rx="46" ry="11" strokeWidth="0.8" strokeOpacity="0.28" />
      </g>

      {/* ghost cat faces (superposed possibilities) */}
      <g stroke="#c4b5fd" strokeWidth="1.3" fill="none" opacity="0.75">
        <path d="M27 27l-2.5-5 5 2.5M41 27l2.5-5-5 2.5" />
        <path d="M43.5 27c0 4.8-3.5 7-9.5 7s-9.5-2.2-9.5-7c0-3.4 2.3-4.6 4-4.6h11c1.7 0 4 1.2 4 4.6Z" />
        <circle cx="30.5" cy="28" r=".9" fill="#c4b5fd" stroke="none" />
        <circle cx="37.5" cy="28" r=".9" fill="#c4b5fd" stroke="none" />
        <path d="M32.5 31.5c.5.4 1 .5 1.5.5s1-.1 1.5-.5" strokeWidth="0.9" />
      </g>
      <g stroke="#c4b5fd" strokeWidth="1.3" fill="none" opacity="0.75">
        <path d="M89 27l-2.5-5 5 2.5M103 27l2.5-5-5 2.5" />
        <path d="M105.5 27c0 4.8-3.5 7-9.5 7s-9.5-2.2-9.5-7c0-3.4 2.3-4.6 4-4.6h11c1.7 0 4 1.2 4 4.6Z" />
        <circle cx="92.5" cy="28" r=".9" fill="#c4b5fd" stroke="none" />
        <circle cx="99.5" cy="28" r=".9" fill="#c4b5fd" stroke="none" />
        <path d="M94.5 31.5c.5.4 1 .5 1.5.5s1-.1 1.5-.5" strokeWidth="0.9" />
      </g>

      {/* orbit trails around the cube */}
      <ellipse cx="65" cy="60" rx="44" ry="13" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.55" fill="none" transform="rotate(-14 65 60)" />
      <ellipse cx="65" cy="60" rx="38" ry="17" stroke="#8b5cf6" strokeWidth="0.8" strokeOpacity="0.35" fill="none" transform="rotate(18 65 60)" />

      {/* central glass cube with cat face */}
      <g stroke="#e8dcff" strokeWidth="1.5">
        <path d="M65 38 44 49v22l21 11 21-11V49Z" fill="url(#rp-cube)" fillOpacity="0.3" />
        <path d="m44 49 21 11 21-11M65 60v22" strokeOpacity="0.75" />
      </g>
      {/* cat face on front-left face */}
      <g stroke="#f4f0ff" strokeWidth="1.1" fill="none" opacity="0.9" transform="translate(48 56) scale(0.62)">
        <path d="M2 8 0 2l5 3M18 8l2-6-5 3" />
        <path d="M20 8c0 5-3.6 7.4-10 7.4S0 13 0 8" />
        <circle cx="6" cy="9.5" r="1" fill="#f4f0ff" stroke="none" />
        <circle cx="14" cy="9.5" r="1" fill="#f4f0ff" stroke="none" />
        <path d="M8.5 12.8c.7.5 1.4.7 1.5.7.1 0 .8-.2 1.5-.7" strokeWidth="0.9" />
      </g>

      {/* bright orbit riders + sparkles */}
      <circle cx="23" cy="66" r="2" fill="#fff" filter="url(#rp-soft)" />
      <circle cx="108" cy="53" r="1.8" fill="#e8dcff" filter="url(#rp-soft)" />
      <circle cx="65" cy="16" r="1.6" fill="#f59e0b" />
      <g fill="#d7c9ff">
        <circle cx="16" cy="38" r="1.1" opacity="0.7" />
        <circle cx="115" cy="34" r="1.2" opacity="0.7" />
        <circle cx="52" cy="14" r="1" opacity="0.55" />
        <circle cx="82" cy="90" r="1" opacity="0.5" />
      </g>
      <path d="M112 74l1 2.8 2.8 1-2.8 1-1 2.8-1-2.8-2.8-1 2.8-1Z" fill="#fff" opacity="0.85" />
    </svg>
  );
}

function ThumbLightForms() {
  return (
    <svg viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="rl-wave" x1="0" x2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
          <stop offset="55%" stopColor="#c4b5fd" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id="rl-burst" cx="0%" cy="50%" r="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3b1f7a" stopOpacity="0" />
        </radialGradient>
        <filter id="rl-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
      </defs>

      {/* diffraction glow bursting right of the slit */}
      <ellipse cx="66" cy="50" rx="52" ry="38" fill="url(#rl-burst)" />

      {/* incoming waves */}
      <g stroke="url(#rl-wave)" fill="none" strokeLinecap="round">
        <path d="M6 34c7-11 11 11 18 0s11 11 18 0" strokeWidth="2.2" />
        <path d="M6 50c7-11 11 11 18 0s11 11 18 0" strokeWidth="1.8" opacity="0.75" />
        <path d="M6 66c7-11 11 11 18 0s11 11 18 0" strokeWidth="1.4" opacity="0.5" />
      </g>

      {/* barrier slit (glowing) */}
      <rect x="59" y="18" width="5" height="24" rx="2.5" fill="#a78bfa" />
      <rect x="59" y="58" width="5" height="24" rx="2.5" fill="#a78bfa" />
      <rect x="59" y="18" width="5" height="24" rx="2.5" fill="#c4b5fd" opacity="0.6" filter="url(#rl-soft)" />
      <rect x="59" y="58" width="5" height="24" rx="2.5" fill="#c4b5fd" opacity="0.6" filter="url(#rl-soft)" />

      {/* radiating ripple arcs from the slit */}
      <g stroke="#c4b5fd" fill="none" strokeLinecap="round">
        <path d="M66 39a11 11 0 0 1 0 22" strokeWidth="1.8" opacity="0.95" />
        <path d="M66 32a18 18 0 0 1 0 36" strokeWidth="1.5" opacity="0.75" />
        <path d="M66 25a25 25 0 0 1 0 50" strokeWidth="1.2" opacity="0.55" />
        <path d="M66 18a32 32 0 0 1 0 64" strokeWidth="1" opacity="0.38" />
        <path d="M66 11a39 39 0 0 1 0 78" strokeWidth="0.8" opacity="0.24" />
      </g>

      {/* detected particle dots on the ripples */}
      <circle cx="97" cy="32" r="2.2" fill="#fff" filter="url(#rl-soft)" />
      <circle cx="106" cy="50" r="2.4" fill="#e8dcff" filter="url(#rl-soft)" />
      <circle cx="97" cy="68" r="2" fill="#fff" filter="url(#rl-soft)" />
      <circle cx="86" cy="42" r="1.5" fill="#c4b5fd" />
      <circle cx="86" cy="58" r="1.5" fill="#c4b5fd" />

      {/* ambient stars */}
      <g fill="#d7c9ff">
        <circle cx="14" cy="16" r="1.1" opacity="0.7" />
        <circle cx="118" cy="14" r="1.2" opacity="0.6" />
        <circle cx="120" cy="86" r="1" opacity="0.5" />
        <circle cx="20" cy="86" r="1" opacity="0.5" />
      </g>
      <path d="M116 70l0.9 2.6 2.6 0.9-2.6 0.9-0.9 2.6-0.9-2.6-2.6-0.9 2.6-0.9Z" fill="#fbe7a6" opacity="0.85" />
    </svg>
  );
}

function ThumbMultipath() {
  return (
    <svg viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="rm-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0d0a24" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rm-trace" x1="0" x2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#e2d6ff" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.35" />
        </linearGradient>
        <filter id="rm-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>
      <rect x="0" y="0" width="130" height="100" fill="url(#rm-glow)" />

      {/* faint background maze traces */}
      <g stroke="#4a3a86" strokeWidth="0.7" strokeOpacity="0.35" fill="none" strokeLinejoin="round">
        <path d="M8 12h26v14h-14M56 8v14h22V8M104 14h18v20h-12M10 88h20V74M64 92v-12h26v12M112 84h12V64" />
      </g>

      {/* winding luminous multi-paths (serpentine, like a real maze route) */}
      <g stroke="url(#rm-trace)" strokeWidth="1.8" fill="none" strokeLinejoin="round" strokeLinecap="round">
        <path d="M12 56 24 42h16l8 12 14-20h16l10 14 12-8 16 4" />
        <path d="M12 56l14 16 18-6 12 12 16-10 14 6 16-14 12 4" opacity="0.85" />
        <path d="M12 56h20l14-26 20 10 14-14 18 8" opacity="0.6" strokeDasharray="4 5" />
      </g>
      {/* glow duplicate of the main path */}
      <path d="M12 56 24 42h16l8 12 14-20h16l10 14 12-8 16 4" stroke="#c4b5fd" strokeWidth="3.4" strokeOpacity="0.28" fill="none" strokeLinejoin="round" strokeLinecap="round" filter="url(#rm-soft)" />

      {/* glowing waypoint nodes */}
      <g fill="#fff">
        <circle cx="40" cy="42" r="2.2" filter="url(#rm-soft)" />
        <circle cx="62" cy="34" r="2" filter="url(#rm-soft)" />
        <circle cx="78" cy="34" r="1.8" filter="url(#rm-soft)" />
        <circle cx="100" cy="40" r="2.2" filter="url(#rm-soft)" />
        <circle cx="44" cy="66" r="1.8" filter="url(#rm-soft)" />
        <circle cx="72" cy="72" r="2" filter="url(#rm-soft)" />
        <circle cx="102" cy="64" r="1.8" filter="url(#rm-soft)" />
      </g>
      <g fill="#fbe7a6">
        <circle cx="88" cy="48" r="1.6" />
        <circle cx="30" cy="72" r="1.4" />
      </g>

      {/* source + exit terminals */}
      <circle cx="12" cy="56" r="4.5" fill="#a78bfa" />
      <circle cx="12" cy="56" r="7.5" fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.5" />
      <circle cx="118" cy="48" r="3.6" fill="#8b5cf6" />
      <circle cx="118" cy="48" r="6.4" fill="none" stroke="#c4b5fd" strokeWidth="0.9" opacity="0.6" />
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
