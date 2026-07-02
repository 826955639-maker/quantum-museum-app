import { useEffect, useState, type ReactNode } from "react";
import Icon from "../components/Icon";

/* ── Experience state types ── */
type GuideMode = "儿童版" | "标准版" | "深度版";
type LanguageMode = "中文" | "English";
type FontScale = "小" | "中" | "大";

/* Icon set — reuses the existing settings glyph language, adds a few module heads */
type SettingsGlyphName =
  | "tune"
  | "display"
  | "guide"
  | "device"
  | "audio"
  | "caption"
  | "clear"
  | "shield"
  | "replay"
  | "logout";

function SettingsGlyph({ name }: { name: SettingsGlyphName }) {
  if (name === "caption") {
    return <span className="settings-glyph settings-glyph--caption">CC</span>;
  }

  const glyphs: Record<Exclude<SettingsGlyphName, "caption">, ReactNode> = {
    tune: (
      <>
        <path d="M5 6h14M5 12h14M5 18h14" />
        <circle cx="9" cy="6" r="2" />
        <circle cx="15" cy="12" r="2" />
        <circle cx="8" cy="18" r="2" />
      </>
    ),
    display: (
      <>
        <rect x="3" y="4.5" width="18" height="12" rx="1.6" />
        <path d="M8.5 20h7M12 16.5V20" />
        <circle cx="12" cy="10.5" r="2.4" />
        <path d="M12 5.6v1.4M12 14v1.4M6.8 10.5h1.4M15.8 10.5h1.4" />
      </>
    ),
    guide: (
      <>
        <path d="M4 5.5h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9l-4 3.4V15.5H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z" />
        <path d="M7 9.2h10M7 12h6" />
      </>
    ),
    device: (
      <>
        <rect x="9" y="4.2" width="8.5" height="6.8" rx="1.3" />
        <path d="M11 14.8h4.8l2.3-2.2c1.3-1.2 2.5.5 1.3 1.9l-3.1 3.7H9.1L6 20.2H3.6v-6h2.2l2.2 1.5" />
        <path d="M11 7.6h4.5" />
      </>
    ),
    audio: <path d="M5 15V9M9 19V5M13 21V3M17 18V6M21 15V9" />,
    clear: (
      <>
        <path d="m15.8 3.5 4.7 4.7-8 8-4.7-4.7Z" />
        <path d="M10 14.2 5.2 19M4 20h9.5M18.2 6.5l-2.7-2.7" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3.5 19 6.2v5.1c0 4.6-2.7 7.7-7 9.2-4.3-1.5-7-4.6-7-9.2V6.2Z" />
        <path d="m9 12 2 2.1 4.2-4.6" />
      </>
    ),
    replay: (
      <>
        <path d="M4 12a8 8 0 1 1 2.5 5.8" />
        <path d="M4 6v4h4" />
        <path d="m10.5 9.5 4 2.5-4 2.5Z" />
      </>
    ),
    logout: (
      <>
        <path d="M14 4.5H6.5A1.5 1.5 0 0 0 5 6v12a1.5 1.5 0 0 0 1.5 1.5H14" />
        <path d="M17 8.5 20.5 12 17 15.5M20 12H10" />
      </>
    ),
  };

  return (
    <svg className="settings-glyph" viewBox="0 0 24 24" aria-hidden="true">
      {glyphs[name]}
    </svg>
  );
}

