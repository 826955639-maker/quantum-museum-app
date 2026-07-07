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
/* 01 多种可能 (Superposition) — the SAME hexagon rendered at three slightly
   offset positions ("one form held in several states at once"), a bright core
   particle, and a sparse, regular probability point-cloud. No box, no figure. */
function ThumbPossibility() {
  const hexPts = (cx: number, cy: number, r: number) =>
    Array.from({ length: 6 }, (_, k) => {
      const a = (Math.PI / 3) * k - Math.PI / 2;
      return `${(cx + Math.cos(a) * r).toFixed(1)},${(cy + Math.sin(a) * r).toFixed(1)}`;
    }).join(" ");
  const cloud = Array.from({ length: 16 }, (_, k) => {
    const a = (Math.PI * 2 * k) / 16 + (k % 2 ? 0.2 : 0);
    const rr = 34 + (k % 3) * 6;
    return [65 + Math.cos(a) * rr * 1.25, 50 + Math.sin(a) * rr * 0.9, k % 4 === 0 ? 1.4 : 0.9] as const;
  });
  return (
    <svg className="thumb-tech thumb-sup" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="sup-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="45%" stopColor="#8fe6ff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#00d1ff" stopOpacity="0" />
        </radialGradient>
        <filter id="sup-soft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="1.4" /></filter>
      </defs>

      {/* probability cloud — sparse regular points */}
      <g className="thumb-sup__cloud" fill="#7c5cff">
        {cloud.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} opacity={0.16 + (i % 4 === 0 ? 0.36 : 0.12)} />
        ))}
      </g>

      {/* three superposed offset hexagons (cyan → purple → glow) */}
      <g fill="none" strokeLinejoin="round">
        <polygon points={hexPts(70.5, 46, 27)} stroke="#00d1ff" strokeWidth="1" strokeOpacity="0.42" />
        <polygon points={hexPts(59.5, 54, 27)} stroke="#7c5cff" strokeWidth="1.2" strokeOpacity="0.62" />
        <polygon points={hexPts(65, 50, 27)} stroke="#afa4ff" strokeWidth="1.5" fill="#7c5cff" fillOpacity="0.07" />
      </g>

      {/* structural core particle */}
      <circle cx="65" cy="50" r="12" fill="url(#sup-core)" />
      <circle className="thumb-sup__core" cx="65" cy="50" r="2.6" fill="#fff" filter="url(#sup-soft)" />
    </svg>
  );
}

/* 02 光的两种样子 (Wave–particle) — continuous sine waves (left) meet a bright
   observation gate (middle) and resolve into a discrete, regular particle matrix
   (right). Strong continuous-vs-discrete contrast; electric-purple → cool-blue. */
function ThumbLightForms() {
  const sine = (yc: number, amp: number) => {
    let d = `M6 ${yc}`;
    for (let x = 8; x <= 58; x += 2) {
      const y = yc + Math.sin((x - 6) * 0.24) * amp;
      d += ` L${x} ${y.toFixed(1)}`;
    }
    return d;
  };
  const cols = [78, 90, 102, 114, 124];
  const rows = [26, 42, 58, 74];
  return (
    <svg className="thumb-tech thumb-wp" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="wp-wave" x1="0" x2="1">
          <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#afa4ff" stopOpacity="0.95" />
        </linearGradient>
        <filter id="wp-soft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="1.2" /></filter>
      </defs>

      {/* continuous waves (left) */}
      <g stroke="url(#wp-wave)" fill="none" strokeLinecap="round">
        <path d={sine(34, 9)} strokeWidth="2" />
        <path d={sine(50, 9)} strokeWidth="1.6" opacity="0.7" />
        <path d={sine(66, 9)} strokeWidth="1.3" opacity="0.45" />
      </g>

      {/* observation gate (middle) */}
      <g className="thumb-wp__gate">
        <line x1="65" y1="14" x2="65" y2="86" stroke="#00d1ff" strokeWidth="2.2" filter="url(#wp-soft)" />
        <line x1="65" y1="14" x2="65" y2="86" stroke="#eafaff" strokeWidth="0.9" />
        <path d="M60 14h10M60 86h10" stroke="#00d1ff" strokeWidth="1.4" />
      </g>

      {/* discrete particle matrix (right) */}
      <g fill="#00d1ff">
        {rows.flatMap((ry, ri) => cols.map((cx, ci) => (
          <circle key={`${ri}-${ci}`} cx={cx} cy={ry} r={1.9} opacity={0.45 + ((ri + ci) % 3) * 0.22} />
        )))}
      </g>

      {/* freshly-resolved bright particles */}
      <circle cx="90" cy="42" r="2.6" fill="#eafaff" filter="url(#wp-soft)" />
      <circle cx="114" cy="58" r="2.4" fill="#eafaff" filter="url(#wp-soft)" />
    </svg>
  );
}

