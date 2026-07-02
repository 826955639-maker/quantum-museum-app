import { useRef } from "react";
import HeroAtomCanvas from "../components/HeroAtomCanvas";
import ExplorationRecordSection from "../components/ExplorationRecordSection";
import BadgeMedal from "../components/BadgeMedal";

/* ── Inline SVG assets ── */

/* Open glowing quantum book — recreated to match the reference art (Image D):
   an upright open book with a central crease, two rising pages (text lines +
   star on the left, atom symbol on the right), page-stack thickness, and two
   luminous orbit trails carrying energy particles + scattered stars. */
function BookSVG() {
  return (
    <svg viewBox="0 0 140 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="bkAura" cx="50%" cy="48%" r="54%">
          <stop offset="0%" stopColor="#7c6bff" stopOpacity="0.5" />
          <stop offset="52%" stopColor="#4c2fbf" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#1a1145" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bkPageL" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9a82ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4b32c8" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="bkPageR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b49dff" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#5238d4" stopOpacity="0.96" />
        </linearGradient>
        <linearGradient id="bkStack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a4ee0" />
          <stop offset="100%" stopColor="#2a1c74" />
        </linearGradient>
        <filter id="bkSoft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
      </defs>

      {/* ambient aura */}
      <ellipse cx="70" cy="64" rx="66" ry="52" fill="url(#bkAura)" />

      {/* orbit trail behind the book */}
      <ellipse cx="70" cy="70" rx="64" ry="20" stroke="#9d84f5" strokeWidth="1.1" strokeOpacity="0.42" fill="none" transform="rotate(-16 70 70)" />

      {/* page-stack thickness (sheets) under the two pages */}
      <path d="M25 82 70 74 115 82 70 92Z" fill="url(#bkStack)" opacity="0.9" />
      <g stroke="#3a2a8e" strokeWidth="0.9" strokeOpacity="0.7">
        <path d="M27 85 70 78 113 85" />
        <path d="M30 88 70 82 110 88" />
      </g>

      {/* left open page (rises to the left, slopes to the central crease) */}
      <path d="M70 44 18 54 25 84 70 76Z" fill="url(#bkPageL)" stroke="#c3b0ff" strokeWidth="1.2" strokeOpacity="0.9" />
      {/* left page text lines (parallel to the top edge) */}
      <g stroke="#d7c9ff" strokeWidth="0.9" strokeOpacity="0.5">
        <path d="M30 57 63 51" />
        <path d="M31 63 63 57" />
        <path d="M33 69 63 63" />
        <path d="M35 75 55 71" />
      </g>

      {/* right open page */}
      <path d="M70 44 122 54 115 84 70 76Z" fill="url(#bkPageR)" stroke="#d0c0ff" strokeWidth="1.2" />
      {/* right page faint lines under the atom */}
      <g stroke="#e2d6ff" strokeWidth="0.85" strokeOpacity="0.4">
        <path d="M77 52 107 57" />
        <path d="M106 78 84 74" />
      </g>

      {/* central crease highlight */}
      <path d="M70 44 70 76" stroke="#efe7ff" strokeWidth="1.5" strokeOpacity="0.9" />

      {/* atom symbol on the right page */}
      <g transform="rotate(-6 95 63)">
        <ellipse cx="95" cy="63" rx="13.5" ry="5.2" stroke="#ece3ff" strokeWidth="1.15" fill="none" strokeOpacity="0.9" />
        <ellipse cx="95" cy="63" rx="13.5" ry="5.2" stroke="#d4c4ff" strokeWidth="1" fill="none" transform="rotate(60 95 63)" strokeOpacity="0.72" />
        <ellipse cx="95" cy="63" rx="13.5" ry="5.2" stroke="#d4c4ff" strokeWidth="1" fill="none" transform="rotate(-60 95 63)" strokeOpacity="0.72" />
        <circle cx="95" cy="63" r="2.6" fill="#fff" filter="url(#bkSoft)" />
        <circle cx="95" cy="63" r="1.6" fill="#fff" />
      </g>

      {/* bright 4-point star on the left page */}
      <path d="M45 60 l1.6 4.4 4.4 1.6-4.4 1.6-1.6 4.4-1.6-4.4-4.4-1.6 4.4-1.6Z" fill="#fff" filter="url(#bkSoft)" opacity="0.95" />
      <path d="M45 60 l1 2.8 2.8 1-2.8 1-1 2.8-1-2.8-2.8-1 2.8-1Z" fill="#fff" />

      {/* orbit trails wrapping in front */}
      <ellipse cx="70" cy="74" rx="60" ry="17" stroke="#cdbdff" strokeWidth="1.5" strokeOpacity="0.85" fill="none" transform="rotate(-16 70 74)" />
      <ellipse cx="70" cy="70" rx="54" ry="24" stroke="#8b74ff" strokeWidth="0.95" strokeOpacity="0.5" fill="none" transform="rotate(13 70 70)" />

      {/* energy particles riding the orbits */}
      <circle cx="12" cy="80" r="2.5" fill="#fff" filter="url(#bkSoft)" />
      <circle cx="128" cy="62" r="2.1" fill="#e8dcff" filter="url(#bkSoft)" />
      <circle cx="100" cy="96" r="1.6" fill="#fff" filter="url(#bkSoft)" />
      <g fill="#d7c9ff">
        <circle cx="34" cy="92" r="1.2" />
        <circle cx="118" cy="86" r="1.1" />
        <circle cx="22" cy="60" r="1" />
      </g>

      {/* scattered field stars + sparkles */}
      <g fill="#d7c9ff">
        <circle cx="30" cy="28" r="1.4" opacity="0.8" />
        <circle cx="114" cy="30" r="1.2" opacity="0.7" />
        <circle cx="126" cy="98" r="1.2" opacity="0.6" />
        <circle cx="20" cy="100" r="1" opacity="0.55" />
        <circle cx="56" cy="22" r="0.9" opacity="0.5" />
      </g>
      <path d="M112 24 l1.3 3.6 3.6 1.3-3.6 1.3-1.3 3.6-1.3-3.6-3.6-1.3 3.6-1.3Z" fill="#fff" opacity="0.9">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M24 42 l1 2.8 2.8 1-2.8 1-1 2.8-1-2.8-2.8-1 2.8-1Z" fill="#c4b5fd" opacity="0.8">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.6s" repeatCount="indefinite" />
      </path>
      <path d="M100 104 l0.9 2.6 2.6 0.9-2.6 0.9-0.9 2.6-0.9-2.6-2.6-0.9 2.6-0.9Z" fill="#fbe7a6" opacity="0.85">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2.2s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function PlanetSVG() {
  const cx = 46;
  const cy = 40;
  return (
    <svg viewBox="0 0 92 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="glxBody" cx="36%" cy="28%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="14%" stopColor="#c3c8ff" />
          <stop offset="42%" stopColor="#5f5ceb" />
          <stop offset="75%" stopColor="#3527ab" />
          <stop offset="100%" stopColor="#1c1166" />
        </radialGradient>
        <radialGradient id="glxHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6b54f0" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#3a1a86" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="glxRing" x1="0" x2="1">
          <stop offset="0%" stopColor="#8f7bff" stopOpacity="0.05" />
          <stop offset="45%" stopColor="#cfc4ff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glxSoft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.1" />
        </filter>
      </defs>

      {/* ambient halo */}
      <ellipse cx={cx} cy={cy} rx="44" ry="30" fill="url(#glxHalo)" />

      {/* back halves of swirl rings (behind the sphere) */}
      <g fill="none">
        <path d="M14 32C22 22 62 18 78 30" stroke="url(#glxRing)" strokeWidth="1.6" opacity="0.8" />
        <path d="M8 44C14 30 70 22 86 36" stroke="#8f7bff" strokeWidth="1" opacity="0.4" />
      </g>

      {/* glossy sphere */}
      <circle cx={cx} cy={cy} r="16" fill="url(#glxBody)" />
      {/* specular highlight */}
      <ellipse cx={cx - 6} cy={cy - 8} rx="5" ry="3.4" fill="#ffffff" opacity="0.75" filter="url(#glxSoft)" transform={`rotate(-28 ${cx - 6} ${cy - 8})`} />
      {/* bottom bounce light */}
      <path d={`M${cx - 11} ${cy + 10}a16 16 0 0 0 22 0`} stroke="#9d8cff" strokeWidth="1.4" opacity="0.5" fill="none" filter="url(#glxSoft)" />

      {/* front swirl rings (crossing in front of the sphere) */}
      <g fill="none">
        <path d="M6 50C24 62 72 56 88 40" stroke="url(#glxRing)" strokeWidth="2" />
        <path d="M12 58C32 68 74 60 86 48" stroke="#a793ff" strokeWidth="1.1" opacity="0.55" />
        <path d="M4 40C10 52 40 62 66 58" stroke="#8f7bff" strokeWidth="0.9" opacity="0.4" />
      </g>

      {/* ring rider particles */}
      <circle cx="20" cy="55.5" r="1.9" fill="#ffffff" filter="url(#glxSoft)" />
      <circle cx="74" cy="52.5" r="1.6" fill="#e2d9ff" filter="url(#glxSoft)" />
      <circle cx="84" cy="37" r="1.3" fill="#cfc4ff" />
      <circle cx="12" cy="34" r="1.2" fill="#cfc4ff" />

      {/* field stars + sparkles */}
      <g fill="#e2d7ff">
        <circle cx="16" cy="14" r="1" opacity="0.7" />
        <circle cx="82" cy="16" r="1.2" opacity="0.7" />
        <circle cx="88" cy="66" r="0.9" opacity="0.55" />
        <circle cx="10" cy="68" r="1" opacity="0.55" />
      </g>
      <path d="M78 22l1 2.8 2.8 1-2.8 1-1 2.8-1-2.8-2.8-1 2.8-1Z" fill="#fff" opacity="0.9">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.3s" repeatCount="indefinite" />
      </path>
      <path d="M14 48l0.8 2.4 2.4 0.8-2.4 0.8-0.8 2.4-0.8-2.4-2.4-0.8 2.4-0.8Z" fill="#c4b5fd" opacity="0.8">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.9s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

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

function ThumbSuperposition() {
  return (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="ts1-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#c9c2ff" />
          <stop offset="65%" stopColor="#6c55e8" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#3a24aa" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ts1-neb" cx="45%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#5b45d6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#150d40" stopOpacity="0" />
        </radialGradient>
        <filter id="ts1-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>
      {/* nebula wash */}
      <ellipse cx="37" cy="30" rx="36" ry="24" fill="url(#ts1-neb)" />
      {/* concentric tilted orbit swirls */}
      <g fill="none" stroke="#a793ff" transform="rotate(-14 37 30)">
        <ellipse cx="37" cy="30" rx="13" ry="5.5" strokeWidth="0.9" opacity="0.9" />
        <ellipse cx="37" cy="30" rx="21" ry="9.5" strokeWidth="0.8" opacity="0.65" />
        <ellipse cx="37" cy="30" rx="29" ry="13.5" strokeWidth="0.7" opacity="0.45" />
        <ellipse cx="37" cy="30" rx="36" ry="17.5" strokeWidth="0.6" opacity="0.28" />
      </g>
      {/* bright core with cross flare */}
      <circle cx="37" cy="30" r="9" fill="url(#ts1-core)" />
      <path d="M37 22v16M29 30h16" stroke="#ffffff" strokeWidth="0.9" opacity="0.8" filter="url(#ts1-soft)" />
      {/* orbit rider stars */}
      <g fill="#ffffff">
        <circle cx="52" cy="24" r="1.6" filter="url(#ts1-soft)" />
        <circle cx="20" cy="37" r="1.3" filter="url(#ts1-soft)" />
        <circle cx="61" cy="35" r="1.1" />
        <circle cx="14" cy="24" r="1" />
      </g>
      {/* 4-point sparkles */}
      <path d="M58 14l0.9 2.5 2.5 0.9-2.5 0.9-0.9 2.5-0.9-2.5-2.5-0.9 2.5-0.9Z" fill="#e8ddff" opacity="0.9" />
      <path d="M16 48l0.7 2 2 0.7-2 0.7-0.7 2-0.7-2-2-0.7 2-0.7Z" fill="#c4b5fd" opacity="0.8" />
      <g fill="#cabaff" opacity="0.7">
        <circle cx="70" cy="46" r="0.9" />
        <circle cx="8" cy="12" r="0.8" />
        <circle cx="46" cy="50" r="0.8" />
      </g>
    </svg>
  );
}

function ThumbWaveParticle() {
  // bright star flare: cross spikes + core
  const flare = (x: number, y: number, s: number, o = 1) => (
    <g opacity={o}>
      <path d={`M${x} ${y - s}L${x} ${y + s}M${x - s} ${y}L${x + s} ${y}`} stroke="#ffffff" strokeWidth={s * 0.16} strokeLinecap="round" filter="url(#twp-soft)" />
      <circle cx={x} cy={y} r={s * 0.28} fill="#ffffff" filter="url(#twp-soft)" />
      <circle cx={x} cy={y} r={s * 0.75} fill="url(#twp-halo)" />
    </g>
  );
  return (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="twp-trail" x1="0" x2="1">
          <stop offset="0%" stopColor="#8f7bff" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#cfc4ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8f7bff" stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id="twp-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b7a2ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#5b3fd0" stopOpacity="0" />
        </radialGradient>
        <filter id="twp-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="0.7" />
        </filter>
      </defs>
      {/* crossing light trails (wave paths) */}
      <g fill="none">
        <path d="M2 40C20 12 52 14 78 34" stroke="url(#twp-trail)" strokeWidth="1.4" />
        <path d="M4 18C28 44 58 48 78 24" stroke="url(#twp-trail)" strokeWidth="1.2" />
        <path d="M2 30C26 30 44 50 78 44" stroke="#8f7bff" strokeWidth="0.9" opacity="0.5" />
        <path d="M8 52C30 36 62 12 76 10" stroke="#a793ff" strokeWidth="0.8" opacity="0.4" />
      </g>
      {/* star flares at the intersections (particle detections) */}
      {flare(30, 25, 9)}
      {flare(54, 33, 7, 0.95)}
      {flare(42, 44, 5.4, 0.85)}
      {flare(66, 17, 4.4, 0.8)}
      {/* faint dust */}
      <g fill="#cabaff" opacity="0.75">
        <circle cx="12" cy="12" r="0.9" />
        <circle cx="70" cy="50" r="0.9" />
        <circle cx="18" cy="46" r="0.8" />
        <circle cx="60" cy="8" r="0.7" />
      </g>
    </svg>
  );
}

function ThumbQuantumCompute() {
  return (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="tqc-glow" cx="50%" cy="62%" r="55%">
          <stop offset="0%" stopColor="#4f6df0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1d1a66" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tqc-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef4ff" />
          <stop offset="100%" stopColor="#9fbaff" />
        </linearGradient>
        <linearGradient id="tqc-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7f9bff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3346c8" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="tqc-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a72ee" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#242a8e" stopOpacity="0.28" />
        </linearGradient>
        <filter id="tqc-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="0.7" />
        </filter>
      </defs>
      <ellipse cx="40" cy="44" rx="34" ry="14" fill="url(#tqc-glow)" />
      {/* iso platform */}
      <path d="M40 56 12 46l28-10 28 10Z" fill="#3346c8" fillOpacity="0.18" stroke="#7f9bff" strokeOpacity="0.5" strokeWidth="0.6" />
      <path d="M40 53 19 45.5 40 38l21 7.5Z" fill="none" stroke="#9fbaff" strokeOpacity="0.4" strokeWidth="0.5" />
      {/* glass blocks (translucent, bright edges) */}
      {[
        { x: 25, top: 33, base: 45 },
        { x: 40, top: 18, base: 42 },
        { x: 55, top: 26, base: 45 },
      ].map((b, i) => {
        const w = 8.5;
        const d = 3.8;
        return (
          <g key={i}>
            <path d={`M${b.x - w} ${b.top + d} L${b.x} ${b.top} L${b.x} ${b.base} L${b.x - w} ${b.base + d} Z`} fill="url(#tqc-left)" />
            <path d={`M${b.x} ${b.top} L${b.x + w} ${b.top + d} L${b.x + w} ${b.base + d} L${b.x} ${b.base} Z`} fill="url(#tqc-right)" />
            <path d={`M${b.x - w} ${b.top + d} L${b.x} ${b.top} L${b.x + w} ${b.top + d} L${b.x} ${b.top + 2 * d} Z`} fill="url(#tqc-top)" fillOpacity="0.9" />
            {/* luminous edges */}
            <path
              d={`M${b.x - w} ${b.top + d} L${b.x} ${b.top} L${b.x + w} ${b.top + d} M${b.x - w} ${b.top + d} V${b.base + d} M${b.x + w} ${b.top + d} V${b.base + d} M${b.x} ${b.top + 2 * d} V${b.base}`}
              stroke="#cfe0ff"
              strokeWidth="0.55"
              strokeOpacity="0.85"
              fill="none"
            />
          </g>
        );
      })}
      {/* data sparks rising */}
      <circle cx="33" cy="14" r="1" fill="#cfe0ff" filter="url(#tqc-soft)" />
      <circle cx="48" cy="10" r="1.2" fill="#ffffff" filter="url(#tqc-soft)" />
      <circle cx="62" cy="18" r="0.9" fill="#9fbaff" />
      <path d="M18 20l0.8 2.2 2.2 0.8-2.2 0.8-0.8 2.2-0.8-2.2-2.2-0.8 2.2-0.8Z" fill="#e8f0ff" opacity="0.85" />
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
