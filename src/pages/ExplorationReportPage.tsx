function BookSVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="bookGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="50%" stopColor="#6d28d9" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="bookPage" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0d0d2b" />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="60" rx="55" ry="55" fill="url(#bookGlow)" />
      <rect x="28" y="30" width="44" height="58" rx="3" fill="url(#bookCover)" stroke="#7c3aed" strokeWidth="1" />
      <rect x="48" y="30" width="24" height="58" rx="2" fill="url(#bookPage)" stroke="#4c1d95" strokeWidth="0.5" />
      <line x1="48" y1="30" x2="48" y2="88" stroke="#4c1d95" strokeWidth="1.5" />
      <line x1="54" y1="38" x2="68" y2="38" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="54" y1="44" x2="66" y2="44" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="54" y1="50" x2="70" y2="50" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="54" y1="56" x2="65" y2="56" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="60" cy="68" r="5" stroke="#a78bfa" strokeWidth="1" fill="none" />
      <circle cx="60" cy="68" r="2" fill="#c4b5fd" opacity="0.8" />
      <circle cx="35" cy="45" r="1.5" fill="#c4b5fd" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="75" r="1" fill="#a78bfa" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="88" cy="40" r="2" fill="#f59e0b" opacity="0.7">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="80" cy="80" r="1.5" fill="#c4b5fd" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function PlanetSVG() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="planetBody" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="40" rx="38" ry="12" stroke="#6d28d9" strokeWidth="1.5" fill="none" opacity="0.4" transform="rotate(-20 40 40)" />
      <circle cx="40" cy="40" r="18" fill="url(#planetBody)" />
      <ellipse cx="40" cy="40" rx="30" ry="10" stroke="#a78bfa" strokeWidth="2" fill="none" opacity="0.7" transform="rotate(-20 40 40)" />
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12c1.5-3 3-4.5 4.5-4.5s3 3 4.5 3 3-4.5 4.5-4.5S18 9 19.5 9 21 12 22 12" />
      <path d="M2 17c1.5-2 3-3 4.5-3s3 2 4.5 2 3-3 4.5-3 2.25 1.5 3.5 1.5" strokeOpacity="0.5" />
    </svg>
  );
}

function MazeSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h6M3 15h4M9 3v6M15 3v4M21 9h-4M21 15h-6M9 21v-6M15 21v-4M12 9v6M9 12h6" />
    </svg>
  );
}

function LightbulbSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.2-1.2 4-3 5.2V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.8C7.2 13 6 11.2 6 9a6 6 0 0 1 6-6Z" />
    </svg>
  );
}

function EyeSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CrownSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 18h20M4 18l2-9 5 4 3-7 3 7 5-4 2 9" />
      <circle cx="12" cy="5.5" r="1" fill="currentColor" stroke="none" />
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

