import { useRef } from "react";
import HeroAtomCanvas from "../components/HeroAtomCanvas";
import ExplorationRecordSection from "../components/ExplorationRecordSection";

/* ── Inline SVG assets ── */

function BookSVG() {
  return (
    <svg viewBox="0 0 140 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="bkGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bkCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b1f7a" />
          <stop offset="55%" stopColor="#5b26c9" />
          <stop offset="100%" stopColor="#18164a" />
        </linearGradient>
        <linearGradient id="bkRightPage" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0d0c2a" />
        </linearGradient>
        <linearGradient id="bkSpine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="100%" stopColor="#2e177a" />
        </linearGradient>
        <filter id="bkShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#6d28d9" floodOpacity="0.55" />
        </filter>
      </defs>

      {/* Ambient glow */}
      <ellipse cx="70" cy="65" rx="62" ry="58" fill="url(#bkGlow)" />

      {/* Orbital ring behind book */}
      <ellipse cx="70" cy="78" rx="52" ry="14" stroke="#6d28d9" strokeWidth="1.2" strokeOpacity="0.5" fill="none" transform="rotate(-8 70 78)" />

      {/* Left page / cover */}
      <rect x="26" y="22" width="42" height="66" rx="3" fill="url(#bkCover)" stroke="#7c3aed" strokeWidth="0.8" filter="url(#bkShadow)" />

      {/* Spine crease */}
      <rect x="64" y="22" width="4" height="66" rx="1" fill="url(#bkSpine)" />

      {/* Right page */}
      <rect x="68" y="22" width="36" height="66" rx="2" fill="url(#bkRightPage)" stroke="#3b1780" strokeWidth="0.5" />

      {/* Right page lines */}
      <line x1="75" y1="34" x2="98" y2="34" stroke="#6d28d9" strokeWidth="1.1" strokeOpacity="0.55" />
      <line x1="75" y1="41" x2="96" y2="41" stroke="#6d28d9" strokeWidth="1.1" strokeOpacity="0.38" />
      <line x1="75" y1="48" x2="99" y2="48" stroke="#6d28d9" strokeWidth="1.1" strokeOpacity="0.46" />
      <line x1="75" y1="55" x2="94" y2="55" stroke="#6d28d9" strokeWidth="1.1" strokeOpacity="0.3" />
      <line x1="75" y1="62" x2="97" y2="62" stroke="#6d28d9" strokeWidth="1.1" strokeOpacity="0.36" />

      {/* Left page decoration – atom symbol */}
      <circle cx="47" cy="55" r="9" stroke="#a78bfa" strokeWidth="1.2" fill="none" strokeOpacity="0.6" />
      <ellipse cx="47" cy="55" rx="9" ry="3.5" stroke="#c4b5fd" strokeWidth="0.8" fill="none" transform="rotate(60 47 55)" strokeOpacity="0.5" />
      <ellipse cx="47" cy="55" rx="9" ry="3.5" stroke="#c4b5fd" strokeWidth="0.8" fill="none" transform="rotate(-60 47 55)" strokeOpacity="0.5" />
      <circle cx="47" cy="55" r="2" fill="#c4b5fd" fillOpacity="0.9" />

      {/* Bottom orbit ring in front */}
      <ellipse cx="70" cy="90" rx="46" ry="12" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.7" fill="none" transform="rotate(-8 70 90)" />

      {/* Sparkle dots */}
      <circle cx="28" cy="30" r="1.8" fill="#c4b5fd" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.1s" repeatCount="indefinite" />
      </circle>
      <circle cx="110" cy="35" r="2.2" fill="#f59e0b" opacity="0.7">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="118" cy="72" r="1.5" fill="#c4b5fd" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="22" cy="80" r="1.2" fill="#a78bfa" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="90" cy="18" r="1.6" fill="#fff" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.4s" repeatCount="indefinite" />
      </circle>
      {/* 4-point star near top right */}
      <path d="M108 24 l1.2 3.5 3.5 1.2-3.5 1.2-1.2 3.5-1.2-3.5-3.5-1.2 3.5-1.2Z" fill="#f59e0b" opacity="0.85">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.9s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function PlanetSVG() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="planetBody" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="55%" stopColor="#6d28d9" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="40" rx="36" ry="11" stroke="#6d28d9" strokeWidth="1.5" fill="none" opacity="0.38" transform="rotate(-22 40 40)" />
      <circle cx="40" cy="40" r="18" fill="url(#planetBody)" />
      <ellipse cx="40" cy="40" rx="32" ry="10" stroke="#a78bfa" strokeWidth="2" fill="none" opacity="0.75" transform="rotate(-22 40 40)" />
      <circle cx="33" cy="34" r="3.5" fill="#fff" fillOpacity="0.12" />
    </svg>
  );
}