/* 03 多路径探索 (Path integral) — several curved paths run from one source to one
   sink; stroke brightness encodes probability weight; decision nodes sit on each
   route; the dominant path carries a flowing dashed "energy" pulse. */
function ThumbMultipath() {
  const paths = [
    { d: "M14 50 C40 18 90 18 116 50", o: 0.9, w: 1.8, node: [65, 26] as const },
    { d: "M14 50 C42 34 88 34 116 50", o: 0.58, w: 1.4, node: [65, 38] as const },
    { d: "M14 50 C44 62 86 62 116 50", o: 0.44, w: 1.2, node: [65, 58] as const },
    { d: "M14 50 C40 82 90 82 116 50", o: 0.3, w: 1, node: [65, 72] as const },
    { d: "M14 50 C56 50 74 50 116 50", o: 0.78, w: 1.5, node: [65, 50] as const },
  ];
  return (
    <svg className="thumb-tech thumb-path" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <filter id="pi-soft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="1.5" /></filter>
      </defs>

      {/* probability-weighted paths */}
      <g fill="none" strokeLinecap="round">
        {paths.map((p, i) => (
          <path key={i} d={p.d} stroke="#7c5cff" strokeWidth={p.w} strokeOpacity={p.o} />
        ))}
        {/* dominant path — flowing energy pulse */}
        <path className="thumb-path__flow" d={paths[4].d} stroke="#afa4ff" strokeWidth="1.3" strokeDasharray="3 7" strokeOpacity="0.9" fill="none" />
      </g>

      {/* decision nodes on each route */}
      <g fill="#00d1ff">
        {paths.map((p, i) => (
          <circle key={i} cx={p.node[0]} cy={p.node[1]} r={i === 4 ? 2.2 : 1.6} opacity={0.5 + p.o * 0.4} />
        ))}
      </g>

      {/* source + sink terminals */}
      <circle cx="14" cy="50" r="4" fill="#7c5cff" />
      <circle cx="14" cy="50" r="7" fill="none" stroke="#7c5cff" strokeWidth="1" opacity="0.5" />
      <circle cx="116" cy="50" r="5" fill="#00d1ff" opacity="0.4" filter="url(#pi-soft)" />
      <circle cx="116" cy="50" r="3.4" fill="#eafaff" />
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
    thumb: <img className="rec-level__thumb-img" src="/lv-possibility.png" alt="" />,
  },
  {
    num: "02",
    title: "光的两种样子",
    desc: "光既能像波一样产生干涉，又能像粒子一样被探测，展现出波粒二象性。",
    tags: ["波动性", "粒子性"],
    thumb: <img className="rec-level__thumb-img" src="/lv-lightforms.png" alt="" />,
  },
  {
    num: "03",
    title: "多路径探索",
    desc: "粒子可以同时经过多条路径，不同路径的干涉决定了最终出现的概率分布。",
    tags: ["干涉", "概率"],
    thumb: <img className="rec-level__thumb-img" src="/lv-multipath.png" alt="" />,
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
