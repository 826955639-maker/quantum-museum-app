import { useRef } from "react";
import HeroAtomCanvas from "../components/HeroAtomCanvas";
import ExplorationRecordSection from "../components/ExplorationRecordSection";
import BadgeMedal from "../components/BadgeMedal";

/* ── Inline SVG assets ── */

/* Open glowing quantum "energy book" — high-fidelity rebuild toward the
   reference (p2): a 3D open book tilted slightly right, curved translucent
   pages with lifted edges, a visible multi-sheet page stack + rim light,
   text lines on the left / atom on the right, and interwoven gold+purple
   orbit trails carrying energy particles and scattered stars.
   Implementation: pure SVG — cubic-Bézier page surfaces for the curl,
   feGaussianBlur for the bloom/rim glow, layered translucent fills for the
   page depth, gradient-stroked ellipse arcs for the orbits. */

/* 分享卡 spiral galaxy (recreated to match reference p4): a tilted spiral
   disc — bright white-violet core, two logarithmic star-dot arms, a rim
   orbit ring and scattered field stars. */

// Real, scannable QR for https://github.com/826955639-maker/quantum-museum-app
// (33×33 modules, ECC level M). Encoded as horizontal runs "x,y,width".
const QR_MODULES =
  "0,0,7;9,0,1;12,0,1;16,0,1;19,0,1;21,0,1;23,0,1;26,0,7;0,1,1;6,1,1;10,1,3;15,1,2;18,1,1;21,1,2;26,1,1;32,1,1;0,2,1;2,2,3;6,2,1;8,2,1;12,2,1;14,2,3;18,2,2;21,2,2;26,2,1;28,2,3;32,2,1;0,3,1;2,3,3;6,3,1;8,3,1;18,3,1;20,3,1;22,3,1;26,3,1;28,3,3;32,3,1;0,4,1;2,4,3;6,4,1;8,4,1;10,4,7;18,4,6;26,4,1;28,4,3;32,4,1;0,5,1;6,5,1;8,5,1;10,5,3;14,5,1;17,5,1;26,5,1;32,5,1;0,6,7;8,6,1;10,6,1;12,6,1;14,6,1;16,6,1;18,6,1;20,6,1;22,6,1;24,6,1;26,6,7;8,7,3;14,7,1;16,7,1;18,7,1;21,7,1;0,8,1;2,8,5;9,8,3;13,8,2;17,8,2;20,8,1;23,8,1;26,8,5;0,9,1;4,9,2;7,9,1;9,9,2;12,9,2;17,9,1;19,9,1;21,9,1;23,9,1;26,9,2;29,9,4;1,10,1;3,10,1;6,10,3;10,10,8;24,10,3;28,10,1;30,10,2;1,11,4;9,11,5;15,11,1;17,11,2;21,11,2;24,11,1;26,11,1;28,11,4;0,12,1;4,12,1;6,12,1;10,12,1;14,12,1;16,12,1;19,12,2;22,12,4;27,12,3;31,12,1;3,13,3;8,13,1;12,13,1;15,13,1;17,13,4;23,13,1;25,13,2;30,13,3;1,14,2;4,14,1;6,14,2;9,14,1;11,14,1;14,14,3;18,14,1;20,14,1;22,14,1;25,14,2;31,14,1;1,15,1;3,15,1;5,15,1;7,15,5;14,15,2;21,15,1;25,15,3;30,15,1;2,16,3;6,16,3;10,16,1;12,16,7;20,16,1;22,16,4;27,16,2;32,16,1;1,17,2;7,17,1;9,17,1;12,17,1;19,17,1;21,17,1;23,17,1;26,17,2;29,17,2;32,17,1;0,18,1;4,18,5;10,18,2;13,18,1;15,18,2;18,18,1;20,18,3;24,18,2;27,18,2;30,18,2;0,19,1;2,19,1;4,19,2;7,19,5;13,19,2;19,19,4;27,19,6;1,20,1;3,20,1;6,20,2;9,20,4;14,20,2;18,20,2;22,20,1;24,20,2;27,20,3;32,20,1;0,21,1;8,21,2;11,21,6;19,21,8;29,21,1;32,21,1;0,22,1;6,22,1;10,22,2;13,22,2;20,22,1;25,22,1;29,22,1;31,22,1;0,23,1;3,23,1;8,23,1;12,23,2;16,23,1;20,23,3;25,23,2;29,23,3;0,24,1;2,24,1;5,24,2;10,24,1;12,24,3;16,24,4;22,24,8;31,24,1;8,25,2;11,25,1;13,25,1;17,25,1;19,25,1;21,25,1;23,25,2;28,25,1;30,25,1;32,25,1;0,26,7;9,26,4;15,26,1;17,26,1;20,26,5;26,26,1;28,26,1;30,26,2;0,27,1;6,27,1;8,27,1;10,27,2;16,27,3;20,27,5;28,27,4;0,28,1;2,28,3;6,28,1;8,28,3;13,28,4;19,28,1;22,28,1;24,28,6;0,29,1;2,29,3;6,29,1;8,29,2;11,29,1;14,29,2;18,29,2;23,29,3;28,29,1;30,29,3;0,30,1;2,30,3;6,30,1;8,30,2;12,30,2;15,30,2;20,30,1;22,30,1;26,30,2;29,30,2;0,31,1;6,31,1;10,31,1;15,31,1;20,31,3;25,31,1;28,31,3;0,32,7;8,32,1;13,32,7;22,32,4;27,32,1;29,32,1;31,32,1";