function QRCodeSVG() {
  const cells: Array<[number, number]> = [
    [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],
    [1,0],[1,6],
    [2,0],[2,2],[2,3],[2,4],[2,6],
    [3,0],[3,2],[3,4],[3,6],
    [4,0],[4,2],[4,3],[4,4],[4,6],
    [5,0],[5,6],
    [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],
    [0,9],[0,10],[0,11],[0,12],
    [1,9],[1,11],
    [2,10],[2,12],
    [3,9],[3,11],[3,12],
    [4,10],[4,11],
    [9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],
    [10,0],[10,6],
    [11,0],[11,2],[11,3],[11,4],[11,6],
    [12,0],[12,2],[12,6],
    [13,0],[13,2],[13,3],[13,4],[13,5],[13,6],
    [8,9],[8,10],[8,11],[8,12],
    [9,8],[9,9],[9,11],
    [10,10],[10,12],
    [11,8],[11,9],[11,11],[11,12],
    [12,8],[12,10],[12,12],
    [13,9],[13,10],
  ];
  const size = 3;
  return (
    <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <rect width="52" height="52" fill="white" />
      {cells.map(([r, c], i) => (
        <rect key={i} x={c * size + 3} y={r * size + 3} width={size - 0.5} height={size - 0.5} fill="#111" />
      ))}
    </svg>
  );
}

/* ── Card heading icon SVGs ── */

function IconPin() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 17S3.5 11.5 3.5 7a6.5 6.5 0 1 1 13 0C16.5 11.5 10 17 10 17Z" />
      <circle cx="10" cy="7" r="2" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="2.5" width="15" height="15" rx="3" />
      <path d="m6.5 10 2.5 2.5 4.5-5" />
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h8M5 3C5 8 7 10 10 11c3-1 5-3 5-8" />
      <path d="M3 3h2M17 3h-2M3 3c0 3 1 5 2.5 6M17 3c0 3-1 5-2.5 6" />
      <path d="M10 11v3.5M7 17h6M8 14.5h4" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2l2.2 4.6 5 .7-3.6 3.5.85 5L10 13.4 5.55 15.8l.85-5L2.8 7.3l5-.7Z" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 4.5C3 3.7 3.7 3 4.5 3H10v14H4.5A1.5 1.5 0 0 1 3 15.5Z" />
      <path d="M10 3h5.5A1.5 1.5 0 0 1 17 4.5v11A1.5 1.5 0 0 1 15.5 17H10Z" />
      <path d="M10 3v14" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3l3 3-3 3" />
      <path d="M3 10V8.5A2.5 2.5 0 0 1 5.5 6H17" />
      <path d="M6 17l-3-3 3-3" />
      <path d="M17 10v1.5A2.5 2.5 0 0 1 14.5 14H3" />
    </svg>
  );
}

/* ── Route icon SVGs ── */

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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12c1-2.5 2-4 3.5-4s2.5 2.5 4 2.5S12 8 13.5 8s2.5 2.5 4 2.5S20 9.5 22 12" />
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

function LightbulbSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 21h6M10.5 21v-1.5h3V21" />
      <path d="M12 3a6 6 0 0 1 6 6c0 2.4-1.3 4.3-3 5.4V16.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V14.4C7.3 13.3 6 11.4 6 9a6 6 0 0 1 6-6Z" />
    </svg>
  );
}

function EyeSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CrownSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18.5h18" />
      <path d="M4.5 18.5 6 9l5.5 4L14 6l2.5 7 1.5-4.5 1.5 10" />
      <circle cx="14" cy="6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ReturnArrowSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="3" width="14" height="11" rx="2" />
      <path d="m9 20-4-4 4-4" />
      <path d="M5 16h9a5 5 0 0 0 5-5V8" />
    </svg>
  );
}

/* ── Thumbnail card SVG illustrations ── */

function ThumbSuperposition() {
  return (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="ts1a" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.3" />
        </radialGradient>
        <radialGradient id="ts1b" cx="60%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      <circle cx="30" cy="30" r="18" fill="url(#ts1a)" opacity="0.75" />
      <circle cx="50" cy="30" r="18" fill="url(#ts1b)" opacity="0.65" />
      {/* intersection highlight */}
      <path d="M40 14.5a18 18 0 0 1 0 31 18 18 0 0 1 0-31Z" fill="#c4b5fd" fillOpacity="0.25" />
      {/* orbit ring */}
      <ellipse cx="40" cy="30" rx="36" ry="10" stroke="#a78bfa" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />
      <circle cx="40" cy="20" r="2" fill="#fff" fillOpacity="0.9" />
      <circle cx="18" cy="30" r="1.5" fill="#f59e0b" fillOpacity="0.8" />
      <circle cx="62" cy="30" r="1.5" fill="#f59e0b" fillOpacity="0.8" />
    </svg>
  );
}

function ThumbWaveParticle() {
  return (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="twp" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {/* Wave */}
      <path d="M4 30 C12 18 18 42 26 30 C34 18 40 42 48 30 C56 18 62 42 70 30 C74 24 76 30 80 28" stroke="url(#twp)" strokeWidth="2" fill="none" />
      {/* Second wave offset */}
      <path d="M4 35 C12 23 18 47 26 35 C34 23 40 47 48 35 C56 23 62 47 70 35" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.35" fill="none" />
      {/* Particle dots on wave */}
      <circle cx="4" cy="30" r="2.5" fill="#c4b5fd" />
      <circle cx="26" cy="30" r="2.5" fill="#c4b5fd" />
      <circle cx="48" cy="30" r="2.5" fill="#c4b5fd" />
      <circle cx="70" cy="30" r="2.5" fill="#c4b5fd" />
      <circle cx="15" cy="18" r="1.8" fill="#a78bfa" fillOpacity="0.8" />
      <circle cx="37" cy="42" r="1.8" fill="#a78bfa" fillOpacity="0.8" />
      <circle cx="59" cy="18" r="1.8" fill="#a78bfa" fillOpacity="0.8" />
      {/* Glow center */}
      <circle cx="40" cy="30" r="5" fill="#8b5cf6" fillOpacity="0.25" />
    </svg>
  );
}

function ThumbQuantumCompute() {
  return (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="tqc" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="5" y="5" width="70" height="50" rx="2" fill="url(#tqc)" />
      {/* Grid lines */}
      <line x1="5" y1="20" x2="75" y2="20" stroke="#3b82f6" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="5" y1="35" x2="75" y2="35" stroke="#3b82f6" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="5" y1="50" x2="75" y2="50" stroke="#3b82f6" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="20" y1="5" x2="20" y2="55" stroke="#3b82f6" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="40" y1="5" x2="40" y2="55" stroke="#3b82f6" strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="60" y1="5" x2="60" y2="55" stroke="#3b82f6" strokeWidth="0.6" strokeOpacity="0.4" />
      {/* Circuit paths */}
      <path d="M20 20 H40 V35 H60" stroke="#60a5fa" strokeWidth="1.5" fill="none" />
      <path d="M20 35 H30 V20" stroke="#60a5fa" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
      <path d="M40 20 V10 H60 V20" stroke="#818cf8" strokeWidth="1.2" fill="none" strokeOpacity="0.7" />
      {/* Nodes */}
      <circle cx="20" cy="20" r="3.5" fill="#3b82f6" />
      <circle cx="40" cy="20" r="3.5" fill="#6366f1" />
      <circle cx="60" cy="20" r="3.5" fill="#3b82f6" />
      <circle cx="20" cy="35" r="3.5" fill="#6366f1" />
      <circle cx="40" cy="35" r="3.5" fill="#3b82f6" />
      <circle cx="60" cy="35" r="3.5" fill="#6366f1" />
      {/* Glow on center node */}
      <circle cx="40" cy="35" r="6" fill="#3b82f6" fillOpacity="0.25" />
      {/* State labels */}
      <text x="38" y="23" fontSize="5" fill="#fff" fillOpacity="0.9" fontFamily="monospace">|0⟩</text>
      <text x="58" y="38" fontSize="5" fill="#fff" fillOpacity="0.9" fontFamily="monospace">|1⟩</text>
    </svg>
  );
}

type ExplorationReportPageProps = {
  onReturnToMap?: () => void;
};

export default function ExplorationReportPage({ onReturnToMap }: ExplorationReportPageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="report-scroll" ref={scrollRef}>
      <div className="report-layout">

      {/* ── Hero Banner ── */}
      <section className="report-hero report-card">
        <HeroAtomCanvas />
        <div className="report-hero__copy">
          {/* Floating particle orbs */}
          <div className="rh-particles" aria-hidden="true">
            <span className="rh-p rh-p1" />
            <span className="rh-p rh-p2" />
            <span className="rh-p rh-p3" />
            <span className="rh-p rh-p4" />
            <span className="rh-p rh-p5" />
            <span className="rh-p rh-p6" />
          </div>
          <div className="report-hero__eyebrow">
            <span className="report-hero__num">08</span>
            <span>我的探索档案</span>
          </div>
          <h1 className="report-hero__title">
            我的<span className="report-hero__accent">量子探索</span>报告
            <span className="report-hero__star4" aria-hidden="true" />
          </h1>
          <p className="report-hero__sub">感谢你的好奇与探索，量子世界因你而更精彩！</p>
        </div>
      </section>

      {/* ── Right column: 3 stacked cards ── */}
      <div className="report-right">

        {/* Route card */}
        <div className="report-card report-right__card">
          <h2 className="rpt-card-head">
            <span className="rpt-head-icon"><IconPin /></span>
            本次探索路线
          </h2>
          <div className="rpt-route-nodes">
            <div className="rpt-node">
              <div className="rpt-node__icon"><LightbulbSVG /></div>
              <span>创见区</span>
            </div>
            <div className="rpt-connector" aria-hidden="true" />
            <div className="rpt-node">
              <div className="rpt-node__icon"><EyeSVG /></div>
              <span>感知区</span>
            </div>
            <div className="rpt-connector" aria-hidden="true" />
            <div className="rpt-node rpt-node--active">
              <div className="rpt-node__icon"><CrownSVG /></div>
              <span>引领区</span>
            </div>
          </div>
        </div>

        {/* Completed interactions card */}
        <div className="report-card report-right__card">
          <h2 className="rpt-card-head">
            <span className="rpt-head-icon"><IconCheck /></span>
            已完成互动
          </h2>
          <div className="rpt-icon-row">
            <div className="rpt-round-icon">
              <div className="rpt-round-icon__circle"><CatSVG /></div>
              <span>薛定谔的猫</span>
            </div>
            <div className="rpt-round-icon">
              <div className="rpt-round-icon__circle"><WaveSVG /></div>
              <span>跳动的光波</span>
            </div>
            <div className="rpt-round-icon">
              <div className="rpt-round-icon__circle"><MazeSVG /></div>
              <span>量子迷宫</span>
            </div>
          </div>
        </div>

        {/* Badges card */}
        <div className="report-card report-right__card">
          <h2 className="rpt-card-head">
            <span className="rpt-head-icon"><IconTrophy /></span>
            获得徽章
          </h2>
          <div className="rpt-badges-row">
            <div className="rpt-badge">
              <div className="rpt-badge__hex rpt-badge__hex--glow">
                <EyeSVG />
              </div>
              <span>观察者徽章</span>
            </div>
            <div className="rpt-badge">
              <div className="rpt-badge__hex">
                <WaveSVG />
              </div>
              <span>光波探索徽章</span>
            </div>
            <div className="rpt-badge">
              <div className="rpt-badge__hex">
                <MazeSVG />
              </div>
              <span>迷宫挑战徽章</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Knowledge Card ── */}
      <section className="report-card report-knowledge">
        <h2 className="rpt-card-head">
          <span className="rpt-head-icon"><IconBook /></span>
          我的知识收获
        </h2>
        <ul className="rpt-knowledge-list">
          <li>我理解了观察会影响结果</li>
          <li>我看到了光的两种样子</li>
          <li>我知道量子计算可以处理更多可能</li>
        </ul>
        <div className="report-book" aria-hidden="true">
          <BookSVG />
        </div>
      </section>

      {/* ── Bottom 4-section row ── */}
      <div className="report-bottom">

        {/* Collected knowledge cards */}
        <div className="report-card report-collected">
          <h2 className="rpt-card-head rpt-card-head--sm">
            <span className="rpt-head-icon"><IconStar /></span>
            收藏知识卡
          </h2>
          <div className="rpt-thumbs">
            <div className="rpt-thumb">
              <div className="rpt-thumb__visual">
                <ThumbSuperposition />
              </div>
              <span>量子叠加</span>
              <small>多个状态同时存在</small>
            </div>
            <div className="rpt-thumb">
              <div className="rpt-thumb__visual">
                <ThumbWaveParticle />
              </div>
              <span>波粒二象性</span>
              <small>光既是波也是粒子</small>
            </div>
            <div className="rpt-thumb">
              <div className="rpt-thumb__visual">
                <ThumbQuantumCompute />
              </div>
              <span>量子计算</span>
              <small>处理更多可能性</small>
            </div>
            <div className="rpt-thumbs__arrow" aria-hidden="true">→</div>
          </div>
        </div>

        {/* Share card */}
        <div className="report-card report-share">
          <div className="report-share__header">
            <span className="report-share__arrow-icon" aria-hidden="true"><IconShare /></span>
            <span className="report-share__label">分享卡</span>
          </div>
          <div className="report-share__body">
            <p>我在安徽省科技馆<br />发现了量子世界</p>
            <div className="report-share__planet" aria-hidden="true"><PlanetSVG /></div>
          </div>
        </div>

        {/* QR code */}
        <div className="report-card report-qr">
          <div className="report-qr__code"><QRCodeSVG /></div>
          <span className="report-qr__label">扫码带走报告</span>
        </div>

        {/* Return iPad */}
        <div className="report-card report-return">
          <h2 className="report-return__title">归还 iPad 提示</h2>
          <div className="report-return__icon"><ReturnArrowSVG /></div>
          <p className="report-return__text">探索结束后<br />请至服务台归还 iPad</p>
        </div>
      </div>

      {/* ── Toast bar ── */}
      <div className="report-toast">
        <span className="report-toast__bulb" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1.1cqw" height="1.1cqw">
            <path d="M6 14h4M7 14v-1h2v1M8 2a4 4 0 0 1 4 4c0 1.6-.9 2.9-2 3.6V11a.5.5 0 0 1-.5.5h-3A.5.5 0 0 1 6 11V9.6C4.9 8.9 4 7.6 4 6a4 4 0 0 1 4-4Z" />
          </svg>
        </span>
        <span>你的每一次探索，都是科学未来的一小步。期待下次在量子世界再相遇！</span>
        <span className="report-toast__star" aria-hidden="true">✦</span>
      </div>

      </div>

      {/* ── Scroll-continued detail section ── */}
      <ExplorationRecordSection onViewReport={scrollToTop} onReturnToMap={onReturnToMap} />

    </div>
  );
}