export default function ExplorationReportPage() {
  return (
    <div className="report-layout">

      {/* ── Hero Banner ── */}
      <section className="report-hero report-card">
        <div className="report-galaxy" aria-hidden="true">
          <div className="galaxy-stars" />
          <div className="galaxy-ring rg1" />
          <div className="galaxy-ring rg2" />
          <div className="galaxy-ring rg3" />
          <div className="galaxy-ring rg4" />
          <div className="galaxy-core" />
          <div className="galaxy-flare" />
        </div>
        <div className="report-hero__copy">
          <div className="report-hero__eyebrow">
            <span className="report-hero__num">08</span>
            <span>我的探索档案</span>
          </div>
          <h1 className="report-hero__title">
            我的<span className="report-hero__accent">量子探索</span>报告
            <span className="report-hero__sparkle" aria-hidden="true">✦</span>
          </h1>
          <p className="report-hero__sub">感谢你的好奇与探索，量子世界因你而更精彩！</p>
        </div>
      </section>

      {/* ── Right column: 3 stacked cards ── */}
      <div className="report-right">

        {/* Route card */}
        <div className="report-card report-right__card">
          <h2 className="rpt-card-head">
            <span aria-hidden="true">📍</span>本次探索路线
          </h2>
          <div className="rpt-route-nodes">
            <div className="rpt-node">
              <div className="rpt-node__icon">
                <LightbulbSVG />
              </div>
              <span>创见区</span>
            </div>
            <div className="rpt-connector" aria-hidden="true" />
            <div className="rpt-node">
              <div className="rpt-node__icon">
                <EyeSVG />
              </div>
              <span>感知区</span>
            </div>
            <div className="rpt-connector" aria-hidden="true" />
            <div className="rpt-node rpt-node--active">
              <div className="rpt-node__icon">
                <CrownSVG />
              </div>
              <span>引领区</span>
            </div>
          </div>
        </div>

        {/* Completed interactions card */}
        <div className="report-card report-right__card">
          <h2 className="rpt-card-head">
            <span aria-hidden="true">☑</span>已完成互动
          </h2>
          <div className="rpt-icon-row">
            <div className="rpt-round-icon">
              <div className="rpt-round-icon__circle">
                <CatSVG />
              </div>
              <span>薛定谔的猫</span>
            </div>
            <div className="rpt-round-icon">
              <div className="rpt-round-icon__circle">
                <WaveSVG />
              </div>
              <span>跳动的光波</span>
            </div>
            <div className="rpt-round-icon">
              <div className="rpt-round-icon__circle">
                <MazeSVG />
              </div>
              <span>量子迷宫</span>
            </div>
          </div>
        </div>

        {/* Badges card */}
        <div className="report-card report-right__card">
          <h2 className="rpt-card-head">
            <span aria-hidden="true">🏆</span>获得徽章
          </h2>
          <div className="rpt-badges-row">
            <div className="rpt-badge">
              <div className="rpt-badge__hex">
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
          <span aria-hidden="true">📖</span>我的知识收获
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
            <span aria-hidden="true">⭐</span>收藏知识卡
          </h2>
          <div className="rpt-thumbs">
            <div className="rpt-thumb rpt-thumb--1">
              <div className="rpt-thumb__visual" aria-hidden="true" />
              <span>量子叠加</span>
              <small>多个状态同时存在</small>
            </div>
            <div className="rpt-thumb rpt-thumb--2">
              <div className="rpt-thumb__visual" aria-hidden="true" />
              <span>波粒二象性</span>
              <small>光既是波也是粒子</small>
            </div>
            <div className="rpt-thumb rpt-thumb--3">
              <div className="rpt-thumb__visual" aria-hidden="true" />
              <span>量子计算</span>
              <small>处理更多可能性</small>
            </div>
            <div className="rpt-thumbs__arrow" aria-hidden="true">→</div>
          </div>
        </div>

        {/* Share card */}
        <div className="report-card report-share">
          <div className="report-share__header">
            <span className="report-share__arrow-icon" aria-hidden="true">↗</span>
            <span className="report-share__label">分享卡</span>
          </div>
          <div className="report-share__body">
            <p>我在安徽省科技馆<br />发现了量子世界</p>
            <div className="report-share__planet" aria-hidden="true">
              <PlanetSVG />
            </div>
          </div>
        </div>

        {/* QR code */}
        <div className="report-card report-qr">
          <div className="report-qr__code">
            <QRCodeSVG />
          </div>
          <span className="report-qr__label">扫码带走报告</span>
        </div>

        {/* Return iPad */}
        <div className="report-card report-return">
          <h2 className="report-return__title">归还 iPad 提示</h2>
          <div className="report-return__icon">
            <ReturnArrowSVG />
          </div>
          <p className="report-return__text">探索结束后<br />请至服务台归还 iPad</p>
        </div>
      </div>

      {/* ── Toast bar ── */}
      <div className="report-toast">
        <span className="report-toast__bulb" aria-hidden="true">💡</span>
        <span>你的每一次探索，都是科学未来的一小步。期待下次在量子世界再相遇！</span>
        <span className="report-toast__star" aria-hidden="true">✦</span>
      </div>

    </div>
  );
}