function QRCodeSVG() {
  const quiet = 4; // quiet-zone margin in modules
  const dim = 33 + quiet * 2;
  const runs = QR_MODULES.split(";").map((r) => r.split(",").map(Number));
  return (
    <svg viewBox={`0 0 ${dim} ${dim}`} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
      <rect width={dim} height={dim} fill="#ffffff" />
      {runs.map(([x, y, w], i) => (
        <rect key={i} x={x + quiet} y={y + quiet} width={w} height={1} fill="#0d0a24" />
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

/* 量子叠加 — glowing atom: bright core + crossed neon orbit ellipses + a dashed
   probability shell, with small electron particles riding the orbits. */
function ThumbSuperposition() {
  return (
    <svg className="rpt-ico rpt-ico--atom" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="ts1-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="32%" stopColor="#e2c8ff" />
          <stop offset="62%" stopColor="#a855f7" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ts1-neb" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#120a2e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ts1-ball" cx="38%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" />
        </radialGradient>
        <filter id="ts1-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.1" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <ellipse cx="40" cy="30" rx="34" ry="26" fill="url(#ts1-neb)" />

      {/* dashed probability shell */}
      <circle cx="40" cy="30" r="26" stroke="#a855f7" strokeWidth="0.7" strokeOpacity="0.35" strokeDasharray="2 3" fill="none" />

      {/* crossed neon orbits (rotating) */}
      <g className="rpt-ico__orbits" fill="none" filter="url(#ts1-glow)">
        <ellipse cx="40" cy="30" rx="27" ry="10.5" stroke="#c084fc" strokeWidth="1.1" strokeOpacity="0.8" transform="rotate(58 40 30)" />
        <ellipse cx="40" cy="30" rx="27" ry="10.5" stroke="#a855f7" strokeWidth="1.1" strokeOpacity="0.75" transform="rotate(-58 40 30)" />
        <ellipse cx="40" cy="30" rx="28" ry="12" stroke="#b06cf6" strokeWidth="0.9" strokeOpacity="0.5" />
      </g>

      {/* electrons riding the orbits */}
      <g className="rpt-ico__electrons">
        <circle cx="63" cy="21" r="2.4" fill="url(#ts1-ball)" filter="url(#ts1-glow)" />
        <circle cx="17" cy="39" r="2.1" fill="url(#ts1-ball)" filter="url(#ts1-glow)" />
        <circle cx="30" cy="52" r="1.8" fill="url(#ts1-ball)" />
      </g>

      {/* bright core + cross flare */}
      <circle cx="40" cy="30" r="9" fill="url(#ts1-core)" />
      <path d="M40 21v18M31 30h18" stroke="#ffffff" strokeWidth="0.8" opacity="0.85" filter="url(#ts1-glow)" />
      <circle cx="40" cy="30" r="2.4" fill="#fff" />
    </svg>
  );
}

/* 波粒二象性 — a circle split into a continuous wave (left) and a discrete
   glowing particle field (right), joined by a bright vertical interface line. */
function ThumbWaveParticle() {
  const wave = () => {
    let d = "M15 30";
    for (let x = 15; x <= 40; x += 1) {
      const y = 30 - Math.sin((x - 15) * 0.5) * 7;
      d += ` L${x} ${y.toFixed(1)}`;
    }
    return d;
  };
  const dots: Array<[number, number, number, number]> = [
    [48, 18, 1.6, 0.95], [55, 26, 1.2, 0.8], [60, 16, 1, 0.7], [52, 38, 1.5, 0.9],
    [58, 44, 1.1, 0.75], [63, 34, 1.3, 0.85], [46, 30, 1, 0.65], [50, 48, 0.9, 0.6],
    [61, 50, 1, 0.7], [56, 12, 0.9, 0.6], [64, 24, 1.4, 0.85], [49, 40, 0.8, 0.55],
  ];
  return (
    <svg className="rpt-ico rpt-ico--wp" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="twp-disc" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#120a2e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="twp-dot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="twp-div" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
        </linearGradient>
        <clipPath id="twp-clip"><circle cx="40" cy="30" r="26" /></clipPath>
        <filter id="twp-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="0.9" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <circle cx="40" cy="30" r="26" fill="url(#twp-disc)" />
      <g clipPath="url(#twp-clip)">
        {/* left: faint hemisphere wireframe + continuous wave */}
        <g stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.28" fill="none">
          <path d="M14 30h26M18 18c8 6 16 6 22 0M18 42c8-6 16-6 22 0" />
          <ellipse cx="40" cy="30" rx="12" ry="26" />
          <ellipse cx="40" cy="30" rx="24" ry="26" />
        </g>
        <path className="rpt-ico__wave" d={wave()} stroke="#e6d2ff" strokeWidth="1.5" fill="none" strokeLinecap="round" filter="url(#twp-glow)" />
        {/* right: discrete glowing particles */}
        <g className="rpt-ico__field">
          {dots.map(([x, y, r, o], i) => (
            <circle key={i} cx={x} cy={y} r={r * 1.8} fill="url(#twp-dot)" opacity={o} />
          ))}
        </g>
      </g>

      {/* circle outline + bright interface divider */}
      <circle cx="40" cy="30" r="26" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.7" fill="none" filter="url(#twp-glow)" />
      <line x1="40" y1="5" x2="40" y2="55" stroke="url(#twp-div)" strokeWidth="1.6" filter="url(#twp-glow)" />
      <circle cx="40" cy="30" r="2" fill="#fff" filter="url(#twp-glow)" />
    </svg>
  );
}

/* 量子计算 — isometric chip with a glowing atom symbol on top, circuit traces
   radiating on the ground, and vertical binary data rain above. */
function ThumbQuantumCompute() {
  const CX = 40;
  const TOP = 30; // chip top-face centre y
  const rain = [
    { x: 16, chars: "1011", o: 0.35 },
    { x: 26, chars: "0110", o: 0.6 },
    { x: 54, chars: "1001", o: 0.6 },
    { x: 64, chars: "0101", o: 0.35 },
  ];
  return (
    <svg className="rpt-ico rpt-ico--chip" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="tqc-glow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#12082e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tqc-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a1d78" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1b0e42" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="tqc-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <filter id="tqc-glow-f" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <ellipse cx={CX} cy={TOP + 8} rx="32" ry="18" fill="url(#tqc-glow)" />

      {/* binary data rain (above the chip) */}
      <g className="rpt-ico__rain" fontFamily="ui-monospace, monospace" fontSize="4" fill="#c084fc" textAnchor="middle">
        {rain.map((col, ci) => col.chars.split("").map((c, ri) => (
          <text key={`${ci}-${ri}`} x={col.x} y={6 + ri * 5.2} opacity={col.o + (ri === col.chars.length - 1 ? 0.3 : 0)}>{c}</text>
        )))}
      </g>

      {/* circuit traces radiating on the ground */}
      <g stroke="#7c3aed" strokeWidth="0.7" strokeOpacity="0.6" fill="none">
        <path d="M40 50 V56M22 44 H8V50M58 44 H72V50M30 50 V54H24M50 50 V54H56" />
      </g>
      <g fill="#a855f7">
        <rect x="6.5" y="48.5" width="2.4" height="2.4" /><rect x="71" y="48.5" width="2.4" height="2.4" />
        <rect x="22.8" y="52.6" width="2" height="2" /><rect x="55" y="52.6" width="2" height="2" />
      </g>

      {/* isometric chip body (layered rhombus + side depth) */}
      <path d="M40 50 L16 40 L16 36 L40 46 L64 36 L64 40 Z" fill="#160a38" stroke="#7c3aed" strokeOpacity="0.55" strokeWidth="0.5" />
      <path d="M40 46 L16 36 L40 26 L64 36 Z" fill="url(#tqc-top)" stroke="#b06cf6" strokeWidth="0.9" />
      <path d="M40 42 L23 35 L40 28 L57 35 Z" fill="none" stroke="#a855f7" strokeOpacity="0.5" strokeWidth="0.6" />
      {/* chip edge pins */}
      <g stroke="#c084fc" strokeWidth="0.6" strokeOpacity="0.7">
        <path d="M22 40.5l-3 -1.2M28 43l-3 -1.2M46 43l3 -1.2M52 40.5l3 -1.2" />
      </g>

      {/* glowing atom symbol on the chip top face */}
      <g className="rpt-ico__atom" filter="url(#tqc-glow-f)">
        <ellipse cx={CX} cy="35" rx="12" ry="4.6" stroke="#c084fc" strokeWidth="0.9" fill="none" transform="rotate(24 40 35)" />
        <ellipse cx={CX} cy="35" rx="12" ry="4.6" stroke="#a855f7" strokeWidth="0.9" fill="none" transform="rotate(-24 40 35)" />
      </g>
      <circle className="rpt-ico__core" cx={CX} cy="35" r="6" fill="url(#tqc-core)" />
      <circle cx={CX} cy="35" r="1.8" fill="#fff" />
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
              <div className="rpt-badge__medal"><BadgeMedal type="eye" /></div>
              <span>观察者徽章</span>
            </div>
            <div className="rpt-badge">
              <div className="rpt-badge__medal"><BadgeMedal type="wave" /></div>
              <span>光波探索徽章</span>
            </div>
            <div className="rpt-badge">
              <div className="rpt-badge__medal"><BadgeMedal type="maze" /></div>
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
          <img className="report-book__img" src="/knowledge-book.png" alt="" />
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
                <img className="rpt-ico-img" src="/kc-superposition.png" alt="" />
              </div>
              <span>量子叠加</span>
              <small>多个状态同时存在</small>
            </div>
            <div className="rpt-thumb">
              <div className="rpt-thumb__visual">
                <img className="rpt-ico-img" src="/kc-waveparticle.png" alt="" />
              </div>
              <span>波粒二象性</span>
              <small>光既是波也是粒子</small>
            </div>
            <div className="rpt-thumb">
              <div className="rpt-thumb__visual">
                <img className="rpt-ico-img" src="/kc-compute.png" alt="" />
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
            <div className="report-share__planet" aria-hidden="true"><img className="report-share__planet-img" src="/share-galaxy.png" alt="" /></div>
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
