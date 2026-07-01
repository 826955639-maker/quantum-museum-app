import { useState } from "react";
import Icon from "../components/Icon";

type Floor = "1F" | "2F" | "3F";
type ViewMode = "3D" | "2D";
type ZoneId = "creation" | "perception" | "future";

const routeStops: Array<{ id: ZoneId; index: string; title: string; desc: string }> = [
  { id: "creation", index: "1", title: "创见区", desc: "灵感诞生 · 认知起点" },
  { id: "perception", index: "2", title: "感知区", desc: "现象感知 · 深度体验" },
  { id: "future", index: "3", title: "引领区", desc: "未来探索 · 智慧引领" },
];

const facilities: Array<{ id: string; label: string; glyph: JSX.Element }> = [
  {
    id: "restroom",
    label: "卫生间",
    glyph: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="7.5" cy="4.5" r="1.8" />
        <path d="M7.5 7.5c-1.6 0-2.4 1-2.6 2.6L4.2 15h1.5l.4 5h2.8l.4-5h1.5l-.7-4.9c-.2-1.6-1-2.6-2.6-2.6Z" />
        <circle cx="16.5" cy="4.5" r="1.8" />
        <path d="M14.4 15 16 9.2 17.6 15M16.5 7.5c-1.4 0-2.3.9-2.7 2.3M16.5 12v8" />
      </svg>
    ),
  },
  {
    id: "lounge",
    label: "休息区",
    glyph: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 11V8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5V11" />
        <path d="M3 11.5a2 2 0 0 1 2 2V16h14v-2.5a2 2 0 0 1 2-2V16a2 2 0 0 1-2 2v2M5 20v-2" />
      </svg>
    ),
  },
  {
    id: "exit",
    label: "出口",
    glyph: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4" />
        <path d="M4 12h10m-3-3 3 3-3 3" />
      </svg>
    ),
  },
  {
    id: "info",
    label: "服务台",
    glyph: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 11v5" />
        <circle cx="12" cy="7.8" r=".9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

/* ── Isometric 3D venue map ── */
function IsometricMap({ activeZone }: { activeZone: ZoneId | null }) {
  return (
    <svg
      className="venue-map"
      viewBox="0 0 960 620"
      preserveAspectRatio="xMidYMid meet"
      aria-label="量子探微馆 1F 三维场馆地图"
    >
      <defs>
        <radialGradient id="vm-portal" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".95" />
          <stop offset=".14" stopColor="#e8dcff" stopOpacity=".9" />
          <stop offset=".38" stopColor="#a878ff" stopOpacity=".55" />
          <stop offset=".7" stopColor="#6a3fd8" stopOpacity=".2" />
          <stop offset="1" stopColor="#3a1f8c" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="vm-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#d7c5ff" stopOpacity=".9" />
          <stop offset=".55" stopColor="#8b5cf6" stopOpacity=".35" />
          <stop offset="1" stopColor="#6a3fd8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="vm-plate-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#221a45" />
          <stop offset=".5" stopColor="#171232" />
          <stop offset="1" stopColor="#100c26" />
        </linearGradient>
        <linearGradient id="vm-plate-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#15102e" />
          <stop offset="1" stopColor="#08061a" />
        </linearGradient>
        <linearGradient id="vm-pad-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c2258" />
          <stop offset="1" stopColor="#1a1440" />
        </linearGradient>
        <linearGradient id="vm-ring" x1="0" x2="1">
          <stop offset="0" stopColor="#5a38b3" stopOpacity=".1" />
          <stop offset=".5" stopColor="#c9b7ff" stopOpacity=".95" />
          <stop offset="1" stopColor="#7c4fe6" stopOpacity=".14" />
        </linearGradient>
        <linearGradient id="vm-pin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c4b5fd" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="vm-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id="vm-soft-sm" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* ambient stars */}
      <g className="venue-map__stars" fill="#c9b7ff">
        <circle cx="120" cy="80" r="2" />
        <circle cx="250" cy="46" r="1.3" />
        <circle cx="700" cy="60" r="1.7" />
        <circle cx="850" cy="110" r="2.2" />
        <circle cx="880" cy="300" r="1.4" />
        <circle cx="90" cy="330" r="1.6" />
        <circle cx="820" cy="470" r="1.5" />
        <circle cx="160" cy="500" r="1.2" />
      </g>
      <g fill="#fff">
        <path d="m812 138 1.8 4.4 4.4 1.8-4.4 1.8-1.8 4.4-1.8-4.4-4.4-1.8 4.4-1.8Z" opacity=".8" />
        <path d="m138 156 1.4 3.4 3.4 1.4-3.4 1.4-1.4 3.4-1.4-3.4-3.4-1.4 3.4-1.4Z" opacity=".6" />
      </g>

      {/* main isometric plate (extruded) */}
      <path
        d="M480 500 A360 150 0 0 0 840 350 L840 396 A360 150 0 0 1 480 546 A360 150 0 0 1 120 396 L120 350 A360 150 0 0 0 480 500 Z"
        fill="url(#vm-plate-side)"
        opacity=".92"
      />
      <ellipse cx="480" cy="350" rx="360" ry="150" fill="url(#vm-plate-top)" stroke="rgba(139,92,246,.4)" strokeWidth="1.5" />
      {/* concentric floor guides */}
      <g fill="none" stroke="#4a3a86" strokeOpacity=".38">
        <ellipse cx="480" cy="350" rx="300" ry="124" strokeWidth=".8" />
        <ellipse cx="480" cy="350" rx="220" ry="91" strokeWidth=".7" />
        <ellipse cx="480" cy="350" rx="140" ry="58" strokeWidth=".6" />
      </g>

      {/* central portal glow */}
      <ellipse cx="495" cy="322" rx="170" ry="72" fill="url(#vm-portal)" filter="url(#vm-soft)" opacity=".8" />
      <g className="venue-map__portal" fill="none" stroke="url(#vm-ring)">
        <ellipse cx="495" cy="322" rx="118" ry="48" strokeWidth="1.6" transform="rotate(-8 495 322)" />
        <ellipse cx="495" cy="322" rx="92" ry="37" strokeWidth="1.2" transform="rotate(10 495 322)" opacity=".8" />
        <ellipse cx="495" cy="322" rx="64" ry="26" strokeWidth="1" transform="rotate(-16 495 322)" opacity=".6" />
      </g>
      <ellipse cx="495" cy="322" rx="30" ry="13" fill="url(#vm-portal)" />
      <circle cx="495" cy="318" r="6" fill="#fff" filter="url(#vm-soft-sm)" />

      {/* central 量子探微馆 pin marker */}
      <g className="venue-map__center-pin">
        <ellipse cx="495" cy="322" rx="26" ry="10" fill="#8b5cf6" opacity=".3" filter="url(#vm-soft-sm)" />
        <path
          d="M495 232c-19 0-34 15-34 34 0 24 34 58 34 58s34-34 34-58c0-19-15-34-34-34Z"
          fill="url(#vm-pin)"
          stroke="#e8dcff"
          strokeWidth="1.5"
        />
        <circle cx="495" cy="266" r="12" fill="#0d0a24" />
        <circle cx="495" cy="266" r="4.2" fill="#e8dcff" />
        {/* pill label */}
        <g transform="translate(495 190)">
          <rect x="-62" y="-19" width="124" height="38" rx="19" fill="#1a1440" stroke="#8b5cf6" strokeWidth="1.4" />
          <text x="0" y="6" textAnchor="middle" fill="#f4f0ff" fontSize="20" fontWeight="600">
            量子探微馆
          </text>
        </g>
      </g>

      {/* dashed recommended route */}
      <path
        className="venue-map__route"
        d="M250 372 C320 430 360 452 430 456 C520 460 580 420 690 372"
        fill="none"
        stroke="#a877ff"
        strokeWidth="2.6"
        strokeDasharray="9 9"
        strokeLinecap="round"
      />
      {/* route arrows */}
      <g fill="#c9b7ff">
        <path d="m372 452-11-4 3 6-4 6 12-4Z" transform="rotate(6 366 456)" />
        <path d="m560 430 11-5-3 6 4 6-12-4Z" transform="rotate(-18 566 434)" />
      </g>

      {/* zone nodes */}
      {[
        { id: "creation" as ZoneId, cx: 250, cy: 372, label: "创见区", lx: 300, ly: 344 },
        { id: "perception" as ZoneId, cx: 430, cy: 470, label: "感知区", lx: 486, ly: 470 },
        { id: "future" as ZoneId, cx: 690, cy: 372, label: "引领区", lx: 746, ly: 344 },
      ].map((zone) => (
        <g key={zone.id} className={`venue-map__node${activeZone === zone.id ? " is-active" : ""}`}>
          {/* floor pad */}
          <ellipse cx={zone.cx} cy={zone.cy} rx="58" ry="24" fill="url(#vm-pad-top)" stroke="rgba(139,92,246,.45)" strokeWidth="1.2" />
          <ellipse className="venue-map__node-ring" cx={zone.cx} cy={zone.cy} rx="46" ry="19" fill="none" stroke="#9d71ff" strokeWidth="2" />
          <ellipse cx={zone.cx} cy={zone.cy} rx="70" ry="30" fill="url(#vm-node-glow)" opacity=".6" filter="url(#vm-soft-sm)" />
          {/* icon disc */}
          <circle cx={zone.cx} cy={zone.cy} r="15" fill="#0d0a24" stroke="#c4b5fd" strokeWidth="1.6" />
          <g stroke="#e8dcff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" transform={`translate(${zone.cx - 8} ${zone.cy - 8}) scale(.68)`}>
            {zone.id === "creation" && (
              <>
                <path d="M12 3a6 6 0 0 0-4 10.5c.8.7 1.2 1.5 1.3 2.5h5.4c.1-1 .5-1.8 1.3-2.5A6 6 0 0 0 12 3Z" />
                <path d="M9.5 19h5M10 21.5h4" />
              </>
            )}
            {zone.id === "perception" && (
              <>
                <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
                <circle cx="12" cy="12" r="3" />
              </>
            )}
            {zone.id === "future" && (
              <>
                <circle cx="12" cy="12" r="9" />
                <path d="m8.5 15.5 2-5 5-2-2 5-5 2Z" fill="#e8dcff" stroke="none" />
              </>
            )}
          </g>
          {/* label pill */}
          <g transform={`translate(${zone.lx} ${zone.ly})`}>
            <rect x="-38" y="-16" width="76" height="32" rx="16" fill="#141032" stroke="rgba(139,92,246,.55)" strokeWidth="1.2" />
            <text x="0" y="5" textAnchor="middle" fill="#e6deff" fontSize="17" fontWeight="500">
              {zone.label}
            </text>
          </g>
        </g>
      ))}
    </svg>
  );
}

export default function MapGuidePage() {
  const [floor, setFloor] = useState<Floor>("1F");
  const [view, setView] = useState<ViewMode>("3D");
  const [activeZone, setActiveZone] = useState<ZoneId | null>(null);

  return (
    <section className="map-layout" aria-labelledby="map-title">
      {/* Central 3D map card */}
      <article className="map-stage">
        <header className="map-stage__head">
          <div className="map-stage__titles">
            <p className="map-stage__breadcrumb">安徽省科技馆 · 量子探微馆</p>
            <h1 id="map-title">3D 场馆地图</h1>
            <p className="map-stage__sub">沉浸探索 · 智慧导览 · 精准指引</p>
          </div>
          <div className="floor-switch" role="group" aria-label="楼层切换">
            {(["1F", "2F", "3F"] as Floor[]).map((f) => (
              <button
                key={f}
                type="button"
                className={f === floor ? "is-active" : ""}
                aria-pressed={f === floor}
                onClick={() => setFloor(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </header>

        <div className={`map-stage__figure map-stage__figure--${view.toLowerCase()}`} key={floor}>
          <IsometricMap activeZone={activeZone} />

          <div className="map-view-toggle" role="group" aria-label="视图模式">
            {(["3D", "2D"] as ViewMode[]).map((v) => (
              <button
                key={v}
                type="button"
                className={v === view ? "is-active" : ""}
                aria-pressed={v === view}
                onClick={() => setView(v)}
              >
                {v}
              </button>
            ))}
          </div>
          <button className="map-locate-btn" type="button" aria-label="居中定位" onClick={() => console.log("居中定位")}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </article>

      {/* Right panel */}
      <aside className="map-side" aria-label="推荐路线与服务设施">
        <section className="map-route-card">
          <h2>推荐路线</h2>
          <ol className="route-timeline">
            {routeStops.map((stop) => (
              <li
                key={stop.id}
                className={activeZone === stop.id ? "is-active" : ""}
                onMouseEnter={() => setActiveZone(stop.id)}
                onMouseLeave={() => setActiveZone(null)}
              >
                <span className="route-timeline__badge">{stop.index}</span>
                <span className="route-timeline__copy">
                  <strong>{stop.title}</strong>
                  <small>{stop.desc}</small>
                </span>
              </li>
            ))}
          </ol>
          <div className="route-timeline__footer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
              <path d="M12 9v4l2.5 2M9 3h6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <span>预计时长：约 45 分钟</span>
          </div>
        </section>

        <section className="map-facility-card">
          <h2>服务设施</h2>
          <ul className="facility-list">
            {facilities.map((item) => (
              <li key={item.id}>
                <button type="button" onClick={() => console.log(item.label)}>
                  <span className="facility-list__icon">{item.glyph}</span>
                  <span className="facility-list__label">{item.label}</span>
                  <Icon name="chevron-right" className="facility-list__chevron" />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </aside>

      {/* Bottom location bar */}
      <div className="map-locbar">
        <span className="map-locbar__pin" aria-hidden="true">
          <Icon name="location" />
        </span>
        <div className="map-locbar__copy">
          <p className="map-locbar__where">
            您的位置：<strong>量子探微馆 中央序厅</strong>
          </p>
          <p className="map-locbar__meta">
            定位精度：高
            <span className="map-locbar__signal" aria-hidden="true">
              <i /><i /><i />
            </span>
          </p>
        </div>
        <button className="map-relocate" type="button" onClick={() => console.log("重新定位")}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          重新定位
        </button>
      </div>

      {/* CTA */}
      <button className="map-cta" type="button" onClick={() => console.log("开启导航")}>
        <span className="map-cta__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M3 11 21 3l-8 18-2.5-7.5L3 11Z" fill="currentColor" stroke="none" />
          </svg>
        </span>
        <span className="map-cta__copy">
          <strong>开启导航</strong>
          <small>跟随推荐路线游览</small>
        </span>
        <span className="map-cta__arrow" aria-hidden="true">
          <Icon name="arrow-right" />
        </span>
      </button>
    </section>
  );
}