/* Compact pill group — reuses the existing .settings-pill visual language */
function PillGroup<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: T[];
  value: T;
  onChange: (value: T) => void;
  ariaLabel: string;
}) {
  return (
    <div className="module-seg" role="group" aria-label={ariaLabel}>
      {options.map((option) => (
        <button
          className={`settings-pill${option === value ? " is-active" : ""}`}
          key={option}
          type="button"
          aria-pressed={option === value}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

/* On/off switch */
function Toggle({
  on,
  onChange,
  label,
}: {
  on: boolean;
  onChange: (on: boolean) => void;
  label: string;
}) {
  return (
    <button
      className={`settings-toggle${on ? " is-on" : ""}`}
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={() => onChange(!on)}
    >
      <span className="settings-toggle__track" aria-hidden="true">
        <span className="settings-toggle__knob" />
      </span>
      <span className="settings-toggle__state" aria-hidden="true">
        {on ? "开" : "关"}
      </span>
    </button>
  );
}

/* One module card (header + body) */
function SettingModule({
  icon,
  title,
  description,
  children,
}: {
  icon: SettingsGlyphName;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="setting-module">
      <header className="setting-module__head">
        <span className="setting-module__icon" aria-hidden="true">
          <SettingsGlyph name={icon} />
        </span>
        <span className="setting-module__text">
          <strong>{title}</strong>
          <small>{description}</small>
        </span>
      </header>
      <div className="setting-module__body">{children}</div>
    </section>
  );
}

/* ── Session helpers (public-kiosk oriented) ── */
function clearSessionData() {
  try {
    Object.keys(localStorage).forEach((key) => {
      if (/^(qem_|quantum|explore)/i.test(key)) localStorage.removeItem(key);
    });
    sessionStorage.clear();
  } catch {
    /* storage may be unavailable in some embeds — ignore */
  }
}

export default function SettingsPage() {
  const [guideMode, setGuideMode] = useState<GuideMode>("标准版");
  const [language, setLanguage] = useState<LanguageMode>("中文");
  const [fontScale, setFontScale] = useState<FontScale>("中");
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [caption, setCaption] = useState(true);
  const [voice, setVoice] = useState(true);
  const [returnReminder] = useState(true);

  const [feedback, setFeedback] = useState<string | null>(null);
  const [showReturn, setShowReturn] = useState(false);

  // Reserve global accessibility hooks — classes toggle only when the user opts in,
  // so default visuals of every other page are untouched.
  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
    return () => document.documentElement.classList.remove("high-contrast");
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.toggle("reduced-motion", reducedMotion);
    return () => document.documentElement.classList.remove("reduced-motion");
  }, [reducedMotion]);

  const flash = (message: string) => {
    setFeedback(message);
    window.setTimeout(() => setFeedback((current) => (current === message ? null : current)), 2200);
  };

  const restartTutorial = () => {
    // Tutorial entry is provided by the pre-home onboarding flow; reserved hook.
    flash("正在重新载入操作教程…");
  };

  const clearSession = () => {
    clearSessionData();
    flash("本次体验记录已清除");
  };

  const showReturnGuide = () => setShowReturn(true);

  const endExperience = () => {
    clearSessionData();
    flash("本次体验已结束，正在返回…");
    window.setTimeout(() => {
      try {
        window.location.reload();
      } catch {
        /* ignore */
      }
    }, 1100);
  };

  const onState = (on: boolean) => (on ? "已开启" : "未开启");

  const statusRows: Array<{ label: string; value: string; on?: boolean }> = [
    { label: "当前语言", value: language },
    { label: "讲解模式", value: guideMode },
    { label: "字幕", value: onState(caption), on: caption },
    { label: "语音", value: onState(voice), on: voice },
    { label: "高对比", value: onState(highContrast), on: highContrast },
    { label: "归还提醒", value: onState(returnReminder), on: returnReminder },
  ];

  return (
    <section
      className={`settings-layout settings-layout--font-${fontScale === "小" ? "sm" : fontScale === "大" ? "lg" : "md"}`}
      aria-labelledby="settings-title"
    >
      {/* ── Main: 4 modules ── */}
      <section className="settings-main-card">
        <header className="settings-heading">
          <h1 id="settings-title">设置</h1>
          <p>调整本次参观体验与离场选项</p>
        </header>

        <div className="settings-modules" aria-label="设置模块">
          {/* 1. 当前体验 */}
          <SettingModule icon="tune" title="当前体验" description="调整本次参观的语言与讲解深度">
            <div className="module-row">
              <span className="module-row__label">讲解模式</span>
              <PillGroup
                ariaLabel="讲解模式"
                options={["儿童版", "标准版", "深度版"]}
                value={guideMode}
                onChange={setGuideMode}
              />
            </div>
            <div className="module-row">
              <span className="module-row__label">语言</span>
              <PillGroup
                ariaLabel="语言"
                options={["中文", "English"]}
                value={language}
                onChange={setLanguage}
              />
            </div>
          </SettingModule>

          {/* 2. 显示辅助 */}
          <SettingModule icon="display" title="显示辅助" description="优化文字、对比度与动画舒适度">
            <div className="module-row">
              <span className="module-row__label">字号</span>
              <PillGroup
                ariaLabel="字号"
                options={["小", "中", "大"]}
                value={fontScale}
                onChange={setFontScale}
              />
            </div>
            <div className="module-row">
              <span className="module-row__label">高对比模式</span>
              <Toggle on={highContrast} onChange={setHighContrast} label="高对比模式" />
            </div>
            <div className="module-row">
              <span className="module-row__label">减少动效</span>
              <Toggle on={reducedMotion} onChange={setReducedMotion} label="减少动效" />
            </div>
          </SettingModule>

          {/* 3. 讲解辅助 */}
          <SettingModule icon="guide" title="讲解辅助" description="控制字幕、语音与操作教程">
            <div className="module-row">
              <span className="module-row__label">字幕</span>
              <Toggle on={caption} onChange={setCaption} label="字幕" />
            </div>
            <div className="module-row">
              <span className="module-row__label">语音</span>
              <Toggle on={voice} onChange={setVoice} label="语音" />
            </div>
            <div className="module-row">
              <span className="module-row__label">操作教程</span>
              <button className="module-btn" type="button" onClick={restartTutorial}>
                <SettingsGlyph name="replay" />
                重新查看教程
              </button>
            </div>
          </SettingModule>

          {/* 4. 离场与隐私 */}
          <SettingModule icon="device" title="离场与隐私" description="归还设备前清除本次体验记录">
            <div className="module-actions">
              <button className="module-btn" type="button" onClick={showReturnGuide}>
                <SettingsGlyph name="device" />
                归还指引
              </button>
              <button className="module-btn" type="button" onClick={clearSession}>
                <SettingsGlyph name="clear" />
                一键清除
              </button>
            </div>
            <button className="module-btn module-btn--primary" type="button" onClick={endExperience}>
              <SettingsGlyph name="logout" />
              结束体验
            </button>
            <button className="module-linkbtn" type="button" onClick={() => flash("隐私说明：本次设置与记录仅存于本机，归还后自动清除")}>
              <SettingsGlyph name="shield" />
              隐私说明
            </button>
          </SettingModule>
        </div>
      </section>

      {/* ── Side: single status overview ── */}
      <aside className="settings-side" aria-label="本次体验状态">
        <section className="settings-side-card status-card">
          <h2>本次体验状态</h2>
          <ul className="status-list">
            {statusRows.map((row) => (
              <li className="status-row" key={row.label}>
                <span className="status-row__label">{row.label}</span>
                <span className={`status-row__value${row.on === false ? " is-off" : ""}`}>
                  {row.on !== undefined && <i className="status-row__dot" aria-hidden="true" />}
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
          <button className="status-end-btn" type="button" onClick={endExperience}>
            结束本次体验并清除记录
          </button>
        </section>
      </aside>

      {/* ── Bottom hint (reused) ── */}
      <button className="guide-hint settings-hint" type="button" onClick={() => flash("设置仅影响本次 iPad 使用，归还后自动恢复默认")}>
        <span className="guide-hint__icon" aria-hidden="true">
          <span className="settings-hint-bulb">!</span>
        </span>
        <span>设置仅影响本次 iPad 使用，归还后将自动恢复默认状态</span>
        <Icon name="chevron-right" />
      </button>

      {/* ── Toast feedback ── */}
      {feedback && (
        <div className="settings-toast" role="status">
          {feedback}
        </div>
      )}

      {/* ── Return-guide modal ── */}
      {showReturn && (
        <div className="settings-modal" role="dialog" aria-modal="true" aria-label="设备归还指引">
          <button className="settings-modal__backdrop" type="button" aria-label="关闭" onClick={() => setShowReturn(false)} />
          <div className="settings-modal__panel">
            <header className="settings-modal__head">
              <h2>设备归还指引</h2>
              <button className="settings-modal__close" type="button" aria-label="关闭" onClick={() => setShowReturn(false)}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </header>
            <div className="return-route" aria-hidden="true">
              <div className="return-location return-location--current">
                <Icon name="location" />
                <small>当前位置</small>
              </div>
              <div className="return-path">
                <span />
                <i />
              </div>
              <div className="return-location return-location--desk">
                <Icon name="location" />
                <strong>服务台</strong>
                <small>归还点</small>
              </div>
            </div>
            <p className="return-note">离馆前请将 iPad 归还至一层服务台，工作人员将协助您结束体验。</p>
          </div>
        </div>
      )}
    </section>
  );
}
